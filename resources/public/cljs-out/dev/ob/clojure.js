// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.clojure');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('cljs.pprint');
goog.require('cljs.repl');
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
var map__57759 = state;
var map__57759__$1 = cljs.core.__destructure_map.call(null,map__57759);
var return$ = cljs.core.get.call(null,map__57759__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var env__$1 = cljs.core.get.call(null,map__57759__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var k__$1 = cljs.core.get.call(null,map__57759__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.map_QMARK_.call(null,state)){
cljs.pprint.pprint.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"k","k",-2146297393)));
} else {
}

if(cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"return","return",-1891502105))){
var G__57760 = k__$1.call(null,return$,env__$1);
var G__57761 = cljs.core.conj.call(null,states,state);
state = G__57760;
states = G__57761;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
}catch (e57757){if((e57757 instanceof Error)){
var e = e57757;
return e;
} else {
throw e57757;

}
}});
ob.clojure.gen_evaluation_stream = (function ob$clojure$gen_evaluation_stream(form,env,k){
var state__GT_stream = (function ob$clojure$gen_evaluation_stream_$_state__GT_stream(state){
return cljs.core.cons.call(null,state,(new cljs.core.LazySeq(null,(function (){
var map__57763 = state;
var map__57763__$1 = cljs.core.__destructure_map.call(null,map__57763);
var return$ = cljs.core.get.call(null,map__57763__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var env__$1 = cljs.core.get.call(null,map__57763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var k__$1 = cljs.core.get.call(null,map__57763__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"return","return",-1891502105))){
return ob$clojure$gen_evaluation_stream_$_state__GT_stream.call(null,k__$1.call(null,return$,env__$1));
} else {
return null;
}
}),null,null)));
});
return state__GT_stream.call(null,ob.clojure.eval_STAR_.call(null,form,env,k));
});
ob.clojure.thread_ks = (function ob$clojure$thread_ks(combining_fn){
return (function() { 
var G__57766__delegate = function (final_k,forms,args){
var f = cljs.core.reduce.call(null,(function (p1__57765_SHARP_,p2__57764_SHARP_){
return p2__57764_SHARP_.call(null,p1__57765_SHARP_);
}),final_k,cljs.core.map.call(null,combining_fn,cljs.core.reverse.call(null,forms)));
return cljs.core.apply.call(null,f,args);
};
var G__57766 = function (final_k,forms,var_args){
var args = null;
if (arguments.length > 2) {
var G__57767__i = 0, G__57767__a = new Array(arguments.length -  2);
while (G__57767__i < G__57767__a.length) {G__57767__a[G__57767__i] = arguments[G__57767__i + 2]; ++G__57767__i;}
  args = new cljs.core.IndexedSeq(G__57767__a,0,null);
} 
return G__57766__delegate.call(this,final_k,forms,args);};
G__57766.cljs$lang$maxFixedArity = 2;
G__57766.cljs$lang$applyTo = (function (arglist__57768){
var final_k = cljs.core.first(arglist__57768);
arglist__57768 = cljs.core.next(arglist__57768);
var forms = cljs.core.first(arglist__57768);
var args = cljs.core.rest(arglist__57768);
return G__57766__delegate(final_k,forms,args);
});
G__57766.cljs$core$IFn$_invoke$arity$variadic = G__57766__delegate;
return G__57766;
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
ob.clojure.run_bindings = ob.clojure.thread_ks.call(null,(function (p__57769){
var vec__57770 = p__57769;
var sym = cljs.core.nth.call(null,vec__57770,(0),null);
var val = cljs.core.nth.call(null,vec__57770,(1),null);
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
var vec__57773 = f;
var _ = cljs.core.nth.call(null,vec__57773,(0),null);
var params = cljs.core.nth.call(null,vec__57773,(1),null);
var body = cljs.core.nth.call(null,vec__57773,(2),null);
var env__$1 = cljs.core.merge.call(null,env,cljs.core.zipmap.call(null,params,args));
var env__$2 = ob.clojure.set_recur_point.call(null,env__$1,params,body);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"lambda","lambda",-1483427225),new cljs.core.Keyword(null,"env","env",-1815813235),env__$2,new cljs.core.Keyword(null,"return","return",-1891502105),body,new cljs.core.Keyword(null,"k","k",-2146297393),(function (body__$1,env__$3){
return ob.clojure.eval_STAR_.call(null,body__$1,env__$3,(function (result,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"lambda-exit","lambda-exit",-1562640999),new cljs.core.Keyword(null,"form","form",-1624062471),body__$1,new cljs.core.Keyword(null,"env","env",-1815813235),env_STAR_,new cljs.core.Keyword(null,"return","return",-1891502105),result,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$,env__$4){
return k.call(null,return$,env__$4);
})], null);
}));
})], null);
});
ob.clojure.eval_invoke = (function ob$clojure$eval_invoke(f,args,env,k){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.apply.call(null,f,args),new cljs.core.Keyword(null,"k","k",-2146297393),k], null);
});
ob.clojure.cc_QMARK_ = (function ob$clojure$cc_QMARK_(op){
return new cljs.core.Keyword(null,"cc?","cc?",228261409).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,op));
});
ob.clojure.eval_cc = (function ob$clojure$eval_cc(f,args,env,k){
return cljs.core.apply.call(null,f,args);
});
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"default","default",-1987822328),(function (form,env,k){
var k__$1 = (function (env__$1,p__57776){
var vec__57777 = p__57776;
var seq__57778 = cljs.core.seq.call(null,vec__57777);
var first__57779 = cljs.core.first.call(null,seq__57778);
var seq__57778__$1 = cljs.core.next.call(null,seq__57778);
var op = first__57779;
var args = seq__57778__$1;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null),((ob.clojure.lambda_QMARK_.call(null,op))?ob.clojure.eval_lambda.call(null,op,args,env__$1,k):(cljs.core.truth_(ob.clojure.cc_QMARK_.call(null,op))?ob.clojure.eval_cc.call(null,op,args,env__$1,k):ob.clojure.eval_invoke.call(null,op,args,env__$1,k)
)));
});
return ob.clojure.run_args.call(null,k__$1,form,env,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (form,env,k){
return k.call(null,form,env);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__57780,env,k){
var vec__57781 = p__57780;
var _ = cljs.core.nth.call(null,vec__57781,(0),null);
var pred = cljs.core.nth.call(null,vec__57781,(1),null);
var then = cljs.core.nth.call(null,vec__57781,(2),null);
var else$ = cljs.core.nth.call(null,vec__57781,(3),null);
var form = vec__57781;
return ob.clojure.eval_STAR_.call(null,pred,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"return","return",-1891502105),(cljs.core.truth_(return$)?then:else$),new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return ob.clojure.eval_STAR_.call(null,return$__$1,env__$2,k);
})], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"do","do",46310725),(function (p__57784,env,k){
var vec__57785 = p__57784;
var seq__57786 = cljs.core.seq.call(null,vec__57785);
var first__57787 = cljs.core.first.call(null,seq__57786);
var seq__57786__$1 = cljs.core.next.call(null,seq__57786);
var _ = first__57787;
var args = seq__57786__$1;
var form = vec__57785;
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
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__57788,env,k){
var vec__57789 = p__57788;
var seq__57790 = cljs.core.seq.call(null,vec__57789);
var first__57791 = cljs.core.first.call(null,seq__57790);
var seq__57790__$1 = cljs.core.next.call(null,seq__57790);
var _ = first__57791;
var args = seq__57790__$1;
var form = vec__57789;
var map__57792 = cljs.core.get.call(null,env,new cljs.core.Keyword(null,"recur-point","recur-point",-355035890));
var map__57792__$1 = cljs.core.__destructure_map.call(null,map__57792);
var params = cljs.core.get.call(null,map__57792__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__57792__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var k__$1 = (function (env__$1,args__$1){
return cljs.core.merge.call(null,ob.clojure.eval_lambda.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params,body], null),args__$1,env__$1,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),body], null));
});
return ob.clojure.run_args.call(null,k__$1,args,env,cljs.core.PersistentVector.EMPTY);
}));
ob.clojure.letfn_fn = new cljs.core.Symbol(null,"fn","fn",465265323,null);
ob.clojure.letfn_fn__GT_binding_pairs = (function ob$clojure$letfn_fn__GT_binding_pairs(p__57793){
var vec__57794 = p__57793;
var seq__57795 = cljs.core.seq.call(null,vec__57794);
var first__57796 = cljs.core.first.call(null,seq__57795);
var seq__57795__$1 = cljs.core.next.call(null,seq__57795);
var fname = first__57796;
var args = seq__57795__$1;
var form = vec__57794;
var fn_body = cljs.core.cons.call(null,ob.clojure.letfn_fn,args);
var fn_body__$1 = cljs.core.with_meta.call(null,fn_body,cljs.core.meta.call(null,form));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,fn_body__$1], null);
});
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__57797,env,k){
var vec__57798 = p__57797;
var _ = cljs.core.nth.call(null,vec__57798,(0),null);
var bindings = cljs.core.nth.call(null,vec__57798,(1),null);
var body = cljs.core.nth.call(null,vec__57798,(2),null);
var form = vec__57798;
var env_STAR_ = env;
var pairs = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.clojure.pathcache57801;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info57802 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null))], null)], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)], null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)], null));
ob.clojure.pathcache57801 = info57802;

