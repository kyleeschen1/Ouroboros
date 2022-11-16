// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_.call(null,path)){
return cljs.core.every_QMARK_.call(null,com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_.call(null,path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__20367__delegate = function (args){
var ret = cljs.core.apply.call(null,f,args);
if(((cljs.core.sequential_QMARK_.call(null,ret)) && (com.rpl.specter.static_path_QMARK_.call(null,ret)))){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,ret);
} else {
if(((cljs.core.sequential_QMARK_.call(null,ret)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ret))))){
return cljs.core.first.call(null,ret);
} else {
return ret;

}
}
};
var G__20367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20368__i = 0, G__20368__a = new Array(arguments.length -  0);
while (G__20368__i < G__20368__a.length) {G__20368__a[G__20368__i] = arguments[G__20368__i + 0]; ++G__20368__i;}
  args = new cljs.core.IndexedSeq(G__20368__a,0,null);
} 
return G__20367__delegate.call(this,args);};
G__20367.cljs$lang$maxFixedArity = 0;
G__20367.cljs$lang$applyTo = (function (arglist__20369){
var args = cljs.core.seq(arglist__20369);
return G__20367__delegate(args);
});
G__20367.cljs$core$IFn$_invoke$arity$variadic = G__20367__delegate;
return G__20367;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4870__auto__ = [];
var len__4864__auto___20386 = arguments.length;
var i__4865__auto___20387 = (0);
while(true){
if((i__4865__auto___20387 < len__4864__auto___20386)){
args__4870__auto__.push((arguments[i__4865__auto___20387]));

var G__20388 = (i__4865__auto___20387 + (1));
i__4865__auto___20387 = G__20388;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq20385){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20385));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
return com.rpl.specter.compiled_traverse_all.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___20395 = arguments.length;
var i__4865__auto___20396 = (0);
while(true){
if((i__4865__auto___20396 < len__4864__auto___20395)){
args__4870__auto__.push((arguments[i__4865__auto___20396]));

var G__20397 = (i__4865__auto___20396 + (1));
i__4865__auto___20396 = G__20397;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__20393){
var map__20394 = p__20393;
var map__20394__$1 = cljs.core.__destructure_map.call(null,map__20394);
var merge_fn = cljs.core.get.call(null,map__20394__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq20389){
var G__20390 = cljs.core.first.call(null,seq20389);
var seq20389__$1 = cljs.core.next.call(null,seq20389);
var G__20391 = cljs.core.first.call(null,seq20389__$1);
var seq20389__$2 = cljs.core.next.call(null,seq20389__$1);
var G__20392 = cljs.core.first.call(null,seq20389__$2);
var seq20389__$3 = cljs.core.next.call(null,seq20389__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20390,G__20391,G__20392,seq20389__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20398__delegate = function (args){
return cljs.core.map.call(null,latenavfn,args);
};
var G__20398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20399__i = 0, G__20399__a = new Array(arguments.length -  0);
while (G__20399__i < G__20399__a.length) {G__20399__a[G__20399__i] = arguments[G__20399__i + 0]; ++G__20399__i;}
  args = new cljs.core.IndexedSeq(G__20399__a,0,null);
} 
return G__20398__delegate.call(this,args);};
G__20398.cljs$lang$maxFixedArity = 0;
G__20398.cljs$lang$applyTo = (function (arglist__20400){
var args = cljs.core.seq(arglist__20400);
return G__20398__delegate(args);
});
G__20398.cljs$core$IFn$_invoke$arity$variadic = G__20398__delegate;
return G__20398;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20401 = (function (meta20402){
this.meta20402 = meta20402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20403,meta20402__$1){
var self__ = this;
var _20403__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20401(meta20402__$1));
}));

(com.rpl.specter.t_com$rpl$specter20401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20403){
var self__ = this;
var _20403__$1 = this;
return self__.meta20402;
}));

(com.rpl.specter.t_com$rpl$specter20401.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20401.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter20401.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter20401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20402","meta20402",-600859203,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20401.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20401.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20401");

(com.rpl.specter.t_com$rpl$specter20401.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20401");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20401.
 */
com.rpl.specter.__GT_t_com$rpl$specter20401 = (function com$rpl$specter$__GT_t_com$rpl$specter20401(meta20402){
return (new com.rpl.specter.t_com$rpl$specter20401(meta20402));
});

}

return (new com.rpl.specter.t_com$rpl$specter20401(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20404 = (function (afn,meta20405){
this.afn = afn;
this.meta20405 = meta20405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20406,meta20405__$1){
var self__ = this;
var _20406__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20404(self__.afn,meta20405__$1));
}));

(com.rpl.specter.t_com$rpl$specter20404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20406){
var self__ = this;
var _20406__$1 = this;
return self__.meta20405;
}));

(com.rpl.specter.t_com$rpl$specter20404.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20404.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter20404.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter20404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta20405","meta20405",306989427,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20404.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20404.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20404");

(com.rpl.specter.t_com$rpl$specter20404.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20404");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20404.
 */
com.rpl.specter.__GT_t_com$rpl$specter20404 = (function com$rpl$specter$__GT_t_com$rpl$specter20404(afn__$1,meta20405){
return (new com.rpl.specter.t_com$rpl$specter20404(afn__$1,meta20405));
});

}

return (new com.rpl.specter.t_com$rpl$specter20404(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20407 = (function (afn,meta20408){
this.afn = afn;
this.meta20408 = meta20408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20409,meta20408__$1){
var self__ = this;
var _20409__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20407(self__.afn,meta20408__$1));
}));

(com.rpl.specter.t_com$rpl$specter20407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20409){
var self__ = this;
var _20409__$1 = this;
return self__.meta20408;
}));

(com.rpl.specter.t_com$rpl$specter20407.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20407.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter20407.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return self__.afn.call(null,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter20407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta20408","meta20408",-351932556,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20407.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20407.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20407");

(com.rpl.specter.t_com$rpl$specter20407.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20407");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20407.
 */
com.rpl.specter.__GT_t_com$rpl$specter20407 = (function com$rpl$specter$__GT_t_com$rpl$specter20407(afn__$1,meta20408){
return (new com.rpl.specter.t_com$rpl$specter20407(afn__$1,meta20408));
});

}

return (new com.rpl.specter.t_com$rpl$specter20407(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
return com.rpl.specter.terminal.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20410 = (function (meta20411){
this.meta20411 = meta20411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20412,meta20411__$1){
var self__ = this;
var _20412__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20410(meta20411__$1));
}));

(com.rpl.specter.t_com$rpl$specter20410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20412){
var self__ = this;
var _20412__$1 = this;
return self__.meta20411;
}));

(com.rpl.specter.t_com$rpl$specter20410.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20410.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20410.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20411","meta20411",-593941625,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20410.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20410.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20410");

(com.rpl.specter.t_com$rpl$specter20410.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20410");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20410.
 */
com.rpl.specter.__GT_t_com$rpl$specter20410 = (function com$rpl$specter$__GT_t_com$rpl$specter20410(meta20411){
return (new com.rpl.specter.t_com$rpl$specter20410(meta20411));
});

}

return (new com.rpl.specter.t_com$rpl$specter20410(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20413 = (function (meta20414){
this.meta20414 = meta20414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20415,meta20414__$1){
var self__ = this;
var _20415__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20413(meta20414__$1));
}));

(com.rpl.specter.t_com$rpl$specter20413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20415){
var self__ = this;
var _20415__$1 = this;
return self__.meta20414;
}));

(com.rpl.specter.t_com$rpl$specter20413.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20413.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20413.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter20413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20414","meta20414",1874874368,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20413.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20413.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20413");

(com.rpl.specter.t_com$rpl$specter20413.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20413");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20413.
 */
com.rpl.specter.__GT_t_com$rpl$specter20413 = (function com$rpl$specter$__GT_t_com$rpl$specter20413(meta20414){
return (new com.rpl.specter.t_com$rpl$specter20413(meta20414));
});

}

return (new com.rpl.specter.t_com$rpl$specter20413(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__15241__auto__,v){
var ret__15242__auto__ = next_fn.call(null,v);
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20416 = (function (meta20417){
this.meta20417 = meta20417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20418,meta20417__$1){
var self__ = this;
var _20418__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20416(meta20417__$1));
}));

(com.rpl.specter.t_com$rpl$specter20416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20418){
var self__ = this;
var _20418__$1 = this;
return self__.meta20417;
}));

