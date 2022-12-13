// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.impl');
goog.require('cljs.env');
goog.require('cljs.source_map');
goog.require('cljs.tools.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__36334 = s;
var map__36334__$1 = cljs.core.__destructure_map.call(null,map__36334);
var name = cljs.core.get.call(null,map__36334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__36334__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__36336 = info;
var map__36337 = G__36336;
var map__36337__$1 = cljs.core.__destructure_map.call(null,map__36337);
var shadow = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__36336__$1 = G__36336;
while(true){
var d__$2 = d__$1;
var map__36339 = G__36336__$1;
var map__36339__$1 = cljs.core.__destructure_map.call(null,map__36339);
var shadow__$1 = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__36340 = (d__$2 + (1));
var G__36341 = shadow__$1;
d__$1 = G__36340;
G__36336__$1 = G__36341;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__36342){
var map__36343 = p__36342;
var map__36343__$1 = cljs.core.__destructure_map.call(null,map__36343);
var name_var = map__36343__$1;
var name = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__36344 = info;
var map__36344__$1 = cljs.core.__destructure_map.call(null,map__36344);
var ns = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__36346 = arguments.length;
switch (G__36346) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11648),(11648),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__36348 = cp;
switch (G__36348) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__36350_36354 = cljs.core.seq.call(null,s);
var chunk__36351_36355 = null;
var count__36352_36356 = (0);
var i__36353_36357 = (0);
while(true){
if((i__36353_36357 < count__36352_36356)){
var c_36358 = cljs.core._nth.call(null,chunk__36351_36355,i__36353_36357);
sb.append(cljs.compiler.escape_char.call(null,c_36358));


var G__36359 = seq__36350_36354;
var G__36360 = chunk__36351_36355;
var G__36361 = count__36352_36356;
var G__36362 = (i__36353_36357 + (1));
seq__36350_36354 = G__36359;
chunk__36351_36355 = G__36360;
count__36352_36356 = G__36361;
i__36353_36357 = G__36362;
continue;
} else {
var temp__5720__auto___36363 = cljs.core.seq.call(null,seq__36350_36354);
if(temp__5720__auto___36363){
var seq__36350_36364__$1 = temp__5720__auto___36363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36350_36364__$1)){
var c__4679__auto___36365 = cljs.core.chunk_first.call(null,seq__36350_36364__$1);
var G__36366 = cljs.core.chunk_rest.call(null,seq__36350_36364__$1);
var G__36367 = c__4679__auto___36365;
var G__36368 = cljs.core.count.call(null,c__4679__auto___36365);
var G__36369 = (0);
seq__36350_36354 = G__36366;
chunk__36351_36355 = G__36367;
count__36352_36356 = G__36368;
i__36353_36357 = G__36369;
continue;
} else {
var c_36370 = cljs.core.first.call(null,seq__36350_36364__$1);
sb.append(cljs.compiler.escape_char.call(null,c_36370));


var G__36371 = cljs.core.next.call(null,seq__36350_36364__$1);
var G__36372 = null;
var G__36373 = (0);
var G__36374 = (0);
seq__36350_36354 = G__36371;
chunk__36351_36355 = G__36372;
count__36352_36356 = G__36373;
i__36353_36357 = G__36374;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__36375_36378 = ast;
var map__36375_36379__$1 = cljs.core.__destructure_map.call(null,map__36375_36378);
var env_36380 = cljs.core.get.call(null,map__36375_36379__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_36380))){
var map__36376_36381 = env_36380;
var map__36376_36382__$1 = cljs.core.__destructure_map.call(null,map__36376_36381);
var line_36383 = cljs.core.get.call(null,map__36376_36382__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36384 = cljs.core.get.call(null,map__36376_36382__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__36377 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__36377,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__36377;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_36383 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_36384)?(column_36384 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__36393 = arguments.length;
switch (G__36393) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___36400 = arguments.length;
var i__4865__auto___36401 = (0);
while(true){
if((i__4865__auto___36401 < len__4864__auto___36400)){
args_arr__4885__auto__.push((arguments[i__4865__auto___36401]));

var G__36402 = (i__4865__auto___36401 + (1));
i__4865__auto___36401 = G__36402;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4886__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
a.call(null);
} else {
var s_36403 = (function (){var G__36394 = a;
if((!(typeof a === 'string'))){
return G__36394.toString();
} else {
return G__36394;
}
})();
var temp__5724__auto___36404 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___36404 == null)){
} else {
var sm_data_36405 = temp__5724__auto___36404;
cljs.core.swap_BANG_.call(null,sm_data_36405,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__36385_SHARP_){
return (p1__36385_SHARP_ + s_36403.length);
}));
}

cljs.core.print.call(null,s_36403);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__36395 = cljs.core.seq.call(null,xs);
var chunk__36396 = null;
var count__36397 = (0);
var i__36398 = (0);
while(true){
if((i__36398 < count__36397)){
var x = cljs.core._nth.call(null,chunk__36396,i__36398);
cljs.compiler.emits.call(null,x);


var G__36406 = seq__36395;
var G__36407 = chunk__36396;
var G__36408 = count__36397;
var G__36409 = (i__36398 + (1));
seq__36395 = G__36406;
chunk__36396 = G__36407;
count__36397 = G__36408;
i__36398 = G__36409;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36395);
if(temp__5720__auto__){
var seq__36395__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36395__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__36395__$1);
var G__36410 = cljs.core.chunk_rest.call(null,seq__36395__$1);
var G__36411 = c__4679__auto__;
var G__36412 = cljs.core.count.call(null,c__4679__auto__);
var G__36413 = (0);
seq__36395 = G__36410;
chunk__36396 = G__36411;
count__36397 = G__36412;
i__36398 = G__36413;
continue;
} else {
var x = cljs.core.first.call(null,seq__36395__$1);
cljs.compiler.emits.call(null,x);


var G__36414 = cljs.core.next.call(null,seq__36395__$1);
var G__36415 = null;
var G__36416 = (0);
var G__36417 = (0);
seq__36395 = G__36414;
chunk__36396 = G__36415;
count__36397 = G__36416;
i__36398 = G__36417;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq36387){
var G__36388 = cljs.core.first.call(null,seq36387);
var seq36387__$1 = cljs.core.next.call(null,seq36387);
var G__36389 = cljs.core.first.call(null,seq36387__$1);
var seq36387__$2 = cljs.core.next.call(null,seq36387__$1);
var G__36390 = cljs.core.first.call(null,seq36387__$2);
var seq36387__$3 = cljs.core.next.call(null,seq36387__$2);
var G__36391 = cljs.core.first.call(null,seq36387__$3);
var seq36387__$4 = cljs.core.next.call(null,seq36387__$3);
var G__36392 = cljs.core.first.call(null,seq36387__$4);
var seq36387__$5 = cljs.core.next.call(null,seq36387__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36388,G__36389,G__36390,G__36391,G__36392,seq36387__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__36418){
var map__36419 = p__36418;
var map__36419__$1 = cljs.core.__destructure_map.call(null,map__36419);
var m = map__36419__$1;
var gen_line = cljs.core.get.call(null,map__36419__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__36427 = arguments.length;
switch (G__36427) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___36433 = arguments.length;
var i__4865__auto___36434 = (0);
while(true){
if((i__4865__auto___36434 < len__4864__auto___36433)){
args_arr__4885__auto__.push((arguments[i__4865__auto___36434]));

var G__36435 = (i__4865__auto___36434 + (1));
i__4865__auto___36434 = G__36435;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4886__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__36428_36436 = cljs.core.seq.call(null,xs);
var chunk__36429_36437 = null;
var count__36430_36438 = (0);
var i__36431_36439 = (0);
while(true){
if((i__36431_36439 < count__36430_36438)){
var x_36440 = cljs.core._nth.call(null,chunk__36429_36437,i__36431_36439);
cljs.compiler.emits.call(null,x_36440);


var G__36441 = seq__36428_36436;
var G__36442 = chunk__36429_36437;
var G__36443 = count__36430_36438;
var G__36444 = (i__36431_36439 + (1));
seq__36428_36436 = G__36441;
chunk__36429_36437 = G__36442;
count__36430_36438 = G__36443;
i__36431_36439 = G__36444;
continue;
} else {
var temp__5720__auto___36445 = cljs.core.seq.call(null,seq__36428_36436);
if(temp__5720__auto___36445){
var seq__36428_36446__$1 = temp__5720__auto___36445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36428_36446__$1)){
var c__4679__auto___36447 = cljs.core.chunk_first.call(null,seq__36428_36446__$1);
var G__36448 = cljs.core.chunk_rest.call(null,seq__36428_36446__$1);
var G__36449 = c__4679__auto___36447;
var G__36450 = cljs.core.count.call(null,c__4679__auto___36447);
var G__36451 = (0);
seq__36428_36436 = G__36448;
chunk__36429_36437 = G__36449;
count__36430_36438 = G__36450;
i__36431_36439 = G__36451;
continue;
} else {
var x_36452 = cljs.core.first.call(null,seq__36428_36446__$1);
cljs.compiler.emits.call(null,x_36452);


var G__36453 = cljs.core.next.call(null,seq__36428_36446__$1);
var G__36454 = null;
var G__36455 = (0);
var G__36456 = (0);
seq__36428_36436 = G__36453;
chunk__36429_36437 = G__36454;
count__36430_36438 = G__36455;
i__36431_36439 = G__36456;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq36421){
var G__36422 = cljs.core.first.call(null,seq36421);
var seq36421__$1 = cljs.core.next.call(null,seq36421);
var G__36423 = cljs.core.first.call(null,seq36421__$1);
var seq36421__$2 = cljs.core.next.call(null,seq36421__$1);
var G__36424 = cljs.core.first.call(null,seq36421__$2);
var seq36421__$3 = cljs.core.next.call(null,seq36421__$2);
var G__36425 = cljs.core.first.call(null,seq36421__$3);
var seq36421__$4 = cljs.core.next.call(null,seq36421__$3);
var G__36426 = cljs.core.first.call(null,seq36421__$4);
var seq36421__$5 = cljs.core.next.call(null,seq36421__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36422,G__36423,G__36424,G__36425,G__36426,seq36421__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36457_36461 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36458_36462 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36459_36463 = true;
var _STAR_print_fn_STAR__temp_val__36460_36464 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36459_36463);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36460_36464);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36458_36462);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36457_36461);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__36465 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__36465,(0),null);
var name = cljs.core.nth.call(null,vec__36465,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__36468 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__36468,(0),null);
var flags = cljs.core.nth.call(null,vec__36468,(1),null);
var pattern = cljs.core.nth.call(null,vec__36468,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5718__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4251__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4251__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.call(null,"new Date(",inst_ms,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emit_inst.call(null,date.getTime());
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__36471_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__36471_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__36473){
var map__36474 = p__36473;
var map__36474__$1 = cljs.core.__destructure_map.call(null,map__36474);
var ast = map__36474__$1;
var info = cljs.core.get.call(null,map__36474__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__36474__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__36474__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__36475 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__36475__$1 = cljs.core.__destructure_map.call(null,map__36475);
var cenv = map__36475__$1;
var options = cljs.core.get.call(null,map__36475__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4253__auto__ = js_module_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__36476 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4251__auto__;
}
})())){
return clojure.set.difference.call(null,G__36476,cljs.analyzer.es5_allowed);
} else {
return G__36476;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4253__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__36477 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__36477,reserved);
} else {
return G__36477;
}
})();
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__36478_36479 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__36478_36480__$1 = (((G__36478_36479 instanceof cljs.core.Keyword))?G__36478_36479.fqn:null);
switch (G__36478_36480__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4251__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__36482){
var map__36483 = p__36482;
var map__36483__$1 = cljs.core.__destructure_map.call(null,map__36483);
var arg = map__36483__$1;
var env = cljs.core.get.call(null,map__36483__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__36483__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__36483__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__36483__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__36484 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__36484__$1 = cljs.core.__destructure_map.call(null,map__36484);
var name = cljs.core.get.call(null,map__36484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__36485){
var map__36486 = p__36485;
var map__36486__$1 = cljs.core.__destructure_map.call(null,map__36486);
var expr = cljs.core.get.call(null,map__36486__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__36486__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__36486__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__36487_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__36487_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__36488){
var map__36489 = p__36488;
var map__36489__$1 = cljs.core.__destructure_map.call(null,map__36489);
var env = cljs.core.get.call(null,map__36489__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__36489__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__36489__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__36490){
var map__36491 = p__36490;
var map__36491__$1 = cljs.core.__destructure_map.call(null,map__36491);
var items = cljs.core.get.call(null,map__36491__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__36491__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__36492_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__36492_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__36493){
var map__36494 = p__36493;
var map__36494__$1 = cljs.core.__destructure_map.call(null,map__36494);
var items = cljs.core.get.call(null,map__36494__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__36494__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___36517 = cljs.core.seq.call(null,items);
if(temp__5720__auto___36517){
var items_36518__$1 = temp__5720__auto___36517;
var vec__36495_36519 = items_36518__$1;
var seq__36496_36520 = cljs.core.seq.call(null,vec__36495_36519);
var first__36497_36521 = cljs.core.first.call(null,seq__36496_36520);
var seq__36496_36522__$1 = cljs.core.next.call(null,seq__36496_36520);
var vec__36498_36523 = first__36497_36521;
var k_36524 = cljs.core.nth.call(null,vec__36498_36523,(0),null);
var v_36525 = cljs.core.nth.call(null,vec__36498_36523,(1),null);
var r_36526 = seq__36496_36522__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_36524),"\": ",emit_js_object_val.call(null,v_36525));

var seq__36501_36527 = cljs.core.seq.call(null,r_36526);
var chunk__36502_36528 = null;
var count__36503_36529 = (0);
var i__36504_36530 = (0);
while(true){
if((i__36504_36530 < count__36503_36529)){
var vec__36511_36531 = cljs.core._nth.call(null,chunk__36502_36528,i__36504_36530);
var k_36532__$1 = cljs.core.nth.call(null,vec__36511_36531,(0),null);
var v_36533__$1 = cljs.core.nth.call(null,vec__36511_36531,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_36532__$1),"\": ",emit_js_object_val.call(null,v_36533__$1));


var G__36534 = seq__36501_36527;
var G__36535 = chunk__36502_36528;
var G__36536 = count__36503_36529;
var G__36537 = (i__36504_36530 + (1));
seq__36501_36527 = G__36534;
chunk__36502_36528 = G__36535;
count__36503_36529 = G__36536;
i__36504_36530 = G__36537;
continue;
} else {
var temp__5720__auto___36538__$1 = cljs.core.seq.call(null,seq__36501_36527);
if(temp__5720__auto___36538__$1){
var seq__36501_36539__$1 = temp__5720__auto___36538__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36501_36539__$1)){
var c__4679__auto___36540 = cljs.core.chunk_first.call(null,seq__36501_36539__$1);
var G__36541 = cljs.core.chunk_rest.call(null,seq__36501_36539__$1);
var G__36542 = c__4679__auto___36540;
var G__36543 = cljs.core.count.call(null,c__4679__auto___36540);
var G__36544 = (0);
seq__36501_36527 = G__36541;
chunk__36502_36528 = G__36542;
count__36503_36529 = G__36543;
i__36504_36530 = G__36544;
continue;
} else {
var vec__36514_36545 = cljs.core.first.call(null,seq__36501_36539__$1);
var k_36546__$1 = cljs.core.nth.call(null,vec__36514_36545,(0),null);
var v_36547__$1 = cljs.core.nth.call(null,vec__36514_36545,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_36546__$1),"\": ",emit_js_object_val.call(null,v_36547__$1));


var G__36548 = cljs.core.next.call(null,seq__36501_36539__$1);
var G__36549 = null;
var G__36550 = (0);
var G__36551 = (0);
seq__36501_36527 = G__36548;
chunk__36502_36528 = G__36549;
count__36503_36529 = G__36550;
i__36504_36530 = G__36551;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__36552){
var map__36553 = p__36552;
var map__36553__$1 = cljs.core.__destructure_map.call(null,map__36553);
var keys = cljs.core.get.call(null,map__36553__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__36553__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__36553__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__36554){
var map__36555 = p__36554;
var map__36555__$1 = cljs.core.__destructure_map.call(null,map__36555);
var items = cljs.core.get.call(null,map__36555__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__36555__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__36556){
var map__36557 = p__36556;
var map__36557__$1 = cljs.core.__destructure_map.call(null,map__36557);
var expr = cljs.core.get.call(null,map__36557__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__36558){
var map__36559 = p__36558;
var map__36559__$1 = cljs.core.__destructure_map.call(null,map__36559);
var form = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__36560 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__36560__$1 = cljs.core.__destructure_map.call(null,map__36560);
var op = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4251__auto__){
var and__4251__auto____$1 = form;
if(cljs.core.truth_(and__4251__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = (!((const_expr == null)));
if(and__4251__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__4251__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__36561 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__36561__$1 = cljs.core.__destructure_map.call(null,map__36561);
var op = cljs.core.get.call(null,map__36561__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__36561__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__36561__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4253__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = (!((const_expr == null)));
if(and__4251__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__4251__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4253__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__36562){
var map__36563 = p__36562;
var map__36563__$1 = cljs.core.__destructure_map.call(null,map__36563);
var test = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4253__auto__ = unchecked;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__36564){
var map__36565 = p__36564;
var map__36565__$1 = cljs.core.__destructure_map.call(null,map__36565);
var v = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__36566_36594 = cljs.core.seq.call(null,nodes);
var chunk__36567_36595 = null;
var count__36568_36596 = (0);
var i__36569_36597 = (0);
while(true){
if((i__36569_36597 < count__36568_36596)){
var map__36582_36598 = cljs.core._nth.call(null,chunk__36567_36595,i__36569_36597);
var map__36582_36599__$1 = cljs.core.__destructure_map.call(null,map__36582_36598);
var ts_36600 = cljs.core.get.call(null,map__36582_36599__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__36583_36601 = cljs.core.get.call(null,map__36582_36599__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__36583_36602__$1 = cljs.core.__destructure_map.call(null,map__36583_36601);
var then_36603 = cljs.core.get.call(null,map__36583_36602__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__36584_36604 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_36600));
var chunk__36585_36605 = null;
var count__36586_36606 = (0);
var i__36587_36607 = (0);
while(true){
if((i__36587_36607 < count__36586_36606)){
var test_36608 = cljs.core._nth.call(null,chunk__36585_36605,i__36587_36607);
cljs.compiler.emitln.call(null,"case ",test_36608,":");


var G__36609 = seq__36584_36604;
var G__36610 = chunk__36585_36605;
var G__36611 = count__36586_36606;
var G__36612 = (i__36587_36607 + (1));
seq__36584_36604 = G__36609;
chunk__36585_36605 = G__36610;
count__36586_36606 = G__36611;
i__36587_36607 = G__36612;
continue;
} else {
var temp__5720__auto___36613 = cljs.core.seq.call(null,seq__36584_36604);
if(temp__5720__auto___36613){
var seq__36584_36614__$1 = temp__5720__auto___36613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36584_36614__$1)){
var c__4679__auto___36615 = cljs.core.chunk_first.call(null,seq__36584_36614__$1);
var G__36616 = cljs.core.chunk_rest.call(null,seq__36584_36614__$1);
var G__36617 = c__4679__auto___36615;
var G__36618 = cljs.core.count.call(null,c__4679__auto___36615);
var G__36619 = (0);
seq__36584_36604 = G__36616;
chunk__36585_36605 = G__36617;
count__36586_36606 = G__36618;
i__36587_36607 = G__36619;
continue;
} else {
var test_36620 = cljs.core.first.call(null,seq__36584_36614__$1);
cljs.compiler.emitln.call(null,"case ",test_36620,":");


var G__36621 = cljs.core.next.call(null,seq__36584_36614__$1);
var G__36622 = null;
var G__36623 = (0);
var G__36624 = (0);
seq__36584_36604 = G__36621;
chunk__36585_36605 = G__36622;
count__36586_36606 = G__36623;
i__36587_36607 = G__36624;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_36603);
} else {
cljs.compiler.emitln.call(null,then_36603);
}

cljs.compiler.emitln.call(null,"break;");


var G__36625 = seq__36566_36594;
var G__36626 = chunk__36567_36595;
var G__36627 = count__36568_36596;
var G__36628 = (i__36569_36597 + (1));
seq__36566_36594 = G__36625;
chunk__36567_36595 = G__36626;
count__36568_36596 = G__36627;
i__36569_36597 = G__36628;
continue;
} else {
var temp__5720__auto___36629 = cljs.core.seq.call(null,seq__36566_36594);
if(temp__5720__auto___36629){
var seq__36566_36630__$1 = temp__5720__auto___36629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36566_36630__$1)){
var c__4679__auto___36631 = cljs.core.chunk_first.call(null,seq__36566_36630__$1);
var G__36632 = cljs.core.chunk_rest.call(null,seq__36566_36630__$1);
var G__36633 = c__4679__auto___36631;
var G__36634 = cljs.core.count.call(null,c__4679__auto___36631);
var G__36635 = (0);
seq__36566_36594 = G__36632;
chunk__36567_36595 = G__36633;
count__36568_36596 = G__36634;
i__36569_36597 = G__36635;
continue;
} else {
var map__36588_36636 = cljs.core.first.call(null,seq__36566_36630__$1);
var map__36588_36637__$1 = cljs.core.__destructure_map.call(null,map__36588_36636);
var ts_36638 = cljs.core.get.call(null,map__36588_36637__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__36589_36639 = cljs.core.get.call(null,map__36588_36637__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__36589_36640__$1 = cljs.core.__destructure_map.call(null,map__36589_36639);
var then_36641 = cljs.core.get.call(null,map__36589_36640__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__36590_36642 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_36638));
var chunk__36591_36643 = null;
var count__36592_36644 = (0);
var i__36593_36645 = (0);
while(true){
if((i__36593_36645 < count__36592_36644)){
var test_36646 = cljs.core._nth.call(null,chunk__36591_36643,i__36593_36645);
cljs.compiler.emitln.call(null,"case ",test_36646,":");


var G__36647 = seq__36590_36642;
var G__36648 = chunk__36591_36643;
var G__36649 = count__36592_36644;
var G__36650 = (i__36593_36645 + (1));
seq__36590_36642 = G__36647;
chunk__36591_36643 = G__36648;
count__36592_36644 = G__36649;
i__36593_36645 = G__36650;
continue;
} else {
var temp__5720__auto___36651__$1 = cljs.core.seq.call(null,seq__36590_36642);
if(temp__5720__auto___36651__$1){
var seq__36590_36652__$1 = temp__5720__auto___36651__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36590_36652__$1)){
var c__4679__auto___36653 = cljs.core.chunk_first.call(null,seq__36590_36652__$1);
var G__36654 = cljs.core.chunk_rest.call(null,seq__36590_36652__$1);
var G__36655 = c__4679__auto___36653;
var G__36656 = cljs.core.count.call(null,c__4679__auto___36653);
var G__36657 = (0);
seq__36590_36642 = G__36654;
chunk__36591_36643 = G__36655;
count__36592_36644 = G__36656;
i__36593_36645 = G__36657;
continue;
} else {
var test_36658 = cljs.core.first.call(null,seq__36590_36652__$1);
cljs.compiler.emitln.call(null,"case ",test_36658,":");


var G__36659 = cljs.core.next.call(null,seq__36590_36652__$1);
var G__36660 = null;
var G__36661 = (0);
var G__36662 = (0);
seq__36590_36642 = G__36659;
chunk__36591_36643 = G__36660;
count__36592_36644 = G__36661;
i__36593_36645 = G__36662;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_36641);
} else {
cljs.compiler.emitln.call(null,then_36641);
}

cljs.compiler.emitln.call(null,"break;");


var G__36663 = cljs.core.next.call(null,seq__36566_36630__$1);
var G__36664 = null;
var G__36665 = (0);
var G__36666 = (0);
seq__36566_36594 = G__36663;
chunk__36567_36595 = G__36664;
count__36568_36596 = G__36665;
i__36569_36597 = G__36666;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__36667){
var map__36668 = p__36667;
var map__36668__$1 = cljs.core.__destructure_map.call(null,map__36668);
var throw$ = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__36670 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__36670,(0),null);
var rstr = cljs.core.nth.call(null,vec__36670,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__36669_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__36669_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__36673 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__36673,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__36673;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__36674_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__36674_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__36675 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__36676 = cljs.core.seq.call(null,vec__36675);
var first__36677 = cljs.core.first.call(null,seq__36676);
var seq__36676__$1 = cljs.core.next.call(null,seq__36676);
var p = first__36677;
var first__36677__$1 = cljs.core.first.call(null,seq__36676__$1);
var seq__36676__$2 = cljs.core.next.call(null,seq__36676__$1);
var ts = first__36677__$1;
var first__36677__$2 = cljs.core.first.call(null,seq__36676__$2);
var seq__36676__$3 = cljs.core.next.call(null,seq__36676__$2);
var n = first__36677__$2;
var xs = seq__36676__$3;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4251__auto__){
var and__4251__auto____$1 = ts;
if(cljs.core.truth_(and__4251__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__36678 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__36679 = cljs.core.seq.call(null,vec__36678);
var first__36680 = cljs.core.first.call(null,seq__36679);
var seq__36679__$1 = cljs.core.next.call(null,seq__36679);
var p = first__36680;
var first__36680__$1 = cljs.core.first.call(null,seq__36679__$1);
var seq__36679__$2 = cljs.core.next.call(null,seq__36679__$1);
var ts = first__36680__$1;
var xs = seq__36679__$2;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4251__auto__){
var and__4251__auto____$1 = ts;
if(cljs.core.truth_(and__4251__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__36683 = arguments.length;
switch (G__36683) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__36691 = cljs.core.map.call(null,(function (p1__36681_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__36681_SHARP_);
} else {
return p1__36681_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__36692 = cljs.core.seq.call(null,vec__36691);
var first__36693 = cljs.core.first.call(null,seq__36692);
var seq__36692__$1 = cljs.core.next.call(null,seq__36692);
var x = first__36693;
var ys = seq__36692__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__36694 = cljs.core.seq.call(null,ys);
var chunk__36695 = null;
var count__36696 = (0);
var i__36697 = (0);
while(true){
if((i__36697 < count__36696)){
var next_line = cljs.core._nth.call(null,chunk__36695,i__36697);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__36703 = seq__36694;
var G__36704 = chunk__36695;
var G__36705 = count__36696;
var G__36706 = (i__36697 + (1));
seq__36694 = G__36703;
chunk__36695 = G__36704;
count__36696 = G__36705;
i__36697 = G__36706;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36694);
if(temp__5720__auto__){
var seq__36694__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36694__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__36694__$1);
var G__36707 = cljs.core.chunk_rest.call(null,seq__36694__$1);
var G__36708 = c__4679__auto__;
var G__36709 = cljs.core.count.call(null,c__4679__auto__);
var G__36710 = (0);
seq__36694 = G__36707;
chunk__36695 = G__36708;
count__36696 = G__36709;
i__36697 = G__36710;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__36694__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__36711 = cljs.core.next.call(null,seq__36694__$1);
var G__36712 = null;
var G__36713 = (0);
var G__36714 = (0);
seq__36694 = G__36711;
chunk__36695 = G__36712;
count__36696 = G__36713;
i__36697 = G__36714;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__36698_36715 = cljs.core.seq.call(null,docs__$2);
var chunk__36699_36716 = null;
var count__36700_36717 = (0);
var i__36701_36718 = (0);
while(true){
if((i__36701_36718 < count__36700_36717)){
var e_36719 = cljs.core._nth.call(null,chunk__36699_36716,i__36701_36718);
if(cljs.core.truth_(e_36719)){
print_comment_lines.call(null,e_36719);
} else {
}


var G__36720 = seq__36698_36715;
var G__36721 = chunk__36699_36716;
var G__36722 = count__36700_36717;
var G__36723 = (i__36701_36718 + (1));
seq__36698_36715 = G__36720;
chunk__36699_36716 = G__36721;
count__36700_36717 = G__36722;
i__36701_36718 = G__36723;
continue;
} else {
var temp__5720__auto___36724 = cljs.core.seq.call(null,seq__36698_36715);
if(temp__5720__auto___36724){
var seq__36698_36725__$1 = temp__5720__auto___36724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36698_36725__$1)){
var c__4679__auto___36726 = cljs.core.chunk_first.call(null,seq__36698_36725__$1);
var G__36727 = cljs.core.chunk_rest.call(null,seq__36698_36725__$1);
var G__36728 = c__4679__auto___36726;
var G__36729 = cljs.core.count.call(null,c__4679__auto___36726);
var G__36730 = (0);
seq__36698_36715 = G__36727;
chunk__36699_36716 = G__36728;
count__36700_36717 = G__36729;
i__36701_36718 = G__36730;
continue;
} else {
var e_36731 = cljs.core.first.call(null,seq__36698_36725__$1);
if(cljs.core.truth_(e_36731)){
print_comment_lines.call(null,e_36731);
} else {
}


var G__36732 = cljs.core.next.call(null,seq__36698_36725__$1);
var G__36733 = null;
var G__36734 = (0);
var G__36735 = (0);
seq__36698_36715 = G__36732;
chunk__36699_36716 = G__36733;
count__36700_36717 = G__36734;
i__36701_36718 = G__36735;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4251__auto__ = cljs.core.some.call(null,(function (p1__36737_SHARP_){
return goog.string.startsWith(p1__36737_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = opts;
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4251__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__36738){
var map__36739 = p__36738;
var map__36739__$1 = cljs.core.__destructure_map.call(null,map__36739);
var doc = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__36739__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4253__auto__ = init;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return test;
} else {
return and__4251__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__36740){
var map__36741 = p__36740;
var map__36741__$1 = cljs.core.__destructure_map.call(null,map__36741);
var name = cljs.core.get.call(null,map__36741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__36741__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__36741__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__36742_36766 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__36743_36767 = null;
var count__36744_36768 = (0);
var i__36745_36769 = (0);
while(true){
if((i__36745_36769 < count__36744_36768)){
var vec__36752_36770 = cljs.core._nth.call(null,chunk__36743_36767,i__36745_36769);
var i_36771 = cljs.core.nth.call(null,vec__36752_36770,(0),null);
var param_36772 = cljs.core.nth.call(null,vec__36752_36770,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_36772);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__36773 = seq__36742_36766;
var G__36774 = chunk__36743_36767;
var G__36775 = count__36744_36768;
var G__36776 = (i__36745_36769 + (1));
seq__36742_36766 = G__36773;
chunk__36743_36767 = G__36774;
count__36744_36768 = G__36775;
i__36745_36769 = G__36776;
continue;
} else {
var temp__5720__auto___36777 = cljs.core.seq.call(null,seq__36742_36766);
if(temp__5720__auto___36777){
var seq__36742_36778__$1 = temp__5720__auto___36777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36742_36778__$1)){
var c__4679__auto___36779 = cljs.core.chunk_first.call(null,seq__36742_36778__$1);
var G__36780 = cljs.core.chunk_rest.call(null,seq__36742_36778__$1);
var G__36781 = c__4679__auto___36779;
var G__36782 = cljs.core.count.call(null,c__4679__auto___36779);
var G__36783 = (0);
seq__36742_36766 = G__36780;
chunk__36743_36767 = G__36781;
count__36744_36768 = G__36782;
i__36745_36769 = G__36783;
continue;
} else {
var vec__36755_36784 = cljs.core.first.call(null,seq__36742_36778__$1);
var i_36785 = cljs.core.nth.call(null,vec__36755_36784,(0),null);
var param_36786 = cljs.core.nth.call(null,vec__36755_36784,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_36786);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__36787 = cljs.core.next.call(null,seq__36742_36778__$1);
var G__36788 = null;
var G__36789 = (0);
var G__36790 = (0);
seq__36742_36766 = G__36787;
chunk__36743_36767 = G__36788;
count__36744_36768 = G__36789;
i__36745_36769 = G__36790;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__36758_36791 = cljs.core.seq.call(null,params);
var chunk__36759_36792 = null;
var count__36760_36793 = (0);
var i__36761_36794 = (0);
while(true){
if((i__36761_36794 < count__36760_36793)){
var param_36795 = cljs.core._nth.call(null,chunk__36759_36792,i__36761_36794);
cljs.compiler.emit.call(null,param_36795);

if(cljs.core._EQ_.call(null,param_36795,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36796 = seq__36758_36791;
var G__36797 = chunk__36759_36792;
var G__36798 = count__36760_36793;
var G__36799 = (i__36761_36794 + (1));
seq__36758_36791 = G__36796;
chunk__36759_36792 = G__36797;
count__36760_36793 = G__36798;
i__36761_36794 = G__36799;
continue;
} else {
var temp__5720__auto___36800 = cljs.core.seq.call(null,seq__36758_36791);
if(temp__5720__auto___36800){
var seq__36758_36801__$1 = temp__5720__auto___36800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36758_36801__$1)){
var c__4679__auto___36802 = cljs.core.chunk_first.call(null,seq__36758_36801__$1);
var G__36803 = cljs.core.chunk_rest.call(null,seq__36758_36801__$1);
var G__36804 = c__4679__auto___36802;
var G__36805 = cljs.core.count.call(null,c__4679__auto___36802);
var G__36806 = (0);
seq__36758_36791 = G__36803;
chunk__36759_36792 = G__36804;
count__36760_36793 = G__36805;
i__36761_36794 = G__36806;
continue;
} else {
var param_36807 = cljs.core.first.call(null,seq__36758_36801__$1);
cljs.compiler.emit.call(null,param_36807);

if(cljs.core._EQ_.call(null,param_36807,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36808 = cljs.core.next.call(null,seq__36758_36801__$1);
var G__36809 = null;
var G__36810 = (0);
var G__36811 = (0);
seq__36758_36791 = G__36808;
chunk__36759_36792 = G__36809;
count__36760_36793 = G__36810;
i__36761_36794 = G__36811;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__36762_36812 = cljs.core.seq.call(null,params);
var chunk__36763_36813 = null;
var count__36764_36814 = (0);
var i__36765_36815 = (0);
while(true){
if((i__36765_36815 < count__36764_36814)){
var param_36816 = cljs.core._nth.call(null,chunk__36763_36813,i__36765_36815);
cljs.compiler.emit.call(null,param_36816);

if(cljs.core._EQ_.call(null,param_36816,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36817 = seq__36762_36812;
var G__36818 = chunk__36763_36813;
var G__36819 = count__36764_36814;
var G__36820 = (i__36765_36815 + (1));
seq__36762_36812 = G__36817;
chunk__36763_36813 = G__36818;
count__36764_36814 = G__36819;
i__36765_36815 = G__36820;
continue;
} else {
var temp__5720__auto___36821 = cljs.core.seq.call(null,seq__36762_36812);
if(temp__5720__auto___36821){
var seq__36762_36822__$1 = temp__5720__auto___36821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36762_36822__$1)){
var c__4679__auto___36823 = cljs.core.chunk_first.call(null,seq__36762_36822__$1);
var G__36824 = cljs.core.chunk_rest.call(null,seq__36762_36822__$1);
var G__36825 = c__4679__auto___36823;
var G__36826 = cljs.core.count.call(null,c__4679__auto___36823);
var G__36827 = (0);
seq__36762_36812 = G__36824;
chunk__36763_36813 = G__36825;
count__36764_36814 = G__36826;
i__36765_36815 = G__36827;
continue;
} else {
var param_36828 = cljs.core.first.call(null,seq__36762_36822__$1);
cljs.compiler.emit.call(null,param_36828);

if(cljs.core._EQ_.call(null,param_36828,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36829 = cljs.core.next.call(null,seq__36762_36822__$1);
var G__36830 = null;
var G__36831 = (0);
var G__36832 = (0);
seq__36762_36812 = G__36829;
chunk__36763_36813 = G__36830;
count__36764_36814 = G__36831;
i__36765_36815 = G__36832;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__36833 = cljs.core.seq.call(null,params);
var chunk__36834 = null;
var count__36835 = (0);
var i__36836 = (0);
while(true){
if((i__36836 < count__36835)){
var param = cljs.core._nth.call(null,chunk__36834,i__36836);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36837 = seq__36833;
var G__36838 = chunk__36834;
var G__36839 = count__36835;
var G__36840 = (i__36836 + (1));
seq__36833 = G__36837;
chunk__36834 = G__36838;
count__36835 = G__36839;
i__36836 = G__36840;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36833);
if(temp__5720__auto__){
var seq__36833__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36833__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__36833__$1);
var G__36841 = cljs.core.chunk_rest.call(null,seq__36833__$1);
var G__36842 = c__4679__auto__;
var G__36843 = cljs.core.count.call(null,c__4679__auto__);
var G__36844 = (0);
seq__36833 = G__36841;
chunk__36834 = G__36842;
count__36835 = G__36843;
i__36836 = G__36844;
continue;
} else {
var param = cljs.core.first.call(null,seq__36833__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36845 = cljs.core.next.call(null,seq__36833__$1);
var G__36846 = null;
var G__36847 = (0);
var G__36848 = (0);
seq__36833 = G__36845;
chunk__36834 = G__36846;
count__36835 = G__36847;
i__36836 = G__36848;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__36849){
var map__36850 = p__36849;
var map__36850__$1 = cljs.core.__destructure_map.call(null,map__36850);
var expr = cljs.core.get.call(null,map__36850__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__36850__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__36850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__36850__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__36850__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__36850__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__36851){
var map__36852 = p__36851;
var map__36852__$1 = cljs.core.__destructure_map.call(null,map__36852);
var f = map__36852__$1;
var expr = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_36861__$1 = (function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_36862 = cljs.compiler.munge.call(null,name_36861__$1);
var delegate_name_36863 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_36862),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_36863," = function (");

var seq__36853_36864 = cljs.core.seq.call(null,params);
var chunk__36854_36865 = null;
var count__36855_36866 = (0);
var i__36856_36867 = (0);
while(true){
if((i__36856_36867 < count__36855_36866)){
var param_36868 = cljs.core._nth.call(null,chunk__36854_36865,i__36856_36867);
cljs.compiler.emit.call(null,param_36868);

if(cljs.core._EQ_.call(null,param_36868,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36869 = seq__36853_36864;
var G__36870 = chunk__36854_36865;
var G__36871 = count__36855_36866;
var G__36872 = (i__36856_36867 + (1));
seq__36853_36864 = G__36869;
chunk__36854_36865 = G__36870;
count__36855_36866 = G__36871;
i__36856_36867 = G__36872;
continue;
} else {
var temp__5720__auto___36873 = cljs.core.seq.call(null,seq__36853_36864);
if(temp__5720__auto___36873){
var seq__36853_36874__$1 = temp__5720__auto___36873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36853_36874__$1)){
var c__4679__auto___36875 = cljs.core.chunk_first.call(null,seq__36853_36874__$1);
var G__36876 = cljs.core.chunk_rest.call(null,seq__36853_36874__$1);
var G__36877 = c__4679__auto___36875;
var G__36878 = cljs.core.count.call(null,c__4679__auto___36875);
var G__36879 = (0);
seq__36853_36864 = G__36876;
chunk__36854_36865 = G__36877;
count__36855_36866 = G__36878;
i__36856_36867 = G__36879;
continue;
} else {
var param_36880 = cljs.core.first.call(null,seq__36853_36874__$1);
cljs.compiler.emit.call(null,param_36880);

if(cljs.core._EQ_.call(null,param_36880,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36881 = cljs.core.next.call(null,seq__36853_36874__$1);
var G__36882 = null;
var G__36883 = (0);
var G__36884 = (0);
seq__36853_36864 = G__36881;
chunk__36854_36865 = G__36882;
count__36855_36866 = G__36883;
i__36856_36867 = G__36884;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_36862," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_36885 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_36885,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_36863,".call(this,");

var seq__36857_36886 = cljs.core.seq.call(null,params);
var chunk__36858_36887 = null;
var count__36859_36888 = (0);
var i__36860_36889 = (0);
while(true){
if((i__36860_36889 < count__36859_36888)){
var param_36890 = cljs.core._nth.call(null,chunk__36858_36887,i__36860_36889);
cljs.compiler.emit.call(null,param_36890);

if(cljs.core._EQ_.call(null,param_36890,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36891 = seq__36857_36886;
var G__36892 = chunk__36858_36887;
var G__36893 = count__36859_36888;
var G__36894 = (i__36860_36889 + (1));
seq__36857_36886 = G__36891;
chunk__36858_36887 = G__36892;
count__36859_36888 = G__36893;
i__36860_36889 = G__36894;
continue;
} else {
var temp__5720__auto___36895 = cljs.core.seq.call(null,seq__36857_36886);
if(temp__5720__auto___36895){
var seq__36857_36896__$1 = temp__5720__auto___36895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36857_36896__$1)){
var c__4679__auto___36897 = cljs.core.chunk_first.call(null,seq__36857_36896__$1);
var G__36898 = cljs.core.chunk_rest.call(null,seq__36857_36896__$1);
var G__36899 = c__4679__auto___36897;
var G__36900 = cljs.core.count.call(null,c__4679__auto___36897);
var G__36901 = (0);
seq__36857_36886 = G__36898;
chunk__36858_36887 = G__36899;
count__36859_36888 = G__36900;
i__36860_36889 = G__36901;
continue;
} else {
var param_36902 = cljs.core.first.call(null,seq__36857_36896__$1);
cljs.compiler.emit.call(null,param_36902);

if(cljs.core._EQ_.call(null,param_36902,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__36903 = cljs.core.next.call(null,seq__36857_36896__$1);
var G__36904 = null;
var G__36905 = (0);
var G__36906 = (0);
seq__36857_36886 = G__36903;
chunk__36858_36887 = G__36904;
count__36859_36888 = G__36905;
i__36860_36889 = G__36906;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_36862,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_36862,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_36861__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_36862,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_36863,";");

cljs.compiler.emitln.call(null,"return ",mname_36862,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__36910){
var map__36911 = p__36910;
var map__36911__$1 = cljs.core.__destructure_map.call(null,map__36911);
var variadic = cljs.core.get.call(null,map__36911__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__36911__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__36911__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__36911__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__36911__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__36911__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__36911__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__36911__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__36907_SHARP_){
var and__4251__auto__ = p1__36907_SHARP_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__36907_SHARP_));
} else {
return and__4251__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__4253__auto__ = in_loop;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_36963__$1 = (function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_36964 = cljs.compiler.munge.call(null,name_36963__$1);
var maxparams_36965 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_36966 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_36964),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_36967 = cljs.core.sort_by.call(null,(function (p1__36908_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__36908_SHARP_)));
}),cljs.core.seq.call(null,mmap_36966));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_36964," = null;");

var seq__36912_36968 = cljs.core.seq.call(null,ms_36967);
var chunk__36913_36969 = null;
var count__36914_36970 = (0);
var i__36915_36971 = (0);
while(true){
if((i__36915_36971 < count__36914_36970)){
var vec__36922_36972 = cljs.core._nth.call(null,chunk__36913_36969,i__36915_36971);
var n_36973 = cljs.core.nth.call(null,vec__36922_36972,(0),null);
var meth_36974 = cljs.core.nth.call(null,vec__36922_36972,(1),null);
cljs.compiler.emits.call(null,"var ",n_36973," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_36974))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_36974);
} else {
cljs.compiler.emit_fn_method.call(null,meth_36974);
}

cljs.compiler.emitln.call(null,";");


var G__36975 = seq__36912_36968;
var G__36976 = chunk__36913_36969;
var G__36977 = count__36914_36970;
var G__36978 = (i__36915_36971 + (1));
seq__36912_36968 = G__36975;
chunk__36913_36969 = G__36976;
count__36914_36970 = G__36977;
i__36915_36971 = G__36978;
continue;
} else {
var temp__5720__auto___36979 = cljs.core.seq.call(null,seq__36912_36968);
if(temp__5720__auto___36979){
var seq__36912_36980__$1 = temp__5720__auto___36979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36912_36980__$1)){
var c__4679__auto___36981 = cljs.core.chunk_first.call(null,seq__36912_36980__$1);
var G__36982 = cljs.core.chunk_rest.call(null,seq__36912_36980__$1);
var G__36983 = c__4679__auto___36981;
var G__36984 = cljs.core.count.call(null,c__4679__auto___36981);
var G__36985 = (0);
seq__36912_36968 = G__36982;
chunk__36913_36969 = G__36983;
count__36914_36970 = G__36984;
i__36915_36971 = G__36985;
continue;
} else {
var vec__36925_36986 = cljs.core.first.call(null,seq__36912_36980__$1);
var n_36987 = cljs.core.nth.call(null,vec__36925_36986,(0),null);
var meth_36988 = cljs.core.nth.call(null,vec__36925_36986,(1),null);
cljs.compiler.emits.call(null,"var ",n_36987," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_36988))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_36988);
} else {
cljs.compiler.emit_fn_method.call(null,meth_36988);
}

cljs.compiler.emitln.call(null,";");


var G__36989 = cljs.core.next.call(null,seq__36912_36980__$1);
var G__36990 = null;
var G__36991 = (0);
var G__36992 = (0);
seq__36912_36968 = G__36989;
chunk__36913_36969 = G__36990;
count__36914_36970 = G__36991;
i__36915_36971 = G__36992;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_36964," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_36965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_36965)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_36965));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__36928_36993 = cljs.core.seq.call(null,ms_36967);
var chunk__36929_36994 = null;
var count__36930_36995 = (0);
var i__36931_36996 = (0);
while(true){
if((i__36931_36996 < count__36930_36995)){
var vec__36938_36997 = cljs.core._nth.call(null,chunk__36929_36994,i__36931_36996);
var n_36998 = cljs.core.nth.call(null,vec__36938_36997,(0),null);
var meth_36999 = cljs.core.nth.call(null,vec__36938_36997,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_36999))){
cljs.compiler.emitln.call(null,"default:");

var restarg_37000 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_37000," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_37001 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_37000," = new cljs.core.IndexedSeq(",a_37001,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_36998,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_36965)),(((cljs.core.count.call(null,maxparams_36965) > (1)))?", ":null),restarg_37000,");");
} else {
var pcnt_37002 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_36999));
cljs.compiler.emitln.call(null,"case ",pcnt_37002,":");

cljs.compiler.emitln.call(null,"return ",n_36998,".call(this",(((pcnt_37002 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_37002,maxparams_36965)),null,(1),null)),(2),null))),");");
}


var G__37003 = seq__36928_36993;
var G__37004 = chunk__36929_36994;
var G__37005 = count__36930_36995;
var G__37006 = (i__36931_36996 + (1));
seq__36928_36993 = G__37003;
chunk__36929_36994 = G__37004;
count__36930_36995 = G__37005;
i__36931_36996 = G__37006;
continue;
} else {
var temp__5720__auto___37007 = cljs.core.seq.call(null,seq__36928_36993);
if(temp__5720__auto___37007){
var seq__36928_37008__$1 = temp__5720__auto___37007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36928_37008__$1)){
var c__4679__auto___37009 = cljs.core.chunk_first.call(null,seq__36928_37008__$1);
var G__37010 = cljs.core.chunk_rest.call(null,seq__36928_37008__$1);
var G__37011 = c__4679__auto___37009;
var G__37012 = cljs.core.count.call(null,c__4679__auto___37009);
var G__37013 = (0);
seq__36928_36993 = G__37010;
chunk__36929_36994 = G__37011;
count__36930_36995 = G__37012;
i__36931_36996 = G__37013;
continue;
} else {
var vec__36941_37014 = cljs.core.first.call(null,seq__36928_37008__$1);
var n_37015 = cljs.core.nth.call(null,vec__36941_37014,(0),null);
var meth_37016 = cljs.core.nth.call(null,vec__36941_37014,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_37016))){
cljs.compiler.emitln.call(null,"default:");

var restarg_37017 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_37017," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_37018 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_37017," = new cljs.core.IndexedSeq(",a_37018,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_37015,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_36965)),(((cljs.core.count.call(null,maxparams_36965) > (1)))?", ":null),restarg_37017,");");
} else {
var pcnt_37019 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_37016));
cljs.compiler.emitln.call(null,"case ",pcnt_37019,":");

cljs.compiler.emitln.call(null,"return ",n_37015,".call(this",(((pcnt_37019 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_37019,maxparams_36965)),null,(1),null)),(2),null))),");");
}


var G__37020 = cljs.core.next.call(null,seq__36928_37008__$1);
var G__37021 = null;
var G__37022 = (0);
var G__37023 = (0);
seq__36928_36993 = G__37020;
chunk__36929_36994 = G__37021;
count__36930_36995 = G__37022;
i__36931_36996 = G__37023;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_37024 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_36967)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_37024,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_36964,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_36964,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__36909_SHARP_){
var vec__36944 = p1__36909_SHARP_;
var n = cljs.core.nth.call(null,vec__36944,(0),null);
var m = cljs.core.nth.call(null,vec__36944,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_36967),".cljs$lang$applyTo;");
} else {
}

var seq__36947_37025 = cljs.core.seq.call(null,ms_36967);
var chunk__36948_37026 = null;
var count__36949_37027 = (0);
var i__36950_37028 = (0);
while(true){
if((i__36950_37028 < count__36949_37027)){
var vec__36957_37029 = cljs.core._nth.call(null,chunk__36948_37026,i__36950_37028);
var n_37030 = cljs.core.nth.call(null,vec__36957_37029,(0),null);
var meth_37031 = cljs.core.nth.call(null,vec__36957_37029,(1),null);
var c_37032 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_37031));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_37031))){
cljs.compiler.emitln.call(null,mname_36964,".cljs$core$IFn$_invoke$arity$variadic = ",n_37030,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_36964,".cljs$core$IFn$_invoke$arity$",c_37032," = ",n_37030,";");
}


var G__37033 = seq__36947_37025;
var G__37034 = chunk__36948_37026;
var G__37035 = count__36949_37027;
var G__37036 = (i__36950_37028 + (1));
seq__36947_37025 = G__37033;
chunk__36948_37026 = G__37034;
count__36949_37027 = G__37035;
i__36950_37028 = G__37036;
continue;
} else {
var temp__5720__auto___37037 = cljs.core.seq.call(null,seq__36947_37025);
if(temp__5720__auto___37037){
var seq__36947_37038__$1 = temp__5720__auto___37037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36947_37038__$1)){
var c__4679__auto___37039 = cljs.core.chunk_first.call(null,seq__36947_37038__$1);
var G__37040 = cljs.core.chunk_rest.call(null,seq__36947_37038__$1);
var G__37041 = c__4679__auto___37039;
var G__37042 = cljs.core.count.call(null,c__4679__auto___37039);
var G__37043 = (0);
seq__36947_37025 = G__37040;
chunk__36948_37026 = G__37041;
count__36949_37027 = G__37042;
i__36950_37028 = G__37043;
continue;
} else {
var vec__36960_37044 = cljs.core.first.call(null,seq__36947_37038__$1);
var n_37045 = cljs.core.nth.call(null,vec__36960_37044,(0),null);
var meth_37046 = cljs.core.nth.call(null,vec__36960_37044,(1),null);
var c_37047 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_37046));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_37046))){
cljs.compiler.emitln.call(null,mname_36964,".cljs$core$IFn$_invoke$arity$variadic = ",n_37045,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_36964,".cljs$core$IFn$_invoke$arity$",c_37047," = ",n_37045,";");
}


var G__37048 = cljs.core.next.call(null,seq__36947_37038__$1);
var G__37049 = null;
var G__37050 = (0);
var G__37051 = (0);
seq__36947_37025 = G__37048;
chunk__36948_37026 = G__37049;
count__36949_37027 = G__37050;
i__36950_37028 = G__37051;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_36964,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__37052){
var map__37053 = p__37052;
var map__37053__$1 = cljs.core.__destructure_map.call(null,map__37053);
var statements = cljs.core.get.call(null,map__37053__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__37053__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__37053__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__37054_37058 = cljs.core.seq.call(null,statements);
var chunk__37055_37059 = null;
var count__37056_37060 = (0);
var i__37057_37061 = (0);
while(true){
if((i__37057_37061 < count__37056_37060)){
var s_37062 = cljs.core._nth.call(null,chunk__37055_37059,i__37057_37061);
cljs.compiler.emitln.call(null,s_37062);


var G__37063 = seq__37054_37058;
var G__37064 = chunk__37055_37059;
var G__37065 = count__37056_37060;
var G__37066 = (i__37057_37061 + (1));
seq__37054_37058 = G__37063;
chunk__37055_37059 = G__37064;
count__37056_37060 = G__37065;
i__37057_37061 = G__37066;
continue;
} else {
var temp__5720__auto___37067 = cljs.core.seq.call(null,seq__37054_37058);
if(temp__5720__auto___37067){
var seq__37054_37068__$1 = temp__5720__auto___37067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37054_37068__$1)){
var c__4679__auto___37069 = cljs.core.chunk_first.call(null,seq__37054_37068__$1);
var G__37070 = cljs.core.chunk_rest.call(null,seq__37054_37068__$1);
var G__37071 = c__4679__auto___37069;
var G__37072 = cljs.core.count.call(null,c__4679__auto___37069);
var G__37073 = (0);
seq__37054_37058 = G__37070;
chunk__37055_37059 = G__37071;
count__37056_37060 = G__37072;
i__37057_37061 = G__37073;
continue;
} else {
var s_37074 = cljs.core.first.call(null,seq__37054_37068__$1);
cljs.compiler.emitln.call(null,s_37074);


var G__37075 = cljs.core.next.call(null,seq__37054_37068__$1);
var G__37076 = null;
var G__37077 = (0);
var G__37078 = (0);
seq__37054_37058 = G__37075;
chunk__37055_37059 = G__37076;
count__37056_37060 = G__37077;
i__37057_37061 = G__37078;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__37079){
var map__37080 = p__37079;
var map__37080__$1 = cljs.core.__destructure_map.call(null,map__37080);
var try$ = cljs.core.get.call(null,map__37080__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__37080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__37080__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__37080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__37080__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__37081,is_loop){
var map__37082 = p__37081;
var map__37082__$1 = cljs.core.__destructure_map.call(null,map__37082);
var expr = cljs.core.get.call(null,map__37082__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__37082__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__37082__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__37083_37093 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__37084_37094 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__37084_37094);

try{var seq__37085_37095 = cljs.core.seq.call(null,bindings);
var chunk__37086_37096 = null;
var count__37087_37097 = (0);
var i__37088_37098 = (0);
while(true){
if((i__37088_37098 < count__37087_37097)){
var map__37091_37099 = cljs.core._nth.call(null,chunk__37086_37096,i__37088_37098);
var map__37091_37100__$1 = cljs.core.__destructure_map.call(null,map__37091_37099);
var binding_37101 = map__37091_37100__$1;
var init_37102 = cljs.core.get.call(null,map__37091_37100__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_37101);

cljs.compiler.emitln.call(null," = ",init_37102,";");


var G__37103 = seq__37085_37095;
var G__37104 = chunk__37086_37096;
var G__37105 = count__37087_37097;
var G__37106 = (i__37088_37098 + (1));
seq__37085_37095 = G__37103;
chunk__37086_37096 = G__37104;
count__37087_37097 = G__37105;
i__37088_37098 = G__37106;
continue;
} else {
var temp__5720__auto___37107 = cljs.core.seq.call(null,seq__37085_37095);
if(temp__5720__auto___37107){
var seq__37085_37108__$1 = temp__5720__auto___37107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37085_37108__$1)){
var c__4679__auto___37109 = cljs.core.chunk_first.call(null,seq__37085_37108__$1);
var G__37110 = cljs.core.chunk_rest.call(null,seq__37085_37108__$1);
var G__37111 = c__4679__auto___37109;
var G__37112 = cljs.core.count.call(null,c__4679__auto___37109);
var G__37113 = (0);
seq__37085_37095 = G__37110;
chunk__37086_37096 = G__37111;
count__37087_37097 = G__37112;
i__37088_37098 = G__37113;
continue;
} else {
var map__37092_37114 = cljs.core.first.call(null,seq__37085_37108__$1);
var map__37092_37115__$1 = cljs.core.__destructure_map.call(null,map__37092_37114);
var binding_37116 = map__37092_37115__$1;
var init_37117 = cljs.core.get.call(null,map__37092_37115__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_37116);

cljs.compiler.emitln.call(null," = ",init_37117,";");


var G__37118 = cljs.core.next.call(null,seq__37085_37108__$1);
var G__37119 = null;
var G__37120 = (0);
var G__37121 = (0);
seq__37085_37095 = G__37118;
chunk__37086_37096 = G__37119;
count__37087_37097 = G__37120;
i__37088_37098 = G__37121;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__37083_37093);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__37122){
var map__37123 = p__37122;
var map__37123__$1 = cljs.core.__destructure_map.call(null,map__37123);
var frame = cljs.core.get.call(null,map__37123__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__37123__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__37123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4741__auto___37124 = cljs.core.count.call(null,exprs);
var i_37125 = (0);
while(true){
if((i_37125 < n__4741__auto___37124)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_37125)," = ",exprs.call(null,i_37125),";");

var G__37126 = (i_37125 + (1));
i_37125 = G__37126;
continue;
} else {
}
break;
}

var n__4741__auto___37127 = cljs.core.count.call(null,exprs);
var i_37128 = (0);
while(true){
if((i_37128 < n__4741__auto___37127)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_37128))," = ",temps.call(null,i_37128),";");

var G__37129 = (i_37128 + (1));
i_37128 = G__37129;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__37130){
var map__37131 = p__37130;
var map__37131__$1 = cljs.core.__destructure_map.call(null,map__37131);
var expr = cljs.core.get.call(null,map__37131__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__37131__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__37131__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__37132_37140 = cljs.core.seq.call(null,bindings);
var chunk__37133_37141 = null;
var count__37134_37142 = (0);
var i__37135_37143 = (0);
while(true){
if((i__37135_37143 < count__37134_37142)){
var map__37138_37144 = cljs.core._nth.call(null,chunk__37133_37141,i__37135_37143);
var map__37138_37145__$1 = cljs.core.__destructure_map.call(null,map__37138_37144);
var binding_37146 = map__37138_37145__$1;
var init_37147 = cljs.core.get.call(null,map__37138_37145__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_37146)," = ",init_37147,";");


var G__37148 = seq__37132_37140;
var G__37149 = chunk__37133_37141;
var G__37150 = count__37134_37142;
var G__37151 = (i__37135_37143 + (1));
seq__37132_37140 = G__37148;
chunk__37133_37141 = G__37149;
count__37134_37142 = G__37150;
i__37135_37143 = G__37151;
continue;
} else {
var temp__5720__auto___37152 = cljs.core.seq.call(null,seq__37132_37140);
if(temp__5720__auto___37152){
var seq__37132_37153__$1 = temp__5720__auto___37152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37132_37153__$1)){
var c__4679__auto___37154 = cljs.core.chunk_first.call(null,seq__37132_37153__$1);
var G__37155 = cljs.core.chunk_rest.call(null,seq__37132_37153__$1);
var G__37156 = c__4679__auto___37154;
var G__37157 = cljs.core.count.call(null,c__4679__auto___37154);
var G__37158 = (0);
seq__37132_37140 = G__37155;
chunk__37133_37141 = G__37156;
count__37134_37142 = G__37157;
i__37135_37143 = G__37158;
continue;
} else {
var map__37139_37159 = cljs.core.first.call(null,seq__37132_37153__$1);
var map__37139_37160__$1 = cljs.core.__destructure_map.call(null,map__37139_37159);
var binding_37161 = map__37139_37160__$1;
var init_37162 = cljs.core.get.call(null,map__37139_37160__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_37161)," = ",init_37162,";");


var G__37163 = cljs.core.next.call(null,seq__37132_37153__$1);
var G__37164 = null;
var G__37165 = (0);
var G__37166 = (0);
seq__37132_37140 = G__37163;
chunk__37133_37141 = G__37164;
count__37134_37142 = G__37165;
i__37135_37143 = G__37166;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__37169){
var map__37170 = p__37169;
var map__37170__$1 = cljs.core.__destructure_map.call(null,map__37170);
var expr = map__37170__$1;
var f = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4251__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4251__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4251__auto__ = protocol;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = tag;
if(cljs.core.truth_(and__4251__auto____$1)){
var or__4253__auto__ = (function (){var and__4251__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = protocol;
if(cljs.core.truth_(and__4251__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto____$2 = (function (){var or__4253__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4251__auto____$2)){
var or__4253__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__4251__auto____$3){
var and__4251__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__4251__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
}
} else {
return and__4251__auto____$2;
}
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__4253__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4253__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4253__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__37171 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (arity > mfa);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__37167_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__37167_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__37168_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__37168_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__37171,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__37171,(1),null);
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_37174 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_37174,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_37175 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_37175,args)),(((mfa_37175 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_37175,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4251__auto__;
}
})())){
var fprop_37176 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_37176," ? ",f__$1,fprop_37176,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_37176," ? ",f__$1,fprop_37176,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__37177){
var map__37178 = p__37177;
var map__37178__$1 = cljs.core.__destructure_map.call(null,map__37178);
var ctor = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__37179){
var map__37180 = p__37179;
var map__37180__$1 = cljs.core.__destructure_map.call(null,map__37180);
var target = cljs.core.get.call(null,map__37180__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__37180__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__37180__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__37181_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37181_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__37182 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__37182,(0),null);
var sublib = cljs.core.nth.call(null,vec__37182,(1),null);
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4253__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.compiler.sublib_select.call(null,sublib),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__37185 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__37185__$1 = cljs.core.__destructure_map.call(null,map__37185);
var options = cljs.core.get.call(null,map__37185__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__37185__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__37186 = options;
var map__37186__$1 = cljs.core.__destructure_map.call(null,map__37186);
var target = cljs.core.get.call(null,map__37186__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__37186__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__37186__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__37187 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__37193 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__37193__$1 = cljs.core.__destructure_map.call(null,map__37193);
var node_libs = cljs.core.get.call(null,map__37193__$1,true);
var libs_to_load = cljs.core.get.call(null,map__37193__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__37187,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__37187,(1),null);
var vec__37190 = (function (){var map__37194 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__37194__$1 = cljs.core.__destructure_map.call(null,map__37194);
var goog_modules = cljs.core.get.call(null,map__37194__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__37194__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__37190,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__37190,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__37195_37239 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__37196_37240 = null;
var count__37197_37241 = (0);
var i__37198_37242 = (0);
while(true){
if((i__37198_37242 < count__37197_37241)){
var lib_37243 = cljs.core._nth.call(null,chunk__37196_37240,i__37198_37242);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_37243)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_37243),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_37243),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_37243),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_37243),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_37243,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_37243),"');");
}

}
}
}


var G__37244 = seq__37195_37239;
var G__37245 = chunk__37196_37240;
var G__37246 = count__37197_37241;
var G__37247 = (i__37198_37242 + (1));
seq__37195_37239 = G__37244;
chunk__37196_37240 = G__37245;
count__37197_37241 = G__37246;
i__37198_37242 = G__37247;
continue;
} else {
var temp__5720__auto___37248 = cljs.core.seq.call(null,seq__37195_37239);
if(temp__5720__auto___37248){
var seq__37195_37249__$1 = temp__5720__auto___37248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37195_37249__$1)){
var c__4679__auto___37250 = cljs.core.chunk_first.call(null,seq__37195_37249__$1);
var G__37251 = cljs.core.chunk_rest.call(null,seq__37195_37249__$1);
var G__37252 = c__4679__auto___37250;
var G__37253 = cljs.core.count.call(null,c__4679__auto___37250);
var G__37254 = (0);
seq__37195_37239 = G__37251;
chunk__37196_37240 = G__37252;
count__37197_37241 = G__37253;
i__37198_37242 = G__37254;
continue;
} else {
var lib_37255 = cljs.core.first.call(null,seq__37195_37249__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_37255)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_37255),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_37255),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_37255),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_37255),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_37255,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_37255),"');");
}

}
}
}


var G__37256 = cljs.core.next.call(null,seq__37195_37249__$1);
var G__37257 = null;
var G__37258 = (0);
var G__37259 = (0);
seq__37195_37239 = G__37256;
chunk__37196_37240 = G__37257;
count__37197_37241 = G__37258;
i__37198_37242 = G__37259;
continue;
}
} else {
}
}
break;
}

var seq__37199_37260 = cljs.core.seq.call(null,node_libs);
var chunk__37200_37261 = null;
var count__37201_37262 = (0);
var i__37202_37263 = (0);
while(true){
if((i__37202_37263 < count__37201_37262)){
var lib_37264 = cljs.core._nth.call(null,chunk__37200_37261,i__37202_37263);
var vec__37209_37265 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_37264);
var lib_SINGLEQUOTE__37266 = cljs.core.nth.call(null,vec__37209_37265,(0),null);
var sublib_37267 = cljs.core.nth.call(null,vec__37209_37265,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_37264)," = require('",lib_SINGLEQUOTE__37266,"')",cljs.compiler.sublib_select.call(null,sublib_37267),";");


var G__37268 = seq__37199_37260;
var G__37269 = chunk__37200_37261;
var G__37270 = count__37201_37262;
var G__37271 = (i__37202_37263 + (1));
seq__37199_37260 = G__37268;
chunk__37200_37261 = G__37269;
count__37201_37262 = G__37270;
i__37202_37263 = G__37271;
continue;
} else {
var temp__5720__auto___37272 = cljs.core.seq.call(null,seq__37199_37260);
if(temp__5720__auto___37272){
var seq__37199_37273__$1 = temp__5720__auto___37272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37199_37273__$1)){
var c__4679__auto___37274 = cljs.core.chunk_first.call(null,seq__37199_37273__$1);
var G__37275 = cljs.core.chunk_rest.call(null,seq__37199_37273__$1);
var G__37276 = c__4679__auto___37274;
var G__37277 = cljs.core.count.call(null,c__4679__auto___37274);
var G__37278 = (0);
seq__37199_37260 = G__37275;
chunk__37200_37261 = G__37276;
count__37201_37262 = G__37277;
i__37202_37263 = G__37278;
continue;
} else {
var lib_37279 = cljs.core.first.call(null,seq__37199_37273__$1);
var vec__37212_37280 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_37279);
var lib_SINGLEQUOTE__37281 = cljs.core.nth.call(null,vec__37212_37280,(0),null);
var sublib_37282 = cljs.core.nth.call(null,vec__37212_37280,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_37279)," = require('",lib_SINGLEQUOTE__37281,"')",cljs.compiler.sublib_select.call(null,sublib_37282),";");


var G__37283 = cljs.core.next.call(null,seq__37199_37273__$1);
var G__37284 = null;
var G__37285 = (0);
var G__37286 = (0);
seq__37199_37260 = G__37283;
chunk__37200_37261 = G__37284;
count__37201_37262 = G__37285;
i__37202_37263 = G__37286;
continue;
}
} else {
}
}
break;
}

var seq__37215_37287 = cljs.core.seq.call(null,goog_modules);
var chunk__37216_37288 = null;
var count__37217_37289 = (0);
var i__37218_37290 = (0);
while(true){
if((i__37218_37290 < count__37217_37289)){
var lib_37291 = cljs.core._nth.call(null,chunk__37216_37288,i__37218_37290);
var vec__37225_37292 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_37291);
var lib_SINGLEQUOTE__37293 = cljs.core.nth.call(null,vec__37225_37292,(0),null);
var sublib_37294 = cljs.core.nth.call(null,vec__37225_37292,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__37293,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_37291)," = goog.module.get('",lib_SINGLEQUOTE__37293,"')",cljs.compiler.sublib_select.call(null,sublib_37294),";");

cljs.compiler.emitln.call(null,"});");


var G__37295 = seq__37215_37287;
var G__37296 = chunk__37216_37288;
var G__37297 = count__37217_37289;
var G__37298 = (i__37218_37290 + (1));
seq__37215_37287 = G__37295;
chunk__37216_37288 = G__37296;
count__37217_37289 = G__37297;
i__37218_37290 = G__37298;
continue;
} else {
var temp__5720__auto___37299 = cljs.core.seq.call(null,seq__37215_37287);
if(temp__5720__auto___37299){
var seq__37215_37300__$1 = temp__5720__auto___37299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37215_37300__$1)){
var c__4679__auto___37301 = cljs.core.chunk_first.call(null,seq__37215_37300__$1);
var G__37302 = cljs.core.chunk_rest.call(null,seq__37215_37300__$1);
var G__37303 = c__4679__auto___37301;
var G__37304 = cljs.core.count.call(null,c__4679__auto___37301);
var G__37305 = (0);
seq__37215_37287 = G__37302;
chunk__37216_37288 = G__37303;
count__37217_37289 = G__37304;
i__37218_37290 = G__37305;
continue;
} else {
var lib_37306 = cljs.core.first.call(null,seq__37215_37300__$1);
var vec__37228_37307 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_37306);
var lib_SINGLEQUOTE__37308 = cljs.core.nth.call(null,vec__37228_37307,(0),null);
var sublib_37309 = cljs.core.nth.call(null,vec__37228_37307,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__37308,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_37306)," = goog.module.get('",lib_SINGLEQUOTE__37308,"')",cljs.compiler.sublib_select.call(null,sublib_37309),";");

cljs.compiler.emitln.call(null,"});");


var G__37310 = cljs.core.next.call(null,seq__37215_37300__$1);
var G__37311 = null;
var G__37312 = (0);
var G__37313 = (0);
seq__37215_37287 = G__37310;
chunk__37216_37288 = G__37311;
count__37217_37289 = G__37312;
i__37218_37290 = G__37313;
continue;
}
} else {
}
}
break;
}

var seq__37231_37314 = cljs.core.seq.call(null,global_exports_libs);
var chunk__37232_37315 = null;
var count__37233_37316 = (0);
var i__37234_37317 = (0);
while(true){
if((i__37234_37317 < count__37233_37316)){
var lib_37318 = cljs.core._nth.call(null,chunk__37232_37315,i__37234_37317);
var map__37237_37319 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_37318))));
var map__37237_37320__$1 = cljs.core.__destructure_map.call(null,map__37237_37319);
var global_exports_37321 = cljs.core.get.call(null,map__37237_37320__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_37321,lib_37318);


var G__37322 = seq__37231_37314;
var G__37323 = chunk__37232_37315;
var G__37324 = count__37233_37316;
var G__37325 = (i__37234_37317 + (1));
seq__37231_37314 = G__37322;
chunk__37232_37315 = G__37323;
count__37233_37316 = G__37324;
i__37234_37317 = G__37325;
continue;
} else {
var temp__5720__auto___37326 = cljs.core.seq.call(null,seq__37231_37314);
if(temp__5720__auto___37326){
var seq__37231_37327__$1 = temp__5720__auto___37326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37231_37327__$1)){
var c__4679__auto___37328 = cljs.core.chunk_first.call(null,seq__37231_37327__$1);
var G__37329 = cljs.core.chunk_rest.call(null,seq__37231_37327__$1);
var G__37330 = c__4679__auto___37328;
var G__37331 = cljs.core.count.call(null,c__4679__auto___37328);
var G__37332 = (0);
seq__37231_37314 = G__37329;
chunk__37232_37315 = G__37330;
count__37233_37316 = G__37331;
i__37234_37317 = G__37332;
continue;
} else {
var lib_37333 = cljs.core.first.call(null,seq__37231_37327__$1);
var map__37238_37334 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_37333))));
var map__37238_37335__$1 = cljs.core.__destructure_map.call(null,map__37238_37334);
var global_exports_37336 = cljs.core.get.call(null,map__37238_37335__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_37336,lib_37333);


var G__37337 = cljs.core.next.call(null,seq__37231_37327__$1);
var G__37338 = null;
var G__37339 = (0);
var G__37340 = (0);
seq__37231_37314 = G__37337;
chunk__37232_37315 = G__37338;
count__37233_37316 = G__37339;
i__37234_37317 = G__37340;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__37341){
var map__37342 = p__37341;
var map__37342__$1 = cljs.core.__destructure_map.call(null,map__37342);
var name = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__37343){
var map__37344 = p__37343;
var map__37344__$1 = cljs.core.__destructure_map.call(null,map__37344);
var name = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__37345){
var map__37346 = p__37345;
var map__37346__$1 = cljs.core.__destructure_map.call(null,map__37346);
var t = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__37347_37371 = cljs.core.seq.call(null,protocols);
var chunk__37348_37372 = null;
var count__37349_37373 = (0);
var i__37350_37374 = (0);
while(true){
if((i__37350_37374 < count__37349_37373)){
var protocol_37375 = cljs.core._nth.call(null,chunk__37348_37372,i__37350_37374);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_37375)),"}");


var G__37376 = seq__37347_37371;
var G__37377 = chunk__37348_37372;
var G__37378 = count__37349_37373;
var G__37379 = (i__37350_37374 + (1));
seq__37347_37371 = G__37376;
chunk__37348_37372 = G__37377;
count__37349_37373 = G__37378;
i__37350_37374 = G__37379;
continue;
} else {
var temp__5720__auto___37380 = cljs.core.seq.call(null,seq__37347_37371);
if(temp__5720__auto___37380){
var seq__37347_37381__$1 = temp__5720__auto___37380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37347_37381__$1)){
var c__4679__auto___37382 = cljs.core.chunk_first.call(null,seq__37347_37381__$1);
var G__37383 = cljs.core.chunk_rest.call(null,seq__37347_37381__$1);
var G__37384 = c__4679__auto___37382;
var G__37385 = cljs.core.count.call(null,c__4679__auto___37382);
var G__37386 = (0);
seq__37347_37371 = G__37383;
chunk__37348_37372 = G__37384;
count__37349_37373 = G__37385;
i__37350_37374 = G__37386;
continue;
} else {
var protocol_37387 = cljs.core.first.call(null,seq__37347_37381__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_37387)),"}");


var G__37388 = cljs.core.next.call(null,seq__37347_37381__$1);
var G__37389 = null;
var G__37390 = (0);
var G__37391 = (0);
seq__37347_37371 = G__37388;
chunk__37348_37372 = G__37389;
count__37349_37373 = G__37390;
i__37350_37374 = G__37391;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__37351_37392 = cljs.core.seq.call(null,fields__$1);
var chunk__37352_37393 = null;
var count__37353_37394 = (0);
var i__37354_37395 = (0);
while(true){
if((i__37354_37395 < count__37353_37394)){
var fld_37396 = cljs.core._nth.call(null,chunk__37352_37393,i__37354_37395);
cljs.compiler.emitln.call(null,"this.",fld_37396," = ",fld_37396,";");


var G__37397 = seq__37351_37392;
var G__37398 = chunk__37352_37393;
var G__37399 = count__37353_37394;
var G__37400 = (i__37354_37395 + (1));
seq__37351_37392 = G__37397;
chunk__37352_37393 = G__37398;
count__37353_37394 = G__37399;
i__37354_37395 = G__37400;
continue;
} else {
var temp__5720__auto___37401 = cljs.core.seq.call(null,seq__37351_37392);
if(temp__5720__auto___37401){
var seq__37351_37402__$1 = temp__5720__auto___37401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37351_37402__$1)){
var c__4679__auto___37403 = cljs.core.chunk_first.call(null,seq__37351_37402__$1);
var G__37404 = cljs.core.chunk_rest.call(null,seq__37351_37402__$1);
var G__37405 = c__4679__auto___37403;
var G__37406 = cljs.core.count.call(null,c__4679__auto___37403);
var G__37407 = (0);
seq__37351_37392 = G__37404;
chunk__37352_37393 = G__37405;
count__37353_37394 = G__37406;
i__37354_37395 = G__37407;
continue;
} else {
var fld_37408 = cljs.core.first.call(null,seq__37351_37402__$1);
cljs.compiler.emitln.call(null,"this.",fld_37408," = ",fld_37408,";");


var G__37409 = cljs.core.next.call(null,seq__37351_37402__$1);
var G__37410 = null;
var G__37411 = (0);
var G__37412 = (0);
seq__37351_37392 = G__37409;
chunk__37352_37393 = G__37410;
count__37353_37394 = G__37411;
i__37354_37395 = G__37412;
continue;
}
} else {
}
}
break;
}

