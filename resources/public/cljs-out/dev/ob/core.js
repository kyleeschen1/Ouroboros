// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.core');
goog.require('cljs.core');
goog.require('ob.scroll');
goog.require('ob.code_to_hiccup');
goog.require('ob.analyzer');
goog.require('ob.data_to_hiccup');
goog.require('ob.defs');
goog.require('ob.utils');
goog.require('ob.update_db');
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
goog.require('cljs.core.async');
ob.core.WALK_ALL = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache127557;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127558 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache127557 = info127558;

return info127558;
})():info__17671__auto__);
var precompiled127559 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127559.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled127559;
}
})());

return p;
})();
ob.core.AST_WALK = com.rpl.specter.cond_path.call(null,cljs.core.map_QMARK_,com.rpl.specter.STAY,cljs.core.vector_QMARK_,com.rpl.specter.ALL,com.rpl.specter.STAY);


ob.core.AST_CHILDREN_select_STAR_ = (function ob$core$AST_CHILDREN_select_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127560;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127561 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache127560 = info127561;

return info127561;
})():info__17671__auto__);
var precompiled127562 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127562.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled127562;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127563;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127564 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache127563 = info127564;

return info127564;
})():info__17671__auto__);
var precompiled127565 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127565.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled127565;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127566;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127567 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache127566 = info127567;

return info127567;
})():info__17671__auto__);
var precompiled127568 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127568.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled127568;
}
})(),next_fn,ast);
} else {
return null;
}
});

ob.core.AST_CHILDREN = (function (){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core127569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core127569 = (function (meta127570){
this.meta127570 = meta127570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core127569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_127571,meta127570__$1){
var self__ = this;
var _127571__$1 = this;
return (new ob.core.t_ob$core127569(meta127570__$1));
}));

(ob.core.t_ob$core127569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_127571){
var self__ = this;
var _127571__$1 = this;
return self__.meta127570;
}));

(ob.core.t_ob$core127569.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core127569.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,ast,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127572;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127573 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache127572 = info127573;

return info127573;
})():info__17671__auto__);
var precompiled127574 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127574.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled127574;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127575;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127576 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache127575 = info127576;

return info127576;
})():info__17671__auto__);
var precompiled127577 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127577.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled127577;
}
})(),next_fn,s);
} else {
return null;
}
}));

(ob.core.t_ob$core127569.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,ast,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127578;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127579 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache127578 = info127579;

return info127579;
})():info__17671__auto__);
var precompiled127580 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127580.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled127580;
}
})(),next_fn,ast);
} else {
return null;
}
}));

(ob.core.t_ob$core127569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta127570","meta127570",-1517596897,null)], null);
}));

(ob.core.t_ob$core127569.cljs$lang$type = true);

(ob.core.t_ob$core127569.cljs$lang$ctorStr = "ob.core/t_ob$core127569");

(ob.core.t_ob$core127569.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core127569");
}));

/**
 * Positional factory function for ob.core/t_ob$core127569.
 */
ob.core.__GT_t_ob$core127569 = (function ob$core$__GT_t_ob$core127569(meta127570){
return (new ob.core.t_ob$core127569(meta127570));
});

}

return (new ob.core.t_ob$core127569(null));
})()
;
ob.core.AST_PRE_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache127581;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127582 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,62,62,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache127581 = info127582;

return info127582;
})():info__17671__auto__);
var precompiled127583 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127583.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.stay_then_continue,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled127583;
}
})());

return p;
})();
ob.core.AST_POST_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache127584;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127585 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,62,62,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache127584 = info127585;

return info127585;
})():info__17671__auto__);
var precompiled127586 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127586.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.continue_then_stay,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled127586;
}
})());

return p;
})();
ob.core.AST_DESC = ob.core.AST_POST_WALK;


