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
goog.require('re_frame.core');
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
var vec__76557 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__76557,(0),null);
var left = cljs.core.nth.call(null,vec__76557,(1),null);
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
var seq__76561_76593 = cljs.core.seq.call(null,styles);
var chunk__76562_76594 = null;
var count__76563_76595 = (0);
var i__76564_76596 = (0);
while(true){
if((i__76564_76596 < count__76563_76595)){
var vec__76571_76597 = cljs.core._nth.call(null,chunk__76562_76594,i__76564_76596);
var k_76598 = cljs.core.nth.call(null,vec__76571_76597,(0),null);
var v_76599 = cljs.core.nth.call(null,vec__76571_76597,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_76598))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_76598,selection.selection().style(k_76598));
} else {
}

selection.style(k_76598,v_76599);


var G__76600 = seq__76561_76593;
var G__76601 = chunk__76562_76594;
var G__76602 = count__76563_76595;
var G__76603 = (i__76564_76596 + (1));
seq__76561_76593 = G__76600;
chunk__76562_76594 = G__76601;
count__76563_76595 = G__76602;
i__76564_76596 = G__76603;
continue;
} else {
var temp__5720__auto___76604 = cljs.core.seq.call(null,seq__76561_76593);
if(temp__5720__auto___76604){
var seq__76561_76605__$1 = temp__5720__auto___76604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76561_76605__$1)){
var c__4679__auto___76606 = cljs.core.chunk_first.call(null,seq__76561_76605__$1);
var G__76607 = cljs.core.chunk_rest.call(null,seq__76561_76605__$1);
var G__76608 = c__4679__auto___76606;
var G__76609 = cljs.core.count.call(null,c__4679__auto___76606);
var G__76610 = (0);
seq__76561_76593 = G__76607;
chunk__76562_76594 = G__76608;
count__76563_76595 = G__76609;
i__76564_76596 = G__76610;
continue;
} else {
var vec__76574_76611 = cljs.core.first.call(null,seq__76561_76605__$1);
var k_76612 = cljs.core.nth.call(null,vec__76574_76611,(0),null);
var v_76613 = cljs.core.nth.call(null,vec__76574_76611,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_76612))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_76612,selection.selection().style(k_76612));
} else {
}

selection.style(k_76612,v_76613);


var G__76614 = cljs.core.next.call(null,seq__76561_76605__$1);
var G__76615 = null;
var G__76616 = (0);
var G__76617 = (0);
seq__76561_76593 = G__76614;
chunk__76562_76594 = G__76615;
count__76563_76595 = G__76616;
i__76564_76596 = G__76617;
continue;
}
} else {
}
}
break;
}
} else {
var seq__76577_76618 = cljs.core.seq.call(null,styles);
var chunk__76578_76619 = null;
var count__76579_76620 = (0);
var i__76580_76621 = (0);
while(true){
if((i__76580_76621 < count__76579_76620)){
var vec__76587_76622 = cljs.core._nth.call(null,chunk__76578_76619,i__76580_76621);
var k_76623 = cljs.core.nth.call(null,vec__76587_76622,(0),null);
var __76624 = cljs.core.nth.call(null,vec__76587_76622,(1),null);
selection.style(k_76623,cljs.core.deref.call(null,coords).call(null,k_76623));


var G__76625 = seq__76577_76618;
var G__76626 = chunk__76578_76619;
var G__76627 = count__76579_76620;
var G__76628 = (i__76580_76621 + (1));
seq__76577_76618 = G__76625;
chunk__76578_76619 = G__76626;
count__76579_76620 = G__76627;
i__76580_76621 = G__76628;
continue;
} else {
var temp__5720__auto___76629 = cljs.core.seq.call(null,seq__76577_76618);
if(temp__5720__auto___76629){
var seq__76577_76630__$1 = temp__5720__auto___76629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76577_76630__$1)){
var c__4679__auto___76631 = cljs.core.chunk_first.call(null,seq__76577_76630__$1);
var G__76632 = cljs.core.chunk_rest.call(null,seq__76577_76630__$1);
var G__76633 = c__4679__auto___76631;
var G__76634 = cljs.core.count.call(null,c__4679__auto___76631);
var G__76635 = (0);
seq__76577_76618 = G__76632;
chunk__76578_76619 = G__76633;
count__76579_76620 = G__76634;
i__76580_76621 = G__76635;
continue;
} else {
var vec__76590_76636 = cljs.core.first.call(null,seq__76577_76630__$1);
var k_76637 = cljs.core.nth.call(null,vec__76590_76636,(0),null);
var __76638 = cljs.core.nth.call(null,vec__76590_76636,(1),null);
selection.style(k_76637,cljs.core.deref.call(null,coords).call(null,k_76637));


var G__76639 = cljs.core.next.call(null,seq__76577_76630__$1);
var G__76640 = null;
var G__76641 = (0);
var G__76642 = (0);
seq__76577_76618 = G__76639;
chunk__76578_76619 = G__76640;
count__76579_76620 = G__76641;
i__76580_76621 = G__76642;
continue;
}
} else {
}
}
break;
}
}
}catch (e76560){if((e76560 instanceof Error)){
var e_76643 = e76560;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e76560;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76645 = arguments.length;
var i__4865__auto___76646 = (0);
while(true){
if((i__4865__auto___76646 < len__4864__auto___76645)){
args__4870__auto__.push((arguments[i__4865__auto___76646]));

var G__76647 = (i__4865__auto___76646 + (1));
i__4865__auto___76646 = G__76647;
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
(ob.core.compose.cljs$lang$applyTo = (function (seq76644){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76644));
}));

ob.core._transition = (function ob$core$_transition(p__76650){
var map__76651 = p__76650;
var map__76651__$1 = cljs.core.__destructure_map.call(null,map__76651);
var delay = cljs.core.get.call(null,map__76651__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__76651__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__76652 = s__$1;
var G__76652__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__76652(p1__76648_SHARP_){
return p1__76648_SHARP_.delay(delay);
}):G__76652);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__76652(p1__76649_SHARP_){
return p1__76649_SHARP_.duration(duration);
});
} else {
return G__76652__$1;
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
var len__4864__auto___76659 = arguments.length;
var i__4865__auto___76660 = (0);
while(true){
if((i__4865__auto___76660 < len__4864__auto___76659)){
args__4870__auto__.push((arguments[i__4865__auto___76660]));

var G__76661 = (i__4865__auto___76660 + (1));
i__4865__auto___76660 = G__76661;
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
var seq__76655 = cljs.core.seq.call(null,fs);
var chunk__76656 = null;
var count__76657 = (0);
var i__76658 = (0);
while(true){
if((i__76658 < count__76657)){
var f__$1 = cljs.core._nth.call(null,chunk__76656,i__76658);
f__$1.call(null,sel,ff_QMARK_);


var G__76662 = seq__76655;
var G__76663 = chunk__76656;
var G__76664 = count__76657;
var G__76665 = (i__76658 + (1));
seq__76655 = G__76662;
chunk__76656 = G__76663;
count__76657 = G__76664;
i__76658 = G__76665;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76655);
if(temp__5720__auto__){
var seq__76655__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76655__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76655__$1);
var G__76666 = cljs.core.chunk_rest.call(null,seq__76655__$1);
var G__76667 = c__4679__auto__;
var G__76668 = cljs.core.count.call(null,c__4679__auto__);
var G__76669 = (0);
seq__76655 = G__76666;
chunk__76656 = G__76667;
count__76657 = G__76668;
i__76658 = G__76669;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__76655__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__76670 = cljs.core.next.call(null,seq__76655__$1);
var G__76671 = null;
var G__76672 = (0);
var G__76673 = (0);
seq__76655 = G__76670;
chunk__76656 = G__76671;
count__76657 = G__76672;
i__76658 = G__76673;
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
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq76653){
var G__76654 = cljs.core.first.call(null,seq76653);
var seq76653__$1 = cljs.core.next.call(null,seq76653);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76654,seq76653__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__76675 = arguments.length;
switch (G__76675) {
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
var vec__76676 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__76676,(0),null);
var l = cljs.core.nth.call(null,vec__76676,(1),null);
var w = cljs.core.nth.call(null,vec__76676,(2),null);
var h = cljs.core.nth.call(null,vec__76676,(3),null);
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
var G__76681 = arguments.length;
switch (G__76681) {
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
ob.core.TEMP = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,ob.core.TEMP,(function (){var info__17671__auto__ = ob.core.pathcache76683;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76684 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null));
ob.core.pathcache76683 = info76684;

return info76684;
})():info__17671__auto__);
var precompiled76685 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76685.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.FIRST,com.rpl.specter.FIRST], null),com.rpl.specter.FIRST,com.rpl.specter.FIRST], null));
} else {
return precompiled76685;
}
})());
ob.core.WALK_ALL = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache76686;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76687 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache76686 = info76687;

