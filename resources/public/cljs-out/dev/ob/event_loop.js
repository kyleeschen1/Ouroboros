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
ob.event_loop.paused_QMARK_ = cljs.core.atom.call(null,false);
ob.event_loop.requests = cljs.core.async.chan.call(null);
/**
 * Puts an animation request onto
 * the event channel.
 */
ob.event_loop.animate_BANG_ = (function ob$event_loop$animate_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70899 = arguments.length;
var i__4865__auto___70900 = (0);
while(true){
if((i__4865__auto___70900 < len__4864__auto___70899)){
args__4870__auto__.push((arguments[i__4865__auto___70900]));

var G__70901 = (i__4865__auto___70900 + (1));
i__4865__auto___70900 = G__70901;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.event_loop.animate_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.event_loop.animate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.async.put_BANG_.call(null,ob.event_loop.requests,cljs.core.vec.call(null,args));
}));

(ob.event_loop.animate_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.event_loop.animate_BANG_.cljs$lang$applyTo = (function (seq70898){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70898));
}));

ob.event_loop.block = (function ob$event_loop$block(p__70902){
var map__70903 = p__70902;
var map__70903__$1 = cljs.core.__destructure_map.call(null,map__70903);
var time = cljs.core.get.call(null,map__70903__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return cljs.core.async.timeout.call(null,(function (){var or__4253__auto__ = time;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837)], null));
}
})());
});
/**
 * Sets up an event for processing,
 * blocking until its completion.
 */
