// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25291){
var map__25292 = p__25291;
var map__25292__$1 = cljs.core.__destructure_map.call(null,map__25292);
var m = map__25292__$1;
var n = cljs.core.get.call(null,map__25292__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25292__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25293_25321 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25294_25322 = null;
var count__25295_25323 = (0);
var i__25296_25324 = (0);
while(true){
if((i__25296_25324 < count__25295_25323)){
var f_25325 = cljs.core._nth.call(null,chunk__25294_25322,i__25296_25324);
cljs.core.println.call(null,"  ",f_25325);


var G__25326 = seq__25293_25321;
var G__25327 = chunk__25294_25322;
var G__25328 = count__25295_25323;
var G__25329 = (i__25296_25324 + (1));
seq__25293_25321 = G__25326;
chunk__25294_25322 = G__25327;
count__25295_25323 = G__25328;
i__25296_25324 = G__25329;
continue;
} else {
var temp__5720__auto___25330 = cljs.core.seq.call(null,seq__25293_25321);
if(temp__5720__auto___25330){
var seq__25293_25331__$1 = temp__5720__auto___25330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25293_25331__$1)){
var c__4679__auto___25332 = cljs.core.chunk_first.call(null,seq__25293_25331__$1);
var G__25333 = cljs.core.chunk_rest.call(null,seq__25293_25331__$1);
var G__25334 = c__4679__auto___25332;
var G__25335 = cljs.core.count.call(null,c__4679__auto___25332);
var G__25336 = (0);
seq__25293_25321 = G__25333;
chunk__25294_25322 = G__25334;
count__25295_25323 = G__25335;
i__25296_25324 = G__25336;
continue;
} else {
var f_25337 = cljs.core.first.call(null,seq__25293_25331__$1);
cljs.core.println.call(null,"  ",f_25337);


var G__25338 = cljs.core.next.call(null,seq__25293_25331__$1);
var G__25339 = null;
var G__25340 = (0);
var G__25341 = (0);
seq__25293_25321 = G__25338;
chunk__25294_25322 = G__25339;
count__25295_25323 = G__25340;
i__25296_25324 = G__25341;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25342 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25342);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25342)))?cljs.core.second.call(null,arglists_25342):arglists_25342));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25297_25343 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25298_25344 = null;
var count__25299_25345 = (0);
var i__25300_25346 = (0);
while(true){
if((i__25300_25346 < count__25299_25345)){
var vec__25309_25347 = cljs.core._nth.call(null,chunk__25298_25344,i__25300_25346);
var name_25348 = cljs.core.nth.call(null,vec__25309_25347,(0),null);
var map__25312_25349 = cljs.core.nth.call(null,vec__25309_25347,(1),null);
var map__25312_25350__$1 = cljs.core.__destructure_map.call(null,map__25312_25349);
var doc_25351 = cljs.core.get.call(null,map__25312_25350__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25352 = cljs.core.get.call(null,map__25312_25350__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25348);

cljs.core.println.call(null," ",arglists_25352);

if(cljs.core.truth_(doc_25351)){
cljs.core.println.call(null," ",doc_25351);
} else {
}


var G__25353 = seq__25297_25343;
var G__25354 = chunk__25298_25344;
var G__25355 = count__25299_25345;
var G__25356 = (i__25300_25346 + (1));
seq__25297_25343 = G__25353;
chunk__25298_25344 = G__25354;
count__25299_25345 = G__25355;
i__25300_25346 = G__25356;
continue;
} else {
var temp__5720__auto___25357 = cljs.core.seq.call(null,seq__25297_25343);
if(temp__5720__auto___25357){
var seq__25297_25358__$1 = temp__5720__auto___25357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25297_25358__$1)){
var c__4679__auto___25359 = cljs.core.chunk_first.call(null,seq__25297_25358__$1);
var G__25360 = cljs.core.chunk_rest.call(null,seq__25297_25358__$1);
var G__25361 = c__4679__auto___25359;
var G__25362 = cljs.core.count.call(null,c__4679__auto___25359);
var G__25363 = (0);
seq__25297_25343 = G__25360;
chunk__25298_25344 = G__25361;
count__25299_25345 = G__25362;
i__25300_25346 = G__25363;
continue;
} else {
var vec__25313_25364 = cljs.core.first.call(null,seq__25297_25358__$1);
var name_25365 = cljs.core.nth.call(null,vec__25313_25364,(0),null);
var map__25316_25366 = cljs.core.nth.call(null,vec__25313_25364,(1),null);
var map__25316_25367__$1 = cljs.core.__destructure_map.call(null,map__25316_25366);
var doc_25368 = cljs.core.get.call(null,map__25316_25367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25369 = cljs.core.get.call(null,map__25316_25367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25365);

cljs.core.println.call(null," ",arglists_25369);

if(cljs.core.truth_(doc_25368)){
cljs.core.println.call(null," ",doc_25368);
} else {
}


var G__25370 = cljs.core.next.call(null,seq__25297_25358__$1);
var G__25371 = null;
var G__25372 = (0);
var G__25373 = (0);
seq__25297_25343 = G__25370;
chunk__25298_25344 = G__25371;
count__25299_25345 = G__25372;
i__25300_25346 = G__25373;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__25317 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25318 = null;
var count__25319 = (0);
var i__25320 = (0);
while(true){
if((i__25320 < count__25319)){
var role = cljs.core._nth.call(null,chunk__25318,i__25320);
var temp__5720__auto___25374__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___25374__$1)){
var spec_25375 = temp__5720__auto___25374__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25375));
} else {
}


var G__25376 = seq__25317;
var G__25377 = chunk__25318;
var G__25378 = count__25319;
var G__25379 = (i__25320 + (1));
seq__25317 = G__25376;
chunk__25318 = G__25377;
count__25319 = G__25378;
i__25320 = G__25379;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__25317);
if(temp__5720__auto____$1){
var seq__25317__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25317__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__25317__$1);
var G__25380 = cljs.core.chunk_rest.call(null,seq__25317__$1);
var G__25381 = c__4679__auto__;
var G__25382 = cljs.core.count.call(null,c__4679__auto__);
var G__25383 = (0);
seq__25317 = G__25380;
chunk__25318 = G__25381;
count__25319 = G__25382;
i__25320 = G__25383;
continue;
} else {
var role = cljs.core.first.call(null,seq__25317__$1);
var temp__5720__auto___25384__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___25384__$2)){
var spec_25385 = temp__5720__auto___25384__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25385));
} else {
}


