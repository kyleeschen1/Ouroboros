// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.core');
goog.require('cljs.core');
goog.require('ob.db_nav');
goog.require('ob.scroll');
goog.require('ob.clojure');
goog.require('ob.analyzer');
goog.require('ob.data_to_hiccup');
goog.require('ob.defs');
goog.require('ob.utils');
goog.require('ob.event_loop');
goog.require('com.rpl.specter');
goog.require('cljsjs.d3');
goog.require('cljs.pprint');
goog.require('cljs.repl');
goog.require('clojure.zip');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
ob.core.WALK_ALL = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache169452;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169453 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache169452 = info169453;

return info169453;
})():info__17750__auto__);
var precompiled169454 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169454.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled169454;
}
})());

return p;
})();
ob.core.AST_WALK = com.rpl.specter.cond_path.call(null,cljs.core.map_QMARK_,com.rpl.specter.STAY,cljs.core.vector_QMARK_,com.rpl.specter.ALL,com.rpl.specter.STAY);


ob.core.AST_CHILDREN_select_STAR_ = (function ob$core$AST_CHILDREN_select_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169455;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169456 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache169455 = info169456;

return info169456;
})():info__17750__auto__);
var precompiled169457 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169457.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled169457;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169458;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169459 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache169458 = info169459;

return info169459;
})():info__17750__auto__);
var precompiled169460 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169460.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled169460;
}
})(),next_fn,s);
} else {
return null;
}
});

ob.core.AST_CHILDREN_transform_STAR_ = (function ob$core$AST_CHILDREN_transform_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169461;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169462 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache169461 = info169462;

return info169462;
})():info__17750__auto__);
var precompiled169463 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169463.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled169463;
}
})(),next_fn,ast);
} else {
return null;
}
});

ob.core.AST_CHILDREN = (function (){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core169464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core169464 = (function (meta169465){
this.meta169465 = meta169465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core169464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_169466,meta169465__$1){
var self__ = this;
var _169466__$1 = this;
return (new ob.core.t_ob$core169464(meta169465__$1));
}));

(ob.core.t_ob$core169464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_169466){
var self__ = this;
var _169466__$1 = this;
return self__.meta169465;
}));

(ob.core.t_ob$core169464.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core169464.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,ast,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169467;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169468 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache169467 = info169468;

return info169468;
})():info__17750__auto__);
var precompiled169469 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169469.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled169469;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169470;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169471 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache169470 = info169471;

return info169471;
})():info__17750__auto__);
var precompiled169472 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169472.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled169472;
}
})(),next_fn,s);
} else {
return null;
}
}));

(ob.core.t_ob$core169464.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,ast,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169473;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169474 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache169473 = info169474;

return info169474;
})():info__17750__auto__);
var precompiled169475 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169475.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled169475;
}
})(),next_fn,ast);
} else {
return null;
}
}));

(ob.core.t_ob$core169464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta169465","meta169465",-1302461385,null)], null);
}));

(ob.core.t_ob$core169464.cljs$lang$type = true);

(ob.core.t_ob$core169464.cljs$lang$ctorStr = "ob.core/t_ob$core169464");

(ob.core.t_ob$core169464.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core169464");
}));

/**
 * Positional factory function for ob.core/t_ob$core169464.
 */
ob.core.__GT_t_ob$core169464 = (function ob$core$__GT_t_ob$core169464(meta169465){
return (new ob.core.t_ob$core169464(meta169465));
});

}

return (new ob.core.t_ob$core169464(null));
})()
;
ob.core.AST_PRE_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache169476;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169477 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache169476 = info169477;

return info169477;
})():info__17750__auto__);
var precompiled169478 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169478.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.stay_then_continue,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled169478;
}
})());

return p;
})();
ob.core.AST_POST_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache169479;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169480 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache169479 = info169480;

return info169480;
})():info__17750__auto__);
var precompiled169481 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169481.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.continue_then_stay,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled169481;
}
})());

return p;
})();
ob.core.AST_DESC = ob.core.AST_POST_WALK;
ob.core.DATA = com.rpl.specter.MAP_VALS;
ob.core.datum__GT_child_ids = (function ob$core$datum__GT_child_ids(var_args){
var G__169483 = arguments.length;
switch (G__169483) {
case 1:
return ob.core.datum__GT_child_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ob.core.datum__GT_child_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.datum__GT_child_ids.cljs$core$IFn$_invoke$arity$1 = (function (datum){
return ob.core.datum__GT_child_ids.call(null,datum,true);
}));

(ob.core.datum__GT_child_ids.cljs$core$IFn$_invoke$arity$2 = (function (datum,parens_QMARK_){
return cljs.core.flatten.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169484;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169485 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.DATA,new cljs.core.Var(function(){return ob.core.DATA;},new cljs.core.Symbol("ob.core","DATA","ob.core/DATA",1547210987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),"src/ob/core.cljs",10,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.DATA)?ob.core.DATA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830))))], null)], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830))),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache169484 = info169485;

return info169485;
})():info__17750__auto__);
var precompiled169486 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169486.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.DATA,com.rpl.specter.submap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null)], null)),com.rpl.specter.MAP_VALS], null),ob.core.DATA,com.rpl.specter.submap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null)], null),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled169486;
}
})(),datum));
}));

(ob.core.datum__GT_child_ids.cljs$lang$maxFixedArity = 2);



ob.core.parens_select_STAR_ = (function ob$core$parens_select_STAR_(id,db,next_fn){
var ids = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(id.call(null,db));
return next_fn.call(null,cljs.core.select_keys.call(null,db,ids));
});

ob.core.parens_transform_STAR_ = (function ob$core$parens_transform_STAR_(id,db,next_fn){
var ids = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(id.call(null,db));
return cljs.core.merge.call(null,db,next_fn.call(null,cljs.core.select_keys.call(null,db,ids)));
});

ob.core.parens = com.rpl.specter.impl.direct_nav_obj.call(null,(function (id){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core169488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core169488 = (function (id,meta169489){
this.id = id;
this.meta169489 = meta169489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core169488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_169490,meta169489__$1){
var self__ = this;
var _169490__$1 = this;
return (new ob.core.t_ob$core169488(self__.id,meta169489__$1));
}));

(ob.core.t_ob$core169488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_169490){
var self__ = this;
var _169490__$1 = this;
return self__.meta169489;
}));

(ob.core.t_ob$core169488.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core169488.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var ids = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(self__.id.call(null,db));
return next_fn.call(null,cljs.core.select_keys.call(null,db,ids));
}));

(ob.core.t_ob$core169488.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var ids = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(self__.id.call(null,db));
return cljs.core.merge.call(null,db,next_fn.call(null,cljs.core.select_keys.call(null,db,ids)));
}));

(ob.core.t_ob$core169488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta169489","meta169489",-1655253232,null)], null);
}));

(ob.core.t_ob$core169488.cljs$lang$type = true);

(ob.core.t_ob$core169488.cljs$lang$ctorStr = "ob.core/t_ob$core169488");

(ob.core.t_ob$core169488.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core169488");
}));

/**
 * Positional factory function for ob.core/t_ob$core169488.
 */
ob.core.__GT_t_ob$core169488 = (function ob$core$__GT_t_ob$core169488(id__$1,meta169489){
return (new ob.core.t_ob$core169488(id__$1,meta169489));
});

}

return (new ob.core.t_ob$core169488(id,null));
}));


ob.core.children_select_STAR_ = (function ob$core$children_select_STAR_(id,parens_QMARK_,db,next_fn){
var child_ids = ob.core.datum__GT_child_ids.call(null,id.call(null,db));
return next_fn.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169491;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169492 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache169491 = info169492;

return info169492;
})():info__17750__auto__);
var precompiled169493 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169493.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled169493;
}
})(),db));
});

ob.core.children_transform_STAR_ = (function ob$core$children_transform_STAR_(id,parens_QMARK_,db,next_fn){
var child_ids = ob.core.datum__GT_child_ids.call(null,id.call(null,db));
return cljs.core.merge.call(null,db,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169494;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169495 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache169494 = info169495;

return info169495;
})():info__17750__auto__);
var precompiled169496 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169496.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled169496;
}
})(),next_fn,db));
});

ob.core.children = com.rpl.specter.impl.direct_nav_obj.call(null,(function (id,parens_QMARK_){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core169497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core169497 = (function (id,parens_QMARK_,meta169498){
this.id = id;
this.parens_QMARK_ = parens_QMARK_;
this.meta169498 = meta169498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core169497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_169499,meta169498__$1){
var self__ = this;
var _169499__$1 = this;
return (new ob.core.t_ob$core169497(self__.id,self__.parens_QMARK_,meta169498__$1));
}));

(ob.core.t_ob$core169497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_169499){
var self__ = this;
var _169499__$1 = this;
return self__.meta169498;
}));

(ob.core.t_ob$core169497.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core169497.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var child_ids = ob.core.datum__GT_child_ids.call(null,self__.id.call(null,db));
return next_fn.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169500;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169501 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache169500 = info169501;

return info169501;
})():info__17750__auto__);
var precompiled169502 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169502.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled169502;
}
})(),db));
}));

(ob.core.t_ob$core169497.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var child_ids = ob.core.datum__GT_child_ids.call(null,self__.id.call(null,db));
return cljs.core.merge.call(null,db,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169503;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169504 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache169503 = info169504;

return info169504;
})():info__17750__auto__);
var precompiled169505 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169505.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled169505;
}
})(),next_fn,db));
}));

(ob.core.t_ob$core169497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),new cljs.core.Symbol(null,"meta169498","meta169498",-1837925656,null)], null);
}));

(ob.core.t_ob$core169497.cljs$lang$type = true);

(ob.core.t_ob$core169497.cljs$lang$ctorStr = "ob.core/t_ob$core169497");

(ob.core.t_ob$core169497.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core169497");
}));

/**
 * Positional factory function for ob.core/t_ob$core169497.
 */
ob.core.__GT_t_ob$core169497 = (function ob$core$__GT_t_ob$core169497(id__$1,parens_QMARK___$1,meta169498){
return (new ob.core.t_ob$core169497(id__$1,parens_QMARK___$1,meta169498));
});

}

