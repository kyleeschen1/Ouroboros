// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.analyzer');
goog.require('cljs.core');
goog.require('ob.utils');






/**
 * @interface
 */
ob.analyzer.IAnalyze = function(){};

var ob$analyzer$IAnalyze$_analyze$dyn_80531 = (function (form,env){
var x__4550__auto__ = (((form == null))?null:form);
var m__4551__auto__ = (ob.analyzer._analyze[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,form,env);
} else {
var m__4549__auto__ = (ob.analyzer._analyze["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,form,env);
} else {
throw cljs.core.missing_protocol.call(null,"IAnalyze.-analyze",form);
}
}
});
ob.analyzer._analyze = (function ob$analyzer$_analyze(form,env){
if((((!((form == null)))) && ((!((form.ob$analyzer$IAnalyze$_analyze$arity$2 == null)))))){
return form.ob$analyzer$IAnalyze$_analyze$arity$2(form,env);
} else {
return ob$analyzer$IAnalyze$_analyze$dyn_80531.call(null,form,env);
}
});

ob.analyzer.analyze = (function ob$analyzer$analyze(form,env){
return ob.analyzer.assoc_id.call(null,ob.analyzer._analyze.call(null,form,env));
});
ob.analyzer.map_analyze = (function ob$analyzer$map_analyze(form,env){
return cljs.core.mapv.call(null,(function (node){
return ob.analyzer.analyze.call(null,node,env);
}),form);
});
ob.analyzer.coll_analyze = (function ob$analyzer$coll_analyze(op,parens,form,env){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"parens","parens",1028661830),parens,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),new cljs.core.Keyword(null,"elements","elements",657646735),ob.analyzer.map_analyze.call(null,form,env)], null);
});
ob.analyzer.constant__GT_type = (function ob$analyzer$constant__GT_type(form){
if(typeof form === 'number'){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if(cljs.core.boolean_QMARK_.call(null,form)){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
} else {
if(typeof form === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if((form instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if((form == null)){
return new cljs.core.Keyword(null,"nil","nil",99600501);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
}
}
}
});
ob.analyzer.assoc_id = (function ob$analyzer$assoc_id(ast){
var form = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(ast);
var map__80532 = cljs.core.meta.call(null,form);
var map__80532__$1 = cljs.core.__destructure_map.call(null,map__80532);
var id = cljs.core.get.call(null,map__80532__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var child_ids = cljs.core.get.call(null,map__80532__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
var parent_id = cljs.core.get.call(null,map__80532__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861),child_ids,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id);
});
ob.analyzer.postprocess_ast = (function ob$analyzer$postprocess_ast(ast){
return ob.analyzer.assoc_id.call(null,ast);
});
(cljs.core.PersistentHashMap.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return ob.analyzer.coll_analyze.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null),form__$1,env);
}));

(cljs.core.PersistentArrayMap.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return ob.analyzer.coll_analyze.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null),form__$1,env);
}));

(cljs.core.Symbol.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
}));

(ob.utils.Constant.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(ob.utils.Constant.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (p__80533,env){
var map__80534 = p__80533;
var map__80534__$1 = cljs.core.__destructure_map.call(null,map__80534);
var form = map__80534__$1;
var value = cljs.core.get.call(null,map__80534__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__80535 = this;
var map__80535__$1 = cljs.core.__destructure_map.call(null,map__80535);
var form__$1 = map__80535__$1;
var value__$1 = cljs.core.get.call(null,map__80535__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type = ob.analyzer.constant__GT_type.call(null,value__$1);
var name = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),type))?["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1),"\""].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null);
}));

(cljs.core.MapEntry.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
var vec__80536 = form__$1;
var k = cljs.core.nth.call(null,vec__80536,(0),null);
var v = cljs.core.nth.call(null,vec__80536,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"key","key",-1516042587),ob.analyzer.analyze.call(null,k,env),new cljs.core.Keyword(null,"value","value",305978217),ob.analyzer.analyze.call(null,v,env)], null);
}));

