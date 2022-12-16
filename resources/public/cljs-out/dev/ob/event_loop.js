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
 *   - :versions -> versions of the display data
 */
ob.event_loop.call_gen_frames = (function ob$event_loop$call_gen_frames(instr,db){
var dom = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.event_loop.pathcache168190;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info168191 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.event-loop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.event_loop.pathcache168190 = info168191;

return info168191;
})():info__17750__auto__);
var precompiled168192 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled168192.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled168192;
}
})(),db);
var vs = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.event_loop.pathcache168193;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info168194 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"versions","versions",536521978)], null)], null),"ob.event-loop",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"versions","versions",536521978)], null)], null));
ob.event_loop.pathcache168193 = info168194;

return info168194;
})():info__17750__auto__);
var precompiled168195 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled168195.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"versions","versions",536521978)], null)], null));
} else {
return precompiled168195;
}
})(),db);
var instr__$1 = cljs.core.assoc.call(null,instr,new cljs.core.Keyword(null,"dom","dom",-1236537922),dom,new cljs.core.Keyword(null,"versions","versions",536521978),vs);
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
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_168210){
var state_val_168211 = (state_168210[(1)]);
if((state_val_168211 === (1))){
var state_168210__$1 = state_168210;
var statearr_168212_168220 = state_168210__$1;
(statearr_168212_168220[(2)] = null);

(statearr_168212_168220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168211 === (2))){
var state_168210__$1 = state_168210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168210__$1,(4),ob.event_loop.events);
} else {
if((state_val_168211 === (3))){
var inst_168208 = (state_168210[(2)]);
var state_168210__$1 = state_168210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168210__$1,inst_168208);
} else {
if((state_val_168211 === (4))){
var inst_168198 = (state_168210[(2)]);
var inst_168199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_168200 = [new cljs.core.Keyword(null,"events->frames","events->frames",91948658)];
var inst_168201 = (new cljs.core.PersistentVector(null,1,(5),inst_168199,inst_168200,null));
var inst_168202 = cljs.core.conj.call(null,inst_168201,inst_168198);
var inst_168203 = ob.utils._GT_evt.call(null,inst_168202);
var state_168210__$1 = (function (){var statearr_168213 = state_168210;
(statearr_168213[(7)] = inst_168203);

return statearr_168213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168210__$1,(5),ob.event_loop.block_event_loop);
} else {
if((state_val_168211 === (5))){
var inst_168205 = (state_168210[(2)]);
var state_168210__$1 = (function (){var statearr_168214 = state_168210;
(statearr_168214[(8)] = inst_168205);

return statearr_168214;
})();
var statearr_168215_168221 = state_168210__$1;
(statearr_168215_168221[(2)] = null);

(statearr_168215_168221[(1)] = (2));


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
var statearr_168216 = [null,null,null,null,null,null,null,null,null];
(statearr_168216[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__);

(statearr_168216[(1)] = (1));

return statearr_168216;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1 = (function (state_168210){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_168210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e168217){if((e168217 instanceof Object)){
var ex__20906__auto__ = e168217;
var statearr_168218_168222 = state_168210;
(statearr_168218_168222[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e168217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__168223 = state_168210;
state_168210 = G__168223;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__ = function(state_168210){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1.call(this,state_168210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_168219 = f__20926__auto__.call(null);
(statearr_168219[(6)] = c__20925__auto__);

return statearr_168219;
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
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_168267){
var state_val_168268 = (state_168267[(1)]);
if((state_val_168268 === (7))){
var inst_168245 = cljs.core.async.timeout.call(null,(100));
var state_168267__$1 = state_168267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168267__$1,(10),inst_168245);
} else {
if((state_val_168268 === (1))){
var inst_168231 = cljs.core.seq.call(null,updates);
var inst_168232 = cljs.core.first.call(null,inst_168231);
var inst_168233 = cljs.core.next.call(null,inst_168231);
var inst_168234 = updates;
var state_168267__$1 = (function (){var statearr_168269 = state_168267;
(statearr_168269[(7)] = inst_168232);

(statearr_168269[(8)] = inst_168234);

(statearr_168269[(9)] = inst_168233);

return statearr_168269;
})();
var statearr_168270_168289 = state_168267__$1;
(statearr_168270_168289[(2)] = null);

(statearr_168270_168289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168268 === (4))){
var inst_168243 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_168267__$1 = state_168267;
if(cljs.core.truth_(inst_168243)){
var statearr_168271_168290 = state_168267__$1;
(statearr_168271_168290[(1)] = (7));

} else {
var statearr_168272_168291 = state_168267__$1;
(statearr_168272_168291[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168268 === (6))){
var inst_168262 = (state_168267[(2)]);
var inst_168263 = ob.event_loop.unblock_event_loop_BANG_.call(null);
var state_168267__$1 = (function (){var statearr_168273 = state_168267;
(statearr_168273[(10)] = inst_168262);

return statearr_168273;
})();
var statearr_168274_168292 = state_168267__$1;
(statearr_168274_168292[(2)] = inst_168263);

(statearr_168274_168292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168268 === (3))){
var inst_168265 = (state_168267[(2)]);
var state_168267__$1 = state_168267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168267__$1,inst_168265);
} else {
if((state_val_168268 === (2))){
var inst_168240 = (state_168267[(11)]);
var inst_168234 = (state_168267[(8)]);
var inst_168239 = cljs.core.seq.call(null,inst_168234);
var inst_168240__$1 = cljs.core.first.call(null,inst_168239);
var inst_168241 = cljs.core.next.call(null,inst_168239);
var state_168267__$1 = (function (){var statearr_168275 = state_168267;
(statearr_168275[(12)] = inst_168241);

(statearr_168275[(11)] = inst_168240__$1);

return statearr_168275;
})();
if(cljs.core.truth_(inst_168240__$1)){
var statearr_168276_168293 = state_168267__$1;
(statearr_168276_168293[(1)] = (4));

} else {
var statearr_168277_168294 = state_168267__$1;
(statearr_168277_168294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168268 === (11))){
var inst_168241 = (state_168267[(12)]);
var inst_168256 = (state_168267[(2)]);
var inst_168234 = inst_168241;
var state_168267__$1 = (function (){var statearr_168278 = state_168267;
(statearr_168278[(8)] = inst_168234);

(statearr_168278[(13)] = inst_168256);

return statearr_168278;
})();
var statearr_168279_168295 = state_168267__$1;
(statearr_168279_168295[(2)] = null);

(statearr_168279_168295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168268 === (9))){
var inst_168259 = (state_168267[(2)]);
var state_168267__$1 = state_168267;
var statearr_168280_168296 = state_168267__$1;
(statearr_168280_168296[(2)] = inst_168259);

(statearr_168280_168296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168268 === (5))){
var state_168267__$1 = state_168267;
var statearr_168281_168297 = state_168267__$1;
(statearr_168281_168297[(2)] = null);

(statearr_168281_168297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168268 === (10))){
var inst_168247 = (state_168267[(2)]);
var inst_168234 = updates;
var state_168267__$1 = (function (){var statearr_168282 = state_168267;
(statearr_168282[(14)] = inst_168247);

(statearr_168282[(8)] = inst_168234);

return statearr_168282;
})();
var statearr_168283_168298 = state_168267__$1;
(statearr_168283_168298[(2)] = null);

(statearr_168283_168298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_168268 === (8))){
var inst_168240 = (state_168267[(11)]);
var inst_168250 = cljs.core.async.chan.call(null);
var inst_168251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_168252 = [new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),inst_168250,inst_168240];
var inst_168253 = (new cljs.core.PersistentVector(null,3,(5),inst_168251,inst_168252,null));
var inst_168254 = ob.utils._GT_evt.call(null,inst_168253);
var state_168267__$1 = (function (){var statearr_168284 = state_168267;
(statearr_168284[(15)] = inst_168254);

return statearr_168284;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168267__$1,(11),inst_168250);
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
var statearr_168285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_168285[(0)] = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__);

(statearr_168285[(1)] = (1));

return statearr_168285;
});
var ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1 = (function (state_168267){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_168267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e168286){if((e168286 instanceof Object)){
var ex__20906__auto__ = e168286;
var statearr_168287_168299 = state_168267;
(statearr_168287_168299[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e168286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__168300 = state_168267;
state_168267 = G__168300;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__ = function(state_168267){
switch(arguments.length){
case 0:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1.call(this,state_168267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____0;
ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto____1;
return ob$event_loop$queue_db_updates_BANG__$_state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_168288 = f__20926__auto__.call(null);
(statearr_168288[(6)] = c__20925__auto__);

return statearr_168288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20927__auto__);
}));

return c__20925__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),ob.event_loop.run_event_loop_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"events->frames","events->frames",91948658),(function (p__168301,p__168302){
var map__168303 = p__168301;
var map__168303__$1 = cljs.core.__destructure_map.call(null,map__168303);
var db = cljs.core.get.call(null,map__168303__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__168304 = p__168302;
var _ = cljs.core.nth.call(null,vec__168304,(0),null);
var instr = cljs.core.nth.call(null,vec__168304,(1),null);
var frames = ob.event_loop.call_gen_frames.call(null,instr,db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),frames], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"queue-db-updates!","queue-db-updates!",23739316),ob.event_loop.queue_db_updates_BANG_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-db-update","run-db-update",295361054),(function (p__168307,p__168308){
var map__168309 = p__168307;
var map__168309__$1 = cljs.core.__destructure_map.call(null,map__168309);
var db = cljs.core.get.call(null,map__168309__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__168310 = p__168308;
var _ = cljs.core.nth.call(null,vec__168310,(0),null);
var blocking_chan = cljs.core.nth.call(null,vec__168310,(1),null);
var update = cljs.core.nth.call(null,vec__168310,(2),null);
var map__168313 = ob.update_db.run_db_update.call(null,db,update);
var map__168313__$1 = cljs.core.__destructure_map.call(null,map__168313);
var db__$1 = cljs.core.get.call(null,map__168313__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time = cljs.core.get.call(null,map__168313__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,blocking_chan], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block-for-db-update","block-for-db-update",-348373158),(function (p__168314){
var vec__168315 = p__168314;
var time = cljs.core.nth.call(null,vec__168315,(0),null);
var blocking_channel = cljs.core.nth.call(null,vec__168315,(1),null);
var c__20925__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__20926__auto__ = (function (){var switch__20902__auto__ = (function (state_168323){
var state_val_168324 = (state_168323[(1)]);
if((state_val_168324 === (1))){
var inst_168318 = cljs.core.async.timeout.call(null,time);
var state_168323__$1 = state_168323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168323__$1,(2),inst_168318);
} else {
if((state_val_168324 === (2))){
var inst_168320 = (state_168323[(2)]);
var inst_168321 = cljs.core.async.close_BANG_.call(null,blocking_channel);
var state_168323__$1 = (function (){var statearr_168325 = state_168323;
(statearr_168325[(7)] = inst_168320);

return statearr_168325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168323__$1,inst_168321);
} else {
return null;
}
}
});
return (function() {
var ob$event_loop$state_machine__20903__auto__ = null;
var ob$event_loop$state_machine__20903__auto____0 = (function (){
var statearr_168326 = [null,null,null,null,null,null,null,null];
(statearr_168326[(0)] = ob$event_loop$state_machine__20903__auto__);

(statearr_168326[(1)] = (1));

return statearr_168326;
});
var ob$event_loop$state_machine__20903__auto____1 = (function (state_168323){
while(true){
var ret_value__20904__auto__ = (function (){try{while(true){
var result__20905__auto__ = switch__20902__auto__.call(null,state_168323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20905__auto__;
}
break;
}
}catch (e168327){if((e168327 instanceof Object)){
var ex__20906__auto__ = e168327;
var statearr_168328_168330 = state_168323;
(statearr_168328_168330[(5)] = ex__20906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e168327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__168331 = state_168323;
state_168323 = G__168331;
continue;
} else {
return ret_value__20904__auto__;
}
break;
}
});
ob$event_loop$state_machine__20903__auto__ = function(state_168323){
switch(arguments.length){
case 0:
return ob$event_loop$state_machine__20903__auto____0.call(this);
case 1:
return ob$event_loop$state_machine__20903__auto____1.call(this,state_168323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$state_machine__20903__auto____0;
ob$event_loop$state_machine__20903__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$state_machine__20903__auto____1;
return ob$event_loop$state_machine__20903__auto__;
})()
})();
var state__20927__auto__ = (function (){var statearr_168329 = f__20926__auto__.call(null);
(statearr_168329[(6)] = c__20925__auto__);

return statearr_168329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20927__auto__);
}));

return c__20925__auto__;
}));
ob.event_loop.paused_QMARK_ = cljs.core.atom.call(null,false);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"update-pause-state!","update-pause-state!",953544338),(function (p_QMARK_){
return cljs.core.reset_BANG_.call(null,ob.event_loop.paused_QMARK_,p_QMARK_);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"toggle-pause","toggle-pause",1648289919),(function (p__168332,_){
var map__168333 = p__168332;
var map__168333__$1 = cljs.core.__destructure_map.call(null,map__168333);
var db = cljs.core.get.call(null,map__168333__$1,new cljs.core.Keyword(null,"db","db",993250759));
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