var seq__37355_37413 = cljs.core.seq.call(null,pmasks);
var chunk__37356_37414 = null;
var count__37357_37415 = (0);
var i__37358_37416 = (0);
while(true){
if((i__37358_37416 < count__37357_37415)){
var vec__37365_37417 = cljs.core._nth.call(null,chunk__37356_37414,i__37358_37416);
var pno_37418 = cljs.core.nth.call(null,vec__37365_37417,(0),null);
var pmask_37419 = cljs.core.nth.call(null,vec__37365_37417,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_37418,"$ = ",pmask_37419,";");


var G__37420 = seq__37355_37413;
var G__37421 = chunk__37356_37414;
var G__37422 = count__37357_37415;
var G__37423 = (i__37358_37416 + (1));
seq__37355_37413 = G__37420;
chunk__37356_37414 = G__37421;
count__37357_37415 = G__37422;
i__37358_37416 = G__37423;
continue;
} else {
var temp__5720__auto___37424 = cljs.core.seq.call(null,seq__37355_37413);
if(temp__5720__auto___37424){
var seq__37355_37425__$1 = temp__5720__auto___37424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37355_37425__$1)){
var c__4679__auto___37426 = cljs.core.chunk_first.call(null,seq__37355_37425__$1);
var G__37427 = cljs.core.chunk_rest.call(null,seq__37355_37425__$1);
var G__37428 = c__4679__auto___37426;
var G__37429 = cljs.core.count.call(null,c__4679__auto___37426);
var G__37430 = (0);
seq__37355_37413 = G__37427;
chunk__37356_37414 = G__37428;
count__37357_37415 = G__37429;
i__37358_37416 = G__37430;
continue;
} else {
var vec__37368_37431 = cljs.core.first.call(null,seq__37355_37425__$1);
var pno_37432 = cljs.core.nth.call(null,vec__37368_37431,(0),null);
var pmask_37433 = cljs.core.nth.call(null,vec__37368_37431,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_37432,"$ = ",pmask_37433,";");


var G__37434 = cljs.core.next.call(null,seq__37355_37425__$1);
var G__37435 = null;
var G__37436 = (0);
var G__37437 = (0);
seq__37355_37413 = G__37434;
chunk__37356_37414 = G__37435;
count__37357_37415 = G__37436;
i__37358_37416 = G__37437;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__37438){
var map__37439 = p__37438;
var map__37439__$1 = cljs.core.__destructure_map.call(null,map__37439);
var t = cljs.core.get.call(null,map__37439__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__37439__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__37439__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__37439__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__37439__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__37440_37464 = cljs.core.seq.call(null,protocols);
var chunk__37441_37465 = null;
var count__37442_37466 = (0);
var i__37443_37467 = (0);
while(true){
if((i__37443_37467 < count__37442_37466)){
var protocol_37468 = cljs.core._nth.call(null,chunk__37441_37465,i__37443_37467);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_37468)),"}");


var G__37469 = seq__37440_37464;
var G__37470 = chunk__37441_37465;
var G__37471 = count__37442_37466;
var G__37472 = (i__37443_37467 + (1));
seq__37440_37464 = G__37469;
chunk__37441_37465 = G__37470;
count__37442_37466 = G__37471;
i__37443_37467 = G__37472;
continue;
} else {
var temp__5720__auto___37473 = cljs.core.seq.call(null,seq__37440_37464);
if(temp__5720__auto___37473){
var seq__37440_37474__$1 = temp__5720__auto___37473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37440_37474__$1)){
var c__4679__auto___37475 = cljs.core.chunk_first.call(null,seq__37440_37474__$1);
var G__37476 = cljs.core.chunk_rest.call(null,seq__37440_37474__$1);
var G__37477 = c__4679__auto___37475;
var G__37478 = cljs.core.count.call(null,c__4679__auto___37475);
var G__37479 = (0);
seq__37440_37464 = G__37476;
chunk__37441_37465 = G__37477;
count__37442_37466 = G__37478;
i__37443_37467 = G__37479;
continue;
} else {
var protocol_37480 = cljs.core.first.call(null,seq__37440_37474__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_37480)),"}");


