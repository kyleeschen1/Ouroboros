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
var vec__64680 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__64680,(0),null);
var left = cljs.core.nth.call(null,vec__64680,(1),null);
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
var seq__64684_64716 = cljs.core.seq.call(null,styles);
var chunk__64685_64717 = null;
var count__64686_64718 = (0);
var i__64687_64719 = (0);
while(true){
if((i__64687_64719 < count__64686_64718)){
var vec__64694_64720 = cljs.core._nth.call(null,chunk__64685_64717,i__64687_64719);
var k_64721 = cljs.core.nth.call(null,vec__64694_64720,(0),null);
var v_64722 = cljs.core.nth.call(null,vec__64694_64720,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_64721))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_64721,selection.selection().style(k_64721));
} else {
}

selection.style(k_64721,v_64722);


var G__64723 = seq__64684_64716;
var G__64724 = chunk__64685_64717;
var G__64725 = count__64686_64718;
var G__64726 = (i__64687_64719 + (1));
seq__64684_64716 = G__64723;
chunk__64685_64717 = G__64724;
count__64686_64718 = G__64725;
i__64687_64719 = G__64726;
continue;
} else {
var temp__5720__auto___64727 = cljs.core.seq.call(null,seq__64684_64716);
if(temp__5720__auto___64727){
var seq__64684_64728__$1 = temp__5720__auto___64727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64684_64728__$1)){
var c__4679__auto___64729 = cljs.core.chunk_first.call(null,seq__64684_64728__$1);
var G__64730 = cljs.core.chunk_rest.call(null,seq__64684_64728__$1);
var G__64731 = c__4679__auto___64729;
var G__64732 = cljs.core.count.call(null,c__4679__auto___64729);
var G__64733 = (0);
seq__64684_64716 = G__64730;
chunk__64685_64717 = G__64731;
count__64686_64718 = G__64732;
i__64687_64719 = G__64733;
continue;
} else {
var vec__64697_64734 = cljs.core.first.call(null,seq__64684_64728__$1);
var k_64735 = cljs.core.nth.call(null,vec__64697_64734,(0),null);
var v_64736 = cljs.core.nth.call(null,vec__64697_64734,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_64735))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_64735,selection.selection().style(k_64735));
} else {
}

selection.style(k_64735,v_64736);