return info76687;
})():info__17671__auto__);
var precompiled76688 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76688.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled76688;
}
})());

return p;
})();
ob.core.AST_WALK = com.rpl.specter.cond_path.call(null,cljs.core.map_QMARK_,com.rpl.specter.STAY,cljs.core.vector_QMARK_,com.rpl.specter.ALL,com.rpl.specter.STAY);


ob.core.AST_CHILDREN_select_STAR_ = (function ob$core$AST_CHILDREN_select_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76689;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76690 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache76689 = info76690;

return info76690;
})():info__17671__auto__);
var precompiled76691 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76691.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled76691;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76692;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76693 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,379,379,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache76692 = info76693;

return info76693;
})():info__17671__auto__);
var precompiled76694 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76694.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled76694;
}
})(),next_fn,s);
} else {
return null;
}
});

ob.core.AST_CHILDREN_transform_STAR_ = (function ob$core$AST_CHILDREN_transform_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76695;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76696 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,379,379,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache76695 = info76696;

return info76696;
})():info__17671__auto__);
var precompiled76697 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76697.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled76697;
}
})(),next_fn,ast);
} else {
return null;
}
});

ob.core.AST_CHILDREN = (function (){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core76698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core76698 = (function (meta76699){
this.meta76699 = meta76699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core76698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76700,meta76699__$1){
var self__ = this;
var _76700__$1 = this;
return (new ob.core.t_ob$core76698(meta76699__$1));
}));

(ob.core.t_ob$core76698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76700){
var self__ = this;
var _76700__$1 = this;
return self__.meta76699;
}));

(ob.core.t_ob$core76698.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core76698.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,ast,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76701;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76702 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache76701 = info76702;

return info76702;
})():info__17671__auto__);
var precompiled76703 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76703.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled76703;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76704;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76705 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,379,379,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache76704 = info76705;

return info76705;
})():info__17671__auto__);
var precompiled76706 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76706.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled76706;
}
})(),next_fn,s);
} else {
return null;
}
}));

(ob.core.t_ob$core76698.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,ast,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76707;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76708 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,379,379,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache76707 = info76708;

return info76708;
})():info__17671__auto__);
var precompiled76709 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76709.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled76709;
}
})(),next_fn,ast);
} else {
return null;
}
}));

(ob.core.t_ob$core76698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76699","meta76699",986517969,null)], null);
}));

(ob.core.t_ob$core76698.cljs$lang$type = true);

(ob.core.t_ob$core76698.cljs$lang$ctorStr = "ob.core/t_ob$core76698");

(ob.core.t_ob$core76698.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core76698");
}));

/**
 * Positional factory function for ob.core/t_ob$core76698.
 */
ob.core.__GT_t_ob$core76698 = (function ob$core$__GT_t_ob$core76698(meta76699){
return (new ob.core.t_ob$core76698(meta76699));
});

}

return (new ob.core.t_ob$core76698(null));
})()
;
ob.core.AST_PRE_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache76710;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76711 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,388,388,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache76710 = info76711;

return info76711;
})():info__17671__auto__);
var precompiled76712 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76712.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.stay_then_continue,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled76712;
}
})());

return p;
})();
ob.core.AST_POST_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache76713;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76714 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,388,388,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache76713 = info76714;

return info76714;
})():info__17671__auto__);
var precompiled76715 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76715.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.continue_then_stay,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled76715;
}
})());

return p;
})();
ob.core.AST_DESC = ob.core.AST_POST_WALK;


