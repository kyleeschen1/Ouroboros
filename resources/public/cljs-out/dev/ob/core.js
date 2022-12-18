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
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache50515;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50516 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache50515 = info50516;

return info50516;
})():info__17580__auto__);
var precompiled50517 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50517.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled50517;
}
})());

return p;
})();
ob.core.AST_WALK = com.rpl.specter.cond_path.call(null,cljs.core.map_QMARK_,com.rpl.specter.STAY,cljs.core.vector_QMARK_,com.rpl.specter.ALL,com.rpl.specter.STAY);


ob.core.AST_CHILDREN_select_STAR_ = (function ob$core$AST_CHILDREN_select_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50518;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50519 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache50518 = info50519;

return info50519;
})():info__17580__auto__);
var precompiled50520 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50520.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled50520;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50521;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50522 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache50521 = info50522;

return info50522;
})():info__17580__auto__);
var precompiled50523 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50523.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled50523;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50524;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50525 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache50524 = info50525;

return info50525;
})():info__17580__auto__);
var precompiled50526 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50526.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled50526;
}
})(),next_fn,ast);
} else {
return null;
}
});

ob.core.AST_CHILDREN = (function (){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core50527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core50527 = (function (meta50528){
this.meta50528 = meta50528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core50527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50529,meta50528__$1){
var self__ = this;
var _50529__$1 = this;
return (new ob.core.t_ob$core50527(meta50528__$1));
}));

(ob.core.t_ob$core50527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50529){
var self__ = this;
var _50529__$1 = this;
return self__.meta50528;
}));

(ob.core.t_ob$core50527.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core50527.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,ast,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50530;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50531 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache50530 = info50531;

return info50531;
})():info__17580__auto__);
var precompiled50532 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50532.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled50532;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50533;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50534 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache50533 = info50534;

return info50534;
})():info__17580__auto__);
var precompiled50535 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50535.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled50535;
}
})(),next_fn,s);
} else {
return null;
}
}));

(ob.core.t_ob$core50527.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,ast,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50536;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50537 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache50536 = info50537;

return info50537;
})():info__17580__auto__);
var precompiled50538 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50538.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled50538;
}
})(),next_fn,ast);
} else {
return null;
}
}));

(ob.core.t_ob$core50527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50528","meta50528",43151502,null)], null);
}));

(ob.core.t_ob$core50527.cljs$lang$type = true);

(ob.core.t_ob$core50527.cljs$lang$ctorStr = "ob.core/t_ob$core50527");

(ob.core.t_ob$core50527.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core50527");
}));

/**
 * Positional factory function for ob.core/t_ob$core50527.
 */
ob.core.__GT_t_ob$core50527 = (function ob$core$__GT_t_ob$core50527(meta50528){
return (new ob.core.t_ob$core50527(meta50528));
});

}

return (new ob.core.t_ob$core50527(null));
})()
;
ob.core.AST_PRE_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache50539;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50540 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache50539 = info50540;

return info50540;
})():info__17580__auto__);
var precompiled50541 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50541.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.stay_then_continue,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled50541;
}
})());

return p;
})();
ob.core.AST_POST_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache50542;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50543 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache50542 = info50543;

return info50543;
})():info__17580__auto__);
var precompiled50544 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50544.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.continue_then_stay,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled50544;
}
})());

return p;
})();
ob.core.AST_DESC = ob.core.AST_POST_WALK;
ob.core.DATA = com.rpl.specter.MAP_VALS;
ob.core.datum__GT_child_ids = (function ob$core$datum__GT_child_ids(var_args){
var G__50546 = arguments.length;
switch (G__50546) {
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
return cljs.core.flatten.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50547;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50548 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.DATA,new cljs.core.Var(function(){return ob.core.DATA;},new cljs.core.Symbol("ob.core","DATA","ob.core/DATA",1547210987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),"src/ob/core.cljs",10,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.DATA)?ob.core.DATA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830))))], null)], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830))),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache50547 = info50548;

return info50548;
})():info__17580__auto__);
var precompiled50549 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50549.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.DATA,com.rpl.specter.submap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null)], null)),com.rpl.specter.MAP_VALS], null),ob.core.DATA,com.rpl.specter.submap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null)], null),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled50549;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core50551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core50551 = (function (id,meta50552){
this.id = id;
this.meta50552 = meta50552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core50551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50553,meta50552__$1){
var self__ = this;
var _50553__$1 = this;
return (new ob.core.t_ob$core50551(self__.id,meta50552__$1));
}));

(ob.core.t_ob$core50551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50553){
var self__ = this;
var _50553__$1 = this;
return self__.meta50552;
}));

(ob.core.t_ob$core50551.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core50551.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var ids = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(self__.id.call(null,db));
return next_fn.call(null,cljs.core.select_keys.call(null,db,ids));
}));

(ob.core.t_ob$core50551.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var ids = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(self__.id.call(null,db));
return cljs.core.merge.call(null,db,next_fn.call(null,cljs.core.select_keys.call(null,db,ids)));
}));

(ob.core.t_ob$core50551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta50552","meta50552",-193697992,null)], null);
}));

(ob.core.t_ob$core50551.cljs$lang$type = true);

(ob.core.t_ob$core50551.cljs$lang$ctorStr = "ob.core/t_ob$core50551");

(ob.core.t_ob$core50551.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core50551");
}));

/**
 * Positional factory function for ob.core/t_ob$core50551.
 */
ob.core.__GT_t_ob$core50551 = (function ob$core$__GT_t_ob$core50551(id__$1,meta50552){
return (new ob.core.t_ob$core50551(id__$1,meta50552));
});

}

return (new ob.core.t_ob$core50551(id,null));
}));


ob.core.children_select_STAR_ = (function ob$core$children_select_STAR_(id,parens_QMARK_,db,next_fn){
var child_ids = ob.core.datum__GT_child_ids.call(null,id.call(null,db));
return next_fn.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50554;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50555 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache50554 = info50555;

return info50555;
})():info__17580__auto__);
var precompiled50556 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50556.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled50556;
}
})(),db));
});

ob.core.children_transform_STAR_ = (function ob$core$children_transform_STAR_(id,parens_QMARK_,db,next_fn){
var child_ids = ob.core.datum__GT_child_ids.call(null,id.call(null,db));
return cljs.core.merge.call(null,db,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50557;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50558 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache50557 = info50558;

return info50558;
})():info__17580__auto__);
var precompiled50559 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50559.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled50559;
}
})(),next_fn,db));
});

ob.core.children = com.rpl.specter.impl.direct_nav_obj.call(null,(function (id,parens_QMARK_){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core50560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core50560 = (function (id,parens_QMARK_,meta50561){
this.id = id;
this.parens_QMARK_ = parens_QMARK_;
this.meta50561 = meta50561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core50560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50562,meta50561__$1){
var self__ = this;
var _50562__$1 = this;
return (new ob.core.t_ob$core50560(self__.id,self__.parens_QMARK_,meta50561__$1));
}));

(ob.core.t_ob$core50560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50562){
var self__ = this;
var _50562__$1 = this;
return self__.meta50561;
}));

(ob.core.t_ob$core50560.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core50560.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var child_ids = ob.core.datum__GT_child_ids.call(null,self__.id.call(null,db));
return next_fn.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50563;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50564 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache50563 = info50564;

return info50564;
})():info__17580__auto__);
var precompiled50565 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50565.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled50565;
}
})(),db));
}));

(ob.core.t_ob$core50560.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var child_ids = ob.core.datum__GT_child_ids.call(null,self__.id.call(null,db));
return cljs.core.merge.call(null,db,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50566;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50567 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache50566 = info50567;

return info50567;
})():info__17580__auto__);
var precompiled50568 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50568.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled50568;
}
})(),next_fn,db));
}));

(ob.core.t_ob$core50560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),new cljs.core.Symbol(null,"meta50561","meta50561",1882751839,null)], null);
}));

(ob.core.t_ob$core50560.cljs$lang$type = true);

(ob.core.t_ob$core50560.cljs$lang$ctorStr = "ob.core/t_ob$core50560");

(ob.core.t_ob$core50560.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core50560");
}));

/**
 * Positional factory function for ob.core/t_ob$core50560.
 */
ob.core.__GT_t_ob$core50560 = (function ob$core$__GT_t_ob$core50560(id__$1,parens_QMARK___$1,meta50561){
return (new ob.core.t_ob$core50560(id__$1,parens_QMARK___$1,meta50561));
});

}