ob.event_loop.run_event_loop_BANG_ = (function ob$event_loop$run_event_loop_BANG_(){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_70914){
var state_val_70915 = (state_70914[(1)]);
if((state_val_70915 === (1))){
var state_70914__$1 = state_70914;
var statearr_70916_70923 = state_70914__$1;
(statearr_70916_70923[(2)] = null);

(statearr_70916_70923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70915 === (2))){
var state_70914__$1 = state_70914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70914__$1,(4),ob.event_loop.requests);
} else {
if((state_val_70915 === (3))){
var inst_70912 = (state_70914[(2)]);
var state_70914__$1 = state_70914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70914__$1,inst_70912);
} else {
if((state_val_70915 === (4))){
var inst_70906 = (state_70914[(2)]);
var inst_70907 = ob.event_loop.process_request.call(null,inst_70906);
var state_70914__$1 = state_70914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70914__$1,(5),inst_70907);
} else {
if((state_val_70915 === (5))){
var inst_70909 = (state_70914[(2)]);
var state_70914__$1 = (function (){var statearr_70917 = state_70914;
(statearr_70917[(7)] = inst_70909);

return statearr_70917;
})();
var statearr_70918_70924 = state_70914__$1;
(statearr_70918_70924[(2)] = null);

(statearr_70918_70924[(1)] = (2));


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
var statearr_70919 = [null,null,null,null,null,null,null,null];
(statearr_70919[(0)] = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__);

(statearr_70919[(1)] = (1));

return statearr_70919;
});
var ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1 = (function (state_70914){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_70914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e70920){if((e70920 instanceof Object)){
var ex__27893__auto__ = e70920;
var statearr_70921_70925 = state_70914;
(statearr_70921_70925[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70926 = state_70914;
state_70914 = G__70926;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__ = function(state_70914){
switch(arguments.length){
case 0:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1.call(this,state_70914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____0;
ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto____1;
return ob$event_loop$run_event_loop_BANG__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_70922 = f__27987__auto__.call(null);
(statearr_70922[(6)] = c__27986__auto__);

return statearr_70922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
/**
 * Processes a request, providing a
 * channel that will block until completion.
 */
ob.event_loop.process_request = (function ob$event_loop$process_request(evt){
var c = cljs.core.async.chan.call(null);
ob.utils._GT_evt.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"run-animation","run-animation",-1251669019),c], null),evt));

return c;
});
/**
 * Takes in the db and a channel / animation
 * request pair, then:
 *  
 * 1) computes a sequence of hiccup updates
 * 2) applies each update, blocking between
 * 
 * Once everything has been processed, it closes
 * the provided channel.
 */
ob.event_loop.execute_animation_request = (function ob$event_loop$execute_animation_request(p__70927){
var map__70928 = p__70927;
var map__70928__$1 = cljs.core.__destructure_map.call(null,map__70928);
var db = cljs.core.get.call(null,map__70928__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__70929 = cljs.core.get.call(null,map__70928__$1,new cljs.core.Keyword(null,"event","event",301435442));
var seq__70930 = cljs.core.seq.call(null,vec__70929);
var first__70931 = cljs.core.first.call(null,seq__70930);
var seq__70930__$1 = cljs.core.next.call(null,seq__70930);
var _ = first__70931;
var first__70931__$1 = cljs.core.first.call(null,seq__70930__$1);
var seq__70930__$2 = cljs.core.next.call(null,seq__70930__$1);
var channel = first__70931__$1;
var first__70931__$2 = cljs.core.first.call(null,seq__70930__$2);
var seq__70930__$3 = cljs.core.next.call(null,seq__70930__$2);
var tag = first__70931__$2;
var params = seq__70930__$3;
var cf = ob.event_loop.animate.call(null,tag,db,cljs.core.vec.call(null,params));
var configs = ((cljs.core.vector_QMARK_.call(null,cf))?cf:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf], null));
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_70981){
var state_val_70982 = (state_70981[(1)]);
if((state_val_70982 === (7))){
var inst_70942 = (state_70981[(7)]);
var inst_70954 = (state_70981[(2)]);
var tmp70983 = inst_70942;
var inst_70942__$1 = tmp70983;
var state_70981__$1 = (function (){var statearr_70984 = state_70981;
(statearr_70984[(7)] = inst_70942__$1);

(statearr_70984[(8)] = inst_70954);

return statearr_70984;
})();
var statearr_70985_71007 = state_70981__$1;
(statearr_70985_71007[(2)] = null);

(statearr_70985_71007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (1))){
var inst_70939 = cljs.core.seq.call(null,configs);
var inst_70940 = cljs.core.first.call(null,inst_70939);
var inst_70941 = cljs.core.next.call(null,inst_70939);
var inst_70942 = configs;
var state_70981__$1 = (function (){var statearr_70986 = state_70981;
(statearr_70986[(7)] = inst_70942);

(statearr_70986[(9)] = inst_70941);

(statearr_70986[(10)] = inst_70940);

return statearr_70986;
})();
var statearr_70987_71008 = state_70981__$1;
(statearr_70987_71008[(2)] = null);

(statearr_70987_71008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (4))){
var inst_70952 = cljs.core.async.timeout.call(null,(100));
var state_70981__$1 = state_70981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70981__$1,(7),inst_70952);
} else {
if((state_val_70982 === (13))){
var inst_70973 = (state_70981[(2)]);
var state_70981__$1 = state_70981;
var statearr_70988_71009 = state_70981__$1;
(statearr_70988_71009[(2)] = inst_70973);

(statearr_70988_71009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (6))){
var inst_70977 = (state_70981[(2)]);
var state_70981__$1 = state_70981;
var statearr_70989_71010 = state_70981__$1;
(statearr_70989_71010[(2)] = inst_70977);

(statearr_70989_71010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (3))){
var inst_70979 = (state_70981[(2)]);
var state_70981__$1 = state_70981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70981__$1,inst_70979);
} else {
if((state_val_70982 === (12))){
var state_70981__$1 = state_70981;
var statearr_70990_71011 = state_70981__$1;
(statearr_70990_71011[(2)] = null);

(statearr_70990_71011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (2))){
var inst_70942 = (state_70981[(7)]);
var inst_70947 = cljs.core.seq.call(null,inst_70942);
var inst_70948 = cljs.core.first.call(null,inst_70947);
var inst_70949 = cljs.core.next.call(null,inst_70947);
var inst_70950 = cljs.core.deref.call(null,ob.event_loop.paused_QMARK_);
var state_70981__$1 = (function (){var statearr_70991 = state_70981;
(statearr_70991[(11)] = inst_70948);

(statearr_70991[(12)] = inst_70949);

return statearr_70991;
})();
if(cljs.core.truth_(inst_70950)){
var statearr_70992_71012 = state_70981__$1;
(statearr_70992_71012[(1)] = (4));

} else {
var statearr_70993_71013 = state_70981__$1;
(statearr_70993_71013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (11))){
var inst_70948 = (state_70981[(11)]);
var inst_70963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70964 = [new cljs.core.Keyword(null,"update-db","update-db",754446157),inst_70948];
var inst_70965 = (new cljs.core.PersistentVector(null,2,(5),inst_70963,inst_70964,null));
var inst_70966 = ob.utils._GT_evt.call(null,inst_70965);
var inst_70967 = ob.event_loop.block.call(null,inst_70948);
var state_70981__$1 = (function (){var statearr_70994 = state_70981;
(statearr_70994[(13)] = inst_70966);

return statearr_70994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70981__$1,(14),inst_70967);
} else {
if((state_val_70982 === (9))){
var state_70981__$1 = state_70981;
var statearr_70995_71014 = state_70981__$1;
(statearr_70995_71014[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (5))){
var inst_70942 = (state_70981[(7)]);
var inst_70957 = cljs.core.seq.call(null,inst_70942);
var inst_70958 = cljs.core.not.call(null,inst_70957);
var state_70981__$1 = state_70981;
if(inst_70958){
var statearr_70997_71015 = state_70981__$1;
(statearr_70997_71015[(1)] = (8));

} else {
var statearr_70998_71016 = state_70981__$1;
(statearr_70998_71016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (14))){
var inst_70949 = (state_70981[(12)]);
var inst_70969 = (state_70981[(2)]);
var inst_70942 = inst_70949;
var state_70981__$1 = (function (){var statearr_70999 = state_70981;
(statearr_70999[(7)] = inst_70942);

(statearr_70999[(14)] = inst_70969);

return statearr_70999;
})();
var statearr_71000_71017 = state_70981__$1;
(statearr_71000_71017[(2)] = null);

(statearr_71000_71017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (10))){
var inst_70975 = (state_70981[(2)]);
var state_70981__$1 = state_70981;
var statearr_71001_71018 = state_70981__$1;
(statearr_71001_71018[(2)] = inst_70975);

(statearr_71001_71018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70982 === (8))){
var inst_70960 = cljs.core.async.close_BANG_.call(null,channel);
var state_70981__$1 = state_70981;
var statearr_71002_71019 = state_70981__$1;
(statearr_71002_71019[(2)] = inst_70960);

(statearr_71002_71019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var ob$event_loop$execute_animation_request_$_state_machine__27890__auto__ = null;
var ob$event_loop$execute_animation_request_$_state_machine__27890__auto____0 = (function (){
var statearr_71003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71003[(0)] = ob$event_loop$execute_animation_request_$_state_machine__27890__auto__);

(statearr_71003[(1)] = (1));

return statearr_71003;
});
var ob$event_loop$execute_animation_request_$_state_machine__27890__auto____1 = (function (state_70981){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_70981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e71004){if((e71004 instanceof Object)){
var ex__27893__auto__ = e71004;
var statearr_71005_71020 = state_70981;
(statearr_71005_71020[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71021 = state_70981;
state_70981 = G__71021;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
ob$event_loop$execute_animation_request_$_state_machine__27890__auto__ = function(state_70981){
switch(arguments.length){
case 0:
return ob$event_loop$execute_animation_request_$_state_machine__27890__auto____0.call(this);
case 1:
return ob$event_loop$execute_animation_request_$_state_machine__27890__auto____1.call(this,state_70981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ob$event_loop$execute_animation_request_$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = ob$event_loop$execute_animation_request_$_state_machine__27890__auto____0;
ob$event_loop$execute_animation_request_$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = ob$event_loop$execute_animation_request_$_state_machine__27890__auto____1;
return ob$event_loop$execute_animation_request_$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_71006 = f__27987__auto__.call(null);
(statearr_71006[(6)] = c__27986__auto__);

return statearr_71006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-animation","run-animation",-1251669019),ob.event_loop.execute_animation_request);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),(function (_){
return ob.event_loop.run_event_loop_BANG_.call(null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-db","update-db",754446157),ob.update_db.run_db_update);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pause!","pause!",2132037618),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"paused?","paused?",-135058553),cljs.core.not);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553),(function (p__71022){
var map__71023 = p__71022;
var map__71023__$1 = cljs.core.__destructure_map.call(null,map__71023);
var paused_QMARK_ = cljs.core.get.call(null,map__71023__$1,new cljs.core.Keyword(null,"paused?","paused?",-135058553));
return paused_QMARK_;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837),(function (p__71024){
var map__71025 = p__71024;
var map__71025__$1 = cljs.core.__destructure_map.call(null,map__71025);
var standard_block = cljs.core.get.call(null,map__71025__$1,new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837));
return standard_block;
}));

//# sourceMappingURL=event_loop.js.map