return info57802;
})():info__17580__auto__);
var precompiled57803 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled57803.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META], null),com.rpl.specter.ALL_WITH_META], null));
} else {
return precompiled57803;
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
ob.clojure.eval_let_forms = (function ob$clojure$eval_let_forms(p__57804,env,k){
var vec__57805 = p__57804;
var op = cljs.core.nth.call(null,vec__57805,(0),null);
var bindings = cljs.core.nth.call(null,vec__57805,(1),null);
var body = cljs.core.nth.call(null,vec__57805,(2),null);
var form = vec__57805;
var pairs = cljs.core.partition.call(null,(2),bindings);
var env__$1 = ((cljs.core._EQ_.call(null,op,new cljs.core.Symbol(null,"loop","loop",1244978678,null)))?ob.clojure.set_recur_point.call(null,env,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.clojure.pathcache57808;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info57809 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null))], null)], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null));
ob.clojure.pathcache57808 = info57809;

return info57809;
})():info__17580__auto__);
var precompiled57810 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled57810.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.FIRST], null),com.rpl.specter.ALL,com.rpl.specter.FIRST], null));
} else {
return precompiled57810;
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
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__57811,env,k){
var vec__57812 = p__57811;
var _ = cljs.core.nth.call(null,vec__57812,(0),null);
var sym = cljs.core.nth.call(null,vec__57812,(1),null);
var val = cljs.core.nth.call(null,vec__57812,(2),null);
var form = vec__57812;
return ob.clojure.eval_STAR_.call(null,val,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env__$1,sym,val),new cljs.core.Keyword(null,"return","return",-1891502105),val,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return k.call(null,return$__$1,env__$2);
})], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__57815,env,k){
var vec__57816 = p__57815;
var _ = cljs.core.nth.call(null,vec__57816,(0),null);
var sym = cljs.core.nth.call(null,vec__57816,(1),null);
var val = cljs.core.nth.call(null,vec__57816,(2),null);
var form = vec__57816;
return ob.clojure.eval_STAR_.call(null,val,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env__$1,sym,val),new cljs.core.Keyword(null,"return","return",-1891502105),val,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return k.call(null,return$__$1,env__$2);
})], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__57819,env,k){
var vec__57820 = p__57819;
var _ = cljs.core.nth.call(null,vec__57820,(0),null);
var arg = cljs.core.nth.call(null,vec__57820,(1),null);
var form = vec__57820;
return ob.clojure.eval_STAR_.call(null,arg,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"return","return",-1891502105),["Error :: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(return$)].join(''),new cljs.core.Keyword(null,"k","k",-2146297393),cljs.core.identity], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"call-with-current-continuation","call-with-current-continuation",-831618896),(function (p__57823,env,k){
var vec__57824 = p__57823;
var _ = cljs.core.nth.call(null,vec__57824,(0),null);
var f = cljs.core.nth.call(null,vec__57824,(1),null);
var form = vec__57824;
var cc = (function (hole){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoked-cc","invoked-cc",-212545883),new cljs.core.Keyword(null,"return","return",-1891502105),hole,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"k","k",-2146297393),(function (hole__$1,env__$1){
return k.call(null,hole__$1,env__$1);
})], null);
});
var cc__$1 = cljs.core.with_meta.call(null,cc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cc?","cc?",228261409),true], null));
return cljs.core.merge.call(null,ob.clojure.eval_lambda.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc__$1], null),env,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"call-with-current-continuation","call-with-current-continuation",-831618896)], null));
}));