return (new ob.core.t_ob$core169497(id,parens_QMARK_,null));
}));
ob.core.lookup_by_id = (function ob$core$lookup_by_id(db,id){
while(true){
var val = cljs.core.get.call(null,db,id);
var temp__5718__auto__ = new cljs.core.Keyword(null,"redirect","redirect",-1975673286).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(temp__5718__auto__)){
var r = temp__5718__auto__;
var G__169506 = db;
var G__169507 = r;
db = G__169506;
id = G__169507;
continue;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,val]);
}
break;
}
});


ob.core.desc_select_STAR_ = (function ob$core$desc_select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$desc_select_STAR__$_gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__169512 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__169513 = null;
var count__169514 = (0);
var i__169515 = (0);
while(true){
if((i__169515 < count__169514)){
var c = cljs.core._nth.call(null,chunk__169513,i__169515);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__169543 = seq__169512;
var G__169544 = chunk__169513;
var G__169545 = count__169514;
var G__169546 = (i__169515 + (1));
seq__169512 = G__169543;
chunk__169513 = G__169544;
count__169514 = G__169545;
i__169515 = G__169546;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169512);
if(temp__5720__auto__){
var seq__169512__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169512__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169512__$1);
var G__169547 = cljs.core.chunk_rest.call(null,seq__169512__$1);
var G__169548 = c__4679__auto__;
var G__169549 = cljs.core.count.call(null,c__4679__auto__);
var G__169550 = (0);
seq__169512 = G__169547;
chunk__169513 = G__169548;
count__169514 = G__169549;
i__169515 = G__169550;
continue;
} else {
var c = cljs.core.first.call(null,seq__169512__$1);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__169551 = cljs.core.next.call(null,seq__169512__$1);
var G__169552 = null;
var G__169553 = (0);
var G__169554 = (0);
seq__169512 = G__169551;
chunk__169513 = G__169552;
count__169514 = G__169553;
i__169515 = G__169554;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,k);

return next_fn.call(null,cljs.core.deref.call(null,col));
});

ob.core.desc_transform_STAR_ = (function ob$core$desc_transform_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$desc_transform_STAR__$_gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));

var seq__169520 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__169521 = null;
var count__169522 = (0);
var i__169523 = (0);
while(true){
if((i__169523 < count__169522)){
var c = cljs.core._nth.call(null,chunk__169521,i__169523);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__169555 = seq__169520;
var G__169556 = chunk__169521;
var G__169557 = count__169522;
var G__169558 = (i__169523 + (1));
seq__169520 = G__169555;
chunk__169521 = G__169556;
count__169522 = G__169557;
i__169523 = G__169558;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169520);
if(temp__5720__auto__){
var seq__169520__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169520__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169520__$1);
var G__169559 = cljs.core.chunk_rest.call(null,seq__169520__$1);
var G__169560 = c__4679__auto__;
var G__169561 = cljs.core.count.call(null,c__4679__auto__);
var G__169562 = (0);
seq__169520 = G__169559;
chunk__169521 = G__169560;
count__169522 = G__169561;
i__169523 = G__169562;
continue;
} else {
var c = cljs.core.first.call(null,seq__169520__$1);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__169563 = cljs.core.next.call(null,seq__169520__$1);
var G__169564 = null;
var G__169565 = (0);
var G__169566 = (0);
seq__169520 = G__169563;
chunk__169521 = G__169564;
count__169522 = G__169565;
i__169523 = G__169566;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,k);

return cljs.core.apply.call(null,cljs.core.merge,db,cljs.core.deref.call(null,col));
});

ob.core.desc = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core169524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core169524 = (function (k,meta169525){
this.k = k;
this.meta169525 = meta169525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core169524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_169526,meta169525__$1){
var self__ = this;
var _169526__$1 = this;
return (new ob.core.t_ob$core169524(self__.k,meta169525__$1));
}));

(ob.core.t_ob$core169524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_169526){
var self__ = this;
var _169526__$1 = this;
return self__.meta169525;
}));

(ob.core.t_ob$core169524.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core169524.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__169531 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__169532 = null;
var count__169533 = (0);
var i__169534 = (0);
while(true){
if((i__169534 < count__169533)){
var c = cljs.core._nth.call(null,chunk__169532,i__169534);
ob$core$gather.call(null,c);


var G__169567 = seq__169531;
var G__169568 = chunk__169532;
var G__169569 = count__169533;
var G__169570 = (i__169534 + (1));
seq__169531 = G__169567;
chunk__169532 = G__169568;
count__169533 = G__169569;
i__169534 = G__169570;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169531);
if(temp__5720__auto__){
var seq__169531__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169531__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169531__$1);
var G__169571 = cljs.core.chunk_rest.call(null,seq__169531__$1);
var G__169572 = c__4679__auto__;
var G__169573 = cljs.core.count.call(null,c__4679__auto__);
var G__169574 = (0);
seq__169531 = G__169571;
chunk__169532 = G__169572;
count__169533 = G__169573;
i__169534 = G__169574;
continue;
} else {
var c = cljs.core.first.call(null,seq__169531__$1);
ob$core$gather.call(null,c);


var G__169575 = cljs.core.next.call(null,seq__169531__$1);
var G__169576 = null;
var G__169577 = (0);
var G__169578 = (0);
seq__169531 = G__169575;
chunk__169532 = G__169576;
count__169533 = G__169577;
i__169534 = G__169578;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,self__.k);

return next_fn.call(null,cljs.core.deref.call(null,col));
}));

(ob.core.t_ob$core169524.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));

var seq__169539 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__169540 = null;
var count__169541 = (0);
var i__169542 = (0);
while(true){
if((i__169542 < count__169541)){
var c = cljs.core._nth.call(null,chunk__169540,i__169542);
ob$core$gather.call(null,c);


var G__169579 = seq__169539;
var G__169580 = chunk__169540;
var G__169581 = count__169541;
var G__169582 = (i__169542 + (1));
seq__169539 = G__169579;
chunk__169540 = G__169580;
count__169541 = G__169581;
i__169542 = G__169582;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169539);
if(temp__5720__auto__){
var seq__169539__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169539__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169539__$1);
var G__169583 = cljs.core.chunk_rest.call(null,seq__169539__$1);
var G__169584 = c__4679__auto__;
var G__169585 = cljs.core.count.call(null,c__4679__auto__);
var G__169586 = (0);
seq__169539 = G__169583;
chunk__169540 = G__169584;
count__169541 = G__169585;
i__169542 = G__169586;
continue;
} else {
var c = cljs.core.first.call(null,seq__169539__$1);
ob$core$gather.call(null,c);


var G__169587 = cljs.core.next.call(null,seq__169539__$1);
var G__169588 = null;
var G__169589 = (0);
var G__169590 = (0);
seq__169539 = G__169587;
chunk__169540 = G__169588;
count__169541 = G__169589;
i__169542 = G__169590;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,self__.k);

return cljs.core.apply.call(null,cljs.core.merge,db,cljs.core.deref.call(null,col));
}));

(ob.core.t_ob$core169524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta169525","meta169525",-2032828426,null)], null);
}));

(ob.core.t_ob$core169524.cljs$lang$type = true);

(ob.core.t_ob$core169524.cljs$lang$ctorStr = "ob.core/t_ob$core169524");

(ob.core.t_ob$core169524.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core169524");
}));

/**
 * Positional factory function for ob.core/t_ob$core169524.
 */
ob.core.__GT_t_ob$core169524 = (function ob$core$__GT_t_ob$core169524(k__$1,meta169525){
return (new ob.core.t_ob$core169524(k__$1,meta169525));
});

}

return (new ob.core.t_ob$core169524(k,null));
}));


ob.core.desc_but_node_select_STAR_ = (function ob$core$desc_but_node_select_STAR_(k,node_id,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$desc_but_node_select_STAR__$_gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
if(cljs.core._EQ_.call(null,node_id,cljs.core.ffirst.call(null,datum))){
return null;
} else {
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__169595 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__169596 = null;
var count__169597 = (0);
var i__169598 = (0);
while(true){
if((i__169598 < count__169597)){
var c = cljs.core._nth.call(null,chunk__169596,i__169598);
ob$core$desc_but_node_select_STAR__$_gather.call(null,c);


var G__169626 = seq__169595;
var G__169627 = chunk__169596;
var G__169628 = count__169597;
var G__169629 = (i__169598 + (1));
seq__169595 = G__169626;
chunk__169596 = G__169627;
count__169597 = G__169628;
i__169598 = G__169629;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169595);
if(temp__5720__auto__){
var seq__169595__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169595__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169595__$1);
var G__169630 = cljs.core.chunk_rest.call(null,seq__169595__$1);
var G__169631 = c__4679__auto__;
var G__169632 = cljs.core.count.call(null,c__4679__auto__);
var G__169633 = (0);
seq__169595 = G__169630;
chunk__169596 = G__169631;
count__169597 = G__169632;
i__169598 = G__169633;
continue;
} else {
var c = cljs.core.first.call(null,seq__169595__$1);
ob$core$desc_but_node_select_STAR__$_gather.call(null,c);


var G__169634 = cljs.core.next.call(null,seq__169595__$1);
var G__169635 = null;
var G__169636 = (0);
var G__169637 = (0);
seq__169595 = G__169634;
chunk__169596 = G__169635;
count__169597 = G__169636;
i__169598 = G__169637;
continue;
}
} else {
return null;
}
}
break;
}
}
});
gather.call(null,k);

return next_fn.call(null,cljs.core.deref.call(null,col));
});

ob.core.desc_but_node_transform_STAR_ = (function ob$core$desc_but_node_transform_STAR_(k,node_id,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$desc_but_node_transform_STAR__$_gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));