ob.core.desc_select_STAR_ = (function ob$core$desc_select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$desc_select_STAR__$_gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__127591 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__127592 = null;
var count__127593 = (0);
var i__127594 = (0);
while(true){
if((i__127594 < count__127593)){
var c = cljs.core._nth.call(null,chunk__127592,i__127594);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__127622 = seq__127591;
var G__127623 = chunk__127592;
var G__127624 = count__127593;
var G__127625 = (i__127594 + (1));
seq__127591 = G__127622;
chunk__127592 = G__127623;
count__127593 = G__127624;
i__127594 = G__127625;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__127591);
if(temp__5720__auto__){
var seq__127591__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__127591__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__127591__$1);
var G__127626 = cljs.core.chunk_rest.call(null,seq__127591__$1);
var G__127627 = c__4679__auto__;
var G__127628 = cljs.core.count.call(null,c__4679__auto__);
var G__127629 = (0);
seq__127591 = G__127626;
chunk__127592 = G__127627;
count__127593 = G__127628;
i__127594 = G__127629;
continue;
} else {
var c = cljs.core.first.call(null,seq__127591__$1);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__127630 = cljs.core.next.call(null,seq__127591__$1);
var G__127631 = null;
var G__127632 = (0);
var G__127633 = (0);
seq__127591 = G__127630;
chunk__127592 = G__127631;
count__127593 = G__127632;
i__127594 = G__127633;
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

return cljs.core.deref.call(null,col);
});

ob.core.desc_transform_STAR_ = (function ob$core$desc_transform_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$desc_transform_STAR__$_gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.update.call(null,cljs.core._deref.call(null,col),k__$1,next_fn));

var seq__127599 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__127600 = null;
var count__127601 = (0);
var i__127602 = (0);
while(true){
if((i__127602 < count__127601)){
var c = cljs.core._nth.call(null,chunk__127600,i__127602);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__127634 = seq__127599;
var G__127635 = chunk__127600;
var G__127636 = count__127601;
var G__127637 = (i__127602 + (1));
seq__127599 = G__127634;
chunk__127600 = G__127635;
count__127601 = G__127636;
i__127602 = G__127637;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__127599);
if(temp__5720__auto__){
var seq__127599__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__127599__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__127599__$1);
var G__127638 = cljs.core.chunk_rest.call(null,seq__127599__$1);
var G__127639 = c__4679__auto__;
var G__127640 = cljs.core.count.call(null,c__4679__auto__);
var G__127641 = (0);
seq__127599 = G__127638;
chunk__127600 = G__127639;
count__127601 = G__127640;
i__127602 = G__127641;
continue;
} else {
var c = cljs.core.first.call(null,seq__127599__$1);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__127642 = cljs.core.next.call(null,seq__127599__$1);
var G__127643 = null;
var G__127644 = (0);
var G__127645 = (0);
seq__127599 = G__127642;
chunk__127600 = G__127643;
count__127601 = G__127644;
i__127602 = G__127645;
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

return cljs.core.deref.call(null,col);
});

ob.core.desc = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core127603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core127603 = (function (k,meta127604){
this.k = k;
this.meta127604 = meta127604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core127603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_127605,meta127604__$1){
var self__ = this;
var _127605__$1 = this;
return (new ob.core.t_ob$core127603(self__.k,meta127604__$1));
}));

(ob.core.t_ob$core127603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_127605){
var self__ = this;
var _127605__$1 = this;
return self__.meta127604;
}));

(ob.core.t_ob$core127603.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core127603.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__127610 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__127611 = null;
var count__127612 = (0);
var i__127613 = (0);
while(true){
if((i__127613 < count__127612)){
var c = cljs.core._nth.call(null,chunk__127611,i__127613);
ob$core$gather.call(null,c);


var G__127646 = seq__127610;
var G__127647 = chunk__127611;
var G__127648 = count__127612;
var G__127649 = (i__127613 + (1));
seq__127610 = G__127646;
chunk__127611 = G__127647;
count__127612 = G__127648;
i__127613 = G__127649;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__127610);
if(temp__5720__auto__){
var seq__127610__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__127610__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__127610__$1);
var G__127650 = cljs.core.chunk_rest.call(null,seq__127610__$1);
var G__127651 = c__4679__auto__;
var G__127652 = cljs.core.count.call(null,c__4679__auto__);
var G__127653 = (0);
seq__127610 = G__127650;
chunk__127611 = G__127651;
count__127612 = G__127652;
i__127613 = G__127653;
continue;
} else {
var c = cljs.core.first.call(null,seq__127610__$1);
ob$core$gather.call(null,c);


var G__127654 = cljs.core.next.call(null,seq__127610__$1);
var G__127655 = null;
var G__127656 = (0);
var G__127657 = (0);
seq__127610 = G__127654;
chunk__127611 = G__127655;
count__127612 = G__127656;
i__127613 = G__127657;
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

return cljs.core.deref.call(null,col);
}));

