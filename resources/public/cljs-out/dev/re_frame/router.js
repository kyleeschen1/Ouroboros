// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('re_frame.events');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
return re_frame.interop.after_render.call(null,(function (){
return re_frame.interop.next_tick.call(null,f);
}));
}),new cljs.core.Keyword(null,"yield","yield",177875009),re_frame.interop.next_tick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

var re_frame$router$IEventQueue$push$dyn_16330 = (function (this$,event){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router.push[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,event);
} else {
var m__4549__auto__ = (re_frame.router.push["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.push",this$);
}
}
});
re_frame.router.push = (function re_frame$router$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$push$dyn_16330.call(null,this$,event);
}
});

var re_frame$router$IEventQueue$add_post_event_callback$dyn_16331 = (function (this$,id,callback_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,id,callback_fn);
} else {
var m__4549__auto__ = (re_frame.router.add_post_event_callback["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,id,callback_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.add-post-event-callback",this$);
}
}
});
re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callback_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callback_fn);
} else {
return re_frame$router$IEventQueue$add_post_event_callback$dyn_16331.call(null,this$,id,callback_fn);
}
});

var re_frame$router$IEventQueue$remove_post_event_callback$dyn_16332 = (function (this$,id){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,id);
} else {
var m__4549__auto__ = (re_frame.router.remove_post_event_callback["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.remove-post-event-callback",this$);
}
}
});
re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,id){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,id);
} else {
return re_frame$router$IEventQueue$remove_post_event_callback$dyn_16332.call(null,this$,id);
}
});

var re_frame$router$IEventQueue$purge$dyn_16333 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router.purge[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$);
} else {
var m__4549__auto__ = (re_frame.router.purge["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.purge",this$);
}
}
});
re_frame.router.purge = (function re_frame$router$purge(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$purge$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$purge$arity$1(this$);
} else {
return re_frame$router$IEventQueue$purge$dyn_16333.call(null,this$);
}
});

var re_frame$router$IEventQueue$_fsm_trigger$dyn_16334 = (function (this$,trigger,arg){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,trigger,arg);
} else {
var m__4549__auto__ = (re_frame.router._fsm_trigger["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,trigger,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-fsm-trigger",this$);
}
}
});
re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return re_frame$router$IEventQueue$_fsm_trigger$dyn_16334.call(null,this$,trigger,arg);
}
});

var re_frame$router$IEventQueue$_add_event$dyn_16335 = (function (this$,event){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._add_event[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,event);
} else {
var m__4549__auto__ = (re_frame.router._add_event["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-add-event",this$);
}
}
});
re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$_add_event$dyn_16335.call(null,this$,event);
}
});

var re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_16336 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$);
} else {
var m__4549__auto__ = (re_frame.router._process_1st_event_in_queue["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-process-1st-event-in-queue",this$);
}
}
});
re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_16336.call(null,this$);
}
});

var re_frame$router$IEventQueue$_run_next_tick$dyn_16337 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$);
} else {
var m__4549__auto__ = (re_frame.router._run_next_tick["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-next-tick",this$);
}
}
});
re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_run_next_tick$dyn_16337.call(null,this$);
}
});

var re_frame$router$IEventQueue$_run_queue$dyn_16338 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._run_queue[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$);
} else {
var m__4549__auto__ = (re_frame.router._run_queue["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-queue",this$);
}
}
});
re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_run_queue$dyn_16338.call(null,this$);
}
});

var re_frame$router$IEventQueue$_exception$dyn_16339 = (function (this$,ex){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._exception[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,ex);
} else {
var m__4549__auto__ = (re_frame.router._exception["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,ex);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-exception",this$);
}
}
});
re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
return re_frame$router$IEventQueue$_exception$dyn_16339.call(null,this$,ex);
}
});

var re_frame$router$IEventQueue$_pause$dyn_16340 = (function (this$,later_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._pause[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,later_fn);
} else {
var m__4549__auto__ = (re_frame.router._pause["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,later_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-pause",this$);
}
}
});
re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
return re_frame$router$IEventQueue$_pause$dyn_16340.call(null,this$,later_fn);
}
});

var re_frame$router$IEventQueue$_resume$dyn_16341 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._resume[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$);
} else {
var m__4549__auto__ = (re_frame.router._resume["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-resume",this$);
}
}
});
re_frame.router._resume = (function re_frame$router$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_resume$dyn_16341.call(null,this$);
}
});

var re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_16342 = (function (this$,event){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,this$,event);
} else {
var m__4549__auto__ = (re_frame.router._call_post_event_callbacks["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-call-post-event-callbacks",this$);
}
}
});
re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_16342.call(null,this$,event);
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count.call(null,self__.queue);
while(true){
if((n === (0))){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5718__auto__ = cljs.core.some.call(null,re_frame.router.later_fns,cljs.core.keys.call(null,cljs.core.meta.call(null,cljs.core.peek.call(null,self__.queue))));
if(cljs.core.truth_(temp__5718__auto__)){
var later_fn = temp__5718__auto__;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

var G__16358 = (n - (1));
n = G__16358;
continue;
}
}
break;
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: could not remove post event call back with id:",id);
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.call(null,self__.post_event_callback_fns,id));
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.call(null,self__.queue,event));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

