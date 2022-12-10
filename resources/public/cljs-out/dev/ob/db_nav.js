// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.db_nav');
goog.require('cljs.core');
goog.require('com.rpl.specter');
ob.db_nav.init_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null);


ob.db_nav.db_by_abs_idx_select_STAR_ = (function ob$db_nav$db_by_abs_idx_select_STAR_(id,db,next_fn){
return next_fn.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id.call(null,db)], null)));
});

ob.db_nav.db_by_abs_idx_transform_STAR_ = (function ob$db_nav$db_by_abs_idx_transform_STAR_(id,db,next_fn){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id.call(null,db)], null),next_fn);
});

ob.db_nav.db_by_abs_idx = com.rpl.specter.impl.direct_nav_obj.call(null,(function (id){
if((typeof ob !== 'undefined') && (typeof ob.db_nav !== 'undefined') && (typeof ob.db_nav.t_ob$db_nav150591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.db_nav.t_ob$db_nav150591 = (function (id,meta150592){
this.id = id;
this.meta150592 = meta150592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.db_nav.t_ob$db_nav150591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150593,meta150592__$1){
var self__ = this;
var _150593__$1 = this;
return (new ob.db_nav.t_ob$db_nav150591(self__.id,meta150592__$1));
}));

(ob.db_nav.t_ob$db_nav150591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150593){
var self__ = this;
var _150593__$1 = this;
return self__.meta150592;
}));

(ob.db_nav.t_ob$db_nav150591.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.db_nav.t_ob$db_nav150591.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
return next_fn.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),self__.id.call(null,db)], null)));
}));

(ob.db_nav.t_ob$db_nav150591.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),self__.id.call(null,db)], null),next_fn);
}));

(ob.db_nav.t_ob$db_nav150591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta150592","meta150592",433306446,null)], null);
}));

(ob.db_nav.t_ob$db_nav150591.cljs$lang$type = true);

(ob.db_nav.t_ob$db_nav150591.cljs$lang$ctorStr = "ob.db-nav/t_ob$db_nav150591");

(ob.db_nav.t_ob$db_nav150591.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.db-nav/t_ob$db_nav150591");
}));

/**
 * Positional factory function for ob.db-nav/t_ob$db_nav150591.
 */
ob.db_nav.__GT_t_ob$db_nav150591 = (function ob$db_nav$__GT_t_ob$db_nav150591(id__$1,meta150592){
return (new ob.db_nav.t_ob$db_nav150591(id__$1,meta150592));
});

}

return (new ob.db_nav.t_ob$db_nav150591(id,null));
}));
ob.db_nav.CURR_DB = ob.db_nav.db_by_abs_idx.call(null,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732));


ob.db_nav.db_by_rel_idx_select_STAR_ = (function ob$db_nav$db_by_rel_idx_select_STAR_(id,db,next_fn){
var idx = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache150594;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150595 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"src/ob/db_nav.cljs",13,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.db_nav.pathcache150594 = info150595;

return info150595;
})():info__17671__auto__);
var precompiled150596 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150596.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,id], null),ob.db_nav.CURR_DB,id], null));
} else {
return precompiled150596;
}
})(),db);
return next_fn.call(null,com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache150597;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150598 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.db_by_abs_idx,new cljs.core.Var(function(){return ob.db_nav.db_by_abs_idx;},new cljs.core.Symbol("ob.db-nav","db-by-abs-idx","ob.db-nav/db-by-abs-idx",62853244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),"src/ob/db_nav.cljs",22,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.db_by_abs_idx)?ob.db_nav.db_by_abs_idx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,idx,new cljs.core.Symbol(null,"idx","idx",-1600747296,null))], null),cljs.core.list(new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)))], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null));
ob.db_nav.pathcache150597 = info150598;

return info150598;
})():info__17671__auto__);
var precompiled150599 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150599.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.db_by_abs_idx,idx], null));
} else {
return precompiled150599;
}
})(),db));
});

ob.db_nav.db_by_rel_idx_transform_STAR_ = (function ob$db_nav$db_by_rel_idx_transform_STAR_(id,db,next_fn){
var idx = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache150600;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150601 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"src/ob/db_nav.cljs",13,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.db_nav.pathcache150600 = info150601;

return info150601;
})():info__17671__auto__);
var precompiled150602 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150602.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,id], null),ob.db_nav.CURR_DB,id], null));
} else {
return precompiled150602;
}
})(),db);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache150603;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150604 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.db_by_abs_idx,new cljs.core.Var(function(){return ob.db_nav.db_by_abs_idx;},new cljs.core.Symbol("ob.db-nav","db-by-abs-idx","ob.db-nav/db-by-abs-idx",62853244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),"src/ob/db_nav.cljs",22,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.db_by_abs_idx)?ob.db_nav.db_by_abs_idx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,idx,new cljs.core.Symbol(null,"idx","idx",-1600747296,null))], null),cljs.core.list(new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)))], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null));
ob.db_nav.pathcache150603 = info150604;

