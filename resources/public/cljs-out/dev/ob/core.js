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
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache191658;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191659 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache191658 = info191659;

return info191659;
})():info__17750__auto__);
var precompiled191660 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191660.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled191660;
}
})());

return p;
})();
ob.core.AST_WALK = com.rpl.specter.cond_path.call(null,cljs.core.map_QMARK_,com.rpl.specter.STAY,cljs.core.vector_QMARK_,com.rpl.specter.ALL,com.rpl.specter.STAY);


ob.core.AST_CHILDREN_select_STAR_ = (function ob$core$AST_CHILDREN_select_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191661;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191662 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache191661 = info191662;

return info191662;
})():info__17750__auto__);
var precompiled191663 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191663.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled191663;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191664;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191665 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache191664 = info191665;

return info191665;
})():info__17750__auto__);
var precompiled191666 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191666.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled191666;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191667;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191668 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache191667 = info191668;

return info191668;
})():info__17750__auto__);
var precompiled191669 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191669.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled191669;
}
})(),next_fn,ast);
} else {
return null;
}
});

ob.core.AST_CHILDREN = (function (){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core191670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core191670 = (function (meta191671){
this.meta191671 = meta191671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core191670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191672,meta191671__$1){
var self__ = this;
var _191672__$1 = this;
return (new ob.core.t_ob$core191670(meta191671__$1));
}));

(ob.core.t_ob$core191670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191672){
var self__ = this;
var _191672__$1 = this;
return self__.meta191671;
}));

(ob.core.t_ob$core191670.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core191670.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,ast,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191673;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191674 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache191673 = info191674;

return info191674;
})():info__17750__auto__);
var precompiled191675 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191675.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled191675;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191676;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191677 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache191676 = info191677;

return info191677;
})():info__17750__auto__);
var precompiled191678 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191678.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled191678;
}
})(),next_fn,s);
} else {
return null;
}
}));

(ob.core.t_ob$core191670.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,ast,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191679;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191680 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache191679 = info191680;

return info191680;
})():info__17750__auto__);
var precompiled191681 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191681.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled191681;
}
})(),next_fn,ast);
} else {
return null;
}
}));

(ob.core.t_ob$core191670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta191671","meta191671",-1495678735,null)], null);
}));

(ob.core.t_ob$core191670.cljs$lang$type = true);

(ob.core.t_ob$core191670.cljs$lang$ctorStr = "ob.core/t_ob$core191670");

(ob.core.t_ob$core191670.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core191670");
}));

/**
 * Positional factory function for ob.core/t_ob$core191670.
 */
ob.core.__GT_t_ob$core191670 = (function ob$core$__GT_t_ob$core191670(meta191671){
return (new ob.core.t_ob$core191670(meta191671));
});

}

return (new ob.core.t_ob$core191670(null));
})()
;
ob.core.AST_PRE_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache191682;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191683 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache191682 = info191683;

return info191683;
})():info__17750__auto__);
var precompiled191684 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191684.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.stay_then_continue,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled191684;
}
})());

return p;
})();
ob.core.AST_POST_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache191685;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191686 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache191685 = info191686;

return info191686;
})():info__17750__auto__);
var precompiled191687 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191687.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.continue_then_stay,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled191687;
}
})());

return p;
})();
ob.core.AST_DESC = ob.core.AST_POST_WALK;
ob.core.DATA = com.rpl.specter.MAP_VALS;
ob.core.datum__GT_child_ids = (function ob$core$datum__GT_child_ids(var_args){
var G__191689 = arguments.length;
switch (G__191689) {
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
return cljs.core.flatten.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191690;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191691 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.DATA,new cljs.core.Var(function(){return ob.core.DATA;},new cljs.core.Symbol("ob.core","DATA","ob.core/DATA",1547210987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),"src/ob/core.cljs",10,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.DATA)?ob.core.DATA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830))))], null)], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Keyword(null,"parens","parens",1028661830))),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache191690 = info191691;

return info191691;
})():info__17750__auto__);
var precompiled191692 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191692.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.DATA,com.rpl.specter.submap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null)], null)),com.rpl.specter.MAP_VALS], null),ob.core.DATA,com.rpl.specter.submap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null)], null),(cljs.core.truth_(parens_QMARK_)?new cljs.core.Keyword(null,"parens","parens",1028661830):null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled191692;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core191694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core191694 = (function (id,meta191695){
this.id = id;
this.meta191695 = meta191695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core191694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191696,meta191695__$1){
var self__ = this;
var _191696__$1 = this;
return (new ob.core.t_ob$core191694(self__.id,meta191695__$1));
}));

(ob.core.t_ob$core191694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191696){
var self__ = this;
var _191696__$1 = this;
return self__.meta191695;
}));

(ob.core.t_ob$core191694.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core191694.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var ids = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(self__.id.call(null,db));
return next_fn.call(null,cljs.core.select_keys.call(null,db,ids));
}));

(ob.core.t_ob$core191694.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var ids = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(self__.id.call(null,db));
return cljs.core.merge.call(null,db,next_fn.call(null,cljs.core.select_keys.call(null,db,ids)));
}));

(ob.core.t_ob$core191694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta191695","meta191695",847531953,null)], null);
}));

(ob.core.t_ob$core191694.cljs$lang$type = true);

(ob.core.t_ob$core191694.cljs$lang$ctorStr = "ob.core/t_ob$core191694");

(ob.core.t_ob$core191694.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core191694");
}));

/**
 * Positional factory function for ob.core/t_ob$core191694.
 */
ob.core.__GT_t_ob$core191694 = (function ob$core$__GT_t_ob$core191694(id__$1,meta191695){
return (new ob.core.t_ob$core191694(id__$1,meta191695));
});

}

return (new ob.core.t_ob$core191694(id,null));
}));


ob.core.children_select_STAR_ = (function ob$core$children_select_STAR_(id,parens_QMARK_,db,next_fn){
var child_ids = ob.core.datum__GT_child_ids.call(null,id.call(null,db));
return next_fn.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191697;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191698 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache191697 = info191698;

return info191698;
})():info__17750__auto__);
var precompiled191699 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191699.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled191699;
}
})(),db));
});

ob.core.children_transform_STAR_ = (function ob$core$children_transform_STAR_(id,parens_QMARK_,db,next_fn){
var child_ids = ob.core.datum__GT_child_ids.call(null,id.call(null,db));
return cljs.core.merge.call(null,db,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191700;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191701 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache191700 = info191701;

return info191701;
})():info__17750__auto__);
var precompiled191702 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191702.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled191702;
}
})(),next_fn,db));
});

ob.core.children = com.rpl.specter.impl.direct_nav_obj.call(null,(function (id,parens_QMARK_){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core191703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core191703 = (function (id,parens_QMARK_,meta191704){
this.id = id;
this.parens_QMARK_ = parens_QMARK_;
this.meta191704 = meta191704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core191703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191705,meta191704__$1){
var self__ = this;
var _191705__$1 = this;
return (new ob.core.t_ob$core191703(self__.id,self__.parens_QMARK_,meta191704__$1));
}));

(ob.core.t_ob$core191703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191705){
var self__ = this;
var _191705__$1 = this;
return self__.meta191704;
}));

(ob.core.t_ob$core191703.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core191703.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var child_ids = ob.core.datum__GT_child_ids.call(null,self__.id.call(null,db));
return next_fn.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191706;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191707 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache191706 = info191707;

return info191707;
})():info__17750__auto__);
var precompiled191708 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191708.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled191708;
}
})(),db));
}));

(ob.core.t_ob$core191703.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var child_ids = ob.core.datum__GT_child_ids.call(null,self__.id.call(null,db));
return cljs.core.merge.call(null,db,com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191709;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191710 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,child_ids,new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"child-ids","child-ids",1036005666,null)], null));
ob.core.pathcache191709 = info191710;

return info191710;
})():info__17750__auto__);
var precompiled191711 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191711.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap,child_ids], null));
} else {
return precompiled191711;
}
})(),next_fn,db));
}));

(ob.core.t_ob$core191703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"parens?","parens?",-1070888056,null),new cljs.core.Symbol(null,"meta191704","meta191704",268950159,null)], null);
}));

(ob.core.t_ob$core191703.cljs$lang$type = true);

(ob.core.t_ob$core191703.cljs$lang$ctorStr = "ob.core/t_ob$core191703");