var seq__169603 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__169604 = null;
var count__169605 = (0);
var i__169606 = (0);
while(true){
if((i__169606 < count__169605)){
var c = cljs.core._nth.call(null,chunk__169604,i__169606);
ob$core$desc_but_node_transform_STAR__$_gather.call(null,c);


var G__169638 = seq__169603;
var G__169639 = chunk__169604;
var G__169640 = count__169605;
var G__169641 = (i__169606 + (1));
seq__169603 = G__169638;
chunk__169604 = G__169639;
count__169605 = G__169640;
i__169606 = G__169641;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169603);
if(temp__5720__auto__){
var seq__169603__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169603__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169603__$1);
var G__169642 = cljs.core.chunk_rest.call(null,seq__169603__$1);
var G__169643 = c__4679__auto__;
var G__169644 = cljs.core.count.call(null,c__4679__auto__);
var G__169645 = (0);
seq__169603 = G__169642;
chunk__169604 = G__169643;
count__169605 = G__169644;
i__169606 = G__169645;
continue;
} else {
var c = cljs.core.first.call(null,seq__169603__$1);
ob$core$desc_but_node_transform_STAR__$_gather.call(null,c);


var G__169646 = cljs.core.next.call(null,seq__169603__$1);
var G__169647 = null;
var G__169648 = (0);
var G__169649 = (0);
seq__169603 = G__169646;
chunk__169604 = G__169647;
count__169605 = G__169648;
i__169606 = G__169649;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,k);

return cljs.core.apply.call(null,cljs.core.merge,db,cljs.core.deref.call(null,col));
});

ob.core.desc_but_node = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k,node_id){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core169607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core169607 = (function (k,node_id,meta169608){
this.k = k;
this.node_id = node_id;
this.meta169608 = meta169608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core169607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_169609,meta169608__$1){
var self__ = this;
var _169609__$1 = this;
return (new ob.core.t_ob$core169607(self__.k,self__.node_id,meta169608__$1));
}));

(ob.core.t_ob$core169607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_169609){
var self__ = this;
var _169609__$1 = this;
return self__.meta169608;
}));

(ob.core.t_ob$core169607.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core169607.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
if(cljs.core._EQ_.call(null,self__.node_id,cljs.core.ffirst.call(null,datum))){
return null;
} else {
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__169614 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__169615 = null;
var count__169616 = (0);
var i__169617 = (0);
while(true){
if((i__169617 < count__169616)){
var c = cljs.core._nth.call(null,chunk__169615,i__169617);
ob$core$gather.call(null,c);


var G__169650 = seq__169614;
var G__169651 = chunk__169615;
var G__169652 = count__169616;
var G__169653 = (i__169617 + (1));
seq__169614 = G__169650;
chunk__169615 = G__169651;
count__169616 = G__169652;
i__169617 = G__169653;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169614);
if(temp__5720__auto__){
var seq__169614__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169614__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169614__$1);
var G__169654 = cljs.core.chunk_rest.call(null,seq__169614__$1);
var G__169655 = c__4679__auto__;
var G__169656 = cljs.core.count.call(null,c__4679__auto__);
var G__169657 = (0);
seq__169614 = G__169654;
chunk__169615 = G__169655;
count__169616 = G__169656;
i__169617 = G__169657;
continue;
} else {
var c = cljs.core.first.call(null,seq__169614__$1);
ob$core$gather.call(null,c);


var G__169658 = cljs.core.next.call(null,seq__169614__$1);
var G__169659 = null;
var G__169660 = (0);
var G__169661 = (0);
seq__169614 = G__169658;
chunk__169615 = G__169659;
count__169616 = G__169660;
i__169617 = G__169661;
continue;
}
} else {
return null;
}
}
break;
}
}
});
gather.call(null,self__.k);

return next_fn.call(null,cljs.core.deref.call(null,col));
}));

(ob.core.t_ob$core169607.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));

var seq__169622 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__169623 = null;
var count__169624 = (0);
var i__169625 = (0);
while(true){
if((i__169625 < count__169624)){
var c = cljs.core._nth.call(null,chunk__169623,i__169625);
ob$core$gather.call(null,c);


var G__169662 = seq__169622;
var G__169663 = chunk__169623;
var G__169664 = count__169624;
var G__169665 = (i__169625 + (1));
seq__169622 = G__169662;
chunk__169623 = G__169663;
count__169624 = G__169664;
i__169625 = G__169665;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169622);
if(temp__5720__auto__){
var seq__169622__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169622__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169622__$1);
var G__169666 = cljs.core.chunk_rest.call(null,seq__169622__$1);
var G__169667 = c__4679__auto__;
var G__169668 = cljs.core.count.call(null,c__4679__auto__);
var G__169669 = (0);
seq__169622 = G__169666;
chunk__169623 = G__169667;
count__169624 = G__169668;
i__169625 = G__169669;
continue;
} else {
var c = cljs.core.first.call(null,seq__169622__$1);
ob$core$gather.call(null,c);


var G__169670 = cljs.core.next.call(null,seq__169622__$1);
var G__169671 = null;
var G__169672 = (0);
var G__169673 = (0);
seq__169622 = G__169670;
chunk__169623 = G__169671;
count__169624 = G__169672;
i__169625 = G__169673;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,self__.k);

return cljs.core.apply.call(null,cljs.core.merge,db,cljs.core.deref.call(null,col));
}));

(ob.core.t_ob$core169607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"meta169608","meta169608",-1943849464,null)], null);
}));

(ob.core.t_ob$core169607.cljs$lang$type = true);

(ob.core.t_ob$core169607.cljs$lang$ctorStr = "ob.core/t_ob$core169607");

(ob.core.t_ob$core169607.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core169607");
}));

/**
 * Positional factory function for ob.core/t_ob$core169607.
 */
ob.core.__GT_t_ob$core169607 = (function ob$core$__GT_t_ob$core169607(k__$1,node_id__$1,meta169608){
return (new ob.core.t_ob$core169607(k__$1,node_id__$1,meta169608));
});

}

return (new ob.core.t_ob$core169607(k,node_id,null));
}));


ob.core.desc_nodes_select_STAR_ = (function ob$core$desc_nodes_select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$desc_nodes_select_STAR__$_gather(k__$1){
var datum = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null));
var ci = ob.core.datum__GT_child_ids.call(null,datum);
if(cljs.core.seq.call(null,ci)){
var seq__169678 = cljs.core.seq.call(null,ci);
var chunk__169679 = null;
var count__169680 = (0);
var i__169681 = (0);
while(true){
if((i__169681 < count__169680)){
var c = cljs.core._nth.call(null,chunk__169679,i__169681);
ob$core$desc_nodes_select_STAR__$_gather.call(null,c);


var G__169709 = seq__169678;
var G__169710 = chunk__169679;
var G__169711 = count__169680;
var G__169712 = (i__169681 + (1));
seq__169678 = G__169709;
chunk__169679 = G__169710;
count__169680 = G__169711;
i__169681 = G__169712;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169678);
if(temp__5720__auto__){
var seq__169678__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169678__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169678__$1);
var G__169713 = cljs.core.chunk_rest.call(null,seq__169678__$1);
var G__169714 = c__4679__auto__;
var G__169715 = cljs.core.count.call(null,c__4679__auto__);
var G__169716 = (0);
seq__169678 = G__169713;
chunk__169679 = G__169714;
count__169680 = G__169715;
i__169681 = G__169716;
continue;
} else {
var c = cljs.core.first.call(null,seq__169678__$1);
ob$core$desc_nodes_select_STAR__$_gather.call(null,c);


var G__169717 = cljs.core.next.call(null,seq__169678__$1);
var G__169718 = null;
var G__169719 = (0);
var G__169720 = (0);
seq__169678 = G__169717;
chunk__169679 = G__169718;
count__169680 = G__169719;
i__169681 = G__169720;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));
}
});
gather.call(null,k);

return cljs.core.deref.call(null,col);
});

ob.core.desc_nodes_transform_STAR_ = (function ob$core$desc_nodes_transform_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$desc_nodes_transform_STAR__$_gather(k__$1){
var datum = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null));
var ci = ob.core.datum__GT_child_ids.call(null,datum);
if(cljs.core.seq.call(null,ci)){
var seq__169686 = cljs.core.seq.call(null,ci);
var chunk__169687 = null;
var count__169688 = (0);
var i__169689 = (0);
while(true){
if((i__169689 < count__169688)){
var c = cljs.core._nth.call(null,chunk__169687,i__169689);
ob$core$desc_nodes_transform_STAR__$_gather.call(null,c);


var G__169721 = seq__169686;
var G__169722 = chunk__169687;
var G__169723 = count__169688;
var G__169724 = (i__169689 + (1));
seq__169686 = G__169721;
chunk__169687 = G__169722;
count__169688 = G__169723;
i__169689 = G__169724;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169686);
if(temp__5720__auto__){
var seq__169686__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169686__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169686__$1);
var G__169725 = cljs.core.chunk_rest.call(null,seq__169686__$1);
var G__169726 = c__4679__auto__;
var G__169727 = cljs.core.count.call(null,c__4679__auto__);
var G__169728 = (0);
seq__169686 = G__169725;
chunk__169687 = G__169726;
count__169688 = G__169727;
i__169689 = G__169728;
continue;
} else {
var c = cljs.core.first.call(null,seq__169686__$1);
ob$core$desc_nodes_transform_STAR__$_gather.call(null,c);


var G__169729 = cljs.core.next.call(null,seq__169686__$1);
var G__169730 = null;
var G__169731 = (0);
var G__169732 = (0);
seq__169686 = G__169729;
chunk__169687 = G__169730;
count__169688 = G__169731;
i__169689 = G__169732;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));
}
});
gather.call(null,k);

return cljs.core.deref.call(null,col);
});

ob.core.desc_nodes = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core169690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core169690 = (function (k,meta169691){
this.k = k;
this.meta169691 = meta169691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core169690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_169692,meta169691__$1){
var self__ = this;
var _169692__$1 = this;
return (new ob.core.t_ob$core169690(self__.k,meta169691__$1));
}));

(ob.core.t_ob$core169690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_169692){
var self__ = this;
var _169692__$1 = this;
return self__.meta169691;
}));