var G__64737 = cljs.core.next.call(null,seq__64684_64728__$1);
var G__64738 = null;
var G__64739 = (0);
var G__64740 = (0);
seq__64684_64716 = G__64737;
chunk__64685_64717 = G__64738;
count__64686_64718 = G__64739;
i__64687_64719 = G__64740;
continue;
}
} else {
}
}
break;
}
} else {
var seq__64700_64741 = cljs.core.seq.call(null,styles);
var chunk__64701_64742 = null;
var count__64702_64743 = (0);
var i__64703_64744 = (0);
while(true){
if((i__64703_64744 < count__64702_64743)){
var vec__64710_64745 = cljs.core._nth.call(null,chunk__64701_64742,i__64703_64744);
var k_64746 = cljs.core.nth.call(null,vec__64710_64745,(0),null);
var __64747 = cljs.core.nth.call(null,vec__64710_64745,(1),null);
selection.style(k_64746,cljs.core.deref.call(null,coords).call(null,k_64746));


var G__64748 = seq__64700_64741;
var G__64749 = chunk__64701_64742;
var G__64750 = count__64702_64743;
var G__64751 = (i__64703_64744 + (1));
seq__64700_64741 = G__64748;
chunk__64701_64742 = G__64749;
count__64702_64743 = G__64750;
i__64703_64744 = G__64751;
continue;
} else {
var temp__5720__auto___64752 = cljs.core.seq.call(null,seq__64700_64741);
if(temp__5720__auto___64752){
var seq__64700_64753__$1 = temp__5720__auto___64752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64700_64753__$1)){
var c__4679__auto___64754 = cljs.core.chunk_first.call(null,seq__64700_64753__$1);
var G__64755 = cljs.core.chunk_rest.call(null,seq__64700_64753__$1);
var G__64756 = c__4679__auto___64754;
var G__64757 = cljs.core.count.call(null,c__4679__auto___64754);
var G__64758 = (0);
seq__64700_64741 = G__64755;
chunk__64701_64742 = G__64756;
count__64702_64743 = G__64757;
i__64703_64744 = G__64758;
continue;
} else {
var vec__64713_64759 = cljs.core.first.call(null,seq__64700_64753__$1);
var k_64760 = cljs.core.nth.call(null,vec__64713_64759,(0),null);
var __64761 = cljs.core.nth.call(null,vec__64713_64759,(1),null);
selection.style(k_64760,cljs.core.deref.call(null,coords).call(null,k_64760));


var G__64762 = cljs.core.next.call(null,seq__64700_64753__$1);
var G__64763 = null;
var G__64764 = (0);
var G__64765 = (0);
seq__64700_64741 = G__64762;
chunk__64701_64742 = G__64763;
count__64702_64743 = G__64764;
i__64703_64744 = G__64765;
continue;
}
} else {
}
}
break;
}
}
}catch (e64683){if((e64683 instanceof Error)){
var e_64766 = e64683;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e64683;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64768 = arguments.length;
var i__4865__auto___64769 = (0);
while(true){
if((i__4865__auto___64769 < len__4864__auto___64768)){
args__4870__auto__.push((arguments[i__4865__auto___64769]));

var G__64770 = (i__4865__auto___64769 + (1));
i__4865__auto___64769 = G__64770;
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
(ob.core.compose.cljs$lang$applyTo = (function (seq64767){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64767));
}));

ob.core._transition = (function ob$core$_transition(p__64773){
var map__64774 = p__64773;
var map__64774__$1 = cljs.core.__destructure_map.call(null,map__64774);
var delay = cljs.core.get.call(null,map__64774__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__64774__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__64775 = s__$1;
var G__64775__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__64775(p1__64771_SHARP_){
return p1__64771_SHARP_.delay(delay);
}):G__64775);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__64775(p1__64772_SHARP_){
return p1__64772_SHARP_.duration(duration);
});
} else {
return G__64775__$1;
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
var len__4864__auto___64782 = arguments.length;
var i__4865__auto___64783 = (0);
while(true){
if((i__4865__auto___64783 < len__4864__auto___64782)){
args__4870__auto__.push((arguments[i__4865__auto___64783]));

var G__64784 = (i__4865__auto___64783 + (1));
i__4865__auto___64783 = G__64784;
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
var seq__64778 = cljs.core.seq.call(null,fs);
var chunk__64779 = null;
var count__64780 = (0);
var i__64781 = (0);
while(true){
if((i__64781 < count__64780)){
var f__$1 = cljs.core._nth.call(null,chunk__64779,i__64781);
f__$1.call(null,sel,ff_QMARK_);


var G__64785 = seq__64778;
var G__64786 = chunk__64779;
var G__64787 = count__64780;
var G__64788 = (i__64781 + (1));
seq__64778 = G__64785;
chunk__64779 = G__64786;
count__64780 = G__64787;
i__64781 = G__64788;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__64778);
if(temp__5720__auto__){
var seq__64778__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64778__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__64778__$1);
var G__64789 = cljs.core.chunk_rest.call(null,seq__64778__$1);
var G__64790 = c__4679__auto__;
var G__64791 = cljs.core.count.call(null,c__4679__auto__);
var G__64792 = (0);
seq__64778 = G__64789;
chunk__64779 = G__64790;
count__64780 = G__64791;
i__64781 = G__64792;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__64778__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__64793 = cljs.core.next.call(null,seq__64778__$1);
var G__64794 = null;
var G__64795 = (0);
var G__64796 = (0);
seq__64778 = G__64793;
chunk__64779 = G__64794;
count__64780 = G__64795;
i__64781 = G__64796;
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
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq64776){
var G__64777 = cljs.core.first.call(null,seq64776);
var seq64776__$1 = cljs.core.next.call(null,seq64776);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64777,seq64776__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__64798 = arguments.length;
switch (G__64798) {
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
var vec__64799 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__64799,(0),null);
var l = cljs.core.nth.call(null,vec__64799,(1),null);
var w = cljs.core.nth.call(null,vec__64799,(2),null);
var h = cljs.core.nth.call(null,vec__64799,(3),null);
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
var G__64804 = arguments.length;
switch (G__64804) {
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
ob.core.nodes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"name","name",1843675177),"z"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"name","name",1843675177),"5"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"name","name",1843675177),"1"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"name","name",1843675177),"3"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"f","f",-1597136552)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"name","name",1843675177),"x"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null)]);
ob.core.process_nodes = (function ob$core$process_nodes(nodes){
var mp = reagent.core.atom.call(null,nodes);
var seq__64806_64822 = cljs.core.seq.call(null,nodes);
var chunk__64807_64823 = null;
var count__64808_64824 = (0);
var i__64809_64825 = (0);
while(true){
if((i__64809_64825 < count__64808_64824)){
var vec__64816_64826 = cljs.core._nth.call(null,chunk__64807_64823,i__64809_64825);
var k_64827 = cljs.core.nth.call(null,vec__64816_64826,(0),null);
var v_64828 = cljs.core.nth.call(null,vec__64816_64826,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(v_64828))){
var op_key_64829 = [cljs.core.name.call(null,k_64827),"-opening"].join('');
var cl_key_64830 = [cljs.core.name.call(null,k_64827),"-closing"].join('');
cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_64827,new cljs.core.Keyword(null,"opening","opening",450993708)], null),op_key_64829);

cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_64827,new cljs.core.Keyword(null,"closing","closing",-1862893890)], null),cl_key_64830);

cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc,op_key_64829,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"id","id",-1388402092),op_key_64829,new cljs.core.Keyword(null,"name","name",1843675177),"["], null));

cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc,cl_key_64830,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"closing","closing",-1862893890),new cljs.core.Keyword(null,"id","id",-1388402092),cl_key_64830,new cljs.core.Keyword(null,"name","name",1843675177),"]"], null));
} else {
}


var G__64831 = seq__64806_64822;
var G__64832 = chunk__64807_64823;
var G__64833 = count__64808_64824;
var G__64834 = (i__64809_64825 + (1));
seq__64806_64822 = G__64831;
chunk__64807_64823 = G__64832;
count__64808_64824 = G__64833;
i__64809_64825 = G__64834;
continue;
} else {
var temp__5720__auto___64835 = cljs.core.seq.call(null,seq__64806_64822);
if(temp__5720__auto___64835){
var seq__64806_64836__$1 = temp__5720__auto___64835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64806_64836__$1)){
var c__4679__auto___64837 = cljs.core.chunk_first.call(null,seq__64806_64836__$1);
var G__64838 = cljs.core.chunk_rest.call(null,seq__64806_64836__$1);
var G__64839 = c__4679__auto___64837;
var G__64840 = cljs.core.count.call(null,c__4679__auto___64837);
var G__64841 = (0);
seq__64806_64822 = G__64838;
chunk__64807_64823 = G__64839;
count__64808_64824 = G__64840;
i__64809_64825 = G__64841;
continue;
} else {
var vec__64819_64842 = cljs.core.first.call(null,seq__64806_64836__$1);
var k_64843 = cljs.core.nth.call(null,vec__64819_64842,(0),null);
var v_64844 = cljs.core.nth.call(null,vec__64819_64842,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(v_64844))){
var op_key_64845 = [cljs.core.name.call(null,k_64843),"-opening"].join('');
var cl_key_64846 = [cljs.core.name.call(null,k_64843),"-closing"].join('');
cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_64843,new cljs.core.Keyword(null,"opening","opening",450993708)], null),op_key_64845);

cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_64843,new cljs.core.Keyword(null,"closing","closing",-1862893890)], null),cl_key_64846);

cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc,op_key_64845,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"id","id",-1388402092),op_key_64845,new cljs.core.Keyword(null,"name","name",1843675177),"["], null));

cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc,cl_key_64846,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"closing","closing",-1862893890),new cljs.core.Keyword(null,"id","id",-1388402092),cl_key_64846,new cljs.core.Keyword(null,"name","name",1843675177),"]"], null));
} else {
}


var G__64847 = cljs.core.next.call(null,seq__64806_64836__$1);
var G__64848 = null;
var G__64849 = (0);
var G__64850 = (0);
seq__64806_64822 = G__64847;
chunk__64807_64823 = G__64848;
count__64808_64824 = G__64849;
i__64809_64825 = G__64850;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,mp);
});
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.nodes_STAR_ !== 'undefined')){
} else {
ob.core.nodes_STAR_ = reagent.core.atom.call(null,ob.core.process_nodes.call(null,ob.core.nodes));
}


ob.core.desc_select_STAR_ = (function ob$core$desc_select_STAR_(k,db,next_fn){
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$desc_select_STAR__$_gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__64855 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__64856 = null;
var count__64857 = (0);
var i__64858 = (0);
while(true){
if((i__64858 < count__64857)){
var c = cljs.core._nth.call(null,chunk__64856,i__64858);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__64886 = seq__64855;
var G__64887 = chunk__64856;
var G__64888 = count__64857;
var G__64889 = (i__64858 + (1));
seq__64855 = G__64886;
chunk__64856 = G__64887;
count__64857 = G__64888;
i__64858 = G__64889;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__64855);
if(temp__5720__auto__){
var seq__64855__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64855__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__64855__$1);
var G__64890 = cljs.core.chunk_rest.call(null,seq__64855__$1);
var G__64891 = c__4679__auto__;
var G__64892 = cljs.core.count.call(null,c__4679__auto__);
var G__64893 = (0);
seq__64855 = G__64890;
chunk__64856 = G__64891;
count__64857 = G__64892;
i__64858 = G__64893;
continue;
} else {
var c = cljs.core.first.call(null,seq__64855__$1);
ob$core$desc_select_STAR__$_gather.call(null,c);


var G__64894 = cljs.core.next.call(null,seq__64855__$1);
var G__64895 = null;
var G__64896 = (0);
var G__64897 = (0);
seq__64855 = G__64894;
chunk__64856 = G__64895;
count__64857 = G__64896;
i__64858 = G__64897;
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

var seq__64863 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__64864 = null;
var count__64865 = (0);
var i__64866 = (0);
while(true){
if((i__64866 < count__64865)){
var c = cljs.core._nth.call(null,chunk__64864,i__64866);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__64898 = seq__64863;
var G__64899 = chunk__64864;
var G__64900 = count__64865;
var G__64901 = (i__64866 + (1));
seq__64863 = G__64898;
chunk__64864 = G__64899;
count__64865 = G__64900;
i__64866 = G__64901;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__64863);
if(temp__5720__auto__){
var seq__64863__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64863__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__64863__$1);
var G__64902 = cljs.core.chunk_rest.call(null,seq__64863__$1);
var G__64903 = c__4679__auto__;
var G__64904 = cljs.core.count.call(null,c__4679__auto__);
var G__64905 = (0);
seq__64863 = G__64902;
chunk__64864 = G__64903;
count__64865 = G__64904;
i__64866 = G__64905;
continue;
} else {
var c = cljs.core.first.call(null,seq__64863__$1);
ob$core$desc_transform_STAR__$_gather.call(null,c);


var G__64906 = cljs.core.next.call(null,seq__64863__$1);
var G__64907 = null;
var G__64908 = (0);
var G__64909 = (0);
seq__64863 = G__64906;
chunk__64864 = G__64907;
count__64865 = G__64908;
i__64866 = G__64909;
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
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core64867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core64867 = (function (k,meta64868){
this.k = k;
this.meta64868 = meta64868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core64867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64869,meta64868__$1){
var self__ = this;
var _64869__$1 = this;
return (new ob.core.t_ob$core64867(self__.k,meta64868__$1));
}));

(ob.core.t_ob$core64867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64869){
var self__ = this;
var _64869__$1 = this;
return self__.meta64868;
}));

(ob.core.t_ob$core64867.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core64867.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.conj.call(null,cljs.core._deref.call(null,col),next_fn.call(null,k__$1.call(null,db))));

var seq__64874 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__64875 = null;
var count__64876 = (0);
var i__64877 = (0);
while(true){
if((i__64877 < count__64876)){
var c = cljs.core._nth.call(null,chunk__64875,i__64877);
ob$core$gather.call(null,c);


var G__64910 = seq__64874;
var G__64911 = chunk__64875;
var G__64912 = count__64876;
var G__64913 = (i__64877 + (1));
seq__64874 = G__64910;
chunk__64875 = G__64911;
count__64876 = G__64912;
i__64877 = G__64913;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__64874);
if(temp__5720__auto__){
var seq__64874__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64874__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__64874__$1);
var G__64914 = cljs.core.chunk_rest.call(null,seq__64874__$1);
var G__64915 = c__4679__auto__;
var G__64916 = cljs.core.count.call(null,c__4679__auto__);
var G__64917 = (0);
seq__64874 = G__64914;
chunk__64875 = G__64915;
count__64876 = G__64916;
i__64877 = G__64917;
continue;
} else {
var c = cljs.core.first.call(null,seq__64874__$1);
ob$core$gather.call(null,c);


var G__64918 = cljs.core.next.call(null,seq__64874__$1);
var G__64919 = null;
var G__64920 = (0);
var G__64921 = (0);
seq__64874 = G__64918;
chunk__64875 = G__64919;
count__64876 = G__64920;
i__64877 = G__64921;
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

(ob.core.t_ob$core64867.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,db,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var col = cljs.core.volatile_BANG_.call(null,db);
var gather = (function ob$core$gather(k__$1){
cljs.core._vreset_BANG_.call(null,col,cljs.core.update.call(null,cljs.core._deref.call(null,col),k__$1,next_fn));

var seq__64882 = cljs.core.seq.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var chunk__64883 = null;
var count__64884 = (0);
var i__64885 = (0);
while(true){
if((i__64885 < count__64884)){
var c = cljs.core._nth.call(null,chunk__64883,i__64885);
ob$core$gather.call(null,c);


var G__64922 = seq__64882;
var G__64923 = chunk__64883;
var G__64924 = count__64884;
var G__64925 = (i__64885 + (1));
seq__64882 = G__64922;
chunk__64883 = G__64923;
count__64884 = G__64924;
i__64885 = G__64925;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__64882);
if(temp__5720__auto__){
var seq__64882__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64882__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__64882__$1);
var G__64926 = cljs.core.chunk_rest.call(null,seq__64882__$1);
var G__64927 = c__4679__auto__;
var G__64928 = cljs.core.count.call(null,c__4679__auto__);
var G__64929 = (0);
seq__64882 = G__64926;
chunk__64883 = G__64927;
count__64884 = G__64928;
i__64885 = G__64929;
continue;
} else {
var c = cljs.core.first.call(null,seq__64882__$1);
ob$core$gather.call(null,c);


var G__64930 = cljs.core.next.call(null,seq__64882__$1);
var G__64931 = null;
var G__64932 = (0);
var G__64933 = (0);
seq__64882 = G__64930;
chunk__64883 = G__64931;
count__64884 = G__64932;
i__64885 = G__64933;
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

(ob.core.t_ob$core64867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta64868","meta64868",-1397114334,null)], null);
}));

(ob.core.t_ob$core64867.cljs$lang$type = true);

(ob.core.t_ob$core64867.cljs$lang$ctorStr = "ob.core/t_ob$core64867");

(ob.core.t_ob$core64867.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core64867");
}));

/**
 * Positional factory function for ob.core/t_ob$core64867.
 */
ob.core.__GT_t_ob$core64867 = (function ob$core$__GT_t_ob$core64867(k__$1,meta64868){
return (new ob.core.t_ob$core64867(k__$1,meta64868));
});

}

return (new ob.core.t_ob$core64867(k,null));
}));
ob.core.get_ast_children = (function ob$core$get_ast_children(ast){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache64934;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info64935 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache64934 = info64935;

return info64935;
})():info__17671__auto__);
var precompiled64936 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled64936.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled64936;
}
})(),ast);
} else {
return null;
}
});
ob.core.add_parens_BANG_ = (function ob$core$add_parens_BANG_(mp,p__64937){
var map__64938 = p__64937;
var map__64938__$1 = cljs.core.__destructure_map.call(null,map__64938);
var id = cljs.core.get.call(null,map__64938__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__64938__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var temp__5720__auto__ = (function (){var G__64939 = op;
var G__64939__$1 = (((G__64939 instanceof cljs.core.Keyword))?G__64939.fqn:null);
switch (G__64939__$1) {
case "vector":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);

break;
case "list":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var vec__64940 = temp__5720__auto__;
var opening = cljs.core.nth.call(null,vec__64940,(0),null);
var closing = cljs.core.nth.call(null,vec__64940,(1),null);
var op_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-opening"].join('');
var cl_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-closing"].join('');
cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"opening","opening",450993708)], null),op_key);

cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"closing","closing",-1862893890)], null),cl_key);

cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc,op_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"id","id",-1388402092),op_key,new cljs.core.Keyword(null,"name","name",1843675177),"["], null));

return cljs.core.swap_BANG_.call(null,mp,cljs.core.assoc,cl_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"closing","closing",-1862893890),new cljs.core.Keyword(null,"id","id",-1388402092),cl_key,new cljs.core.Keyword(null,"name","name",1843675177),"]"], null));
} else {
return null;
}
});
ob.core.ast__GT_db = (function ob$core$ast__GT_db(var_args){
var G__64945 = arguments.length;
switch (G__64945) {
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
return ob.core.ast__GT_db.call(null,"root");
}));

(ob.core.ast__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (ast,parent_id){
var map__64946 = ast;
var map__64946__$1 = cljs.core.__destructure_map.call(null,map__64946);
var id = cljs.core.get.call(null,map__64946__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__64946__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var child_ids = cljs.core.get.call(null,map__64946__$1,new cljs.core.Keyword(null,"child-ids","child-ids",-604525861));
var data = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,id),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,op)], null)], null),(cljs.core.truth_(child_ids)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),child_ids], null):null),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var name = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
} else {
return null;
}
})());
cljs.core.swap_BANG_.call(null,ob.core.nodes_STAR_,cljs.core.assoc,id,data);

ob.core.add_parens_BANG_.call(null,ob.core.nodes_STAR_,ast);

