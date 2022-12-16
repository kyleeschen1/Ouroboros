// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.event_loop');
goog.require('cljs.core');
goog.require('ob.db_nav');
goog.require('ob.update_db');
goog.require('ob.utils');
goog.require('com.rpl.specter');
goog.require('cljs.core.async');
goog.require('re_frame.core');
if((typeof ob !== 'undefined') && (typeof ob.event_loop !== 'undefined') && (typeof ob.event_loop.gen_frames !== 'undefined')){
} else {
ob.event_loop.gen_frames = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.event-loop","gen-frames"),new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
/**
 * Takes in:
 * - instr : a frame generation instruction
 * - db : the global DB
 * 
 *   Then calls gen-frames with an instruction map
 *   embellised with the following keys:
 * 
 *   - :dom -> display data
 *   - :versions -> versions of the display data, keyed by verson id
 *   - :curr-db-id -> current version id
 */
ob.event_loop.call_gen_frames = (function ob$event_loop$call_gen_frames(instr,db){
var dom = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.event_loop.pathcache191515;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191516 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.event-loop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.event_loop.pathcache191515 = info191516;

return info191516;
})():info__17750__auto__);
var precompiled191517 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191517.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled191517;
}
})(),db);
var vs = new cljs.core.Keyword(null,"db-versions","db-versions",1746119480).cljs$core$IFn$_invoke$arity$1(db);
var instr__$1 = cljs.core.assoc.call(null,instr,new cljs.core.Keyword(null,"dom","dom",-1236537922),dom,new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),vs,new cljs.core.Keyword(null,"curr-db-id","curr-db-id",2093043383),new cljs.core.Keyword("id","curr-db","id/curr-db",567946732).cljs$core$IFn$_invoke$arity$1(db));
var frames = ob.event_loop.gen_frames.call(null,instr__$1);
if(cljs.core.vector_QMARK_.call(null,frames)){
return frames;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frames], null);
}
});


ob.event_loop.events = cljs.core.async.chan.call(null);
/**
 * Puts an animation on the
 * event channel.
 */