(com.rpl.specter.t_com$rpl$specter20416.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20416.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return cljs.core.reduce.call(null,(function (curr__15241__auto__,v){
var ret__15242__auto__ = next_fn.call(null,v);
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20416.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20417","meta20417",518281738,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20416.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20416.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20416");

(com.rpl.specter.t_com$rpl$specter20416.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20416");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20416.
 */
com.rpl.specter.__GT_t_com$rpl$specter20416 = (function com$rpl$specter$__GT_t_com$rpl$specter20416(meta20417){
return (new com.rpl.specter.t_com$rpl$specter20416(meta20417));
});

}

return (new com.rpl.specter.t_com$rpl$specter20416(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__15241__auto__,k){
var ret__15242__auto__ = next_fn.call(null,k);
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20419 = (function (meta20420){
this.meta20420 = meta20420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20421,meta20420__$1){
var self__ = this;
var _20421__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20419(meta20420__$1));
}));

(com.rpl.specter.t_com$rpl$specter20419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20421){
var self__ = this;
var _20421__$1 = this;
return self__.meta20420;
}));

(com.rpl.specter.t_com$rpl$specter20419.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20419.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return cljs.core.reduce.call(null,(function (curr__15241__auto__,k){
var ret__15242__auto__ = next_fn.call(null,k);
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20419.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20420","meta20420",1616995203,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20419.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20419.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20419");

(com.rpl.specter.t_com$rpl$specter20419.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20419");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20419.
 */
com.rpl.specter.__GT_t_com$rpl$specter20419 = (function com$rpl$specter$__GT_t_com$rpl$specter20419(meta20420){
return (new com.rpl.specter.t_com$rpl$specter20419(meta20420));
});

}

return (new com.rpl.specter.t_com$rpl$specter20419(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20422 = (function (meta20423){
this.meta20423 = meta20423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20424,meta20423__$1){
var self__ = this;
var _20424__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20422(meta20423__$1));
}));

(com.rpl.specter.t_com$rpl$specter20422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20424){
var self__ = this;
var _20424__$1 = this;
return self__.meta20423;
}));

(com.rpl.specter.t_com$rpl$specter20422.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20422.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19063__auto__,vals__19064__auto__,structure,next_fn__19065__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
return next_fn__19065__auto__.call(null,cljs.core.conj.call(null,vals__19064__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter20422.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19063__auto__,vals__19064__auto__,structure,next_fn__19065__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
return next_fn__19065__auto__.call(null,cljs.core.conj.call(null,vals__19064__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter20422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20423","meta20423",-304664753,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20422.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20422.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20422");

(com.rpl.specter.t_com$rpl$specter20422.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20422");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20422.
 */
com.rpl.specter.__GT_t_com$rpl$specter20422 = (function com$rpl$specter$__GT_t_com$rpl$specter20422(meta20423){
return (new com.rpl.specter.t_com$rpl$specter20422(meta20423));
});

}

return (new com.rpl.specter.t_com$rpl$specter20422(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last);
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first);


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20425 = (function (start_index_fn,end_index_fn,meta20426){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta20426 = meta20426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20427,meta20426__$1){
var self__ = this;
var _20427__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20425(self__.start_index_fn,self__.end_index_fn,meta20426__$1));
}));

(com.rpl.specter.t_com$rpl$specter20425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20427){
var self__ = this;
var _20427__$1 = this;
return self__.meta20426;
}));

(com.rpl.specter.t_com$rpl$specter20425.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20425.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20425.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta20426","meta20426",-1553826775,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20425.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20425.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20425");

(com.rpl.specter.t_com$rpl$specter20425.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20425");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20425.
 */
com.rpl.specter.__GT_t_com$rpl$specter20425 = (function com$rpl$specter$__GT_t_com$rpl$specter20425(start_index_fn__$1,end_index_fn__$1,meta20426){
return (new com.rpl.specter.t_com$rpl$specter20425(start_index_fn__$1,end_index_fn__$1,meta20426));
});

}

return (new com.rpl.specter.t_com$rpl$specter20425(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn);
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20428 = (function (start,end,meta20429){
this.start = start;
this.end = end;
this.meta20429 = meta20429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20430,meta20429__$1){
var self__ = this;
var _20430__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20428(self__.start,self__.end,meta20429__$1));
}));

(com.rpl.specter.t_com$rpl$specter20428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20430){
var self__ = this;
var _20430__$1 = this;
return self__.meta20429;
}));

(com.rpl.specter.t_com$rpl$specter20428.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20428.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20428.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta20429","meta20429",-1366879419,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20428.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20428.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20428");

(com.rpl.specter.t_com$rpl$specter20428.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20428");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20428.
 */
com.rpl.specter.__GT_t_com$rpl$specter20428 = (function com$rpl$specter$__GT_t_com$rpl$specter20428(start__$1,end__$1,meta20429){
return (new com.rpl.specter.t_com$rpl$specter20428(start__$1,end__$1,meta20429));
});

}

return (new com.rpl.specter.t_com$rpl$specter20428(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__15241__auto__,p__20431){
var vec__20432 = p__20431;
var s = cljs.core.nth.call(null,vec__20432,(0),null);
var e = cljs.core.nth.call(null,vec__20432,(1),null);
var ret__15242__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20435 = (function (pred,meta20436){
this.pred = pred;
this.meta20436 = meta20436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20437,meta20436__$1){
var self__ = this;
var _20437__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20435(self__.pred,meta20436__$1));
}));

(com.rpl.specter.t_com$rpl$specter20435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20437){
var self__ = this;
var _20437__$1 = this;
return self__.meta20436;
}));

(com.rpl.specter.t_com$rpl$specter20435.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20435.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return cljs.core.reduce.call(null,(function (curr__15241__auto__,p__20438){
var vec__20439 = p__20438;
var s = cljs.core.nth.call(null,vec__20439,(0),null);
var e = cljs.core.nth.call(null,vec__20439,(1),null);
var ret__15242__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter20435.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta20436","meta20436",2067086699,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20435.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20435.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20435");

(com.rpl.specter.t_com$rpl$specter20435.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20435");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20435.
 */
com.rpl.specter.__GT_t_com$rpl$specter20435 = (function com$rpl$specter$__GT_t_com$rpl$specter20435(pred__$1,meta20436){
return (new com.rpl.specter.t_com$rpl$specter20435(pred__$1,meta20436));
});

}

return (new com.rpl.specter.t_com$rpl$specter20435(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20442 = (function (meta20443){
this.meta20443 = meta20443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20444,meta20443__$1){
var self__ = this;
var _20444__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20442(meta20443__$1));
}));

(com.rpl.specter.t_com$rpl$specter20442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20444){
var self__ = this;
var _20444__$1 = this;
return self__.meta20443;
}));

(com.rpl.specter.t_com$rpl$specter20442.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20442.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter20442.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter20442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20443","meta20443",-340809928,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20442.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20442.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20442");

(com.rpl.specter.t_com$rpl$specter20442.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20442");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20442.
 */
com.rpl.specter.__GT_t_com$rpl$specter20442 = (function com$rpl$specter$__GT_t_com$rpl$specter20442(meta20443){
return (new com.rpl.specter.t_com$rpl$specter20442(meta20443));
});

}

return (new com.rpl.specter.t_com$rpl$specter20442(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20445 = (function (meta20446){
this.meta20446 = meta20446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20447,meta20446__$1){
var self__ = this;
var _20447__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20445(meta20446__$1));
}));

(com.rpl.specter.t_com$rpl$specter20445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20447){
var self__ = this;
var _20447__$1 = this;
return self__.meta20446;
}));

(com.rpl.specter.t_com$rpl$specter20445.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20445.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter20445.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter20445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20446","meta20446",-1491624237,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20445.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20445.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20445");

(com.rpl.specter.t_com$rpl$specter20445.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20445");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20445.
 */
com.rpl.specter.__GT_t_com$rpl$specter20445 = (function com$rpl$specter$__GT_t_com$rpl$specter20445(meta20446){
return (new com.rpl.specter.t_com$rpl$specter20445(meta20446));
});

}

return (new com.rpl.specter.t_com$rpl$specter20445(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20448 = (function (meta20449){
this.meta20449 = meta20449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20450,meta20449__$1){
var self__ = this;
var _20450__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20448(meta20449__$1));
}));

