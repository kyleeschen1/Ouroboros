// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.clojure');
goog.require('cljs.core');
goog.require('ob.utils');
goog.require('ob.analyzer');
goog.require('com.rpl.specter');
goog.require('cljs.pprint');
goog.require('cljs.repl');
goog.require('clojure.zip');
if((typeof ob !== 'undefined') && (typeof ob.clojure !== 'undefined') && (typeof ob.clojure.eval_STAR_ !== 'undefined')){
} else {
ob.clojure.eval_STAR_ = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.clojure","eval*"),(function (form,env,k){
if((form instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return new cljs.core.Keyword(null,"s-exprs","s-exprs",-1026729470);
} else {
if(cljs.core.list_QMARK_.call(null,form)){
return new cljs.core.Keyword(null,"s-exprs","s-exprs",-1026729470);
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return new cljs.core.Keyword(null,"collection","collection",-683361892);
} else {
return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof ob !== 'undefined') && (typeof ob.clojure !== 'undefined') && (typeof ob.clojure.eval_sexpr !== 'undefined')){
} else {
ob.clojure.eval_sexpr = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.clojure","eval-sexpr"),cljs.core.comp.call(null,cljs.core.keyword,cljs.core.first),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
ob.clojure.evaluate = (function ob$clojure$evaluate(form,env,k){
try{var counter = cljs.core.atom.call(null,(0));
var state = ob.clojure.eval_STAR_.call(null,form,env,k);
var states = cljs.core.PersistentVector.EMPTY;
while(true){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

if((cljs.core.deref.call(null,counter) < (100))){
var map__170010 = state;
var map__170010__$1 = cljs.core.__destructure_map.call(null,map__170010);
var return$ = cljs.core.get.call(null,map__170010__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var env__$1 = cljs.core.get.call(null,map__170010__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var k__$1 = cljs.core.get.call(null,map__170010__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.map_QMARK_.call(null,state)){
cljs.pprint.pprint.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"k","k",-2146297393)));
} else {
}

if(cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"return","return",-1891502105))){
var G__170011 = k__$1.call(null,return$,env__$1);
var G__170012 = cljs.core.conj.call(null,states,state);
state = G__170011;
states = G__170012;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
}catch (e170008){if((e170008 instanceof Error)){
var e = e170008;
return e;
} else {
throw e170008;

}
}});
ob.clojure.gen_evaluation_stream = (function ob$clojure$gen_evaluation_stream(form,env,k){
var state__GT_stream = (function ob$clojure$gen_evaluation_stream_$_state__GT_stream(state){
if(cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"return","return",-1891502105))){
var state__$1 = ob.clojure.reindex.call(null,state);
return cljs.core.cons.call(null,state__$1,(new cljs.core.LazySeq(null,(function (){
var map__170014 = state__$1;
var map__170014__$1 = cljs.core.__destructure_map.call(null,map__170014);
var return$ = cljs.core.get.call(null,map__170014__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var form__$1 = cljs.core.get.call(null,map__170014__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env__$1 = cljs.core.get.call(null,map__170014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var k__$1 = cljs.core.get.call(null,map__170014__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
return ob$clojure$gen_evaluation_stream_$_state__GT_stream.call(null,k__$1.call(null,return$,env__$1));
}),null,null)));
} else {
return null;
}
});
return state__GT_stream.call(null,ob.clojure.eval_STAR_.call(null,form,env,k));
});
ob.clojure.thread_ks = (function ob$clojure$thread_ks(combining_fn){
return (function() { 
var G__170017__delegate = function (final_k,forms,args){
var f = cljs.core.reduce.call(null,(function (p1__170016_SHARP_,p2__170015_SHARP_){
return p2__170015_SHARP_.call(null,p1__170016_SHARP_);
}),final_k,cljs.core.map.call(null,combining_fn,cljs.core.reverse.call(null,forms)));
return cljs.core.apply.call(null,f,args);
};
var G__170017 = function (final_k,forms,var_args){
var args = null;
if (arguments.length > 2) {
var G__170018__i = 0, G__170018__a = new Array(arguments.length -  2);
while (G__170018__i < G__170018__a.length) {G__170018__a[G__170018__i] = arguments[G__170018__i + 2]; ++G__170018__i;}
  args = new cljs.core.IndexedSeq(G__170018__a,0,null);
} 
return G__170017__delegate.call(this,final_k,forms,args);};
G__170017.cljs$lang$maxFixedArity = 2;
G__170017.cljs$lang$applyTo = (function (arglist__170019){
var final_k = cljs.core.first(arglist__170019);
arglist__170019 = cljs.core.next(arglist__170019);
var forms = cljs.core.first(arglist__170019);
var args = cljs.core.rest(arglist__170019);
return G__170017__delegate(final_k,forms,args);
});
G__170017.cljs$core$IFn$_invoke$arity$variadic = G__170017__delegate;
return G__170017;
})()
;
});
ob.clojure.run_args = ob.clojure.thread_ks.call(null,(function (form){
return (function (k){
return (function (env,coll){
return ob.clojure.eval_STAR_.call(null,form,env,(function (result,env__$1){
return k.call(null,env__$1,cljs.core.conj.call(null,coll,result));
}));
});
});
}));
ob.clojure.run_bindings = ob.clojure.thread_ks.call(null,(function (p__170020){
var vec__170021 = p__170020;
var sym = cljs.core.nth.call(null,vec__170021,(0),null);
var val = cljs.core.nth.call(null,vec__170021,(1),null);
return (function (k){
return (function (env){
return ob.clojure.eval_STAR_.call(null,val,env,(function (result,env__$1){
var env__$2 = cljs.core.assoc.call(null,env__$1,sym,result);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"bind-local","bind-local",-1066867894),new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"return","return",-1891502105),result,new cljs.core.Keyword(null,"env","env",-1815813235),env__$2,new cljs.core.Keyword(null,"k","k",-2146297393),(function (_,env__$3){
return k.call(null,env__$3);
})], null);
}));
});
});
}));
cljs.core._add_method.call(null,ob.clojure.eval_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (form,env,k){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"return","return",-1891502105),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"k","k",-2146297393),k], null);
}));
cljs.core._add_method.call(null,ob.clojure.eval_STAR_,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (form,env,k){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.get.call(null,env,form)], null);
}));
cljs.core._add_method.call(null,ob.clojure.eval_STAR_,new cljs.core.Keyword(null,"collection","collection",-683361892),(function (form,env,k){
var k__$1 = (function (env__$1,coll){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$,env__$2){
return k.call(null,return$,env__$2);
}),new cljs.core.Keyword(null,"return","return",-1891502105),((cljs.core.map_entry_QMARK_.call(null,form))?coll:cljs.core.into.call(null,cljs.core.empty.call(null,form),coll))], null);
});
return ob.clojure.run_args.call(null,k__$1,form,env,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,ob.clojure.eval_STAR_,new cljs.core.Keyword(null,"s-exprs","s-exprs",-1026729470),(function (form,env,k){
return ob.clojure.eval_sexpr.call(null,form,env,k);
}));
ob.clojure.lambda_QMARK_ = (function ob$clojure$lambda_QMARK_(op){
return ((cljs.core.coll_QMARK_.call(null,op)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,op))));
});
ob.clojure.set_recur_point = (function ob$clojure$set_recur_point(env,params,body){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"recur-point","recur-point",-355035890),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});
ob.clojure.eval_lambda = (function ob$clojure$eval_lambda(f,args,env,k){
var env_STAR_ = env;
var vec__170024 = f;
var _ = cljs.core.nth.call(null,vec__170024,(0),null);
var params = cljs.core.nth.call(null,vec__170024,(1),null);
var body = cljs.core.nth.call(null,vec__170024,(2),null);
var lex_env = new cljs.core.Keyword(null,"lex-env","lex-env",1373456182).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f));
var env__$1 = cljs.core.merge.call(null,env,lex_env);
var env__$2 = cljs.core.merge.call(null,env__$1,cljs.core.zipmap.call(null,params,args));
var env__$3 = ob.clojure.set_recur_point.call(null,env__$2,params,body);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"lambda","lambda",-1483427225),new cljs.core.Keyword(null,"env","env",-1815813235),env__$3,new cljs.core.Keyword(null,"return","return",-1891502105),body,new cljs.core.Keyword(null,"k","k",-2146297393),(function (body__$1,env__$4){
return ob.clojure.eval_STAR_.call(null,body__$1,env__$4,(function (result,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"lambda-exit","lambda-exit",-1562640999),new cljs.core.Keyword(null,"form","form",-1624062471),body__$1,new cljs.core.Keyword(null,"env","env",-1815813235),env_STAR_,new cljs.core.Keyword(null,"return","return",-1891502105),result,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$,env__$5){
return k.call(null,return$,env__$5);
})], null);
}));
})], null);
});
ob.clojure.get_val = (function ob$clojure$get_val(form){
if(ob.utils.constant_QMARK_.call(null,form)){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(form);
} else {
return form;
}
});
ob.clojure.lift_apply = (function ob$clojure$lift_apply(op,args){
return cljs.core.apply.call(null,op,cljs.core.map.call(null,ob.clojure.get_val,args));
});
ob.clojure.eval_invoke = (function ob$clojure$eval_invoke(f,args,env,k){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"return","return",-1891502105),ob.clojure.lift_apply.call(null,f,args),new cljs.core.Keyword(null,"k","k",-2146297393),k], null);
});
ob.clojure.cc_QMARK_ = (function ob$clojure$cc_QMARK_(op){
return new cljs.core.Keyword(null,"cc?","cc?",228261409).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,op));
});
ob.clojure.eval_cc = (function ob$clojure$eval_cc(f,args,env,k){
return cljs.core.apply.call(null,f,args);
});
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"default","default",-1987822328),(function (form,env,k){
var k__$1 = (function (env__$1,p__170027){
var vec__170028 = p__170027;
var seq__170029 = cljs.core.seq.call(null,vec__170028);
var first__170030 = cljs.core.first.call(null,seq__170029);
var seq__170029__$1 = cljs.core.next.call(null,seq__170029);
var op = first__170030;
var args = seq__170029__$1;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null),((ob.clojure.lambda_QMARK_.call(null,op))?ob.clojure.eval_lambda.call(null,op,args,env__$1,k):(cljs.core.truth_(ob.clojure.cc_QMARK_.call(null,op))?ob.clojure.eval_cc.call(null,op,args,env__$1,k):ob.clojure.eval_invoke.call(null,op,args,env__$1,k)
)));
});
return ob.clojure.run_args.call(null,k__$1,form,env,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (form,env,k){
var form__$1 = cljs.core.vary_meta.call(null,form,cljs.core.assoc,new cljs.core.Keyword(null,"lex-env","lex-env",1373456182),env);
return k.call(null,form__$1,env);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__170031,env,k){
var vec__170032 = p__170031;
var _ = cljs.core.nth.call(null,vec__170032,(0),null);
var pred = cljs.core.nth.call(null,vec__170032,(1),null);
var then = cljs.core.nth.call(null,vec__170032,(2),null);
var else$ = cljs.core.nth.call(null,vec__170032,(3),null);
var form = vec__170032;
return ob.clojure.eval_STAR_.call(null,pred,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"return","return",-1891502105),(cljs.core.truth_(ob.clojure.get_val.call(null,return$))?then:else$),new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return ob.clojure.eval_STAR_.call(null,return$__$1,env__$2,k);
})], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"do","do",46310725),(function (p__170035,env,k){
var vec__170036 = p__170035;
var seq__170037 = cljs.core.seq.call(null,vec__170036);
var first__170038 = cljs.core.first.call(null,seq__170037);
var seq__170037__$1 = cljs.core.next.call(null,seq__170037);
var _ = first__170038;
var args = seq__170037__$1;
var form = vec__170036;
var k__$1 = (function (env__$1,coll){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.last.call(null,coll),new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$,env__$2){
return k.call(null,return$,env__$2);
})], null);
});
return ob.clojure.run_args.call(null,k__$1,args,env,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (form,env,k){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"return","return",-1891502105),form,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$,env__$1){
return k.call(null,return$,env__$1);
})], null);
}));

cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"let","let",-1282412701),(function (form,env,k){
return ob.clojure.eval_let_forms.call(null,form,env,k);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (form,env,k){
return ob.clojure.eval_let_forms.call(null,form,env,k);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__170039,env,k){
var vec__170040 = p__170039;
var seq__170041 = cljs.core.seq.call(null,vec__170040);
var first__170042 = cljs.core.first.call(null,seq__170041);
var seq__170041__$1 = cljs.core.next.call(null,seq__170041);
var _ = first__170042;
var args = seq__170041__$1;
var form = vec__170040;
var map__170043 = cljs.core.get.call(null,env,new cljs.core.Keyword(null,"recur-point","recur-point",-355035890));
var map__170043__$1 = cljs.core.__destructure_map.call(null,map__170043);
var params = cljs.core.get.call(null,map__170043__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__170043__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var k__$1 = (function (env__$1,args__$1){
return cljs.core.merge.call(null,ob.clojure.eval_lambda.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params,body], null),args__$1,env__$1,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),body], null));
});
return ob.clojure.run_args.call(null,k__$1,args,env,cljs.core.PersistentVector.EMPTY);
}));
ob.clojure.letfn_fn = new cljs.core.Symbol(null,"fn","fn",465265323,null);
ob.clojure.letfn_fn__GT_binding_pairs = (function ob$clojure$letfn_fn__GT_binding_pairs(p__170044){
var vec__170045 = p__170044;
var seq__170046 = cljs.core.seq.call(null,vec__170045);
var first__170047 = cljs.core.first.call(null,seq__170046);
var seq__170046__$1 = cljs.core.next.call(null,seq__170046);
var fname = first__170047;
var args = seq__170046__$1;
var form = vec__170045;
var fn_body = cljs.core.cons.call(null,ob.clojure.letfn_fn,args);
var fn_body__$1 = cljs.core.with_meta.call(null,fn_body,cljs.core.meta.call(null,form));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,fn_body__$1], null);
});
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__170048,env,k){
var vec__170049 = p__170048;
var _ = cljs.core.nth.call(null,vec__170049,(0),null);
var bindings = cljs.core.nth.call(null,vec__170049,(1),null);
var body = cljs.core.nth.call(null,vec__170049,(2),null);
var form = vec__170049;
var env_STAR_ = env;
var pairs = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.clojure.pathcache170052;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170053 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null))], null)], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)], null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)], null));
ob.clojure.pathcache170052 = info170053;

