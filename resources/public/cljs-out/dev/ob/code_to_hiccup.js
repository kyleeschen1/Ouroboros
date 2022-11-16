// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.code_to_hiccup');
goog.require('cljs.core');


ob.code_to_hiccup.code__GT_hiccup = (function ob$code_to_hiccup$code__GT_hiccup(var_args){
var G__25436 = arguments.length;
switch (G__25436) {
case 1:
return ob.code_to_hiccup.code__GT_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ob.code_to_hiccup.code__GT_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.code_to_hiccup.code__GT_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (form){
return ob.code_to_hiccup.code__GT_hiccup.call(null,form,cljs.core.identity);
}));

(ob.code_to_hiccup.code__GT_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (form,k){
var temp__5718__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(temp__5718__auto__)){
var child_keys = temp__5718__auto__;
var children = ob.code_to_hiccup.ast__GT_flat_child_vector.call(null,form,child_keys);
var vec__25437 = ob.code_to_hiccup.get_enclosings.call(null,form);
var op = cljs.core.nth.call(null,vec__25437,(0),null);
var cl = cljs.core.nth.call(null,vec__25437,(1),null);
var G__25443 = children;
var vec__25444 = G__25443;
var seq__25445 = cljs.core.seq.call(null,vec__25444);
var first__25446 = cljs.core.first.call(null,seq__25445);
var seq__25445__$1 = cljs.core.next.call(null,seq__25445);
var c = first__25446;
var cs = seq__25445__$1;
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null);
var G__25443__$1 = G__25443;
var acc__$1 = acc;
while(true){
var vec__25450 = G__25443__$1;
var seq__25451 = cljs.core.seq.call(null,vec__25450);
var first__25452 = cljs.core.first.call(null,seq__25451);
var seq__25451__$1 = cljs.core.next.call(null,seq__25451);
var c__$1 = first__25452;
var cs__$1 = seq__25451__$1;
var acc__$2 = acc__$1;
if(cljs.core.seq.call(null,cs__$1)){
var G__25454 = cs__$1;
var G__25455 = cljs.core.conj.call(null,acc__$2,ob.code_to_hiccup.code__GT_hiccup.call(null,c__$1));
G__25443__$1 = G__25454;
acc__$1 = G__25455;
continue;
} else {
return ob.code_to_hiccup.format_html.call(null,form,cljs.core.conj.call(null,acc__$2,ob.code_to_hiccup.code__GT_hiccup.call(null,c__$1,((function (G__25443__$1,acc__$1,vec__25450,seq__25451,first__25452,seq__25451__$1,c__$1,cs__$1,acc__$2,G__25443,vec__25444,seq__25445,first__25446,seq__25445__$1,c,cs,acc,children,vec__25437,op,cl,child_keys,temp__5718__auto__){
return (function (form__$1){
return k.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),form__$1,cl], null));
});})(G__25443__$1,acc__$1,vec__25450,seq__25451,first__25452,seq__25451__$1,c__$1,cs__$1,acc__$2,G__25443,vec__25444,seq__25445,first__25446,seq__25445__$1,c,cs,acc,children,vec__25437,op,cl,child_keys,temp__5718__auto__))
)));
}
break;
}
} else {
return k.call(null,ob.code_to_hiccup.format_html.call(null,form,null));
}
}));

(ob.code_to_hiccup.code__GT_hiccup.cljs$lang$maxFixedArity = 2);

ob.code_to_hiccup.get_enclosings = (function ob$code_to_hiccup$get_enclosings(p__25456){
var map__25457 = p__25456;
var map__25457__$1 = cljs.core.__destructure_map.call(null,map__25457);
var op = cljs.core.get.call(null,map__25457__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var id = cljs.core.get.call(null,map__25457__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vec__25458 = (function (){var G__25461 = op;
var G__25461__$1 = (((G__25461 instanceof cljs.core.Keyword))?G__25461.fqn:null);
switch (G__25461__$1) {
case "vector":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);

break;
case "binding-vector":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);

break;
case "list":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);

break;
case "set":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null);

break;
default:
return null;

}
})();
var op__$1 = cljs.core.nth.call(null,vec__25458,(0),null);
var cl = cljs.core.nth.call(null,vec__25458,(1),null);
var gen_div = (function (prefix,string){
var paren_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var paren_cls = ["bracket-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),paren_id,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,paren_cls,"token"], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),params,string], null);
});
if(cljs.core.truth_(op__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gen_div.call(null,"opening",op__$1),gen_div.call(null,"closing",cl)], null);
} else {
return null;
}
});
/**
 * The function whose name I
 *   most despise.
 * 
 *   Returns a vector of the children
 *   of an AST, with all lists of nodes
 *   flattened (giving us a vector of AST
 *   maps).
 */
