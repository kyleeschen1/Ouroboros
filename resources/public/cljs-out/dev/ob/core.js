// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.core');
goog.require('cljs.core');
goog.require('ob.scroll');
goog.require('ob.code_to_hiccup');
goog.require('ob.analyzer');
goog.require('ob.data_to_hiccup');
goog.require('ob.defs');
goog.require('ob.utils');
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
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache24927;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24928 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache24927 = info24928;

return info24928;
})():info__17580__auto__);
var precompiled24929 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24929.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled24929;
}
})());

return p;
})();
ob.core.AST_WALK = com.rpl.specter.cond_path.call(null,cljs.core.map_QMARK_,com.rpl.specter.STAY,cljs.core.vector_QMARK_,com.rpl.specter.ALL,com.rpl.specter.STAY);


ob.core.AST_CHILDREN_select_STAR_ = (function ob$core$AST_CHILDREN_select_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache24930;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24931 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache24930 = info24931;

return info24931;
})():info__17580__auto__);
var precompiled24932 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24932.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled24932;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache24933;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24934 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache24933 = info24934;

return info24934;
})():info__17580__auto__);
var precompiled24935 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24935.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled24935;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache24936;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24937 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache24936 = info24937;

return info24937;
})():info__17580__auto__);
var precompiled24938 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24938.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled24938;
}
})(),next_fn,ast);
} else {
return null;
}
});

ob.core.AST_CHILDREN = (function (){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core24939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core24939 = (function (meta24940){
this.meta24940 = meta24940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core24939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24941,meta24940__$1){
var self__ = this;
var _24941__$1 = this;
return (new ob.core.t_ob$core24939(meta24940__$1));
}));

(ob.core.t_ob$core24939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24941){
var self__ = this;
var _24941__$1 = this;
return self__.meta24940;
}));

(ob.core.t_ob$core24939.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core24939.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,ast,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache24942;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24943 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache24942 = info24943;

return info24943;
})():info__17580__auto__);
var precompiled24944 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24944.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled24944;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache24945;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24946 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache24945 = info24946;

return info24946;
})():info__17580__auto__);
var precompiled24947 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24947.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled24947;
}
})(),next_fn,s);
} else {
return null;
}
}));

(ob.core.t_ob$core24939.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,ast,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache24948;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24949 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache24948 = info24949;

return info24949;
})():info__17580__auto__);
var precompiled24950 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24950.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled24950;
}
})(),next_fn,ast);
} else {
return null;
}
}));

(ob.core.t_ob$core24939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24940","meta24940",-325740042,null)], null);
}));

(ob.core.t_ob$core24939.cljs$lang$type = true);

(ob.core.t_ob$core24939.cljs$lang$ctorStr = "ob.core/t_ob$core24939");

(ob.core.t_ob$core24939.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core24939");
}));

/**
 * Positional factory function for ob.core/t_ob$core24939.
 */
ob.core.__GT_t_ob$core24939 = (function ob$core$__GT_t_ob$core24939(meta24940){
return (new ob.core.t_ob$core24939(meta24940));
});

}

return (new ob.core.t_ob$core24939(null));
})()
;
ob.core.AST_PRE_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache24951;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24952 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache24951 = info24952;

return info24952;
})():info__17580__auto__);
var precompiled24953 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24953.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.stay_then_continue,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled24953;
}
})());

return p;
})();
ob.core.AST_POST_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache24954;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info24955 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache24954 = info24955;

return info24955;
})():info__17580__auto__);
var precompiled24956 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled24956.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.continue_then_stay,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled24956;
}
})());

return p;
})();
ob.core.AST_DESC = ob.core.AST_POST_WALK;