(ob.core.t_ob$core127603.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.update.call(null,cljs.core._deref.call(null,col),k__$1,next_fn));

var seq__127618 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__127619 = null;
var count__127620 = (0);
var i__127621 = (0);
while(true){
if((i__127621 < count__127620)){
var c = cljs.core._nth.call(null,chunk__127619,i__127621);
ob$core$gather.call(null,c);


var G__127658 = seq__127618;
var G__127659 = chunk__127619;
var G__127660 = count__127620;
var G__127661 = (i__127621 + (1));
seq__127618 = G__127658;
chunk__127619 = G__127659;
count__127620 = G__127660;
i__127621 = G__127661;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__127618);
if(temp__5720__auto__){
var seq__127618__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__127618__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__127618__$1);
var G__127662 = cljs.core.chunk_rest.call(null,seq__127618__$1);
var G__127663 = c__4679__auto__;
var G__127664 = cljs.core.count.call(null,c__4679__auto__);
var G__127665 = (0);
seq__127618 = G__127662;
chunk__127619 = G__127663;
count__127620 = G__127664;
i__127621 = G__127665;
continue;
} else {
var c = cljs.core.first.call(null,seq__127618__$1);
ob$core$gather.call(null,c);


var G__127666 = cljs.core.next.call(null,seq__127618__$1);
var G__127667 = null;
var G__127668 = (0);
var G__127669 = (0);
seq__127618 = G__127666;
chunk__127619 = G__127667;
count__127620 = G__127668;
i__127621 = G__127669;
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

return cljs.core.deref.call(null,col);
}));

(ob.core.t_ob$core127603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta127604","meta127604",1101476338,null)], null);
}));

(ob.core.t_ob$core127603.cljs$lang$type = true);

(ob.core.t_ob$core127603.cljs$lang$ctorStr = "ob.core/t_ob$core127603");

(ob.core.t_ob$core127603.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core127603");
}));

/**
 * Positional factory function for ob.core/t_ob$core127603.
 */
ob.core.__GT_t_ob$core127603 = (function ob$core$__GT_t_ob$core127603(k__$1,meta127604){
return (new ob.core.t_ob$core127603(k__$1,meta127604));
});

}

return (new ob.core.t_ob$core127603(k,null));
}));
ob.core.gen_paren_datum = (function ob$core$gen_paren_datum(parent_id,text,depth,tag){
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-bracket"].join(''),tag,"bracket"]),new cljs.core.Keyword(null,"name","name",1843675177),text], null)]);
});
ob.core.add_paren_data = (function ob$core$add_paren_data(data_row,p__127670){
var map__127671 = p__127670;
var map__127671__$1 = cljs.core.__destructure_map.call(null,map__127671);
var id = cljs.core.get.call(null,map__127671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__127671__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__127671__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var vec__127672 = parens;
var op = cljs.core.nth.call(null,vec__127672,(0),null);
var cl = cljs.core.nth.call(null,vec__127672,(1),null);
var op_paren = ob.core.gen_paren_datum.call(null,id,op,depth,"opening");
var cl_paren = ob.core.gen_paren_datum.call(null,id,cl,depth,"closing");
var parens__$1 = cljs.core.merge.call(null,op_paren,cl_paren);
var paren_ids = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127675;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127676 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(749),(752),cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null));
ob.core.pathcache127675 = info127676;

return info127676;
})():info__17671__auto__);
var precompiled127677 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127677.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null),com.rpl.specter.MAP_KEYS], null));
} else {
return precompiled127677;
}
})(),parens__$1);
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.assoc.call(null,data_row,new cljs.core.Keyword(null,"parens","parens",1028661830),paren_ids)]),op_paren,cl_paren);
});
ob.core.macro__GT_pos_type = (function ob$core$macro__GT_pos_type(op){
var G__127678 = op;
var G__127678__$1 = (((G__127678 instanceof cljs.core.Keyword))?G__127678.fqn:null);
switch (G__127678__$1) {
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
var pred__127682 = (function (p1__127680_SHARP_,p2__127681_SHARP_){
return cljs.core.get.call(null,p1__127680_SHARP_,p2__127681_SHARP_);
});
var expr__127683 = op;
if(cljs.core.truth_(pred__127682.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"let","let",-1282412701),null,new cljs.core.Keyword(null,"loop","loop",-395552849),null], null), null),expr__127683))){
return new cljs.core.Keyword(null,"let","let",-1282412701);
} else {
if(cljs.core.truth_(pred__127682.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"macroexpand","macroexpand",-130598183),null], null), null),expr__127683))){
return ob.core.macro__GT_pos_type.call(null,op);
} else {
return op;
}
}
});
ob.core.sel__GT_datum = (function ob$core$sel__GT_datum(p__127685){
var map__127686 = p__127685;
var map__127686__$1 = cljs.core.__destructure_map.call(null,map__127686);
var sel = map__127686__$1;
var id = cljs.core.get.call(null,map__127686__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__127686__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var type = cljs.core.get.call(null,map__127686__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__127686__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var parent_id = cljs.core.get.call(null,map__127686__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var child_ids = cljs.core.get.call(null,map__127686__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
var parens = cljs.core.get.call(null,map__127686__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__127686__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var pos_type = ob.core.op__GT_pos_type.call(null,op);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),pos_type,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.createAsIfByAssoc([type,op]),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"children","children",-940561982),child_ids], null);
});
ob.core.ast__GT_data = (function ob$core$ast__GT_data(var_args){
var G__127688 = arguments.length;
switch (G__127688) {
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
var sel = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127689;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127690 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_DESC,new cljs.core.Var(function(){return ob.core.AST_DESC;},new cljs.core.Symbol("ob.core","AST-DESC","ob.core/AST-DESC",-1179528306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),"src/ob/core.cljs",14,1,96,96,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_DESC)?ob.core.AST_DESC.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092)))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092))], null),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)], null));
ob.core.pathcache127689 = info127690;

