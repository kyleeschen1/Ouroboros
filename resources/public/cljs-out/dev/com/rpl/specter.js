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
var G__25036__delegate = function (args){
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
var G__25036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25037__i = 0, G__25037__a = new Array(arguments.length -  0);
while (G__25037__i < G__25037__a.length) {G__25037__a[G__25037__i] = arguments[G__25037__i + 0]; ++G__25037__i;}
  args = new cljs.core.IndexedSeq(G__25037__a,0,null);
} 
return G__25036__delegate.call(this,args);};
G__25036.cljs$lang$maxFixedArity = 0;
G__25036.cljs$lang$applyTo = (function (arglist__25038){
var args = cljs.core.seq(arglist__25038);
return G__25036__delegate(args);
});
G__25036.cljs$core$IFn$_invoke$arity$variadic = G__25036__delegate;
return G__25036;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4870__auto__ = [];
var len__4864__auto___25055 = arguments.length;
var i__4865__auto___25056 = (0);
while(true){
if((i__4865__auto___25056 < len__4864__auto___25055)){
args__4870__auto__.push((arguments[i__4865__auto___25056]));

var G__25057 = (i__4865__auto___25056 + (1));
i__4865__auto___25056 = G__25057;
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
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq25054){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25054));
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
var len__4864__auto___25064 = arguments.length;
var i__4865__auto___25065 = (0);
while(true){
if((i__4865__auto___25065 < len__4864__auto___25064)){
args__4870__auto__.push((arguments[i__4865__auto___25065]));

var G__25066 = (i__4865__auto___25065 + (1));
i__4865__auto___25065 = G__25066;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__25062){
var map__25063 = p__25062;
var map__25063__$1 = cljs.core.__destructure_map.call(null,map__25063);
var merge_fn = cljs.core.get.call(null,map__25063__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq25058){
var G__25059 = cljs.core.first.call(null,seq25058);
var seq25058__$1 = cljs.core.next.call(null,seq25058);
var G__25060 = cljs.core.first.call(null,seq25058__$1);
var seq25058__$2 = cljs.core.next.call(null,seq25058__$1);
var G__25061 = cljs.core.first.call(null,seq25058__$2);
var seq25058__$3 = cljs.core.next.call(null,seq25058__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25059,G__25060,G__25061,seq25058__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25067__delegate = function (args){
return cljs.core.map.call(null,latenavfn,args);
};
var G__25067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25068__i = 0, G__25068__a = new Array(arguments.length -  0);
while (G__25068__i < G__25068__a.length) {G__25068__a[G__25068__i] = arguments[G__25068__i + 0]; ++G__25068__i;}
  args = new cljs.core.IndexedSeq(G__25068__a,0,null);
} 
return G__25067__delegate.call(this,args);};
G__25067.cljs$lang$maxFixedArity = 0;
G__25067.cljs$lang$applyTo = (function (arglist__25069){
var args = cljs.core.seq(arglist__25069);
return G__25067__delegate(args);
});
G__25067.cljs$core$IFn$_invoke$arity$variadic = G__25067__delegate;
return G__25067;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25070 = (function (meta25071){
this.meta25071 = meta25071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25072,meta25071__$1){
var self__ = this;
var _25072__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25070(meta25071__$1));
}));

(com.rpl.specter.t_com$rpl$specter25070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25072){
var self__ = this;
var _25072__$1 = this;
return self__.meta25071;
}));

(com.rpl.specter.t_com$rpl$specter25070.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25070.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter25070.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter25070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25071","meta25071",2037339158,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25070.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25070.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25070");

(com.rpl.specter.t_com$rpl$specter25070.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25070");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25070.
 */
com.rpl.specter.__GT_t_com$rpl$specter25070 = (function com$rpl$specter$__GT_t_com$rpl$specter25070(meta25071){
return (new com.rpl.specter.t_com$rpl$specter25070(meta25071));
});

}

return (new com.rpl.specter.t_com$rpl$specter25070(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25073 = (function (afn,meta25074){
this.afn = afn;
this.meta25074 = meta25074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25075,meta25074__$1){
var self__ = this;
var _25075__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25073(self__.afn,meta25074__$1));
}));

(com.rpl.specter.t_com$rpl$specter25073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25075){
var self__ = this;
var _25075__$1 = this;
return self__.meta25074;
}));

(com.rpl.specter.t_com$rpl$specter25073.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25073.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter25073.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter25073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta25074","meta25074",1671012876,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25073.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25073.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25073");

(com.rpl.specter.t_com$rpl$specter25073.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25073");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25073.
 */
com.rpl.specter.__GT_t_com$rpl$specter25073 = (function com$rpl$specter$__GT_t_com$rpl$specter25073(afn__$1,meta25074){
return (new com.rpl.specter.t_com$rpl$specter25073(afn__$1,meta25074));
});

}

return (new com.rpl.specter.t_com$rpl$specter25073(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25076 = (function (afn,meta25077){
this.afn = afn;
this.meta25077 = meta25077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25078,meta25077__$1){
var self__ = this;
var _25078__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25076(self__.afn,meta25077__$1));
}));

(com.rpl.specter.t_com$rpl$specter25076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25078){
var self__ = this;
var _25078__$1 = this;
return self__.meta25077;
}));

(com.rpl.specter.t_com$rpl$specter25076.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25076.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter25076.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return self__.afn.call(null,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter25076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta25077","meta25077",866539179,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25076.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25076.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25076");

(com.rpl.specter.t_com$rpl$specter25076.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25076");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25076.
 */
com.rpl.specter.__GT_t_com$rpl$specter25076 = (function com$rpl$specter$__GT_t_com$rpl$specter25076(afn__$1,meta25077){
return (new com.rpl.specter.t_com$rpl$specter25076(afn__$1,meta25077));
});

}

return (new com.rpl.specter.t_com$rpl$specter25076(afn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25079 = (function (meta25080){
this.meta25080 = meta25080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25081,meta25080__$1){
var self__ = this;
var _25081__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25079(meta25080__$1));
}));

(com.rpl.specter.t_com$rpl$specter25079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25081){
var self__ = this;
var _25081__$1 = this;
return self__.meta25080;
}));

(com.rpl.specter.t_com$rpl$specter25079.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25079.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25079.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25080","meta25080",-707685079,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25079.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25079.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25079");

(com.rpl.specter.t_com$rpl$specter25079.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25079");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25079.
 */
com.rpl.specter.__GT_t_com$rpl$specter25079 = (function com$rpl$specter$__GT_t_com$rpl$specter25079(meta25080){
return (new com.rpl.specter.t_com$rpl$specter25079(meta25080));
});

}

return (new com.rpl.specter.t_com$rpl$specter25079(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25082 = (function (meta25083){
this.meta25083 = meta25083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25084,meta25083__$1){
var self__ = this;
var _25084__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25082(meta25083__$1));
}));

(com.rpl.specter.t_com$rpl$specter25082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25084){
var self__ = this;
var _25084__$1 = this;
return self__.meta25083;
}));

(com.rpl.specter.t_com$rpl$specter25082.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25082.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25082.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter25082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25083","meta25083",-58578798,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25082.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25082.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25082");

(com.rpl.specter.t_com$rpl$specter25082.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25082");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25082.
 */
com.rpl.specter.__GT_t_com$rpl$specter25082 = (function com$rpl$specter$__GT_t_com$rpl$specter25082(meta25083){
return (new com.rpl.specter.t_com$rpl$specter25082(meta25083));
});

}

return (new com.rpl.specter.t_com$rpl$specter25082(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__21174__auto__,v){
var ret__21175__auto__ = next_fn.call(null,v);
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25085 = (function (meta25086){
this.meta25086 = meta25086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25087,meta25086__$1){
var self__ = this;
var _25087__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25085(meta25086__$1));
}));

(com.rpl.specter.t_com$rpl$specter25085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25087){
var self__ = this;
var _25087__$1 = this;
return self__.meta25086;
}));

