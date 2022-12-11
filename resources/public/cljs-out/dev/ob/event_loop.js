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
var len__4864__auto___200687 = arguments.length;
var i__4865__auto___200688 = (0);
while(true){
if((i__4865__auto___200688 < len__4864__auto___200687)){
args__4870__auto__.push((arguments[i__4865__auto___200688]));

var G__200689 = (i__4865__auto___200688 + (1));
i__4865__auto___200688 = G__200689;
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
(ob.event_loop.animate_BANG_.cljs$lang$applyTo = (function (seq200686){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq200686));
}));

/**
 * Sets up an event for processing,
 * blocking until its completion.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_200704){
var state_val_200705 = (state_200704[(1)]);
if((state_val_200705 === (1))){
var state_200704__$1 = state_200704;
var statearr_200706_200714 = state_200704__$1;
(statearr_200706_200714[(2)] = null);

(statearr_200706_200714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200705 === (2))){
var state_200704__$1 = state_200704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_200704__$1,(4),ob.event_loop.events);
} else {
if((state_val_200705 === (3))){
var inst_200702 = (state_200704[(2)]);
var state_200704__$1 = state_200704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_200704__$1,inst_200702);
} else {
if((state_val_200705 === (4))){
var inst_200692 = (state_200704[(2)]);
var inst_200693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_200694 = [new cljs.core.Keyword(null,"events->updates","events->updates",-977928869)];
var inst_200695 = (new cljs.core.PersistentVector(null,1,(5),inst_200693,inst_200694,null));
var inst_200696 = cljs.core.into.call(null,inst_200695,inst_200692);
var inst_200697 = ob.utils._GT_evt.call(null,inst_200696);
var state_200704__$1 = (function (){var statearr_200707 = state_200704;
(statearr_200707[(7)] = inst_200697);

return statearr_200707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_200704__$1,(5),ob.event_loop.block_event_loop);
} else {
if((state_val_200705 === (5))){
var inst_200699 = (state_200704[(2)]);
var state_200704__$1 = (function (){var statearr_200708 = state_200704;
(statearr_200708[(8)] = inst_200699);

return statearr_200708;
})();
var statearr_200709_200715 = state_200704__$1;
(statearr_200709_200715[(2)] = null);

(statearr_200709_200715[(1)] = (2));


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
var statearr_200710 = [null,null,null,null,null,null,null,null,null];
(statearr_200710[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__);

(statearr_200710[(1)] = (1));

return statearr_200710;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1 = (function (state_200704){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_200704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e200711){if((e200711 instanceof Object)){
var ex__27893__auto__ = e200711;
var statearr_200712_200716 = state_200704;
(statearr_200712_200716[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_200704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e200711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__200717 = state_200704;
state_200704 = G__200717;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = function(state_200704){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1.call(this,state_200704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_200713 = f__27987__auto__.call(null);
(statearr_200713[(6)] = c__27986__auto__);

return statearr_200713;
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
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_200761){
var state_val_200762 = (state_200761[(1)]);
if((state_val_200762 === (7))){
var inst_200739 = cljs.core.async.timeout.call(null,(100));
var state_200761__$1 = state_200761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_200761__$1,(10),inst_200739);
} else {
if((state_val_200762 === (1))){
var inst_200725 = cljs.core.seq.call(null,updates);
var inst_200726 = cljs.core.first.call(null,inst_200725);
var inst_200727 = cljs.core.next.call(null,inst_200725);
var inst_200728 = updates;
var state_200761__$1 = (function (){var statearr_200763 = state_200761;
(statearr_200763[(7)] = inst_200727);

(statearr_200763[(8)] = inst_200728);

(statearr_200763[(9)] = inst_200726);

return statearr_200763;
})();
var statearr_200764_200783 = state_200761__$1;
(statearr_200764_200783[(2)] = null);

(statearr_200764_200783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200762 === (4))){
var inst_200737 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_200761__$1 = state_200761;
if(cljs.core.truth_(inst_200737)){
var statearr_200765_200784 = state_200761__$1;
(statearr_200765_200784[(1)] = (7));

} else {
var statearr_200766_200785 = state_200761__$1;
(statearr_200766_200785[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200762 === (6))){
var inst_200756 = (state_200761[(2)]);
var inst_200757 = ob.event_loop.unblock_event_loop_BANG_.call(null);
var state_200761__$1 = (function (){var statearr_200767 = state_200761;
(statearr_200767[(10)] = inst_200756);

return statearr_200767;
})();
var statearr_200768_200786 = state_200761__$1;
(statearr_200768_200786[(2)] = inst_200757);

(statearr_200768_200786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200762 === (3))){
var inst_200759 = (state_200761[(2)]);
var state_200761__$1 = state_200761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_200761__$1,inst_200759);
} else {
if((state_val_200762 === (2))){
var inst_200728 = (state_200761[(8)]);
var inst_200734 = (state_200761[(11)]);
var inst_200733 = cljs.core.seq.call(null,inst_200728);
var inst_200734__$1 = cljs.core.first.call(null,inst_200733);
var inst_200735 = cljs.core.next.call(null,inst_200733);
var state_200761__$1 = (function (){var statearr_200769 = state_200761;
(statearr_200769[(12)] = inst_200735);

(statearr_200769[(11)] = inst_200734__$1);

return statearr_200769;
})();
if(cljs.core.truth_(inst_200734__$1)){
var statearr_200770_200787 = state_200761__$1;
(statearr_200770_200787[(1)] = (4));

} else {
var statearr_200771_200788 = state_200761__$1;
(statearr_200771_200788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200762 === (11))){
var inst_200735 = (state_200761[(12)]);
var inst_200750 = (state_200761[(2)]);
var inst_200728 = inst_200735;
var state_200761__$1 = (function (){var statearr_200772 = state_200761;
(statearr_200772[(13)] = inst_200750);

(statearr_200772[(8)] = inst_200728);

return statearr_200772;
})();
var statearr_200773_200789 = state_200761__$1;
(statearr_200773_200789[(2)] = null);

(statearr_200773_200789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200762 === (9))){
var inst_200753 = (state_200761[(2)]);
var state_200761__$1 = state_200761;
var statearr_200774_200790 = state_200761__$1;
(statearr_200774_200790[(2)] = inst_200753);

(statearr_200774_200790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200762 === (5))){
var state_200761__$1 = state_200761;
var statearr_200775_200791 = state_200761__$1;
(statearr_200775_200791[(2)] = null);

(statearr_200775_200791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200762 === (10))){
var inst_200741 = (state_200761[(2)]);
var inst_200728 = updates;
var state_200761__$1 = (function (){var statearr_200776 = state_200761;
(statearr_200776[(14)] = inst_200741);

(statearr_200776[(8)] = inst_200728);

return statearr_200776;
})();
var statearr_200777_200792 = state_200761__$1;
(statearr_200777_200792[(2)] = null);

(statearr_200777_200792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200762 === (8))){
var inst_200734 = (state_200761[(11)]);
var inst_200744 = cljs.core.async.chan.call(null);
var inst_200745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_200746 = [new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),inst_200744,inst_200734];
var inst_200747 = (new cljs.core.PersistentVector(null,3,(5),inst_200745,inst_200746,null));
var inst_200748 = ob.utils._GT_evt.call(null,inst_200747);
var state_200761__$1 = (function (){var statearr_200778 = state_200761;
(statearr_200778[(15)] = inst_200748);

return statearr_200778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_200761__$1,(11),inst_200744);
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
var statearr_200779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_200779[(0)] = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__);

(statearr_200779[(1)] = (1));

return statearr_200779;
});
var ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1 = (function (state_200761){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_200761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e200780){if((e200780 instanceof Object)){
var ex__27893__auto__ = e200780;
var statearr_200781_200793 = state_200761;
(statearr_200781_200793[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_200761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e200780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__200794 = state_200761;
state_200761 = G__200794;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__ = function(state_200761){
switch(arguments.length){
case 0:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1.call(this,state_200761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0;
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_200782 = f__27987__auto__.call(null);
(statearr_200782[(6)] = c__27986__auto__);

return statearr_200782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),ob.event_loop.run_event_loop_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"events->updates","events->updates",-977928869),(function (p__200795,p__200796){
var map__200797 = p__200795;
var map__200797__$1 = cljs.core.__destructure_map.call(null,map__200797);
var db = cljs.core.get.call(null,map__200797__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__200798 = p__200796;
var seq__200799 = cljs.core.seq.call(null,vec__200798);
var first__200800 = cljs.core.first.call(null,seq__200799);
var seq__200799__$1 = cljs.core.next.call(null,seq__200799);
var _ = first__200800;
var first__200800__$1 = cljs.core.first.call(null,seq__200799__$1);
var seq__200799__$2 = cljs.core.next.call(null,seq__200799__$1);
var tag = first__200800__$1;
var params = seq__200799__$2;
var display = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.event_loop.pathcache200801;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info200802 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",13,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.event-loop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.event_loop.pathcache200801 = info200802;

return info200802;
})():info__17671__auto__);
var precompiled200803 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled200803.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled200803;
}
})(),db);
var events = ob.event_loop.events__GT_updates.call(null,tag,display,params);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),events], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),ob.event_loop.queue_db_updates_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),(function (p__200804,p__200805){
var map__200806 = p__200804;
var map__200806__$1 = cljs.core.__destructure_map.call(null,map__200806);
var db = cljs.core.get.call(null,map__200806__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__200807 = p__200805;
var _ = cljs.core.nth.call(null,vec__200807,(0),null);
var blocking_chan = cljs.core.nth.call(null,vec__200807,(1),null);
var update = cljs.core.nth.call(null,vec__200807,(2),null);
var map__200810 = ob.update_db.run_db_update.call(null,db,update);
var map__200810__$1 = cljs.core.__destructure_map.call(null,map__200810);
var db__$1 = cljs.core.get.call(null,map__200810__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time = cljs.core.get.call(null,map__200810__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,blocking_chan], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),(function (p__200811){
var vec__200812 = p__200811;
var time = cljs.core.nth.call(null,vec__200812,(0),null);
var blocking_channel = cljs.core.nth.call(null,vec__200812,(1),null);
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_200824){
var state_val_200825 = (state_200824[(1)]);
if((state_val_200825 === (1))){
var state_200824__$1 = state_200824;
if(cljs.core.truth_(time)){
var statearr_200826_200835 = state_200824__$1;
(statearr_200826_200835[(1)] = (3));

} else {
var statearr_200827_200836 = state_200824__$1;
(statearr_200827_200836[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200825 === (2))){
var inst_200821 = (state_200824[(2)]);
var inst_200822 = cljs.core.async.close_BANG_.call(null,blocking_channel);
var state_200824__$1 = (function (){var statearr_200828 = state_200824;
(statearr_200828[(7)] = inst_200821);

return statearr_200828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_200824__$1,inst_200822);
} else {
if((state_val_200825 === (3))){
var state_200824__$1 = state_200824;
var statearr_200829_200837 = state_200824__$1;
(statearr_200829_200837[(2)] = time);

(statearr_200829_200837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200825 === (4))){
var state_200824__$1 = state_200824;
var statearr_200830_200838 = state_200824__$1;
(statearr_200830_200838[(2)] = (20));

(statearr_200830_200838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_200825 === (5))){
var inst_200818 = (state_200824[(2)]);
var inst_200819 = cljs.core.async.timeout.call(null,inst_200818);
var state_200824__$1 = state_200824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_200824__$1,(2),inst_200819);
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
var statearr_200831 = [null,null,null,null,null,null,null,null];
(statearr_200831[(0)] = ob$event_loop$state_machine__27890__auto__);

(statearr_200831[(1)] = (1));

return statearr_200831;
});
var ob$event_loop$state_machine__27890__auto____1 = (function (state_200824){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_200824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e200832){if((e200832 instanceof Object)){
var ex__27893__auto__ = e200832;
var statearr_200833_200839 = state_200824;
(statearr_200833_200839[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_200824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e200832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__200840 = state_200824;
state_200824 = G__200840;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$state_machine__27890__auto__ = function(state_200824){
switch(arguments.length){
case 0:
return ob$event_loop$state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$state_machine__27890__auto____1.call(this,state_200824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$state_machine__27890__auto____0;
ob$event_loop$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$state_machine__27890__auto____1;
return ob$event_loop$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_200834 = f__27987__auto__.call(null);
(statearr_200834[(6)] = c__27986__auto__);

return statearr_200834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
}));
ob.event_loop.paused_QMARK_ = cljs.core.atom.call(null,false);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"update-pause-state!","update-pause-state!",953544338),(function (p_QMARK_){
return cljs.core.reset_BANG_.call(null,ob.event_loop.paused_QMARK_,p_QMARK_);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"toggle-pause","toggle-pause",1648289919),(function (p__200841,_){
var map__200842 = p__200841;
var map__200842__$1 = cljs.core.__destructure_map.call(null,map__200842);
var db = cljs.core.get.call(null,map__200842__$1,new cljs.core.Keyword(null,"db","db",993250759));
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
