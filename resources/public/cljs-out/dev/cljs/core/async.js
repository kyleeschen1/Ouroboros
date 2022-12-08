// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28046 = arguments.length;
switch (G__28046) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28047 = (function (f,blockable,meta28048){
this.f = f;
this.blockable = blockable;
this.meta28048 = meta28048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28049,meta28048__$1){
var self__ = this;
var _28049__$1 = this;
return (new cljs.core.async.t_cljs$core$async28047(self__.f,self__.blockable,meta28048__$1));
}));

(cljs.core.async.t_cljs$core$async28047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28049){
var self__ = this;
var _28049__$1 = this;
return self__.meta28048;
}));

(cljs.core.async.t_cljs$core$async28047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28048","meta28048",346832577,null)], null);
}));

(cljs.core.async.t_cljs$core$async28047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28047");

(cljs.core.async.t_cljs$core$async28047.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28047.
 */
cljs.core.async.__GT_t_cljs$core$async28047 = (function cljs$core$async$__GT_t_cljs$core$async28047(f__$1,blockable__$1,meta28048){
return (new cljs.core.async.t_cljs$core$async28047(f__$1,blockable__$1,meta28048));
});

}

return (new cljs.core.async.t_cljs$core$async28047(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28053 = arguments.length;
switch (G__28053) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28056 = arguments.length;
switch (G__28056) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28059 = arguments.length;
switch (G__28059) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28061 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28061);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_28061);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28063 = arguments.length;
switch (G__28063) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___28065 = n;
var x_28066 = (0);
while(true){
if((x_28066 < n__4741__auto___28065)){
(a[x_28066] = (0));

var G__28067 = (x_28066 + (1));
x_28066 = G__28067;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28068 = (i + (1));
i = G__28068;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28069 = (function (flag,meta28070){
this.flag = flag;
this.meta28070 = meta28070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28071,meta28070__$1){
var self__ = this;
var _28071__$1 = this;
return (new cljs.core.async.t_cljs$core$async28069(self__.flag,meta28070__$1));
}));

(cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28071){
var self__ = this;
var _28071__$1 = this;
return self__.meta28070;
}));

(cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28070","meta28070",-2039422268,null)], null);
}));

(cljs.core.async.t_cljs$core$async28069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28069");

(cljs.core.async.t_cljs$core$async28069.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28069.
 */
cljs.core.async.__GT_t_cljs$core$async28069 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28069(flag__$1,meta28070){
return (new cljs.core.async.t_cljs$core$async28069(flag__$1,meta28070));
});

}

return (new cljs.core.async.t_cljs$core$async28069(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28072 = (function (flag,cb,meta28073){
this.flag = flag;
this.cb = cb;
this.meta28073 = meta28073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28074,meta28073__$1){
var self__ = this;
var _28074__$1 = this;
return (new cljs.core.async.t_cljs$core$async28072(self__.flag,self__.cb,meta28073__$1));
}));

(cljs.core.async.t_cljs$core$async28072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28074){
var self__ = this;
var _28074__$1 = this;
return self__.meta28073;
}));

(cljs.core.async.t_cljs$core$async28072.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28072.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28073","meta28073",-1130641315,null)], null);
}));

(cljs.core.async.t_cljs$core$async28072.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28072");

(cljs.core.async.t_cljs$core$async28072.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28072");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28072.
 */
cljs.core.async.__GT_t_cljs$core$async28072 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28072(flag__$1,cb__$1,meta28073){
return (new cljs.core.async.t_cljs$core$async28072(flag__$1,cb__$1,meta28073));
});

}