(com.rpl.specter.t_com$rpl$specter25085.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25085.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return cljs.core.reduce.call(null,(function (curr__21174__auto__,v){
var ret__21175__auto__ = next_fn.call(null,v);
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25085.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25086","meta25086",-130432732,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25085.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25085.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25085");

(com.rpl.specter.t_com$rpl$specter25085.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25085");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25085.
 */
com.rpl.specter.__GT_t_com$rpl$specter25085 = (function com$rpl$specter$__GT_t_com$rpl$specter25085(meta25086){
return (new com.rpl.specter.t_com$rpl$specter25085(meta25086));
});

}

return (new com.rpl.specter.t_com$rpl$specter25085(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__21174__auto__,k){
var ret__21175__auto__ = next_fn.call(null,k);
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25088 = (function (meta25089){
this.meta25089 = meta25089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25090,meta25089__$1){
var self__ = this;
var _25090__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25088(meta25089__$1));
}));

(com.rpl.specter.t_com$rpl$specter25088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25090){
var self__ = this;
var _25090__$1 = this;
return self__.meta25089;
}));

(com.rpl.specter.t_com$rpl$specter25088.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25088.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return cljs.core.reduce.call(null,(function (curr__21174__auto__,k){
var ret__21175__auto__ = next_fn.call(null,k);
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25088.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25089","meta25089",1341318989,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25088.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25088.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25088");

(com.rpl.specter.t_com$rpl$specter25088.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25088");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25088.
 */
com.rpl.specter.__GT_t_com$rpl$specter25088 = (function com$rpl$specter$__GT_t_com$rpl$specter25088(meta25089){
return (new com.rpl.specter.t_com$rpl$specter25088(meta25089));
});

}

return (new com.rpl.specter.t_com$rpl$specter25088(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25091 = (function (meta25092){
this.meta25092 = meta25092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25093,meta25092__$1){
var self__ = this;
var _25093__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25091(meta25092__$1));
}));

(com.rpl.specter.t_com$rpl$specter25091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25093){
var self__ = this;
var _25093__$1 = this;
return self__.meta25092;
}));

(com.rpl.specter.t_com$rpl$specter25091.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25091.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__24074__auto__,vals__24075__auto__,structure,next_fn__24076__auto__){
var self__ = this;
var this__24074__auto____$1 = this;
return next_fn__24076__auto__.call(null,cljs.core.conj.call(null,vals__24075__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter25091.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__24074__auto__,vals__24075__auto__,structure,next_fn__24076__auto__){
var self__ = this;
var this__24074__auto____$1 = this;
return next_fn__24076__auto__.call(null,cljs.core.conj.call(null,vals__24075__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter25091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25092","meta25092",2038201924,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25091.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25091.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25091");

(com.rpl.specter.t_com$rpl$specter25091.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25091");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25091.
 */
com.rpl.specter.__GT_t_com$rpl$specter25091 = (function com$rpl$specter$__GT_t_com$rpl$specter25091(meta25092){
return (new com.rpl.specter.t_com$rpl$specter25091(meta25092));
});

}

return (new com.rpl.specter.t_com$rpl$specter25091(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25094 = (function (start_index_fn,end_index_fn,meta25095){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta25095 = meta25095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25096,meta25095__$1){
var self__ = this;
var _25096__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25094(self__.start_index_fn,self__.end_index_fn,meta25095__$1));
}));

(com.rpl.specter.t_com$rpl$specter25094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25096){
var self__ = this;
var _25096__$1 = this;
return self__.meta25095;
}));

(com.rpl.specter.t_com$rpl$specter25094.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25094.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25094.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta25095","meta25095",-603552230,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25094.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25094.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25094");

(com.rpl.specter.t_com$rpl$specter25094.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25094");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25094.
 */
com.rpl.specter.__GT_t_com$rpl$specter25094 = (function com$rpl$specter$__GT_t_com$rpl$specter25094(start_index_fn__$1,end_index_fn__$1,meta25095){
return (new com.rpl.specter.t_com$rpl$specter25094(start_index_fn__$1,end_index_fn__$1,meta25095));
});

}

return (new com.rpl.specter.t_com$rpl$specter25094(start_index_fn,end_index_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25097 = (function (start,end,meta25098){
this.start = start;
this.end = end;
this.meta25098 = meta25098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25099,meta25098__$1){
var self__ = this;
var _25099__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25097(self__.start,self__.end,meta25098__$1));
}));

(com.rpl.specter.t_com$rpl$specter25097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25099){
var self__ = this;
var _25099__$1 = this;
return self__.meta25098;
}));

(com.rpl.specter.t_com$rpl$specter25097.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25097.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25097.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta25098","meta25098",-2006572161,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25097.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25097.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25097");

(com.rpl.specter.t_com$rpl$specter25097.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25097");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25097.
 */
com.rpl.specter.__GT_t_com$rpl$specter25097 = (function com$rpl$specter$__GT_t_com$rpl$specter25097(start__$1,end__$1,meta25098){
return (new com.rpl.specter.t_com$rpl$specter25097(start__$1,end__$1,meta25098));
});

}

return (new com.rpl.specter.t_com$rpl$specter25097(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__21174__auto__,p__25100){
var vec__25101 = p__25100;
var s = cljs.core.nth.call(null,vec__25101,(0),null);
var e = cljs.core.nth.call(null,vec__25101,(1),null);
var ret__21175__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25104 = (function (pred,meta25105){
this.pred = pred;
this.meta25105 = meta25105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25106,meta25105__$1){
var self__ = this;
var _25106__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25104(self__.pred,meta25105__$1));
}));

(com.rpl.specter.t_com$rpl$specter25104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25106){
var self__ = this;
var _25106__$1 = this;
return self__.meta25105;
}));

(com.rpl.specter.t_com$rpl$specter25104.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25104.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return cljs.core.reduce.call(null,(function (curr__21174__auto__,p__25107){
var vec__25108 = p__25107;
var s = cljs.core.nth.call(null,vec__25108,(0),null);
var e = cljs.core.nth.call(null,vec__25108,(1),null);
var ret__21175__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter25104.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta25105","meta25105",-1930301753,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25104.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25104.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25104");

(com.rpl.specter.t_com$rpl$specter25104.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25104");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25104.
 */
com.rpl.specter.__GT_t_com$rpl$specter25104 = (function com$rpl$specter$__GT_t_com$rpl$specter25104(pred__$1,meta25105){
return (new com.rpl.specter.t_com$rpl$specter25104(pred__$1,meta25105));
});

}

return (new com.rpl.specter.t_com$rpl$specter25104(pred,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25111 = (function (meta25112){
this.meta25112 = meta25112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25113,meta25112__$1){
var self__ = this;
var _25113__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25111(meta25112__$1));
}));

(com.rpl.specter.t_com$rpl$specter25111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25113){
var self__ = this;
var _25113__$1 = this;
return self__.meta25112;
}));

(com.rpl.specter.t_com$rpl$specter25111.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25111.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter25111.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter25111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25112","meta25112",-1083979116,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25111.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25111.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25111");

(com.rpl.specter.t_com$rpl$specter25111.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25111");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25111.
 */
com.rpl.specter.__GT_t_com$rpl$specter25111 = (function com$rpl$specter$__GT_t_com$rpl$specter25111(meta25112){
return (new com.rpl.specter.t_com$rpl$specter25111(meta25112));
});

}

return (new com.rpl.specter.t_com$rpl$specter25111(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25114 = (function (meta25115){
this.meta25115 = meta25115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25116,meta25115__$1){
var self__ = this;
var _25116__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25114(meta25115__$1));
}));

(com.rpl.specter.t_com$rpl$specter25114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25116){
var self__ = this;
var _25116__$1 = this;
return self__.meta25115;
}));

(com.rpl.specter.t_com$rpl$specter25114.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25114.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter25114.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter25114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25115","meta25115",1973461601,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25114.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25114.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25114");

(com.rpl.specter.t_com$rpl$specter25114.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25114");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25114.
 */
com.rpl.specter.__GT_t_com$rpl$specter25114 = (function com$rpl$specter$__GT_t_com$rpl$specter25114(meta25115){
return (new com.rpl.specter.t_com$rpl$specter25114(meta25115));
});

}

