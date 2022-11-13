// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.analyer');
goog.require('cljs.core');
goog.require('ob.utils');





/**
 * @interface
 */
ob.analyer.IAnalyze = function(){};

var ob$analyer$IAnalyze$_analyze$dyn_49238 = (function (form,env){
var x__4550__auto__ = (((form == null))?null:form);
var m__4551__auto__ = (ob.analyer._analyze[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,form,env);
} else {
var m__4549__auto__ = (ob.analyer._analyze["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,form,env);
} else {
throw cljs.core.missing_protocol.call(null,"IAnalyze.-analyze",form);
}
}
});
ob.analyer._analyze = (function ob$analyer$_analyze(form,env){
if((((!((form == null)))) && ((!((form.ob$analyer$IAnalyze$_analyze$arity$2 == null)))))){
return form.ob$analyer$IAnalyze$_analyze$arity$2(form,env);
} else {
return ob$analyer$IAnalyze$_analyze$dyn_49238.call(null,form,env);
}
});

ob.analyer.analyze = (function ob$analyer$analyze(form,env){
return ob.analyer.assoc_id.call(null,ob.analyer._analyze.call(null,form,env));
});
ob.analyer.map_analyze = (function ob$analyer$map_analyze(form,env){
return cljs.core.map.call(null,(function (node){
return ob.analyer.analyze.call(null,node,env);
}),form);
});
ob.analyer.form__GT_type = (function ob$analyer$form__GT_type(form){
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
ob.analyer.assoc_id = (function ob$analyer$assoc_id(ast){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(ast)));
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});
(ob.utils.Constant.prototype.ob$analyer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(ob.utils.Constant.prototype.ob$analyer$IAnalyze$_analyze$arity$2 = (function (p__49239,env){
var map__49240 = p__49239;
var map__49240__$1 = cljs.core.__destructure_map.call(null,map__49240);
var form = map__49240__$1;
var value = cljs.core.get.call(null,map__49240__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__49241 = this;
var map__49241__$1 = cljs.core.__destructure_map.call(null,map__49241);
var form__$1 = map__49241__$1;
var value__$1 = cljs.core.get.call(null,map__49241__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type = ob.analyer.form__GT_type.call(null,value__$1);
var name = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),type))?["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1),"\""].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null);
}));

(cljs.core.Symbol.prototype.ob$analyer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.ob$analyer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
}));

(cljs.core.List.prototype.ob$analyer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.ob$analyer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"tag","tag",350170304,null),cljs.core.first.call(null,form__$1)))?new cljs.core.Keyword(null,"tagged-list","tagged-list",674728598):new cljs.core.Keyword(null,"list","list",765357683)),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),new cljs.core.Keyword(null,"elements","elements",657646735),ob.analyer.analyze_sexpr.call(null,form__$1,env)], null);
}));

(cljs.core.PersistentHashSet.prototype.ob$analyer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.ob$analyer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),new cljs.core.Keyword(null,"elements","elements",657646735),ob.analyer.map_analyze.call(null,form__$1,env)], null);
}));

(cljs.core.PersistentVector.prototype.ob$analyer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.ob$analyer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),new cljs.core.Keyword(null,"elements","elements",657646735),ob.analyer.map_analyze.call(null,form__$1,env)], null);
}));

(cljs.core.PersistentArrayMap.prototype.ob$analyer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.ob$analyer$IAnalyze$_analyze$arity$2 = (function (form,env){
var form__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),new cljs.core.Keyword(null,"elements","elements",657646735),ob.analyer.map_analyze.call(null,form__$1,env)], null);
}));

