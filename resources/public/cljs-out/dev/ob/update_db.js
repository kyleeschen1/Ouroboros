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
ob.update_db.run_db_update = (function ob$update_db$run_db_update(db,p__86309){
var vec__86310 = p__86309;
var _ = cljs.core.nth.call(null,vec__86310,(0),null);
var cf = cljs.core.nth.call(null,vec__86310,(1),null);
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
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.update-db","update-db"),(function (p__86313,_){
var map__86314 = p__86313;
var map__86314__$1 = cljs.core.__destructure_map.call(null,map__86314);
var op = cljs.core.get.call(null,map__86314__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"append","append",-291298229),(function (p__86315,db){
var map__86316 = p__86315;
var map__86316__$1 = cljs.core.__destructure_map.call(null,map__86316);
var tid = cljs.core.get.call(null,map__86316__$1,new cljs.core.Keyword("id","target","id/target",253007142),new cljs.core.Keyword(null,"root","root",-448657453));
var pid = cljs.core.get.call(null,map__86316__$1,new cljs.core.Keyword("id","parent","id/parent",-878874974));
var data = cljs.core.get.call(null,map__86316__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),tid,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.conj,pid),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"replace","replace",-786587770),(function (p__86317,db){
var map__86318 = p__86317;
var map__86318__$1 = cljs.core.__destructure_map.call(null,map__86318);
var pre = cljs.core.get.call(null,map__86318__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226));
var post = cljs.core.get.call(null,map__86318__$1,new cljs.core.Keyword("id","post","id/post",269696948));
var data = cljs.core.get.call(null,map__86318__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),pre,new cljs.core.Keyword(null,"redirect","redirect",-1975673286)], null),post),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"remove","remove",-131428414),(function (p__86319,db){
var map__86320 = p__86319;
var map__86320__$1 = cljs.core.__destructure_map.call(null,map__86320);
var id = cljs.core.get.call(null,map__86320__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),id);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"update","update",1045576396),(function (p__86321,db){
var map__86322 = p__86321;
var map__86322__$1 = cljs.core.__destructure_map.call(null,map__86322);
var data = cljs.core.get.call(null,map__86322__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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

//# sourceMappingURL=update_db.js.map