return (new com.rpl.specter.t_com$rpl$specter25114(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25117 = (function (meta25118){
this.meta25118 = meta25118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25119,meta25118__$1){
var self__ = this;
var _25119__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25117(meta25118__$1));
}));

(com.rpl.specter.t_com$rpl$specter25117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25119){
var self__ = this;
var _25119__$1 = this;
return self__.meta25118;
}));

(com.rpl.specter.t_com$rpl$specter25117.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25117.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter25117.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
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

(com.rpl.specter.t_com$rpl$specter25117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25118","meta25118",745956229,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25117.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25117.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25117");

(com.rpl.specter.t_com$rpl$specter25117.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25117");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25117.
 */
com.rpl.specter.__GT_t_com$rpl$specter25117 = (function com$rpl$specter$__GT_t_com$rpl$specter25117(meta25118){
return (new com.rpl.specter.t_com$rpl$specter25117(meta25118));
});

}

return (new com.rpl.specter.t_com$rpl$specter25117(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25120 = (function (meta25121){
this.meta25121 = meta25121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25122,meta25121__$1){
var self__ = this;
var _25122__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25120(meta25121__$1));
}));

(com.rpl.specter.t_com$rpl$specter25120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25122){
var self__ = this;
var _25122__$1 = this;
return self__.meta25121;
}));

(com.rpl.specter.t_com$rpl$specter25120.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25120.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter25120.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter25120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25121","meta25121",995768235,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25120.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25120.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25120");

(com.rpl.specter.t_com$rpl$specter25120.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25120");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25120.
 */
com.rpl.specter.__GT_t_com$rpl$specter25120 = (function com$rpl$specter$__GT_t_com$rpl$specter25120(meta25121){
return (new com.rpl.specter.t_com$rpl$specter25120(meta25121));
});

}

return (new com.rpl.specter.t_com$rpl$specter25120(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25123 = (function (meta25124){
this.meta25124 = meta25124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25125,meta25124__$1){
var self__ = this;
var _25125__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25123(meta25124__$1));
}));

(com.rpl.specter.t_com$rpl$specter25123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25125){
var self__ = this;
var _25125__$1 = this;
return self__.meta25124;
}));

(com.rpl.specter.t_com$rpl$specter25123.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25123.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter25123.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter25123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25124","meta25124",-344922451,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25123.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25123.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25123");

(com.rpl.specter.t_com$rpl$specter25123.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25123");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25123.
 */
com.rpl.specter.__GT_t_com$rpl$specter25123 = (function com$rpl$specter$__GT_t_com$rpl$specter25123(meta25124){
return (new com.rpl.specter.t_com$rpl$specter25123(meta25124));
});

}

return (new com.rpl.specter.t_com$rpl$specter25123(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25126 = (function (aset,meta25127){
this.aset = aset;
this.meta25127 = meta25127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25128,meta25127__$1){
var self__ = this;
var _25128__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25126(self__.aset,meta25127__$1));
}));

(com.rpl.specter.t_com$rpl$specter25126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25128){
var self__ = this;
var _25128__$1 = this;
return self__.meta25127;
}));

(com.rpl.specter.t_com$rpl$specter25126.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25126.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter25126.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter25126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta25127","meta25127",-369113269,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25126.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25126.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25126");

(com.rpl.specter.t_com$rpl$specter25126.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25126");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25126.
 */
com.rpl.specter.__GT_t_com$rpl$specter25126 = (function com$rpl$specter$__GT_t_com$rpl$specter25126(aset__$1,meta25127){
return (new com.rpl.specter.t_com$rpl$specter25126(aset__$1,meta25127));
});

}

return (new com.rpl.specter.t_com$rpl$specter25126(aset,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25129 = (function (m_keys,meta25130){
this.m_keys = m_keys;
this.meta25130 = meta25130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25131,meta25130__$1){
var self__ = this;
var _25131__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25129(self__.m_keys,meta25130__$1));
}));

(com.rpl.specter.t_com$rpl$specter25129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25131){
var self__ = this;
var _25131__$1 = this;
return self__.meta25130;
}));

(com.rpl.specter.t_com$rpl$specter25129.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25129.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter25129.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
}));

(com.rpl.specter.t_com$rpl$specter25129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta25130","meta25130",519405823,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25129.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25129.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25129");

(com.rpl.specter.t_com$rpl$specter25129.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25129");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25129.
 */
com.rpl.specter.__GT_t_com$rpl$specter25129 = (function com$rpl$specter$__GT_t_com$rpl$specter25129(m_keys__$1,meta25130){
return (new com.rpl.specter.t_com$rpl$specter25129(m_keys__$1,meta25130));
});

}

return (new com.rpl.specter.t_com$rpl$specter25129(m_keys,null));
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
var G__25135__delegate = function (path){
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25132 = (function (path,late,meta25133){
this.path = path;
this.late = late;
this.meta25133 = meta25133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25134,meta25133__$1){
var self__ = this;
var _25134__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25132(self__.path,self__.late,meta25133__$1));
}));

(com.rpl.specter.t_com$rpl$specter25132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25134){
var self__ = this;
var _25134__$1 = this;
return self__.meta25133;
}));

(com.rpl.specter.t_com$rpl$specter25132.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25132.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
}));

(com.rpl.specter.t_com$rpl$specter25132.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
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

(com.rpl.specter.t_com$rpl$specter25132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta25133","meta25133",-947729399,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25132.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25132.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25132");

(com.rpl.specter.t_com$rpl$specter25132.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25132");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25132.
 */
com.rpl.specter.__GT_t_com$rpl$specter25132 = (function com$rpl$specter$__GT_t_com$rpl$specter25132(path__$1,late__$1,meta25133){
return (new com.rpl.specter.t_com$rpl$specter25132(path__$1,late__$1,meta25133));
});

}

return (new com.rpl.specter.t_com$rpl$specter25132(path,late,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
};
var G__25135 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25136__i = 0, G__25136__a = new Array(arguments.length -  0);
while (G__25136__i < G__25136__a.length) {G__25136__a[G__25136__i] = arguments[G__25136__i + 0]; ++G__25136__i;}
  path = new cljs.core.IndexedSeq(G__25136__a,0,null);
} 
return G__25135__delegate.call(this,path);};
G__25135.cljs$lang$maxFixedArity = 0;
G__25135.cljs$lang$applyTo = (function (arglist__25137){
var path = cljs.core.seq(arglist__25137);
return G__25135__delegate(path);
});
G__25135.cljs$core$IFn$_invoke$arity$variadic = G__25135__delegate;
return G__25135;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25138 = (function (key,meta25139){
this.key = key;
this.meta25139 = meta25139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25140,meta25139__$1){
var self__ = this;
var _25140__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25138(self__.key,meta25139__$1));
}));

(com.rpl.specter.t_com$rpl$specter25138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25140){
var self__ = this;
var _25140__$1 = this;
return self__.meta25139;
}));

(com.rpl.specter.t_com$rpl$specter25138.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25138.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
return next_fn.call(null,vals,self__.key);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter25138.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter25138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta25139","meta25139",1610459269,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25138.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25138.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25138");

(com.rpl.specter.t_com$rpl$specter25138.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25138");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25138.
 */
com.rpl.specter.__GT_t_com$rpl$specter25138 = (function com$rpl$specter$__GT_t_com$rpl$specter25138(key__$1,meta25139){
return (new com.rpl.specter.t_com$rpl$specter25138(key__$1,meta25139));
});

}

return (new com.rpl.specter.t_com$rpl$specter25138(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj.call(null,(function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25141 = (function (elem,meta25142){
this.elem = elem;
this.meta25142 = meta25142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25143,meta25142__$1){
var self__ = this;
var _25143__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25141(self__.elem,meta25142__$1));
}));

(com.rpl.specter.t_com$rpl$specter25141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25143){
var self__ = this;
var _25143__$1 = this;
return self__.meta25142;
}));

(com.rpl.specter.t_com$rpl$specter25141.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25141.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
return next_fn.call(null,vals,self__.elem);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter25141.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter25141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta25142","meta25142",1872928790,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25141.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25141.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25141");