return (new ob.core.t_ob$core50560(id,parens_QMARK_,null));
}));
ob.core.lookup_by_id = (function ob$core$lookup_by_id(db,id){
while(true){
var val = cljs.core.get.call(null,db,id);
var temp__5718__auto__ = new cljs.core.Keyword(null,"redirect","redirect",-1975673286).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(temp__5718__auto__)){
var r = temp__5718__auto__;
var G__50569 = db;
var G__50570 = r;
db = G__50569;
id = G__50570;
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

var seq__50575 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__50576 = null;
var count__50577 = (0);
var i__50578 = (0);
while(true){
if((i__50578 < count__50577)){
var c = cljs.core._nth.call(null,chunk__50576,i__50578);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__50606 = seq__50575;
var G__50607 = chunk__50576;
var G__50608 = count__50577;
var G__50609 = (i__50578 + (1));
seq__50575 = G__50606;
chunk__50576 = G__50607;
count__50577 = G__50608;
i__50578 = G__50609;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50575);
if(temp__5720__auto__){
var seq__50575__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50575__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50575__$1);
var G__50610 = cljs.core.chunk_rest.call(null,seq__50575__$1);
var G__50611 = c__4679__auto__;
var G__50612 = cljs.core.count.call(null,c__4679__auto__);
var G__50613 = (0);
seq__50575 = G__50610;
chunk__50576 = G__50611;
count__50577 = G__50612;
i__50578 = G__50613;
continue;
} else {
var c = cljs.core.first.call(null,seq__50575__$1);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__50614 = cljs.core.next.call(null,seq__50575__$1);
var G__50615 = null;
var G__50616 = (0);
var G__50617 = (0);
seq__50575 = G__50614;
chunk__50576 = G__50615;
count__50577 = G__50616;
i__50578 = G__50617;
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

var seq__50583 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__50584 = null;
var count__50585 = (0);
var i__50586 = (0);
while(true){
if((i__50586 < count__50585)){
var c = cljs.core._nth.call(null,chunk__50584,i__50586);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__50618 = seq__50583;
var G__50619 = chunk__50584;
var G__50620 = count__50585;
var G__50621 = (i__50586 + (1));
seq__50583 = G__50618;
chunk__50584 = G__50619;
count__50585 = G__50620;
i__50586 = G__50621;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50583);
if(temp__5720__auto__){
var seq__50583__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50583__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50583__$1);
var G__50622 = cljs.core.chunk_rest.call(null,seq__50583__$1);
var G__50623 = c__4679__auto__;
var G__50624 = cljs.core.count.call(null,c__4679__auto__);
var G__50625 = (0);
seq__50583 = G__50622;
chunk__50584 = G__50623;
count__50585 = G__50624;
i__50586 = G__50625;
continue;
} else {
var c = cljs.core.first.call(null,seq__50583__$1);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__50626 = cljs.core.next.call(null,seq__50583__$1);
var G__50627 = null;
var G__50628 = (0);
var G__50629 = (0);
seq__50583 = G__50626;
chunk__50584 = G__50627;
count__50585 = G__50628;
i__50586 = G__50629;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core50587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core50587 = (function (k,meta50588){
this.k = k;
this.meta50588 = meta50588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core50587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50589,meta50588__$1){
var self__ = this;
var _50589__$1 = this;
return (new ob.core.t_ob$core50587(self__.k,meta50588__$1));
}));

(ob.core.t_ob$core50587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50589){
var self__ = this;
var _50589__$1 = this;
return self__.meta50588;
}));

(ob.core.t_ob$core50587.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core50587.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__50594 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__50595 = null;
var count__50596 = (0);
var i__50597 = (0);
while(true){
if((i__50597 < count__50596)){
var c = cljs.core._nth.call(null,chunk__50595,i__50597);
ob$core$gather.call(null,c);


var G__50630 = seq__50594;
var G__50631 = chunk__50595;
var G__50632 = count__50596;
var G__50633 = (i__50597 + (1));
seq__50594 = G__50630;
chunk__50595 = G__50631;
count__50596 = G__50632;
i__50597 = G__50633;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50594);
if(temp__5720__auto__){
var seq__50594__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50594__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50594__$1);
var G__50634 = cljs.core.chunk_rest.call(null,seq__50594__$1);
var G__50635 = c__4679__auto__;
var G__50636 = cljs.core.count.call(null,c__4679__auto__);
var G__50637 = (0);
seq__50594 = G__50634;
chunk__50595 = G__50635;
count__50596 = G__50636;
i__50597 = G__50637;
continue;
} else {
var c = cljs.core.first.call(null,seq__50594__$1);
ob$core$gather.call(null,c);


var G__50638 = cljs.core.next.call(null,seq__50594__$1);
var G__50639 = null;
var G__50640 = (0);
var G__50641 = (0);
seq__50594 = G__50638;
chunk__50595 = G__50639;
count__50596 = G__50640;
i__50597 = G__50641;
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

(ob.core.t_ob$core50587.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));

var seq__50602 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__50603 = null;
var count__50604 = (0);
var i__50605 = (0);
while(true){
if((i__50605 < count__50604)){
var c = cljs.core._nth.call(null,chunk__50603,i__50605);
ob$core$gather.call(null,c);


var G__50642 = seq__50602;
var G__50643 = chunk__50603;
var G__50644 = count__50604;
var G__50645 = (i__50605 + (1));
seq__50602 = G__50642;
chunk__50603 = G__50643;
count__50604 = G__50644;
i__50605 = G__50645;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50602);
if(temp__5720__auto__){
var seq__50602__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50602__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50602__$1);
var G__50646 = cljs.core.chunk_rest.call(null,seq__50602__$1);
var G__50647 = c__4679__auto__;
var G__50648 = cljs.core.count.call(null,c__4679__auto__);
var G__50649 = (0);
seq__50602 = G__50646;
chunk__50603 = G__50647;
count__50604 = G__50648;
i__50605 = G__50649;
continue;
} else {
var c = cljs.core.first.call(null,seq__50602__$1);
ob$core$gather.call(null,c);


var G__50650 = cljs.core.next.call(null,seq__50602__$1);
var G__50651 = null;
var G__50652 = (0);
var G__50653 = (0);
seq__50602 = G__50650;
chunk__50603 = G__50651;
count__50604 = G__50652;
i__50605 = G__50653;
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

(ob.core.t_ob$core50587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta50588","meta50588",1213399248,null)], null);
}));

(ob.core.t_ob$core50587.cljs$lang$type = true);

(ob.core.t_ob$core50587.cljs$lang$ctorStr = "ob.core/t_ob$core50587");

(ob.core.t_ob$core50587.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core50587");
}));

/**
 * Positional factory function for ob.core/t_ob$core50587.
 */
ob.core.__GT_t_ob$core50587 = (function ob$core$__GT_t_ob$core50587(k__$1,meta50588){
return (new ob.core.t_ob$core50587(k__$1,meta50588));
});

}

return (new ob.core.t_ob$core50587(k,null));
}));


