// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
goog.require('goog.object');
goog.scope(function(){
cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__35291){
var vec__35292 = p__35291;
var i = cljs.core.nth.call(null,vec__35292,(0),null);
var v = cljs.core.nth.call(null,vec__35292,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__35295 = seg;
var gcol = cljs.core.nth.call(null,vec__35295,(0),null);
var source = cljs.core.nth.call(null,vec__35295,(1),null);
var line = cljs.core.nth.call(null,vec__35295,(2),null);
var col = cljs.core.nth.call(null,vec__35295,(3),null);
var name = cljs.core.nth.call(null,vec__35295,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (cljs.source_map.goog$module$goog$object.get.call(null,source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__35298 = seg;
var gcol = cljs.core.nth.call(null,vec__35298,(0),null);
var source = cljs.core.nth.call(null,vec__35298,(1),null);
var line = cljs.core.nth.call(null,vec__35298,(2),null);
var col = cljs.core.nth.call(null,vec__35298,(3),null);
var name = cljs.core.nth.call(null,vec__35298,(4),null);
var vec__35301 = relseg;
var rgcol = cljs.core.nth.call(null,vec__35301,(0),null);
var rsource = cljs.core.nth.call(null,vec__35301,(1),null);
var rline = cljs.core.nth.call(null,vec__35301,(2),null);
var rcol = cljs.core.nth.call(null,vec__35301,(3),null);
var rname = cljs.core.nth.call(null,vec__35301,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4253__auto__ = col;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__35304 = segmap;
var map__35304__$1 = cljs.core.__destructure_map.call(null,map__35304);
var gcol = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__35306 = arguments.length;
switch (G__35306) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__35310 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__35314 = cljs.core.next.call(null,segs__$1);
var G__35315 = nrelseg;
var G__35316 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__35314;
relseg__$1 = G__35315;
result__$1 = G__35316;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__35310,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__35310,(1),null);
var G__35317 = (gline + (1));
var G__35318 = cljs.core.next.call(null,lines__$1);
var G__35319 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__35320 = result__$1;
gline = G__35317;
lines__$1 = G__35318;
relseg = G__35319;
result = G__35320;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__35322 = segmap;
var map__35322__$1 = cljs.core.__destructure_map.call(null,map__35322);
var gcol = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__35321_SHARP_){
return cljs.core.conj.call(null,p1__35321_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__35324 = arguments.length;
switch (G__35324) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__35328 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__35332 = cljs.core.next.call(null,segs__$1);
var G__35333 = nrelseg;
var G__35334 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__35332;
relseg__$1 = G__35333;
result__$1 = G__35334;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__35328,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__35328,(1),null);
var G__35335 = (gline + (1));
var G__35336 = cljs.core.next.call(null,lines__$1);
var G__35337 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__35338 = result__$1;
gline = G__35335;
lines__$1 = G__35336;
relseg = G__35337;
result = G__35338;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__35339){
var vec__35340 = p__35339;
var _ = cljs.core.nth.call(null,vec__35340,(0),null);
var source = cljs.core.nth.call(null,vec__35340,(1),null);
var line = cljs.core.nth.call(null,vec__35340,(2),null);
var col = cljs.core.nth.call(null,vec__35340,(3),null);
var name = cljs.core.nth.call(null,vec__35340,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__35343){
var vec__35344 = p__35343;
var gcol = cljs.core.nth.call(null,vec__35344,(0),null);
var sidx = cljs.core.nth.call(null,vec__35344,(1),null);
var line = cljs.core.nth.call(null,vec__35344,(2),null);
var col = cljs.core.nth.call(null,vec__35344,(3),null);
var name = cljs.core.nth.call(null,vec__35344,(4),null);
var seg = vec__35344;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__35347){
var vec__35348 = p__35347;
var _ = cljs.core.nth.call(null,vec__35348,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35348,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__35348,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__35348,(3),null);
var lname = cljs.core.nth.call(null,vec__35348,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4253__auto__ = name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__35354 = cljs.core.seq.call(null,infos);
var chunk__35355 = null;
var count__35356 = (0);
var i__35357 = (0);
while(true){
if((i__35357 < count__35356)){
var info = cljs.core._nth.call(null,chunk__35355,i__35357);
var segv_35708 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_35709 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_35710 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_35709 > (lc_35710 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__35354,chunk__35355,count__35356,i__35357,segv_35708,gline_35709,lc_35710,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_35709 - (lc_35710 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_35708], null));
});})(seq__35354,chunk__35355,count__35356,i__35357,segv_35708,gline_35709,lc_35710,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__35354,chunk__35355,count__35356,i__35357,segv_35708,gline_35709,lc_35710,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35709], null),cljs.core.conj,segv_35708);
});})(seq__35354,chunk__35355,count__35356,i__35357,segv_35708,gline_35709,lc_35710,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__35711 = seq__35354;
var G__35712 = chunk__35355;
var G__35713 = count__35356;
var G__35714 = (i__35357 + (1));
seq__35354 = G__35711;
chunk__35355 = G__35712;
count__35356 = G__35713;
i__35357 = G__35714;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35354);
if(temp__5720__auto__){
var seq__35354__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35354__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__35354__$1);
var G__35715 = cljs.core.chunk_rest.call(null,seq__35354__$1);
var G__35716 = c__4679__auto__;
var G__35717 = cljs.core.count.call(null,c__4679__auto__);
var G__35718 = (0);
seq__35354 = G__35715;
chunk__35355 = G__35716;
count__35356 = G__35717;
i__35357 = G__35718;
continue;
} else {
var info = cljs.core.first.call(null,seq__35354__$1);
var segv_35719 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_35720 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_35721 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_35720 > (lc_35721 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__35354,chunk__35355,count__35356,i__35357,segv_35719,gline_35720,lc_35721,info,seq__35354__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_35720 - (lc_35721 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_35719], null));
});})(seq__35354,chunk__35355,count__35356,i__35357,segv_35719,gline_35720,lc_35721,info,seq__35354__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__35354,chunk__35355,count__35356,i__35357,segv_35719,gline_35720,lc_35721,info,seq__35354__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_35720], null),cljs.core.conj,segv_35719);
});})(seq__35354,chunk__35355,count__35356,i__35357,segv_35719,gline_35720,lc_35721,info,seq__35354__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__35722 = cljs.core.next.call(null,seq__35354__$1);
var G__35723 = null;
var G__35724 = (0);
var G__35725 = (0);
seq__35354 = G__35722;
chunk__35355 = G__35723;
count__35356 = G__35724;
i__35357 = G__35725;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__35358_35726 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__35359_35727 = null;
var count__35360_35728 = (0);
var i__35361_35729 = (0);
while(true){
if((i__35361_35729 < count__35360_35728)){
var vec__35534_35730 = cljs.core._nth.call(null,chunk__35359_35727,i__35361_35729);
var source_idx_35731 = cljs.core.nth.call(null,vec__35534_35730,(0),null);
var vec__35537_35732 = cljs.core.nth.call(null,vec__35534_35730,(1),null);
var __35733 = cljs.core.nth.call(null,vec__35537_35732,(0),null);
var lines_35734__$1 = cljs.core.nth.call(null,vec__35537_35732,(1),null);
var seq__35540_35735 = cljs.core.seq.call(null,lines_35734__$1);
var chunk__35541_35736 = null;
var count__35542_35737 = (0);
var i__35543_35738 = (0);
while(true){
if((i__35543_35738 < count__35542_35737)){
var vec__35582_35739 = cljs.core._nth.call(null,chunk__35541_35736,i__35543_35738);
var line_35740 = cljs.core.nth.call(null,vec__35582_35739,(0),null);
var cols_35741 = cljs.core.nth.call(null,vec__35582_35739,(1),null);
var seq__35585_35742 = cljs.core.seq.call(null,cols_35741);
var chunk__35586_35743 = null;
var count__35587_35744 = (0);
var i__35588_35745 = (0);
while(true){
if((i__35588_35745 < count__35587_35744)){
var vec__35595_35746 = cljs.core._nth.call(null,chunk__35586_35743,i__35588_35745);
var col_35747 = cljs.core.nth.call(null,vec__35595_35746,(0),null);
var infos_35748 = cljs.core.nth.call(null,vec__35595_35746,(1),null);
encode_cols.call(null,infos_35748,source_idx_35731,line_35740,col_35747);


var G__35749 = seq__35585_35742;
var G__35750 = chunk__35586_35743;
var G__35751 = count__35587_35744;
var G__35752 = (i__35588_35745 + (1));
seq__35585_35742 = G__35749;
chunk__35586_35743 = G__35750;
count__35587_35744 = G__35751;
i__35588_35745 = G__35752;
continue;
} else {
var temp__5720__auto___35753 = cljs.core.seq.call(null,seq__35585_35742);
if(temp__5720__auto___35753){
var seq__35585_35754__$1 = temp__5720__auto___35753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35585_35754__$1)){
var c__4679__auto___35755 = cljs.core.chunk_first.call(null,seq__35585_35754__$1);
var G__35756 = cljs.core.chunk_rest.call(null,seq__35585_35754__$1);
var G__35757 = c__4679__auto___35755;
var G__35758 = cljs.core.count.call(null,c__4679__auto___35755);
var G__35759 = (0);
seq__35585_35742 = G__35756;
chunk__35586_35743 = G__35757;
count__35587_35744 = G__35758;
i__35588_35745 = G__35759;
continue;
} else {
var vec__35598_35760 = cljs.core.first.call(null,seq__35585_35754__$1);
var col_35761 = cljs.core.nth.call(null,vec__35598_35760,(0),null);
var infos_35762 = cljs.core.nth.call(null,vec__35598_35760,(1),null);
encode_cols.call(null,infos_35762,source_idx_35731,line_35740,col_35761);


var G__35763 = cljs.core.next.call(null,seq__35585_35754__$1);
var G__35764 = null;
var G__35765 = (0);
var G__35766 = (0);
seq__35585_35742 = G__35763;
chunk__35586_35743 = G__35764;
count__35587_35744 = G__35765;
i__35588_35745 = G__35766;
continue;
}
} else {
}
}
break;
}


var G__35767 = seq__35540_35735;
var G__35768 = chunk__35541_35736;
var G__35769 = count__35542_35737;
var G__35770 = (i__35543_35738 + (1));
seq__35540_35735 = G__35767;
chunk__35541_35736 = G__35768;
count__35542_35737 = G__35769;
i__35543_35738 = G__35770;
continue;
} else {
var temp__5720__auto___35771 = cljs.core.seq.call(null,seq__35540_35735);
if(temp__5720__auto___35771){
var seq__35540_35772__$1 = temp__5720__auto___35771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35540_35772__$1)){
var c__4679__auto___35773 = cljs.core.chunk_first.call(null,seq__35540_35772__$1);
var G__35774 = cljs.core.chunk_rest.call(null,seq__35540_35772__$1);
var G__35775 = c__4679__auto___35773;
var G__35776 = cljs.core.count.call(null,c__4679__auto___35773);
var G__35777 = (0);
seq__35540_35735 = G__35774;
chunk__35541_35736 = G__35775;
count__35542_35737 = G__35776;
i__35543_35738 = G__35777;
continue;
} else {
var vec__35601_35778 = cljs.core.first.call(null,seq__35540_35772__$1);
var line_35779 = cljs.core.nth.call(null,vec__35601_35778,(0),null);
var cols_35780 = cljs.core.nth.call(null,vec__35601_35778,(1),null);
var seq__35604_35781 = cljs.core.seq.call(null,cols_35780);
var chunk__35605_35782 = null;
var count__35606_35783 = (0);
var i__35607_35784 = (0);
while(true){
if((i__35607_35784 < count__35606_35783)){
var vec__35614_35785 = cljs.core._nth.call(null,chunk__35605_35782,i__35607_35784);
var col_35786 = cljs.core.nth.call(null,vec__35614_35785,(0),null);
var infos_35787 = cljs.core.nth.call(null,vec__35614_35785,(1),null);
encode_cols.call(null,infos_35787,source_idx_35731,line_35779,col_35786);


var G__35788 = seq__35604_35781;
var G__35789 = chunk__35605_35782;
var G__35790 = count__35606_35783;
var G__35791 = (i__35607_35784 + (1));
seq__35604_35781 = G__35788;
chunk__35605_35782 = G__35789;
count__35606_35783 = G__35790;
i__35607_35784 = G__35791;
continue;
} else {
var temp__5720__auto___35792__$1 = cljs.core.seq.call(null,seq__35604_35781);
if(temp__5720__auto___35792__$1){
var seq__35604_35793__$1 = temp__5720__auto___35792__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35604_35793__$1)){
var c__4679__auto___35794 = cljs.core.chunk_first.call(null,seq__35604_35793__$1);
var G__35795 = cljs.core.chunk_rest.call(null,seq__35604_35793__$1);
var G__35796 = c__4679__auto___35794;
var G__35797 = cljs.core.count.call(null,c__4679__auto___35794);
var G__35798 = (0);
seq__35604_35781 = G__35795;
chunk__35605_35782 = G__35796;
count__35606_35783 = G__35797;
i__35607_35784 = G__35798;
continue;
} else {
var vec__35617_35799 = cljs.core.first.call(null,seq__35604_35793__$1);
var col_35800 = cljs.core.nth.call(null,vec__35617_35799,(0),null);
var infos_35801 = cljs.core.nth.call(null,vec__35617_35799,(1),null);
encode_cols.call(null,infos_35801,source_idx_35731,line_35779,col_35800);


var G__35802 = cljs.core.next.call(null,seq__35604_35793__$1);
var G__35803 = null;
var G__35804 = (0);
var G__35805 = (0);
seq__35604_35781 = G__35802;
chunk__35605_35782 = G__35803;
count__35606_35783 = G__35804;
i__35607_35784 = G__35805;
continue;
}
} else {
}
}
break;
}


var G__35806 = cljs.core.next.call(null,seq__35540_35772__$1);
var G__35807 = null;
var G__35808 = (0);
var G__35809 = (0);
seq__35540_35735 = G__35806;
chunk__35541_35736 = G__35807;
count__35542_35737 = G__35808;
i__35543_35738 = G__35809;
continue;
}
} else {
}
}
break;
}