var G__37481 = cljs.core.next.call(null,seq__37440_37474__$1);
var G__37482 = null;
var G__37483 = (0);
var G__37484 = (0);
seq__37440_37464 = G__37481;
chunk__37441_37465 = G__37482;
count__37442_37466 = G__37483;
i__37443_37467 = G__37484;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__37444_37485 = cljs.core.seq.call(null,fields__$1);
var chunk__37445_37486 = null;
var count__37446_37487 = (0);
var i__37447_37488 = (0);
while(true){
if((i__37447_37488 < count__37446_37487)){
var fld_37489 = cljs.core._nth.call(null,chunk__37445_37486,i__37447_37488);
cljs.compiler.emitln.call(null,"this.",fld_37489," = ",fld_37489,";");


var G__37490 = seq__37444_37485;
var G__37491 = chunk__37445_37486;
var G__37492 = count__37446_37487;
var G__37493 = (i__37447_37488 + (1));
seq__37444_37485 = G__37490;
chunk__37445_37486 = G__37491;
count__37446_37487 = G__37492;
i__37447_37488 = G__37493;
continue;
} else {
var temp__5720__auto___37494 = cljs.core.seq.call(null,seq__37444_37485);
if(temp__5720__auto___37494){
var seq__37444_37495__$1 = temp__5720__auto___37494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37444_37495__$1)){
var c__4679__auto___37496 = cljs.core.chunk_first.call(null,seq__37444_37495__$1);
var G__37497 = cljs.core.chunk_rest.call(null,seq__37444_37495__$1);
var G__37498 = c__4679__auto___37496;
var G__37499 = cljs.core.count.call(null,c__4679__auto___37496);
var G__37500 = (0);
seq__37444_37485 = G__37497;
chunk__37445_37486 = G__37498;
count__37446_37487 = G__37499;
i__37447_37488 = G__37500;
continue;
} else {
var fld_37501 = cljs.core.first.call(null,seq__37444_37495__$1);
cljs.compiler.emitln.call(null,"this.",fld_37501," = ",fld_37501,";");


var G__37502 = cljs.core.next.call(null,seq__37444_37495__$1);
var G__37503 = null;
var G__37504 = (0);
var G__37505 = (0);
seq__37444_37485 = G__37502;
chunk__37445_37486 = G__37503;
count__37446_37487 = G__37504;
i__37447_37488 = G__37505;
continue;
}
} else {
}
}
break;
}