(ob.core.t_ob$core191703.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core191703");
}));

/**
 * Positional factory function for ob.core/t_ob$core191703.
 */
ob.core.__GT_t_ob$core191703 = (function ob$core$__GT_t_ob$core191703(id__$1,parens_QMARK___$1,meta191704){
return (new ob.core.t_ob$core191703(id__$1,parens_QMARK___$1,meta191704));
});

}

return (new ob.core.t_ob$core191703(id,parens_QMARK_,null));
}));
ob.core.lookup_by_id = (function ob$core$lookup_by_id(db,id){
while(true){
var val = cljs.core.get.call(null,db,id);
var temp__5718__auto__ = new cljs.core.Keyword(null,"redirect","redirect",-1975673286).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(temp__5718__auto__)){
var r = temp__5718__auto__;
var G__191712 = db;
var G__191713 = r;
db = G__191712;
id = G__191713;
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

var seq__191718 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__191719 = null;
var count__191720 = (0);
var i__191721 = (0);
while(true){
if((i__191721 < count__191720)){
var c = cljs.core._nth.call(null,chunk__191719,i__191721);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__191749 = seq__191718;
var G__191750 = chunk__191719;
var G__191751 = count__191720;
var G__191752 = (i__191721 + (1));
seq__191718 = G__191749;
chunk__191719 = G__191750;
count__191720 = G__191751;
i__191721 = G__191752;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191718);
if(temp__5720__auto__){
var seq__191718__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191718__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191718__$1);
var G__191753 = cljs.core.chunk_rest.call(null,seq__191718__$1);
var G__191754 = c__4679__auto__;
var G__191755 = cljs.core.count.call(null,c__4679__auto__);
var G__191756 = (0);
seq__191718 = G__191753;
chunk__191719 = G__191754;
count__191720 = G__191755;
i__191721 = G__191756;
continue;
} else {
var c = cljs.core.first.call(null,seq__191718__$1);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__191757 = cljs.core.next.call(null,seq__191718__$1);
var G__191758 = null;
var G__191759 = (0);
var G__191760 = (0);
seq__191718 = G__191757;
chunk__191719 = G__191758;
count__191720 = G__191759;
i__191721 = G__191760;
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

var seq__191726 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__191727 = null;
var count__191728 = (0);
var i__191729 = (0);
while(true){
if((i__191729 < count__191728)){
var c = cljs.core._nth.call(null,chunk__191727,i__191729);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__191761 = seq__191726;
var G__191762 = chunk__191727;
var G__191763 = count__191728;
var G__191764 = (i__191729 + (1));
seq__191726 = G__191761;
chunk__191727 = G__191762;
count__191728 = G__191763;
i__191729 = G__191764;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191726);
if(temp__5720__auto__){
var seq__191726__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191726__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191726__$1);
var G__191765 = cljs.core.chunk_rest.call(null,seq__191726__$1);
var G__191766 = c__4679__auto__;
var G__191767 = cljs.core.count.call(null,c__4679__auto__);
var G__191768 = (0);
seq__191726 = G__191765;
chunk__191727 = G__191766;
count__191728 = G__191767;
i__191729 = G__191768;
continue;
} else {
var c = cljs.core.first.call(null,seq__191726__$1);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__191769 = cljs.core.next.call(null,seq__191726__$1);
var G__191770 = null;
var G__191771 = (0);
var G__191772 = (0);
seq__191726 = G__191769;
chunk__191727 = G__191770;
count__191728 = G__191771;
i__191729 = G__191772;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core191730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core191730 = (function (k,meta191731){
this.k = k;
this.meta191731 = meta191731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core191730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191732,meta191731__$1){
var self__ = this;
var _191732__$1 = this;
return (new ob.core.t_ob$core191730(self__.k,meta191731__$1));
}));

(ob.core.t_ob$core191730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191732){
var self__ = this;
var _191732__$1 = this;
return self__.meta191731;
}));

(ob.core.t_ob$core191730.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core191730.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__191737 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__191738 = null;
var count__191739 = (0);
var i__191740 = (0);
while(true){
if((i__191740 < count__191739)){
var c = cljs.core._nth.call(null,chunk__191738,i__191740);
ob$core$gather.call(null,c);


var G__191773 = seq__191737;
var G__191774 = chunk__191738;
var G__191775 = count__191739;
var G__191776 = (i__191740 + (1));
seq__191737 = G__191773;
chunk__191738 = G__191774;
count__191739 = G__191775;
i__191740 = G__191776;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191737);
if(temp__5720__auto__){
var seq__191737__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191737__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191737__$1);
var G__191777 = cljs.core.chunk_rest.call(null,seq__191737__$1);
var G__191778 = c__4679__auto__;
var G__191779 = cljs.core.count.call(null,c__4679__auto__);
var G__191780 = (0);
seq__191737 = G__191777;
chunk__191738 = G__191778;
count__191739 = G__191779;
i__191740 = G__191780;
continue;
} else {
var c = cljs.core.first.call(null,seq__191737__$1);
ob$core$gather.call(null,c);


var G__191781 = cljs.core.next.call(null,seq__191737__$1);
var G__191782 = null;
var G__191783 = (0);
var G__191784 = (0);
seq__191737 = G__191781;
chunk__191738 = G__191782;
count__191739 = G__191783;
i__191740 = G__191784;
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

(ob.core.t_ob$core191730.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));

var seq__191745 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__191746 = null;
var count__191747 = (0);
var i__191748 = (0);
while(true){
if((i__191748 < count__191747)){
var c = cljs.core._nth.call(null,chunk__191746,i__191748);
ob$core$gather.call(null,c);


var G__191785 = seq__191745;
var G__191786 = chunk__191746;
var G__191787 = count__191747;
var G__191788 = (i__191748 + (1));
seq__191745 = G__191785;
chunk__191746 = G__191786;
count__191747 = G__191787;
i__191748 = G__191788;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191745);
if(temp__5720__auto__){
var seq__191745__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191745__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191745__$1);
var G__191789 = cljs.core.chunk_rest.call(null,seq__191745__$1);
var G__191790 = c__4679__auto__;
var G__191791 = cljs.core.count.call(null,c__4679__auto__);
var G__191792 = (0);
seq__191745 = G__191789;
chunk__191746 = G__191790;
count__191747 = G__191791;
i__191748 = G__191792;
continue;
} else {
var c = cljs.core.first.call(null,seq__191745__$1);
ob$core$gather.call(null,c);


var G__191793 = cljs.core.next.call(null,seq__191745__$1);
var G__191794 = null;
var G__191795 = (0);
var G__191796 = (0);
seq__191745 = G__191793;
chunk__191746 = G__191794;
count__191747 = G__191795;
i__191748 = G__191796;
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

(ob.core.t_ob$core191730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta191731","meta191731",-1160466524,null)], null);
}));

(ob.core.t_ob$core191730.cljs$lang$type = true);

(ob.core.t_ob$core191730.cljs$lang$ctorStr = "ob.core/t_ob$core191730");

(ob.core.t_ob$core191730.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core191730");
}));

/**
 * Positional factory function for ob.core/t_ob$core191730.
 */
ob.core.__GT_t_ob$core191730 = (function ob$core$__GT_t_ob$core191730(k__$1,meta191731){
return (new ob.core.t_ob$core191730(k__$1,meta191731));
});

}

return (new ob.core.t_ob$core191730(k,null));
}));


