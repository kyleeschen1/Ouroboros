// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.db_nav');
goog.require('cljs.core');
goog.require('com.rpl.specter');
ob.db_nav.init_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483),null,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword("id","next-db","id/next-db",616177479),null], null)], null)], null);


ob.db_nav.db_by_abs_idx_select_STAR_ = (function ob$db_nav$db_by_abs_idx_select_STAR_(id,db,next_fn){
return next_fn.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id.call(null,db)], null)));
});

ob.db_nav.db_by_abs_idx_transform_STAR_ = (function ob$db_nav$db_by_abs_idx_transform_STAR_(id,db,next_fn){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id.call(null,db)], null),next_fn);
});

ob.db_nav.db_by_abs_idx = com.rpl.specter.impl.direct_nav_obj.call(null,(function (id){
if((typeof ob !== 'undefined') && (typeof ob.db_nav !== 'undefined') && (typeof ob.db_nav.t_ob$db_nav199541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.db_nav.t_ob$db_nav199541 = (function (id,meta199542){
this.id = id;
this.meta199542 = meta199542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.db_nav.t_ob$db_nav199541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_199543,meta199542__$1){
var self__ = this;
var _199543__$1 = this;
return (new ob.db_nav.t_ob$db_nav199541(self__.id,meta199542__$1));
}));

(ob.db_nav.t_ob$db_nav199541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_199543){
var self__ = this;
var _199543__$1 = this;
return self__.meta199542;
}));

(ob.db_nav.t_ob$db_nav199541.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.db_nav.t_ob$db_nav199541.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
return next_fn.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),self__.id.call(null,db)], null)));
}));

(ob.db_nav.t_ob$db_nav199541.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),self__.id.call(null,db)], null),next_fn);
}));

(ob.db_nav.t_ob$db_nav199541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta199542","meta199542",-287766909,null)], null);
}));

(ob.db_nav.t_ob$db_nav199541.cljs$lang$type = true);

(ob.db_nav.t_ob$db_nav199541.cljs$lang$ctorStr = "ob.db-nav/t_ob$db_nav199541");

(ob.db_nav.t_ob$db_nav199541.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.db-nav/t_ob$db_nav199541");
}));

/**
 * Positional factory function for ob.db-nav/t_ob$db_nav199541.
 */
ob.db_nav.__GT_t_ob$db_nav199541 = (function ob$db_nav$__GT_t_ob$db_nav199541(id__$1,meta199542){
return (new ob.db_nav.t_ob$db_nav199541(id__$1,meta199542));
});

}

return (new ob.db_nav.t_ob$db_nav199541(id,null));
}));
ob.db_nav.CURR_DB = ob.db_nav.db_by_abs_idx.call(null,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732));


ob.db_nav.db_by_rel_idx_select_STAR_ = (function ob$db_nav$db_by_rel_idx_select_STAR_(id,db,next_fn){
var idx = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache199544;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info199545 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",13,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.db_nav.pathcache199544 = info199545;

return info199545;
})():info__17671__auto__);
var precompiled199546 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled199546.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,id], null),ob.db_nav.CURR_DB,id], null));
} else {
return precompiled199546;
}
})(),db);
return next_fn.call(null,com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache199547;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info199548 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.db_by_abs_idx,new cljs.core.Var(function(){return ob.db_nav.db_by_abs_idx;},new cljs.core.Symbol("ob.db-nav","db-by-abs-idx","ob.db-nav/db-by-abs-idx",62853244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",22,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.db_by_abs_idx)?ob.db_nav.db_by_abs_idx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,idx,new cljs.core.Symbol(null,"idx","idx",-1600747296,null))], null),cljs.core.list(new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)))], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null));
ob.db_nav.pathcache199547 = info199548;

return info199548;
})():info__17671__auto__);
var precompiled199549 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled199549.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.db_by_abs_idx,idx], null));
} else {
return precompiled199549;
}
})(),db));
});

ob.db_nav.db_by_rel_idx_transform_STAR_ = (function ob$db_nav$db_by_rel_idx_transform_STAR_(id,db,next_fn){
var idx = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache199550;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info199551 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",13,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.db_nav.pathcache199550 = info199551;

return info199551;
})():info__17671__auto__);
var precompiled199552 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled199552.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,id], null),ob.db_nav.CURR_DB,id], null));
} else {
return precompiled199552;
}
})(),db);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache199553;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info199554 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.db_by_abs_idx,new cljs.core.Var(function(){return ob.db_nav.db_by_abs_idx;},new cljs.core.Symbol("ob.db-nav","db-by-abs-idx","ob.db-nav/db-by-abs-idx",62853244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",22,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.db_by_abs_idx)?ob.db_nav.db_by_abs_idx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,idx,new cljs.core.Symbol(null,"idx","idx",-1600747296,null))], null),cljs.core.list(new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)))], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null));
ob.db_nav.pathcache199553 = info199554;

return info199554;
})():info__17671__auto__);
var precompiled199555 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled199555.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.db_by_abs_idx,idx], null));
} else {
return precompiled199555;
}
})(),next_fn,db);
});