(ob.core.t_ob$core169690.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core169690.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$gather(k__$1){
var datum = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null));
var ci = ob.core.datum__GT_child_ids.call(null,datum);
if(cljs.core.seq.call(null,ci)){
var seq__169697 = cljs.core.seq.call(null,ci);
var chunk__169698 = null;
var count__169699 = (0);
var i__169700 = (0);
while(true){
if((i__169700 < count__169699)){
var c = cljs.core._nth.call(null,chunk__169698,i__169700);
ob$core$gather.call(null,c);


var G__169733 = seq__169697;
var G__169734 = chunk__169698;
var G__169735 = count__169699;
var G__169736 = (i__169700 + (1));
seq__169697 = G__169733;
chunk__169698 = G__169734;
count__169699 = G__169735;
i__169700 = G__169736;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169697);
if(temp__5720__auto__){
var seq__169697__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169697__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169697__$1);
var G__169737 = cljs.core.chunk_rest.call(null,seq__169697__$1);
var G__169738 = c__4679__auto__;
var G__169739 = cljs.core.count.call(null,c__4679__auto__);
var G__169740 = (0);
seq__169697 = G__169737;
chunk__169698 = G__169738;
count__169699 = G__169739;
i__169700 = G__169740;
continue;
} else {
var c = cljs.core.first.call(null,seq__169697__$1);
ob$core$gather.call(null,c);


var G__169741 = cljs.core.next.call(null,seq__169697__$1);
var G__169742 = null;
var G__169743 = (0);
var G__169744 = (0);
seq__169697 = G__169741;
chunk__169698 = G__169742;
count__169699 = G__169743;
i__169700 = G__169744;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));
}
});
gather.call(null,self__.k);

return cljs.core.deref.call(null,col);
}));

(ob.core.t_ob$core169690.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
var datum = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null));
var ci = ob.core.datum__GT_child_ids.call(null,datum);
if(cljs.core.seq.call(null,ci)){
var seq__169705 = cljs.core.seq.call(null,ci);
var chunk__169706 = null;
var count__169707 = (0);
var i__169708 = (0);
while(true){
if((i__169708 < count__169707)){
var c = cljs.core._nth.call(null,chunk__169706,i__169708);
ob$core$gather.call(null,c);


var G__169745 = seq__169705;
var G__169746 = chunk__169706;
var G__169747 = count__169707;
var G__169748 = (i__169708 + (1));
seq__169705 = G__169745;
chunk__169706 = G__169746;
count__169707 = G__169747;
i__169708 = G__169748;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169705);
if(temp__5720__auto__){
var seq__169705__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169705__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169705__$1);
var G__169749 = cljs.core.chunk_rest.call(null,seq__169705__$1);
var G__169750 = c__4679__auto__;
var G__169751 = cljs.core.count.call(null,c__4679__auto__);
var G__169752 = (0);
seq__169705 = G__169749;
chunk__169706 = G__169750;
count__169707 = G__169751;
i__169708 = G__169752;
continue;
} else {
var c = cljs.core.first.call(null,seq__169705__$1);
ob$core$gather.call(null,c);


var G__169753 = cljs.core.next.call(null,seq__169705__$1);
var G__169754 = null;
var G__169755 = (0);
var G__169756 = (0);
seq__169705 = G__169753;
chunk__169706 = G__169754;
count__169707 = G__169755;
i__169708 = G__169756;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));
}
});
gather.call(null,self__.k);

return cljs.core.deref.call(null,col);
}));

(ob.core.t_ob$core169690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta169691","meta169691",-1475820116,null)], null);
}));

(ob.core.t_ob$core169690.cljs$lang$type = true);

(ob.core.t_ob$core169690.cljs$lang$ctorStr = "ob.core/t_ob$core169690");

(ob.core.t_ob$core169690.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core169690");
}));

/**
 * Positional factory function for ob.core/t_ob$core169690.
 */
ob.core.__GT_t_ob$core169690 = (function ob$core$__GT_t_ob$core169690(k__$1,meta169691){
return (new ob.core.t_ob$core169690(k__$1,meta169691));
});

}

return (new ob.core.t_ob$core169690(k,null));
}));
ob.core.gen_paren_datum = (function ob$core$gen_paren_datum(parent_id,text,depth,tag){
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-bracket"].join(''),tag,"bracket"]),new cljs.core.Keyword(null,"name","name",1843675177),text], null)]);
});
ob.core.add_paren_data = (function ob$core$add_paren_data(data_row,p__169757){
var map__169758 = p__169757;
var map__169758__$1 = cljs.core.__destructure_map.call(null,map__169758);
var id = cljs.core.get.call(null,map__169758__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__169758__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__169758__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var vec__169759 = parens;
var op = cljs.core.nth.call(null,vec__169759,(0),null);
var cl = cljs.core.nth.call(null,vec__169759,(1),null);
var op_paren = ob.core.gen_paren_datum.call(null,id,op,depth,"opening");
var cl_paren = ob.core.gen_paren_datum.call(null,id,cl,depth,"closing");
var parens__$1 = cljs.core.merge.call(null,op_paren,cl_paren);
var paren_ids = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169762;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169763 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(749),(752),cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null));
ob.core.pathcache169762 = info169763;

return info169763;
})():info__17750__auto__);
var precompiled169764 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169764.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null),com.rpl.specter.MAP_KEYS], null));
} else {
return precompiled169764;
}
})(),parens__$1);
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.assoc.call(null,data_row,new cljs.core.Keyword(null,"parens","parens",1028661830),paren_ids)]),op_paren,cl_paren);
});
ob.core.macro__GT_pos_type = (function ob$core$macro__GT_pos_type(op){
var G__169765 = op;
var G__169765__$1 = (((G__169765 instanceof cljs.core.Keyword))?G__169765.fqn:null);
switch (G__169765__$1) {
case "cond":
return new cljs.core.Keyword(null,"if","if",-458814265);

break;
case "case":
return new cljs.core.Keyword(null,"let","let",-1282412701);

break;
default:
return op;

}
});
ob.core.op__GT_pos_type = (function ob$core$op__GT_pos_type(op){
var pred__169769 = (function (p1__169767_SHARP_,p2__169768_SHARP_){
return cljs.core.get.call(null,p1__169767_SHARP_,p2__169768_SHARP_);
});
var expr__169770 = op;
if(cljs.core.truth_(pred__169769.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"let","let",-1282412701),null,new cljs.core.Keyword(null,"loop","loop",-395552849),null], null), null),expr__169770))){
return new cljs.core.Keyword(null,"let","let",-1282412701);
} else {
if(cljs.core.truth_(pred__169769.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"macroexpand","macroexpand",-130598183),null], null), null),expr__169770))){
return ob.core.macro__GT_pos_type.call(null,op);
} else {
return op;
}
}
});
ob.core.sel__GT_datum = (function ob$core$sel__GT_datum(p__169772){
var map__169773 = p__169772;
var map__169773__$1 = cljs.core.__destructure_map.call(null,map__169773);
var sel = map__169773__$1;
var id = cljs.core.get.call(null,map__169773__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__169773__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var type = cljs.core.get.call(null,map__169773__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__169773__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var parent_id = cljs.core.get.call(null,map__169773__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var child_ids = cljs.core.get.call(null,map__169773__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
var parens = cljs.core.get.call(null,map__169773__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__169773__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var pos_type = ob.core.op__GT_pos_type.call(null,op);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"depth","depth",1768663640)],[child_ids,name,op,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"100%"], null),pos_type,id,cljs.core.PersistentHashSet.createAsIfByAssoc([type,op]),parent_id,depth]);
});
ob.core.ast__GT_data = (function ob$core$ast__GT_data(var_args){
var G__169775 = arguments.length;
switch (G__169775) {
case 1:
return ob.core.ast__GT_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ob.core.ast__GT_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.ast__GT_data.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return ob.core.ast__GT_data.call(null,ast,new cljs.core.Keyword(null,"root","root",-448657453));
}));

(ob.core.ast__GT_data.cljs$core$IFn$_invoke$arity$2 = (function (ast,id){
var sel = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169776;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169777 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_DESC,new cljs.core.Var(function(){return ob.core.AST_DESC;},new cljs.core.Symbol("ob.core","AST-DESC","ob.core/AST-DESC",-1179528306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),"src/ob/core.cljs",14,1,93,93,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_DESC)?ob.core.AST_DESC.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092)))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092))], null),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)], null));
ob.core.pathcache169776 = info169777;

return info169777;
})():info__17750__auto__);
var precompiled169778 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169778.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.AST_DESC,com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null),ob.core.AST_DESC,com.rpl.specter.pred], null));
} else {
return precompiled169778;
}
})(),ast);
var iter__4652__auto__ = (function ob$core$iter__169779(s__169780){
return (new cljs.core.LazySeq(null,(function (){
var s__169780__$1 = s__169780;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__169780__$1);
if(temp__5720__auto__){
var s__169780__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__169780__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__169780__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__169782 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__169781 = (0);
while(true){
if((i__169781 < size__4651__auto__)){
var map__169783 = cljs.core._nth.call(null,c__4650__auto__,i__169781);
var map__169783__$1 = cljs.core.__destructure_map.call(null,map__169783);
var s = map__169783__$1;
var id__$1 = cljs.core.get.call(null,map__169783__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__169783__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
cljs.core.chunk_append.call(null,b__169782,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})());

var G__169786 = (i__169781 + (1));
i__169781 = G__169786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__169782),ob$core$iter__169779.call(null,cljs.core.chunk_rest.call(null,s__169780__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__169782),null);
}
} else {
var map__169784 = cljs.core.first.call(null,s__169780__$2);
var map__169784__$1 = cljs.core.__destructure_map.call(null,map__169784);
var s = map__169784__$1;
var id__$1 = cljs.core.get.call(null,map__169784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__169784__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
return cljs.core.cons.call(null,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})(),ob$core$iter__169779.call(null,cljs.core.rest.call(null,s__169780__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,sel);
}));

(ob.core.ast__GT_data.cljs$lang$maxFixedArity = 2);

/**
 * Returns a map, keyed by id, of all of the
 * Bounding Client Rects for all descendent elements
 * of node indicated by id.
 */
ob.core.get_dims = (function ob$core$get_dims(id){
var attrs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var scrollX = window.scrollX;
var scrollY = window.scrollY;
document.getElementById(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)).querySelectorAll(".token").forEach((function (node){
var id__$1 = node.id;
var dims = node.getBoundingClientRect();
var left = dims.left;
var top = dims.top;
return cljs.core.swap_BANG_.call(null,attrs,cljs.core.assoc,cljs.core.symbol.call(null,id__$1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(left + scrollX),new cljs.core.Keyword(null,"top","top",-1856271961),(top + scrollY)], null));
}));

return cljs.core.deref.call(null,attrs);
});
ob.core.px_STAR_ = (function ob$core$px_STAR_(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('');
});
ob.core.add_copy = (function ob$core$add_copy(db,pred_fn){
var dims = ob.core.get_dims.call(null,"code-col");
var f = (function (id,style){
var dims__$1 = cljs.core.get.call(null,dims,id);
return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),ob.core.px_STAR_.call(null,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dims__$1)),new cljs.core.Keyword(null,"left","left",-399115937),ob.core.px_STAR_.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(dims__$1)));
});
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169787;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169788 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.keys,new cljs.core.Var(function(){return cljs.core.keys;},new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),"cljs/core.cljs",(11),(1),(9050),(9050),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",-1282745308,null)], null)),"Returns a sequence of the map's keys, in the same order as (seq map).",(cljs.core.truth_(cljs.core.keys)?cljs.core.keys.cljs$lang$test:null)])),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,dims,new cljs.core.Symbol(null,"dims","dims",1174008638,null))], null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dims","dims",1174008638,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null))),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache169787 = info169788;