ob.core.desc_but_node_select_STAR_ = (function ob$core$desc_but_node_select_STAR_(k,node_id,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gather = (function ob$core$desc_but_node_select_STAR__$_gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
if(cljs.core._EQ_.call(null,node_id,cljs.core.ffirst.call(null,datum))){
return null;
} else {
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),datum));

var seq__191801 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__191802 = null;
var count__191803 = (0);
var i__191804 = (0);
while(true){
if((i__191804 < count__191803)){
var c = cljs.core._nth.call(null,chunk__191802,i__191804);
ob$core$desc_but_node_select_STAR__$_gather.call(null,c);


var G__191832 = seq__191801;
var G__191833 = chunk__191802;
var G__191834 = count__191803;
var G__191835 = (i__191804 + (1));
seq__191801 = G__191832;
chunk__191802 = G__191833;
count__191803 = G__191834;
i__191804 = G__191835;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191801);
if(temp__5720__auto__){
var seq__191801__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191801__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191801__$1);
var G__191836 = cljs.core.chunk_rest.call(null,seq__191801__$1);
var G__191837 = c__4679__auto__;
var G__191838 = cljs.core.count.call(null,c__4679__auto__);
var G__191839 = (0);
seq__191801 = G__191836;
chunk__191802 = G__191837;
count__191803 = G__191838;
i__191804 = G__191839;
continue;
} else {
var c = cljs.core.first.call(null,seq__191801__$1);
ob$core$desc_but_node_select_STAR__$_gather.call(null,c);


var G__191840 = cljs.core.next.call(null,seq__191801__$1);
var G__191841 = null;
var G__191842 = (0);
var G__191843 = (0);
seq__191801 = G__191840;
chunk__191802 = G__191841;
count__191803 = G__191842;
i__191804 = G__191843;
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

var seq__191809 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__191810 = null;
var count__191811 = (0);
var i__191812 = (0);
while(true){
if((i__191812 < count__191811)){
var c = cljs.core._nth.call(null,chunk__191810,i__191812);
ob$core$desc_but_node_transform_STAR__$_gather.call(null,c);


var G__191844 = seq__191809;
var G__191845 = chunk__191810;
var G__191846 = count__191811;
var G__191847 = (i__191812 + (1));
seq__191809 = G__191844;
chunk__191810 = G__191845;
count__191811 = G__191846;
i__191812 = G__191847;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191809);
if(temp__5720__auto__){
var seq__191809__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191809__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191809__$1);
var G__191848 = cljs.core.chunk_rest.call(null,seq__191809__$1);
var G__191849 = c__4679__auto__;
var G__191850 = cljs.core.count.call(null,c__4679__auto__);
var G__191851 = (0);
seq__191809 = G__191848;
chunk__191810 = G__191849;
count__191811 = G__191850;
i__191812 = G__191851;
continue;
} else {
var c = cljs.core.first.call(null,seq__191809__$1);
ob$core$desc_but_node_transform_STAR__$_gather.call(null,c);


var G__191852 = cljs.core.next.call(null,seq__191809__$1);
var G__191853 = null;
var G__191854 = (0);
var G__191855 = (0);
seq__191809 = G__191852;
chunk__191810 = G__191853;
count__191811 = G__191854;
i__191812 = G__191855;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core191813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core191813 = (function (k,node_id,meta191814){
this.k = k;
this.node_id = node_id;
this.meta191814 = meta191814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core191813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191815,meta191814__$1){
var self__ = this;
var _191815__$1 = this;
return (new ob.core.t_ob$core191813(self__.k,self__.node_id,meta191814__$1));
}));

(ob.core.t_ob$core191813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191815){
var self__ = this;
var _191815__$1 = this;
return self__.meta191814;
}));

(ob.core.t_ob$core191813.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core191813.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
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

var seq__191820 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__191821 = null;
var count__191822 = (0);
var i__191823 = (0);
while(true){
if((i__191823 < count__191822)){
var c = cljs.core._nth.call(null,chunk__191821,i__191823);
ob$core$gather.call(null,c);


var G__191856 = seq__191820;
var G__191857 = chunk__191821;
var G__191858 = count__191822;
var G__191859 = (i__191823 + (1));
seq__191820 = G__191856;
chunk__191821 = G__191857;
count__191822 = G__191858;
i__191823 = G__191859;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191820);
if(temp__5720__auto__){
var seq__191820__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191820__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191820__$1);
var G__191860 = cljs.core.chunk_rest.call(null,seq__191820__$1);
var G__191861 = c__4679__auto__;
var G__191862 = cljs.core.count.call(null,c__4679__auto__);
var G__191863 = (0);
seq__191820 = G__191860;
chunk__191821 = G__191861;
count__191822 = G__191862;
i__191823 = G__191863;
continue;
} else {
var c = cljs.core.first.call(null,seq__191820__$1);
ob$core$gather.call(null,c);


var G__191864 = cljs.core.next.call(null,seq__191820__$1);
var G__191865 = null;
var G__191866 = (0);
var G__191867 = (0);
seq__191820 = G__191864;
chunk__191821 = G__191865;
count__191822 = G__191866;
i__191823 = G__191867;
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

(ob.core.t_ob$core191813.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
var self__ = this;
var this__16900__auto____$1 = this;
var next_fn = (function (s__16903__auto__){
return next_fn__16902__auto__.call(null,vals__16901__auto__,s__16903__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
var datum = ob.core.lookup_by_id.call(null,db,k__$1);
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,datum)));

var seq__191828 = cljs.core.seq.call(null,ob.core.datum__GT_child_ids.call(null,datum));
var chunk__191829 = null;
var count__191830 = (0);
var i__191831 = (0);
while(true){
if((i__191831 < count__191830)){
var c = cljs.core._nth.call(null,chunk__191829,i__191831);
ob$core$gather.call(null,c);


var G__191868 = seq__191828;
var G__191869 = chunk__191829;
var G__191870 = count__191830;
var G__191871 = (i__191831 + (1));
seq__191828 = G__191868;
chunk__191829 = G__191869;
count__191830 = G__191870;
i__191831 = G__191871;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191828);
if(temp__5720__auto__){
var seq__191828__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191828__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191828__$1);
var G__191872 = cljs.core.chunk_rest.call(null,seq__191828__$1);
var G__191873 = c__4679__auto__;
var G__191874 = cljs.core.count.call(null,c__4679__auto__);
var G__191875 = (0);
seq__191828 = G__191872;
chunk__191829 = G__191873;
count__191830 = G__191874;
i__191831 = G__191875;
continue;
} else {
var c = cljs.core.first.call(null,seq__191828__$1);
ob$core$gather.call(null,c);


var G__191876 = cljs.core.next.call(null,seq__191828__$1);
var G__191877 = null;
var G__191878 = (0);
var G__191879 = (0);
seq__191828 = G__191876;
chunk__191829 = G__191877;
count__191830 = G__191878;
i__191831 = G__191879;
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

(ob.core.t_ob$core191813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"node-id","node-id",-1874953477,null),new cljs.core.Symbol(null,"meta191814","meta191814",-987370198,null)], null);
}));

(ob.core.t_ob$core191813.cljs$lang$type = true);

(ob.core.t_ob$core191813.cljs$lang$ctorStr = "ob.core/t_ob$core191813");

(ob.core.t_ob$core191813.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core191813");
}));

/**
 * Positional factory function for ob.core/t_ob$core191813.
 */
ob.core.__GT_t_ob$core191813 = (function ob$core$__GT_t_ob$core191813(k__$1,node_id__$1,meta191814){
return (new ob.core.t_ob$core191813(k__$1,node_id__$1,meta191814));
});

}

return (new ob.core.t_ob$core191813(k,node_id,null));
}));


