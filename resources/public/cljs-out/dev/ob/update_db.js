// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.update_db');
goog.require('cljs.core');
goog.require('ob.transitions');
goog.require('ob.db_nav');
goog.require('com.rpl.specter');





/**
 * Performs specified update operation,
 * and handles transitions between updates.
 */
ob.update_db.run_db_update = (function ob$update_db$run_db_update(db,cf){
var db__$1 = (cljs.core.truth_(ob.update_db.display_update_QMARK_.call(null,cf))?ob.update_db.run_display_update.call(null,cf,db):ob.update_db.run_version_update.call(null,cf,db));
return ob.update_db.apply_trs.call(null,db__$1);
});
ob.update_db.display_update_QMARK_ = (function ob$update_db$display_update_QMARK_(p__191478){
var map__191479 = p__191478;
var map__191479__$1 = cljs.core.__destructure_map.call(null,map__191479);
var op = cljs.core.get.call(null,map__191479__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"remove","remove",-131428414),null,new cljs.core.Keyword(null,"replace","replace",-786587770),null,new cljs.core.Keyword(null,"append","append",-291298229),null,new cljs.core.Keyword(null,"update","update",1045576396),null], null), null).call(null,op);
});
ob.update_db.run_display_update = (function ob$update_db$run_display_update(frame,db){
var new_version = ob.update_db.update_db.call(null,frame,com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.update_db.pathcache191480;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191481 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null))], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null));
ob.update_db.pathcache191480 = info191481;