ob.core.desc_but_node_select_STAR_ = (function ob$core$desc_but_node_select_STAR_(k,node_id,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$desc_but_node_select_STAR__$_gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
if(cljs.core._EQ_.call(null,node_id,cljs.core.ffirst.call(null,datum))){
return null;
} else {
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__50658 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__50659 = null;
var count__50660 = (0);
var i__50661 = (0);
while(true){
if((i__50661 < count__50660)){
var c = cljs.core._nth.call(null,chunk__50659,i__50661);
ob$core$desc_but_node_select_STAR__$_gather.call(null,c);


var G__50689 = seq__50658;
var G__50690 = chunk__50659;
var G__50691 = count__50660;
var G__50692 = (i__50661 + (1));
seq__50658 = G__50689;
chunk__50659 = G__50690;
count__50660 = G__50691;
i__50661 = G__50692;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50658);
if(temp__5720__auto__){
var seq__50658__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50658__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50658__$1);
var G__50693 = cljs.core.chunk_rest.call(null,seq__50658__$1);
var G__50694 = c__4679__auto__;
var G__50695 = cljs.core.count.call(null,c__4679__auto__);
var G__50696 = (0);
seq__50658 = G__50693;
chunk__50659 = G__50694;
count__50660 = G__50695;
i__50661 = G__50696;
continue;
} else {
var c = cljs.core.first.call(null,seq__50658__$1);
ob$core$desc_but_node_select_STAR__$_gather.call(null,c);


var G__50697 = cljs.core.next.call(null,seq__50658__$1);
var G__50698 = null;
var G__50699 = (0);
var G__50700 = (0);
seq__50658 = G__50697;
chunk__50659 = G__50698;
count__50660 = G__50699;
i__50661 = G__50700;
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

var seq__50666 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__50667 = null;
var count__50668 = (0);
var i__50669 = (0);
while(true){
if((i__50669 < count__50668)){
var c = cljs.core._nth.call(null,chunk__50667,i__50669);
ob$core$desc_but_node_transform_STAR__$_gather.call(null,c);


var G__50701 = seq__50666;
var G__50702 = chunk__50667;
var G__50703 = count__50668;
var G__50704 = (i__50669 + (1));
seq__50666 = G__50701;
chunk__50667 = G__50702;
count__50668 = G__50703;
i__50669 = G__50704;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50666);
if(temp__5720__auto__){
var seq__50666__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50666__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50666__$1);
var G__50705 = cljs.core.chunk_rest.call(null,seq__50666__$1);
var G__50706 = c__4679__auto__;
var G__50707 = cljs.core.count.call(null,c__4679__auto__);
var G__50708 = (0);
seq__50666 = G__50705;
chunk__50667 = G__50706;
count__50668 = G__50707;
i__50669 = G__50708;
continue;
} else {
var c = cljs.core.first.call(null,seq__50666__$1);
ob$core$desc_but_node_transform_STAR__$_gather.call(null,c);


var G__50709 = cljs.core.next.call(null,seq__50666__$1);
var G__50710 = null;
var G__50711 = (0);
var G__50712 = (0);
seq__50666 = G__50709;
chunk__50667 = G__50710;
count__50668 = G__50711;
i__50669 = G__50712;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core50670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core50670 = (function (k,node_id,meta50671){
this.k = k;
this.node_id = node_id;
this.meta50671 = meta50671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core50670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50672,meta50671__$1){
var self__ = this;
var _50672__$1 = this;
return (new ob.core.t_ob$core50670(self__.k,self__.node_id,meta50671__$1));
}));

(ob.core.t_ob$core50670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50672){
var self__ = this;
var _50672__$1 = this;
return self__.meta50671;
}));

(ob.core.t_ob$core50670.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core50670.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
if(cljs.core._EQ_.call(null,self__.node_id,cljs.core.ffirst.call(null,datum))){
return null;
} else {
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__50677 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__50678 = null;
var count__50679 = (0);
var i__50680 = (0);
while(true){
if((i__50680 < count__50679)){
var c = cljs.core._nth.call(null,chunk__50678,i__50680);
ob$core$gather.call(null,c);


var G__50713 = seq__50677;
var G__50714 = chunk__50678;
var G__50715 = count__50679;
var G__50716 = (i__50680 + (1));
seq__50677 = G__50713;
chunk__50678 = G__50714;
count__50679 = G__50715;
i__50680 = G__50716;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50677);
if(temp__5720__auto__){
var seq__50677__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50677__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50677__$1);
var G__50717 = cljs.core.chunk_rest.call(null,seq__50677__$1);
var G__50718 = c__4679__auto__;
var G__50719 = cljs.core.count.call(null,c__4679__auto__);
var G__50720 = (0);
seq__50677 = G__50717;
chunk__50678 = G__50718;
count__50679 = G__50719;
i__50680 = G__50720;
continue;
} else {
var c = cljs.core.first.call(null,seq__50677__$1);
ob$core$gather.call(null,c);


var G__50721 = cljs.core.next.call(null,seq__50677__$1);
var G__50722 = null;
var G__50723 = (0);
var G__50724 = (0);
seq__50677 = G__50721;
chunk__50678 = G__50722;
count__50679 = G__50723;
i__50680 = G__50724;
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

(ob.core.t_ob$core50670.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));

var seq__50685 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__50686 = null;
var count__50687 = (0);
var i__50688 = (0);
while(true){
if((i__50688 < count__50687)){
var c = cljs.core._nth.call(null,chunk__50686,i__50688);
ob$core$gather.call(null,c);


var G__50725 = seq__50685;
var G__50726 = chunk__50686;
var G__50727 = count__50687;
var G__50728 = (i__50688 + (1));
seq__50685 = G__50725;
chunk__50686 = G__50726;
count__50687 = G__50727;
i__50688 = G__50728;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50685);
if(temp__5720__auto__){
var seq__50685__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50685__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50685__$1);
var G__50729 = cljs.core.chunk_rest.call(null,seq__50685__$1);
var G__50730 = c__4679__auto__;
var G__50731 = cljs.core.count.call(null,c__4679__auto__);
var G__50732 = (0);
seq__50685 = G__50729;
chunk__50686 = G__50730;
count__50687 = G__50731;
i__50688 = G__50732;
continue;
} else {
var c = cljs.core.first.call(null,seq__50685__$1);
ob$core$gather.call(null,c);


var G__50733 = cljs.core.next.call(null,seq__50685__$1);
var G__50734 = null;
var G__50735 = (0);
var G__50736 = (0);
seq__50685 = G__50733;
chunk__50686 = G__50734;
count__50687 = G__50735;
i__50688 = G__50736;
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

(ob.core.t_ob$core50670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"meta50671","meta50671",-77523082,null)], null);
}));

(ob.core.t_ob$core50670.cljs$lang$type = true);

(ob.core.t_ob$core50670.cljs$lang$ctorStr = "ob.core/t_ob$core50670");

(ob.core.t_ob$core50670.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core50670");
}));

/**
 * Positional factory function for ob.core/t_ob$core50670.
 */
ob.core.__GT_t_ob$core50670 = (function ob$core$__GT_t_ob$core50670(k__$1,node_id__$1,meta50671){
return (new ob.core.t_ob$core50670(k__$1,node_id__$1,meta50671));
});

}

return (new ob.core.t_ob$core50670(k,node_id,null));
}));


ob.core.desc_nodes_select_STAR_ = (function ob$core$desc_nodes_select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$desc_nodes_select_STAR__$_gather(k__$1){
var datum = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null));
var ci = ob.core.datum__GT_child_ids.call(null,datum);
if(cljs.core.seq.call(null,ci)){
var seq__50741 = cljs.core.seq.call(null,ci);
var chunk__50742 = null;
var count__50743 = (0);
var i__50744 = (0);
while(true){
if((i__50744 < count__50743)){
var c = cljs.core._nth.call(null,chunk__50742,i__50744);
ob$core$desc_nodes_select_STAR__$_gather.call(null,c);


var G__50772 = seq__50741;
var G__50773 = chunk__50742;
var G__50774 = count__50743;
var G__50775 = (i__50744 + (1));
seq__50741 = G__50772;
chunk__50742 = G__50773;
count__50743 = G__50774;
i__50744 = G__50775;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50741);
if(temp__5720__auto__){
var seq__50741__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50741__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50741__$1);
var G__50776 = cljs.core.chunk_rest.call(null,seq__50741__$1);
var G__50777 = c__4679__auto__;
var G__50778 = cljs.core.count.call(null,c__4679__auto__);
var G__50779 = (0);
seq__50741 = G__50776;
chunk__50742 = G__50777;
count__50743 = G__50778;
i__50744 = G__50779;
continue;
} else {
var c = cljs.core.first.call(null,seq__50741__$1);
ob$core$desc_nodes_select_STAR__$_gather.call(null,c);


var G__50780 = cljs.core.next.call(null,seq__50741__$1);
var G__50781 = null;
var G__50782 = (0);
var G__50783 = (0);
seq__50741 = G__50780;
chunk__50742 = G__50781;
count__50743 = G__50782;
i__50744 = G__50783;
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
var seq__50749 = cljs.core.seq.call(null,ci);
var chunk__50750 = null;
var count__50751 = (0);
var i__50752 = (0);
while(true){
if((i__50752 < count__50751)){
var c = cljs.core._nth.call(null,chunk__50750,i__50752);
ob$core$desc_nodes_transform_STAR__$_gather.call(null,c);


var G__50784 = seq__50749;
var G__50785 = chunk__50750;
var G__50786 = count__50751;
var G__50787 = (i__50752 + (1));
seq__50749 = G__50784;
chunk__50750 = G__50785;
count__50751 = G__50786;
i__50752 = G__50787;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50749);
if(temp__5720__auto__){
var seq__50749__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50749__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50749__$1);
var G__50788 = cljs.core.chunk_rest.call(null,seq__50749__$1);
var G__50789 = c__4679__auto__;
var G__50790 = cljs.core.count.call(null,c__4679__auto__);
var G__50791 = (0);
seq__50749 = G__50788;
chunk__50750 = G__50789;
count__50751 = G__50790;
i__50752 = G__50791;
continue;
} else {
var c = cljs.core.first.call(null,seq__50749__$1);
ob$core$desc_nodes_transform_STAR__$_gather.call(null,c);


var G__50792 = cljs.core.next.call(null,seq__50749__$1);
var G__50793 = null;
var G__50794 = (0);
var G__50795 = (0);
seq__50749 = G__50792;
chunk__50750 = G__50793;
count__50751 = G__50794;
i__50752 = G__50795;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core50753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core50753 = (function (k,meta50754){
this.k = k;
this.meta50754 = meta50754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core50753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50755,meta50754__$1){
var self__ = this;
var _50755__$1 = this;
return (new ob.core.t_ob$core50753(self__.k,meta50754__$1));
}));

(ob.core.t_ob$core50753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50755){
var self__ = this;
var _50755__$1 = this;
return self__.meta50754;
}));