return info169788;
})():info__17750__auto__);
var precompiled169789 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169789.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,cljs.core.keys.call(null,dims)),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.submap,cljs.core.keys,dims,com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one], null));
} else {
return precompiled169789;
}
})(),f,db);
});
ob.core.idx_clj__GT_data = (function ob$core$idx_clj__GT_data(form){
return cljs.core.apply.call(null,cljs.core.merge,ob.core.ast__GT_data.call(null,ob.analyzer.analyze.call(null,form,cljs.core.PersistentArrayMap.EMPTY)));
});
ob.core.get_trs_data = (function ob$core$get_trs_data(var_args){
var G__169791 = arguments.length;
switch (G__169791) {
case 2:
return ob.core.get_trs_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ob.core.get_trs_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.get_trs_data.cljs$core$IFn$_invoke$arity$2 = (function (data,f){
return ob.core.get_trs_data.call(null,data,f,null);
}));

(ob.core.get_trs_data.cljs$core$IFn$_invoke$arity$3 = (function (data,f,params){
var f_STAR_ = (function (datum){
var trs = f.call(null,datum,params);
var total = (new cljs.core.Keyword(null,"dur","dur",1464522452).cljs$core$IFn$_invoke$arity$1(trs) + new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(trs));
return cljs.core.assoc.call(null,trs,new cljs.core.Keyword(null,"total","total",1916810418),total);
});
var trs_data = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169792;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169793 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache169792 = info169793;

return info169793;
})():info__17750__auto__);
var precompiled169794 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169794.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled169794;
}
})(),f_STAR_,data);
var max_time = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169795;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169796 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"total","total",1916810418)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"total","total",1916810418)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache169795 = info169796;

return info169796;
})():info__17750__auto__);
var precompiled169797 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169797.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"total","total",1916810418)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled169797;
}
})(),trs_data));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),trs_data,new cljs.core.Keyword(null,"time","time",1385887882),max_time], null);
}));

(ob.core.get_trs_data.cljs$lang$maxFixedArity = 3);

ob.core.trs_by_depth = (function ob$core$trs_by_depth(f){
return (function (data){
var max_depth = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169799;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169800 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache169799 = info169800;

return info169800;
})():info__17750__auto__);
var precompiled169801 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169801.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled169801;
}
})(),data));
var interval = ((10) / max_depth);
return ob.core.get_trs_data.call(null,data,(function (p__169802){
var map__169803 = p__169802;
var map__169803__$1 = cljs.core.__destructure_map.call(null,map__169803);
var depth = cljs.core.get.call(null,map__169803__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(4),new cljs.core.Keyword(null,"delay","delay",-574225219),f.call(null,max_depth,depth,interval)], null);
}));
});
});
ob.core.contract = ob.core.trs_by_depth.call(null,(function (max_depth,depth,interval){
return ((max_depth - depth) / interval);
}));
ob.core.expand = ob.core.trs_by_depth.call(null,(function (_,depth,interval){
return (depth * interval);
}));
ob.core.update_styles = (function ob$core$update_styles(var_args){
var G__169805 = arguments.length;
switch (G__169805) {
case 2:
return ob.core.update_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ob.core.update_styles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.update_styles.cljs$core$IFn$_invoke$arity$2 = (function (tag,data){
return ob.core.update_styles.call(null,tag,data,null);
}));

(ob.core.update_styles.cljs$core$IFn$_invoke$arity$3 = (function (tag,data,params){
var f_STAR_ = (function (datum){
return cljs.core.update.call(null,datum,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,ob.core.gen_styles.call(null,tag,datum,params));
});
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169806;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169807 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.DATA,new cljs.core.Var(function(){return ob.core.DATA;},new cljs.core.Symbol("ob.core","DATA","ob.core/DATA",1547210987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),"src/ob/core.cljs",10,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.DATA)?ob.core.DATA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)], null),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)], null));
ob.core.pathcache169806 = info169807;

return info169807;
})():info__17750__auto__);
var precompiled169808 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169808.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.DATA], null),ob.core.DATA], null));
} else {
return precompiled169808;
}
})(),f_STAR_,data);
}));

(ob.core.update_styles.cljs$lang$maxFixedArity = 3);

if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.gen_styles !== 'undefined')){
} else {
ob.core.gen_styles = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.core","gen-styles"),(function (tag,_,___$1){
return tag;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.core.gen_styles,new cljs.core.Keyword(null,"contract","contract",798152745),(function (_,___$1,___$2){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0px"], null);
}));
cljs.core._add_method.call(null,ob.core.gen_styles,new cljs.core.Keyword(null,"expand","expand",595248157),(function (_,___$1,___$2){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),null,new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),null,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),null,new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),null], null);
}));
cljs.core._add_method.call(null,ob.core.gen_styles,new cljs.core.Keyword(null,"fade","fade",1167694157),(function (_,p__169810,p__169811){
var map__169812 = p__169810;
var map__169812__$1 = cljs.core.__destructure_map.call(null,map__169812);
var children = cljs.core.get.call(null,map__169812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var map__169813 = p__169811;
var map__169813__$1 = cljs.core.__destructure_map.call(null,map__169813);
var opacity = cljs.core.get.call(null,map__169813__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2);
if(cljs.core.truth_(children)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity], null);
}
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"rewind","rewind",-669264915),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword("clj","append","clj/append",-291199060),(function (p__169814){
var map__169815 = p__169814;
var map__169815__$1 = cljs.core.__destructure_map.call(null,map__169815);
var code = cljs.core.get.call(null,map__169815__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var idx_QMARK_ = cljs.core.get.call(null,map__169815__$1,new cljs.core.Keyword(null,"indexed?","indexed?",-405921143),false);
var code__$1 = (cljs.core.truth_(idx_QMARK_)?code:ob.utils.walk_ids.call(null,code));
var data = ob.core.idx_clj__GT_data.call(null,code__$1);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,code__$1));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.Keyword("id","parent","id/parent",-878874974),id,new cljs.core.Keyword(null,"time","time",1385887882),(1),new cljs.core.Keyword(null,"data","data",-232669377),data], null);
}));
ob.core.update_depth = (function ob$core$update_depth(data,id_return){
var return_depth = (function (){var depth = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(id_return.call(null,data));
if((depth === (0))){
return (1);
} else {
return depth;
}
})();
var former_depth = (0);
var depth_delta = (former_depth - return_depth);
var data__$1 = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169816;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169817 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache169816 = info169817;

return info169817;
})():info__17750__auto__);
var precompiled169818 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169818.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled169818;
}
})(),(function (depth){
return (depth + depth_delta);
}),data);
return data__$1;
});
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"symbol-resolve","symbol-resolve",128792823),(function (p__169819){
var map__169820 = p__169819;
var map__169820__$1 = cljs.core.__destructure_map.call(null,map__169820);
var form = cljs.core.get.call(null,map__169820__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var id_form = cljs.core.get.call(null,map__169820__$1,new cljs.core.Keyword(null,"id-form","id-form",-1269513485));
var return$ = cljs.core.get.call(null,map__169820__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var id_return = cljs.core.get.call(null,map__169820__$1,new cljs.core.Keyword(null,"id-return","id-return",827473115));
var id_return_STAR_ = cljs.core.get.call(null,map__169820__$1,new cljs.core.Keyword(null,"id-return*","id-return*",-1139378607));
var dom = cljs.core.get.call(null,map__169820__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
cljs.pprint.pprint.call(null,"Gen Symbol Resolve");

var data = ob.core.idx_clj__GT_data.call(null,return$);
var data__$1 = ob.core.update_depth.call(null,data,id_return_STAR_);
var data__$2 = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),data__$1);
var data_STAR_ = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"expand","expand",595248157),data__$2);
var trs = ob.core.expand.call(null,data_STAR_);
var form_data = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169821;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169822 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc,new cljs.core.Var(function(){return ob.core.desc;},new cljs.core.Symbol("ob.core","desc","ob.core/desc",1690967277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc","desc",-560950005,null),"src/ob/core.cljs",13,1,155,155,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc)?ob.core.desc.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc","desc",-560950005,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_form,new cljs.core.Symbol(null,"id-form","id-form",371018042,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-form","id-form",371018042,null)))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-form","id-form",371018042,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-form","id-form",371018042,null))], null),new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-form","id-form",371018042,null)], null));
ob.core.pathcache169821 = info169822;