(cljs.core.LazySeq.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env))){
return ob.analyzer.coll_analyze.call(null,new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),form__$1,env);
} else {
return cljs.core.assoc.call(null,ob.analyzer.analyze_sexpr.call(null,form__$1,env),new cljs.core.Keyword(null,"parens","parens",1028661830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null));
}
}));

(cljs.core.PersistentVector.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return ob.analyzer.coll_analyze.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null),form__$1,env);
}));

(cljs.core.List.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env))){
return ob.analyzer.coll_analyze.call(null,new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),form__$1,env);
} else {
return cljs.core.assoc.call(null,ob.analyzer.analyze_sexpr.call(null,form__$1,env),new cljs.core.Keyword(null,"parens","parens",1028661830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null));
}
}));

(cljs.core.PersistentHashSet.prototype.ob$analyzer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.ob$analyzer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return ob.analyzer.coll_analyze.call(null,new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null),form__$1,env);
}));
if((typeof ob !== 'undefined') && (typeof ob.analyzer !== 'undefined') && (typeof ob.analyzer.analyze_sexpr !== 'undefined')){
} else {
ob.analyzer.analyze_sexpr = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.analyzer","analyze-sexpr"),(function (p__80539,_){
var vec__80540 = p__80539;
var seq__80541 = cljs.core.seq.call(null,vec__80540);
var first__80542 = cljs.core.first.call(null,seq__80541);
var seq__80541__$1 = cljs.core.next.call(null,seq__80541);
var op = first__80542;
var ___$1 = seq__80541__$1;
return cljs.core.keyword.call(null,op);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.analyzer.analyze_sexpr,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__80543,env){
var vec__80544 = p__80543;
var seq__80545 = cljs.core.seq.call(null,vec__80544);
var first__80546 = cljs.core.first.call(null,seq__80545);
var seq__80545__$1 = cljs.core.next.call(null,seq__80545);
var op = first__80546;
var args = seq__80545__$1;
var form = vec__80544;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.Keyword(null,"f","f",-1597136552),ob.analyzer.analyze.call(null,op,env),new cljs.core.Keyword(null,"args","args",1315556576),ob.analyzer.map_analyze.call(null,args,env)], null);
}));
cljs.core._add_method.call(null,ob.analyzer.analyze_sexpr,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__80547,env){
var vec__80548 = p__80547;
var op = cljs.core.nth.call(null,vec__80548,(0),null);
var pred = cljs.core.nth.call(null,vec__80548,(1),null);
var then = cljs.core.nth.call(null,vec__80548,(2),null);
var else$ = cljs.core.nth.call(null,vec__80548,(3),null);
var form = vec__80548;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.Keyword(null,"else","else",-1508377146)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyzer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"pred","pred",1927423397),ob.analyzer.analyze.call(null,pred,env),new cljs.core.Keyword(null,"then","then",460598070),ob.analyzer.analyze.call(null,then,env),new cljs.core.Keyword(null,"else","else",-1508377146),ob.analyzer.analyze.call(null,else$,env)], null);
}));
cljs.core._add_method.call(null,ob.analyzer.analyze_sexpr,new cljs.core.Keyword(null,"do","do",46310725),(function (p__80551,env){
var vec__80552 = p__80551;
var seq__80553 = cljs.core.seq.call(null,vec__80552);
var first__80554 = cljs.core.first.call(null,seq__80553);
var seq__80553__$1 = cljs.core.next.call(null,seq__80553);
var op = first__80554;
var args = seq__80553__$1;
var form = vec__80552;
var statements = ob.analyzer.map_analyze.call(null,cljs.core.butlast.call(null,args),env);
var return$ = ob.analyzer.analyze.call(null,cljs.core.last.call(null,args),env);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"statements","statements",600349855),new cljs.core.Keyword(null,"return","return",-1891502105)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyzer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"return","return",-1891502105),return$], null);
}));
cljs.core._add_method.call(null,ob.analyzer.analyze_sexpr,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__80555,env){
var vec__80556 = p__80555;
var op = cljs.core.nth.call(null,vec__80556,(0),null);
var arg = cljs.core.nth.call(null,vec__80556,(1),null);
var form = vec__80556;
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"arg","arg",-1747261837)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyzer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"arg","arg",-1747261837),ob.analyzer.analyze.call(null,arg,env__$1)], null);
}));
cljs.core._add_method.call(null,ob.analyzer.analyze_sexpr,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__80559,env){
var vec__80560 = p__80559;
var op = cljs.core.nth.call(null,vec__80560,(0),null);
var params = cljs.core.nth.call(null,vec__80560,(1),null);
var body = cljs.core.nth.call(null,vec__80560,(2),null);
var form = vec__80560;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyzer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"params","params",710516235),ob.analyzer.analyze.call(null,params,env),new cljs.core.Keyword(null,"body","body",-2049205669),ob.analyzer.analyze.call(null,body,env)], null);
}));
ob.analyzer.analyze_binding_pair = (function ob$analyzer$analyze_binding_pair(env){
return (function (form){
var sym = cljs.core.first.call(null,form);
var val = cljs.core.second.call(null,form);
return ob.analyzer.postprocess_ast.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"binding-pair","binding-pair",-526322922),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"val","val",128701612)], null),new cljs.core.Keyword(null,"sym","sym",-1444860305),ob.analyzer.analyze.call(null,sym,env),new cljs.core.Keyword(null,"val","val",128701612),ob.analyzer.analyze.call(null,val,env)], null));
});
});
ob.analyzer.analyze_bv = (function ob$analyzer$analyze_bv(bv,env){
var bindings = cljs.core.mapv.call(null,ob.analyzer.analyze_binding_pair.call(null,env),cljs.core.partition.call(null,(2),bv));
return ob.analyzer.postprocess_ast.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"binding-vector","binding-vector",466058868),new cljs.core.Keyword(null,"form","form",-1624062471),bv,new cljs.core.Keyword(null,"parens","parens",1028661830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null));
});
cljs.core._add_method.call(null,ob.analyzer.analyze_sexpr,new cljs.core.Keyword(null,"let","let",-1282412701),(function (p__80563,env){
var vec__80564 = p__80563;
var op = cljs.core.nth.call(null,vec__80564,(0),null);
var bv = cljs.core.nth.call(null,vec__80564,(1),null);
var body = cljs.core.nth.call(null,vec__80564,(2),null);
var form = vec__80564;
var bv__$1 = ob.analyzer.analyze_bv.call(null,bv,env);
var body__$1 = ob.analyzer.analyze.call(null,body,env);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyzer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bv__$1,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null);
}));
cljs.core._add_method.call(null,ob.analyzer.analyze_sexpr,new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (p__80567,env){
var vec__80568 = p__80567;
var seq__80569 = cljs.core.seq.call(null,vec__80568);
var first__80570 = cljs.core.first.call(null,seq__80569);
var seq__80569__$1 = cljs.core.next.call(null,seq__80569);
var op = first__80570;
var first__80570__$1 = cljs.core.first.call(null,seq__80569__$1);
var seq__80569__$2 = cljs.core.next.call(null,seq__80569__$1);
var tag = first__80570__$1;
var args = seq__80569__$2;
var form = vec__80568;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),op,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"args","args",1315556576),ob.analyzer.map_analyze.call(null,args,env)], null);
}));
ob.analyzer.analyze_sf = (function ob$analyzer$analyze_sf(operator){
return ob.analyzer.assoc_id.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"special-form","special-form",-1326536374),new cljs.core.Keyword(null,"form","form",-1624062471),operator,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name.call(null,operator)], null));
});

//# sourceMappingURL=analyzer.js.map