(ob.core.t_ob$core50753.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core50753.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$gather(k__$1){
var datum = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null));
var ci = ob.core.datum__GT_child_ids.call(null,datum);
if(cljs.core.seq.call(null,ci)){
var seq__50760 = cljs.core.seq.call(null,ci);
var chunk__50761 = null;
var count__50762 = (0);
var i__50763 = (0);
while(true){
if((i__50763 < count__50762)){
var c = cljs.core._nth.call(null,chunk__50761,i__50763);
ob$core$gather.call(null,c);


var G__50796 = seq__50760;
var G__50797 = chunk__50761;
var G__50798 = count__50762;
var G__50799 = (i__50763 + (1));
seq__50760 = G__50796;
chunk__50761 = G__50797;
count__50762 = G__50798;
i__50763 = G__50799;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50760);
if(temp__5720__auto__){
var seq__50760__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50760__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50760__$1);
var G__50800 = cljs.core.chunk_rest.call(null,seq__50760__$1);
var G__50801 = c__4679__auto__;
var G__50802 = cljs.core.count.call(null,c__4679__auto__);
var G__50803 = (0);
seq__50760 = G__50800;
chunk__50761 = G__50801;
count__50762 = G__50802;
i__50763 = G__50803;
continue;
} else {
var c = cljs.core.first.call(null,seq__50760__$1);
ob$core$gather.call(null,c);


var G__50804 = cljs.core.next.call(null,seq__50760__$1);
var G__50805 = null;
var G__50806 = (0);
var G__50807 = (0);
seq__50760 = G__50804;
chunk__50761 = G__50805;
count__50762 = G__50806;
i__50763 = G__50807;
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

(ob.core.t_ob$core50753.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
var datum = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null));
var ci = ob.core.datum__GT_child_ids.call(null,datum);
if(cljs.core.seq.call(null,ci)){
var seq__50768 = cljs.core.seq.call(null,ci);
var chunk__50769 = null;
var count__50770 = (0);
var i__50771 = (0);
while(true){
if((i__50771 < count__50770)){
var c = cljs.core._nth.call(null,chunk__50769,i__50771);
ob$core$gather.call(null,c);


var G__50808 = seq__50768;
var G__50809 = chunk__50769;
var G__50810 = count__50770;
var G__50811 = (i__50771 + (1));
seq__50768 = G__50808;
chunk__50769 = G__50809;
count__50770 = G__50810;
i__50771 = G__50811;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__50768);
if(temp__5720__auto__){
var seq__50768__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50768__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__50768__$1);
var G__50812 = cljs.core.chunk_rest.call(null,seq__50768__$1);
var G__50813 = c__4679__auto__;
var G__50814 = cljs.core.count.call(null,c__4679__auto__);
var G__50815 = (0);
seq__50768 = G__50812;
chunk__50769 = G__50813;
count__50770 = G__50814;
i__50771 = G__50815;
continue;
} else {
var c = cljs.core.first.call(null,seq__50768__$1);
ob$core$gather.call(null,c);


var G__50816 = cljs.core.next.call(null,seq__50768__$1);
var G__50817 = null;
var G__50818 = (0);
var G__50819 = (0);
seq__50768 = G__50816;
chunk__50769 = G__50817;
count__50770 = G__50818;
i__50771 = G__50819;
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

(ob.core.t_ob$core50753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta50754","meta50754",-1369839988,null)], null);
}));

(ob.core.t_ob$core50753.cljs$lang$type = true);

(ob.core.t_ob$core50753.cljs$lang$ctorStr = "ob.core/t_ob$core50753");

(ob.core.t_ob$core50753.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core50753");
}));

/**
 * Positional factory function for ob.core/t_ob$core50753.
 */
ob.core.__GT_t_ob$core50753 = (function ob$core$__GT_t_ob$core50753(k__$1,meta50754){
return (new ob.core.t_ob$core50753(k__$1,meta50754));
});

}

return (new ob.core.t_ob$core50753(k,null));
}));
ob.core.gen_paren_datum = (function ob$core$gen_paren_datum(parent_id,text,depth,tag){
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-bracket"].join(''),tag,"bracket"]),new cljs.core.Keyword(null,"name","name",1843675177),text], null)]);
});
ob.core.add_paren_data = (function ob$core$add_paren_data(data_row,p__50820){
var map__50821 = p__50820;
var map__50821__$1 = cljs.core.__destructure_map.call(null,map__50821);
var id = cljs.core.get.call(null,map__50821__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__50821__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__50821__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var vec__50822 = parens;
var op = cljs.core.nth.call(null,vec__50822,(0),null);
var cl = cljs.core.nth.call(null,vec__50822,(1),null);
var op_paren = ob.core.gen_paren_datum.call(null,id,op,depth,"opening");
var cl_paren = ob.core.gen_paren_datum.call(null,id,cl,depth,"closing");
var parens__$1 = cljs.core.merge.call(null,op_paren,cl_paren);
var paren_ids = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50825;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50826 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(749),(752),cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null));
ob.core.pathcache50825 = info50826;

return info50826;
})():info__17580__auto__);
var precompiled50827 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50827.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null),com.rpl.specter.MAP_KEYS], null));
} else {
return precompiled50827;
}
})(),parens__$1);
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.assoc.call(null,data_row,new cljs.core.Keyword(null,"parens","parens",1028661830),paren_ids)]),op_paren,cl_paren);
});
ob.core.macro__GT_pos_type = (function ob$core$macro__GT_pos_type(op){
var G__50828 = op;
var G__50828__$1 = (((G__50828 instanceof cljs.core.Keyword))?G__50828.fqn:null);
switch (G__50828__$1) {
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
var pred__50832 = (function (p1__50830_SHARP_,p2__50831_SHARP_){
return cljs.core.get.call(null,p1__50830_SHARP_,p2__50831_SHARP_);
});
var expr__50833 = op;
if(cljs.core.truth_(pred__50832.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"let","let",-1282412701),null,new cljs.core.Keyword(null,"loop","loop",-395552849),null], null), null),expr__50833))){
return new cljs.core.Keyword(null,"let","let",-1282412701);
} else {
if(cljs.core.truth_(pred__50832.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"macroexpand","macroexpand",-130598183),null], null), null),expr__50833))){
return ob.core.macro__GT_pos_type.call(null,op);
} else {
return op;
}
}
});
ob.core.sel__GT_datum = (function ob$core$sel__GT_datum(p__50835){
var map__50836 = p__50835;
var map__50836__$1 = cljs.core.__destructure_map.call(null,map__50836);
var sel = map__50836__$1;
var id = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var type = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var parent_id = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var child_ids = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
var parens = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var pos_type = ob.core.op__GT_pos_type.call(null,op);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"depth","depth",1768663640)],[child_ids,name,op,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"100%"], null),pos_type,id,cljs.core.PersistentHashSet.createAsIfByAssoc([type,op]),parent_id,depth]);
});
ob.core.ast__GT_data = (function ob$core$ast__GT_data(var_args){
var G__50838 = arguments.length;
switch (G__50838) {
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
var sel = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50839;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50840 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_DESC,new cljs.core.Var(function(){return ob.core.AST_DESC;},new cljs.core.Symbol("ob.core","AST-DESC","ob.core/AST-DESC",-1179528306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),"src/ob/core.cljs",14,1,93,93,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_DESC)?ob.core.AST_DESC.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092)))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092))], null),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)], null));
ob.core.pathcache50839 = info50840;

return info50840;
})():info__17580__auto__);
var precompiled50841 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50841.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.AST_DESC,com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null),ob.core.AST_DESC,com.rpl.specter.pred], null));
} else {
return precompiled50841;
}
})(),ast);
var iter__4652__auto__ = (function ob$core$iter__50842(s__50843){
return (new cljs.core.LazySeq(null,(function (){
var s__50843__$1 = s__50843;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__50843__$1);
if(temp__5720__auto__){
var s__50843__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50843__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__50843__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__50845 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__50844 = (0);
while(true){
if((i__50844 < size__4651__auto__)){
var map__50846 = cljs.core._nth.call(null,c__4650__auto__,i__50844);
var map__50846__$1 = cljs.core.__destructure_map.call(null,map__50846);
var s = map__50846__$1;
var id__$1 = cljs.core.get.call(null,map__50846__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__50846__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
cljs.core.chunk_append.call(null,b__50845,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})());

var G__50849 = (i__50844 + (1));
i__50844 = G__50849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50845),ob$core$iter__50842.call(null,cljs.core.chunk_rest.call(null,s__50843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50845),null);
}
} else {
var map__50847 = cljs.core.first.call(null,s__50843__$2);
var map__50847__$1 = cljs.core.__destructure_map.call(null,map__50847);
var s = map__50847__$1;
var id__$1 = cljs.core.get.call(null,map__50847__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__50847__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
return cljs.core.cons.call(null,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})(),ob$core$iter__50842.call(null,cljs.core.rest.call(null,s__50843__$2)));
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50850;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50851 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.keys,new cljs.core.Var(function(){return cljs.core.keys;},new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),"cljs/core.cljs",(11),(1),(9050),(9050),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",-1282745308,null)], null)),"Returns a sequence of the map's keys, in the same order as (seq map).",(cljs.core.truth_(cljs.core.keys)?cljs.core.keys.cljs$lang$test:null)])),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,dims,new cljs.core.Symbol(null,"dims","dims",1174008638,null))], null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dims","dims",1174008638,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null))),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache50850 = info50851;

return info50851;
})():info__17580__auto__);
var precompiled50852 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50852.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,cljs.core.keys.call(null,dims)),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.submap,cljs.core.keys,dims,com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one], null));
} else {
return precompiled50852;
}
})(),f,db);
});
ob.core.get_trs_data = (function ob$core$get_trs_data(var_args){
var G__50854 = arguments.length;
switch (G__50854) {
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
var trs_data = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50855;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50856 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache50855 = info50856;

return info50856;
})():info__17580__auto__);
var precompiled50857 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50857.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled50857;
}
})(),f_STAR_,data);
var max_time = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50858;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50859 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"total","total",1916810418)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"total","total",1916810418)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache50858 = info50859;

