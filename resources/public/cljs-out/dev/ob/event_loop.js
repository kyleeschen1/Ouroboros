// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.event_loop');
goog.require('cljs.core');
goog.require('ob.update_db');
goog.require('ob.utils');
goog.require('cljs.core.async');
goog.require('re_frame.core');
ob.event_loop.evt_chan = cljs.core.async.chan.call(null);
ob.event_loop.block = (function ob$event_loop$block(p__63976){
var map__63977 = p__63976;
var map__63977__$1 = cljs.core.__destructure_map.call(null,map__63977);
var time = cljs.core.get.call(null,map__63977__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return cljs.core.async.timeout.call(null,(function (){var or__4253__auto__ = time;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837)], null));
}
})());
});
/**
 * Dispatches events when not paused,
 * blocking if appropriate.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_64004){
var state_val_64005 = (state_64004[(1)]);
if((state_val_64005 === (7))){
var inst_63986 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64006 = state_64004;
(statearr_64006[(7)] = inst_63986);

return statearr_64006;
})();
var statearr_64007_64019 = state_64004__$1;
(statearr_64007_64019[(2)] = null);

(statearr_64007_64019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (1))){
var state_64004__$1 = state_64004;
var statearr_64008_64020 = state_64004__$1;
(statearr_64008_64020[(2)] = null);

(statearr_64008_64020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (4))){
var inst_63984 = cljs.core.async.timeout.call(null,(100));
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64004__$1,(7),inst_63984);
} else {
if((state_val_64005 === (6))){
var inst_64000 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
var statearr_64009_64021 = state_64004__$1;
(statearr_64009_64021[(2)] = inst_64000);

(statearr_64009_64021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (3))){
var inst_64002 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64004__$1,inst_64002);
} else {
if((state_val_64005 === (2))){
var inst_63979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63980 = [new cljs.core.Keyword(null,"paused?","paused?",-135058553)];
var inst_63981 = (new cljs.core.PersistentVector(null,1,(5),inst_63979,inst_63980,null));
var inst_63982 = ob.utils._LT_sub.call(null,inst_63981);
var state_64004__$1 = state_64004;
if(cljs.core.truth_(inst_63982)){
var statearr_64010_64022 = state_64004__$1;
(statearr_64010_64022[(1)] = (4));

} else {
var statearr_64011_64023 = state_64004__$1;
(statearr_64011_64023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (9))){
var inst_63997 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64012 = state_64004;
(statearr_64012[(8)] = inst_63997);

return statearr_64012;
})();
var statearr_64013_64024 = state_64004__$1;
(statearr_64013_64024[(2)] = null);

(statearr_64013_64024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (5))){
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64004__$1,(8),ob.event_loop.evt_chan);
} else {
if((state_val_64005 === (8))){
var inst_63990 = (state_64004[(2)]);
var inst_63991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63992 = [new cljs.core.Keyword(null,"update-db","update-db",754446157),inst_63990];
var inst_63993 = (new cljs.core.PersistentVector(null,2,(5),inst_63991,inst_63992,null));
var inst_63994 = ob.utils._GT_evt.call(null,inst_63993);
var inst_63995 = ob.event_loop.block.call(null,inst_63990);
var state_64004__$1 = (function (){var statearr_64014 = state_64004;
(statearr_64014[(9)] = inst_63994);

return statearr_64014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64004__$1,(9),inst_63995);
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
});
return (function() {
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = null;
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0 = (function (){
var statearr_64015 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64015[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__);

(statearr_64015[(1)] = (1));

return statearr_64015;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1 = (function (state_64004){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_64004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e64016){if((e64016 instanceof Object)){
var ex__27893__auto__ = e64016;
var statearr_64017_64025 = state_64004;
(statearr_64017_64025[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64026 = state_64004;
state_64004 = G__64026;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = function(state_64004){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1.call(this,state_64004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_64018 = f__27987__auto__.call(null);
(statearr_64018[(6)] = c__27986__auto__);

return statearr_64018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),(function (_){
return ob.event_loop.run_event_loop_BANG_.call(null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"enqueue-animation!","enqueue-animation!",-1096168451),(function ob$event_loop$enqueue(cf){
if(cljs.core.map_QMARK_.call(null,cf)){
return cljs.core.async.put_BANG_.call(null,ob.event_loop.evt_chan,cf);
} else {
var seq__64027 = cljs.core.seq.call(null,cf);
var chunk__64028 = null;
var count__64029 = (0);
var i__64030 = (0);
while(true){
if((i__64030 < count__64029)){
var c = cljs.core._nth.call(null,chunk__64028,i__64030);
ob$event_loop$enqueue.call(null,c);


var G__64031 = seq__64027;
var G__64032 = chunk__64028;
var G__64033 = count__64029;
var G__64034 = (i__64030 + (1));
seq__64027 = G__64031;
chunk__64028 = G__64032;
count__64029 = G__64033;
i__64030 = G__64034;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__64027);
if(temp__5720__auto__){
var seq__64027__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64027__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__64027__$1);
var G__64035 = cljs.core.chunk_rest.call(null,seq__64027__$1);
var G__64036 = c__4679__auto__;
var G__64037 = cljs.core.count.call(null,c__4679__auto__);
var G__64038 = (0);
seq__64027 = G__64035;
chunk__64028 = G__64036;
count__64029 = G__64037;
i__64030 = G__64038;
continue;
} else {
var c = cljs.core.first.call(null,seq__64027__$1);
ob$event_loop$enqueue.call(null,c);


var G__64039 = cljs.core.next.call(null,seq__64027__$1);
var G__64040 = null;
var G__64041 = (0);
var G__64042 = (0);
seq__64027 = G__64039;
chunk__64028 = G__64040;
count__64029 = G__64041;
i__64030 = G__64042;
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-db","update-db",754446157),ob.update_db.run_db_update);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pause!","pause!",2132037618),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"paused?","paused?",-135058553),cljs.core.not);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553),(function (p__64043){
var map__64044 = p__64043;
var map__64044__$1 = cljs.core.__destructure_map.call(null,map__64044);
var paused_QMARK_ = cljs.core.get.call(null,map__64044__$1,new cljs.core.Keyword(null,"paused?","paused?",-135058553));
return paused_QMARK_;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837),(function (p__64045){
var map__64046 = p__64045;
var map__64046__$1 = cljs.core.__destructure_map.call(null,map__64046);
var standard_block = cljs.core.get.call(null,map__64046__$1,new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837));
return standard_block;
}));

//# sourceMappingURL=event_loop.js.map