ob.core.desc_select_STAR_ = (function ob$core$desc_select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$desc_select_STAR__$_gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__24961 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__24962 = null;
var count__24963 = (0);
var i__24964 = (0);
while(true){
if((i__24964 < count__24963)){
var c = cljs.core._nth.call(null,chunk__24962,i__24964);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__24992 = seq__24961;
var G__24993 = chunk__24962;
var G__24994 = count__24963;
var G__24995 = (i__24964 + (1));
seq__24961 = G__24992;
chunk__24962 = G__24993;
count__24963 = G__24994;
i__24964 = G__24995;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24961);
if(temp__5720__auto__){
var seq__24961__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24961__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__24961__$1);
var G__24996 = cljs.core.chunk_rest.call(null,seq__24961__$1);
var G__24997 = c__4679__auto__;
var G__24998 = cljs.core.count.call(null,c__4679__auto__);
var G__24999 = (0);
seq__24961 = G__24996;
chunk__24962 = G__24997;
count__24963 = G__24998;
i__24964 = G__24999;
continue;
} else {
var c = cljs.core.first.call(null,seq__24961__$1);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__25000 = cljs.core.next.call(null,seq__24961__$1);
var G__25001 = null;
var G__25002 = (0);
var G__25003 = (0);
seq__24961 = G__25000;
chunk__24962 = G__25001;
count__24963 = G__25002;
i__24964 = G__25003;
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

var seq__24969 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__24970 = null;
var count__24971 = (0);
var i__24972 = (0);
while(true){
if((i__24972 < count__24971)){
var c = cljs.core._nth.call(null,chunk__24970,i__24972);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__25004 = seq__24969;
var G__25005 = chunk__24970;
var G__25006 = count__24971;
var G__25007 = (i__24972 + (1));
seq__24969 = G__25004;
chunk__24970 = G__25005;
count__24971 = G__25006;
i__24972 = G__25007;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24969);
if(temp__5720__auto__){
var seq__24969__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24969__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__24969__$1);
var G__25008 = cljs.core.chunk_rest.call(null,seq__24969__$1);
var G__25009 = c__4679__auto__;
var G__25010 = cljs.core.count.call(null,c__4679__auto__);
var G__25011 = (0);
seq__24969 = G__25008;
chunk__24970 = G__25009;
count__24971 = G__25010;
i__24972 = G__25011;
continue;
} else {
var c = cljs.core.first.call(null,seq__24969__$1);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__25012 = cljs.core.next.call(null,seq__24969__$1);
var G__25013 = null;
var G__25014 = (0);
var G__25015 = (0);
seq__24969 = G__25012;
chunk__24970 = G__25013;
count__24971 = G__25014;
i__24972 = G__25015;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core24973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core24973 = (function (k,meta24974){
this.k = k;
this.meta24974 = meta24974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core24973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24975,meta24974__$1){
var self__ = this;
var _24975__$1 = this;
return (new ob.core.t_ob$core24973(self__.k,meta24974__$1));
}));

(ob.core.t_ob$core24973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24975){
var self__ = this;
var _24975__$1 = this;
return self__.meta24974;
}));