ob.clojure.macroexpand_STAR_ = (function ob$clojure$macroexpand_STAR_(p__57827,env){
while(true){
var vec__57828 = p__57827;
var seq__57829 = cljs.core.seq.call(null,vec__57828);
var first__57830 = cljs.core.first.call(null,seq__57829);
var seq__57829__$1 = cljs.core.next.call(null,seq__57829);
var op = first__57830;
var args = seq__57829__$1;
var form = vec__57828;
var temp__5718__auto__ = ob.clojure.op__GT_macro_fn.call(null,op);
if(cljs.core.truth_(temp__5718__auto__)){
var macro_fn = temp__5718__auto__;
var new$ = ob.clojure.redistribute_ids.call(null,cljs.core.apply.call(null,macro_fn,args));
if(cljs.core.coll_QMARK_.call(null,new$)){
var G__57831 = new$;
var G__57832 = env;
p__57827 = G__57831;
env = G__57832;
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
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.clojure.pathcache57833;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info57834 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1430),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.symbol_QMARK_,new cljs.core.Var(function(){return cljs.core.symbol_QMARK_;},new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),"cljs/core.cljs",(23),(1),(1051),(1051),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x is a Symbol",((cljs.core.symbol_QMARK_)?cljs.core.symbol_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.clojure.alter_macroexpand_node_QMARK_,new cljs.core.Var(function(){return ob.clojure.alter_macroexpand_node_QMARK_;},new cljs.core.Symbol("ob.clojure","alter-macroexpand-node?","ob.clojure/alter-macroexpand-node?",-703885343,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"alter-macroexpand-node?","alter-macroexpand-node?",1110227226,null),"src/ob/clojure.cljs",30,1,463,463,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(ob.clojure.alter_macroexpand_node_QMARK_)?ob.clojure.alter_macroexpand_node_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"alter-macroexpand-node?","alter-macroexpand-node?",1110227226,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null),new cljs.core.Symbol(null,"alter-macroexpand-node?","alter-macroexpand-node?",1110227226,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.clojure",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null),new cljs.core.Symbol(null,"alter-macroexpand-node?","alter-macroexpand-node?",1110227226,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.clojure.pathcache57833 = info57834;

return info57834;
})():info__17580__auto__);
var precompiled57835 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled57835.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,cljs.core.symbol_QMARK_,com.rpl.specter.STAY,ob.clojure.alter_macroexpand_node_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.ALL_WITH_META,p)], null),com.rpl.specter.stay_then_continue,com.rpl.specter.ALL_WITH_META,p,com.rpl.specter.STAY], null));
} else {
return precompiled57835;
}
})());