ob.core.desc_nodes_select_STAR_ = (function ob$core$desc_nodes_select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$desc_nodes_select_STAR__$_gather(k__$1){
var datum = cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null));
var ci = ob.core.datum__GT_child_ids.call(null,datum);
if(cljs.core.seq.call(null,ci)){
var seq__191884 = cljs.core.seq.call(null,ci);
var chunk__191885 = null;
var count__191886 = (0);
var i__191887 = (0);
while(true){
if((i__191887 < count__191886)){
var c = cljs.core._nth.call(null,chunk__191885,i__191887);
ob$core$desc_nodes_select_STAR__$_gather.call(null,c);


var G__191915 = seq__191884;
var G__191916 = chunk__191885;
var G__191917 = count__191886;
var G__191918 = (i__191887 + (1));
seq__191884 = G__191915;
chunk__191885 = G__191916;
count__191886 = G__191917;
i__191887 = G__191918;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191884);
if(temp__5720__auto__){
var seq__191884__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191884__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191884__$1);
var G__191919 = cljs.core.chunk_rest.call(null,seq__191884__$1);
var G__191920 = c__4679__auto__;
var G__191921 = cljs.core.count.call(null,c__4679__auto__);
var G__191922 = (0);
seq__191884 = G__191919;
chunk__191885 = G__191920;
count__191886 = G__191921;
i__191887 = G__191922;
continue;
} else {
var c = cljs.core.first.call(null,seq__191884__$1);
ob$core$desc_nodes_select_STAR__$_gather.call(null,c);


var G__191923 = cljs.core.next.call(null,seq__191884__$1);
var G__191924 = null;
var G__191925 = (0);
var G__191926 = (0);
seq__191884 = G__191923;
chunk__191885 = G__191924;
count__191886 = G__191925;
i__191887 = G__191926;
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
var seq__191892 = cljs.core.seq.call(null,ci);
var chunk__191893 = null;
var count__191894 = (0);
var i__191895 = (0);
while(true){
if((i__191895 < count__191894)){
var c = cljs.core._nth.call(null,chunk__191893,i__191895);
ob$core$desc_nodes_transform_STAR__$_gather.call(null,c);


var G__191927 = seq__191892;
var G__191928 = chunk__191893;
var G__191929 = count__191894;
var G__191930 = (i__191895 + (1));
seq__191892 = G__191927;
chunk__191893 = G__191928;
count__191894 = G__191929;
i__191895 = G__191930;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191892);
if(temp__5720__auto__){
var seq__191892__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191892__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191892__$1);
var G__191931 = cljs.core.chunk_rest.call(null,seq__191892__$1);
var G__191932 = c__4679__auto__;
var G__191933 = cljs.core.count.call(null,c__4679__auto__);
var G__191934 = (0);
seq__191892 = G__191931;
chunk__191893 = G__191932;
count__191894 = G__191933;
i__191895 = G__191934;
continue;
} else {
var c = cljs.core.first.call(null,seq__191892__$1);
ob$core$desc_nodes_transform_STAR__$_gather.call(null,c);


var G__191935 = cljs.core.next.call(null,seq__191892__$1);
var G__191936 = null;
var G__191937 = (0);
var G__191938 = (0);
seq__191892 = G__191935;
chunk__191893 = G__191936;
count__191894 = G__191937;
i__191895 = G__191938;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core191896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core191896 = (function (k,meta191897){
this.k = k;
this.meta191897 = meta191897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core191896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191898,meta191897__$1){
var self__ = this;
var _191898__$1 = this;
return (new ob.core.t_ob$core191896(self__.k,meta191897__$1));
}));

(ob.core.t_ob$core191896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191898){
var self__ = this;
var _191898__$1 = this;
return self__.meta191897;
}));

(ob.core.t_ob$core191896.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core191896.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
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
var seq__191903 = cljs.core.seq.call(null,ci);
var chunk__191904 = null;
var count__191905 = (0);
var i__191906 = (0);
while(true){
if((i__191906 < count__191905)){
var c = cljs.core._nth.call(null,chunk__191904,i__191906);
ob$core$gather.call(null,c);


var G__191939 = seq__191903;
var G__191940 = chunk__191904;
var G__191941 = count__191905;
var G__191942 = (i__191906 + (1));
seq__191903 = G__191939;
chunk__191904 = G__191940;
count__191905 = G__191941;
i__191906 = G__191942;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191903);
if(temp__5720__auto__){
var seq__191903__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191903__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191903__$1);
var G__191943 = cljs.core.chunk_rest.call(null,seq__191903__$1);
var G__191944 = c__4679__auto__;
var G__191945 = cljs.core.count.call(null,c__4679__auto__);
var G__191946 = (0);
seq__191903 = G__191943;
chunk__191904 = G__191944;
count__191905 = G__191945;
i__191906 = G__191946;
continue;
} else {
var c = cljs.core.first.call(null,seq__191903__$1);
ob$core$gather.call(null,c);


var G__191947 = cljs.core.next.call(null,seq__191903__$1);
var G__191948 = null;
var G__191949 = (0);
var G__191950 = (0);
seq__191903 = G__191947;
chunk__191904 = G__191948;
count__191905 = G__191949;
i__191906 = G__191950;
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

(ob.core.t_ob$core191896.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16900__auto__,vals__16901__auto__,db,next_fn__16902__auto__){
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
var seq__191911 = cljs.core.seq.call(null,ci);
var chunk__191912 = null;
var count__191913 = (0);
var i__191914 = (0);
while(true){
if((i__191914 < count__191913)){
var c = cljs.core._nth.call(null,chunk__191912,i__191914);
ob$core$gather.call(null,c);


var G__191951 = seq__191911;
var G__191952 = chunk__191912;
var G__191953 = count__191913;
var G__191954 = (i__191914 + (1));
seq__191911 = G__191951;
chunk__191912 = G__191952;
count__191913 = G__191953;
i__191914 = G__191954;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__191911);
if(temp__5720__auto__){
var seq__191911__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__191911__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__191911__$1);
var G__191955 = cljs.core.chunk_rest.call(null,seq__191911__$1);
var G__191956 = c__4679__auto__;
var G__191957 = cljs.core.count.call(null,c__4679__auto__);
var G__191958 = (0);
seq__191911 = G__191955;
chunk__191912 = G__191956;
count__191913 = G__191957;
i__191914 = G__191958;
continue;
} else {
var c = cljs.core.first.call(null,seq__191911__$1);
ob$core$gather.call(null,c);


var G__191959 = cljs.core.next.call(null,seq__191911__$1);
var G__191960 = null;
var G__191961 = (0);
var G__191962 = (0);
seq__191911 = G__191959;
chunk__191912 = G__191960;
count__191913 = G__191961;
i__191914 = G__191962;
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

(ob.core.t_ob$core191896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta191897","meta191897",-1190315524,null)], null);
}));

(ob.core.t_ob$core191896.cljs$lang$type = true);

(ob.core.t_ob$core191896.cljs$lang$ctorStr = "ob.core/t_ob$core191896");

(ob.core.t_ob$core191896.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core191896");
}));

/**
 * Positional factory function for ob.core/t_ob$core191896.
 */
ob.core.__GT_t_ob$core191896 = (function ob$core$__GT_t_ob$core191896(k__$1,meta191897){
return (new ob.core.t_ob$core191896(k__$1,meta191897));
});

}

return (new ob.core.t_ob$core191896(k,null));
}));
ob.core.gen_paren_datum = (function ob$core$gen_paren_datum(parent_id,text,depth,tag){
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-bracket"].join(''),tag,"bracket"]),new cljs.core.Keyword(null,"name","name",1843675177),text], null)]);
});
ob.core.add_paren_data = (function ob$core$add_paren_data(data_row,p__191963){
var map__191964 = p__191963;
var map__191964__$1 = cljs.core.__destructure_map.call(null,map__191964);
var id = cljs.core.get.call(null,map__191964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__191964__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__191964__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var vec__191965 = parens;
var op = cljs.core.nth.call(null,vec__191965,(0),null);
var cl = cljs.core.nth.call(null,vec__191965,(1),null);
var op_paren = ob.core.gen_paren_datum.call(null,id,op,depth,"opening");
var cl_paren = ob.core.gen_paren_datum.call(null,id,cl,depth,"closing");
var parens__$1 = cljs.core.merge.call(null,op_paren,cl_paren);
var paren_ids = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191968;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191969 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(749),(752),cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null));
ob.core.pathcache191968 = info191969;

return info191969;
})():info__17750__auto__);
var precompiled191970 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191970.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null),com.rpl.specter.MAP_KEYS], null));
} else {
return precompiled191970;
}
})(),parens__$1);
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.assoc.call(null,data_row,new cljs.core.Keyword(null,"parens","parens",1028661830),paren_ids)]),op_paren,cl_paren);
});
ob.core.macro__GT_pos_type = (function ob$core$macro__GT_pos_type(op){
var G__191971 = op;
var G__191971__$1 = (((G__191971 instanceof cljs.core.Keyword))?G__191971.fqn:null);
switch (G__191971__$1) {
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
var pred__191975 = (function (p1__191973_SHARP_,p2__191974_SHARP_){
return cljs.core.get.call(null,p1__191973_SHARP_,p2__191974_SHARP_);
});
var expr__191976 = op;
if(cljs.core.truth_(pred__191975.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"let","let",-1282412701),null,new cljs.core.Keyword(null,"loop","loop",-395552849),null], null), null),expr__191976))){
return new cljs.core.Keyword(null,"let","let",-1282412701);
} else {
if(cljs.core.truth_(pred__191975.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"macroexpand","macroexpand",-130598183),null], null), null),expr__191976))){
return ob.core.macro__GT_pos_type.call(null,op);
} else {
return op;
}
}
});
ob.core.sel__GT_datum = (function ob$core$sel__GT_datum(p__191978){
var map__191979 = p__191978;
var map__191979__$1 = cljs.core.__destructure_map.call(null,map__191979);
var sel = map__191979__$1;
var id = cljs.core.get.call(null,map__191979__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__191979__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var type = cljs.core.get.call(null,map__191979__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__191979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var parent_id = cljs.core.get.call(null,map__191979__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var child_ids = cljs.core.get.call(null,map__191979__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
var parens = cljs.core.get.call(null,map__191979__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__191979__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var pos_type = ob.core.op__GT_pos_type.call(null,op);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"depth","depth",1768663640)],[child_ids,name,op,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"100%"], null),pos_type,id,cljs.core.PersistentHashSet.createAsIfByAssoc([type,op]),parent_id,depth]);
});
ob.core.ast__GT_data = (function ob$core$ast__GT_data(var_args){
var G__191981 = arguments.length;
switch (G__191981) {
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
var sel = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191982;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191983 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_DESC,new cljs.core.Var(function(){return ob.core.AST_DESC;},new cljs.core.Symbol("ob.core","AST-DESC","ob.core/AST-DESC",-1179528306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),"src/ob/core.cljs",14,1,93,93,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_DESC)?ob.core.AST_DESC.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092)))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092))], null),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)], null));
ob.core.pathcache191982 = info191983;

