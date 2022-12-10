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
var len__4864__auto___112107 = arguments.length;
var i__4865__auto___112108 = (0);
while(true){
if((i__4865__auto___112108 < len__4864__auto___112107)){
args__4870__auto__.push((arguments[i__4865__auto___112108]));

var G__112109 = (i__4865__auto___112108 + (1));
i__4865__auto___112108 = G__112109;
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
(ob.event_loop.animate_BANG_.cljs$lang$applyTo = (function (seq112106){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq112106));
}));

/**
 * Sets up an event for processing,
 * blocking until its completion.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_112124){
var state_val_112125 = (state_112124[(1)]);
if((state_val_112125 === (1))){
var state_112124__$1 = state_112124;
var statearr_112126_112134 = state_112124__$1;
(statearr_112126_112134[(2)] = null);

(statearr_112126_112134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112125 === (2))){
var state_112124__$1 = state_112124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112124__$1,(4),ob.event_loop.events);
} else {
if((state_val_112125 === (3))){
var inst_112122 = (state_112124[(2)]);
var state_112124__$1 = state_112124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112124__$1,inst_112122);
} else {
if((state_val_112125 === (4))){
var inst_112112 = (state_112124[(2)]);
var inst_112113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_112114 = [new cljs.core.Keyword(null,"events->updates","events->updates",-977928869)];
var inst_112115 = (new cljs.core.PersistentVector(null,1,(5),inst_112113,inst_112114,null));
var inst_112116 = cljs.core.into.call(null,inst_112115,inst_112112);
var inst_112117 = ob.utils._GT_evt.call(null,inst_112116);
var state_112124__$1 = (function (){var statearr_112127 = state_112124;
(statearr_112127[(7)] = inst_112117);

return statearr_112127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112124__$1,(5),ob.event_loop.block_event_loop);
} else {
if((state_val_112125 === (5))){
var inst_112119 = (state_112124[(2)]);
var state_112124__$1 = (function (){var statearr_112128 = state_112124;
(statearr_112128[(8)] = inst_112119);

return statearr_112128;
})();
var statearr_112129_112135 = state_112124__$1;
(statearr_112129_112135[(2)] = null);

(statearr_112129_112135[(1)] = (2));


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
var statearr_112130 = [null,null,null,null,null,null,null,null,null];
(statearr_112130[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__);

(statearr_112130[(1)] = (1));

return statearr_112130;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1 = (function (state_112124){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_112124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e112131){if((e112131 instanceof Object)){
var ex__27893__auto__ = e112131;
var statearr_112132_112136 = state_112124;
(statearr_112132_112136[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112137 = state_112124;
state_112124 = G__112137;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = function(state_112124){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1.call(this,state_112124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_112133 = f__27987__auto__.call(null);
(statearr_112133[(6)] = c__27986__auto__);

return statearr_112133;
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
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_112181){
var state_val_112182 = (state_112181[(1)]);
if((state_val_112182 === (7))){
var inst_112159 = cljs.core.async.timeout.call(null,(100));
var state_112181__$1 = state_112181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112181__$1,(10),inst_112159);
} else {
if((state_val_112182 === (1))){
var inst_112145 = cljs.core.seq.call(null,updates);
var inst_112146 = cljs.core.first.call(null,inst_112145);
var inst_112147 = cljs.core.next.call(null,inst_112145);
var inst_112148 = updates;
var state_112181__$1 = (function (){var statearr_112183 = state_112181;
(statearr_112183[(7)] = inst_112146);

(statearr_112183[(8)] = inst_112147);

(statearr_112183[(9)] = inst_112148);

return statearr_112183;
})();
var statearr_112184_112203 = state_112181__$1;
(statearr_112184_112203[(2)] = null);

(statearr_112184_112203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112182 === (4))){
var inst_112157 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_112181__$1 = state_112181;
if(cljs.core.truth_(inst_112157)){
var statearr_112185_112204 = state_112181__$1;
(statearr_112185_112204[(1)] = (7));

} else {
var statearr_112186_112205 = state_112181__$1;
(statearr_112186_112205[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112182 === (6))){
var inst_112176 = (state_112181[(2)]);
var inst_112177 = ob.event_loop.unblock_event_loop_BANG_.call(null);
var state_112181__$1 = (function (){var statearr_112187 = state_112181;
(statearr_112187[(10)] = inst_112176);

return statearr_112187;
})();
var statearr_112188_112206 = state_112181__$1;
(statearr_112188_112206[(2)] = inst_112177);

(statearr_112188_112206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112182 === (3))){
var inst_112179 = (state_112181[(2)]);
var state_112181__$1 = state_112181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112181__$1,inst_112179);
} else {
if((state_val_112182 === (2))){
var inst_112154 = (state_112181[(11)]);
var inst_112148 = (state_112181[(9)]);
var inst_112153 = cljs.core.seq.call(null,inst_112148);
var inst_112154__$1 = cljs.core.first.call(null,inst_112153);
var inst_112155 = cljs.core.next.call(null,inst_112153);
var state_112181__$1 = (function (){var statearr_112189 = state_112181;
(statearr_112189[(12)] = inst_112155);

(statearr_112189[(11)] = inst_112154__$1);

return statearr_112189;
})();
if(cljs.core.truth_(inst_112154__$1)){
var statearr_112190_112207 = state_112181__$1;
(statearr_112190_112207[(1)] = (4));

} else {
var statearr_112191_112208 = state_112181__$1;
(statearr_112191_112208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112182 === (11))){
var inst_112155 = (state_112181[(12)]);
var inst_112170 = (state_112181[(2)]);
var inst_112148 = inst_112155;
var state_112181__$1 = (function (){var statearr_112192 = state_112181;
(statearr_112192[(13)] = inst_112170);

(statearr_112192[(9)] = inst_112148);

return statearr_112192;
})();
var statearr_112193_112209 = state_112181__$1;
(statearr_112193_112209[(2)] = null);

(statearr_112193_112209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112182 === (9))){
var inst_112173 = (state_112181[(2)]);
var state_112181__$1 = state_112181;
var statearr_112194_112210 = state_112181__$1;
(statearr_112194_112210[(2)] = inst_112173);

(statearr_112194_112210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112182 === (5))){
var state_112181__$1 = state_112181;
var statearr_112195_112211 = state_112181__$1;
(statearr_112195_112211[(2)] = null);

(statearr_112195_112211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112182 === (10))){
var inst_112161 = (state_112181[(2)]);
var inst_112148 = updates;
var state_112181__$1 = (function (){var statearr_112196 = state_112181;
(statearr_112196[(9)] = inst_112148);

(statearr_112196[(14)] = inst_112161);

return statearr_112196;
})();
var statearr_112197_112212 = state_112181__$1;
(statearr_112197_112212[(2)] = null);

(statearr_112197_112212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112182 === (8))){
var inst_112154 = (state_112181[(11)]);
var inst_112164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_112165 = [new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),inst_112154];
var inst_112166 = (new cljs.core.PersistentVector(null,2,(5),inst_112164,inst_112165,null));
var inst_112167 = ob.utils._GT_evt.call(null,inst_112166);
var inst_112168 = ob.event_loop.block.call(null,inst_112154);
var state_112181__$1 = (function (){var statearr_112198 = state_112181;
(statearr_112198[(15)] = inst_112167);

return statearr_112198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112181__$1,(11),inst_112168);
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
var statearr_112199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112199[(0)] = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__);

(statearr_112199[(1)] = (1));

return statearr_112199;
});
var ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1 = (function (state_112181){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_112181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e112200){if((e112200 instanceof Object)){
var ex__27893__auto__ = e112200;
var statearr_112201_112213 = state_112181;
(statearr_112201_112213[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112214 = state_112181;
state_112181 = G__112214;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__ = function(state_112181){
switch(arguments.length){
case 0:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1.call(this,state_112181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____0;
ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$queue_db_updates_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_112202 = f__27987__auto__.call(null);
(statearr_112202[(6)] = c__27986__auto__);

return statearr_112202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
ob.event_loop.block_db_update_queue = cljs.core.async.chan.call(null);
ob.event_loop.unblock_db_update_queue = (function ob$event_loop$unblock_db_update_queue(){
return null;
});
ob.event_loop.block = (function ob$event_loop$block(p__112215){
var map__112216 = p__112215;
var map__112216__$1 = cljs.core.__destructure_map.call(null,map__112216);
var time = cljs.core.get.call(null,map__112216__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return cljs.core.async.timeout.call(null,(function (){var or__4253__auto__ = time;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1000);
}
})());
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),ob.event_loop.run_event_loop_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"events->updates","events->updates",-977928869),(function (p__112217,p__112218){
var map__112219 = p__112217;
var map__112219__$1 = cljs.core.__destructure_map.call(null,map__112219);
var db = cljs.core.get.call(null,map__112219__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__112220 = p__112218;
var seq__112221 = cljs.core.seq.call(null,vec__112220);
var first__112222 = cljs.core.first.call(null,seq__112221);
var seq__112221__$1 = cljs.core.next.call(null,seq__112221);
var _ = first__112222;
var first__112222__$1 = cljs.core.first.call(null,seq__112221__$1);
var seq__112221__$2 = cljs.core.next.call(null,seq__112221__$1);
var tag = first__112222__$1;
var params = seq__112221__$2;
var events = ob.event_loop.events__GT_updates.call(null,tag,db,params);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),events], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),ob.event_loop.queue_db_updates_BANG_);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),ob.update_db.run_db_update);
ob.event_loop.paused_QMARK_ = cljs.core.atom.call(null,false);
ob.event_loop.pause_BANG_ = (function ob$event_loop$pause_BANG_(){
return cljs.core.swap_BANG_.call(null,ob.event_loop.paused_QMARK_,cljs.core.not);
});

//# sourceMappingURL=event_loop.js.map