return info50859;
})():info__17580__auto__);
var precompiled50860 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50860.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"total","total",1916810418)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled50860;
}
})(),trs_data));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),trs_data,new cljs.core.Keyword(null,"time","time",1385887882),max_time], null);
}));

(ob.core.get_trs_data.cljs$lang$maxFixedArity = 3);

ob.core.trs_by_depth = (function ob$core$trs_by_depth(f){
return (function (data){
var max_depth = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50862;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50863 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache50862 = info50863;

return info50863;
})():info__17580__auto__);
var precompiled50864 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50864.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled50864;
}
})(),data));
var interval = ((10) / max_depth);
return ob.core.get_trs_data.call(null,data,(function (p__50865){
var map__50866 = p__50865;
var map__50866__$1 = cljs.core.__destructure_map.call(null,map__50866);
var depth = cljs.core.get.call(null,map__50866__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
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
var G__50868 = arguments.length;
switch (G__50868) {
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50869;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50870 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.DATA,new cljs.core.Var(function(){return ob.core.DATA;},new cljs.core.Symbol("ob.core","DATA","ob.core/DATA",1547210987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),"src/ob/core.cljs",10,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.DATA)?ob.core.DATA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)], null),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)], null));
ob.core.pathcache50869 = info50870;

return info50870;
})():info__17580__auto__);
var precompiled50871 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50871.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.DATA], null),ob.core.DATA], null));
} else {
return precompiled50871;
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
cljs.core._add_method.call(null,ob.core.gen_styles,new cljs.core.Keyword(null,"fade","fade",1167694157),(function (_,p__50873,p__50874){
var map__50875 = p__50873;
var map__50875__$1 = cljs.core.__destructure_map.call(null,map__50875);
var children = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var map__50876 = p__50874;
var map__50876__$1 = cljs.core.__destructure_map.call(null,map__50876);
var opacity = cljs.core.get.call(null,map__50876__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2);
if(cljs.core.truth_(children)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity], null);
}
}));
ob.core.update_depth = (function ob$core$update_depth(id,data){
var root_depth = (function (){var depth = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(id.call(null,data));
if((depth === (0))){
return (1);
} else {
return depth;
}
})();
var f = (function (depth){
return (depth - root_depth);
});
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50877;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50878 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache50877 = info50878;

return info50878;
})():info__17580__auto__);
var precompiled50879 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50879.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled50879;
}
})(),f,data);
});
ob.core.idx_clj__GT_data = (function ob$core$idx_clj__GT_data(form){
return cljs.core.apply.call(null,cljs.core.merge,ob.core.ast__GT_data.call(null,ob.analyzer.analyze.call(null,form,cljs.core.PersistentArrayMap.EMPTY)));
});
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"prev","prev",-1597069226),(function (p__50880){
var map__50881 = p__50880;
var map__50881__$1 = cljs.core.__destructure_map.call(null,map__50881);
var db = map__50881__$1;
var vs = cljs.core.get.call(null,map__50881__$1,new cljs.core.Keyword(null,"db-versions","db-versions",1746119480));
var id = cljs.core.get.call(null,map__50881__$1,new cljs.core.Keyword(null,"curr-db-id","curr-db-id",2093043383));
var id__$1 = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50882;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50883 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.core.pathcache50882 = info50883;

return info50883;
})():info__17580__auto__);
var precompiled50884 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50884.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id,new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),id], null));
} else {
return precompiled50884;
}
})(),db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"rewind","rewind",-669264915),(function (p__50885){
var map__50886 = p__50885;
var map__50886__$1 = cljs.core.__destructure_map.call(null,map__50886);
var db = map__50886__$1;
var vs = cljs.core.get.call(null,map__50886__$1,new cljs.core.Keyword(null,"db-versions","db-versions",1746119480));
var id = cljs.core.get.call(null,map__50886__$1,new cljs.core.Keyword(null,"curr-db-id","curr-db-id",2093043383));
var id__$1 = id;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var id__$2 = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50890;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50891 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id__$1,new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.core.pathcache50890 = info50891;

return info50891;
})():info__17580__auto__);
var precompiled50892 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50892.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),id__$1], null));
} else {
return precompiled50892;
}
})(),vs);
if((id__$2 == null)){
return acc;
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(id__$2.call(null,vs)),new cljs.core.Keyword(null,"step","step",1288888124))){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$2], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null));
} else {
var G__50893 = id__$2;
var G__50894 = cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$2], null));
id__$1 = G__50893;
acc = G__50894;
continue;

}
}
break;
}
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"fastforward","fastforward",-1913774852),(function (p__50895){
var map__50896 = p__50895;
var map__50896__$1 = cljs.core.__destructure_map.call(null,map__50896);
var db = map__50896__$1;
var vs = cljs.core.get.call(null,map__50896__$1,new cljs.core.Keyword(null,"db-versions","db-versions",1746119480));
var id = cljs.core.get.call(null,map__50896__$1,new cljs.core.Keyword(null,"curr-db-id","curr-db-id",2093043383));
var id__$1 = id;
var seen_step_QMARK_ = false;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var id__$2 = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50900;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50901 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id__$1,new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.core.pathcache50900 = info50901;

return info50901;
})():info__17580__auto__);
var precompiled50902 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50902.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),id__$1], null));
} else {
return precompiled50902;
}
})(),vs);
if((id__$2 == null)){
return acc;
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(id__$2.call(null,vs)),new cljs.core.Keyword(null,"step","step",1288888124))){
if(cljs.core.truth_(seen_step_QMARK_)){
return acc;
} else {
var G__50903 = id__$2;
var G__50904 = true;
var G__50905 = cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$2], null));
id__$1 = G__50903;
seen_step_QMARK_ = G__50904;
acc = G__50905;
continue;
}
} else {
var G__50906 = id__$2;
var G__50907 = seen_step_QMARK_;
var G__50908 = cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$2], null));
id__$1 = G__50906;
seen_step_QMARK_ = G__50907;
acc = G__50908;
continue;

}
}
break;
}
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword("clj","append","clj/append",-291199060),(function (p__50909){
var map__50910 = p__50909;
var map__50910__$1 = cljs.core.__destructure_map.call(null,map__50910);
var code = cljs.core.get.call(null,map__50910__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var idx_QMARK_ = cljs.core.get.call(null,map__50910__$1,new cljs.core.Keyword(null,"indexed?","indexed?",-405921143),false);
var code__$1 = (cljs.core.truth_(idx_QMARK_)?code:ob.utils.walk_ids.call(null,code));
var data = ob.core.idx_clj__GT_data.call(null,code__$1);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,code__$1));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.Keyword("id","parent","id/parent",-878874974),id,new cljs.core.Keyword(null,"time","time",1385887882),(1),new cljs.core.Keyword(null,"data","data",-232669377),data], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"symbol-resolve","symbol-resolve",128792823),(function (p__50911){
var map__50912 = p__50911;
var map__50912__$1 = cljs.core.__destructure_map.call(null,map__50912);
var new$ = cljs.core.get.call(null,map__50912__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var id_old = cljs.core.get.call(null,map__50912__$1,new cljs.core.Keyword(null,"id-old","id-old",1607678379));
var id_new = cljs.core.get.call(null,map__50912__$1,new cljs.core.Keyword(null,"id-new","id-new",1978088391));
var id_new_STAR_ = cljs.core.get.call(null,map__50912__$1,new cljs.core.Keyword(null,"id-new*","id-new*",-999568836));
var dom = cljs.core.get.call(null,map__50912__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var new_data = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),ob.core.update_depth.call(null,id_new_STAR_,ob.core.idx_clj__GT_data.call(null,new$)));
var new_expanded = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"expand","expand",595248157),new_data);
var old_data = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50913;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50914 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc,new cljs.core.Var(function(){return ob.core.desc;},new cljs.core.Symbol("ob.core","desc","ob.core/desc",1690967277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc","desc",-560950005,null),"src/ob/core.cljs",13,1,155,155,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc)?ob.core.desc.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc","desc",-560950005,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_old,new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null)], null));
ob.core.pathcache50913 = info50914;