return info127690;
})():info__17671__auto__);
var precompiled127691 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127691.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.AST_DESC,com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null),ob.core.AST_DESC,com.rpl.specter.pred], null));
} else {
return precompiled127691;
}
})(),ast);
var iter__4652__auto__ = (function ob$core$iter__127692(s__127693){
return (new cljs.core.LazySeq(null,(function (){
var s__127693__$1 = s__127693;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__127693__$1);
if(temp__5720__auto__){
var s__127693__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__127693__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__127693__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__127695 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__127694 = (0);
while(true){
if((i__127694 < size__4651__auto__)){
var map__127696 = cljs.core._nth.call(null,c__4650__auto__,i__127694);
var map__127696__$1 = cljs.core.__destructure_map.call(null,map__127696);
var s = map__127696__$1;
var id__$1 = cljs.core.get.call(null,map__127696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__127696__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
cljs.core.chunk_append.call(null,b__127695,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})());

var G__127699 = (i__127694 + (1));
i__127694 = G__127699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__127695),ob$core$iter__127692.call(null,cljs.core.chunk_rest.call(null,s__127693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__127695),null);
}
} else {
var map__127697 = cljs.core.first.call(null,s__127693__$2);
var map__127697__$1 = cljs.core.__destructure_map.call(null,map__127697);
var s = map__127697__$1;
var id__$1 = cljs.core.get.call(null,map__127697__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__127697__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
return cljs.core.cons.call(null,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})(),ob$core$iter__127692.call(null,cljs.core.rest.call(null,s__127693__$2)));
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127700;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127701 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.keys,new cljs.core.Var(function(){return cljs.core.keys;},new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),"cljs/core.cljs",(11),(1),(9050),(9050),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",-1282745308,null)], null)),"Returns a sequence of the map's keys, in the same order as (seq map).",(cljs.core.truth_(cljs.core.keys)?cljs.core.keys.cljs$lang$test:null)])),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,dims,new cljs.core.Symbol(null,"dims","dims",1174008638,null))], null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dims","dims",1174008638,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null))),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache127700 = info127701;

return info127701;
})():info__17671__auto__);
var precompiled127702 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127702.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,cljs.core.keys.call(null,dims)),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.submap,cljs.core.keys,dims,com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one], null));
} else {
return precompiled127702;
}
})(),f,db);
});
cljs.core._add_method.call(null,ob.event_loop.animate,new cljs.core.Keyword(null,"add-code*","add-code*",-735553975),(function (_,___$1,p__127703){
var vec__127704 = p__127703;
var code = cljs.core.nth.call(null,vec__127704,(0),null);
var ast = ob.utils.walk_ids.call(null,code);
var data = ob.core.ast__GT_data.call(null,ob.analyzer.analyze.call(null,ast,cljs.core.PersistentArrayMap.EMPTY));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ast));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.Keyword("id","parent","id/parent",-878874974),id,new cljs.core.Keyword(null,"time","time",1385887882),(1),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.apply.call(null,cljs.core.merge,data)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.animate,new cljs.core.Keyword(null,"add-code","add-code",1030596725),(function (_,db,code){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.event_loop.animate.call(null,new cljs.core.Keyword(null,"add-code*","add-code*",-735553975),db,code),ob.event_loop.animate.call(null,new cljs.core.Keyword(null,"add-code*","add-code*",-735553975),db,code)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.animate,new cljs.core.Keyword(null,"contract","contract",798152745),(function (_,db,___$1){
var db__$1 = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(db);
var max_depth = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127707;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127708 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache127707 = info127708;

return info127708;
})():info__17671__auto__);
var precompiled127709 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127709.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled127709;
}
})(),db__$1));
var dims = ob.core.get_dims.call(null,"code-col");
var interval = ((10000) / max_depth);
var f = (function (depth,classes,style){
return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"trs","trs",1104008633),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(4),new cljs.core.Keyword(null,"delay","delay",-574225219),(((max_depth - depth) * interval) / (1000))], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0px");
});
var add_on = (function (data){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"on-transition-end","on-transition-end",-1169027318),(function (){
return cljs.core.println.call(null,Date.now());
}));
});
var data = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127710;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127711 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"depth","depth",1768663640))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"class","class",-2030961996))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"depth","depth",1768663640)),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache127710 = info127711;

