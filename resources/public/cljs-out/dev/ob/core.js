// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('ob.core');
goog.require('cljs.core');
goog.require('ob.scroll');
goog.require('ob.code_to_hiccup');
goog.require('ob.analyzer');
goog.require('ob.utils');
goog.require('com.rpl.specter');
goog.require('cljs.pprint');
goog.require('cljs.repl');
goog.require('cljsjs.d3');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
ob.core.get_pos = (function ob$core$get_pos(this$){
var dims = this$.getBoundingClientRect();
var left = dims.left;
var top = dims.top;
var width = dims.width;
var height = dims.height;
var scrollX = window.scrollX;
var scrollY = window.scrollY;
var left__$1 = (left + scrollX);
var top__$1 = (top + scrollY);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [top__$1,left__$1,width,height], null);
});
ob.core.px = (function ob$core$px(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"px"].join('');
});
ob.core.abs_pos = (function ob$core$abs_pos(sel,top,left){
return sel.style("left",left).style("top",top);
});
ob.core.gen_abs_copy = (function ob$core$gen_abs_copy(original_selection){
var vec__49848 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__49848,(0),null);
var left = cljs.core.nth.call(null,vec__49848,(1),null);
var top__$1 = ob.core.px.call(null,top);
var left__$1 = ob.core.px.call(null,left);
var text = original_selection.text();
var classes = original_selection.attr("class");
return (function (selection,ff_QMARK_){
if(cljs.core.truth_(ff_QMARK_)){
return ob.core.abs_pos.call(null,d3.select(document.body).insert("div").attr("class",classes).style("position","absolute"),top__$1,left__$1).text(text);
} else {
return selection.on("end",(function (_){
original_selection.style("opacity",null);

return d3.select(this).remove();
}));
}
});
});
ob.core.gen_style_trsf = (function ob$core$gen_style_trsf(styles){
var coords = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, ["left",null,"top",null], null));
return (function (selection,ff_QMARK_){
try{if(cljs.core.truth_(ff_QMARK_)){
var seq__49852_49884 = cljs.core.seq.call(null,styles);
var chunk__49853_49885 = null;
var count__49854_49886 = (0);
var i__49855_49887 = (0);
while(true){
if((i__49855_49887 < count__49854_49886)){
var vec__49862_49888 = cljs.core._nth.call(null,chunk__49853_49885,i__49855_49887);
var k_49889 = cljs.core.nth.call(null,vec__49862_49888,(0),null);
var v_49890 = cljs.core.nth.call(null,vec__49862_49888,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_49889))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_49889,selection.selection().style(k_49889));
} else {
}

selection.style(k_49889,v_49890);


var G__49891 = seq__49852_49884;
var G__49892 = chunk__49853_49885;
var G__49893 = count__49854_49886;
var G__49894 = (i__49855_49887 + (1));
seq__49852_49884 = G__49891;
chunk__49853_49885 = G__49892;
count__49854_49886 = G__49893;
i__49855_49887 = G__49894;
continue;
} else {
var temp__5720__auto___49895 = cljs.core.seq.call(null,seq__49852_49884);
if(temp__5720__auto___49895){
var seq__49852_49896__$1 = temp__5720__auto___49895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49852_49896__$1)){
var c__4679__auto___49897 = cljs.core.chunk_first.call(null,seq__49852_49896__$1);
var G__49898 = cljs.core.chunk_rest.call(null,seq__49852_49896__$1);
var G__49899 = c__4679__auto___49897;
var G__49900 = cljs.core.count.call(null,c__4679__auto___49897);
var G__49901 = (0);
seq__49852_49884 = G__49898;
chunk__49853_49885 = G__49899;
count__49854_49886 = G__49900;
i__49855_49887 = G__49901;
continue;
} else {
var vec__49865_49902 = cljs.core.first.call(null,seq__49852_49896__$1);
var k_49903 = cljs.core.nth.call(null,vec__49865_49902,(0),null);
var v_49904 = cljs.core.nth.call(null,vec__49865_49902,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_49903))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_49903,selection.selection().style(k_49903));
} else {
}

selection.style(k_49903,v_49904);


