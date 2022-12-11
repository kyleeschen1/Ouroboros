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
ob.update_db.display_update_QMARK_ = (function ob$update_db$display_update_QMARK_(p__200657){
var map__200658 = p__200657;
var map__200658__$1 = cljs.core.__destructure_map.call(null,map__200658);
var op = cljs.core.get.call(null,map__200658__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"remove","remove",-131428414),null,new cljs.core.Keyword(null,"replace","replace",-786587770),null,new cljs.core.Keyword(null,"append","append",-291298229),null,new cljs.core.Keyword(null,"update","update",1045576396),null], null), null).call(null,op);
});
ob.update_db.run_display_update = (function ob$update_db$run_display_update(frame,db){
var new_version = ob.update_db.update_db.call(null,frame,com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache200659;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info200660 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",13,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null))], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null));
ob.update_db.pathcache200659 = info200660;

return info200660;
})():info__17671__auto__);
var precompiled200661 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled200661.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled200661;
}
})(),db));
var prev_db_id = new cljs.core.Keyword("id","curr-db","id/curr-db",567946732).cljs$core$IFn$_invoke$arity$1(db);
var curr_db_id = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"version-"));
var new_version__$1 = cljs.core.merge.call(null,new_version,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483),prev_db_id,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),curr_db_id], null));
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
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.update-db","update-db"),(function (p__200662,_){
var map__200663 = p__200662;
var map__200663__$1 = cljs.core.__destructure_map.call(null,map__200663);
var op = cljs.core.get.call(null,map__200663__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"append","append",-291298229),(function (p__200664,db){
var map__200665 = p__200664;
var map__200665__$1 = cljs.core.__destructure_map.call(null,map__200665);
var tid = cljs.core.get.call(null,map__200665__$1,new cljs.core.Keyword("id","target","id/target",253007142),new cljs.core.Keyword(null,"root","root",-448657453));
var pid = cljs.core.get.call(null,map__200665__$1,new cljs.core.Keyword("id","parent","id/parent",-878874974));
var data = cljs.core.get.call(null,map__200665__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),tid,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.conj,pid),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"replace","replace",-786587770),(function (p__200666,db){
var map__200667 = p__200666;
var map__200667__$1 = cljs.core.__destructure_map.call(null,map__200667);
var pre = cljs.core.get.call(null,map__200667__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226));
var post = cljs.core.get.call(null,map__200667__$1,new cljs.core.Keyword("id","post","id/post",269696948));
var data = cljs.core.get.call(null,map__200667__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),pre,new cljs.core.Keyword(null,"redirect","redirect",-1975673286)], null),post),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"remove","remove",-131428414),(function (p__200668,db){
var map__200669 = p__200668;
var map__200669__$1 = cljs.core.__destructure_map.call(null,map__200669);
var id = cljs.core.get.call(null,map__200669__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),id);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"update","update",1045576396),(function (p__200670,db){
var map__200671 = p__200670;
var map__200671__$1 = cljs.core.__destructure_map.call(null,map__200671);
var data = cljs.core.get.call(null,map__200671__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
if((typeof ob !== 'undefined') && (typeof ob.update_db !== 'undefined') && (typeof ob.update_db.change_db_version !== 'undefined')){
} else {
ob.update_db.change_db_version = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.update-db","change-db-version"),(function (p__200672,_){
var map__200673 = p__200672;
var map__200673__$1 = cljs.core.__destructure_map.call(null,map__200673);
var op = cljs.core.get.call(null,map__200673__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.update_db.change_db_version,new cljs.core.Keyword(null,"prev","prev",-1597069226),(function (_,db){
var temp__5718__auto__ = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache200674;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info200675 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",13,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null));
ob.update_db.pathcache200674 = info200675;

return info200675;
})():info__17671__auto__);
var precompiled200676 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled200676.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled200676;
}
})(),db);
if(cljs.core.truth_(temp__5718__auto__)){
var prev_id = temp__5718__auto__;
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache200677;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info200678 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("id","curr-db","id/curr-db",567946732)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
ob.update_db.pathcache200677 = info200678;

return info200678;
})():info__17671__auto__);
var precompiled200679 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled200679.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled200679;
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
var map__200680 = db;
var map__200680__$1 = cljs.core.__destructure_map.call(null,map__200680);
var curr_db = cljs.core.get.call(null,map__200680__$1,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732));
var last_db = cljs.core.get.call(null,map__200680__$1,new cljs.core.Keyword("id","last-db","id/last-db",-474243973));
var trs_speed = cljs.core.get.call(null,map__200680__$1,new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344));
var trs = ob.transitions.get_trs_info.call(null,db,last_db,curr_db);
var db__$1 = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache200681;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info200682 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",13,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null));
ob.update_db.pathcache200681 = info200682;

return info200682;
})():info__17671__auto__);
var precompiled200683 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled200683.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled200683;
}
})(),cljs.core.partial.call(null,ob.transitions.apply_trs_to_display_data,trs,trs_speed),db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"time","time",1385887882),(trs_speed * new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(trs))], null);
});

//# sourceMappingURL=update_db.js.map
