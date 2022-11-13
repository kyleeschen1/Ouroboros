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
var vec__49634 = ob.core.get_pos.call(null,original_selection.node());
var top = cljs.core.nth.call(null,vec__49634,(0),null);
var left = cljs.core.nth.call(null,vec__49634,(1),null);
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
var seq__49638_49670 = cljs.core.seq.call(null,styles);
var chunk__49639_49671 = null;
var count__49640_49672 = (0);
var i__49641_49673 = (0);
while(true){
if((i__49641_49673 < count__49640_49672)){
var vec__49648_49674 = cljs.core._nth.call(null,chunk__49639_49671,i__49641_49673);
var k_49675 = cljs.core.nth.call(null,vec__49648_49674,(0),null);
var v_49676 = cljs.core.nth.call(null,vec__49648_49674,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_49675))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_49675,selection.selection().style(k_49675));
} else {
}

selection.style(k_49675,v_49676);


var G__49677 = seq__49638_49670;
var G__49678 = chunk__49639_49671;
var G__49679 = count__49640_49672;
var G__49680 = (i__49641_49673 + (1));
seq__49638_49670 = G__49677;
chunk__49639_49671 = G__49678;
count__49640_49672 = G__49679;
i__49641_49673 = G__49680;
continue;
} else {
var temp__5720__auto___49681 = cljs.core.seq.call(null,seq__49638_49670);
if(temp__5720__auto___49681){
var seq__49638_49682__$1 = temp__5720__auto___49681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49638_49682__$1)){
var c__4679__auto___49683 = cljs.core.chunk_first.call(null,seq__49638_49682__$1);
var G__49684 = cljs.core.chunk_rest.call(null,seq__49638_49682__$1);
var G__49685 = c__4679__auto___49683;
var G__49686 = cljs.core.count.call(null,c__4679__auto___49683);
var G__49687 = (0);
seq__49638_49670 = G__49684;
chunk__49639_49671 = G__49685;
count__49640_49672 = G__49686;
i__49641_49673 = G__49687;
continue;
} else {
var vec__49651_49688 = cljs.core.first.call(null,seq__49638_49682__$1);
var k_49689 = cljs.core.nth.call(null,vec__49651_49688,(0),null);
var v_49690 = cljs.core.nth.call(null,vec__49651_49688,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["top",null,"left",null], null), null).call(null,k_49689))){
cljs.core.swap_BANG_.call(null,coords,cljs.core.assoc,k_49689,selection.selection().style(k_49689));
} else {
}

selection.style(k_49689,v_49690);


