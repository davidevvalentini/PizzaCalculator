/*
 * Formule del "Calcolapizza 2.1" de La Confraternita della Pizza
 * (http://laconfraternitadellapizza.forumfree.it/), riscritte senza jQuery.
 * L'ordine delle operazioni è lo stesso dell'originale, così gli arrotondamenti coincidono.
 *
 * Input (numeri):
 *   n panielli (intero >= 1), w peso paniello (g), h idratazione (50-100), s sale (g/L, 0-70),
 *   t ore totali (3-96), f ore in frigo (0 o fino a t-1), c temperatura ambiente (15-35),
 *   o olio/strutto/burro (g/L, 0-150), p pasta di riporto (% sull'impasto, 0-pmax),
 *   ptype 1 stanca | 2 normale | 3 vivace, teglia true/false
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.PizzaCalc = factory();
})(this, function () {
  "use strict";

  function compute(inp) {
    var r = inp.n, e = inp.w, t = inp.h, l = inp.s, i = inp.t, s = inp.f;
    var p = inp.c, d = inp.o, v = inp.p, o = inp.teglia ? 1 : 0;
    var g = { 1: 1 / 300, 2: 0.005, 3: 0.01 }[inp.ptype];

    var n = p * (1 - 0.25 * o);                         // temperatura "efficace": in teglia -25%
    var c = i - 9 * s / 10;                             // ore efficaci: il frigo conta un decimo
    var N = 81.4206918743428 + 78.3939060802556 * Math.log(i);
    var forza = 10 * Math.round(N / 10);                // W indicativo della farina
    var h2 = 2250 * (1 + l / 200) * (1 + d / 300) /
      ((4.2 * t - 80 - 0.0305 * t * t) * Math.pow(n, 2.5) * Math.pow(c, 1.2));
    var u = r * e;                                      // impasto totale
    var C = t * (l + d) + 1e3 * (t + 100);
    var F = (1e5 * h2 * 100 / (1e5 * h2 + C * g)).toString().match(/^\d+(?:\.\d{0,2})?/);
    var pmax = F ? Number(F[0]) : NaN;                  // massimo % di pasta di riporto

    var f = u * v / 100;                                // grammi di pasta di riporto
    var k = 1e5 * (u - f) / C;                          // farina
    var S = 1e3 * t * (u - f) / C;                      // acqua
    var x = l * t * (u - f) / C;                        // sale
    var w = d * t * (u - f) / C;                        // olio/strutto/burro
    var b = (k * h2 - g * f).toFixed(2);                // lievito di birra fresco
    return {
      total: u, pmax: pmax, forza: forza,
      flour: k, water: S, salt: x, fat: w, riporto: f, yeast: Number(b),
      str: { flour: k.toFixed(0), water: S.toFixed(0), salt: x.toFixed(0), fat: w.toFixed(0), riporto: f.toFixed(0), yeast: b }
    };
  }

  /* Campi non validi, con gli id e le regole del modulo originale. */
  function validate(inp) {
    var bad = [];
    var r = inp.n, e = inp.w, t = inp.h, l = inp.s, i = inp.t, s = inp.f, p = inp.c, d = inp.o, v = inp.p;
    if (isNaN(r) || r < 1 || r % 1 != 0) bad.push("panielli");
    if (isNaN(e) || e <= 0) bad.push("peso");
    if (isNaN(t) || t < 50 || t > 100) bad.push("idro");
    if (isNaN(l) || l < 0 || l > 70) bad.push("salepl");
    if (isNaN(i) || i < 3 || i > 96) bad.push("liev");
    if ((isNaN(s) || s < 0 || s > i - 1) && 0 != s) bad.push("frigo");
    if (isNaN(p) || p < 15 || p > 35) bad.push("gradi");
    if (isNaN(d) || d < 0 || d > 150) bad.push("grassipl");
    var pmax = compute(inp).pmax;
    if (isNaN(v) || v < 0 || v > pmax) bad.push("pdrp");
    return bad;
  }

  /* Le stesse stringhe che l'originale scrive nei risultati ("-" se i dati non sono validi). */
  function originalOutput(inp) {
    var bad = validate(inp);
    if (bad.length) return { bad: bad, farina: "-", aqua: "-", sale: "-", grassi: "-", pdr: "-", lievito: "-" };
    var r = compute(inp);
    return {
      bad: bad,
      farina: r.str.flour + " g", aqua: r.str.water + " g", sale: r.str.salt + " g",
      grassi: r.str.fat + " g", pdr: r.str.riporto + " g", lievito: r.str.yeast.replace(".", ",") + " g"
    };
  }

  return { compute: compute, validate: validate, originalOutput: originalOutput };
});