ob.core.desc_select_STAR_ = (function ob$core$desc_select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$desc_select_STAR__$_gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__76720 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__76721 = null;
var count__76722 = (0);
var i__76723 = (0);
while(true){
if((i__76723 < count__76722)){
var c = cljs.core._nth.call(null,chunk__76721,i__76723);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__76751 = seq__76720;
var G__76752 = chunk__76721;
var G__76753 = count__76722;
var G__76754 = (i__76723 + (1));
seq__76720 = G__76751;
chunk__76721 = G__76752;
count__76722 = G__76753;
i__76723 = G__76754;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76720);
if(temp__5720__auto__){
var seq__76720__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76720__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76720__$1);
var G__76755 = cljs.core.chunk_rest.call(null,seq__76720__$1);
var G__76756 = c__4679__auto__;
var G__76757 = cljs.core.count.call(null,c__4679__auto__);
var G__76758 = (0);
seq__76720 = G__76755;
chunk__76721 = G__76756;
count__76722 = G__76757;
i__76723 = G__76758;
continue;
} else {
var c = cljs.core.first.call(null,seq__76720__$1);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__76759 = cljs.core.next.call(null,seq__76720__$1);
var G__76760 = null;
var G__76761 = (0);
var G__76762 = (0);
seq__76720 = G__76759;
chunk__76721 = G__76760;
count__76722 = G__76761;
i__76723 = G__76762;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,k);

return cljs.core.deref.call(null,col);
});

ob.core.desc_transform_STAR_ = (function ob$core$desc_transform_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$desc_transform_STAR__$_gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.update.call(null,cljs.core._deref.call(null,col),k__$1,next_fn));

var seq__76728 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__76729 = null;
var count__76730 = (0);
var i__76731 = (0);
while(true){
if((i__76731 < count__76730)){
var c = cljs.core._nth.call(null,chunk__76729,i__76731);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__76763 = seq__76728;
var G__76764 = chunk__76729;
var G__76765 = count__76730;
var G__76766 = (i__76731 + (1));
seq__76728 = G__76763;
chunk__76729 = G__76764;
count__76730 = G__76765;
i__76731 = G__76766;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76728);
if(temp__5720__auto__){
var seq__76728__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76728__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76728__$1);
var G__76767 = cljs.core.chunk_rest.call(null,seq__76728__$1);
var G__76768 = c__4679__auto__;
var G__76769 = cljs.core.count.call(null,c__4679__auto__);
var G__76770 = (0);
seq__76728 = G__76767;
chunk__76729 = G__76768;
count__76730 = G__76769;
i__76731 = G__76770;
continue;
} else {
var c = cljs.core.first.call(null,seq__76728__$1);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__76771 = cljs.core.next.call(null,seq__76728__$1);
var G__76772 = null;
var G__76773 = (0);
var G__76774 = (0);
seq__76728 = G__76771;
chunk__76729 = G__76772;
count__76730 = G__76773;
i__76731 = G__76774;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,k);

return cljs.core.deref.call(null,col);
});

ob.core.desc = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core76732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core76732 = (function (k,meta76733){
this.k = k;
this.meta76733 = meta76733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core76732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76734,meta76733__$1){
var self__ = this;
var _76734__$1 = this;
return (new ob.core.t_ob$core76732(self__.k,meta76733__$1));
}));

(ob.core.t_ob$core76732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76734){
var self__ = this;
var _76734__$1 = this;
return self__.meta76733;
}));

(ob.core.t_ob$core76732.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core76732.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__76739 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__76740 = null;
var count__76741 = (0);
var i__76742 = (0);
while(true){
if((i__76742 < count__76741)){
var c = cljs.core._nth.call(null,chunk__76740,i__76742);
ob$core$gather.call(null,c);


var G__76775 = seq__76739;
var G__76776 = chunk__76740;
var G__76777 = count__76741;
var G__76778 = (i__76742 + (1));
seq__76739 = G__76775;
chunk__76740 = G__76776;
count__76741 = G__76777;
i__76742 = G__76778;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76739);
if(temp__5720__auto__){
var seq__76739__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76739__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76739__$1);
var G__76779 = cljs.core.chunk_rest.call(null,seq__76739__$1);
var G__76780 = c__4679__auto__;
var G__76781 = cljs.core.count.call(null,c__4679__auto__);
var G__76782 = (0);
seq__76739 = G__76779;
chunk__76740 = G__76780;
count__76741 = G__76781;
i__76742 = G__76782;
continue;
} else {
var c = cljs.core.first.call(null,seq__76739__$1);
ob$core$gather.call(null,c);


var G__76783 = cljs.core.next.call(null,seq__76739__$1);
var G__76784 = null;
var G__76785 = (0);
var G__76786 = (0);
seq__76739 = G__76783;
chunk__76740 = G__76784;
count__76741 = G__76785;
i__76742 = G__76786;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,self__.k);

return cljs.core.deref.call(null,col);
}));

(ob.core.t_ob$core76732.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.update.call(null,cljs.core._deref.call(null,col),k__$1,next_fn));

var seq__76747 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__76748 = null;
var count__76749 = (0);
var i__76750 = (0);
while(true){
if((i__76750 < count__76749)){
var c = cljs.core._nth.call(null,chunk__76748,i__76750);
ob$core$gather.call(null,c);


var G__76787 = seq__76747;
var G__76788 = chunk__76748;
var G__76789 = count__76749;
var G__76790 = (i__76750 + (1));
seq__76747 = G__76787;
chunk__76748 = G__76788;
count__76749 = G__76789;
i__76750 = G__76790;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76747);
if(temp__5720__auto__){
var seq__76747__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76747__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76747__$1);
var G__76791 = cljs.core.chunk_rest.call(null,seq__76747__$1);
var G__76792 = c__4679__auto__;
var G__76793 = cljs.core.count.call(null,c__4679__auto__);
var G__76794 = (0);
seq__76747 = G__76791;
chunk__76748 = G__76792;
count__76749 = G__76793;
i__76750 = G__76794;
continue;
} else {
var c = cljs.core.first.call(null,seq__76747__$1);
ob$core$gather.call(null,c);


var G__76795 = cljs.core.next.call(null,seq__76747__$1);
var G__76796 = null;
var G__76797 = (0);
var G__76798 = (0);
seq__76747 = G__76795;
chunk__76748 = G__76796;
count__76749 = G__76797;
i__76750 = G__76798;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,self__.k);

return cljs.core.deref.call(null,col);
}));

(ob.core.t_ob$core76732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta76733","meta76733",-726117109,null)], null);
}));

(ob.core.t_ob$core76732.cljs$lang$type = true);

(ob.core.t_ob$core76732.cljs$lang$ctorStr = "ob.core/t_ob$core76732");

(ob.core.t_ob$core76732.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core76732");
}));

/**
 * Positional factory function for ob.core/t_ob$core76732.
 */
ob.core.__GT_t_ob$core76732 = (function ob$core$__GT_t_ob$core76732(k__$1,meta76733){
return (new ob.core.t_ob$core76732(k__$1,meta76733));
});

}

