// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.scroll');
goog.require('cljs.core');
goog.require('cljsjs.waypoints');
ob.scroll.global$module$cljsjs$waypoints = goog.global["Waypoint"];
/**
 * Sets some action for when
 * a particular element hits
 * the viewport.
 */
ob.scroll.set_scroll_trigger = (function ob$scroll$set_scroll_trigger(id,f){
var element = document.getElementById(id);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"handler","handler",-195596612),f,new cljs.core.Keyword(null,"offset","offset",296498311),"25%"], null);
return (new Waypoint(cljs.core.clj__GT_js.call(null,params)));
});

//# sourceMappingURL=scroll.js.map