ob.code_to_hiccup.ast__GT_flat_child_vector = (function ob$code_to_hiccup$ast__GT_flat_child_vector(ast,child_keys){
var G__25466 = cljs.core.apply.call(null,cljs.core.juxt,child_keys).call(null,ast);
var vec__25467 = G__25466;
var seq__25468 = cljs.core.seq.call(null,vec__25467);
var first__25469 = cljs.core.first.call(null,seq__25468);
var seq__25468__$1 = cljs.core.next.call(null,seq__25468);
var c = first__25469;
var cs = seq__25468__$1;
var children = vec__25467;
var acc = cljs.core.PersistentVector.EMPTY;
var G__25466__$1 = G__25466;
var acc__$1 = acc;
while(true){
var vec__25473 = G__25466__$1;
var seq__25474 = cljs.core.seq.call(null,vec__25473);
var first__25475 = cljs.core.first.call(null,seq__25474);
var seq__25474__$1 = cljs.core.next.call(null,seq__25474);
var c__$1 = first__25475;
var cs__$1 = seq__25474__$1;
var children__$1 = vec__25473;
var acc__$2 = acc__$1;
if(cljs.core.not.call(null,cljs.core.seq.call(null,children__$1))){
return acc__$2;
} else {
if(cljs.core.seq_QMARK_.call(null,c__$1)){
var G__25476 = cs__$1;
var G__25477 = cljs.core.into.call(null,acc__$2,c__$1);
G__25466__$1 = G__25476;
acc__$1 = G__25477;
continue;
} else {
var G__25478 = cs__$1;
var G__25479 = cljs.core.conj.call(null,acc__$2,c__$1);
G__25466__$1 = G__25478;
acc__$1 = G__25479;
continue;
}
}
break;
}
});
ob.code_to_hiccup.format_html = (function ob$code_to_hiccup$format_html(form,acc){
var div = ob.code_to_hiccup._format_html.call(null,form,acc);
return cljs.core.update.call(null,div,(1),(function (params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))){
return params;
} else {
return cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(form)));
}
}));
});
if((typeof ob !== 'undefined') && (typeof ob.code_to_hiccup !== 'undefined') && (typeof ob.code_to_hiccup._format_html !== 'undefined')){
} else {
ob.code_to_hiccup._format_html = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.code-to-hiccup","-format-html"),(function (p__25480,_){
var map__25481 = p__25480;
var map__25481__$1 = cljs.core.__destructure_map.call(null,map__25481);
var op = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (p__25482,args){
var map__25483 = p__25482;
var map__25483__$1 = cljs.core.__destructure_map.call(null,map__25483);
var tag = cljs.core.get.call(null,map__25483__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)], null)], null),args);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ast,p__25484){
var vec__25485 = p__25484;
var seq__25486 = cljs.core.seq.call(null,vec__25485);
var first__25487 = cljs.core.first.call(null,seq__25486);
var seq__25486__$1 = cljs.core.next.call(null,seq__25486);
var op_paren = first__25487;
var acc = seq__25486__$1;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,op_paren], null),acc);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (ast,_){
var cls = cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.token","div.token",-1455309558),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cls], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], null);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (ast,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.token","div.token",-1455309558),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"symbol"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], null);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"special-form","special-form",-1326536374),(function (ast,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.token","div.token",-1455309558),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"special-form"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], null);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"map","map",1371690461),(function (ast,p__25488){
var vec__25489 = p__25488;
var seq__25490 = cljs.core.seq.call(null,vec__25489);
var first__25491 = cljs.core.first.call(null,seq__25490);
var seq__25490__$1 = cljs.core.next.call(null,seq__25490);
var op_paren = first__25491;
var acc = seq__25490__$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,op_paren,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),acc)], null);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),(function (ast,acc){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),acc);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"if","if",-458814265),(function (ast,p__25492){
var vec__25493 = p__25492;
var op_paren = cljs.core.nth.call(null,vec__25493,(0),null);
var operator = cljs.core.nth.call(null,vec__25493,(1),null);
var pred = cljs.core.nth.call(null,vec__25493,(2),null);
var else$ = cljs.core.nth.call(null,vec__25493,(3),null);
var then = cljs.core.nth.call(null,vec__25493,(4),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,op_paren,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),operator,pred], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),else$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),then], null)], null)], null);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"do","do",46310725),(function (ast,p__25496){
var vec__25497 = p__25496;
var seq__25498 = cljs.core.seq.call(null,vec__25497);
var first__25499 = cljs.core.first.call(null,seq__25498);
var seq__25498__$1 = cljs.core.next.call(null,seq__25498);
var op_paren = first__25499;
var first__25499__$1 = cljs.core.first.call(null,seq__25498__$1);
var seq__25498__$2 = cljs.core.next.call(null,seq__25498__$1);
var op = first__25499__$1;
var statements = seq__25498__$2;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,op_paren,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),statements)], null)], null)], null);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (ast,p__25500){
var vec__25501 = p__25500;
var op_paren = cljs.core.nth.call(null,vec__25501,(0),null);
var op = cljs.core.nth.call(null,vec__25501,(1),null);
var arg = cljs.core.nth.call(null,vec__25501,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,op_paren,op,arg], null);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"binding-vector","binding-vector",466058868),(function (ast,p__25504){
var vec__25505 = p__25504;
var seq__25506 = cljs.core.seq.call(null,vec__25505);
var first__25507 = cljs.core.first.call(null,seq__25506);
var seq__25506__$1 = cljs.core.next.call(null,seq__25506);
var op_paren = first__25507;
var acc = seq__25506__$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,op_paren,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),acc)], null);
}));
cljs.core._add_method.call(null,ob.code_to_hiccup._format_html,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast,p__25508){
var vec__25509 = p__25508;
var op_paren = cljs.core.nth.call(null,vec__25509,(0),null);
var operator = cljs.core.nth.call(null,vec__25509,(1),null);
var bindings = cljs.core.nth.call(null,vec__25509,(2),null);
var body = cljs.core.nth.call(null,vec__25509,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,op_paren,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),operator,bindings], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),body], null)], null)], null);
}));

//# sourceMappingURL=code_to_hiccup.js.map