return info169822;
})():info__17750__auto__);
var precompiled169823 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169823.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc.call(null,id_form)], null),ob.core.desc,id_form], null));
} else {
return precompiled169823;
}
})(),dom);
var form_data__$1 = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),form_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"data","data",-232669377),form_data__$1,new cljs.core.Keyword(null,"trs","trs",1104008633),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.createAsIfByAssoc([id_form,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(4),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null)]),new cljs.core.Keyword(null,"time","time",1385887882),(4)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"data","data",-232669377),data__$2,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_form,new cljs.core.Keyword("id","post","id/post",269696948),id_return_STAR_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"data","data",-232669377),data_STAR_,new cljs.core.Keyword(null,"trs","trs",1104008633),trs], null)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811),(function (p__169824){
var map__169825 = p__169824;
var map__169825__$1 = cljs.core.__destructure_map.call(null,map__169825);
var form = cljs.core.get.call(null,map__169825__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var id_form = cljs.core.get.call(null,map__169825__$1,new cljs.core.Keyword(null,"id-form","id-form",-1269513485));
var return$ = cljs.core.get.call(null,map__169825__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var id_return = cljs.core.get.call(null,map__169825__$1,new cljs.core.Keyword(null,"id-return","id-return",827473115));
var dom = cljs.core.get.call(null,map__169825__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var form_data = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169826;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169827 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc_but_node,new cljs.core.Var(function(){return ob.core.desc_but_node;},new cljs.core.Symbol("ob.core","desc-but-node","ob.core/desc-but-node",105590132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),"src/ob/core.cljs",22,1,196,196,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc_but_node)?ob.core.desc_but_node.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_form,new cljs.core.Symbol(null,"id-form","id-form",371018042,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id_return,new cljs.core.Symbol(null,"id-return","id-return",-1826962654,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),new cljs.core.Symbol(null,"id-form","id-form",371018042,null),new cljs.core.Symbol(null,"id-return","id-return",-1826962654,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-form","id-form",371018042,null),new cljs.core.Symbol(null,"id-return","id-return",-1826962654,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),new cljs.core.Symbol(null,"id-form","id-form",371018042,null),new cljs.core.Symbol(null,"id-return","id-return",-1826962654,null)], null));
ob.core.pathcache169826 = info169827;

return info169827;
})():info__17750__auto__);
var precompiled169828 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169828.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc_but_node,id_form,id_return], null));
} else {
return precompiled169828;
}
})(),dom);
var opaque = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"fade","fade",1167694157),form_data);
var op_trs = ob.core.get_trs_data.call(null,opaque,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(4),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
var form_data_STAR_ = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),opaque);
var trs = ob.core.get_trs_data.call(null,form_data_STAR_,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(10),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
var return_data = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169829;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169830 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc,new cljs.core.Var(function(){return ob.core.desc;},new cljs.core.Symbol("ob.core","desc","ob.core/desc",1690967277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc","desc",-560950005,null),"src/ob/core.cljs",13,1,155,155,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc)?ob.core.desc.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc","desc",-560950005,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_return,new cljs.core.Symbol(null,"id-return","id-return",-1826962654,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-return","id-return",-1826962654,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-return","id-return",-1826962654,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-return","id-return",-1826962654,null)], null));
ob.core.pathcache169829 = info169830;

return info169830;
})():info__17750__auto__);
var precompiled169831 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169831.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc,id_return], null));
} else {
return precompiled169831;
}
})(),dom);
var trs_return = ob.core.get_trs_data.call(null,return_data,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(0),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"data","data",-232669377),opaque,new cljs.core.Keyword(null,"trs","trs",1104008633),op_trs], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"data","data",-232669377),form_data_STAR_,new cljs.core.Keyword(null,"trs","trs",1104008633),trs], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"data","data",-232669377),return_data,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_form,new cljs.core.Keyword("id","post","id/post",269696948),id_return,new cljs.core.Keyword(null,"trs","trs",1104008633),trs_return], null)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"replace-w-new-code","replace-w-new-code",1226585016),(function (p__169832){
var map__169833 = p__169832;
var map__169833__$1 = cljs.core.__destructure_map.call(null,map__169833);
var form = cljs.core.get.call(null,map__169833__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var id_form = cljs.core.get.call(null,map__169833__$1,new cljs.core.Keyword(null,"id-form","id-form",-1269513485));
var return$ = cljs.core.get.call(null,map__169833__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var id_return = cljs.core.get.call(null,map__169833__$1,new cljs.core.Keyword(null,"id-return","id-return",827473115));
var id_return_STAR_ = cljs.core.get.call(null,map__169833__$1,new cljs.core.Keyword(null,"id-return*","id-return*",-1139378607));
var dom = cljs.core.get.call(null,map__169833__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var data = ob.core.idx_clj__GT_data.call(null,return$);
var data__$1 = ob.core.update_depth.call(null,data,id_return_STAR_);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_form,new cljs.core.Keyword("id","post","id/post",269696948),id_return_STAR_], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-animation-stream","init-animation-stream",794034779),(function (db,p__169834){
var vec__169835 = p__169834;
var _ = cljs.core.nth.call(null,vec__169835,(0),null);
var stream = cljs.core.nth.call(null,vec__169835,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169838;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169839 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244)], null)], null));
ob.core.pathcache169838 = info169839;

return info169839;
})():info__17750__auto__);
var precompiled169840 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169840.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244)], null)], null));
} else {
return precompiled169840;
}
})(),stream,db);
}));
ob.core.init_code_eval = (function ob$core$init_code_eval(form){
var stream = ob.clojure.form__GT_animation_stream.call(null,form);
ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-animation-stream","init-animation-stream",794034779),stream], null));

return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword("clj","append","clj/append",-291199060),new cljs.core.Keyword(null,"indexed?","indexed?",-405921143),true,new cljs.core.Keyword(null,"code","code",1586293142),form], null));
});
ob.core.completed_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811),null,new cljs.core.Keyword(null,"symbol-resolve","symbol-resolve",128792823),null,new cljs.core.Keyword(null,"replace-w-new-code","replace-w-new-code",1226585016),null], null), null);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"call-animation","call-animation",1732104032),(function (a){
cljs.core.println.call(null,"########################");

cljs.core.println.call(null,new cljs.core.Keyword("op","frame","op/frame",-1711083195).cljs$core$IFn$_invoke$arity$1(a));

if(cljs.core.truth_(ob.core.completed_QMARK_.call(null,new cljs.core.Keyword("op","frame","op/frame",-1711083195).cljs$core$IFn$_invoke$arity$1(a)))){
return ob.event_loop.animate_BANG_.call(null,a);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"trigger-next-event!","trigger-next-event!",165377769),(function (p__169841,_){
var map__169842 = p__169841;
var map__169842__$1 = cljs.core.__destructure_map.call(null,map__169842);
var db = cljs.core.get.call(null,map__169842__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5718__auto__ = false;
if(temp__5718__auto__){
var a = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"call-animation","call-animation",1732104032),a], null);
} else {
var vec__169843 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(db);
var seq__169844 = cljs.core.seq.call(null,vec__169843);
var first__169845 = cljs.core.first.call(null,seq__169844);
var seq__169844__$1 = cljs.core.next.call(null,seq__169844);
var a = first__169845;
var as = seq__169844__$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"animation","animation",-1248293244),as),new cljs.core.Keyword(null,"call-animation","call-animation",1732104032),a], null);
}
}));
ob.core.form = ob.utils.walk_ids.call(null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),new cljs.core.Symbol(null,"n","n",-2092305744,null)),(1),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(1))))))),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(4))));
ob.core.Y = cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"self","self",93102628,null)], null),cljs.core.list(new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"self","self",93102628,null))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"next","next",1522830042,null)], null),cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"next","next",1522830042,null)),new cljs.core.Symbol(null,"value","value",1946509744,null))))))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fact","fact",840714996,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),(1),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(1)))))))),(2));
ob.core.form_STAR_ = ob.utils.walk_ids.call(null,ob.core.Y);
ob.core.init_eval_button = (function ob$core$init_eval_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.core.init_code_eval.call(null,ob.core.form);
})], null),"Init Code Eval!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger-next-event!","trigger-next-event!",165377769)], null));
})], null),"Walk Evaluation Forward"], null)], null);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-db","current-db",213667882),(function (db,_){
return com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169846;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169847 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null))], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache169846 = info169847;

return info169847;
})():info__17750__auto__);
var precompiled169848 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169848.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB], null));
} else {
return precompiled169848;
}
})(),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-display","current-display",1699487712),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-db","current-db",213667882)], null),(function (db){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"display","display",242065432));
}));
ob.core.id__GT_display_data = (function ob$core$id__GT_display_data(display,id){
while(true){
var datum = cljs.core.get.call(null,display,id);
var temp__5718__auto__ = new cljs.core.Keyword(null,"redirect","redirect",-1975673286).cljs$core$IFn$_invoke$arity$1(datum);
if(cljs.core.truth_(temp__5718__auto__)){
var redirect_id = temp__5718__auto__;
var G__169849 = display;
var G__169850 = redirect_id;
display = G__169849;
id = G__169850;
continue;
} else {
return datum;
}
break;
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->data","id->data",-1544872090),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-display","current-display",1699487712)], null),(function (display,p__169851){
var vec__169852 = p__169851;
var _ = cljs.core.nth.call(null,vec__169852,(0),null);
var id = cljs.core.nth.call(null,vec__169852,(1),null);
return ob.core.id__GT_display_data.call(null,display,id);
}));
ob.defs.def_STAR_.call(null,new cljs.core.Keyword("core","root","core/root",-432837774),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"msg","msg",-1386103444),"I'm a slob!",new cljs.core.Keyword(null,"header","header",119441134),"Lots to like here.",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"prelude","prelude",-138977836),new cljs.core.Keyword(null,"header","header",119441134),"There are lots of reasons to dislike"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"msg","msg",-1386103444),"Nobody likes eggplants, and one should note that "], null),new cljs.core.Keyword("toast","eggplant","toast/eggplant",207043264)], null)], null));
ob.defs.def_STAR_.call(null,new cljs.core.Keyword("toast","eggplant","toast/eggplant",207043264),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"msg","msg",-1386103444),"Howl's moving snowcone",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sweet","toast","sweet/toast",-1160027551)], null)], null));
ob.defs.def_STAR_.call(null,new cljs.core.Keyword("sweet","toast","sweet/toast",-1160027551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"msg","msg",-1386103444),"I hate it."], null));
ob.core.defs__GT_data_zipper = (function ob$core$defs__GT_data_zipper(defs){
var branch_QMARK_ = (function ob$core$defs__GT_data_zipper_$_branch_QMARK_(node){
var or__4253__auto__ = cljs.core.vector_QMARK_.call(null,node);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = cljs.core.map_QMARK_.call(null,node);
if(and__4251__auto__){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(node);
} else {
return and__4251__auto__;
}
}
});
var children = (function ob$core$defs__GT_data_zipper_$_children(node){
if(cljs.core.vector_QMARK_.call(null,node)){
return cljs.core.seq.call(null,node);
} else {
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(node);
}
});
var make_node = (function ob$core$defs__GT_data_zipper_$_make_node(node,children__$1){
if(cljs.core.vector_QMARK_.call(null,node)){
return cljs.core.vec.call(null,children__$1);
} else {
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.vec.call(null,children__$1));
}
});
return clojure.zip.zipper.call(null,branch_QMARK_,children,make_node,defs);
});
ob.core.init_display = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
var db = cljs.core.merge.call(null,ob.db_nav.init_db,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837),(3000),new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344),(200),new cljs.core.Keyword(null,"paused?","paused?",-135058553),false,new cljs.core.Keyword(null,"animation-history","animation-history",-639170567),cljs.core.PersistentArrayMap.EMPTY], null));
var db__$1 = com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169855;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169856 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache169855 = info169856;

