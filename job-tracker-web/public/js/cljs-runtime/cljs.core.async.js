goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14545 = (function (f,blockable,meta14546){
this.f = f;
this.blockable = blockable;
this.meta14546 = meta14546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14547,meta14546__$1){
var self__ = this;
var _14547__$1 = this;
return (new cljs.core.async.t_cljs$core$async14545(self__.f,self__.blockable,meta14546__$1));
}));

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14547){
var self__ = this;
var _14547__$1 = this;
return self__.meta14546;
}));

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14546","meta14546",-1742636322,null)], null);
}));

(cljs.core.async.t_cljs$core$async14545.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14545");

(cljs.core.async.t_cljs$core$async14545.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14545");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14545.
 */
cljs.core.async.__GT_t_cljs$core$async14545 = (function cljs$core$async$__GT_t_cljs$core$async14545(f,blockable,meta14546){
return (new cljs.core.async.t_cljs$core$async14545(f,blockable,meta14546));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14540 = arguments.length;
switch (G__14540) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14545(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__14566 = arguments.length;
switch (G__14566) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14600 = arguments.length;
switch (G__14600) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__14628 = arguments.length;
switch (G__14628) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17741 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17741) : fn1.call(null,val_17741));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17741) : fn1.call(null,val_17741));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14669 = arguments.length;
switch (G__14669) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___17758 = n;
var x_17759 = (0);
while(true){
if((x_17759 < n__5762__auto___17758)){
(a[x_17759] = x_17759);

var G__17760 = (x_17759 + (1));
x_17759 = G__17760;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14674 = (function (flag,meta14675){
this.flag = flag;
this.meta14675 = meta14675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14676,meta14675__$1){
var self__ = this;
var _14676__$1 = this;
return (new cljs.core.async.t_cljs$core$async14674(self__.flag,meta14675__$1));
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14676){
var self__ = this;
var _14676__$1 = this;
return self__.meta14675;
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14675","meta14675",1049189157,null)], null);
}));

(cljs.core.async.t_cljs$core$async14674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14674");

(cljs.core.async.t_cljs$core$async14674.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14674.
 */
cljs.core.async.__GT_t_cljs$core$async14674 = (function cljs$core$async$__GT_t_cljs$core$async14674(flag,meta14675){
return (new cljs.core.async.t_cljs$core$async14674(flag,meta14675));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14674(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14689 = (function (flag,cb,meta14690){
this.flag = flag;
this.cb = cb;
this.meta14690 = meta14690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14691,meta14690__$1){
var self__ = this;
var _14691__$1 = this;
return (new cljs.core.async.t_cljs$core$async14689(self__.flag,self__.cb,meta14690__$1));
}));

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14691){
var self__ = this;
var _14691__$1 = this;
return self__.meta14690;
}));

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14690","meta14690",662849740,null)], null);
}));