return info191983;
})():info__17750__auto__);
var precompiled191984 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191984.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.AST_DESC,com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null),ob.core.AST_DESC,com.rpl.specter.pred], null));
} else {
return precompiled191984;
}
})(),ast);
var iter__4652__auto__ = (function ob$core$iter__191985(s__191986){
return (new cljs.core.LazySeq(null,(function (){
var s__191986__$1 = s__191986;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__191986__$1);
if(temp__5720__auto__){
var s__191986__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__191986__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__191986__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__191988 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__191987 = (0);
while(true){
if((i__191987 < size__4651__auto__)){
var map__191989 = cljs.core._nth.call(null,c__4650__auto__,i__191987);
var map__191989__$1 = cljs.core.__destructure_map.call(null,map__191989);
var s = map__191989__$1;
var id__$1 = cljs.core.get.call(null,map__191989__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__191989__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
cljs.core.chunk_append.call(null,b__191988,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})());

var G__191992 = (i__191987 + (1));
i__191987 = G__191992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__191988),ob$core$iter__191985.call(null,cljs.core.chunk_rest.call(null,s__191986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__191988),null);
}
} else {
var map__191990 = cljs.core.first.call(null,s__191986__$2);
var map__191990__$1 = cljs.core.__destructure_map.call(null,map__191990);
var s = map__191990__$1;
var id__$1 = cljs.core.get.call(null,map__191990__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__191990__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
return cljs.core.cons.call(null,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})(),ob$core$iter__191985.call(null,cljs.core.rest.call(null,s__191986__$2)));
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191993;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191994 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.keys,new cljs.core.Var(function(){return cljs.core.keys;},new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),"cljs/core.cljs",(11),(1),(9050),(9050),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",-1282745308,null)], null)),"Returns a sequence of the map's keys, in the same order as (seq map).",(cljs.core.truth_(cljs.core.keys)?cljs.core.keys.cljs$lang$test:null)])),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,dims,new cljs.core.Symbol(null,"dims","dims",1174008638,null))], null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dims","dims",1174008638,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null))),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache191993 = info191994;

return info191994;
})():info__17750__auto__);
var precompiled191995 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled191995.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,cljs.core.keys.call(null,dims)),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.submap,cljs.core.keys,dims,com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one], null));
} else {
return precompiled191995;
}
})(),f,db);
});
ob.core.get_trs_data = (function ob$core$get_trs_data(var_args){
var G__191997 = arguments.length;
switch (G__191997) {
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
var trs_data = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache191998;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info191999 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache191998 = info191999;

return info191999;
})():info__17750__auto__);
var precompiled192000 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192000.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled192000;
}
})(),f_STAR_,data);
var max_time = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192001;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192002 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"total","total",1916810418)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"total","total",1916810418)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache192001 = info192002;

return info192002;
})():info__17750__auto__);
var precompiled192003 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192003.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"total","total",1916810418)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled192003;
}
})(),trs_data));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),trs_data,new cljs.core.Keyword(null,"time","time",1385887882),max_time], null);
}));

(ob.core.get_trs_data.cljs$lang$maxFixedArity = 3);

ob.core.trs_by_depth = (function ob$core$trs_by_depth(f){
return (function (data){
var max_depth = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192005;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192006 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache192005 = info192006;

return info192006;
})():info__17750__auto__);
var precompiled192007 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192007.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled192007;
}
})(),data));
var interval = ((10) / max_depth);
return ob.core.get_trs_data.call(null,data,(function (p__192008){
var map__192009 = p__192008;
var map__192009__$1 = cljs.core.__destructure_map.call(null,map__192009);
var depth = cljs.core.get.call(null,map__192009__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
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
var G__192011 = arguments.length;
switch (G__192011) {
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192012;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192013 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.DATA,new cljs.core.Var(function(){return ob.core.DATA;},new cljs.core.Symbol("ob.core","DATA","ob.core/DATA",1547210987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null),"src/ob/core.cljs",10,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.DATA)?ob.core.DATA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)], null),new cljs.core.Symbol(null,"DATA","DATA",-1561192575,null)], null));
ob.core.pathcache192012 = info192013;