var seq__37448_37506 = cljs.core.seq.call(null,pmasks);
var chunk__37449_37507 = null;
var count__37450_37508 = (0);
var i__37451_37509 = (0);
while(true){
if((i__37451_37509 < count__37450_37508)){
var vec__37458_37510 = cljs.core._nth.call(null,chunk__37449_37507,i__37451_37509);
var pno_37511 = cljs.core.nth.call(null,vec__37458_37510,(0),null);
var pmask_37512 = cljs.core.nth.call(null,vec__37458_37510,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_37511,"$ = ",pmask_37512,";");


var G__37513 = seq__37448_37506;
var G__37514 = chunk__37449_37507;
var G__37515 = count__37450_37508;
var G__37516 = (i__37451_37509 + (1));
seq__37448_37506 = G__37513;
chunk__37449_37507 = G__37514;
count__37450_37508 = G__37515;
i__37451_37509 = G__37516;
continue;
} else {
var temp__5720__auto___37517 = cljs.core.seq.call(null,seq__37448_37506);
if(temp__5720__auto___37517){
var seq__37448_37518__$1 = temp__5720__auto___37517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37448_37518__$1)){
var c__4679__auto___37519 = cljs.core.chunk_first.call(null,seq__37448_37518__$1);
var G__37520 = cljs.core.chunk_rest.call(null,seq__37448_37518__$1);
var G__37521 = c__4679__auto___37519;
var G__37522 = cljs.core.count.call(null,c__4679__auto___37519);
var G__37523 = (0);
seq__37448_37506 = G__37520;
chunk__37449_37507 = G__37521;
count__37450_37508 = G__37522;
i__37451_37509 = G__37523;
continue;
} else {
var vec__37461_37524 = cljs.core.first.call(null,seq__37448_37518__$1);
var pno_37525 = cljs.core.nth.call(null,vec__37461_37524,(0),null);
var pmask_37526 = cljs.core.nth.call(null,vec__37461_37524,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_37525,"$ = ",pmask_37526,";");


var G__37527 = cljs.core.next.call(null,seq__37448_37518__$1);
var G__37528 = null;
var G__37529 = (0);
var G__37530 = (0);
seq__37448_37506 = G__37527;
chunk__37449_37507 = G__37528;
count__37450_37508 = G__37529;
i__37451_37509 = G__37530;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__37531){
var map__37532 = p__37531;
var map__37532__$1 = cljs.core.__destructure_map.call(null,map__37532);
var target = cljs.core.get.call(null,map__37532__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__37532__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__37532__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__37532__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__37532__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__37533){
var map__37534 = p__37533;
var map__37534__$1 = cljs.core.__destructure_map.call(null,map__37534);
var op = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4251__auto__ = code;
if(cljs.core.truth_(and__4251__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4251__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__36326__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__36326__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__37539 = cljs.core.seq.call(null,table);
var chunk__37540 = null;
var count__37541 = (0);
var i__37542 = (0);
while(true){
if((i__37542 < count__37541)){
var vec__37549 = cljs.core._nth.call(null,chunk__37540,i__37542);
var sym = cljs.core.nth.call(null,vec__37549,(0),null);
var value = cljs.core.nth.call(null,vec__37549,(1),null);
var ns_37555 = cljs.core.namespace.call(null,sym);
var name_37556 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__37557 = seq__37539;
var G__37558 = chunk__37540;
var G__37559 = count__37541;
var G__37560 = (i__37542 + (1));
seq__37539 = G__37557;
chunk__37540 = G__37558;
count__37541 = G__37559;
i__37542 = G__37560;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37539);
if(temp__5720__auto__){
var seq__37539__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37539__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__37539__$1);
var G__37561 = cljs.core.chunk_rest.call(null,seq__37539__$1);
var G__37562 = c__4679__auto__;
var G__37563 = cljs.core.count.call(null,c__4679__auto__);
var G__37564 = (0);
seq__37539 = G__37561;
chunk__37540 = G__37562;
count__37541 = G__37563;
i__37542 = G__37564;
continue;
} else {
var vec__37552 = cljs.core.first.call(null,seq__37539__$1);
var sym = cljs.core.nth.call(null,vec__37552,(0),null);
var value = cljs.core.nth.call(null,vec__37552,(1),null);
var ns_37565 = cljs.core.namespace.call(null,sym);
var name_37566 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__37567 = cljs.core.next.call(null,seq__37539__$1);
var G__37568 = null;
var G__37569 = (0);
var G__37570 = (0);
seq__37539 = G__37567;
chunk__37540 = G__37568;
count__37541 = G__37569;
i__37542 = G__37570;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__37572 = arguments.length;
switch (G__37572) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_37577 = cljs.core.first.call(null,ks);
var vec__37573_37578 = cljs.core.conj.call(null,prefix,k_37577);
var top_37579 = cljs.core.nth.call(null,vec__37573_37578,(0),null);
var prefix_SINGLEQUOTE__37580 = vec__37573_37578;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_37577)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__37580) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_37579)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_37579)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__37580)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_37579);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__37580)),";");
}
} else {
}

var m_37581 = cljs.core.get.call(null,externs,k_37577);
if(cljs.core.empty_QMARK_.call(null,m_37581)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__37580,m_37581,top_level,known_externs);
}

var G__37582 = cljs.core.next.call(null,ks);
ks = G__37582;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