(ob.core.t_ob$core24973.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core24973.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__24980 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__24981 = null;
var count__24982 = (0);
var i__24983 = (0);
while(true){
if((i__24983 < count__24982)){
var c = cljs.core._nth.call(null,chunk__24981,i__24983);
ob$core$gather.call(null,c);


var G__25016 = seq__24980;
var G__25017 = chunk__24981;
var G__25018 = count__24982;
var G__25019 = (i__24983 + (1));
seq__24980 = G__25016;
chunk__24981 = G__25017;
count__24982 = G__25018;
i__24983 = G__25019;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24980);
if(temp__5720__auto__){
var seq__24980__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24980__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__24980__$1);
var G__25020 = cljs.core.chunk_rest.call(null,seq__24980__$1);
var G__25021 = c__4679__auto__;
var G__25022 = cljs.core.count.call(null,c__4679__auto__);
var G__25023 = (0);
seq__24980 = G__25020;
chunk__24981 = G__25021;
count__24982 = G__25022;
i__24983 = G__25023;
continue;
} else {
var c = cljs.core.first.call(null,seq__24980__$1);
ob$core$gather.call(null,c);


var G__25024 = cljs.core.next.call(null,seq__24980__$1);
var G__25025 = null;
var G__25026 = (0);
var G__25027 = (0);
seq__24980 = G__25024;
chunk__24981 = G__25025;
count__24982 = G__25026;
i__24983 = G__25027;
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

(ob.core.t_ob$core24973.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16730__auto__,vals__16731__auto__,db,next_fn__16732__auto__){
var self__ = this;
var this__16730__auto____$1 = this;
var next_fn = (function (s__16733__auto__){
return next_fn__16732__auto__.call(null,vals__16731__auto__,s__16733__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.update.call(null,cljs.core._deref.call(null,col),k__$1,next_fn));

var seq__24988 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__24989 = null;
var count__24990 = (0);
var i__24991 = (0);
while(true){
if((i__24991 < count__24990)){
var c = cljs.core._nth.call(null,chunk__24989,i__24991);
ob$core$gather.call(null,c);


var G__25028 = seq__24988;
var G__25029 = chunk__24989;
var G__25030 = count__24990;
var G__25031 = (i__24991 + (1));
seq__24988 = G__25028;
chunk__24989 = G__25029;
count__24990 = G__25030;
i__24991 = G__25031;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24988);
if(temp__5720__auto__){
var seq__24988__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24988__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__24988__$1);
var G__25032 = cljs.core.chunk_rest.call(null,seq__24988__$1);
var G__25033 = c__4679__auto__;
var G__25034 = cljs.core.count.call(null,c__4679__auto__);
var G__25035 = (0);
seq__24988 = G__25032;
chunk__24989 = G__25033;
count__24990 = G__25034;
i__24991 = G__25035;
continue;
} else {
var c = cljs.core.first.call(null,seq__24988__$1);
ob$core$gather.call(null,c);


var G__25036 = cljs.core.next.call(null,seq__24988__$1);
var G__25037 = null;
var G__25038 = (0);
var G__25039 = (0);
seq__24988 = G__25036;
chunk__24989 = G__25037;
count__24990 = G__25038;
i__24991 = G__25039;
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

(ob.core.t_ob$core24973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta24974","meta24974",1399804918,null)], null);
}));

(ob.core.t_ob$core24973.cljs$lang$type = true);

(ob.core.t_ob$core24973.cljs$lang$ctorStr = "ob.core/t_ob$core24973");

(ob.core.t_ob$core24973.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core24973");
}));

/**
 * Positional factory function for ob.core/t_ob$core24973.
 */
ob.core.__GT_t_ob$core24973 = (function ob$core$__GT_t_ob$core24973(k__$1,meta24974){
return (new ob.core.t_ob$core24973(k__$1,meta24974));
});

}

return (new ob.core.t_ob$core24973(k,null));
}));
ob.core.gen_paren_datum = (function ob$core$gen_paren_datum(parent_id,text,depth,tag){
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-bracket"].join(''),tag,"bracket"]),new cljs.core.Keyword(null,"name","name",1843675177),text], null)]);
});
ob.core.add_paren_data = (function ob$core$add_paren_data(data_row,p__25040){
var map__25041 = p__25040;
var map__25041__$1 = cljs.core.__destructure_map.call(null,map__25041);
var id = cljs.core.get.call(null,map__25041__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__25041__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__25041__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var vec__25042 = parens;
var op = cljs.core.nth.call(null,vec__25042,(0),null);
var cl = cljs.core.nth.call(null,vec__25042,(1),null);
var op_paren = ob.core.gen_paren_datum.call(null,id,op,depth,"opening");
var cl_paren = ob.core.gen_paren_datum.call(null,id,cl,depth,"closing");
var parens__$1 = cljs.core.merge.call(null,op_paren,cl_paren);
var paren_ids = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25045;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25046 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(749),(752),cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null));
ob.core.pathcache25045 = info25046;

return info25046;
})():info__17580__auto__);
var precompiled25047 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25047.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null),com.rpl.specter.MAP_KEYS], null));
} else {
return precompiled25047;
}
})(),parens__$1);
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.assoc.call(null,data_row,new cljs.core.Keyword(null,"parens","parens",1028661830),paren_ids)]),op_paren,cl_paren);
});
ob.core.macro__GT_pos_type = (function ob$core$macro__GT_pos_type(op){
var G__25048 = op;
var G__25048__$1 = (((G__25048 instanceof cljs.core.Keyword))?G__25048.fqn:null);
switch (G__25048__$1) {
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
var pred__25052 = (function (p1__25050_SHARP_,p2__25051_SHARP_){
return cljs.core.get.call(null,p1__25050_SHARP_,p2__25051_SHARP_);
});
var expr__25053 = op;
if(cljs.core.truth_(pred__25052.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"let","let",-1282412701),null,new cljs.core.Keyword(null,"loop","loop",-395552849),null], null), null),expr__25053))){
return new cljs.core.Keyword(null,"let","let",-1282412701);
} else {
if(cljs.core.truth_(pred__25052.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"macroexpand","macroexpand",-130598183),null], null), null),expr__25053))){
return ob.core.macro__GT_pos_type.call(null,op);
} else {
return op;
}
}
});
ob.core.sel__GT_datum = (function ob$core$sel__GT_datum(p__25055){
var map__25056 = p__25055;
var map__25056__$1 = cljs.core.__destructure_map.call(null,map__25056);
var sel = map__25056__$1;
var id = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var type = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var parent_id = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var child_ids = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
var parens = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var depth = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var pos_type = ob.core.op__GT_pos_type.call(null,op);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"depth","depth",1768663640)],[child_ids,name,op,cljs.core.PersistentArrayMap.EMPTY,pos_type,id,cljs.core.PersistentHashSet.createAsIfByAssoc([type,op]),parent_id,depth]);
});
ob.core.ast__GT_data = (function ob$core$ast__GT_data(var_args){
var G__25058 = arguments.length;
switch (G__25058) {
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
var sel = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25059;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25060 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_DESC,new cljs.core.Var(function(){return ob.core.AST_DESC;},new cljs.core.Symbol("ob.core","AST-DESC","ob.core/AST-DESC",-1179528306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),"src/ob/core.cljs",14,1,90,90,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_DESC)?ob.core.AST_DESC.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092)))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"id","id",-1388402092))], null),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)], null));
ob.core.pathcache25059 = info25060;