(com.rpl.specter.t_com$rpl$specter25141.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25141");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25141.
 */
com.rpl.specter.__GT_t_com$rpl$specter25141 = (function com$rpl$specter$__GT_t_com$rpl$specter25141(elem__$1,meta25142){
return (new com.rpl.specter.t_com$rpl$specter25141(elem__$1,meta25142));
});

}

return (new com.rpl.specter.t_com$rpl$specter25141(elem,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25144 = (function (index,meta25145){
this.index = index;
this.meta25145 = meta25145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25146,meta25145__$1){
var self__ = this;
var _25146__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25144(self__.index,meta25145__$1));
}));

(com.rpl.specter.t_com$rpl$specter25144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25146){
var self__ = this;
var _25146__$1 = this;
return self__.meta25145;
}));

(com.rpl.specter.t_com$rpl$specter25144.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25144.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter25144.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = next_fn.call(null,vals,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx.call(null,structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter25144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta25145","meta25145",-124502173,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25144.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25144.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25144");

(com.rpl.specter.t_com$rpl$specter25144.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25144");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25144.
 */
com.rpl.specter.__GT_t_com$rpl$specter25144 = (function com$rpl$specter$__GT_t_com$rpl$specter25144(index__$1,meta25145){
return (new com.rpl.specter.t_com$rpl$specter25144(index__$1,meta25145));
});

}

return (new com.rpl.specter.t_com$rpl$specter25144(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25147 = (function (i,meta25148){
this.i = i;
this.meta25148 = meta25148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25149,meta25148__$1){
var self__ = this;
var _25149__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25147(self__.i,meta25148__$1));
}));

(com.rpl.specter.t_com$rpl$specter25147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25149){
var self__ = this;
var _25149__$1 = this;
return self__.meta25148;
}));

(com.rpl.specter.t_com$rpl$specter25147.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25147.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
return next_fn.call(null,vals,self__.i);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter25147.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__25156 = (j - (1));
var G__25157 = cljs.core.assoc.call(null,s,(j + (1)),cljs.core.nth.call(null,s,j));
j = G__25156;
s = G__25157;
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
var G__25158 = (j + (1));
var G__25159 = cljs.core.assoc.call(null,s,(j - (1)),cljs.core.nth.call(null,s,j));
j = G__25158;
s = G__25159;
continue;
}
break;
}
})());
return cljs.core.assoc.call(null,shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25150;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25151 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",15,1,1004,1007,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache25150 = info25151;

return info25151;
})():info__24084__auto__);
var precompiled25152 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25152.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null));
} else {
return precompiled25152;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25153;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25154 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache25153 = info25154;

return info25154;
})():info__24084__auto__);
var precompiled25155 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25155.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null));
} else {
return precompiled25155;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter25147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta25148","meta25148",1331108097,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25147.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25147.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25147");

(com.rpl.specter.t_com$rpl$specter25147.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25147");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25147.
 */
com.rpl.specter.__GT_t_com$rpl$specter25147 = (function com$rpl$specter$__GT_t_com$rpl$specter25147(i__$1,meta25148){
return (new com.rpl.specter.t_com$rpl$specter25147(i__$1,meta25148));
});

}

return (new com.rpl.specter.t_com$rpl$specter25147(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.call(null,(start - (1)));
return cljs.core.reduce.call(null,(function (curr__21174__auto__,e){
var ret__21175__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__25162 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__25162,(0),null);
var newe = cljs.core.nth.call(null,vec__25162,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25165;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25166 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__25160_SHARP_){
return (p1__25160_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__25161_SHARP_){
return (p1__25161_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache25165 = info25166;

return info25166;
})():info__24084__auto__);
var precompiled25167 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25167.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__25160_SHARP_){
return (p1__25160_SHARP_ >= (curri + (1)));
}),(function (p1__25161_SHARP_){
return (p1__25161_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__25160_SHARP_){
return (p1__25160_SHARP_ >= (curri + (1)));
}),(function (p1__25161_SHARP_){
return (p1__25161_SHARP_ <= newi);
})], null));
} else {
return precompiled25167;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25168;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25169 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache25168 = info25169;

return info25169;
})():info__24084__auto__);
var precompiled25170 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25170.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled25170;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25171;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25172 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache25171 = info25172;

return info25172;
})():info__24084__auto__);
var precompiled25173 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25173.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled25173;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25174 = (function (start,meta25175){
this.start = start;
this.meta25175 = meta25175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25176,meta25175__$1){
var self__ = this;
var _25176__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25174(self__.start,meta25175__$1));
}));

(com.rpl.specter.t_com$rpl$specter25174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25176){
var self__ = this;
var _25176__$1 = this;
return self__.meta25175;
}));

(com.rpl.specter.t_com$rpl$specter25174.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25174.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var i = com.rpl.specter.impl.mutable_cell.call(null,(self__.start - (1)));
return cljs.core.reduce.call(null,(function (curr__21174__auto__,e){
var ret__21175__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter25174.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__25177 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__25177,(0),null);
var newe = cljs.core.nth.call(null,vec__25177,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25180;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25181 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__25160_SHARP_){
return (p1__25160_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__25161_SHARP_){
return (p1__25161_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__25160#","p1__25160#",-177688763,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__25161#","p1__25161#",-1406662999,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache25180 = info25181;

return info25181;
})():info__24084__auto__);
var precompiled25182 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25182.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__25160_SHARP_){
return (p1__25160_SHARP_ >= (curri + (1)));
}),(function (p1__25161_SHARP_){
return (p1__25161_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__25160_SHARP_){
return (p1__25160_SHARP_ >= (curri + (1)));
}),(function (p1__25161_SHARP_){
return (p1__25161_SHARP_ <= newi);
})], null));
} else {
return precompiled25182;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25183;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25184 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache25183 = info25184;

return info25184;
})():info__24084__auto__);
var precompiled25185 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25185.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled25185;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25186;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25187 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache25186 = info25187;

return info25187;
})():info__24084__auto__);
var precompiled25188 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25188.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled25188;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter25174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta25175","meta25175",-685944391,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25174.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25174.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25174");

(com.rpl.specter.t_com$rpl$specter25174.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25174");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25174.
 */
com.rpl.specter.__GT_t_com$rpl$specter25174 = (function com$rpl$specter$__GT_t_com$rpl$specter25174(start__$1,meta25175){
return (new com.rpl.specter.t_com$rpl$specter25174(start__$1,meta25175));
});

}

return (new com.rpl.specter.t_com$rpl$specter25174(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = com.rpl.specter.indexed_vals.call(null,(0));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25189 = (function (afn,meta25190){
this.afn = afn;
this.meta25190 = meta25190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25191,meta25190__$1){
var self__ = this;
var _25191__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25189(self__.afn,meta25190__$1));
}));

(com.rpl.specter.t_com$rpl$specter25189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25191){
var self__ = this;
var _25191__$1 = this;
return self__.meta25190;
}));

(com.rpl.specter.t_com$rpl$specter25189.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25189.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25189.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta25190","meta25190",1258809894,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25189.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25189.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25189");

(com.rpl.specter.t_com$rpl$specter25189.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25189");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25189.
 */
com.rpl.specter.__GT_t_com$rpl$specter25189 = (function com$rpl$specter$__GT_t_com$rpl$specter25189(afn__$1,meta25190){
return (new com.rpl.specter.t_com$rpl$specter25189(afn__$1,meta25190));
});

}

return (new com.rpl.specter.t_com$rpl$specter25189(afn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25192 = (function (parse_fn,unparse_fn,meta25193){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta25193 = meta25193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25194,meta25193__$1){
var self__ = this;
var _25194__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25192(self__.parse_fn,self__.unparse_fn,meta25193__$1));
}));

(com.rpl.specter.t_com$rpl$specter25192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25194){
var self__ = this;
var _25194__$1 = this;
return self__.meta25193;
}));

(com.rpl.specter.t_com$rpl$specter25192.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25192.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,self__.parse_fn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25192.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter25192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta25193","meta25193",588235980,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25192.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25192.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25192");

