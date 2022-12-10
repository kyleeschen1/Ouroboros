// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.update_db');
goog.require('cljs.core');
goog.require('com.rpl.specter');


/**
 * Performs specified update operation,
 * then performs standard logging.
 * 
 * - Stores history if specified
 * - Updates transition information
 */
ob.update_db.run_db_update = (function ob$update_db$run_db_update(db,cf){
var cf__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"trs?","trs?",-745190343).cljs$core$IFn$_invoke$arity$1(cf))?ob.update_db.process_trs.call(null,cf):cf);
var db_STAR_ = ob.update_db.update_db.call(null,cf__$1,db);
var db_STAR___$1 = ob.update_db.log_history.call(null,cf__$1,db,db_STAR_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db_STAR___$1,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cf__$1)], null);
});
if((typeof ob !== 'undefined') && (typeof ob.update_db !== 'undefined') && (typeof ob.update_db.update_db !== 'undefined')){
} else {
ob.update_db.update_db = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.update-db","update-db"),(function (p__127372,_){
var map__127373 = p__127372;
var map__127373__$1 = cljs.core.__destructure_map.call(null,map__127373);
var op = cljs.core.get.call(null,map__127373__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"append","append",-291298229),(function (p__127374,db){
var map__127375 = p__127374;
var map__127375__$1 = cljs.core.__destructure_map.call(null,map__127375);
var tid = cljs.core.get.call(null,map__127375__$1,new cljs.core.Keyword("id","target","id/target",253007142),new cljs.core.Keyword(null,"root","root",-448657453));
var pid = cljs.core.get.call(null,map__127375__$1,new cljs.core.Keyword("id","parent","id/parent",-878874974));
var data = cljs.core.get.call(null,map__127375__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),tid,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.conj,pid),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"replace","replace",-786587770),(function (p__127376,db){
var map__127377 = p__127376;
var map__127377__$1 = cljs.core.__destructure_map.call(null,map__127377);
var pre = cljs.core.get.call(null,map__127377__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226));
var post = cljs.core.get.call(null,map__127377__$1,new cljs.core.Keyword("id","post","id/post",269696948));
var data = cljs.core.get.call(null,map__127377__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),pre,new cljs.core.Keyword(null,"redirect","redirect",-1975673286)], null),post),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"remove","remove",-131428414),(function (p__127378,db){
var map__127379 = p__127378;
var map__127379__$1 = cljs.core.__destructure_map.call(null,map__127379);
var id = cljs.core.get.call(null,map__127379__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),id);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"update","update",1045576396),(function (p__127380,db){
var map__127381 = p__127380;
var map__127381__$1 = cljs.core.__destructure_map.call(null,map__127381);
var data = cljs.core.get.call(null,map__127381__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
ob.update_db.history = cljs.core.atom.call(null,null);
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"revert","revert",-983985933),(function (_,___$1){
var prev = cljs.core.peek.call(null,cljs.core.deref.call(null,ob.update_db.history));
cljs.core.swap_BANG_.call(null,ob.update_db.history,cljs.core.pop);

return prev;
}));
/**
 * Logs history if specified.
 * 
 * Params:
 * 
 * - cf : update config
 * - db : former database
 * - db* : new database
 */
ob.update_db.log_history = (function ob$update_db$log_history(cf,db,db_STAR_){
if(cljs.core._EQ_.call(null,false,new cljs.core.Keyword(null,"save?","save?",1442680962).cljs$core$IFn$_invoke$arity$1(cf))){
} else {
cljs.core.swap_BANG_.call(null,ob.update_db.history,cljs.core.conj,db);
}

cljs.core.println.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,ob.update_db.history)));

return db_STAR_;
});
ob.update_db.process_trs = (function ob$update_db$process_trs(p__127382){
var map__127383 = p__127382;
var map__127383__$1 = cljs.core.__destructure_map.call(null,map__127383);
var cf = map__127383__$1;
var trs = cljs.core.get.call(null,map__127383__$1,new cljs.core.Keyword(null,"trs","trs",1104008633));
var data = cljs.core.get.call(null,map__127383__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var trs_log = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var log_BANG_ = (function (id,dur,delay){
var trs_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dur","dur",1464522452),dur,new cljs.core.Keyword(null,"delay","delay",-574225219),delay,new cljs.core.Keyword(null,"total","total",1916810418),(dur + delay)], null);
return cljs.core.swap_BANG_.call(null,trs_log,cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,trs_attrs]));
});
var format_trs = (function (styles,dur,delay){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,styles,new cljs.core.Keyword(null,"trs","trs",1104008633)),new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),(cljs.core.truth_(dur)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dur),"s"].join(''):null)),new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),(cljs.core.truth_(delay)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"s"].join(''):null));
});
var process_trs = (function (id,p__127384){
var map__127385 = p__127384;
var map__127385__$1 = cljs.core.__destructure_map.call(null,map__127385);
var styles = map__127385__$1;
var trs__$1 = cljs.core.get.call(null,map__127385__$1,new cljs.core.Keyword(null,"trs","trs",1104008633));
var map__127386 = trs__$1;
var map__127386__$1 = cljs.core.__destructure_map.call(null,map__127386);
var dur = cljs.core.get.call(null,map__127386__$1,new cljs.core.Keyword(null,"dur","dur",1464522452));
var delay = cljs.core.get.call(null,map__127386__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
log_BANG_.call(null,id,dur,delay);

return format_trs.call(null,styles,dur,delay);
});
var data__$1 = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache127387;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127388 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect,new cljs.core.Var(function(){return com.rpl.specter.collect;},new cljs.core.Symbol("com.rpl.specter","collect","com.rpl.specter/collect",-579290415,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1328),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect","collect",1356209978,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect)?com.rpl.specter.collect.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect","s/collect",1356210095,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect","s/collect",1356210095,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trs","trs",1104008633)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"trs","trs",1104008633)))], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect","s/collect",1356210095,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"trs","trs",1104008633))], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect","s/collect",1356210095,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)], null));
ob.update_db.pathcache127387 = info127388;

