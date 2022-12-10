// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.update_db');
goog.require('cljs.core');
goog.require('ob.db_nav');
goog.require('com.rpl.specter');


/**
 * Performs specified update operation,
 * then performs standard logging.
 * 
 * - Stores history if specified
 * - Updates transition information
 */
ob.update_db.run_db_update = (function ob$update_db$run_db_update(db,cf){
var cf__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"trs?","trs?",-745190343).cljs$core$IFn$_invoke$arity$1(cf))?ob.update_db.process_trs.call(null,cf,new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344).cljs$core$IFn$_invoke$arity$1(db)):cf);
var new_version = ob.update_db.update_db.call(null,cf__$1,com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache150627;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150628 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"src/ob/db_nav.cljs",13,1,57,57,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null))], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null)], null));
ob.update_db.pathcache150627 = info150628;

return info150628;
})():info__17671__auto__);
var precompiled150629 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150629.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled150629;
}
})(),db));
var prev_db_id = new cljs.core.Keyword("id","curr-db","id/curr-db",567946732).cljs$core$IFn$_invoke$arity$1(db);
var curr_db_id = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"version-"));
var new_version__$1 = cljs.core.merge.call(null,new_version,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483),prev_db_id,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),curr_db_id], null));
var db_STAR_ = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732),curr_db_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),prev_db_id,new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),curr_db_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),curr_db_id], null),new_version__$1);
cljs.core.println.call(null,new cljs.core.Keyword("id","curr-db","id/curr-db",567946732).cljs$core$IFn$_invoke$arity$1(db));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db_STAR_,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cf__$1)], null);
});
if((typeof ob !== 'undefined') && (typeof ob.update_db !== 'undefined') && (typeof ob.update_db.update_db !== 'undefined')){
} else {
ob.update_db.update_db = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.update-db","update-db"),(function (p__150630,_){
var map__150631 = p__150630;
var map__150631__$1 = cljs.core.__destructure_map.call(null,map__150631);
var op = cljs.core.get.call(null,map__150631__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"append","append",-291298229),(function (p__150632,db){
var map__150633 = p__150632;
var map__150633__$1 = cljs.core.__destructure_map.call(null,map__150633);
var tid = cljs.core.get.call(null,map__150633__$1,new cljs.core.Keyword("id","target","id/target",253007142),new cljs.core.Keyword(null,"root","root",-448657453));
var pid = cljs.core.get.call(null,map__150633__$1,new cljs.core.Keyword("id","parent","id/parent",-878874974));
var data = cljs.core.get.call(null,map__150633__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),tid,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.conj,pid),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"replace","replace",-786587770),(function (p__150634,db){
var map__150635 = p__150634;
var map__150635__$1 = cljs.core.__destructure_map.call(null,map__150635);
var pre = cljs.core.get.call(null,map__150635__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226));
var post = cljs.core.get.call(null,map__150635__$1,new cljs.core.Keyword("id","post","id/post",269696948));
var data = cljs.core.get.call(null,map__150635__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432),pre,new cljs.core.Keyword(null,"redirect","redirect",-1975673286)], null),post),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"remove","remove",-131428414),(function (p__150636,db){
var map__150637 = p__150636;
var map__150637__$1 = cljs.core.__destructure_map.call(null,map__150637);
var id = cljs.core.get.call(null,map__150637__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),id);
}));
cljs.core._add_method.call(null,ob.update_db.update_db,new cljs.core.Keyword(null,"update","update",1045576396),(function (p__150638,db){
var map__150639 = p__150638;
var map__150639__$1 = cljs.core.__destructure_map.call(null,map__150639);
var data = cljs.core.get.call(null,map__150639__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
ob.update_db.process_trs = (function ob$update_db$process_trs(p__150641,trs_anchor){
var map__150642 = p__150641;
var map__150642__$1 = cljs.core.__destructure_map.call(null,map__150642);
var cf = map__150642__$1;
var trs = cljs.core.get.call(null,map__150642__$1,new cljs.core.Keyword(null,"trs","trs",1104008633));
var data = cljs.core.get.call(null,map__150642__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var trs_log = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var log_BANG_ = (function (id,dur,delay){
var trs_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dur","dur",1464522452),dur,new cljs.core.Keyword(null,"delay","delay",-574225219),delay,new cljs.core.Keyword(null,"total","total",1916810418),(dur + delay)], null);
return cljs.core.swap_BANG_.call(null,trs_log,cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,trs_attrs]));
});
var format_trs = (function (styles,dur,delay){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,styles,new cljs.core.Keyword(null,"trs","trs",1104008633)),new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),(cljs.core.truth_(dur)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dur),"ms"].join(''):null)),new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),(cljs.core.truth_(delay)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join(''):null));
});
var process_trs = (function (id,p__150643){
var map__150644 = p__150643;
var map__150644__$1 = cljs.core.__destructure_map.call(null,map__150644);
var styles = map__150644__$1;
var trs__$1 = cljs.core.get.call(null,map__150644__$1,new cljs.core.Keyword(null,"trs","trs",1104008633));
var map__150645 = trs__$1;
var map__150645__$1 = cljs.core.__destructure_map.call(null,map__150645);
var dur = cljs.core.get.call(null,map__150645__$1,new cljs.core.Keyword(null,"dur","dur",1464522452));
var delay = cljs.core.get.call(null,map__150645__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var vec__150646 = cljs.core.mapv.call(null,(function (p1__150640_SHARP_){
return (trs_anchor * p1__150640_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dur,delay], null));
var dur__$1 = cljs.core.nth.call(null,vec__150646,(0),null);
var delay__$1 = cljs.core.nth.call(null,vec__150646,(1),null);
log_BANG_.call(null,id,dur__$1,delay__$1);

return format_trs.call(null,styles,dur__$1,delay__$1);
});
var data__$1 = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache150649;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150650 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect,new cljs.core.Var(function(){return com.rpl.specter.collect;},new cljs.core.Symbol("com.rpl.specter","collect","com.rpl.specter/collect",-579290415,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1328),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect","collect",1356209978,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect)?com.rpl.specter.collect.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect","s/collect",1356210095,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect","s/collect",1356210095,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trs","trs",1104008633)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"trs","trs",1104008633)))], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect","s/collect",1356210095,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"trs","trs",1104008633))], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect","s/collect",1356210095,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)], null));
ob.update_db.pathcache150649 = info150650;

return info150650;
})():info__17671__auto__);
var precompiled150651 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150651.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,com.rpl.specter.collect.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736),com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"trs","trs",1104008633))], null),com.rpl.specter.MAP_VALS,com.rpl.specter.collect,com.rpl.specter.pred], null));
} else {
return precompiled150651;
}
})(),process_trs,data);
var max_time = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.update_db.pathcache150652;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info150653 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"total","total",1916810418)], null)], null),"ob.update-db",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"total","total",1916810418)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.update_db.pathcache150652 = info150653;

return info150653;
})():info__17671__auto__);
var precompiled150654 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled150654.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"total","total",1916810418)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled150654;
}
})(),cljs.core.deref.call(null,trs_log)));
return cljs.core.assoc.call(null,cf,new cljs.core.Keyword(null,"time","time",1385887882),max_time,new cljs.core.Keyword(null,"data","data",-232669377),data__$1);
});

//# sourceMappingURL=update_db.js.map