(com.rpl.specter.t_com$rpl$specter25192.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25192");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25192.
 */
com.rpl.specter.__GT_t_com$rpl$specter25192 = (function com$rpl$specter$__GT_t_com$rpl$specter25192(parse_fn__$1,unparse_fn__$1,meta25193){
return (new com.rpl.specter.t_com$rpl$specter25192(parse_fn__$1,unparse_fn__$1,meta25193));
});

}

return (new com.rpl.specter.t_com$rpl$specter25192(parse_fn,unparse_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25195 = (function (meta25196){
this.meta25196 = meta25196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25197,meta25196__$1){
var self__ = this;
var _25197__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25195(meta25196__$1));
}));

(com.rpl.specter.t_com$rpl$specter25195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25197){
var self__ = this;
var _25197__$1 = this;
return self__.meta25196;
}));

(com.rpl.specter.t_com$rpl$specter25195.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25195.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,cljs.core.deref.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25195.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter25195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25196","meta25196",-968692850,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25195.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25195.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25195");

(com.rpl.specter.t_com$rpl$specter25195.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25195");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25195.
 */
com.rpl.specter.__GT_t_com$rpl$specter25195 = (function com$rpl$specter$__GT_t_com$rpl$specter25195(meta25196){
return (new com.rpl.specter.t_com$rpl$specter25195(meta25196));
});

}

return (new com.rpl.specter.t_com$rpl$specter25195(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__21174__auto__,s){
var ret__21175__auto__ = next_fn.call(null,s);
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace.call(null,structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25198 = (function (re,meta25199){
this.re = re;
this.meta25199 = meta25199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25200,meta25199__$1){
var self__ = this;
var _25200__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25198(self__.re,meta25199__$1));
}));

(com.rpl.specter.t_com$rpl$specter25198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25200){
var self__ = this;
var _25200__$1 = this;
return self__.meta25199;
}));

(com.rpl.specter.t_com$rpl$specter25198.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25198.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return cljs.core.reduce.call(null,(function (curr__21174__auto__,s){
var ret__21175__auto__ = next_fn.call(null,s);
if((ret__21175__auto__ === com.rpl.specter.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter25198.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return clojure.string.replace.call(null,structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta25199","meta25199",354626580,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25198.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25198.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25198");

(com.rpl.specter.t_com$rpl$specter25198.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25198");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25198.
 */
com.rpl.specter.__GT_t_com$rpl$specter25198 = (function com$rpl$specter$__GT_t_com$rpl$specter25198(re__$1,meta25199){
return (new com.rpl.specter.t_com$rpl$specter25198(re__$1,meta25199));
});

}

return (new com.rpl.specter.t_com$rpl$specter25198(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25206__delegate = function (path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
return afn;
} else {
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25203 = (function (path,temp__5718__auto__,late,meta25204){
this.path = path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late = late;
this.meta25204 = meta25204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25205,meta25204__$1){
var self__ = this;
var _25205__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25203(self__.path,self__.temp__5718__auto__,self__.late,meta25204__$1));
}));

(com.rpl.specter.t_com$rpl$specter25203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25205){
var self__ = this;
var _25205__$1 = this;
return self__.meta25204;
}));

(com.rpl.specter.t_com$rpl$specter25203.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25203.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__25201_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__25201_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25203.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__25202_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__25202_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta25204","meta25204",-50446427,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25203.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25203.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25203");

(com.rpl.specter.t_com$rpl$specter25203.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25203");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25203.
 */
com.rpl.specter.__GT_t_com$rpl$specter25203 = (function com$rpl$specter$__GT_t_com$rpl$specter25203(path__$1,temp__5718__auto____$1,late__$1,meta25204){
return (new com.rpl.specter.t_com$rpl$specter25203(path__$1,temp__5718__auto____$1,late__$1,meta25204));
});

}

return (new com.rpl.specter.t_com$rpl$specter25203(path,temp__5718__auto__,late,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
}
};
var G__25206 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25207__i = 0, G__25207__a = new Array(arguments.length -  0);
while (G__25207__i < G__25207__a.length) {G__25207__a[G__25207__i] = arguments[G__25207__i + 0]; ++G__25207__i;}
  path = new cljs.core.IndexedSeq(G__25207__a,0,null);
} 
return G__25206__delegate.call(this,path);};
G__25206.cljs$lang$maxFixedArity = 0;
G__25206.cljs$lang$applyTo = (function (arglist__25208){
var path = cljs.core.seq(arglist__25208);
return G__25206__delegate(path);
});
G__25206.cljs$core$IFn$_invoke$arity$variadic = G__25206__delegate;
return G__25206;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25214__delegate = function (path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
} else {
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25211 = (function (path,temp__5718__auto__,late,meta25212){
this.path = path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late = late;
this.meta25212 = meta25212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25213,meta25212__$1){
var self__ = this;
var _25213__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25211(self__.path,self__.temp__5718__auto__,self__.late,meta25212__$1));
}));

(com.rpl.specter.t_com$rpl$specter25211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25213){
var self__ = this;
var _25213__$1 = this;
return self__.meta25212;
}));

(com.rpl.specter.t_com$rpl$specter25211.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25211.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__25209_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__25209_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25211.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__25210_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__25210_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta25212","meta25212",1761079800,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25211.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25211.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25211");

(com.rpl.specter.t_com$rpl$specter25211.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25211");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25211.
 */
com.rpl.specter.__GT_t_com$rpl$specter25211 = (function com$rpl$specter$__GT_t_com$rpl$specter25211(path__$1,temp__5718__auto____$1,late__$1,meta25212){
return (new com.rpl.specter.t_com$rpl$specter25211(path__$1,temp__5718__auto____$1,late__$1,meta25212));
});

}

return (new com.rpl.specter.t_com$rpl$specter25211(path,temp__5718__auto__,late,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
}
};
var G__25214 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25215__i = 0, G__25215__a = new Array(arguments.length -  0);
while (G__25215__i < G__25215__a.length) {G__25215__a[G__25215__i] = arguments[G__25215__i + 0]; ++G__25215__i;}
  path = new cljs.core.IndexedSeq(G__25215__a,0,null);
} 
return G__25214__delegate.call(this,path);};
G__25214.cljs$lang$maxFixedArity = 0;
G__25214.cljs$lang$applyTo = (function (arglist__25216){
var path = cljs.core.seq(arglist__25216);
return G__25214__delegate(path);
});
G__25214.cljs$core$IFn$_invoke$arity$variadic = G__25214__delegate;
return G__25214;
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
var G__25217__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__25217 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25218__i = 0, G__25218__a = new Array(arguments.length -  0);
while (G__25218__i < G__25218__a.length) {G__25218__a[G__25218__i] = arguments[G__25218__i + 0]; ++G__25218__i;}
  path = new cljs.core.IndexedSeq(G__25218__a,0,null);
} 
return G__25217__delegate.call(this,path);};
G__25217.cljs$lang$maxFixedArity = 0;
G__25217.cljs$lang$applyTo = (function (arglist__25219){
var path = cljs.core.seq(arglist__25219);
return G__25217__delegate(path);
});
G__25217.cljs$core$IFn$_invoke$arity$variadic = G__25217__delegate;
return G__25217;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,update_fn){
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25220 = (function (path,update_fn,late,late_fn,meta25221){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta25221 = meta25221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25222,meta25221__$1){
var self__ = this;
var _25222__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25220(self__.path,self__.update_fn,self__.late,self__.late_fn,meta25221__$1));
}));

(com.rpl.specter.t_com$rpl$specter25220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25222){
var self__ = this;
var _25222__$1 = this;
return self__.meta25221;
}));

(com.rpl.specter.t_com$rpl$specter25220.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25220.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter25220.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter25220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta25221","meta25221",-1971346930,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25220.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25220.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25220");

(com.rpl.specter.t_com$rpl$specter25220.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25220");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25220.
 */
com.rpl.specter.__GT_t_com$rpl$specter25220 = (function com$rpl$specter$__GT_t_com$rpl$specter25220(path__$1,update_fn__$1,late__$1,late_fn__$1,meta25221){
return (new com.rpl.specter.t_com$rpl$specter25220(path__$1,update_fn__$1,late__$1,late_fn__$1,meta25221));
});

}

