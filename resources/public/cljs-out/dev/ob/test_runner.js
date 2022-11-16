// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.test_runner');
goog.require('cljs.core');
goog.require('ob.core_test');
goog.require('figwheel.main.testing');
ob.test_runner._main = (function ob$test_runner$_main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22833 = arguments.length;
var i__4865__auto___22834 = (0);
while(true){
if((i__4865__auto___22834 < len__4864__auto___22833)){
args__4870__auto__.push((arguments[i__4865__auto___22834]));

var G__22835 = (i__4865__auto___22834 + (1));
i__4865__auto___22834 = G__22835;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__11554__auto___22836 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__11554__auto___22836))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__11554__auto___22836,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m__11555__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__11555__auto__);
}));
}

cljs.test.run_block.call(null,(function (){var env22831 = cljs.test.empty_env.call(null);
var summary22832 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env22831);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ob.test-runner","ob.test-runner",1628648965,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__22248__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__22248__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__22248__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ob.test-runner","ob.test-runner",1628648965,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary22832,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary22832),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env22831);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary22832));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary22832),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
}));

(ob.test_runner._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.test_runner._main.cljs$lang$applyTo = (function (seq22830){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22830));
}));


//# sourceMappingURL=test_runner.js.map