return info50914;
})():info__17580__auto__);
var precompiled50915 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50915.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc,id_old], null));
} else {
return precompiled50915;
}
})(),dom));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),old_data,new cljs.core.Keyword(null,"trs","trs",1104008633),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.createAsIfByAssoc([id_old,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(4),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null)]),new cljs.core.Keyword(null,"time","time",1385887882),(4)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"data","data",-232669377),new_data,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_old,new cljs.core.Keyword("id","post","id/post",269696948),id_new_STAR_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"data","data",-232669377),new_expanded,new cljs.core.Keyword(null,"trs","trs",1104008633),ob.core.expand.call(null,new_expanded)], null)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811),(function (p__50916){
var map__50917 = p__50916;
var map__50917__$1 = cljs.core.__destructure_map.call(null,map__50917);
var old = cljs.core.get.call(null,map__50917__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var id_old = cljs.core.get.call(null,map__50917__$1,new cljs.core.Keyword(null,"id-old","id-old",1607678379));
var new$ = cljs.core.get.call(null,map__50917__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var id_new = cljs.core.get.call(null,map__50917__$1,new cljs.core.Keyword(null,"id-new","id-new",1978088391));
var dom = cljs.core.get.call(null,map__50917__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var old_faded = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"fade","fade",1167694157),com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50918;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50919 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc_but_node,new cljs.core.Var(function(){return ob.core.desc_but_node;},new cljs.core.Symbol("ob.core","desc-but-node","ob.core/desc-but-node",105590132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),"src/ob/core.cljs",22,1,196,196,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc_but_node)?ob.core.desc_but_node.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_old,new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id_new,new cljs.core.Symbol(null,"id-new","id-new",-676347378,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)], null));
ob.core.pathcache50918 = info50919;

return info50919;
})():info__17580__auto__);
var precompiled50920 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50920.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc_but_node,id_old,id_new], null));
} else {
return precompiled50920;
}
})(),dom));
var old_faded_trs = ob.core.get_trs_data.call(null,old_faded,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(4),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
var old_contracted = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),old_faded);
var old_contracted_trs = ob.core.get_trs_data.call(null,old_contracted,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(10),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
var new_data = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50921;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50922 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc,new cljs.core.Var(function(){return ob.core.desc;},new cljs.core.Symbol("ob.core","desc","ob.core/desc",1690967277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc","desc",-560950005,null),"src/ob/core.cljs",13,1,155,155,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc)?ob.core.desc.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc","desc",-560950005,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_new,new cljs.core.Symbol(null,"id-new","id-new",-676347378,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)], null));
ob.core.pathcache50921 = info50922;

return info50922;
})():info__17580__auto__);
var precompiled50923 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50923.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc,id_new], null));
} else {
return precompiled50923;
}
})(),dom);
var new_trs = ob.core.get_trs_data.call(null,new_data,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(0),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),old_faded,new cljs.core.Keyword(null,"trs","trs",1104008633),old_faded_trs], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"data","data",-232669377),old_contracted,new cljs.core.Keyword(null,"trs","trs",1104008633),old_contracted_trs], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"data","data",-232669377),new_data,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_old,new cljs.core.Keyword("id","post","id/post",269696948),id_new,new cljs.core.Keyword(null,"trs","trs",1104008633),new_trs], null)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"replace-w-new-code","replace-w-new-code",1226585016),(function (p__50924){
var map__50925 = p__50924;
var map__50925__$1 = cljs.core.__destructure_map.call(null,map__50925);
var id_new_STAR_ = cljs.core.get.call(null,map__50925__$1,new cljs.core.Keyword(null,"id-new*","id-new*",-999568836));
var id_old = cljs.core.get.call(null,map__50925__$1,new cljs.core.Keyword(null,"id-old","id-old",1607678379));
var new$ = cljs.core.get.call(null,map__50925__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var dom = cljs.core.get.call(null,map__50925__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var data = ob.core.idx_clj__GT_data.call(null,new$);
var data__$1 = ob.core.update_depth.call(null,id_new_STAR_,data);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_old,new cljs.core.Keyword("id","post","id/post",269696948),id_new_STAR_], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-process","init-process",812674406),(function (db,p__50926){
var vec__50927 = p__50926;
var _ = cljs.core.nth.call(null,vec__50927,(0),null);
var stream = cljs.core.nth.call(null,vec__50927,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50930;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50931 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"process","process",1643192938)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"process","process",1643192938)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache50930 = info50931;

return info50931;
})():info__17580__auto__);
var precompiled50932 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50932.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"process","process",1643192938)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled50932;
}
})(),stream,db);
}));
ob.core.init_code_eval = (function ob$core$init_code_eval(form){
var stream = ob.clojure.form__GT_animation_stream.call(null,form);
ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-process","init-process",812674406),stream], null));

return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword("clj","append","clj/append",-291199060),new cljs.core.Keyword(null,"indexed?","indexed?",-405921143),true,new cljs.core.Keyword(null,"code","code",1586293142),form], null));
});
ob.core.completed_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811),null,new cljs.core.Keyword(null,"symbol-resolve","symbol-resolve",128792823),null,new cljs.core.Keyword(null,"replace-w-new-code","replace-w-new-code",1226585016),null], null), null);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"call-animation","call-animation",1732104032),(function (a){
if(cljs.core.truth_(ob.core.completed_QMARK_.call(null,new cljs.core.Keyword("op","frame","op/frame",-1711083195).cljs$core$IFn$_invoke$arity$1(a)))){
return ob.event_loop.animate_BANG_.call(null,a);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"trigger-next-event!","trigger-next-event!",165377769),(function (p__50933,_){
var map__50934 = p__50933;
var map__50934__$1 = cljs.core.__destructure_map.call(null,map__50934);
var db = cljs.core.get.call(null,map__50934__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50935;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50936 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache50935 = info50936;

return info50936;
})():info__17580__auto__);
var precompiled50937 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50937.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled50937;
}
})(),db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"call-animation","call-animation",1732104032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"fastforward","fastforward",-1913774852)], null)], null);
} else {
var vec__50938 = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50941;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50942 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"process","process",1643192938)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"process","process",1643192938)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache50941 = info50942;

return info50942;
})():info__17580__auto__);
var precompiled50943 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50943.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"process","process",1643192938)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled50943;
}
})(),db);
var seq__50939 = cljs.core.seq.call(null,vec__50938);
var first__50940 = cljs.core.first.call(null,seq__50939);
var seq__50939__$1 = cljs.core.next.call(null,seq__50939);
var a = first__50940;
var as = seq__50939__$1;
var db__$1 = com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50944;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50945 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"process","process",1643192938)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"process","process",1643192938)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache50944 = info50945;