return (new com.rpl.specter.t_com$rpl$specter25220(path,update_fn,late,late_fn,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,reduce_fn){
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25223 = (function (path,reduce_fn,late,late_fn,meta25224){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta25224 = meta25224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25225,meta25224__$1){
var self__ = this;
var _25225__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25223(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta25224__$1));
}));

(com.rpl.specter.t_com$rpl$specter25223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25225){
var self__ = this;
var _25225__$1 = this;
return self__.meta25224;
}));

(com.rpl.specter.t_com$rpl$specter25223.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25223.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter25223.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter25223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta25224","meta25224",-1645500672,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25223.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25223.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25223");

(com.rpl.specter.t_com$rpl$specter25223.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25223");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25223.
 */
com.rpl.specter.__GT_t_com$rpl$specter25223 = (function com$rpl$specter$__GT_t_com$rpl$specter25223(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta25224){
return (new com.rpl.specter.t_com$rpl$specter25223(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta25224));
});

}

return (new com.rpl.specter.t_com$rpl$specter25223(path,reduce_fn,late,late_fn,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__25226_SHARP_){
return cljs.core._EQ_.call(null,p1__25226_SHARP_,v);
}));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
return com.rpl.specter.pred.call(null,(function (p1__25227_SHARP_){
return (p1__25227_SHARP_ < v);
}));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
return com.rpl.specter.pred.call(null,(function (p1__25228_SHARP_){
return (p1__25228_SHARP_ > v);
}));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__25229_SHARP_){
return (p1__25229_SHARP_ <= v);
}));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__25230_SHARP_){
return (p1__25230_SHARP_ >= v);
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25231 = (function (v,meta25232){
this.v = v;
this.meta25232 = meta25232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25233,meta25232__$1){
var self__ = this;
var _25233__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25231(self__.v,meta25232__$1));
}));

(com.rpl.specter.t_com$rpl$specter25231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25233){
var self__ = this;
var _25233__$1 = this;
return self__.meta25232;
}));

(com.rpl.specter.t_com$rpl$specter25231.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25231.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter25231.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter25231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta25232","meta25232",1230826734,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25231.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25231.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25231");

(com.rpl.specter.t_com$rpl$specter25231.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25231");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25231.
 */
com.rpl.specter.__GT_t_com$rpl$specter25231 = (function com$rpl$specter$__GT_t_com$rpl$specter25231(v__$1,meta25232){
return (new com.rpl.specter.t_com$rpl$specter25231(v__$1,meta25232));
});

}

return (new com.rpl.specter.t_com$rpl$specter25231(v,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25234 = (function (meta25235){
this.meta25235 = meta25235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25236,meta25235__$1){
var self__ = this;
var _25236__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25234(meta25235__$1));
}));

(com.rpl.specter.t_com$rpl$specter25234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25236){
var self__ = this;
var _25236__$1 = this;
return self__.meta25235;
}));

(com.rpl.specter.t_com$rpl$specter25234.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25234.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,cljs.core.meta.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25234.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter25234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25235","meta25235",825113737,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25234.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25234.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25234");

(com.rpl.specter.t_com$rpl$specter25234.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25234");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25234.
 */
com.rpl.specter.__GT_t_com$rpl$specter25234 = (function com$rpl$specter$__GT_t_com$rpl$specter25234(meta25235){
return (new com.rpl.specter.t_com$rpl$specter25234(meta25235));
});

}

return (new com.rpl.specter.t_com$rpl$specter25234(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25237 = (function (meta25238){
this.meta25238 = meta25238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25239,meta25238__$1){
var self__ = this;
var _25239__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25237(meta25238__$1));
}));

(com.rpl.specter.t_com$rpl$specter25237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25239){
var self__ = this;
var _25239__$1 = this;
return self__.meta25238;
}));

(com.rpl.specter.t_com$rpl$specter25237.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25237.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,cljs.core.name.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25237.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
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

(com.rpl.specter.t_com$rpl$specter25237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25238","meta25238",680613111,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25237.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25237.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25237");

(com.rpl.specter.t_com$rpl$specter25237.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25237");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25237.
 */
com.rpl.specter.__GT_t_com$rpl$specter25237 = (function com$rpl$specter$__GT_t_com$rpl$specter25237(meta25238){
return (new com.rpl.specter.t_com$rpl$specter25237(meta25238));
});

}

return (new com.rpl.specter.t_com$rpl$specter25237(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25240 = (function (meta25241){
this.meta25241 = meta25241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25242,meta25241__$1){
var self__ = this;
var _25242__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25240(meta25241__$1));
}));

(com.rpl.specter.t_com$rpl$specter25240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25242){
var self__ = this;
var _25242__$1 = this;
return self__.meta25241;
}));

(com.rpl.specter.t_com$rpl$specter25240.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25240.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
return next_fn.call(null,cljs.core.namespace.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter25240.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
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

(com.rpl.specter.t_com$rpl$specter25240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25241","meta25241",966199587,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25240.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25240.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25240");

(com.rpl.specter.t_com$rpl$specter25240.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25240");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25240.
 */
com.rpl.specter.__GT_t_com$rpl$specter25240 = (function com$rpl$specter$__GT_t_com$rpl$specter25240(meta25241){
return (new com.rpl.specter.t_com$rpl$specter25240(meta25241));
});

}

return (new com.rpl.specter.t_com$rpl$specter25240(null));
})()
;
com.rpl.specter.collect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25246__delegate = function (path){
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25243 = (function (path,late,meta25244){
this.path = path;
this.late = late;
this.meta25244 = meta25244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25245,meta25244__$1){
var self__ = this;
var _25245__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25243(self__.path,self__.late,meta25244__$1));
}));

(com.rpl.specter.t_com$rpl$specter25243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25245){
var self__ = this;
var _25245__$1 = this;
return self__.meta25244;
}));

(com.rpl.specter.t_com$rpl$specter25243.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25243.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__24074__auto__,vals__24075__auto__,structure,next_fn__24076__auto__){
var self__ = this;
var this__24074__auto____$1 = this;
return next_fn__24076__auto__.call(null,cljs.core.conj.call(null,vals__24075__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter25243.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__24074__auto__,vals__24075__auto__,structure,next_fn__24076__auto__){
var self__ = this;
var this__24074__auto____$1 = this;
return next_fn__24076__auto__.call(null,cljs.core.conj.call(null,vals__24075__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter25243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta25244","meta25244",-1286275647,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25243.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25243.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25243");

(com.rpl.specter.t_com$rpl$specter25243.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25243");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25243.
 */
com.rpl.specter.__GT_t_com$rpl$specter25243 = (function com$rpl$specter$__GT_t_com$rpl$specter25243(path__$1,late__$1,meta25244){
return (new com.rpl.specter.t_com$rpl$specter25243(path__$1,late__$1,meta25244));
});

}

return (new com.rpl.specter.t_com$rpl$specter25243(path,late,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
};
var G__25246 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25247__i = 0, G__25247__a = new Array(arguments.length -  0);
while (G__25247__i < G__25247__a.length) {G__25247__a[G__25247__i] = arguments[G__25247__i + 0]; ++G__25247__i;}
  path = new cljs.core.IndexedSeq(G__25247__a,0,null);
} 
return G__25246__delegate.call(this,path);};
G__25246.cljs$lang$maxFixedArity = 0;
G__25246.cljs$lang$applyTo = (function (arglist__25248){
var path = cljs.core.seq(arglist__25248);
return G__25246__delegate(path);
});
G__25246.cljs$core$IFn$_invoke$arity$variadic = G__25246__delegate;
return G__25246;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25252__delegate = function (path){
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25249 = (function (path,late,meta25250){
this.path = path;
this.late = late;
this.meta25250 = meta25250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25251,meta25250__$1){
var self__ = this;
var _25251__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25249(self__.path,self__.late,meta25250__$1));
}));

(com.rpl.specter.t_com$rpl$specter25249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25251){
var self__ = this;
var _25251__$1 = this;
return self__.meta25250;
}));

