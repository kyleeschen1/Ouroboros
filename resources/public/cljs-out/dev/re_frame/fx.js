// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__16377 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16378 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16378);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___16411 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___16411)){
var new_db_16412 = temp__5720__auto___16411;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16412);
} else {
}

var seq__16379 = cljs.core.seq.call(null,effects_without_db);
var chunk__16380 = null;
var count__16381 = (0);
var i__16382 = (0);
while(true){
if((i__16382 < count__16381)){
var vec__16389 = cljs.core._nth.call(null,chunk__16380,i__16382);
var effect_key = cljs.core.nth.call(null,vec__16389,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16389,(1),null);
var temp__5718__auto___16413 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___16413)){
var effect_fn_16414 = temp__5718__auto___16413;
effect_fn_16414.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16415 = seq__16379;
var G__16416 = chunk__16380;
var G__16417 = count__16381;
var G__16418 = (i__16382 + (1));
seq__16379 = G__16415;
chunk__16380 = G__16416;
count__16381 = G__16417;
i__16382 = G__16418;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16379);
if(temp__5720__auto__){
var seq__16379__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16379__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16379__$1);
var G__16419 = cljs.core.chunk_rest.call(null,seq__16379__$1);
var G__16420 = c__4679__auto__;
var G__16421 = cljs.core.count.call(null,c__4679__auto__);
var G__16422 = (0);
seq__16379 = G__16419;
chunk__16380 = G__16420;
count__16381 = G__16421;
i__16382 = G__16422;
continue;
} else {
var vec__16392 = cljs.core.first.call(null,seq__16379__$1);
var effect_key = cljs.core.nth.call(null,vec__16392,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16392,(1),null);
var temp__5718__auto___16423 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___16423)){
var effect_fn_16424 = temp__5718__auto___16423;
effect_fn_16424.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16425 = cljs.core.next.call(null,seq__16379__$1);
var G__16426 = null;
var G__16427 = (0);
var G__16428 = (0);
seq__16379 = G__16425;
chunk__16380 = G__16426;
count__16381 = G__16427;
i__16382 = G__16428;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__15866__auto___16429 = re_frame.interop.now.call(null);
var duration__15867__auto___16430 = (end__15866__auto___16429 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15867__auto___16430,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__15866__auto___16429);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16377);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___16431 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___16431)){
var new_db_16432 = temp__5720__auto___16431;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_16432);
} else {
}

