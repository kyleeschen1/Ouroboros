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
var len__4864__auto___150658 = arguments.length;
var i__4865__auto___150659 = (0);
while(true){
if((i__4865__auto___150659 < len__4864__auto___150658)){
args__4870__auto__.push((arguments[i__4865__auto___150659]));

var G__150660 = (i__4865__auto___150659 + (1));
i__4865__auto___150659 = G__150660;
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
(ob.event_loop.animate_BANG_.cljs$lang$applyTo = (function (seq150657){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150657));
}));

/**
 * Sets up an event for processing,
 * blocking until its completion.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_150675){
var state_val_150676 = (state_150675[(1)]);
if((state_val_150676 === (1))){
var state_150675__$1 = state_150675;
var statearr_150677_150685 = state_150675__$1;
(statearr_150677_150685[(2)] = null);

(statearr_150677_150685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150676 === (2))){
var state_150675__$1 = state_150675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150675__$1,(4),ob.event_loop.events);
} else {
if((state_val_150676 === (3))){
var inst_150673 = (state_150675[(2)]);
var state_150675__$1 = state_150675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150675__$1,inst_150673);
} else {
if((state_val_150676 === (4))){
var inst_150663 = (state_150675[(2)]);
var inst_150664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_150665 = [new cljs.core.Keyword(null,"events->updates","events->updates",-977928869)];
var inst_150666 = (new cljs.core.PersistentVector(null,1,(5),inst_150664,inst_150665,null));
var inst_150667 = cljs.core.into.call(null,inst_150666,inst_150663);
var inst_150668 = ob.utils._GT_evt.call(null,inst_150667);
var state_150675__$1 = (function (){var statearr_150678 = state_150675;
(statearr_150678[(7)] = inst_150668);

return statearr_150678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150675__$1,(5),ob.event_loop.block_event_loop);
} else {
if((state_val_150676 === (5))){
var inst_150670 = (state_150675[(2)]);
var state_150675__$1 = (function (){var statearr_150679 = state_150675;
(statearr_150679[(8)] = inst_150670);

return statearr_150679;
})();
var statearr_150680_150686 = state_150675__$1;
(statearr_150680_150686[(2)] = null);

(statearr_150680_150686[(1)] = (2));


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
var statearr_150681 = [null,null,null,null,null,null,null,null,null];
(statearr_150681[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__);

(statearr_150681[(1)] = (1));

return statearr_150681;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1 = (function (state_150675){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_150675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e150682){if((e150682 instanceof Object)){
var ex__27893__auto__ = e150682;
var statearr_150683_150687 = state_150675;
(statearr_150683_150687[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150688 = state_150675;
state_150675 = G__150688;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = function(state_150675){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1.call(this,state_150675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_150684 = f__27987__auto__.call(null);
(statearr_150684[(6)] = c__27986__auto__);

return statearr_150684;
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
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_150732){
var state_val_150733 = (state_150732[(1)]);
if((state_val_150733 === (7))){
var inst_150710 = cljs.core.async.timeout.call(null,(100));
var state_150732__$1 = state_150732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150732__$1,(10),inst_150710);
} else {
if((state_val_150733 === (1))){
var inst_150696 = cljs.core.seq.call(null,updates);
var inst_150697 = cljs.core.first.call(null,inst_150696);
var inst_150698 = cljs.core.next.call(null,inst_150696);
var inst_150699 = updates;
var state_150732__$1 = (function (){var statearr_150734 = state_150732;
(statearr_150734[(7)] = inst_150697);

(statearr_150734[(8)] = inst_150698);

(statearr_150734[(9)] = inst_150699);

return statearr_150734;
})();
var statearr_150735_150754 = state_150732__$1;
(statearr_150735_150754[(2)] = null);

(statearr_150735_150754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150733 === (4))){
var inst_150708 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_150732__$1 = state_150732;
if(cljs.core.truth_(inst_150708)){
var statearr_150736_150755 = state_150732__$1;
(statearr_150736_150755[(1)] = (7));

} else {
var statearr_150737_150756 = state_150732__$1;
(statearr_150737_150756[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150733 === (6))){
var inst_150727 = (state_150732[(2)]);
var inst_150728 = ob.event_loop.unblock_event_loop_BANG_.call(null);
var state_150732__$1 = (function (){var statearr_150738 = state_150732;
(statearr_150738[(10)] = inst_150727);

return statearr_150738;
})();
var statearr_150739_150757 = state_150732__$1;
(statearr_150739_150757[(2)] = inst_150728);

(statearr_150739_150757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150733 === (3))){
var inst_150730 = (state_150732[(2)]);
var state_150732__$1 = state_150732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150732__$1,inst_150730);
} else {
if((state_val_150733 === (2))){
var inst_150705 = (state_150732[(11)]);
var inst_150699 = (state_150732[(9)]);
var inst_150704 = cljs.core.seq.call(null,inst_150699);
var inst_150705__$1 = cljs.core.first.call(null,inst_150704);
var inst_150706 = cljs.core.next.call(null,inst_150704);
var state_150732__$1 = (function (){var statearr_150740 = state_150732;
(statearr_150740[(12)] = inst_150706);

(statearr_150740[(11)] = inst_150705__$1);

return statearr_150740;
})();
if(cljs.core.truth_(inst_150705__$1)){
var statearr_150741_150758 = state_150732__$1;
(statearr_150741_150758[(1)] = (4));

} else {
var statearr_150742_150759 = state_150732__$1;
(statearr_150742_150759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150733 === (11))){
var inst_150706 = (state_150732[(12)]);
var inst_150721 = (state_150732[(2)]);
var inst_150699 = inst_150706;
var state_150732__$1 = (function (){var statearr_150743 = state_150732;
(statearr_150743[(9)] = inst_150699);

(statearr_150743[(13)] = inst_150721);

return statearr_150743;
})();
var statearr_150744_150760 = state_150732__$1;
(statearr_150744_150760[(2)] = null);

(statearr_150744_150760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150733 === (9))){
var inst_150724 = (state_150732[(2)]);
var state_150732__$1 = state_150732;
var statearr_150745_150761 = state_150732__$1;
(statearr_150745_150761[(2)] = inst_150724);

(statearr_150745_150761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150733 === (5))){
var state_150732__$1 = state_150732;
var statearr_150746_150762 = state_150732__$1;
(statearr_150746_150762[(2)] = null);

(statearr_150746_150762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150733 === (10))){
var inst_150712 = (state_150732[(2)]);
var inst_150699 = updates;
var state_150732__$1 = (function (){var statearr_150747 = state_150732;
(statearr_150747[(9)] = inst_150699);

(statearr_150747[(14)] = inst_150712);

return statearr_150747;
})();
var statearr_150748_150763 = state_150732__$1;
(statearr_150748_150763[(2)] = null);

(statearr_150748_150763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150733 === (8))){
var inst_150705 = (state_150732[(11)]);
var inst_150715 = cljs.core.async.chan.call(null);
var inst_150716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_150717 = [new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),inst_150715,inst_150705];
var inst_150718 = (new cljs.core.PersistentVector(null,3,(5),inst_150716,inst_150717,null));
var inst_150719 = ob.utils._GT_evt.call(null,inst_150718);
var state_150732__$1 = (function (){var statearr_150749 = state_150732;
(statearr_150749[(15)] = inst_150719);

return statearr_150749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150732__$1,(11),inst_150715);
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
var statearr_150750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150750[(0)] = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__);

(statearr_150750[(1)] = (1));

return statearr_150750;
});
var ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1 = (function (state_150732){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_150732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e150751){if((e150751 instanceof Object)){
var ex__27893__auto__ = e150751;
var statearr_150752_150764 = state_150732;
(statearr_150752_150764[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150765 = state_150732;
state_150732 = G__150765;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__ = function(state_150732){
switch(arguments.length){
case 0:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1.call(this,state_150732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0;
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_150753 = f__27987__auto__.call(null);
(statearr_150753[(6)] = c__27986__auto__);

return statearr_150753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),ob.event_loop.run_event_loop_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"events->updates","events->updates",-977928869),(function (p__150766,p__150767){
var map__150768 = p__150766;
var map__150768__$1 = cljs.core.__destructure_map.call(null,map__150768);
var db = cljs.core.get.call(null,map__150768__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__150769 = p__150767;
var seq__150770 = cljs.core.seq.call(null,vec__150769);
var first__150771 = cljs.core.first.call(null,seq__150770);
var seq__150770__$1 = cljs.core.next.call(null,seq__150770);
var _ = first__150771;
var first__150771__$1 = cljs.core.first.call(null,seq__150770__$1);
var seq__150770__$2 = cljs.core.next.call(null,seq__150770__$1);
var tag = first__150771__$1;
var params = seq__150770__$2;
var display = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.event_loop.pathcache150772;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150773 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"src/ob/db_nav.cljs",13,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.event-loop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.event_loop.pathcache150772 = info150773;

return info150773;
})():info__17671__auto__);
var precompiled150774 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150774.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled150774;
}
})(),db);
var events = ob.event_loop.events__GT_updates.call(null,tag,display,params);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),events], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),ob.event_loop.queue_db_updates_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),(function (p__150775,p__150776){
var map__150777 = p__150775;
var map__150777__$1 = cljs.core.__destructure_map.call(null,map__150777);
var db = cljs.core.get.call(null,map__150777__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__150778 = p__150776;
var _ = cljs.core.nth.call(null,vec__150778,(0),null);
var blocking_chan = cljs.core.nth.call(null,vec__150778,(1),null);
var update = cljs.core.nth.call(null,vec__150778,(2),null);
var map__150781 = ob.update_db.run_db_update.call(null,db,update);
var map__150781__$1 = cljs.core.__destructure_map.call(null,map__150781);
var db__$1 = cljs.core.get.call(null,map__150781__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time = cljs.core.get.call(null,map__150781__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,blocking_chan], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),(function (p__150782){
var vec__150783 = p__150782;
var time = cljs.core.nth.call(null,vec__150783,(0),null);
var blocking_channel = cljs.core.nth.call(null,vec__150783,(1),null);
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_150795){
var state_val_150796 = (state_150795[(1)]);
if((state_val_150796 === (1))){
var state_150795__$1 = state_150795;
if(cljs.core.truth_(time)){
var statearr_150797_150806 = state_150795__$1;
(statearr_150797_150806[(1)] = (3));

} else {
var statearr_150798_150807 = state_150795__$1;
(statearr_150798_150807[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150796 === (2))){
var inst_150792 = (state_150795[(2)]);
var inst_150793 = cljs.core.async.close_BANG_.call(null,blocking_channel);
var state_150795__$1 = (function (){var statearr_150799 = state_150795;
(statearr_150799[(7)] = inst_150792);

return statearr_150799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150795__$1,inst_150793);
} else {
if((state_val_150796 === (3))){
var state_150795__$1 = state_150795;
var statearr_150800_150808 = state_150795__$1;
(statearr_150800_150808[(2)] = time);

(statearr_150800_150808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150796 === (4))){
var state_150795__$1 = state_150795;
var statearr_150801_150809 = state_150795__$1;
(statearr_150801_150809[(2)] = (20));

(statearr_150801_150809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150796 === (5))){
var inst_150789 = (state_150795[(2)]);
var inst_150790 = cljs.core.async.timeout.call(null,inst_150789);
var state_150795__$1 = state_150795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150795__$1,(2),inst_150790);
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
var statearr_150802 = [null,null,null,null,null,null,null,null];
(statearr_150802[(0)] = ob$event_loop$state_machine__27890__auto__);

(statearr_150802[(1)] = (1));

return statearr_150802;
});
var ob$event_loop$state_machine__27890__auto____1 = (function (state_150795){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_150795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e150803){if((e150803 instanceof Object)){
var ex__27893__auto__ = e150803;
var statearr_150804_150810 = state_150795;
(statearr_150804_150810[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150811 = state_150795;
state_150795 = G__150811;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$state_machine__27890__auto__ = function(state_150795){
switch(arguments.length){
case 0:
return ob$event_loop$state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$state_machine__27890__auto____1.call(this,state_150795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$state_machine__27890__auto____0;
ob$event_loop$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$state_machine__27890__auto____1;
return ob$event_loop$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_150805 = f__27987__auto__.call(null);
(statearr_150805[(6)] = c__27986__auto__);

return statearr_150805;
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
