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
var G__20731__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20732__i = 0, G__20732__a = new Array(arguments.length -  0);
while (G__20732__i < G__20732__a.length) {G__20732__a[G__20732__i] = arguments[G__20732__i + 0]; ++G__20732__i;}
  args = new cljs.core.IndexedSeq(G__20732__a,0,null);
} 
return G__20731__delegate.call(this,args);};
G__20731.cljs$lang$maxFixedArity = 0;
G__20731.cljs$lang$applyTo = (function (arglist__20733){
var args = cljs.core.seq(arglist__20733);
return G__20731__delegate(args);
});
G__20731.cljs$core$IFn$_invoke$arity$variadic = G__20731__delegate;
return G__20731;
})()
);

(o.error = (function() { 
var G__20734__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20735__i = 0, G__20735__a = new Array(arguments.length -  0);
while (G__20735__i < G__20735__a.length) {G__20735__a[G__20735__i] = arguments[G__20735__i + 0]; ++G__20735__i;}
  args = new cljs.core.IndexedSeq(G__20735__a,0,null);
} 
return G__20734__delegate.call(this,args);};
G__20734.cljs$lang$maxFixedArity = 0;
G__20734.cljs$lang$applyTo = (function (arglist__20736){
var args = cljs.core.seq(arglist__20736);
return G__20734__delegate(args);
});
G__20734.cljs$core$IFn$_invoke$arity$variadic = G__20734__delegate;
return G__20734;
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
