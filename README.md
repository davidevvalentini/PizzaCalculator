# PizzaCalculator

Calcolatore di impasti per pizza, in italiano e in inglese.
Pizza dough calculator, in Italian and English.

## Come funziona

All'apertura un wizard in 5 passi chiede tipo di pizza, quantità, tempo di lievitazione, temperatura di casa e pasta di riporto. Poi mostra il calcolatore con tutti i valori modificabili.

- Farina, acqua, sale, olio, pasta di riporto e lievito di birra fresco, arrotondati come nell'originale
- Preset: Napoletana, Tonda romana (in teglia), Teglia romana (in teglia), Pinsa
- Stessi limiti dell'originale: idratazione 50-100%, sale 0-70 g/L, olio 0-150 g/L, 3-96 ore, 15-35 °C, frigo al massimo le ore totali meno 1, pasta di riporto fino al massimo calcolato
- Lingua IT / EN e tema chiaro/scuro automatici

## Uso

Apri `index.html` nel browser, oppure pubblica la cartella con GitHub Pages. Non serve nessuna build.

## Test

```
npm test
```

Confronta `calc.js` con 2.622 risultati dello script originale (`tests/expected.json`): valori validi, valori non validi e virgole decimali. Per rigenerare i dati serve il file `calcolapizza2.js` dell'originale, che non è incluso nel repository:

```
node tools/generate-expected.js /percorso/a/calcolapizza2.js
```