ob.event_loop.animate_BANG_ = (function ob$event_loop$animate_BANG_(instr){
return cljs.core.async.put_BANG_.call(null,ob.event_loop.events,instr);
});
/**
 * Sets up an event for processing,
 * blocking until its completion.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__20925__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_191532){
var state_val_191533 = (state_191532[(1)]);
if((state_val_191533 === (1))){
var state_191532__$1 = state_191532;
var statearr_191534_191542 = state_191532__$1;
(statearr_191534_191542[(2)] = null);

(statearr_191534_191542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191533 === (2))){
var state_191532__$1 = state_191532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_191532__$1,(4),ob.event_loop.events);
} else {
if((state_val_191533 === (3))){
var inst_191530 = (state_191532[(2)]);
var state_191532__$1 = state_191532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_191532__$1,inst_191530);
} else {
if((state_val_191533 === (4))){
var inst_191520 = (state_191532[(2)]);
var inst_191521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_191522 = [new cljs.core.Keyword(null,"events->frames","events->frames",91948658)];
var inst_191523 = (new cljs.core.PersistentVector(null,1,(5),inst_191521,inst_191522,null));
var inst_191524 = cljs.core.conj.call(null,inst_191523,inst_191520);
var inst_191525 = ob.utils._GT_evt.call(null,inst_191524);
var state_191532__$1 = (function (){var statearr_191535 = state_191532;
(statearr_191535[(7)] = inst_191525);

return statearr_191535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_191532__$1,(5),ob.event_loop.block_event_loop);
} else {
if((state_val_191533 === (5))){
var inst_191527 = (state_191532[(2)]);
var state_191532__$1 = (function (){var statearr_191536 = state_191532;
(statearr_191536[(8)] = inst_191527);

return statearr_191536;
})();
var statearr_191537_191543 = state_191532__$1;
(statearr_191537_191543[(2)] = null);

(statearr_191537_191543[(1)] = (2));


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
var statearr_191538 = [null,null,null,null,null,null,null,null,null];
(statearr_191538[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__);

(statearr_191538[(1)] = (1));

return statearr_191538;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1 = (function (state_191532){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_191532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e191539){if((e191539 instanceof Object)){
var ex__20906__auto__ = e191539;
var statearr_191540_191544 = state_191532;
(statearr_191540_191544[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_191532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e191539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__191545 = state_191532;
state_191532 = G__191545;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__ = function(state_191532){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1.call(this,state_191532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_191541 = f__20926__auto__.call(null);
(statearr_191541[(6)] = c__20925__auto__);

return statearr_191541;
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
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_191589){
var state_val_191590 = (state_191589[(1)]);
if((state_val_191590 === (7))){
var inst_191567 = cljs.core.async.timeout.call(null,(100));
var state_191589__$1 = state_191589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_191589__$1,(10),inst_191567);
} else {
if((state_val_191590 === (1))){
var inst_191553 = cljs.core.seq.call(null,updates);
var inst_191554 = cljs.core.first.call(null,inst_191553);
var inst_191555 = cljs.core.next.call(null,inst_191553);
var inst_191556 = updates;
var state_191589__$1 = (function (){var statearr_191591 = state_191589;
(statearr_191591[(7)] = inst_191555);

(statearr_191591[(8)] = inst_191556);

(statearr_191591[(9)] = inst_191554);

return statearr_191591;
})();
var statearr_191592_191611 = state_191589__$1;
(statearr_191592_191611[(2)] = null);

(statearr_191592_191611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191590 === (4))){
var inst_191565 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_191589__$1 = state_191589;
if(cljs.core.truth_(inst_191565)){
var statearr_191593_191612 = state_191589__$1;
(statearr_191593_191612[(1)] = (7));

} else {
var statearr_191594_191613 = state_191589__$1;
(statearr_191594_191613[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191590 === (6))){
var inst_191584 = (state_191589[(2)]);
var inst_191585 = ob.event_loop.unblock_event_loop_BANG_.call(null);
var state_191589__$1 = (function (){var statearr_191595 = state_191589;
(statearr_191595[(10)] = inst_191584);

return statearr_191595;
})();
var statearr_191596_191614 = state_191589__$1;
(statearr_191596_191614[(2)] = inst_191585);

(statearr_191596_191614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191590 === (3))){
var inst_191587 = (state_191589[(2)]);
var state_191589__$1 = state_191589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_191589__$1,inst_191587);
} else {
if((state_val_191590 === (2))){
var inst_191562 = (state_191589[(11)]);
var inst_191556 = (state_191589[(8)]);
var inst_191561 = cljs.core.seq.call(null,inst_191556);
var inst_191562__$1 = cljs.core.first.call(null,inst_191561);
var inst_191563 = cljs.core.next.call(null,inst_191561);
var state_191589__$1 = (function (){var statearr_191597 = state_191589;
(statearr_191597[(11)] = inst_191562__$1);

(statearr_191597[(12)] = inst_191563);

return statearr_191597;
})();
if(cljs.core.truth_(inst_191562__$1)){
var statearr_191598_191615 = state_191589__$1;
(statearr_191598_191615[(1)] = (4));

} else {
var statearr_191599_191616 = state_191589__$1;
(statearr_191599_191616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191590 === (11))){
var inst_191563 = (state_191589[(12)]);
var inst_191578 = (state_191589[(2)]);
var inst_191556 = inst_191563;
var state_191589__$1 = (function (){var statearr_191600 = state_191589;
(statearr_191600[(8)] = inst_191556);

(statearr_191600[(13)] = inst_191578);

return statearr_191600;
})();
var statearr_191601_191617 = state_191589__$1;
(statearr_191601_191617[(2)] = null);

(statearr_191601_191617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191590 === (9))){
var inst_191581 = (state_191589[(2)]);
var state_191589__$1 = state_191589;
var statearr_191602_191618 = state_191589__$1;
(statearr_191602_191618[(2)] = inst_191581);

(statearr_191602_191618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191590 === (5))){
var state_191589__$1 = state_191589;
var statearr_191603_191619 = state_191589__$1;
(statearr_191603_191619[(2)] = null);

(statearr_191603_191619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191590 === (10))){
var inst_191569 = (state_191589[(2)]);
var inst_191556 = updates;
var state_191589__$1 = (function (){var statearr_191604 = state_191589;
(statearr_191604[(14)] = inst_191569);

(statearr_191604[(8)] = inst_191556);

return statearr_191604;
})();
var statearr_191605_191620 = state_191589__$1;
(statearr_191605_191620[(2)] = null);

(statearr_191605_191620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_191590 === (8))){
var inst_191562 = (state_191589[(11)]);
var inst_191572 = cljs.core.async.chan.call(null);
var inst_191573 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_191574 = [new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),inst_191572,inst_191562];
var inst_191575 = (new cljs.core.PersistentVector(null,3,(5),inst_191573,inst_191574,null));
var inst_191576 = ob.utils._GT_evt.call(null,inst_191575);
var state_191589__$1 = (function (){var statearr_191606 = state_191589;
(statearr_191606[(15)] = inst_191576);

return statearr_191606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_191589__$1,(11),inst_191572);
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
var statearr_191607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_191607[(0)] = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__);

(statearr_191607[(1)] = (1));

return statearr_191607;
});
var ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1 = (function (state_191589){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_191589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e191608){if((e191608 instanceof Object)){
var ex__20906__auto__ = e191608;
var statearr_191609_191621 = state_191589;
(statearr_191609_191621[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_191589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e191608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__191622 = state_191589;
state_191589 = G__191622;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__ = function(state_191589){
switch(arguments.length){
case 0:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1.call(this,state_191589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____0;
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1;
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_191610 = f__20926__auto__.call(null);
(statearr_191610[(6)] = c__20925__auto__);

return statearr_191610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20927__auto__);
}));

return c__20925__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),ob.event_loop.run_event_loop_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"events->frames","events->frames",91948658),(function (p__191623,p__191624){
var map__191625 = p__191623;
var map__191625__$1 = cljs.core.__destructure_map.call(null,map__191625);
var db = cljs.core.get.call(null,map__191625__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__191626 = p__191624;
var _ = cljs.core.nth.call(null,vec__191626,(0),null);
var instr = cljs.core.nth.call(null,vec__191626,(1),null);
var frames = ob.event_loop.call_gen_frames.call(null,instr,db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),frames], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),ob.event_loop.queue_db_updates_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),(function (p__191629,p__191630){
var map__191631 = p__191629;
var map__191631__$1 = cljs.core.__destructure_map.call(null,map__191631);
var db = cljs.core.get.call(null,map__191631__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__191632 = p__191630;
var _ = cljs.core.nth.call(null,vec__191632,(0),null);
var blocking_chan = cljs.core.nth.call(null,vec__191632,(1),null);
var update = cljs.core.nth.call(null,vec__191632,(2),null);
var map__191635 = ob.update_db.run_db_update.call(null,db,update);
var map__191635__$1 = cljs.core.__destructure_map.call(null,map__191635);
var db__$1 = cljs.core.get.call(null,map__191635__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time = cljs.core.get.call(null,map__191635__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,blocking_chan], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),(function (p__191636){
var vec__191637 = p__191636;
var time = cljs.core.nth.call(null,vec__191637,(0),null);
var blocking_channel = cljs.core.nth.call(null,vec__191637,(1),null);
var c__20925__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_191645){
var state_val_191646 = (state_191645[(1)]);
if((state_val_191646 === (1))){
var inst_191640 = cljs.core.async.timeout.call(null,time);
var state_191645__$1 = state_191645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_191645__$1,(2),inst_191640);
} else {
if((state_val_191646 === (2))){
var inst_191642 = (state_191645[(2)]);
var inst_191643 = cljs.core.async.close_BANG_.call(null,blocking_channel);
var state_191645__$1 = (function (){var statearr_191647 = state_191645;
(statearr_191647[(7)] = inst_191642);

return statearr_191647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_191645__$1,inst_191643);
} else {
return null;
}
}
});
return (function() {
var ob$event_loop$state_machine__20903__auto__ = null;
var ob$event_loop$state_machine__20903__auto____0 = (function (){
var statearr_191648 = [null,null,null,null,null,null,null,null];
(statearr_191648[(0)] = ob$event_loop$state_machine__20903__auto__);

(statearr_191648[(1)] = (1));

return statearr_191648;
});
var ob$event_loop$state_machine__20903__auto____1 = (function (state_191645){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_191645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e191649){if((e191649 instanceof Object)){
var ex__20906__auto__ = e191649;
var statearr_191650_191652 = state_191645;
(statearr_191650_191652[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_191645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e191649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__191653 = state_191645;
state_191645 = G__191653;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$state_machine__20903__auto__ = function(state_191645){
switch(arguments.length){
case 0:
return ob$event_loop$state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$state_machine__20903__auto____1.call(this,state_191645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$state_machine__20903__auto____0;
ob$event_loop$state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$state_machine__20903__auto____1;
return ob$event_loop$state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_191651 = f__20926__auto__.call(null);
(statearr_191651[(6)] = c__20925__auto__);

return statearr_191651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20927__auto__);
}));

return c__20925__auto__;
}));
ob.event_loop.paused_QMARK_ = cljs.core.atom.call(null,false);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"update-pause-state!","update-pause-state!",953544338),(function (p_QMARK_){
return cljs.core.reset_BANG_.call(null,ob.event_loop.paused_QMARK_,p_QMARK_);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"toggle-pause","toggle-pause",1648289919),(function (p__191654,_){
var map__191655 = p__191654;
var map__191655__$1 = cljs.core.__destructure_map.call(null,map__191655);
var db = cljs.core.get.call(null,map__191655__$1,new cljs.core.Keyword(null,"db","db",993250759));
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
