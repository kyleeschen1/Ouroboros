// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21187){
var map__21188 = p__21187;
var map__21188__$1 = cljs.core.__destructure_map.call(null,map__21188);
var m = map__21188__$1;
var n = cljs.core.get.call(null,map__21188__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21189_21217 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21190_21218 = null;
var count__21191_21219 = (0);
var i__21192_21220 = (0);
while(true){
if((i__21192_21220 < count__21191_21219)){
var f_21221 = cljs.core._nth.call(null,chunk__21190_21218,i__21192_21220);
cljs.core.println.call(null,"  ",f_21221);


var G__21222 = seq__21189_21217;
var G__21223 = chunk__21190_21218;
var G__21224 = count__21191_21219;
var G__21225 = (i__21192_21220 + (1));
seq__21189_21217 = G__21222;
chunk__21190_21218 = G__21223;
count__21191_21219 = G__21224;
i__21192_21220 = G__21225;
continue;
} else {
var temp__5720__auto___21226 = cljs.core.seq.call(null,seq__21189_21217);
if(temp__5720__auto___21226){
var seq__21189_21227__$1 = temp__5720__auto___21226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21189_21227__$1)){
var c__4679__auto___21228 = cljs.core.chunk_first.call(null,seq__21189_21227__$1);
var G__21229 = cljs.core.chunk_rest.call(null,seq__21189_21227__$1);
var G__21230 = c__4679__auto___21228;
var G__21231 = cljs.core.count.call(null,c__4679__auto___21228);
var G__21232 = (0);
seq__21189_21217 = G__21229;
chunk__21190_21218 = G__21230;
count__21191_21219 = G__21231;
i__21192_21220 = G__21232;
continue;
} else {
var f_21233 = cljs.core.first.call(null,seq__21189_21227__$1);
cljs.core.println.call(null,"  ",f_21233);


var G__21234 = cljs.core.next.call(null,seq__21189_21227__$1);
var G__21235 = null;
var G__21236 = (0);
var G__21237 = (0);
seq__21189_21217 = G__21234;
chunk__21190_21218 = G__21235;
count__21191_21219 = G__21236;
i__21192_21220 = G__21237;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21238 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21238);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21238)))?cljs.core.second.call(null,arglists_21238):arglists_21238));
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
var seq__21193_21239 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21194_21240 = null;
var count__21195_21241 = (0);
var i__21196_21242 = (0);
while(true){
if((i__21196_21242 < count__21195_21241)){
var vec__21205_21243 = cljs.core._nth.call(null,chunk__21194_21240,i__21196_21242);
var name_21244 = cljs.core.nth.call(null,vec__21205_21243,(0),null);
var map__21208_21245 = cljs.core.nth.call(null,vec__21205_21243,(1),null);
var map__21208_21246__$1 = cljs.core.__destructure_map.call(null,map__21208_21245);
var doc_21247 = cljs.core.get.call(null,map__21208_21246__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21248 = cljs.core.get.call(null,map__21208_21246__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21244);

cljs.core.println.call(null," ",arglists_21248);

if(cljs.core.truth_(doc_21247)){
cljs.core.println.call(null," ",doc_21247);
} else {
}


var G__21249 = seq__21193_21239;
var G__21250 = chunk__21194_21240;
var G__21251 = count__21195_21241;
var G__21252 = (i__21196_21242 + (1));
seq__21193_21239 = G__21249;
chunk__21194_21240 = G__21250;
count__21195_21241 = G__21251;
i__21196_21242 = G__21252;
continue;
} else {
var temp__5720__auto___21253 = cljs.core.seq.call(null,seq__21193_21239);
if(temp__5720__auto___21253){
var seq__21193_21254__$1 = temp__5720__auto___21253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21193_21254__$1)){
var c__4679__auto___21255 = cljs.core.chunk_first.call(null,seq__21193_21254__$1);
var G__21256 = cljs.core.chunk_rest.call(null,seq__21193_21254__$1);
var G__21257 = c__4679__auto___21255;
var G__21258 = cljs.core.count.call(null,c__4679__auto___21255);
var G__21259 = (0);
seq__21193_21239 = G__21256;
chunk__21194_21240 = G__21257;
count__21195_21241 = G__21258;
i__21196_21242 = G__21259;
continue;
} else {
var vec__21209_21260 = cljs.core.first.call(null,seq__21193_21254__$1);
var name_21261 = cljs.core.nth.call(null,vec__21209_21260,(0),null);
var map__21212_21262 = cljs.core.nth.call(null,vec__21209_21260,(1),null);
var map__21212_21263__$1 = cljs.core.__destructure_map.call(null,map__21212_21262);
var doc_21264 = cljs.core.get.call(null,map__21212_21263__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21265 = cljs.core.get.call(null,map__21212_21263__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21261);

cljs.core.println.call(null," ",arglists_21265);

if(cljs.core.truth_(doc_21264)){
cljs.core.println.call(null," ",doc_21264);
} else {
}


var G__21266 = cljs.core.next.call(null,seq__21193_21254__$1);
var G__21267 = null;
var G__21268 = (0);
var G__21269 = (0);
seq__21193_21239 = G__21266;
chunk__21194_21240 = G__21267;
count__21195_21241 = G__21268;
i__21196_21242 = G__21269;
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

var seq__21213 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21214 = null;
var count__21215 = (0);
var i__21216 = (0);
while(true){
if((i__21216 < count__21215)){
var role = cljs.core._nth.call(null,chunk__21214,i__21216);
var temp__5720__auto___21270__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21270__$1)){
var spec_21271 = temp__5720__auto___21270__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21271));
} else {
}


var G__21272 = seq__21213;
var G__21273 = chunk__21214;
var G__21274 = count__21215;
var G__21275 = (i__21216 + (1));
seq__21213 = G__21272;
chunk__21214 = G__21273;
count__21215 = G__21274;
i__21216 = G__21275;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__21213);
if(temp__5720__auto____$1){
var seq__21213__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21213__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__21213__$1);
var G__21276 = cljs.core.chunk_rest.call(null,seq__21213__$1);
var G__21277 = c__4679__auto__;
var G__21278 = cljs.core.count.call(null,c__4679__auto__);
var G__21279 = (0);
seq__21213 = G__21276;
chunk__21214 = G__21277;
count__21215 = G__21278;
i__21216 = G__21279;
continue;
} else {
var role = cljs.core.first.call(null,seq__21213__$1);
var temp__5720__auto___21280__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21280__$2)){
var spec_21281 = temp__5720__auto___21280__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21281));
} else {
}