(com.rpl.specter.t_com$rpl$specter20448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20450){
var self__ = this;
var _20450__$1 = this;
return self__.meta20449;
}));

(com.rpl.specter.t_com$rpl$specter20448.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20448.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter20448.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter20448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20449","meta20449",1630787374,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20448.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20448.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20448");

(com.rpl.specter.t_com$rpl$specter20448.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20448");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20448.
 */
com.rpl.specter.__GT_t_com$rpl$specter20448 = (function com$rpl$specter$__GT_t_com$rpl$specter20448(meta20449){
return (new com.rpl.specter.t_com$rpl$specter20448(meta20449));
});

}

return (new com.rpl.specter.t_com$rpl$specter20448(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20451 = (function (meta20452){
this.meta20452 = meta20452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20453,meta20452__$1){
var self__ = this;
var _20453__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20451(meta20452__$1));
}));

(com.rpl.specter.t_com$rpl$specter20451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20453){
var self__ = this;
var _20453__$1 = this;
return self__.meta20452;
}));

(com.rpl.specter.t_com$rpl$specter20451.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20451.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter20451.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter20451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20452","meta20452",1483610137,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20451.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20451.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20451");

(com.rpl.specter.t_com$rpl$specter20451.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20451");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20451.
 */
com.rpl.specter.__GT_t_com$rpl$specter20451 = (function com$rpl$specter$__GT_t_com$rpl$specter20451(meta20452){
return (new com.rpl.specter.t_com$rpl$specter20451(meta20452));
});

}

return (new com.rpl.specter.t_com$rpl$specter20451(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20454 = (function (meta20455){
this.meta20455 = meta20455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20456,meta20455__$1){
var self__ = this;
var _20456__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20454(meta20455__$1));
}));

(com.rpl.specter.t_com$rpl$specter20454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20456){
var self__ = this;
var _20456__$1 = this;
return self__.meta20455;
}));

(com.rpl.specter.t_com$rpl$specter20454.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20454.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter20454.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter20454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20455","meta20455",-195716557,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20454.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20454.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20454");

(com.rpl.specter.t_com$rpl$specter20454.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20454");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20454.
 */
com.rpl.specter.__GT_t_com$rpl$specter20454 = (function com$rpl$specter$__GT_t_com$rpl$specter20454(meta20455){
return (new com.rpl.specter.t_com$rpl$specter20454(meta20455));
});

}

return (new com.rpl.specter.t_com$rpl$specter20454(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj.call(null,(function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20457 = (function (aset,meta20458){
this.aset = aset;
this.meta20458 = meta20458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20459,meta20458__$1){
var self__ = this;
var _20459__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20457(self__.aset,meta20458__$1));
}));

(com.rpl.specter.t_com$rpl$specter20457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20459){
var self__ = this;
var _20459__$1 = this;
return self__.meta20458;
}));

(com.rpl.specter.t_com$rpl$specter20457.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20457.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter20457.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter20457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta20458","meta20458",-1964996708,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20457.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20457.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20457");

(com.rpl.specter.t_com$rpl$specter20457.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20457");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20457.
 */
com.rpl.specter.__GT_t_com$rpl$specter20457 = (function com$rpl$specter$__GT_t_com$rpl$specter20457(aset__$1,meta20458){
return (new com.rpl.specter.t_com$rpl$specter20457(aset__$1,meta20458));
});

}

return (new com.rpl.specter.t_com$rpl$specter20457(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj.call(null,(function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20460 = (function (m_keys,meta20461){
this.m_keys = m_keys;
this.meta20461 = meta20461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20462,meta20461__$1){
var self__ = this;
var _20462__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20460(self__.m_keys,meta20461__$1));
}));

(com.rpl.specter.t_com$rpl$specter20460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20462){
var self__ = this;
var _20462__$1 = this;
return self__.meta20461;
}));

(com.rpl.specter.t_com$rpl$specter20460.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20460.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter20460.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
}));

(com.rpl.specter.t_com$rpl$specter20460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta20461","meta20461",1070691675,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20460.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20460.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20460");

(com.rpl.specter.t_com$rpl$specter20460.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20460");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20460.
 */
com.rpl.specter.__GT_t_com$rpl$specter20460 = (function com$rpl$specter$__GT_t_com$rpl$specter20460(m_keys__$1,meta20461){
return (new com.rpl.specter.t_com$rpl$specter20460(m_keys__$1,meta20461));
});

}

return (new com.rpl.specter.t_com$rpl$specter20460(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20466__delegate = function (path){
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20463 = (function (path,late,meta20464){
this.path = path;
this.late = late;
this.meta20464 = meta20464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20465,meta20464__$1){
var self__ = this;
var _20465__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20463(self__.path,self__.late,meta20464__$1));
}));

(com.rpl.specter.t_com$rpl$specter20463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20465){
var self__ = this;
var _20465__$1 = this;
return self__.meta20464;
}));

(com.rpl.specter.t_com$rpl$specter20463.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20463.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
}));

(com.rpl.specter.t_com$rpl$specter20463.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.seq.call(null,transformed));
return com.rpl.specter.compiled_transform.call(null,self__.late,(function (_){
var vs = com.rpl.specter.impl.get_cell.call(null,values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.next);

return cljs.core.first.call(null,vs);
} else {
return com.rpl.specter.NONE;
}
}),structure);
}));

(com.rpl.specter.t_com$rpl$specter20463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta20464","meta20464",-1089354746,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20463.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20463.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20463");

(com.rpl.specter.t_com$rpl$specter20463.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20463");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20463.
 */
com.rpl.specter.__GT_t_com$rpl$specter20463 = (function com$rpl$specter$__GT_t_com$rpl$specter20463(path__$1,late__$1,meta20464){
return (new com.rpl.specter.t_com$rpl$specter20463(path__$1,late__$1,meta20464));
});

}

return (new com.rpl.specter.t_com$rpl$specter20463(path,late,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
};
var G__20466 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20467__i = 0, G__20467__a = new Array(arguments.length -  0);
while (G__20467__i < G__20467__a.length) {G__20467__a[G__20467__i] = arguments[G__20467__i + 0]; ++G__20467__i;}
  path = new cljs.core.IndexedSeq(G__20467__a,0,null);
} 
return G__20466__delegate.call(this,path);};
G__20466.cljs$lang$maxFixedArity = 0;
G__20466.cljs$lang$applyTo = (function (arglist__20468){
var path = cljs.core.seq(arglist__20468);
return G__20466__delegate(path);
});
G__20466.cljs$core$IFn$_invoke$arity$variadic = G__20466__delegate;
return G__20466;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20469 = (function (key,meta20470){
this.key = key;
this.meta20470 = meta20470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20471,meta20470__$1){
var self__ = this;
var _20471__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20469(self__.key,meta20470__$1));
}));

(com.rpl.specter.t_com$rpl$specter20469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20471){
var self__ = this;
var _20471__$1 = this;
return self__.meta20470;
}));