var G__35810 = seq__35358_35726;
var G__35811 = chunk__35359_35727;
var G__35812 = count__35360_35728;
var G__35813 = (i__35361_35729 + (1));
seq__35358_35726 = G__35810;
chunk__35359_35727 = G__35811;
count__35360_35728 = G__35812;
i__35361_35729 = G__35813;
continue;
} else {
var temp__5720__auto___35814 = cljs.core.seq.call(null,seq__35358_35726);
if(temp__5720__auto___35814){
var seq__35358_35815__$1 = temp__5720__auto___35814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35358_35815__$1)){
var c__4679__auto___35816 = cljs.core.chunk_first.call(null,seq__35358_35815__$1);
var G__35817 = cljs.core.chunk_rest.call(null,seq__35358_35815__$1);
var G__35818 = c__4679__auto___35816;
var G__35819 = cljs.core.count.call(null,c__4679__auto___35816);
var G__35820 = (0);
seq__35358_35726 = G__35817;
chunk__35359_35727 = G__35818;
count__35360_35728 = G__35819;
i__35361_35729 = G__35820;
continue;
} else {
var vec__35620_35821 = cljs.core.first.call(null,seq__35358_35815__$1);
var source_idx_35822 = cljs.core.nth.call(null,vec__35620_35821,(0),null);
var vec__35623_35823 = cljs.core.nth.call(null,vec__35620_35821,(1),null);
var __35824 = cljs.core.nth.call(null,vec__35623_35823,(0),null);
var lines_35825__$1 = cljs.core.nth.call(null,vec__35623_35823,(1),null);
var seq__35626_35826 = cljs.core.seq.call(null,lines_35825__$1);
var chunk__35627_35827 = null;
var count__35628_35828 = (0);
var i__35629_35829 = (0);
while(true){
if((i__35629_35829 < count__35628_35828)){
var vec__35668_35830 = cljs.core._nth.call(null,chunk__35627_35827,i__35629_35829);
var line_35831 = cljs.core.nth.call(null,vec__35668_35830,(0),null);
var cols_35832 = cljs.core.nth.call(null,vec__35668_35830,(1),null);
var seq__35671_35833 = cljs.core.seq.call(null,cols_35832);
var chunk__35672_35834 = null;
var count__35673_35835 = (0);
var i__35674_35836 = (0);
while(true){
if((i__35674_35836 < count__35673_35835)){
var vec__35681_35837 = cljs.core._nth.call(null,chunk__35672_35834,i__35674_35836);
var col_35838 = cljs.core.nth.call(null,vec__35681_35837,(0),null);
var infos_35839 = cljs.core.nth.call(null,vec__35681_35837,(1),null);
encode_cols.call(null,infos_35839,source_idx_35822,line_35831,col_35838);


var G__35840 = seq__35671_35833;
var G__35841 = chunk__35672_35834;
var G__35842 = count__35673_35835;
var G__35843 = (i__35674_35836 + (1));
seq__35671_35833 = G__35840;
chunk__35672_35834 = G__35841;
count__35673_35835 = G__35842;
i__35674_35836 = G__35843;
continue;
} else {
var temp__5720__auto___35844__$1 = cljs.core.seq.call(null,seq__35671_35833);
if(temp__5720__auto___35844__$1){
var seq__35671_35845__$1 = temp__5720__auto___35844__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35671_35845__$1)){
var c__4679__auto___35846 = cljs.core.chunk_first.call(null,seq__35671_35845__$1);
var G__35847 = cljs.core.chunk_rest.call(null,seq__35671_35845__$1);
var G__35848 = c__4679__auto___35846;
var G__35849 = cljs.core.count.call(null,c__4679__auto___35846);
var G__35850 = (0);
seq__35671_35833 = G__35847;
chunk__35672_35834 = G__35848;
count__35673_35835 = G__35849;
i__35674_35836 = G__35850;
continue;
} else {
var vec__35684_35851 = cljs.core.first.call(null,seq__35671_35845__$1);
var col_35852 = cljs.core.nth.call(null,vec__35684_35851,(0),null);
var infos_35853 = cljs.core.nth.call(null,vec__35684_35851,(1),null);
encode_cols.call(null,infos_35853,source_idx_35822,line_35831,col_35852);


var G__35854 = cljs.core.next.call(null,seq__35671_35845__$1);
var G__35855 = null;
var G__35856 = (0);
var G__35857 = (0);
seq__35671_35833 = G__35854;
chunk__35672_35834 = G__35855;
count__35673_35835 = G__35856;
i__35674_35836 = G__35857;
continue;
}
} else {
}
}
break;
}


var G__35858 = seq__35626_35826;
var G__35859 = chunk__35627_35827;
var G__35860 = count__35628_35828;
var G__35861 = (i__35629_35829 + (1));
seq__35626_35826 = G__35858;
chunk__35627_35827 = G__35859;
count__35628_35828 = G__35860;
i__35629_35829 = G__35861;
continue;
} else {
var temp__5720__auto___35862__$1 = cljs.core.seq.call(null,seq__35626_35826);
if(temp__5720__auto___35862__$1){
var seq__35626_35863__$1 = temp__5720__auto___35862__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35626_35863__$1)){
var c__4679__auto___35864 = cljs.core.chunk_first.call(null,seq__35626_35863__$1);
var G__35865 = cljs.core.chunk_rest.call(null,seq__35626_35863__$1);
var G__35866 = c__4679__auto___35864;
var G__35867 = cljs.core.count.call(null,c__4679__auto___35864);
var G__35868 = (0);
seq__35626_35826 = G__35865;
chunk__35627_35827 = G__35866;
count__35628_35828 = G__35867;
i__35629_35829 = G__35868;
continue;
} else {
var vec__35687_35869 = cljs.core.first.call(null,seq__35626_35863__$1);
var line_35870 = cljs.core.nth.call(null,vec__35687_35869,(0),null);
var cols_35871 = cljs.core.nth.call(null,vec__35687_35869,(1),null);
var seq__35690_35872 = cljs.core.seq.call(null,cols_35871);
var chunk__35691_35873 = null;
var count__35692_35874 = (0);
var i__35693_35875 = (0);
while(true){
if((i__35693_35875 < count__35692_35874)){
var vec__35700_35876 = cljs.core._nth.call(null,chunk__35691_35873,i__35693_35875);
var col_35877 = cljs.core.nth.call(null,vec__35700_35876,(0),null);
var infos_35878 = cljs.core.nth.call(null,vec__35700_35876,(1),null);
encode_cols.call(null,infos_35878,source_idx_35822,line_35870,col_35877);


var G__35879 = seq__35690_35872;
var G__35880 = chunk__35691_35873;
var G__35881 = count__35692_35874;
var G__35882 = (i__35693_35875 + (1));
seq__35690_35872 = G__35879;
chunk__35691_35873 = G__35880;
count__35692_35874 = G__35881;
i__35693_35875 = G__35882;
continue;
} else {
var temp__5720__auto___35883__$2 = cljs.core.seq.call(null,seq__35690_35872);
if(temp__5720__auto___35883__$2){
var seq__35690_35884__$1 = temp__5720__auto___35883__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35690_35884__$1)){
var c__4679__auto___35885 = cljs.core.chunk_first.call(null,seq__35690_35884__$1);
var G__35886 = cljs.core.chunk_rest.call(null,seq__35690_35884__$1);
var G__35887 = c__4679__auto___35885;
var G__35888 = cljs.core.count.call(null,c__4679__auto___35885);
var G__35889 = (0);
seq__35690_35872 = G__35886;
chunk__35691_35873 = G__35887;
count__35692_35874 = G__35888;
i__35693_35875 = G__35889;
continue;
} else {
var vec__35703_35890 = cljs.core.first.call(null,seq__35690_35884__$1);
var col_35891 = cljs.core.nth.call(null,vec__35703_35890,(0),null);
var infos_35892 = cljs.core.nth.call(null,vec__35703_35890,(1),null);
encode_cols.call(null,infos_35892,source_idx_35822,line_35870,col_35891);


var G__35893 = cljs.core.next.call(null,seq__35690_35884__$1);
var G__35894 = null;
var G__35895 = (0);
var G__35896 = (0);
seq__35690_35872 = G__35893;
chunk__35691_35873 = G__35894;
count__35692_35874 = G__35895;
i__35693_35875 = G__35896;
continue;
}
} else {
}
}
break;
}