return info191481;
})():info__17750__auto__);
var precompiled191482 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191482.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled191482;
}
})(),db));
var prev_db_id = new cljs.core.Keyword("id","curr-db","id/curr-db",567946732).cljs$core$IFn$_invoke$arity$1(db);
var curr_db_id = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"version-"));
var new_version__$1 = cljs.core.merge.call(null,new_version,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483),prev_db_id,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),curr_db_id,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(frame)], null));
var db_STAR_ = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),curr_db_id,new cljs.core.Keyword("id","last-db","id/last-db",-474243973),prev_db_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),prev_db_id,new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),curr_db_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),curr_db_id], null),new_version__$1);
var db_STAR___$1 = ob.transitions.set_trs_info.call(null,db_STAR_,frame,prev_db_id,curr_db_id);
return db_STAR___$1;
});
if((typeof ob !== 'undefined') && (typeof ob.update_db !== 'undefined') && (typeof ob.update_db.update_db !== 'undefined')){
} else {
ob.update_db.update_db = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.update-db","update-db"),(function (p__191483,_){
var map__191484 = p__191483;
var map__191484__$1 = cljs.core.__destructure_map.call(null,map__191484);
var op = cljs.core.get.call(null,map__191484__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"append","append",-291298229),(function (p__191485,db){
var map__191486 = p__191485;
var map__191486__$1 = cljs.core.__destructure_map.call(null,map__191486);
var tid = cljs.core.get.call(null,map__191486__$1,new cljs.core.Keyword("id","target","id/target",253007142),new cljs.core.Keyword(null,"root","root",-448657453));
var pid = cljs.core.get.call(null,map__191486__$1,new cljs.core.Keyword("id","parent","id/parent",-878874974));
var data = cljs.core.get.call(null,map__191486__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),tid,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.conj,pid),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"replace","replace",-786587770),(function (p__191487,db){
var map__191488 = p__191487;
var map__191488__$1 = cljs.core.__destructure_map.call(null,map__191488);
var pre = cljs.core.get.call(null,map__191488__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226));
var post = cljs.core.get.call(null,map__191488__$1,new cljs.core.Keyword("id","post","id/post",269696948));
var data = cljs.core.get.call(null,map__191488__$1,new cljs.core.Keyword(null,"data","data",-232669377));
cljs.core.println.call(null,pre);

cljs.core.println.call(null,post);

return cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),pre,new cljs.core.Keyword(null,"redirect","redirect",-1975673286)], null),post),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"remove","remove",-131428414),(function (p__191489,db){
var map__191490 = p__191489;
var map__191490__$1 = cljs.core.__destructure_map.call(null,map__191490);
var id = cljs.core.get.call(null,map__191490__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),id], null),null);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"update","update",1045576396),(function (p__191491,db){
var map__191492 = p__191491;
var map__191492__$1 = cljs.core.__destructure_map.call(null,map__191492);
var data = cljs.core.get.call(null,map__191492__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
if((typeof ob !== 'undefined') && (typeof ob.update_db !== 'undefined') && (typeof ob.update_db.change_db_version !== 'undefined')){
} else {
ob.update_db.change_db_version = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.update-db","change-db-version"),(function (p__191493,_){
var map__191494 = p__191493;
var map__191494__$1 = cljs.core.__destructure_map.call(null,map__191494);
var op = cljs.core.get.call(null,map__191494__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
ob.update_db.jump_to_db = (function ob$update_db$jump_to_db(id,db){
var temp__5718__auto__ = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.update_db.pathcache191495;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191496 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null))], null)], null),"ob.update-db",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.update_db.pathcache191495 = info191496;

return info191496;
})():info__17750__auto__);
var precompiled191497 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191497.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id], null),id], null));
} else {
return precompiled191497;
}
})(),db);
if(cljs.core.truth_(temp__5718__auto__)){
var version = temp__5718__auto__;
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.update_db.pathcache191498;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191499 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("id","curr-db","id/curr-db",567946732)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
ob.update_db.pathcache191498 = info191499;

return info191499;
})():info__17750__auto__);
var precompiled191500 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191500.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled191500;
}
})(),new cljs.core.Keyword("id","curr-db","id/curr-db",567946732).cljs$core$IFn$_invoke$arity$1(version),db);
} else {
return db;
}
});
cljs.core._add_method.call(null,ob.update_db.change_db_version,new cljs.core.Keyword(null,"jump","jump",-971319427),(function (p__191501,db){
var map__191502 = p__191501;
var map__191502__$1 = cljs.core.__destructure_map.call(null,map__191502);
var id = cljs.core.get.call(null,map__191502__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return ob.update_db.jump_to_db.call(null,id,db);
}));
cljs.core._add_method.call(null,ob.update_db.change_db_version,new cljs.core.Keyword(null,"prev","prev",-1597069226),(function (_,db){
var temp__5718__auto__ = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.update_db.pathcache191503;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191504 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null));
ob.update_db.pathcache191503 = info191504;

return info191504;
})():info__17750__auto__);
var precompiled191505 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191505.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled191505;
}
})(),db);
if(cljs.core.truth_(temp__5718__auto__)){
var prev_id = temp__5718__auto__;
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.update_db.pathcache191506;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191507 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("id","curr-db","id/curr-db",567946732)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
ob.update_db.pathcache191506 = info191507;

return info191507;
})():info__17750__auto__);
var precompiled191508 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191508.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled191508;
}
})(),prev_id,db);
} else {
return db;
}
}));
ob.update_db.run_version_update = (function ob$update_db$run_version_update(frame,db){
var db_STAR_ = ob.update_db.change_db_version.call(null,frame,db);
return cljs.core.assoc.call(null,db_STAR_,new cljs.core.Keyword("id","last-db","id/last-db",-474243973),new cljs.core.Keyword("id","curr-db","id/curr-db",567946732).cljs$core$IFn$_invoke$arity$1(db));
});
ob.update_db.apply_trs = (function ob$update_db$apply_trs(db){
var map__191509 = db;
var map__191509__$1 = cljs.core.__destructure_map.call(null,map__191509);
var curr_db = cljs.core.get.call(null,map__191509__$1,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732));
var last_db = cljs.core.get.call(null,map__191509__$1,new cljs.core.Keyword("id","last-db","id/last-db",-474243973));
var trs_speed = cljs.core.get.call(null,map__191509__$1,new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344));
var trs = ob.transitions.get_trs_info.call(null,db,last_db,curr_db);
var db__$1 = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.update_db.pathcache191510;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191511 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null));
ob.update_db.pathcache191510 = info191511;

return info191511;
})():info__17750__auto__);
var precompiled191512 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191512.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled191512;
}
})(),cljs.core.partial.call(null,ob.transitions.apply_trs_to_display_data,trs,trs_speed),db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"time","time",1385887882),(function (){var t = cljs.core.get.call(null,trs,new cljs.core.Keyword(null,"time","time",1385887882),0.1);
return (trs_speed * t);
})()], null);
});

//# sourceMappingURL=update_db.js.map