(com.rpl.specter.t_com$rpl$specter25249.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25249.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__24074__auto__,vals__24075__auto__,structure,next_fn__24076__auto__){
var self__ = this;
var this__24074__auto____$1 = this;
return next_fn__24076__auto__.call(null,cljs.core.conj.call(null,vals__24075__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter25249.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__24074__auto__,vals__24075__auto__,structure,next_fn__24076__auto__){
var self__ = this;
var this__24074__auto____$1 = this;
return next_fn__24076__auto__.call(null,cljs.core.conj.call(null,vals__24075__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter25249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta25250","meta25250",-593787428,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25249.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25249.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25249");

(com.rpl.specter.t_com$rpl$specter25249.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25249");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25249.
 */
com.rpl.specter.__GT_t_com$rpl$specter25249 = (function com$rpl$specter$__GT_t_com$rpl$specter25249(path__$1,late__$1,meta25250){
return (new com.rpl.specter.t_com$rpl$specter25249(path__$1,late__$1,meta25250));
});

}

return (new com.rpl.specter.t_com$rpl$specter25249(path,late,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
};
var G__25252 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25253__i = 0, G__25253__a = new Array(arguments.length -  0);
while (G__25253__i < G__25253__a.length) {G__25253__a[G__25253__i] = arguments[G__25253__i + 0]; ++G__25253__i;}
  path = new cljs.core.IndexedSeq(G__25253__a,0,null);
} 
return G__25252__delegate.call(this,path);};
G__25252.cljs$lang$maxFixedArity = 0;
G__25252.cljs$lang$applyTo = (function (arglist__25254){
var path = cljs.core.seq(arglist__25254);
return G__25252__delegate(path);
});
G__25252.cljs$core$IFn$_invoke$arity$variadic = G__25252__delegate;
return G__25252;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25255 = (function (val,meta25256){
this.val = val;
this.meta25256 = meta25256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25257,meta25256__$1){
var self__ = this;
var _25257__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25255(self__.val,meta25256__$1));
}));

(com.rpl.specter.t_com$rpl$specter25255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25257){
var self__ = this;
var _25257__$1 = this;
return self__.meta25256;
}));

(com.rpl.specter.t_com$rpl$specter25255.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25255.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__24074__auto__,vals__24075__auto__,structure,next_fn__24076__auto__){
var self__ = this;
var this__24074__auto____$1 = this;
return next_fn__24076__auto__.call(null,cljs.core.conj.call(null,vals__24075__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter25255.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__24074__auto__,vals__24075__auto__,structure,next_fn__24076__auto__){
var self__ = this;
var this__24074__auto____$1 = this;
return next_fn__24076__auto__.call(null,cljs.core.conj.call(null,vals__24075__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter25255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta25256","meta25256",2132630602,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25255.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25255.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25255");

(com.rpl.specter.t_com$rpl$specter25255.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25255");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25255.
 */
com.rpl.specter.__GT_t_com$rpl$specter25255 = (function com$rpl$specter$__GT_t_com$rpl$specter25255(val__$1,meta25256){
return (new com.rpl.specter.t_com$rpl$specter25255(val__$1,meta25256));
});

}

return (new com.rpl.specter.t_com$rpl$specter25255(val,null));
}));
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25263__delegate = function (path){
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25258 = (function (path,late,meta25259){
this.path = path;
this.late = late;
this.meta25259 = meta25259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25260,meta25259__$1){
var self__ = this;
var _25260__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25258(self__.path,self__.late,meta25259__$1));
}));

(com.rpl.specter.t_com$rpl$specter25258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25260){
var self__ = this;
var _25260__$1 = this;
return self__.meta25259;
}));

(com.rpl.specter.t_com$rpl$specter25258.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25258.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter25258.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter25258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta25259","meta25259",1586756358,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25258.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25258.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25258");

(com.rpl.specter.t_com$rpl$specter25258.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25258");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25258.
 */
com.rpl.specter.__GT_t_com$rpl$specter25258 = (function com$rpl$specter$__GT_t_com$rpl$specter25258(path__$1,late__$1,meta25259){
return (new com.rpl.specter.t_com$rpl$specter25258(path__$1,late__$1,meta25259));
});

}

return (new com.rpl.specter.t_com$rpl$specter25258(path,late,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
};
var G__25263 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25264__i = 0, G__25264__a = new Array(arguments.length -  0);
while (G__25264__i < G__25264__a.length) {G__25264__a[G__25264__i] = arguments[G__25264__i + 0]; ++G__25264__i;}
  path = new cljs.core.IndexedSeq(G__25264__a,0,null);
} 
return G__25263__delegate.call(this,path);};
G__25263.cljs$lang$maxFixedArity = 0;
G__25263.cljs$lang$applyTo = (function (arglist__25265){
var path = cljs.core.seq(arglist__25265);
return G__25263__delegate(path);
});
G__25263.cljs$core$IFn$_invoke$arity$variadic = G__25263__delegate;
return G__25263;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25266 = (function (meta25267){
this.meta25267 = meta25267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25268,meta25267__$1){
var self__ = this;
var _25268__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25266(meta25267__$1));
}));

(com.rpl.specter.t_com$rpl$specter25266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25268){
var self__ = this;
var _25268__$1 = this;
return self__.meta25267;
}));

(com.rpl.specter.t_com$rpl$specter25266.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25266.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter25266.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter25266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25267","meta25267",2033936637,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25266.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25266.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25266");

(com.rpl.specter.t_com$rpl$specter25266.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25266");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25266.
 */
com.rpl.specter.__GT_t_com$rpl$specter25266 = (function com$rpl$specter$__GT_t_com$rpl$specter25266(meta25267){
return (new com.rpl.specter.t_com$rpl$specter25266(meta25267));
});

}

return (new com.rpl.specter.t_com$rpl$specter25266(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__25277 = null;
var G__25277__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__25277__3 = (function (cond_p,then_path,else_path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25271 = (function (cond_p,then_path,else_path,temp__5718__auto__,afn,late_then,late_else,meta25272){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5718__auto__ = temp__5718__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta25272 = meta25272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25273,meta25272__$1){
var self__ = this;
var _25273__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25271(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5718__auto__,self__.afn,self__.late_then,self__.late_else,meta25272__$1));
}));

(com.rpl.specter.t_com$rpl$specter25271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25273){
var self__ = this;
var _25273__$1 = this;
return self__.meta25272;
}));

(com.rpl.specter.t_com$rpl$specter25271.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25271.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter25271.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter25271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta25272","meta25272",416685687,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25271.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25271.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25271");

(com.rpl.specter.t_com$rpl$specter25271.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25271");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25271.
 */
com.rpl.specter.__GT_t_com$rpl$specter25271 = (function com$rpl$specter$__GT_t_com$rpl$specter25271(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,afn__$1,late_then__$1,late_else__$1,meta25272){
return (new com.rpl.specter.t_com$rpl$specter25271(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,afn__$1,late_then__$1,late_else__$1,meta25272));
});

}

return (new com.rpl.specter.t_com$rpl$specter25271(cond_p,then_path,else_path,temp__5718__auto__,afn,late_then,late_else,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
} else {
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25274 = (function (cond_p,then_path,else_path,temp__5718__auto__,late_cond,late_then,late_else,meta25275){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta25275 = meta25275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25276,meta25275__$1){
var self__ = this;
var _25276__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25274(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5718__auto__,self__.late_cond,self__.late_then,self__.late_else,meta25275__$1));
}));

(com.rpl.specter.t_com$rpl$specter25274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25276){
var self__ = this;
var _25276__$1 = this;
return self__.meta25275;
}));