var G__35897 = cljs.core.next.call(null,seq__35626_35863__$1);
var G__35898 = null;
var G__35899 = (0);
var G__35900 = (0);
seq__35626_35826 = G__35897;
chunk__35627_35827 = G__35898;
count__35628_35828 = G__35899;
i__35629_35829 = G__35900;
continue;
}
} else {
}
}
break;
}


var G__35901 = cljs.core.next.call(null,seq__35358_35815__$1);
var G__35902 = null;
var G__35903 = (0);
var G__35904 = (0);
seq__35358_35726 = G__35901;
chunk__35359_35727 = G__35902;
count__35360_35728 = G__35903;
i__35361_35729 = G__35904;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__35706 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__35351_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35351_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__35352_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__35352_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__35353_SHARP_){
return clojure.string.join.call(null,",",p1__35353_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__35707 = G__35706;
cljs.source_map.goog$module$goog$object.set.call(null,G__35707,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__35707;
} else {
return G__35706;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__35905 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__35905,(0),null);
var col_map = cljs.core.nth.call(null,vec__35905,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__35908 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__35908,(0),null);
var infos = cljs.core.nth.call(null,vec__35908,(1),null);
var G__35913 = cljs.core.next.call(null,col_map_seq);
var G__35914 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__35908,col,infos,vec__35905,line,col_map){
return (function (v,p__35911){
var map__35912 = p__35911;
var map__35912__$1 = cljs.core.__destructure_map.call(null,map__35912);
var gline = cljs.core.get.call(null,map__35912__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__35912__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__35908,col,infos,vec__35905,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__35913;
new_cols = G__35914;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__35915 = cljs.core.next.call(null,line_map_seq);
var G__35916 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__35915;
new_lines = G__35916;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__35917_36125 = cljs.core.seq.call(null,reverse_map);
var chunk__35918_36126 = null;
var count__35919_36127 = (0);
var i__35920_36128 = (0);
while(true){
if((i__35920_36128 < count__35919_36127)){
var vec__36023_36129 = cljs.core._nth.call(null,chunk__35918_36126,i__35920_36128);
var line_36130 = cljs.core.nth.call(null,vec__36023_36129,(0),null);
var columns_36131 = cljs.core.nth.call(null,vec__36023_36129,(1),null);
var seq__36026_36132 = cljs.core.seq.call(null,columns_36131);
var chunk__36027_36133 = null;
var count__36028_36134 = (0);
var i__36029_36135 = (0);
while(true){
if((i__36029_36135 < count__36028_36134)){
var vec__36052_36136 = cljs.core._nth.call(null,chunk__36027_36133,i__36029_36135);
var column_36137 = cljs.core.nth.call(null,vec__36052_36136,(0),null);
var column_info_36138 = cljs.core.nth.call(null,vec__36052_36136,(1),null);
var seq__36055_36139 = cljs.core.seq.call(null,column_info_36138);
var chunk__36056_36140 = null;
var count__36057_36141 = (0);
var i__36058_36142 = (0);
while(true){
if((i__36058_36142 < count__36057_36141)){
var map__36061_36143 = cljs.core._nth.call(null,chunk__36056_36140,i__36058_36142);
var map__36061_36144__$1 = cljs.core.__destructure_map.call(null,map__36061_36143);
var gline_36145 = cljs.core.get.call(null,map__36061_36144__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_36146 = cljs.core.get.call(null,map__36061_36144__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_36147 = cljs.core.get.call(null,map__36061_36144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36145], null),cljs.core.fnil.call(null,((function (seq__36055_36139,chunk__36056_36140,count__36057_36141,i__36058_36142,seq__36026_36132,chunk__36027_36133,count__36028_36134,i__36029_36135,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36061_36143,map__36061_36144__$1,gline_36145,gcol_36146,name_36147,vec__36052_36136,column_36137,column_info_36138,vec__36023_36129,line_36130,columns_36131,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_36146], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_36130,new cljs.core.Keyword(null,"col","col",-1959363084),column_36137,new cljs.core.Keyword(null,"name","name",1843675177),name_36147], null));
});})(seq__36055_36139,chunk__36056_36140,count__36057_36141,i__36058_36142,seq__36026_36132,chunk__36027_36133,count__36028_36134,i__36029_36135,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36061_36143,map__36061_36144__$1,gline_36145,gcol_36146,name_36147,vec__36052_36136,column_36137,column_info_36138,vec__36023_36129,line_36130,columns_36131,inverted))
,cljs.core.sorted_map.call(null)));


var G__36148 = seq__36055_36139;
var G__36149 = chunk__36056_36140;
var G__36150 = count__36057_36141;
var G__36151 = (i__36058_36142 + (1));
seq__36055_36139 = G__36148;
chunk__36056_36140 = G__36149;
count__36057_36141 = G__36150;
i__36058_36142 = G__36151;
continue;
} else {
var temp__5720__auto___36152 = cljs.core.seq.call(null,seq__36055_36139);
if(temp__5720__auto___36152){
var seq__36055_36153__$1 = temp__5720__auto___36152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36055_36153__$1)){
var c__4679__auto___36154 = cljs.core.chunk_first.call(null,seq__36055_36153__$1);
var G__36155 = cljs.core.chunk_rest.call(null,seq__36055_36153__$1);
var G__36156 = c__4679__auto___36154;
var G__36157 = cljs.core.count.call(null,c__4679__auto___36154);
var G__36158 = (0);
seq__36055_36139 = G__36155;
chunk__36056_36140 = G__36156;
count__36057_36141 = G__36157;
i__36058_36142 = G__36158;
continue;
} else {
var map__36062_36159 = cljs.core.first.call(null,seq__36055_36153__$1);
var map__36062_36160__$1 = cljs.core.__destructure_map.call(null,map__36062_36159);
var gline_36161 = cljs.core.get.call(null,map__36062_36160__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_36162 = cljs.core.get.call(null,map__36062_36160__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_36163 = cljs.core.get.call(null,map__36062_36160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36161], null),cljs.core.fnil.call(null,((function (seq__36055_36139,chunk__36056_36140,count__36057_36141,i__36058_36142,seq__36026_36132,chunk__36027_36133,count__36028_36134,i__36029_36135,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36062_36159,map__36062_36160__$1,gline_36161,gcol_36162,name_36163,seq__36055_36153__$1,temp__5720__auto___36152,vec__36052_36136,column_36137,column_info_36138,vec__36023_36129,line_36130,columns_36131,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_36162], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_36130,new cljs.core.Keyword(null,"col","col",-1959363084),column_36137,new cljs.core.Keyword(null,"name","name",1843675177),name_36163], null));
});})(seq__36055_36139,chunk__36056_36140,count__36057_36141,i__36058_36142,seq__36026_36132,chunk__36027_36133,count__36028_36134,i__36029_36135,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36062_36159,map__36062_36160__$1,gline_36161,gcol_36162,name_36163,seq__36055_36153__$1,temp__5720__auto___36152,vec__36052_36136,column_36137,column_info_36138,vec__36023_36129,line_36130,columns_36131,inverted))
,cljs.core.sorted_map.call(null)));


