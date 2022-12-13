// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.clojure');
goog.require('cljs.core');
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
if(cljs.core.list_QMARK_.call(null,form)){
return new cljs.core.Keyword(null,"s-exprs","s-exprs",-1026729470);
} else {
return null;
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
var counter = cljs.core.atom.call(null,(0));
var state = ob.clojure.eval_STAR_.call(null,form,env,k);
var states = cljs.core.PersistentVector.EMPTY;
while(true){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

if((cljs.core.deref.call(null,counter) < (100))){
var map__30862 = state;
var map__30862__$1 = cljs.core.__destructure_map.call(null,map__30862);
var return$ = cljs.core.get.call(null,map__30862__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var env__$1 = cljs.core.get.call(null,map__30862__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var k__$1 = cljs.core.get.call(null,map__30862__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.map_QMARK_.call(null,state)){
cljs.pprint.pprint.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"k","k",-2146297393)));
} else {
}

if(cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"return","return",-1891502105))){
var G__30863 = k__$1.call(null,return$,env__$1);
var G__30864 = cljs.core.conj.call(null,states,state);
state = G__30863;
states = G__30864;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
ob.clojure.gen_evaluation_stream = (function ob$clojure$gen_evaluation_stream(form,env,k){
var state__GT_stream = (function ob$clojure$gen_evaluation_stream_$_state__GT_stream(state){
return cljs.core.cons.call(null,state,(new cljs.core.LazySeq(null,(function (){
var map__30866 = state;
var map__30866__$1 = cljs.core.__destructure_map.call(null,map__30866);
var return$ = cljs.core.get.call(null,map__30866__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var env__$1 = cljs.core.get.call(null,map__30866__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var k__$1 = cljs.core.get.call(null,map__30866__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"return","return",-1891502105))){
return ob$clojure$gen_evaluation_stream_$_state__GT_stream.call(null,k__$1.call(null,return$,env__$1));
} else {
return null;
}
}),null,null)));
});
return state__GT_stream.call(null,ob.clojure.eval_STAR_.call(null,form,env,k));
});
cljs.core._add_method.call(null,ob.clojure.eval_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (form,env,k){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"return","return",-1891502105),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"k","k",-2146297393),k], null);
}));
cljs.core._add_method.call(null,ob.clojure.eval_STAR_,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (form,env,k){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.get.call(null,env,form)], null);
}));
cljs.core._add_method.call(null,ob.clojure.eval_STAR_,new cljs.core.Keyword(null,"s-exprs","s-exprs",-1026729470),(function (form,env,k){
return ob.clojure.eval_sexpr.call(null,form,env,k);
}));
ob.clojure.thread_ks = (function ob$clojure$thread_ks(combining_fn){
return (function() { 
var G__30869__delegate = function (final_k,forms,args){
var f = cljs.core.reduce.call(null,(function (p1__30868_SHARP_,p2__30867_SHARP_){
return p2__30867_SHARP_.call(null,p1__30868_SHARP_);
}),final_k,cljs.core.map.call(null,combining_fn,cljs.core.reverse.call(null,forms)));
return cljs.core.apply.call(null,f,args);
};
var G__30869 = function (final_k,forms,var_args){
var args = null;
if (arguments.length > 2) {
var G__30870__i = 0, G__30870__a = new Array(arguments.length -  2);
while (G__30870__i < G__30870__a.length) {G__30870__a[G__30870__i] = arguments[G__30870__i + 2]; ++G__30870__i;}
  args = new cljs.core.IndexedSeq(G__30870__a,0,null);
} 
return G__30869__delegate.call(this,final_k,forms,args);};
G__30869.cljs$lang$maxFixedArity = 2;
G__30869.cljs$lang$applyTo = (function (arglist__30871){
var final_k = cljs.core.first(arglist__30871);
arglist__30871 = cljs.core.next(arglist__30871);
var forms = cljs.core.first(arglist__30871);
var args = cljs.core.rest(arglist__30871);
return G__30869__delegate(final_k,forms,args);
});
G__30869.cljs$core$IFn$_invoke$arity$variadic = G__30869__delegate;
return G__30869;
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
ob.clojure.run_bindings = ob.clojure.thread_ks.call(null,(function (p__30872){
var vec__30873 = p__30872;
var sym = cljs.core.nth.call(null,vec__30873,(0),null);
var val = cljs.core.nth.call(null,vec__30873,(1),null);
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
ob.clojure.lambda_QMARK_ = (function ob$clojure$lambda_QMARK_(op){
return ((cljs.core.coll_QMARK_.call(null,op)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,op))));
});
ob.clojure.set_recur_point = (function ob$clojure$set_recur_point(env,params,body){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"recur-point","recur-point",-355035890),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"params","params",710516235),params], null));
});
ob.clojure.eval_lambda = (function ob$clojure$eval_lambda(f,args,env,k){
var env_STAR_ = env;
var vec__30876 = f;
var _ = cljs.core.nth.call(null,vec__30876,(0),null);
var params = cljs.core.nth.call(null,vec__30876,(1),null);
var body = cljs.core.nth.call(null,vec__30876,(2),null);
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.apply.call(null,f,args),new cljs.core.Keyword(null,"k","k",-2146297393),k], null);
});
ob.clojure.cc_QMARK_ = (function ob$clojure$cc_QMARK_(op){
return new cljs.core.Keyword(null,"cc?","cc?",228261409).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,op));
});
ob.clojure.eval_cc = (function ob$clojure$eval_cc(f,args,env,k){
return cljs.core.apply.call(null,f,args);
});
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"default","default",-1987822328),(function (form,env,k){
var k__$1 = (function (env__$1,p__30879){
var vec__30880 = p__30879;
var seq__30881 = cljs.core.seq.call(null,vec__30880);
var first__30882 = cljs.core.first.call(null,seq__30881);
var seq__30881__$1 = cljs.core.next.call(null,seq__30881);
var op = first__30882;
var args = seq__30881__$1;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null),((ob.clojure.lambda_QMARK_.call(null,op))?ob.clojure.eval_lambda.call(null,op,args,env__$1,k):(cljs.core.truth_(ob.clojure.cc_QMARK_.call(null,op))?ob.clojure.eval_cc.call(null,op,args,env__$1,k):ob.clojure.eval_invoke.call(null,op,args,env__$1,k)
)));
});
return ob.clojure.run_args.call(null,k__$1,form,env,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (form,env,k){
return k.call(null,form,env);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__30883,env,k){
var vec__30884 = p__30883;
var _ = cljs.core.nth.call(null,vec__30884,(0),null);
var pred = cljs.core.nth.call(null,vec__30884,(1),null);
var then = cljs.core.nth.call(null,vec__30884,(2),null);
var else$ = cljs.core.nth.call(null,vec__30884,(3),null);
var form = vec__30884;
return ob.clojure.eval_STAR_.call(null,pred,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"return","return",-1891502105),(cljs.core.truth_(return$)?then:else$),new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return ob.clojure.eval_STAR_.call(null,return$__$1,env__$2,k);
})], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"do","do",46310725),(function (p__30887,env,k){
var vec__30888 = p__30887;
var seq__30889 = cljs.core.seq.call(null,vec__30888);
var first__30890 = cljs.core.first.call(null,seq__30889);
var seq__30889__$1 = cljs.core.next.call(null,seq__30889);
var _ = first__30890;
var args = seq__30889__$1;
var form = vec__30888;
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
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__30891,env,k){
var vec__30892 = p__30891;
var _ = cljs.core.nth.call(null,vec__30892,(0),null);
var sym = cljs.core.nth.call(null,vec__30892,(1),null);
var val = cljs.core.nth.call(null,vec__30892,(2),null);
var form = vec__30892;
return ob.clojure.eval_STAR_.call(null,val,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env__$1,sym,val),new cljs.core.Keyword(null,"return","return",-1891502105),val,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return k.call(null,return$__$1,env__$2);
})], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30895,env,k){
var vec__30896 = p__30895;
var _ = cljs.core.nth.call(null,vec__30896,(0),null);
var sym = cljs.core.nth.call(null,vec__30896,(1),null);
var val = cljs.core.nth.call(null,vec__30896,(2),null);
var form = vec__30896;
return ob.clojure.eval_STAR_.call(null,val,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env__$1,sym,val),new cljs.core.Keyword(null,"return","return",-1891502105),val,new cljs.core.Keyword(null,"k","k",-2146297393),(function (return$__$1,env__$2){
return k.call(null,return$__$1,env__$2);
})], null);
}));
}));

cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"let","let",-1282412701),(function (form,env,k){
return ob.clojure.eval_let_forms.call(null,form,env,k);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (form,env,k){
return ob.clojure.eval_let_forms.call(null,form,env,k);
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30899,env,k){
var vec__30900 = p__30899;
var seq__30901 = cljs.core.seq.call(null,vec__30900);
var first__30902 = cljs.core.first.call(null,seq__30901);
var seq__30901__$1 = cljs.core.next.call(null,seq__30901);
var _ = first__30902;
var args = seq__30901__$1;
var form = vec__30900;
var map__30903 = cljs.core.get.call(null,env,new cljs.core.Keyword(null,"recur-point","recur-point",-355035890));
var map__30903__$1 = cljs.core.__destructure_map.call(null,map__30903);
var params = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var k__$1 = (function (env__$1,args__$1){
return cljs.core.merge.call(null,ob.clojure.eval_lambda.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params,body], null),args__$1,env__$1,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),body], null));
});
return ob.clojure.run_args.call(null,k__$1,args,env,cljs.core.PersistentVector.EMPTY);
}));
ob.clojure.letfn_fn = new cljs.core.Symbol(null,"fn","fn",465265323,null);
ob.clojure.letfn_fn__GT_binding_pairs = (function ob$clojure$letfn_fn__GT_binding_pairs(p__30904){
var vec__30905 = p__30904;
var seq__30906 = cljs.core.seq.call(null,vec__30905);
var first__30907 = cljs.core.first.call(null,seq__30906);
var seq__30906__$1 = cljs.core.next.call(null,seq__30906);
var fname = first__30907;
var args = seq__30906__$1;
var form = vec__30905;
var fn_body = cljs.core.cons.call(null,ob.clojure.letfn_fn,args);
var fn_body__$1 = cljs.core.with_meta.call(null,fn_body,cljs.core.meta.call(null,form));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,fn_body__$1], null);
});
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30908,env,k){
var vec__30909 = p__30908;
var _ = cljs.core.nth.call(null,vec__30909,(0),null);
var bindings = cljs.core.nth.call(null,vec__30909,(1),null);
var body = cljs.core.nth.call(null,vec__30909,(2),null);
var form = vec__30909;
var env_STAR_ = env;
var pairs = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17580__auto__ = ob.clojure.pathcache30912;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info30913 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(16),(1),(725),(727),cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null))], null)], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)], null),new cljs.core.Symbol("s","ALL-WITH-META","s/ALL-WITH-META",250401747,null)], null));
ob.clojure.pathcache30912 = info30913;

