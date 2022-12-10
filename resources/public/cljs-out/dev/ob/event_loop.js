// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.event_loop');
goog.require('cljs.core');
goog.require('ob.update_db');
goog.require('ob.utils');
goog.require('cljs.core.async');
goog.require('re_frame.core');
if((typeof ob !== 'undefined') && (typeof ob.event_loop !== 'undefined') && (typeof ob.event_loop.animate !== 'undefined')){
} else {
ob.event_loop.animate = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.event-loop","animate"),(function (tag,_,___$1){
return tag;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
/**
 * Compiles events into a flat vector
 * of db updates.
 */
ob.event_loop.events__GT_updates = (function ob$event_loop$events__GT_updates(tag,db,params){
var cf = ob.event_loop.animate.call(null,tag,db,cljs.core.vec.call(null,params));
var configs = ((cljs.core.vector_QMARK_.call(null,cf))?cf:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf], null));
return configs;
});


ob.event_loop.events = cljs.core.async.chan.call(null);
/**
 * Puts an animation on the
 * event channel.
 */
ob.event_loop.animate_BANG_ = (function ob$event_loop$animate_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___127403 = arguments.length;
var i__4865__auto___127404 = (0);
while(true){
if((i__4865__auto___127404 < len__4864__auto___127403)){
args__4870__auto__.push((arguments[i__4865__auto___127404]));

var G__127405 = (i__4865__auto___127404 + (1));
i__4865__auto___127404 = G__127405;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.event_loop.animate_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.event_loop.animate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.async.put_BANG_.call(null,ob.event_loop.events,cljs.core.vec.call(null,args));
}));

(ob.event_loop.animate_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.event_loop.animate_BANG_.cljs$lang$applyTo = (function (seq127402){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq127402));
}));

/**
 * Sets up an event for processing,
 * blocking until its completion.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_127420){
var state_val_127421 = (state_127420[(1)]);
if((state_val_127421 === (1))){
var state_127420__$1 = state_127420;
var statearr_127422_127430 = state_127420__$1;
(statearr_127422_127430[(2)] = null);

(statearr_127422_127430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127421 === (2))){
var state_127420__$1 = state_127420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127420__$1,(4),ob.event_loop.events);
} else {
if((state_val_127421 === (3))){
var inst_127418 = (state_127420[(2)]);
var state_127420__$1 = state_127420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127420__$1,inst_127418);
} else {
if((state_val_127421 === (4))){
var inst_127408 = (state_127420[(2)]);
var inst_127409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127410 = [new cljs.core.Keyword(null,"events->updates","events->updates",-977928869)];
var inst_127411 = (new cljs.core.PersistentVector(null,1,(5),inst_127409,inst_127410,null));
var inst_127412 = cljs.core.into.call(null,inst_127411,inst_127408);
var inst_127413 = ob.utils._GT_evt.call(null,inst_127412);
var state_127420__$1 = (function (){var statearr_127423 = state_127420;
(statearr_127423[(7)] = inst_127413);

return statearr_127423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127420__$1,(5),ob.event_loop.block_event_loop);
} else {
if((state_val_127421 === (5))){
var inst_127415 = (state_127420[(2)]);
var state_127420__$1 = (function (){var statearr_127424 = state_127420;
(statearr_127424[(8)] = inst_127415);

return statearr_127424;
})();
var statearr_127425_127431 = state_127420__$1;
(statearr_127425_127431[(2)] = null);

(statearr_127425_127431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = null;
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0 = (function (){
var statearr_127426 = [null,null,null,null,null,null,null,null,null];
(statearr_127426[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__);

(statearr_127426[(1)] = (1));

return statearr_127426;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1 = (function (state_127420){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_127420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e127427){if((e127427 instanceof Object)){
var ex__27893__auto__ = e127427;
var statearr_127428_127432 = state_127420;
(statearr_127428_127432[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127433 = state_127420;
state_127420 = G__127433;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = function(state_127420){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1.call(this,state_127420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_127429 = f__27987__auto__.call(null);
(statearr_127429[(6)] = c__27986__auto__);

return statearr_127429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
ob.event_loop.block_event_loop = cljs.core.async.chan.call(null);
ob.event_loop.unblock_event_loop_BANG_ = (function ob$event_loop$unblock_event_loop_BANG_(){
return cljs.core.async.put_BANG_.call(null,ob.event_loop.block_event_loop,new cljs.core.Keyword(null,"unleash-the-next-terror","unleash-the-next-terror",1233761));
});
/**
 * Takes in a sequence of db updates,
 * dispatches each for for execution,
 * blocking between if appropriate.
 * 
 * Once everything has been processed,
 * it unblocks the event loop.
 */