return p;
})();
ob.clojure.MACROEXPAND = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17580__auto__ = ob.clojure.pathcache57838;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info57839 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__57836_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__57836_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__57836_SHARP_)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__57837_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__57837_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__57837_SHARP_)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.clojure",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57836#","p1__57836#",1765376346,null)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"p1__57837#","p1__57837#",1003537719,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.clojure.pathcache57838 = info57839;

return info57839;
})():info__17580__auto__);
var precompiled57840 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled57840.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,(function (p1__57836_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__57836_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__57836_SHARP_)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,com.rpl.specter.if_path.call(null,(function (p1__57837_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__57837_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__57837_SHARP_)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.STAY))], null),com.rpl.specter.stay_then_continue,com.rpl.specter.if_path,(function (p1__57837_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__57837_SHARP_)) || (cljs.core.list_QMARK_.call(null,p1__57837_SHARP_)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p,com.rpl.specter.STAY,com.rpl.specter.STAY], null));
} else {
return precompiled57840;
}
})());

return p;
})();
ob.clojure.redistribute_ids = (function ob$clojure$redistribute_ids(node){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.clojure.pathcache57841;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info57842 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.clojure.RESTORE_MACRO,new cljs.core.Var(function(){return ob.clojure.RESTORE_MACRO;},new cljs.core.Symbol("ob.clojure","RESTORE-MACRO","ob.clojure/RESTORE-MACRO",1729711731,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"RESTORE-MACRO","RESTORE-MACRO",-348890230,null),"src/ob/clojure.cljs",19,1,468,468,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.clojure.RESTORE_MACRO)?ob.clojure.RESTORE_MACRO.cljs$lang$test:null)])),new cljs.core.Symbol(null,"RESTORE-MACRO","RESTORE-MACRO",-348890230,null))], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RESTORE-MACRO","RESTORE-MACRO",-348890230,null)], null));
ob.clojure.pathcache57841 = info57842;

