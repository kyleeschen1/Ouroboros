// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.defs');
goog.require('cljs.core');
ob.defs.registery = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns the contents
 * of the def registery.
 * 
 * Obviously.
 */
ob.defs.get_defs = (function ob$defs$get_defs(){
return cljs.core.deref.call(null,ob.defs.registery);
});
/**
 * Adds form to the global
 * registery, binding it to
 * the provided keyword.
 */
ob.defs.def_STAR_ = (function ob$defs$def_STAR_(kw,form){
cljs.core.swap_BANG_.call(null,ob.defs.registery,cljs.core.assoc,kw,form);

return null;
});

//# sourceMappingURL=defs.js.map