var G__49905 = cljs.core.next.call(null,seq__49852_49896__$1);
var G__49906 = null;
var G__49907 = (0);
var G__49908 = (0);
seq__49852_49884 = G__49905;
chunk__49853_49885 = G__49906;
count__49854_49886 = G__49907;
i__49855_49887 = G__49908;
continue;
}
} else {
}
}
break;
}
} else {
var seq__49868_49909 = cljs.core.seq.call(null,styles);
var chunk__49869_49910 = null;
var count__49870_49911 = (0);
var i__49871_49912 = (0);
while(true){
if((i__49871_49912 < count__49870_49911)){
var vec__49878_49913 = cljs.core._nth.call(null,chunk__49869_49910,i__49871_49912);
var k_49914 = cljs.core.nth.call(null,vec__49878_49913,(0),null);
var __49915 = cljs.core.nth.call(null,vec__49878_49913,(1),null);
selection.style(k_49914,cljs.core.deref.call(null,coords).call(null,k_49914));


var G__49916 = seq__49868_49909;
var G__49917 = chunk__49869_49910;
var G__49918 = count__49870_49911;
var G__49919 = (i__49871_49912 + (1));
seq__49868_49909 = G__49916;
chunk__49869_49910 = G__49917;
count__49870_49911 = G__49918;
i__49871_49912 = G__49919;
continue;
} else {
var temp__5720__auto___49920 = cljs.core.seq.call(null,seq__49868_49909);
if(temp__5720__auto___49920){
var seq__49868_49921__$1 = temp__5720__auto___49920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49868_49921__$1)){
var c__4679__auto___49922 = cljs.core.chunk_first.call(null,seq__49868_49921__$1);
var G__49923 = cljs.core.chunk_rest.call(null,seq__49868_49921__$1);
var G__49924 = c__4679__auto___49922;
var G__49925 = cljs.core.count.call(null,c__4679__auto___49922);
var G__49926 = (0);
seq__49868_49909 = G__49923;
chunk__49869_49910 = G__49924;
count__49870_49911 = G__49925;
i__49871_49912 = G__49926;
continue;
} else {
var vec__49881_49927 = cljs.core.first.call(null,seq__49868_49921__$1);
var k_49928 = cljs.core.nth.call(null,vec__49881_49927,(0),null);
var __49929 = cljs.core.nth.call(null,vec__49881_49927,(1),null);
selection.style(k_49928,cljs.core.deref.call(null,coords).call(null,k_49928));


var G__49930 = cljs.core.next.call(null,seq__49868_49921__$1);
var G__49931 = null;
var G__49932 = (0);
var G__49933 = (0);
seq__49868_49909 = G__49930;
chunk__49869_49910 = G__49931;
count__49870_49911 = G__49932;
i__49871_49912 = G__49933;
continue;
}
} else {
}
}
break;
}
}
}catch (e49851){if((e49851 instanceof Error)){
var e_49934 = e49851;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e49851;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49936 = arguments.length;
var i__4865__auto___49937 = (0);
while(true){
if((i__4865__auto___49937 < len__4864__auto___49936)){
args__4870__auto__.push((arguments[i__4865__auto___49937]));

var G__49938 = (i__4865__auto___49937 + (1));
i__4865__auto___49937 = G__49938;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.core.compose.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.core.compose.cljs$core$IFn$_invoke$arity$variadic = (function (fs){
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.reverse.call(null,fs));
}));

(ob.core.compose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.core.compose.cljs$lang$applyTo = (function (seq49935){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49935));
}));

ob.core._transition = (function ob$core$_transition(p__49941){
var map__49942 = p__49941;
var map__49942__$1 = cljs.core.__destructure_map.call(null,map__49942);
var delay = cljs.core.get.call(null,map__49942__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__49942__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__49943 = s__$1;
var G__49943__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__49943(p1__49939_SHARP_){
return p1__49939_SHARP_.delay(delay);
}):G__49943);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__49943(p1__49940_SHARP_){
return p1__49940_SHARP_.duration(duration);
});
} else {
return G__49943__$1;
}
});
});
ob.core.compose_animations = (function ob$core$compose_animations(params,fs){
return (function (ff_QMARK_){
var f__GT_partial = (function (f){
return (function (s){
return f.call(null,s,ff_QMARK_);
});
});
var fs__$1 = cljs.core.map.call(null,f__GT_partial,fs);
var fs__$2 = cljs.core.interleave.call(null,fs__$1,cljs.core.repeat.call(null,ob.core._transition.call(null,params)));
var fs__$3 = (cljs.core.truth_(ff_QMARK_)?cljs.core.butlast.call(null,fs__$2):cljs.core.reverse.call(null,fs__$2));
return cljs.core.apply.call(null,ob.core.compose,fs__$3);
});
});
ob.core._BAR__BAR_ = (function ob$core$_BAR__BAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49950 = arguments.length;
var i__4865__auto___49951 = (0);
while(true){
if((i__4865__auto___49951 < len__4864__auto___49950)){
args__4870__auto__.push((arguments[i__4865__auto___49951]));

var G__49952 = (i__4865__auto___49951 + (1));
i__4865__auto___49951 = G__49952;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ob.core._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ob.core._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (f,fs){
return (function (sel,ff_QMARK_){
var run_all_BANG_ = (function (_){
var seq__49946 = cljs.core.seq.call(null,fs);
var chunk__49947 = null;
var count__49948 = (0);
var i__49949 = (0);
while(true){
if((i__49949 < count__49948)){
var f__$1 = cljs.core._nth.call(null,chunk__49947,i__49949);
f__$1.call(null,sel,ff_QMARK_);


var G__49953 = seq__49946;
var G__49954 = chunk__49947;
var G__49955 = count__49948;
var G__49956 = (i__49949 + (1));
seq__49946 = G__49953;
chunk__49947 = G__49954;
count__49948 = G__49955;
i__49949 = G__49956;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__49946);
if(temp__5720__auto__){
var seq__49946__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49946__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__49946__$1);
var G__49957 = cljs.core.chunk_rest.call(null,seq__49946__$1);
var G__49958 = c__4679__auto__;
var G__49959 = cljs.core.count.call(null,c__4679__auto__);
var G__49960 = (0);
seq__49946 = G__49957;
chunk__49947 = G__49958;
count__49948 = G__49959;
i__49949 = G__49960;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__49946__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__49961 = cljs.core.next.call(null,seq__49946__$1);
var G__49962 = null;
var G__49963 = (0);
var G__49964 = (0);
seq__49946 = G__49961;
chunk__49947 = G__49962;
count__49948 = G__49963;
i__49949 = G__49964;
continue;
}
} else {
return null;
}
}
break;
}
});
return f.call(null,sel.on("start",run_all_BANG_),ff_QMARK_);
});
}));