return (new ob.core.t_ob$core76732(k,null));
}));
ob.core.paren__GT_db = (function ob$core$paren__GT_db(parent_id,text,tag){
var id = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bracket",tag,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-bracket"].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177),text], null)]);
});
ob.core.ast__GT_db = (function ob$core$ast__GT_db(var_args){
var G__76801 = arguments.length;
switch (G__76801) {
case 1:
return ob.core.ast__GT_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ob.core.ast__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.ast__GT_db.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return ob.core.ast__GT_db.call(null,ast,new cljs.core.Keyword(null,"root","root",-448657453));
}));

(ob.core.ast__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (ast,id){
var sel = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76802;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76803 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_DESC,new cljs.core.Var(function(){return ob.core.AST_DESC;},new cljs.core.Symbol("ob.core","AST-DESC","ob.core/AST-DESC",-1179528306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),"src/ob/core.cljs",14,1,422,422,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_DESC)?ob.core.AST_DESC.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__76799_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__76799_SHARP_);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__76799#","p1__76799#",1940874471,null)], null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"p1__76799#","p1__76799#",1940874471,null))))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__76799#","p1__76799#",1940874471,null)], null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"p1__76799#","p1__76799#",1940874471,null)))], null),new cljs.core.Symbol(null,"AST-DESC","AST-DESC",596269224,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__76799#","p1__76799#",1940874471,null)], null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"p1__76799#","p1__76799#",1940874471,null)))], null));
ob.core.pathcache76802 = info76803;

return info76803;
})():info__17671__auto__);
var precompiled76804 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76804.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.AST_DESC,(function (p1__76799_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__76799_SHARP_);
})], null),ob.core.AST_DESC,(function (p1__76799_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__76799_SHARP_);
})], null));
} else {
return precompiled76804;
}
})(),ast);
var iter__4652__auto__ = (function ob$core$iter__76805(s__76806){
return (new cljs.core.LazySeq(null,(function (){
var s__76806__$1 = s__76806;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__76806__$1);
if(temp__5720__auto__){
var s__76806__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__76806__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__76806__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__76808 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__76807 = (0);
while(true){
if((i__76807 < size__4651__auto__)){
var map__76809 = cljs.core._nth.call(null,c__4650__auto__,i__76807);
var map__76809__$1 = cljs.core.__destructure_map.call(null,map__76809);
var id__$1 = cljs.core.get.call(null,map__76809__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__76809__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var name = cljs.core.get.call(null,map__76809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var parens = cljs.core.get.call(null,map__76809__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var parent_id = cljs.core.get.call(null,map__76809__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var child_ids = cljs.core.get.call(null,map__76809__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
cljs.core.chunk_append.call(null,b__76808,(function (){var vec__76810 = (function (){var temp__5720__auto____$1 = parens;
if(cljs.core.truth_(temp__5720__auto____$1)){
var vec__76813 = temp__5720__auto____$1;
var op__$1 = cljs.core.nth.call(null,vec__76813,(0),null);
var cl = cljs.core.nth.call(null,vec__76813,(1),null);
var op_paren = ob.core.paren__GT_db.call(null,id__$1,op__$1,"opening");
var cl_paren = ob.core.paren__GT_db.call(null,id__$1,cl,"closing");
var parens__$1 = cljs.core.merge.call(null,op_paren,cl_paren);
var ids = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76816;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76817 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(749),(752),cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null));
ob.core.pathcache76816 = info76817;

return info76817;
})():info__17671__auto__);
var precompiled76818 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76818.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null),com.rpl.specter.MAP_KEYS], null));
} else {
return precompiled76818;
}
})(),parens__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ids,parens__$1], null);
} else {
return null;
}
})();
var paren_ids = cljs.core.nth.call(null,vec__76810,(0),null);
var parens__$1 = cljs.core.nth.call(null,vec__76810,(1),null);
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"children","children",-940561982),child_ids], null),(cljs.core.truth_(paren_ids)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parens","parens",1028661830),paren_ids], null):null))]),(cljs.core.truth_(parens__$1)?parens__$1:null));
})());

var G__76830 = (i__76807 + (1));
i__76807 = G__76830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76808),ob$core$iter__76805.call(null,cljs.core.chunk_rest.call(null,s__76806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76808),null);
}
} else {
var map__76819 = cljs.core.first.call(null,s__76806__$2);
var map__76819__$1 = cljs.core.__destructure_map.call(null,map__76819);
var id__$1 = cljs.core.get.call(null,map__76819__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__76819__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var name = cljs.core.get.call(null,map__76819__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var parens = cljs.core.get.call(null,map__76819__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
var parent_id = cljs.core.get.call(null,map__76819__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var child_ids = cljs.core.get.call(null,map__76819__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
return cljs.core.cons.call(null,(function (){var vec__76820 = (function (){var temp__5720__auto____$1 = parens;
if(cljs.core.truth_(temp__5720__auto____$1)){
var vec__76823 = temp__5720__auto____$1;
var op__$1 = cljs.core.nth.call(null,vec__76823,(0),null);
var cl = cljs.core.nth.call(null,vec__76823,(1),null);
var op_paren = ob.core.paren__GT_db.call(null,id__$1,op__$1,"opening");
var cl_paren = ob.core.paren__GT_db.call(null,id__$1,cl,"closing");
var parens__$1 = cljs.core.merge.call(null,op_paren,cl_paren);
var ids = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76826;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76827 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_KEYS,new cljs.core.Var(function(){return com.rpl.specter.MAP_KEYS;},new cljs.core.Symbol("com.rpl.specter","MAP-KEYS","com.rpl.specter/MAP-KEYS",1836105902,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-KEYS","MAP-KEYS",419592775,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(749),(752),cljs.core.List.EMPTY,"Navigate to each key of the map. This is more efficient than\n          navigating via [ALL FIRST]",(cljs.core.truth_(com.rpl.specter.MAP_KEYS)?com.rpl.specter.MAP_KEYS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null),new cljs.core.Symbol("s","MAP-KEYS","s/MAP-KEYS",419593172,null)], null));
ob.core.pathcache76826 = info76827;

return info76827;
})():info__17671__auto__);
var precompiled76828 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76828.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_KEYS], null),com.rpl.specter.MAP_KEYS], null));
} else {
return precompiled76828;
}
})(),parens__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ids,parens__$1], null);
} else {
return null;
}
})();
var paren_ids = cljs.core.nth.call(null,vec__76820,(0),null);
var parens__$1 = cljs.core.nth.call(null,vec__76820,(1),null);
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([id__$1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"children","children",-940561982),child_ids], null),(cljs.core.truth_(paren_ids)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parens","parens",1028661830),paren_ids], null):null))]),(cljs.core.truth_(parens__$1)?parens__$1:null));
})(),ob$core$iter__76805.call(null,cljs.core.rest.call(null,s__76806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,sel);
}));

