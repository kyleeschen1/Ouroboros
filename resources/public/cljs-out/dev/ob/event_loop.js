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
var len__4864__auto___125711 = arguments.length;
var i__4865__auto___125712 = (0);
while(true){
if((i__4865__auto___125712 < len__4864__auto___125711)){
args__4870__auto__.push((arguments[i__4865__auto___125712]));

var G__125713 = (i__4865__auto___125712 + (1));
i__4865__auto___125712 = G__125713;
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
(ob.event_loop.animate_BANG_.cljs$lang$applyTo = (function (seq125710){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq125710));
}));

/**
 * Sets up an event for processing,
 * blocking until its completion.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_125728){
var state_val_125729 = (state_125728[(1)]);
if((state_val_125729 === (1))){
var state_125728__$1 = state_125728;
var statearr_125730_125738 = state_125728__$1;
(statearr_125730_125738[(2)] = null);

(statearr_125730_125738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125729 === (2))){
var state_125728__$1 = state_125728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_125728__$1,(4),ob.event_loop.events);
} else {
if((state_val_125729 === (3))){
var inst_125726 = (state_125728[(2)]);
var state_125728__$1 = state_125728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_125728__$1,inst_125726);
} else {
if((state_val_125729 === (4))){
var inst_125716 = (state_125728[(2)]);
var inst_125717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125718 = [new cljs.core.Keyword(null,"events->updates","events->updates",-977928869)];
var inst_125719 = (new cljs.core.PersistentVector(null,1,(5),inst_125717,inst_125718,null));
var inst_125720 = cljs.core.into.call(null,inst_125719,inst_125716);
var inst_125721 = ob.utils._GT_evt.call(null,inst_125720);
var state_125728__$1 = (function (){var statearr_125731 = state_125728;
(statearr_125731[(7)] = inst_125721);

return statearr_125731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_125728__$1,(5),ob.event_loop.block_event_loop);
} else {
if((state_val_125729 === (5))){
var inst_125723 = (state_125728[(2)]);
var state_125728__$1 = (function (){var statearr_125732 = state_125728;
(statearr_125732[(8)] = inst_125723);

return statearr_125732;
})();
var statearr_125733_125739 = state_125728__$1;
(statearr_125733_125739[(2)] = null);

(statearr_125733_125739[(1)] = (2));


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
var statearr_125734 = [null,null,null,null,null,null,null,null,null];
(statearr_125734[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__);

(statearr_125734[(1)] = (1));

return statearr_125734;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1 = (function (state_125728){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_125728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e125735){if((e125735 instanceof Object)){
var ex__27893__auto__ = e125735;
var statearr_125736_125740 = state_125728;
(statearr_125736_125740[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_125728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125741 = state_125728;
state_125728 = G__125741;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = function(state_125728){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1.call(this,state_125728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_125737 = f__27987__auto__.call(null);
(statearr_125737[(6)] = c__27986__auto__);

return statearr_125737;
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
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_125785){
var state_val_125786 = (state_125785[(1)]);
if((state_val_125786 === (7))){
var inst_125763 = cljs.core.async.timeout.call(null,(100));
var state_125785__$1 = state_125785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_125785__$1,(10),inst_125763);
} else {
if((state_val_125786 === (1))){
var inst_125749 = cljs.core.seq.call(null,updates);
var inst_125750 = cljs.core.first.call(null,inst_125749);
var inst_125751 = cljs.core.next.call(null,inst_125749);
var inst_125752 = updates;
var state_125785__$1 = (function (){var statearr_125787 = state_125785;
(statearr_125787[(7)] = inst_125752);

(statearr_125787[(8)] = inst_125750);

(statearr_125787[(9)] = inst_125751);

return statearr_125787;
})();
var statearr_125788_125807 = state_125785__$1;
(statearr_125788_125807[(2)] = null);

(statearr_125788_125807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125786 === (4))){
var inst_125761 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_125785__$1 = state_125785;
if(cljs.core.truth_(inst_125761)){
var statearr_125789_125808 = state_125785__$1;
(statearr_125789_125808[(1)] = (7));

} else {
var statearr_125790_125809 = state_125785__$1;
(statearr_125790_125809[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125786 === (6))){
var inst_125780 = (state_125785[(2)]);
var inst_125781 = ob.event_loop.unblock_event_loop_BANG_.call(null);
var state_125785__$1 = (function (){var statearr_125791 = state_125785;
(statearr_125791[(10)] = inst_125780);

return statearr_125791;
})();
var statearr_125792_125810 = state_125785__$1;
(statearr_125792_125810[(2)] = inst_125781);

(statearr_125792_125810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125786 === (3))){
var inst_125783 = (state_125785[(2)]);
var state_125785__$1 = state_125785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_125785__$1,inst_125783);
} else {
if((state_val_125786 === (2))){
var inst_125752 = (state_125785[(7)]);
var inst_125758 = (state_125785[(11)]);
var inst_125757 = cljs.core.seq.call(null,inst_125752);
var inst_125758__$1 = cljs.core.first.call(null,inst_125757);
var inst_125759 = cljs.core.next.call(null,inst_125757);
var state_125785__$1 = (function (){var statearr_125793 = state_125785;
(statearr_125793[(11)] = inst_125758__$1);

(statearr_125793[(12)] = inst_125759);

return statearr_125793;
})();
if(cljs.core.truth_(inst_125758__$1)){
var statearr_125794_125811 = state_125785__$1;
(statearr_125794_125811[(1)] = (4));

} else {
var statearr_125795_125812 = state_125785__$1;
(statearr_125795_125812[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125786 === (11))){
var inst_125759 = (state_125785[(12)]);
var inst_125774 = (state_125785[(2)]);
var inst_125752 = inst_125759;
var state_125785__$1 = (function (){var statearr_125796 = state_125785;
(statearr_125796[(7)] = inst_125752);

(statearr_125796[(13)] = inst_125774);

return statearr_125796;
})();
var statearr_125797_125813 = state_125785__$1;
(statearr_125797_125813[(2)] = null);

(statearr_125797_125813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125786 === (9))){
var inst_125777 = (state_125785[(2)]);
var state_125785__$1 = state_125785;
var statearr_125798_125814 = state_125785__$1;
(statearr_125798_125814[(2)] = inst_125777);

(statearr_125798_125814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125786 === (5))){
var state_125785__$1 = state_125785;
var statearr_125799_125815 = state_125785__$1;
(statearr_125799_125815[(2)] = null);

(statearr_125799_125815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125786 === (10))){
var inst_125765 = (state_125785[(2)]);
var inst_125752 = updates;
var state_125785__$1 = (function (){var statearr_125800 = state_125785;
(statearr_125800[(7)] = inst_125752);

(statearr_125800[(14)] = inst_125765);

return statearr_125800;
})();
var statearr_125801_125816 = state_125785__$1;
(statearr_125801_125816[(2)] = null);

(statearr_125801_125816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125786 === (8))){
var inst_125758 = (state_125785[(11)]);
var inst_125768 = cljs.core.async.chan.call(null);
var inst_125769 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125770 = [new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),inst_125768,inst_125758];
var inst_125771 = (new cljs.core.PersistentVector(null,3,(5),inst_125769,inst_125770,null));
var inst_125772 = ob.utils._GT_evt.call(null,inst_125771);
var state_125785__$1 = (function (){var statearr_125802 = state_125785;
(statearr_125802[(15)] = inst_125772);

return statearr_125802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_125785__$1,(11),inst_125768);
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
var statearr_125803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125803[(0)] = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__);

(statearr_125803[(1)] = (1));

return statearr_125803;
});
var ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1 = (function (state_125785){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_125785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e125804){if((e125804 instanceof Object)){
var ex__27893__auto__ = e125804;
var statearr_125805_125817 = state_125785;
(statearr_125805_125817[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_125785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125818 = state_125785;
state_125785 = G__125818;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__ = function(state_125785){
switch(arguments.length){
case 0:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1.call(this,state_125785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0;
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_125806 = f__27987__auto__.call(null);
(statearr_125806[(6)] = c__27986__auto__);

return statearr_125806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),ob.event_loop.run_event_loop_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"events->updates","events->updates",-977928869),(function (p__125819,p__125820){
var map__125821 = p__125819;
var map__125821__$1 = cljs.core.__destructure_map.call(null,map__125821);
var db = cljs.core.get.call(null,map__125821__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__125822 = p__125820;
var seq__125823 = cljs.core.seq.call(null,vec__125822);
var first__125824 = cljs.core.first.call(null,seq__125823);
var seq__125823__$1 = cljs.core.next.call(null,seq__125823);
var _ = first__125824;
var first__125824__$1 = cljs.core.first.call(null,seq__125823__$1);
var seq__125823__$2 = cljs.core.next.call(null,seq__125823__$1);
var tag = first__125824__$1;
var params = seq__125823__$2;
var events = ob.event_loop.events__GT_updates.call(null,tag,db,params);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),events], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),ob.event_loop.queue_db_updates_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),(function (p__125825,p__125826){
var map__125827 = p__125825;
var map__125827__$1 = cljs.core.__destructure_map.call(null,map__125827);
var db = cljs.core.get.call(null,map__125827__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__125828 = p__125826;
var _ = cljs.core.nth.call(null,vec__125828,(0),null);
var blocking_chan = cljs.core.nth.call(null,vec__125828,(1),null);
var update = cljs.core.nth.call(null,vec__125828,(2),null);
var map__125831 = ob.update_db.run_db_update.call(null,db,update);
var map__125831__$1 = cljs.core.__destructure_map.call(null,map__125831);
var db__$1 = cljs.core.get.call(null,map__125831__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time = cljs.core.get.call(null,map__125831__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,blocking_chan], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),(function (p__125832){
var vec__125833 = p__125832;
var time = cljs.core.nth.call(null,vec__125833,(0),null);
var blocking_channel = cljs.core.nth.call(null,vec__125833,(1),null);
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_125846){
var state_val_125847 = (state_125846[(1)]);
if((state_val_125847 === (1))){
var state_125846__$1 = state_125846;
if(cljs.core.truth_(time)){
var statearr_125848_125857 = state_125846__$1;
(statearr_125848_125857[(1)] = (3));

} else {
var statearr_125849_125858 = state_125846__$1;
(statearr_125849_125858[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125847 === (2))){
var inst_125843 = (state_125846[(2)]);
var inst_125844 = cljs.core.async.close_BANG_.call(null,blocking_channel);
var state_125846__$1 = (function (){var statearr_125850 = state_125846;
(statearr_125850[(7)] = inst_125843);

return statearr_125850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_125846__$1,inst_125844);
} else {
if((state_val_125847 === (3))){
var state_125846__$1 = state_125846;
var statearr_125851_125859 = state_125846__$1;
(statearr_125851_125859[(2)] = time);

(statearr_125851_125859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125847 === (4))){
var state_125846__$1 = state_125846;
var statearr_125852_125860 = state_125846__$1;
(statearr_125852_125860[(2)] = 0.02);

(statearr_125852_125860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125847 === (5))){
var inst_125839 = (state_125846[(2)]);
var inst_125840 = ((1000) * inst_125839);
var inst_125841 = cljs.core.async.timeout.call(null,inst_125840);
var state_125846__$1 = state_125846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_125846__$1,(2),inst_125841);
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
var statearr_125853 = [null,null,null,null,null,null,null,null];
(statearr_125853[(0)] = ob$event_loop$state_machine__27890__auto__);

(statearr_125853[(1)] = (1));

return statearr_125853;
});
var ob$event_loop$state_machine__27890__auto____1 = (function (state_125846){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_125846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e125854){if((e125854 instanceof Object)){
var ex__27893__auto__ = e125854;
var statearr_125855_125861 = state_125846;
(statearr_125855_125861[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_125846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125862 = state_125846;
state_125846 = G__125862;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$state_machine__27890__auto__ = function(state_125846){
switch(arguments.length){
case 0:
return ob$event_loop$state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$state_machine__27890__auto____1.call(this,state_125846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$state_machine__27890__auto____0;
ob$event_loop$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$state_machine__27890__auto____1;
return ob$event_loop$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_125856 = f__27987__auto__.call(null);
(statearr_125856[(6)] = c__27986__auto__);

return statearr_125856;
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