var seq__16395 = cljs.core.seq.call(null,effects_without_db);
var chunk__16396 = null;
var count__16397 = (0);
var i__16398 = (0);
while(true){
if((i__16398 < count__16397)){
var vec__16405 = cljs.core._nth.call(null,chunk__16396,i__16398);
var effect_key = cljs.core.nth.call(null,vec__16405,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16405,(1),null);
var temp__5718__auto___16433 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___16433)){
var effect_fn_16434 = temp__5718__auto___16433;
effect_fn_16434.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16435 = seq__16395;
var G__16436 = chunk__16396;
var G__16437 = count__16397;
var G__16438 = (i__16398 + (1));
seq__16395 = G__16435;
chunk__16396 = G__16436;
count__16397 = G__16437;
i__16398 = G__16438;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16395);
if(temp__5720__auto__){
var seq__16395__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16395__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16395__$1);
var G__16439 = cljs.core.chunk_rest.call(null,seq__16395__$1);
var G__16440 = c__4679__auto__;
var G__16441 = cljs.core.count.call(null,c__4679__auto__);
var G__16442 = (0);
seq__16395 = G__16439;
chunk__16396 = G__16440;
count__16397 = G__16441;
i__16398 = G__16442;
continue;
} else {
var vec__16408 = cljs.core.first.call(null,seq__16395__$1);
var effect_key = cljs.core.nth.call(null,vec__16408,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16408,(1),null);
var temp__5718__auto___16443 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___16443)){
var effect_fn_16444 = temp__5718__auto___16443;
effect_fn_16444.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16445 = cljs.core.next.call(null,seq__16395__$1);
var G__16446 = null;
var G__16447 = (0);
var G__16448 = (0);
seq__16395 = G__16445;
chunk__16396 = G__16446;
count__16397 = G__16447;
i__16398 = G__16448;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16449){
var map__16450 = p__16449;
var map__16450__$1 = cljs.core.__destructure_map.call(null,map__16450);
var effect = map__16450__$1;
var ms = cljs.core.get.call(null,map__16450__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16450__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__16451 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16452 = null;
var count__16453 = (0);
var i__16454 = (0);
while(true){
if((i__16454 < count__16453)){
var effect = cljs.core._nth.call(null,chunk__16452,i__16454);
re_frame.fx.dispatch_later.call(null,effect);


var G__16455 = seq__16451;
var G__16456 = chunk__16452;
var G__16457 = count__16453;
var G__16458 = (i__16454 + (1));
seq__16451 = G__16455;
chunk__16452 = G__16456;
count__16453 = G__16457;
i__16454 = G__16458;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16451);
if(temp__5720__auto__){
var seq__16451__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16451__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16451__$1);
var G__16459 = cljs.core.chunk_rest.call(null,seq__16451__$1);
var G__16460 = c__4679__auto__;
var G__16461 = cljs.core.count.call(null,c__4679__auto__);
var G__16462 = (0);
seq__16451 = G__16459;
chunk__16452 = G__16460;
count__16453 = G__16461;
i__16454 = G__16462;
continue;
} else {
var effect = cljs.core.first.call(null,seq__16451__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__16463 = cljs.core.next.call(null,seq__16451__$1);
var G__16464 = null;
var G__16465 = (0);
var G__16466 = (0);
seq__16451 = G__16463;
chunk__16452 = G__16464;
count__16453 = G__16465;
i__16454 = G__16466;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__16467 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16468 = null;
var count__16469 = (0);
var i__16470 = (0);
while(true){
if((i__16470 < count__16469)){
var vec__16477 = cljs.core._nth.call(null,chunk__16468,i__16470);
var effect_key = cljs.core.nth.call(null,vec__16477,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16477,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___16483 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___16483)){
var effect_fn_16484 = temp__5718__auto___16483;
effect_fn_16484.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16485 = seq__16467;
var G__16486 = chunk__16468;
var G__16487 = count__16469;
var G__16488 = (i__16470 + (1));
seq__16467 = G__16485;
chunk__16468 = G__16486;
count__16469 = G__16487;
i__16470 = G__16488;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16467);
if(temp__5720__auto__){
var seq__16467__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16467__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16467__$1);
var G__16489 = cljs.core.chunk_rest.call(null,seq__16467__$1);
var G__16490 = c__4679__auto__;
var G__16491 = cljs.core.count.call(null,c__4679__auto__);
var G__16492 = (0);
seq__16467 = G__16489;
chunk__16468 = G__16490;
count__16469 = G__16491;
i__16470 = G__16492;
continue;
} else {
var vec__16480 = cljs.core.first.call(null,seq__16467__$1);
var effect_key = cljs.core.nth.call(null,vec__16480,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16480,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___16493 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___16493)){
var effect_fn_16494 = temp__5718__auto___16493;
effect_fn_16494.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__16495 = cljs.core.next.call(null,seq__16467__$1);
var G__16496 = null;
var G__16497 = (0);
var G__16498 = (0);
seq__16467 = G__16495;
chunk__16468 = G__16496;
count__16469 = G__16497;
i__16470 = G__16498;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__16499 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16500 = null;
var count__16501 = (0);
var i__16502 = (0);
while(true){
if((i__16502 < count__16501)){
var event = cljs.core._nth.call(null,chunk__16500,i__16502);
re_frame.router.dispatch.call(null,event);


var G__16503 = seq__16499;
var G__16504 = chunk__16500;
var G__16505 = count__16501;
var G__16506 = (i__16502 + (1));
seq__16499 = G__16503;
chunk__16500 = G__16504;
count__16501 = G__16505;
i__16502 = G__16506;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16499);
if(temp__5720__auto__){
var seq__16499__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16499__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16499__$1);
var G__16507 = cljs.core.chunk_rest.call(null,seq__16499__$1);
var G__16508 = c__4679__auto__;
var G__16509 = cljs.core.count.call(null,c__4679__auto__);
var G__16510 = (0);
seq__16499 = G__16507;
chunk__16500 = G__16508;
count__16501 = G__16509;
i__16502 = G__16510;
continue;
} else {
var event = cljs.core.first.call(null,seq__16499__$1);
re_frame.router.dispatch.call(null,event);


var G__16511 = cljs.core.next.call(null,seq__16499__$1);
var G__16512 = null;
var G__16513 = (0);
var G__16514 = (0);
seq__16499 = G__16511;
chunk__16500 = G__16512;
count__16501 = G__16513;
i__16502 = G__16514;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__16515 = cljs.core.seq.call(null,value);
var chunk__16516 = null;
var count__16517 = (0);
var i__16518 = (0);
while(true){
if((i__16518 < count__16517)){
var event = cljs.core._nth.call(null,chunk__16516,i__16518);
clear_event.call(null,event);


var G__16519 = seq__16515;
var G__16520 = chunk__16516;
var G__16521 = count__16517;
var G__16522 = (i__16518 + (1));
seq__16515 = G__16519;
chunk__16516 = G__16520;
count__16517 = G__16521;
i__16518 = G__16522;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16515);
if(temp__5720__auto__){
var seq__16515__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16515__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16515__$1);
var G__16523 = cljs.core.chunk_rest.call(null,seq__16515__$1);
var G__16524 = c__4679__auto__;
var G__16525 = cljs.core.count.call(null,c__4679__auto__);
var G__16526 = (0);
seq__16515 = G__16523;
chunk__16516 = G__16524;
count__16517 = G__16525;
i__16518 = G__16526;
continue;
} else {
var event = cljs.core.first.call(null,seq__16515__$1);
clear_event.call(null,event);


var G__16527 = cljs.core.next.call(null,seq__16515__$1);
var G__16528 = null;
var G__16529 = (0);
var G__16530 = (0);
seq__16515 = G__16527;
chunk__16516 = G__16528;
count__16517 = G__16529;
i__16518 = G__16530;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