return info192013;
})():info__17750__auto__);
var precompiled192014 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192014.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.DATA], null),ob.core.DATA], null));
} else {
return precompiled192014;
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
cljs.core._add_method.call(null,ob.core.gen_styles,new cljs.core.Keyword(null,"fade","fade",1167694157),(function (_,p__192016,p__192017){
var map__192018 = p__192016;
var map__192018__$1 = cljs.core.__destructure_map.call(null,map__192018);
var children = cljs.core.get.call(null,map__192018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var map__192019 = p__192017;
var map__192019__$1 = cljs.core.__destructure_map.call(null,map__192019);
var opacity = cljs.core.get.call(null,map__192019__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2);
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192020;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192021 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache192020 = info192021;

return info192021;
})():info__17750__auto__);
var precompiled192022 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192022.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled192022;
}
})(),f,data);
});
ob.core.idx_clj__GT_data = (function ob$core$idx_clj__GT_data(form){
return cljs.core.apply.call(null,cljs.core.merge,ob.core.ast__GT_data.call(null,ob.analyzer.analyze.call(null,form,cljs.core.PersistentArrayMap.EMPTY)));
});
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"prev","prev",-1597069226),(function (p__192023){
var map__192024 = p__192023;
var map__192024__$1 = cljs.core.__destructure_map.call(null,map__192024);
var db = map__192024__$1;
var vs = cljs.core.get.call(null,map__192024__$1,new cljs.core.Keyword(null,"db-versions","db-versions",1746119480));
var id = cljs.core.get.call(null,map__192024__$1,new cljs.core.Keyword(null,"curr-db-id","curr-db-id",2093043383));
var id__$1 = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192025;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192026 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.core.pathcache192025 = info192026;

return info192026;
})():info__17750__auto__);
var precompiled192027 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192027.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-versions","db-versions",1746119480),id,new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),id], null));
} else {
return precompiled192027;
}
})(),db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"rewind","rewind",-669264915),(function (p__192028){
var map__192029 = p__192028;
var map__192029__$1 = cljs.core.__destructure_map.call(null,map__192029);
var db = map__192029__$1;
var vs = cljs.core.get.call(null,map__192029__$1,new cljs.core.Keyword(null,"db-versions","db-versions",1746119480));
var id = cljs.core.get.call(null,map__192029__$1,new cljs.core.Keyword(null,"curr-db-id","curr-db-id",2093043383));
var id__$1 = id;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var id__$2 = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192033;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192034 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id__$1,new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.core.pathcache192033 = info192034;

return info192034;
})():info__17750__auto__);
var precompiled192035 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192035.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,new cljs.core.Keyword("id","prev-db","id/prev-db",-1561099483)], null),id__$1], null));
} else {
return precompiled192035;
}
})(),vs);
if((id__$2 == null)){
return acc;
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(id__$2.call(null,vs)),new cljs.core.Keyword(null,"step","step",1288888124))){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$2], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null));
} else {
var G__192036 = id__$2;
var G__192037 = cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$2], null));
id__$1 = G__192036;
acc = G__192037;
continue;

}
}
break;
}
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"fastforward","fastforward",-1913774852),(function (p__192038){
var map__192039 = p__192038;
var map__192039__$1 = cljs.core.__destructure_map.call(null,map__192039);
var db = map__192039__$1;
var vs = cljs.core.get.call(null,map__192039__$1,new cljs.core.Keyword(null,"db-versions","db-versions",1746119480));
var id = cljs.core.get.call(null,map__192039__$1,new cljs.core.Keyword(null,"curr-db-id","curr-db-id",2093043383));
var id__$1 = id;
var seen_step_QMARK_ = false;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var id__$2 = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192043;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192044 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id__$1,new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
ob.core.pathcache192043 = info192044;

return info192044;
})():info__17750__auto__);
var precompiled192045 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192045.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),id__$1], null));
} else {
return precompiled192045;
}
})(),vs);
if((id__$2 == null)){
return acc;
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(id__$2.call(null,vs)),new cljs.core.Keyword(null,"step","step",1288888124))){
if(cljs.core.truth_(seen_step_QMARK_)){
return acc;
} else {
var G__192046 = id__$2;
var G__192047 = true;
var G__192048 = cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$2], null));
id__$1 = G__192046;
seen_step_QMARK_ = G__192047;
acc = G__192048;
continue;
}
} else {
var G__192049 = id__$2;
var G__192050 = seen_step_QMARK_;
var G__192051 = cljs.core.conj.call(null,acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.Keyword(null,"id","id",-1388402092),id__$2], null));
id__$1 = G__192049;
seen_step_QMARK_ = G__192050;
acc = G__192051;
continue;

}
}
break;
}
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword("clj","append","clj/append",-291199060),(function (p__192052){
var map__192053 = p__192052;
var map__192053__$1 = cljs.core.__destructure_map.call(null,map__192053);
var code = cljs.core.get.call(null,map__192053__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var idx_QMARK_ = cljs.core.get.call(null,map__192053__$1,new cljs.core.Keyword(null,"indexed?","indexed?",-405921143),false);
var code__$1 = (cljs.core.truth_(idx_QMARK_)?code:ob.utils.walk_ids.call(null,code));
var data = ob.core.idx_clj__GT_data.call(null,code__$1);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,code__$1));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.Keyword("id","parent","id/parent",-878874974),id,new cljs.core.Keyword(null,"time","time",1385887882),(1),new cljs.core.Keyword(null,"data","data",-232669377),data], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"symbol-resolve","symbol-resolve",128792823),(function (p__192054){
var map__192055 = p__192054;
var map__192055__$1 = cljs.core.__destructure_map.call(null,map__192055);
var new$ = cljs.core.get.call(null,map__192055__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var id_old = cljs.core.get.call(null,map__192055__$1,new cljs.core.Keyword(null,"id-old","id-old",1607678379));
var id_new = cljs.core.get.call(null,map__192055__$1,new cljs.core.Keyword(null,"id-new","id-new",1978088391));
var id_new_STAR_ = cljs.core.get.call(null,map__192055__$1,new cljs.core.Keyword(null,"id-new*","id-new*",-999568836));
var dom = cljs.core.get.call(null,map__192055__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var new_data = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),ob.core.update_depth.call(null,id_new_STAR_,ob.core.idx_clj__GT_data.call(null,new$)));
var new_expanded = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"expand","expand",595248157),new_data);
var old_data = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192056;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192057 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc,new cljs.core.Var(function(){return ob.core.desc;},new cljs.core.Symbol("ob.core","desc","ob.core/desc",1690967277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc","desc",-560950005,null),"src/ob/core.cljs",13,1,155,155,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc)?ob.core.desc.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc","desc",-560950005,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_old,new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null)], null));
ob.core.pathcache192056 = info192057;

return info192057;
})():info__17750__auto__);
var precompiled192058 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192058.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc,id_old], null));
} else {
return precompiled192058;
}
})(),dom));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),old_data,new cljs.core.Keyword(null,"trs","trs",1104008633),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.createAsIfByAssoc([id_old,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(4),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null)]),new cljs.core.Keyword(null,"time","time",1385887882),(4)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"data","data",-232669377),new_data,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_old,new cljs.core.Keyword("id","post","id/post",269696948),id_new_STAR_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"data","data",-232669377),new_expanded,new cljs.core.Keyword(null,"trs","trs",1104008633),ob.core.expand.call(null,new_expanded)], null)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811),(function (p__192059){
var map__192060 = p__192059;
var map__192060__$1 = cljs.core.__destructure_map.call(null,map__192060);
var old = cljs.core.get.call(null,map__192060__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var id_old = cljs.core.get.call(null,map__192060__$1,new cljs.core.Keyword(null,"id-old","id-old",1607678379));
var new$ = cljs.core.get.call(null,map__192060__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var id_new = cljs.core.get.call(null,map__192060__$1,new cljs.core.Keyword(null,"id-new","id-new",1978088391));
var dom = cljs.core.get.call(null,map__192060__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var old_faded = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"fade","fade",1167694157),com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192061;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192062 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc_but_node,new cljs.core.Var(function(){return ob.core.desc_but_node;},new cljs.core.Symbol("ob.core","desc-but-node","ob.core/desc-but-node",105590132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),"src/ob/core.cljs",22,1,196,196,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc_but_node)?ob.core.desc_but_node.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_old,new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id_new,new cljs.core.Symbol(null,"id-new","id-new",-676347378,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desc-but-node","desc-but-node",-1407867310,null),new cljs.core.Symbol(null,"id-old","id-old",-1046757390,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)], null));
ob.core.pathcache192061 = info192062;

return info192062;
})():info__17750__auto__);
var precompiled192063 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192063.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc_but_node,id_old,id_new], null));
} else {
return precompiled192063;
}
})(),dom));
var old_faded_trs = ob.core.get_trs_data.call(null,old_faded,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(4),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
var old_contracted = ob.core.update_styles.call(null,new cljs.core.Keyword(null,"contract","contract",798152745),old_faded);
var old_contracted_trs = ob.core.get_trs_data.call(null,old_contracted,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(10),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
var new_data = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192064;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192065 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc,new cljs.core.Var(function(){return ob.core.desc;},new cljs.core.Symbol("ob.core","desc","ob.core/desc",1690967277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc","desc",-560950005,null),"src/ob/core.cljs",13,1,155,155,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc)?ob.core.desc.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc","desc",-560950005,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,id_new,new cljs.core.Symbol(null,"id-new","id-new",-676347378,null))], null),cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol(null,"id-new","id-new",-676347378,null)], null));
ob.core.pathcache192064 = info192065;

return info192065;
})():info__17750__auto__);
var precompiled192066 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192066.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc,id_new], null));
} else {
return precompiled192066;
}
})(),dom);
var new_trs = ob.core.get_trs_data.call(null,new_data,(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dur","dur",1464522452),(0),new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),old_faded,new cljs.core.Keyword(null,"trs","trs",1104008633),old_faded_trs], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"data","data",-232669377),old_contracted,new cljs.core.Keyword(null,"trs","trs",1104008633),old_contracted_trs], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"data","data",-232669377),new_data,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_old,new cljs.core.Keyword("id","post","id/post",269696948),id_new,new cljs.core.Keyword(null,"trs","trs",1104008633),new_trs], null)], null);
}));
cljs.core._add_method.call(null,ob.event_loop.gen_frames,new cljs.core.Keyword(null,"replace-w-new-code","replace-w-new-code",1226585016),(function (p__192067){
var map__192068 = p__192067;
var map__192068__$1 = cljs.core.__destructure_map.call(null,map__192068);
var id_new_STAR_ = cljs.core.get.call(null,map__192068__$1,new cljs.core.Keyword(null,"id-new*","id-new*",-999568836));
var id_old = cljs.core.get.call(null,map__192068__$1,new cljs.core.Keyword(null,"id-old","id-old",1607678379));
var new$ = cljs.core.get.call(null,map__192068__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var dom = cljs.core.get.call(null,map__192068__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var data = ob.core.idx_clj__GT_data.call(null,new$);
var data__$1 = ob.core.update_depth.call(null,id_new_STAR_,data);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword("id","pre","id/pre",2118460226),id_old,new cljs.core.Keyword("id","post","id/post",269696948),id_new_STAR_], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-process","init-process",812674406),(function (db,p__192069){
var vec__192070 = p__192069;
var _ = cljs.core.nth.call(null,vec__192070,(0),null);
var stream = cljs.core.nth.call(null,vec__192070,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192073;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192074 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"process","process",1643192938)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"process","process",1643192938)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache192073 = info192074;

return info192074;
})():info__17750__auto__);
var precompiled192075 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192075.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"process","process",1643192938)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled192075;
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
cljs.core.println.call(null,"########################");