(cljs.core.async.t_cljs$core$async14689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14689");

(cljs.core.async.t_cljs$core$async14689.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14689.
 */
cljs.core.async.__GT_t_cljs$core$async14689 = (function cljs$core$async$__GT_t_cljs$core$async14689(flag,cb,meta14690){
return (new cljs.core.async.t_cljs$core$async14689(flag,cb,meta14690));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14689(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_17763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_17763)){
if((!(((port_17763.cljs$core$IFn$_invoke$arity$1 ? port_17763.cljs$core$IFn$_invoke$arity$1((1)) : port_17763.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__17772 = (i + (1));
i = G__17772;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14704_SHARP_){
var G__14718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14704_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14718) : fret.call(null,G__14718));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14705_SHARP_){
var G__14719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14705_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14719) : fret.call(null,G__14719));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17789 = (i + (1));
i = G__17789;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5903__auto__ = [];
var len__5897__auto___17790 = arguments.length;
var i__5898__auto___17791 = (0);
while(true){
if((i__5898__auto___17791 < len__5897__auto___17790)){
args__5903__auto__.push((arguments[i__5898__auto___17791]));

var G__17792 = (i__5898__auto___17791 + (1));
i__5898__auto___17791 = G__17792;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14723){
var map__14724 = p__14723;
var map__14724__$1 = cljs.core.__destructure_map(map__14724);
var opts = map__14724__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14720){
var G__14721 = cljs.core.first(seq14720);
var seq14720__$1 = cljs.core.next(seq14720);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14721,seq14720__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__14726 = arguments.length;
switch (G__14726) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14463__auto___17836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_14914){
var state_val_14915 = (state_14914[(1)]);
if((state_val_14915 === (7))){
var inst_14905 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14925_17837 = state_14914__$1;
(statearr_14925_17837[(2)] = inst_14905);

(statearr_14925_17837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (1))){
var state_14914__$1 = state_14914;
var statearr_14926_17838 = state_14914__$1;
(statearr_14926_17838[(2)] = null);

(statearr_14926_17838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (4))){
var inst_14876 = (state_14914[(7)]);
var inst_14876__$1 = (state_14914[(2)]);
var inst_14884 = (inst_14876__$1 == null);
var state_14914__$1 = (function (){var statearr_14939 = state_14914;
(statearr_14939[(7)] = inst_14876__$1);

return statearr_14939;
})();
if(cljs.core.truth_(inst_14884)){
var statearr_14940_17839 = state_14914__$1;
(statearr_14940_17839[(1)] = (5));

} else {
var statearr_14941_17840 = state_14914__$1;
(statearr_14941_17840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (13))){
var state_14914__$1 = state_14914;
var statearr_14946_17841 = state_14914__$1;
(statearr_14946_17841[(2)] = null);

(statearr_14946_17841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (6))){
var inst_14876 = (state_14914[(7)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14914__$1,(11),to,inst_14876);
} else {
if((state_val_14915 === (3))){
var inst_14907 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14914__$1,inst_14907);
} else {
if((state_val_14915 === (12))){
var state_14914__$1 = state_14914;
var statearr_14948_17847 = state_14914__$1;
(statearr_14948_17847[(2)] = null);

(statearr_14948_17847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (2))){
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14914__$1,(4),from);
} else {
if((state_val_14915 === (11))){
var inst_14895 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
if(cljs.core.truth_(inst_14895)){
var statearr_14949_17850 = state_14914__$1;
(statearr_14949_17850[(1)] = (12));

} else {
var statearr_14950_17851 = state_14914__$1;
(statearr_14950_17851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (9))){
var state_14914__$1 = state_14914;
var statearr_14951_17852 = state_14914__$1;
(statearr_14951_17852[(2)] = null);

(statearr_14951_17852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (5))){
var state_14914__$1 = state_14914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14953_17853 = state_14914__$1;
(statearr_14953_17853[(1)] = (8));

} else {
var statearr_14954_17854 = state_14914__$1;
(statearr_14954_17854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (14))){
var inst_14903 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14955_17856 = state_14914__$1;
(statearr_14955_17856[(2)] = inst_14903);

(statearr_14955_17856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (10))){
var inst_14892 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14960_17860 = state_14914__$1;
(statearr_14960_17860[(2)] = inst_14892);

(statearr_14960_17860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (8))){
var inst_14889 = cljs.core.async.close_BANG_(to);
var state_14914__$1 = state_14914;
var statearr_14961_17862 = state_14914__$1;
(statearr_14961_17862[(2)] = inst_14889);

(statearr_14961_17862[(1)] = (10));


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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_14966 = [null,null,null,null,null,null,null,null];
(statearr_14966[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_14966[(1)] = (1));

return statearr_14966;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_14914){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_14914);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e14968){var ex__14235__auto__ = e14968;
var statearr_14971_17867 = state_14914;
(statearr_14971_17867[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_14914[(4)]))){
var statearr_14973_17868 = state_14914;
(statearr_14973_17868[(1)] = cljs.core.first((state_14914[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17869 = state_14914;
state_14914 = G__17869;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_14914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_14914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_14975 = f__14464__auto__();
(statearr_14975[(6)] = c__14463__auto___17836);

return statearr_14975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14986){
var vec__14988 = p__14986;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14988,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14988,(1),null);
var job = vec__14988;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14463__auto___17881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_15019){
var state_val_15020 = (state_15019[(1)]);
if((state_val_15020 === (1))){
var state_15019__$1 = state_15019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15019__$1,(2),res,v);
} else {
if((state_val_15020 === (2))){
var inst_15011 = (state_15019[(2)]);
var inst_15012 = cljs.core.async.close_BANG_(res);
var state_15019__$1 = (function (){var statearr_15028 = state_15019;
(statearr_15028[(7)] = inst_15011);

return statearr_15028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15019__$1,inst_15012);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0 = (function (){
var statearr_15029 = [null,null,null,null,null,null,null,null];
(statearr_15029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__);

(statearr_15029[(1)] = (1));

return statearr_15029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1 = (function (state_15019){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15019);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15030){var ex__14235__auto__ = e15030;
var statearr_15031_17894 = state_15019;
(statearr_15031_17894[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15019[(4)]))){
var statearr_15032_17895 = state_15019;
(statearr_15032_17895[(1)] = cljs.core.first((state_15019[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17896 = state_15019;
state_15019 = G__17896;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = function(state_15019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1.call(this,state_15019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_15033 = f__14464__auto__();
(statearr_15033[(6)] = c__14463__auto___17881);

return statearr_15033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15034){
var vec__15035 = p__15034;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(1),null);
var job = vec__15035;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___17900 = n;
var __17901 = (0);
while(true){
if((__17901 < n__5762__auto___17900)){
var G__15038_17902 = type;
var G__15038_17903__$1 = (((G__15038_17902 instanceof cljs.core.Keyword))?G__15038_17902.fqn:null);
switch (G__15038_17903__$1) {
case "compute":
var c__14463__auto___17905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17901,c__14463__auto___17905,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async){
return (function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = ((function (__17901,c__14463__auto___17905,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async){
return (function (state_15051){
var state_val_15052 = (state_15051[(1)]);
if((state_val_15052 === (1))){
var state_15051__$1 = state_15051;
var statearr_15055_17909 = state_15051__$1;
(statearr_15055_17909[(2)] = null);

(statearr_15055_17909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (2))){
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15051__$1,(4),jobs);
} else {
if((state_val_15052 === (3))){
var inst_15049 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15051__$1,inst_15049);
} else {
if((state_val_15052 === (4))){
var inst_15041 = (state_15051[(2)]);
var inst_15042 = process__$1(inst_15041);
var state_15051__$1 = state_15051;
if(cljs.core.truth_(inst_15042)){
var statearr_15056_17910 = state_15051__$1;
(statearr_15056_17910[(1)] = (5));

} else {
var statearr_15057_17911 = state_15051__$1;
(statearr_15057_17911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (5))){
var state_15051__$1 = state_15051;
var statearr_15058_17912 = state_15051__$1;
(statearr_15058_17912[(2)] = null);

(statearr_15058_17912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (6))){
var state_15051__$1 = state_15051;
var statearr_15059_17919 = state_15051__$1;
(statearr_15059_17919[(2)] = null);

(statearr_15059_17919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (7))){
var inst_15047 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15060_17923 = state_15051__$1;
(statearr_15060_17923[(2)] = inst_15047);

(statearr_15060_17923[(1)] = (3));


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
});})(__17901,c__14463__auto___17905,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async))
;
return ((function (__17901,switch__14231__auto__,c__14463__auto___17905,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0 = (function (){
var statearr_15061 = [null,null,null,null,null,null,null];
(statearr_15061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__);

(statearr_15061[(1)] = (1));

return statearr_15061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1 = (function (state_15051){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15051);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15062){var ex__14235__auto__ = e15062;
var statearr_15063_17928 = state_15051;
(statearr_15063_17928[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15051[(4)]))){
var statearr_15064_17929 = state_15051;
(statearr_15064_17929[(1)] = cljs.core.first((state_15051[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17930 = state_15051;
state_15051 = G__17930;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = function(state_15051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1.call(this,state_15051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__;
})()
;})(__17901,switch__14231__auto__,c__14463__auto___17905,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async))
})();
var state__14465__auto__ = (function (){var statearr_15065 = f__14464__auto__();
(statearr_15065[(6)] = c__14463__auto___17905);

return statearr_15065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
});})(__17901,c__14463__auto___17905,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async))
);


break;
case "async":
var c__14463__auto___17931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17901,c__14463__auto___17931,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async){
return (function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = ((function (__17901,c__14463__auto___17931,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async){
return (function (state_15087){
var state_val_15088 = (state_15087[(1)]);
if((state_val_15088 === (1))){
var state_15087__$1 = state_15087;
var statearr_15103_17932 = state_15087__$1;
(statearr_15103_17932[(2)] = null);

(statearr_15103_17932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (2))){
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15087__$1,(4),jobs);
} else {
if((state_val_15088 === (3))){
var inst_15080 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15087__$1,inst_15080);
} else {
if((state_val_15088 === (4))){
var inst_15068 = (state_15087[(2)]);
var inst_15069 = async(inst_15068);
var state_15087__$1 = state_15087;
if(cljs.core.truth_(inst_15069)){
var statearr_15104_17933 = state_15087__$1;
(statearr_15104_17933[(1)] = (5));

} else {
var statearr_15105_17934 = state_15087__$1;
(statearr_15105_17934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (5))){
var state_15087__$1 = state_15087;
var statearr_15107_17937 = state_15087__$1;
(statearr_15107_17937[(2)] = null);

(statearr_15107_17937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (6))){
var state_15087__$1 = state_15087;
var statearr_15109_17938 = state_15087__$1;
(statearr_15109_17938[(2)] = null);

(statearr_15109_17938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (7))){
var inst_15074 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15112_17940 = state_15087__$1;
(statearr_15112_17940[(2)] = inst_15074);

(statearr_15112_17940[(1)] = (3));


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
});})(__17901,c__14463__auto___17931,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async))
;
return ((function (__17901,switch__14231__auto__,c__14463__auto___17931,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0 = (function (){
var statearr_15113 = [null,null,null,null,null,null,null];
(statearr_15113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__);

(statearr_15113[(1)] = (1));

return statearr_15113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1 = (function (state_15087){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15087);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15114){var ex__14235__auto__ = e15114;
var statearr_15115_17941 = state_15087;
(statearr_15115_17941[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15087[(4)]))){
var statearr_15116_17942 = state_15087;
(statearr_15116_17942[(1)] = cljs.core.first((state_15087[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17943 = state_15087;
state_15087 = G__17943;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = function(state_15087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1.call(this,state_15087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__;
})()
;})(__17901,switch__14231__auto__,c__14463__auto___17931,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async))
})();
var state__14465__auto__ = (function (){var statearr_15118 = f__14464__auto__();
(statearr_15118[(6)] = c__14463__auto___17931);

return statearr_15118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
});})(__17901,c__14463__auto___17931,G__15038_17902,G__15038_17903__$1,n__5762__auto___17900,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15038_17903__$1))));

}

var G__17951 = (__17901 + (1));
__17901 = G__17951;
continue;
} else {
}
break;
}

var c__14463__auto___17952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_15143){
var state_val_15144 = (state_15143[(1)]);
if((state_val_15144 === (7))){
var inst_15139 = (state_15143[(2)]);
var state_15143__$1 = state_15143;
var statearr_15148_17959 = state_15143__$1;
(statearr_15148_17959[(2)] = inst_15139);

(statearr_15148_17959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (1))){
var state_15143__$1 = state_15143;
var statearr_15149_17965 = state_15143__$1;
(statearr_15149_17965[(2)] = null);

(statearr_15149_17965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (4))){
var inst_15124 = (state_15143[(7)]);
var inst_15124__$1 = (state_15143[(2)]);
var inst_15125 = (inst_15124__$1 == null);
var state_15143__$1 = (function (){var statearr_15150 = state_15143;
(statearr_15150[(7)] = inst_15124__$1);

return statearr_15150;
})();
if(cljs.core.truth_(inst_15125)){
var statearr_15151_17967 = state_15143__$1;
(statearr_15151_17967[(1)] = (5));

} else {
var statearr_15152_17968 = state_15143__$1;
(statearr_15152_17968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (6))){
var inst_15124 = (state_15143[(7)]);
var inst_15129 = (state_15143[(8)]);
var inst_15129__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15131 = [inst_15124,inst_15129__$1];
var inst_15132 = (new cljs.core.PersistentVector(null,2,(5),inst_15130,inst_15131,null));
var state_15143__$1 = (function (){var statearr_15155 = state_15143;
(statearr_15155[(8)] = inst_15129__$1);

return statearr_15155;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15143__$1,(8),jobs,inst_15132);
} else {
if((state_val_15144 === (3))){
var inst_15141 = (state_15143[(2)]);
var state_15143__$1 = state_15143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15143__$1,inst_15141);
} else {
if((state_val_15144 === (2))){
var state_15143__$1 = state_15143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15143__$1,(4),from);
} else {
if((state_val_15144 === (9))){
var inst_15136 = (state_15143[(2)]);
var state_15143__$1 = (function (){var statearr_15158 = state_15143;
(statearr_15158[(9)] = inst_15136);

return statearr_15158;
})();
var statearr_15160_17970 = state_15143__$1;
(statearr_15160_17970[(2)] = null);

(statearr_15160_17970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (5))){
var inst_15127 = cljs.core.async.close_BANG_(jobs);
var state_15143__$1 = state_15143;
var statearr_15163_17973 = state_15143__$1;
(statearr_15163_17973[(2)] = inst_15127);

(statearr_15163_17973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15144 === (8))){
var inst_15129 = (state_15143[(8)]);
var inst_15134 = (state_15143[(2)]);
var state_15143__$1 = (function (){var statearr_15166 = state_15143;
(statearr_15166[(10)] = inst_15134);

return statearr_15166;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15143__$1,(9),results,inst_15129);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0 = (function (){
var statearr_15168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__);

(statearr_15168[(1)] = (1));

return statearr_15168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1 = (function (state_15143){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15143);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15170){var ex__14235__auto__ = e15170;
var statearr_15172_17974 = state_15143;
(statearr_15172_17974[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15143[(4)]))){
var statearr_15175_17979 = state_15143;
(statearr_15175_17979[(1)] = cljs.core.first((state_15143[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17980 = state_15143;
state_15143 = G__17980;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = function(state_15143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1.call(this,state_15143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_15177 = f__14464__auto__();
(statearr_15177[(6)] = c__14463__auto___17952);

return statearr_15177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


var c__14463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_15220){
var state_val_15222 = (state_15220[(1)]);
if((state_val_15222 === (7))){
var inst_15216 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
var statearr_15226_17981 = state_15220__$1;
(statearr_15226_17981[(2)] = inst_15216);

(statearr_15226_17981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (20))){
var state_15220__$1 = state_15220;
var statearr_15227_17982 = state_15220__$1;
(statearr_15227_17982[(2)] = null);

(statearr_15227_17982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (1))){
var state_15220__$1 = state_15220;
var statearr_15233_17983 = state_15220__$1;
(statearr_15233_17983[(2)] = null);

(statearr_15233_17983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (4))){
var inst_15181 = (state_15220[(7)]);
var inst_15181__$1 = (state_15220[(2)]);
var inst_15182 = (inst_15181__$1 == null);
var state_15220__$1 = (function (){var statearr_15236 = state_15220;
(statearr_15236[(7)] = inst_15181__$1);

return statearr_15236;
})();
if(cljs.core.truth_(inst_15182)){
var statearr_15239_17984 = state_15220__$1;
(statearr_15239_17984[(1)] = (5));

} else {
var statearr_15240_17985 = state_15220__$1;
(statearr_15240_17985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (15))){
var inst_15194 = (state_15220[(8)]);
var state_15220__$1 = state_15220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15220__$1,(18),to,inst_15194);
} else {
if((state_val_15222 === (21))){
var inst_15211 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
var statearr_15243_17987 = state_15220__$1;
(statearr_15243_17987[(2)] = inst_15211);

(statearr_15243_17987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (13))){
var inst_15213 = (state_15220[(2)]);
var state_15220__$1 = (function (){var statearr_15244 = state_15220;
(statearr_15244[(9)] = inst_15213);

return statearr_15244;
})();
var statearr_15246_17991 = state_15220__$1;
(statearr_15246_17991[(2)] = null);

(statearr_15246_17991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (6))){
var inst_15181 = (state_15220[(7)]);
var state_15220__$1 = state_15220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15220__$1,(11),inst_15181);
} else {
if((state_val_15222 === (17))){
var inst_15206 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
if(cljs.core.truth_(inst_15206)){
var statearr_15251_17994 = state_15220__$1;
(statearr_15251_17994[(1)] = (19));

} else {
var statearr_15252_17995 = state_15220__$1;
(statearr_15252_17995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (3))){
var inst_15218 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15220__$1,inst_15218);
} else {
if((state_val_15222 === (12))){
var inst_15191 = (state_15220[(10)]);
var state_15220__$1 = state_15220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15220__$1,(14),inst_15191);
} else {
if((state_val_15222 === (2))){
var state_15220__$1 = state_15220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15220__$1,(4),results);
} else {
if((state_val_15222 === (19))){
var state_15220__$1 = state_15220;
var statearr_15253_17996 = state_15220__$1;
(statearr_15253_17996[(2)] = null);

(statearr_15253_17996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (11))){
var inst_15191 = (state_15220[(2)]);
var state_15220__$1 = (function (){var statearr_15254 = state_15220;
(statearr_15254[(10)] = inst_15191);

return statearr_15254;
})();
var statearr_15255_17997 = state_15220__$1;
(statearr_15255_17997[(2)] = null);

(statearr_15255_17997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (9))){
var state_15220__$1 = state_15220;
var statearr_15257_18004 = state_15220__$1;
(statearr_15257_18004[(2)] = null);

(statearr_15257_18004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (5))){
var state_15220__$1 = state_15220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15258_18006 = state_15220__$1;
(statearr_15258_18006[(1)] = (8));

} else {
var statearr_15259_18007 = state_15220__$1;
(statearr_15259_18007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (14))){
var inst_15194 = (state_15220[(8)]);
var inst_15198 = (state_15220[(11)]);
var inst_15194__$1 = (state_15220[(2)]);
var inst_15197 = (inst_15194__$1 == null);
var inst_15198__$1 = cljs.core.not(inst_15197);
var state_15220__$1 = (function (){var statearr_15260 = state_15220;
(statearr_15260[(8)] = inst_15194__$1);

(statearr_15260[(11)] = inst_15198__$1);

return statearr_15260;
})();
if(inst_15198__$1){
var statearr_15261_18011 = state_15220__$1;
(statearr_15261_18011[(1)] = (15));

} else {
var statearr_15262_18012 = state_15220__$1;
(statearr_15262_18012[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (16))){
var inst_15198 = (state_15220[(11)]);
var state_15220__$1 = state_15220;
var statearr_15263_18014 = state_15220__$1;
(statearr_15263_18014[(2)] = inst_15198);

(statearr_15263_18014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (10))){
var inst_15188 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
var statearr_15266_18015 = state_15220__$1;
(statearr_15266_18015[(2)] = inst_15188);

(statearr_15266_18015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (18))){
var inst_15202 = (state_15220[(2)]);
var state_15220__$1 = state_15220;
var statearr_15268_18016 = state_15220__$1;
(statearr_15268_18016[(2)] = inst_15202);

(statearr_15268_18016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (8))){
var inst_15185 = cljs.core.async.close_BANG_(to);
var state_15220__$1 = state_15220;
var statearr_15270_18019 = state_15220__$1;
(statearr_15270_18019[(2)] = inst_15185);

(statearr_15270_18019[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0 = (function (){
var statearr_15271 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__);

(statearr_15271[(1)] = (1));

return statearr_15271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1 = (function (state_15220){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15220);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15272){var ex__14235__auto__ = e15272;
var statearr_15273_18023 = state_15220;
(statearr_15273_18023[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15220[(4)]))){
var statearr_15274_18024 = state_15220;
(statearr_15274_18024[(1)] = cljs.core.first((state_15220[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18025 = state_15220;
state_15220 = G__18025;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__ = function(state_15220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1.call(this,state_15220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_15275 = f__14464__auto__();
(statearr_15275[(6)] = c__14463__auto__);

return statearr_15275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));

return c__14463__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15281 = arguments.length;
switch (G__15281) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__15284 = arguments.length;
switch (G__15284) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__15312 = arguments.length;
switch (G__15312) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14463__auto___18036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_15352){
var state_val_15353 = (state_15352[(1)]);
if((state_val_15353 === (7))){
var inst_15344 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
var statearr_15356_18037 = state_15352__$1;
(statearr_15356_18037[(2)] = inst_15344);

(statearr_15356_18037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (1))){
var state_15352__$1 = state_15352;
var statearr_15358_18038 = state_15352__$1;
(statearr_15358_18038[(2)] = null);

(statearr_15358_18038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (4))){
var inst_15324 = (state_15352[(7)]);
var inst_15324__$1 = (state_15352[(2)]);
var inst_15325 = (inst_15324__$1 == null);
var state_15352__$1 = (function (){var statearr_15361 = state_15352;
(statearr_15361[(7)] = inst_15324__$1);

return statearr_15361;
})();
if(cljs.core.truth_(inst_15325)){
var statearr_15362_18049 = state_15352__$1;
(statearr_15362_18049[(1)] = (5));

} else {
var statearr_15363_18050 = state_15352__$1;
(statearr_15363_18050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (13))){
var state_15352__$1 = state_15352;
var statearr_15365_18051 = state_15352__$1;
(statearr_15365_18051[(2)] = null);

(statearr_15365_18051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (6))){
var inst_15324 = (state_15352[(7)]);
var inst_15331 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15324) : p.call(null,inst_15324));
var state_15352__$1 = state_15352;
if(cljs.core.truth_(inst_15331)){
var statearr_15367_18059 = state_15352__$1;
(statearr_15367_18059[(1)] = (9));

} else {
var statearr_15369_18063 = state_15352__$1;
(statearr_15369_18063[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (3))){
var inst_15346 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15352__$1,inst_15346);
} else {
if((state_val_15353 === (12))){
var state_15352__$1 = state_15352;
var statearr_15371_18064 = state_15352__$1;
(statearr_15371_18064[(2)] = null);

(statearr_15371_18064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (2))){
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15352__$1,(4),ch);
} else {
if((state_val_15353 === (11))){
var inst_15324 = (state_15352[(7)]);
var inst_15335 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15352__$1,(8),inst_15335,inst_15324);
} else {
if((state_val_15353 === (9))){
var state_15352__$1 = state_15352;
var statearr_15375_18075 = state_15352__$1;
(statearr_15375_18075[(2)] = tc);

(statearr_15375_18075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (5))){
var inst_15327 = cljs.core.async.close_BANG_(tc);
var inst_15329 = cljs.core.async.close_BANG_(fc);
var state_15352__$1 = (function (){var statearr_15378 = state_15352;
(statearr_15378[(8)] = inst_15327);

return statearr_15378;
})();
var statearr_15380_18076 = state_15352__$1;
(statearr_15380_18076[(2)] = inst_15329);

(statearr_15380_18076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (14))){
var inst_15342 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
var statearr_15393_18080 = state_15352__$1;
(statearr_15393_18080[(2)] = inst_15342);

(statearr_15393_18080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (10))){
var state_15352__$1 = state_15352;
var statearr_15405_18085 = state_15352__$1;
(statearr_15405_18085[(2)] = fc);

(statearr_15405_18085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15353 === (8))){
var inst_15337 = (state_15352[(2)]);
var state_15352__$1 = state_15352;
if(cljs.core.truth_(inst_15337)){
var statearr_15407_18094 = state_15352__$1;
(statearr_15407_18094[(1)] = (12));

} else {
var statearr_15408_18095 = state_15352__$1;
(statearr_15408_18095[(1)] = (13));

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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_15411 = [null,null,null,null,null,null,null,null,null];
(statearr_15411[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_15411[(1)] = (1));

return statearr_15411;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_15352){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15352);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15414){var ex__14235__auto__ = e15414;
var statearr_15421_18107 = state_15352;
(statearr_15421_18107[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15352[(4)]))){
var statearr_15422_18108 = state_15352;
(statearr_15422_18108[(1)] = cljs.core.first((state_15352[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18112 = state_15352;
state_15352 = G__18112;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_15352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_15352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_15429 = f__14464__auto__();
(statearr_15429[(6)] = c__14463__auto___18036);

return statearr_15429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
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
var c__14463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_15472){
var state_val_15474 = (state_15472[(1)]);
if((state_val_15474 === (7))){
var inst_15468 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
var statearr_15488_18121 = state_15472__$1;
(statearr_15488_18121[(2)] = inst_15468);

(statearr_15488_18121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (1))){
var inst_15446 = init;
var inst_15448 = inst_15446;
var state_15472__$1 = (function (){var statearr_15490 = state_15472;
(statearr_15490[(7)] = inst_15448);

return statearr_15490;
})();
var statearr_15491_18122 = state_15472__$1;
(statearr_15491_18122[(2)] = null);

(statearr_15491_18122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (4))){
var inst_15452 = (state_15472[(8)]);
var inst_15452__$1 = (state_15472[(2)]);
var inst_15453 = (inst_15452__$1 == null);
var state_15472__$1 = (function (){var statearr_15496 = state_15472;
(statearr_15496[(8)] = inst_15452__$1);

return statearr_15496;
})();
if(cljs.core.truth_(inst_15453)){
var statearr_15497_18124 = state_15472__$1;
(statearr_15497_18124[(1)] = (5));

} else {
var statearr_15498_18131 = state_15472__$1;
(statearr_15498_18131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (6))){
var inst_15448 = (state_15472[(7)]);
var inst_15452 = (state_15472[(8)]);
var inst_15459 = (state_15472[(9)]);
var inst_15459__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15448,inst_15452) : f.call(null,inst_15448,inst_15452));
var inst_15460 = cljs.core.reduced_QMARK_(inst_15459__$1);
var state_15472__$1 = (function (){var statearr_15506 = state_15472;
(statearr_15506[(9)] = inst_15459__$1);

return statearr_15506;
})();
if(inst_15460){
var statearr_15507_18132 = state_15472__$1;
(statearr_15507_18132[(1)] = (8));

} else {
var statearr_15509_18133 = state_15472__$1;
(statearr_15509_18133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (3))){
var inst_15470 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15472__$1,inst_15470);
} else {
if((state_val_15474 === (2))){
var state_15472__$1 = state_15472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15472__$1,(4),ch);
} else {
if((state_val_15474 === (9))){
var inst_15459 = (state_15472[(9)]);
var inst_15448 = inst_15459;
var state_15472__$1 = (function (){var statearr_15520 = state_15472;
(statearr_15520[(7)] = inst_15448);

return statearr_15520;
})();
var statearr_15521_18134 = state_15472__$1;
(statearr_15521_18134[(2)] = null);

(statearr_15521_18134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (5))){
var inst_15448 = (state_15472[(7)]);
var state_15472__$1 = state_15472;
var statearr_15526_18135 = state_15472__$1;
(statearr_15526_18135[(2)] = inst_15448);

(statearr_15526_18135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (10))){
var inst_15466 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
var statearr_15536_18141 = state_15472__$1;
(statearr_15536_18141[(2)] = inst_15466);

(statearr_15536_18141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15474 === (8))){
var inst_15459 = (state_15472[(9)]);
var inst_15462 = cljs.core.deref(inst_15459);
var state_15472__$1 = state_15472;
var statearr_15550_18142 = state_15472__$1;
(statearr_15550_18142[(2)] = inst_15462);

(statearr_15550_18142[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14232__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14232__auto____0 = (function (){
var statearr_15564 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15564[(0)] = cljs$core$async$reduce_$_state_machine__14232__auto__);

(statearr_15564[(1)] = (1));

return statearr_15564;
});
var cljs$core$async$reduce_$_state_machine__14232__auto____1 = (function (state_15472){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15472);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15570){var ex__14235__auto__ = e15570;
var statearr_15572_18148 = state_15472;
(statearr_15572_18148[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15472[(4)]))){
var statearr_15578_18151 = state_15472;
(statearr_15578_18151[(1)] = cljs.core.first((state_15472[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18152 = state_15472;
state_15472 = G__18152;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14232__auto__ = function(state_15472){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14232__auto____1.call(this,state_15472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14232__auto____0;
cljs$core$async$reduce_$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14232__auto____1;
return cljs$core$async$reduce_$_state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_15583 = f__14464__auto__();
(statearr_15583[(6)] = c__14463__auto__);

return statearr_15583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));

return c__14463__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_15601){
var state_val_15602 = (state_15601[(1)]);
if((state_val_15602 === (1))){
var inst_15596 = cljs.core.async.reduce(f__$1,init,ch);
var state_15601__$1 = state_15601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15601__$1,(2),inst_15596);
} else {
if((state_val_15602 === (2))){
var inst_15598 = (state_15601[(2)]);
var inst_15599 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15598) : f__$1.call(null,inst_15598));
var state_15601__$1 = state_15601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15601__$1,inst_15599);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14232__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14232__auto____0 = (function (){
var statearr_15606 = [null,null,null,null,null,null,null];
(statearr_15606[(0)] = cljs$core$async$transduce_$_state_machine__14232__auto__);

(statearr_15606[(1)] = (1));

return statearr_15606;
});
var cljs$core$async$transduce_$_state_machine__14232__auto____1 = (function (state_15601){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15601);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15607){var ex__14235__auto__ = e15607;
var statearr_15608_18178 = state_15601;
(statearr_15608_18178[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15601[(4)]))){
var statearr_15610_18179 = state_15601;
(statearr_15610_18179[(1)] = cljs.core.first((state_15601[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18181 = state_15601;
state_15601 = G__18181;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14232__auto__ = function(state_15601){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14232__auto____1.call(this,state_15601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14232__auto____0;
cljs$core$async$transduce_$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14232__auto____1;
return cljs$core$async$transduce_$_state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_15611 = f__14464__auto__();
(statearr_15611[(6)] = c__14463__auto__);

return statearr_15611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));

return c__14463__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15616 = arguments.length;
switch (G__15616) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_15651){
var state_val_15652 = (state_15651[(1)]);
if((state_val_15652 === (7))){
var inst_15632 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
var statearr_15659_18184 = state_15651__$1;
(statearr_15659_18184[(2)] = inst_15632);

(statearr_15659_18184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (1))){
var inst_15623 = cljs.core.seq(coll);
var inst_15624 = inst_15623;
var state_15651__$1 = (function (){var statearr_15661 = state_15651;
(statearr_15661[(7)] = inst_15624);

return statearr_15661;
})();
var statearr_15663_18185 = state_15651__$1;
(statearr_15663_18185[(2)] = null);

(statearr_15663_18185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (4))){
var inst_15624 = (state_15651[(7)]);
var inst_15627 = cljs.core.first(inst_15624);
var state_15651__$1 = state_15651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15651__$1,(7),ch,inst_15627);
} else {
if((state_val_15652 === (13))){
var inst_15645 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
var statearr_15668_18187 = state_15651__$1;
(statearr_15668_18187[(2)] = inst_15645);

(statearr_15668_18187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (6))){
var inst_15635 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
if(cljs.core.truth_(inst_15635)){
var statearr_15669_18188 = state_15651__$1;
(statearr_15669_18188[(1)] = (8));

} else {
var statearr_15671_18189 = state_15651__$1;
(statearr_15671_18189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (3))){
var inst_15649 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15651__$1,inst_15649);
} else {
if((state_val_15652 === (12))){
var state_15651__$1 = state_15651;
var statearr_15675_18190 = state_15651__$1;
(statearr_15675_18190[(2)] = null);

(statearr_15675_18190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (2))){
var inst_15624 = (state_15651[(7)]);
var state_15651__$1 = state_15651;
if(cljs.core.truth_(inst_15624)){
var statearr_15682_18191 = state_15651__$1;
(statearr_15682_18191[(1)] = (4));

} else {
var statearr_15684_18192 = state_15651__$1;
(statearr_15684_18192[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (11))){
var inst_15642 = cljs.core.async.close_BANG_(ch);
var state_15651__$1 = state_15651;
var statearr_15685_18193 = state_15651__$1;
(statearr_15685_18193[(2)] = inst_15642);

(statearr_15685_18193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (9))){
var state_15651__$1 = state_15651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15688_18197 = state_15651__$1;
(statearr_15688_18197[(1)] = (11));

} else {
var statearr_15689_18199 = state_15651__$1;
(statearr_15689_18199[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (5))){
var inst_15624 = (state_15651[(7)]);
var state_15651__$1 = state_15651;
var statearr_15690_18201 = state_15651__$1;
(statearr_15690_18201[(2)] = inst_15624);

(statearr_15690_18201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (10))){
var inst_15647 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
var statearr_15691_18203 = state_15651__$1;
(statearr_15691_18203[(2)] = inst_15647);

(statearr_15691_18203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (8))){
var inst_15624 = (state_15651[(7)]);
var inst_15638 = cljs.core.next(inst_15624);
var inst_15624__$1 = inst_15638;
var state_15651__$1 = (function (){var statearr_15692 = state_15651;
(statearr_15692[(7)] = inst_15624__$1);

return statearr_15692;
})();
var statearr_15693_18207 = state_15651__$1;
(statearr_15693_18207[(2)] = null);

(statearr_15693_18207[(1)] = (2));


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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_15695 = [null,null,null,null,null,null,null,null];
(statearr_15695[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_15695[(1)] = (1));

return statearr_15695;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_15651){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15651);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e15696){var ex__14235__auto__ = e15696;
var statearr_15697_18208 = state_15651;
(statearr_15697_18208[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15651[(4)]))){
var statearr_15698_18209 = state_15651;
(statearr_15698_18209[(1)] = cljs.core.first((state_15651[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18219 = state_15651;
state_15651 = G__18219;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_15651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_15651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_15704 = f__14464__auto__();
(statearr_15704[(6)] = c__14463__auto__);

return statearr_15704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));

return c__14463__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15708 = arguments.length;
switch (G__15708) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18225 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18225(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18229 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18229(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18232 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18232(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18233 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18233(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15739 = (function (ch,cs,meta15740){
this.ch = ch;
this.cs = cs;
this.meta15740 = meta15740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15741,meta15740__$1){
var self__ = this;
var _15741__$1 = this;
return (new cljs.core.async.t_cljs$core$async15739(self__.ch,self__.cs,meta15740__$1));
}));

(cljs.core.async.t_cljs$core$async15739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15741){
var self__ = this;
var _15741__$1 = this;
return self__.meta15740;
}));

(cljs.core.async.t_cljs$core$async15739.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15739.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15739.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15739.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15739.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15740","meta15740",488301404,null)], null);
}));

(cljs.core.async.t_cljs$core$async15739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15739");

(cljs.core.async.t_cljs$core$async15739.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15739.
 */
cljs.core.async.__GT_t_cljs$core$async15739 = (function cljs$core$async$__GT_t_cljs$core$async15739(ch,cs,meta15740){
return (new cljs.core.async.t_cljs$core$async15739(ch,cs,meta15740));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15739(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14463__auto___18244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_15920){
var state_val_15923 = (state_15920[(1)]);
if((state_val_15923 === (7))){
var inst_15913 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_15927_18253 = state_15920__$1;
(statearr_15927_18253[(2)] = inst_15913);

(statearr_15927_18253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (20))){
var inst_15790 = (state_15920[(7)]);
var inst_15805 = cljs.core.first(inst_15790);
var inst_15808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15805,(0),null);
var inst_15809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15805,(1),null);
var state_15920__$1 = (function (){var statearr_15929 = state_15920;
(statearr_15929[(8)] = inst_15808);

return statearr_15929;
})();
if(cljs.core.truth_(inst_15809)){
var statearr_15933_18255 = state_15920__$1;
(statearr_15933_18255[(1)] = (22));

} else {
var statearr_15934_18256 = state_15920__$1;
(statearr_15934_18256[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (27))){
var inst_15843 = (state_15920[(9)]);
var inst_15845 = (state_15920[(10)]);
var inst_15855 = (state_15920[(11)]);
var inst_15757 = (state_15920[(12)]);
var inst_15855__$1 = cljs.core._nth(inst_15843,inst_15845);
var inst_15858 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15855__$1,inst_15757,done);
var state_15920__$1 = (function (){var statearr_15935 = state_15920;
(statearr_15935[(11)] = inst_15855__$1);

return statearr_15935;
})();
if(cljs.core.truth_(inst_15858)){
var statearr_15936_18266 = state_15920__$1;
(statearr_15936_18266[(1)] = (30));

} else {
var statearr_15937_18267 = state_15920__$1;
(statearr_15937_18267[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (1))){
var state_15920__$1 = state_15920;
var statearr_15939_18268 = state_15920__$1;
(statearr_15939_18268[(2)] = null);

(statearr_15939_18268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (24))){
var inst_15790 = (state_15920[(7)]);
var inst_15815 = (state_15920[(2)]);
var inst_15816 = cljs.core.next(inst_15790);
var inst_15766 = inst_15816;
var inst_15767 = null;
var inst_15768 = (0);
var inst_15769 = (0);
var state_15920__$1 = (function (){var statearr_15940 = state_15920;
(statearr_15940[(13)] = inst_15815);

(statearr_15940[(14)] = inst_15766);

(statearr_15940[(15)] = inst_15767);

(statearr_15940[(16)] = inst_15768);

(statearr_15940[(17)] = inst_15769);

return statearr_15940;
})();
var statearr_15941_18270 = state_15920__$1;
(statearr_15941_18270[(2)] = null);

(statearr_15941_18270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (39))){
var state_15920__$1 = state_15920;
var statearr_15948_18277 = state_15920__$1;
(statearr_15948_18277[(2)] = null);

(statearr_15948_18277[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (4))){
var inst_15757 = (state_15920[(12)]);
var inst_15757__$1 = (state_15920[(2)]);
var inst_15758 = (inst_15757__$1 == null);
var state_15920__$1 = (function (){var statearr_15949 = state_15920;
(statearr_15949[(12)] = inst_15757__$1);

return statearr_15949;
})();
if(cljs.core.truth_(inst_15758)){
var statearr_15950_18281 = state_15920__$1;
(statearr_15950_18281[(1)] = (5));

} else {
var statearr_15951_18283 = state_15920__$1;
(statearr_15951_18283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (15))){
var inst_15769 = (state_15920[(17)]);
var inst_15766 = (state_15920[(14)]);
var inst_15767 = (state_15920[(15)]);
var inst_15768 = (state_15920[(16)]);
var inst_15785 = (state_15920[(2)]);
var inst_15787 = (inst_15769 + (1));
var tmp15943 = inst_15766;
var tmp15944 = inst_15768;
var tmp15945 = inst_15767;
var inst_15766__$1 = tmp15943;
var inst_15767__$1 = tmp15945;
var inst_15768__$1 = tmp15944;
var inst_15769__$1 = inst_15787;
var state_15920__$1 = (function (){var statearr_15954 = state_15920;
(statearr_15954[(18)] = inst_15785);

(statearr_15954[(14)] = inst_15766__$1);

(statearr_15954[(15)] = inst_15767__$1);

(statearr_15954[(16)] = inst_15768__$1);

(statearr_15954[(17)] = inst_15769__$1);

return statearr_15954;
})();
var statearr_15955_18294 = state_15920__$1;
(statearr_15955_18294[(2)] = null);

(statearr_15955_18294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (21))){
var inst_15819 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_15959_18296 = state_15920__$1;
(statearr_15959_18296[(2)] = inst_15819);

(statearr_15959_18296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (31))){
var inst_15855 = (state_15920[(11)]);
var inst_15862 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15855);
var state_15920__$1 = state_15920;
var statearr_15960_18301 = state_15920__$1;
(statearr_15960_18301[(2)] = inst_15862);

(statearr_15960_18301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (32))){
var inst_15845 = (state_15920[(10)]);
var inst_15842 = (state_15920[(19)]);
var inst_15843 = (state_15920[(9)]);
var inst_15844 = (state_15920[(20)]);
var inst_15866 = (state_15920[(2)]);
var inst_15867 = (inst_15845 + (1));
var tmp15956 = inst_15842;
var tmp15957 = inst_15843;
var tmp15958 = inst_15844;
var inst_15842__$1 = tmp15956;
var inst_15843__$1 = tmp15957;
var inst_15844__$1 = tmp15958;
var inst_15845__$1 = inst_15867;
var state_15920__$1 = (function (){var statearr_15961 = state_15920;
(statearr_15961[(21)] = inst_15866);

(statearr_15961[(19)] = inst_15842__$1);

(statearr_15961[(9)] = inst_15843__$1);

(statearr_15961[(20)] = inst_15844__$1);

(statearr_15961[(10)] = inst_15845__$1);

return statearr_15961;
})();
var statearr_15962_18310 = state_15920__$1;
(statearr_15962_18310[(2)] = null);

(statearr_15962_18310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (40))){
var inst_15882 = (state_15920[(22)]);
var inst_15888 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15882);
var state_15920__$1 = state_15920;
var statearr_15964_18313 = state_15920__$1;
(statearr_15964_18313[(2)] = inst_15888);

(statearr_15964_18313[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (33))){
var inst_15870 = (state_15920[(23)]);
var inst_15872 = cljs.core.chunked_seq_QMARK_(inst_15870);
var state_15920__$1 = state_15920;
if(inst_15872){
var statearr_15966_18314 = state_15920__$1;
(statearr_15966_18314[(1)] = (36));

} else {
var statearr_15967_18315 = state_15920__$1;
(statearr_15967_18315[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (13))){
var inst_15779 = (state_15920[(24)]);
var inst_15782 = cljs.core.async.close_BANG_(inst_15779);
var state_15920__$1 = state_15920;
var statearr_15972_18317 = state_15920__$1;
(statearr_15972_18317[(2)] = inst_15782);

(statearr_15972_18317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (22))){
var inst_15808 = (state_15920[(8)]);
var inst_15812 = cljs.core.async.close_BANG_(inst_15808);
var state_15920__$1 = state_15920;
var statearr_15973_18318 = state_15920__$1;
(statearr_15973_18318[(2)] = inst_15812);

(statearr_15973_18318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (36))){
var inst_15870 = (state_15920[(23)]);
var inst_15875 = cljs.core.chunk_first(inst_15870);
var inst_15876 = cljs.core.chunk_rest(inst_15870);
var inst_15877 = cljs.core.count(inst_15875);
var inst_15842 = inst_15876;
var inst_15843 = inst_15875;
var inst_15844 = inst_15877;
var inst_15845 = (0);
var state_15920__$1 = (function (){var statearr_15975 = state_15920;
(statearr_15975[(19)] = inst_15842);

(statearr_15975[(9)] = inst_15843);

(statearr_15975[(20)] = inst_15844);

(statearr_15975[(10)] = inst_15845);

return statearr_15975;
})();
var statearr_15977_18323 = state_15920__$1;
(statearr_15977_18323[(2)] = null);

(statearr_15977_18323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (41))){
var inst_15870 = (state_15920[(23)]);
var inst_15890 = (state_15920[(2)]);
var inst_15893 = cljs.core.next(inst_15870);
var inst_15842 = inst_15893;
var inst_15843 = null;
var inst_15844 = (0);
var inst_15845 = (0);
var state_15920__$1 = (function (){var statearr_15980 = state_15920;
(statearr_15980[(25)] = inst_15890);

(statearr_15980[(19)] = inst_15842);

(statearr_15980[(9)] = inst_15843);

(statearr_15980[(20)] = inst_15844);

(statearr_15980[(10)] = inst_15845);

return statearr_15980;
})();
var statearr_15981_18324 = state_15920__$1;
(statearr_15981_18324[(2)] = null);

(statearr_15981_18324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (43))){
var state_15920__$1 = state_15920;
var statearr_15982_18326 = state_15920__$1;
(statearr_15982_18326[(2)] = null);

(statearr_15982_18326[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (29))){
var inst_15901 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_15983_18327 = state_15920__$1;
(statearr_15983_18327[(2)] = inst_15901);

(statearr_15983_18327[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (44))){
var inst_15910 = (state_15920[(2)]);
var state_15920__$1 = (function (){var statearr_15984 = state_15920;
(statearr_15984[(26)] = inst_15910);

return statearr_15984;
})();
var statearr_15986_18331 = state_15920__$1;
(statearr_15986_18331[(2)] = null);

(statearr_15986_18331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (6))){
var inst_15830 = (state_15920[(27)]);
var inst_15829 = cljs.core.deref(cs);
var inst_15830__$1 = cljs.core.keys(inst_15829);
var inst_15833 = cljs.core.count(inst_15830__$1);
var inst_15834 = cljs.core.reset_BANG_(dctr,inst_15833);
var inst_15841 = cljs.core.seq(inst_15830__$1);
var inst_15842 = inst_15841;
var inst_15843 = null;
var inst_15844 = (0);
var inst_15845 = (0);
var state_15920__$1 = (function (){var statearr_15988 = state_15920;
(statearr_15988[(27)] = inst_15830__$1);

(statearr_15988[(28)] = inst_15834);

(statearr_15988[(19)] = inst_15842);

(statearr_15988[(9)] = inst_15843);

(statearr_15988[(20)] = inst_15844);

(statearr_15988[(10)] = inst_15845);

return statearr_15988;
})();
var statearr_15989_18343 = state_15920__$1;
(statearr_15989_18343[(2)] = null);

(statearr_15989_18343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (28))){
var inst_15842 = (state_15920[(19)]);
var inst_15870 = (state_15920[(23)]);
var inst_15870__$1 = cljs.core.seq(inst_15842);
var state_15920__$1 = (function (){var statearr_15990 = state_15920;
(statearr_15990[(23)] = inst_15870__$1);

return statearr_15990;
})();
if(inst_15870__$1){
var statearr_15994_18344 = state_15920__$1;
(statearr_15994_18344[(1)] = (33));

} else {
var statearr_15996_18346 = state_15920__$1;
(statearr_15996_18346[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (25))){
var inst_15845 = (state_15920[(10)]);
var inst_15844 = (state_15920[(20)]);
var inst_15851 = (inst_15845 < inst_15844);
var inst_15852 = inst_15851;
var state_15920__$1 = state_15920;
if(cljs.core.truth_(inst_15852)){
var statearr_15997_18347 = state_15920__$1;
(statearr_15997_18347[(1)] = (27));

} else {
var statearr_15998_18349 = state_15920__$1;
(statearr_15998_18349[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (34))){
var state_15920__$1 = state_15920;
var statearr_16001_18351 = state_15920__$1;
(statearr_16001_18351[(2)] = null);

(statearr_16001_18351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (17))){
var state_15920__$1 = state_15920;
var statearr_16002_18352 = state_15920__$1;
(statearr_16002_18352[(2)] = null);

(statearr_16002_18352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (3))){
var inst_15915 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15920__$1,inst_15915);
} else {
if((state_val_15923 === (12))){
var inst_15824 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_16004_18355 = state_15920__$1;
(statearr_16004_18355[(2)] = inst_15824);

(statearr_16004_18355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (2))){
var state_15920__$1 = state_15920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15920__$1,(4),ch);
} else {
if((state_val_15923 === (23))){
var state_15920__$1 = state_15920;
var statearr_16008_18356 = state_15920__$1;
(statearr_16008_18356[(2)] = null);

(statearr_16008_18356[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (35))){
var inst_15899 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_16010_18358 = state_15920__$1;
(statearr_16010_18358[(2)] = inst_15899);

(statearr_16010_18358[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (19))){
var inst_15790 = (state_15920[(7)]);
var inst_15795 = cljs.core.chunk_first(inst_15790);
var inst_15796 = cljs.core.chunk_rest(inst_15790);
var inst_15797 = cljs.core.count(inst_15795);
var inst_15766 = inst_15796;
var inst_15767 = inst_15795;
var inst_15768 = inst_15797;
var inst_15769 = (0);
var state_15920__$1 = (function (){var statearr_16017 = state_15920;
(statearr_16017[(14)] = inst_15766);

(statearr_16017[(15)] = inst_15767);

(statearr_16017[(16)] = inst_15768);

(statearr_16017[(17)] = inst_15769);

return statearr_16017;
})();
var statearr_16018_18361 = state_15920__$1;
(statearr_16018_18361[(2)] = null);

(statearr_16018_18361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (11))){
var inst_15766 = (state_15920[(14)]);
var inst_15790 = (state_15920[(7)]);
var inst_15790__$1 = cljs.core.seq(inst_15766);
var state_15920__$1 = (function (){var statearr_16019 = state_15920;
(statearr_16019[(7)] = inst_15790__$1);

return statearr_16019;
})();
if(inst_15790__$1){
var statearr_16020_18363 = state_15920__$1;
(statearr_16020_18363[(1)] = (16));

} else {
var statearr_16021_18364 = state_15920__$1;
(statearr_16021_18364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (9))){
var inst_15826 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_16023_18365 = state_15920__$1;
(statearr_16023_18365[(2)] = inst_15826);

(statearr_16023_18365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (5))){
var inst_15764 = cljs.core.deref(cs);
var inst_15765 = cljs.core.seq(inst_15764);
var inst_15766 = inst_15765;
var inst_15767 = null;
var inst_15768 = (0);
var inst_15769 = (0);
var state_15920__$1 = (function (){var statearr_16024 = state_15920;
(statearr_16024[(14)] = inst_15766);

(statearr_16024[(15)] = inst_15767);

(statearr_16024[(16)] = inst_15768);

(statearr_16024[(17)] = inst_15769);

return statearr_16024;
})();
var statearr_16025_18367 = state_15920__$1;
(statearr_16025_18367[(2)] = null);

(statearr_16025_18367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (14))){
var state_15920__$1 = state_15920;
var statearr_16027_18368 = state_15920__$1;
(statearr_16027_18368[(2)] = null);

(statearr_16027_18368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (45))){
var inst_15907 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_16028_18369 = state_15920__$1;
(statearr_16028_18369[(2)] = inst_15907);

(statearr_16028_18369[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (26))){
var inst_15830 = (state_15920[(27)]);
var inst_15903 = (state_15920[(2)]);
var inst_15904 = cljs.core.seq(inst_15830);
var state_15920__$1 = (function (){var statearr_16031 = state_15920;
(statearr_16031[(29)] = inst_15903);

return statearr_16031;
})();
if(inst_15904){
var statearr_16034_18370 = state_15920__$1;
(statearr_16034_18370[(1)] = (42));

} else {
var statearr_16036_18371 = state_15920__$1;
(statearr_16036_18371[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (16))){
var inst_15790 = (state_15920[(7)]);
var inst_15793 = cljs.core.chunked_seq_QMARK_(inst_15790);
var state_15920__$1 = state_15920;
if(inst_15793){
var statearr_16037_18372 = state_15920__$1;
(statearr_16037_18372[(1)] = (19));

} else {
var statearr_16038_18373 = state_15920__$1;
(statearr_16038_18373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (38))){
var inst_15896 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_16039_18374 = state_15920__$1;
(statearr_16039_18374[(2)] = inst_15896);

(statearr_16039_18374[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (30))){
var state_15920__$1 = state_15920;
var statearr_16040_18375 = state_15920__$1;
(statearr_16040_18375[(2)] = null);

(statearr_16040_18375[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (10))){
var inst_15767 = (state_15920[(15)]);
var inst_15769 = (state_15920[(17)]);
var inst_15778 = cljs.core._nth(inst_15767,inst_15769);
var inst_15779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15778,(0),null);
var inst_15780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15778,(1),null);
var state_15920__$1 = (function (){var statearr_16041 = state_15920;
(statearr_16041[(24)] = inst_15779);

return statearr_16041;
})();
if(cljs.core.truth_(inst_15780)){
var statearr_16042_18376 = state_15920__$1;
(statearr_16042_18376[(1)] = (13));

} else {
var statearr_16044_18377 = state_15920__$1;
(statearr_16044_18377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (18))){
var inst_15822 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_16045_18386 = state_15920__$1;
(statearr_16045_18386[(2)] = inst_15822);

(statearr_16045_18386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (42))){
var state_15920__$1 = state_15920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15920__$1,(45),dchan);
} else {
if((state_val_15923 === (37))){
var inst_15870 = (state_15920[(23)]);
var inst_15882 = (state_15920[(22)]);
var inst_15757 = (state_15920[(12)]);
var inst_15882__$1 = cljs.core.first(inst_15870);
var inst_15883 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15882__$1,inst_15757,done);
var state_15920__$1 = (function (){var statearr_16048 = state_15920;
(statearr_16048[(22)] = inst_15882__$1);

return statearr_16048;
})();
if(cljs.core.truth_(inst_15883)){
var statearr_16051_18388 = state_15920__$1;
(statearr_16051_18388[(1)] = (39));

} else {
var statearr_16052_18389 = state_15920__$1;
(statearr_16052_18389[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15923 === (8))){
var inst_15769 = (state_15920[(17)]);
var inst_15768 = (state_15920[(16)]);
var inst_15772 = (inst_15769 < inst_15768);
var inst_15773 = inst_15772;
var state_15920__$1 = state_15920;
if(cljs.core.truth_(inst_15773)){
var statearr_16058_18392 = state_15920__$1;
(statearr_16058_18392[(1)] = (10));

} else {
var statearr_16059_18393 = state_15920__$1;
(statearr_16059_18393[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14232__auto__ = null;
var cljs$core$async$mult_$_state_machine__14232__auto____0 = (function (){
var statearr_16061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16061[(0)] = cljs$core$async$mult_$_state_machine__14232__auto__);

(statearr_16061[(1)] = (1));

return statearr_16061;
});
var cljs$core$async$mult_$_state_machine__14232__auto____1 = (function (state_15920){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_15920);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e16063){var ex__14235__auto__ = e16063;
var statearr_16065_18404 = state_15920;
(statearr_16065_18404[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_15920[(4)]))){
var statearr_16067_18405 = state_15920;
(statearr_16067_18405[(1)] = cljs.core.first((state_15920[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18408 = state_15920;
state_15920 = G__18408;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14232__auto__ = function(state_15920){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14232__auto____1.call(this,state_15920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14232__auto____0;
cljs$core$async$mult_$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14232__auto____1;
return cljs$core$async$mult_$_state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_16071 = f__14464__auto__();
(statearr_16071[(6)] = c__14463__auto___18244);

return statearr_16071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
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
var G__16076 = arguments.length;
switch (G__16076) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18435 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18435(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18442 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18442(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18445 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18445(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18447 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18447(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18450 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18450(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___18455 = arguments.length;
var i__5898__auto___18456 = (0);
while(true){
if((i__5898__auto___18456 < len__5897__auto___18455)){
args__5903__auto__.push((arguments[i__5898__auto___18456]));

var G__18457 = (i__5898__auto___18456 + (1));
i__5898__auto___18456 = G__18457;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16122){
var map__16123 = p__16122;
var map__16123__$1 = cljs.core.__destructure_map(map__16123);
var opts = map__16123__$1;
var statearr_16125_18459 = state;
(statearr_16125_18459[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16126_18460 = state;
(statearr_16126_18460[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16127_18461 = state;
(statearr_16127_18461[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16110){
var G__16111 = cljs.core.first(seq16110);
var seq16110__$1 = cljs.core.next(seq16110);
var G__16112 = cljs.core.first(seq16110__$1);
var seq16110__$2 = cljs.core.next(seq16110__$1);
var G__16113 = cljs.core.first(seq16110__$2);
var seq16110__$3 = cljs.core.next(seq16110__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16111,G__16112,G__16113,seq16110__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16145 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16146){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16146 = meta16146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16147,meta16146__$1){
var self__ = this;
var _16147__$1 = this;
return (new cljs.core.async.t_cljs$core$async16145(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16146__$1));
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16147){
var self__ = this;
var _16147__$1 = this;
return self__.meta16146;
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16146","meta16146",-1260757205,null)], null);
}));

(cljs.core.async.t_cljs$core$async16145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16145");

(cljs.core.async.t_cljs$core$async16145.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16145.
 */
cljs.core.async.__GT_t_cljs$core$async16145 = (function cljs$core$async$__GT_t_cljs$core$async16145(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16146){
return (new cljs.core.async.t_cljs$core$async16145(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16146));
});


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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16145(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14463__auto___18518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_16239){
var state_val_16240 = (state_16239[(1)]);
if((state_val_16240 === (7))){
var inst_16194 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
if(cljs.core.truth_(inst_16194)){
var statearr_16243_18519 = state_16239__$1;
(statearr_16243_18519[(1)] = (8));

} else {
var statearr_16244_18520 = state_16239__$1;
(statearr_16244_18520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (20))){
var inst_16187 = (state_16239[(7)]);
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16239__$1,(23),out,inst_16187);
} else {
if((state_val_16240 === (1))){
var inst_16167 = calc_state();
var inst_16168 = cljs.core.__destructure_map(inst_16167);
var inst_16169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16168,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16168,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16168,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16174 = inst_16167;
var state_16239__$1 = (function (){var statearr_16247 = state_16239;
(statearr_16247[(8)] = inst_16169);

(statearr_16247[(9)] = inst_16171);

(statearr_16247[(10)] = inst_16173);

(statearr_16247[(11)] = inst_16174);

return statearr_16247;
})();
var statearr_16248_18536 = state_16239__$1;
(statearr_16248_18536[(2)] = null);

(statearr_16248_18536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (24))){
var inst_16178 = (state_16239[(12)]);
var inst_16174 = inst_16178;
var state_16239__$1 = (function (){var statearr_16249 = state_16239;
(statearr_16249[(11)] = inst_16174);

return statearr_16249;
})();
var statearr_16250_18537 = state_16239__$1;
(statearr_16250_18537[(2)] = null);

(statearr_16250_18537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (4))){
var inst_16187 = (state_16239[(7)]);
var inst_16189 = (state_16239[(13)]);
var inst_16186 = (state_16239[(2)]);
var inst_16187__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16186,(0),null);
var inst_16188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16186,(1),null);
var inst_16189__$1 = (inst_16187__$1 == null);
var state_16239__$1 = (function (){var statearr_16252 = state_16239;
(statearr_16252[(7)] = inst_16187__$1);

(statearr_16252[(14)] = inst_16188);

(statearr_16252[(13)] = inst_16189__$1);

return statearr_16252;
})();
if(cljs.core.truth_(inst_16189__$1)){
var statearr_16254_18544 = state_16239__$1;
(statearr_16254_18544[(1)] = (5));

} else {
var statearr_16255_18546 = state_16239__$1;
(statearr_16255_18546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (15))){
var inst_16179 = (state_16239[(15)]);
var inst_16209 = (state_16239[(16)]);
var inst_16209__$1 = cljs.core.empty_QMARK_(inst_16179);
var state_16239__$1 = (function (){var statearr_16259 = state_16239;
(statearr_16259[(16)] = inst_16209__$1);

return statearr_16259;
})();
if(inst_16209__$1){
var statearr_16260_18548 = state_16239__$1;
(statearr_16260_18548[(1)] = (17));

} else {
var statearr_16261_18549 = state_16239__$1;
(statearr_16261_18549[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (21))){
var inst_16178 = (state_16239[(12)]);
var inst_16174 = inst_16178;
var state_16239__$1 = (function (){var statearr_16266 = state_16239;
(statearr_16266[(11)] = inst_16174);

return statearr_16266;
})();
var statearr_16267_18555 = state_16239__$1;
(statearr_16267_18555[(2)] = null);

(statearr_16267_18555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (13))){
var inst_16202 = (state_16239[(2)]);
var inst_16203 = calc_state();
var inst_16174 = inst_16203;
var state_16239__$1 = (function (){var statearr_16269 = state_16239;
(statearr_16269[(17)] = inst_16202);

(statearr_16269[(11)] = inst_16174);

return statearr_16269;
})();
var statearr_16271_18557 = state_16239__$1;
(statearr_16271_18557[(2)] = null);

(statearr_16271_18557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (22))){
var inst_16230 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16273_18558 = state_16239__$1;
(statearr_16273_18558[(2)] = inst_16230);

(statearr_16273_18558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (6))){
var inst_16188 = (state_16239[(14)]);
var inst_16192 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16188,change);
var state_16239__$1 = state_16239;
var statearr_16274_18559 = state_16239__$1;
(statearr_16274_18559[(2)] = inst_16192);

(statearr_16274_18559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (25))){
var state_16239__$1 = state_16239;
var statearr_16276_18560 = state_16239__$1;
(statearr_16276_18560[(2)] = null);

(statearr_16276_18560[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (17))){
var inst_16180 = (state_16239[(18)]);
var inst_16188 = (state_16239[(14)]);
var inst_16211 = (inst_16180.cljs$core$IFn$_invoke$arity$1 ? inst_16180.cljs$core$IFn$_invoke$arity$1(inst_16188) : inst_16180.call(null,inst_16188));
var inst_16212 = cljs.core.not(inst_16211);
var state_16239__$1 = state_16239;
var statearr_16279_18561 = state_16239__$1;
(statearr_16279_18561[(2)] = inst_16212);

(statearr_16279_18561[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (3))){
var inst_16234 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16239__$1,inst_16234);
} else {
if((state_val_16240 === (12))){
var state_16239__$1 = state_16239;
var statearr_16281_18562 = state_16239__$1;
(statearr_16281_18562[(2)] = null);

(statearr_16281_18562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (2))){
var inst_16174 = (state_16239[(11)]);
var inst_16178 = (state_16239[(12)]);
var inst_16178__$1 = cljs.core.__destructure_map(inst_16174);
var inst_16179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16178__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16178__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16178__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16239__$1 = (function (){var statearr_16285 = state_16239;
(statearr_16285[(12)] = inst_16178__$1);

(statearr_16285[(15)] = inst_16179);

(statearr_16285[(18)] = inst_16180);

return statearr_16285;
})();
return cljs.core.async.ioc_alts_BANG_(state_16239__$1,(4),inst_16181);
} else {
if((state_val_16240 === (23))){
var inst_16221 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
if(cljs.core.truth_(inst_16221)){
var statearr_16286_18567 = state_16239__$1;
(statearr_16286_18567[(1)] = (24));

} else {
var statearr_16288_18568 = state_16239__$1;
(statearr_16288_18568[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (19))){
var inst_16216 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16292_18569 = state_16239__$1;
(statearr_16292_18569[(2)] = inst_16216);

(statearr_16292_18569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (11))){
var inst_16188 = (state_16239[(14)]);
var inst_16199 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16188);
var state_16239__$1 = state_16239;
var statearr_16293_18570 = state_16239__$1;
(statearr_16293_18570[(2)] = inst_16199);

(statearr_16293_18570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (9))){
var inst_16179 = (state_16239[(15)]);
var inst_16188 = (state_16239[(14)]);
var inst_16206 = (state_16239[(19)]);
var inst_16206__$1 = (inst_16179.cljs$core$IFn$_invoke$arity$1 ? inst_16179.cljs$core$IFn$_invoke$arity$1(inst_16188) : inst_16179.call(null,inst_16188));
var state_16239__$1 = (function (){var statearr_16294 = state_16239;
(statearr_16294[(19)] = inst_16206__$1);

return statearr_16294;
})();
if(cljs.core.truth_(inst_16206__$1)){
var statearr_16296_18585 = state_16239__$1;
(statearr_16296_18585[(1)] = (14));

} else {
var statearr_16297_18586 = state_16239__$1;
(statearr_16297_18586[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (5))){
var inst_16189 = (state_16239[(13)]);
var state_16239__$1 = state_16239;
var statearr_16299_18599 = state_16239__$1;
(statearr_16299_18599[(2)] = inst_16189);

(statearr_16299_18599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (14))){
var inst_16206 = (state_16239[(19)]);
var state_16239__$1 = state_16239;
var statearr_16300_18603 = state_16239__$1;
(statearr_16300_18603[(2)] = inst_16206);

(statearr_16300_18603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (26))){
var inst_16226 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16301_18621 = state_16239__$1;
(statearr_16301_18621[(2)] = inst_16226);

(statearr_16301_18621[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (16))){
var inst_16218 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
if(cljs.core.truth_(inst_16218)){
var statearr_16304_18629 = state_16239__$1;
(statearr_16304_18629[(1)] = (20));

} else {
var statearr_16305_18632 = state_16239__$1;
(statearr_16305_18632[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (10))){
var inst_16232 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16307_18643 = state_16239__$1;
(statearr_16307_18643[(2)] = inst_16232);

(statearr_16307_18643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (18))){
var inst_16209 = (state_16239[(16)]);
var state_16239__$1 = state_16239;
var statearr_16308_18647 = state_16239__$1;
(statearr_16308_18647[(2)] = inst_16209);

(statearr_16308_18647[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (8))){
var inst_16187 = (state_16239[(7)]);
var inst_16196 = (inst_16187 == null);
var state_16239__$1 = state_16239;
if(cljs.core.truth_(inst_16196)){
var statearr_16310_18656 = state_16239__$1;
(statearr_16310_18656[(1)] = (11));

} else {
var statearr_16311_18657 = state_16239__$1;
(statearr_16311_18657[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14232__auto__ = null;
var cljs$core$async$mix_$_state_machine__14232__auto____0 = (function (){
var statearr_16312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16312[(0)] = cljs$core$async$mix_$_state_machine__14232__auto__);

(statearr_16312[(1)] = (1));

return statearr_16312;
});
var cljs$core$async$mix_$_state_machine__14232__auto____1 = (function (state_16239){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_16239);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e16313){var ex__14235__auto__ = e16313;
var statearr_16314_18675 = state_16239;
(statearr_16314_18675[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_16239[(4)]))){
var statearr_16315_18688 = state_16239;
(statearr_16315_18688[(1)] = cljs.core.first((state_16239[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18690 = state_16239;
state_16239 = G__18690;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14232__auto__ = function(state_16239){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14232__auto____1.call(this,state_16239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14232__auto____0;
cljs$core$async$mix_$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14232__auto____1;
return cljs$core$async$mix_$_state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_16318 = f__14464__auto__();
(statearr_16318[(6)] = c__14463__auto___18518);

return statearr_16318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18692 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18692(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18694 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18694(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18698 = (function() {
var G__18699 = null;
var G__18699__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18699__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18699 = function(p,v){
switch(arguments.length){
case 1:
return G__18699__1.call(this,p);
case 2:
return G__18699__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18699.cljs$core$IFn$_invoke$arity$1 = G__18699__1;
G__18699.cljs$core$IFn$_invoke$arity$2 = G__18699__2;
return G__18699;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16351 = arguments.length;
switch (G__16351) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18698(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18698(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16383 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16384){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16384 = meta16384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16385,meta16384__$1){
var self__ = this;
var _16385__$1 = this;
return (new cljs.core.async.t_cljs$core$async16383(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16384__$1));
}));

(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16385){
var self__ = this;
var _16385__$1 = this;
return self__.meta16384;
}));

(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16383.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16384","meta16384",-1812049943,null)], null);
}));

(cljs.core.async.t_cljs$core$async16383.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16383");

(cljs.core.async.t_cljs$core$async16383.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16383");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16383.
 */
cljs.core.async.__GT_t_cljs$core$async16383 = (function cljs$core$async$__GT_t_cljs$core$async16383(ch,topic_fn,buf_fn,mults,ensure_mult,meta16384){
return (new cljs.core.async.t_cljs$core$async16383(ch,topic_fn,buf_fn,mults,ensure_mult,meta16384));
});


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
var G__16377 = arguments.length;
switch (G__16377) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16366_SHARP_){
if(cljs.core.truth_((p1__16366_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16366_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16366_SHARP_.call(null,topic)))){
return p1__16366_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16366_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16383(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14463__auto___18744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_16486){
var state_val_16487 = (state_16486[(1)]);
if((state_val_16487 === (7))){
var inst_16481 = (state_16486[(2)]);
var state_16486__$1 = state_16486;
var statearr_16491_18750 = state_16486__$1;
(statearr_16491_18750[(2)] = inst_16481);

(statearr_16491_18750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (20))){
var state_16486__$1 = state_16486;
var statearr_16492_18754 = state_16486__$1;
(statearr_16492_18754[(2)] = null);

(statearr_16492_18754[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (1))){
var state_16486__$1 = state_16486;
var statearr_16494_18759 = state_16486__$1;
(statearr_16494_18759[(2)] = null);

(statearr_16494_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (24))){
var inst_16463 = (state_16486[(7)]);
var inst_16473 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16463);
var state_16486__$1 = state_16486;
var statearr_16499_18760 = state_16486__$1;
(statearr_16499_18760[(2)] = inst_16473);

(statearr_16499_18760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (4))){
var inst_16409 = (state_16486[(8)]);
var inst_16409__$1 = (state_16486[(2)]);
var inst_16410 = (inst_16409__$1 == null);
var state_16486__$1 = (function (){var statearr_16501 = state_16486;
(statearr_16501[(8)] = inst_16409__$1);

return statearr_16501;
})();
if(cljs.core.truth_(inst_16410)){
var statearr_16502_18771 = state_16486__$1;
(statearr_16502_18771[(1)] = (5));

} else {
var statearr_16504_18772 = state_16486__$1;
(statearr_16504_18772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (15))){
var inst_16455 = (state_16486[(2)]);
var state_16486__$1 = state_16486;
var statearr_16505_18773 = state_16486__$1;
(statearr_16505_18773[(2)] = inst_16455);

(statearr_16505_18773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (21))){
var inst_16478 = (state_16486[(2)]);
var state_16486__$1 = (function (){var statearr_16510 = state_16486;
(statearr_16510[(9)] = inst_16478);

return statearr_16510;
})();
var statearr_16512_18781 = state_16486__$1;
(statearr_16512_18781[(2)] = null);

(statearr_16512_18781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (13))){
var inst_16436 = (state_16486[(10)]);
var inst_16439 = cljs.core.chunked_seq_QMARK_(inst_16436);
var state_16486__$1 = state_16486;
if(inst_16439){
var statearr_16515_18782 = state_16486__$1;
(statearr_16515_18782[(1)] = (16));

} else {
var statearr_16517_18783 = state_16486__$1;
(statearr_16517_18783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (22))){
var inst_16470 = (state_16486[(2)]);
var state_16486__$1 = state_16486;
if(cljs.core.truth_(inst_16470)){
var statearr_16518_18784 = state_16486__$1;
(statearr_16518_18784[(1)] = (23));

} else {
var statearr_16519_18785 = state_16486__$1;
(statearr_16519_18785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (6))){
var inst_16409 = (state_16486[(8)]);
var inst_16463 = (state_16486[(7)]);
var inst_16465 = (state_16486[(11)]);
var inst_16463__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16409) : topic_fn.call(null,inst_16409));
var inst_16464 = cljs.core.deref(mults);
var inst_16465__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16464,inst_16463__$1);
var state_16486__$1 = (function (){var statearr_16523 = state_16486;
(statearr_16523[(7)] = inst_16463__$1);

(statearr_16523[(11)] = inst_16465__$1);

return statearr_16523;
})();
if(cljs.core.truth_(inst_16465__$1)){
var statearr_16525_18790 = state_16486__$1;
(statearr_16525_18790[(1)] = (19));

} else {
var statearr_16526_18791 = state_16486__$1;
(statearr_16526_18791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (25))){
var inst_16475 = (state_16486[(2)]);
var state_16486__$1 = state_16486;
var statearr_16527_18793 = state_16486__$1;
(statearr_16527_18793[(2)] = inst_16475);

(statearr_16527_18793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (17))){
var inst_16436 = (state_16486[(10)]);
var inst_16446 = cljs.core.first(inst_16436);
var inst_16447 = cljs.core.async.muxch_STAR_(inst_16446);
var inst_16448 = cljs.core.async.close_BANG_(inst_16447);
var inst_16449 = cljs.core.next(inst_16436);
var inst_16421 = inst_16449;
var inst_16422 = null;
var inst_16423 = (0);
var inst_16424 = (0);
var state_16486__$1 = (function (){var statearr_16531 = state_16486;
(statearr_16531[(12)] = inst_16448);

(statearr_16531[(13)] = inst_16421);

(statearr_16531[(14)] = inst_16422);

(statearr_16531[(15)] = inst_16423);

(statearr_16531[(16)] = inst_16424);

return statearr_16531;
})();
var statearr_16533_18797 = state_16486__$1;
(statearr_16533_18797[(2)] = null);

(statearr_16533_18797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (3))){
var inst_16483 = (state_16486[(2)]);
var state_16486__$1 = state_16486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16486__$1,inst_16483);
} else {
if((state_val_16487 === (12))){
var inst_16457 = (state_16486[(2)]);
var state_16486__$1 = state_16486;
var statearr_16536_18798 = state_16486__$1;
(statearr_16536_18798[(2)] = inst_16457);

(statearr_16536_18798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (2))){
var state_16486__$1 = state_16486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16486__$1,(4),ch);
} else {
if((state_val_16487 === (23))){
var state_16486__$1 = state_16486;
var statearr_16540_18799 = state_16486__$1;
(statearr_16540_18799[(2)] = null);

(statearr_16540_18799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (19))){
var inst_16465 = (state_16486[(11)]);
var inst_16409 = (state_16486[(8)]);
var inst_16468 = cljs.core.async.muxch_STAR_(inst_16465);
var state_16486__$1 = state_16486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16486__$1,(22),inst_16468,inst_16409);
} else {
if((state_val_16487 === (11))){
var inst_16421 = (state_16486[(13)]);
var inst_16436 = (state_16486[(10)]);
var inst_16436__$1 = cljs.core.seq(inst_16421);
var state_16486__$1 = (function (){var statearr_16544 = state_16486;
(statearr_16544[(10)] = inst_16436__$1);

return statearr_16544;
})();
if(inst_16436__$1){
var statearr_16546_18804 = state_16486__$1;
(statearr_16546_18804[(1)] = (13));

} else {
var statearr_16547_18805 = state_16486__$1;
(statearr_16547_18805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (9))){
var inst_16460 = (state_16486[(2)]);
var state_16486__$1 = state_16486;
var statearr_16548_18808 = state_16486__$1;
(statearr_16548_18808[(2)] = inst_16460);

(statearr_16548_18808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (5))){
var inst_16417 = cljs.core.deref(mults);
var inst_16418 = cljs.core.vals(inst_16417);
var inst_16419 = cljs.core.seq(inst_16418);
var inst_16421 = inst_16419;
var inst_16422 = null;
var inst_16423 = (0);
var inst_16424 = (0);
var state_16486__$1 = (function (){var statearr_16553 = state_16486;
(statearr_16553[(13)] = inst_16421);

(statearr_16553[(14)] = inst_16422);

(statearr_16553[(15)] = inst_16423);

(statearr_16553[(16)] = inst_16424);

return statearr_16553;
})();
var statearr_16556_18812 = state_16486__$1;
(statearr_16556_18812[(2)] = null);

(statearr_16556_18812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (14))){
var state_16486__$1 = state_16486;
var statearr_16561_18815 = state_16486__$1;
(statearr_16561_18815[(2)] = null);

(statearr_16561_18815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (16))){
var inst_16436 = (state_16486[(10)]);
var inst_16441 = cljs.core.chunk_first(inst_16436);
var inst_16442 = cljs.core.chunk_rest(inst_16436);
var inst_16443 = cljs.core.count(inst_16441);
var inst_16421 = inst_16442;
var inst_16422 = inst_16441;
var inst_16423 = inst_16443;
var inst_16424 = (0);
var state_16486__$1 = (function (){var statearr_16564 = state_16486;
(statearr_16564[(13)] = inst_16421);

(statearr_16564[(14)] = inst_16422);

(statearr_16564[(15)] = inst_16423);

(statearr_16564[(16)] = inst_16424);

return statearr_16564;
})();
var statearr_16569_18821 = state_16486__$1;
(statearr_16569_18821[(2)] = null);

(statearr_16569_18821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (10))){
var inst_16422 = (state_16486[(14)]);
var inst_16424 = (state_16486[(16)]);
var inst_16421 = (state_16486[(13)]);
var inst_16423 = (state_16486[(15)]);
var inst_16430 = cljs.core._nth(inst_16422,inst_16424);
var inst_16431 = cljs.core.async.muxch_STAR_(inst_16430);
var inst_16432 = cljs.core.async.close_BANG_(inst_16431);
var inst_16433 = (inst_16424 + (1));
var tmp16558 = inst_16422;
var tmp16559 = inst_16423;
var tmp16560 = inst_16421;
var inst_16421__$1 = tmp16560;
var inst_16422__$1 = tmp16558;
var inst_16423__$1 = tmp16559;
var inst_16424__$1 = inst_16433;
var state_16486__$1 = (function (){var statearr_16583 = state_16486;
(statearr_16583[(17)] = inst_16432);

(statearr_16583[(13)] = inst_16421__$1);

(statearr_16583[(14)] = inst_16422__$1);

(statearr_16583[(15)] = inst_16423__$1);

(statearr_16583[(16)] = inst_16424__$1);

return statearr_16583;
})();
var statearr_16589_18824 = state_16486__$1;
(statearr_16589_18824[(2)] = null);

(statearr_16589_18824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (18))){
var inst_16452 = (state_16486[(2)]);
var state_16486__$1 = state_16486;
var statearr_16594_18826 = state_16486__$1;
(statearr_16594_18826[(2)] = inst_16452);

(statearr_16594_18826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16487 === (8))){
var inst_16424 = (state_16486[(16)]);
var inst_16423 = (state_16486[(15)]);
var inst_16427 = (inst_16424 < inst_16423);
var inst_16428 = inst_16427;
var state_16486__$1 = state_16486;
if(cljs.core.truth_(inst_16428)){
var statearr_16599_18830 = state_16486__$1;
(statearr_16599_18830[(1)] = (10));

} else {
var statearr_16600_18831 = state_16486__$1;
(statearr_16600_18831[(1)] = (11));

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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_16614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16614[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_16614[(1)] = (1));

return statearr_16614;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_16486){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_16486);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e16620){var ex__14235__auto__ = e16620;
var statearr_16626_18839 = state_16486;
(statearr_16626_18839[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_16486[(4)]))){
var statearr_16631_18840 = state_16486;
(statearr_16631_18840[(1)] = cljs.core.first((state_16486[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18842 = state_16486;
state_16486 = G__18842;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_16486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_16486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_16641 = f__14464__auto__();
(statearr_16641[(6)] = c__14463__auto___18744);

return statearr_16641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
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
var G__16652 = arguments.length;
switch (G__16652) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16682 = arguments.length;
switch (G__16682) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__16689 = arguments.length;
switch (G__16689) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14463__auto___18868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_16762){
var state_val_16763 = (state_16762[(1)]);
if((state_val_16763 === (7))){
var state_16762__$1 = state_16762;
var statearr_16764_18869 = state_16762__$1;
(statearr_16764_18869[(2)] = null);

(statearr_16764_18869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (1))){
var state_16762__$1 = state_16762;
var statearr_16765_18870 = state_16762__$1;
(statearr_16765_18870[(2)] = null);

(statearr_16765_18870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (4))){
var inst_16715 = (state_16762[(7)]);
var inst_16714 = (state_16762[(8)]);
var inst_16717 = (inst_16715 < inst_16714);
var state_16762__$1 = state_16762;
if(cljs.core.truth_(inst_16717)){
var statearr_16766_18872 = state_16762__$1;
(statearr_16766_18872[(1)] = (6));

} else {
var statearr_16767_18873 = state_16762__$1;
(statearr_16767_18873[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (15))){
var inst_16748 = (state_16762[(9)]);
var inst_16753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16748);
var state_16762__$1 = state_16762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16762__$1,(17),out,inst_16753);
} else {
if((state_val_16763 === (13))){
var inst_16748 = (state_16762[(9)]);
var inst_16748__$1 = (state_16762[(2)]);
var inst_16749 = cljs.core.some(cljs.core.nil_QMARK_,inst_16748__$1);
var state_16762__$1 = (function (){var statearr_16768 = state_16762;
(statearr_16768[(9)] = inst_16748__$1);

return statearr_16768;
})();
if(cljs.core.truth_(inst_16749)){
var statearr_16769_18877 = state_16762__$1;
(statearr_16769_18877[(1)] = (14));

} else {
var statearr_16770_18878 = state_16762__$1;
(statearr_16770_18878[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (6))){
var state_16762__$1 = state_16762;
var statearr_16771_18879 = state_16762__$1;
(statearr_16771_18879[(2)] = null);

(statearr_16771_18879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (17))){
var inst_16755 = (state_16762[(2)]);
var state_16762__$1 = (function (){var statearr_16775 = state_16762;
(statearr_16775[(10)] = inst_16755);

return statearr_16775;
})();
var statearr_16776_18880 = state_16762__$1;
(statearr_16776_18880[(2)] = null);

(statearr_16776_18880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (3))){
var inst_16760 = (state_16762[(2)]);
var state_16762__$1 = state_16762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16762__$1,inst_16760);
} else {
if((state_val_16763 === (12))){
var _ = (function (){var statearr_16778 = state_16762;
(statearr_16778[(4)] = cljs.core.rest((state_16762[(4)])));

return statearr_16778;
})();
var state_16762__$1 = state_16762;
var ex16774 = (state_16762__$1[(2)]);
var statearr_16782_18883 = state_16762__$1;
(statearr_16782_18883[(5)] = ex16774);


if((ex16774 instanceof Object)){
var statearr_16785_18885 = state_16762__$1;
(statearr_16785_18885[(1)] = (11));

(statearr_16785_18885[(5)] = null);

} else {
throw ex16774;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (2))){
var inst_16713 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16714 = cnt;
var inst_16715 = (0);
var state_16762__$1 = (function (){var statearr_16791 = state_16762;
(statearr_16791[(11)] = inst_16713);

(statearr_16791[(8)] = inst_16714);

(statearr_16791[(7)] = inst_16715);

return statearr_16791;
})();
var statearr_16792_18887 = state_16762__$1;
(statearr_16792_18887[(2)] = null);

(statearr_16792_18887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (11))){
var inst_16727 = (state_16762[(2)]);
var inst_16728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16762__$1 = (function (){var statearr_16793 = state_16762;
(statearr_16793[(12)] = inst_16727);

return statearr_16793;
})();
var statearr_16794_18889 = state_16762__$1;
(statearr_16794_18889[(2)] = inst_16728);

(statearr_16794_18889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (9))){
var inst_16715 = (state_16762[(7)]);
var _ = (function (){var statearr_16798 = state_16762;
(statearr_16798[(4)] = cljs.core.cons((12),(state_16762[(4)])));

return statearr_16798;
})();
var inst_16734 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16715) : chs__$1.call(null,inst_16715));
var inst_16735 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16715) : done.call(null,inst_16715));
var inst_16736 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16734,inst_16735);
var ___$1 = (function (){var statearr_16804 = state_16762;
(statearr_16804[(4)] = cljs.core.rest((state_16762[(4)])));

return statearr_16804;
})();
var state_16762__$1 = state_16762;
var statearr_16830_18910 = state_16762__$1;
(statearr_16830_18910[(2)] = inst_16736);

(statearr_16830_18910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (5))){
var inst_16746 = (state_16762[(2)]);
var state_16762__$1 = (function (){var statearr_16831 = state_16762;
(statearr_16831[(13)] = inst_16746);

return statearr_16831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16762__$1,(13),dchan);
} else {
if((state_val_16763 === (14))){
var inst_16751 = cljs.core.async.close_BANG_(out);
var state_16762__$1 = state_16762;
var statearr_16834_18911 = state_16762__$1;
(statearr_16834_18911[(2)] = inst_16751);

(statearr_16834_18911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (16))){
var inst_16758 = (state_16762[(2)]);
var state_16762__$1 = state_16762;
var statearr_16839_18916 = state_16762__$1;
(statearr_16839_18916[(2)] = inst_16758);

(statearr_16839_18916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (10))){
var inst_16715 = (state_16762[(7)]);
var inst_16739 = (state_16762[(2)]);
var inst_16740 = (inst_16715 + (1));
var inst_16715__$1 = inst_16740;
var state_16762__$1 = (function (){var statearr_16842 = state_16762;
(statearr_16842[(14)] = inst_16739);

(statearr_16842[(7)] = inst_16715__$1);

return statearr_16842;
})();
var statearr_16845_18925 = state_16762__$1;
(statearr_16845_18925[(2)] = null);

(statearr_16845_18925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (8))){
var inst_16744 = (state_16762[(2)]);
var state_16762__$1 = state_16762;
var statearr_16850_18926 = state_16762__$1;
(statearr_16850_18926[(2)] = inst_16744);

(statearr_16850_18926[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_16853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16853[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_16853[(1)] = (1));

return statearr_16853;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_16762){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_16762);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e16854){var ex__14235__auto__ = e16854;
var statearr_16855_18939 = state_16762;
(statearr_16855_18939[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_16762[(4)]))){
var statearr_16856_18942 = state_16762;
(statearr_16856_18942[(1)] = cljs.core.first((state_16762[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18951 = state_16762;
state_16762 = G__18951;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_16762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_16762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_16862 = f__14464__auto__();
(statearr_16862[(6)] = c__14463__auto___18868);

return statearr_16862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));

}

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
var G__16870 = arguments.length;
switch (G__16870) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14463__auto___18961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_16918){
var state_val_16919 = (state_16918[(1)]);
if((state_val_16919 === (7))){
var inst_16891 = (state_16918[(7)]);
var inst_16892 = (state_16918[(8)]);
var inst_16891__$1 = (state_16918[(2)]);
var inst_16892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16891__$1,(0),null);
var inst_16894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16891__$1,(1),null);
var inst_16896 = (inst_16892__$1 == null);
var state_16918__$1 = (function (){var statearr_16930 = state_16918;
(statearr_16930[(7)] = inst_16891__$1);

(statearr_16930[(8)] = inst_16892__$1);

(statearr_16930[(9)] = inst_16894);

return statearr_16930;
})();
if(cljs.core.truth_(inst_16896)){
var statearr_16934_18964 = state_16918__$1;
(statearr_16934_18964[(1)] = (8));

} else {
var statearr_16938_18966 = state_16918__$1;
(statearr_16938_18966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (1))){
var inst_16874 = cljs.core.vec(chs);
var inst_16879 = inst_16874;
var state_16918__$1 = (function (){var statearr_16944 = state_16918;
(statearr_16944[(10)] = inst_16879);

return statearr_16944;
})();
var statearr_16946_18967 = state_16918__$1;
(statearr_16946_18967[(2)] = null);

(statearr_16946_18967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (4))){
var inst_16879 = (state_16918[(10)]);
var state_16918__$1 = state_16918;
return cljs.core.async.ioc_alts_BANG_(state_16918__$1,(7),inst_16879);
} else {
if((state_val_16919 === (6))){
var inst_16911 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16955_18971 = state_16918__$1;
(statearr_16955_18971[(2)] = inst_16911);

(statearr_16955_18971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (3))){
var inst_16913 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16918__$1,inst_16913);
} else {
if((state_val_16919 === (2))){
var inst_16879 = (state_16918[(10)]);
var inst_16881 = cljs.core.count(inst_16879);
var inst_16882 = (inst_16881 > (0));
var state_16918__$1 = state_16918;
if(cljs.core.truth_(inst_16882)){
var statearr_16973_18977 = state_16918__$1;
(statearr_16973_18977[(1)] = (4));

} else {
var statearr_16974_18978 = state_16918__$1;
(statearr_16974_18978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (11))){
var inst_16879 = (state_16918[(10)]);
var inst_16904 = (state_16918[(2)]);
var tmp16960 = inst_16879;
var inst_16879__$1 = tmp16960;
var state_16918__$1 = (function (){var statearr_16979 = state_16918;
(statearr_16979[(11)] = inst_16904);

(statearr_16979[(10)] = inst_16879__$1);

return statearr_16979;
})();
var statearr_16986_18981 = state_16918__$1;
(statearr_16986_18981[(2)] = null);

(statearr_16986_18981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (9))){
var inst_16892 = (state_16918[(8)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16918__$1,(11),out,inst_16892);
} else {
if((state_val_16919 === (5))){
var inst_16909 = cljs.core.async.close_BANG_(out);
var state_16918__$1 = state_16918;
var statearr_17031_18984 = state_16918__$1;
(statearr_17031_18984[(2)] = inst_16909);

(statearr_17031_18984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (10))){
var inst_16907 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_17038_18987 = state_16918__$1;
(statearr_17038_18987[(2)] = inst_16907);

(statearr_17038_18987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (8))){
var inst_16879 = (state_16918[(10)]);
var inst_16891 = (state_16918[(7)]);
var inst_16892 = (state_16918[(8)]);
var inst_16894 = (state_16918[(9)]);
var inst_16898 = (function (){var cs = inst_16879;
var vec__16884 = inst_16891;
var v = inst_16892;
var c = inst_16894;
return (function (p1__16868_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16868_SHARP_);
});
})();
var inst_16900 = cljs.core.filterv(inst_16898,inst_16879);
var inst_16879__$1 = inst_16900;
var state_16918__$1 = (function (){var statearr_17053 = state_16918;
(statearr_17053[(10)] = inst_16879__$1);

return statearr_17053;
})();
var statearr_17054_18992 = state_16918__$1;
(statearr_17054_18992[(2)] = null);

(statearr_17054_18992[(1)] = (2));


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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_17055 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17055[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_17055[(1)] = (1));

return statearr_17055;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_16918){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_16918);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e17056){var ex__14235__auto__ = e17056;
var statearr_17061_18998 = state_16918;
(statearr_17061_18998[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_16918[(4)]))){
var statearr_17062_19001 = state_16918;
(statearr_17062_19001[(1)] = cljs.core.first((state_16918[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19016 = state_16918;
state_16918 = G__19016;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_16918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_16918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_17063 = f__14464__auto__();
(statearr_17063[(6)] = c__14463__auto___18961);

return statearr_17063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17066 = arguments.length;
switch (G__17066) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14463__auto___19045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_17100){
var state_val_17101 = (state_17100[(1)]);
if((state_val_17101 === (7))){
var inst_17078 = (state_17100[(7)]);
var inst_17078__$1 = (state_17100[(2)]);
var inst_17079 = (inst_17078__$1 == null);
var inst_17080 = cljs.core.not(inst_17079);
var state_17100__$1 = (function (){var statearr_17106 = state_17100;
(statearr_17106[(7)] = inst_17078__$1);

return statearr_17106;
})();
if(inst_17080){
var statearr_17107_19055 = state_17100__$1;
(statearr_17107_19055[(1)] = (8));

} else {
var statearr_17108_19057 = state_17100__$1;
(statearr_17108_19057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (1))){
var inst_17069 = (0);
var state_17100__$1 = (function (){var statearr_17111 = state_17100;
(statearr_17111[(8)] = inst_17069);

return statearr_17111;
})();
var statearr_17112_19065 = state_17100__$1;
(statearr_17112_19065[(2)] = null);

(statearr_17112_19065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (4))){
var state_17100__$1 = state_17100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17100__$1,(7),ch);
} else {
if((state_val_17101 === (6))){
var inst_17095 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17113_19080 = state_17100__$1;
(statearr_17113_19080[(2)] = inst_17095);

(statearr_17113_19080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (3))){
var inst_17097 = (state_17100[(2)]);
var inst_17098 = cljs.core.async.close_BANG_(out);
var state_17100__$1 = (function (){var statearr_17114 = state_17100;
(statearr_17114[(9)] = inst_17097);

return statearr_17114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17100__$1,inst_17098);
} else {
if((state_val_17101 === (2))){
var inst_17069 = (state_17100[(8)]);
var inst_17075 = (inst_17069 < n);
var state_17100__$1 = state_17100;
if(cljs.core.truth_(inst_17075)){
var statearr_17115_19106 = state_17100__$1;
(statearr_17115_19106[(1)] = (4));

} else {
var statearr_17116_19112 = state_17100__$1;
(statearr_17116_19112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (11))){
var inst_17069 = (state_17100[(8)]);
var inst_17087 = (state_17100[(2)]);
var inst_17088 = (inst_17069 + (1));
var inst_17069__$1 = inst_17088;
var state_17100__$1 = (function (){var statearr_17117 = state_17100;
(statearr_17117[(10)] = inst_17087);

(statearr_17117[(8)] = inst_17069__$1);

return statearr_17117;
})();
var statearr_17118_19116 = state_17100__$1;
(statearr_17118_19116[(2)] = null);

(statearr_17118_19116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (9))){
var state_17100__$1 = state_17100;
var statearr_17119_19117 = state_17100__$1;
(statearr_17119_19117[(2)] = null);

(statearr_17119_19117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (5))){
var state_17100__$1 = state_17100;
var statearr_17120_19122 = state_17100__$1;
(statearr_17120_19122[(2)] = null);

(statearr_17120_19122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (10))){
var inst_17092 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17121_19123 = state_17100__$1;
(statearr_17121_19123[(2)] = inst_17092);

(statearr_17121_19123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (8))){
var inst_17078 = (state_17100[(7)]);
var state_17100__$1 = state_17100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17100__$1,(11),out,inst_17078);
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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_17122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17122[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_17122[(1)] = (1));

return statearr_17122;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_17100){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_17100);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e17123){var ex__14235__auto__ = e17123;
var statearr_17124_19125 = state_17100;
(statearr_17124_19125[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_17100[(4)]))){
var statearr_17125_19128 = state_17100;
(statearr_17125_19128[(1)] = cljs.core.first((state_17100[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19130 = state_17100;
state_17100 = G__19130;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_17100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_17100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_17127 = f__14464__auto__();
(statearr_17127[(6)] = c__14463__auto___19045);

return statearr_17127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17137 = (function (f,ch,meta17132,_,fn1,meta17138){
this.f = f;
this.ch = ch;
this.meta17132 = meta17132;
this._ = _;
this.fn1 = fn1;
this.meta17138 = meta17138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17139,meta17138__$1){
var self__ = this;
var _17139__$1 = this;
return (new cljs.core.async.t_cljs$core$async17137(self__.f,self__.ch,self__.meta17132,self__._,self__.fn1,meta17138__$1));
}));

(cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17139){
var self__ = this;
var _17139__$1 = this;
return self__.meta17138;
}));

(cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17129_SHARP_){
var G__17149 = (((p1__17129_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17129_SHARP_) : self__.f.call(null,p1__17129_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17149) : f1.call(null,G__17149));
});
}));

(cljs.core.async.t_cljs$core$async17137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17132","meta17132",1411433104,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17131","cljs.core.async/t_cljs$core$async17131",-133556900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17138","meta17138",1067803857,null)], null);
}));

(cljs.core.async.t_cljs$core$async17137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17137");

(cljs.core.async.t_cljs$core$async17137.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17137.
 */
cljs.core.async.__GT_t_cljs$core$async17137 = (function cljs$core$async$__GT_t_cljs$core$async17137(f,ch,meta17132,_,fn1,meta17138){
return (new cljs.core.async.t_cljs$core$async17137(f,ch,meta17132,_,fn1,meta17138));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17131 = (function (f,ch,meta17132){
this.f = f;
this.ch = ch;
this.meta17132 = meta17132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17133,meta17132__$1){
var self__ = this;
var _17133__$1 = this;
return (new cljs.core.async.t_cljs$core$async17131(self__.f,self__.ch,meta17132__$1));
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17133){
var self__ = this;
var _17133__$1 = this;
return self__.meta17132;
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17137(self__.f,self__.ch,self__.meta17132,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17150 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17150) : self__.f.call(null,G__17150));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17132","meta17132",1411433104,null)], null);
}));

(cljs.core.async.t_cljs$core$async17131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17131");

(cljs.core.async.t_cljs$core$async17131.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17131.
 */
cljs.core.async.__GT_t_cljs$core$async17131 = (function cljs$core$async$__GT_t_cljs$core$async17131(f,ch,meta17132){
return (new cljs.core.async.t_cljs$core$async17131(f,ch,meta17132));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17131(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17151 = (function (f,ch,meta17152){
this.f = f;
this.ch = ch;
this.meta17152 = meta17152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17153,meta17152__$1){
var self__ = this;
var _17153__$1 = this;
return (new cljs.core.async.t_cljs$core$async17151(self__.f,self__.ch,meta17152__$1));
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17153){
var self__ = this;
var _17153__$1 = this;
return self__.meta17152;
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17152","meta17152",1412503215,null)], null);
}));

(cljs.core.async.t_cljs$core$async17151.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17151");

(cljs.core.async.t_cljs$core$async17151.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17151");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17151.
 */
cljs.core.async.__GT_t_cljs$core$async17151 = (function cljs$core$async$__GT_t_cljs$core$async17151(f,ch,meta17152){
return (new cljs.core.async.t_cljs$core$async17151(f,ch,meta17152));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17151(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17164 = (function (p,ch,meta17165){
this.p = p;
this.ch = ch;
this.meta17165 = meta17165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17166,meta17165__$1){
var self__ = this;
var _17166__$1 = this;
return (new cljs.core.async.t_cljs$core$async17164(self__.p,self__.ch,meta17165__$1));
}));

(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17166){
var self__ = this;
var _17166__$1 = this;
return self__.meta17165;
}));

(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17165","meta17165",-2041872393,null)], null);
}));

(cljs.core.async.t_cljs$core$async17164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17164");

(cljs.core.async.t_cljs$core$async17164.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17164.
 */
cljs.core.async.__GT_t_cljs$core$async17164 = (function cljs$core$async$__GT_t_cljs$core$async17164(p,ch,meta17165){
return (new cljs.core.async.t_cljs$core$async17164(p,ch,meta17165));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17164(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17180 = arguments.length;
switch (G__17180) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14463__auto___19193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_17206){
var state_val_17207 = (state_17206[(1)]);
if((state_val_17207 === (7))){
var inst_17201 = (state_17206[(2)]);
var state_17206__$1 = state_17206;
var statearr_17211_19194 = state_17206__$1;
(statearr_17211_19194[(2)] = inst_17201);

(statearr_17211_19194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17207 === (1))){
var state_17206__$1 = state_17206;
var statearr_17212_19196 = state_17206__$1;
(statearr_17212_19196[(2)] = null);

(statearr_17212_19196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17207 === (4))){
var inst_17187 = (state_17206[(7)]);
var inst_17187__$1 = (state_17206[(2)]);
var inst_17188 = (inst_17187__$1 == null);
var state_17206__$1 = (function (){var statearr_17215 = state_17206;
(statearr_17215[(7)] = inst_17187__$1);

return statearr_17215;
})();
if(cljs.core.truth_(inst_17188)){
var statearr_17216_19200 = state_17206__$1;
(statearr_17216_19200[(1)] = (5));

} else {
var statearr_17220_19201 = state_17206__$1;
(statearr_17220_19201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17207 === (6))){
var inst_17187 = (state_17206[(7)]);
var inst_17192 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17187) : p.call(null,inst_17187));
var state_17206__$1 = state_17206;
if(cljs.core.truth_(inst_17192)){
var statearr_17222_19204 = state_17206__$1;
(statearr_17222_19204[(1)] = (8));

} else {
var statearr_17223_19205 = state_17206__$1;
(statearr_17223_19205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17207 === (3))){
var inst_17204 = (state_17206[(2)]);
var state_17206__$1 = state_17206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17206__$1,inst_17204);
} else {
if((state_val_17207 === (2))){
var state_17206__$1 = state_17206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17206__$1,(4),ch);
} else {
if((state_val_17207 === (11))){
var inst_17195 = (state_17206[(2)]);
var state_17206__$1 = state_17206;
var statearr_17228_19214 = state_17206__$1;
(statearr_17228_19214[(2)] = inst_17195);

(statearr_17228_19214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17207 === (9))){
var state_17206__$1 = state_17206;
var statearr_17230_19216 = state_17206__$1;
(statearr_17230_19216[(2)] = null);

(statearr_17230_19216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17207 === (5))){
var inst_17190 = cljs.core.async.close_BANG_(out);
var state_17206__$1 = state_17206;
var statearr_17231_19217 = state_17206__$1;
(statearr_17231_19217[(2)] = inst_17190);

(statearr_17231_19217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17207 === (10))){
var inst_17198 = (state_17206[(2)]);
var state_17206__$1 = (function (){var statearr_17233 = state_17206;
(statearr_17233[(8)] = inst_17198);

return statearr_17233;
})();
var statearr_17234_19221 = state_17206__$1;
(statearr_17234_19221[(2)] = null);

(statearr_17234_19221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17207 === (8))){
var inst_17187 = (state_17206[(7)]);
var state_17206__$1 = state_17206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17206__$1,(11),out,inst_17187);
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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_17236 = [null,null,null,null,null,null,null,null,null];
(statearr_17236[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_17236[(1)] = (1));

return statearr_17236;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_17206){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_17206);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e17237){var ex__14235__auto__ = e17237;
var statearr_17238_19232 = state_17206;
(statearr_17238_19232[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_17206[(4)]))){
var statearr_17240_19237 = state_17206;
(statearr_17240_19237[(1)] = cljs.core.first((state_17206[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19250 = state_17206;
state_17206 = G__19250;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_17206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_17206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_17245 = f__14464__auto__();
(statearr_17245[(6)] = c__14463__auto___19193);

return statearr_17245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17247 = arguments.length;
switch (G__17247) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_17325){
var state_val_17326 = (state_17325[(1)]);
if((state_val_17326 === (7))){
var inst_17321 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17329_19338 = state_17325__$1;
(statearr_17329_19338[(2)] = inst_17321);

(statearr_17329_19338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (20))){
var inst_17291 = (state_17325[(7)]);
var inst_17302 = (state_17325[(2)]);
var inst_17303 = cljs.core.next(inst_17291);
var inst_17277 = inst_17303;
var inst_17278 = null;
var inst_17279 = (0);
var inst_17280 = (0);
var state_17325__$1 = (function (){var statearr_17330 = state_17325;
(statearr_17330[(8)] = inst_17302);

(statearr_17330[(9)] = inst_17277);

(statearr_17330[(10)] = inst_17278);

(statearr_17330[(11)] = inst_17279);

(statearr_17330[(12)] = inst_17280);

return statearr_17330;
})();
var statearr_17331_19380 = state_17325__$1;
(statearr_17331_19380[(2)] = null);

(statearr_17331_19380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (1))){
var state_17325__$1 = state_17325;
var statearr_17332_19388 = state_17325__$1;
(statearr_17332_19388[(2)] = null);

(statearr_17332_19388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (4))){
var inst_17262 = (state_17325[(13)]);
var inst_17262__$1 = (state_17325[(2)]);
var inst_17263 = (inst_17262__$1 == null);
var state_17325__$1 = (function (){var statearr_17333 = state_17325;
(statearr_17333[(13)] = inst_17262__$1);

return statearr_17333;
})();
if(cljs.core.truth_(inst_17263)){
var statearr_17335_19419 = state_17325__$1;
(statearr_17335_19419[(1)] = (5));

} else {
var statearr_17336_19420 = state_17325__$1;
(statearr_17336_19420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (15))){
var state_17325__$1 = state_17325;
var statearr_17341_19431 = state_17325__$1;
(statearr_17341_19431[(2)] = null);

(statearr_17341_19431[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (21))){
var state_17325__$1 = state_17325;
var statearr_17342_19445 = state_17325__$1;
(statearr_17342_19445[(2)] = null);

(statearr_17342_19445[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (13))){
var inst_17280 = (state_17325[(12)]);
var inst_17277 = (state_17325[(9)]);
var inst_17278 = (state_17325[(10)]);
var inst_17279 = (state_17325[(11)]);
var inst_17287 = (state_17325[(2)]);
var inst_17288 = (inst_17280 + (1));
var tmp17337 = inst_17277;
var tmp17338 = inst_17279;
var tmp17339 = inst_17278;
var inst_17277__$1 = tmp17337;
var inst_17278__$1 = tmp17339;
var inst_17279__$1 = tmp17338;
var inst_17280__$1 = inst_17288;
var state_17325__$1 = (function (){var statearr_17343 = state_17325;
(statearr_17343[(14)] = inst_17287);

(statearr_17343[(9)] = inst_17277__$1);

(statearr_17343[(10)] = inst_17278__$1);

(statearr_17343[(11)] = inst_17279__$1);

(statearr_17343[(12)] = inst_17280__$1);

return statearr_17343;
})();
var statearr_17344_19483 = state_17325__$1;
(statearr_17344_19483[(2)] = null);

(statearr_17344_19483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (22))){
var state_17325__$1 = state_17325;
var statearr_17360_19484 = state_17325__$1;
(statearr_17360_19484[(2)] = null);

(statearr_17360_19484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (6))){
var inst_17262 = (state_17325[(13)]);
var inst_17273 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17262) : f.call(null,inst_17262));
var inst_17274 = cljs.core.seq(inst_17273);
var inst_17277 = inst_17274;
var inst_17278 = null;
var inst_17279 = (0);
var inst_17280 = (0);
var state_17325__$1 = (function (){var statearr_17361 = state_17325;
(statearr_17361[(9)] = inst_17277);

(statearr_17361[(10)] = inst_17278);

(statearr_17361[(11)] = inst_17279);

(statearr_17361[(12)] = inst_17280);

return statearr_17361;
})();
var statearr_17363_19485 = state_17325__$1;
(statearr_17363_19485[(2)] = null);

(statearr_17363_19485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (17))){
var inst_17291 = (state_17325[(7)]);
var inst_17295 = cljs.core.chunk_first(inst_17291);
var inst_17296 = cljs.core.chunk_rest(inst_17291);
var inst_17297 = cljs.core.count(inst_17295);
var inst_17277 = inst_17296;
var inst_17278 = inst_17295;
var inst_17279 = inst_17297;
var inst_17280 = (0);
var state_17325__$1 = (function (){var statearr_17364 = state_17325;
(statearr_17364[(9)] = inst_17277);

(statearr_17364[(10)] = inst_17278);

(statearr_17364[(11)] = inst_17279);

(statearr_17364[(12)] = inst_17280);

return statearr_17364;
})();
var statearr_17365_19488 = state_17325__$1;
(statearr_17365_19488[(2)] = null);

(statearr_17365_19488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (3))){
var inst_17323 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17325__$1,inst_17323);
} else {
if((state_val_17326 === (12))){
var inst_17311 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17373_19489 = state_17325__$1;
(statearr_17373_19489[(2)] = inst_17311);

(statearr_17373_19489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (2))){
var state_17325__$1 = state_17325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17325__$1,(4),in$);
} else {
if((state_val_17326 === (23))){
var inst_17319 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17375_19491 = state_17325__$1;
(statearr_17375_19491[(2)] = inst_17319);

(statearr_17375_19491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (19))){
var inst_17306 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17376_19492 = state_17325__$1;
(statearr_17376_19492[(2)] = inst_17306);

(statearr_17376_19492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (11))){
var inst_17277 = (state_17325[(9)]);
var inst_17291 = (state_17325[(7)]);
var inst_17291__$1 = cljs.core.seq(inst_17277);
var state_17325__$1 = (function (){var statearr_17377 = state_17325;
(statearr_17377[(7)] = inst_17291__$1);

return statearr_17377;
})();
if(inst_17291__$1){
var statearr_17378_19497 = state_17325__$1;
(statearr_17378_19497[(1)] = (14));

} else {
var statearr_17379_19500 = state_17325__$1;
(statearr_17379_19500[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (9))){
var inst_17313 = (state_17325[(2)]);
var inst_17314 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17325__$1 = (function (){var statearr_17380 = state_17325;
(statearr_17380[(15)] = inst_17313);

return statearr_17380;
})();
if(cljs.core.truth_(inst_17314)){
var statearr_17383_19507 = state_17325__$1;
(statearr_17383_19507[(1)] = (21));

} else {
var statearr_17384_19509 = state_17325__$1;
(statearr_17384_19509[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (5))){
var inst_17265 = cljs.core.async.close_BANG_(out);
var state_17325__$1 = state_17325;
var statearr_17395_19515 = state_17325__$1;
(statearr_17395_19515[(2)] = inst_17265);

(statearr_17395_19515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (14))){
var inst_17291 = (state_17325[(7)]);
var inst_17293 = cljs.core.chunked_seq_QMARK_(inst_17291);
var state_17325__$1 = state_17325;
if(inst_17293){
var statearr_17399_19522 = state_17325__$1;
(statearr_17399_19522[(1)] = (17));

} else {
var statearr_17400_19524 = state_17325__$1;
(statearr_17400_19524[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (16))){
var inst_17309 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17401_19527 = state_17325__$1;
(statearr_17401_19527[(2)] = inst_17309);

(statearr_17401_19527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (10))){
var inst_17278 = (state_17325[(10)]);
var inst_17280 = (state_17325[(12)]);
var inst_17285 = cljs.core._nth(inst_17278,inst_17280);
var state_17325__$1 = state_17325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17325__$1,(13),out,inst_17285);
} else {
if((state_val_17326 === (18))){
var inst_17291 = (state_17325[(7)]);
var inst_17300 = cljs.core.first(inst_17291);
var state_17325__$1 = state_17325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17325__$1,(20),out,inst_17300);
} else {
if((state_val_17326 === (8))){
var inst_17280 = (state_17325[(12)]);
var inst_17279 = (state_17325[(11)]);
var inst_17282 = (inst_17280 < inst_17279);
var inst_17283 = inst_17282;
var state_17325__$1 = state_17325;
if(cljs.core.truth_(inst_17283)){
var statearr_17405_19528 = state_17325__$1;
(statearr_17405_19528[(1)] = (10));

} else {
var statearr_17406_19529 = state_17325__$1;
(statearr_17406_19529[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14232__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14232__auto____0 = (function (){
var statearr_17407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17407[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14232__auto__);

(statearr_17407[(1)] = (1));

return statearr_17407;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14232__auto____1 = (function (state_17325){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_17325);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e17408){var ex__14235__auto__ = e17408;
var statearr_17409_19542 = state_17325;
(statearr_17409_19542[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_17325[(4)]))){
var statearr_17410_19548 = state_17325;
(statearr_17410_19548[(1)] = cljs.core.first((state_17325[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19552 = state_17325;
state_17325 = G__19552;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14232__auto__ = function(state_17325){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14232__auto____1.call(this,state_17325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14232__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14232__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_17415 = f__14464__auto__();
(statearr_17415[(6)] = c__14463__auto__);

return statearr_17415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));

return c__14463__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17417 = arguments.length;
switch (G__17417) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17419 = arguments.length;
switch (G__17419) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17431 = arguments.length;
switch (G__17431) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14463__auto___19612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_17459){
var state_val_17460 = (state_17459[(1)]);
if((state_val_17460 === (7))){
var inst_17454 = (state_17459[(2)]);
var state_17459__$1 = state_17459;
var statearr_17461_19626 = state_17459__$1;
(statearr_17461_19626[(2)] = inst_17454);

(statearr_17461_19626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (1))){
var inst_17436 = null;
var state_17459__$1 = (function (){var statearr_17462 = state_17459;
(statearr_17462[(7)] = inst_17436);

return statearr_17462;
})();
var statearr_17463_19631 = state_17459__$1;
(statearr_17463_19631[(2)] = null);

(statearr_17463_19631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (4))){
var inst_17439 = (state_17459[(8)]);
var inst_17439__$1 = (state_17459[(2)]);
var inst_17440 = (inst_17439__$1 == null);
var inst_17441 = cljs.core.not(inst_17440);
var state_17459__$1 = (function (){var statearr_17466 = state_17459;
(statearr_17466[(8)] = inst_17439__$1);

return statearr_17466;
})();
if(inst_17441){
var statearr_17467_19633 = state_17459__$1;
(statearr_17467_19633[(1)] = (5));

} else {
var statearr_17468_19634 = state_17459__$1;
(statearr_17468_19634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (6))){
var state_17459__$1 = state_17459;
var statearr_17469_19635 = state_17459__$1;
(statearr_17469_19635[(2)] = null);

(statearr_17469_19635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (3))){
var inst_17456 = (state_17459[(2)]);
var inst_17457 = cljs.core.async.close_BANG_(out);
var state_17459__$1 = (function (){var statearr_17470 = state_17459;
(statearr_17470[(9)] = inst_17456);

return statearr_17470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17459__$1,inst_17457);
} else {
if((state_val_17460 === (2))){
var state_17459__$1 = state_17459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17459__$1,(4),ch);
} else {
if((state_val_17460 === (11))){
var inst_17439 = (state_17459[(8)]);
var inst_17448 = (state_17459[(2)]);
var inst_17436 = inst_17439;
var state_17459__$1 = (function (){var statearr_17472 = state_17459;
(statearr_17472[(10)] = inst_17448);

(statearr_17472[(7)] = inst_17436);

return statearr_17472;
})();
var statearr_17473_19641 = state_17459__$1;
(statearr_17473_19641[(2)] = null);

(statearr_17473_19641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (9))){
var inst_17439 = (state_17459[(8)]);
var state_17459__$1 = state_17459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17459__$1,(11),out,inst_17439);
} else {
if((state_val_17460 === (5))){
var inst_17439 = (state_17459[(8)]);
var inst_17436 = (state_17459[(7)]);
var inst_17443 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17439,inst_17436);
var state_17459__$1 = state_17459;
if(inst_17443){
var statearr_17479_19642 = state_17459__$1;
(statearr_17479_19642[(1)] = (8));

} else {
var statearr_17480_19644 = state_17459__$1;
(statearr_17480_19644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (10))){
var inst_17451 = (state_17459[(2)]);
var state_17459__$1 = state_17459;
var statearr_17481_19645 = state_17459__$1;
(statearr_17481_19645[(2)] = inst_17451);

(statearr_17481_19645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (8))){
var inst_17436 = (state_17459[(7)]);
var tmp17478 = inst_17436;
var inst_17436__$1 = tmp17478;
var state_17459__$1 = (function (){var statearr_17482 = state_17459;
(statearr_17482[(7)] = inst_17436__$1);

return statearr_17482;
})();
var statearr_17483_19651 = state_17459__$1;
(statearr_17483_19651[(2)] = null);

(statearr_17483_19651[(1)] = (2));


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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_17484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17484[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_17484[(1)] = (1));

return statearr_17484;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_17459){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_17459);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e17485){var ex__14235__auto__ = e17485;
var statearr_17486_19665 = state_17459;
(statearr_17486_19665[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_17459[(4)]))){
var statearr_17487_19677 = state_17459;
(statearr_17487_19677[(1)] = cljs.core.first((state_17459[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19678 = state_17459;
state_17459 = G__19678;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_17459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_17459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_17488 = f__14464__auto__();
(statearr_17488[(6)] = c__14463__auto___19612);

return statearr_17488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17490 = arguments.length;
switch (G__17490) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14463__auto___19819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_17536){
var state_val_17539 = (state_17536[(1)]);
if((state_val_17539 === (7))){
var inst_17532 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17544_19820 = state_17536__$1;
(statearr_17544_19820[(2)] = inst_17532);

(statearr_17544_19820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (1))){
var inst_17498 = (new Array(n));
var inst_17499 = inst_17498;
var inst_17500 = (0);
var state_17536__$1 = (function (){var statearr_17545 = state_17536;
(statearr_17545[(7)] = inst_17499);

(statearr_17545[(8)] = inst_17500);

return statearr_17545;
})();
var statearr_17546_19821 = state_17536__$1;
(statearr_17546_19821[(2)] = null);

(statearr_17546_19821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (4))){
var inst_17503 = (state_17536[(9)]);
var inst_17503__$1 = (state_17536[(2)]);
var inst_17504 = (inst_17503__$1 == null);
var inst_17505 = cljs.core.not(inst_17504);
var state_17536__$1 = (function (){var statearr_17547 = state_17536;
(statearr_17547[(9)] = inst_17503__$1);

return statearr_17547;
})();
if(inst_17505){
var statearr_17548_19822 = state_17536__$1;
(statearr_17548_19822[(1)] = (5));

} else {
var statearr_17549_19823 = state_17536__$1;
(statearr_17549_19823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (15))){
var inst_17526 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17551_19824 = state_17536__$1;
(statearr_17551_19824[(2)] = inst_17526);

(statearr_17551_19824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (13))){
var state_17536__$1 = state_17536;
var statearr_17555_19825 = state_17536__$1;
(statearr_17555_19825[(2)] = null);

(statearr_17555_19825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (6))){
var inst_17500 = (state_17536[(8)]);
var inst_17522 = (inst_17500 > (0));
var state_17536__$1 = state_17536;
if(cljs.core.truth_(inst_17522)){
var statearr_17556_19830 = state_17536__$1;
(statearr_17556_19830[(1)] = (12));

} else {
var statearr_17557_19831 = state_17536__$1;
(statearr_17557_19831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (3))){
var inst_17534 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17536__$1,inst_17534);
} else {
if((state_val_17539 === (12))){
var inst_17499 = (state_17536[(7)]);
var inst_17524 = cljs.core.vec(inst_17499);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17536__$1,(15),out,inst_17524);
} else {
if((state_val_17539 === (2))){
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17536__$1,(4),ch);
} else {
if((state_val_17539 === (11))){
var inst_17515 = (state_17536[(2)]);
var inst_17516 = (new Array(n));
var inst_17499 = inst_17516;
var inst_17500 = (0);
var state_17536__$1 = (function (){var statearr_17564 = state_17536;
(statearr_17564[(10)] = inst_17515);

(statearr_17564[(7)] = inst_17499);

(statearr_17564[(8)] = inst_17500);

return statearr_17564;
})();
var statearr_17565_19839 = state_17536__$1;
(statearr_17565_19839[(2)] = null);

(statearr_17565_19839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (9))){
var inst_17499 = (state_17536[(7)]);
var inst_17513 = cljs.core.vec(inst_17499);
var state_17536__$1 = state_17536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17536__$1,(11),out,inst_17513);
} else {
if((state_val_17539 === (5))){
var inst_17499 = (state_17536[(7)]);
var inst_17500 = (state_17536[(8)]);
var inst_17503 = (state_17536[(9)]);
var inst_17508 = (state_17536[(11)]);
var inst_17507 = (inst_17499[inst_17500] = inst_17503);
var inst_17508__$1 = (inst_17500 + (1));
var inst_17509 = (inst_17508__$1 < n);
var state_17536__$1 = (function (){var statearr_17566 = state_17536;
(statearr_17566[(12)] = inst_17507);

(statearr_17566[(11)] = inst_17508__$1);

return statearr_17566;
})();
if(cljs.core.truth_(inst_17509)){
var statearr_17567_19840 = state_17536__$1;
(statearr_17567_19840[(1)] = (8));

} else {
var statearr_17568_19841 = state_17536__$1;
(statearr_17568_19841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (14))){
var inst_17529 = (state_17536[(2)]);
var inst_17530 = cljs.core.async.close_BANG_(out);
var state_17536__$1 = (function (){var statearr_17570 = state_17536;
(statearr_17570[(13)] = inst_17529);

return statearr_17570;
})();
var statearr_17571_19842 = state_17536__$1;
(statearr_17571_19842[(2)] = inst_17530);

(statearr_17571_19842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (10))){
var inst_17519 = (state_17536[(2)]);
var state_17536__$1 = state_17536;
var statearr_17572_19844 = state_17536__$1;
(statearr_17572_19844[(2)] = inst_17519);

(statearr_17572_19844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17539 === (8))){
var inst_17499 = (state_17536[(7)]);
var inst_17508 = (state_17536[(11)]);
var tmp17569 = inst_17499;
var inst_17499__$1 = tmp17569;
var inst_17500 = inst_17508;
var state_17536__$1 = (function (){var statearr_17573 = state_17536;
(statearr_17573[(7)] = inst_17499__$1);

(statearr_17573[(8)] = inst_17500);

return statearr_17573;
})();
var statearr_17574_19845 = state_17536__$1;
(statearr_17574_19845[(2)] = null);

(statearr_17574_19845[(1)] = (2));


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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_17579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17579[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_17579[(1)] = (1));

return statearr_17579;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_17536){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_17536);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e17580){var ex__14235__auto__ = e17580;
var statearr_17581_19850 = state_17536;
(statearr_17581_19850[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_17536[(4)]))){
var statearr_17582_19851 = state_17536;
(statearr_17582_19851[(1)] = cljs.core.first((state_17536[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19852 = state_17536;
state_17536 = G__19852;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_17536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_17536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_17583 = f__14464__auto__();
(statearr_17583[(6)] = c__14463__auto___19819);

return statearr_17583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17592 = arguments.length;
switch (G__17592) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14463__auto___19858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14464__auto__ = (function (){var switch__14231__auto__ = (function (state_17637){
var state_val_17638 = (state_17637[(1)]);
if((state_val_17638 === (7))){
var inst_17633 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
var statearr_17642_19863 = state_17637__$1;
(statearr_17642_19863[(2)] = inst_17633);

(statearr_17642_19863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (1))){
var inst_17593 = [];
var inst_17594 = inst_17593;
var inst_17595 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17637__$1 = (function (){var statearr_17643 = state_17637;
(statearr_17643[(7)] = inst_17594);

(statearr_17643[(8)] = inst_17595);

return statearr_17643;
})();
var statearr_17644_19865 = state_17637__$1;
(statearr_17644_19865[(2)] = null);

(statearr_17644_19865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (4))){
var inst_17598 = (state_17637[(9)]);
var inst_17598__$1 = (state_17637[(2)]);
var inst_17599 = (inst_17598__$1 == null);
var inst_17600 = cljs.core.not(inst_17599);
var state_17637__$1 = (function (){var statearr_17645 = state_17637;
(statearr_17645[(9)] = inst_17598__$1);

return statearr_17645;
})();
if(inst_17600){
var statearr_17646_19867 = state_17637__$1;
(statearr_17646_19867[(1)] = (5));

} else {
var statearr_17647_19868 = state_17637__$1;
(statearr_17647_19868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (15))){
var inst_17594 = (state_17637[(7)]);
var inst_17625 = cljs.core.vec(inst_17594);
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17637__$1,(18),out,inst_17625);
} else {
if((state_val_17638 === (13))){
var inst_17620 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
var statearr_17656_19870 = state_17637__$1;
(statearr_17656_19870[(2)] = inst_17620);

(statearr_17656_19870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (6))){
var inst_17594 = (state_17637[(7)]);
var inst_17622 = inst_17594.length;
var inst_17623 = (inst_17622 > (0));
var state_17637__$1 = state_17637;
if(cljs.core.truth_(inst_17623)){
var statearr_17659_19875 = state_17637__$1;
(statearr_17659_19875[(1)] = (15));

} else {
var statearr_17660_19876 = state_17637__$1;
(statearr_17660_19876[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (17))){
var inst_17630 = (state_17637[(2)]);
var inst_17631 = cljs.core.async.close_BANG_(out);
var state_17637__$1 = (function (){var statearr_17667 = state_17637;
(statearr_17667[(10)] = inst_17630);

return statearr_17667;
})();
var statearr_17668_19877 = state_17637__$1;
(statearr_17668_19877[(2)] = inst_17631);

(statearr_17668_19877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (3))){
var inst_17635 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17637__$1,inst_17635);
} else {
if((state_val_17638 === (12))){
var inst_17594 = (state_17637[(7)]);
var inst_17613 = cljs.core.vec(inst_17594);
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17637__$1,(14),out,inst_17613);
} else {
if((state_val_17638 === (2))){
var state_17637__$1 = state_17637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17637__$1,(4),ch);
} else {
if((state_val_17638 === (11))){
var inst_17594 = (state_17637[(7)]);
var inst_17598 = (state_17637[(9)]);
var inst_17602 = (state_17637[(11)]);
var inst_17610 = inst_17594.push(inst_17598);
var tmp17672 = inst_17594;
var inst_17594__$1 = tmp17672;
var inst_17595 = inst_17602;
var state_17637__$1 = (function (){var statearr_17673 = state_17637;
(statearr_17673[(12)] = inst_17610);

(statearr_17673[(7)] = inst_17594__$1);

(statearr_17673[(8)] = inst_17595);

return statearr_17673;
})();
var statearr_17674_19882 = state_17637__$1;
(statearr_17674_19882[(2)] = null);

(statearr_17674_19882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (9))){
var inst_17595 = (state_17637[(8)]);
var inst_17606 = cljs.core.keyword_identical_QMARK_(inst_17595,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17637__$1 = state_17637;
var statearr_17675_19886 = state_17637__$1;
(statearr_17675_19886[(2)] = inst_17606);

(statearr_17675_19886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (5))){
var inst_17598 = (state_17637[(9)]);
var inst_17602 = (state_17637[(11)]);
var inst_17595 = (state_17637[(8)]);
var inst_17603 = (state_17637[(13)]);
var inst_17602__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17598) : f.call(null,inst_17598));
var inst_17603__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17602__$1,inst_17595);
var state_17637__$1 = (function (){var statearr_17683 = state_17637;
(statearr_17683[(11)] = inst_17602__$1);

(statearr_17683[(13)] = inst_17603__$1);

return statearr_17683;
})();
if(inst_17603__$1){
var statearr_17684_19888 = state_17637__$1;
(statearr_17684_19888[(1)] = (8));

} else {
var statearr_17685_19889 = state_17637__$1;
(statearr_17685_19889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (14))){
var inst_17598 = (state_17637[(9)]);
var inst_17602 = (state_17637[(11)]);
var inst_17615 = (state_17637[(2)]);
var inst_17616 = [];
var inst_17617 = inst_17616.push(inst_17598);
var inst_17594 = inst_17616;
var inst_17595 = inst_17602;
var state_17637__$1 = (function (){var statearr_17687 = state_17637;
(statearr_17687[(14)] = inst_17615);

(statearr_17687[(15)] = inst_17617);

(statearr_17687[(7)] = inst_17594);

(statearr_17687[(8)] = inst_17595);

return statearr_17687;
})();
var statearr_17690_19890 = state_17637__$1;
(statearr_17690_19890[(2)] = null);

(statearr_17690_19890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (16))){
var state_17637__$1 = state_17637;
var statearr_17693_19891 = state_17637__$1;
(statearr_17693_19891[(2)] = null);

(statearr_17693_19891[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (10))){
var inst_17608 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
if(cljs.core.truth_(inst_17608)){
var statearr_17694_19893 = state_17637__$1;
(statearr_17694_19893[(1)] = (11));

} else {
var statearr_17695_19894 = state_17637__$1;
(statearr_17695_19894[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (18))){
var inst_17627 = (state_17637[(2)]);
var state_17637__$1 = state_17637;
var statearr_17696_19895 = state_17637__$1;
(statearr_17696_19895[(2)] = inst_17627);

(statearr_17696_19895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17638 === (8))){
var inst_17603 = (state_17637[(13)]);
var state_17637__$1 = state_17637;
var statearr_17697_19898 = state_17637__$1;
(statearr_17697_19898[(2)] = inst_17603);

(statearr_17697_19898[(1)] = (10));


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
var cljs$core$async$state_machine__14232__auto__ = null;
var cljs$core$async$state_machine__14232__auto____0 = (function (){
var statearr_17698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17698[(0)] = cljs$core$async$state_machine__14232__auto__);

(statearr_17698[(1)] = (1));

return statearr_17698;
});
var cljs$core$async$state_machine__14232__auto____1 = (function (state_17637){
while(true){
var ret_value__14233__auto__ = (function (){try{while(true){
var result__14234__auto__ = switch__14231__auto__(state_17637);
if(cljs.core.keyword_identical_QMARK_(result__14234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14234__auto__;
}
break;
}
}catch (e17699){var ex__14235__auto__ = e17699;
var statearr_17703_19901 = state_17637;
(statearr_17703_19901[(2)] = ex__14235__auto__);


if(cljs.core.seq((state_17637[(4)]))){
var statearr_17704_19902 = state_17637;
(statearr_17704_19902[(1)] = cljs.core.first((state_17637[(4)])));

} else {
throw ex__14235__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19903 = state_17637;
state_17637 = G__19903;
continue;
} else {
return ret_value__14233__auto__;
}
break;
}
});
cljs$core$async$state_machine__14232__auto__ = function(state_17637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14232__auto____1.call(this,state_17637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14232__auto____0;
cljs$core$async$state_machine__14232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14232__auto____1;
return cljs$core$async$state_machine__14232__auto__;
})()
})();
var state__14465__auto__ = (function (){var statearr_17705 = f__14464__auto__();
(statearr_17705[(6)] = c__14463__auto___19858);

return statearr_17705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14465__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