return info127711;
})():info__17671__auto__);
var precompiled127712 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127712.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640)),com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled127712;
}
})(),f,db__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"trs?","trs?",-745190343),true,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
}));
cljs.core._add_method.call(null,ob.event_loop.animate,new cljs.core.Keyword(null,"expand","expand",595248157),(function (_,db,___$1){
var db__$1 = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(db);
var max_depth = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127713;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127714 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache127713 = info127714;

return info127714;
})():info__17671__auto__);
var precompiled127715 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127715.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled127715;
}
})(),db__$1));
var dims = ob.core.get_dims.call(null,"code-col");
var interval = ((10000) / max_depth);
var f = (function (depth,id,style){
return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),(4),new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),((depth * interval) / (1000)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),null,new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),null,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),null,new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),null);
});
var data = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127716;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127717 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"depth","depth",1768663640))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"depth","depth",1768663640)),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache127716 = info127717;

return info127717;
})():info__17671__auto__);
var precompiled127718 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127718.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640)),com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled127718;
}
})(),f,db__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"trs?","trs?",-745190343),true,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->data","id->data",-1544872090),(function (p__127719,p__127720){
var map__127721 = p__127719;
var map__127721__$1 = cljs.core.__destructure_map.call(null,map__127721);
var display = cljs.core.get.call(null,map__127721__$1,new cljs.core.Keyword(null,"display","display",242065432));
var vec__127722 = p__127720;
var _ = cljs.core.nth.call(null,vec__127722,(0),null);
var id = cljs.core.nth.call(null,vec__127722,(1),null);
return cljs.core.get.call(null,display,id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (db,_){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-trs-id","active-trs-id",-1054853546),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword("trs","active-id","trs/active-id",-59057979));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-dir","time-dir",-1167029013),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword("trs","time-dir","trs/time-dir",-1166586702));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"trs-records","trs-records",636922154),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword("trs","records","trs/records",1326543861));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-trs-records","active-trs-records",-200187773),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trs-records","trs-records",636922154)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-trs-id","active-trs-id",-1054853546)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-dir","time-dir",-1167029013)], null),(function (p__127725,_){
var vec__127726 = p__127725;
var records = cljs.core.nth.call(null,vec__127726,(0),null);
var active_id = cljs.core.nth.call(null,vec__127726,(1),null);
var time_dir = cljs.core.nth.call(null,vec__127726,(2),null);
return cljs.core.get_in.call(null,records,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_id,time_dir], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->trs","id->trs",-1747753659),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-trs-records","active-trs-records",-200187773)], null),(function (records,p__127729){
var vec__127730 = p__127729;
var _ = cljs.core.nth.call(null,vec__127730,(0),null);
var id = cljs.core.nth.call(null,vec__127730,(1),null);
return cljs.core.get.call(null,records,id);
}));
/**
 * Initializes transition data.
 */
