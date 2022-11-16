// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.utils');
goog.require('cljs.core');
goog.require('com.rpl.specter');

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

(ob.utils.Constant.prototype.apply = (function (self__,args62729){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args62729)));
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
ob.utils.add_display_ids = (function ob$utils$add_display_ids(form){
if((!(cljs.core.coll_QMARK_.call(null,form)))){
return form;
} else {
var child_ids = cljs.core.mapv.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.meta),form);
var form__$1 = ob.utils.assoc_meta.call(null,form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-ids","child-ids",-604525861),child_ids], null));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form__$1));
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17671__auto__ = ob.utils.pathcache62731;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info62732 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.META,new cljs.core.Var(function(){return com.rpl.specter.META;},new cljs.core.Symbol("com.rpl.specter","META","com.rpl.specter/META",859143984,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"META","META",-1501392487,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1292),(1294),cljs.core.List.EMPTY,"Navigates to the metadata of the structure, or nil if\n  the structure has no metadata or may not contain metadata.",(cljs.core.truth_(com.rpl.specter.META)?com.rpl.specter.META.cljs$lang$test:null)])),new cljs.core.Symbol("s","META","s/META",-1501392874,null)),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null)], null),"ob.utils",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null)], null));
ob.utils.pathcache62731 = info62732;

return info62732;
})():info__17671__auto__);
var precompiled62733 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled62733.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,com.rpl.specter.META,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null),com.rpl.specter.ALL_WITH_META,com.rpl.specter.META], null));
} else {
return precompiled62733;
}
})(),id,form__$1);
}
});
ob.utils.walk_ids = (function ob$utils$walk_ids(form){
return clojure.walk.postwalk.call(null,cljs.core.comp.call(null,ob.utils.add_display_ids,ob.utils.tag_id),form);
});

//# sourceMappingURL=utils.js.map