var G__36164 = cljs.core.next.call(null,seq__36055_36153__$1);
var G__36165 = null;
var G__36166 = (0);
var G__36167 = (0);
seq__36055_36139 = G__36164;
chunk__36056_36140 = G__36165;
count__36057_36141 = G__36166;
i__36058_36142 = G__36167;
continue;
}
} else {
}
}
break;
}


var G__36168 = seq__36026_36132;
var G__36169 = chunk__36027_36133;
var G__36170 = count__36028_36134;
var G__36171 = (i__36029_36135 + (1));
seq__36026_36132 = G__36168;
chunk__36027_36133 = G__36169;
count__36028_36134 = G__36170;
i__36029_36135 = G__36171;
continue;
} else {
var temp__5720__auto___36172 = cljs.core.seq.call(null,seq__36026_36132);
if(temp__5720__auto___36172){
var seq__36026_36173__$1 = temp__5720__auto___36172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36026_36173__$1)){
var c__4679__auto___36174 = cljs.core.chunk_first.call(null,seq__36026_36173__$1);
var G__36175 = cljs.core.chunk_rest.call(null,seq__36026_36173__$1);
var G__36176 = c__4679__auto___36174;
var G__36177 = cljs.core.count.call(null,c__4679__auto___36174);
var G__36178 = (0);
seq__36026_36132 = G__36175;
chunk__36027_36133 = G__36176;
count__36028_36134 = G__36177;
i__36029_36135 = G__36178;
continue;
} else {
var vec__36063_36179 = cljs.core.first.call(null,seq__36026_36173__$1);
var column_36180 = cljs.core.nth.call(null,vec__36063_36179,(0),null);
var column_info_36181 = cljs.core.nth.call(null,vec__36063_36179,(1),null);
var seq__36066_36182 = cljs.core.seq.call(null,column_info_36181);
var chunk__36067_36183 = null;
var count__36068_36184 = (0);
var i__36069_36185 = (0);
while(true){
if((i__36069_36185 < count__36068_36184)){
var map__36072_36186 = cljs.core._nth.call(null,chunk__36067_36183,i__36069_36185);
var map__36072_36187__$1 = cljs.core.__destructure_map.call(null,map__36072_36186);
var gline_36188 = cljs.core.get.call(null,map__36072_36187__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_36189 = cljs.core.get.call(null,map__36072_36187__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_36190 = cljs.core.get.call(null,map__36072_36187__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36188], null),cljs.core.fnil.call(null,((function (seq__36066_36182,chunk__36067_36183,count__36068_36184,i__36069_36185,seq__36026_36132,chunk__36027_36133,count__36028_36134,i__36029_36135,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36072_36186,map__36072_36187__$1,gline_36188,gcol_36189,name_36190,vec__36063_36179,column_36180,column_info_36181,seq__36026_36173__$1,temp__5720__auto___36172,vec__36023_36129,line_36130,columns_36131,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_36189], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_36130,new cljs.core.Keyword(null,"col","col",-1959363084),column_36180,new cljs.core.Keyword(null,"name","name",1843675177),name_36190], null));
});})(seq__36066_36182,chunk__36067_36183,count__36068_36184,i__36069_36185,seq__36026_36132,chunk__36027_36133,count__36028_36134,i__36029_36135,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36072_36186,map__36072_36187__$1,gline_36188,gcol_36189,name_36190,vec__36063_36179,column_36180,column_info_36181,seq__36026_36173__$1,temp__5720__auto___36172,vec__36023_36129,line_36130,columns_36131,inverted))
,cljs.core.sorted_map.call(null)));