if(cljs.core.truth_(child_ids)){
var seq__64947 = cljs.core.seq.call(null,ob.core.get_ast_children.call(null,ast));
var chunk__64948 = null;
var count__64949 = (0);
var i__64950 = (0);
while(true){
if((i__64950 < count__64949)){
var c = cljs.core._nth.call(null,chunk__64948,i__64950);
if(cljs.core.map_QMARK_.call(null,c)){
ob.core.ast__GT_db.call(null,c,parent_id);
} else {
if(((cljs.core.seq_QMARK_.call(null,c)) || (cljs.core.vector_QMARK_.call(null,c)))){
var seq__64959_64968 = cljs.core.seq.call(null,c);
var chunk__64960_64969 = null;
var count__64961_64970 = (0);
var i__64962_64971 = (0);
while(true){
if((i__64962_64971 < count__64961_64970)){
var cs_64972 = cljs.core._nth.call(null,chunk__64960_64969,i__64962_64971);
ob.core.ast__GT_db.call(null,cs_64972,parent_id);


var G__64973 = seq__64959_64968;
var G__64974 = chunk__64960_64969;
var G__64975 = count__64961_64970;
var G__64976 = (i__64962_64971 + (1));
seq__64959_64968 = G__64973;
chunk__64960_64969 = G__64974;
count__64961_64970 = G__64975;
i__64962_64971 = G__64976;
continue;
} else {
var temp__5720__auto___64977 = cljs.core.seq.call(null,seq__64959_64968);
if(temp__5720__auto___64977){
var seq__64959_64978__$1 = temp__5720__auto___64977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64959_64978__$1)){
var c__4679__auto___64979 = cljs.core.chunk_first.call(null,seq__64959_64978__$1);
var G__64980 = cljs.core.chunk_rest.call(null,seq__64959_64978__$1);
var G__64981 = c__4679__auto___64979;
var G__64982 = cljs.core.count.call(null,c__4679__auto___64979);
var G__64983 = (0);
seq__64959_64968 = G__64980;
chunk__64960_64969 = G__64981;
count__64961_64970 = G__64982;
i__64962_64971 = G__64983;
continue;
} else {
var cs_64984 = cljs.core.first.call(null,seq__64959_64978__$1);
ob.core.ast__GT_db.call(null,cs_64984,parent_id);


var G__64985 = cljs.core.next.call(null,seq__64959_64978__$1);
var G__64986 = null;
var G__64987 = (0);
var G__64988 = (0);
seq__64959_64968 = G__64985;
chunk__64960_64969 = G__64986;
count__64961_64970 = G__64987;
i__64962_64971 = G__64988;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__64989 = seq__64947;
var G__64990 = chunk__64948;
var G__64991 = count__64949;
var G__64992 = (i__64950 + (1));
seq__64947 = G__64989;
chunk__64948 = G__64990;
count__64949 = G__64991;
i__64950 = G__64992;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__64947);
if(temp__5720__auto__){
var seq__64947__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64947__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__64947__$1);
var G__64993 = cljs.core.chunk_rest.call(null,seq__64947__$1);
var G__64994 = c__4679__auto__;
var G__64995 = cljs.core.count.call(null,c__4679__auto__);
var G__64996 = (0);
seq__64947 = G__64993;
chunk__64948 = G__64994;
count__64949 = G__64995;
i__64950 = G__64996;
continue;
} else {
var c = cljs.core.first.call(null,seq__64947__$1);
if(cljs.core.map_QMARK_.call(null,c)){
ob.core.ast__GT_db.call(null,c,parent_id);
} else {
if(((cljs.core.seq_QMARK_.call(null,c)) || (cljs.core.vector_QMARK_.call(null,c)))){
var seq__64963_64997 = cljs.core.seq.call(null,c);
var chunk__64964_64998 = null;
var count__64965_64999 = (0);
var i__64966_65000 = (0);
while(true){
if((i__64966_65000 < count__64965_64999)){
var cs_65001 = cljs.core._nth.call(null,chunk__64964_64998,i__64966_65000);
ob.core.ast__GT_db.call(null,cs_65001,parent_id);


var G__65002 = seq__64963_64997;
var G__65003 = chunk__64964_64998;
var G__65004 = count__64965_64999;
var G__65005 = (i__64966_65000 + (1));
seq__64963_64997 = G__65002;
chunk__64964_64998 = G__65003;
count__64965_64999 = G__65004;
i__64966_65000 = G__65005;
continue;
} else {
var temp__5720__auto___65006__$1 = cljs.core.seq.call(null,seq__64963_64997);
if(temp__5720__auto___65006__$1){
var seq__64963_65007__$1 = temp__5720__auto___65006__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64963_65007__$1)){
var c__4679__auto___65008 = cljs.core.chunk_first.call(null,seq__64963_65007__$1);
var G__65009 = cljs.core.chunk_rest.call(null,seq__64963_65007__$1);
var G__65010 = c__4679__auto___65008;
var G__65011 = cljs.core.count.call(null,c__4679__auto___65008);
var G__65012 = (0);
seq__64963_64997 = G__65009;
chunk__64964_64998 = G__65010;
count__64965_64999 = G__65011;
i__64966_65000 = G__65012;
continue;
} else {
var cs_65013 = cljs.core.first.call(null,seq__64963_65007__$1);
ob.core.ast__GT_db.call(null,cs_65013,parent_id);


var G__65014 = cljs.core.next.call(null,seq__64963_65007__$1);
var G__65015 = null;
var G__65016 = (0);
var G__65017 = (0);
seq__64963_64997 = G__65014;
chunk__64964_64998 = G__65015;
count__64965_64999 = G__65016;
i__64966_65000 = G__65017;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__65018 = cljs.core.next.call(null,seq__64947__$1);
var G__65019 = null;
var G__65020 = (0);
var G__65021 = (0);
seq__64947 = G__65018;
chunk__64948 = G__65019;
count__64949 = G__65020;
i__64950 = G__65021;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(ob.core.ast__GT_db.cljs$lang$maxFixedArity = 2);

ob.core.render_ids = (function ob$core$render_ids(var_args){
var G__65023 = arguments.length;
switch (G__65023) {
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
return cljs.core.into.call(null,parent,(function (){var iter__4652__auto__ = (function ob$core$iter__65024(s__65025){
return (new cljs.core.LazySeq(null,(function (){
var s__65025__$1 = s__65025;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__65025__$1);
if(temp__5720__auto__){
var s__65025__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65025__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__65025__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__65027 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__65026 = (0);
while(true){
if((i__65026 < size__4651__auto__)){
var id = cljs.core._nth.call(null,c__4650__auto__,i__65026);
cljs.core.chunk_append.call(null,b__65027,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,id,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__65029 = (i__65026 + (1));
i__65026 = G__65029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65027),ob$core$iter__65024.call(null,cljs.core.chunk_rest.call(null,s__65025__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65027),null);
}
} else {
var id = cljs.core.first.call(null,s__65025__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,id,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),ob$core$iter__65024.call(null,cljs.core.rest.call(null,s__65025__$2)));
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

if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.position_hiccup !== 'undefined')){
} else {
ob.core.position_hiccup = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ob.core","position-hiccup"),(function (p__65030,ctx){
var map__65031 = p__65030;
var map__65031__$1 = cljs.core.__destructure_map.call(null,map__65031);
var op = cljs.core.get.call(null,map__65031__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,ob.core.position_hiccup,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__65032,ctx){
var map__65033 = p__65032;
var map__65033__$1 = cljs.core.__destructure_map.call(null,map__65033);
var id = cljs.core.get.call(null,map__65033__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__65033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.token","div.token",-1455309558),cljs.core.PersistentArrayMap.EMPTY,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," "].join('')], null);
}));
cljs.core._add_method.call(null,ob.core.position_hiccup,new cljs.core.Keyword(null,"opening","opening",450993708),(function (p__65034,ctx){
var map__65035 = p__65034;
var map__65035__$1 = cljs.core.__destructure_map.call(null,map__65035);
var id = cljs.core.get.call(null,map__65035__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__65035__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opening","div.opening",-702250134),cljs.core.PersistentArrayMap.EMPTY,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," "].join('')], null);
}));
cljs.core._add_method.call(null,ob.core.position_hiccup,new cljs.core.Keyword(null,"closing","closing",-1862893890),(function (p__65036,ctx){
var map__65037 = p__65036;
var map__65037__$1 = cljs.core.__destructure_map.call(null,map__65037);
var id = cljs.core.get.call(null,map__65037__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__65037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.closing","div.closing",1462136599),cljs.core.PersistentArrayMap.EMPTY,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," "].join('')], null);
}));
ob.core.add_cl_paren_to_ctx = (function ob$core$add_cl_paren_to_ctx(ctx,cl_paren){
if(cljs.core.truth_(ctx)){
return cljs.core.conj.call(null,ctx,cl_paren);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cl_paren], null);
}
});
cljs.core._add_method.call(null,ob.core.position_hiccup,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__65038,ctx){
var map__65039 = p__65038;
var map__65039__$1 = cljs.core.__destructure_map.call(null,map__65039);
var form = map__65039__$1;
var id = cljs.core.get.call(null,map__65039__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var children = cljs.core.get.call(null,map__65039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opening = cljs.core.get.call(null,map__65039__$1,new cljs.core.Keyword(null,"opening","opening",450993708));
var closing = cljs.core.get.call(null,map__65039__$1,new cljs.core.Keyword(null,"closing","closing",-1862893890));
return ob.core.render_ids.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,opening,null], null)], null),children,ob.core.add_cl_paren_to_ctx.call(null,ctx,closing));
}));
cljs.core._add_method.call(null,ob.core.position_hiccup,new cljs.core.Keyword(null,"let","let",-1282412701),(function (p__65040,ctx){
var map__65041 = p__65040;
var map__65041__$1 = cljs.core.__destructure_map.call(null,map__65041);
var form = map__65041__$1;
var id = cljs.core.get.call(null,map__65041__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var children = cljs.core.get.call(null,map__65041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opening = cljs.core.get.call(null,map__65041__$1,new cljs.core.Keyword(null,"opening","opening",450993708));
var closing = cljs.core.get.call(null,map__65041__$1,new cljs.core.Keyword(null,"closing","closing",-1862893890));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,opening,null], null),ob.core.render_ids.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),children,ob.core.add_cl_paren_to_ctx.call(null,ctx,closing))], null);
}));
ob.core.TEMP = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,ob.core.TEMP,(function (){var info__17671__auto__ = ob.core.pathcache65042;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65043 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.FIRST,new cljs.core.Var(function(){return com.rpl.specter.FIRST;},new cljs.core.Symbol("com.rpl.specter","FIRST","com.rpl.specter/FIRST",-708086062,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(8),(1),(771),(774),cljs.core.List.EMPTY,"Navigate to the first element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.FIRST)?com.rpl.specter.FIRST.cljs$lang$test:null)])),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null),new cljs.core.Symbol("s","FIRST","s/FIRST",1484623276,null)], null));
ob.core.pathcache65042 = info65043;

return info65043;
})():info__17671__auto__);
var precompiled65044 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65044.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.FIRST,com.rpl.specter.FIRST], null),com.rpl.specter.FIRST,com.rpl.specter.FIRST], null));
} else {
return precompiled65044;
}
})());
ob.core.WALK_ALL = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache65045;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65046 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache65045 = info65046;

return info65046;
})():info__17671__auto__);
var precompiled65047 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65047.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.coll_QMARK_,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled65047;
}
})());