return re_frame.router._run_queue.call(null,this$__$1);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return re_frame.interop.next_tick.call(null,(function (){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
}));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__16343 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16344 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16344);

try{try{var vec__16345 = (function (){var G__16348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__16348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
re_frame.router._add_event.call(null,this$__$1,arg);

return re_frame.router._run_next_tick.call(null,this$__$1);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__16348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return re_frame.router._exception.call(null,this$__$1,arg);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__16348)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return re_frame.router._run_next_tick.call(null,this$__$1);
})], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__16348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return re_frame.router._pause.call(null,this$__$1,arg);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__16348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return re_frame.router._resume.call(null,this$__$1);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__16348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return re_frame.router._run_queue.call(null,this$__$1);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__16348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__16348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__16348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
})], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__16345,(0),null);
var action_fn = cljs.core.nth.call(null,vec__16345,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__15868__auto___16359 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__15868__auto___16359);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__15866__auto___16360 = re_frame.interop.now.call(null);
var duration__15867__auto___16361 = (end__15866__auto___16360 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15867__auto___16361,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__15866__auto___16360);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16343);
}} else {
var vec__16349 = (function (){var G__16352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__16352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
re_frame.router._add_event.call(null,this$__$1,arg);

return re_frame.router._run_next_tick.call(null,this$__$1);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__16352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return re_frame.router._exception.call(null,this$__$1,arg);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__16352)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return re_frame.router._run_next_tick.call(null,this$__$1);
})], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__16352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return re_frame.router._pause.call(null,this$__$1,arg);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__16352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return re_frame.router._resume.call(null,this$__$1);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__16352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return re_frame.router._run_queue.call(null,this$__$1);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__16352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__16352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
})], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__16352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return re_frame.router._add_event.call(null,this$__$1,arg);
})], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__16349,(0),null);
var action_fn = cljs.core.nth.call(null,vec__16349,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__15868__auto___16362 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__15868__auto___16362);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
return later_fn.call(null,(function (){
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
}));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting existing post event call back with id:",id);
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.call(null,self__.post_event_callback_fns,id,callback_fn));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek.call(null,self__.queue);
try{re_frame.events.handle.call(null,event_v);

(self__.queue = cljs.core.pop.call(null,self__.queue));

return re_frame.router._call_post_event_callbacks.call(null,this$__$1,event_v);
}catch (e16353){var ex = e16353;
return re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__16354 = cljs.core.seq.call(null,cljs.core.vals.call(null,self__.post_event_callback_fns));
var chunk__16355 = null;
var count__16356 = (0);
var i__16357 = (0);
while(true){
if((i__16357 < count__16356)){
var callback = cljs.core._nth.call(null,chunk__16355,i__16357);
callback.call(null,event_v,self__.queue);


var G__16363 = seq__16354;
var G__16364 = chunk__16355;
var G__16365 = count__16356;
var G__16366 = (i__16357 + (1));
seq__16354 = G__16363;
chunk__16355 = G__16364;
count__16356 = G__16365;
i__16357 = G__16366;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16354);
if(temp__5720__auto__){
var seq__16354__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16354__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__16354__$1);
var G__16367 = cljs.core.chunk_rest.call(null,seq__16354__$1);
var G__16368 = c__4679__auto__;
var G__16369 = cljs.core.count.call(null,c__4679__auto__);
var G__16370 = (0);
seq__16354 = G__16367;
chunk__16355 = G__16368;
count__16356 = G__16369;
i__16357 = G__16370;
continue;
} else {
var callback = cljs.core.first.call(null,seq__16354__$1);
callback.call(null,event_v,self__.queue);


var G__16371 = cljs.core.next.call(null,seq__16354__$1);
var G__16372 = null;
var G__16373 = (0);
var G__16374 = (0);
seq__16354 = G__16371;
chunk__16355 = G__16372;
count__16356 = G__16373;
i__16357 = G__16374;
continue;
}
} else {
return null;
}
}
break;
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.queue = re_frame.interop.empty_queue);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
re_frame.router.purge.call(null,this$__$1);

throw ex;
}));

(re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frame.router.EventQueue.cljs$lang$type = true);

(re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue");

(re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"re-frame.router/EventQueue");
}));

/**
 * Positional factory function for re-frame.router/EventQueue.
 */
re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.call(null,"re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.push.call(null,re_frame.router.event_queue,event);
}

return null;
});
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle.call(null,event_v);

re_frame.router._call_post_event_callbacks.call(null,re_frame.router.event_queue,event_v);

return null;
});

//# sourceMappingURL=router.js.map