return info127388;
})():info__17671__auto__);
var precompiled127389 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127389.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,com.rpl.specter.collect.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736),com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"trs","trs",1104008633))], null),com.rpl.specter.MAP_VALS,com.rpl.specter.collect,com.rpl.specter.pred], null));
} else {
return precompiled127389;
}
})(),process_trs,data);
var max_time = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache127390;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127391 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"total","total",1916810418)], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"total","total",1916810418)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.update_db.pathcache127390 = info127391;

return info127391;
})():info__17671__auto__);
var precompiled127392 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127392.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"total","total",1916810418)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled127392;
}
})(),cljs.core.deref.call(null,trs_log)));
return cljs.core.assoc.call(null,cf,new cljs.core.Keyword(null,"time","time",1385887882),max_time,new cljs.core.Keyword(null,"data","data",-232669377),data__$1);
});


ob.update_db.current_db_select_STAR_ = (function ob$update_db$current_db_select_STAR_(db,next_fn){
var map__127393 = db;
var map__127393__$1 = cljs.core.__destructure_map.call(null,map__127393);
var id = cljs.core.get.call(null,map__127393__$1,new cljs.core.Keyword("id","db","id/db",993247982));
return next_fn.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id], null)));
});

ob.update_db.current_db_transform_STAR_ = (function ob$update_db$current_db_transform_STAR_(db,next_fn){
var map__127394 = db;
var map__127394__$1 = cljs.core.__destructure_map.call(null,map__127394);
var id = cljs.core.get.call(null,map__127394__$1,new cljs.core.Keyword("id","db","id/db",993247982));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id], null),next_fn);
});

ob.update_db.current_db = (function (){
if((typeof ob !== 'undefined') && (typeof ob.update_db !== 'undefined') && (typeof ob.update_db.t_ob$update_db127395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.update_db.t_ob$update_db127395 = (function (meta127396){
this.meta127396 = meta127396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.update_db.t_ob$update_db127395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_127397,meta127396__$1){
var self__ = this;
var _127397__$1 = this;
return (new ob.update_db.t_ob$update_db127395(meta127396__$1));
}));

(ob.update_db.t_ob$update_db127395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_127397){
var self__ = this;
var _127397__$1 = this;
return self__.meta127396;
}));

(ob.update_db.t_ob$update_db127395.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.update_db.t_ob$update_db127395.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var map__127398 = db;
var map__127398__$1 = cljs.core.__destructure_map.call(null,map__127398);
var id = cljs.core.get.call(null,map__127398__$1,new cljs.core.Keyword("id","db","id/db",993247982));
return next_fn.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id], null)));
}));

(ob.update_db.t_ob$update_db127395.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var map__127399 = db;
var map__127399__$1 = cljs.core.__destructure_map.call(null,map__127399);
var id = cljs.core.get.call(null,map__127399__$1,new cljs.core.Keyword("id","db","id/db",993247982));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id], null),next_fn);
}));

(ob.update_db.t_ob$update_db127395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta127396","meta127396",-1702288466,null)], null);
}));

(ob.update_db.t_ob$update_db127395.cljs$lang$type = true);

(ob.update_db.t_ob$update_db127395.cljs$lang$ctorStr = "ob.update-db/t_ob$update_db127395");

(ob.update_db.t_ob$update_db127395.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.update-db/t_ob$update_db127395");
}));

/**
 * Positional factory function for ob.update-db/t_ob$update_db127395.
 */
ob.update_db.__GT_t_ob$update_db127395 = (function ob$update_db$__GT_t_ob$update_db127395(meta127396){
return (new ob.update_db.t_ob$update_db127395(meta127396));
});

}

return (new ob.update_db.t_ob$update_db127395(null));
})()
;

//# sourceMappingURL=update_db.js.map