return p;
})();
ob.core.AST_WALK = com.rpl.specter.cond_path.call(null,cljs.core.map_QMARK_,com.rpl.specter.STAY,cljs.core.vector_QMARK_,com.rpl.specter.ALL,com.rpl.specter.STAY);


ob.core.AST_CHILDREN_select_STAR_ = (function ob$core$AST_CHILDREN_select_STAR_(ast,next_fn){
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache65048;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65049 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache65048 = info65049;

return info65049;
})():info__17671__auto__);
var precompiled65050 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65050.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled65050;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache65051;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65052 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,580,580,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache65051 = info65052;

return info65052;
})():info__17671__auto__);
var precompiled65053 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65053.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled65053;
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
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache65054;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65055 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,580,580,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache65054 = info65055;

return info65055;
})():info__17671__auto__);
var precompiled65056 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65056.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled65056;
}
})(),next_fn,ast);
} else {
return null;
}
});

ob.core.AST_CHILDREN = (function (){
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.t_ob$core65057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
ob.core.t_ob$core65057 = (function (meta65058){
this.meta65058 = meta65058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(ob.core.t_ob$core65057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65059,meta65058__$1){
var self__ = this;
var _65059__$1 = this;
return (new ob.core.t_ob$core65057(meta65058__$1));
}));

(ob.core.t_ob$core65057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65059){
var self__ = this;
var _65059__$1 = this;
return self__.meta65058;
}));

