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
ob.update_db.run_db_update = (function ob$update_db$run_db_update(db,p__41494){
var vec__41495 = p__41494;
var _ = cljs.core.nth.call(null,vec__41495,(0),null);
var cf = cljs.core.nth.call(null,vec__41495,(1),null);
var db_STAR_ = ob.update_db.update_db.call(null,cf,db);
var db_STAR___$1 = ob.update_db.log_history.call(null,cf,db,db_STAR_);
return db_STAR___$1;
});
if((typeof ob !== 'undefined') && (typeof ob.update_db !== 'undefined') && (typeof ob.update_db.update_db !== 'undefined')){
} else {
ob.update_db.update_db = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.update-db","update-db"),(function (p__41498,_){
var map__41499 = p__41498;
var map__41499__$1 = cljs.core.__destructure_map.call(null,map__41499);
var op = cljs.core.get.call(null,map__41499__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"append","append",-291298229),(function (p__41500,db){
var map__41501 = p__41500;
var map__41501__$1 = cljs.core.__destructure_map.call(null,map__41501);
var tid = cljs.core.get.call(null,map__41501__$1,new cljs.core.Keyword("id","target","id/target",253007142),new cljs.core.Keyword(null,"root","root",-448657453));
var pid = cljs.core.get.call(null,map__41501__$1,new cljs.core.Keyword("id","parent","id/parent",-878874974));
var data = cljs.core.get.call(null,map__41501__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),tid,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.conj,pid),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"replace","replace",-786587770),(function (p__41502,db){
var map__41503 = p__41502;
var map__41503__$1 = cljs.core.__destructure_map.call(null,map__41503);
var pre = cljs.core.get.call(null,map__41503__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226));
var post = cljs.core.get.call(null,map__41503__$1,new cljs.core.Keyword("id","post","id/post",269696948));
var data = cljs.core.get.call(null,map__41503__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),pre,new cljs.core.Keyword(null,"redirect","redirect",-1975673286)], null),post),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"remove","remove",-131428414),(function (p__41504,db){
var map__41505 = p__41504;
var map__41505__$1 = cljs.core.__destructure_map.call(null,map__41505);
var id = cljs.core.get.call(null,map__41505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),id);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"update","update",1045576396),(function (p__41506,db){
var map__41507 = p__41506;
var map__41507__$1 = cljs.core.__destructure_map.call(null,map__41507);
var data = cljs.core.get.call(null,map__41507__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"revert","revert",-983985933),(function (_,p__41508){
var map__41509 = p__41508;
var map__41509__$1 = cljs.core.__destructure_map.call(null,map__41509);
var history = cljs.core.get.call(null,map__41509__$1,new cljs.core.Keyword(null,"history","history",-247395220));
return history;
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
return db_STAR_;
} else {
return cljs.core.assoc.call(null,db_STAR_,new cljs.core.Keyword(null,"history","history",-247395220),db);
}
});

//# sourceMappingURL=update_db.js.map