return info170053;
})():info__17750__auto__);
var precompiled170054 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170054.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META], null),com.rpl.specter.ALL_WITH_META], null));
} else {
return precompiled170054;
}
})(),ob.clojure.letfn_fn__GT_binding_pairs,bindings);
var k__$1 = (function (env__$1){
return ob.clojure.eval_STAR_.call(null,body,env__$1,(function (return$,env__$2){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"letfn","letfn",-2121022354),new cljs.core.Keyword(null,"env","env",-1815813235),env_STAR_,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"return","return",-1891502105),return$,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$3){
return k.call(null,return$__$1,env__$3);
})], null);
}));
});
return ob.clojure.run_bindings.call(null,k__$1,pairs,env);
}));
ob.clojure.eval_let_forms = (function ob$clojure$eval_let_forms(p__170055,env,k){
var vec__170056 = p__170055;
var op = cljs.core.nth.call(null,vec__170056,(0),null);
var bindings = cljs.core.nth.call(null,vec__170056,(1),null);
var body = cljs.core.nth.call(null,vec__170056,(2),null);
var form = vec__170056;
var pairs = cljs.core.partition.call(null,(2),bindings);
var env__$1 = ((cljs.core._EQ_.call(null,op,new cljs.core.Symbol(null,"loop","loop",1244978678,null)))?ob.clojure.set_recur_point.call(null,env,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.clojure.pathcache170059;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170060 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null))], null)], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null));
ob.clojure.pathcache170059 = info170060;

return info170060;
})():info__17750__auto__);
var precompiled170061 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170061.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.FIRST], null),com.rpl.specter.ALL,com.rpl.specter.FIRST], null));
} else {
return precompiled170061;
}
})(),pairs),body):env);
var env_STAR_ = env__$1;
var k__$1 = (function (env__$2){
return ob.clojure.eval_STAR_.call(null,body,env__$2,(function (return$,env__$3){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env_STAR_,new cljs.core.Keyword(null,"return","return",-1891502105),return$,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$4){
return k.call(null,return$__$1,env__$4);
})], null);
}));
});
return ob.clojure.run_bindings.call(null,k__$1,pairs,env__$1);
});
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__170062,env,k){
var vec__170063 = p__170062;
var _ = cljs.core.nth.call(null,vec__170063,(0),null);
var sym = cljs.core.nth.call(null,vec__170063,(1),null);
var val = cljs.core.nth.call(null,vec__170063,(2),null);
var form = vec__170063;
return ob.clojure.eval_STAR_.call(null,val,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env__$1,sym,val),new cljs.core.Keyword(null,"return","return",-1891502105),val,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return k.call(null,return$__$1,env__$2);
})], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__170066,env,k){
var vec__170067 = p__170066;
var _ = cljs.core.nth.call(null,vec__170067,(0),null);
var sym = cljs.core.nth.call(null,vec__170067,(1),null);
var val = cljs.core.nth.call(null,vec__170067,(2),null);
var form = vec__170067;
return ob.clojure.eval_STAR_.call(null,val,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env__$1,sym,val),new cljs.core.Keyword(null,"return","return",-1891502105),val,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return k.call(null,return$__$1,env__$2);
})], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__170070,env,k){
var vec__170071 = p__170070;
var _ = cljs.core.nth.call(null,vec__170071,(0),null);
var arg = cljs.core.nth.call(null,vec__170071,(1),null);
var form = vec__170071;
return ob.clojure.eval_STAR_.call(null,arg,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"return","return",-1891502105),["Error :: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(return$)].join(''),new cljs.core.Keyword(null,"k","k",-2146297393),cljs.core.identity], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"call-with-current-continuation","call-with-current-continuation",-831618896),(function (p__170074,env,k){
var vec__170075 = p__170074;
var _ = cljs.core.nth.call(null,vec__170075,(0),null);
var f = cljs.core.nth.call(null,vec__170075,(1),null);
var form = vec__170075;
var cc = (function (hole){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoked-cc","invoked-cc",-212545883),new cljs.core.Keyword(null,"return","return",-1891502105),hole,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"k","k",-2146297393),(function (hole__$1,env__$1){
return k.call(null,hole__$1,env__$1);
})], null);
});
var cc__$1 = cljs.core.with_meta.call(null,cc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cc?","cc?",228261409),true], null));
return cljs.core.merge.call(null,ob.clojure.eval_lambda.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc__$1], null),env,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"call-with-current-continuation","call-with-current-continuation",-831618896)], null));
}));