(ob.core.ast__GT_db.cljs$lang$maxFixedArity = 2);

ob.core.temp = (function ob$core$temp(db){
var ast = ob.utils.walk_ids.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),(1),new cljs.core.Symbol(null,"z","z",851004344,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),true,(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))))))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),(3),(4),(5)))], null),new cljs.core.Symbol(null,"y","y",-117328249,null)));
var data = ob.core.ast__GT_db.call(null,ob.analyzer.analyze.call(null,ast,cljs.core.PersistentArrayMap.EMPTY));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ast));

return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76831;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76832 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982)], null)], null));
ob.core.pathcache76831 = info76832;

return info76832;
})():info__17671__auto__);
var precompiled76833 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76833.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982)], null)], null));
} else {
return precompiled76833;
}
})(),(function (c){
return cljs.core.conj.call(null,c,id);
}),cljs.core.apply.call(null,cljs.core.merge,db,data));
});
ob.core.render_ids = (function ob$core$render_ids(var_args){
var G__76835 = arguments.length;
switch (G__76835) {
case 2:
return ob.core.render_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ob.core.render_ids.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ob.core.render_ids.cljs$core$IFn$_invoke$arity$2 = (function (parent,ids){
return cljs.core.into.call(null,parent,(function (){var iter__4652__auto__ = (function ob$core$iter__76836(s__76837){
return (new cljs.core.LazySeq(null,(function (){
var s__76837__$1 = s__76837;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__76837__$1);
if(temp__5720__auto__){
var s__76837__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__76837__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__76837__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__76839 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__76838 = (0);
while(true){
if((i__76838 < size__4651__auto__)){
var id = cljs.core._nth.call(null,c__4650__auto__,i__76838);
cljs.core.chunk_append.call(null,b__76839,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,id,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__76841 = (i__76838 + (1));
i__76838 = G__76841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76839),ob$core$iter__76836.call(null,cljs.core.chunk_rest.call(null,s__76837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76839),null);
}
} else {
var id = cljs.core.first.call(null,s__76837__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,id,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),ob$core$iter__76836.call(null,cljs.core.rest.call(null,s__76837__$2)));
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

(ob.core.render_ids.cljs$core$IFn$_invoke$arity$3 = (function (parent,ids,ctx){
return cljs.core.conj.call(null,ob.core.render_ids.call(null,parent,cljs.core.pop.call(null,ids)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,cljs.core.peek.call(null,ids),ctx], null));
}));

(ob.core.render_ids.cljs$lang$maxFixedArity = 3);

ob.core.render_grid = (function ob$core$render_grid(outer_el,inner_el,ids,ctx){
return cljs.core.conj.call(null,cljs.core.into.call(null,outer_el,(function (){var iter__4652__auto__ = (function ob$core$render_grid_$_iter__76842(s__76843){
return (new cljs.core.LazySeq(null,(function (){
var s__76843__$1 = s__76843;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__76843__$1);
if(temp__5720__auto__){
var s__76843__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__76843__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__76843__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__76845 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__76844 = (0);
while(true){
if((i__76844 < size__4651__auto__)){
var id = cljs.core._nth.call(null,c__4650__auto__,i__76844);
cljs.core.chunk_append.call(null,b__76845,ob.core.render_ids.call(null,inner_el,id));

var G__76846 = (i__76844 + (1));
i__76844 = G__76846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76845),ob$core$render_grid_$_iter__76842.call(null,cljs.core.chunk_rest.call(null,s__76843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76845),null);
}
} else {
var id = cljs.core.first.call(null,s__76843__$2);
return cljs.core.cons.call(null,ob.core.render_ids.call(null,inner_el,id),ob$core$render_grid_$_iter__76842.call(null,cljs.core.rest.call(null,s__76843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.pop.call(null,ids));
})()),ob.core.render_ids.call(null,inner_el,cljs.core.peek.call(null,ids),ctx));
});
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.position_children !== 'undefined')){
} else {
ob.core.position_children = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.core","position-children"),(function (p__76847,ctx){
var map__76848 = p__76847;
var map__76848__$1 = cljs.core.__destructure_map.call(null,map__76848);
var op = cljs.core.get.call(null,map__76848__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__76849,ctx){
var map__76850 = p__76849;
var map__76850__$1 = cljs.core.__destructure_map.call(null,map__76850);
var id = cljs.core.get.call(null,map__76850__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__76850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.token","div.token",-1455309558),cljs.core.PersistentArrayMap.EMPTY,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," "].join('')], null);
}));
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"root","root",-448657453),(function (p__76851,ctx){
var map__76852 = p__76851;
var map__76852__$1 = cljs.core.__destructure_map.call(null,map__76852);
var id = cljs.core.get.call(null,map__76852__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var children = cljs.core.get.call(null,map__76852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root","div.root",2120930743),cljs.core.PersistentArrayMap.EMPTY], null),(function (){var iter__4652__auto__ = (function ob$core$iter__76853(s__76854){
return (new cljs.core.LazySeq(null,(function (){
var s__76854__$1 = s__76854;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__76854__$1);
if(temp__5720__auto__){
var s__76854__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__76854__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__76854__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__76856 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__76855 = (0);
while(true){
if((i__76855 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__76855);
cljs.core.chunk_append.call(null,b__76856,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,c,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__76857 = (i__76855 + (1));
i__76855 = G__76857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76856),ob$core$iter__76853.call(null,cljs.core.chunk_rest.call(null,s__76854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76856),null);
}
} else {
var c = cljs.core.first.call(null,s__76854__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,c,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),ob$core$iter__76853.call(null,cljs.core.rest.call(null,s__76854__$2)));
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
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__76858,ctx){
var map__76859 = p__76858;
var map__76859__$1 = cljs.core.__destructure_map.call(null,map__76859);
var form = map__76859__$1;
var id = cljs.core.get.call(null,map__76859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var children = cljs.core.get.call(null,map__76859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var parens = cljs.core.get.call(null,map__76859__$1,new cljs.core.Keyword(null,"parens","parens",1028661830));
return ob.core.render_ids.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),children,ctx);
}));
ob.core.col_of_pairs = (function ob$core$col_of_pairs(children,ctx){
return ob.core.render_grid.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),cljs.core.mapv.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),children)),ctx);
});
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__76860,ctx){
var map__76861 = p__76860;
var map__76861__$1 = cljs.core.__destructure_map.call(null,map__76861);
var form = map__76861__$1;
var children = cljs.core.get.call(null,map__76861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return ob.core.col_of_pairs.call(null,children,ctx);
}));
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__76862,ctx){
var map__76863 = p__76862;
var map__76863__$1 = cljs.core.__destructure_map.call(null,map__76863);
var form = map__76863__$1;
var children = cljs.core.get.call(null,map__76863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__76864 = children;
var op = cljs.core.nth.call(null,vec__76864,(0),null);
var params = cljs.core.nth.call(null,vec__76864,(1),null);
var body = cljs.core.nth.call(null,vec__76864,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,op,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,params,null], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,body,ctx], null)], null);
}));
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__76867,ctx){
var map__76868 = p__76867;
var map__76868__$1 = cljs.core.__destructure_map.call(null,map__76868);
var form = map__76868__$1;
var children = cljs.core.get.call(null,map__76868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__76869 = children;
var seq__76870 = cljs.core.seq.call(null,vec__76869);
var first__76871 = cljs.core.first.call(null,seq__76870);
var seq__76870__$1 = cljs.core.next.call(null,seq__76870);
var op = first__76871;
var first__76871__$1 = cljs.core.first.call(null,seq__76870__$1);
var seq__76870__$2 = cljs.core.next.call(null,seq__76870__$1);
var pred = first__76871__$1;
var args = seq__76870__$2;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,op,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,pred,null], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),ob.core.render_ids.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),cljs.core.vec.call(null,args),ctx)], null)], null);
}));
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"do","do",46310725),(function (p__76872,ctx){
var map__76873 = p__76872;
var map__76873__$1 = cljs.core.__destructure_map.call(null,map__76873);
var form = map__76873__$1;
var children = cljs.core.get.call(null,map__76873__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__76874 = children;
var seq__76875 = cljs.core.seq.call(null,vec__76874);
var first__76876 = cljs.core.first.call(null,seq__76875);
var seq__76875__$1 = cljs.core.next.call(null,seq__76875);
var op = first__76876;
var args = seq__76875__$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,op,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),ob.core.render_ids.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),cljs.core.vec.call(null,args),ctx)], null)], null);
}));
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"binding-vector","binding-vector",466058868),(function (p__76877,ctx){
var map__76878 = p__76877;
var map__76878__$1 = cljs.core.__destructure_map.call(null,map__76878);
var form = map__76878__$1;
var children = cljs.core.get.call(null,map__76878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return ob.core.col_of_pairs.call(null,children,ctx);
}));
cljs.core._add_method.call(null,ob.core.position_children,new cljs.core.Keyword(null,"let","let",-1282412701),(function (p__76879,ctx){
var map__76880 = p__76879;
var map__76880__$1 = cljs.core.__destructure_map.call(null,map__76880);
var form = map__76880__$1;
var children = cljs.core.get.call(null,map__76880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__76881 = children;
var op = cljs.core.nth.call(null,vec__76881,(0),null);
var bindings = cljs.core.nth.call(null,vec__76881,(1),null);
var body = cljs.core.nth.call(null,vec__76881,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,op,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,bindings,null], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,body,ctx], null)], null)], null);
}));
ob.core.position_parens = (function ob$core$position_parens(node,ast,ctx){
var temp__5718__auto__ = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__76884 = temp__5718__auto__;
var op_paren = cljs.core.nth.call(null,vec__76884,(0),null);
var cl_paren = cljs.core.nth.call(null,vec__76884,(1),null);
var ctx__$1 = (cljs.core.truth_(ctx)?cljs.core.conj.call(null,ctx,cl_paren):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cl_paren], null));
var op_paren__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,op_paren,null], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,node,op_paren__$1),ctx__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,ctx], null);
}
});
ob.core.format_coll_body = (function ob$core$format_coll_body(node,ast,ctx){
var vec__76887 = ob.core.position_parens.call(null,node,ast,ctx);
var node__$1 = cljs.core.nth.call(null,vec__76887,(0),null);
var ctx__$1 = cljs.core.nth.call(null,vec__76887,(1),null);
var node_body = ob.core.position_children.call(null,ast,ctx__$1);
return cljs.core.conj.call(null,node__$1,node_body);
});
ob.core.format_token_body = (function ob$core$format_token_body(node,p__76890,ctx){
var map__76891 = p__76890;
var map__76891__$1 = cljs.core.__destructure_map.call(null,map__76891);
var name = cljs.core.get.call(null,map__76891__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var trailing_parens = (cljs.core.truth_(ctx)?cljs.core.map.call(null,(function (node__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,node__$1,null], null);
}),cljs.core.reverse.call(null,ctx)):null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.conj.call(null,node,name)], null),trailing_parens);
});
ob.core._render = (function ob$core$_render(ast,ctx){
var map__76892 = ast;
var map__76892__$1 = cljs.core.__destructure_map.call(null,map__76892);
var id = cljs.core.get.call(null,map__76892__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__76892__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var name = cljs.core.get.call(null,map__76892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var style = cljs.core.get.call(null,map__76892__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var props_STAR_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.conj.call(null,class$,(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))?null:"token"))], null);
var node = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),props_STAR_], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
return ob.core.format_coll_body.call(null,node,ast,ctx);
} else {
return ob.core.format_token_body.call(null,node,ast,ctx);
}
});
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.db !== 'undefined')){
} else {
ob.core.db = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
ob.core.render = (function ob$core$render(id,ctx){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return null;
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var t = reagent.dom.dom_node.call(null,this$);
return cljs.core.println.call(null,["\n=========\nUpdated ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id__$1,ctx__$1){
var form = cljs.core.deref.call(null,reagent.core.cursor.call(null,ob.core.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core._render,form,ctx__$1], null);
})], null));
});
ob.core.add_to_dom_BANG_ = (function ob$core$add_to_dom_BANG_(){
cljs.core.swap_BANG_.call(null,ob.core.db,ob.core.temp);

return null;
});
ob.core.log_history = (function ob$core$log_history(db_STAR_){
return cljs.core.assoc.call(null,db_STAR_,new cljs.core.Keyword(null,"history","history",-247395220),db_STAR_);
});
ob.core.undo_BANG_ = (function ob$core$undo_BANG_(){
cljs.core.reset_BANG_.call(null,ob.core.db,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ob.core.db)));