var G__36191 = seq__36066_36182;
var G__36192 = chunk__36067_36183;
var G__36193 = count__36068_36184;
var G__36194 = (i__36069_36185 + (1));
seq__36066_36182 = G__36191;
chunk__36067_36183 = G__36192;
count__36068_36184 = G__36193;
i__36069_36185 = G__36194;
continue;
} else {
var temp__5720__auto___36195__$1 = cljs.core.seq.call(null,seq__36066_36182);
if(temp__5720__auto___36195__$1){
var seq__36066_36196__$1 = temp__5720__auto___36195__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36066_36196__$1)){
var c__4679__auto___36197 = cljs.core.chunk_first.call(null,seq__36066_36196__$1);
var G__36198 = cljs.core.chunk_rest.call(null,seq__36066_36196__$1);
var G__36199 = c__4679__auto___36197;
var G__36200 = cljs.core.count.call(null,c__4679__auto___36197);
var G__36201 = (0);
seq__36066_36182 = G__36198;
chunk__36067_36183 = G__36199;
count__36068_36184 = G__36200;
i__36069_36185 = G__36201;
continue;
} else {
var map__36073_36202 = cljs.core.first.call(null,seq__36066_36196__$1);
var map__36073_36203__$1 = cljs.core.__destructure_map.call(null,map__36073_36202);
var gline_36204 = cljs.core.get.call(null,map__36073_36203__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_36205 = cljs.core.get.call(null,map__36073_36203__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_36206 = cljs.core.get.call(null,map__36073_36203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36204], null),cljs.core.fnil.call(null,((function (seq__36066_36182,chunk__36067_36183,count__36068_36184,i__36069_36185,seq__36026_36132,chunk__36027_36133,count__36028_36134,i__36029_36135,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36073_36202,map__36073_36203__$1,gline_36204,gcol_36205,name_36206,seq__36066_36196__$1,temp__5720__auto___36195__$1,vec__36063_36179,column_36180,column_info_36181,seq__36026_36173__$1,temp__5720__auto___36172,vec__36023_36129,line_36130,columns_36131,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_36205], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_36130,new cljs.core.Keyword(null,"col","col",-1959363084),column_36180,new cljs.core.Keyword(null,"name","name",1843675177),name_36206], null));
});})(seq__36066_36182,chunk__36067_36183,count__36068_36184,i__36069_36185,seq__36026_36132,chunk__36027_36133,count__36028_36134,i__36029_36135,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36073_36202,map__36073_36203__$1,gline_36204,gcol_36205,name_36206,seq__36066_36196__$1,temp__5720__auto___36195__$1,vec__36063_36179,column_36180,column_info_36181,seq__36026_36173__$1,temp__5720__auto___36172,vec__36023_36129,line_36130,columns_36131,inverted))
,cljs.core.sorted_map.call(null)));