ob.clojure.macroexpand_STAR_ = (function ob$clojure$macroexpand_STAR_(p__170078,env){
while(true){
var vec__170079 = p__170078;
var seq__170080 = cljs.core.seq.call(null,vec__170079);
var first__170081 = cljs.core.first.call(null,seq__170080);
var seq__170080__$1 = cljs.core.next.call(null,seq__170080);
var op = first__170081;
var args = seq__170080__$1;
var form = vec__170079;
var temp__5718__auto__ = ob.clojure.op__GT_macro_fn.call(null,op);
if(cljs.core.truth_(temp__5718__auto__)){
var macro_fn = temp__5718__auto__;
var new$ = ob.clojure.redistribute_ids.call(null,cljs.core.apply.call(null,macro_fn,args));
if(cljs.core.coll_QMARK_.call(null,new$)){
var G__170082 = new$;
var G__170083 = env;
p__170078 = G__170082;
env = G__170083;
continue;
} else {
return new$;
}
} else {
return form;
}
break;
}
});
ob.clojure.alter_macroexpand_node_QMARK_ = (function ob$clojure$alter_macroexpand_node_QMARK_(node){
return ((cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,node)))));
});
ob.clojure.RESTORE_MACRO = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.clojure.pathcache170084;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170085 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1430),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.symbol_QMARK_,new cljs.core.Var(function(){return cljs.core.symbol_QMARK_;},new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),"cljs/core.cljs",(23),(1),(1051),(1051),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x is a Symbol",((cljs.core.symbol_QMARK_)?cljs.core.symbol_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.clojure.alter_macroexpand_node_QMARK_,new cljs.core.Var(function(){return ob.clojure.alter_macroexpand_node_QMARK_;},new cljs.core.Symbol("ob.clojure","alter-macroexpand-node?","ob.clojure/alter-macroexpand-node?",-703885343,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"alter-macroexpand-node?","alter-macroexpand-node?",1110227226,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",30,1,500,500,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(ob.clojure.alter_macroexpand_node_QMARK_)?ob.clojure.alter_macroexpand_node_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"alter-macroexpand-node?","alter-macroexpand-node?",1110227226,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null),new cljs.core.Symbol(null,"alter-macroexpand-node?","alter-macroexpand-node?",1110227226,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.clojure",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null),new cljs.core.Symbol(null,"alter-macroexpand-node?","alter-macroexpand-node?",1110227226,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.clojure.pathcache170084 = info170085;

return info170085;
})():info__17750__auto__);
var precompiled170086 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170086.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,cljs.core.symbol_QMARK_,com.rpl.specter.STAY,ob.clojure.alter_macroexpand_node_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.ALL_WITH_META,p)], null),com.rpl.specter.stay_then_continue,com.rpl.specter.ALL_WITH_META,p,com.rpl.specter.STAY], null));
} else {
return precompiled170086;
}
})());

return p;
})();
ob.clojure.MACROEXPAND = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.clojure.pathcache170089;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170090 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__170087_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__170087_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__170087_SHARP_)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__170088_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__170088_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__170088_SHARP_)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.clojure",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170087#","p1__170087#",-1617057252,null)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__170088#","p1__170088#",563082785,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.clojure.pathcache170089 = info170090;

return info170090;
})():info__17750__auto__);
var precompiled170091 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170091.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,(function (p1__170087_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__170087_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__170087_SHARP_)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.if_path.call(null,(function (p1__170088_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__170088_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__170088_SHARP_)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.STAY))], null),com.rpl.specter.stay_then_continue,com.rpl.specter.if_path,(function (p1__170088_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__170088_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__170088_SHARP_)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p,com.rpl.specter.STAY,com.rpl.specter.STAY], null));
} else {
return precompiled170091;
}
})());

return p;
})();
ob.clojure.redistribute_ids = (function ob$clojure$redistribute_ids(node){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.clojure.pathcache170092;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170093 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.clojure.RESTORE_MACRO,new cljs.core.Var(function(){return ob.clojure.RESTORE_MACRO;},new cljs.core.Symbol("ob.clojure","RESTORE-MACRO","ob.clojure/RESTORE-MACRO",1729711731,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"RESTORE-MACRO","RESTORE-MACRO",-348890230,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",19,1,505,505,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.clojure.RESTORE_MACRO)?ob.clojure.RESTORE_MACRO.cljs$lang$test:null)])),new cljs.core.Symbol(null,"RESTORE-MACRO","RESTORE-MACRO",-348890230,null))], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RESTORE-MACRO","RESTORE-MACRO",-348890230,null)], null));
ob.clojure.pathcache170092 = info170093;

return info170093;
})():info__17750__auto__);
var precompiled170094 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170094.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.clojure.RESTORE_MACRO], null));
} else {
return precompiled170094;
}
})(),(function (node__$1){
if((node__$1 instanceof cljs.core.Symbol)){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,cljs.core.name.call(null,node__$1)),cljs.core.meta.call(null,node__$1));
} else {
return node__$1;
}
}),node);
});
ob.clojure.macroexpand_all_STAR_ = (function ob$clojure$macroexpand_all_STAR_(form){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.clojure.pathcache170095;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170096 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.clojure.MACROEXPAND,new cljs.core.Var(function(){return ob.clojure.MACROEXPAND;},new cljs.core.Symbol("ob.clojure","MACROEXPAND","ob.clojure/MACROEXPAND",1768974602,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"MACROEXPAND","MACROEXPAND",-581599437,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",17,1,516,516,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.clojure.MACROEXPAND)?ob.clojure.MACROEXPAND.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MACROEXPAND","MACROEXPAND",-581599437,null))], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MACROEXPAND","MACROEXPAND",-581599437,null)], null));
ob.clojure.pathcache170095 = info170096;

return info170096;
})():info__17750__auto__);
var precompiled170097 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170097.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.clojure.MACROEXPAND], null));
} else {
return precompiled170097;
}
})(),(function (form__$1){
if(cljs.core.coll_QMARK_.call(null,form__$1)){
return ob.clojure.macroexpand_STAR_.call(null,form__$1,cljs.core.PersistentArrayMap.EMPTY);
} else {
return form__$1;
}
}),form);
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
ob.clojure.and_STAR_ = (function ob$clojure$and_STAR_(var_args){
var G__170102 = arguments.length;
switch (G__170102) {
case 0:
return ob.clojure.and_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ob.clojure.and_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___170104 = arguments.length;
var i__4865__auto___170105 = (0);
while(true){
if((i__4865__auto___170105 < len__4864__auto___170104)){
args_arr__4885__auto__.push((arguments[i__4865__auto___170105]));

var G__170106 = (i__4865__auto___170105 + (1));
i__4865__auto___170105 = G__170106;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return ob.clojure.and_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(ob.clojure.and_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(ob.clojure.and_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(ob.clojure.and_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,next){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"and__170098__auto__","and__170098__auto__",-128880158,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__170098__auto__","and__170098__auto__",-128880158,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__170098__auto__","and__170098__auto__",-128880158,null),null,(1),null))))),null,(1),null)))));
}));

/** @this {Function} */
(ob.clojure.and_STAR_.cljs$lang$applyTo = (function (seq170100){
var G__170101 = cljs.core.first.call(null,seq170100);
var seq170100__$1 = cljs.core.next.call(null,seq170100);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__170101,seq170100__$1);
}));