return info50945;
})():info__17580__auto__);
var precompiled50946 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50946.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"process","process",1643192938)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled50946;
}
})(),as,db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"call-animation","call-animation",1732104032),a], null);
}
}));
ob.core.form = ob.utils.walk_ids.call(null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),new cljs.core.Symbol(null,"n","n",-2092305744,null)),(1),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(1))))))),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(4))));
ob.core.Y = cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"self","self",93102628,null)], null),cljs.core.list(new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"self","self",93102628,null))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"next","next",1522830042,null)], null),cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"next","next",1522830042,null)),new cljs.core.Symbol(null,"value","value",1946509744,null))))))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fact","fact",840714996,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),(1),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(1)))))))),(2));
ob.core.form_STAR_ = ob.utils.walk_ids.call(null,ob.core.Y);
ob.core.pause_button = (function ob$core$pause_button(){
var paused_QMARK_ = ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused?","paused?",-135058553)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-pause","toggle-pause",1648289919)], null));
})], null),paused_QMARK_], null);
});
ob.core.init_eval_button = (function ob$core$init_eval_button(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.core.init_code_eval.call(null,ob.core.form);
})], null),"Load Code"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.pause_button], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"rewind","rewind",-669264915)], null));
})], null),"<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger-next-event!","trigger-next-event!",165377769)], null));
})], null),">"], null)], null);
});
ob.core.init_processes = (function ob$core$init_processes(form){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword("clj","append","clj/append",-291199060),new cljs.core.Keyword(null,"indexed?","indexed?",-405921143),true,new cljs.core.Keyword(null,"code","code",1586293142),form], null),ob.clojure.form__GT_animation_stream.call(null,form));
});
ob.core.init_process = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id->process","id->process",-299053619),new cljs.core.PersistentArrayMap(null, 1, ["item-0",ob.core.init_processes.call(null,ob.core.form)], null)], null),new cljs.core.Keyword(null,"expo","expo",-610384546),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-0"], null)], null);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"processes","processes",-546984164),(function (db,_){
return new cljs.core.Keyword(null,"processes","processes",-546984164).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->process","id->process",-299053619),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processes","processes",-546984164)], null),(function (processes,p__50947){
var vec__50948 = p__50947;
var _ = cljs.core.nth.call(null,vec__50948,(0),null);
var id = cljs.core.nth.call(null,vec__50948,(1),null);
return cljs.core.get_in.call(null,processes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->process","id->process",-299053619),id], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"expos","expos",1279405588),(function (processes,_){
return cljs.core.get.call(null,processes,new cljs.core.Keyword(null,"expo","expo",-610384546));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"register-process","register-process",259685930),(function (db,p__50951){
var vec__50952 = p__50951;
var _ = cljs.core.nth.call(null,vec__50952,(0),null);
var id = cljs.core.nth.call(null,vec__50952,(1),null);
var next_id = cljs.core.nth.call(null,vec__50952,(2),null);
cljs.core.println.call(null,id);

cljs.core.println.call(null,next_id);

var vec__50955 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"id->process","id->process",-299053619),id], null));
var seq__50956 = cljs.core.seq.call(null,vec__50955);
var first__50957 = cljs.core.first.call(null,seq__50956);
var seq__50956__$1 = cljs.core.next.call(null,seq__50956);
var ___$1 = first__50957;
var fs = seq__50956__$1;
var db__$1 = cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"id->process","id->process",-299053619),next_id], null),fs);
var db__$2 = cljs.core.update.call(null,db__$1,new cljs.core.Keyword(null,"expo","expo",-610384546),cljs.core.conj,next_id);
return db__$2;
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"run!","run!",598952044),(function (f){
cljs.core.println.call(null,"###########################################");

return ob.event_loop.animate_BANG_.call(null,f);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run-the-process","run-the-process",-1440073837),(function (p__50958,p__50959){
var map__50960 = p__50958;
var map__50960__$1 = cljs.core.__destructure_map.call(null,map__50960);
var db = cljs.core.get.call(null,map__50960__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50961 = p__50959;
var _ = cljs.core.nth.call(null,vec__50961,(0),null);
var id = cljs.core.nth.call(null,vec__50961,(1),null);
var vec__50964 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"id->process","id->process",-299053619),id], null));
var seq__50965 = cljs.core.seq.call(null,vec__50964);
var first__50966 = cljs.core.first.call(null,seq__50965);
var seq__50965__$1 = cljs.core.next.call(null,seq__50965);
var f = first__50966;
var ___$1 = seq__50965__$1;
var fas = vec__50964;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run!","run!",598952044),f], null);
}));
ob.core.gen_trigger_fn = (function ob$core$gen_trigger_fn(init_QMARK_,id,next_id){
return (function (_){
return ob.scroll.set_scroll_trigger.call(null,id,(function (x){
if(((cljs.core.not.call(null,cljs.core.deref.call(null,init_QMARK_))) && (cljs.core._EQ_.call(null,"down",x)))){
cljs.core.println.call(null,"Expos ==============");

cljs.core.swap_BANG_.call(null,init_QMARK_,cljs.core.not);

ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-process","register-process",259685930),id,next_id], null));
} else {
}

if(cljs.core._EQ_.call(null,"down",x)){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"run-the-process","run-the-process",-1440073837),id], null));
} else {
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"rewind","rewind",-669264915)], null));
}
}));
});
});
ob.core.gen_div = (function ob$core$gen_div(id,k){
var next_id = cljs.core.gensym.call(null);
var init_QMARK_ = reagent.core.atom.call(null,false);
var vec__50967 = ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->process","id->process",-299053619),id], null));
var seq__50968 = cljs.core.seq.call(null,vec__50967);
var first__50969 = cljs.core.first.call(null,seq__50968);
var seq__50968__$1 = cljs.core.next.call(null,seq__50968);
var f = first__50969;
var _ = seq__50968__$1;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (___$1){
cljs.core.println.call(null,"Updated");

return cljs.core.println.call(null,id);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),ob.core.gen_trigger_fn.call(null,init_QMARK_,id,next_id),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id__$1,k__$1){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Entering : ",id__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Method : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Old Form : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"old","old",-1825222690).cljs$core$IFn$_invoke$arity$1(f))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"New Form : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(f))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Enviroment : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(f))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Exiting :",id__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id__$1], null));
})], null));
});
ob.core.gen_expostion_hiccup = (function ob$core$gen_expostion_hiccup(){
var expos = ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expos","expos",1279405588)], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50%"], null)], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (e,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.gen_div,e,cljs.core.identity], null);
}),expos,cljs.core.range.call(null))));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-db","current-db",213667882),(function (db,_){
return com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50970;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50971 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null))], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache50970 = info50971;

return info50971;
})():info__17580__auto__);
var precompiled50972 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50972.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB], null));
} else {
return precompiled50972;
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
var G__50973 = display;
var G__50974 = redirect_id;
display = G__50973;
id = G__50974;
continue;
} else {
return datum;
}
break;
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->data","id->data",-1544872090),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-display","current-display",1699487712)], null),(function (display,p__50975){
var vec__50976 = p__50975;
var _ = cljs.core.nth.call(null,vec__50976,(0),null);
var id = cljs.core.nth.call(null,vec__50976,(1),null);
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
ob.core.init_animation_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"standard-block","standard-block",-1122377837),(3000),new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344),(200),new cljs.core.Keyword(null,"paused?","paused?",-135058553),false,new cljs.core.Keyword(null,"animation-history","animation-history",-639170567),cljs.core.PersistentArrayMap.EMPTY], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
var db = cljs.core.merge.call(null,ob.db_nav.init_db,ob.core.init_animation_params,ob.core.init_process);
var db__$1 = com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache50979;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info50980 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache50979 = info50980;

return info50980;
})():info__17580__auto__);
var precompiled50981 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled50981.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled50981;
}
})(),ob.core.init_display,db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"init-event-loop!","init-event-loop!",658209208),null], null);
}));
ob.core.init = (function ob$core$init(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
});
/**
 * Shorthand for generating
 * the style / attr map.
 */
ob.core.$ = (function ob$core$$(var_args){
var G__50983 = arguments.length;
switch (G__50983) {
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
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#text-col","div#text-col",-681412085),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"There is some exposition... here is some more exposition....\n     and now here is a ridiculously long word fmwk,;'f,ew;l'dffwm;lk'fkwefwelkfmk"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"Next line"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"add-code","add-code",1030596725),new cljs.core.Keyword(null,"code","code",1586293142),ob.core.sample_code], null));
})], null),"Add code"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"contract","contract",798152745)], null));
})], null),"Contract"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"expand","expand",595248157)], null));
})], null),"Expand"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Animation Speed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"value","value",305978217),ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trs-speed-slider-val","trs-speed-slider-val",-1390043057)], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__50985_SHARP_){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-trs-speed","update-trs-speed",-485374553),p1__50985_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.init_eval_button], null)], null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-trs-speed","update-trs-speed",-485374553),(function (db,p__50986){
var vec__50987 = p__50986;
var _ = cljs.core.nth.call(null,vec__50987,(0),null);
var speed = cljs.core.nth.call(null,vec__50987,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344),speed);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"trs-speed-slider-val","trs-speed-slider-val",-1390043057),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"trs-speed","trs-speed",1277725344));
}));
ob.core.code_col = (function ob$core$code_col(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"top","top",-1856271961),"30px",new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"border","border",1444987323),"solid 2px white"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"code-col"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,new cljs.core.Keyword(null,"root","root",-448657453),null], null)], null);
});
ob.core.main_page = (function ob$core$main_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-page","div#main-page",973942128),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"10000px"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"token"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Ouroboros"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.gen_expostion_hiccup], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.code_col], null)], null)], null);
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
var vec__50991 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__50991,(0),null);
var left = cljs.core.nth.call(null,vec__50991,(1),null);
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
var seq__50995_51027 = cljs.core.seq.call(null,styles);
var chunk__50996_51028 = null;
var count__50997_51029 = (0);
var i__50998_51030 = (0);
while(true){
if((i__50998_51030 < count__50997_51029)){
var vec__51005_51031 = cljs.core._nth.call(null,chunk__50996_51028,i__50998_51030);
var k_51032 = cljs.core.nth.call(null,vec__51005_51031,(0),null);
var v_51033 = cljs.core.nth.call(null,vec__51005_51031,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_51032))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_51032,selection.selection().style(k_51032));
} else {
}

selection.style(k_51032,v_51033);


var G__51034 = seq__50995_51027;
var G__51035 = chunk__50996_51028;
var G__51036 = count__50997_51029;
var G__51037 = (i__50998_51030 + (1));
seq__50995_51027 = G__51034;
chunk__50996_51028 = G__51035;
count__50997_51029 = G__51036;
i__50998_51030 = G__51037;
continue;
} else {
var temp__5720__auto___51038 = cljs.core.seq.call(null,seq__50995_51027);
if(temp__5720__auto___51038){
var seq__50995_51039__$1 = temp__5720__auto___51038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50995_51039__$1)){
var c__4679__auto___51040 = cljs.core.chunk_first.call(null,seq__50995_51039__$1);
var G__51041 = cljs.core.chunk_rest.call(null,seq__50995_51039__$1);
var G__51042 = c__4679__auto___51040;
var G__51043 = cljs.core.count.call(null,c__4679__auto___51040);
var G__51044 = (0);
seq__50995_51027 = G__51041;
chunk__50996_51028 = G__51042;
count__50997_51029 = G__51043;
i__50998_51030 = G__51044;
continue;
} else {
var vec__51008_51045 = cljs.core.first.call(null,seq__50995_51039__$1);
var k_51046 = cljs.core.nth.call(null,vec__51008_51045,(0),null);
var v_51047 = cljs.core.nth.call(null,vec__51008_51045,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_51046))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_51046,selection.selection().style(k_51046));
} else {
}