var G__21282 = cljs.core.next.call(null,seq__21213__$1);
var G__21283 = null;
var G__21284 = (0);
var G__21285 = (0);
seq__21213 = G__21282;
chunk__21214 = G__21283;
count__21215 = G__21284;
i__21216 = G__21285;
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
var G__21286 = cljs.core.conj.call(null,via,t);
var G__21287 = cljs.core.ex_cause.call(null,t);
via = G__21286;
t = G__21287;
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
var map__21290 = datafied_throwable;
var map__21290__$1 = cljs.core.__destructure_map.call(null,map__21290);
var via = cljs.core.get.call(null,map__21290__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21290__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21290__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21291 = cljs.core.last.call(null,via);
var map__21291__$1 = cljs.core.__destructure_map.call(null,map__21291);
var type = cljs.core.get.call(null,map__21291__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21291__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21291__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21292 = data;
var map__21292__$1 = cljs.core.__destructure_map.call(null,map__21292);
var problems = cljs.core.get.call(null,map__21292__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21292__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21292__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21293 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21293__$1 = cljs.core.__destructure_map.call(null,map__21293);
var top_data = map__21293__$1;
var source = cljs.core.get.call(null,map__21293__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21294 = phase;
var G__21294__$1 = (((G__21294 instanceof cljs.core.Keyword))?G__21294.fqn:null);
switch (G__21294__$1) {
case "read-source":
var map__21295 = data;
var map__21295__$1 = cljs.core.__destructure_map.call(null,map__21295);
var line = cljs.core.get.call(null,map__21295__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21295__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21296 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21296__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21296,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21296);
var G__21296__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21296__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21296__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21296__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21296__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21297 = top_data;
var G__21297__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21297,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21297);
var G__21297__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21297__$1);
var G__21297__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21297__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21297__$2);
var G__21297__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21297__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21297__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21297__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21297__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21298 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21298,(0),null);
var method = cljs.core.nth.call(null,vec__21298,(1),null);
var file = cljs.core.nth.call(null,vec__21298,(2),null);
var line = cljs.core.nth.call(null,vec__21298,(3),null);
var G__21301 = top_data;
var G__21301__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21301,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21301);
var G__21301__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21301__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21301__$1);
var G__21301__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__21301__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21301__$2);
var G__21301__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21301__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21301__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21301__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21301__$4;
}

break;
case "execution":
var vec__21302 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21302,(0),null);
var method = cljs.core.nth.call(null,vec__21302,(1),null);
var file = cljs.core.nth.call(null,vec__21302,(2),null);
var line = cljs.core.nth.call(null,vec__21302,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__21289_SHARP_){
var or__4253__auto__ = (p1__21289_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21289_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__21305 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21305__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21305,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21305);
var G__21305__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21305__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21305__$1);
var G__21305__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__21305__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21305__$2);
var G__21305__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21305__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21305__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21305__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21305__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21294__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21309){
var map__21310 = p__21309;
var map__21310__$1 = cljs.core.__destructure_map.call(null,map__21310);
var triage_data = map__21310__$1;
var phase = cljs.core.get.call(null,map__21310__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21310__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21310__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21310__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21310__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21310__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21310__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21310__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21311 = phase;
var G__21311__$1 = (((G__21311 instanceof cljs.core.Keyword))?G__21311.fqn:null);
switch (G__21311__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21312_21321 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21313_21322 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21314_21323 = true;
var _STAR_print_fn_STAR__temp_val__21315_21324 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21314_21323);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21315_21324);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21307_SHARP_){
return cljs.core.dissoc.call(null,p1__21307_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21313_21322);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21312_21321);
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
var _STAR_print_newline_STAR__orig_val__21316_21325 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21317_21326 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21318_21327 = true;
var _STAR_print_fn_STAR__temp_val__21319_21328 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21318_21327);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21319_21328);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21308_SHARP_){
return cljs.core.dissoc.call(null,p1__21308_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21317_21326);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21316_21325);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21311__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