return null;
});
ob.core.update_db_BANG_ = (function ob$core$update_db_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76895 = arguments.length;
var i__4865__auto___76896 = (0);
while(true){
if((i__4865__auto___76896 < len__4864__auto___76895)){
args__4870__auto__.push((arguments[i__4865__auto___76896]));

var G__76897 = (i__4865__auto___76896 + (1));
i__4865__auto___76896 = G__76897;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ob.core.update_db_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ob.core.update_db_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var db_STAR_ = cljs.core.deref.call(null,ob.core.db);
var db_STAR___$1 = ob.core.log_history.call(null,db_STAR_);
var db_STAR___$2 = cljs.core.apply.call(null,f,db_STAR___$1,args);
cljs.core.reset_BANG_.call(null,ob.core.db,db_STAR___$2);

return null;
}));

(ob.core.update_db_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ob.core.update_db_BANG_.cljs$lang$applyTo = (function (seq76893){
var G__76894 = cljs.core.first.call(null,seq76893);
var seq76893__$1 = cljs.core.next.call(null,seq76893);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76894,seq76893__$1);
}));



ob.core.desc__select_STAR_ = (function ob$core$desc__select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$desc__select_STAR__$_gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__76902 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__76903 = null;
var count__76904 = (0);
var i__76905 = (0);
while(true){
if((i__76905 < count__76904)){
var c = cljs.core._nth.call(null,chunk__76903,i__76905);
ob$core$desc__select_STAR__$_gather.call(null,c);


var G__76933 = seq__76902;
var G__76934 = chunk__76903;
var G__76935 = count__76904;
var G__76936 = (i__76905 + (1));
seq__76902 = G__76933;
chunk__76903 = G__76934;
count__76904 = G__76935;
i__76905 = G__76936;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76902);
if(temp__5720__auto__){
var seq__76902__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76902__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76902__$1);
var G__76937 = cljs.core.chunk_rest.call(null,seq__76902__$1);
var G__76938 = c__4679__auto__;
var G__76939 = cljs.core.count.call(null,c__4679__auto__);
var G__76940 = (0);
seq__76902 = G__76937;
chunk__76903 = G__76938;
count__76904 = G__76939;
i__76905 = G__76940;
continue;
} else {
var c = cljs.core.first.call(null,seq__76902__$1);
ob$core$desc__select_STAR__$_gather.call(null,c);


var G__76941 = cljs.core.next.call(null,seq__76902__$1);
var G__76942 = null;
var G__76943 = (0);
var G__76944 = (0);
seq__76902 = G__76941;
chunk__76903 = G__76942;
count__76904 = G__76943;
i__76905 = G__76944;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,k);

return cljs.core.deref.call(null,col);
});