(ob.core.t_ob$core65057.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(ob.core.t_ob$core65057.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,ast,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
var s = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache65060;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65061 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)], null));
ob.core.pathcache65060 = info65061;

return info65061;
})():info__17671__auto__);
var precompiled65062 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65062.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS], null));
} else {
return precompiled65062;
}
})(),ast);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache65063;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65064 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,580,580,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache65063 = info65064;

return info65064;
})():info__17671__auto__);
var precompiled65065 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65065.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,ob.core.AST_WALK], null),com.rpl.specter.ALL,ob.core.AST_WALK], null));
} else {
return precompiled65065;
}
})(),next_fn,s);
} else {
return null;
}
}));

(ob.core.t_ob$core65057.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16821__auto__,vals__16822__auto__,ast,next_fn__16823__auto__){
var self__ = this;
var this__16821__auto____$1 = this;
var next_fn = (function (s__16824__auto__){
return next_fn__16823__auto__.call(null,vals__16822__auto__,s__16824__auto__);
});
var temp__5720__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5720__auto__)){
var ks = temp__5720__auto__;
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache65066;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65067 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.submap,new cljs.core.Var(function(){return com.rpl.specter.submap;},new cljs.core.Symbol("com.rpl.specter","submap","com.rpl.specter/submap",-146720053,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"submap","submap",1676729506,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(9),(1),(901),(905),cljs.core.List.EMPTY,"Navigates to the specified submap (using select-keys).\n          In a transform, that submap in the original map is changed to the new\n          value of the submap.",(cljs.core.truth_(com.rpl.specter.submap)?com.rpl.specter.submap.cljs$lang$test:null)])),new cljs.core.Symbol("s","submap","s/submap",1676729361,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ks,new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null),cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_WALK,new cljs.core.Var(function(){return ob.core.AST_WALK;},new cljs.core.Symbol("ob.core","AST-WALK","ob.core/AST-WALK",-1255611666,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null),"src/ob/core.cljs",14,1,580,580,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_WALK)?ob.core.AST_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null))], null)], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null),new cljs.core.Symbol("s","submap","s/submap",1676729361,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"AST-WALK","AST-WALK",-538483448,null)], null));
ob.core.pathcache65066 = info65067;

return info65067;
})():info__17671__auto__);
var precompiled65068 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65068.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.submap.call(null,ks),com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null),com.rpl.specter.submap,ks,com.rpl.specter.MAP_VALS,ob.core.AST_WALK], null));
} else {
return precompiled65068;
}
})(),next_fn,ast);
} else {
return null;
}
}));

(ob.core.t_ob$core65057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta65058","meta65058",433606740,null)], null);
}));

(ob.core.t_ob$core65057.cljs$lang$type = true);

(ob.core.t_ob$core65057.cljs$lang$ctorStr = "ob.core/t_ob$core65057");

(ob.core.t_ob$core65057.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"ob.core/t_ob$core65057");
}));

/**
 * Positional factory function for ob.core/t_ob$core65057.
 */
ob.core.__GT_t_ob$core65057 = (function ob$core$__GT_t_ob$core65057(meta65058){
return (new ob.core.t_ob$core65057(meta65058));
});

}

return (new ob.core.t_ob$core65057(null));
})()
;
ob.core.AST_PRE_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache65069;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65070 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,589,589,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache65069 = info65070;

return info65070;
})():info__17671__auto__);
var precompiled65071 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65071.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.stay_then_continue,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled65071;
}
})());

return p;
})();
ob.core.AST_POST_WALK = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__17671__auto__ = ob.core.pathcache65072;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65073 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,ob.core.AST_CHILDREN,new cljs.core.Var(function(){return ob.core.AST_CHILDREN;},new cljs.core.Symbol("ob.core","AST-CHILDREN","ob.core/AST-CHILDREN",562653724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ob.core","ob.core",-1688005122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),"src/ob/core.cljs",21,1,589,589,cljs.core.List.EMPTY,null,(cljs.core.truth_(ob.core.AST_CHILDREN)?ob.core.AST_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"ob.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol(null,"AST-CHILDREN","AST-CHILDREN",-1169955534,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
ob.core.pathcache65072 = info65073;

return info65073;
})():info__17671__auto__);
var precompiled65074 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65074.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,ob.core.AST_CHILDREN,p)], null),com.rpl.specter.continue_then_stay,ob.core.AST_CHILDREN,p,com.rpl.specter.STAY], null));
} else {
return precompiled65074;
}
})());