return info57842;
})():info__17580__auto__);
var precompiled57843 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled57843.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.clojure.RESTORE_MACRO], null));
} else {
return precompiled57843;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.clojure.pathcache57844;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info57845 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.clojure.MACROEXPAND,new cljs.core.Var(function(){return ob.clojure.MACROEXPAND;},new cljs.core.Symbol("ob.clojure","MACROEXPAND","ob.clojure/MACROEXPAND",1768974602,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"MACROEXPAND","MACROEXPAND",-581599437,null),"src/ob/clojure.cljs",17,1,479,479,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.clojure.MACROEXPAND)?ob.clojure.MACROEXPAND.cljs$lang$test:null)])),new cljs.core.Symbol(null,"MACROEXPAND","MACROEXPAND",-581599437,null))], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"MACROEXPAND","MACROEXPAND",-581599437,null)], null));
ob.clojure.pathcache57844 = info57845;

return info57845;
})():info__17580__auto__);
var precompiled57846 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled57846.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.clojure.MACROEXPAND], null));
} else {
return precompiled57846;
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
var G__57851 = arguments.length;
switch (G__57851) {
case 0:
return ob.clojure.and_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ob.clojure.and_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___57853 = arguments.length;
var i__4865__auto___57854 = (0);
while(true){
if((i__4865__auto___57854 < len__4864__auto___57853)){
args_arr__4885__auto__.push((arguments[i__4865__auto___57854]));

var G__57855 = (i__4865__auto___57854 + (1));
i__4865__auto___57854 = G__57855;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"and__57847__auto__","and__57847__auto__",13620714,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__57847__auto__","and__57847__auto__",13620714,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__57847__auto__","and__57847__auto__",13620714,null),null,(1),null))))),null,(1),null)))));
}));