cljs.core.println.call(null,new cljs.core.Keyword("op","frame","op/frame",-1711083195).cljs$core$IFn$_invoke$arity$1(a));

if(cljs.core.truth_(ob.core.completed_QMARK_.call(null,new cljs.core.Keyword("op","frame","op/frame",-1711083195).cljs$core$IFn$_invoke$arity$1(a)))){
return ob.event_loop.animate_BANG_.call(null,a);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"trigger-next-event!","trigger-next-event!",165377769),(function (p__192076,_){
var map__192077 = p__192076;
var map__192077__$1 = cljs.core.__destructure_map.call(null,map__192077);
var db = cljs.core.get.call(null,map__192077__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192078;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192079 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache192078 = info192079;

return info192079;
})():info__17750__auto__);
var precompiled192080 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192080.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword("id","next-db","id/next-db",616177479)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled192080;
}
})(),db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"call-animation","call-animation",1732104032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"fastforward","fastforward",-1913774852)], null)], null);
} else {
var vec__192081 = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192084;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192085 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"process","process",1643192938)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"process","process",1643192938)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache192084 = info192085;

return info192085;
})():info__17750__auto__);
var precompiled192086 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192086.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"process","process",1643192938)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled192086;
}
})(),db);
var seq__192082 = cljs.core.seq.call(null,vec__192081);
var first__192083 = cljs.core.first.call(null,seq__192082);
var seq__192082__$1 = cljs.core.next.call(null,seq__192082);
var a = first__192083;
var as = seq__192082__$1;
var db__$1 = com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192087;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192088 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"process","process",1643192938)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"process","process",1643192938)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache192087 = info192088;

return info192088;
})():info__17750__auto__);
var precompiled192089 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192089.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"process","process",1643192938)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled192089;
}
})(),as,db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"call-animation","call-animation",1732104032),a], null);
}
}));
ob.core.form = ob.utils.walk_ids.call(null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),new cljs.core.Symbol(null,"n","n",-2092305744,null)),(1),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(1))))))),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(4))));
ob.core.Y = cljs.core.list(cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"self","self",93102628,null)], null),cljs.core.list(new cljs.core.Symbol(null,"self","self",93102628,null),new cljs.core.Symbol(null,"self","self",93102628,null))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"next","next",1522830042,null)], null),cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"next","next",1522830042,null)),new cljs.core.Symbol(null,"value","value",1946509744,null))))))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fact","fact",840714996,null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),(1),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(1)))))))),(2));
ob.core.form_STAR_ = ob.utils.walk_ids.call(null,ob.core.Y);
ob.core.init_eval_button = (function ob$core$init_eval_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.core.init_code_eval.call(null,ob.core.form);
})], null),"Init Code Eval!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"rewind","rewind",-669264915)], null));
})], null),"<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger-next-event!","trigger-next-event!",165377769)], null));
})], null),">"], null)], null);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-db","current-db",213667882),(function (db,_){
return com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192090;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192091 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null))], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache192090 = info192091;

return info192091;
})():info__17750__auto__);
var precompiled192092 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192092.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB], null));
} else {
return precompiled192092;
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
var G__192093 = display;
var G__192094 = redirect_id;
display = G__192093;
id = G__192094;
continue;
} else {
return datum;
}
break;
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->data","id->data",-1544872090),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-display","current-display",1699487712)], null),(function (display,p__192095){
var vec__192096 = p__192095;
var _ = cljs.core.nth.call(null,vec__192096,(0),null);
var id = cljs.core.nth.call(null,vec__192096,(1),null);
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
var db__$1 = com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192099;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192100 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.db_nav.CURR_DB,new cljs.core.Var(function(){return ob.db_nav.CURR_DB;},new cljs.core.Symbol("ob.db-nav","CURR-DB","ob.db-nav/CURR-DB",1172555230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ob.db-nav","ob.db-nav",1278766428,null),new cljs.core.Symbol(null,"CURR-DB","CURR-DB",110998959,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/db_nav.cljs",(13),(1),(42),(42),cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.db_nav.CURR_DB)?ob.db_nav.CURR_DB.cljs$lang$test:null)])),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null),new cljs.core.Keyword(null,"display","display",242065432)], null),new cljs.core.Symbol("db","CURR-DB","db/CURR-DB",110993965,null)], null));
ob.core.pathcache192099 = info192100;

return info192100;
})():info__17750__auto__);
var precompiled192101 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192101.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.db_nav.CURR_DB,new cljs.core.Keyword(null,"display","display",242065432)], null),ob.db_nav.CURR_DB], null));
} else {
return precompiled192101;
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
var G__192103 = arguments.length;
switch (G__192103) {
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
})], null),"Expand"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Animation Speed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"value","value",305978217),ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trs-speed-slider-val","trs-speed-slider-val",-1390043057)], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__192105_SHARP_){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-trs-speed","update-trs-speed",-485374553),p1__192105_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-pause","toggle-pause",1648289919)], null));
})], null),ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused?","paused?",-135058553)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.event_loop.animate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("op","frame","op/frame",-1711083195),new cljs.core.Keyword(null,"rewind","rewind",-669264915)], null));
})], null),"Undo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.init_eval_button], null)], null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-trs-speed","update-trs-speed",-485374553),(function (db,p__192106){
var vec__192107 = p__192106;
var _ = cljs.core.nth.call(null,vec__192107,(0),null);
var speed = cljs.core.nth.call(null,vec__192107,(1),null);
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
var vec__192111 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__192111,(0),null);
var left = cljs.core.nth.call(null,vec__192111,(1),null);
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
var seq__192115_192147 = cljs.core.seq.call(null,styles);
var chunk__192116_192148 = null;
var count__192117_192149 = (0);
var i__192118_192150 = (0);
while(true){
if((i__192118_192150 < count__192117_192149)){
var vec__192125_192151 = cljs.core._nth.call(null,chunk__192116_192148,i__192118_192150);
var k_192152 = cljs.core.nth.call(null,vec__192125_192151,(0),null);
var v_192153 = cljs.core.nth.call(null,vec__192125_192151,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_192152))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_192152,selection.selection().style(k_192152));
} else {
}

selection.style(k_192152,v_192153);


var G__192154 = seq__192115_192147;
var G__192155 = chunk__192116_192148;
var G__192156 = count__192117_192149;
var G__192157 = (i__192118_192150 + (1));
seq__192115_192147 = G__192154;
chunk__192116_192148 = G__192155;
count__192117_192149 = G__192156;
i__192118_192150 = G__192157;
continue;
} else {
var temp__5720__auto___192158 = cljs.core.seq.call(null,seq__192115_192147);
if(temp__5720__auto___192158){
var seq__192115_192159__$1 = temp__5720__auto___192158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__192115_192159__$1)){
var c__4679__auto___192160 = cljs.core.chunk_first.call(null,seq__192115_192159__$1);
var G__192161 = cljs.core.chunk_rest.call(null,seq__192115_192159__$1);
var G__192162 = c__4679__auto___192160;
var G__192163 = cljs.core.count.call(null,c__4679__auto___192160);
var G__192164 = (0);
seq__192115_192147 = G__192161;
chunk__192116_192148 = G__192162;
count__192117_192149 = G__192163;
i__192118_192150 = G__192164;
continue;
} else {
var vec__192128_192165 = cljs.core.first.call(null,seq__192115_192159__$1);
var k_192166 = cljs.core.nth.call(null,vec__192128_192165,(0),null);
var v_192167 = cljs.core.nth.call(null,vec__192128_192165,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_192166))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_192166,selection.selection().style(k_192166));
} else {
}

selection.style(k_192166,v_192167);