(com.rpl.specter.t_com$rpl$specter20469.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20469.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
return next_fn.call(null,vals,self__.key);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter20469.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
var newkey = next_fn.call(null,vals,self__.key);
var dissoced = cljs.core.dissoc.call(null,structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.call(null,dissoced,newkey,cljs.core.get.call(null,structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter20469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta20470","meta20470",-1075568300,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20469.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20469.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20469");

(com.rpl.specter.t_com$rpl$specter20469.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20469");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20469.
 */
com.rpl.specter.__GT_t_com$rpl$specter20469 = (function com$rpl$specter$__GT_t_com$rpl$specter20469(key__$1,meta20470){
return (new com.rpl.specter.t_com$rpl$specter20469(key__$1,meta20470));
});

}

return (new com.rpl.specter.t_com$rpl$specter20469(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj.call(null,(function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20472 = (function (elem,meta20473){
this.elem = elem;
this.meta20473 = meta20473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20474,meta20473__$1){
var self__ = this;
var _20474__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20472(self__.elem,meta20473__$1));
}));

(com.rpl.specter.t_com$rpl$specter20472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20474){
var self__ = this;
var _20474__$1 = this;
return self__.meta20473;
}));

(com.rpl.specter.t_com$rpl$specter20472.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20472.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
return next_fn.call(null,vals,self__.elem);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter20472.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
var newelem = next_fn.call(null,vals,self__.elem);
var removed = cljs.core.disj.call(null,structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.call(null,removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter20472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta20473","meta20473",-568308999,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20472.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20472.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20472");

(com.rpl.specter.t_com$rpl$specter20472.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20472");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20472.
 */
com.rpl.specter.__GT_t_com$rpl$specter20472 = (function com$rpl$specter$__GT_t_com$rpl$specter20472(elem__$1,meta20473){
return (new com.rpl.specter.t_com$rpl$specter20472(elem__$1,meta20473));
});

}

return (new com.rpl.specter.t_com$rpl$specter20472(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_);
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj.call(null,(function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20475 = (function (index,meta20476){
this.index = index;
this.meta20476 = meta20476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20477,meta20476__$1){
var self__ = this;
var _20477__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20475(self__.index,meta20476__$1));
}));

(com.rpl.specter.t_com$rpl$specter20475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20477){
var self__ = this;
var _20477__$1 = this;
return self__.meta20476;
}));

(com.rpl.specter.t_com$rpl$specter20475.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20475.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter20475.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = next_fn.call(null,vals,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx.call(null,structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter20475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta20476","meta20476",-1539649526,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20475.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20475.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20475");

(com.rpl.specter.t_com$rpl$specter20475.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20475");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20475.
 */
com.rpl.specter.__GT_t_com$rpl$specter20475 = (function com$rpl$specter$__GT_t_com$rpl$specter20475(index__$1,meta20476){
return (new com.rpl.specter.t_com$rpl$specter20475(index__$1,meta20476));
});

}

return (new com.rpl.specter.t_com$rpl$specter20475(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20478 = (function (i,meta20479){
this.i = i;
this.meta20479 = meta20479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20480,meta20479__$1){
var self__ = this;
var _20480__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20478(self__.i,meta20479__$1));
}));

(com.rpl.specter.t_com$rpl$specter20478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20480){
var self__ = this;
var _20480__$1 = this;
return self__.meta20479;
}));

(com.rpl.specter.t_com$rpl$specter20478.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20478.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
return next_fn.call(null,vals,self__.i);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter20478.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
var newi = next_fn.call(null,vals,self__.i);
if(cljs.core._EQ_.call(null,newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.call(null,structure,self__.i);
if(cljs.core.vector_QMARK_.call(null,structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__20487 = (j - (1));
var G__20488 = cljs.core.assoc.call(null,s,(j + (1)),cljs.core.nth.call(null,s,j));
j = G__20487;
s = G__20488;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__20489 = (j + (1));
var G__20490 = cljs.core.assoc.call(null,s,(j - (1)),cljs.core.nth.call(null,s,j));
j = G__20489;
s = G__20490;
continue;
}
break;
}
})());
return cljs.core.assoc.call(null,shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20481;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20482 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",15,1,1004,1007,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache20481 = info20482;

return info20482;
})():info__19073__auto__);
var precompiled20483 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20483.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null));
} else {
return precompiled20483;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20484;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20485 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache20484 = info20485;

return info20485;
})():info__19073__auto__);
var precompiled20486 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20486.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null));
} else {
return precompiled20486;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter20478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta20479","meta20479",1636752839,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20478.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20478.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20478");

(com.rpl.specter.t_com$rpl$specter20478.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20478");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20478.
 */
com.rpl.specter.__GT_t_com$rpl$specter20478 = (function com$rpl$specter$__GT_t_com$rpl$specter20478(i__$1,meta20479){
return (new com.rpl.specter.t_com$rpl$specter20478(i__$1,meta20479));
});

}

return (new com.rpl.specter.t_com$rpl$specter20478(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.call(null,(start - (1)));
return cljs.core.reduce.call(null,(function (curr__15241__auto__,e){
var ret__15242__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__20493 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__20493,(0),null);
var newe = cljs.core.nth.call(null,vec__20493,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20496;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20497 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__20491_SHARP_){
return (p1__20491_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__20492_SHARP_){
return (p1__20492_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache20496 = info20497;

return info20497;
})():info__19073__auto__);
var precompiled20498 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20498.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__20491_SHARP_){
return (p1__20491_SHARP_ >= (curri + (1)));
}),(function (p1__20492_SHARP_){
return (p1__20492_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__20491_SHARP_){
return (p1__20491_SHARP_ >= (curri + (1)));
}),(function (p1__20492_SHARP_){
return (p1__20492_SHARP_ <= newi);
})], null));
} else {
return precompiled20498;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20499;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20500 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache20499 = info20500;

return info20500;
})():info__19073__auto__);
var precompiled20501 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20501.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled20501;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20502;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20503 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache20502 = info20503;

return info20503;
})():info__19073__auto__);
var precompiled20504 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20504.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled20504;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20505 = (function (start,meta20506){
this.start = start;
this.meta20506 = meta20506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20507,meta20506__$1){
var self__ = this;
var _20507__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20505(self__.start,meta20506__$1));
}));

(com.rpl.specter.t_com$rpl$specter20505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20507){
var self__ = this;
var _20507__$1 = this;
return self__.meta20506;
}));

(com.rpl.specter.t_com$rpl$specter20505.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20505.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var i = com.rpl.specter.impl.mutable_cell.call(null,(self__.start - (1)));
return cljs.core.reduce.call(null,(function (curr__15241__auto__,e){
var ret__15242__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter20505.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__20508 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__20508,(0),null);
var newe = cljs.core.nth.call(null,vec__20508,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20511;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20512 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__20491_SHARP_){
return (p1__20491_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__20492_SHARP_){
return (p1__20492_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__20491#","p1__20491#",-1179421928,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__20492#","p1__20492#",-768546947,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache20511 = info20512;

return info20512;
})():info__19073__auto__);
var precompiled20513 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20513.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__20491_SHARP_){
return (p1__20491_SHARP_ >= (curri + (1)));
}),(function (p1__20492_SHARP_){
return (p1__20492_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__20491_SHARP_){
return (p1__20491_SHARP_ >= (curri + (1)));
}),(function (p1__20492_SHARP_){
return (p1__20492_SHARP_ <= newi);
})], null));
} else {
return precompiled20513;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20514;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20515 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache20514 = info20515;

return info20515;
})():info__19073__auto__);
var precompiled20516 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20516.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled20516;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20517;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20518 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache20517 = info20518;

return info20518;
})():info__19073__auto__);
var precompiled20519 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20519.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled20519;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter20505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta20506","meta20506",2013816262,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20505.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20505.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20505");

(com.rpl.specter.t_com$rpl$specter20505.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20505");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20505.
 */
com.rpl.specter.__GT_t_com$rpl$specter20505 = (function com$rpl$specter$__GT_t_com$rpl$specter20505(start__$1,meta20506){
return (new com.rpl.specter.t_com$rpl$specter20505(start__$1,meta20506));
});

}

return (new com.rpl.specter.t_com$rpl$specter20505(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = com.rpl.specter.indexed_vals.call(null,(0));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20520 = (function (afn,meta20521){
this.afn = afn;
this.meta20521 = meta20521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20522,meta20521__$1){
var self__ = this;
var _20522__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20520(self__.afn,meta20521__$1));
}));

(com.rpl.specter.t_com$rpl$specter20520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20522){
var self__ = this;
var _20522__$1 = this;
return self__.meta20521;
}));

(com.rpl.specter.t_com$rpl$specter20520.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20520.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20520.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta20521","meta20521",-629756022,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20520.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20520.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20520");

(com.rpl.specter.t_com$rpl$specter20520.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20520");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20520.
 */
com.rpl.specter.__GT_t_com$rpl$specter20520 = (function com$rpl$specter$__GT_t_com$rpl$specter20520(afn__$1,meta20521){
return (new com.rpl.specter.t_com$rpl$specter20520(afn__$1,meta20521));
});

}

return (new com.rpl.specter.t_com$rpl$specter20520(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
return next_fn.call(null,parse_fn.call(null,structure));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj.call(null,(function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20523 = (function (parse_fn,unparse_fn,meta20524){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta20524 = meta20524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20525,meta20524__$1){
var self__ = this;
var _20525__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20523(self__.parse_fn,self__.unparse_fn,meta20524__$1));
}));

(com.rpl.specter.t_com$rpl$specter20523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20525){
var self__ = this;
var _20525__$1 = this;
return self__.meta20524;
}));

(com.rpl.specter.t_com$rpl$specter20523.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20523.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,self__.parse_fn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20523.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter20523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta20524","meta20524",1902693113,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20523.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20523.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20523");