(cljs.core.MapEntry.prototype.ob$analyer$IAnalyze$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.ob$analyer$IAnalyze$_analyze$arity$2 = (function (p__49242,env){
var vec__49243 = p__49242;
var k = cljs.core.nth.call(null,vec__49243,(0),null);
var v = cljs.core.nth.call(null,vec__49243,(1),null);
var form = vec__49243;
var vec__49246 = this;
var k__$1 = cljs.core.nth.call(null,vec__49246,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__49246,(1),null);
var form__$1 = vec__49246;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"key","key",-1516042587),ob.analyer.analyze.call(null,k__$1,env),new cljs.core.Keyword(null,"value","value",305978217),ob.analyer.analyze.call(null,v__$1,env)], null);
}));
if((typeof ob !== 'undefined') && (typeof ob.analyer !== 'undefined') && (typeof ob.analyer.analyze_sexpr !== 'undefined')){
} else {
ob.analyer.analyze_sexpr = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.analyer","analyze-sexpr"),(function (p__49249,_){
var vec__49250 = p__49249;
var seq__49251 = cljs.core.seq.call(null,vec__49250);
var first__49252 = cljs.core.first.call(null,seq__49251);
var seq__49251__$1 = cljs.core.next.call(null,seq__49251);
var op = first__49252;
var ___$1 = seq__49251__$1;
return cljs.core.keyword.call(null,op);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.analyer.analyze_sexpr,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__49253,env){
var vec__49254 = p__49253;
var seq__49255 = cljs.core.seq.call(null,vec__49254);
var first__49256 = cljs.core.first.call(null,seq__49255);
var seq__49255__$1 = cljs.core.next.call(null,seq__49255);
var op = first__49256;
var args = seq__49255__$1;
var form = vec__49254;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.Keyword(null,"f","f",-1597136552),ob.analyer.analyze.call(null,op,env),new cljs.core.Keyword(null,"args","args",1315556576),ob.analyer.map_analyze.call(null,args,env)], null);
}));
cljs.core._add_method.call(null,ob.analyer.analyze_sexpr,new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (p__49257,env){
var vec__49258 = p__49257;
var seq__49259 = cljs.core.seq.call(null,vec__49258);
var first__49260 = cljs.core.first.call(null,seq__49259);
var seq__49259__$1 = cljs.core.next.call(null,seq__49259);
var op = first__49260;
var first__49260__$1 = cljs.core.first.call(null,seq__49259__$1);
var seq__49259__$2 = cljs.core.next.call(null,seq__49259__$1);
var tag = first__49260__$1;
var args = seq__49259__$2;
var form = vec__49258;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),op,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"args","args",1315556576),ob.analyer.map_analyze.call(null,args,env)], null);
}));
cljs.core._add_method.call(null,ob.analyer.analyze_sexpr,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__49261,env){
var vec__49262 = p__49261;
var op = cljs.core.nth.call(null,vec__49262,(0),null);
var pred = cljs.core.nth.call(null,vec__49262,(1),null);
var then = cljs.core.nth.call(null,vec__49262,(2),null);
var else$ = cljs.core.nth.call(null,vec__49262,(3),null);
var form = vec__49262;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.Keyword(null,"else","else",-1508377146)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"pred","pred",1927423397),ob.analyer.analyze.call(null,pred,env),new cljs.core.Keyword(null,"then","then",460598070),ob.analyer.analyze.call(null,then,env),new cljs.core.Keyword(null,"else","else",-1508377146),ob.analyer.analyze.call(null,else$,env)], null);
}));
cljs.core._add_method.call(null,ob.analyer.analyze_sexpr,new cljs.core.Keyword(null,"do","do",46310725),(function (p__49265,env){
var vec__49266 = p__49265;
var seq__49267 = cljs.core.seq.call(null,vec__49266);
var first__49268 = cljs.core.first.call(null,seq__49267);
var seq__49267__$1 = cljs.core.next.call(null,seq__49267);
var op = first__49268;
var args = seq__49267__$1;
var form = vec__49266;
var statements = ob.analyer.map_analyze.call(null,cljs.core.butlast.call(null,args),env);
var return$ = ob.analyer.analyze.call(null,cljs.core.last.call(null,args),env);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"statements","statements",600349855),new cljs.core.Keyword(null,"return","return",-1891502105)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"return","return",-1891502105),return$], null);
}));
cljs.core._add_method.call(null,ob.analyer.analyze_sexpr,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__49269,env){
var vec__49270 = p__49269;
var op = cljs.core.nth.call(null,vec__49270,(0),null);
var arg = cljs.core.nth.call(null,vec__49270,(1),null);
var form = vec__49270;
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"arg","arg",-1747261837)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"arg","arg",-1747261837),ob.analyer.analyze.call(null,arg,env__$1)], null);
}));
ob.analyer.analyze_bv = (function ob$analyer$analyze_bv(bv,env){
var analyze_pair = (function (form){
var sym = cljs.core.first.call(null,form);
var val = cljs.core.second.call(null,form);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"binding-pair","binding-pair",-526322922),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"val","val",128701612)], null),new cljs.core.Keyword(null,"sym","sym",-1444860305),ob.analyer.analyze.call(null,sym,env),new cljs.core.Keyword(null,"val","val",128701612),ob.analyer.analyze.call(null,val,env)], null);
});
var bindings = cljs.core.map.call(null,analyze_pair,cljs.core.partition.call(null,(2),bv));
return ob.analyer.assoc_id.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"binding-vector","binding-vector",466058868),new cljs.core.Keyword(null,"form","form",-1624062471),bv,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null));
});
cljs.core._add_method.call(null,ob.analyer.analyze_sexpr,new cljs.core.Keyword(null,"let","let",-1282412701),(function (p__49273,env){
var vec__49274 = p__49273;
var op = cljs.core.nth.call(null,vec__49274,(0),null);
var bv = cljs.core.nth.call(null,vec__49274,(1),null);
var body = cljs.core.nth.call(null,vec__49274,(2),null);
var form = vec__49274;
var bv__$1 = ob.analyer.analyze_bv.call(null,bv,env);
var body__$1 = ob.analyer.analyze.call(null,body,env);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.Keyword(null,"operator","operator",-1860875338),ob.analyer.analyze_sf.call(null,op),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bv__$1,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null);
}));
ob.analyer.analyze_sf = (function ob$analyer$analyze_sf(operator){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"special-form","special-form",-1326536374),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name.call(null,operator)], null);
});

//# sourceMappingURL=analyer.js.map
