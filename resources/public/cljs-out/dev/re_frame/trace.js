// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__15888){
var map__15889 = p__15888;
var map__15889__$1 = cljs.core.__destructure_map.call(null,map__15889);
var operation = cljs.core.get.call(null,map__15889__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__15889__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__15889__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__15889__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__15890_15910 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__15891_15911 = null;
var count__15892_15912 = (0);
var i__15893_15913 = (0);
while(true){
if((i__15893_15913 < count__15892_15912)){
var vec__15902_15914 = cljs.core._nth.call(null,chunk__15891_15911,i__15893_15913);
var k_15915 = cljs.core.nth.call(null,vec__15902_15914,(0),null);
var cb_15916 = cljs.core.nth.call(null,vec__15902_15914,(1),null);
try{cb_15916.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e15905){var e_15917 = e15905;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_15915,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_15917);
}

var G__15918 = seq__15890_15910;
var G__15919 = chunk__15891_15911;
var G__15920 = count__15892_15912;
var G__15921 = (i__15893_15913 + (1));
seq__15890_15910 = G__15918;
chunk__15891_15911 = G__15919;
count__15892_15912 = G__15920;
i__15893_15913 = G__15921;
continue;
} else {
var temp__5720__auto___15922 = cljs.core.seq.call(null,seq__15890_15910);
if(temp__5720__auto___15922){
var seq__15890_15923__$1 = temp__5720__auto___15922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15890_15923__$1)){
var c__4679__auto___15924 = cljs.core.chunk_first.call(null,seq__15890_15923__$1);
var G__15925 = cljs.core.chunk_rest.call(null,seq__15890_15923__$1);
var G__15926 = c__4679__auto___15924;
var G__15927 = cljs.core.count.call(null,c__4679__auto___15924);
var G__15928 = (0);
seq__15890_15910 = G__15925;
chunk__15891_15911 = G__15926;
count__15892_15912 = G__15927;
i__15893_15913 = G__15928;
continue;
} else {
var vec__15906_15929 = cljs.core.first.call(null,seq__15890_15923__$1);
var k_15930 = cljs.core.nth.call(null,vec__15906_15929,(0),null);
var cb_15931 = cljs.core.nth.call(null,vec__15906_15929,(1),null);
try{cb_15931.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e15909){var e_15932 = e15909;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_15930,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_15932);
}

var G__15933 = cljs.core.next.call(null,seq__15890_15923__$1);
var G__15934 = null;
var G__15935 = (0);
var G__15936 = (0);
seq__15890_15910 = G__15933;
chunk__15891_15911 = G__15934;
count__15892_15912 = G__15935;
i__15893_15913 = G__15936;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