var G__36207 = cljs.core.next.call(null,seq__36066_36196__$1);
var G__36208 = null;
var G__36209 = (0);
var G__36210 = (0);
seq__36066_36182 = G__36207;
chunk__36067_36183 = G__36208;
count__36068_36184 = G__36209;
i__36069_36185 = G__36210;
continue;
}
} else {
}
}
break;
}


var G__36211 = cljs.core.next.call(null,seq__36026_36173__$1);
var G__36212 = null;
var G__36213 = (0);
var G__36214 = (0);
seq__36026_36132 = G__36211;
chunk__36027_36133 = G__36212;
count__36028_36134 = G__36213;
i__36029_36135 = G__36214;
continue;
}
} else {
}
}
break;
}


var G__36215 = seq__35917_36125;
var G__36216 = chunk__35918_36126;
var G__36217 = count__35919_36127;
var G__36218 = (i__35920_36128 + (1));
seq__35917_36125 = G__36215;
chunk__35918_36126 = G__36216;
count__35919_36127 = G__36217;
i__35920_36128 = G__36218;
continue;
} else {
var temp__5720__auto___36219 = cljs.core.seq.call(null,seq__35917_36125);
if(temp__5720__auto___36219){
var seq__35917_36220__$1 = temp__5720__auto___36219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35917_36220__$1)){
var c__4679__auto___36221 = cljs.core.chunk_first.call(null,seq__35917_36220__$1);
var G__36222 = cljs.core.chunk_rest.call(null,seq__35917_36220__$1);
var G__36223 = c__4679__auto___36221;
var G__36224 = cljs.core.count.call(null,c__4679__auto___36221);
var G__36225 = (0);
seq__35917_36125 = G__36222;
chunk__35918_36126 = G__36223;
count__35919_36127 = G__36224;
i__35920_36128 = G__36225;
continue;
} else {
var vec__36074_36226 = cljs.core.first.call(null,seq__35917_36220__$1);
var line_36227 = cljs.core.nth.call(null,vec__36074_36226,(0),null);
var columns_36228 = cljs.core.nth.call(null,vec__36074_36226,(1),null);
var seq__36077_36229 = cljs.core.seq.call(null,columns_36228);
var chunk__36078_36230 = null;
var count__36079_36231 = (0);
var i__36080_36232 = (0);
while(true){
if((i__36080_36232 < count__36079_36231)){
var vec__36103_36233 = cljs.core._nth.call(null,chunk__36078_36230,i__36080_36232);
var column_36234 = cljs.core.nth.call(null,vec__36103_36233,(0),null);
var column_info_36235 = cljs.core.nth.call(null,vec__36103_36233,(1),null);
var seq__36106_36236 = cljs.core.seq.call(null,column_info_36235);
var chunk__36107_36237 = null;
var count__36108_36238 = (0);
var i__36109_36239 = (0);
while(true){
if((i__36109_36239 < count__36108_36238)){
var map__36112_36240 = cljs.core._nth.call(null,chunk__36107_36237,i__36109_36239);
var map__36112_36241__$1 = cljs.core.__destructure_map.call(null,map__36112_36240);
var gline_36242 = cljs.core.get.call(null,map__36112_36241__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_36243 = cljs.core.get.call(null,map__36112_36241__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_36244 = cljs.core.get.call(null,map__36112_36241__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36242], null),cljs.core.fnil.call(null,((function (seq__36106_36236,chunk__36107_36237,count__36108_36238,i__36109_36239,seq__36077_36229,chunk__36078_36230,count__36079_36231,i__36080_36232,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36112_36240,map__36112_36241__$1,gline_36242,gcol_36243,name_36244,vec__36103_36233,column_36234,column_info_36235,vec__36074_36226,line_36227,columns_36228,seq__35917_36220__$1,temp__5720__auto___36219,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_36243], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_36227,new cljs.core.Keyword(null,"col","col",-1959363084),column_36234,new cljs.core.Keyword(null,"name","name",1843675177),name_36244], null));
});})(seq__36106_36236,chunk__36107_36237,count__36108_36238,i__36109_36239,seq__36077_36229,chunk__36078_36230,count__36079_36231,i__36080_36232,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36112_36240,map__36112_36241__$1,gline_36242,gcol_36243,name_36244,vec__36103_36233,column_36234,column_info_36235,vec__36074_36226,line_36227,columns_36228,seq__35917_36220__$1,temp__5720__auto___36219,inverted))
,cljs.core.sorted_map.call(null)));