return p;
})();
ob.core.AST_DESC = ob.core.AST_POST_WALK;
ob.core.lastmost_leaf_QMARK_ = (function ob$core$lastmost_leaf_QMARK_(node,ctx){
return cljs.core.not.call(null,(function (){var or__4253__auto__ = cljs.core.empty_QMARK_.call(null,ctx);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
}
})());
});
ob.core.apply_ctx = (function ob$core$apply_ctx(node,ctx){
if(ob.core.lastmost_leaf_QMARK_.call(null,node,ctx)){
return ob.core.render_ids.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),node], null),ctx);
} else {
return node;
}
});
ob.core.add_props = (function ob$core$add_props(node,ast){
var map__65076 = ast;
var map__65076__$1 = cljs.core.__destructure_map.call(null,map__65076);
var id = cljs.core.get.call(null,map__65076__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var classes = cljs.core.get.call(null,map__65076__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var props_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jowls"], null)], null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__17671__auto__ = ob.core.pathcache65077;
var info__17671__auto____$1 = (((info__17671__auto__ == null))?(function (){var info65078 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),"ob.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null));
ob.core.pathcache65077 = info65078;

return info65078;
})():info__17671__auto__);
var precompiled65079 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__17671__auto____$1);
var dynamic_QMARK___17672__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__17671__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___17672__auto__)){
return precompiled65079.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null));
} else {
return precompiled65079;
}
})(),(function (p1__65075_SHARP_){
return cljs.core.merge.call(null,p1__65075_SHARP_,props_STAR_);
}),node);
});
ob.core._render = (function ob$core$_render(ast,ctx){
return ob.core.apply_ctx.call(null,ob.core.add_props.call(null,ob.core.position_hiccup.call(null,ast,ctx),ast),ctx);
});
ob.core.render = (function ob$core$render(id,ctx){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return cljs.core.println.call(null,["Mounted ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var t = reagent.dom.dom_node.call(null,this$);
cljs.core.println.call(null,["\n=========\nUpdated ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));

cljs.core.println.call(null,t.getBoundingClientRect().width);

return cljs.core.println.call(null,old_argv);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id__$1,ctx__$1){
var form = cljs.core.deref.call(null,reagent.core.cursor.call(null,ob.core.nodes_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core._render,form,ctx__$1], null);
})], null));
});
ob.core.main_page = (function ob$core$main_page(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-page","div#main-page",973942128),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"5000px"], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Ouroboros"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.text_col,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.render,new cljs.core.Keyword(null,"a","a",-2123407586),null], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ob.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ob.core.code_col,state], null)], null)], null);
});
if((typeof ob !== 'undefined') && (typeof ob.core !== 'undefined') && (typeof ob.core.app_state !== 'undefined')){
} else {
ob.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
ob.core.add_scroll_events_BANG_ = (function ob$core$add_scroll_events_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65085 = arguments.length;
var i__4865__auto___65086 = (0);
while(true){
if((i__4865__auto___65086 < len__4864__auto___65085)){
args__4870__auto__.push((arguments[i__4865__auto___65086]));

var G__65087 = (i__4865__auto___65086 + (1));
i__4865__auto___65086 = G__65087;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.core.add_scroll_events_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.core.add_scroll_events_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ids){
var seq__65081 = cljs.core.seq.call(null,ids);
var chunk__65082 = null;
var count__65083 = (0);
var i__65084 = (0);
while(true){
if((i__65084 < count__65083)){
var id = cljs.core._nth.call(null,chunk__65082,i__65084);
ob.scroll.set_scroll_trigger.call(null,id,((function (seq__65081,chunk__65082,count__65083,i__65084,id){
return (function (){
return alert("Wow!");
});})(seq__65081,chunk__65082,count__65083,i__65084,id))
);


var G__65088 = seq__65081;
var G__65089 = chunk__65082;
var G__65090 = count__65083;
var G__65091 = (i__65084 + (1));
seq__65081 = G__65088;
chunk__65082 = G__65089;
count__65083 = G__65090;
i__65084 = G__65091;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__65081);
if(temp__5720__auto__){
var seq__65081__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65081__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__65081__$1);
var G__65092 = cljs.core.chunk_rest.call(null,seq__65081__$1);
var G__65093 = c__4679__auto__;
var G__65094 = cljs.core.count.call(null,c__4679__auto__);
var G__65095 = (0);
seq__65081 = G__65092;
chunk__65082 = G__65093;
count__65083 = G__65094;
i__65084 = G__65095;
continue;
} else {
var id = cljs.core.first.call(null,seq__65081__$1);
ob.scroll.set_scroll_trigger.call(null,id,((function (seq__65081,chunk__65082,count__65083,i__65084,id,seq__65081__$1,temp__5720__auto__){
return (function (){
return alert("Wow!");
});})(seq__65081,chunk__65082,count__65083,i__65084,id,seq__65081__$1,temp__5720__auto__))
);


var G__65096 = cljs.core.next.call(null,seq__65081__$1);
var G__65097 = null;
var G__65098 = (0);
var G__65099 = (0);
seq__65081 = G__65096;
chunk__65082 = G__65097;
count__65083 = G__65098;
i__65084 = G__65099;
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
(ob.core.add_scroll_events_BANG_.cljs$lang$applyTo = (function (seq65080){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65080));
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