var G__25386 = cljs.core.next.call(null,seq__25317__$1);
var G__25387 = null;
var G__25388 = (0);
var G__25389 = (0);
seq__25317 = G__25386;
chunk__25318 = G__25387;
count__25319 = G__25388;
i__25320 = G__25389;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__25390 = cljs.core.conj.call(null,via,t);
var G__25391 = cljs.core.ex_cause.call(null,t);
via = G__25390;
t = G__25391;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25394 = datafied_throwable;
var map__25394__$1 = cljs.core.__destructure_map.call(null,map__25394);
var via = cljs.core.get.call(null,map__25394__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__25394__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__25394__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25395 = cljs.core.last.call(null,via);
var map__25395__$1 = cljs.core.__destructure_map.call(null,map__25395);
var type = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25396 = data;
var map__25396__$1 = cljs.core.__destructure_map.call(null,map__25396);
var problems = cljs.core.get.call(null,map__25396__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__25396__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__25396__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25397 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__25397__$1 = cljs.core.__destructure_map.call(null,map__25397);
var top_data = map__25397__$1;
var source = cljs.core.get.call(null,map__25397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__25398 = phase;
var G__25398__$1 = (((G__25398 instanceof cljs.core.Keyword))?G__25398.fqn:null);
switch (G__25398__$1) {
case "read-source":
var map__25399 = data;
var map__25399__$1 = cljs.core.__destructure_map.call(null,map__25399);
var line = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25399__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25400 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__25400__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25400,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25400);
var G__25400__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25400__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25400__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25400__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25401 = top_data;
var G__25401__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25401,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25401);
var G__25401__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25401__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25401__$1);
var G__25401__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25401__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25401__$2);
var G__25401__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25401__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25401__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25401__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25401__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25402 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25402,(0),null);
var method = cljs.core.nth.call(null,vec__25402,(1),null);
var file = cljs.core.nth.call(null,vec__25402,(2),null);
var line = cljs.core.nth.call(null,vec__25402,(3),null);
var G__25405 = top_data;
var G__25405__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__25405,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25405);
var G__25405__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__25405__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25405__$1);
var G__25405__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__25405__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25405__$2);
var G__25405__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25405__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25405__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25405__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25405__$4;
}

break;
case "execution":
var vec__25406 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25406,(0),null);
var method = cljs.core.nth.call(null,vec__25406,(1),null);
var file = cljs.core.nth.call(null,vec__25406,(2),null);
var line = cljs.core.nth.call(null,vec__25406,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__25393_SHARP_){
var or__4253__auto__ = (p1__25393_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__25393_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__25409 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25409__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__25409,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25409);
var G__25409__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25409__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25409__$1);
var G__25409__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.call(null,G__25409__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25409__$2);
var G__25409__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__25409__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25409__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25409__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25409__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25398__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25413){
var map__25414 = p__25413;
var map__25414__$1 = cljs.core.__destructure_map.call(null,map__25414);
var triage_data = map__25414__$1;
var phase = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__25414__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__25415 = phase;
var G__25415__$1 = (((G__25415 instanceof cljs.core.Keyword))?G__25415.fqn:null);
switch (G__25415__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25416_25425 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25417_25426 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25418_25427 = true;
var _STAR_print_fn_STAR__temp_val__25419_25428 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25418_25427);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25419_25428);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__25411_SHARP_){
return cljs.core.dissoc.call(null,p1__25411_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25417_25426);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25416_25425);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25420_25429 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25421_25430 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25422_25431 = true;
var _STAR_print_fn_STAR__temp_val__25423_25432 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25422_25431);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25423_25432);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__25412_SHARP_){
return cljs.core.dissoc.call(null,p1__25412_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25421_25430);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25420_25429);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25415__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
