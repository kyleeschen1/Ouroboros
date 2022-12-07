// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.data_to_hiccup');
goog.require('cljs.core');
goog.require('ob.utils');
goog.require('com.rpl.specter');



/**
 * Wrapper function for general rendering.
 * 
 * Subscribes to element's id in the global
 * database, updating only when the datum or
 * associated context changes.
 */
ob.data_to_hiccup.render = (function ob$data_to_hiccup$render(var_args){
var G__82934 = arguments.length;
switch (G__82934) {
case 1:
return ob.data_to_hiccup.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ob.data_to_hiccup.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.data_to_hiccup.render.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ob.data_to_hiccup.render.call(null,id,null);
}));

(ob.data_to_hiccup.render.cljs$core$IFn$_invoke$arity$2 = (function (id,ctx){
return (function (id__$1,ctx__$1){
var datum = ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->data","id->data",-1544872090),id__$1], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.datum__GT_hiccup,datum,ctx__$1], null);
});
}));

(ob.data_to_hiccup.render.cljs$lang$maxFixedArity = 2);

/**
 * Standard processing that takes an datum
 * row and changes it into a formatted hiccup
 * vector.
 */
ob.data_to_hiccup.datum__GT_hiccup = (function ob$data_to_hiccup$datum__GT_hiccup(datum,ctx){
var props = ob.data_to_hiccup.datum__GT_props.call(null,datum);
var props__$1 = ob.data_to_hiccup.add_transitions.call(null,datum,props);
var hiccup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),ob.data_to_hiccup.datum__GT_props.call(null,datum)], null);
return ob.data_to_hiccup.add_hiccup_contents.call(null,hiccup,datum,ctx);
});
/**
 * Generates a property map from a datum.
 */
ob.data_to_hiccup.datum__GT_props = (function ob$data_to_hiccup$datum__GT_props(p__82936){
var map__82937 = p__82936;
var map__82937__$1 = cljs.core.__destructure_map.call(null,map__82937);
var id = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var name = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var children = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var style = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.conj.call(null,class$,(cljs.core.truth_(children)?null:"token"))], null);
});


if((typeof ob !== 'undefined') && (typeof ob.data_to_hiccup !== 'undefined') && (typeof ob.data_to_hiccup.add_hiccup_contents !== 'undefined')){
} else {
ob.data_to_hiccup.add_hiccup_contents = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.data-to-hiccup","add-hiccup-contents"),(function (_,p__82938,___$1){
var map__82939 = p__82938;
var map__82939__$1 = cljs.core.__destructure_map.call(null,map__82939);
var children = cljs.core.get.call(null,map__82939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(children)){
return new cljs.core.Keyword(null,"collection","collection",-683361892);
} else {
return new cljs.core.Keyword(null,"token","token",-1211463215);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.data_to_hiccup.add_hiccup_contents,new cljs.core.Keyword(null,"token","token",-1211463215),(function (hiccup,p__82940,ctx){
var map__82941 = p__82940;
var map__82941__$1 = cljs.core.__destructure_map.call(null,map__82941);
var name = cljs.core.get.call(null,map__82941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var hiccup__$1 = cljs.core.conj.call(null,hiccup,name);
if(cljs.core.not.call(null,ctx)){
return hiccup__$1;
} else {
return ob.data_to_hiccup.add_trailing_parens.call(null,hiccup__$1,ctx);
}
}));
cljs.core._add_method.call(null,ob.data_to_hiccup.add_hiccup_contents,new cljs.core.Keyword(null,"collection","collection",-683361892),(function (hiccup,ast,ctx){
var vec__82942 = ob.data_to_hiccup.position_parens.call(null,hiccup,ast,ctx);
var hiccup__$1 = cljs.core.nth.call(null,vec__82942,(0),null);
var ctx__$1 = cljs.core.nth.call(null,vec__82942,(1),null);
var hiccup_body = ob.data_to_hiccup.position_children.call(null,ast,ctx__$1);
return cljs.core.conj.call(null,hiccup__$1,hiccup_body);
}));
/**
 * If there are parentheses for
 * a collection, updates the hiccup
 * and ctx to properly position them.
 */
ob.data_to_hiccup.position_parens = (function ob$data_to_hiccup$position_parens(hiccup,ast,ctx){
var temp__5718__auto__ = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__82945 = temp__5718__auto__;
var op_paren = cljs.core.nth.call(null,vec__82945,(0),null);
var cl_paren = cljs.core.nth.call(null,vec__82945,(1),null);
var ctx__$1 = (cljs.core.truth_(ctx)?cljs.core.conj.call(null,ctx,cl_paren):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cl_paren], null));
var op_paren__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,op_paren,null], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,hiccup,op_paren__$1),ctx__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup,ctx], null);
}
});
/**
 * Adds accumulated trailing parentheses
 * to a token hiccup vector.
 */