/** @this {Function} */
(ob.clojure.and_STAR_.cljs$lang$applyTo = (function (seq57849){
var G__57850 = cljs.core.first.call(null,seq57849);
var seq57849__$1 = cljs.core.next.call(null,seq57849);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57850,seq57849__$1);
}));

(ob.clojure.and_STAR_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
ob.clojure.or_STAR_ = (function ob$clojure$or_STAR_(var_args){
var G__57860 = arguments.length;
switch (G__57860) {
case 0:
return ob.clojure.or_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ob.clojure.or_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___57862 = arguments.length;
var i__4865__auto___57863 = (0);
while(true){
if((i__4865__auto___57863 < len__4864__auto___57862)){
args_arr__4885__auto__.push((arguments[i__4865__auto___57863]));

var G__57864 = (i__4865__auto___57863 + (1));
i__4865__auto___57863 = G__57864;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"or__57856__auto__","or__57856__auto__",-680524299,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__57856__auto__","or__57856__auto__",-680524299,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__57856__auto__","or__57856__auto__",-680524299,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),next))),null,(1),null))))),null,(1),null)))));
}));

/** @this {Function} */
(ob.clojure.or_STAR_.cljs$lang$applyTo = (function (seq57858){
var G__57859 = cljs.core.first.call(null,seq57858);
var seq57858__$1 = cljs.core.next.call(null,seq57858);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57859,seq57858__$1);
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
var len__4864__auto___57867 = arguments.length;
var i__4865__auto___57868 = (0);
while(true){
if((i__4865__auto___57868 < len__4864__auto___57867)){
args__4870__auto__.push((arguments[i__4865__auto___57868]));

var G__57869 = (i__4865__auto___57868 + (1));
i__4865__auto___57868 = G__57869;
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
var G__57870 = threaded;
var G__57871 = cljs.core.next.call(null,forms__$1);
x__$1 = G__57870;
forms__$1 = G__57871;
continue;
} else {
return x__$1;
}
break;
}
}));

(ob.clojure.__GT__STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.clojure.__GT__STAR_.cljs$lang$applyTo = (function (seq57865){
var G__57866 = cljs.core.first.call(null,seq57865);
var seq57865__$1 = cljs.core.next.call(null,seq57865);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57866,seq57865__$1);
}));

/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
ob.clojure.__GT__GT__STAR_ = (function ob$clojure$__GT__GT__STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57874 = arguments.length;
var i__4865__auto___57875 = (0);
while(true){
if((i__4865__auto___57875 < len__4864__auto___57874)){
args__4870__auto__.push((arguments[i__4865__auto___57875]));

var G__57876 = (i__4865__auto___57875 + (1));
i__4865__auto___57875 = G__57876;
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
var G__57877 = threaded;
var G__57878 = cljs.core.next.call(null,forms__$1);
x__$1 = G__57877;
forms__$1 = G__57878;
continue;
} else {
return x__$1;
}
break;
}
}));

(ob.clojure.__GT__GT__STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.clojure.__GT__GT__STAR_.cljs$lang$applyTo = (function (seq57872){
var G__57873 = cljs.core.first.call(null,seq57872);
var seq57872__$1 = cljs.core.next.call(null,seq57872);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57873,seq57872__$1);
}));

