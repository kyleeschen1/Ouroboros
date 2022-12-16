// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.event_loop');
goog.require('cljs.core');
goog.require('ob.db_nav');
goog.require('ob.update_db');
goog.require('ob.utils');
goog.require('com.rpl.specter');
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
ob.event_loop.events__GT_updates = (function ob$event_loop$events__GT_updates(tag,display_data,params){
var cf = ob.event_loop.animate.call(null,tag,display_data,cljs.core.vec.call(null,params));
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
var len__4864__auto___86513 = arguments.length;
var i__4865__auto___86514 = (0);
while(true){
if((i__4865__auto___86514 < len__4864__auto___86513)){
args__4870__auto__.push((arguments[i__4865__auto___86514]));

var G__86515 = (i__4865__auto___86514 + (1));
i__4865__auto___86514 = G__86515;
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
(ob.event_loop.animate_BANG_.cljs$lang$applyTo = (function (seq86512){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86512));
}));

/**
 * Sets up an event for processing,
 * blocking until its completion.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__20925__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_86530){
var state_val_86531 = (state_86530[(1)]);
if((state_val_86531 === (1))){
var state_86530__$1 = state_86530;
var statearr_86532_86540 = state_86530__$1;
(statearr_86532_86540[(2)] = null);

(statearr_86532_86540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86531 === (2))){
var state_86530__$1 = state_86530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86530__$1,(4),ob.event_loop.events);
} else {
if((state_val_86531 === (3))){
var inst_86528 = (state_86530[(2)]);
var state_86530__$1 = state_86530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86530__$1,inst_86528);
} else {
if((state_val_86531 === (4))){
var inst_86518 = (state_86530[(2)]);
var inst_86519 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86520 = [new cljs.core.Keyword(null,"events->updates","events->updates",-977928869)];
var inst_86521 = (new cljs.core.PersistentVector(null,1,(5),inst_86519,inst_86520,null));
var inst_86522 = cljs.core.into.call(null,inst_86521,inst_86518);
var inst_86523 = ob.utils._GT_evt.call(null,inst_86522);
var state_86530__$1 = (function (){var statearr_86533 = state_86530;
(statearr_86533[(7)] = inst_86523);

return statearr_86533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86530__$1,(5),ob.event_loop.block_event_loop);
} else {
if((state_val_86531 === (5))){
var inst_86525 = (state_86530[(2)]);
var state_86530__$1 = (function (){var statearr_86534 = state_86530;
(statearr_86534[(8)] = inst_86525);

return statearr_86534;
})();
var statearr_86535_86541 = state_86530__$1;
(statearr_86535_86541[(2)] = null);

(statearr_86535_86541[(1)] = (2));


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
var ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__ = null;
var ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____0 = (function (){
var statearr_86536 = [null,null,null,null,null,null,null,null,null];
(statearr_86536[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__);

(statearr_86536[(1)] = (1));

return statearr_86536;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1 = (function (state_86530){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_86530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e86537){if((e86537 instanceof Object)){
var ex__20906__auto__ = e86537;
var statearr_86538_86542 = state_86530;
(statearr_86538_86542[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86543 = state_86530;
state_86530 = G__86543;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__ = function(state_86530){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1.call(this,state_86530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_86539 = f__20926__auto__.call(null);
(statearr_86539[(6)] = c__20925__auto__);

return statearr_86539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20927__auto__);
}));

return c__20925__auto__;
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
var c__20925__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_86587){
var state_val_86588 = (state_86587[(1)]);
if((state_val_86588 === (7))){
var inst_86565 = cljs.core.async.timeout.call(null,(100));
var state_86587__$1 = state_86587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86587__$1,(10),inst_86565);
} else {
if((state_val_86588 === (1))){
var inst_86551 = cljs.core.seq.call(null,updates);
var inst_86552 = cljs.core.first.call(null,inst_86551);
var inst_86553 = cljs.core.next.call(null,inst_86551);
var inst_86554 = updates;
var state_86587__$1 = (function (){var statearr_86589 = state_86587;
(statearr_86589[(7)] = inst_86553);

(statearr_86589[(8)] = inst_86554);

(statearr_86589[(9)] = inst_86552);

return statearr_86589;
})();
var statearr_86590_86609 = state_86587__$1;
(statearr_86590_86609[(2)] = null);

(statearr_86590_86609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86588 === (4))){
var inst_86563 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_86587__$1 = state_86587;
if(cljs.core.truth_(inst_86563)){
var statearr_86591_86610 = state_86587__$1;
(statearr_86591_86610[(1)] = (7));

} else {
var statearr_86592_86611 = state_86587__$1;
(statearr_86592_86611[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86588 === (6))){
var inst_86582 = (state_86587[(2)]);
var inst_86583 = ob.event_loop.unblock_event_loop_BANG_.call(null);
var state_86587__$1 = (function (){var statearr_86593 = state_86587;
(statearr_86593[(10)] = inst_86582);

return statearr_86593;
})();
var statearr_86594_86612 = state_86587__$1;
(statearr_86594_86612[(2)] = inst_86583);

(statearr_86594_86612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86588 === (3))){
var inst_86585 = (state_86587[(2)]);
var state_86587__$1 = state_86587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86587__$1,inst_86585);
} else {
if((state_val_86588 === (2))){
var inst_86560 = (state_86587[(11)]);
var inst_86554 = (state_86587[(8)]);
var inst_86559 = cljs.core.seq.call(null,inst_86554);
var inst_86560__$1 = cljs.core.first.call(null,inst_86559);
var inst_86561 = cljs.core.next.call(null,inst_86559);
var state_86587__$1 = (function (){var statearr_86595 = state_86587;
(statearr_86595[(12)] = inst_86561);

(statearr_86595[(11)] = inst_86560__$1);

return statearr_86595;
})();
if(cljs.core.truth_(inst_86560__$1)){
var statearr_86596_86613 = state_86587__$1;
(statearr_86596_86613[(1)] = (4));

} else {
var statearr_86597_86614 = state_86587__$1;
(statearr_86597_86614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86588 === (11))){
var inst_86561 = (state_86587[(12)]);
var inst_86576 = (state_86587[(2)]);
var inst_86554 = inst_86561;
var state_86587__$1 = (function (){var statearr_86598 = state_86587;
(statearr_86598[(8)] = inst_86554);

(statearr_86598[(13)] = inst_86576);

return statearr_86598;
})();
var statearr_86599_86615 = state_86587__$1;
(statearr_86599_86615[(2)] = null);

(statearr_86599_86615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86588 === (9))){
var inst_86579 = (state_86587[(2)]);
var state_86587__$1 = state_86587;
var statearr_86600_86616 = state_86587__$1;
(statearr_86600_86616[(2)] = inst_86579);

(statearr_86600_86616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86588 === (5))){
var state_86587__$1 = state_86587;
var statearr_86601_86617 = state_86587__$1;
(statearr_86601_86617[(2)] = null);

(statearr_86601_86617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86588 === (10))){
var inst_86567 = (state_86587[(2)]);
var inst_86554 = updates;
var state_86587__$1 = (function (){var statearr_86602 = state_86587;
(statearr_86602[(14)] = inst_86567);

(statearr_86602[(8)] = inst_86554);

return statearr_86602;
})();
var statearr_86603_86618 = state_86587__$1;
(statearr_86603_86618[(2)] = null);

(statearr_86603_86618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86588 === (8))){
var inst_86560 = (state_86587[(11)]);
var inst_86570 = cljs.core.async.chan.call(null);
var inst_86571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86572 = [new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),inst_86570,inst_86560];
var inst_86573 = (new cljs.core.PersistentVector(null,3,(5),inst_86571,inst_86572,null));
var inst_86574 = ob.utils._GT_evt.call(null,inst_86573);
var state_86587__$1 = (function (){var statearr_86604 = state_86587;
(statearr_86604[(15)] = inst_86574);

return statearr_86604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86587__$1,(11),inst_86570);
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
var ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__ = null;
var ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____0 = (function (){
var statearr_86605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86605[(0)] = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__);

(statearr_86605[(1)] = (1));

return statearr_86605;
});
var ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1 = (function (state_86587){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_86587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e86606){if((e86606 instanceof Object)){
var ex__20906__auto__ = e86606;
var statearr_86607_86619 = state_86587;
(statearr_86607_86619[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86620 = state_86587;
state_86587 = G__86620;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__ = function(state_86587){
switch(arguments.length){
case 0:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1.call(this,state_86587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____0;
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1;
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_86608 = f__20926__auto__.call(null);
(statearr_86608[(6)] = c__20925__auto__);

return statearr_86608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20927__auto__);
}));

return c__20925__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),ob.event_loop.run_event_loop_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"events->updates","events->updates",-977928869),(function (p__86621,p__86622){
var map__86623 = p__86621;
var map__86623__$1 = cljs.core.__destructure_map.call(null,map__86623);
var db = cljs.core.get.call(null,map__86623__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__86624 = p__86622;
var seq__86625 = cljs.core.seq.call(null,vec__86624);
var first__86626 = cljs.core.first.call(null,seq__86625);
var seq__86625__$1 = cljs.core.next.call(null,seq__86625);
var _ = first__86626;
var first__86626__$1 = cljs.core.first.call(null,seq__86625__$1);
var seq__86625__$2 = cljs.core.next.call(null,seq__86625__$1);
var tag = first__86626__$1;
var params = seq__86625__$2;
var display = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.event_loop.pathcache86627;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info86628 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.event-loop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.event_loop.pathcache86627 = info86628;

return info86628;
})():info__17750__auto__);
var precompiled86629 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled86629.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled86629;
}
})(),db);
var events = ob.event_loop.events__GT_updates.call(null,tag,display,params);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),events], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),ob.event_loop.queue_db_updates_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),(function (p__86630,p__86631){
var map__86632 = p__86630;
var map__86632__$1 = cljs.core.__destructure_map.call(null,map__86632);
var db = cljs.core.get.call(null,map__86632__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__86633 = p__86631;
var _ = cljs.core.nth.call(null,vec__86633,(0),null);
var blocking_chan = cljs.core.nth.call(null,vec__86633,(1),null);
var update = cljs.core.nth.call(null,vec__86633,(2),null);
var map__86636 = ob.update_db.run_db_update.call(null,db,update);
var map__86636__$1 = cljs.core.__destructure_map.call(null,map__86636);
var db__$1 = cljs.core.get.call(null,map__86636__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time = cljs.core.get.call(null,map__86636__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,blocking_chan], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),(function (p__86637){
var vec__86638 = p__86637;
var time = cljs.core.nth.call(null,vec__86638,(0),null);
var blocking_channel = cljs.core.nth.call(null,vec__86638,(1),null);
var c__20925__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_86646){
var state_val_86647 = (state_86646[(1)]);
if((state_val_86647 === (1))){
var inst_86641 = cljs.core.async.timeout.call(null,time);
var state_86646__$1 = state_86646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86646__$1,(2),inst_86641);
} else {
if((state_val_86647 === (2))){
var inst_86643 = (state_86646[(2)]);
var inst_86644 = cljs.core.async.close_BANG_.call(null,blocking_channel);
var state_86646__$1 = (function (){var statearr_86648 = state_86646;
(statearr_86648[(7)] = inst_86643);

return statearr_86648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86646__$1,inst_86644);
} else {
return null;
}
}
});
return (function() {
var ob$event_loop$state_machine__20903__auto__ = null;
var ob$event_loop$state_machine__20903__auto____0 = (function (){
var statearr_86649 = [null,null,null,null,null,null,null,null];
(statearr_86649[(0)] = ob$event_loop$state_machine__20903__auto__);

(statearr_86649[(1)] = (1));

return statearr_86649;
});
var ob$event_loop$state_machine__20903__auto____1 = (function (state_86646){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_86646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e86650){if((e86650 instanceof Object)){
var ex__20906__auto__ = e86650;
var statearr_86651_86653 = state_86646;
(statearr_86651_86653[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86654 = state_86646;
state_86646 = G__86654;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$state_machine__20903__auto__ = function(state_86646){
switch(arguments.length){
case 0:
return ob$event_loop$state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$state_machine__20903__auto____1.call(this,state_86646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$state_machine__20903__auto____0;
ob$event_loop$state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$state_machine__20903__auto____1;
return ob$event_loop$state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_86652 = f__20926__auto__.call(null);
(statearr_86652[(6)] = c__20925__auto__);

return statearr_86652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20927__auto__);
}));

return c__20925__auto__;
}));
ob.event_loop.paused_QMARK_ = cljs.core.atom.call(null,false);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"update-pause-state!","update-pause-state!",953544338),(function (p_QMARK_){
return cljs.core.reset_BANG_.call(null,ob.event_loop.paused_QMARK_,p_QMARK_);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"toggle-pause","toggle-pause",1648289919),(function (p__86655,_){
var map__86656 = p__86655;
var map__86656__$1 = cljs.core.__destructure_map.call(null,map__86656);
var db = cljs.core.get.call(null,map__86656__$1,new cljs.core.Keyword(null,"db","db",993250759));
var p_QMARK_ = cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"paused?","paused?",-135058553),p_QMARK_),new cljs.core.Keyword(null,"update-pause-state!","update-pause-state!",953544338),p_QMARK_], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553),(function (db,_){
if(cljs.core.truth_(cljs.core.get.call(null,db,new cljs.core.Keyword(null,"paused?","paused?",-135058553)))){
return "Resume";
} else {
return "Pause";
}
}));

//# sourceMappingURL=event_loop.js.map