var G__192168 = cljs.core.next.call(null,seq__192115_192159__$1);
var G__192169 = null;
var G__192170 = (0);
var G__192171 = (0);
seq__192115_192147 = G__192168;
chunk__192116_192148 = G__192169;
count__192117_192149 = G__192170;
i__192118_192150 = G__192171;
continue;
}
} else {
}
}
break;
}
} else {
var seq__192131_192172 = cljs.core.seq.call(null,styles);
var chunk__192132_192173 = null;
var count__192133_192174 = (0);
var i__192134_192175 = (0);
while(true){
if((i__192134_192175 < count__192133_192174)){
var vec__192141_192176 = cljs.core._nth.call(null,chunk__192132_192173,i__192134_192175);
var k_192177 = cljs.core.nth.call(null,vec__192141_192176,(0),null);
var __192178 = cljs.core.nth.call(null,vec__192141_192176,(1),null);
selection.style(k_192177,cljs.core.deref.call(null,coords).call(null,k_192177));


var G__192179 = seq__192131_192172;
var G__192180 = chunk__192132_192173;
var G__192181 = count__192133_192174;
var G__192182 = (i__192134_192175 + (1));
seq__192131_192172 = G__192179;
chunk__192132_192173 = G__192180;
count__192133_192174 = G__192181;
i__192134_192175 = G__192182;
continue;
} else {
var temp__5720__auto___192183 = cljs.core.seq.call(null,seq__192131_192172);
if(temp__5720__auto___192183){
var seq__192131_192184__$1 = temp__5720__auto___192183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__192131_192184__$1)){
var c__4679__auto___192185 = cljs.core.chunk_first.call(null,seq__192131_192184__$1);
var G__192186 = cljs.core.chunk_rest.call(null,seq__192131_192184__$1);
var G__192187 = c__4679__auto___192185;
var G__192188 = cljs.core.count.call(null,c__4679__auto___192185);
var G__192189 = (0);
seq__192131_192172 = G__192186;
chunk__192132_192173 = G__192187;
count__192133_192174 = G__192188;
i__192134_192175 = G__192189;
continue;
} else {
var vec__192144_192190 = cljs.core.first.call(null,seq__192131_192184__$1);
var k_192191 = cljs.core.nth.call(null,vec__192144_192190,(0),null);
var __192192 = cljs.core.nth.call(null,vec__192144_192190,(1),null);
selection.style(k_192191,cljs.core.deref.call(null,coords).call(null,k_192191));


var G__192193 = cljs.core.next.call(null,seq__192131_192184__$1);
var G__192194 = null;
var G__192195 = (0);
var G__192196 = (0);
seq__192131_192172 = G__192193;
chunk__192132_192173 = G__192194;
count__192133_192174 = G__192195;
i__192134_192175 = G__192196;
continue;
}
} else {
}
}
break;
}
}
}catch (e192114){if((e192114 instanceof Error)){
var e_192197 = e192114;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e192114;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___192199 = arguments.length;
var i__4865__auto___192200 = (0);
while(true){
if((i__4865__auto___192200 < len__4864__auto___192199)){
args__4870__auto__.push((arguments[i__4865__auto___192200]));

var G__192201 = (i__4865__auto___192200 + (1));
i__4865__auto___192200 = G__192201;
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
(ob.core.compose.cljs$lang$applyTo = (function (seq192198){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq192198));
}));

ob.core._transition = (function ob$core$_transition(p__192204){
var map__192205 = p__192204;
var map__192205__$1 = cljs.core.__destructure_map.call(null,map__192205);
var delay = cljs.core.get.call(null,map__192205__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__192205__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__192206 = s__$1;
var G__192206__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__192206(p1__192202_SHARP_){
return p1__192202_SHARP_.delay(delay);
}):G__192206);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__192206(p1__192203_SHARP_){
return p1__192203_SHARP_.duration(duration);
});
} else {
return G__192206__$1;
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
var len__4864__auto___192213 = arguments.length;
var i__4865__auto___192214 = (0);
while(true){
if((i__4865__auto___192214 < len__4864__auto___192213)){
args__4870__auto__.push((arguments[i__4865__auto___192214]));

var G__192215 = (i__4865__auto___192214 + (1));
i__4865__auto___192214 = G__192215;
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
var seq__192209 = cljs.core.seq.call(null,fs);
var chunk__192210 = null;
var count__192211 = (0);
var i__192212 = (0);
while(true){
if((i__192212 < count__192211)){
var f__$1 = cljs.core._nth.call(null,chunk__192210,i__192212);
f__$1.call(null,sel,ff_QMARK_);


var G__192216 = seq__192209;
var G__192217 = chunk__192210;
var G__192218 = count__192211;
var G__192219 = (i__192212 + (1));
seq__192209 = G__192216;
chunk__192210 = G__192217;
count__192211 = G__192218;
i__192212 = G__192219;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__192209);
if(temp__5720__auto__){
var seq__192209__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__192209__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__192209__$1);
var G__192220 = cljs.core.chunk_rest.call(null,seq__192209__$1);
var G__192221 = c__4679__auto__;
var G__192222 = cljs.core.count.call(null,c__4679__auto__);
var G__192223 = (0);
seq__192209 = G__192220;
chunk__192210 = G__192221;
count__192211 = G__192222;
i__192212 = G__192223;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__192209__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__192224 = cljs.core.next.call(null,seq__192209__$1);
var G__192225 = null;
var G__192226 = (0);
var G__192227 = (0);
seq__192209 = G__192224;
chunk__192210 = G__192225;
count__192211 = G__192226;
i__192212 = G__192227;
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
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq192207){
var G__192208 = cljs.core.first.call(null,seq192207);
var seq192207__$1 = cljs.core.next.call(null,seq192207);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__192208,seq192207__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__192229 = arguments.length;
switch (G__192229) {
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
var vec__192230 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__192230,(0),null);
var l = cljs.core.nth.call(null,vec__192230,(1),null);
var w = cljs.core.nth.call(null,vec__192230,(2),null);
var h = cljs.core.nth.call(null,vec__192230,(3),null);
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
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192234;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192235 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(826),(828),cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
ob.core.pathcache192234 = info192235;

return info192235;
})():info__17750__auto__);
var precompiled192236 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192236.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.END], null),com.rpl.specter.END], null));
} else {
return precompiled192236;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.apply.call(null,cljs.core.merge,db,data));
});
/**
 * Prewalks the structure, but inserts the transformed branch
 *   as the first argument to the leaf nodes.
 */
ob.core.PARA = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache192237;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192238 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.DISPENSE,new cljs.core.Var(function(){return com.rpl.specter.DISPENSE;},new cljs.core.Symbol("com.rpl.specter","DISPENSE","com.rpl.specter/DISPENSE",1567537873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"DISPENSE","DISPENSE",-792734648,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(1376),(1378),cljs.core.List.EMPTY,"Drops all collected values for subsequent navigation.",(cljs.core.truth_(com.rpl.specter.DISPENSE)?com.rpl.specter.DISPENSE.cljs$lang$test:null)])),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache192237 = info192238;

return info192238;
})():info__17750__auto__);
var precompiled192239 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192239.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one.call(null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p)], null),com.rpl.specter.stay_then_continue,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled192239;
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
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.core.pathcache192240;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192241 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.VAL,new cljs.core.Var(function(){return com.rpl.specter.VAL;},new cljs.core.Symbol("com.rpl.specter","VAL","com.rpl.specter/VAL",-880341749,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"VAL","VAL",1194436242,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(18),(1),(761),(761),cljs.core.List.EMPTY,null,(cljs.core.truth_(com.rpl.specter.VAL)?com.rpl.specter.VAL.cljs$lang$test:null)])),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache192240 = info192241;

return info192241;
})():info__17750__auto__);
var precompiled192242 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192242.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p,com.rpl.specter.VAL)], null),com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.VAL,com.rpl.specter.STAY], null));
} else {
return precompiled192242;
}
})());

return p;
}));
ob.core.para = (function ob$core$para(pred,f,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.core.pathcache192243;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info192244 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.PARA,new cljs.core.Var(function(){return ob.core.PARA;},new cljs.core.Symbol("ob.core","PARA","ob.core/PARA",1919217486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),"src/ob/core.cljs",10,1,1632,1632,cljs.core.List.EMPTY,"Prewalks the structure, but inserts the transformed branch\n  as the first argument to the leaf nodes.",(cljs.core.truth_(ob.core.PARA)?ob.core.PARA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null));
ob.core.pathcache192243 = info192244;

return info192244;
})():info__17750__auto__);
var precompiled192245 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled192245.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,null),ob.core.PARA.call(null,pred)], null),com.rpl.specter.collect_one,ob.core.PARA,pred], null));
} else {
return precompiled192245;
}
})(),f,structure);
});

//# sourceMappingURL=core.js.map