/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
ob.clojure.lazy_seq_STAR_ = (function ob$clojure$lazy_seq_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57880 = arguments.length;
var i__4865__auto___57881 = (0);
while(true){
if((i__4865__auto___57881 < len__4864__auto___57880)){
args__4870__auto__.push((arguments[i__4865__auto___57881]));

var G__57882 = (i__4865__auto___57881 + (1));
i__4865__auto___57881 = G__57882;
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
(ob.clojure.lazy_seq_STAR_.cljs$lang$applyTo = (function (seq57879){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57879));
}));

/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
ob.clojure.cond_STAR_ = (function ob$clojure$cond_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57884 = arguments.length;
var i__4865__auto___57885 = (0);
while(true){
if((i__4865__auto___57885 < len__4864__auto___57884)){
args__4870__auto__.push((arguments[i__4865__auto___57885]));

var G__57886 = (i__4865__auto___57885 + (1));
i__4865__auto___57885 = G__57886;
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
(ob.clojure.cond_STAR_.cljs$lang$applyTo = (function (seq57883){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57883));
}));

/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
ob.clojure.when_STAR_ = (function ob$clojure$when_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57889 = arguments.length;
var i__4865__auto___57890 = (0);
while(true){
if((i__4865__auto___57890 < len__4864__auto___57889)){
args__4870__auto__.push((arguments[i__4865__auto___57890]));

var G__57891 = (i__4865__auto___57890 + (1));
i__4865__auto___57890 = G__57891;
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
(ob.clojure.when_STAR_.cljs$lang$applyTo = (function (seq57887){
var G__57888 = cljs.core.first.call(null,seq57887);
var seq57887__$1 = cljs.core.next.call(null,seq57887);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57888,seq57887__$1);
}));

/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
ob.clojure.when_not_STAR_ = (function ob$clojure$when_not_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57894 = arguments.length;
var i__4865__auto___57895 = (0);
while(true){
if((i__4865__auto___57895 < len__4864__auto___57894)){
args__4870__auto__.push((arguments[i__4865__auto___57895]));

var G__57896 = (i__4865__auto___57895 + (1));
i__4865__auto___57895 = G__57896;
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
(ob.clojure.when_not_STAR_.cljs$lang$applyTo = (function (seq57892){
var G__57893 = cljs.core.first.call(null,seq57892);
var seq57892__$1 = cljs.core.next.call(null,seq57892);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57893,seq57892__$1);
}));

ob.clojure.op__GT_macro_fn = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Var(function(){return ob.clojure.cond_STAR_;},new cljs.core.Symbol("ob.clojure","cond*","ob.clojure/cond*",-1880327157,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.0",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"cond*","cond*",466569666,null),"src/ob/clojure.cljs",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,574,574,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),"Takes a set of test/expr pairs. It evaluates each test one at a\n  time.  If a test returns logical true, cond evaluates and returns\n  the value of the corresponding expr and doesn't evaluate any of the\n  other tests or exprs. (cond) returns nil.",(cljs.core.truth_(ob.clojure.cond_STAR_)?ob.clojure.cond_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Var(function(){return ob.clojure.and_STAR_;},new cljs.core.Symbol("ob.clojure","and*","ob.clojure/and*",-399272975,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"and*","and*",1959829766,null),"src/ob/clojure.cljs",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,511,511,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null)),"Evaluates exprs one at a time, from left to right. If a form\n  returns logical false (nil or false), and returns that value and\n  doesn't evaluate any of the other expressions, otherwise it returns\n  the value of the last expr. (and) returns true.",(cljs.core.truth_(ob.clojure.and_STAR_)?ob.clojure.and_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Var(function(){return ob.clojure.or_STAR_;},new cljs.core.Symbol("ob.clojure","or*","ob.clojure/or*",-1296814494,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"or*","or*",1183398965,null),"src/ob/clojure.cljs",10,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),1,522,522,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null)),"Evaluates exprs one at a time, from left to right. If a form\n  returns a logical true value, or returns that value and doesn't\n  evaluate any of the other expressions, otherwise it returns the\n  value of the last expression. (or) returns nil.",(cljs.core.truth_(ob.clojure.or_STAR_)?ob.clojure.or_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Var(function(){return ob.clojure.__GT__STAR_;},new cljs.core.Symbol("ob.clojure","->*","ob.clojure/->*",492902135,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.0",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"->*","->*",-1991375860,null),"src/ob/clojure.cljs",10,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,533,533,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Threads the expr through the forms. Inserts x as the\n  second item in the first form, making a list of it if it is not a\n  list already. If there are more forms, inserts the first form as the\n  second item in second form, etc.",(cljs.core.truth_(ob.clojure.__GT__STAR_)?ob.clojure.__GT__STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Var(function(){return ob.clojure.__GT__GT__STAR_;},new cljs.core.Symbol("ob.clojure","->>*","ob.clojure/->>*",200132783,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.1",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"->>*","->>*",-1089275162,null),"src/ob/clojure.cljs",11,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,550,550,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Threads the expr through the forms. Inserts x as the\n  last item in the first form, making a list of it if it is not a\n  list already. If there are more forms, inserts the first form as the\n  last item in second form, etc.",(cljs.core.truth_(ob.clojure.__GT__GT__STAR_)?ob.clojure.__GT__GT__STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Var(function(){return ob.clojure.when_STAR_;},new cljs.core.Symbol("ob.clojure","when*","ob.clojure/when*",780881527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.0",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"when*","when*",-764913268,null),"src/ob/clojure.cljs",12,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,588,588,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Evaluates test. If logical true, evaluates body in an implicit do.",(cljs.core.truth_(ob.clojure.when_STAR_)?ob.clojure.when_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Var(function(){return ob.clojure.when_not_STAR_;},new cljs.core.Symbol("ob.clojure","when-not*","ob.clojure/when-not*",-1756637450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.0",cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"when-not*","when-not*",52962317,null),"src/ob/clojure.cljs",16,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,595,595,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Evaluates test. If logical false, evaluates body in an implicit do.",(cljs.core.truth_(ob.clojure.when_not_STAR_)?ob.clojure.when_not_STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),new cljs.core.Var(function(){return ob.clojure.lazy_seq_STAR_;},new cljs.core.Symbol("ob.clojure","lazy-seq*","ob.clojure/lazy-seq*",-1868887669,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.clojure","ob.clojure",-125034916,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"lazy-seq*","lazy-seq*",477626290,null),"src/ob/clojure.cljs",16,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"body","body",-408674142,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,566,566,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Takes a body of expressions that returns an ISeq or nil, and yields\n  a ISeqable object that will invoke the body only the first time seq\n  is called, and will cache the result and return it on all subsequent\n  seq calls.",(cljs.core.truth_(ob.clojure.lazy_seq_STAR_)?ob.clojure.lazy_seq_STAR_.cljs$lang$test:null)]))], null);
ob.clojure.env = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Var(function(){return cljs.core._;},new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"-","-",-471816912,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2639),(2639),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"If no ys are supplied, returns the negation of x, else subtracts\n  the ys from x and returns the result.",(cljs.core.truth_(cljs.core._)?cljs.core._.cljs$lang$test:null)])),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Var(function(){return cljs.core._PLUS_;},new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"+","+",-740910886,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),(1),(2631),(2631),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns the sum of nums. (+) returns 0.",(cljs.core.truth_(cljs.core._PLUS_)?cljs.core._PLUS_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Var(function(){return cljs.core._STAR_;},new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*","*",345799209,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),(1),(2646),(2646),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns the product of nums. (*) returns 1.",(cljs.core.truth_(cljs.core._STAR_)?cljs.core._STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Var(function(){return cljs.core._SLASH_;},new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),"cljs/core.cljs",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2655),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"If no denominators are supplied, returns 1/numerator,\n  else returns numerator divided by all of the denominators.",(cljs.core.truth_(cljs.core._SLASH_)?cljs.core._SLASH_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Var(function(){return cljs.core._EQ_;},new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),"cljs/core.cljs",(17),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(1288),(1288),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Equality. Returns true if x equals y, false if not. Compares\n  numbers and collections in a type-independent manner.  Clojure's immutable data\n  structures define -equiv (and thus =) as a value, not an identity,\n  comparison.",((cljs.core._EQ_)?cljs.core._EQ_.cljs$lang$test:null)]))], null);

//# sourceMappingURL=clojure.js.map
