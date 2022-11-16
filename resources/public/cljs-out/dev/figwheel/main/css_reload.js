// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.main.css_reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.cssom');
goog.require('goog.events');
goog.require('figwheel.repl.logging');
goog.require('goog.Promise');
goog.require('goog.debug.Console');
goog.require('goog.object');
goog.scope(function(){
figwheel.main.css_reload.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.logger !== 'undefined')){
} else {
figwheel.main.css_reload.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel CSS Reload");
}

figwheel.main.css_reload.console_logging = (function figwheel$main$css_reload$console_logging(){
if(cljs.core.truth_(figwheel.main.css_reload.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_21510 = (new goog.debug.Console());
var G__21500_21511 = c_21510.getFormatter();
figwheel.main.css_reload.goog$module$goog$object.set.call(null,G__21500_21511,"showAbsoluteTime",false);

figwheel.main.css_reload.goog$module$goog$object.set.call(null,G__21500_21511,"showRelativeTime",false);


figwheel.main.css_reload.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_21510);

}

var temp__5720__auto__ = figwheel.main.css_reload.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.main.css_reload.console_logging', figwheel.main.css_reload.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.log_console !== 'undefined')){
} else {
figwheel.main.css_reload.log_console = figwheel.main.css_reload.console_logging.call(null);
}

figwheel.main.css_reload.add_cache_buster = (function figwheel$main$css_reload$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.main.css_reload.truncate_url = (function figwheel$main$css_reload$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});

figwheel.main.css_reload.matches_file_QMARK_ = (function figwheel$main$css_reload$matches_file_QMARK_(file,stylesheet){
var temp__5720__auto__ = stylesheet.href;
if(cljs.core.truth_(temp__5720__auto__)){
var href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__21496_SHARP_,p2__21497_SHARP_){
if(cljs.core._EQ_.call(null,p1__21496_SHARP_,p2__21497_SHARP_)){
return p1__21496_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.main.css_reload.truncate_url.call(null,href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426),stylesheet,new cljs.core.Keyword(null,"link-href","link-href",-250644450),href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.main.css_reload.truncate_url.call(null,href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.root_stylesheet = (function figwheel$main$css_reload$root_stylesheet(stylesheet){
while(true){
var temp__5718__auto__ = stylesheet.parentStyleSheet;
if(cljs.core.truth_(temp__5718__auto__)){
var parent_stylesheet = temp__5718__auto__;
var G__21512 = parent_stylesheet;
stylesheet = G__21512;
continue;
} else {
return stylesheet;
}
break;
}
});

figwheel.main.css_reload.get_correct_link = (function figwheel$main$css_reload$get_correct_link(file){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21501){
var map__21502 = p__21501;
var map__21502__$1 = cljs.core.__destructure_map.call(null,map__21502);
var match_length = cljs.core.get.call(null,map__21502__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21502__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21498_SHARP_){
return figwheel.main.css_reload.matches_file_QMARK_.call(null,file,p1__21498_SHARP_);
}),goog.cssom.getAllCssStyleSheets())));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return figwheel.main.css_reload.root_stylesheet.call(null,new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426).cljs$core$IFn$_invoke$arity$1(res)).ownerNode;
} else {
return null;
}
});

figwheel.main.css_reload.clone_link = (function figwheel$main$css_reload$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.main.css_reload.add_cache_buster.call(null,url));

return clone;
});

figwheel.main.css_reload.add_link_to_document = (function figwheel$main$css_reload$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
goog.events.listenOnce(klone,"load",(function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}));

if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
return parent.appendChild(klone);
} else {
return parent.insertBefore(klone,orig_link.nextSibling);
}
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.main.css_reload.reload_css_deferred_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__21499_SHARP_){
return p1__21499_SHARP_.call(null,cljs.core.PersistentVector.EMPTY);
}))));
}

figwheel.main.css_reload.reload_css_file = (function figwheel$main$css_reload$reload_css_file(file,fin){
var temp__5718__auto__ = figwheel.main.css_reload.get_correct_link.call(null,file);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.main.css_reload.add_link_to_document.call(null,link,figwheel.main.css_reload.clone_link.call(null,link,link.href),(function (){
return fin.call(null,file);
}));
} else {
return fin.call(null,null);
}
});

figwheel.main.css_reload.conj_reload_prom = (function figwheel$main$css_reload$conj_reload_prom(prom,file){
return prom.then((function (files){
return (new goog.Promise((function (succ,fail){
return figwheel.main.css_reload.reload_css_file.call(null,file,(function (f){
return succ.call(null,(cljs.core.truth_(f)?cljs.core.conj.call(null,files,f):files));
}));
})));
}));
});