var G__49691 = cljs.core.next.call(null,seq__49638_49682__$1);
var G__49692 = null;
var G__49693 = (0);
var G__49694 = (0);
seq__49638_49670 = G__49691;
chunk__49639_49671 = G__49692;
count__49640_49672 = G__49693;
i__49641_49673 = G__49694;
continue;
}
} else {
}
}
break;
}
} else {
var seq__49654_49695 = cljs.core.seq.call(null,styles);
var chunk__49655_49696 = null;
var count__49656_49697 = (0);
var i__49657_49698 = (0);
while(true){
if((i__49657_49698 < count__49656_49697)){
var vec__49664_49699 = cljs.core._nth.call(null,chunk__49655_49696,i__49657_49698);
var k_49700 = cljs.core.nth.call(null,vec__49664_49699,(0),null);
var __49701 = cljs.core.nth.call(null,vec__49664_49699,(1),null);
selection.style(k_49700,cljs.core.deref.call(null,coords).call(null,k_49700));


var G__49702 = seq__49654_49695;
var G__49703 = chunk__49655_49696;
var G__49704 = count__49656_49697;
var G__49705 = (i__49657_49698 + (1));
seq__49654_49695 = G__49702;
chunk__49655_49696 = G__49703;
count__49656_49697 = G__49704;
i__49657_49698 = G__49705;
continue;
} else {
var temp__5720__auto___49706 = cljs.core.seq.call(null,seq__49654_49695);
if(temp__5720__auto___49706){
var seq__49654_49707__$1 = temp__5720__auto___49706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49654_49707__$1)){
var c__4679__auto___49708 = cljs.core.chunk_first.call(null,seq__49654_49707__$1);
var G__49709 = cljs.core.chunk_rest.call(null,seq__49654_49707__$1);
var G__49710 = c__4679__auto___49708;
var G__49711 = cljs.core.count.call(null,c__4679__auto___49708);
var G__49712 = (0);
seq__49654_49695 = G__49709;
chunk__49655_49696 = G__49710;
count__49656_49697 = G__49711;
i__49657_49698 = G__49712;
continue;
} else {
var vec__49667_49713 = cljs.core.first.call(null,seq__49654_49707__$1);
var k_49714 = cljs.core.nth.call(null,vec__49667_49713,(0),null);
var __49715 = cljs.core.nth.call(null,vec__49667_49713,(1),null);
selection.style(k_49714,cljs.core.deref.call(null,coords).call(null,k_49714));


var G__49716 = cljs.core.next.call(null,seq__49654_49707__$1);
var G__49717 = null;
var G__49718 = (0);
var G__49719 = (0);
seq__49654_49695 = G__49716;
chunk__49655_49696 = G__49717;
count__49656_49697 = G__49718;
i__49657_49698 = G__49719;
continue;
}
} else {
}
}
break;
}
}
}catch (e49637){if((e49637 instanceof Error)){
var e_49720 = e49637;
cljs.core.println.call(null,selection);

cljs.core.println.call(null,ff_QMARK_);
} else {
throw e49637;

}
}
return selection;
});
});
ob.core.compose = (function ob$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49722 = arguments.length;
var i__4865__auto___49723 = (0);
while(true){
if((i__4865__auto___49723 < len__4864__auto___49722)){
args__4870__auto__.push((arguments[i__4865__auto___49723]));

var G__49724 = (i__4865__auto___49723 + (1));
i__4865__auto___49723 = G__49724;
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
(ob.core.compose.cljs$lang$applyTo = (function (seq49721){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49721));
}));

ob.core._transition = (function ob$core$_transition(p__49727){
var map__49728 = p__49727;
var map__49728__$1 = cljs.core.__destructure_map.call(null,map__49728);
var delay = cljs.core.get.call(null,map__49728__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var duration = cljs.core.get.call(null,map__49728__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (function ob$core$_transition_$_trs(s){
var s__$1 = s.transition();
var G__49729 = s__$1;
var G__49729__$1 = (cljs.core.truth_(delay)?(function ob$core$_transition_$_trs_$_G__49729(p1__49725_SHARP_){
return p1__49725_SHARP_.delay(delay);
}):G__49729);
if(cljs.core.truth_(duration)){
return (function ob$core$_transition_$_trs_$_G__49729(p1__49726_SHARP_){
return p1__49726_SHARP_.duration(duration);
});
} else {
return G__49729__$1;
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
var len__4864__auto___49736 = arguments.length;
var i__4865__auto___49737 = (0);
while(true){
if((i__4865__auto___49737 < len__4864__auto___49736)){
args__4870__auto__.push((arguments[i__4865__auto___49737]));

var G__49738 = (i__4865__auto___49737 + (1));
i__4865__auto___49737 = G__49738;
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
var seq__49732 = cljs.core.seq.call(null,fs);
var chunk__49733 = null;
var count__49734 = (0);
var i__49735 = (0);
while(true){
if((i__49735 < count__49734)){
var f__$1 = cljs.core._nth.call(null,chunk__49733,i__49735);
f__$1.call(null,sel,ff_QMARK_);


var G__49739 = seq__49732;
var G__49740 = chunk__49733;
var G__49741 = count__49734;
var G__49742 = (i__49735 + (1));
seq__49732 = G__49739;
chunk__49733 = G__49740;
count__49734 = G__49741;
i__49735 = G__49742;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__49732);
if(temp__5720__auto__){
var seq__49732__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49732__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__49732__$1);
var G__49743 = cljs.core.chunk_rest.call(null,seq__49732__$1);
var G__49744 = c__4679__auto__;
var G__49745 = cljs.core.count.call(null,c__4679__auto__);
var G__49746 = (0);
seq__49732 = G__49743;
chunk__49733 = G__49744;
count__49734 = G__49745;
i__49735 = G__49746;
continue;
} else {
var f__$1 = cljs.core.first.call(null,seq__49732__$1);
f__$1.call(null,sel,ff_QMARK_);


var G__49747 = cljs.core.next.call(null,seq__49732__$1);
var G__49748 = null;
var G__49749 = (0);
var G__49750 = (0);
seq__49732 = G__49747;
chunk__49733 = G__49748;
count__49734 = G__49749;
i__49735 = G__49750;
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
(ob.core._BAR__BAR_.cljs$lang$applyTo = (function (seq49730){
var G__49731 = cljs.core.first.call(null,seq49730);
var seq49730__$1 = cljs.core.next.call(null,seq49730);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49731,seq49730__$1);
}));

ob.core.shrink = ob.core.gen_style_trsf.call(null,new cljs.core.PersistentArrayMap(null, 5, ["padding-top","0px","padding-bottom","0px","padding-left","0px","padding-right","0px","font-size","0px"], null));
ob.core.gen_rel_collapse = (function ob$core$gen_rel_collapse(sel){
return (function (_,ff_QMARK_){
return ob.core.shrink.call(null,sel.transition().delay((cljs.core.truth_(ff_QMARK_)?(200):(- (200)))).duration((1000)),ff_QMARK_);
});
});
ob.core.make_copy = (function ob$core$make_copy(var_args){
var G__49752 = arguments.length;
switch (G__49752) {
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
var vec__49753 = ob.core.get_pos.call(null,selection.node());
var t = cljs.core.nth.call(null,vec__49753,(0),null);
var l = cljs.core.nth.call(null,vec__49753,(1),null);
var w = cljs.core.nth.call(null,vec__49753,(2),null);
var h = cljs.core.nth.call(null,vec__49753,(3),null);
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
var G__49758 = arguments.length;
switch (G__49758) {
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
var len__4864__auto___49765 = arguments.length;
var i__4865__auto___49766 = (0);
while(true){
if((i__4865__auto___49766 < len__4864__auto___49765)){
args__4870__auto__.push((arguments[i__4865__auto___49766]));

var G__49767 = (i__4865__auto___49766 + (1));
i__4865__auto___49766 = G__49767;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ob.core.add_scroll_events_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ob.core.add_scroll_events_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ids){
var seq__49761 = cljs.core.seq.call(null,ids);
var chunk__49762 = null;
var count__49763 = (0);
var i__49764 = (0);
while(true){
if((i__49764 < count__49763)){
var id = cljs.core._nth.call(null,chunk__49762,i__49764);
ob.scroll.set_scroll_trigger.call(null,id,((function (seq__49761,chunk__49762,count__49763,i__49764,id){
return (function (){
return alert("Wow!");
});})(seq__49761,chunk__49762,count__49763,i__49764,id))
);


var G__49768 = seq__49761;
var G__49769 = chunk__49762;
var G__49770 = count__49763;
var G__49771 = (i__49764 + (1));
seq__49761 = G__49768;
chunk__49762 = G__49769;
count__49763 = G__49770;
i__49764 = G__49771;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__49761);
if(temp__5720__auto__){
var seq__49761__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49761__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__49761__$1);
var G__49772 = cljs.core.chunk_rest.call(null,seq__49761__$1);
var G__49773 = c__4679__auto__;
var G__49774 = cljs.core.count.call(null,c__4679__auto__);
var G__49775 = (0);
seq__49761 = G__49772;
chunk__49762 = G__49773;
count__49763 = G__49774;
i__49764 = G__49775;
continue;
} else {
var id = cljs.core.first.call(null,seq__49761__$1);
ob.scroll.set_scroll_trigger.call(null,id,((function (seq__49761,chunk__49762,count__49763,i__49764,id,seq__49761__$1,temp__5720__auto__){
return (function (){
return alert("Wow!");
});})(seq__49761,chunk__49762,count__49763,i__49764,id,seq__49761__$1,temp__5720__auto__))
);


var G__49776 = cljs.core.next.call(null,seq__49761__$1);
var G__49777 = null;
var G__49778 = (0);
var G__49779 = (0);
seq__49761 = G__49776;
chunk__49762 = G__49777;
count__49763 = G__49778;
i__49764 = G__49779;
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
(ob.core.add_scroll_events_BANG_.cljs$lang$applyTo = (function (seq49760){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49760));
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