var G__36245 = seq__36106_36236;
var G__36246 = chunk__36107_36237;
var G__36247 = count__36108_36238;
var G__36248 = (i__36109_36239 + (1));
seq__36106_36236 = G__36245;
chunk__36107_36237 = G__36246;
count__36108_36238 = G__36247;
i__36109_36239 = G__36248;
continue;
} else {
var temp__5720__auto___36249__$1 = cljs.core.seq.call(null,seq__36106_36236);
if(temp__5720__auto___36249__$1){
var seq__36106_36250__$1 = temp__5720__auto___36249__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36106_36250__$1)){
var c__4679__auto___36251 = cljs.core.chunk_first.call(null,seq__36106_36250__$1);
var G__36252 = cljs.core.chunk_rest.call(null,seq__36106_36250__$1);
var G__36253 = c__4679__auto___36251;
var G__36254 = cljs.core.count.call(null,c__4679__auto___36251);
var G__36255 = (0);
seq__36106_36236 = G__36252;
chunk__36107_36237 = G__36253;
count__36108_36238 = G__36254;
i__36109_36239 = G__36255;
continue;
} else {
var map__36113_36256 = cljs.core.first.call(null,seq__36106_36250__$1);
var map__36113_36257__$1 = cljs.core.__destructure_map.call(null,map__36113_36256);
var gline_36258 = cljs.core.get.call(null,map__36113_36257__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_36259 = cljs.core.get.call(null,map__36113_36257__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_36260 = cljs.core.get.call(null,map__36113_36257__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36258], null),cljs.core.fnil.call(null,((function (seq__36106_36236,chunk__36107_36237,count__36108_36238,i__36109_36239,seq__36077_36229,chunk__36078_36230,count__36079_36231,i__36080_36232,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36113_36256,map__36113_36257__$1,gline_36258,gcol_36259,name_36260,seq__36106_36250__$1,temp__5720__auto___36249__$1,vec__36103_36233,column_36234,column_info_36235,vec__36074_36226,line_36227,columns_36228,seq__35917_36220__$1,temp__5720__auto___36219,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_36259], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_36227,new cljs.core.Keyword(null,"col","col",-1959363084),column_36234,new cljs.core.Keyword(null,"name","name",1843675177),name_36260], null));
});})(seq__36106_36236,chunk__36107_36237,count__36108_36238,i__36109_36239,seq__36077_36229,chunk__36078_36230,count__36079_36231,i__36080_36232,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36113_36256,map__36113_36257__$1,gline_36258,gcol_36259,name_36260,seq__36106_36250__$1,temp__5720__auto___36249__$1,vec__36103_36233,column_36234,column_info_36235,vec__36074_36226,line_36227,columns_36228,seq__35917_36220__$1,temp__5720__auto___36219,inverted))
,cljs.core.sorted_map.call(null)));


var G__36261 = cljs.core.next.call(null,seq__36106_36250__$1);
var G__36262 = null;
var G__36263 = (0);
var G__36264 = (0);
seq__36106_36236 = G__36261;
chunk__36107_36237 = G__36262;
count__36108_36238 = G__36263;
i__36109_36239 = G__36264;
continue;
}
} else {
}
}
break;
}