selection.style(k_51046,v_51047);


var G__51048 = cljs.core.next.call(null,seq__50995_51039__$1);
var G__51049 = null;
var G__51050 = (0);
var G__51051 = (0);
seq__50995_51027 = G__51048;
chunk__50996_51028 = G__51049;
count__50997_51029 = G__51050;
i__50998_51030 = G__51051;
continue;
}
} else {
}
}
break;
}
} else {
var seq__51011_51052 = cljs.core.seq.call(null,styles);
var chunk__51012_51053 = null;
var count__51013_51054 = (0);
var i__51014_51055 = (0);
while(true){
if((i__51014_51055 < count__51013_51054)){
var vec__51021_51056 = cljs.core._nth.call(null,chunk__51012_51053,i__51014_51055);
var k_51057 = cljs.core.nth.call(null,vec__51021_51056,(0),null);
var __51058 = cljs.core.nth.call(null,vec__51021_51056,(1),null);
selection.style(k_51057,cljs.core.deref.call(null,coords).call(null,k_51057));


var G__51059 = seq__51011_51052;
var G__51060 = chunk__51012_51053;
var G__51061 = count__51013_51054;
var G__51062 = (i__51014_51055 + (1));
seq__51011_51052 = G__51059;
chunk__51012_51053 = G__51060;
count__51013_51054 = G__51061;
i__51014_51055 = G__51062;
continue;
} else {
var temp__5720__auto___51063 = cljs.core.seq.call(null,seq__51011_51052);
if(temp__5720__auto___51063){
var seq__51011_51064__$1 = temp__5720__auto___51063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51011_51064__$1)){
var c__4679__auto___51065 = cljs.core.chunk_first.call(null,seq__51011_51064__$1);
var G__51066 = cljs.core.chunk_rest.call(null,seq__51011_51064__$1);
var G__51067 = c__4679__auto___51065;
var G__51068 = cljs.core.count.call(null,c__4679__auto___51065);
var G__51069 = (0);
seq__51011_51052 = G__51066;
chunk__51012_51053 = G__51067;
count__51013_51054 = G__51068;
i__51014_51055 = G__51069;
continue;
} else {
var vec__51024_51070 = cljs.core.first.call(null,seq__51011_51064__$1);
var k_51071 = cljs.core.nth.call(null,vec__51024_51070,(0),null);
var __51072 = cljs.core.nth.call(null,vec__51024_51070,(1),null);
selection.style(k_51071,cljs.core.deref.call(null,coords).call(null,k_51071));


var G__51073 = cljs.core.next.call(null,seq__51011_51064__$1);
var G__51074 = null;
var G__51075 = (0);
var G__51076 = (0);
seq__51011_51052 = G__51073;
chunk__51012_51053 = G__51074;
count__51013_51054 = G__51075;
i__51014_51055 = G__51076;
continue;
}
} else {
}
}
break;
}
}
}catch (e50994){if((e50994 instanceof Error)){
var e_51077 = e50994;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e50994;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51079 = arguments.length;
var i__4865__auto___51080 = (0);
while(true){
if((i__4865__auto___51080 < len__4864__auto___51079)){
args__4870__auto__.push((arguments[i__4865__auto___51080]));

var G__51081 = (i__4865__auto___51080 + (1));
i__4865__auto___51080 = G__51081;
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
(ob.core.compose.cljs$lang$applyTo = (function (seq51078){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51078));
}));

ob.core._transition = (function ob$core$_transition(p__51084){
var map__51085 = p__51084;
var map__51085__$1 = cljs.core.__destructure_map.call(null,map__51085);
var delay = cljs.core.get.call(null,map__51085__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__51085__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__51086 = s__$1;
var G__51086__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__51086(p1__51082_SHARP_){
return p1__51082_SHARP_.delay(delay);
}):G__51086);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__51086(p1__51083_SHARP_){
return p1__51083_SHARP_.duration(duration);
});
} else {
return G__51086__$1;
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
var len__4864__auto___51093 = arguments.length;
var i__4865__auto___51094 = (0);
while(true){
if((i__4865__auto___51094 < len__4864__auto___51093)){
args__4870__auto__.push((arguments[i__4865__auto___51094]));

var G__51095 = (i__4865__auto___51094 + (1));
i__4865__auto___51094 = G__51095;
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
var seq__51089 = cljs.core.seq.call(null,fs);
var chunk__51090 = null;
var count__51091 = (0);
var i__51092 = (0);
while(true){
if((i__51092 < count__51091)){
var f__$1 = cljs.core._nth.call(null,chunk__51090,i__51092);
f__$1.call(null,sel,ff_QMARK_);


var G__51096 = seq__51089;
var G__51097 = chunk__51090;
var G__51098 = count__51091;
var G__51099 = (i__51092 + (1));
seq__51089 = G__51096;
chunk__51090 = G__51097;
count__51091 = G__51098;
i__51092 = G__51099;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__51089);
if(temp__5720__auto__){
var seq__51089__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51089__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__51089__$1);
var G__51100 = cljs.core.chunk_rest.call(null,seq__51089__$1);
var G__51101 = c__4679__auto__;
var G__51102 = cljs.core.count.call(null,c__4679__auto__);
var G__51103 = (0);
seq__51089 = G__51100;
chunk__51090 = G__51101;
count__51091 = G__51102;
i__51092 = G__51103;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__51089__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__51104 = cljs.core.next.call(null,seq__51089__$1);
var G__51105 = null;
var G__51106 = (0);
var G__51107 = (0);
seq__51089 = G__51104;
chunk__51090 = G__51105;
count__51091 = G__51106;
i__51092 = G__51107;
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
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq51087){
var G__51088 = cljs.core.first.call(null,seq51087);
var seq51087__$1 = cljs.core.next.call(null,seq51087);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51088,seq51087__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__51109 = arguments.length;
switch (G__51109) {
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
var vec__51110 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__51110,(0),null);
var l = cljs.core.nth.call(null,vec__51110,(1),null);
var w = cljs.core.nth.call(null,vec__51110,(2),null);
var h = cljs.core.nth.call(null,vec__51110,(3),null);
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
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache51114;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info51115 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(826),(828),cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
ob.core.pathcache51114 = info51115;

return info51115;
})():info__17580__auto__);
var precompiled51116 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled51116.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.END], null),com.rpl.specter.END], null));
} else {
return precompiled51116;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.apply.call(null,cljs.core.merge,db,data));
});
/**
 * Prewalks the structure, but inserts the transformed branch
 *   as the first argument to the leaf nodes.
 */
ob.core.PARA = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache51117;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info51118 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.DISPENSE,new cljs.core.Var(function(){return com.rpl.specter.DISPENSE;},new cljs.core.Symbol("com.rpl.specter","DISPENSE","com.rpl.specter/DISPENSE",1567537873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"DISPENSE","DISPENSE",-792734648,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(1376),(1378),cljs.core.List.EMPTY,"Drops all collected values for subsequent navigation.",(cljs.core.truth_(com.rpl.specter.DISPENSE)?com.rpl.specter.DISPENSE.cljs$lang$test:null)])),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache51117 = info51118;

return info51118;
})():info__17580__auto__);
var precompiled51119 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled51119.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one.call(null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p)], null),com.rpl.specter.stay_then_continue,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled51119;
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
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache51120;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info51121 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.VAL,new cljs.core.Var(function(){return com.rpl.specter.VAL;},new cljs.core.Symbol("com.rpl.specter","VAL","com.rpl.specter/VAL",-880341749,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"VAL","VAL",1194436242,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(18),(1),(761),(761),cljs.core.List.EMPTY,null,(cljs.core.truth_(com.rpl.specter.VAL)?com.rpl.specter.VAL.cljs$lang$test:null)])),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache51120 = info51121;

return info51121;
})():info__17580__auto__);
var precompiled51122 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled51122.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p,com.rpl.specter.VAL)], null),com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.VAL,com.rpl.specter.STAY], null));
} else {
return precompiled51122;
}
})());

return p;
}));
ob.core.para = (function ob$core$para(pred,f,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache51123;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info51124 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.PARA,new cljs.core.Var(function(){return ob.core.PARA;},new cljs.core.Symbol("ob.core","PARA","ob.core/PARA",1919217486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),"src/ob/core.cljs",10,1,1768,1768,cljs.core.List.EMPTY,"Prewalks the structure, but inserts the transformed branch\n  as the first argument to the leaf nodes.",(cljs.core.truth_(ob.core.PARA)?ob.core.PARA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null));
ob.core.pathcache51123 = info51124;

return info51124;
})():info__17580__auto__);
var precompiled51125 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled51125.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,null),ob.core.PARA.call(null,pred)], null),com.rpl.specter.collect_one,ob.core.PARA,pred], null));
} else {
return precompiled51125;
}
})(),f,structure);
});

//# sourceMappingURL=core.js.map