ob.core.init_trs = (function ob$core$init_trs(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("trs","active-id","trs/active-id",-59057979),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword("trs","time-dir","trs/time-dir",-1166586702),new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.Keyword("trs","records","trs/records",1326543861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434)], null)], null),new cljs.core.Keyword(null,"yams","yams",1125085494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yams","yams",1125085494)], null)], null)], null)], null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-trs","update-trs",-1610921087),(function (db,p__127733){
var vec__127734 = p__127733;
var _ = cljs.core.nth.call(null,vec__127734,(0),null);
var trn_name = cljs.core.nth.call(null,vec__127734,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("trs","active-id","trs/active-id",-59057979),trn_name);
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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),null,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,ob.core.init_trs.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837),(3000),new cljs.core.Keyword(null,"paused?","paused?",-135058553),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null))], null);
}));
ob.core.init = (function ob$core$init(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
});
/**
 * Shorthand for generating
 * the style / attr map.
 */
ob.core.$ = (function ob$core$$(var_args){
var G__127738 = arguments.length;
switch (G__127738) {
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
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#text-col","div#text-col",-681412085),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"There is some exposition... here is some more exposition....\n     and now here is a ridiculously long word fmwk,;'f,ew;l'dffwm;lk'fkwefwelkfmk"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"Next line"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.Keyword(null,"add-code","add-code",1030596725),ob.core.sample_code);
})], null),"Add code"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.Keyword(null,"contract","contract",798152745));
})], null),"Contract"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.Keyword(null,"expand","expand",595248157));
})], null),"Expand"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-trs","update-trs",-1610921087),new cljs.core.Keyword(null,"yams","yams",1125085494)], null));
})], null),"Init"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ob.event_loop.pause_BANG_], null),"||"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
})], null),"Undo"], null)], null);
});
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
var vec__127741 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__127741,(0),null);
var left = cljs.core.nth.call(null,vec__127741,(1),null);
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
var seq__127745_127777 = cljs.core.seq.call(null,styles);
var chunk__127746_127778 = null;
var count__127747_127779 = (0);
var i__127748_127780 = (0);
while(true){
if((i__127748_127780 < count__127747_127779)){
var vec__127755_127781 = cljs.core._nth.call(null,chunk__127746_127778,i__127748_127780);
var k_127782 = cljs.core.nth.call(null,vec__127755_127781,(0),null);
var v_127783 = cljs.core.nth.call(null,vec__127755_127781,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_127782))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_127782,selection.selection().style(k_127782));
} else {
}

selection.style(k_127782,v_127783);


var G__127784 = seq__127745_127777;
var G__127785 = chunk__127746_127778;
var G__127786 = count__127747_127779;
var G__127787 = (i__127748_127780 + (1));
seq__127745_127777 = G__127784;
chunk__127746_127778 = G__127785;
count__127747_127779 = G__127786;
i__127748_127780 = G__127787;
continue;
} else {
var temp__5720__auto___127788 = cljs.core.seq.call(null,seq__127745_127777);
if(temp__5720__auto___127788){
var seq__127745_127789__$1 = temp__5720__auto___127788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__127745_127789__$1)){
var c__4679__auto___127790 = cljs.core.chunk_first.call(null,seq__127745_127789__$1);
var G__127791 = cljs.core.chunk_rest.call(null,seq__127745_127789__$1);
var G__127792 = c__4679__auto___127790;
var G__127793 = cljs.core.count.call(null,c__4679__auto___127790);
var G__127794 = (0);
seq__127745_127777 = G__127791;
chunk__127746_127778 = G__127792;
count__127747_127779 = G__127793;
i__127748_127780 = G__127794;
continue;
} else {
var vec__127758_127795 = cljs.core.first.call(null,seq__127745_127789__$1);
var k_127796 = cljs.core.nth.call(null,vec__127758_127795,(0),null);
var v_127797 = cljs.core.nth.call(null,vec__127758_127795,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_127796))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_127796,selection.selection().style(k_127796));
} else {
}

selection.style(k_127796,v_127797);


