#!/usr/bin/env node
/*
 * Esegue lo script ORIGINALE del Calcolapizza 2.1 (calcolapizza2.js) con un DOM finto
 * e salva i suoi risultati in tests/expected.json.
 *
 * Uso: node tools/generate-expected.js /percorso/a/calcolapizza2.js
 *
 * Lo script originale non fa parte di questo repository: serve solo per rigenerare i dati di riferimento.
 */
"use strict";
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var src = process.argv[2];
if (!src) { console.error("Uso: node tools/generate-expected.js /percorso/a/calcolapizza2.js"); process.exit(1); }
var code = fs.readFileSync(src, "utf8");

function runOriginal(inputs) {
  var vals = {
    panielli: inputs.panielli, peso: inputs.peso, idro: inputs.idro, salepl: inputs.salepl,
    liev: inputs.liev, frigo: inputs.frigo, gradi: inputs.gradi, grassipl: inputs.grassipl,
    pdrp: inputs.pdrp, pdrt: inputs.pdrt, teglia: inputs.teglia
  };
  var out = {}, bad = {}, handler = null;
  function $(sel) {
    var id = typeof sel === "string" ? sel.replace(/^#/, "") : "";
    var o = {
      val: function () { return /pdrt/.test(sel) ? vals.pdrt : vals[id]; },
      is: function () { return vals.teglia; },
      parent: function () {
        return {
          addClass: function () { bad[id] = true; },
          removeClass: function () { delete bad[id]; },
          attr: function () {}
        };
      },
      html: function (v) { out[id] = v; },
      click: function () {}, vegas: function () {},
      keyup: function (fn) { handler = fn; },
      load: function (fn) { fn(); }
    };
    return o;
  }
  var ctx = { $: $, window: {}, console: { log: function () {} } };
  vm.runInNewContext(code, ctx);
  handler(); // ricalcola con i valori correnti
  return { out: out, bad: Object.keys(bad).sort() };
}

/* generatore pseudo-casuale con seme fisso, così il file è riproducibile */
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
var rnd = mulberry32(20261014);
function pick(a) { return a[Math.floor(rnd() * a.length)]; }
function between(a, b, dec) { var v = a + rnd() * (b - a); return String(Number(v.toFixed(dec))); }

var cases = [];
function add(c) { cases.push(c); }

/* casi validi su tutto l'intervallo */
for (var i = 0; i < 2500; i++) {
  var liev = pick([3, 4, 6, 8, 12, 16, 24, 36, 48, 72, 96, Math.round(3 + rnd() * 93)]);
  var frigo = pick([0, 0, Math.floor(liev / 2), liev - 1, Math.floor(rnd() * liev)]);
  if (frigo > liev - 1) frigo = Math.max(0, liev - 1);
  add({
    panielli: String(pick([1, 2, 3, 4, 6, 8, 10, 12, 20])),
    peso: pick([String(pick([100, 120, 150, 180, 200, 230, 250, 270, 300, 500, 550, 600])), between(80, 700, 1)]),
    idro: pick([String(pick([50, 55, 58, 60, 62, 65, 68, 70, 75, 78, 80, 85, 90, 100])), between(50, 100, 1)]),
    salepl: pick([String(pick([0, 20, 25, 40, 45, 50, 55, 60, 70])), between(0, 70, 1)]),
    liev: String(liev), frigo: String(frigo),
    gradi: pick([String(pick([15, 16, 18, 20, 22, 24, 26, 28, 30, 35])), between(15, 35, 1)]),
    grassipl: pick([String(pick([0, 0, 10, 20, 25, 30, 50, 100, 150])), between(0, 150, 1)]),
    pdrp: pick(["0", "0", "0", between(0, 7, 2), between(0, 3, 1)]),
    pdrt: pick(["1", "2", "3"]),
    teglia: rnd() < 0.5
  });
}
/* casi con virgola decimale, come li accetta l'originale */
for (i = 0; i < 100; i++) {
  add({ panielli: "4", peso: "250", idro: between(50, 100, 1).replace(".", ","), salepl: "50", liev: "24", frigo: "0",
        gradi: between(15, 35, 1).replace(".", ","), grassipl: "0", pdrp: "0", pdrt: "2", teglia: rnd() < 0.5 });
}
/* casi non validi: devono dare "-" e segnalare gli stessi campi */
var invalid = [
  { panielli: "0" }, { panielli: "2.5" }, { panielli: "abc" }, { peso: "0" }, { peso: "-5" },
  { idro: "49" }, { idro: "101" }, { salepl: "-1" }, { salepl: "71" }, { liev: "2" }, { liev: "97" },
  { frigo: "-1" }, { frigo: "24" }, { frigo: "30" }, { gradi: "14" }, { gradi: "36" },
  { grassipl: "-1" }, { grassipl: "151" }, { pdrp: "-1" }, { pdrp: "50" }, { pdrp: "x" }
];
invalid.forEach(function (o) {
  add(Object.assign({ panielli: "4", peso: "250", idro: "65", salepl: "50", liev: "24", frigo: "0",
                      gradi: "20", grassipl: "0", pdrp: "0", pdrt: "2", teglia: false }, o));
});
/* valori di default dell'originale */
add({ panielli: "1", peso: "200", idro: "65", salepl: "50", liev: "24", frigo: "0", gradi: "20", grassipl: "0", pdrp: "0", pdrt: "2", teglia: false });

var result = cases.map(function (c) { var r = runOriginal(c); return { input: c, output: r.out, bad: r.bad }; });
var dest = path.join(__dirname, "..", "tests", "expected.json");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, JSON.stringify(result));
console.log("Scritti " + result.length + " casi in " + dest);
console.log("Default originale:", JSON.stringify(result[result.length - 1].output));