return info25060;
})():info__17580__auto__);
var precompiled25061 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25061.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.AST_DESC,com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null),ob.core.AST_DESC,com.rpl.specter.pred], null));
} else {
return precompiled25061;
}
})(),ast);
var iter__4652__auto__ = (function ob$core$iter__25062(s__25063){
return (new cljs.core.LazySeq(null,(function (){
var s__25063__$1 = s__25063;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25063__$1);
if(temp__5720__auto__){
var s__25063__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25063__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__25063__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__25065 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__25064 = (0);
while(true){
if((i__25064 < size__4651__auto__)){
var map__25066 = cljs.core._nth.call(null,c__4650__auto__,i__25064);
var map__25066__$1 = cljs.core.__destructure_map.call(null,map__25066);
var s = map__25066__$1;
var id__$1 = cljs.core.get.call(null,map__25066__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__25066__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
cljs.core.chunk_append.call(null,b__25065,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})());

var G__25069 = (i__25064 + (1));
i__25064 = G__25069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25065),ob$core$iter__25062.call(null,cljs.core.chunk_rest.call(null,s__25063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25065),null);
}
} else {
var map__25067 = cljs.core.first.call(null,s__25063__$2);
var map__25067__$1 = cljs.core.__destructure_map.call(null,map__25067);
var s = map__25067__$1;
var id__$1 = cljs.core.get.call(null,map__25067__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parens = cljs.core.get.call(null,map__25067__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
return cljs.core.cons.call(null,(function (){var datum = ob.core.sel__GT_datum.call(null,s);
if(cljs.core.not.call(null,parens)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,datum]);
} else {
return ob.core.add_paren_data.call(null,datum,s);
}
})(),ob$core$iter__25062.call(null,cljs.core.rest.call(null,s__25063__$2)));
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
var dims = ob.core.get_dims.call(null,"rooty");
var f = (function (id,style){
var dims__$1 = cljs.core.get.call(null,dims,id);
return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),ob.core.px_STAR_.call(null,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dims__$1)),new cljs.core.Keyword(null,"left","left",-399115937),ob.core.px_STAR_.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(dims__$1)));
});
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25070;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25071 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.keys,new cljs.core.Var(function(){return cljs.core.keys;},new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),"cljs/core.cljs",(11),(1),(9050),(9050),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",-1282745308,null)], null)),"Returns a sequence of the map's keys, in the same order as (seq map).",(cljs.core.truth_(cljs.core.keys)?cljs.core.keys.cljs$lang$test:null)])),new cljs.core.Symbol(null,"keys","keys",-1586012071,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,dims,new cljs.core.Symbol(null,"dims","dims",1174008638,null))], null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null)))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dims","dims",1174008638,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null))),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"dims","dims",1174008638,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache25070 = info25071;

return info25071;
})():info__17580__auto__);
var precompiled25072 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25072.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,cljs.core.keys.call(null,dims)),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.submap,cljs.core.keys,dims,com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one], null));
} else {
return precompiled25072;
}
})(),f,db);
});
ob.core.trsf = (function ob$core$trsf(db,pred_fn){
var max_depth = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25073;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25074 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache25073 = info25074;

return info25074;
})():info__17580__auto__);
var precompiled25075 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25075.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled25075;
}
})(),db));
var dims = ob.core.get_dims.call(null,"rooty");
var interval = ((10000) / max_depth);
var f = (function (depth,classes,style){
var delay = ((cljs.core.contains_QMARK_.call(null,classes,"bracket"))?(0):(0));
return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),"4s",new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((delay + ((max_depth - depth) * interval))),"ms"].join(''),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0px");
});
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25076;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25077 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"depth","depth",1768663640))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"class","class",-2030961996))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"depth","depth",1768663640)),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache25076 = info25077;

return info25077;
})():info__17580__auto__);
var precompiled25078 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25078.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640)),com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled25078;
}
})(),f,db);
});
ob.core.expand = (function ob$core$expand(db,pred_fn){
var max_depth = cljs.core.apply.call(null,cljs.core.max,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25079;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25080 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),new cljs.core.Keyword(null,"depth","depth",1768663640)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache25079 = info25080;

return info25080;
})():info__17580__auto__);
var precompiled25081 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25081.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),com.rpl.specter.MAP_VALS], null));
} else {
return precompiled25081;
}
})(),db));
var dims = ob.core.get_dims.call(null,"rooty");
var interval = ((10000) / max_depth);
var f = (function (depth,id,style){
return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),"4s",new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((depth * interval)),"ms"].join(''),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),null,new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),null,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),null,new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),null);
});
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25082;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25083 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"depth","depth",1768663640))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"depth","depth",1768663640)),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
ob.core.pathcache25082 = info25083;

return info25083;
})():info__17580__auto__);
var precompiled25084 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25084.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640)),com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"style","style",-496642736)], null),com.rpl.specter.MAP_VALS,com.rpl.specter.collect_one,com.rpl.specter.collect_one], null));
} else {
return precompiled25084;
}
})(),f,db);
});
/**
 * Prewalks the structure, but inserts the transformed branch
 *   as the first argument to the leaf nodes.
 */
ob.core.PARA = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache25085;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25086 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.DISPENSE,new cljs.core.Var(function(){return com.rpl.specter.DISPENSE;},new cljs.core.Symbol("com.rpl.specter","DISPENSE","com.rpl.specter/DISPENSE",1567537873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"DISPENSE","DISPENSE",-792734648,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(1376),(1378),cljs.core.List.EMPTY,"Drops all collected values for subsequent navigation.",(cljs.core.truth_(com.rpl.specter.DISPENSE)?com.rpl.specter.DISPENSE.cljs$lang$test:null)])),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null))),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","DISPENSE","s/DISPENSE",-792734213,null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache25085 = info25086;

return info25086;
})():info__17580__auto__);
var precompiled25087 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25087.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one.call(null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p)], null),com.rpl.specter.stay_then_continue,com.rpl.specter.DISPENSE,com.rpl.specter.collect_one,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled25087;
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
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.core.pathcache25088;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25089 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.VAL,new cljs.core.Var(function(){return com.rpl.specter.VAL;},new cljs.core.Symbol("com.rpl.specter","VAL","com.rpl.specter/VAL",-880341749,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"VAL","VAL",1194436242,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(18),(1),(761),(761),cljs.core.List.EMPTY,null,(cljs.core.truth_(com.rpl.specter.VAL)?com.rpl.specter.VAL.cljs$lang$test:null)])),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","VAL","s/VAL",1194436141,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache25088 = info25089;