var G__127798 = cljs.core.next.call(null,seq__127745_127789__$1);
var G__127799 = null;
var G__127800 = (0);
var G__127801 = (0);
seq__127745_127777 = G__127798;
chunk__127746_127778 = G__127799;
count__127747_127779 = G__127800;
i__127748_127780 = G__127801;
continue;
}
} else {
}
}
break;
}
} else {
var seq__127761_127802 = cljs.core.seq.call(null,styles);
var chunk__127762_127803 = null;
var count__127763_127804 = (0);
var i__127764_127805 = (0);
while(true){
if((i__127764_127805 < count__127763_127804)){
var vec__127771_127806 = cljs.core._nth.call(null,chunk__127762_127803,i__127764_127805);
var k_127807 = cljs.core.nth.call(null,vec__127771_127806,(0),null);
var __127808 = cljs.core.nth.call(null,vec__127771_127806,(1),null);
selection.style(k_127807,cljs.core.deref.call(null,coords).call(null,k_127807));


var G__127809 = seq__127761_127802;
var G__127810 = chunk__127762_127803;
var G__127811 = count__127763_127804;
var G__127812 = (i__127764_127805 + (1));
seq__127761_127802 = G__127809;
chunk__127762_127803 = G__127810;
count__127763_127804 = G__127811;
i__127764_127805 = G__127812;
continue;
} else {
var temp__5720__auto___127813 = cljs.core.seq.call(null,seq__127761_127802);
if(temp__5720__auto___127813){
var seq__127761_127814__$1 = temp__5720__auto___127813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__127761_127814__$1)){
var c__4679__auto___127815 = cljs.core.chunk_first.call(null,seq__127761_127814__$1);
var G__127816 = cljs.core.chunk_rest.call(null,seq__127761_127814__$1);
var G__127817 = c__4679__auto___127815;
var G__127818 = cljs.core.count.call(null,c__4679__auto___127815);
var G__127819 = (0);
seq__127761_127802 = G__127816;
chunk__127762_127803 = G__127817;
count__127763_127804 = G__127818;
i__127764_127805 = G__127819;
continue;
} else {
var vec__127774_127820 = cljs.core.first.call(null,seq__127761_127814__$1);
var k_127821 = cljs.core.nth.call(null,vec__127774_127820,(0),null);
var __127822 = cljs.core.nth.call(null,vec__127774_127820,(1),null);
selection.style(k_127821,cljs.core.deref.call(null,coords).call(null,k_127821));


var G__127823 = cljs.core.next.call(null,seq__127761_127814__$1);
var G__127824 = null;
var G__127825 = (0);
var G__127826 = (0);
seq__127761_127802 = G__127823;
chunk__127762_127803 = G__127824;
count__127763_127804 = G__127825;
i__127764_127805 = G__127826;
continue;
}
} else {
}
}
break;
}
}
}catch (e127744){if((e127744 instanceof Error)){
var e_127827 = e127744;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e127744;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___127829 = arguments.length;
var i__4865__auto___127830 = (0);
while(true){
if((i__4865__auto___127830 < len__4864__auto___127829)){
args__4870__auto__.push((arguments[i__4865__auto___127830]));

var G__127831 = (i__4865__auto___127830 + (1));
i__4865__auto___127830 = G__127831;
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
(ob.core.compose.cljs$lang$applyTo = (function (seq127828){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq127828));
}));

ob.core._transition = (function ob$core$_transition(p__127834){
var map__127835 = p__127834;
var map__127835__$1 = cljs.core.__destructure_map.call(null,map__127835);
var delay = cljs.core.get.call(null,map__127835__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__127835__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__127836 = s__$1;
var G__127836__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__127836(p1__127832_SHARP_){
return p1__127832_SHARP_.delay(delay);
}):G__127836);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__127836(p1__127833_SHARP_){
return p1__127833_SHARP_.duration(duration);
});
} else {
return G__127836__$1;
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
var len__4864__auto___127843 = arguments.length;
var i__4865__auto___127844 = (0);
while(true){
if((i__4865__auto___127844 < len__4864__auto___127843)){
args__4870__auto__.push((arguments[i__4865__auto___127844]));

var G__127845 = (i__4865__auto___127844 + (1));
i__4865__auto___127844 = G__127845;
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
var seq__127839 = cljs.core.seq.call(null,fs);
var chunk__127840 = null;
var count__127841 = (0);
var i__127842 = (0);
while(true){
if((i__127842 < count__127841)){
var f__$1 = cljs.core._nth.call(null,chunk__127840,i__127842);
f__$1.call(null,sel,ff_QMARK_);


var G__127846 = seq__127839;
var G__127847 = chunk__127840;
var G__127848 = count__127841;
var G__127849 = (i__127842 + (1));
seq__127839 = G__127846;
chunk__127840 = G__127847;
count__127841 = G__127848;
i__127842 = G__127849;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__127839);
if(temp__5720__auto__){
var seq__127839__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__127839__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__127839__$1);
var G__127850 = cljs.core.chunk_rest.call(null,seq__127839__$1);
var G__127851 = c__4679__auto__;
var G__127852 = cljs.core.count.call(null,c__4679__auto__);
var G__127853 = (0);
seq__127839 = G__127850;
chunk__127840 = G__127851;
count__127841 = G__127852;
i__127842 = G__127853;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__127839__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__127854 = cljs.core.next.call(null,seq__127839__$1);
var G__127855 = null;
var G__127856 = (0);
var G__127857 = (0);
seq__127839 = G__127854;
chunk__127840 = G__127855;
count__127841 = G__127856;
i__127842 = G__127857;
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
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq127837){
var G__127838 = cljs.core.first.call(null,seq127837);
var seq127837__$1 = cljs.core.next.call(null,seq127837);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__127838,seq127837__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__127859 = arguments.length;
switch (G__127859) {
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
var vec__127860 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__127860,(0),null);
var l = cljs.core.nth.call(null,vec__127860,(1),null);
var w = cljs.core.nth.call(null,vec__127860,(2),null);
var h = cljs.core.nth.call(null,vec__127860,(3),null);
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
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127864;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127865 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(826),(828),cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
ob.core.pathcache127864 = info127865;

return info127865;
})():info__17671__auto__);
var precompiled127866 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127866.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.END], null),com.rpl.specter.END], null));
} else {
return precompiled127866;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.apply.call(null,cljs.core.merge,db,data));
});
/**
 * Prewalks the structure, but inserts the transformed branch
 *   as the first argument to the leaf nodes.
 */
