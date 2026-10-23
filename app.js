(function(){
"use strict";

/* ---------- translations ---------- */
var I18N={
it:{
  restart:"Rifai il wizard", copy:"Copia ricetta", copied:"Copiata", reset:"Ripristina",
  stepOf:"Passo {a} di {b}", back:"Indietro", next:"Avanti", done:"Calcola l'impasto",
  s0:"Pizza", s1:"Quantità", s2:"Tempo", s3:"Ambiente", s4:"Pasta di riporto",
  q0:"Che pizza vuoi fare?", q0l:"Scelgo i valori di partenza, poi li puoi modificare.",
  p_napoletana:"Napoletana", d_napoletana:"Cornicione alto, idratazione media, poche ore",
  p_tonda:"Tonda romana", d_tonda:"Sottile e croccante, con olio, in teglia",
  p_teglia:"Teglia romana", d_teglia:"Alta e alveolata, idratazione alta, lunga maturazione",
  p_pinsa:"Pinsa", d_pinsa:"Idratazione alta, impasto morbido, lunga maturazione",
  p_custom:"Personalizzata", d_custom:"Parti da una base neutra e imposti tutto tu",
  q1:"Quante pizze?", q1l:"Indica il numero di panielli e il peso di ciascuno.",
  l_n:"Numero di panielli", l_w:"Peso di ogni paniello",
  teglia:"Pizza in teglia", tegliaD:"Compensa lo spessore e la cottura più lenta: il lievito aumenta.",
  q2:"Quando vuoi mangiare la pizza?", q2l:"Più tempo lievita l'impasto, meno lievito serve.",
  t_sera:"Stasera", td_sera:"Circa 8 ore a temperatura ambiente",
  t_domani:"Domani", td_domani:"Circa 24 ore, in parte in frigorifero",
  t_due:"Fra due giorni", td_due:"48 ore, soprattutto in frigorifero",
  t_custom:"Scelgo io le ore", td_custom:"Imposti ore totali e ore in frigo",
  q3:"Com'è la temperatura in casa?", q3l:"Serve a calcolare quanto lievita l'impasto fuori dal frigo.",
  c_fresco:"Fresco", cd_fresco:"Circa 16 °C",
  c_normale:"Normale", cd_normale:"Circa 20 °C",
  c_caldo:"Caldo", cd_caldo:"Circa 26 °C",
  c_custom:"Lo so con precisione", cd_custom:"Inserisci i gradi (da 15 a 35)",
  q4:"Hai della pasta di riporto?", q4l:"È un pezzo d'impasto del giorno prima. Se non ce l'hai, scegli No.",
  r_no:"No", rd_no:"Faccio l'impasto da zero", r_si:"Sì", rd_si:"Uso un po' d'impasto già lievitato",
  ptype:"Com'è la pasta di riporto", stanca:"Stanca", normale:"Normale", vivace:"Vivace",
  c_qty:"Quante pizze", c_dough:"Impasto", c_rise:"Lievitazione", c_old:"Pasta di riporto",
  l_h:"Idratazione", h_h:"Acqua rispetto alla farina, da 50 a 100%. Fino al 65% è facile, oltre il 75% è per esperti.",
  l_s:"Sale", h_s:"Grammi per litro d'acqua, da 0 a 70.",
  l_o:"Olio, strutto o burro", h_o:"Grammi per litro d'acqua, da 0 a 150. Metti 0 per non usarlo.",
  l_t:"Ore totali", h_t:"Da 3 a 96 ore.", l_f:"Di cui in frigorifero", h_f:"Al massimo le ore totali meno 1. Il resto lievita fuori dal frigo.",
  l_c:"Temperatura ambiente", h_c:"Da 15 a 35 °C.", l_p:"Quantità", h_p:"Percentuale sull'impasto totale. Con questi dati il massimo è {x}%. Metti 0 per non usarla.",
  yourDough:"Il tuo impasto", ing:"Ingredienti", total:"Impasto totale",
  flour:"Farina", water:"Acqua", salt:"Sale", oil:"Olio / strutto / burro", old:"Pasta di riporto", yeast:"Lievito di birra fresco",
  ofFlour:"{x}% sulla farina", ofDough:"{x}% sull'impasto", flourSub:"100%", flourSubOld:"100% (esclusa la pasta di riporto)",
  times:"Tempi", room:"ambiente", fridge:"frigo", fridgeFull:"in frigorifero",
  tlroom:"{h} h a temperatura ambiente ({c} °C)", tlfridge:"{h} h in frigorifero", tlnote:"Tieni fuori l'impasto un po' prima di stenderlo.",
  q1lt:"Indica le misure della teglia e quante ne riempi: il peso dell'impasto lo propongo io.",
  l_pl:"Lunghezza della teglia", l_pw:"Larghezza della teglia", l_nt:"Numero di teglie", l_wt:"Impasto per teglia",
  h_wt:"Per una teglia {d} cm servono circa {a}–{b} g di impasto.", use_sug:"Usa {w} g consigliati", pan_sizes:"Misure comuni",
  panPill1:"1 teglia {d} cm · {w} g", panPillN:"{n} teglie {d} cm · {w} g l'una", perPan:"Farina per teglia", recipeHeadPan:"Impasto per teglia {d} cm: {n} × {w} g",
  dry:"Lievito secco (circa)", perBall:"Farina per ogni paniello", forza:"Forza farina indicativa",
  note:"Le quantità seguono le formule del Calcolapizza 2.1 e sono arrotondate come nell'originale.",
  noteTeglia:"In teglia il lievito aumenta, come nel Calcolapizza 2.1. Le quantità sono arrotondate come nell'originale.",
  credit:"Formule dal Calcolapizza 2.1 de",
  recipeHead:"Impasto per {n} panielli da {w} g", recipeRise:"Lievitazione: {t} h totali ({f} h in frigo, ambiente {c} °C)",
  ballsPill:"{n} × {w} g", hydPill:"Idratazione {h}%", risePill:"{t} h · {f} in frigo"
},
en:{
  restart:"Restart wizard", copy:"Copy recipe", copied:"Copied", reset:"Reset",
  stepOf:"Step {a} of {b}", back:"Back", next:"Next", done:"Calculate dough",
  s0:"Pizza", s1:"Quantity", s2:"Timing", s3:"Room", s4:"Old dough",
  q0:"What pizza are you making?", q0l:"Pick a starting point, you can change every value later.",
  p_napoletana:"Neapolitan", d_napoletana:"Puffy rim, medium hydration, a few hours",
  p_tonda:"Roman round (tonda)", d_tonda:"Thin and crisp, with oil, baked in a pan",
  p_teglia:"Roman pan pizza (teglia)", d_teglia:"Tall and airy, high hydration, long rise",
  p_pinsa:"Pinsa", d_pinsa:"High hydration, soft dough, long rise",
  p_custom:"Custom", d_custom:"Start from a neutral base and set everything yourself",
  q1:"How many pizzas?", q1l:"Enter the number of dough balls and the weight of each.",
  l_n:"Number of dough balls", l_w:"Weight of each ball",
  teglia:"Pan pizza", tegliaD:"Makes up for the thickness and slower bake: adds yeast.",
  q2:"When do you want to eat?", q2l:"The longer the dough rises, the less yeast it needs.",
  t_sera:"Tonight", td_sera:"About 8 hours at room temperature",
  t_domani:"Tomorrow", td_domani:"About 24 hours, partly in the fridge",
  t_due:"In two days", td_due:"48 hours, mostly in the fridge",
  t_custom:"I'll set the hours", td_custom:"Set total hours and fridge hours",
  q3:"How warm is your kitchen?", q3l:"Used to work out how fast the dough rises outside the fridge.",
  c_fresco:"Cool", cd_fresco:"About 16 °C / 61 °F",
  c_normale:"Normal", cd_normale:"About 20 °C / 68 °F",
  c_caldo:"Warm", cd_caldo:"About 26 °C / 79 °F",
  c_custom:"I know the exact value", cd_custom:"Enter the degrees (15 to 35 °C)",
  q4:"Do you have old dough?", q4l:"A piece of yesterday's dough. If you don't, choose No.",
  r_no:"No", rd_no:"I make the dough from scratch", r_si:"Yes", rd_si:"I add some already-risen dough",
  ptype:"How active is the old dough", stanca:"Tired", normale:"Normal", vivace:"Lively",
  c_qty:"How many pizzas", c_dough:"Dough", c_rise:"Rising", c_old:"Old dough",
  l_h:"Hydration", h_h:"Water relative to flour, 50 to 100%. Up to 65% is easy, above 75% is for experts.",
  l_s:"Salt", h_s:"Grams per litre of water, 0 to 70.",
  l_o:"Oil, lard or butter", h_o:"Grams per litre of water, 0 to 150. Use 0 to skip it.",
  l_t:"Total hours", h_t:"From 3 to 96 hours.", l_f:"Of which in the fridge", h_f:"At most the total hours minus 1. The rest rises outside the fridge.",
  l_c:"Room temperature", h_c:"From 15 to 35 °C.", l_p:"Amount", h_p:"Percentage of the total dough. With these values the maximum is {x}%. Use 0 to skip it.",
  yourDough:"Your dough", ing:"Ingredients", total:"Total dough",
  flour:"Flour", water:"Water", salt:"Salt", oil:"Oil / lard / butter", old:"Old dough", yeast:"Fresh yeast",
  ofFlour:"{x}% of flour", ofDough:"{x}% of dough", flourSub:"100%", flourSubOld:"100% (old dough not included)",
  times:"Timing", room:"room", fridge:"fridge", fridgeFull:"in the fridge",
  tlroom:"{h} h at room temperature ({c} °C)", tlfridge:"{h} h in the fridge", tlnote:"Take the dough out a while before shaping it.",
  q1lt:"Enter the pan size and how many you fill: I suggest the dough weight.",
  l_pl:"Pan length", l_pw:"Pan width", l_nt:"Number of pans", l_wt:"Dough per pan",
  h_wt:"A {d} cm pan takes about {a}–{b} g of dough.", use_sug:"Use the suggested {w} g", pan_sizes:"Common sizes",
  panPill1:"1 pan {d} cm · {w} g", panPillN:"{n} pans {d} cm · {w} g each", perPan:"Flour per pan", recipeHeadPan:"Dough for {d} cm pan: {n} × {w} g",
  dry:"Dry yeast (approx.)", perBall:"Flour per dough ball", forza:"Suggested flour strength",
  note:"Amounts follow the formulas of Calcolapizza 2.1 and are rounded as in the original.",
  noteTeglia:"For pan pizza the yeast goes up, as in Calcolapizza 2.1. Amounts are rounded as in the original.",
  credit:"Formulas from Calcolapizza 2.1 by",
  recipeHead:"Dough for {n} balls of {w} g", recipeRise:"Rise: {t} h total ({f} h in the fridge, room {c} °C)",
  ballsPill:"{n} × {w} g", hydPill:"Hydration {h}%", risePill:"{t} h · {f} in fridge"
}};

/* ---------- state ---------- */
var BASE={n:4,w:250,h:62,s:50,o:0,t:24,f:20,c:20,p:0,ptype:2,teglia:false,pl:40,pw:30,wauto:true};
var PRESETS={
  napoletana:{n:4,w:250,h:62,s:50,o:0,t:24,f:20,teglia:false},
  tonda:{n:4,w:230,h:58,s:45,o:0,t:12,f:0,teglia:false},
  teglia:{n:1,w:635,h:70,s:50,o:0,t:48,f:44,teglia:true},
  pinsa:{n:4,w:270,h:80,s:40,o:0,t:48,f:44,teglia:false},
  custom:{}
};
/* partenza di chi apre l'app la prima volta: pizza in teglia alla romana */
var DEFAULTS=Object.assign({},BASE,PRESETS.teglia);
var TIMES={sera:{t:8,f:0},domani:{t:24,f:20},due:{t:48,f:44}};
var TEMPS={fresco:16,normale:20,caldo:26};
/* limiti del Calcolapizza 2.1; f e p dipendono dagli altri valori */
var LIMITS={n:[1,1000],w:[1,10000],h:[50,100],s:[0,70],o:[0,150],t:[3,96],c:[15,35],pl:[10,100],pw:[10,100]};
var SLIDER={n:[1,40,1],w:[80,600,5],h:[50,100,1],s:[0,70,1],o:[0,150,1],t:[3,96,1],c:[15,35,1],pl:[20,80,1],pw:[20,80,1]};
var HINT={h:"h_h",s:"h_s",o:"h_o",t:"h_t",f:"h_f",c:"h_c",p:"h_p"};
var NSTEPS=5, KEY="pizzacalculator.v4";

var S=Object.assign({},DEFAULTS,{lang:null,done:false,step:0,preset:"teglia",time:"due",temp:"normale",riporto:false});
try{var raw=localStorage.getItem(KEY); if(raw){S=Object.assign(S,JSON.parse(raw));}}catch(e){}
if(!S.lang){S.lang=(navigator.language||"it").slice(0,2)==="it"?"it":"en";}
if(S.lang!=="it"&&S.lang!=="en")S.lang="it";

function t(k,v){var s=(I18N[S.lang]&&I18N[S.lang][k])||I18N.it[k]||k; if(v){Object.keys(v).forEach(function(x){s=s.split("{"+x+"}").join(v[x]);});} return s;}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
function $(i){return document.getElementById(i);}
function fmt(x,d){return x.toLocaleString(S.lang==="it"?"it-IT":"en-US",{minimumFractionDigits:d,maximumFractionDigits:d});}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

/* ---------- limits ---------- */
function pmax(){var m=PizzaCalc.compute(S).pmax; return isNaN(m)?0:m;}
function lim(k){
  if(k==="f")return [0,Math.max(0,S.t-1)];
  if(k==="p")return [0,pmax()];
  return LIMITS[k];
}
function clamp(k,v){
  var m=lim(k); v=Number(v); if(!isFinite(v))v=m[0];
  if(k==="n")v=Math.round(v);
  return Math.min(m[1],Math.max(m[0],v));
}
function enforce(){
  S.f=clamp("f",S.f);
  S.p=clamp("p",S.p);
}

/* ---------- field builders ---------- */
function hintText(k){
  if(k==="w"){if(!S.teglia)return "";var r=sugRange();return t("h_wt",{d:dimsTxt(),a:fmt(r[0],0),b:fmt(r[1],0)});}
  return HINT[k]?t(HINT[k],k==="p"?{x:fmt(pmax(),2)}:null):"";
}
function sliderRange(k){
  if(k==="f")return [0,Math.max(1,S.t-1),1];
  if(k==="p")return [0,Math.max(0.1,pmax()),0.1];
  if(k==="w")return [S.teglia?200:80,Math.max(S.teglia?2000:600,Math.ceil(S.w/50)*50),5];
  return SLIDER[k];
}
function field(k,unit,labelKey){
  var r=sliderRange(k), label=t(labelKey||("l_"+k)), step=k==="n"?"1":"any", m=lim(k);
  var hint=hintText(k);
  return '<div class="field"><label for="'+k+'">'+label+'</label>'+
    '<div class="num"><input id="'+k+'" data-k="'+k+'" type="number" inputmode="decimal" min="'+m[0]+'" max="'+m[1]+'" step="'+step+'" value="'+S[k]+'"><em>'+unit+'</em></div>'+
    (hint?'<small id="hint_'+k+'">'+hint+'</small>':'')+
    '<input data-k="'+k+'" type="range" min="'+r[0]+'" max="'+r[1]+'" step="'+r[2]+'" value="'+S[k]+'" aria-label="'+esc(label)+'"></div>';
}
function stepper(k,unit,step,labelKey){
  var m=lim(k), hint=hintText(k);
  return '<div class="qrow"><label for="'+k+'">'+t(labelKey||("l_"+k))+'</label><div class="step">'+
    '<button type="button" data-act="dec" data-k="'+k+'" data-step="'+step+'" aria-label="−">−</button>'+
    '<input id="'+k+'" data-k="'+k+'" type="number" inputmode="numeric" min="'+m[0]+'" max="'+m[1]+'" step="'+(k==="n"?1:"any")+'" value="'+S[k]+'">'+
    '<button type="button" data-act="inc" data-k="'+k+'" data-step="'+step+'" aria-label="+">+</button><em>'+unit+'</em></div>'+
    (hint?'<small class="shint" id="hint_'+k+'">'+hint+'</small>':'')+'</div>';
}
/* aggiorna i valori e i limiti dei campi senza ricostruire la pagina */
function syncFields(except){
  Array.prototype.forEach.call(document.querySelectorAll("[data-k]"),function(el){
    var k=el.dataset.k;
    if(el.tagName!=="INPUT")return;
    if(el.type==="range"){var r=sliderRange(k);el.min=r[0];el.max=r[1];el.step=r[2];}
    else{var m=lim(k);el.min=m[0];el.max=m[1];}
    if(el!==except)el.value=S[k];
  });
  ["f","p","w"].forEach(function(k){var h=$("hint_"+k);if(h)h.textContent=hintText(k);});
}
/* ---------- teglia: misure e peso consigliato ---------- */
/* regola: teglia 30 × 40 cm (1200 cm²) = 620-650 g di impasto, quindi circa 0,53 g per cm² */
var RATE=635/1200, RATE_MIN=620/1200, RATE_MAX=650/1200;
function r5(x){return Math.max(5,Math.round(x/5)*5);}
function sugW(){return r5(S.pl*S.pw*RATE);}
function sugRange(){return [r5(S.pl*S.pw*RATE_MIN),r5(S.pl*S.pw*RATE_MAX)];}
function nn(x){return x.toLocaleString(S.lang==="it"?"it-IT":"en-US",{maximumFractionDigits:1});}
function dimsTxt(){return nn(Math.min(S.pl,S.pw))+" × "+nn(Math.max(S.pl,S.pw));}
function sugHTML(){
  if(!S.teglia||S.w===sugW())return "";
  return '<button type="button" class="chipb sm" data-act="usesug">'+t("use_sug",{w:fmt(sugW(),0)})+'</button>';
}
function sizesHTML(){
  return '<div class="chiprow"><span class="eyebrow">'+t("pan_sizes")+'</span>'+["30x40","40x60","25x35"].map(function(x){
    return '<button type="button" class="chipb sm" data-act="pansize" data-v="'+x+'">'+x.replace("x"," × ")+'</button>';}).join("")+'</div>';
}
function wizQty(){
  if(!S.teglia)return stepper("n","",1,"l_n")+stepper("w","g",10,"l_w");
  return stepper("pl","cm",1)+stepper("pw","cm",1)+sizesHTML()+stepper("n","",1,"l_nt")+stepper("w","g",5,"l_wt")+'<div class="sug" id="wsug">'+sugHTML()+'</div>';
}
function calcQty(){
  if(!S.teglia)return field("n","","l_n")+field("w","g","l_w");
  return field("pl","cm")+field("pw","cm")+sizesHTML()+field("n","","l_nt")+field("w","g","l_wt")+'<div class="sug" id="wsug">'+sugHTML()+'</div>';
}
function refreshQty(){var el=$("qty");if(el)el.innerHTML=S.done?calcQty():wizQty();}
function refreshSug(){var el=$("wsug");if(el)el.innerHTML=sugHTML();}
function setVal(k,v,except){
  S[k]=clamp(k,v);
  if(S.teglia){
    if(k==="w")S.wauto=(S.w===sugW());                       // peso scelto a mano
    if((k==="pl"||k==="pw")&&S.wauto)S.w=clamp("w",sugW());   // peso che segue la teglia
  }
  enforce();
  syncFields(except);
  refreshSug();
  save();
  if(S.done)updateResults();
}

/* ---------- wizard ---------- */
function opt(group,key,title,desc,pressed){
  return '<button type="button" class="opt" data-act="'+group+'" data-v="'+key+'" aria-pressed="'+pressed+'"><b>'+esc(title)+'</b><span>'+esc(desc)+'</span></button>';
}
function ptypeSeg(){
  return '<div class="segfull" role="group">'+[["stanca",1],["normale",2],["vivace",3]].map(function(x){
    return '<button type="button" data-act="ptype" data-v="'+x[1]+'" aria-pressed="'+(S.ptype===x[1])+'">'+t(x[0])+'</button>';}).join("")+'</div>';
}
function renderWizard(){
  var st=S.step, h="";
  h+='<section class="wizard"><div class="prog" aria-hidden="true">';
  for(var i=0;i<NSTEPS;i++)h+='<i class="'+(i<=st?"on":"")+'"></i>';
  h+='</div><div class="eyebrow">'+t("stepOf",{a:st+1,b:NSTEPS})+' · '+t("s"+st)+'</div>';
  h+='<h2>'+t("q"+st)+'</h2><p class="lead" id="lead">'+t(st===1&&S.teglia?"q1lt":"q"+st+"l")+'</p>';
  if(st===0){
    h+='<div class="opts">'+["napoletana","tonda","teglia","pinsa","custom"].map(function(p){return opt("preset",p,t("p_"+p),t("d_"+p),S.preset===p);}).join("")+'</div>';
  }else if(st===1){
    h+='<div class="card"><label class="switch top" for="teglia"><input id="teglia" type="checkbox"'+(S.teglia?" checked":"")+'><div><b>'+t("teglia")+'</b><span>'+t("tegliaD")+'</span></div></label><div id="qty">'+wizQty()+'</div></div>';
  }else if(st===2){
    h+='<div class="opts">'+["sera","domani","due","custom"].map(function(k){return opt("time",k,t("t_"+k),t("td_"+k),S.time===k);}).join("")+'</div>';
    if(S.time==="custom")h+='<div class="card">'+field("t","h")+field("f","h")+'</div>';
  }else if(st===3){
    h+='<div class="opts">'+["fresco","normale","caldo","custom"].map(function(k){return opt("temp",k,t("c_"+k),t("cd_"+k),S.temp===k);}).join("")+'</div>';
    if(S.temp==="custom")h+='<div class="card">'+field("c","°C")+'</div>';
  }else{
    h+='<div class="opts">'+opt("riporto","no",t("r_no"),t("rd_no"),!S.riporto)+opt("riporto","si",t("r_si"),t("rd_si"),S.riporto)+'</div>';
    if(S.riporto)h+='<div class="card">'+field("p","%")+'<div class="qrow"><label>'+t("ptype")+'</label>'+ptypeSeg()+'</div></div>';
  }
  h+='<div class="navrow">'+(st>0?'<button type="button" class="btn ghost" data-act="back">'+t("back")+'</button>':"")+
     '<button type="button" class="btn" data-act="next">'+(st===NSTEPS-1?t("done"):t("next"))+'</button></div></section>';
  $("root").innerHTML=h;
}

/* ---------- calculator ---------- */
function renderApp(){
  var h='<div class="pills" id="pills"></div><div class="grid"><div class="cards">'+
    '<div class="card"><h3>'+t("c_qty")+'</h3><label class="switch top" for="teglia"><input id="teglia" type="checkbox"'+(S.teglia?" checked":"")+'><div><b>'+t("teglia")+'</b><span>'+t("tegliaD")+'</span></div></label><div id="qty">'+calcQty()+'</div></div>'+
    '<div class="card"><h3>'+t("c_dough")+'</h3>'+field("h","%")+field("s","g/L")+field("o","g/L")+'</div>'+
    '<div class="card"><h3>'+t("c_rise")+'</h3>'+field("t","h")+field("f","h")+field("c","°C")+'</div>'+
    '<div class="card"><h3>'+t("c_old")+'</h3>'+field("p","%")+'<div class="qrow" id="ptw"><label>'+t("ptype")+'</label>'+ptypeSeg()+'</div></div>'+
    '</div><aside class="bench" aria-label="'+esc(t("ing"))+'"><div class="sum"><h2 style="margin-right:auto">'+t("ing")+'</h2></div>'+
    '<div class="sum"><span>'+t("total")+' <b id="tot"></b></span><span>'+t("forza")+' <b id="forza"></b></span></div>'+
    '<ul class="ing" id="ing"></ul><div class="stack" id="stack" aria-hidden="true"></div>'+
    '<div class="time"><h3>'+t("times")+'</h3><div class="tl" id="tl"></div><div class="tll" id="tll"></div><p id="tlc"></p></div>'+
    '<div class="alt"><div><span>'+t("dry")+'</span><b id="dry"></b></div><div><span id="pfl">'+t("perBall")+'</span><b id="pf"></b></div></div>'+
    '<div class="actions"><button type="button" class="btn" id="copy">'+t("copy")+'</button><button type="button" class="btn ghost" id="reset">'+t("reset")+'</button></div>'+
    '<p class="note" id="cn"></p></aside></div>';
  $("root").innerHTML=h;
  updateResults();
}
var ROWS=[];
function updateResults(){
  var r=PizzaCalc.compute(S), str=r.str;
  var yeastTxt=S.lang==="it"?str.yeast.replace(".",","):str.yeast;
  $("pills").innerHTML='<span class="eyebrow">'+t("yourDough")+'</span>'+
    (S.preset&&S.preset!=="custom"?'<span class="pill main">'+t("p_"+S.preset)+'</span>':"")+
    '<span class="pill">'+(S.teglia?t(S.n===1?"panPill1":"panPillN",{n:S.n,d:dimsTxt(),w:S.w}):t("ballsPill",{n:S.n,w:S.w}))+'</span><span class="pill">'+t("hydPill",{h:S.h})+'</span>'+
    '<span class="pill">'+t("risePill",{t:S.t,f:S.f})+'</span><span class="pill">'+S.c+' °C</span>';
  Array.prototype.forEach.call(document.querySelectorAll("#ptw button"),function(b){b.setAttribute("aria-pressed",String(Number(b.dataset.v)===S.ptype));});
  $("ptw").hidden=S.p===0&&pmax()===0;
  $("tot").textContent=S.n*S.w+" g"; $("forza").textContent="W ≈ "+r.forza;
  ROWS=[
    {k:t("flour"),g:r.flour,txt:str.flour,col:"var(--flour)",sub:r.riporto>0?t("flourSubOld"):t("flourSub")},
    {k:t("water"),g:r.water,txt:str.water,col:"var(--water)",sub:t("ofFlour",{x:fmt(r.water/r.flour*100,1)})},
    {k:t("salt"),g:r.salt,txt:str.salt,col:"var(--salt)",sub:t("ofFlour",{x:fmt(r.salt/r.flour*100,1)})},
    {k:t("oil"),g:r.fat,txt:str.fat,col:"var(--oil)",sub:t("ofFlour",{x:fmt(r.fat/r.flour*100,1)}),hide:S.o===0},
    {k:t("old"),g:r.riporto,txt:str.riporto,col:"var(--old)",sub:t("ofDough",{x:fmt(S.p,2)}),hide:S.p===0},
    {k:t("yeast"),g:r.yeast,txt:yeastTxt,col:"var(--ember)",sub:t("ofFlour",{x:fmt(r.yeast/r.flour*100,2)}),cls:"yeast"}
  ].filter(function(x){return !x.hide;});
  $("ing").innerHTML=ROWS.map(function(x){
    return '<li class="'+(x.cls||"")+'"><span class="dot" style="background:'+x.col+'"></span><span class="nm">'+esc(x.k)+'</span><span class="g">'+x.txt+'<i>g</i></span><span class="sub">'+esc(x.sub)+'</span></li>';}).join("");
  var tot=ROWS.reduce(function(a,x){return a+x.g;},0);
  $("stack").innerHTML=ROWS.map(function(x){return '<div style="flex:'+Math.max(x.g,tot*0.006)+';background:'+x.col+'"></div>';}).join("");
  var rm=S.t-S.f, tl="", lg="";
  if(rm>0){tl+='<div class="r" style="flex:'+rm+'">'+(rm/S.t>=0.1?rm+' h':'')+'</div>';lg+='<span><i class="r"></i>'+t("tlroom",{h:fmt(rm,0),c:S.c})+'</span>';}
  if(S.f>0){tl+='<div class="f" style="flex:'+S.f+'">'+(S.f/S.t>=0.1?S.f+' h':'')+'</div>';lg+='<span><i class="f"></i>'+t("tlfridge",{h:fmt(S.f,0)})+'</span>';}
  $("tl").innerHTML=tl; $("tll").innerHTML=lg;
  $("tlc").textContent=t("tlnote");
  $("dry").textContent=fmt(r.yeast/3,2)+" g"; $("pf").textContent=fmt(r.flour/S.n,0)+" g"; $("pfl").textContent=t(S.teglia?"perPan":"perBall");
  $("cn").textContent=S.teglia?t("noteTeglia"):t("note");
}

/* ---------- view switching ---------- */
function render(){
  document.documentElement.lang=S.lang;
  $("l_it").setAttribute("aria-pressed",String(S.lang==="it")); $("l_en").setAttribute("aria-pressed",String(S.lang==="en"));
  $("restart").textContent=t("restart"); $("restart").hidden=!S.done;
  $("foot").innerHTML=t("credit")+' <a href="http://laconfraternitadellapizza.forumfree.it/" target="_blank" rel="noopener">La Confraternita della Pizza</a>';
  enforce();
  if(S.done)renderApp(); else renderWizard();
}

/* ---------- events ---------- */
document.addEventListener("click",function(e){
  var b=e.target.closest("[data-act],#restart,#copy,#reset,#l_it,#l_en"); if(!b)return;
  var a=b.dataset.act, v=b.dataset.v;
  if(b.id==="l_it"||b.id==="l_en"){S.lang=b.id==="l_it"?"it":"en"; save(); render(); return;}
  if(b.id==="restart"){S.done=false;S.step=0;save();render();return;}
  if(b.id==="reset"){S=Object.assign({},S,BASE,PRESETS[S.preset]||{});save();render();return;}
  if(a==="pansize"){var d=v.split("x").map(Number);S.pl=Math.max(d[0],d[1]);S.pw=Math.min(d[0],d[1]);S.wauto=true;S.w=clamp("w",sugW());enforce();save();syncFields();refreshSug();if(S.done)updateResults();return;}
  if(a==="usesug"){S.w=clamp("w",sugW());S.wauto=true;save();syncFields();refreshSug();if(S.done)updateResults();return;}
  if(b.id==="copy"){copyRecipe(b);return;}
  if(a==="inc"||a==="dec"){var k=b.dataset.k,st=Number(b.dataset.step)*(a==="inc"?1:-1);setVal(k,S[k]+st);return;}
  if(a==="ptype"){S.ptype=Number(v);enforce();save();if(S.done){syncFields();updateResults();}else renderWizard();return;}
  if(a==="preset"){S.preset=v;S.riporto=false;Object.assign(S,BASE,PRESETS[v]||{});S.time=v==="custom"?"custom":(PRESETS[v].t===8?"sera":PRESETS[v].t===24?"domani":PRESETS[v].t===48?"due":"custom");S.temp="normale";save();renderWizard();return;}
  if(a==="time"){S.time=v;if(TIMES[v]){S.t=TIMES[v].t;S.f=TIMES[v].f;}enforce();save();renderWizard();return;}
  if(a==="temp"){S.temp=v;if(TEMPS[v])S.c=TEMPS[v];save();renderWizard();return;}
  if(a==="riporto"){S.riporto=v==="si";if(!S.riporto)S.p=0;else if(S.p===0)S.p=Math.round(Math.min(3,pmax()/2)*10)/10;enforce();save();renderWizard();return;}
  if(a==="back"){S.step=Math.max(0,S.step-1);save();renderWizard();return;}
  if(a==="next"){if(S.step<NSTEPS-1){S.step++;save();renderWizard();}else{S.done=true;save();render();window.scrollTo(0,0);}return;}
});
document.addEventListener("input",function(e){
  var el=e.target;
  if(el.dataset&&el.dataset.k){
    if(el.type==="number"&&el.value==="")return; // campo svuotato mentre si scrive
    setVal(el.dataset.k,el.value,el);
  }
});
document.addEventListener("change",function(e){
  var el=e.target;
  if(el.id==="teglia"){
    S.teglia=el.checked;
    if(S.teglia){S.n=1;S.wauto=true;S.w=clamp("w",sugW());}   // una teglia, peso dalla regola
    else{S.n=BASE.n;S.w=BASE.w;}
    enforce();save();refreshQty();
    var ld=$("lead");if(ld&&!S.done)ld.textContent=t(S.teglia?"q1lt":"q1l");
    if(S.done)updateResults();return;
  }
  if(el.dataset&&el.dataset.k){setVal(el.dataset.k,el.value);}
});

function copyRecipe(btn){
  var txt=(S.teglia?t("recipeHeadPan",{n:S.n,d:dimsTxt(),w:S.w}):t("recipeHead",{n:S.n,w:S.w}))+"\n"+ROWS.map(function(x){return x.k+": "+x.txt+" g";}).join("\n")+"\n"+t("recipeRise",{t:S.t,f:S.f,c:S.c});
  function ok(){var o=t("copy");btn.textContent=t("copied");$("live").textContent=t("copied");setTimeout(function(){btn.textContent=o;},1600);}
  function fb(){var ta=document.createElement("textarea");ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand("copy");ok();}catch(e){}document.body.removeChild(ta);}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(ok,fb);}else{fb();}
}

render();
})();