return info25089;
})():info__17580__auto__);
var precompiled25090 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25090.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p,com.rpl.specter.VAL)], null),com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.VAL,com.rpl.specter.STAY], null));
} else {
return precompiled25090;
}
})());

return p;
}));
ob.core.para = (function ob$core$para(pred,f,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25091;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25092 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.PARA,new cljs.core.Var(function(){return ob.core.PARA;},new cljs.core.Symbol("ob.core","PARA","ob.core/PARA",1919217486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),"src/ob/core.cljs",10,1,352,352,cljs.core.List.EMPTY,"Prewalks the structure, but inserts the transformed branch\n  as the first argument to the leaf nodes.",(cljs.core.truth_(ob.core.PARA)?ob.core.PARA.cljs$lang$test:null)])),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred,new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),null),cljs.core.list(new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null))], null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Symbol(null,"PARA","PARA",-860133784,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null));
ob.core.pathcache25091 = info25092;

return info25092;
})():info__17580__auto__);
var precompiled25093 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25093.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,null),ob.core.PARA.call(null,pred)], null),com.rpl.specter.collect_one,ob.core.PARA,pred], null));
} else {
return precompiled25093;
}
})(),f,structure);
});
ob.core.code = ob.code_to_hiccup.code__GT_hiccup.call(null,ob.analyzer.analyze.call(null,ob.utils.walk_ids.call(null,cljs.core.list(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),(0)),(1),(2)),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"c","c",-122660552,null),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),"null",new cljs.core.Symbol(null,"b","b",-1172211299,null),"null"], null), null)),new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.list(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"maps","maps",-71029607,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(3),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),(1),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"g","g",1738089905),(4),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"k","k",-2146297393),(7)], null),new cljs.core.Keyword(null,"f","f",-1597136552),(4)], null)], null)),new cljs.core.Symbol(null,"zak","zak",-179600060,null),cljs.core.list(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),(6),new cljs.core.Symbol(null,"z","z",851004344,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),(6),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),(6234567)], null),new cljs.core.Symbol(null,"h","h",-1544777029,null))], null),"eggs")], null),new cljs.core.Symbol(null,"jowls","jowls",222324398,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(4),(5),(37)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(16),(7)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(14),(35)))))),cljs.core.PersistentArrayMap.EMPTY));
ob.core.sample_code = cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"z","z",851004344,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Keyword(null,"c","c",-1763192079),(3),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(4)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),true,(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))))))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),(3),(4),(5)))], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null)], null),cljs.core.list(new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"z","z",851004344,null)], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"y","y",-117328249,null)),new cljs.core.Symbol(null,"z","z",851004344,null))))))));
ob.core.code__GT_DB = (function ob$core$code__GT_DB(db,code){
var ast = ob.utils.walk_ids.call(null,code);
var data = ob.core.ast__GT_data.call(null,ob.analyzer.analyze.call(null,ast,cljs.core.PersistentArrayMap.EMPTY));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ast));
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25094;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25095 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(826),(828),cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
ob.core.pathcache25094 = info25095;

return info25095;
})():info__17580__auto__);
var precompiled25096 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25096.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.END], null),com.rpl.specter.END], null));
} else {
return precompiled25096;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.apply.call(null,cljs.core.merge,db,data));
});
ob.core.save = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"before","before",-1633692388),(function (ctx){
var cache = (function (db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"history","history",-247395220),db);
});
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25097;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25098 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)], null));
ob.core.pathcache25097 = info25098;

return info25098;
})():info__17580__auto__);
var precompiled25099 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25099.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)], null));
} else {
return precompiled25099;
}
})(),cache,ctx);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->data","id->data",-1544872090),(function (p__25100,p__25101){
var map__25102 = p__25100;
var map__25102__$1 = cljs.core.__destructure_map.call(null,map__25102);
var display = cljs.core.get.call(null,map__25102__$1,new cljs.core.Keyword(null,"display","display",242065432));
var vec__25103 = p__25101;
var _ = cljs.core.nth.call(null,vec__25103,(0),null);
var id = cljs.core.nth.call(null,vec__25103,(1),null);
return cljs.core.get.call(null,display,id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-code","add-code",1030596725),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.save], null),(function (db,p__25106){
var vec__25107 = p__25106;
var _ = cljs.core.nth.call(null,vec__25107,(0),null);
var code = cljs.core.nth.call(null,vec__25107,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),ob.core.code__GT_DB,code);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (db,_){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.save], null),(function (db,p__25111){
var vec__25112 = p__25111;
var seq__25113 = cljs.core.seq.call(null,vec__25112);
var first__25114 = cljs.core.first.call(null,seq__25113);
var seq__25113__$1 = cljs.core.next.call(null,seq__25113);
var _ = first__25114;
var first__25114__$1 = cljs.core.first.call(null,seq__25113__$1);
var seq__25113__$2 = cljs.core.next.call(null,seq__25113__$1);
var f = first__25114__$1;
var args = seq__25113__$2;
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),(function (p1__25110_SHARP_){
return cljs.core.apply.call(null,f,p1__25110_SHARP_,args);
}));
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-trs-records","active-trs-records",-200187773),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trs-records","trs-records",636922154)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-trs-id","active-trs-id",-1054853546)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-dir","time-dir",-1167029013)], null),(function (p__25115,_){
var vec__25116 = p__25115;
var records = cljs.core.nth.call(null,vec__25116,(0),null);
var active_id = cljs.core.nth.call(null,vec__25116,(1),null);
var time_dir = cljs.core.nth.call(null,vec__25116,(2),null);
return cljs.core.get_in.call(null,records,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_id,time_dir], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"id->trs","id->trs",-1747753659),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-trs-records","active-trs-records",-200187773)], null),(function (records,p__25119){
var vec__25120 = p__25119;
var _ = cljs.core.nth.call(null,vec__25120,(0),null);
var id = cljs.core.nth.call(null,vec__25120,(1),null);
return cljs.core.get.call(null,records,id);
}));
/**
 * Initializes transition data.
 */
