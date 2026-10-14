#!/usr/bin/env node
/* Confronta calc.js con i risultati dello script originale salvati in tests/expected.json. */
"use strict";
var fs = require("fs");
var path = require("path");
var PizzaCalc = require("../calc.js");

var cases = JSON.parse(fs.readFileSync(path.join(__dirname, "expected.json"), "utf8"));
var parse = function (s) { return parseFloat(String(s).replace(",", ".")); };
var fails = 0, valid = 0, invalid = 0;

cases.forEach(function (c, idx) {
  var i = c.input;
  var inp = {
    n: parse(i.panielli), w: parse(i.peso), h: parse(i.idro), s: parse(i.salepl), t: parse(i.liev),
    f: parse(i.frigo), c: parse(i.gradi), o: parse(i.grassipl), p: parse(i.pdrp),
    ptype: parseFloat(i.pdrt), teglia: !!i.teglia
  };
  var mine = PizzaCalc.originalOutput(inp);
  var exp = c.output;
  var same = ["farina", "aqua", "sale", "grassi", "pdr", "lievito"].every(function (k) { return mine[k] === exp[k]; }) &&
    JSON.stringify(mine.bad.slice().sort()) === JSON.stringify(c.bad);
  if (c.bad.length) invalid++; else valid++;
  if (!same) {
    fails++;
    if (fails <= 10) console.log("DIVERSO #" + idx, JSON.stringify(i), "\n  originale:", JSON.stringify(exp), c.bad, "\n  mio:      ", JSON.stringify(mine));
  }
});

console.log(cases.length + " casi (" + valid + " validi, " + invalid + " non validi), differenze: " + fails);
process.exit(fails ? 1 : 0);