ob.event_loop.queue_db_updates_BANG_ = (function ob$event_loop$queue_db_updates_BANG_(updates){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_127477){
var state_val_127478 = (state_127477[(1)]);
if((state_val_127478 === (7))){
var inst_127455 = cljs.core.async.timeout.call(null,(100));
var state_127477__$1 = state_127477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127477__$1,(10),inst_127455);
} else {
if((state_val_127478 === (1))){
var inst_127441 = cljs.core.seq.call(null,updates);
var inst_127442 = cljs.core.first.call(null,inst_127441);
var inst_127443 = cljs.core.next.call(null,inst_127441);
var inst_127444 = updates;
var state_127477__$1 = (function (){var statearr_127479 = state_127477;
(statearr_127479[(7)] = inst_127443);

(statearr_127479[(8)] = inst_127444);

(statearr_127479[(9)] = inst_127442);

return statearr_127479;
})();
var statearr_127480_127499 = state_127477__$1;
(statearr_127480_127499[(2)] = null);

(statearr_127480_127499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127478 === (4))){
var inst_127453 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_127477__$1 = state_127477;
if(cljs.core.truth_(inst_127453)){
var statearr_127481_127500 = state_127477__$1;
(statearr_127481_127500[(1)] = (7));

} else {
var statearr_127482_127501 = state_127477__$1;
(statearr_127482_127501[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127478 === (6))){
var inst_127472 = (state_127477[(2)]);
var inst_127473 = ob.event_loop.unblock_event_loop_BANG_.call(null);
var state_127477__$1 = (function (){var statearr_127483 = state_127477;
(statearr_127483[(10)] = inst_127472);

return statearr_127483;
})();
var statearr_127484_127502 = state_127477__$1;
(statearr_127484_127502[(2)] = inst_127473);

(statearr_127484_127502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127478 === (3))){
var inst_127475 = (state_127477[(2)]);
var state_127477__$1 = state_127477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127477__$1,inst_127475);
} else {
if((state_val_127478 === (2))){
var inst_127450 = (state_127477[(11)]);
var inst_127444 = (state_127477[(8)]);
var inst_127449 = cljs.core.seq.call(null,inst_127444);
var inst_127450__$1 = cljs.core.first.call(null,inst_127449);
var inst_127451 = cljs.core.next.call(null,inst_127449);
var state_127477__$1 = (function (){var statearr_127485 = state_127477;
(statearr_127485[(11)] = inst_127450__$1);

(statearr_127485[(12)] = inst_127451);

return statearr_127485;
})();
if(cljs.core.truth_(inst_127450__$1)){
var statearr_127486_127503 = state_127477__$1;
(statearr_127486_127503[(1)] = (4));

} else {
var statearr_127487_127504 = state_127477__$1;
(statearr_127487_127504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127478 === (11))){
var inst_127451 = (state_127477[(12)]);
var inst_127466 = (state_127477[(2)]);
var inst_127444 = inst_127451;
var state_127477__$1 = (function (){var statearr_127488 = state_127477;
(statearr_127488[(8)] = inst_127444);

(statearr_127488[(13)] = inst_127466);

return statearr_127488;
})();
var statearr_127489_127505 = state_127477__$1;
(statearr_127489_127505[(2)] = null);

(statearr_127489_127505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127478 === (9))){
var inst_127469 = (state_127477[(2)]);
var state_127477__$1 = state_127477;
var statearr_127490_127506 = state_127477__$1;
(statearr_127490_127506[(2)] = inst_127469);

(statearr_127490_127506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127478 === (5))){
var state_127477__$1 = state_127477;
var statearr_127491_127507 = state_127477__$1;
(statearr_127491_127507[(2)] = null);

(statearr_127491_127507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127478 === (10))){
var inst_127457 = (state_127477[(2)]);
var inst_127444 = updates;
var state_127477__$1 = (function (){var statearr_127492 = state_127477;
(statearr_127492[(8)] = inst_127444);

(statearr_127492[(14)] = inst_127457);

return statearr_127492;
})();
var statearr_127493_127508 = state_127477__$1;
(statearr_127493_127508[(2)] = null);

(statearr_127493_127508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127478 === (8))){
var inst_127450 = (state_127477[(11)]);
var inst_127460 = cljs.core.async.chan.call(null);
var inst_127461 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127462 = [new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),inst_127460,inst_127450];
var inst_127463 = (new cljs.core.PersistentVector(null,3,(5),inst_127461,inst_127462,null));
var inst_127464 = ob.utils._GT_evt.call(null,inst_127463);
var state_127477__$1 = (function (){var statearr_127494 = state_127477;
(statearr_127494[(15)] = inst_127464);

return statearr_127494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127477__$1,(11),inst_127460);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__ = null;
var ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0 = (function (){
var statearr_127495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_127495[(0)] = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__);

(statearr_127495[(1)] = (1));

return statearr_127495;
});
var ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1 = (function (state_127477){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_127477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e127496){if((e127496 instanceof Object)){
var ex__27893__auto__ = e127496;
var statearr_127497_127509 = state_127477;
(statearr_127497_127509[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127510 = state_127477;
state_127477 = G__127510;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__ = function(state_127477){
switch(arguments.length){
case 0:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1.call(this,state_127477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0;
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_127498 = f__27987__auto__.call(null);
(statearr_127498[(6)] = c__27986__auto__);

return statearr_127498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),ob.event_loop.run_event_loop_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"events->updates","events->updates",-977928869),(function (p__127511,p__127512){
var map__127513 = p__127511;
var map__127513__$1 = cljs.core.__destructure_map.call(null,map__127513);
var db = cljs.core.get.call(null,map__127513__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__127514 = p__127512;
var seq__127515 = cljs.core.seq.call(null,vec__127514);
var first__127516 = cljs.core.first.call(null,seq__127515);
var seq__127515__$1 = cljs.core.next.call(null,seq__127515);
var _ = first__127516;
var first__127516__$1 = cljs.core.first.call(null,seq__127515__$1);
var seq__127515__$2 = cljs.core.next.call(null,seq__127515__$1);
var tag = first__127516__$1;
var params = seq__127515__$2;
var events = ob.event_loop.events__GT_updates.call(null,tag,db,params);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),events], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),ob.event_loop.queue_db_updates_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),(function (p__127517,p__127518){
var map__127519 = p__127517;
var map__127519__$1 = cljs.core.__destructure_map.call(null,map__127519);
var db = cljs.core.get.call(null,map__127519__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__127520 = p__127518;
var _ = cljs.core.nth.call(null,vec__127520,(0),null);
var blocking_chan = cljs.core.nth.call(null,vec__127520,(1),null);
var update = cljs.core.nth.call(null,vec__127520,(2),null);
var map__127523 = ob.update_db.run_db_update.call(null,db,update);
var map__127523__$1 = cljs.core.__destructure_map.call(null,map__127523);
var db__$1 = cljs.core.get.call(null,map__127523__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time = cljs.core.get.call(null,map__127523__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,blocking_chan], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),(function (p__127524){
var vec__127525 = p__127524;
var time = cljs.core.nth.call(null,vec__127525,(0),null);
var blocking_channel = cljs.core.nth.call(null,vec__127525,(1),null);
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_127538){
var state_val_127539 = (state_127538[(1)]);
if((state_val_127539 === (1))){
var state_127538__$1 = state_127538;
if(cljs.core.truth_(time)){
var statearr_127540_127549 = state_127538__$1;
(statearr_127540_127549[(1)] = (3));

} else {
var statearr_127541_127550 = state_127538__$1;
(statearr_127541_127550[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127539 === (2))){
var inst_127535 = (state_127538[(2)]);
var inst_127536 = cljs.core.async.close_BANG_.call(null,blocking_channel);
var state_127538__$1 = (function (){var statearr_127542 = state_127538;
(statearr_127542[(7)] = inst_127535);

return statearr_127542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127538__$1,inst_127536);
} else {
if((state_val_127539 === (3))){
var state_127538__$1 = state_127538;
var statearr_127543_127551 = state_127538__$1;
(statearr_127543_127551[(2)] = time);

(statearr_127543_127551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127539 === (4))){
var state_127538__$1 = state_127538;
var statearr_127544_127552 = state_127538__$1;
(statearr_127544_127552[(2)] = 0.02);

(statearr_127544_127552[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127539 === (5))){
var inst_127531 = (state_127538[(2)]);
var inst_127532 = ((1000) * inst_127531);
var inst_127533 = cljs.core.async.timeout.call(null,inst_127532);
var state_127538__$1 = state_127538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127538__$1,(2),inst_127533);
} else {
return null;
}
}
}
}
}
});
return (function() {
var ob$event_loop$state_machine__27890__auto__ = null;
var ob$event_loop$state_machine__27890__auto____0 = (function (){
var statearr_127545 = [null,null,null,null,null,null,null,null];
(statearr_127545[(0)] = ob$event_loop$state_machine__27890__auto__);

(statearr_127545[(1)] = (1));

return statearr_127545;
});
var ob$event_loop$state_machine__27890__auto____1 = (function (state_127538){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_127538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e127546){if((e127546 instanceof Object)){
var ex__27893__auto__ = e127546;
var statearr_127547_127553 = state_127538;
(statearr_127547_127553[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127554 = state_127538;
state_127538 = G__127554;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$state_machine__27890__auto__ = function(state_127538){
switch(arguments.length){
case 0:
return ob$event_loop$state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$state_machine__27890__auto____1.call(this,state_127538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$state_machine__27890__auto____0;
ob$event_loop$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$state_machine__27890__auto____1;
return ob$event_loop$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_127548 = f__27987__auto__.call(null);
(statearr_127548[(6)] = c__27986__auto__);

return statearr_127548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
}));
ob.event_loop.paused_QMARK_ = cljs.core.atom.call(null,false);
ob.event_loop.pause_BANG_ = (function ob$event_loop$pause_BANG_(){
return cljs.core.swap_BANG_.call(null,ob.event_loop.paused_QMARK_,cljs.core.not);
});

//# sourceMappingURL=event_loop.js.map