(com.rpl.specter.t_com$rpl$specter20523.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20523");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20523.
 */
com.rpl.specter.__GT_t_com$rpl$specter20523 = (function com$rpl$specter$__GT_t_com$rpl$specter20523(parse_fn__$1,unparse_fn__$1,meta20524){
return (new com.rpl.specter.t_com$rpl$specter20523(parse_fn__$1,unparse_fn__$1,meta20524));
});

}

return (new com.rpl.specter.t_com$rpl$specter20523(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20526 = (function (meta20527){
this.meta20527 = meta20527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20528,meta20527__$1){
var self__ = this;
var _20528__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20526(meta20527__$1));
}));

(com.rpl.specter.t_com$rpl$specter20526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20528){
var self__ = this;
var _20528__$1 = this;
return self__.meta20527;
}));

(com.rpl.specter.t_com$rpl$specter20526.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20526.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,cljs.core.deref.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20526.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter20526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20527","meta20527",1741897128,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20526.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20526.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20526");

(com.rpl.specter.t_com$rpl$specter20526.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20526");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20526.
 */
com.rpl.specter.__GT_t_com$rpl$specter20526 = (function com$rpl$specter$__GT_t_com$rpl$specter20526(meta20527){
return (new com.rpl.specter.t_com$rpl$specter20526(meta20527));
});

}

return (new com.rpl.specter.t_com$rpl$specter20526(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__15241__auto__,s){
var ret__15242__auto__ = next_fn.call(null,s);
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace.call(null,structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20529 = (function (re,meta20530){
this.re = re;
this.meta20530 = meta20530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20531,meta20530__$1){
var self__ = this;
var _20531__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20529(self__.re,meta20530__$1));
}));

(com.rpl.specter.t_com$rpl$specter20529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20531){
var self__ = this;
var _20531__$1 = this;
return self__.meta20530;
}));

(com.rpl.specter.t_com$rpl$specter20529.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20529.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return cljs.core.reduce.call(null,(function (curr__15241__auto__,s){
var ret__15242__auto__ = next_fn.call(null,s);
if((ret__15242__auto__ === com.rpl.specter.NONE)){
return curr__15241__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__15242__auto__)){
return cljs.core.reduced.call(null,ret__15242__auto__);
} else {
return ret__15242__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter20529.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return clojure.string.replace.call(null,structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta20530","meta20530",1119243058,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20529.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20529.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20529");

(com.rpl.specter.t_com$rpl$specter20529.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20529");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20529.
 */
com.rpl.specter.__GT_t_com$rpl$specter20529 = (function com$rpl$specter$__GT_t_com$rpl$specter20529(re__$1,meta20530){
return (new com.rpl.specter.t_com$rpl$specter20529(re__$1,meta20530));
});

}

return (new com.rpl.specter.t_com$rpl$specter20529(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20537__delegate = function (path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
return afn;
} else {
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20534 = (function (path,temp__5718__auto__,late,meta20535){
this.path = path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late = late;
this.meta20535 = meta20535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20536,meta20535__$1){
var self__ = this;
var _20536__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20534(self__.path,self__.temp__5718__auto__,self__.late,meta20535__$1));
}));

(com.rpl.specter.t_com$rpl$specter20534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20536){
var self__ = this;
var _20536__$1 = this;
return self__.meta20535;
}));

(com.rpl.specter.t_com$rpl$specter20534.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20534.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__20532_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__20532_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20534.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__20533_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__20533_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta20535","meta20535",-148119602,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20534.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20534.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20534");

(com.rpl.specter.t_com$rpl$specter20534.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20534");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20534.
 */
com.rpl.specter.__GT_t_com$rpl$specter20534 = (function com$rpl$specter$__GT_t_com$rpl$specter20534(path__$1,temp__5718__auto____$1,late__$1,meta20535){
return (new com.rpl.specter.t_com$rpl$specter20534(path__$1,temp__5718__auto____$1,late__$1,meta20535));
});

}

return (new com.rpl.specter.t_com$rpl$specter20534(path,temp__5718__auto__,late,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
}
};
var G__20537 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20538__i = 0, G__20538__a = new Array(arguments.length -  0);
while (G__20538__i < G__20538__a.length) {G__20538__a[G__20538__i] = arguments[G__20538__i + 0]; ++G__20538__i;}
  path = new cljs.core.IndexedSeq(G__20538__a,0,null);
} 
return G__20537__delegate.call(this,path);};
G__20537.cljs$lang$maxFixedArity = 0;
G__20537.cljs$lang$applyTo = (function (arglist__20539){
var path = cljs.core.seq(arglist__20539);
return G__20537__delegate(path);
});
G__20537.cljs$core$IFn$_invoke$arity$variadic = G__20537__delegate;
return G__20537;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20545__delegate = function (path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
} else {
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20542 = (function (path,temp__5718__auto__,late,meta20543){
this.path = path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late = late;
this.meta20543 = meta20543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20544,meta20543__$1){
var self__ = this;
var _20544__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20542(self__.path,self__.temp__5718__auto__,self__.late,meta20543__$1));
}));

(com.rpl.specter.t_com$rpl$specter20542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20544){
var self__ = this;
var _20544__$1 = this;
return self__.meta20543;
}));

(com.rpl.specter.t_com$rpl$specter20542.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20542.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__20540_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__20540_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20542.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__20541_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__20541_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta20543","meta20543",-1130300391,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20542.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20542.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20542");

(com.rpl.specter.t_com$rpl$specter20542.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20542");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20542.
 */
com.rpl.specter.__GT_t_com$rpl$specter20542 = (function com$rpl$specter$__GT_t_com$rpl$specter20542(path__$1,temp__5718__auto____$1,late__$1,meta20543){
return (new com.rpl.specter.t_com$rpl$specter20542(path__$1,temp__5718__auto____$1,late__$1,meta20543));
});

}

return (new com.rpl.specter.t_com$rpl$specter20542(path,temp__5718__auto__,late,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
}
};
var G__20545 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20546__i = 0, G__20546__a = new Array(arguments.length -  0);
while (G__20546__i < G__20546__a.length) {G__20546__a[G__20546__i] = arguments[G__20546__i + 0]; ++G__20546__i;}
  path = new cljs.core.IndexedSeq(G__20546__a,0,null);
} 
return G__20545__delegate.call(this,path);};
G__20545.cljs$lang$maxFixedArity = 0;
G__20545.cljs$lang$applyTo = (function (arglist__20547){
var path = cljs.core.seq(arglist__20547);
return G__20545__delegate(path);
});
G__20545.cljs$core$IFn$_invoke$arity$variadic = G__20545__delegate;
return G__20545;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20548__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__20548 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20549__i = 0, G__20549__a = new Array(arguments.length -  0);
while (G__20549__i < G__20549__a.length) {G__20549__a[G__20549__i] = arguments[G__20549__i + 0]; ++G__20549__i;}
  path = new cljs.core.IndexedSeq(G__20549__a,0,null);
} 
return G__20548__delegate.call(this,path);};
G__20548.cljs$lang$maxFixedArity = 0;
G__20548.cljs$lang$applyTo = (function (arglist__20550){
var path = cljs.core.seq(arglist__20550);
return G__20548__delegate(path);
});
G__20548.cljs$core$IFn$_invoke$arity$variadic = G__20548__delegate;
return G__20548;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,update_fn){
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20551 = (function (path,update_fn,late,late_fn,meta20552){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta20552 = meta20552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20553,meta20552__$1){
var self__ = this;
var _20553__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20551(self__.path,self__.update_fn,self__.late,self__.late_fn,meta20552__$1));
}));

(com.rpl.specter.t_com$rpl$specter20551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20553){
var self__ = this;
var _20553__$1 = this;
return self__.meta20552;
}));

(com.rpl.specter.t_com$rpl$specter20551.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20551.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter20551.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter20551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta20552","meta20552",-582972342,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20551.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20551.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20551");

(com.rpl.specter.t_com$rpl$specter20551.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20551");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20551.
 */
com.rpl.specter.__GT_t_com$rpl$specter20551 = (function com$rpl$specter$__GT_t_com$rpl$specter20551(path__$1,update_fn__$1,late__$1,late_fn__$1,meta20552){
return (new com.rpl.specter.t_com$rpl$specter20551(path__$1,update_fn__$1,late__$1,late_fn__$1,meta20552));
});

}