return info169856;
})():info__17750__auto__);
var precompiled169857 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169857.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled169857;
}
})(),ob.core.init_display,db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),null,new cljs.core.Keyword(null,"db","db",993250759),db__$1], null);
}));
ob.core.init = (function ob$core$init(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
});
/**
 * Shorthand for generating
 * the style / attr map.
 */
ob.core.$ = (function ob$core$$(var_args){
var G__169859 = arguments.length;
switch (G__169859) {
case 1:
return ob.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ob.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.$.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null);
}));

(ob.core.$.cljs$core$IFn$_invoke$arity$2 = (function (styles,attrs){
return cljs.core.merge.call(null,attrs,ob.core.$.call(null,styles));
}));

(ob.core.$.cljs$lang$maxFixedArity = 2);

/**
 * Adds n breaks.
 */
ob.core.br = (function ob$core$br(n){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.repeat.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)));
});
ob.core.sample_code = cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"z","z",851004344,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Keyword(null,"c","c",-1763192079),(3),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(4)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),true,(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))))))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),(3),(4),(5)))], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null)], null),cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"z","z",851004344,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"y","y",-117328249,null)),new cljs.core.Symbol(null,"z","z",851004344,null))))))));
ob.core.text_col = (function ob$core$text_col(){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#text-col","div#text-col",-681412085),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"There is some exposition... here is some more exposition....\n     and now here is a ridiculously long word fmwk,;'f,ew;l'dffwm;lk'fkwefwelkfmk"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"Next line"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"add-code","add-code",1030596725),new cljs.core.Keyword(null,"code","code",1586293142),ob.core.sample_code], null));
})], null),"Add code"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"contract","contract",798152745)], null));
})], null),"Contract"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"expand","expand",595248157)], null));
})], null),"Expand"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Animation Speed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"value","value",305978217),ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trs-speed-slider-val","trs-speed-slider-val",-1390043057)], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__169861_SHARP_){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-trs-speed","update-trs-speed",-485374553),p1__169861_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-pause","toggle-pause",1648289919)], null));
})], null),ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused?","paused?",-135058553)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"rewind","rewind",-669264915)], null));
})], null),"Undo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.init_eval_button], null)], null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-trs-speed","update-trs-speed",-485374553),(function (db,p__169862){
var vec__169863 = p__169862;
var _ = cljs.core.nth.call(null,vec__169863,(0),null);
var speed = cljs.core.nth.call(null,vec__169863,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344),speed);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"trs-speed-slider-val","trs-speed-slider-val",-1390043057),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344));
}));
ob.core.code_col = (function ob$core$code_col(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"top","top",-1856271961),"30px",new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"border","border",1444987323),"solid 2px white"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"code-col"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,new cljs.core.Keyword(null,"root","root",-448657453),null], null)], null);
});
ob.core.main_page = (function ob$core$main_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-page","div#main-page",973942128),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"5000px"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"token"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Ouroboros"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.text_col], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.code_col], null)], null)], null);
});
ob.core.get_app_element = (function ob$core$get_app_element(){
return goog.dom.getElement("app");
});
ob.core.mount = (function ob$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.main_page], null),el);
});
ob.core.mount_app_element = (function ob$core$mount_app_element(){
var temp__5720__auto__ = ob.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
ob.core.init.call(null);

return ob.core.mount.call(null,el);
} else {
return null;
}
});
ob.core.mount_app_element.call(null);
ob.core.on_reload = (function ob$core$on_reload(){
return ob.core.mount_app_element.call(null);
});
ob.core.get_pos = (function ob$core$get_pos(this$){
var dims = this$.getBoundingClientRect();
var left = dims.left;
var top = dims.top;
var width = dims.width;
var height = dims.height;
var scrollX = window.scrollX;
var scrollY = window.scrollY;
var left__$1 = (left + scrollX);
var top__$1 = (top + scrollY);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [top__$1,left__$1,width,height], null);
});
ob.core.px = (function ob$core$px(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"px"].join('');
});
ob.core.abs_pos = (function ob$core$abs_pos(sel,top,left){
return sel.style("left",left).style("top",top);
});
ob.core.gen_abs_copy = (function ob$core$gen_abs_copy(original_selection){
var vec__169867 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__169867,(0),null);
var left = cljs.core.nth.call(null,vec__169867,(1),null);
var top__$1 = ob.core.px.call(null,top);
var left__$1 = ob.core.px.call(null,left);
var text = original_selection.text();
var classes = original_selection.attr("class");
return (function (selection,ff_QMARK_){
if(cljs.core.truth_(ff_QMARK_)){
return ob.core.abs_pos.call(null,d3.select(document.body).insert("div").attr("class",classes).style("position","absolute"),top__$1,left__$1).text(text);
} else {
return selection.on("end",(function (_){
original_selection.style("opacity",null);

return d3.select(this).remove();
}));
}
});
});
ob.core.gen_style_trsf = (function ob$core$gen_style_trsf(styles){
var coords = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, ["left",null,"top",null], null));
return (function (selection,ff_QMARK_){
try{if(cljs.core.truth_(ff_QMARK_)){
var seq__169871_169903 = cljs.core.seq.call(null,styles);
var chunk__169872_169904 = null;
var count__169873_169905 = (0);
var i__169874_169906 = (0);
while(true){
if((i__169874_169906 < count__169873_169905)){
var vec__169881_169907 = cljs.core._nth.call(null,chunk__169872_169904,i__169874_169906);
var k_169908 = cljs.core.nth.call(null,vec__169881_169907,(0),null);
var v_169909 = cljs.core.nth.call(null,vec__169881_169907,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_169908))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_169908,selection.selection().style(k_169908));
} else {
}

selection.style(k_169908,v_169909);


var G__169910 = seq__169871_169903;
var G__169911 = chunk__169872_169904;
var G__169912 = count__169873_169905;
var G__169913 = (i__169874_169906 + (1));
seq__169871_169903 = G__169910;
chunk__169872_169904 = G__169911;
count__169873_169905 = G__169912;
i__169874_169906 = G__169913;
continue;
} else {
var temp__5720__auto___169914 = cljs.core.seq.call(null,seq__169871_169903);
if(temp__5720__auto___169914){
var seq__169871_169915__$1 = temp__5720__auto___169914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169871_169915__$1)){
var c__4679__auto___169916 = cljs.core.chunk_first.call(null,seq__169871_169915__$1);
var G__169917 = cljs.core.chunk_rest.call(null,seq__169871_169915__$1);
var G__169918 = c__4679__auto___169916;
var G__169919 = cljs.core.count.call(null,c__4679__auto___169916);
var G__169920 = (0);
seq__169871_169903 = G__169917;
chunk__169872_169904 = G__169918;
count__169873_169905 = G__169919;
i__169874_169906 = G__169920;
continue;
} else {
var vec__169884_169921 = cljs.core.first.call(null,seq__169871_169915__$1);
var k_169922 = cljs.core.nth.call(null,vec__169884_169921,(0),null);
var v_169923 = cljs.core.nth.call(null,vec__169884_169921,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_169922))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_169922,selection.selection().style(k_169922));
} else {
}

selection.style(k_169922,v_169923);


var G__169924 = cljs.core.next.call(null,seq__169871_169915__$1);
var G__169925 = null;
var G__169926 = (0);
var G__169927 = (0);
seq__169871_169903 = G__169924;
chunk__169872_169904 = G__169925;
count__169873_169905 = G__169926;
i__169874_169906 = G__169927;
continue;
}
} else {
}
}
break;
}
} else {
var seq__169887_169928 = cljs.core.seq.call(null,styles);
var chunk__169888_169929 = null;
var count__169889_169930 = (0);
var i__169890_169931 = (0);
while(true){
if((i__169890_169931 < count__169889_169930)){
var vec__169897_169932 = cljs.core._nth.call(null,chunk__169888_169929,i__169890_169931);
var k_169933 = cljs.core.nth.call(null,vec__169897_169932,(0),null);
var __169934 = cljs.core.nth.call(null,vec__169897_169932,(1),null);
selection.style(k_169933,cljs.core.deref.call(null,coords).call(null,k_169933));


var G__169935 = seq__169887_169928;
var G__169936 = chunk__169888_169929;
var G__169937 = count__169889_169930;
var G__169938 = (i__169890_169931 + (1));
seq__169887_169928 = G__169935;
chunk__169888_169929 = G__169936;
count__169889_169930 = G__169937;
i__169890_169931 = G__169938;
continue;
} else {
var temp__5720__auto___169939 = cljs.core.seq.call(null,seq__169887_169928);
if(temp__5720__auto___169939){
var seq__169887_169940__$1 = temp__5720__auto___169939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169887_169940__$1)){
var c__4679__auto___169941 = cljs.core.chunk_first.call(null,seq__169887_169940__$1);
var G__169942 = cljs.core.chunk_rest.call(null,seq__169887_169940__$1);
var G__169943 = c__4679__auto___169941;
var G__169944 = cljs.core.count.call(null,c__4679__auto___169941);
var G__169945 = (0);
seq__169887_169928 = G__169942;
chunk__169888_169929 = G__169943;
count__169889_169930 = G__169944;
i__169890_169931 = G__169945;
continue;
} else {
var vec__169900_169946 = cljs.core.first.call(null,seq__169887_169940__$1);
var k_169947 = cljs.core.nth.call(null,vec__169900_169946,(0),null);
var __169948 = cljs.core.nth.call(null,vec__169900_169946,(1),null);
selection.style(k_169947,cljs.core.deref.call(null,coords).call(null,k_169947));


var G__169949 = cljs.core.next.call(null,seq__169887_169940__$1);
var G__169950 = null;
var G__169951 = (0);
var G__169952 = (0);
seq__169887_169928 = G__169949;
chunk__169888_169929 = G__169950;
count__169889_169930 = G__169951;
i__169890_169931 = G__169952;
continue;
}
} else {
}
}
break;
}
}
}catch (e169870){if((e169870 instanceof Error)){
var e_169953 = e169870;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e169870;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___169955 = arguments.length;
var i__4865__auto___169956 = (0);
while(true){
if((i__4865__auto___169956 < len__4864__auto___169955)){
args__4870__auto__.push((arguments[i__4865__auto___169956]));

var G__169957 = (i__4865__auto___169956 + (1));
i__4865__auto___169956 = G__169957;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.core.compose.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.core.compose.cljs$core$IFn$_invoke$arity$variadic = (function (fs){
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.reverse.call(null,fs));
}));

(ob.core.compose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.core.compose.cljs$lang$applyTo = (function (seq169954){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq169954));
}));

