// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.define');
goog.require('cljs.core');
goog.require('com.rpl.specter');
ob.define.registery = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ob.define.get_registered_defs = (function ob$define$get_registered_defs(){
return cljs.core.deref.call(null,ob.define.registery);
});
/**
 * Adds form to the global
 * registery, binding it to
 * the provided keyword.
 */
ob.define.def_STAR_ = (function ob$define$def_STAR_(kw,form){
cljs.core.swap_BANG_.call(null,ob.define.registery,cljs.core.assoc,kw,form);

return null;
});
ob.define.def_STAR_.call(null,new cljs.core.Keyword("core","opening","core/opening",450064267),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"msg","msg",-1386103444),"Here is the opening gamb!",new cljs.core.Keyword(null,"header","header",119441134),"Lots to like here.",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"prelude","prelude",-138977836),new cljs.core.Keyword(null,"header","header",119441134),"There are lots of reasons to dislike"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"msg","msg",-1386103444),"Nobody likes you, Kyle, and one should note that "], null)], null)], null));

//# sourceMappingURL=define.js.map