ob.core.init_trs = (function ob$core$init_trs(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("trs","active-id","trs/active-id",-59057979),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword("trs","time-dir","trs/time-dir",-1166586702),new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.Keyword("trs","records","trs/records",1326543861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434)], null)], null),new cljs.core.Keyword(null,"yams","yams",1125085494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yams","yams",1125085494)], null)], null)], null)], null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-trs","update-trs",-1610921087),(function (db,p__25123){
var vec__25124 = p__25123;
var _ = cljs.core.nth.call(null,vec__25124,(0),null);
var trn_name = cljs.core.nth.call(null,vec__25124,(1),null);
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
ob.core.animate = (function ob$core$animate(db,p__25127){
var vec__25128 = p__25127;
var op = cljs.core.nth.call(null,vec__25128,(0),null);
var params = cljs.core.nth.call(null,vec__25128,(1),null);
var td = cljs.core.get.call(null,db,new cljs.core.Keyword("trs","time-dir","trs/time-dir",-1166586702),new cljs.core.Keyword(null,"forward","forward",-557345303));
var data = ob.core._animate.call(null,op,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(db),params);
var db_STAR_ = cljs.core.update.call(null,db,new cljs.core.Keyword(null,"display","display",242065432),cljs.core.merge,data);
var db_STAR___$1 = cljs.core.assoc.call(null,db,new cljs.core.Keyword("id","version","id/version",425264709),cljs.core.gensym.call(null,"version-"));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("edit","op","edit/op",-1885908921),op,new cljs.core.Keyword("edit","id","edit/id",-1385685942),cljs.core.gensym.call(null,"edit/"),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"n-rows","n-rows",1762514969),cljs.core.count.call(null,data),new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"db*","db*",409460909),db_STAR___$1], null);
});
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core._animate !== 'undefined')){
} else {
ob.core._animate = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.core","-animate"),(function (op,db,params){
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.core._animate,new cljs.core.Keyword(null,"append","append",-291298229),(function (_,db,p__25131){
var map__25132 = p__25131;
var map__25132__$1 = cljs.core.__destructure_map.call(null,map__25132);
var code = cljs.core.get.call(null,map__25132__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var ast = ob.utils.walk_ids.call(null,code);
var data = ob.core.ast__GT_data.call(null,ob.analyzer.analyze.call(null,ast,cljs.core.PersistentArrayMap.EMPTY));
var local_root_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ast));
var data__$1 = cljs.core.apply.call(null,cljs.core.merge,db,data);
var root_STAR_ = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25133;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25134 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),"ob.core",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
ob.core.pathcache25133 = info25134;

return info25134;
})():info__17580__auto__);
var precompiled25135 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25135.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return precompiled25135;
}
})(),com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17580__auto__ = ob.core.pathcache25136;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info25137 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.END,new cljs.core.Var(function(){return com.rpl.specter.END;},new cljs.core.Symbol("com.rpl.specter","END","com.rpl.specter/END",1079322619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"END","END",-169551588,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(826),(828),cljs.core.List.EMPTY,"Navigate to the empty subsequence after the last element of the collection.",(cljs.core.truth_(com.rpl.specter.END)?com.rpl.specter.END.cljs$lang$test:null)])),new cljs.core.Symbol("s","END","s/END",-169551199,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null),new cljs.core.Symbol("s","END","s/END",-169551199,null)], null));
ob.core.pathcache25136 = info25137;

return info25137;
})():info__17580__auto__);
var precompiled25138 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled25138.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),com.rpl.specter.END], null),com.rpl.specter.END], null));
} else {
return precompiled25138;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [local_root_id], null),db));
return cljs.core.merge.call(null,root_STAR_,data__$1);
}));
cljs.core._add_method.call(null,ob.core._animate,new cljs.core.Keyword(null,"remove","remove",-131428414),(function (_,___$1,___$2){
return null;
}));
cljs.core._add_method.call(null,ob.core._animate,new cljs.core.Keyword(null,"substitute","substitute",655857369),(function (_,___$1,___$2){
return null;
}));
cljs.core._add_method.call(null,ob.core._animate,new cljs.core.Keyword(null,"copy","copy",-1077617309),(function (_,___$1,___$2){
return null;
}));
cljs.core._add_method.call(null,ob.core._animate,new cljs.core.Keyword(null,"modify","modify",-1261040869),(function (_,___$1,___$2){
return null;
}));
cljs.core._add_method.call(null,ob.core._animate,new cljs.core.Keyword(null,"transition","transition",765692007),(function (_,___$1,___$2){
return null;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.merge.call(null,ob.core.init_trs.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null));
}));
ob.core.init = (function ob$core$init(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
});
/**
 * Shorthand for generating
 * the style / attr map.
 */