ob.core._transition = (function ob$core$_transition(p__169960){
var map__169961 = p__169960;
var map__169961__$1 = cljs.core.__destructure_map.call(null,map__169961);
var delay = cljs.core.get.call(null,map__169961__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__169961__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__169962 = s__$1;
var G__169962__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__169962(p1__169958_SHARP_){
return p1__169958_SHARP_.delay(delay);
}):G__169962);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__169962(p1__169959_SHARP_){
return p1__169959_SHARP_.duration(duration);
});
} else {
return G__169962__$1;
}
});
});
ob.core.compose_animations = (function ob$core$compose_animations(params,fs){
return (function (ff_QMARK_){
var f__GT_partial = (function (f){
return (function (s){
return f.call(null,s,ff_QMARK_);
});
});
var fs__$1 = cljs.core.map.call(null,f__GT_partial,fs);
var fs__$2 = cljs.core.interleave.call(null,fs__$1,cljs.core.repeat.call(null,ob.core._transition.call(null,params)));
var fs__$3 = (cljs.core.truth_(ff_QMARK_)?cljs.core.butlast.call(null,fs__$2):cljs.core.reverse.call(null,fs__$2));
return cljs.core.apply.call(null,ob.core.compose,fs__$3);
});
});
ob.core._BAR__BAR_ = (function ob$core$_BAR__BAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___169969 = arguments.length;
var i__4865__auto___169970 = (0);
while(true){
if((i__4865__auto___169970 < len__4864__auto___169969)){
args__4870__auto__.push((arguments[i__4865__auto___169970]));

var G__169971 = (i__4865__auto___169970 + (1));
i__4865__auto___169970 = G__169971;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ob.core._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ob.core._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (f,fs){
return (function (sel,ff_QMARK_){
var run_all_BANG_ = (function (_){
var seq__169965 = cljs.core.seq.call(null,fs);
var chunk__169966 = null;
var count__169967 = (0);
var i__169968 = (0);
while(true){
if((i__169968 < count__169967)){
var f__$1 = cljs.core._nth.call(null,chunk__169966,i__169968);
f__$1.call(null,sel,ff_QMARK_);


var G__169972 = seq__169965;
var G__169973 = chunk__169966;
var G__169974 = count__169967;
var G__169975 = (i__169968 + (1));
seq__169965 = G__169972;
chunk__169966 = G__169973;
count__169967 = G__169974;
i__169968 = G__169975;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__169965);
if(temp__5720__auto__){
var seq__169965__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__169965__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__169965__$1);
var G__169976 = cljs.core.chunk_rest.call(null,seq__169965__$1);
var G__169977 = c__4679__auto__;
var G__169978 = cljs.core.count.call(null,c__4679__auto__);
var G__169979 = (0);
seq__169965 = G__169976;
chunk__169966 = G__169977;
count__169967 = G__169978;
i__169968 = G__169979;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__169965__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__169980 = cljs.core.next.call(null,seq__169965__$1);
var G__169981 = null;
var G__169982 = (0);
var G__169983 = (0);
seq__169965 = G__169980;
chunk__169966 = G__169981;
count__169967 = G__169982;
i__169968 = G__169983;
continue;
}
} else {
return null;
}
}
break;
}
});
return f.call(null,sel.on("start",run_all_BANG_),ff_QMARK_);
});
}));

(ob.core._BAR__BAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq169963){
var G__169964 = cljs.core.first.call(null,seq169963);
var seq169963__$1 = cljs.core.next.call(null,seq169963);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__169964,seq169963__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__169985 = arguments.length;
switch (G__169985) {
case 0:
return ob.core.make_copy.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return ob.core.make_copy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.make_copy.cljs$core$IFn$_invoke$arity$0 = (function (){
return ob.core.make_copy.call(null,"#maps",false,true);
}));

(ob.core.make_copy.cljs$core$IFn$_invoke$arity$3 = (function (source,token_QMARK_,collapse_QMARK_){
var selection = d3.select(source);
var vec__169986 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__169986,(0),null);
var l = cljs.core.nth.call(null,vec__169986,(1),null);
var w = cljs.core.nth.call(null,vec__169986,(2),null);
var h = cljs.core.nth.call(null,vec__169986,(3),null);
var offset = (cljs.core.truth_(collapse_QMARK_)?0.05:0.2);
var l__$1 = (l + (offset * w));
var t__$1 = (t + (offset * h));
var root_top = ob.core.px.call(null,t__$1);
var root_left = ob.core.px.call(null,l__$1);
var sel = (cljs.core.truth_(token_QMARK_)?selection:selection.selectAll(" .token"));
return sel.style("opacity",(0)).each((function (_){
var sel__$1 = d3.select(this);
var delay = ((500) * cljs.core.rand.call(null));
var copy = ob.core.gen_abs_copy.call(null,sel__$1);
var abs_collapse = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 3, ["left",root_left,"top",root_top,"font-size","4px"], null));
var rel_collapse = ob.core.gen_rel_collapse.call(null,sel__$1);
var collapse = ob.core._BAR__BAR_.call(null,abs_collapse,rel_collapse);
var shift = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 1, ["transform","translate(100px)"], null));
return copy.call(null,collapse.call(null,shift.call(null,shift.call(null,collapse.call(null,copy.call(null,null,true).transition().delay(((500) * cljs.core.rand.call(null))).duration((1000)),true).transition("shift"),true).transition(),false).transition(),false),false);
}));
}));

(ob.core.make_copy.cljs$lang$maxFixedArity = 3);

ob.core.code__GT_DB = (function ob$core$code__GT_DB(db,code){
var ast = ob.utils.walk_ids.call(null,code);
var data = ob.core.ast__GT_data.call(null,ob.analyzer.analyze.call(null,ast,cljs.core.PersistentArrayMap.EMPTY));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ast));
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169990;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169991 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(826),(828),cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
ob.core.pathcache169990 = info169991;

return info169991;
})():info__17750__auto__);
var precompiled169992 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169992.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.END], null),com.rpl.specter.END], null));
} else {
return precompiled169992;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.apply.call(null,cljs.core.merge,db,data));
});
/**
 * Prewalks the structure, but inserts the transformed branch
 *   as the first argument to the leaf nodes.
 */
ob.core.PARA = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache169993;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169994 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.DISPENSE,new cljs.core.Var(function(){return com.rpl.specter.DISPENSE;},new cljs.core.Symbol("com.rpl.specter","DISPENSE","com.rpl.specter/DISPENSE",1567537873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"DISPENSE","DISPENSE",-792734648,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(1376),(1378),cljs.core.List.EMPTY,"Drops all collected values for subsequent navigation.",(cljs.core.truth_(com.rpl.specter.DISPENSE)?com.rpl.specter.DISPENSE.cljs$lang$test:null)])),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache169993 = info169994;

return info169994;
})():info__17750__auto__);
var precompiled169995 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169995.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one.call(null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p)], null),com.rpl.specter.stay_then_continue,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled169995;
}
})());

return p;
}));
/**
 * Prewalks the structure, but inserts the transformed branch
 *   as the first argument to the leaf nodes.
 */
ob.core.PARA_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache169996;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info169997 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.VAL,new cljs.core.Var(function(){return com.rpl.specter.VAL;},new cljs.core.Symbol("com.rpl.specter","VAL","com.rpl.specter/VAL",-880341749,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"VAL","VAL",1194436242,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(18),(1),(761),(761),cljs.core.List.EMPTY,null,(cljs.core.truth_(com.rpl.specter.VAL)?com.rpl.specter.VAL.cljs$lang$test:null)])),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache169996 = info169997;

return info169997;
})():info__17750__auto__);
var precompiled169998 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled169998.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p,com.rpl.specter.VAL)], null),com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.VAL,com.rpl.specter.STAY], null));
} else {
return precompiled169998;
}
})());

return p;
}));
ob.core.para = (function ob$core$para(pred,f,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache169999;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170000 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.PARA,new cljs.core.Var(function(){return ob.core.PARA;},new cljs.core.Symbol("ob.core","PARA","ob.core/PARA",1919217486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),"src/ob/core.cljs",10,1,1581,1581,cljs.core.List.EMPTY,"Prewalks the structure, but inserts the transformed branch\n  as the first argument to the leaf nodes.",(cljs.core.truth_(ob.core.PARA)?ob.core.PARA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null));
ob.core.pathcache169999 = info170000;

return info170000;
})():info__17750__auto__);
var precompiled170001 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170001.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,null),ob.core.PARA.call(null,pred)], null),com.rpl.specter.collect_one,ob.core.PARA,pred], null));
} else {
return precompiled170001;
}
})(),f,structure);
});

//# sourceMappingURL=core.js.map