(ob.core._BAR__BAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq49944){
var G__49945 = cljs.core.first.call(null,seq49944);
var seq49944__$1 = cljs.core.next.call(null,seq49944);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49945,seq49944__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__49966 = arguments.length;
switch (G__49966) {
case 0:
return ob.core.make_copy.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return ob.core.make_copy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.make_copy.cljs$core$IFn$_invoke$arity$0 = (function (){
return ob.core.make_copy.call(null,"#maps",false,true);
}));

(ob.core.make_copy.cljs$core$IFn$_invoke$arity$3 = (function (source,token_QMARK_,collapse_QMARK_){
var selection = d3.select(source);
var vec__49967 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__49967,(0),null);
var l = cljs.core.nth.call(null,vec__49967,(1),null);
var w = cljs.core.nth.call(null,vec__49967,(2),null);
var h = cljs.core.nth.call(null,vec__49967,(3),null);
var offset = (cljs.core.truth_(collapse_QMARK_)?0.05:0.2);
var l__$1 = (l + (offset * w));
var t__$1 = (t + (offset * h));
var root_top = ob.core.px.call(null,t__$1);
var root_left = ob.core.px.call(null,l__$1);
var sel = (cljs.core.truth_(token_QMARK_)?selection:selection.selectAll(" .token"));
return sel.style("opacity",(0)).each((function (_){
var sel__$1 = d3.select(this);
var delay = ((500) * cljs.core.rand.call(null));
var copy = ob.core.gen_abs_copy.call(null,sel__$1);
var abs_collapse = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 3, ["left",root_left,"top",root_top,"font-size","4px"], null));
var rel_collapse = ob.core.gen_rel_collapse.call(null,sel__$1);
var collapse = ob.core._BAR__BAR_.call(null,abs_collapse,rel_collapse);
var shift = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 1, ["transform","translate(100px)"], null));
return copy.call(null,collapse.call(null,shift.call(null,shift.call(null,collapse.call(null,copy.call(null,null,true).transition().delay(((500) * cljs.core.rand.call(null))).duration((1000)),true).transition("shift"),true).transition(),false).transition(),false),false);
}));
}));

(ob.core.make_copy.cljs$lang$maxFixedArity = 3);

/**
 * Shorthand for generating
 * the style / attr map.
 */
ob.core.$ = (function ob$core$$(var_args){
var G__49972 = arguments.length;
switch (G__49972) {
case 1:
return ob.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ob.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.$.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null);
}));

(ob.core.$.cljs$core$IFn$_invoke$arity$2 = (function (styles,attrs){
return cljs.core.merge.call(null,attrs,ob.core.$.call(null,styles));
}));

(ob.core.$.cljs$lang$maxFixedArity = 2);

/**
 * Adds n breaks.
 */