(ob.clojure.and_STAR_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
ob.clojure.or_STAR_ = (function ob$clojure$or_STAR_(var_args){
var G__170111 = arguments.length;
switch (G__170111) {
case 0:
return ob.clojure.or_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ob.clojure.or_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___170113 = arguments.length;
var i__4865__auto___170114 = (0);
while(true){
if((i__4865__auto___170114 < len__4864__auto___170113)){
args_arr__4885__auto__.push((arguments[i__4865__auto___170114]));

var G__170115 = (i__4865__auto___170114 + (1));
i__4865__auto___170114 = G__170115;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return ob.clojure.or_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(ob.clojure.or_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(ob.clojure.or_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(ob.clojure.or_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,next){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"or__170107__auto__","or__170107__auto__",1143409404,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__170107__auto__","or__170107__auto__",1143409404,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__170107__auto__","or__170107__auto__",1143409404,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),next))),null,(1),null))))),null,(1),null)))));
}));

/** @this {Function} */
(ob.clojure.or_STAR_.cljs$lang$applyTo = (function (seq170109){
var G__170110 = cljs.core.first.call(null,seq170109);
var seq170109__$1 = cljs.core.next.call(null,seq170109);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__170110,seq170109__$1);
}));

(ob.clojure.or_STAR_.cljs$lang$maxFixedArity = (1));

/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
ob.clojure.__GT__STAR_ = (function ob$clojure$__GT__STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___170118 = arguments.length;
var i__4865__auto___170119 = (0);
while(true){
if((i__4865__auto___170119 < len__4864__auto___170118)){
args__4870__auto__.push((arguments[i__4865__auto___170119]));

var G__170120 = (i__4865__auto___170119 + (1));
i__4865__auto___170119 = G__170120;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ob.clojure.__GT__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ob.clojure.__GT__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null)),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__170121 = threaded;
var G__170122 = cljs.core.next.call(null,forms__$1);
x__$1 = G__170121;
forms__$1 = G__170122;
continue;
} else {
return x__$1;
}
break;
}
}));

(ob.clojure.__GT__STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.clojure.__GT__STAR_.cljs$lang$applyTo = (function (seq170116){
var G__170117 = cljs.core.first.call(null,seq170116);
var seq170116__$1 = cljs.core.next.call(null,seq170116);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__170117,seq170116__$1);
}));

/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
ob.clojure.__GT__GT__STAR_ = (function ob$clojure$__GT__GT__STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___170125 = arguments.length;
var i__4865__auto___170126 = (0);
while(true){
if((i__4865__auto___170126 < len__4864__auto___170125)){
args__4870__auto__.push((arguments[i__4865__auto___170126]));

var G__170127 = (i__4865__auto___170126 + (1));
i__4865__auto___170126 = G__170127;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ob.clojure.__GT__GT__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ob.clojure.__GT__GT__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),cljs.core.next.call(null,form),(new cljs.core.List(null,x__$1,null,(1),null))))),cljs.core.meta.call(null,form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__170128 = threaded;
var G__170129 = cljs.core.next.call(null,forms__$1);
x__$1 = G__170128;
forms__$1 = G__170129;
continue;
} else {
return x__$1;
}
break;
}
}));

(ob.clojure.__GT__GT__STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.clojure.__GT__GT__STAR_.cljs$lang$applyTo = (function (seq170123){
var G__170124 = cljs.core.first.call(null,seq170123);
var seq170123__$1 = cljs.core.next.call(null,seq170123);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__170124,seq170123__$1);
}));

/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
ob.clojure.lazy_seq_STAR_ = (function ob$clojure$lazy_seq_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___170131 = arguments.length;
var i__4865__auto___170132 = (0);
while(true){
if((i__4865__auto___170132 < len__4864__auto___170131)){
args__4870__auto__.push((arguments[i__4865__auto___170132]));

var G__170133 = (i__4865__auto___170132 + (1));
i__4865__auto___170132 = G__170133;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.clojure.lazy_seq_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.clojure.lazy_seq_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(ob.clojure.lazy_seq_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.clojure.lazy_seq_STAR_.cljs$lang$applyTo = (function (seq170130){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq170130));
}));

/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
ob.clojure.cond_STAR_ = (function ob$clojure$cond_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___170135 = arguments.length;
var i__4865__auto___170136 = (0);
while(true){
if((i__4865__auto___170136 < len__4864__auto___170135)){
args__4870__auto__.push((arguments[i__4865__auto___170136]));

var G__170137 = (i__4865__auto___170136 + (1));
i__4865__auto___170136 = G__170137;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.clojure.cond_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.clojure.cond_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (clauses){
if(cljs.core.truth_(clauses)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,cljs.core.first.call(null,clauses),(new cljs.core.List(null,((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw "cond requires an even number of forms"})()),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return null;
}
}));

(ob.clojure.cond_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.clojure.cond_STAR_.cljs$lang$applyTo = (function (seq170134){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq170134));
}));

/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
ob.clojure.when_STAR_ = (function ob$clojure$when_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___170140 = arguments.length;
var i__4865__auto___170141 = (0);
while(true){
if((i__4865__auto___170141 < len__4864__auto___170140)){
args__4870__auto__.push((arguments[i__4865__auto___170141]));

var G__170142 = (i__4865__auto___170141 + (1));
i__4865__auto___170141 = G__170142;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ob.clojure.when_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ob.clojure.when_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
}));

(ob.clojure.when_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.clojure.when_STAR_.cljs$lang$applyTo = (function (seq170138){
var G__170139 = cljs.core.first.call(null,seq170138);
var seq170138__$1 = cljs.core.next.call(null,seq170138);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__170139,seq170138__$1);
}));