ob.data_to_hiccup.add_trailing_parens = (function ob$data_to_hiccup$add_trailing_parens(hiccup,ctx){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),hiccup], null),cljs.core.map.call(null,(function (node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,node], null);
}),cljs.core.reverse.call(null,ctx)));
});
/**
 * Renders a list of ids within
 * a parent hiccup vector.
 * 
 * If given a ctx vector, it will
 * add the ctx to the lastmost element.
 */
ob.data_to_hiccup.render_ls = (function ob$data_to_hiccup$render_ls(var_args){
var G__82949 = arguments.length;
switch (G__82949) {
case 2:
return ob.data_to_hiccup.render_ls.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ob.data_to_hiccup.render_ls.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.data_to_hiccup.render_ls.cljs$core$IFn$_invoke$arity$2 = (function (parent,ids){
return cljs.core.into.call(null,parent,(function (){var iter__4652__auto__ = (function ob$data_to_hiccup$iter__82950(s__82951){
return (new cljs.core.LazySeq(null,(function (){
var s__82951__$1 = s__82951;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__82951__$1);
if(temp__5720__auto__){
var s__82951__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82951__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__82951__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__82953 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__82952 = (0);
while(true){
if((i__82952 < size__4651__auto__)){
var id = cljs.core._nth.call(null,c__4650__auto__,i__82952);
cljs.core.chunk_append.call(null,b__82953,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__82955 = (i__82952 + (1));
i__82952 = G__82955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82953),ob$data_to_hiccup$iter__82950.call(null,cljs.core.chunk_rest.call(null,s__82951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82953),null);
}
} else {
var id = cljs.core.first.call(null,s__82951__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),ob$data_to_hiccup$iter__82950.call(null,cljs.core.rest.call(null,s__82951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,ids);
})());
}));

(ob.data_to_hiccup.render_ls.cljs$core$IFn$_invoke$arity$3 = (function (parent,ids,ctx){
if(cljs.core.empty_QMARK_.call(null,ids)){
return null;
} else {
return cljs.core.conj.call(null,ob.data_to_hiccup.render_ls.call(null,parent,cljs.core.pop.call(null,ids)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,cljs.core.peek.call(null,ids),ctx], null));
}
}));

(ob.data_to_hiccup.render_ls.cljs$lang$maxFixedArity = 3);

/**
 * Renders a grid of hiccup vectors,
 * based on the following params:
 * 
 *   outer-el: hiccup vector that wraps whole collection.
 *   inner-el: hiccup vector that wraps each id
 *   ids: list of ids
 *   ctx: ctx vector, which is added to lastmost element.
 */
ob.data_to_hiccup.render_grid = (function ob$data_to_hiccup$render_grid(outer_el,inner_el,ids,ctx){
return cljs.core.conj.call(null,cljs.core.into.call(null,outer_el,(function (){var iter__4652__auto__ = (function ob$data_to_hiccup$render_grid_$_iter__82956(s__82957){
return (new cljs.core.LazySeq(null,(function (){
var s__82957__$1 = s__82957;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__82957__$1);
if(temp__5720__auto__){
var s__82957__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82957__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__82957__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__82959 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__82958 = (0);
while(true){
if((i__82958 < size__4651__auto__)){
var id = cljs.core._nth.call(null,c__4650__auto__,i__82958);
cljs.core.chunk_append.call(null,b__82959,ob.data_to_hiccup.render_ls.call(null,inner_el,id));

var G__82960 = (i__82958 + (1));
i__82958 = G__82960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82959),ob$data_to_hiccup$render_grid_$_iter__82956.call(null,cljs.core.chunk_rest.call(null,s__82957__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82959),null);
}
} else {
var id = cljs.core.first.call(null,s__82957__$2);
return cljs.core.cons.call(null,ob.data_to_hiccup.render_ls.call(null,inner_el,id),ob$data_to_hiccup$render_grid_$_iter__82956.call(null,cljs.core.rest.call(null,s__82957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.pop.call(null,ids));
})()),ob.data_to_hiccup.render_ls.call(null,inner_el,cljs.core.peek.call(null,ids),ctx));
});
ob.data_to_hiccup.col_of_pairs = (function ob$data_to_hiccup$col_of_pairs(children,ctx){
return ob.data_to_hiccup.render_grid.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),cljs.core.mapv.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),children)),ctx);
});
if((typeof ob !== 'undefined') && (typeof ob.data_to_hiccup !== 'undefined') && (typeof ob.data_to_hiccup.position_children !== 'undefined')){
} else {
ob.data_to_hiccup.position_children = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.data-to-hiccup","position-children"),(function (p__82961,ctx){
var map__82962 = p__82961;
var map__82962__$1 = cljs.core.__destructure_map.call(null,map__82962);
var pos_type = cljs.core.get.call(null,map__82962__$1,new cljs.core.Keyword(null,"pos-type","pos-type",-1989893903));
return pos_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.data_to_hiccup.position_children,new cljs.core.Keyword(null,"root","root",-448657453),(function (p__82963,ctx){
var map__82964 = p__82963;
var map__82964__$1 = cljs.core.__destructure_map.call(null,map__82964);
var id = cljs.core.get.call(null,map__82964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var children = cljs.core.get.call(null,map__82964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root","div.root",2120930743),cljs.core.PersistentArrayMap.EMPTY], null),(function (){var iter__4652__auto__ = (function ob$data_to_hiccup$iter__82965(s__82966){
return (new cljs.core.LazySeq(null,(function (){
var s__82966__$1 = s__82966;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__82966__$1);
if(temp__5720__auto__){
var s__82966__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82966__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__82966__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__82968 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__82967 = (0);
while(true){
if((i__82967 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__82967);
cljs.core.chunk_append.call(null,b__82968,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,c,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null))], null));

var G__82969 = (i__82967 + (1));
i__82967 = G__82969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82968),ob$data_to_hiccup$iter__82965.call(null,cljs.core.chunk_rest.call(null,s__82966__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82968),null);
}
} else {
var c = cljs.core.first.call(null,s__82966__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,c,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null))], null),ob$data_to_hiccup$iter__82965.call(null,cljs.core.rest.call(null,s__82966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,children);
})());
}));
cljs.core._add_method.call(null,ob.data_to_hiccup.position_children,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__82970,ctx){
var map__82971 = p__82970;
var map__82971__$1 = cljs.core.__destructure_map.call(null,map__82971);
var form = map__82971__$1;
var id = cljs.core.get.call(null,map__82971__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var children = cljs.core.get.call(null,map__82971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var parens = cljs.core.get.call(null,map__82971__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
return ob.data_to_hiccup.render_ls.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),children,ctx);
}));
cljs.core._add_method.call(null,ob.data_to_hiccup.position_children,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__82972,ctx){
var map__82973 = p__82972;
var map__82973__$1 = cljs.core.__destructure_map.call(null,map__82973);
var form = map__82973__$1;
var children = cljs.core.get.call(null,map__82973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return ob.data_to_hiccup.col_of_pairs.call(null,children,ctx);
}));
cljs.core._add_method.call(null,ob.data_to_hiccup.position_children,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__82974,ctx){
var map__82975 = p__82974;
var map__82975__$1 = cljs.core.__destructure_map.call(null,map__82975);
var form = map__82975__$1;
var children = cljs.core.get.call(null,map__82975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__82976 = children;
var op = cljs.core.nth.call(null,vec__82976,(0),null);
var params = cljs.core.nth.call(null,vec__82976,(1),null);
var body = cljs.core.nth.call(null,vec__82976,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,op], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,params], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,body,ctx], null)], null);
}));
cljs.core._add_method.call(null,ob.data_to_hiccup.position_children,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__82979,ctx){
var map__82980 = p__82979;
var map__82980__$1 = cljs.core.__destructure_map.call(null,map__82980);
var form = map__82980__$1;
var children = cljs.core.get.call(null,map__82980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__82981 = children;
var seq__82982 = cljs.core.seq.call(null,vec__82981);
var first__82983 = cljs.core.first.call(null,seq__82982);
var seq__82982__$1 = cljs.core.next.call(null,seq__82982);
var op = first__82983;
var first__82983__$1 = cljs.core.first.call(null,seq__82982__$1);
var seq__82982__$2 = cljs.core.next.call(null,seq__82982__$1);
var pred = first__82983__$1;
var args = seq__82982__$2;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,op], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,pred], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),ob.data_to_hiccup.render_ls.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),cljs.core.vec.call(null,args),ctx)], null)], null);
}));
cljs.core._add_method.call(null,ob.data_to_hiccup.position_children,new cljs.core.Keyword(null,"do","do",46310725),(function (p__82984,ctx){
var map__82985 = p__82984;
var map__82985__$1 = cljs.core.__destructure_map.call(null,map__82985);
var form = map__82985__$1;
var children = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__82986 = children;
var seq__82987 = cljs.core.seq.call(null,vec__82986);
var first__82988 = cljs.core.first.call(null,seq__82987);
var seq__82987__$1 = cljs.core.next.call(null,seq__82987);
var op = first__82988;
var args = seq__82987__$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,op], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),ob.data_to_hiccup.render_ls.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),cljs.core.vec.call(null,args),ctx)], null)], null);
}));
cljs.core._add_method.call(null,ob.data_to_hiccup.position_children,new cljs.core.Keyword(null,"binding-vector","binding-vector",466058868),(function (p__82989,ctx){
var map__82990 = p__82989;
var map__82990__$1 = cljs.core.__destructure_map.call(null,map__82990);
var form = map__82990__$1;
var children = cljs.core.get.call(null,map__82990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return ob.data_to_hiccup.col_of_pairs.call(null,children,ctx);
}));
cljs.core._add_method.call(null,ob.data_to_hiccup.position_children,new cljs.core.Keyword(null,"let","let",-1282412701),(function (p__82991,ctx){
var map__82992 = p__82991;
var map__82992__$1 = cljs.core.__destructure_map.call(null,map__82992);
var form = map__82992__$1;
var children = cljs.core.get.call(null,map__82992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__82993 = children;
var op = cljs.core.nth.call(null,vec__82993,(0),null);
var bindings = cljs.core.nth.call(null,vec__82993,(1),null);
var body = cljs.core.nth.call(null,vec__82993,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,op], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,bindings], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.data_to_hiccup.render,body,ctx], null)], null)], null);
}));
ob.data_to_hiccup.add_transitions = (function ob$data_to_hiccup$add_transitions(datum,p__82996){
var map__82997 = p__82996;
var map__82997__$1 = cljs.core.__destructure_map.call(null,map__82997);
var props = map__82997__$1;
var id = cljs.core.get.call(null,map__82997__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var f = ob.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->trs","id->trs",-1747753659),id], null));
return props;
});

//# sourceMappingURL=data_to_hiccup.js.map