return (new cljs.core.async.t_cljs$core$async28072(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28075_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28075_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28076_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28076_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28077 = (i + (1));
i = G__28077;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28082 = arguments.length;
var i__4865__auto___28083 = (0);
while(true){
if((i__4865__auto___28083 < len__4864__auto___28082)){
args__4870__auto__.push((arguments[i__4865__auto___28083]));

var G__28084 = (i__4865__auto___28083 + (1));
i__4865__auto___28083 = G__28084;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28080){
var map__28081 = p__28080;
var map__28081__$1 = cljs.core.__destructure_map.call(null,map__28081);
var opts = map__28081__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28078){
var G__28079 = cljs.core.first.call(null,seq28078);
var seq28078__$1 = cljs.core.next.call(null,seq28078);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28079,seq28078__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28086 = arguments.length;
switch (G__28086) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27986__auto___28132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28110){
var state_val_28111 = (state_28110[(1)]);
if((state_val_28111 === (7))){
var inst_28106 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
var statearr_28112_28133 = state_28110__$1;
(statearr_28112_28133[(2)] = inst_28106);

(statearr_28112_28133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (1))){
var state_28110__$1 = state_28110;
var statearr_28113_28134 = state_28110__$1;
(statearr_28113_28134[(2)] = null);

(statearr_28113_28134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (4))){
var inst_28089 = (state_28110[(7)]);
var inst_28089__$1 = (state_28110[(2)]);
var inst_28090 = (inst_28089__$1 == null);
var state_28110__$1 = (function (){var statearr_28114 = state_28110;
(statearr_28114[(7)] = inst_28089__$1);

return statearr_28114;
})();
if(cljs.core.truth_(inst_28090)){
var statearr_28115_28135 = state_28110__$1;
(statearr_28115_28135[(1)] = (5));

} else {
var statearr_28116_28136 = state_28110__$1;
(statearr_28116_28136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (13))){
var state_28110__$1 = state_28110;
var statearr_28117_28137 = state_28110__$1;
(statearr_28117_28137[(2)] = null);

(statearr_28117_28137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (6))){
var inst_28089 = (state_28110[(7)]);
var state_28110__$1 = state_28110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28110__$1,(11),to,inst_28089);
} else {
if((state_val_28111 === (3))){
var inst_28108 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28110__$1,inst_28108);
} else {
if((state_val_28111 === (12))){
var state_28110__$1 = state_28110;
var statearr_28118_28138 = state_28110__$1;
(statearr_28118_28138[(2)] = null);

(statearr_28118_28138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (2))){
var state_28110__$1 = state_28110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28110__$1,(4),from);
} else {
if((state_val_28111 === (11))){
var inst_28099 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
if(cljs.core.truth_(inst_28099)){
var statearr_28119_28139 = state_28110__$1;
(statearr_28119_28139[(1)] = (12));

} else {
var statearr_28120_28140 = state_28110__$1;
(statearr_28120_28140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (9))){
var state_28110__$1 = state_28110;
var statearr_28121_28141 = state_28110__$1;
(statearr_28121_28141[(2)] = null);

(statearr_28121_28141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (5))){
var state_28110__$1 = state_28110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28122_28142 = state_28110__$1;
(statearr_28122_28142[(1)] = (8));

} else {
var statearr_28123_28143 = state_28110__$1;
(statearr_28123_28143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (14))){
var inst_28104 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
var statearr_28124_28144 = state_28110__$1;
(statearr_28124_28144[(2)] = inst_28104);

(statearr_28124_28144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (10))){
var inst_28096 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
var statearr_28125_28145 = state_28110__$1;
(statearr_28125_28145[(2)] = inst_28096);

(statearr_28125_28145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (8))){
var inst_28093 = cljs.core.async.close_BANG_.call(null,to);
var state_28110__$1 = state_28110;
var statearr_28126_28146 = state_28110__$1;
(statearr_28126_28146[(2)] = inst_28093);

(statearr_28126_28146[(1)] = (10));


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
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_28127 = [null,null,null,null,null,null,null,null];
(statearr_28127[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_28127[(1)] = (1));

return statearr_28127;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_28110){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28128){if((e28128 instanceof Object)){
var ex__27893__auto__ = e28128;
var statearr_28129_28147 = state_28110;
(statearr_28129_28147[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28148 = state_28110;
state_28110 = G__28148;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_28110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_28110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28130 = f__27987__auto__.call(null);
(statearr_28130[(6)] = c__27986__auto___28132);

return statearr_28130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__28149){
var vec__28150 = p__28149;
var v = cljs.core.nth.call(null,vec__28150,(0),null);
var p = cljs.core.nth.call(null,vec__28150,(1),null);
var job = vec__28150;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27986__auto___28321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28157){
var state_val_28158 = (state_28157[(1)]);
if((state_val_28158 === (1))){
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28157__$1,(2),res,v);
} else {
if((state_val_28158 === (2))){
var inst_28154 = (state_28157[(2)]);
var inst_28155 = cljs.core.async.close_BANG_.call(null,res);
var state_28157__$1 = (function (){var statearr_28159 = state_28157;
(statearr_28159[(7)] = inst_28154);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28157__$1,inst_28155);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0 = (function (){
var statearr_28160 = [null,null,null,null,null,null,null,null];
(statearr_28160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__);

(statearr_28160[(1)] = (1));

return statearr_28160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1 = (function (state_28157){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28161){if((e28161 instanceof Object)){
var ex__27893__auto__ = e28161;
var statearr_28162_28322 = state_28157;
(statearr_28162_28322[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28323 = state_28157;
state_28157 = G__28323;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = function(state_28157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1.call(this,state_28157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28163 = f__27987__auto__.call(null);
(statearr_28163[(6)] = c__27986__auto___28321);

return statearr_28163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__28164){
var vec__28165 = p__28164;
var v = cljs.core.nth.call(null,vec__28165,(0),null);
var p = cljs.core.nth.call(null,vec__28165,(1),null);
var job = vec__28165;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4741__auto___28324 = n;
var __28325 = (0);
while(true){
if((__28325 < n__4741__auto___28324)){
var G__28168_28326 = type;
var G__28168_28327__$1 = (((G__28168_28326 instanceof cljs.core.Keyword))?G__28168_28326.fqn:null);
switch (G__28168_28327__$1) {
case "compute":
var c__27986__auto___28329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28325,c__27986__auto___28329,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async){
return (function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = ((function (__28325,c__27986__auto___28329,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async){
return (function (state_28181){
var state_val_28182 = (state_28181[(1)]);
if((state_val_28182 === (1))){
var state_28181__$1 = state_28181;
var statearr_28183_28330 = state_28181__$1;
(statearr_28183_28330[(2)] = null);

(statearr_28183_28330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (2))){
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28181__$1,(4),jobs);
} else {
if((state_val_28182 === (3))){
var inst_28179 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28181__$1,inst_28179);
} else {
if((state_val_28182 === (4))){
var inst_28171 = (state_28181[(2)]);
var inst_28172 = process.call(null,inst_28171);
var state_28181__$1 = state_28181;
if(cljs.core.truth_(inst_28172)){
var statearr_28184_28331 = state_28181__$1;
(statearr_28184_28331[(1)] = (5));

} else {
var statearr_28185_28332 = state_28181__$1;
(statearr_28185_28332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (5))){
var state_28181__$1 = state_28181;
var statearr_28186_28333 = state_28181__$1;
(statearr_28186_28333[(2)] = null);

(statearr_28186_28333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (6))){
var state_28181__$1 = state_28181;
var statearr_28187_28334 = state_28181__$1;
(statearr_28187_28334[(2)] = null);

(statearr_28187_28334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (7))){
var inst_28177 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28188_28335 = state_28181__$1;
(statearr_28188_28335[(2)] = inst_28177);

(statearr_28188_28335[(1)] = (3));


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
});})(__28325,c__27986__auto___28329,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async))
;
return ((function (__28325,switch__27889__auto__,c__27986__auto___28329,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0 = (function (){
var statearr_28189 = [null,null,null,null,null,null,null];
(statearr_28189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__);

(statearr_28189[(1)] = (1));

return statearr_28189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1 = (function (state_28181){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28190){if((e28190 instanceof Object)){
var ex__27893__auto__ = e28190;
var statearr_28191_28336 = state_28181;
(statearr_28191_28336[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28337 = state_28181;
state_28181 = G__28337;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = function(state_28181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1.call(this,state_28181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__;
})()
;})(__28325,switch__27889__auto__,c__27986__auto___28329,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async))
})();
var state__27988__auto__ = (function (){var statearr_28192 = f__27987__auto__.call(null);
(statearr_28192[(6)] = c__27986__auto___28329);

return statearr_28192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
});})(__28325,c__27986__auto___28329,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async))
);


break;
case "async":
var c__27986__auto___28338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28325,c__27986__auto___28338,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async){
return (function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = ((function (__28325,c__27986__auto___28338,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async){
return (function (state_28205){
var state_val_28206 = (state_28205[(1)]);
if((state_val_28206 === (1))){
var state_28205__$1 = state_28205;
var statearr_28207_28339 = state_28205__$1;
(statearr_28207_28339[(2)] = null);

(statearr_28207_28339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28206 === (2))){
var state_28205__$1 = state_28205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28205__$1,(4),jobs);
} else {
if((state_val_28206 === (3))){
var inst_28203 = (state_28205[(2)]);
var state_28205__$1 = state_28205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28205__$1,inst_28203);
} else {
if((state_val_28206 === (4))){
var inst_28195 = (state_28205[(2)]);
var inst_28196 = async.call(null,inst_28195);
var state_28205__$1 = state_28205;
if(cljs.core.truth_(inst_28196)){
var statearr_28208_28340 = state_28205__$1;
(statearr_28208_28340[(1)] = (5));

} else {
var statearr_28209_28341 = state_28205__$1;
(statearr_28209_28341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28206 === (5))){
var state_28205__$1 = state_28205;
var statearr_28210_28342 = state_28205__$1;
(statearr_28210_28342[(2)] = null);

(statearr_28210_28342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28206 === (6))){
var state_28205__$1 = state_28205;
var statearr_28211_28343 = state_28205__$1;
(statearr_28211_28343[(2)] = null);

(statearr_28211_28343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28206 === (7))){
var inst_28201 = (state_28205[(2)]);
var state_28205__$1 = state_28205;
var statearr_28212_28344 = state_28205__$1;
(statearr_28212_28344[(2)] = inst_28201);

(statearr_28212_28344[(1)] = (3));


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
});})(__28325,c__27986__auto___28338,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async))
;
return ((function (__28325,switch__27889__auto__,c__27986__auto___28338,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0 = (function (){
var statearr_28213 = [null,null,null,null,null,null,null];
(statearr_28213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__);

(statearr_28213[(1)] = (1));

return statearr_28213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1 = (function (state_28205){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28214){if((e28214 instanceof Object)){
var ex__27893__auto__ = e28214;
var statearr_28215_28345 = state_28205;
(statearr_28215_28345[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28346 = state_28205;
state_28205 = G__28346;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = function(state_28205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1.call(this,state_28205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__;
})()
;})(__28325,switch__27889__auto__,c__27986__auto___28338,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async))
})();
var state__27988__auto__ = (function (){var statearr_28216 = f__27987__auto__.call(null);
(statearr_28216[(6)] = c__27986__auto___28338);

return statearr_28216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
});})(__28325,c__27986__auto___28338,G__28168_28326,G__28168_28327__$1,n__4741__auto___28324,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28168_28327__$1)].join('')));

}

var G__28347 = (__28325 + (1));
__28325 = G__28347;
continue;
} else {
}
break;
}

var c__27986__auto___28348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28238){
var state_val_28239 = (state_28238[(1)]);
if((state_val_28239 === (7))){
var inst_28234 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28240_28349 = state_28238__$1;
(statearr_28240_28349[(2)] = inst_28234);

(statearr_28240_28349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (1))){
var state_28238__$1 = state_28238;
var statearr_28241_28350 = state_28238__$1;
(statearr_28241_28350[(2)] = null);

(statearr_28241_28350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (4))){
var inst_28219 = (state_28238[(7)]);
var inst_28219__$1 = (state_28238[(2)]);
var inst_28220 = (inst_28219__$1 == null);
var state_28238__$1 = (function (){var statearr_28242 = state_28238;
(statearr_28242[(7)] = inst_28219__$1);

return statearr_28242;
})();
if(cljs.core.truth_(inst_28220)){
var statearr_28243_28351 = state_28238__$1;
(statearr_28243_28351[(1)] = (5));

} else {
var statearr_28244_28352 = state_28238__$1;
(statearr_28244_28352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (6))){
var inst_28224 = (state_28238[(8)]);
var inst_28219 = (state_28238[(7)]);
var inst_28224__$1 = cljs.core.async.chan.call(null,(1));
var inst_28225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28226 = [inst_28219,inst_28224__$1];
var inst_28227 = (new cljs.core.PersistentVector(null,2,(5),inst_28225,inst_28226,null));
var state_28238__$1 = (function (){var statearr_28245 = state_28238;
(statearr_28245[(8)] = inst_28224__$1);

return statearr_28245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28238__$1,(8),jobs,inst_28227);
} else {
if((state_val_28239 === (3))){
var inst_28236 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28238__$1,inst_28236);
} else {
if((state_val_28239 === (2))){
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28238__$1,(4),from);
} else {
if((state_val_28239 === (9))){
var inst_28231 = (state_28238[(2)]);
var state_28238__$1 = (function (){var statearr_28246 = state_28238;
(statearr_28246[(9)] = inst_28231);

return statearr_28246;
})();
var statearr_28247_28353 = state_28238__$1;
(statearr_28247_28353[(2)] = null);

(statearr_28247_28353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (5))){
var inst_28222 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28238__$1 = state_28238;
var statearr_28248_28354 = state_28238__$1;
(statearr_28248_28354[(2)] = inst_28222);

(statearr_28248_28354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (8))){
var inst_28224 = (state_28238[(8)]);
var inst_28229 = (state_28238[(2)]);
var state_28238__$1 = (function (){var statearr_28249 = state_28238;
(statearr_28249[(10)] = inst_28229);

return statearr_28249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28238__$1,(9),results,inst_28224);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0 = (function (){
var statearr_28250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__);

(statearr_28250[(1)] = (1));

return statearr_28250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1 = (function (state_28238){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28251){if((e28251 instanceof Object)){
var ex__27893__auto__ = e28251;
var statearr_28252_28355 = state_28238;
(statearr_28252_28355[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28356 = state_28238;
state_28238 = G__28356;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = function(state_28238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1.call(this,state_28238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28253 = f__27987__auto__.call(null);
(statearr_28253[(6)] = c__27986__auto___28348);

return statearr_28253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28291){
var state_val_28292 = (state_28291[(1)]);
if((state_val_28292 === (7))){
var inst_28287 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28293_28357 = state_28291__$1;
(statearr_28293_28357[(2)] = inst_28287);

(statearr_28293_28357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (20))){
var state_28291__$1 = state_28291;
var statearr_28294_28358 = state_28291__$1;
(statearr_28294_28358[(2)] = null);

(statearr_28294_28358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (1))){
var state_28291__$1 = state_28291;
var statearr_28295_28359 = state_28291__$1;
(statearr_28295_28359[(2)] = null);

(statearr_28295_28359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (4))){
var inst_28256 = (state_28291[(7)]);
var inst_28256__$1 = (state_28291[(2)]);
var inst_28257 = (inst_28256__$1 == null);
var state_28291__$1 = (function (){var statearr_28296 = state_28291;
(statearr_28296[(7)] = inst_28256__$1);

return statearr_28296;
})();
if(cljs.core.truth_(inst_28257)){
var statearr_28297_28360 = state_28291__$1;
(statearr_28297_28360[(1)] = (5));

} else {
var statearr_28298_28361 = state_28291__$1;
(statearr_28298_28361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (15))){
var inst_28269 = (state_28291[(8)]);
var state_28291__$1 = state_28291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28291__$1,(18),to,inst_28269);
} else {
if((state_val_28292 === (21))){
var inst_28282 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28299_28362 = state_28291__$1;
(statearr_28299_28362[(2)] = inst_28282);

(statearr_28299_28362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (13))){
var inst_28284 = (state_28291[(2)]);
var state_28291__$1 = (function (){var statearr_28300 = state_28291;
(statearr_28300[(9)] = inst_28284);

return statearr_28300;
})();
var statearr_28301_28363 = state_28291__$1;
(statearr_28301_28363[(2)] = null);

(statearr_28301_28363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (6))){
var inst_28256 = (state_28291[(7)]);
var state_28291__$1 = state_28291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28291__$1,(11),inst_28256);
} else {
if((state_val_28292 === (17))){
var inst_28277 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
if(cljs.core.truth_(inst_28277)){
var statearr_28302_28364 = state_28291__$1;
(statearr_28302_28364[(1)] = (19));

} else {
var statearr_28303_28365 = state_28291__$1;
(statearr_28303_28365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (3))){
var inst_28289 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28291__$1,inst_28289);
} else {
if((state_val_28292 === (12))){
var inst_28266 = (state_28291[(10)]);
var state_28291__$1 = state_28291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28291__$1,(14),inst_28266);
} else {
if((state_val_28292 === (2))){
var state_28291__$1 = state_28291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28291__$1,(4),results);
} else {
if((state_val_28292 === (19))){
var state_28291__$1 = state_28291;
var statearr_28304_28366 = state_28291__$1;
(statearr_28304_28366[(2)] = null);

(statearr_28304_28366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (11))){
var inst_28266 = (state_28291[(2)]);
var state_28291__$1 = (function (){var statearr_28305 = state_28291;
(statearr_28305[(10)] = inst_28266);

return statearr_28305;
})();
var statearr_28306_28367 = state_28291__$1;
(statearr_28306_28367[(2)] = null);

(statearr_28306_28367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (9))){
var state_28291__$1 = state_28291;
var statearr_28307_28368 = state_28291__$1;
(statearr_28307_28368[(2)] = null);

(statearr_28307_28368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (5))){
var state_28291__$1 = state_28291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28308_28369 = state_28291__$1;
(statearr_28308_28369[(1)] = (8));

} else {
var statearr_28309_28370 = state_28291__$1;
(statearr_28309_28370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (14))){
var inst_28269 = (state_28291[(8)]);
var inst_28271 = (state_28291[(11)]);
var inst_28269__$1 = (state_28291[(2)]);
var inst_28270 = (inst_28269__$1 == null);
var inst_28271__$1 = cljs.core.not.call(null,inst_28270);
var state_28291__$1 = (function (){var statearr_28310 = state_28291;
(statearr_28310[(8)] = inst_28269__$1);

(statearr_28310[(11)] = inst_28271__$1);

return statearr_28310;
})();
if(inst_28271__$1){
var statearr_28311_28371 = state_28291__$1;
(statearr_28311_28371[(1)] = (15));

} else {
var statearr_28312_28372 = state_28291__$1;
(statearr_28312_28372[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (16))){
var inst_28271 = (state_28291[(11)]);
var state_28291__$1 = state_28291;
var statearr_28313_28373 = state_28291__$1;
(statearr_28313_28373[(2)] = inst_28271);

(statearr_28313_28373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (10))){
var inst_28263 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28314_28374 = state_28291__$1;
(statearr_28314_28374[(2)] = inst_28263);

(statearr_28314_28374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (18))){
var inst_28274 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28315_28375 = state_28291__$1;
(statearr_28315_28375[(2)] = inst_28274);

(statearr_28315_28375[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (8))){
var inst_28260 = cljs.core.async.close_BANG_.call(null,to);
var state_28291__$1 = state_28291;
var statearr_28316_28376 = state_28291__$1;
(statearr_28316_28376[(2)] = inst_28260);

(statearr_28316_28376[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0 = (function (){
var statearr_28317 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__);

(statearr_28317[(1)] = (1));

return statearr_28317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1 = (function (state_28291){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28318){if((e28318 instanceof Object)){
var ex__27893__auto__ = e28318;
var statearr_28319_28377 = state_28291;
(statearr_28319_28377[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28378 = state_28291;
state_28291 = G__28378;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__ = function(state_28291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1.call(this,state_28291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28320 = f__27987__auto__.call(null);
(statearr_28320[(6)] = c__27986__auto__);

return statearr_28320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28380 = arguments.length;
switch (G__28380) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28383 = arguments.length;
switch (G__28383) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28386 = arguments.length;
switch (G__28386) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27986__auto___28435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28412){
var state_val_28413 = (state_28412[(1)]);
if((state_val_28413 === (7))){
var inst_28408 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28414_28436 = state_28412__$1;
(statearr_28414_28436[(2)] = inst_28408);

(statearr_28414_28436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (1))){
var state_28412__$1 = state_28412;
var statearr_28415_28437 = state_28412__$1;
(statearr_28415_28437[(2)] = null);

(statearr_28415_28437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (4))){
var inst_28389 = (state_28412[(7)]);
var inst_28389__$1 = (state_28412[(2)]);
var inst_28390 = (inst_28389__$1 == null);
var state_28412__$1 = (function (){var statearr_28416 = state_28412;
(statearr_28416[(7)] = inst_28389__$1);

return statearr_28416;
})();
if(cljs.core.truth_(inst_28390)){
var statearr_28417_28438 = state_28412__$1;
(statearr_28417_28438[(1)] = (5));

} else {
var statearr_28418_28439 = state_28412__$1;
(statearr_28418_28439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (13))){
var state_28412__$1 = state_28412;
var statearr_28419_28440 = state_28412__$1;
(statearr_28419_28440[(2)] = null);

(statearr_28419_28440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (6))){
var inst_28389 = (state_28412[(7)]);
var inst_28395 = p.call(null,inst_28389);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28395)){
var statearr_28420_28441 = state_28412__$1;
(statearr_28420_28441[(1)] = (9));

} else {
var statearr_28421_28442 = state_28412__$1;
(statearr_28421_28442[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (3))){
var inst_28410 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28412__$1,inst_28410);
} else {
if((state_val_28413 === (12))){
var state_28412__$1 = state_28412;
var statearr_28422_28443 = state_28412__$1;
(statearr_28422_28443[(2)] = null);

(statearr_28422_28443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (2))){
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,(4),ch);
} else {
if((state_val_28413 === (11))){
var inst_28389 = (state_28412[(7)]);
var inst_28399 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28412__$1,(8),inst_28399,inst_28389);
} else {
if((state_val_28413 === (9))){
var state_28412__$1 = state_28412;
var statearr_28423_28444 = state_28412__$1;
(statearr_28423_28444[(2)] = tc);

(statearr_28423_28444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (5))){
var inst_28392 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28393 = cljs.core.async.close_BANG_.call(null,fc);
var state_28412__$1 = (function (){var statearr_28424 = state_28412;
(statearr_28424[(8)] = inst_28392);

return statearr_28424;
})();
var statearr_28425_28445 = state_28412__$1;
(statearr_28425_28445[(2)] = inst_28393);

(statearr_28425_28445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (14))){
var inst_28406 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28426_28446 = state_28412__$1;
(statearr_28426_28446[(2)] = inst_28406);

(statearr_28426_28446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (10))){
var state_28412__$1 = state_28412;
var statearr_28427_28447 = state_28412__$1;
(statearr_28427_28447[(2)] = fc);

(statearr_28427_28447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (8))){
var inst_28401 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28401)){
var statearr_28428_28448 = state_28412__$1;
(statearr_28428_28448[(1)] = (12));

} else {
var statearr_28429_28449 = state_28412__$1;
(statearr_28429_28449[(1)] = (13));

}

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
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_28430 = [null,null,null,null,null,null,null,null,null];
(statearr_28430[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_28430[(1)] = (1));

return statearr_28430;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_28412){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28431){if((e28431 instanceof Object)){
var ex__27893__auto__ = e28431;
var statearr_28432_28450 = state_28412;
(statearr_28432_28450[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28451 = state_28412;
state_28412 = G__28451;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_28412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_28412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28433 = f__27987__auto__.call(null);
(statearr_28433[(6)] = c__27986__auto___28435);

return statearr_28433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28472){
var state_val_28473 = (state_28472[(1)]);
if((state_val_28473 === (7))){
var inst_28468 = (state_28472[(2)]);
var state_28472__$1 = state_28472;
var statearr_28474_28492 = state_28472__$1;
(statearr_28474_28492[(2)] = inst_28468);

(statearr_28474_28492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28473 === (1))){
var inst_28452 = init;
var state_28472__$1 = (function (){var statearr_28475 = state_28472;
(statearr_28475[(7)] = inst_28452);

return statearr_28475;
})();
var statearr_28476_28493 = state_28472__$1;
(statearr_28476_28493[(2)] = null);

(statearr_28476_28493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28473 === (4))){
var inst_28455 = (state_28472[(8)]);
var inst_28455__$1 = (state_28472[(2)]);
var inst_28456 = (inst_28455__$1 == null);
var state_28472__$1 = (function (){var statearr_28477 = state_28472;
(statearr_28477[(8)] = inst_28455__$1);

return statearr_28477;
})();
if(cljs.core.truth_(inst_28456)){
var statearr_28478_28494 = state_28472__$1;
(statearr_28478_28494[(1)] = (5));

} else {
var statearr_28479_28495 = state_28472__$1;
(statearr_28479_28495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28473 === (6))){
var inst_28455 = (state_28472[(8)]);
var inst_28459 = (state_28472[(9)]);
var inst_28452 = (state_28472[(7)]);
var inst_28459__$1 = f.call(null,inst_28452,inst_28455);
var inst_28460 = cljs.core.reduced_QMARK_.call(null,inst_28459__$1);
var state_28472__$1 = (function (){var statearr_28480 = state_28472;
(statearr_28480[(9)] = inst_28459__$1);

return statearr_28480;
})();
if(inst_28460){
var statearr_28481_28496 = state_28472__$1;
(statearr_28481_28496[(1)] = (8));

} else {
var statearr_28482_28497 = state_28472__$1;
(statearr_28482_28497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28473 === (3))){
var inst_28470 = (state_28472[(2)]);
var state_28472__$1 = state_28472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28472__$1,inst_28470);
} else {
if((state_val_28473 === (2))){
var state_28472__$1 = state_28472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28472__$1,(4),ch);
} else {
if((state_val_28473 === (9))){
var inst_28459 = (state_28472[(9)]);
var inst_28452 = inst_28459;
var state_28472__$1 = (function (){var statearr_28483 = state_28472;
(statearr_28483[(7)] = inst_28452);

return statearr_28483;
})();
var statearr_28484_28498 = state_28472__$1;
(statearr_28484_28498[(2)] = null);

(statearr_28484_28498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28473 === (5))){
var inst_28452 = (state_28472[(7)]);
var state_28472__$1 = state_28472;
var statearr_28485_28499 = state_28472__$1;
(statearr_28485_28499[(2)] = inst_28452);

(statearr_28485_28499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28473 === (10))){
var inst_28466 = (state_28472[(2)]);
var state_28472__$1 = state_28472;
var statearr_28486_28500 = state_28472__$1;
(statearr_28486_28500[(2)] = inst_28466);

(statearr_28486_28500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28473 === (8))){
var inst_28459 = (state_28472[(9)]);
var inst_28462 = cljs.core.deref.call(null,inst_28459);
var state_28472__$1 = state_28472;
var statearr_28487_28501 = state_28472__$1;
(statearr_28487_28501[(2)] = inst_28462);

(statearr_28487_28501[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27890__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27890__auto____0 = (function (){
var statearr_28488 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28488[(0)] = cljs$core$async$reduce_$_state_machine__27890__auto__);

(statearr_28488[(1)] = (1));

return statearr_28488;
});
var cljs$core$async$reduce_$_state_machine__27890__auto____1 = (function (state_28472){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28489){if((e28489 instanceof Object)){
var ex__27893__auto__ = e28489;
var statearr_28490_28502 = state_28472;
(statearr_28490_28502[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28503 = state_28472;
state_28472 = G__28503;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27890__auto__ = function(state_28472){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27890__auto____1.call(this,state_28472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27890__auto____0;
cljs$core$async$reduce_$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27890__auto____1;
return cljs$core$async$reduce_$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28491 = f__27987__auto__.call(null);
(statearr_28491[(6)] = c__27986__auto__);

return statearr_28491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28505 = arguments.length;
switch (G__28505) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28530){
var state_val_28531 = (state_28530[(1)]);
if((state_val_28531 === (7))){
var inst_28512 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28532_28553 = state_28530__$1;
(statearr_28532_28553[(2)] = inst_28512);

(statearr_28532_28553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (1))){
var inst_28506 = cljs.core.seq.call(null,coll);
var inst_28507 = inst_28506;
var state_28530__$1 = (function (){var statearr_28533 = state_28530;
(statearr_28533[(7)] = inst_28507);

return statearr_28533;
})();
var statearr_28534_28554 = state_28530__$1;
(statearr_28534_28554[(2)] = null);

(statearr_28534_28554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (4))){
var inst_28507 = (state_28530[(7)]);
var inst_28510 = cljs.core.first.call(null,inst_28507);
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28530__$1,(7),ch,inst_28510);
} else {
if((state_val_28531 === (13))){
var inst_28524 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28535_28555 = state_28530__$1;
(statearr_28535_28555[(2)] = inst_28524);

(statearr_28535_28555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (6))){
var inst_28515 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
if(cljs.core.truth_(inst_28515)){
var statearr_28536_28556 = state_28530__$1;
(statearr_28536_28556[(1)] = (8));

} else {
var statearr_28537_28557 = state_28530__$1;
(statearr_28537_28557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (3))){
var inst_28528 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28530__$1,inst_28528);
} else {
if((state_val_28531 === (12))){
var state_28530__$1 = state_28530;
var statearr_28538_28558 = state_28530__$1;
(statearr_28538_28558[(2)] = null);

(statearr_28538_28558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (2))){
var inst_28507 = (state_28530[(7)]);
var state_28530__$1 = state_28530;
if(cljs.core.truth_(inst_28507)){
var statearr_28539_28559 = state_28530__$1;
(statearr_28539_28559[(1)] = (4));

} else {
var statearr_28540_28560 = state_28530__$1;
(statearr_28540_28560[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (11))){
var inst_28521 = cljs.core.async.close_BANG_.call(null,ch);
var state_28530__$1 = state_28530;
var statearr_28541_28561 = state_28530__$1;
(statearr_28541_28561[(2)] = inst_28521);

(statearr_28541_28561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (9))){
var state_28530__$1 = state_28530;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28542_28562 = state_28530__$1;
(statearr_28542_28562[(1)] = (11));

} else {
var statearr_28543_28563 = state_28530__$1;
(statearr_28543_28563[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (5))){
var inst_28507 = (state_28530[(7)]);
var state_28530__$1 = state_28530;
var statearr_28544_28564 = state_28530__$1;
(statearr_28544_28564[(2)] = inst_28507);

(statearr_28544_28564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (10))){
var inst_28526 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28545_28565 = state_28530__$1;
(statearr_28545_28565[(2)] = inst_28526);

(statearr_28545_28565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (8))){
var inst_28507 = (state_28530[(7)]);
var inst_28517 = cljs.core.next.call(null,inst_28507);
var inst_28507__$1 = inst_28517;
var state_28530__$1 = (function (){var statearr_28546 = state_28530;
(statearr_28546[(7)] = inst_28507__$1);

return statearr_28546;
})();
var statearr_28547_28566 = state_28530__$1;
(statearr_28547_28566[(2)] = null);

(statearr_28547_28566[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_28548 = [null,null,null,null,null,null,null,null];
(statearr_28548[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_28548[(1)] = (1));

return statearr_28548;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_28530){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28549){if((e28549 instanceof Object)){
var ex__27893__auto__ = e28549;
var statearr_28550_28567 = state_28530;
(statearr_28550_28567[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28568 = state_28530;
state_28530 = G__28568;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_28530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_28530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28551 = f__27987__auto__.call(null);
(statearr_28551[(6)] = c__27986__auto__);

return statearr_28551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_28569 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_28569.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28570 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_28570.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28571 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_28571.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28572 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_28572.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28573 = (function (ch,cs,meta28574){
this.ch = ch;
this.cs = cs;
this.meta28574 = meta28574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28575,meta28574__$1){
var self__ = this;
var _28575__$1 = this;
return (new cljs.core.async.t_cljs$core$async28573(self__.ch,self__.cs,meta28574__$1));
}));

(cljs.core.async.t_cljs$core$async28573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28575){
var self__ = this;
var _28575__$1 = this;
return self__.meta28574;
}));

(cljs.core.async.t_cljs$core$async28573.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28573.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28573.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28573.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28573.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28574","meta28574",-960720421,null)], null);
}));

(cljs.core.async.t_cljs$core$async28573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28573");

(cljs.core.async.t_cljs$core$async28573.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28573.
 */
cljs.core.async.__GT_t_cljs$core$async28573 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28573(ch__$1,cs__$1,meta28574){
return (new cljs.core.async.t_cljs$core$async28573(ch__$1,cs__$1,meta28574));
});

}

return (new cljs.core.async.t_cljs$core$async28573(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__27986__auto___28795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28710){
var state_val_28711 = (state_28710[(1)]);
if((state_val_28711 === (7))){
var inst_28706 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28712_28796 = state_28710__$1;
(statearr_28712_28796[(2)] = inst_28706);

(statearr_28712_28796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (20))){
var inst_28609 = (state_28710[(7)]);
var inst_28621 = cljs.core.first.call(null,inst_28609);
var inst_28622 = cljs.core.nth.call(null,inst_28621,(0),null);
var inst_28623 = cljs.core.nth.call(null,inst_28621,(1),null);
var state_28710__$1 = (function (){var statearr_28713 = state_28710;
(statearr_28713[(8)] = inst_28622);

return statearr_28713;
})();
if(cljs.core.truth_(inst_28623)){
var statearr_28714_28797 = state_28710__$1;
(statearr_28714_28797[(1)] = (22));

} else {
var statearr_28715_28798 = state_28710__$1;
(statearr_28715_28798[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (27))){
var inst_28653 = (state_28710[(9)]);
var inst_28578 = (state_28710[(10)]);
var inst_28658 = (state_28710[(11)]);
var inst_28651 = (state_28710[(12)]);
var inst_28658__$1 = cljs.core._nth.call(null,inst_28651,inst_28653);
var inst_28659 = cljs.core.async.put_BANG_.call(null,inst_28658__$1,inst_28578,done);
var state_28710__$1 = (function (){var statearr_28716 = state_28710;
(statearr_28716[(11)] = inst_28658__$1);

return statearr_28716;
})();
if(cljs.core.truth_(inst_28659)){
var statearr_28717_28799 = state_28710__$1;
(statearr_28717_28799[(1)] = (30));

} else {
var statearr_28718_28800 = state_28710__$1;
(statearr_28718_28800[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (1))){
var state_28710__$1 = state_28710;
var statearr_28719_28801 = state_28710__$1;
(statearr_28719_28801[(2)] = null);

(statearr_28719_28801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (24))){
var inst_28609 = (state_28710[(7)]);
var inst_28628 = (state_28710[(2)]);
var inst_28629 = cljs.core.next.call(null,inst_28609);
var inst_28587 = inst_28629;
var inst_28588 = null;
var inst_28589 = (0);
var inst_28590 = (0);
var state_28710__$1 = (function (){var statearr_28720 = state_28710;
(statearr_28720[(13)] = inst_28588);

(statearr_28720[(14)] = inst_28628);

(statearr_28720[(15)] = inst_28590);

(statearr_28720[(16)] = inst_28589);

(statearr_28720[(17)] = inst_28587);

return statearr_28720;
})();
var statearr_28721_28802 = state_28710__$1;
(statearr_28721_28802[(2)] = null);

(statearr_28721_28802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (39))){
var state_28710__$1 = state_28710;
var statearr_28725_28803 = state_28710__$1;
(statearr_28725_28803[(2)] = null);

(statearr_28725_28803[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (4))){
var inst_28578 = (state_28710[(10)]);
var inst_28578__$1 = (state_28710[(2)]);
var inst_28579 = (inst_28578__$1 == null);
var state_28710__$1 = (function (){var statearr_28726 = state_28710;
(statearr_28726[(10)] = inst_28578__$1);

return statearr_28726;
})();
if(cljs.core.truth_(inst_28579)){
var statearr_28727_28804 = state_28710__$1;
(statearr_28727_28804[(1)] = (5));

} else {
var statearr_28728_28805 = state_28710__$1;
(statearr_28728_28805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (15))){
var inst_28588 = (state_28710[(13)]);
var inst_28590 = (state_28710[(15)]);
var inst_28589 = (state_28710[(16)]);
var inst_28587 = (state_28710[(17)]);
var inst_28605 = (state_28710[(2)]);
var inst_28606 = (inst_28590 + (1));
var tmp28722 = inst_28588;
var tmp28723 = inst_28589;
var tmp28724 = inst_28587;
var inst_28587__$1 = tmp28724;
var inst_28588__$1 = tmp28722;
var inst_28589__$1 = tmp28723;
var inst_28590__$1 = inst_28606;
var state_28710__$1 = (function (){var statearr_28729 = state_28710;
(statearr_28729[(13)] = inst_28588__$1);

(statearr_28729[(18)] = inst_28605);

(statearr_28729[(15)] = inst_28590__$1);

(statearr_28729[(16)] = inst_28589__$1);

(statearr_28729[(17)] = inst_28587__$1);

return statearr_28729;
})();
var statearr_28730_28806 = state_28710__$1;
(statearr_28730_28806[(2)] = null);

(statearr_28730_28806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (21))){
var inst_28632 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28734_28807 = state_28710__$1;
(statearr_28734_28807[(2)] = inst_28632);

(statearr_28734_28807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (31))){
var inst_28658 = (state_28710[(11)]);
var inst_28662 = done.call(null,null);
var inst_28663 = cljs.core.async.untap_STAR_.call(null,m,inst_28658);
var state_28710__$1 = (function (){var statearr_28735 = state_28710;
(statearr_28735[(19)] = inst_28662);

return statearr_28735;
})();
var statearr_28736_28808 = state_28710__$1;
(statearr_28736_28808[(2)] = inst_28663);

(statearr_28736_28808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (32))){
var inst_28653 = (state_28710[(9)]);
var inst_28652 = (state_28710[(20)]);
var inst_28650 = (state_28710[(21)]);
var inst_28651 = (state_28710[(12)]);
var inst_28665 = (state_28710[(2)]);
var inst_28666 = (inst_28653 + (1));
var tmp28731 = inst_28652;
var tmp28732 = inst_28650;
var tmp28733 = inst_28651;
var inst_28650__$1 = tmp28732;
var inst_28651__$1 = tmp28733;
var inst_28652__$1 = tmp28731;
var inst_28653__$1 = inst_28666;
var state_28710__$1 = (function (){var statearr_28737 = state_28710;
(statearr_28737[(9)] = inst_28653__$1);

(statearr_28737[(22)] = inst_28665);

(statearr_28737[(20)] = inst_28652__$1);

(statearr_28737[(21)] = inst_28650__$1);

(statearr_28737[(12)] = inst_28651__$1);

return statearr_28737;
})();
var statearr_28738_28809 = state_28710__$1;
(statearr_28738_28809[(2)] = null);

(statearr_28738_28809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (40))){
var inst_28678 = (state_28710[(23)]);
var inst_28682 = done.call(null,null);
var inst_28683 = cljs.core.async.untap_STAR_.call(null,m,inst_28678);
var state_28710__$1 = (function (){var statearr_28739 = state_28710;
(statearr_28739[(24)] = inst_28682);

return statearr_28739;
})();
var statearr_28740_28810 = state_28710__$1;
(statearr_28740_28810[(2)] = inst_28683);

(statearr_28740_28810[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (33))){
var inst_28669 = (state_28710[(25)]);
var inst_28671 = cljs.core.chunked_seq_QMARK_.call(null,inst_28669);
var state_28710__$1 = state_28710;
if(inst_28671){
var statearr_28741_28811 = state_28710__$1;
(statearr_28741_28811[(1)] = (36));

} else {
var statearr_28742_28812 = state_28710__$1;
(statearr_28742_28812[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (13))){
var inst_28599 = (state_28710[(26)]);
var inst_28602 = cljs.core.async.close_BANG_.call(null,inst_28599);
var state_28710__$1 = state_28710;
var statearr_28743_28813 = state_28710__$1;
(statearr_28743_28813[(2)] = inst_28602);

(statearr_28743_28813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (22))){
var inst_28622 = (state_28710[(8)]);
var inst_28625 = cljs.core.async.close_BANG_.call(null,inst_28622);
var state_28710__$1 = state_28710;
var statearr_28744_28814 = state_28710__$1;
(statearr_28744_28814[(2)] = inst_28625);

(statearr_28744_28814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (36))){
var inst_28669 = (state_28710[(25)]);
var inst_28673 = cljs.core.chunk_first.call(null,inst_28669);
var inst_28674 = cljs.core.chunk_rest.call(null,inst_28669);
var inst_28675 = cljs.core.count.call(null,inst_28673);
var inst_28650 = inst_28674;
var inst_28651 = inst_28673;
var inst_28652 = inst_28675;
var inst_28653 = (0);
var state_28710__$1 = (function (){var statearr_28745 = state_28710;
(statearr_28745[(9)] = inst_28653);

(statearr_28745[(20)] = inst_28652);

(statearr_28745[(21)] = inst_28650);

(statearr_28745[(12)] = inst_28651);

return statearr_28745;
})();
var statearr_28746_28815 = state_28710__$1;
(statearr_28746_28815[(2)] = null);

(statearr_28746_28815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (41))){
var inst_28669 = (state_28710[(25)]);
var inst_28685 = (state_28710[(2)]);
var inst_28686 = cljs.core.next.call(null,inst_28669);
var inst_28650 = inst_28686;
var inst_28651 = null;
var inst_28652 = (0);
var inst_28653 = (0);
var state_28710__$1 = (function (){var statearr_28747 = state_28710;
(statearr_28747[(9)] = inst_28653);

(statearr_28747[(20)] = inst_28652);

(statearr_28747[(21)] = inst_28650);

(statearr_28747[(27)] = inst_28685);

(statearr_28747[(12)] = inst_28651);

return statearr_28747;
})();
var statearr_28748_28816 = state_28710__$1;
(statearr_28748_28816[(2)] = null);

(statearr_28748_28816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (43))){
var state_28710__$1 = state_28710;
var statearr_28749_28817 = state_28710__$1;
(statearr_28749_28817[(2)] = null);

(statearr_28749_28817[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (29))){
var inst_28694 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28750_28818 = state_28710__$1;
(statearr_28750_28818[(2)] = inst_28694);

(statearr_28750_28818[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (44))){
var inst_28703 = (state_28710[(2)]);
var state_28710__$1 = (function (){var statearr_28751 = state_28710;
(statearr_28751[(28)] = inst_28703);

return statearr_28751;
})();
var statearr_28752_28819 = state_28710__$1;
(statearr_28752_28819[(2)] = null);

(statearr_28752_28819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (6))){
var inst_28642 = (state_28710[(29)]);
var inst_28641 = cljs.core.deref.call(null,cs);
var inst_28642__$1 = cljs.core.keys.call(null,inst_28641);
var inst_28643 = cljs.core.count.call(null,inst_28642__$1);
var inst_28644 = cljs.core.reset_BANG_.call(null,dctr,inst_28643);
var inst_28649 = cljs.core.seq.call(null,inst_28642__$1);
var inst_28650 = inst_28649;
var inst_28651 = null;
var inst_28652 = (0);
var inst_28653 = (0);
var state_28710__$1 = (function (){var statearr_28753 = state_28710;
(statearr_28753[(9)] = inst_28653);

(statearr_28753[(29)] = inst_28642__$1);

(statearr_28753[(20)] = inst_28652);

(statearr_28753[(21)] = inst_28650);

(statearr_28753[(12)] = inst_28651);

(statearr_28753[(30)] = inst_28644);

return statearr_28753;
})();
var statearr_28754_28820 = state_28710__$1;
(statearr_28754_28820[(2)] = null);

(statearr_28754_28820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (28))){
var inst_28650 = (state_28710[(21)]);
var inst_28669 = (state_28710[(25)]);
var inst_28669__$1 = cljs.core.seq.call(null,inst_28650);
var state_28710__$1 = (function (){var statearr_28755 = state_28710;
(statearr_28755[(25)] = inst_28669__$1);

return statearr_28755;
})();
if(inst_28669__$1){
var statearr_28756_28821 = state_28710__$1;
(statearr_28756_28821[(1)] = (33));

} else {
var statearr_28757_28822 = state_28710__$1;
(statearr_28757_28822[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (25))){
var inst_28653 = (state_28710[(9)]);
var inst_28652 = (state_28710[(20)]);
var inst_28655 = (inst_28653 < inst_28652);
var inst_28656 = inst_28655;
var state_28710__$1 = state_28710;
if(cljs.core.truth_(inst_28656)){
var statearr_28758_28823 = state_28710__$1;
(statearr_28758_28823[(1)] = (27));

} else {
var statearr_28759_28824 = state_28710__$1;
(statearr_28759_28824[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (34))){
var state_28710__$1 = state_28710;
var statearr_28760_28825 = state_28710__$1;
(statearr_28760_28825[(2)] = null);

(statearr_28760_28825[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (17))){
var state_28710__$1 = state_28710;
var statearr_28761_28826 = state_28710__$1;
(statearr_28761_28826[(2)] = null);

(statearr_28761_28826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (3))){
var inst_28708 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28710__$1,inst_28708);
} else {
if((state_val_28711 === (12))){
var inst_28637 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28762_28827 = state_28710__$1;
(statearr_28762_28827[(2)] = inst_28637);

(statearr_28762_28827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (2))){
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28710__$1,(4),ch);
} else {
if((state_val_28711 === (23))){
var state_28710__$1 = state_28710;
var statearr_28763_28828 = state_28710__$1;
(statearr_28763_28828[(2)] = null);

(statearr_28763_28828[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (35))){
var inst_28692 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28764_28829 = state_28710__$1;
(statearr_28764_28829[(2)] = inst_28692);

(statearr_28764_28829[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (19))){
var inst_28609 = (state_28710[(7)]);
var inst_28613 = cljs.core.chunk_first.call(null,inst_28609);
var inst_28614 = cljs.core.chunk_rest.call(null,inst_28609);
var inst_28615 = cljs.core.count.call(null,inst_28613);
var inst_28587 = inst_28614;
var inst_28588 = inst_28613;
var inst_28589 = inst_28615;
var inst_28590 = (0);
var state_28710__$1 = (function (){var statearr_28765 = state_28710;
(statearr_28765[(13)] = inst_28588);

(statearr_28765[(15)] = inst_28590);

(statearr_28765[(16)] = inst_28589);

(statearr_28765[(17)] = inst_28587);

return statearr_28765;
})();
var statearr_28766_28830 = state_28710__$1;
(statearr_28766_28830[(2)] = null);

(statearr_28766_28830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (11))){
var inst_28609 = (state_28710[(7)]);
var inst_28587 = (state_28710[(17)]);
var inst_28609__$1 = cljs.core.seq.call(null,inst_28587);
var state_28710__$1 = (function (){var statearr_28767 = state_28710;
(statearr_28767[(7)] = inst_28609__$1);

return statearr_28767;
})();
if(inst_28609__$1){
var statearr_28768_28831 = state_28710__$1;
(statearr_28768_28831[(1)] = (16));

} else {
var statearr_28769_28832 = state_28710__$1;
(statearr_28769_28832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (9))){
var inst_28639 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28770_28833 = state_28710__$1;
(statearr_28770_28833[(2)] = inst_28639);

(statearr_28770_28833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (5))){
var inst_28585 = cljs.core.deref.call(null,cs);
var inst_28586 = cljs.core.seq.call(null,inst_28585);
var inst_28587 = inst_28586;
var inst_28588 = null;
var inst_28589 = (0);
var inst_28590 = (0);
var state_28710__$1 = (function (){var statearr_28771 = state_28710;
(statearr_28771[(13)] = inst_28588);

(statearr_28771[(15)] = inst_28590);

(statearr_28771[(16)] = inst_28589);

(statearr_28771[(17)] = inst_28587);

return statearr_28771;
})();
var statearr_28772_28834 = state_28710__$1;
(statearr_28772_28834[(2)] = null);

(statearr_28772_28834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (14))){
var state_28710__$1 = state_28710;
var statearr_28773_28835 = state_28710__$1;
(statearr_28773_28835[(2)] = null);

(statearr_28773_28835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (45))){
var inst_28700 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28774_28836 = state_28710__$1;
(statearr_28774_28836[(2)] = inst_28700);

(statearr_28774_28836[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (26))){
var inst_28642 = (state_28710[(29)]);
var inst_28696 = (state_28710[(2)]);
var inst_28697 = cljs.core.seq.call(null,inst_28642);
var state_28710__$1 = (function (){var statearr_28775 = state_28710;
(statearr_28775[(31)] = inst_28696);

return statearr_28775;
})();
if(inst_28697){
var statearr_28776_28837 = state_28710__$1;
(statearr_28776_28837[(1)] = (42));

} else {
var statearr_28777_28838 = state_28710__$1;
(statearr_28777_28838[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (16))){
var inst_28609 = (state_28710[(7)]);
var inst_28611 = cljs.core.chunked_seq_QMARK_.call(null,inst_28609);
var state_28710__$1 = state_28710;
if(inst_28611){
var statearr_28778_28839 = state_28710__$1;
(statearr_28778_28839[(1)] = (19));

} else {
var statearr_28779_28840 = state_28710__$1;
(statearr_28779_28840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (38))){
var inst_28689 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28780_28841 = state_28710__$1;
(statearr_28780_28841[(2)] = inst_28689);

(statearr_28780_28841[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (30))){
var state_28710__$1 = state_28710;
var statearr_28781_28842 = state_28710__$1;
(statearr_28781_28842[(2)] = null);

(statearr_28781_28842[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (10))){
var inst_28588 = (state_28710[(13)]);
var inst_28590 = (state_28710[(15)]);
var inst_28598 = cljs.core._nth.call(null,inst_28588,inst_28590);
var inst_28599 = cljs.core.nth.call(null,inst_28598,(0),null);
var inst_28600 = cljs.core.nth.call(null,inst_28598,(1),null);
var state_28710__$1 = (function (){var statearr_28782 = state_28710;
(statearr_28782[(26)] = inst_28599);

return statearr_28782;
})();
if(cljs.core.truth_(inst_28600)){
var statearr_28783_28843 = state_28710__$1;
(statearr_28783_28843[(1)] = (13));

} else {
var statearr_28784_28844 = state_28710__$1;
(statearr_28784_28844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (18))){
var inst_28635 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28785_28845 = state_28710__$1;
(statearr_28785_28845[(2)] = inst_28635);

(statearr_28785_28845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (42))){
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28710__$1,(45),dchan);
} else {
if((state_val_28711 === (37))){
var inst_28678 = (state_28710[(23)]);
var inst_28578 = (state_28710[(10)]);
var inst_28669 = (state_28710[(25)]);
var inst_28678__$1 = cljs.core.first.call(null,inst_28669);
var inst_28679 = cljs.core.async.put_BANG_.call(null,inst_28678__$1,inst_28578,done);
var state_28710__$1 = (function (){var statearr_28786 = state_28710;
(statearr_28786[(23)] = inst_28678__$1);

return statearr_28786;
})();
if(cljs.core.truth_(inst_28679)){
var statearr_28787_28846 = state_28710__$1;
(statearr_28787_28846[(1)] = (39));

} else {
var statearr_28788_28847 = state_28710__$1;
(statearr_28788_28847[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (8))){
var inst_28590 = (state_28710[(15)]);
var inst_28589 = (state_28710[(16)]);
var inst_28592 = (inst_28590 < inst_28589);
var inst_28593 = inst_28592;
var state_28710__$1 = state_28710;
if(cljs.core.truth_(inst_28593)){
var statearr_28789_28848 = state_28710__$1;
(statearr_28789_28848[(1)] = (10));

} else {
var statearr_28790_28849 = state_28710__$1;
(statearr_28790_28849[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27890__auto__ = null;
var cljs$core$async$mult_$_state_machine__27890__auto____0 = (function (){
var statearr_28791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28791[(0)] = cljs$core$async$mult_$_state_machine__27890__auto__);

(statearr_28791[(1)] = (1));

return statearr_28791;
});
var cljs$core$async$mult_$_state_machine__27890__auto____1 = (function (state_28710){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28792){if((e28792 instanceof Object)){
var ex__27893__auto__ = e28792;
var statearr_28793_28850 = state_28710;
(statearr_28793_28850[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28851 = state_28710;
state_28710 = G__28851;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27890__auto__ = function(state_28710){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27890__auto____1.call(this,state_28710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27890__auto____0;
cljs$core$async$mult_$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27890__auto____1;
return cljs$core$async$mult_$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28794 = f__27987__auto__.call(null);
(statearr_28794[(6)] = c__27986__auto___28795);

return statearr_28794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28853 = arguments.length;
switch (G__28853) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_28855 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_28855.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28856 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_28856.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28857 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28857.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28858 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,state_map);
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_28858.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28859 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,mode);
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28859.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28869 = arguments.length;
var i__4865__auto___28870 = (0);
while(true){
if((i__4865__auto___28870 < len__4864__auto___28869)){
args__4870__auto__.push((arguments[i__4865__auto___28870]));

var G__28871 = (i__4865__auto___28870 + (1));
i__4865__auto___28870 = G__28871;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28864){
var map__28865 = p__28864;
var map__28865__$1 = cljs.core.__destructure_map.call(null,map__28865);
var opts = map__28865__$1;
var statearr_28866_28872 = state;
(statearr_28866_28872[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28867_28873 = state;
(statearr_28867_28873[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28868_28874 = state;
(statearr_28868_28874[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28860){
var G__28861 = cljs.core.first.call(null,seq28860);
var seq28860__$1 = cljs.core.next.call(null,seq28860);
var G__28862 = cljs.core.first.call(null,seq28860__$1);
var seq28860__$2 = cljs.core.next.call(null,seq28860__$1);
var G__28863 = cljs.core.first.call(null,seq28860__$2);
var seq28860__$3 = cljs.core.next.call(null,seq28860__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28861,G__28862,G__28863,seq28860__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28875 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28876){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28876 = meta28876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28877,meta28876__$1){
var self__ = this;
var _28877__$1 = this;
return (new cljs.core.async.t_cljs$core$async28875(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28876__$1));
}));

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28877){
var self__ = this;
var _28877__$1 = this;
return self__.meta28876;
}));

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28875.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28876","meta28876",-593150290,null)], null);
}));

(cljs.core.async.t_cljs$core$async28875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28875");

(cljs.core.async.t_cljs$core$async28875.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async28875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28875.
 */
cljs.core.async.__GT_t_cljs$core$async28875 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28875(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28876){
return (new cljs.core.async.t_cljs$core$async28875(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28876));
});

}

return (new cljs.core.async.t_cljs$core$async28875(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27986__auto___28989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_28945){
var state_val_28946 = (state_28945[(1)]);
if((state_val_28946 === (7))){
var inst_28905 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
if(cljs.core.truth_(inst_28905)){
var statearr_28947_28990 = state_28945__$1;
(statearr_28947_28990[(1)] = (8));

} else {
var statearr_28948_28991 = state_28945__$1;
(statearr_28948_28991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (20))){
var inst_28898 = (state_28945[(7)]);
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28945__$1,(23),out,inst_28898);
} else {
if((state_val_28946 === (1))){
var inst_28881 = calc_state.call(null);
var inst_28882 = cljs.core.__destructure_map.call(null,inst_28881);
var inst_28883 = cljs.core.get.call(null,inst_28882,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28884 = cljs.core.get.call(null,inst_28882,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28885 = cljs.core.get.call(null,inst_28882,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28886 = inst_28881;
var state_28945__$1 = (function (){var statearr_28949 = state_28945;
(statearr_28949[(8)] = inst_28885);

(statearr_28949[(9)] = inst_28883);

(statearr_28949[(10)] = inst_28884);

(statearr_28949[(11)] = inst_28886);

return statearr_28949;
})();
var statearr_28950_28992 = state_28945__$1;
(statearr_28950_28992[(2)] = null);

(statearr_28950_28992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (24))){
var inst_28889 = (state_28945[(12)]);
var inst_28886 = inst_28889;
var state_28945__$1 = (function (){var statearr_28951 = state_28945;
(statearr_28951[(11)] = inst_28886);

return statearr_28951;
})();
var statearr_28952_28993 = state_28945__$1;
(statearr_28952_28993[(2)] = null);

(statearr_28952_28993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (4))){
var inst_28900 = (state_28945[(13)]);
var inst_28898 = (state_28945[(7)]);
var inst_28897 = (state_28945[(2)]);
var inst_28898__$1 = cljs.core.nth.call(null,inst_28897,(0),null);
var inst_28899 = cljs.core.nth.call(null,inst_28897,(1),null);
var inst_28900__$1 = (inst_28898__$1 == null);
var state_28945__$1 = (function (){var statearr_28953 = state_28945;
(statearr_28953[(13)] = inst_28900__$1);

(statearr_28953[(7)] = inst_28898__$1);

(statearr_28953[(14)] = inst_28899);

return statearr_28953;
})();
if(cljs.core.truth_(inst_28900__$1)){
var statearr_28954_28994 = state_28945__$1;
(statearr_28954_28994[(1)] = (5));

} else {
var statearr_28955_28995 = state_28945__$1;
(statearr_28955_28995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (15))){
var inst_28890 = (state_28945[(15)]);
var inst_28919 = (state_28945[(16)]);
var inst_28919__$1 = cljs.core.empty_QMARK_.call(null,inst_28890);
var state_28945__$1 = (function (){var statearr_28956 = state_28945;
(statearr_28956[(16)] = inst_28919__$1);

return statearr_28956;
})();
if(inst_28919__$1){
var statearr_28957_28996 = state_28945__$1;
(statearr_28957_28996[(1)] = (17));

} else {
var statearr_28958_28997 = state_28945__$1;
(statearr_28958_28997[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (21))){
var inst_28889 = (state_28945[(12)]);
var inst_28886 = inst_28889;
var state_28945__$1 = (function (){var statearr_28959 = state_28945;
(statearr_28959[(11)] = inst_28886);

return statearr_28959;
})();
var statearr_28960_28998 = state_28945__$1;
(statearr_28960_28998[(2)] = null);

(statearr_28960_28998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (13))){
var inst_28912 = (state_28945[(2)]);
var inst_28913 = calc_state.call(null);
var inst_28886 = inst_28913;
var state_28945__$1 = (function (){var statearr_28961 = state_28945;
(statearr_28961[(11)] = inst_28886);

(statearr_28961[(17)] = inst_28912);

return statearr_28961;
})();
var statearr_28962_28999 = state_28945__$1;
(statearr_28962_28999[(2)] = null);

(statearr_28962_28999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (22))){
var inst_28939 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28963_29000 = state_28945__$1;
(statearr_28963_29000[(2)] = inst_28939);

(statearr_28963_29000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (6))){
var inst_28899 = (state_28945[(14)]);
var inst_28903 = cljs.core._EQ_.call(null,inst_28899,change);
var state_28945__$1 = state_28945;
var statearr_28964_29001 = state_28945__$1;
(statearr_28964_29001[(2)] = inst_28903);

(statearr_28964_29001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (25))){
var state_28945__$1 = state_28945;
var statearr_28965_29002 = state_28945__$1;
(statearr_28965_29002[(2)] = null);

(statearr_28965_29002[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (17))){
var inst_28891 = (state_28945[(18)]);
var inst_28899 = (state_28945[(14)]);
var inst_28921 = inst_28891.call(null,inst_28899);
var inst_28922 = cljs.core.not.call(null,inst_28921);
var state_28945__$1 = state_28945;
var statearr_28966_29003 = state_28945__$1;
(statearr_28966_29003[(2)] = inst_28922);

(statearr_28966_29003[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (3))){
var inst_28943 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28945__$1,inst_28943);
} else {
if((state_val_28946 === (12))){
var state_28945__$1 = state_28945;
var statearr_28967_29004 = state_28945__$1;
(statearr_28967_29004[(2)] = null);

(statearr_28967_29004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (2))){
var inst_28886 = (state_28945[(11)]);
var inst_28889 = (state_28945[(12)]);
var inst_28889__$1 = cljs.core.__destructure_map.call(null,inst_28886);
var inst_28890 = cljs.core.get.call(null,inst_28889__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28891 = cljs.core.get.call(null,inst_28889__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28892 = cljs.core.get.call(null,inst_28889__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28945__$1 = (function (){var statearr_28968 = state_28945;
(statearr_28968[(15)] = inst_28890);

(statearr_28968[(12)] = inst_28889__$1);

(statearr_28968[(18)] = inst_28891);

return statearr_28968;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28945__$1,(4),inst_28892);
} else {
if((state_val_28946 === (23))){
var inst_28930 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
if(cljs.core.truth_(inst_28930)){
var statearr_28969_29005 = state_28945__$1;
(statearr_28969_29005[(1)] = (24));

} else {
var statearr_28970_29006 = state_28945__$1;
(statearr_28970_29006[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (19))){
var inst_28925 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28971_29007 = state_28945__$1;
(statearr_28971_29007[(2)] = inst_28925);

(statearr_28971_29007[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (11))){
var inst_28899 = (state_28945[(14)]);
var inst_28909 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28899);
var state_28945__$1 = state_28945;
var statearr_28972_29008 = state_28945__$1;
(statearr_28972_29008[(2)] = inst_28909);

(statearr_28972_29008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (9))){
var inst_28890 = (state_28945[(15)]);
var inst_28899 = (state_28945[(14)]);
var inst_28916 = (state_28945[(19)]);
var inst_28916__$1 = inst_28890.call(null,inst_28899);
var state_28945__$1 = (function (){var statearr_28973 = state_28945;
(statearr_28973[(19)] = inst_28916__$1);

return statearr_28973;
})();
if(cljs.core.truth_(inst_28916__$1)){
var statearr_28974_29009 = state_28945__$1;
(statearr_28974_29009[(1)] = (14));

} else {
var statearr_28975_29010 = state_28945__$1;
(statearr_28975_29010[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (5))){
var inst_28900 = (state_28945[(13)]);
var state_28945__$1 = state_28945;
var statearr_28976_29011 = state_28945__$1;
(statearr_28976_29011[(2)] = inst_28900);

(statearr_28976_29011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (14))){
var inst_28916 = (state_28945[(19)]);
var state_28945__$1 = state_28945;
var statearr_28977_29012 = state_28945__$1;
(statearr_28977_29012[(2)] = inst_28916);

(statearr_28977_29012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (26))){
var inst_28935 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28978_29013 = state_28945__$1;
(statearr_28978_29013[(2)] = inst_28935);

(statearr_28978_29013[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (16))){
var inst_28927 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
if(cljs.core.truth_(inst_28927)){
var statearr_28979_29014 = state_28945__$1;
(statearr_28979_29014[(1)] = (20));

} else {
var statearr_28980_29015 = state_28945__$1;
(statearr_28980_29015[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (10))){
var inst_28941 = (state_28945[(2)]);
var state_28945__$1 = state_28945;
var statearr_28981_29016 = state_28945__$1;
(statearr_28981_29016[(2)] = inst_28941);

(statearr_28981_29016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (18))){
var inst_28919 = (state_28945[(16)]);
var state_28945__$1 = state_28945;
var statearr_28982_29017 = state_28945__$1;
(statearr_28982_29017[(2)] = inst_28919);

(statearr_28982_29017[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28946 === (8))){
var inst_28898 = (state_28945[(7)]);
var inst_28907 = (inst_28898 == null);
var state_28945__$1 = state_28945;
if(cljs.core.truth_(inst_28907)){
var statearr_28983_29018 = state_28945__$1;
(statearr_28983_29018[(1)] = (11));

} else {
var statearr_28984_29019 = state_28945__$1;
(statearr_28984_29019[(1)] = (12));

}

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
var cljs$core$async$mix_$_state_machine__27890__auto__ = null;
var cljs$core$async$mix_$_state_machine__27890__auto____0 = (function (){
var statearr_28985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28985[(0)] = cljs$core$async$mix_$_state_machine__27890__auto__);

(statearr_28985[(1)] = (1));

return statearr_28985;
});
var cljs$core$async$mix_$_state_machine__27890__auto____1 = (function (state_28945){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_28945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e28986){if((e28986 instanceof Object)){
var ex__27893__auto__ = e28986;
var statearr_28987_29020 = state_28945;
(statearr_28987_29020[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29021 = state_28945;
state_28945 = G__29021;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27890__auto__ = function(state_28945){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27890__auto____1.call(this,state_28945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27890__auto____0;
cljs$core$async$mix_$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27890__auto____1;
return cljs$core$async$mix_$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_28988 = f__27987__auto__.call(null);
(statearr_28988[(6)] = c__27986__auto___28989);

return statearr_28988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_29024 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29024.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29025 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29025.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29026 = (function() {
var G__29027 = null;
var G__29027__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__29027__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__29027 = function(p,v){
switch(arguments.length){
case 1:
return G__29027__1.call(this,p);
case 2:
return G__29027__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29027.cljs$core$IFn$_invoke$arity$1 = G__29027__1;
G__29027.cljs$core$IFn$_invoke$arity$2 = G__29027__2;
return G__29027;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29023 = arguments.length;
switch (G__29023) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29026.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29026.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29031 = arguments.length;
switch (G__29031) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__29029_SHARP_){
if(cljs.core.truth_(p1__29029_SHARP_.call(null,topic))){
return p1__29029_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29029_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29032 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29033){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29033 = meta29033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29034,meta29033__$1){
var self__ = this;
var _29034__$1 = this;
return (new cljs.core.async.t_cljs$core$async29032(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29033__$1));
}));

(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29034){
var self__ = this;
var _29034__$1 = this;
return self__.meta29033;
}));

(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29032.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29033","meta29033",1638078860,null)], null);
}));

(cljs.core.async.t_cljs$core$async29032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29032");

(cljs.core.async.t_cljs$core$async29032.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29032.
 */
cljs.core.async.__GT_t_cljs$core$async29032 = (function cljs$core$async$__GT_t_cljs$core$async29032(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29033){
return (new cljs.core.async.t_cljs$core$async29032(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29033));
});

}

return (new cljs.core.async.t_cljs$core$async29032(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27986__auto___29152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29106){
var state_val_29107 = (state_29106[(1)]);
if((state_val_29107 === (7))){
var inst_29102 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29108_29153 = state_29106__$1;
(statearr_29108_29153[(2)] = inst_29102);

(statearr_29108_29153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (20))){
var state_29106__$1 = state_29106;
var statearr_29109_29154 = state_29106__$1;
(statearr_29109_29154[(2)] = null);

(statearr_29109_29154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (1))){
var state_29106__$1 = state_29106;
var statearr_29110_29155 = state_29106__$1;
(statearr_29110_29155[(2)] = null);

(statearr_29110_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (24))){
var inst_29085 = (state_29106[(7)]);
var inst_29094 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29085);
var state_29106__$1 = state_29106;
var statearr_29111_29156 = state_29106__$1;
(statearr_29111_29156[(2)] = inst_29094);

(statearr_29111_29156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (4))){
var inst_29037 = (state_29106[(8)]);
var inst_29037__$1 = (state_29106[(2)]);
var inst_29038 = (inst_29037__$1 == null);
var state_29106__$1 = (function (){var statearr_29112 = state_29106;
(statearr_29112[(8)] = inst_29037__$1);

return statearr_29112;
})();
if(cljs.core.truth_(inst_29038)){
var statearr_29113_29157 = state_29106__$1;
(statearr_29113_29157[(1)] = (5));

} else {
var statearr_29114_29158 = state_29106__$1;
(statearr_29114_29158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (15))){
var inst_29079 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29115_29159 = state_29106__$1;
(statearr_29115_29159[(2)] = inst_29079);

(statearr_29115_29159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (21))){
var inst_29099 = (state_29106[(2)]);
var state_29106__$1 = (function (){var statearr_29116 = state_29106;
(statearr_29116[(9)] = inst_29099);

return statearr_29116;
})();
var statearr_29117_29160 = state_29106__$1;
(statearr_29117_29160[(2)] = null);

(statearr_29117_29160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (13))){
var inst_29061 = (state_29106[(10)]);
var inst_29063 = cljs.core.chunked_seq_QMARK_.call(null,inst_29061);
var state_29106__$1 = state_29106;
if(inst_29063){
var statearr_29118_29161 = state_29106__$1;
(statearr_29118_29161[(1)] = (16));

} else {
var statearr_29119_29162 = state_29106__$1;
(statearr_29119_29162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (22))){
var inst_29091 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
if(cljs.core.truth_(inst_29091)){
var statearr_29120_29163 = state_29106__$1;
(statearr_29120_29163[(1)] = (23));

} else {
var statearr_29121_29164 = state_29106__$1;
(statearr_29121_29164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (6))){
var inst_29037 = (state_29106[(8)]);
var inst_29085 = (state_29106[(7)]);
var inst_29087 = (state_29106[(11)]);
var inst_29085__$1 = topic_fn.call(null,inst_29037);
var inst_29086 = cljs.core.deref.call(null,mults);
var inst_29087__$1 = cljs.core.get.call(null,inst_29086,inst_29085__$1);
var state_29106__$1 = (function (){var statearr_29122 = state_29106;
(statearr_29122[(7)] = inst_29085__$1);

(statearr_29122[(11)] = inst_29087__$1);

return statearr_29122;
})();
if(cljs.core.truth_(inst_29087__$1)){
var statearr_29123_29165 = state_29106__$1;
(statearr_29123_29165[(1)] = (19));

} else {
var statearr_29124_29166 = state_29106__$1;
(statearr_29124_29166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (25))){
var inst_29096 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29125_29167 = state_29106__$1;
(statearr_29125_29167[(2)] = inst_29096);

(statearr_29125_29167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (17))){
var inst_29061 = (state_29106[(10)]);
var inst_29070 = cljs.core.first.call(null,inst_29061);
var inst_29071 = cljs.core.async.muxch_STAR_.call(null,inst_29070);
var inst_29072 = cljs.core.async.close_BANG_.call(null,inst_29071);
var inst_29073 = cljs.core.next.call(null,inst_29061);
var inst_29047 = inst_29073;
var inst_29048 = null;
var inst_29049 = (0);
var inst_29050 = (0);
var state_29106__$1 = (function (){var statearr_29126 = state_29106;
(statearr_29126[(12)] = inst_29049);

(statearr_29126[(13)] = inst_29047);

(statearr_29126[(14)] = inst_29048);

(statearr_29126[(15)] = inst_29050);

(statearr_29126[(16)] = inst_29072);

return statearr_29126;
})();
var statearr_29127_29168 = state_29106__$1;
(statearr_29127_29168[(2)] = null);

(statearr_29127_29168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (3))){
var inst_29104 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29106__$1,inst_29104);
} else {
if((state_val_29107 === (12))){
var inst_29081 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29128_29169 = state_29106__$1;
(statearr_29128_29169[(2)] = inst_29081);

(statearr_29128_29169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (2))){
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29106__$1,(4),ch);
} else {
if((state_val_29107 === (23))){
var state_29106__$1 = state_29106;
var statearr_29129_29170 = state_29106__$1;
(statearr_29129_29170[(2)] = null);

(statearr_29129_29170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (19))){
var inst_29037 = (state_29106[(8)]);
var inst_29087 = (state_29106[(11)]);
var inst_29089 = cljs.core.async.muxch_STAR_.call(null,inst_29087);
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29106__$1,(22),inst_29089,inst_29037);
} else {
if((state_val_29107 === (11))){
var inst_29047 = (state_29106[(13)]);
var inst_29061 = (state_29106[(10)]);
var inst_29061__$1 = cljs.core.seq.call(null,inst_29047);
var state_29106__$1 = (function (){var statearr_29130 = state_29106;
(statearr_29130[(10)] = inst_29061__$1);

return statearr_29130;
})();
if(inst_29061__$1){
var statearr_29131_29171 = state_29106__$1;
(statearr_29131_29171[(1)] = (13));

} else {
var statearr_29132_29172 = state_29106__$1;
(statearr_29132_29172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (9))){
var inst_29083 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29133_29173 = state_29106__$1;
(statearr_29133_29173[(2)] = inst_29083);

(statearr_29133_29173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (5))){
var inst_29044 = cljs.core.deref.call(null,mults);
var inst_29045 = cljs.core.vals.call(null,inst_29044);
var inst_29046 = cljs.core.seq.call(null,inst_29045);
var inst_29047 = inst_29046;
var inst_29048 = null;
var inst_29049 = (0);
var inst_29050 = (0);
var state_29106__$1 = (function (){var statearr_29134 = state_29106;
(statearr_29134[(12)] = inst_29049);

(statearr_29134[(13)] = inst_29047);

(statearr_29134[(14)] = inst_29048);

(statearr_29134[(15)] = inst_29050);

return statearr_29134;
})();
var statearr_29135_29174 = state_29106__$1;
(statearr_29135_29174[(2)] = null);

(statearr_29135_29174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (14))){
var state_29106__$1 = state_29106;
var statearr_29139_29175 = state_29106__$1;
(statearr_29139_29175[(2)] = null);

(statearr_29139_29175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (16))){
var inst_29061 = (state_29106[(10)]);
var inst_29065 = cljs.core.chunk_first.call(null,inst_29061);
var inst_29066 = cljs.core.chunk_rest.call(null,inst_29061);
var inst_29067 = cljs.core.count.call(null,inst_29065);
var inst_29047 = inst_29066;
var inst_29048 = inst_29065;
var inst_29049 = inst_29067;
var inst_29050 = (0);
var state_29106__$1 = (function (){var statearr_29140 = state_29106;
(statearr_29140[(12)] = inst_29049);

(statearr_29140[(13)] = inst_29047);

(statearr_29140[(14)] = inst_29048);

(statearr_29140[(15)] = inst_29050);

return statearr_29140;
})();
var statearr_29141_29176 = state_29106__$1;
(statearr_29141_29176[(2)] = null);

(statearr_29141_29176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (10))){
var inst_29049 = (state_29106[(12)]);
var inst_29047 = (state_29106[(13)]);
var inst_29048 = (state_29106[(14)]);
var inst_29050 = (state_29106[(15)]);
var inst_29055 = cljs.core._nth.call(null,inst_29048,inst_29050);
var inst_29056 = cljs.core.async.muxch_STAR_.call(null,inst_29055);
var inst_29057 = cljs.core.async.close_BANG_.call(null,inst_29056);
var inst_29058 = (inst_29050 + (1));
var tmp29136 = inst_29049;
var tmp29137 = inst_29047;
var tmp29138 = inst_29048;
var inst_29047__$1 = tmp29137;
var inst_29048__$1 = tmp29138;
var inst_29049__$1 = tmp29136;
var inst_29050__$1 = inst_29058;
var state_29106__$1 = (function (){var statearr_29142 = state_29106;
(statearr_29142[(17)] = inst_29057);

(statearr_29142[(12)] = inst_29049__$1);

(statearr_29142[(13)] = inst_29047__$1);

(statearr_29142[(14)] = inst_29048__$1);

(statearr_29142[(15)] = inst_29050__$1);

return statearr_29142;
})();
var statearr_29143_29177 = state_29106__$1;
(statearr_29143_29177[(2)] = null);

(statearr_29143_29177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (18))){
var inst_29076 = (state_29106[(2)]);
var state_29106__$1 = state_29106;
var statearr_29144_29178 = state_29106__$1;
(statearr_29144_29178[(2)] = inst_29076);

(statearr_29144_29178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (8))){
var inst_29049 = (state_29106[(12)]);
var inst_29050 = (state_29106[(15)]);
var inst_29052 = (inst_29050 < inst_29049);
var inst_29053 = inst_29052;
var state_29106__$1 = state_29106;
if(cljs.core.truth_(inst_29053)){
var statearr_29145_29179 = state_29106__$1;
(statearr_29145_29179[(1)] = (10));

} else {
var statearr_29146_29180 = state_29106__$1;
(statearr_29146_29180[(1)] = (11));

}

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
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_29147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29147[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_29147[(1)] = (1));

return statearr_29147;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_29106){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29148){if((e29148 instanceof Object)){
var ex__27893__auto__ = e29148;
var statearr_29149_29181 = state_29106;
(statearr_29149_29181[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29182 = state_29106;
state_29106 = G__29182;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_29106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_29106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29150 = f__27987__auto__.call(null);
(statearr_29150[(6)] = c__27986__auto___29152);

return statearr_29150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29184 = arguments.length;
switch (G__29184) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29187 = arguments.length;
switch (G__29187) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29190 = arguments.length;
switch (G__29190) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__27986__auto___29257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29229){
var state_val_29230 = (state_29229[(1)]);
if((state_val_29230 === (7))){
var state_29229__$1 = state_29229;
var statearr_29231_29258 = state_29229__$1;
(statearr_29231_29258[(2)] = null);

(statearr_29231_29258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (1))){
var state_29229__$1 = state_29229;
var statearr_29232_29259 = state_29229__$1;
(statearr_29232_29259[(2)] = null);

(statearr_29232_29259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (4))){
var inst_29193 = (state_29229[(7)]);
var inst_29195 = (inst_29193 < cnt);
var state_29229__$1 = state_29229;
if(cljs.core.truth_(inst_29195)){
var statearr_29233_29260 = state_29229__$1;
(statearr_29233_29260[(1)] = (6));

} else {
var statearr_29234_29261 = state_29229__$1;
(statearr_29234_29261[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (15))){
var inst_29225 = (state_29229[(2)]);
var state_29229__$1 = state_29229;
var statearr_29235_29262 = state_29229__$1;
(statearr_29235_29262[(2)] = inst_29225);

(statearr_29235_29262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (13))){
var inst_29218 = cljs.core.async.close_BANG_.call(null,out);
var state_29229__$1 = state_29229;
var statearr_29236_29263 = state_29229__$1;
(statearr_29236_29263[(2)] = inst_29218);

(statearr_29236_29263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (6))){
var state_29229__$1 = state_29229;
var statearr_29237_29264 = state_29229__$1;
(statearr_29237_29264[(2)] = null);

(statearr_29237_29264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (3))){
var inst_29227 = (state_29229[(2)]);
var state_29229__$1 = state_29229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29229__$1,inst_29227);
} else {
if((state_val_29230 === (12))){
var inst_29215 = (state_29229[(8)]);
var inst_29215__$1 = (state_29229[(2)]);
var inst_29216 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29215__$1);
var state_29229__$1 = (function (){var statearr_29238 = state_29229;
(statearr_29238[(8)] = inst_29215__$1);

return statearr_29238;
})();
if(cljs.core.truth_(inst_29216)){
var statearr_29239_29265 = state_29229__$1;
(statearr_29239_29265[(1)] = (13));

} else {
var statearr_29240_29266 = state_29229__$1;
(statearr_29240_29266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (2))){
var inst_29192 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29193 = (0);
var state_29229__$1 = (function (){var statearr_29241 = state_29229;
(statearr_29241[(9)] = inst_29192);

(statearr_29241[(7)] = inst_29193);

return statearr_29241;
})();
var statearr_29242_29267 = state_29229__$1;
(statearr_29242_29267[(2)] = null);

(statearr_29242_29267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (11))){
var inst_29193 = (state_29229[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29229,(10),Object,null,(9));
var inst_29202 = chs__$1.call(null,inst_29193);
var inst_29203 = done.call(null,inst_29193);
var inst_29204 = cljs.core.async.take_BANG_.call(null,inst_29202,inst_29203);
var state_29229__$1 = state_29229;
var statearr_29243_29268 = state_29229__$1;
(statearr_29243_29268[(2)] = inst_29204);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (9))){
var inst_29193 = (state_29229[(7)]);
var inst_29206 = (state_29229[(2)]);
var inst_29207 = (inst_29193 + (1));
var inst_29193__$1 = inst_29207;
var state_29229__$1 = (function (){var statearr_29244 = state_29229;
(statearr_29244[(10)] = inst_29206);

(statearr_29244[(7)] = inst_29193__$1);

return statearr_29244;
})();
var statearr_29245_29269 = state_29229__$1;
(statearr_29245_29269[(2)] = null);

(statearr_29245_29269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (5))){
var inst_29213 = (state_29229[(2)]);
var state_29229__$1 = (function (){var statearr_29246 = state_29229;
(statearr_29246[(11)] = inst_29213);

return statearr_29246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29229__$1,(12),dchan);
} else {
if((state_val_29230 === (14))){
var inst_29215 = (state_29229[(8)]);
var inst_29220 = cljs.core.apply.call(null,f,inst_29215);
var state_29229__$1 = state_29229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29229__$1,(16),out,inst_29220);
} else {
if((state_val_29230 === (16))){
var inst_29222 = (state_29229[(2)]);
var state_29229__$1 = (function (){var statearr_29247 = state_29229;
(statearr_29247[(12)] = inst_29222);

return statearr_29247;
})();
var statearr_29248_29270 = state_29229__$1;
(statearr_29248_29270[(2)] = null);

(statearr_29248_29270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (10))){
var inst_29197 = (state_29229[(2)]);
var inst_29198 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29229__$1 = (function (){var statearr_29249 = state_29229;
(statearr_29249[(13)] = inst_29197);

return statearr_29249;
})();
var statearr_29250_29271 = state_29229__$1;
(statearr_29250_29271[(2)] = inst_29198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (8))){
var inst_29211 = (state_29229[(2)]);
var state_29229__$1 = state_29229;
var statearr_29251_29272 = state_29229__$1;
(statearr_29251_29272[(2)] = inst_29211);

(statearr_29251_29272[(1)] = (5));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_29252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29252[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_29252[(1)] = (1));

return statearr_29252;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_29229){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29253){if((e29253 instanceof Object)){
var ex__27893__auto__ = e29253;
var statearr_29254_29273 = state_29229;
(statearr_29254_29273[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29274 = state_29229;
state_29229 = G__29274;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_29229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_29229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29255 = f__27987__auto__.call(null);
(statearr_29255[(6)] = c__27986__auto___29257);

return statearr_29255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29277 = arguments.length;
switch (G__29277) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27986__auto___29331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29309){
var state_val_29310 = (state_29309[(1)]);
if((state_val_29310 === (7))){
var inst_29289 = (state_29309[(7)]);
var inst_29288 = (state_29309[(8)]);
var inst_29288__$1 = (state_29309[(2)]);
var inst_29289__$1 = cljs.core.nth.call(null,inst_29288__$1,(0),null);
var inst_29290 = cljs.core.nth.call(null,inst_29288__$1,(1),null);
var inst_29291 = (inst_29289__$1 == null);
var state_29309__$1 = (function (){var statearr_29311 = state_29309;
(statearr_29311[(9)] = inst_29290);

(statearr_29311[(7)] = inst_29289__$1);

(statearr_29311[(8)] = inst_29288__$1);

return statearr_29311;
})();
if(cljs.core.truth_(inst_29291)){
var statearr_29312_29332 = state_29309__$1;
(statearr_29312_29332[(1)] = (8));

} else {
var statearr_29313_29333 = state_29309__$1;
(statearr_29313_29333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (1))){
var inst_29278 = cljs.core.vec.call(null,chs);
var inst_29279 = inst_29278;
var state_29309__$1 = (function (){var statearr_29314 = state_29309;
(statearr_29314[(10)] = inst_29279);

return statearr_29314;
})();
var statearr_29315_29334 = state_29309__$1;
(statearr_29315_29334[(2)] = null);

(statearr_29315_29334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (4))){
var inst_29279 = (state_29309[(10)]);
var state_29309__$1 = state_29309;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29309__$1,(7),inst_29279);
} else {
if((state_val_29310 === (6))){
var inst_29305 = (state_29309[(2)]);
var state_29309__$1 = state_29309;
var statearr_29316_29335 = state_29309__$1;
(statearr_29316_29335[(2)] = inst_29305);

(statearr_29316_29335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (3))){
var inst_29307 = (state_29309[(2)]);
var state_29309__$1 = state_29309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29309__$1,inst_29307);
} else {
if((state_val_29310 === (2))){
var inst_29279 = (state_29309[(10)]);
var inst_29281 = cljs.core.count.call(null,inst_29279);
var inst_29282 = (inst_29281 > (0));
var state_29309__$1 = state_29309;
if(cljs.core.truth_(inst_29282)){
var statearr_29318_29336 = state_29309__$1;
(statearr_29318_29336[(1)] = (4));

} else {
var statearr_29319_29337 = state_29309__$1;
(statearr_29319_29337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (11))){
var inst_29279 = (state_29309[(10)]);
var inst_29298 = (state_29309[(2)]);
var tmp29317 = inst_29279;
var inst_29279__$1 = tmp29317;
var state_29309__$1 = (function (){var statearr_29320 = state_29309;
(statearr_29320[(10)] = inst_29279__$1);

(statearr_29320[(11)] = inst_29298);

return statearr_29320;
})();
var statearr_29321_29338 = state_29309__$1;
(statearr_29321_29338[(2)] = null);

(statearr_29321_29338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (9))){
var inst_29289 = (state_29309[(7)]);
var state_29309__$1 = state_29309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29309__$1,(11),out,inst_29289);
} else {
if((state_val_29310 === (5))){
var inst_29303 = cljs.core.async.close_BANG_.call(null,out);
var state_29309__$1 = state_29309;
var statearr_29322_29339 = state_29309__$1;
(statearr_29322_29339[(2)] = inst_29303);

(statearr_29322_29339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (10))){
var inst_29301 = (state_29309[(2)]);
var state_29309__$1 = state_29309;
var statearr_29323_29340 = state_29309__$1;
(statearr_29323_29340[(2)] = inst_29301);

(statearr_29323_29340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (8))){
var inst_29279 = (state_29309[(10)]);
var inst_29290 = (state_29309[(9)]);
var inst_29289 = (state_29309[(7)]);
var inst_29288 = (state_29309[(8)]);
var inst_29293 = (function (){var cs = inst_29279;
var vec__29284 = inst_29288;
var v = inst_29289;
var c = inst_29290;
return (function (p1__29275_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29275_SHARP_);
});
})();
var inst_29294 = cljs.core.filterv.call(null,inst_29293,inst_29279);
var inst_29279__$1 = inst_29294;
var state_29309__$1 = (function (){var statearr_29324 = state_29309;
(statearr_29324[(10)] = inst_29279__$1);

return statearr_29324;
})();
var statearr_29325_29341 = state_29309__$1;
(statearr_29325_29341[(2)] = null);

(statearr_29325_29341[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_29326 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29326[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_29326[(1)] = (1));

return statearr_29326;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_29309){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29327){if((e29327 instanceof Object)){
var ex__27893__auto__ = e29327;
var statearr_29328_29342 = state_29309;
(statearr_29328_29342[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29343 = state_29309;
state_29309 = G__29343;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_29309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_29309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29329 = f__27987__auto__.call(null);
(statearr_29329[(6)] = c__27986__auto___29331);

return statearr_29329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29345 = arguments.length;
switch (G__29345) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27986__auto___29390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29369){
var state_val_29370 = (state_29369[(1)]);
if((state_val_29370 === (7))){
var inst_29351 = (state_29369[(7)]);
var inst_29351__$1 = (state_29369[(2)]);
var inst_29352 = (inst_29351__$1 == null);
var inst_29353 = cljs.core.not.call(null,inst_29352);
var state_29369__$1 = (function (){var statearr_29371 = state_29369;
(statearr_29371[(7)] = inst_29351__$1);

return statearr_29371;
})();
if(inst_29353){
var statearr_29372_29391 = state_29369__$1;
(statearr_29372_29391[(1)] = (8));

} else {
var statearr_29373_29392 = state_29369__$1;
(statearr_29373_29392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (1))){
var inst_29346 = (0);
var state_29369__$1 = (function (){var statearr_29374 = state_29369;
(statearr_29374[(8)] = inst_29346);

return statearr_29374;
})();
var statearr_29375_29393 = state_29369__$1;
(statearr_29375_29393[(2)] = null);

(statearr_29375_29393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (4))){
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29369__$1,(7),ch);
} else {
if((state_val_29370 === (6))){
var inst_29364 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29376_29394 = state_29369__$1;
(statearr_29376_29394[(2)] = inst_29364);

(statearr_29376_29394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (3))){
var inst_29366 = (state_29369[(2)]);
var inst_29367 = cljs.core.async.close_BANG_.call(null,out);
var state_29369__$1 = (function (){var statearr_29377 = state_29369;
(statearr_29377[(9)] = inst_29366);

return statearr_29377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29369__$1,inst_29367);
} else {
if((state_val_29370 === (2))){
var inst_29346 = (state_29369[(8)]);
var inst_29348 = (inst_29346 < n);
var state_29369__$1 = state_29369;
if(cljs.core.truth_(inst_29348)){
var statearr_29378_29395 = state_29369__$1;
(statearr_29378_29395[(1)] = (4));

} else {
var statearr_29379_29396 = state_29369__$1;
(statearr_29379_29396[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (11))){
var inst_29346 = (state_29369[(8)]);
var inst_29356 = (state_29369[(2)]);
var inst_29357 = (inst_29346 + (1));
var inst_29346__$1 = inst_29357;
var state_29369__$1 = (function (){var statearr_29380 = state_29369;
(statearr_29380[(8)] = inst_29346__$1);

(statearr_29380[(10)] = inst_29356);

return statearr_29380;
})();
var statearr_29381_29397 = state_29369__$1;
(statearr_29381_29397[(2)] = null);

(statearr_29381_29397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (9))){
var state_29369__$1 = state_29369;
var statearr_29382_29398 = state_29369__$1;
(statearr_29382_29398[(2)] = null);

(statearr_29382_29398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (5))){
var state_29369__$1 = state_29369;
var statearr_29383_29399 = state_29369__$1;
(statearr_29383_29399[(2)] = null);

(statearr_29383_29399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (10))){
var inst_29361 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29384_29400 = state_29369__$1;
(statearr_29384_29400[(2)] = inst_29361);

(statearr_29384_29400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (8))){
var inst_29351 = (state_29369[(7)]);
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29369__$1,(11),out,inst_29351);
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
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_29385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29385[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_29385[(1)] = (1));

return statearr_29385;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_29369){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29386){if((e29386 instanceof Object)){
var ex__27893__auto__ = e29386;
var statearr_29387_29401 = state_29369;
(statearr_29387_29401[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29402 = state_29369;
state_29369 = G__29402;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_29369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_29369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29388 = f__27987__auto__.call(null);
(statearr_29388[(6)] = c__27986__auto___29390);

return statearr_29388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29404 = (function (f,ch,meta29405){
this.f = f;
this.ch = ch;
this.meta29405 = meta29405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29406,meta29405__$1){
var self__ = this;
var _29406__$1 = this;
return (new cljs.core.async.t_cljs$core$async29404(self__.f,self__.ch,meta29405__$1));
}));

(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29406){
var self__ = this;
var _29406__$1 = this;
return self__.meta29405;
}));

(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29407 = (function (f,ch,meta29405,_,fn1,meta29408){
this.f = f;
this.ch = ch;
this.meta29405 = meta29405;
this._ = _;
this.fn1 = fn1;
this.meta29408 = meta29408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29409,meta29408__$1){
var self__ = this;
var _29409__$1 = this;
return (new cljs.core.async.t_cljs$core$async29407(self__.f,self__.ch,self__.meta29405,self__._,self__.fn1,meta29408__$1));
}));

(cljs.core.async.t_cljs$core$async29407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29409){
var self__ = this;
var _29409__$1 = this;
return self__.meta29408;
}));

(cljs.core.async.t_cljs$core$async29407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__29403_SHARP_){
return f1.call(null,(((p1__29403_SHARP_ == null))?null:self__.f.call(null,p1__29403_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async29407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29405","meta29405",2128157053,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29404","cljs.core.async/t_cljs$core$async29404",-1516121846,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29408","meta29408",-213066702,null)], null);
}));

(cljs.core.async.t_cljs$core$async29407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29407");

(cljs.core.async.t_cljs$core$async29407.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29407.
 */
cljs.core.async.__GT_t_cljs$core$async29407 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29407(f__$1,ch__$1,meta29405__$1,___$2,fn1__$1,meta29408){
return (new cljs.core.async.t_cljs$core$async29407(f__$1,ch__$1,meta29405__$1,___$2,fn1__$1,meta29408));
});

}

return (new cljs.core.async.t_cljs$core$async29407(self__.f,self__.ch,self__.meta29405,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29405","meta29405",2128157053,null)], null);
}));

(cljs.core.async.t_cljs$core$async29404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29404");

(cljs.core.async.t_cljs$core$async29404.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29404.
 */
cljs.core.async.__GT_t_cljs$core$async29404 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29404(f__$1,ch__$1,meta29405){
return (new cljs.core.async.t_cljs$core$async29404(f__$1,ch__$1,meta29405));
});

}

return (new cljs.core.async.t_cljs$core$async29404(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29410 = (function (f,ch,meta29411){
this.f = f;
this.ch = ch;
this.meta29411 = meta29411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29412,meta29411__$1){
var self__ = this;
var _29412__$1 = this;
return (new cljs.core.async.t_cljs$core$async29410(self__.f,self__.ch,meta29411__$1));
}));

(cljs.core.async.t_cljs$core$async29410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29412){
var self__ = this;
var _29412__$1 = this;
return self__.meta29411;
}));

(cljs.core.async.t_cljs$core$async29410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async29410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29411","meta29411",-2084107805,null)], null);
}));

(cljs.core.async.t_cljs$core$async29410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29410");

(cljs.core.async.t_cljs$core$async29410.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29410.
 */
cljs.core.async.__GT_t_cljs$core$async29410 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29410(f__$1,ch__$1,meta29411){
return (new cljs.core.async.t_cljs$core$async29410(f__$1,ch__$1,meta29411));
});

}

return (new cljs.core.async.t_cljs$core$async29410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29413 = (function (p,ch,meta29414){
this.p = p;
this.ch = ch;
this.meta29414 = meta29414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29415,meta29414__$1){
var self__ = this;
var _29415__$1 = this;
return (new cljs.core.async.t_cljs$core$async29413(self__.p,self__.ch,meta29414__$1));
}));

(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29415){
var self__ = this;
var _29415__$1 = this;
return self__.meta29414;
}));

(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29414","meta29414",-1717059025,null)], null);
}));

(cljs.core.async.t_cljs$core$async29413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29413");

(cljs.core.async.t_cljs$core$async29413.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29413.
 */
cljs.core.async.__GT_t_cljs$core$async29413 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29413(p__$1,ch__$1,meta29414){
return (new cljs.core.async.t_cljs$core$async29413(p__$1,ch__$1,meta29414));
});

}

return (new cljs.core.async.t_cljs$core$async29413(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29417 = arguments.length;
switch (G__29417) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27986__auto___29457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29438){
var state_val_29439 = (state_29438[(1)]);
if((state_val_29439 === (7))){
var inst_29434 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
var statearr_29440_29458 = state_29438__$1;
(statearr_29440_29458[(2)] = inst_29434);

(statearr_29440_29458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (1))){
var state_29438__$1 = state_29438;
var statearr_29441_29459 = state_29438__$1;
(statearr_29441_29459[(2)] = null);

(statearr_29441_29459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (4))){
var inst_29420 = (state_29438[(7)]);
var inst_29420__$1 = (state_29438[(2)]);
var inst_29421 = (inst_29420__$1 == null);
var state_29438__$1 = (function (){var statearr_29442 = state_29438;
(statearr_29442[(7)] = inst_29420__$1);

return statearr_29442;
})();
if(cljs.core.truth_(inst_29421)){
var statearr_29443_29460 = state_29438__$1;
(statearr_29443_29460[(1)] = (5));

} else {
var statearr_29444_29461 = state_29438__$1;
(statearr_29444_29461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (6))){
var inst_29420 = (state_29438[(7)]);
var inst_29425 = p.call(null,inst_29420);
var state_29438__$1 = state_29438;
if(cljs.core.truth_(inst_29425)){
var statearr_29445_29462 = state_29438__$1;
(statearr_29445_29462[(1)] = (8));

} else {
var statearr_29446_29463 = state_29438__$1;
(statearr_29446_29463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (3))){
var inst_29436 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29438__$1,inst_29436);
} else {
if((state_val_29439 === (2))){
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29438__$1,(4),ch);
} else {
if((state_val_29439 === (11))){
var inst_29428 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
var statearr_29447_29464 = state_29438__$1;
(statearr_29447_29464[(2)] = inst_29428);

(statearr_29447_29464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (9))){
var state_29438__$1 = state_29438;
var statearr_29448_29465 = state_29438__$1;
(statearr_29448_29465[(2)] = null);

(statearr_29448_29465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (5))){
var inst_29423 = cljs.core.async.close_BANG_.call(null,out);
var state_29438__$1 = state_29438;
var statearr_29449_29466 = state_29438__$1;
(statearr_29449_29466[(2)] = inst_29423);

(statearr_29449_29466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (10))){
var inst_29431 = (state_29438[(2)]);
var state_29438__$1 = (function (){var statearr_29450 = state_29438;
(statearr_29450[(8)] = inst_29431);

return statearr_29450;
})();
var statearr_29451_29467 = state_29438__$1;
(statearr_29451_29467[(2)] = null);

(statearr_29451_29467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (8))){
var inst_29420 = (state_29438[(7)]);
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29438__$1,(11),out,inst_29420);
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
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_29452 = [null,null,null,null,null,null,null,null,null];
(statearr_29452[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_29452[(1)] = (1));

return statearr_29452;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_29438){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29453){if((e29453 instanceof Object)){
var ex__27893__auto__ = e29453;
var statearr_29454_29468 = state_29438;
(statearr_29454_29468[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29469 = state_29438;
state_29438 = G__29469;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_29438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_29438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29455 = f__27987__auto__.call(null);
(statearr_29455[(6)] = c__27986__auto___29457);

return statearr_29455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29471 = arguments.length;
switch (G__29471) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27986__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29534){
var state_val_29535 = (state_29534[(1)]);
if((state_val_29535 === (7))){
var inst_29530 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
var statearr_29536_29574 = state_29534__$1;
(statearr_29536_29574[(2)] = inst_29530);

(statearr_29536_29574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (20))){
var inst_29500 = (state_29534[(7)]);
var inst_29511 = (state_29534[(2)]);
var inst_29512 = cljs.core.next.call(null,inst_29500);
var inst_29486 = inst_29512;
var inst_29487 = null;
var inst_29488 = (0);
var inst_29489 = (0);
var state_29534__$1 = (function (){var statearr_29537 = state_29534;
(statearr_29537[(8)] = inst_29486);

(statearr_29537[(9)] = inst_29487);

(statearr_29537[(10)] = inst_29488);

(statearr_29537[(11)] = inst_29511);

(statearr_29537[(12)] = inst_29489);

return statearr_29537;
})();
var statearr_29538_29575 = state_29534__$1;
(statearr_29538_29575[(2)] = null);

(statearr_29538_29575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (1))){
var state_29534__$1 = state_29534;
var statearr_29539_29576 = state_29534__$1;
(statearr_29539_29576[(2)] = null);

(statearr_29539_29576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (4))){
var inst_29475 = (state_29534[(13)]);
var inst_29475__$1 = (state_29534[(2)]);
var inst_29476 = (inst_29475__$1 == null);
var state_29534__$1 = (function (){var statearr_29540 = state_29534;
(statearr_29540[(13)] = inst_29475__$1);

return statearr_29540;
})();
if(cljs.core.truth_(inst_29476)){
var statearr_29541_29577 = state_29534__$1;
(statearr_29541_29577[(1)] = (5));

} else {
var statearr_29542_29578 = state_29534__$1;
(statearr_29542_29578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (15))){
var state_29534__$1 = state_29534;
var statearr_29546_29579 = state_29534__$1;
(statearr_29546_29579[(2)] = null);

(statearr_29546_29579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (21))){
var state_29534__$1 = state_29534;
var statearr_29547_29580 = state_29534__$1;
(statearr_29547_29580[(2)] = null);

(statearr_29547_29580[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (13))){
var inst_29486 = (state_29534[(8)]);
var inst_29487 = (state_29534[(9)]);
var inst_29488 = (state_29534[(10)]);
var inst_29489 = (state_29534[(12)]);
var inst_29496 = (state_29534[(2)]);
var inst_29497 = (inst_29489 + (1));
var tmp29543 = inst_29486;
var tmp29544 = inst_29487;
var tmp29545 = inst_29488;
var inst_29486__$1 = tmp29543;
var inst_29487__$1 = tmp29544;
var inst_29488__$1 = tmp29545;
var inst_29489__$1 = inst_29497;
var state_29534__$1 = (function (){var statearr_29548 = state_29534;
(statearr_29548[(8)] = inst_29486__$1);

(statearr_29548[(9)] = inst_29487__$1);

(statearr_29548[(10)] = inst_29488__$1);

(statearr_29548[(12)] = inst_29489__$1);

(statearr_29548[(14)] = inst_29496);

return statearr_29548;
})();
var statearr_29549_29581 = state_29534__$1;
(statearr_29549_29581[(2)] = null);

(statearr_29549_29581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (22))){
var state_29534__$1 = state_29534;
var statearr_29550_29582 = state_29534__$1;
(statearr_29550_29582[(2)] = null);

(statearr_29550_29582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (6))){
var inst_29475 = (state_29534[(13)]);
var inst_29484 = f.call(null,inst_29475);
var inst_29485 = cljs.core.seq.call(null,inst_29484);
var inst_29486 = inst_29485;
var inst_29487 = null;
var inst_29488 = (0);
var inst_29489 = (0);
var state_29534__$1 = (function (){var statearr_29551 = state_29534;
(statearr_29551[(8)] = inst_29486);

(statearr_29551[(9)] = inst_29487);

(statearr_29551[(10)] = inst_29488);

(statearr_29551[(12)] = inst_29489);

return statearr_29551;
})();
var statearr_29552_29583 = state_29534__$1;
(statearr_29552_29583[(2)] = null);

(statearr_29552_29583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (17))){
var inst_29500 = (state_29534[(7)]);
var inst_29504 = cljs.core.chunk_first.call(null,inst_29500);
var inst_29505 = cljs.core.chunk_rest.call(null,inst_29500);
var inst_29506 = cljs.core.count.call(null,inst_29504);
var inst_29486 = inst_29505;
var inst_29487 = inst_29504;
var inst_29488 = inst_29506;
var inst_29489 = (0);
var state_29534__$1 = (function (){var statearr_29553 = state_29534;
(statearr_29553[(8)] = inst_29486);

(statearr_29553[(9)] = inst_29487);

(statearr_29553[(10)] = inst_29488);

(statearr_29553[(12)] = inst_29489);

return statearr_29553;
})();
var statearr_29554_29584 = state_29534__$1;
(statearr_29554_29584[(2)] = null);

(statearr_29554_29584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (3))){
var inst_29532 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29534__$1,inst_29532);
} else {
if((state_val_29535 === (12))){
var inst_29520 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
var statearr_29555_29585 = state_29534__$1;
(statearr_29555_29585[(2)] = inst_29520);

(statearr_29555_29585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (2))){
var state_29534__$1 = state_29534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29534__$1,(4),in$);
} else {
if((state_val_29535 === (23))){
var inst_29528 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
var statearr_29556_29586 = state_29534__$1;
(statearr_29556_29586[(2)] = inst_29528);

(statearr_29556_29586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (19))){
var inst_29515 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
var statearr_29557_29587 = state_29534__$1;
(statearr_29557_29587[(2)] = inst_29515);

(statearr_29557_29587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (11))){
var inst_29500 = (state_29534[(7)]);
var inst_29486 = (state_29534[(8)]);
var inst_29500__$1 = cljs.core.seq.call(null,inst_29486);
var state_29534__$1 = (function (){var statearr_29558 = state_29534;
(statearr_29558[(7)] = inst_29500__$1);

return statearr_29558;
})();
if(inst_29500__$1){
var statearr_29559_29588 = state_29534__$1;
(statearr_29559_29588[(1)] = (14));

} else {
var statearr_29560_29589 = state_29534__$1;
(statearr_29560_29589[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (9))){
var inst_29522 = (state_29534[(2)]);
var inst_29523 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29534__$1 = (function (){var statearr_29561 = state_29534;
(statearr_29561[(15)] = inst_29522);

return statearr_29561;
})();
if(cljs.core.truth_(inst_29523)){
var statearr_29562_29590 = state_29534__$1;
(statearr_29562_29590[(1)] = (21));

} else {
var statearr_29563_29591 = state_29534__$1;
(statearr_29563_29591[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (5))){
var inst_29478 = cljs.core.async.close_BANG_.call(null,out);
var state_29534__$1 = state_29534;
var statearr_29564_29592 = state_29534__$1;
(statearr_29564_29592[(2)] = inst_29478);

(statearr_29564_29592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (14))){
var inst_29500 = (state_29534[(7)]);
var inst_29502 = cljs.core.chunked_seq_QMARK_.call(null,inst_29500);
var state_29534__$1 = state_29534;
if(inst_29502){
var statearr_29565_29593 = state_29534__$1;
(statearr_29565_29593[(1)] = (17));

} else {
var statearr_29566_29594 = state_29534__$1;
(statearr_29566_29594[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (16))){
var inst_29518 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
var statearr_29567_29595 = state_29534__$1;
(statearr_29567_29595[(2)] = inst_29518);

(statearr_29567_29595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29535 === (10))){
var inst_29487 = (state_29534[(9)]);
var inst_29489 = (state_29534[(12)]);
var inst_29494 = cljs.core._nth.call(null,inst_29487,inst_29489);
var state_29534__$1 = state_29534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29534__$1,(13),out,inst_29494);
} else {
if((state_val_29535 === (18))){
var inst_29500 = (state_29534[(7)]);
var inst_29509 = cljs.core.first.call(null,inst_29500);
var state_29534__$1 = state_29534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29534__$1,(20),out,inst_29509);
} else {
if((state_val_29535 === (8))){
var inst_29488 = (state_29534[(10)]);
var inst_29489 = (state_29534[(12)]);
var inst_29491 = (inst_29489 < inst_29488);
var inst_29492 = inst_29491;
var state_29534__$1 = state_29534;
if(cljs.core.truth_(inst_29492)){
var statearr_29568_29596 = state_29534__$1;
(statearr_29568_29596[(1)] = (10));

} else {
var statearr_29569_29597 = state_29534__$1;
(statearr_29569_29597[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__27890__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27890__auto____0 = (function (){
var statearr_29570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29570[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27890__auto__);

(statearr_29570[(1)] = (1));

return statearr_29570;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27890__auto____1 = (function (state_29534){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29571){if((e29571 instanceof Object)){
var ex__27893__auto__ = e29571;
var statearr_29572_29598 = state_29534;
(statearr_29572_29598[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29599 = state_29534;
state_29534 = G__29599;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27890__auto__ = function(state_29534){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27890__auto____1.call(this,state_29534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27890__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27890__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29573 = f__27987__auto__.call(null);
(statearr_29573[(6)] = c__27986__auto__);

return statearr_29573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));

return c__27986__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29601 = arguments.length;
switch (G__29601) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29604 = arguments.length;
switch (G__29604) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29607 = arguments.length;
switch (G__29607) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27986__auto___29654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29631){
var state_val_29632 = (state_29631[(1)]);
if((state_val_29632 === (7))){
var inst_29626 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
var statearr_29633_29655 = state_29631__$1;
(statearr_29633_29655[(2)] = inst_29626);

(statearr_29633_29655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (1))){
var inst_29608 = null;
var state_29631__$1 = (function (){var statearr_29634 = state_29631;
(statearr_29634[(7)] = inst_29608);

return statearr_29634;
})();
var statearr_29635_29656 = state_29631__$1;
(statearr_29635_29656[(2)] = null);

(statearr_29635_29656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (4))){
var inst_29611 = (state_29631[(8)]);
var inst_29611__$1 = (state_29631[(2)]);
var inst_29612 = (inst_29611__$1 == null);
var inst_29613 = cljs.core.not.call(null,inst_29612);
var state_29631__$1 = (function (){var statearr_29636 = state_29631;
(statearr_29636[(8)] = inst_29611__$1);

return statearr_29636;
})();
if(inst_29613){
var statearr_29637_29657 = state_29631__$1;
(statearr_29637_29657[(1)] = (5));

} else {
var statearr_29638_29658 = state_29631__$1;
(statearr_29638_29658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (6))){
var state_29631__$1 = state_29631;
var statearr_29639_29659 = state_29631__$1;
(statearr_29639_29659[(2)] = null);

(statearr_29639_29659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (3))){
var inst_29628 = (state_29631[(2)]);
var inst_29629 = cljs.core.async.close_BANG_.call(null,out);
var state_29631__$1 = (function (){var statearr_29640 = state_29631;
(statearr_29640[(9)] = inst_29628);

return statearr_29640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29631__$1,inst_29629);
} else {
if((state_val_29632 === (2))){
var state_29631__$1 = state_29631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29631__$1,(4),ch);
} else {
if((state_val_29632 === (11))){
var inst_29611 = (state_29631[(8)]);
var inst_29620 = (state_29631[(2)]);
var inst_29608 = inst_29611;
var state_29631__$1 = (function (){var statearr_29641 = state_29631;
(statearr_29641[(7)] = inst_29608);

(statearr_29641[(10)] = inst_29620);

return statearr_29641;
})();
var statearr_29642_29660 = state_29631__$1;
(statearr_29642_29660[(2)] = null);

(statearr_29642_29660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (9))){
var inst_29611 = (state_29631[(8)]);
var state_29631__$1 = state_29631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29631__$1,(11),out,inst_29611);
} else {
if((state_val_29632 === (5))){
var inst_29611 = (state_29631[(8)]);
var inst_29608 = (state_29631[(7)]);
var inst_29615 = cljs.core._EQ_.call(null,inst_29611,inst_29608);
var state_29631__$1 = state_29631;
if(inst_29615){
var statearr_29644_29661 = state_29631__$1;
(statearr_29644_29661[(1)] = (8));

} else {
var statearr_29645_29662 = state_29631__$1;
(statearr_29645_29662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (10))){
var inst_29623 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
var statearr_29646_29663 = state_29631__$1;
(statearr_29646_29663[(2)] = inst_29623);

(statearr_29646_29663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (8))){
var inst_29608 = (state_29631[(7)]);
var tmp29643 = inst_29608;
var inst_29608__$1 = tmp29643;
var state_29631__$1 = (function (){var statearr_29647 = state_29631;
(statearr_29647[(7)] = inst_29608__$1);

return statearr_29647;
})();
var statearr_29648_29664 = state_29631__$1;
(statearr_29648_29664[(2)] = null);

(statearr_29648_29664[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_29649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29649[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_29649[(1)] = (1));

return statearr_29649;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_29631){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29650){if((e29650 instanceof Object)){
var ex__27893__auto__ = e29650;
var statearr_29651_29665 = state_29631;
(statearr_29651_29665[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29666 = state_29631;
state_29631 = G__29666;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_29631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_29631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29652 = f__27987__auto__.call(null);
(statearr_29652[(6)] = c__27986__auto___29654);

return statearr_29652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29668 = arguments.length;
switch (G__29668) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27986__auto___29734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29706){
var state_val_29707 = (state_29706[(1)]);
if((state_val_29707 === (7))){
var inst_29702 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29708_29735 = state_29706__$1;
(statearr_29708_29735[(2)] = inst_29702);

(statearr_29708_29735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (1))){
var inst_29669 = (new Array(n));
var inst_29670 = inst_29669;
var inst_29671 = (0);
var state_29706__$1 = (function (){var statearr_29709 = state_29706;
(statearr_29709[(7)] = inst_29671);

(statearr_29709[(8)] = inst_29670);

return statearr_29709;
})();
var statearr_29710_29736 = state_29706__$1;
(statearr_29710_29736[(2)] = null);

(statearr_29710_29736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (4))){
var inst_29674 = (state_29706[(9)]);
var inst_29674__$1 = (state_29706[(2)]);
var inst_29675 = (inst_29674__$1 == null);
var inst_29676 = cljs.core.not.call(null,inst_29675);
var state_29706__$1 = (function (){var statearr_29711 = state_29706;
(statearr_29711[(9)] = inst_29674__$1);

return statearr_29711;
})();
if(inst_29676){
var statearr_29712_29737 = state_29706__$1;
(statearr_29712_29737[(1)] = (5));

} else {
var statearr_29713_29738 = state_29706__$1;
(statearr_29713_29738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (15))){
var inst_29696 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29714_29739 = state_29706__$1;
(statearr_29714_29739[(2)] = inst_29696);

(statearr_29714_29739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (13))){
var state_29706__$1 = state_29706;
var statearr_29715_29740 = state_29706__$1;
(statearr_29715_29740[(2)] = null);

(statearr_29715_29740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (6))){
var inst_29671 = (state_29706[(7)]);
var inst_29692 = (inst_29671 > (0));
var state_29706__$1 = state_29706;
if(cljs.core.truth_(inst_29692)){
var statearr_29716_29741 = state_29706__$1;
(statearr_29716_29741[(1)] = (12));

} else {
var statearr_29717_29742 = state_29706__$1;
(statearr_29717_29742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (3))){
var inst_29704 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29706__$1,inst_29704);
} else {
if((state_val_29707 === (12))){
var inst_29670 = (state_29706[(8)]);
var inst_29694 = cljs.core.vec.call(null,inst_29670);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29706__$1,(15),out,inst_29694);
} else {
if((state_val_29707 === (2))){
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29706__$1,(4),ch);
} else {
if((state_val_29707 === (11))){
var inst_29686 = (state_29706[(2)]);
var inst_29687 = (new Array(n));
var inst_29670 = inst_29687;
var inst_29671 = (0);
var state_29706__$1 = (function (){var statearr_29718 = state_29706;
(statearr_29718[(10)] = inst_29686);

(statearr_29718[(7)] = inst_29671);

(statearr_29718[(8)] = inst_29670);

return statearr_29718;
})();
var statearr_29719_29743 = state_29706__$1;
(statearr_29719_29743[(2)] = null);

(statearr_29719_29743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (9))){
var inst_29670 = (state_29706[(8)]);
var inst_29684 = cljs.core.vec.call(null,inst_29670);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29706__$1,(11),out,inst_29684);
} else {
if((state_val_29707 === (5))){
var inst_29679 = (state_29706[(11)]);
var inst_29674 = (state_29706[(9)]);
var inst_29671 = (state_29706[(7)]);
var inst_29670 = (state_29706[(8)]);
var inst_29678 = (inst_29670[inst_29671] = inst_29674);
var inst_29679__$1 = (inst_29671 + (1));
var inst_29680 = (inst_29679__$1 < n);
var state_29706__$1 = (function (){var statearr_29720 = state_29706;
(statearr_29720[(11)] = inst_29679__$1);

(statearr_29720[(12)] = inst_29678);

return statearr_29720;
})();
if(cljs.core.truth_(inst_29680)){
var statearr_29721_29744 = state_29706__$1;
(statearr_29721_29744[(1)] = (8));

} else {
var statearr_29722_29745 = state_29706__$1;
(statearr_29722_29745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (14))){
var inst_29699 = (state_29706[(2)]);
var inst_29700 = cljs.core.async.close_BANG_.call(null,out);
var state_29706__$1 = (function (){var statearr_29724 = state_29706;
(statearr_29724[(13)] = inst_29699);

return statearr_29724;
})();
var statearr_29725_29746 = state_29706__$1;
(statearr_29725_29746[(2)] = inst_29700);

(statearr_29725_29746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (10))){
var inst_29690 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29726_29747 = state_29706__$1;
(statearr_29726_29747[(2)] = inst_29690);

(statearr_29726_29747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (8))){
var inst_29679 = (state_29706[(11)]);
var inst_29670 = (state_29706[(8)]);
var tmp29723 = inst_29670;
var inst_29670__$1 = tmp29723;
var inst_29671 = inst_29679;
var state_29706__$1 = (function (){var statearr_29727 = state_29706;
(statearr_29727[(7)] = inst_29671);

(statearr_29727[(8)] = inst_29670__$1);

return statearr_29727;
})();
var statearr_29728_29748 = state_29706__$1;
(statearr_29728_29748[(2)] = null);

(statearr_29728_29748[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_29729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29729[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_29729[(1)] = (1));

return statearr_29729;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_29706){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29730){if((e29730 instanceof Object)){
var ex__27893__auto__ = e29730;
var statearr_29731_29749 = state_29706;
(statearr_29731_29749[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29750 = state_29706;
state_29706 = G__29750;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29732 = f__27987__auto__.call(null);
(statearr_29732[(6)] = c__27986__auto___29734);

return statearr_29732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29752 = arguments.length;
switch (G__29752) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27986__auto___29829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27987__auto__ = (function (){var switch__27889__auto__ = (function (state_29797){
var state_val_29798 = (state_29797[(1)]);
if((state_val_29798 === (7))){
var inst_29793 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29799_29830 = state_29797__$1;
(statearr_29799_29830[(2)] = inst_29793);

(statearr_29799_29830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (1))){
var inst_29753 = [];
var inst_29754 = inst_29753;
var inst_29755 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29797__$1 = (function (){var statearr_29800 = state_29797;
(statearr_29800[(7)] = inst_29755);

(statearr_29800[(8)] = inst_29754);

return statearr_29800;
})();
var statearr_29801_29831 = state_29797__$1;
(statearr_29801_29831[(2)] = null);

(statearr_29801_29831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (4))){
var inst_29758 = (state_29797[(9)]);
var inst_29758__$1 = (state_29797[(2)]);
var inst_29759 = (inst_29758__$1 == null);
var inst_29760 = cljs.core.not.call(null,inst_29759);
var state_29797__$1 = (function (){var statearr_29802 = state_29797;
(statearr_29802[(9)] = inst_29758__$1);

return statearr_29802;
})();
if(inst_29760){
var statearr_29803_29832 = state_29797__$1;
(statearr_29803_29832[(1)] = (5));

} else {
var statearr_29804_29833 = state_29797__$1;
(statearr_29804_29833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (15))){
var inst_29754 = (state_29797[(8)]);
var inst_29785 = cljs.core.vec.call(null,inst_29754);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29797__$1,(18),out,inst_29785);
} else {
if((state_val_29798 === (13))){
var inst_29780 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29805_29834 = state_29797__$1;
(statearr_29805_29834[(2)] = inst_29780);

(statearr_29805_29834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (6))){
var inst_29754 = (state_29797[(8)]);
var inst_29782 = inst_29754.length;
var inst_29783 = (inst_29782 > (0));
var state_29797__$1 = state_29797;
if(cljs.core.truth_(inst_29783)){
var statearr_29806_29835 = state_29797__$1;
(statearr_29806_29835[(1)] = (15));

} else {
var statearr_29807_29836 = state_29797__$1;
(statearr_29807_29836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (17))){
var inst_29790 = (state_29797[(2)]);
var inst_29791 = cljs.core.async.close_BANG_.call(null,out);
var state_29797__$1 = (function (){var statearr_29808 = state_29797;
(statearr_29808[(10)] = inst_29790);

return statearr_29808;
})();
var statearr_29809_29837 = state_29797__$1;
(statearr_29809_29837[(2)] = inst_29791);

(statearr_29809_29837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (3))){
var inst_29795 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29797__$1,inst_29795);
} else {
if((state_val_29798 === (12))){
var inst_29754 = (state_29797[(8)]);
var inst_29773 = cljs.core.vec.call(null,inst_29754);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29797__$1,(14),out,inst_29773);
} else {
if((state_val_29798 === (2))){
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(4),ch);
} else {
if((state_val_29798 === (11))){
var inst_29762 = (state_29797[(11)]);
var inst_29758 = (state_29797[(9)]);
var inst_29754 = (state_29797[(8)]);
var inst_29770 = inst_29754.push(inst_29758);
var tmp29810 = inst_29754;
var inst_29754__$1 = tmp29810;
var inst_29755 = inst_29762;
var state_29797__$1 = (function (){var statearr_29811 = state_29797;
(statearr_29811[(7)] = inst_29755);

(statearr_29811[(8)] = inst_29754__$1);

(statearr_29811[(12)] = inst_29770);

return statearr_29811;
})();
var statearr_29812_29838 = state_29797__$1;
(statearr_29812_29838[(2)] = null);

(statearr_29812_29838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (9))){
var inst_29755 = (state_29797[(7)]);
var inst_29766 = cljs.core.keyword_identical_QMARK_.call(null,inst_29755,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29797__$1 = state_29797;
var statearr_29813_29839 = state_29797__$1;
(statearr_29813_29839[(2)] = inst_29766);

(statearr_29813_29839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (5))){
var inst_29755 = (state_29797[(7)]);
var inst_29763 = (state_29797[(13)]);
var inst_29762 = (state_29797[(11)]);
var inst_29758 = (state_29797[(9)]);
var inst_29762__$1 = f.call(null,inst_29758);
var inst_29763__$1 = cljs.core._EQ_.call(null,inst_29762__$1,inst_29755);
var state_29797__$1 = (function (){var statearr_29814 = state_29797;
(statearr_29814[(13)] = inst_29763__$1);

(statearr_29814[(11)] = inst_29762__$1);

return statearr_29814;
})();
if(inst_29763__$1){
var statearr_29815_29840 = state_29797__$1;
(statearr_29815_29840[(1)] = (8));

} else {
var statearr_29816_29841 = state_29797__$1;
(statearr_29816_29841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (14))){
var inst_29762 = (state_29797[(11)]);
var inst_29758 = (state_29797[(9)]);
var inst_29775 = (state_29797[(2)]);
var inst_29776 = [];
var inst_29777 = inst_29776.push(inst_29758);
var inst_29754 = inst_29776;
var inst_29755 = inst_29762;
var state_29797__$1 = (function (){var statearr_29817 = state_29797;
(statearr_29817[(7)] = inst_29755);

(statearr_29817[(14)] = inst_29775);

(statearr_29817[(15)] = inst_29777);

(statearr_29817[(8)] = inst_29754);

return statearr_29817;
})();
var statearr_29818_29842 = state_29797__$1;
(statearr_29818_29842[(2)] = null);

(statearr_29818_29842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (16))){
var state_29797__$1 = state_29797;
var statearr_29819_29843 = state_29797__$1;
(statearr_29819_29843[(2)] = null);

(statearr_29819_29843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (10))){
var inst_29768 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
if(cljs.core.truth_(inst_29768)){
var statearr_29820_29844 = state_29797__$1;
(statearr_29820_29844[(1)] = (11));

} else {
var statearr_29821_29845 = state_29797__$1;
(statearr_29821_29845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (18))){
var inst_29787 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29822_29846 = state_29797__$1;
(statearr_29822_29846[(2)] = inst_29787);

(statearr_29822_29846[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (8))){
var inst_29763 = (state_29797[(13)]);
var state_29797__$1 = state_29797;
var statearr_29823_29847 = state_29797__$1;
(statearr_29823_29847[(2)] = inst_29763);

(statearr_29823_29847[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27890__auto__ = null;
var cljs$core$async$state_machine__27890__auto____0 = (function (){
var statearr_29824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29824[(0)] = cljs$core$async$state_machine__27890__auto__);

(statearr_29824[(1)] = (1));

return statearr_29824;
});
var cljs$core$async$state_machine__27890__auto____1 = (function (state_29797){
while(true){
var ret_value__27891__auto__ = (function (){try{while(true){
var result__27892__auto__ = switch__27889__auto__.call(null,state_29797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27892__auto__;
}
break;
}
}catch (e29825){if((e29825 instanceof Object)){
var ex__27893__auto__ = e29825;
var statearr_29826_29848 = state_29797;
(statearr_29826_29848[(5)] = ex__27893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29849 = state_29797;
state_29797 = G__29849;
continue;
} else {
return ret_value__27891__auto__;
}
break;
}
});
cljs$core$async$state_machine__27890__auto__ = function(state_29797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27890__auto____1.call(this,state_29797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27890__auto____0;
cljs$core$async$state_machine__27890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27890__auto____1;
return cljs$core$async$state_machine__27890__auto__;
})()
})();
var state__27988__auto__ = (function (){var statearr_29827 = f__27987__auto__.call(null);
(statearr_29827[(6)] = c__27986__auto___29829);

return statearr_29827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27988__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
