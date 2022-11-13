// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.utils');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
ob.utils.Constant = (function (value,meta_STAR_){
this.value = value;
this.meta_STAR_ = meta_STAR_;
this.cljs$lang$protocol_mask$partition0$ = 2149974273;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.utils.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta_STAR_;
}));

(ob.utils.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new ob.utils.Constant(self__.value,new_meta));
}));

(ob.utils.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof ob.utils.Constant)){
return cljs.core._EQ_.call(null,self__.value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
}));

(ob.utils.Constant.prototype.call = (function (self__,args){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return self__.value.call(null,args);
}));

(ob.utils.Constant.prototype.apply = (function (self__,args48624){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args48624)));
}));

(ob.utils.Constant.prototype.cljs$core$IFn$_invoke$arity$1 = (function (args){
var self__ = this;
var this$ = this;
return self__.value.call(null,args);
}));

(ob.utils.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return self__.value;
}));

(ob.utils.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,self__.value);
}));

(ob.utils.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta*","meta*",691099921,null)], null);
}));

(ob.utils.Constant.cljs$lang$type = true);

(ob.utils.Constant.cljs$lang$ctorStr = "ob.utils/Constant");

(ob.utils.Constant.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.utils/Constant");
}));

/**
 * Positional factory function for ob.utils/Constant.
 */
ob.utils.__GT_Constant = (function ob$utils$__GT_Constant(value,meta_STAR_){
return (new ob.utils.Constant(value,meta_STAR_));
});

ob.utils.constant_QMARK_ = (function ob$utils$constant_QMARK_(form){
return (form instanceof ob.utils.Constant);
});
ob.utils.id = (function ob$utils$id(form){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
});
ob.utils.gen_id = (function ob$utils$gen_id(form){
return cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),"-"].join(''));
});
ob.utils.assoc_meta = (function ob$utils$assoc_meta(form,meta_data){
return cljs.core.vary_meta.call(null,form,cljs.core.merge,meta_data);
});
ob.utils.tag_id = (function ob$utils$tag_id(form){
if((((!((form == null))))?(((((form.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IMeta$))))?true:(((!form.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,form):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,form))){
return ob.utils.assoc_meta.call(null,form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),ob.utils.gen_id.call(null,((cljs.core.coll_QMARK_.call(null,form))?"coll":(((form instanceof cljs.core.Symbol))?"sym":form
)))], null));
} else {
return ob.utils.__GT_Constant.call(null,form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),ob.utils.gen_id.call(null,["const-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''))], null));
}
});
ob.utils.walk_ids = (function ob$utils$walk_ids(form){
return clojure.walk.postwalk.call(null,ob.utils.tag_id,form);
});

//# sourceMappingURL=utils.js.map