figwheel.main.css_reload.dispatch_on_css_load = (function figwheel$main$css_reload$dispatch_on_css_load(files){
return document.body.dispatchEvent((function (){var G__21503 = (new Event("figwheel.after-css-load",document.body));
figwheel.main.css_reload.goog$module$goog$object.add.call(null,G__21503,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css-files","css-files",-502009265),files], null));

return G__21503;
})());
});

figwheel.main.css_reload.reload_css_files_STAR_ = (function figwheel$main$css_reload$reload_css_files_STAR_(files,on_cssload){
var seq__21504_21513 = cljs.core.seq.call(null,files);
var chunk__21505_21514 = null;
var count__21506_21515 = (0);
var i__21507_21516 = (0);
while(true){
if((i__21507_21516 < count__21506_21515)){
var file_21517 = cljs.core._nth.call(null,chunk__21505_21514,i__21507_21516);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_21517);


var G__21518 = seq__21504_21513;
var G__21519 = chunk__21505_21514;
var G__21520 = count__21506_21515;
var G__21521 = (i__21507_21516 + (1));
seq__21504_21513 = G__21518;
chunk__21505_21514 = G__21519;
count__21506_21515 = G__21520;
i__21507_21516 = G__21521;
continue;
} else {
var temp__5720__auto___21522 = cljs.core.seq.call(null,seq__21504_21513);
if(temp__5720__auto___21522){
var seq__21504_21523__$1 = temp__5720__auto___21522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21504_21523__$1)){
var c__4679__auto___21524 = cljs.core.chunk_first.call(null,seq__21504_21523__$1);
var G__21525 = cljs.core.chunk_rest.call(null,seq__21504_21523__$1);
var G__21526 = c__4679__auto___21524;
var G__21527 = cljs.core.count.call(null,c__4679__auto___21524);
var G__21528 = (0);
seq__21504_21513 = G__21525;
chunk__21505_21514 = G__21526;
count__21506_21515 = G__21527;
i__21507_21516 = G__21528;
continue;
} else {
var file_21529 = cljs.core.first.call(null,seq__21504_21523__$1);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_21529);


var G__21530 = cljs.core.next.call(null,seq__21504_21523__$1);
var G__21531 = null;
var G__21532 = (0);
var G__21533 = (0);
seq__21504_21513 = G__21530;
chunk__21505_21514 = G__21531;
count__21506_21515 = G__21532;
i__21507_21516 = G__21533;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,(function (prom){
return prom.then((function (loaded_files){
if(cljs.core.truth_(cljs.core.not_empty.call(null,loaded_files))){
figwheel.repl.logging.info.call(null,figwheel.main.css_reload.logger,["loaded ",cljs.core.pr_str.call(null,loaded_files)].join(''));

figwheel.main.css_reload.dispatch_on_css_load.call(null,loaded_files);
} else {
}

var temp__5720__auto___21534 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,loaded_files),cljs.core.set.call(null,files)));
if(cljs.core.truth_(temp__5720__auto___21534)){
var not_loaded_21535 = temp__5720__auto___21534;
figwheel.repl.logging.warning.call(null,figwheel.main.css_reload.logger,["Unable to reload ",cljs.core.pr_str.call(null,not_loaded_21535)].join(''));
} else {
}

return cljs.core.PersistentVector.EMPTY;
}));
}));
});

figwheel.main.css_reload.reload_css_files = (function figwheel$main$css_reload$reload_css_files(p__21508,files){
var map__21509 = p__21508;
var map__21509__$1 = cljs.core.__destructure_map.call(null,map__21509);
var on_cssload = cljs.core.get.call(null,map__21509__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if((!((goog.global.document == null)))){
var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.distinct.call(null,files));
if(cljs.core.truth_(temp__5720__auto__)){
var files_SINGLEQUOTE_ = temp__5720__auto__;
return figwheel.main.css_reload.reload_css_files_STAR_.call(null,files_SINGLEQUOTE_,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.reload_css_files_remote = (function figwheel$main$css_reload$reload_css_files_remote(files_array){
figwheel.main.css_reload.reload_css_files.call(null,cljs.core.PersistentArrayMap.EMPTY,files_array);

return true;
});
goog.exportSymbol('figwheel.main.css_reload.reload_css_files_remote', figwheel.main.css_reload.reload_css_files_remote);

//# sourceMappingURL=css_reload.js.map