return (new com.rpl.specter.t_com$rpl$specter20551(path,update_fn,late,late_fn,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,reduce_fn){
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20554 = (function (path,reduce_fn,late,late_fn,meta20555){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta20555 = meta20555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20556,meta20555__$1){
var self__ = this;
var _20556__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20554(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta20555__$1));
}));

(com.rpl.specter.t_com$rpl$specter20554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20556){
var self__ = this;
var _20556__$1 = this;
return self__.meta20555;
}));

(com.rpl.specter.t_com$rpl$specter20554.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20554.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter20554.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter20554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta20555","meta20555",1465869758,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20554.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20554.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20554");

(com.rpl.specter.t_com$rpl$specter20554.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20554");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20554.
 */
com.rpl.specter.__GT_t_com$rpl$specter20554 = (function com$rpl$specter$__GT_t_com$rpl$specter20554(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta20555){
return (new com.rpl.specter.t_com$rpl$specter20554(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta20555));
});

}

return (new com.rpl.specter.t_com$rpl$specter20554(path,reduce_fn,late,late_fn,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__20557_SHARP_){
return cljs.core._EQ_.call(null,p1__20557_SHARP_,v);
}));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
return com.rpl.specter.pred.call(null,(function (p1__20558_SHARP_){
return (p1__20558_SHARP_ < v);
}));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
return com.rpl.specter.pred.call(null,(function (p1__20559_SHARP_){
return (p1__20559_SHARP_ > v);
}));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__20560_SHARP_){
return (p1__20560_SHARP_ <= v);
}));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__20561_SHARP_){
return (p1__20561_SHARP_ >= v);
}));
});
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
(com.rpl.specter.protocols.ImplicitNav["string"] = true);

(com.rpl.specter.protocols.implicit_nav["string"] = (function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
(com.rpl.specter.protocols.ImplicitNav["number"] = true);

(com.rpl.specter.protocols.implicit_nav["number"] = (function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
(com.rpl.specter.protocols.ImplicitNav["boolean"] = true);

(com.rpl.specter.protocols.implicit_nav["boolean"] = (function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return com.rpl.specter.pred.call(null,this$);
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.pred.call(null,this$__$1);
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.regex_nav.call(null,this$__$1);
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj.call(null,(function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20562 = (function (v,meta20563){
this.v = v;
this.meta20563 = meta20563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20564,meta20563__$1){
var self__ = this;
var _20564__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20562(self__.v,meta20563__$1));
}));

(com.rpl.specter.t_com$rpl$specter20562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20564){
var self__ = this;
var _20564__$1 = this;
return self__.meta20563;
}));

(com.rpl.specter.t_com$rpl$specter20562.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20562.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter20562.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter20562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta20563","meta20563",-1941310013,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20562.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20562.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20562");

(com.rpl.specter.t_com$rpl$specter20562.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20562");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20562.
 */
com.rpl.specter.__GT_t_com$rpl$specter20562 = (function com$rpl$specter$__GT_t_com$rpl$specter20562(v__$1,meta20563){
return (new com.rpl.specter.t_com$rpl$specter20562(v__$1,meta20563));
});

}

return (new com.rpl.specter.t_com$rpl$specter20562(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20565 = (function (meta20566){
this.meta20566 = meta20566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20567,meta20566__$1){
var self__ = this;
var _20567__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20565(meta20566__$1));
}));

(com.rpl.specter.t_com$rpl$specter20565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20567){
var self__ = this;
var _20567__$1 = this;
return self__.meta20566;
}));

(com.rpl.specter.t_com$rpl$specter20565.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20565.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,cljs.core.meta.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20565.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter20565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20566","meta20566",-567694013,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20565.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20565.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20565");

(com.rpl.specter.t_com$rpl$specter20565.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20565");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20565.
 */
com.rpl.specter.__GT_t_com$rpl$specter20565 = (function com$rpl$specter$__GT_t_com$rpl$specter20565(meta20566){
return (new com.rpl.specter.t_com$rpl$specter20565(meta20566));
});

}

return (new com.rpl.specter.t_com$rpl$specter20565(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.name.call(null,structure));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
throw cljs.core.ex_info.call(null,"NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20568 = (function (meta20569){
this.meta20569 = meta20569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20570,meta20569__$1){
var self__ = this;
var _20570__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20568(meta20569__$1));
}));

(com.rpl.specter.t_com$rpl$specter20568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20570){
var self__ = this;
var _20570__$1 = this;
return self__.meta20569;
}));

(com.rpl.specter.t_com$rpl$specter20568.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20568.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,cljs.core.name.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20568.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
throw cljs.core.ex_info.call(null,"NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter20568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20569","meta20569",-1026763080,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20568.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20568.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20568");

(com.rpl.specter.t_com$rpl$specter20568.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20568");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20568.
 */
com.rpl.specter.__GT_t_com$rpl$specter20568 = (function com$rpl$specter$__GT_t_com$rpl$specter20568(meta20569){
return (new com.rpl.specter.t_com$rpl$specter20568(meta20569));
});

}

return (new com.rpl.specter.t_com$rpl$specter20568(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.namespace.call(null,structure));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
throw cljs.core.ex_info.call(null,"NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20571 = (function (meta20572){
this.meta20572 = meta20572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20573,meta20572__$1){
var self__ = this;
var _20573__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20571(meta20572__$1));
}));

(com.rpl.specter.t_com$rpl$specter20571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20573){
var self__ = this;
var _20573__$1 = this;
return self__.meta20572;
}));

(com.rpl.specter.t_com$rpl$specter20571.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20571.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
return next_fn.call(null,cljs.core.namespace.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter20571.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__18223__auto__,vals__18224__auto__,structure,next_fn__18225__auto__){
var self__ = this;
var this__18223__auto____$1 = this;
var next_fn = (function (s__18226__auto__){
return next_fn__18225__auto__.call(null,vals__18224__auto__,s__18226__auto__);
});
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
throw cljs.core.ex_info.call(null,"NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter20571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20572","meta20572",-80476004,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20571.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20571.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20571");

(com.rpl.specter.t_com$rpl$specter20571.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20571");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20571.
 */
com.rpl.specter.__GT_t_com$rpl$specter20571 = (function com$rpl$specter$__GT_t_com$rpl$specter20571(meta20572){
return (new com.rpl.specter.t_com$rpl$specter20571(meta20572));
});

}

return (new com.rpl.specter.t_com$rpl$specter20571(null));
})()
;
com.rpl.specter.collect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20577__delegate = function (path){
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20574 = (function (path,late,meta20575){
this.path = path;
this.late = late;
this.meta20575 = meta20575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20576,meta20575__$1){
var self__ = this;
var _20576__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20574(self__.path,self__.late,meta20575__$1));
}));

(com.rpl.specter.t_com$rpl$specter20574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20576){
var self__ = this;
var _20576__$1 = this;
return self__.meta20575;
}));

(com.rpl.specter.t_com$rpl$specter20574.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20574.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19063__auto__,vals__19064__auto__,structure,next_fn__19065__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
return next_fn__19065__auto__.call(null,cljs.core.conj.call(null,vals__19064__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter20574.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19063__auto__,vals__19064__auto__,structure,next_fn__19065__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
return next_fn__19065__auto__.call(null,cljs.core.conj.call(null,vals__19064__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter20574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta20575","meta20575",-1608994814,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20574.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20574.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20574");

(com.rpl.specter.t_com$rpl$specter20574.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20574");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20574.
 */
com.rpl.specter.__GT_t_com$rpl$specter20574 = (function com$rpl$specter$__GT_t_com$rpl$specter20574(path__$1,late__$1,meta20575){
return (new com.rpl.specter.t_com$rpl$specter20574(path__$1,late__$1,meta20575));
});

}

return (new com.rpl.specter.t_com$rpl$specter20574(path,late,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
};
var G__20577 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20578__i = 0, G__20578__a = new Array(arguments.length -  0);
while (G__20578__i < G__20578__a.length) {G__20578__a[G__20578__i] = arguments[G__20578__i + 0]; ++G__20578__i;}
  path = new cljs.core.IndexedSeq(G__20578__a,0,null);
} 
return G__20577__delegate.call(this,path);};
G__20577.cljs$lang$maxFixedArity = 0;
G__20577.cljs$lang$applyTo = (function (arglist__20579){
var path = cljs.core.seq(arglist__20579);
return G__20577__delegate(path);
});
G__20577.cljs$core$IFn$_invoke$arity$variadic = G__20577__delegate;
return G__20577;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20583__delegate = function (path){
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20580 = (function (path,late,meta20581){
this.path = path;
this.late = late;
this.meta20581 = meta20581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20582,meta20581__$1){
var self__ = this;
var _20582__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20580(self__.path,self__.late,meta20581__$1));
}));

(com.rpl.specter.t_com$rpl$specter20580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20582){
var self__ = this;
var _20582__$1 = this;
return self__.meta20581;
}));