var G__36265 = seq__36077_36229;
var G__36266 = chunk__36078_36230;
var G__36267 = count__36079_36231;
var G__36268 = (i__36080_36232 + (1));
seq__36077_36229 = G__36265;
chunk__36078_36230 = G__36266;
count__36079_36231 = G__36267;
i__36080_36232 = G__36268;
continue;
} else {
var temp__5720__auto___36269__$1 = cljs.core.seq.call(null,seq__36077_36229);
if(temp__5720__auto___36269__$1){
var seq__36077_36270__$1 = temp__5720__auto___36269__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36077_36270__$1)){
var c__4679__auto___36271 = cljs.core.chunk_first.call(null,seq__36077_36270__$1);
var G__36272 = cljs.core.chunk_rest.call(null,seq__36077_36270__$1);
var G__36273 = c__4679__auto___36271;
var G__36274 = cljs.core.count.call(null,c__4679__auto___36271);
var G__36275 = (0);
seq__36077_36229 = G__36272;
chunk__36078_36230 = G__36273;
count__36079_36231 = G__36274;
i__36080_36232 = G__36275;
continue;
} else {
var vec__36114_36276 = cljs.core.first.call(null,seq__36077_36270__$1);
var column_36277 = cljs.core.nth.call(null,vec__36114_36276,(0),null);
var column_info_36278 = cljs.core.nth.call(null,vec__36114_36276,(1),null);
var seq__36117_36279 = cljs.core.seq.call(null,column_info_36278);
var chunk__36118_36280 = null;
var count__36119_36281 = (0);
var i__36120_36282 = (0);
while(true){
if((i__36120_36282 < count__36119_36281)){
var map__36123_36283 = cljs.core._nth.call(null,chunk__36118_36280,i__36120_36282);
var map__36123_36284__$1 = cljs.core.__destructure_map.call(null,map__36123_36283);
var gline_36285 = cljs.core.get.call(null,map__36123_36284__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_36286 = cljs.core.get.call(null,map__36123_36284__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_36287 = cljs.core.get.call(null,map__36123_36284__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36285], null),cljs.core.fnil.call(null,((function (seq__36117_36279,chunk__36118_36280,count__36119_36281,i__36120_36282,seq__36077_36229,chunk__36078_36230,count__36079_36231,i__36080_36232,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36123_36283,map__36123_36284__$1,gline_36285,gcol_36286,name_36287,vec__36114_36276,column_36277,column_info_36278,seq__36077_36270__$1,temp__5720__auto___36269__$1,vec__36074_36226,line_36227,columns_36228,seq__35917_36220__$1,temp__5720__auto___36219,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_36286], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_36227,new cljs.core.Keyword(null,"col","col",-1959363084),column_36277,new cljs.core.Keyword(null,"name","name",1843675177),name_36287], null));
});})(seq__36117_36279,chunk__36118_36280,count__36119_36281,i__36120_36282,seq__36077_36229,chunk__36078_36230,count__36079_36231,i__36080_36232,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36123_36283,map__36123_36284__$1,gline_36285,gcol_36286,name_36287,vec__36114_36276,column_36277,column_info_36278,seq__36077_36270__$1,temp__5720__auto___36269__$1,vec__36074_36226,line_36227,columns_36228,seq__35917_36220__$1,temp__5720__auto___36219,inverted))
,cljs.core.sorted_map.call(null)));


var G__36288 = seq__36117_36279;
var G__36289 = chunk__36118_36280;
var G__36290 = count__36119_36281;
var G__36291 = (i__36120_36282 + (1));
seq__36117_36279 = G__36288;
chunk__36118_36280 = G__36289;
count__36119_36281 = G__36290;
i__36120_36282 = G__36291;
continue;
} else {
var temp__5720__auto___36292__$2 = cljs.core.seq.call(null,seq__36117_36279);
if(temp__5720__auto___36292__$2){
var seq__36117_36293__$1 = temp__5720__auto___36292__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36117_36293__$1)){
var c__4679__auto___36294 = cljs.core.chunk_first.call(null,seq__36117_36293__$1);
var G__36295 = cljs.core.chunk_rest.call(null,seq__36117_36293__$1);
var G__36296 = c__4679__auto___36294;
var G__36297 = cljs.core.count.call(null,c__4679__auto___36294);
var G__36298 = (0);
seq__36117_36279 = G__36295;
chunk__36118_36280 = G__36296;
count__36119_36281 = G__36297;
i__36120_36282 = G__36298;
continue;
} else {
var map__36124_36299 = cljs.core.first.call(null,seq__36117_36293__$1);
var map__36124_36300__$1 = cljs.core.__destructure_map.call(null,map__36124_36299);
var gline_36301 = cljs.core.get.call(null,map__36124_36300__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_36302 = cljs.core.get.call(null,map__36124_36300__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_36303 = cljs.core.get.call(null,map__36124_36300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_36301], null),cljs.core.fnil.call(null,((function (seq__36117_36279,chunk__36118_36280,count__36119_36281,i__36120_36282,seq__36077_36229,chunk__36078_36230,count__36079_36231,i__36080_36232,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36124_36299,map__36124_36300__$1,gline_36301,gcol_36302,name_36303,seq__36117_36293__$1,temp__5720__auto___36292__$2,vec__36114_36276,column_36277,column_info_36278,seq__36077_36270__$1,temp__5720__auto___36269__$1,vec__36074_36226,line_36227,columns_36228,seq__35917_36220__$1,temp__5720__auto___36219,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_36302], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_36227,new cljs.core.Keyword(null,"col","col",-1959363084),column_36277,new cljs.core.Keyword(null,"name","name",1843675177),name_36303], null));
});})(seq__36117_36279,chunk__36118_36280,count__36119_36281,i__36120_36282,seq__36077_36229,chunk__36078_36230,count__36079_36231,i__36080_36232,seq__35917_36125,chunk__35918_36126,count__35919_36127,i__35920_36128,map__36124_36299,map__36124_36300__$1,gline_36301,gcol_36302,name_36303,seq__36117_36293__$1,temp__5720__auto___36292__$2,vec__36114_36276,column_36277,column_info_36278,seq__36077_36270__$1,temp__5720__auto___36269__$1,vec__36074_36226,line_36227,columns_36228,seq__35917_36220__$1,temp__5720__auto___36219,inverted))
,cljs.core.sorted_map.call(null)));


var G__36304 = cljs.core.next.call(null,seq__36117_36293__$1);
var G__36305 = null;
var G__36306 = (0);
var G__36307 = (0);
seq__36117_36279 = G__36304;
chunk__36118_36280 = G__36305;
count__36119_36281 = G__36306;
i__36120_36282 = G__36307;
continue;
}
} else {
}
}
break;
}


var G__36308 = cljs.core.next.call(null,seq__36077_36270__$1);
var G__36309 = null;
var G__36310 = (0);
var G__36311 = (0);
seq__36077_36229 = G__36308;
chunk__36078_36230 = G__36309;
count__36079_36231 = G__36310;
i__36080_36232 = G__36311;
continue;
}
} else {
}
}
break;
}


var G__36312 = cljs.core.next.call(null,seq__35917_36220__$1);
var G__36313 = null;
var G__36314 = (0);
var G__36315 = (0);
seq__35917_36125 = G__36312;
chunk__35918_36126 = G__36313;
count__35919_36127 = G__36314;
i__35920_36128 = G__36315;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