ob.core.br = (function ob$core$br(n){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.repeat.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)));
});
ob.core.svg = (function ob$core$svg(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#main-svg","svg#main-svg",343300080),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"70%",new cljs.core.Keyword(null,"height","height",1025178622),"1000px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null))], null);
});
ob.core.text_col = (function ob$core$text_col(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#text-col","div#text-col",-681412085),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"There is some exposition... here is some more exposition....\n     and now here is a ridiculously long word fmwk,;'f,ew;l'dffwm;lk'fkwefwelkfmk"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.expo","p.expo",2137277744),"Next line"], null)], null);
});
ob.core.code = ob.code_to_hiccup.code__GT_hiccup.call(null,ob.analyzer.analyze.call(null,ob.utils.walk_ids.call(null,cljs.core.list(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),(0)),(1),(2)),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"c","c",-122660552,null),"null",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),"null",new cljs.core.Symbol(null,"b","b",-1172211299,null),"null"], null), null)),new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.list(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"maps","maps",-71029607,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(3),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),(1),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"g","g",1738089905),(4),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"k","k",-2146297393),(7)], null),new cljs.core.Keyword(null,"f","f",-1597136552),(4)], null)], null)),new cljs.core.Symbol(null,"zak","zak",-179600060,null),cljs.core.list(new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),(6),new cljs.core.Symbol(null,"z","z",851004344,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),(6),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),(6234567)], null),new cljs.core.Symbol(null,"h","h",-1544777029,null))], null),"eggs")], null),new cljs.core.Symbol(null,"jowls","jowls",222324398,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(4),(5),(37)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(16),(7)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(14),(35)))))),cljs.core.PersistentArrayMap.EMPTY));
ob.core.code_col = (function ob$core$code_col(_){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"border","border",1444987323),"solid 2px black"], null)),ob.core.code,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),ob.core.code,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),ob.core.code], null);
});
ob.core.main_page = (function ob$core$main_page(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-page","div#main-page",973942128),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"5000px"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Ouroboros"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.text_col,state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.code_col,state], null)], null)], null);
});
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.app_state !== 'undefined')){
} else {
ob.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
ob.core.add_scroll_events_BANG_ = (function ob$core$add_scroll_events_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49979 = arguments.length;
var i__4865__auto___49980 = (0);
while(true){
if((i__4865__auto___49980 < len__4864__auto___49979)){
args__4870__auto__.push((arguments[i__4865__auto___49980]));

var G__49981 = (i__4865__auto___49980 + (1));
i__4865__auto___49980 = G__49981;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.core.add_scroll_events_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.core.add_scroll_events_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ids){
var seq__49975 = cljs.core.seq.call(null,ids);
var chunk__49976 = null;
var count__49977 = (0);
var i__49978 = (0);
while(true){
if((i__49978 < count__49977)){
var id = cljs.core._nth.call(null,chunk__49976,i__49978);
ob.scroll.set_scroll_trigger.call(null,id,((function (seq__49975,chunk__49976,count__49977,i__49978,id){
return (function (){
return alert("Wow!");
});})(seq__49975,chunk__49976,count__49977,i__49978,id))
);


var G__49982 = seq__49975;
var G__49983 = chunk__49976;
var G__49984 = count__49977;
var G__49985 = (i__49978 + (1));
seq__49975 = G__49982;
chunk__49976 = G__49983;
count__49977 = G__49984;
i__49978 = G__49985;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__49975);
if(temp__5720__auto__){
var seq__49975__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49975__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__49975__$1);
var G__49986 = cljs.core.chunk_rest.call(null,seq__49975__$1);
var G__49987 = c__4679__auto__;
var G__49988 = cljs.core.count.call(null,c__4679__auto__);
var G__49989 = (0);
seq__49975 = G__49986;
chunk__49976 = G__49987;
count__49977 = G__49988;
i__49978 = G__49989;
continue;
} else {
var id = cljs.core.first.call(null,seq__49975__$1);
ob.scroll.set_scroll_trigger.call(null,id,((function (seq__49975,chunk__49976,count__49977,i__49978,id,seq__49975__$1,temp__5720__auto__){
return (function (){
return alert("Wow!");
});})(seq__49975,chunk__49976,count__49977,i__49978,id,seq__49975__$1,temp__5720__auto__))
);


var G__49990 = cljs.core.next.call(null,seq__49975__$1);
var G__49991 = null;
var G__49992 = (0);
var G__49993 = (0);
seq__49975 = G__49990;
chunk__49976 = G__49991;
count__49977 = G__49992;
i__49978 = G__49993;
continue;
}
} else {
return null;
}
}
break;
}
}));

(ob.core.add_scroll_events_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ob.core.add_scroll_events_BANG_.cljs$lang$applyTo = (function (seq49974){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49974));
}));

ob.core.get_app_element = (function ob$core$get_app_element(){
return goog.dom.getElement("app");
});
ob.core.mount = (function ob$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.main_page,ob.core.app_state], null),el);
});
ob.core.mount_app_element = (function ob$core$mount_app_element(){
var temp__5720__auto__ = ob.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return ob.core.mount.call(null,el);
} else {
return null;
}
});
ob.core.mount_app_element.call(null);
ob.core.on_reload = (function ob$core$on_reload(){
return ob.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
