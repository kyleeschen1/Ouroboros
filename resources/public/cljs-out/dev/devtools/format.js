// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_19579 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._header[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,value);
} else {
var m__4549__auto__ = (devtools.format._header["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_19579.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_19580 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._has_body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,value);
} else {
var m__4549__auto__ = (devtools.format._has_body["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_19580.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_19581 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,value);
} else {
var m__4549__auto__ = (devtools.format._body["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_19581.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o19582 = temp__5718__auto__;
var temp__5718__auto____$1 = (o19582["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o19583 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o19583["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o19584 = temp__5718__auto____$2;
return (o19584["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o19585 = temp__5718__auto__;
var temp__5718__auto____$1 = (o19585["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o19586 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o19586["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o19587 = temp__5718__auto____$2;
return (o19587["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o19588 = temp__5718__auto__;
var temp__5718__auto____$1 = (o19588["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o19589 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o19589["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o19590 = temp__5718__auto____$2;
return (o19590["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o19591 = temp__5718__auto__;
var temp__5718__auto____$1 = (o19591["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o19592 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o19592["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o19593 = temp__5718__auto____$2;
return (o19593["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o19594 = temp__5718__auto__;
var temp__5718__auto____$1 = (o19594["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o19595 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o19595["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o19596 = temp__5718__auto____$2;
return (o19596["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o19597 = temp__5718__auto__;
var temp__5718__auto____$1 = (o19597["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o19598 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o19598["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o19599 = temp__5718__auto____$2;
return (o19599["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o19600 = temp__5718__auto__;
var temp__5718__auto____$1 = (o19600["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o19601 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o19601["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o19602 = temp__5718__auto____$2;
return (o19602["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19604 = arguments.length;
var i__4865__auto___19605 = (0);
while(true){
if((i__4865__auto___19605 < len__4864__auto___19604)){
args__4870__auto__.push((arguments[i__4865__auto___19605]));

var G__19606 = (i__4865__auto___19605 + (1));
i__4865__auto___19605 = G__19606;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq19603){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19603));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19608 = arguments.length;
var i__4865__auto___19609 = (0);
while(true){
if((i__4865__auto___19609 < len__4864__auto___19608)){
args__4870__auto__.push((arguments[i__4865__auto___19609]));

var G__19610 = (i__4865__auto___19609 + (1));
i__4865__auto___19609 = G__19610;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq19607){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19607));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19612 = arguments.length;
var i__4865__auto___19613 = (0);
while(true){
if((i__4865__auto___19613 < len__4864__auto___19612)){
args__4870__auto__.push((arguments[i__4865__auto___19613]));

var G__19614 = (i__4865__auto___19613 + (1));
i__4865__auto___19613 = G__19614;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq19611){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19611));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19616 = arguments.length;
var i__4865__auto___19617 = (0);
while(true){
if((i__4865__auto___19617 < len__4864__auto___19616)){
args__4870__auto__.push((arguments[i__4865__auto___19617]));

var G__19618 = (i__4865__auto___19617 + (1));
i__4865__auto___19617 = G__19618;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq19615){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19615));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19620 = arguments.length;
var i__4865__auto___19621 = (0);
while(true){
if((i__4865__auto___19621 < len__4864__auto___19620)){
args__4870__auto__.push((arguments[i__4865__auto___19621]));

var G__19622 = (i__4865__auto___19621 + (1));
i__4865__auto___19621 = G__19622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq19619){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19619));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19624 = arguments.length;
var i__4865__auto___19625 = (0);
while(true){
if((i__4865__auto___19625 < len__4864__auto___19624)){
args__4870__auto__.push((arguments[i__4865__auto___19625]));

var G__19626 = (i__4865__auto___19625 + (1));
i__4865__auto___19625 = G__19626;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq19623){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19623));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19628 = arguments.length;
var i__4865__auto___19629 = (0);
while(true){
if((i__4865__auto___19629 < len__4864__auto___19628)){
args__4870__auto__.push((arguments[i__4865__auto___19629]));

var G__19630 = (i__4865__auto___19629 + (1));
i__4865__auto___19629 = G__19630;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq19627){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19627));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19638 = arguments.length;
var i__4865__auto___19639 = (0);
while(true){
if((i__4865__auto___19639 < len__4864__auto___19638)){
args__4870__auto__.push((arguments[i__4865__auto___19639]));

var G__19640 = (i__4865__auto___19639 + (1));
i__4865__auto___19639 = G__19640;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__19634){
var vec__19635 = p__19634;
var state_override = cljs.core.nth.call(null,vec__19635,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__19631_SHARP_){
return cljs.core.merge.call(null,p1__19631_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq19632){
var G__19633 = cljs.core.first.call(null,seq19632);
var seq19632__$1 = cljs.core.next.call(null,seq19632);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19633,seq19632__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19642 = arguments.length;
var i__4865__auto___19643 = (0);
while(true){
if((i__4865__auto___19643 < len__4864__auto___19642)){
args__4870__auto__.push((arguments[i__4865__auto___19643]));

var G__19644 = (i__4865__auto___19643 + (1));
i__4865__auto___19643 = G__19644;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq19641){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19641));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19647 = arguments.length;
var i__4865__auto___19648 = (0);
while(true){
if((i__4865__auto___19648 < len__4864__auto___19647)){
args__4870__auto__.push((arguments[i__4865__auto___19648]));

var G__19649 = (i__4865__auto___19648 + (1));
i__4865__auto___19648 = G__19649;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq19645){
var G__19646 = cljs.core.first.call(null,seq19645);
var seq19645__$1 = cljs.core.next.call(null,seq19645);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19646,seq19645__$1);
}));


//# sourceMappingURL=format.js.map