ob.core.$ = (function ob$core$$(var_args){
var G__25140 = arguments.length;
switch (G__25140) {
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
ob.core.text_col = (function ob$core$text_col(state){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#text-col","div#text-col",-681412085),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"There is some exposition... here is some more exposition....\n     and now here is a ridiculously long word fmwk,;'f,ew;l'dffwm;lk'fkwefwelkfmk"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"Next line"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-code","add-code",1030596725),ob.core.sample_code], null));
})], null),"Add Code"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate","animate",1850194573),ob.core.trsf,(function (n){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(n));
})], null));
})], null),"Contract"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate","animate",1850194573),ob.core.expand], null));
})], null),"Expand"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-trs","update-trs",-1610921087),new cljs.core.Keyword(null,"yams","yams",1125085494)], null));
})], null),"Init"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ob.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
})], null),"Undo"], null)], null);
});
ob.core.code_col = (function ob$core$code_col(_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"top","top",-1856271961),"30px",new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"border","border",1444987323),"solid 2px white"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#rooty","div#rooty",-1935229444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,new cljs.core.Keyword(null,"root","root",-448657453),null], null)], null)], null);
});
ob.core.main_page = (function ob$core$main_page(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-page","div#main-page",973942128),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"5000px"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"token"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Ouroboros"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.text_col,state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.code_col,state], null)], null)], null);
});
ob.core.get_app_element = (function ob$core$get_app_element(){
return goog.dom.getElement("app");
});
ob.core.mount = (function ob$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.main_page,cljs.core.PersistentArrayMap.EMPTY], null),el);
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
var vec__25143 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__25143,(0),null);
var left = cljs.core.nth.call(null,vec__25143,(1),null);
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
var seq__25147_25179 = cljs.core.seq.call(null,styles);
var chunk__25148_25180 = null;
var count__25149_25181 = (0);
var i__25150_25182 = (0);
while(true){
if((i__25150_25182 < count__25149_25181)){
var vec__25157_25183 = cljs.core._nth.call(null,chunk__25148_25180,i__25150_25182);
var k_25184 = cljs.core.nth.call(null,vec__25157_25183,(0),null);
var v_25185 = cljs.core.nth.call(null,vec__25157_25183,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_25184))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_25184,selection.selection().style(k_25184));
} else {
}

selection.style(k_25184,v_25185);


var G__25186 = seq__25147_25179;
var G__25187 = chunk__25148_25180;
var G__25188 = count__25149_25181;
var G__25189 = (i__25150_25182 + (1));
seq__25147_25179 = G__25186;
chunk__25148_25180 = G__25187;
count__25149_25181 = G__25188;
i__25150_25182 = G__25189;
continue;
} else {
var temp__5720__auto___25190 = cljs.core.seq.call(null,seq__25147_25179);
if(temp__5720__auto___25190){
var seq__25147_25191__$1 = temp__5720__auto___25190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25147_25191__$1)){
var c__4679__auto___25192 = cljs.core.chunk_first.call(null,seq__25147_25191__$1);
var G__25193 = cljs.core.chunk_rest.call(null,seq__25147_25191__$1);
var G__25194 = c__4679__auto___25192;
var G__25195 = cljs.core.count.call(null,c__4679__auto___25192);
var G__25196 = (0);
seq__25147_25179 = G__25193;
chunk__25148_25180 = G__25194;
count__25149_25181 = G__25195;
i__25150_25182 = G__25196;
continue;
} else {
var vec__25160_25197 = cljs.core.first.call(null,seq__25147_25191__$1);
var k_25198 = cljs.core.nth.call(null,vec__25160_25197,(0),null);
var v_25199 = cljs.core.nth.call(null,vec__25160_25197,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_25198))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_25198,selection.selection().style(k_25198));
} else {
}

selection.style(k_25198,v_25199);