(com.rpl.specter.t_com$rpl$specter20580.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20580.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19063__auto__,vals__19064__auto__,structure,next_fn__19065__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
return next_fn__19065__auto__.call(null,cljs.core.conj.call(null,vals__19064__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter20580.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19063__auto__,vals__19064__auto__,structure,next_fn__19065__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
return next_fn__19065__auto__.call(null,cljs.core.conj.call(null,vals__19064__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter20580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta20581","meta20581",764284941,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20580.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20580.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20580");

(com.rpl.specter.t_com$rpl$specter20580.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20580");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20580.
 */
com.rpl.specter.__GT_t_com$rpl$specter20580 = (function com$rpl$specter$__GT_t_com$rpl$specter20580(path__$1,late__$1,meta20581){
return (new com.rpl.specter.t_com$rpl$specter20580(path__$1,late__$1,meta20581));
});

}

return (new com.rpl.specter.t_com$rpl$specter20580(path,late,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
};
var G__20583 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20584__i = 0, G__20584__a = new Array(arguments.length -  0);
while (G__20584__i < G__20584__a.length) {G__20584__a[G__20584__i] = arguments[G__20584__i + 0]; ++G__20584__i;}
  path = new cljs.core.IndexedSeq(G__20584__a,0,null);
} 
return G__20583__delegate.call(this,path);};
G__20583.cljs$lang$maxFixedArity = 0;
G__20583.cljs$lang$applyTo = (function (arglist__20585){
var path = cljs.core.seq(arglist__20585);
return G__20583__delegate(path);
});
G__20583.cljs$core$IFn$_invoke$arity$variadic = G__20583__delegate;
return G__20583;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj.call(null,(function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20586 = (function (val,meta20587){
this.val = val;
this.meta20587 = meta20587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20588,meta20587__$1){
var self__ = this;
var _20588__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20586(self__.val,meta20587__$1));
}));

(com.rpl.specter.t_com$rpl$specter20586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20588){
var self__ = this;
var _20588__$1 = this;
return self__.meta20587;
}));

(com.rpl.specter.t_com$rpl$specter20586.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20586.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__19063__auto__,vals__19064__auto__,structure,next_fn__19065__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
return next_fn__19065__auto__.call(null,cljs.core.conj.call(null,vals__19064__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter20586.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__19063__auto__,vals__19064__auto__,structure,next_fn__19065__auto__){
var self__ = this;
var this__19063__auto____$1 = this;
return next_fn__19065__auto__.call(null,cljs.core.conj.call(null,vals__19064__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter20586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta20587","meta20587",-2003873654,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20586.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20586.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20586");

(com.rpl.specter.t_com$rpl$specter20586.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20586");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20586.
 */
com.rpl.specter.__GT_t_com$rpl$specter20586 = (function com$rpl$specter$__GT_t_com$rpl$specter20586(val__$1,meta20587){
return (new com.rpl.specter.t_com$rpl$specter20586(val__$1,meta20587));
});

}

return (new com.rpl.specter.t_com$rpl$specter20586(val,null));
}));
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20594__delegate = function (path){
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20589 = (function (path,late,meta20590){
this.path = path;
this.late = late;
this.meta20590 = meta20590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20591,meta20590__$1){
var self__ = this;
var _20591__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20589(self__.path,self__.late,meta20590__$1));
}));

(com.rpl.specter.t_com$rpl$specter20589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20591){
var self__ = this;
var _20591__$1 = this;
return self__.meta20590;
}));

(com.rpl.specter.t_com$rpl$specter20589.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20589.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter20589.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter20589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta20590","meta20590",869884340,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20589.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20589.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20589");

(com.rpl.specter.t_com$rpl$specter20589.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20589");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20589.
 */
com.rpl.specter.__GT_t_com$rpl$specter20589 = (function com$rpl$specter$__GT_t_com$rpl$specter20589(path__$1,late__$1,meta20590){
return (new com.rpl.specter.t_com$rpl$specter20589(path__$1,late__$1,meta20590));
});

}

return (new com.rpl.specter.t_com$rpl$specter20589(path,late,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
};
var G__20594 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20595__i = 0, G__20595__a = new Array(arguments.length -  0);
while (G__20595__i < G__20595__a.length) {G__20595__a[G__20595__i] = arguments[G__20595__i + 0]; ++G__20595__i;}
  path = new cljs.core.IndexedSeq(G__20595__a,0,null);
} 
return G__20594__delegate.call(this,path);};
G__20594.cljs$lang$maxFixedArity = 0;
G__20594.cljs$lang$applyTo = (function (arglist__20596){
var path = cljs.core.seq(arglist__20596);
return G__20594__delegate(path);
});
G__20594.cljs$core$IFn$_invoke$arity$variadic = G__20594__delegate;
return G__20594;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20597 = (function (meta20598){
this.meta20598 = meta20598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20599,meta20598__$1){
var self__ = this;
var _20599__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20597(meta20598__$1));
}));

(com.rpl.specter.t_com$rpl$specter20597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20599){
var self__ = this;
var _20599__$1 = this;
return self__.meta20598;
}));

(com.rpl.specter.t_com$rpl$specter20597.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20597.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter20597.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter20597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20598","meta20598",1100353246,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20597.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20597.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20597");

(com.rpl.specter.t_com$rpl$specter20597.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20597");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20597.
 */
com.rpl.specter.__GT_t_com$rpl$specter20597 = (function com$rpl$specter$__GT_t_com$rpl$specter20597(meta20598){
return (new com.rpl.specter.t_com$rpl$specter20597(meta20598));
});

}

return (new com.rpl.specter.t_com$rpl$specter20597(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__20608 = null;
var G__20608__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__20608__3 = (function (cond_p,then_path,else_path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20602 = (function (cond_p,then_path,else_path,temp__5718__auto__,afn,late_then,late_else,meta20603){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5718__auto__ = temp__5718__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta20603 = meta20603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20604,meta20603__$1){
var self__ = this;
var _20604__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20602(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5718__auto__,self__.afn,self__.late_then,self__.late_else,meta20603__$1));
}));

(com.rpl.specter.t_com$rpl$specter20602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20604){
var self__ = this;
var _20604__$1 = this;
return self__.meta20603;
}));

(com.rpl.specter.t_com$rpl$specter20602.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20602.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter20602.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter20602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta20603","meta20603",-678114289,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20602.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20602.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20602");

(com.rpl.specter.t_com$rpl$specter20602.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20602");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20602.
 */
com.rpl.specter.__GT_t_com$rpl$specter20602 = (function com$rpl$specter$__GT_t_com$rpl$specter20602(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,afn__$1,late_then__$1,late_else__$1,meta20603){
return (new com.rpl.specter.t_com$rpl$specter20602(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,afn__$1,late_then__$1,late_else__$1,meta20603));
});

}

return (new com.rpl.specter.t_com$rpl$specter20602(cond_p,then_path,else_path,temp__5718__auto__,afn,late_then,late_else,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
} else {
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20605 = (function (cond_p,then_path,else_path,temp__5718__auto__,late_cond,late_then,late_else,meta20606){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta20606 = meta20606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20607,meta20606__$1){
var self__ = this;
var _20607__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20605(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5718__auto__,self__.late_cond,self__.late_then,self__.late_else,meta20606__$1));
}));

(com.rpl.specter.t_com$rpl$specter20605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20607){
var self__ = this;
var _20607__$1 = this;
return self__.meta20606;
}));