return info30913;
})():info__17580__auto__);
var precompiled30914 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled30914.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META], null),com.rpl.specter.ALL_WITH_META], null));
} else {
return precompiled30914;
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
ob.clojure.eval_let_forms = (function ob$clojure$eval_let_forms(p__30915,env,k){
var vec__30916 = p__30915;
var op = cljs.core.nth.call(null,vec__30916,(0),null);
var bindings = cljs.core.nth.call(null,vec__30916,(1),null);
var body = cljs.core.nth.call(null,vec__30916,(2),null);
var form = vec__30916;
var pairs = cljs.core.partition.call(null,(2),bindings);
var env__$1 = ((cljs.core._EQ_.call(null,op,new cljs.core.Symbol(null,"loop","loop",1244978678,null)))?ob.clojure.set_recur_point.call(null,env,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17580__auto__ = ob.clojure.pathcache30919;
var info__17580__auto____$1 = (((info__17580__auto__ == null))?(function (){var info30920 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null))], null)], null),"ob.clojure",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null));
ob.clojure.pathcache30919 = info30920;

return info30920;
})():info__17580__auto__);
var precompiled30921 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17580__auto____$1);
var dynamic_QMARK___17581__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17580__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17581__auto__)){
return precompiled30921.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.FIRST], null),com.rpl.specter.ALL,com.rpl.specter.FIRST], null));
} else {
return precompiled30921;
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
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__30922,env,k){
var vec__30923 = p__30922;
var _ = cljs.core.nth.call(null,vec__30923,(0),null);
var arg = cljs.core.nth.call(null,vec__30923,(1),null);
var form = vec__30923;
return ob.clojure.eval_STAR_.call(null,arg,env,(function (return$,env__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"return","return",-1891502105),["Error :: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(return$)].join(''),new cljs.core.Keyword(null,"k","k",-2146297393),cljs.core.identity], null);
}));
}));
cljs.core._add_method.call(null,ob.clojure.eval_sexpr,new cljs.core.Keyword(null,"call-with-current-continuation","call-with-current-continuation",-831618896),(function (p__30926,env,k){
var vec__30927 = p__30926;
var _ = cljs.core.nth.call(null,vec__30927,(0),null);
var f = cljs.core.nth.call(null,vec__30927,(1),null);
var form = vec__30927;
var cc = (function (hole){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoked-cc","invoked-cc",-212545883),new cljs.core.Keyword(null,"return","return",-1891502105),hole,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"k","k",-2146297393),(function (hole__$1,env__$1){
return k.call(null,hole__$1,env__$1);
})], null);
});
var cc__$1 = cljs.core.with_meta.call(null,cc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cc?","cc?",228261409),true], null));
return cljs.core.merge.call(null,ob.clojure.eval_lambda.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc__$1], null),env,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"call-with-current-continuation","call-with-current-continuation",-831618896)], null));
}));
ob.clojure.env = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Var(function(){return cljs.core._;},new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"-","-",-471816912,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2639),(2639),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"If no ys are supplied, returns the negation of x, else subtracts\n  the ys from x and returns the result.",(cljs.core.truth_(cljs.core._)?cljs.core._.cljs$lang$test:null)])),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Var(function(){return cljs.core._PLUS_;},new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"+","+",-740910886,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),(1),(2631),(2631),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns the sum of nums. (+) returns 0.",(cljs.core.truth_(cljs.core._PLUS_)?cljs.core._PLUS_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Var(function(){return cljs.core._STAR_;},new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*","*",345799209,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null,null)], null),(1),(2646),(2646),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Returns the product of nums. (*) returns 1.",(cljs.core.truth_(cljs.core._STAR_)?cljs.core._STAR_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Var(function(){return cljs.core._SLASH_;},new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),"cljs/core.cljs",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(2655),new cljs.core.Symbol(null,"number","number",-1084057331,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"If no denominators are supplied, returns 1/numerator,\n  else returns numerator divided by all of the denominators.",(cljs.core.truth_(cljs.core._SLASH_)?cljs.core._SLASH_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Var(function(){return cljs.core._EQ_;},new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),"cljs/core.cljs",(17),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(1288),(1288),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),"Equality. Returns true if x equals y, false if not. Compares\n  numbers and collections in a type-independent manner.  Clojure's immutable data\n  structures define -equiv (and thus =) as a value, not an identity,\n  comparison.",((cljs.core._EQ_)?cljs.core._EQ_.cljs$lang$test:null)]))], null);

//# sourceMappingURL=clojure.js.map