ob.core.PARA = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache127867;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127868 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.DISPENSE,new cljs.core.Var(function(){return com.rpl.specter.DISPENSE;},new cljs.core.Symbol("com.rpl.specter","DISPENSE","com.rpl.specter/DISPENSE",1567537873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"DISPENSE","DISPENSE",-792734648,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(1376),(1378),cljs.core.List.EMPTY,"Drops all collected values for subsequent navigation.",(cljs.core.truth_(com.rpl.specter.DISPENSE)?com.rpl.specter.DISPENSE.cljs$lang$test:null)])),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache127867 = info127868;

return info127868;
})():info__17671__auto__);
var precompiled127869 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127869.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one.call(null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p)], null),com.rpl.specter.stay_then_continue,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled127869;
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
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache127870;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127871 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.VAL,new cljs.core.Var(function(){return com.rpl.specter.VAL;},new cljs.core.Symbol("com.rpl.specter","VAL","com.rpl.specter/VAL",-880341749,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"VAL","VAL",1194436242,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(18),(1),(761),(761),cljs.core.List.EMPTY,null,(cljs.core.truth_(com.rpl.specter.VAL)?com.rpl.specter.VAL.cljs$lang$test:null)])),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache127870 = info127871;

return info127871;
})():info__17671__auto__);
var precompiled127872 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127872.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p,com.rpl.specter.VAL)], null),com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.VAL,com.rpl.specter.STAY], null));
} else {
return precompiled127872;
}
})());

return p;
}));
ob.core.para = (function ob$core$para(pred,f,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache127873;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info127874 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.PARA,new cljs.core.Var(function(){return ob.core.PARA;},new cljs.core.Symbol("ob.core","PARA","ob.core/PARA",1919217486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),"src/ob/core.cljs",10,1,1176,1176,cljs.core.List.EMPTY,"Prewalks the structure, but inserts the transformed branch\n  as the first argument to the leaf nodes.",(cljs.core.truth_(ob.core.PARA)?ob.core.PARA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null));
ob.core.pathcache127873 = info127874;

return info127874;
})():info__17671__auto__);
var precompiled127875 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled127875.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,null),ob.core.PARA.call(null,pred)], null),com.rpl.specter.collect_one,ob.core.PARA,pred], null));
} else {
return precompiled127875;
}
})(),f,structure);
});

//# sourceMappingURL=core.js.map