(com.rpl.specter.t_com$rpl$specter25274.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25274.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,(function (p1__25269_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__25269_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter25274.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,(function (p1__25270_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__25270_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter25274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta25275","meta25275",965302895,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25274.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25274.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25274");

(com.rpl.specter.t_com$rpl$specter25274.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25274");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25274.
 */
com.rpl.specter.__GT_t_com$rpl$specter25274 = (function com$rpl$specter$__GT_t_com$rpl$specter25274(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta25275){
return (new com.rpl.specter.t_com$rpl$specter25274(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta25275));
});

}

return (new com.rpl.specter.t_com$rpl$specter25274(cond_p,then_path,else_path,temp__5718__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
}
});
G__25277 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__25277__2.call(this,cond_p,then_path);
case 3:
return G__25277__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25277.cljs$core$IFn$_invoke$arity$2 = G__25277__2;
G__25277.cljs$core$IFn$_invoke$arity$3 = G__25277__3;
return G__25277;
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
var G__25282__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,(function (p,p__25278){
var vec__25279 = p__25278;
var tester = cljs.core.nth.call(null,vec__25279,(0),null);
var apath = cljs.core.nth.call(null,vec__25279,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
}),com.rpl.specter.STOP,pairs);
};
var G__25282 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__25283__i = 0, G__25283__a = new Array(arguments.length -  0);
while (G__25283__i < G__25283__a.length) {G__25283__a[G__25283__i] = arguments[G__25283__i + 0]; ++G__25283__i;}
  conds = new cljs.core.IndexedSeq(G__25283__a,0,null);
} 
return G__25282__delegate.call(this,conds);};
G__25282.cljs$lang$maxFixedArity = 0;
G__25282.cljs$lang$applyTo = (function (arglist__25284){
var conds = cljs.core.seq(arglist__25284);
return G__25282__delegate(conds);
});
G__25282.cljs$core$IFn$_invoke$arity$variadic = G__25282__delegate;
return G__25282;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__25292 = null;
var G__25292__0 = (function (){
return com.rpl.specter.STAY;
});
var G__25292__1 = (function (path){
return path;
});
var G__25292__2 = (function (path1,path2){
var builder__24077__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter25285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter25285 = (function (path1,path2,late1,late2,meta25286){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta25286 = meta25286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter25285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25287,meta25286__$1){
var self__ = this;
var _25287__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter25285(self__.path1,self__.path2,self__.late1,self__.late2,meta25286__$1));
}));

(com.rpl.specter.t_com$rpl$specter25285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25287){
var self__ = this;
var _25287__$1 = this;
return self__.meta25286;
}));

(com.rpl.specter.t_com$rpl$specter25285.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter25285.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter25285.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter25285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta25286","meta25286",-944790296,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter25285.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter25285.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter25285");

(com.rpl.specter.t_com$rpl$specter25285.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter25285");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter25285.
 */
com.rpl.specter.__GT_t_com$rpl$specter25285 = (function com$rpl$specter$__GT_t_com$rpl$specter25285(path1__$1,path2__$1,late1__$1,late2__$1,meta25286){
return (new com.rpl.specter.t_com$rpl$specter25285(path1__$1,path2__$1,late1__$1,late2__$1,meta25286));
});

}

return (new com.rpl.specter.t_com$rpl$specter25285(path1,path2,late1,late2,null));
}));
var curr_params__24078__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__24078__auto__)){
return cljs.core.apply.call(null,builder__24077__auto__,curr_params__24078__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__24077__auto__,curr_params__24078__auto__,null);
}
});
var G__25292__3 = (function() { 
var G__25293__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__25293 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__25294__i = 0, G__25294__a = new Array(arguments.length -  2);
while (G__25294__i < G__25294__a.length) {G__25294__a[G__25294__i] = arguments[G__25294__i + 2]; ++G__25294__i;}
  paths = new cljs.core.IndexedSeq(G__25294__a,0,null);
} 
return G__25293__delegate.call(this,path1,path2,paths);};
G__25293.cljs$lang$maxFixedArity = 2;
G__25293.cljs$lang$applyTo = (function (arglist__25295){
var path1 = cljs.core.first(arglist__25295);
arglist__25295 = cljs.core.next(arglist__25295);
var path2 = cljs.core.first(arglist__25295);
var paths = cljs.core.rest(arglist__25295);
return G__25293__delegate(path1,path2,paths);
});
G__25293.cljs$core$IFn$_invoke$arity$variadic = G__25293__delegate;
return G__25293;
})()
;
G__25292 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__25292__0.call(this);
case 1:
return G__25292__1.call(this,path1);
case 2:
return G__25292__2.call(this,path1,path2);
default:
var G__25296 = null;
if (arguments.length > 2) {
var G__25297__i = 0, G__25297__a = new Array(arguments.length -  2);
while (G__25297__i < G__25297__a.length) {G__25297__a[G__25297__i] = arguments[G__25297__i + 2]; ++G__25297__i;}
G__25296 = new cljs.core.IndexedSeq(G__25297__a,0,null);
}
return G__25292__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__25296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25292.cljs$lang$maxFixedArity = 2;
G__25292.cljs$lang$applyTo = G__25292__3.cljs$lang$applyTo;
G__25292.cljs$core$IFn$_invoke$arity$0 = G__25292__0;
G__25292.cljs$core$IFn$_invoke$arity$1 = G__25292__1;
G__25292.cljs$core$IFn$_invoke$arity$2 = G__25292__2;
G__25292.cljs$core$IFn$_invoke$arity$variadic = G__25292__3.cljs$core$IFn$_invoke$arity$variadic;
return G__25292;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25298__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__25298 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25299__i = 0, G__25299__a = new Array(arguments.length -  0);
while (G__25299__i < G__25299__a.length) {G__25299__a[G__25299__i] = arguments[G__25299__i + 0]; ++G__25299__i;}
  path = new cljs.core.IndexedSeq(G__25299__a,0,null);
} 
return G__25298__delegate.call(this,path);};
G__25298.cljs$lang$maxFixedArity = 0;
G__25298.cljs$lang$applyTo = (function (arglist__25300){
var path = cljs.core.seq(arglist__25300);
return G__25298__delegate(path);
});
G__25298.cljs$core$IFn$_invoke$arity$variadic = G__25298__delegate;
return G__25298;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25301__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__25301 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25302__i = 0, G__25302__a = new Array(arguments.length -  0);
while (G__25302__i < G__25302__a.length) {G__25302__a[G__25302__i] = arguments[G__25302__i + 0]; ++G__25302__i;}
  path = new cljs.core.IndexedSeq(G__25302__a,0,null);
} 
return G__25301__delegate.call(this,path);};
G__25301.cljs$lang$maxFixedArity = 0;
G__25301.cljs$lang$applyTo = (function (arglist__25303){
var path = cljs.core.seq(arglist__25303);
return G__25301__delegate(path);
});
G__25301.cljs$core$IFn$_invoke$arity$variadic = G__25301__delegate;
return G__25301;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25304;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25305 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache25304 = info25305;

return info25305;
})():info__24084__auto__);
var precompiled25306 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25306.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null));
} else {
return precompiled25306;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__24084__auto__ = com.rpl.specter.pathcache25307;
var info__24084__auto____$1 = (((info__24084__auto__ == null))?(function (){var info25308 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",16,1,725,727,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache25307 = info25308;

return info25308;
})():info__24084__auto__);
var precompiled25309 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__24084__auto____$1);
var dynamic_QMARK___24085__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__24084__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___24085__auto__)){
return precompiled25309.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null));
} else {
return precompiled25309;
}
})());

return p;
}));
var empty__GT_NONE_25310 = com.rpl.specter.if_path.call(null,cljs.core.empty_QMARK_,com.rpl.specter.terminal_val.call(null,com.rpl.specter.NONE));
var compact_STAR__25311 = (function (nav){
return com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_25310);
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__25312__delegate = function (path){
return cljs.core.map.call(null,compact_STAR__25311,path);
};
var G__25312 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__25313__i = 0, G__25313__a = new Array(arguments.length -  0);
while (G__25313__i < G__25313__a.length) {G__25313__a[G__25313__i] = arguments[G__25313__i + 0]; ++G__25313__i;}
  path = new cljs.core.IndexedSeq(G__25313__a,0,null);
} 
return G__25312__delegate.call(this,path);};
G__25312.cljs$lang$maxFixedArity = 0;
G__25312.cljs$lang$applyTo = (function (arglist__25314){
var path = cljs.core.seq(arglist__25314);
return G__25312__delegate(path);
});
G__25312.cljs$core$IFn$_invoke$arity$variadic = G__25312__delegate;
return G__25312;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map