(com.rpl.specter.t_com$rpl$specter20605.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20605.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,(function (p1__20600_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__20600_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter20605.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,(function (p1__20601_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__20601_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter20605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta20606","meta20606",1203377071,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20605.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20605.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20605");

(com.rpl.specter.t_com$rpl$specter20605.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20605");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20605.
 */
com.rpl.specter.__GT_t_com$rpl$specter20605 = (function com$rpl$specter$__GT_t_com$rpl$specter20605(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta20606){
return (new com.rpl.specter.t_com$rpl$specter20605(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta20606));
});

}

return (new com.rpl.specter.t_com$rpl$specter20605(cond_p,then_path,else_path,temp__5718__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
}
});
G__20608 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__20608__2.call(this,cond_p,then_path);
case 3:
return G__20608__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20608.cljs$core$IFn$_invoke$arity$2 = G__20608__2;
G__20608.cljs$core$IFn$_invoke$arity$3 = G__20608__3;
return G__20608;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20613__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,(function (p,p__20609){
var vec__20610 = p__20609;
var tester = cljs.core.nth.call(null,vec__20610,(0),null);
var apath = cljs.core.nth.call(null,vec__20610,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
}),com.rpl.specter.STOP,pairs);
};
var G__20613 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__20614__i = 0, G__20614__a = new Array(arguments.length -  0);
while (G__20614__i < G__20614__a.length) {G__20614__a[G__20614__i] = arguments[G__20614__i + 0]; ++G__20614__i;}
  conds = new cljs.core.IndexedSeq(G__20614__a,0,null);
} 
return G__20613__delegate.call(this,conds);};
G__20613.cljs$lang$maxFixedArity = 0;
G__20613.cljs$lang$applyTo = (function (arglist__20615){
var conds = cljs.core.seq(arglist__20615);
return G__20613__delegate(conds);
});
G__20613.cljs$core$IFn$_invoke$arity$variadic = G__20613__delegate;
return G__20613;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__20623 = null;
var G__20623__0 = (function (){
return com.rpl.specter.STAY;
});
var G__20623__1 = (function (path){
return path;
});
var G__20623__2 = (function (path1,path2){
var builder__19066__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter20616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter20616 = (function (path1,path2,late1,late2,meta20617){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta20617 = meta20617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter20616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20618,meta20617__$1){
var self__ = this;
var _20618__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter20616(self__.path1,self__.path2,self__.late1,self__.late2,meta20617__$1));
}));

(com.rpl.specter.t_com$rpl$specter20616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20618){
var self__ = this;
var _20618__$1 = this;
return self__.meta20617;
}));

(com.rpl.specter.t_com$rpl$specter20616.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter20616.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_.call(null,res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter20616.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter20616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta20617","meta20617",-1620518534,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter20616.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter20616.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter20616");

(com.rpl.specter.t_com$rpl$specter20616.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter20616");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter20616.
 */
com.rpl.specter.__GT_t_com$rpl$specter20616 = (function com$rpl$specter$__GT_t_com$rpl$specter20616(path1__$1,path2__$1,late1__$1,late2__$1,meta20617){
return (new com.rpl.specter.t_com$rpl$specter20616(path1__$1,path2__$1,late1__$1,late2__$1,meta20617));
});

}

return (new com.rpl.specter.t_com$rpl$specter20616(path1,path2,late1,late2,null));
}));
var curr_params__19067__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__19067__auto__)){
return cljs.core.apply.call(null,builder__19066__auto__,curr_params__19067__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__19066__auto__,curr_params__19067__auto__,null);
}
});
var G__20623__3 = (function() { 
var G__20624__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__20624 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__20625__i = 0, G__20625__a = new Array(arguments.length -  2);
while (G__20625__i < G__20625__a.length) {G__20625__a[G__20625__i] = arguments[G__20625__i + 2]; ++G__20625__i;}
  paths = new cljs.core.IndexedSeq(G__20625__a,0,null);
} 
return G__20624__delegate.call(this,path1,path2,paths);};
G__20624.cljs$lang$maxFixedArity = 2;
G__20624.cljs$lang$applyTo = (function (arglist__20626){
var path1 = cljs.core.first(arglist__20626);
arglist__20626 = cljs.core.next(arglist__20626);
var path2 = cljs.core.first(arglist__20626);
var paths = cljs.core.rest(arglist__20626);
return G__20624__delegate(path1,path2,paths);
});
G__20624.cljs$core$IFn$_invoke$arity$variadic = G__20624__delegate;
return G__20624;
})()
;
G__20623 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__20623__0.call(this);
case 1:
return G__20623__1.call(this,path1);
case 2:
return G__20623__2.call(this,path1,path2);
default:
var G__20627 = null;
if (arguments.length > 2) {
var G__20628__i = 0, G__20628__a = new Array(arguments.length -  2);
while (G__20628__i < G__20628__a.length) {G__20628__a[G__20628__i] = arguments[G__20628__i + 2]; ++G__20628__i;}
G__20627 = new cljs.core.IndexedSeq(G__20628__a,0,null);
}
return G__20623__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__20627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20623.cljs$lang$maxFixedArity = 2;
G__20623.cljs$lang$applyTo = G__20623__3.cljs$lang$applyTo;
G__20623.cljs$core$IFn$_invoke$arity$0 = G__20623__0;
G__20623.cljs$core$IFn$_invoke$arity$1 = G__20623__1;
G__20623.cljs$core$IFn$_invoke$arity$2 = G__20623__2;
G__20623.cljs$core$IFn$_invoke$arity$variadic = G__20623__3.cljs$core$IFn$_invoke$arity$variadic;
return G__20623;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20629__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__20629 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20630__i = 0, G__20630__a = new Array(arguments.length -  0);
while (G__20630__i < G__20630__a.length) {G__20630__a[G__20630__i] = arguments[G__20630__i + 0]; ++G__20630__i;}
  path = new cljs.core.IndexedSeq(G__20630__a,0,null);
} 
return G__20629__delegate.call(this,path);};
G__20629.cljs$lang$maxFixedArity = 0;
G__20629.cljs$lang$applyTo = (function (arglist__20631){
var path = cljs.core.seq(arglist__20631);
return G__20629__delegate(path);
});
G__20629.cljs$core$IFn$_invoke$arity$variadic = G__20629__delegate;
return G__20629;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20632__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__20632 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20633__i = 0, G__20633__a = new Array(arguments.length -  0);
while (G__20633__i < G__20633__a.length) {G__20633__a[G__20633__i] = arguments[G__20633__i + 0]; ++G__20633__i;}
  path = new cljs.core.IndexedSeq(G__20633__a,0,null);
} 
return G__20632__delegate.call(this,path);};
G__20632.cljs$lang$maxFixedArity = 0;
G__20632.cljs$lang$applyTo = (function (arglist__20634){
var path = cljs.core.seq(arglist__20634);
return G__20632__delegate(path);
});
G__20632.cljs$core$IFn$_invoke$arity$variadic = G__20632__delegate;
return G__20632;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20635;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20636 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache20635 = info20636;

return info20636;
})():info__19073__auto__);
var precompiled20637 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20637.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null));
} else {
return precompiled20637;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__19073__auto__ = com.rpl.specter.pathcache20638;
var info__19073__auto____$1 = (((info__19073__auto__ == null))?(function (){var info20639 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",16,1,725,727,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache20638 = info20639;

return info20639;
})():info__19073__auto__);
var precompiled20640 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19073__auto____$1);
var dynamic_QMARK___19074__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19073__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19074__auto__)){
return precompiled20640.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null));
} else {
return precompiled20640;
}
})());

return p;
}));
var empty__GT_NONE_20641 = com.rpl.specter.if_path.call(null,cljs.core.empty_QMARK_,com.rpl.specter.terminal_val.call(null,com.rpl.specter.NONE));
var compact_STAR__20642 = (function (nav){
return com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_20641);
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__20643__delegate = function (path){
return cljs.core.map.call(null,compact_STAR__20642,path);
};
var G__20643 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__20644__i = 0, G__20644__a = new Array(arguments.length -  0);
while (G__20644__i < G__20644__a.length) {G__20644__a[G__20644__i] = arguments[G__20644__i + 0]; ++G__20644__i;}
  path = new cljs.core.IndexedSeq(G__20644__a,0,null);
} 
return G__20643__delegate.call(this,path);};
G__20643.cljs$lang$maxFixedArity = 0;
G__20643.cljs$lang$applyTo = (function (arglist__20645){
var path = cljs.core.seq(arglist__20645);
return G__20643__delegate(path);
});
G__20643.cljs$core$IFn$_invoke$arity$variadic = G__20643__delegate;
return G__20643;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map