return info150604;
})():info__17671__auto__);
var precompiled150605 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150605.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.db_by_abs_idx,idx], null));
} else {
return precompiled150605;
}
})(),next_fn,db);
});

ob.db_nav.db_by_rel_idx = com.rpl.specter.impl.direct_nav_obj.call(null,(function (id){
if((typeof ob !== 'undefined') && (typeof ob.db_nav !== 'undefined') && (typeof ob.db_nav.t_ob$db_nav150606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.db_nav.t_ob$db_nav150606 = (function (id,meta150607){
this.id = id;
this.meta150607 = meta150607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.db_nav.t_ob$db_nav150606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_150608,meta150607__$1){
var self__ = this;
var _150608__$1 = this;
return (new ob.db_nav.t_ob$db_nav150606(self__.id,meta150607__$1));
}));

(ob.db_nav.t_ob$db_nav150606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_150608){
var self__ = this;
var _150608__$1 = this;
return self__.meta150607;
}));

(ob.db_nav.t_ob$db_nav150606.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.db_nav.t_ob$db_nav150606.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var idx = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache150609;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150610 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"src/ob/db_nav.cljs",13,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,self__.id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.db_nav.pathcache150609 = info150610;

return info150610;
})():info__17671__auto__);
var precompiled150611 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150611.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,self__.id], null),ob.db_nav.CURR_DB,self__.id], null));
} else {
return precompiled150611;
}
})(),db);
return next_fn.call(null,com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache150612;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150613 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.db_by_abs_idx,new cljs.core.Var(function(){return ob.db_nav.db_by_abs_idx;},new cljs.core.Symbol("ob.db-nav","db-by-abs-idx","ob.db-nav/db-by-abs-idx",62853244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),"src/ob/db_nav.cljs",22,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.db_by_abs_idx)?ob.db_nav.db_by_abs_idx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,idx,new cljs.core.Symbol(null,"idx","idx",-1600747296,null))], null),cljs.core.list(new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)))], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null));
ob.db_nav.pathcache150612 = info150613;

return info150613;
})():info__17671__auto__);
var precompiled150614 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150614.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.db_by_abs_idx,idx], null));
} else {
return precompiled150614;
}
})(),db));
}));

(ob.db_nav.t_ob$db_nav150606.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var idx = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache150615;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150616 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"src/ob/db_nav.cljs",13,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,self__.id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.db_nav.pathcache150615 = info150616;

return info150616;
})():info__17671__auto__);
var precompiled150617 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150617.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,self__.id], null),ob.db_nav.CURR_DB,self__.id], null));
} else {
return precompiled150617;
}
})(),db);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache150618;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150619 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.db_by_abs_idx,new cljs.core.Var(function(){return ob.db_nav.db_by_abs_idx;},new cljs.core.Symbol("ob.db-nav","db-by-abs-idx","ob.db-nav/db-by-abs-idx",62853244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),"src/ob/db_nav.cljs",22,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.db_by_abs_idx)?ob.db_nav.db_by_abs_idx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,idx,new cljs.core.Symbol(null,"idx","idx",-1600747296,null))], null),cljs.core.list(new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)))], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null));
ob.db_nav.pathcache150618 = info150619;

return info150619;
})():info__17671__auto__);
var precompiled150620 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150620.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.db_by_abs_idx,idx], null));
} else {
return precompiled150620;
}
})(),next_fn,db);
}));

(ob.db_nav.t_ob$db_nav150606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta150607","meta150607",-1628047552,null)], null);
}));

(ob.db_nav.t_ob$db_nav150606.cljs$lang$type = true);

(ob.db_nav.t_ob$db_nav150606.cljs$lang$ctorStr = "ob.db-nav/t_ob$db_nav150606");

(ob.db_nav.t_ob$db_nav150606.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.db-nav/t_ob$db_nav150606");
}));

/**
 * Positional factory function for ob.db-nav/t_ob$db_nav150606.
 */
ob.db_nav.__GT_t_ob$db_nav150606 = (function ob$db_nav$__GT_t_ob$db_nav150606(id__$1,meta150607){
return (new ob.db_nav.t_ob$db_nav150606(id__$1,meta150607));
});

}

return (new ob.db_nav.t_ob$db_nav150606(id,null));
}));
ob.db_nav.PREV_DB = ob.db_nav.db_by_rel_idx.call(null,new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483));
ob.db_nav.NEXT_DB = ob.db_nav.db_by_rel_idx.call(null,new cljs.core.Keyword("id","next-db","id/next-db",616177479));

//# sourceMappingURL=db_nav.js.map
