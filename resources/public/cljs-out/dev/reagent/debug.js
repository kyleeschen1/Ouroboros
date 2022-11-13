// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__15415__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15416__i = 0, G__15416__a = new Array(arguments.length -  0);
while (G__15416__i < G__15416__a.length) {G__15416__a[G__15416__i] = arguments[G__15416__i + 0]; ++G__15416__i;}
  args = new cljs.core.IndexedSeq(G__15416__a,0,null);
} 
return G__15415__delegate.call(this,args);};
G__15415.cljs$lang$maxFixedArity = 0;
G__15415.cljs$lang$applyTo = (function (arglist__15417){
var args = cljs.core.seq(arglist__15417);
return G__15415__delegate(args);
});
G__15415.cljs$core$IFn$_invoke$arity$variadic = G__15415__delegate;
return G__15415;
})()
);

(o.error = (function() { 
var G__15418__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15419__i = 0, G__15419__a = new Array(arguments.length -  0);
while (G__15419__i < G__15419__a.length) {G__15419__a[G__15419__i] = arguments[G__15419__i + 0]; ++G__15419__i;}
  args = new cljs.core.IndexedSeq(G__15419__a,0,null);
} 
return G__15418__delegate.call(this,args);};
G__15418.cljs$lang$maxFixedArity = 0;
G__15418.cljs$lang$applyTo = (function (arglist__15420){
var args = cljs.core.seq(arglist__15420);
return G__15418__delegate(args);
});
G__15418.cljs$core$IFn$_invoke$arity$variadic = G__15418__delegate;
return G__15418;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