ob.db_nav.db_by_rel_idx = com.rpl.specter.impl.direct_nav_obj.call(null,(function (id){
if((typeof ob !== 'undefined') && (typeof ob.db_nav !== 'undefined') && (typeof ob.db_nav.t_ob$db_nav199556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.db_nav.t_ob$db_nav199556 = (function (id,meta199557){
this.id = id;
this.meta199557 = meta199557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.db_nav.t_ob$db_nav199556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_199558,meta199557__$1){
var self__ = this;
var _199558__$1 = this;
return (new ob.db_nav.t_ob$db_nav199556(self__.id,meta199557__$1));
}));

(ob.db_nav.t_ob$db_nav199556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_199558){
var self__ = this;
var _199558__$1 = this;
return self__.meta199557;
}));

(ob.db_nav.t_ob$db_nav199556.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.db_nav.t_ob$db_nav199556.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var idx = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache199559;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info199560 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",13,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,self__.id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.db_nav.pathcache199559 = info199560;

return info199560;
})():info__17671__auto__);
var precompiled199561 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled199561.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,self__.id], null),ob.db_nav.CURR_DB,self__.id], null));
} else {
return precompiled199561;
}
})(),db);
return next_fn.call(null,com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache199562;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info199563 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.db_by_abs_idx,new cljs.core.Var(function(){return ob.db_nav.db_by_abs_idx;},new cljs.core.Symbol("ob.db-nav","db-by-abs-idx","ob.db-nav/db-by-abs-idx",62853244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",22,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.db_by_abs_idx)?ob.db_nav.db_by_abs_idx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,idx,new cljs.core.Symbol(null,"idx","idx",-1600747296,null))], null),cljs.core.list(new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)))], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null));
ob.db_nav.pathcache199562 = info199563;

return info199563;
})():info__17671__auto__);
var precompiled199564 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled199564.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.db_by_abs_idx,idx], null));
} else {
return precompiled199564;
}
})(),db));
}));

(ob.db_nav.t_ob$db_nav199556.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var idx = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache199565;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info199566 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",13,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,self__.id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.db_nav.pathcache199565 = info199566;

return info199566;
})():info__17671__auto__);
var precompiled199567 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled199567.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,self__.id], null),ob.db_nav.CURR_DB,self__.id], null));
} else {
return precompiled199567;
}
})(),db);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.db_nav.pathcache199568;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info199569 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.db_by_abs_idx,new cljs.core.Var(function(){return ob.db_nav.db_by_abs_idx;},new cljs.core.Symbol("ob.db-nav","db-by-abs-idx","ob.db-nav/db-by-abs-idx",62853244,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",22,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.db_by_abs_idx)?ob.db_nav.db_by_abs_idx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,idx,new cljs.core.Symbol(null,"idx","idx",-1600747296,null))], null),cljs.core.list(new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)))], null),"ob.db-nav",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-by-abs-idx","db-by-abs-idx",1125303181,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null));
ob.db_nav.pathcache199568 = info199569;

return info199569;
})():info__17671__auto__);
var precompiled199570 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled199570.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.db_by_abs_idx,idx], null));
} else {
return precompiled199570;
}
})(),next_fn,db);
}));

(ob.db_nav.t_ob$db_nav199556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta199557","meta199557",2053059544,null)], null);
}));

(ob.db_nav.t_ob$db_nav199556.cljs$lang$type = true);

(ob.db_nav.t_ob$db_nav199556.cljs$lang$ctorStr = "ob.db-nav/t_ob$db_nav199556");

(ob.db_nav.t_ob$db_nav199556.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.db-nav/t_ob$db_nav199556");
}));

/**
 * Positional factory function for ob.db-nav/t_ob$db_nav199556.
 */
ob.db_nav.__GT_t_ob$db_nav199556 = (function ob$db_nav$__GT_t_ob$db_nav199556(id__$1,meta199557){
return (new ob.db_nav.t_ob$db_nav199556(id__$1,meta199557));
});

}

return (new ob.db_nav.t_ob$db_nav199556(id,null));
}));
ob.db_nav.PREV_DB = ob.db_nav.db_by_rel_idx.call(null,new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483));
ob.db_nav.NEXT_DB = ob.db_nav.db_by_rel_idx.call(null,new cljs.core.Keyword("id","next-db","id/next-db",616177479));

//# sourceMappingURL=db_nav.js.map