ob.core.desc__transform_STAR_ = (function ob$core$desc__transform_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$desc__transform_STAR__$_gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.update.call(null,cljs.core._deref.call(null,col),k__$1,next_fn));

var seq__76910 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__76911 = null;
var count__76912 = (0);
var i__76913 = (0);
while(true){
if((i__76913 < count__76912)){
var c = cljs.core._nth.call(null,chunk__76911,i__76913);
ob$core$desc__transform_STAR__$_gather.call(null,c);


var G__76945 = seq__76910;
var G__76946 = chunk__76911;
var G__76947 = count__76912;
var G__76948 = (i__76913 + (1));
seq__76910 = G__76945;
chunk__76911 = G__76946;
count__76912 = G__76947;
i__76913 = G__76948;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76910);
if(temp__5720__auto__){
var seq__76910__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76910__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76910__$1);
var G__76949 = cljs.core.chunk_rest.call(null,seq__76910__$1);
var G__76950 = c__4679__auto__;
var G__76951 = cljs.core.count.call(null,c__4679__auto__);
var G__76952 = (0);
seq__76910 = G__76949;
chunk__76911 = G__76950;
count__76912 = G__76951;
i__76913 = G__76952;
continue;
} else {
var c = cljs.core.first.call(null,seq__76910__$1);
ob$core$desc__transform_STAR__$_gather.call(null,c);


var G__76953 = cljs.core.next.call(null,seq__76910__$1);
var G__76954 = null;
var G__76955 = (0);
var G__76956 = (0);
seq__76910 = G__76953;
chunk__76911 = G__76954;
count__76912 = G__76955;
i__76913 = G__76956;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,k);

return cljs.core.deref.call(null,col);
});

ob.core.desc_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core76914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core76914 = (function (k,meta76915){
this.k = k;
this.meta76915 = meta76915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core76914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76916,meta76915__$1){
var self__ = this;
var _76916__$1 = this;
return (new ob.core.t_ob$core76914(self__.k,meta76915__$1));
}));

(ob.core.t_ob$core76914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76916){
var self__ = this;
var _76916__$1 = this;
return self__.meta76915;
}));

(ob.core.t_ob$core76914.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core76914.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__76921 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__76922 = null;
var count__76923 = (0);
var i__76924 = (0);
while(true){
if((i__76924 < count__76923)){
var c = cljs.core._nth.call(null,chunk__76922,i__76924);
ob$core$gather.call(null,c);


var G__76957 = seq__76921;
var G__76958 = chunk__76922;
var G__76959 = count__76923;
var G__76960 = (i__76924 + (1));
seq__76921 = G__76957;
chunk__76922 = G__76958;
count__76923 = G__76959;
i__76924 = G__76960;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76921);
if(temp__5720__auto__){
var seq__76921__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76921__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76921__$1);
var G__76961 = cljs.core.chunk_rest.call(null,seq__76921__$1);
var G__76962 = c__4679__auto__;
var G__76963 = cljs.core.count.call(null,c__4679__auto__);
var G__76964 = (0);
seq__76921 = G__76961;
chunk__76922 = G__76962;
count__76923 = G__76963;
i__76924 = G__76964;
continue;
} else {
var c = cljs.core.first.call(null,seq__76921__$1);
ob$core$gather.call(null,c);


var G__76965 = cljs.core.next.call(null,seq__76921__$1);
var G__76966 = null;
var G__76967 = (0);
var G__76968 = (0);
seq__76921 = G__76965;
chunk__76922 = G__76966;
count__76923 = G__76967;
i__76924 = G__76968;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,self__.k);

return cljs.core.deref.call(null,col);
}));

(ob.core.t_ob$core76914.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.update.call(null,cljs.core._deref.call(null,col),k__$1,next_fn));