/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
ob.clojure.when_not_STAR_ = (function ob$clojure$when_not_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___170145 = arguments.length;
var i__4865__auto___170146 = (0);
while(true){
if((i__4865__auto___170146 < len__4864__auto___170145)){
args__4870__auto__.push((arguments[i__4865__auto___170146]));

var G__170147 = (i__4865__auto___170146 + (1));
i__4865__auto___170146 = G__170147;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ob.clojure.when_not_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ob.clojure.when_not_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,null,(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(ob.clojure.when_not_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.clojure.when_not_STAR_.cljs$lang$applyTo = (function (seq170143){
var G__170144 = cljs.core.first.call(null,seq170143);
var seq170143__$1 = cljs.core.next.call(null,seq170143);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__170144,seq170143__$1);
}));

ob.clojure.op__GT_macro_fn = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Var(function(){return ob.clojure.cond_STAR_;},new cljs.core.Symbol("ob.clojure","cond*","ob.clojure/cond*",-1880327157,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.0",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"cond*","cond*",466569666,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,611,611,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),"Takes a set of test/expr pairs. It evaluates each test one at a\n  time.  If a test returns logical true, cond evaluates and returns\n  the value of the corresponding expr and doesn't evaluate any of the\n  other tests or exprs. (cond) returns nil.",(cljs.core.truth_(ob.clojure.cond_STAR_)?ob.clojure.cond_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Var(function(){return ob.clojure.and_STAR_;},new cljs.core.Symbol("ob.clojure","and*","ob.clojure/and*",-399272975,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"and*","and*",1959829766,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,548,548,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null)),"Evaluates exprs one at a time, from left to right. If a form\n  returns logical false (nil or false), and returns that value and\n  doesn't evaluate any of the other expressions, otherwise it returns\n  the value of the last expr. (and) returns true.",(cljs.core.truth_(ob.clojure.and_STAR_)?ob.clojure.and_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Var(function(){return ob.clojure.or_STAR_;},new cljs.core.Symbol("ob.clojure","or*","ob.clojure/or*",-1296814494,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"or*","or*",1183398965,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",10,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,559,559,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null)),"Evaluates exprs one at a time, from left to right. If a form\n  returns a logical true value, or returns that value and doesn't\n  evaluate any of the other expressions, otherwise it returns the\n  value of the last expression. (or) returns nil.",(cljs.core.truth_(ob.clojure.or_STAR_)?ob.clojure.or_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Var(function(){return ob.clojure.__GT__STAR_;},new cljs.core.Symbol("ob.clojure","->*","ob.clojure/->*",492902135,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.0",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"->*","->*",-1991375860,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",10,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,570,570,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Threads the expr through the forms. Inserts x as the\n  second item in the first form, making a list of it if it is not a\n  list already. If there are more forms, inserts the first form as the\n  second item in second form, etc.",(cljs.core.truth_(ob.clojure.__GT__STAR_)?ob.clojure.__GT__STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Var(function(){return ob.clojure.__GT__GT__STAR_;},new cljs.core.Symbol("ob.clojure","->>*","ob.clojure/->>*",200132783,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.1",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"->>*","->>*",-1089275162,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,587,587,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Threads the expr through the forms. Inserts x as the\n  last item in the first form, making a list of it if it is not a\n  list already. If there are more forms, inserts the first form as the\n  last item in second form, etc.",(cljs.core.truth_(ob.clojure.__GT__GT__STAR_)?ob.clojure.__GT__GT__STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Var(function(){return ob.clojure.when_STAR_;},new cljs.core.Symbol("ob.clojure","when*","ob.clojure/when*",780881527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.0",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"when*","when*",-764913268,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,625,625,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Evaluates test. If logical true, evaluates body in an implicit do.",(cljs.core.truth_(ob.clojure.when_STAR_)?ob.clojure.when_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Var(function(){return ob.clojure.when_not_STAR_;},new cljs.core.Symbol("ob.clojure","when-not*","ob.clojure/when-not*",-1756637450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.0",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"when-not*","when-not*",52962317,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",16,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,632,632,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Evaluates test. If logical false, evaluates body in an implicit do.",(cljs.core.truth_(ob.clojure.when_not_STAR_)?ob.clojure.when_not_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),new cljs.core.Var(function(){return ob.clojure.lazy_seq_STAR_;},new cljs.core.Symbol("ob.clojure","lazy-seq*","ob.clojure/lazy-seq*",-1868887669,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"lazy-seq*","lazy-seq*",477626290,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",16,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"body","body",-408674142,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,603,603,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Takes a body of expressions that returns an ISeq or nil, and yields\n  a ISeqable object that will invoke the body only the first time seq\n  is called, and will cache the result and return it on all subsequent\n  seq calls.",(cljs.core.truth_(ob.clojure.lazy_seq_STAR_)?ob.clojure.lazy_seq_STAR_.cljs$lang$test:null)]))], null);
ob.clojure.var__GT_sym = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name,cljs.core.symbol);
ob.clojure.gen_globals = (function ob$clojure$gen_globals(var_args){
var args__4870__auto__ = [];
var len__4864__auto___170149 = arguments.length;
var i__4865__auto___170150 = (0);
while(true){
if((i__4865__auto___170150 < len__4864__auto___170149)){
args__4870__auto__.push((arguments[i__4865__auto___170150]));

var G__170151 = (i__4865__auto___170150 + (1));
i__4865__auto___170150 = G__170151;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.clojure.gen_globals.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.clojure.gen_globals.cljs$core$IFn$_invoke$arity$variadic = (function (vars){
var to_pair = (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.clojure.var__GT_sym.call(null,v),v], null);
});
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,to_pair,vars));
}));

(ob.clojure.gen_globals.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.clojure.gen_globals.cljs$lang$applyTo = (function (seq170148){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq170148));
}));

ob.clojure.globals = ob.clojure.gen_globals.call(null,new cljs.core.Var(function(){return cljs.core._PLUS_;},new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"+","+",-740910886,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),(1),(2631),(2631),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns the sum of nums. (+) returns 0.",(cljs.core.truth_(cljs.core._PLUS_)?cljs.core._PLUS_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._;},new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"-","-",-471816912,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2639),(2639),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"If no ys are supplied, returns the negation of x, else subtracts\n  the ys from x and returns the result.",(cljs.core.truth_(cljs.core._)?cljs.core._.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_;},new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*","*",345799209,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),(1),(2646),(2646),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns the product of nums. (*) returns 1.",(cljs.core.truth_(cljs.core._STAR_)?cljs.core._STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._SLASH_;},new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),"cljs/core.cljs",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2655),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"If no denominators are supplied, returns 1/numerator,\n  else returns numerator divided by all of the denominators.",(cljs.core.truth_(cljs.core._SLASH_)?cljs.core._SLASH_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._EQ_;},new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),"cljs/core.cljs",(17),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(1288),(1288),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Equality. Returns true if x equals y, false if not. Compares\n  numbers and collections in a type-independent manner.  Clojure's immutable data\n  structures define -equiv (and thus =) as a value, not an identity,\n  comparison.",((cljs.core._EQ_)?cljs.core._EQ_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._GT_;},new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,">",">",1085014381,null),"cljs/core.cljs",(17),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2686),(2686),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns non-nil if nums are in monotonically decreasing order,\n  otherwise false.",((cljs.core._GT_)?cljs.core._GT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._GT__EQ_;},new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),"cljs/core.cljs",(18),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2698),(2698),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns non-nil if nums are in monotonically non-increasing order,\n  otherwise false.",((cljs.core._GT__EQ_)?cljs.core._GT__EQ_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._LT_;},new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"<","<",993667236,null),"cljs/core.cljs",(17),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2662),(2662),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns non-nil if nums are in monotonically increasing order,\n  otherwise false.",((cljs.core._LT_)?cljs.core._LT_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._LT__EQ_;},new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),"cljs/core.cljs",(18),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2674),(2674),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns non-nil if nums are in monotonically non-decreasing order,\n  otherwise false.",((cljs.core._LT__EQ_)?cljs.core._LT__EQ_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core.even_QMARK_;},new cljs.core.Symbol("cljs.core","even?","cljs.core/even?",-875678303,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),"cljs/core.cljs",(12),(1),(4284),(4284),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null)),"Returns true if n is even, throws an exception if n is not an integer",(cljs.core.truth_(cljs.core.even_QMARK_)?cljs.core.even_QMARK_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core.odd_QMARK_;},new cljs.core.Symbol("cljs.core","odd?","cljs.core/odd?",-1051832030,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),"cljs/core.cljs",(11),(1),(4290),(4290),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null)),"Returns true if n is odd, throws an exception if n is not an integer",(cljs.core.truth_(cljs.core.odd_QMARK_)?cljs.core.odd_QMARK_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core.zero_QMARK_;},new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),"cljs/core.cljs",(21),(1),(2968),(2968),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if num is zero, else false",((cljs.core.zero_QMARK_)?cljs.core.zero_QMARK_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core.apply;},new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"apply","apply",-1334050276,null),"cljs/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(5),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(5),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null,null)], null),(1),(3956),(3956),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"Applies fn f to the argument list formed by prepending intervening arguments to args.",(cljs.core.truth_(cljs.core.apply)?cljs.core.apply.cljs$lang$test:null)])));
ob.clojure.env = ob.clojure.globals;
ob.clojure.RE_INDEX = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17750__auto__ = ob.clojure.pathcache170152;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170153 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.clojure",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.clojure.pathcache170152 = info170153;

