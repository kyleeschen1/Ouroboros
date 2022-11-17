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

(ob.utils.Constant.prototype.apply = (function (self__,args58209){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args58209)));
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
var child_ids = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.utils.pathcache58211;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info58212 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.map_QMARK_,new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",(11),(1),(2171),(2171),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",(cljs.core.truth_(cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.META,new cljs.core.Var(function(){return com.rpl.specter.META;},new cljs.core.Symbol("com.rpl.specter","META","com.rpl.specter/META",859143984,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"META","META",-1501392487,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1292),(1294),cljs.core.List.EMPTY,"Navigates to the metadata of the structure, or nil if\n  the structure has no metadata or may not contain metadata.",(cljs.core.truth_(com.rpl.specter.META)?com.rpl.specter.META.cljs$lang$test:null)])),new cljs.core.Symbol("s","META","s/META",-1501392874,null)),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.META,new cljs.core.Var(function(){return com.rpl.specter.META;},new cljs.core.Symbol("com.rpl.specter","META","com.rpl.specter/META",859143984,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"META","META",-1501392487,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1292),(1294),cljs.core.List.EMPTY,"Navigates to the metadata of the structure, or nil if\n  the structure has no metadata or may not contain metadata.",(cljs.core.truth_(com.rpl.specter.META)?com.rpl.specter.META.cljs$lang$test:null)])),new cljs.core.Symbol("s","META","s/META",-1501392874,null)),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))], null)], null),"ob.utils",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null)], null));
ob.utils.pathcache58211 = info58212;

return info58212;
})():info__17671__auto__);
var precompiled58213 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled58213.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path.call(null,cljs.core.map_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.ALL,com.rpl.specter.META,new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.META,new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null),com.rpl.specter.if_path,cljs.core.map_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.ALL,com.rpl.specter.META,new cljs.core.Keyword(null,"id","id",-1388402092)], null),com.rpl.specter.ALL,com.rpl.specter.ALL,com.rpl.specter.META,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.META,new cljs.core.Keyword(null,"id","id",-1388402092)], null),com.rpl.specter.ALL,com.rpl.specter.META], null));
} else {
return precompiled58213;
}
})(),form);
var form__$1 = ob.utils.assoc_meta.call(null,form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-ids","child-ids",-604525861),child_ids], null));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form__$1));
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17671__auto__ = ob.utils.pathcache58214;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info58215 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.META,new cljs.core.Var(function(){return com.rpl.specter.META;},new cljs.core.Symbol("com.rpl.specter","META","com.rpl.specter/META",859143984,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"META","META",-1501392487,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1292),(1294),cljs.core.List.EMPTY,"Navigates to the metadata of the structure, or nil if\n  the structure has no metadata or may not contain metadata.",(cljs.core.truth_(com.rpl.specter.META)?com.rpl.specter.META.cljs$lang$test:null)])),new cljs.core.Symbol("s","META","s/META",-1501392874,null)),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null)], null),"ob.utils",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol("s","META","s/META",-1501392874,null)], null));
ob.utils.pathcache58214 = info58215;

return info58215;
})():info__17671__auto__);
var precompiled58216 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled58216.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,com.rpl.specter.META,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null),com.rpl.specter.ALL_WITH_META,com.rpl.specter.META], null));
} else {
return precompiled58216;
}
})(),id,form__$1);
}
});
ob.utils.WALK_ALL = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.utils.pathcache58217;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info58218 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.utils",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.utils.pathcache58217 = info58218;

return info58218;
})():info__17671__auto__);
var precompiled58219 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled58219.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled58219;
}
})());

return p;
})();
ob.utils.walk_ids = (function ob$utils$walk_ids(form){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.utils.pathcache58220;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info58221 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.utils.WALK_ALL,new cljs.core.Var(function(){return ob.utils.WALK_ALL;},new cljs.core.Symbol("ob.utils","WALK-ALL","ob.utils/WALK-ALL",1788496570,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.utils","ob.utils",441858982,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"WALK-ALL","WALK-ALL",-889804212,null),"src/ob/utils.cljs",14,1,91,91,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.utils.WALK_ALL)?ob.utils.WALK_ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"WALK-ALL","WALK-ALL",-889804212,null))], null)], null),"ob.utils",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"WALK-ALL","WALK-ALL",-889804212,null)], null),new cljs.core.Symbol(null,"WALK-ALL","WALK-ALL",-889804212,null)], null));
ob.utils.pathcache58220 = info58221;

return info58221;
})():info__17671__auto__);
var precompiled58222 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled58222.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.utils.WALK_ALL], null),ob.utils.WALK_ALL], null));
} else {
return precompiled58222;
}
})(),cljs.core.comp.call(null,ob.utils.add_display_ids,ob.utils.tag_id),form);
});

//# sourceMappingURL=utils.js.map