var seq__76929 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__76930 = null;
var count__76931 = (0);
var i__76932 = (0);
while(true){
if((i__76932 < count__76931)){
var c = cljs.core._nth.call(null,chunk__76930,i__76932);
ob$core$gather.call(null,c);


var G__76969 = seq__76929;
var G__76970 = chunk__76930;
var G__76971 = count__76931;
var G__76972 = (i__76932 + (1));
seq__76929 = G__76969;
chunk__76930 = G__76970;
count__76931 = G__76971;
i__76932 = G__76972;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76929);
if(temp__5720__auto__){
var seq__76929__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76929__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76929__$1);
var G__76973 = cljs.core.chunk_rest.call(null,seq__76929__$1);
var G__76974 = c__4679__auto__;
var G__76975 = cljs.core.count.call(null,c__4679__auto__);
var G__76976 = (0);
seq__76929 = G__76973;
chunk__76930 = G__76974;
count__76931 = G__76975;
i__76932 = G__76976;
continue;
} else {
var c = cljs.core.first.call(null,seq__76929__$1);
ob$core$gather.call(null,c);


var G__76977 = cljs.core.next.call(null,seq__76929__$1);
var G__76978 = null;
var G__76979 = (0);
var G__76980 = (0);
seq__76929 = G__76977;
chunk__76930 = G__76978;
count__76931 = G__76979;
i__76932 = G__76980;
continue;
}
} else {
return null;
}
}
break;
}
});
gather.call(null,self__.k);

return cljs.core.deref.call(null,col);
}));

(ob.core.t_ob$core76914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta76915","meta76915",-2094359932,null)], null);
}));

(ob.core.t_ob$core76914.cljs$lang$type = true);

(ob.core.t_ob$core76914.cljs$lang$ctorStr = "ob.core/t_ob$core76914");

(ob.core.t_ob$core76914.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core76914");
}));

/**
 * Positional factory function for ob.core/t_ob$core76914.
 */
ob.core.__GT_t_ob$core76914 = (function ob$core$__GT_t_ob$core76914(k__$1,meta76915){
return (new ob.core.t_ob$core76914(k__$1,meta76915));
});

}

return (new ob.core.t_ob$core76914(k,null));
}));
ob.core.trsf = (function ob$core$trsf(db,pred_fn){
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache76981;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info76982 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.desc,new cljs.core.Var(function(){return ob.core.desc;},new cljs.core.Symbol("ob.core","desc","ob.core/desc",1690967277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"desc","desc",-560950005,null),"src/ob/core.cljs",13,1,434,434,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.desc)?ob.core.desc.cljs$lang$test:null)])),new cljs.core.Symbol(null,"desc","desc",-560950005,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Keyword(null,"root","root",-448657453))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,pred_fn,new cljs.core.Symbol(null,"pred-fn","pred-fn",335458754,null))], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"pred-fn","pred-fn",335458754,null))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"color","color",1011675173)], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-fn","pred-fn",335458754,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Keyword(null,"root","root",-448657453)),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"pred-fn","pred-fn",335458754,null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.Symbol(null,"desc","desc",-560950005,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"pred-fn","pred-fn",335458754,null)], null));
ob.core.pathcache76981 = info76982;

return info76982;
})():info__17671__auto__);
var precompiled76983 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled76983.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.desc.call(null,new cljs.core.Keyword(null,"root","root",-448657453)),com.rpl.specter.pred.call(null,pred_fn),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"color","color",1011675173)], null),ob.core.desc,com.rpl.specter.pred,pred_fn], null));
} else {
return precompiled76983;
}
})(),"red",db);
});
ob.core.code_col = (function ob$core$code_col(_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"border","border",1444987323),"solid 2px black"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,new cljs.core.Keyword(null,"root","root",-448657453),null], null)], null);
});
ob.core.main_page = (function ob$core$main_page(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-page","div#main-page",973942128),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"5000px"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"token"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Ouroboros"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.text_col,state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.code_col,state], null)], null)], null);
});
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.app_state !== 'undefined')){
} else {
ob.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
ob.core.add_scroll_events_BANG_ = (function ob$core$add_scroll_events_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76989 = arguments.length;
var i__4865__auto___76990 = (0);
while(true){
if((i__4865__auto___76990 < len__4864__auto___76989)){
args__4870__auto__.push((arguments[i__4865__auto___76990]));

var G__76991 = (i__4865__auto___76990 + (1));
i__4865__auto___76990 = G__76991;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.core.add_scroll_events_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.core.add_scroll_events_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ids){
var seq__76985 = cljs.core.seq.call(null,ids);
var chunk__76986 = null;
var count__76987 = (0);
var i__76988 = (0);
while(true){
if((i__76988 < count__76987)){
var id = cljs.core._nth.call(null,chunk__76986,i__76988);
ob.scroll.set_scroll_trigger.call(null,id,((function (seq__76985,chunk__76986,count__76987,i__76988,id){
return (function (){
return alert("Wow!");
});})(seq__76985,chunk__76986,count__76987,i__76988,id))
);


var G__76992 = seq__76985;
var G__76993 = chunk__76986;
var G__76994 = count__76987;
var G__76995 = (i__76988 + (1));
seq__76985 = G__76992;
chunk__76986 = G__76993;
count__76987 = G__76994;
i__76988 = G__76995;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__76985);
if(temp__5720__auto__){
var seq__76985__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76985__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__76985__$1);
var G__76996 = cljs.core.chunk_rest.call(null,seq__76985__$1);
var G__76997 = c__4679__auto__;
var G__76998 = cljs.core.count.call(null,c__4679__auto__);
var G__76999 = (0);
seq__76985 = G__76996;
chunk__76986 = G__76997;
count__76987 = G__76998;
i__76988 = G__76999;
continue;
} else {
var id = cljs.core.first.call(null,seq__76985__$1);
ob.scroll.set_scroll_trigger.call(null,id,((function (seq__76985,chunk__76986,count__76987,i__76988,id,seq__76985__$1,temp__5720__auto__){
return (function (){
return alert("Wow!");
});})(seq__76985,chunk__76986,count__76987,i__76988,id,seq__76985__$1,temp__5720__auto__))
);


var G__77000 = cljs.core.next.call(null,seq__76985__$1);
var G__77001 = null;
var G__77002 = (0);
var G__77003 = (0);
seq__76985 = G__77000;
chunk__76986 = G__77001;
count__76987 = G__77002;
i__76988 = G__77003;
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
(ob.core.add_scroll_events_BANG_.cljs$lang$applyTo = (function (seq76984){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76984));
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
