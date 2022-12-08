// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.event_loop');
goog.require('cljs.core');
goog.require('ob.update_db');
goog.require('ob.utils');
goog.require('cljs.core.async');
goog.require('re_frame.core');
ob.event_loop.paused_QMARK_ = cljs.core.atom.call(null,false);
ob.event_loop.evt_chan = cljs.core.async.chan.call(null);
ob.event_loop.block = (function ob$event_loop$block(p__58681){
var map__58682 = p__58681;
var map__58682__$1 = cljs.core.__destructure_map.call(null,map__58682);
var time = cljs.core.get.call(null,map__58682__$1,new cljs.core.Keyword(null,"time","time",1385887882),(3000));
return cljs.core.async.timeout.call(null,time);
});
/**
 * Dispatches events when not paused,
 * blocking if appropriate.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_58705){
var state_val_58706 = (state_58705[(1)]);
if((state_val_58706 === (7))){
var inst_58688 = (state_58705[(2)]);
var state_58705__$1 = state_58705;
var statearr_58707_58719 = state_58705__$1;
(statearr_58707_58719[(2)] = inst_58688);

(statearr_58707_58719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58706 === (1))){
var state_58705__$1 = state_58705;
var statearr_58708_58720 = state_58705__$1;
(statearr_58708_58720[(2)] = null);

(statearr_58708_58720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58706 === (4))){
var inst_58686 = cljs.core.async.timeout.call(null,(100));
var state_58705__$1 = state_58705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58705__$1,(7),inst_58686);
} else {
if((state_val_58706 === (6))){
var inst_58700 = (state_58705[(2)]);
var state_58705__$1 = (function (){var statearr_58709 = state_58705;
(statearr_58709[(7)] = inst_58700);

return statearr_58709;
})();
var statearr_58710_58721 = state_58705__$1;
(statearr_58710_58721[(2)] = null);

(statearr_58710_58721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58706 === (3))){
var inst_58703 = (state_58705[(2)]);
var state_58705__$1 = state_58705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58705__$1,inst_58703);
} else {
if((state_val_58706 === (2))){
var inst_58684 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_58705__$1 = state_58705;
if(cljs.core.truth_(inst_58684)){
var statearr_58711_58722 = state_58705__$1;
(statearr_58711_58722[(1)] = (4));

} else {
var statearr_58712_58723 = state_58705__$1;
(statearr_58712_58723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58706 === (9))){
var inst_58698 = (state_58705[(2)]);
var state_58705__$1 = state_58705;
var statearr_58713_58724 = state_58705__$1;
(statearr_58713_58724[(2)] = inst_58698);

(statearr_58713_58724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58706 === (5))){
var state_58705__$1 = state_58705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58705__$1,(8),ob.event_loop.evt_chan);
} else {
if((state_val_58706 === (8))){
var inst_58691 = (state_58705[(2)]);
var inst_58692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58693 = [new cljs.core.Keyword(null,"update-db","update-db",754446157),inst_58691];
var inst_58694 = (new cljs.core.PersistentVector(null,2,(5),inst_58692,inst_58693,null));
var inst_58695 = ob.utils._GT_evt.call(null,inst_58694);
var inst_58696 = ob.event_loop.block.call(null,inst_58691);
var state_58705__$1 = (function (){var statearr_58714 = state_58705;
(statearr_58714[(8)] = inst_58695);

return statearr_58714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58705__$1,(9),inst_58696);
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
var statearr_58715 = [null,null,null,null,null,null,null,null,null];
(statearr_58715[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__);

(statearr_58715[(1)] = (1));

return statearr_58715;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1 = (function (state_58705){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_58705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e58716){if((e58716 instanceof Object)){
var ex__27893__auto__ = e58716;
var statearr_58717_58725 = state_58705;
(statearr_58717_58725[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58726 = state_58705;
state_58705 = G__58726;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = function(state_58705){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1.call(this,state_58705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_58718 = f__27987__auto__.call(null);
(statearr_58718[(6)] = c__27986__auto__);

return statearr_58718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),(function (_){
return ob.event_loop.run_event_loop_BANG_.call(null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"pause!","pause!",2132037618),(function (status){
return cljs.core.reset_BANG_.call(null,ob.event_loop.paused_QMARK_,status);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"enqueue-animation!","enqueue-animation!",-1096168451),(function ob$event_loop$enqueue(cf){
if(cljs.core.map_QMARK_.call(null,cf)){
return cljs.core.async.put_BANG_.call(null,ob.event_loop.evt_chan,cf);
} else {
var seq__58727 = cljs.core.seq.call(null,cf);
var chunk__58728 = null;
var count__58729 = (0);
var i__58730 = (0);
while(true){
if((i__58730 < count__58729)){
var c = cljs.core._nth.call(null,chunk__58728,i__58730);
ob$event_loop$enqueue.call(null,c);


var G__58731 = seq__58727;
var G__58732 = chunk__58728;
var G__58733 = count__58729;
var G__58734 = (i__58730 + (1));
seq__58727 = G__58731;
chunk__58728 = G__58732;
count__58729 = G__58733;
i__58730 = G__58734;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__58727);
if(temp__5720__auto__){
var seq__58727__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58727__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__58727__$1);
var G__58735 = cljs.core.chunk_rest.call(null,seq__58727__$1);
var G__58736 = c__4679__auto__;
var G__58737 = cljs.core.count.call(null,c__4679__auto__);
var G__58738 = (0);
seq__58727 = G__58735;
chunk__58728 = G__58736;
count__58729 = G__58737;
i__58730 = G__58738;
continue;
} else {
var c = cljs.core.first.call(null,seq__58727__$1);
ob$event_loop$enqueue.call(null,c);


var G__58739 = cljs.core.next.call(null,seq__58727__$1);
var G__58740 = null;
var G__58741 = (0);
var G__58742 = (0);
seq__58727 = G__58739;
chunk__58728 = G__58740;
count__58729 = G__58741;
i__58730 = G__58742;
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

//# sourceMappingURL=event_loop.js.map