return info170153;
})():info__17750__auto__);
var precompiled170154 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170154.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,com.rpl.specter.ALL_WITH_META,p)], null),com.rpl.specter.continue_then_stay,com.rpl.specter.ALL_WITH_META,p,com.rpl.specter.STAY], null));
} else {
return precompiled170154;
}
})());

return p;
})();
ob.clojure.reindex_node = (function ob$clojure$reindex_node(id){
return (function (result){
if((!((((!((result == null))))?(((((result.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === result.cljs$core$IMeta$))))?true:(((!result.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,result):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,result))))){
return (new ob.utils.Constant(result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-const-"].join(''))], null)));
} else {
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.clojure.pathcache170157;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170158 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.META,new cljs.core.Var(function(){return com.rpl.specter.META;},new cljs.core.Symbol("com.rpl.specter","META","com.rpl.specter/META",859143984,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"META","META",-1501392487,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1292),(1294),cljs.core.List.EMPTY,"Navigates to the metadata of the structure, or nil if\n  the structure has no metadata or may not contain metadata.",(cljs.core.truth_(com.rpl.specter.META)?com.rpl.specter.META.cljs$lang$test:null)])),new cljs.core.Symbol("s","META","s/META",-1501392874,null))], null)], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","META","s/META",-1501392874,null)], null),new cljs.core.Symbol("s","META","s/META",-1501392874,null)], null));
ob.clojure.pathcache170157 = info170158;

return info170158;
})():info__17750__auto__);
var precompiled170159 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170159.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.META], null),com.rpl.specter.META], null));
} else {
return precompiled170159;
}
})(),(function (m){
var r_id = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5718__auto__)){
var r_id = temp__5718__auto__;
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_id)].join(''));
} else {
return cljs.core.gensym.call(null,"");
}
})();
var c_ids = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"child-ids","child-ids",-604525861).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
return cljs.core.mapv.call(null,(function (p1__170155_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__170155_SHARP_)].join(''));
}),c);
} else {
return null;
}
})();
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),r_id,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861),c_ids);
}),result);
}
});
});
ob.clojure.reindex_QMARK_ = (function ob$clojure$reindex_QMARK_(p__170160){
var map__170161 = p__170160;
var map__170161__$1 = cljs.core.__destructure_map.call(null,map__170161);
var op = cljs.core.get.call(null,map__170161__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null], null), null),op);
});
ob.clojure._reindex = (function ob$clojure$_reindex(form_id,p__170162){
var map__170163 = p__170162;
var map__170163__$1 = cljs.core.__destructure_map.call(null,map__170163);
var state = map__170163__$1;
var form = cljs.core.get.call(null,map__170163__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var result = cljs.core.get.call(null,map__170163__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if((!(ob.clojure.reindex_QMARK_.call(null,state)))){
return state;
} else {
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17750__auto__ = ob.clojure.pathcache170164;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170165 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return","return",-1891502105),com.rpl.specter.impl.__GT_VarUse.call(null,ob.clojure.RE_INDEX,new cljs.core.Var(function(){return ob.clojure.RE_INDEX;},new cljs.core.Symbol("ob.clojure","RE-INDEX","ob.clojure/RE-INDEX",-936016611,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"RE-INDEX","RE-INDEX",1548841956,null),"/Users/kyleeschen/Desktop/Ouroboros/ob/src/ob/clojure.cljs",14,1,698,698,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.clojure.RE_INDEX)?ob.clojure.RE_INDEX.cljs$lang$test:null)])),new cljs.core.Symbol(null,"RE-INDEX","RE-INDEX",1548841956,null))], null)], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Symbol(null,"RE-INDEX","RE-INDEX",1548841956,null)], null),new cljs.core.Symbol(null,"RE-INDEX","RE-INDEX",1548841956,null)], null));
ob.clojure.pathcache170164 = info170165;

return info170165;
})():info__17750__auto__);
var precompiled170166 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170166.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return","return",-1891502105),ob.clojure.RE_INDEX], null),ob.clojure.RE_INDEX], null));
} else {
return precompiled170166;
}
})(),ob.clojure.reindex_node.call(null,form_id),state);
}
});
ob.clojure.reindex = (function ob$clojure$reindex(state){
var map__170167 = cljs.core.meta.call(null,new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(state));
var map__170167__$1 = cljs.core.__destructure_map.call(null,map__170167);
var return_id = cljs.core.get.call(null,map__170167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__170168 = cljs.core.meta.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(state));
var map__170168__$1 = cljs.core.__destructure_map.call(null,map__170168);
var form_id = cljs.core.get.call(null,map__170168__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state__$1 = ob.clojure._reindex.call(null,form_id,state);
var return_id_STAR_ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(state__$1)));
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"old","old",-1825222690),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"id-old","id-old",1607678379),form_id,new cljs.core.Keyword(null,"id-new","id-new",1978088391),return_id,new cljs.core.Keyword(null,"id-new*","id-new*",-999568836),return_id_STAR_);
});
if((typeof ob !== 'undefined') && (typeof ob.clojure !== 'undefined') && (typeof ob.clojure.frame__GT_animation !== 'undefined')){
} else {
ob.clojure.frame__GT_animation = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.clojure","frame->animation"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__170169){
var map__170170 = p__170169;
var map__170170__$1 = cljs.core.__destructure_map.call(null,map__170170);
var frame = map__170170__$1;
var id_new = cljs.core.get.call(null,map__170170__$1,new cljs.core.Keyword(null,"id-new","id-new",1978088391));
var id_new_STAR_ = cljs.core.get.call(null,map__170170__$1,new cljs.core.Keyword(null,"id-new*","id-new*",-999568836));
if(cljs.core._EQ_.call(null,id_new,id_new_STAR_)){
return new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811);
} else {
return null;
}
}));
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (_){
return null;
}));
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"collection","collection",-683361892),(function (_){
return null;
}));
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (p__170171){
var map__170172 = p__170171;
var map__170172__$1 = cljs.core.__destructure_map.call(null,map__170172);
var frame = map__170172__$1;
var return$ = cljs.core.get.call(null,map__170172__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
if(cljs.core.var_QMARK_.call(null,return$)){
return null;
} else {
return new cljs.core.Keyword(null,"symbol-resolve","symbol-resolve",128792823);
}
}));
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__170173){
var map__170174 = p__170173;
var map__170174__$1 = cljs.core.__destructure_map.call(null,map__170174);
var frame = map__170174__$1;
var id_new = cljs.core.get.call(null,map__170174__$1,new cljs.core.Keyword(null,"id-new","id-new",1978088391));
var id_new_STAR_ = cljs.core.get.call(null,map__170174__$1,new cljs.core.Keyword(null,"id-new*","id-new*",-999568836));
if(cljs.core._EQ_.call(null,id_new,id_new_STAR_)){
return new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811);
} else {
return new cljs.core.Keyword(null,"symbol-resolve","symbol-resolve",128792823);
}
}));
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"lambda-exit","lambda-exit",-1562640999),(function (_){
return null;
}));
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"if","if",-458814265),(function (_){
return new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811);
}));
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"lambda","lambda",-1483427225),(function (_){
return new cljs.core.Keyword(null,"jump-replace","jump-replace",1000308811);
}));
cljs.core._add_method.call(null,ob.clojure.frame__GT_animation,new cljs.core.Keyword(null,"def","def",-1043430536),(function (_){
return null;
}));
ob.clojure.attach_animation_data = (function ob$clojure$attach_animation_data(frame){
var temp__5718__auto__ = ob.clojure.frame__GT_animation.call(null,frame);
if(cljs.core.truth_(temp__5718__auto__)){
var a = temp__5718__auto__;
return cljs.core.assoc.call(null,frame,new cljs.core.Keyword("op","frame","op/frame",-1711083195),a);
} else {
return frame;
}
});
ob.clojure.form = ob.utils.walk_ids.call(null,cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),new cljs.core.Symbol(null,"n","n",-2092305744,null)),(1),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(1))))))),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(4))));
ob.clojure.form__GT_animation_stream = (function ob$clojure$form__GT_animation_stream(form){
var format = (function (frame){
return cljs.core.dissoc.call(null,frame,new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"env","env",-1815813235));
});
var f = cljs.core.comp.call(null,ob.clojure.attach_animation_data,format);
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.filter.call(null,new cljs.core.Keyword("op","frame","op/frame",-1711083195),cljs.core.map.call(null,f,ob.clojure.gen_evaluation_stream.call(null,form,ob.clojure.env,(function (frame,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),frame], null);
})))));
});
ob.clojure.t = ob.analyzer.analyze.call(null,ob.utils.walk_ids.call(null,cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2),(3),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(4),(5),(5)))),ob.clojure.env);
ob.clojure.branch_QMARK_ = (function ob$clojure$branch_QMARK_(node){
var or__4253__auto__ = cljs.core.vector_QMARK_.call(null,node);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
}
});
ob.clojure.children = (function ob$clojure$children(node){
if(cljs.core.vector_QMARK_.call(null,node)){
return node;
} else {
var ks = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
return cljs.core.conj.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17750__auto__ = ob.clojure.pathcache170175;
var info__17750__auto____$1 = (((info__17750__auto__ == null))?(function (){var info170176 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.clojure",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.clojure.pathcache170175 = info170176;

return info170176;
})():info__17750__auto__);
var precompiled170177 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17750__auto____$1);
var dynamic_QMARK___17751__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17750__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17751__auto__)){
return precompiled170177.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled170177;
}
})(),node),new cljs.core.Keyword("ob.clojure","k","ob.clojure/k",457005080));
}
});
ob.clojure.make_node = (function ob$clojure$make_node(node,children){
if(cljs.core.vector_QMARK_.call(null,node)){
return cljs.core.into.call(null,cljs.core.empty.call(null,node),children);
} else {
var ks = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
return cljs.core.merge.call(null,node,cljs.core.zipmap.call(null,ks,cljs.core.butlast.call(null,children)));
}
});
ob.clojure.eval_zipper = (function ob$clojure$eval_zipper(node){
return clojure.zip.zipper.call(null,ob.clojure.branch_QMARK_,ob.clojure.children,ob.clojure.make_node,node);
});
ob.clojure.eval_traverse = (function ob$clojure$eval_traverse(node){
ob.clojure.counter = cljs.core.atom.call(null,(0));

var loc = ob.clojure.eval_zipper.call(null,node);
var env = ob.clojure.env;
while(true){
cljs.core.swap_BANG_.call(null,ob.clojure.counter,cljs.core.inc);

if((cljs.core.deref.call(null,ob.clojure.counter) < (100))){
if(clojure.zip.end_QMARK_.call(null,loc)){
return null;
} else {
var node__$1 = clojure.zip.node.call(null,loc);
var next_fn = ((cljs.core._EQ_.call(null,node__$1,new cljs.core.Keyword("ob.clojure","k","ob.clojure/k",457005080)))?((function (loc,env,node__$1){
return (function (loc__$1){
cljs.pprint.pprint.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,clojure.zip.up.call(null,loc__$1))));

return clojure.zip.next.call(null,loc__$1);
});})(loc,env,node__$1))
:clojure.zip.next
);
var G__170178 = next_fn.call(null,loc);
var G__170179 = env;
loc = G__170178;
env = G__170179;
continue;
}
} else {
return null;
}
break;
}
});

//# sourceMappingURL=clojure.js.map