var G__25200 = cljs.core.next.call(null,seq__25147_25191__$1);
var G__25201 = null;
var G__25202 = (0);
var G__25203 = (0);
seq__25147_25179 = G__25200;
chunk__25148_25180 = G__25201;
count__25149_25181 = G__25202;
i__25150_25182 = G__25203;
continue;
}
} else {
}
}
break;
}
} else {
var seq__25163_25204 = cljs.core.seq.call(null,styles);
var chunk__25164_25205 = null;
var count__25165_25206 = (0);
var i__25166_25207 = (0);
while(true){
if((i__25166_25207 < count__25165_25206)){
var vec__25173_25208 = cljs.core._nth.call(null,chunk__25164_25205,i__25166_25207);
var k_25209 = cljs.core.nth.call(null,vec__25173_25208,(0),null);
var __25210 = cljs.core.nth.call(null,vec__25173_25208,(1),null);
selection.style(k_25209,cljs.core.deref.call(null,coords).call(null,k_25209));


var G__25211 = seq__25163_25204;
var G__25212 = chunk__25164_25205;
var G__25213 = count__25165_25206;
var G__25214 = (i__25166_25207 + (1));
seq__25163_25204 = G__25211;
chunk__25164_25205 = G__25212;
count__25165_25206 = G__25213;
i__25166_25207 = G__25214;
continue;
} else {
var temp__5720__auto___25215 = cljs.core.seq.call(null,seq__25163_25204);
if(temp__5720__auto___25215){
var seq__25163_25216__$1 = temp__5720__auto___25215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25163_25216__$1)){
var c__4679__auto___25217 = cljs.core.chunk_first.call(null,seq__25163_25216__$1);
var G__25218 = cljs.core.chunk_rest.call(null,seq__25163_25216__$1);
var G__25219 = c__4679__auto___25217;
var G__25220 = cljs.core.count.call(null,c__4679__auto___25217);
var G__25221 = (0);
seq__25163_25204 = G__25218;
chunk__25164_25205 = G__25219;
count__25165_25206 = G__25220;
i__25166_25207 = G__25221;
continue;
} else {
var vec__25176_25222 = cljs.core.first.call(null,seq__25163_25216__$1);
var k_25223 = cljs.core.nth.call(null,vec__25176_25222,(0),null);
var __25224 = cljs.core.nth.call(null,vec__25176_25222,(1),null);
selection.style(k_25223,cljs.core.deref.call(null,coords).call(null,k_25223));


var G__25225 = cljs.core.next.call(null,seq__25163_25216__$1);
var G__25226 = null;
var G__25227 = (0);
var G__25228 = (0);
seq__25163_25204 = G__25225;
chunk__25164_25205 = G__25226;
count__25165_25206 = G__25227;
i__25166_25207 = G__25228;
continue;
}
} else {
}
}
break;
}
}
}catch (e25146){if((e25146 instanceof Error)){
var e_25229 = e25146;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e25146;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___25231 = arguments.length;
var i__4865__auto___25232 = (0);
while(true){
if((i__4865__auto___25232 < len__4864__auto___25231)){
args__4870__auto__.push((arguments[i__4865__auto___25232]));

var G__25233 = (i__4865__auto___25232 + (1));
i__4865__auto___25232 = G__25233;
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
(ob.core.compose.cljs$lang$applyTo = (function (seq25230){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25230));
}));

ob.core._transition = (function ob$core$_transition(p__25236){
var map__25237 = p__25236;
var map__25237__$1 = cljs.core.__destructure_map.call(null,map__25237);
var delay = cljs.core.get.call(null,map__25237__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__25237__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__25238 = s__$1;
var G__25238__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__25238(p1__25234_SHARP_){
return p1__25234_SHARP_.delay(delay);
}):G__25238);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__25238(p1__25235_SHARP_){
return p1__25235_SHARP_.duration(duration);
});
} else {
return G__25238__$1;
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
var len__4864__auto___25245 = arguments.length;
var i__4865__auto___25246 = (0);
while(true){
if((i__4865__auto___25246 < len__4864__auto___25245)){
args__4870__auto__.push((arguments[i__4865__auto___25246]));

var G__25247 = (i__4865__auto___25246 + (1));
i__4865__auto___25246 = G__25247;
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
var seq__25241 = cljs.core.seq.call(null,fs);
var chunk__25242 = null;
var count__25243 = (0);
var i__25244 = (0);
while(true){
if((i__25244 < count__25243)){
var f__$1 = cljs.core._nth.call(null,chunk__25242,i__25244);
f__$1.call(null,sel,ff_QMARK_);


var G__25248 = seq__25241;
var G__25249 = chunk__25242;
var G__25250 = count__25243;
var G__25251 = (i__25244 + (1));
seq__25241 = G__25248;
chunk__25242 = G__25249;
count__25243 = G__25250;
i__25244 = G__25251;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25241);
if(temp__5720__auto__){
var seq__25241__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25241__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__25241__$1);
var G__25252 = cljs.core.chunk_rest.call(null,seq__25241__$1);
var G__25253 = c__4679__auto__;
var G__25254 = cljs.core.count.call(null,c__4679__auto__);
var G__25255 = (0);
seq__25241 = G__25252;
chunk__25242 = G__25253;
count__25243 = G__25254;
i__25244 = G__25255;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__25241__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__25256 = cljs.core.next.call(null,seq__25241__$1);
var G__25257 = null;
var G__25258 = (0);
var G__25259 = (0);
seq__25241 = G__25256;
chunk__25242 = G__25257;
count__25243 = G__25258;
i__25244 = G__25259;
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
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq25239){
var G__25240 = cljs.core.first.call(null,seq25239);
var seq25239__$1 = cljs.core.next.call(null,seq25239);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25240,seq25239__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__25261 = arguments.length;
switch (G__25261) {
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
var vec__25262 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__25262,(0),null);
var l = cljs.core.nth.call(null,vec__25262,(1),null);
var w = cljs.core.nth.call(null,vec__25262,(2),null);
var h = cljs.core.nth.call(null,vec__25262,(3),null);
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


//# sourceMappingURL=core.js.map
