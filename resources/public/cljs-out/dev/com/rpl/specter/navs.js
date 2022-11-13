// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('com.rpl.specter.navs');
goog.require('cljs.core');
goog.require('com.rpl.specter.impl');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,vals,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.call(null,compiled_path,vals,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,vals,structure){
return (!(com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,compiled_path,vals,structure)));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__21174__auto__,e){
var ret__21175__auto__ = next_fn.call(null,e);
if((ret__21175__auto__ === com.rpl.specter.impl.NONE)){
return curr__21174__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__21175__auto__)){
return cljs.core.reduced.call(null,ret__21175__auto__);
} else {
return ret__21175__auto__;
}
}
}),com.rpl.specter.impl.NONE,structure);
});
com.rpl.specter.navs.queue_QMARK_ = (function com$rpl$specter$navs$queue_QMARK_(coll){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,coll),cljs.core.type.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.navs.AllTransformProtocol = function(){};

var com$rpl$specter$navs$AllTransformProtocol$all_transform$dyn_24975 = (function (structure,next_fn){
var x__4550__auto__ = (((structure == null))?null:structure);
var m__4551__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,structure,next_fn);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.all_transform["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"AllTransformProtocol.all-transform",structure);
}
}
});
com.rpl.specter.navs.all_transform = (function com$rpl$specter$navs$all_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$AllTransformProtocol$all_transform$dyn_24975.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.void_transformed_kv_pair_QMARK_ = (function com$rpl$specter$navs$void_transformed_kv_pair_QMARK_(newkv){
return (((newkv === com.rpl.specter.impl.NONE)) || ((cljs.core.count.call(null,newkv) < (2))));
});
com.rpl.specter.navs.non_transient_map_all_transform = (function com$rpl$specter$navs$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv)){
return m;
} else {
return cljs.core.assoc.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
}),empty_map,structure);
});
com.rpl.specter.navs.not_NONE_QMARK_ = (function com$rpl$specter$navs$not_NONE_QMARK_(v){
return (!((v === com.rpl.specter.impl.NONE)));
});
com.rpl.specter.navs.all_transform_list = (function com$rpl$specter$navs$all_transform_list(structure,next_fn){
return cljs.core.doall.call(null,cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure));
});
com.rpl.specter.navs.all_transform_record = (function com$rpl$specter$navs$all_transform_record(structure,next_fn){
return cljs.core.reduce.call(null,(function (res,kv){
return cljs.core.conj.call(null,res,next_fn.call(null,kv));
}),structure,structure);
});
(com.rpl.specter.navs.AllTransformProtocol["null"] = true);

(com.rpl.specter.navs.all_transform["null"] = (function (structure,next_fn){
return null;
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
var newk = next_fn.call(null,cljs.core.key.call(null,structure__$1));
var newv = next_fn.call(null,cljs.core.val.call(null,structure__$1));
return cljs.core.__GT_MapEntry.call(null,newk,newv,null);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
}));

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.empty.call(null,structure__$1));
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv)){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
}),cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

(com.rpl.specter.navs.AllTransformProtocol["_"] = true);

(com.rpl.specter.navs.all_transform["_"] = (function (structure,next_fn){
if(cljs.core.record_QMARK_.call(null,structure)){
return com.rpl.specter.navs.all_transform_record.call(null,structure,next_fn);
} else {
var empty_structure = cljs.core.empty.call(null,structure);
if(((cljs.core.list_QMARK_.call(null,empty_structure)) && ((!(com.rpl.specter.navs.queue_QMARK_.call(null,empty_structure)))))){
return com.rpl.specter.navs.all_transform_list.call(null,structure,next_fn);
} else {
if(cljs.core.map_QMARK_.call(null,structure)){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv)){
return m;
} else {
return cljs.core.assoc.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
}),empty_structure,structure);
} else {
return cljs.core.into.call(null,empty_structure,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
}));

/**
 * @interface
 */
com.rpl.specter.navs.MapTransformProtocol = function(){};

var com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$dyn_24976 = (function (structure,next_fn){
var x__4550__auto__ = (((structure == null))?null:structure);
var m__4551__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,structure,next_fn);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.map_vals_transform["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"MapTransformProtocol.map-vals-transform",structure);
}
}
});
com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$dyn_24976.call(null,structure,next_fn);
}
});

var com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$dyn_24977 = (function (structure,next_fn){
var x__4550__auto__ = (((structure == null))?null:structure);
var m__4551__auto__ = (com.rpl.specter.navs.map_keys_transform[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,structure,next_fn);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.map_keys_transform["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"MapTransformProtocol.map-keys-transform",structure);
}
}
});
com.rpl.specter.navs.map_keys_transform = (function com$rpl$specter$navs$map_keys_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$dyn_24977.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.map_vals_non_transient_transform = (function com$rpl$specter$navs$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,newv);
}
}),empty_map,structure);
});
com.rpl.specter.navs.map_keys_non_transient_transform = (function com$rpl$specter$navs$map_keys_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,newk,v);
}
}),empty_map,structure);
});
(com.rpl.specter.navs.MapTransformProtocol["null"] = true);

(com.rpl.specter.navs.map_vals_transform["null"] = (function (structure,next_fn){
return null;
}));

(com.rpl.specter.navs.map_keys_transform["null"] = (function (structure,next_fn){
return null;
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.empty.call(null,structure__$1),next_fn);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform.call(null,structure__$1,cljs.core.empty.call(null,structure__$1),next_fn);
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,k,newv);
}
}),cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,newk,v);
}
}),cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

(com.rpl.specter.navs.MapTransformProtocol["_"] = true);

(com.rpl.specter.navs.map_vals_transform["_"] = (function (structure,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,newv);
}
}),cljs.core.empty.call(null,structure),structure);
}));

(com.rpl.specter.navs.map_keys_transform["_"] = (function (structure,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,newk,v);
}
}),cljs.core.empty.call(null,structure),structure);
}));
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
return next_fn.call(null,((typeof structure === 'string')?cljs.core.subs.call(null,structure,start,end):cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end)));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_.call(null,path)){
return path;
} else {
if(((cljs.core.coll_QMARK_.call(null,path)) && (cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,path)))){
return cljs.core.reduce.call(null,(function (combined,afn){
return (function (structure){
var and__4251__auto__ = combined.call(null,structure);
if(cljs.core.truth_(and__4251__auto__)){
return afn.call(null,structure);
} else {
return and__4251__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.navs.if_select = (function com$rpl$specter$navs$if_select(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.select_STAR_.call(null,(cljs.core.truth_(then_tester.call(null,structure))?then_nav:else_nav),vals,structure,next_fn);
});
com.rpl.specter.navs.if_transform = (function com$rpl$specter$navs$if_transform(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.transform_STAR_.call(null,(cljs.core.truth_(then_tester.call(null,structure))?then_nav:else_nav),vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.navs.AddExtremes = function(){};

var com$rpl$specter$navs$AddExtremes$append_all$dyn_24980 = (function (structure,elements){
var x__4550__auto__ = (((structure == null))?null:structure);
var m__4551__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,structure,elements);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.append_all["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.append-all",structure);
}
}
});
com.rpl.specter.navs.append_all = (function com$rpl$specter$navs$append_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
return com$rpl$specter$navs$AddExtremes$append_all$dyn_24980.call(null,structure,elements);
}
});

var com$rpl$specter$navs$AddExtremes$prepend_all$dyn_24981 = (function (structure,elements){
var x__4550__auto__ = (((structure == null))?null:structure);
var m__4551__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,structure,elements);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.prepend_all["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-all",structure);
}
}
});
com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
return com$rpl$specter$navs$AddExtremes$prepend_all$dyn_24981.call(null,structure,elements);
}
});

var com$rpl$specter$navs$AddExtremes$append_one$dyn_24982 = (function (structure,elem){
var x__4550__auto__ = (((structure == null))?null:structure);
var m__4551__auto__ = (com.rpl.specter.navs.append_one[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,structure,elem);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.append_one["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,structure,elem);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.append-one",structure);
}
}
});
com.rpl.specter.navs.append_one = (function com$rpl$specter$navs$append_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2(structure,elem);
} else {
return com$rpl$specter$navs$AddExtremes$append_one$dyn_24982.call(null,structure,elem);
}
});

var com$rpl$specter$navs$AddExtremes$prepend_one$dyn_24983 = (function (structure,elem){
var x__4550__auto__ = (((structure == null))?null:structure);
var m__4551__auto__ = (com.rpl.specter.navs.prepend_one[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,structure,elem);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.prepend_one["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,structure,elem);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-one",structure);
}
}
});
com.rpl.specter.navs.prepend_one = (function com$rpl$specter$navs$prepend_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2(structure,elem);
} else {
return com$rpl$specter$navs$AddExtremes$prepend_one$dyn_24983.call(null,structure,elem);
}
});

(com.rpl.specter.navs.AddExtremes["null"] = true);

(com.rpl.specter.navs.append_all["null"] = (function (_,elements){
return elements;
}));

(com.rpl.specter.navs.prepend_all["null"] = (function (_,elements){
return elements;
}));

(com.rpl.specter.navs.append_one["null"] = (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
}));

(com.rpl.specter.navs.prepend_one["null"] = (function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.call(null,cljs.core.conj,structure__$1,elements);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_.call(null,_LT__GT___$2);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.call(null,structure__$1,elem);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.call(null,cljs.core.conj,structure__$1,elements);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_.call(null,_LT__GT___$2);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.call(null,structure__$1,elem);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
}));

(com.rpl.specter.navs.AddExtremes["_"] = true);

(com.rpl.specter.navs.append_all["_"] = (function (structure,elements){
return cljs.core.concat.call(null,structure,elements);
}));

(com.rpl.specter.navs.prepend_all["_"] = (function (structure,elements){
return cljs.core.concat.call(null,elements,structure);
}));

(com.rpl.specter.navs.append_one["_"] = (function (structure,elem){
return cljs.core.concat.call(null,structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
}));

(com.rpl.specter.navs.prepend_one["_"] = (function (structure,elem){
return cljs.core.cons.call(null,elem,structure);
}));

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

var com$rpl$specter$navs$UpdateExtremes$update_first$dyn_24984 = (function (s,afn){
var x__4550__auto__ = (((s == null))?null:s);
var m__4551__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,s,afn);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.update_first["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-first",s);
}
}
});
com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
return com$rpl$specter$navs$UpdateExtremes$update_first$dyn_24984.call(null,s,afn);
}
});

var com$rpl$specter$navs$UpdateExtremes$update_last$dyn_24985 = (function (s,afn){
var x__4550__auto__ = (((s == null))?null:s);
var m__4551__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,s,afn);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.update_last["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-last",s);
}
}
});
com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
return com$rpl$specter$navs$UpdateExtremes$update_last$dyn_24985.call(null,s,afn);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.GetExtremes = function(){};

var com$rpl$specter$navs$GetExtremes$get_first$dyn_24986 = (function (s){
var x__4550__auto__ = (((s == null))?null:s);
var m__4551__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,s);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.get_first["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-first",s);
}
}
});
com.rpl.specter.navs.get_first = (function com$rpl$specter$navs$get_first(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
return com$rpl$specter$navs$GetExtremes$get_first$dyn_24986.call(null,s);
}
});

var com$rpl$specter$navs$GetExtremes$get_last$dyn_24987 = (function (s){
var x__4550__auto__ = (((s == null))?null:s);
var m__4551__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,s);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.get_last["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-last",s);
}
}
});
com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
return com$rpl$specter$navs$GetExtremes$get_last$dyn_24987.call(null,s);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.FastEmpty = function(){};

var com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$dyn_24988 = (function (s){
var x__4550__auto__ = (((s == null))?null:s);
var m__4551__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,s);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"FastEmpty.fast-empty?",s);
}
}
});
com.rpl.specter.navs.fast_empty_QMARK_ = (function com$rpl$specter$navs$fast_empty_QMARK_(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null)))))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
return com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$dyn_24988.call(null,s);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.InsertBeforeIndex = function(){};

var com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$dyn_24989 = (function (aseq,idx,val){
var x__4550__auto__ = (((aseq == null))?null:aseq);
var m__4551__auto__ = (com.rpl.specter.navs.insert_before_idx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,aseq,idx,val);
} else {
var m__4549__auto__ = (com.rpl.specter.navs.insert_before_idx["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,aseq,idx,val);
} else {
throw cljs.core.missing_protocol.call(null,"InsertBeforeIndex.insert-before-idx",aseq);
}
}
});
com.rpl.specter.navs.insert_before_idx = (function com$rpl$specter$navs$insert_before_idx(aseq,idx,val){
if((((!((aseq == null)))) && ((!((aseq.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3 == null)))))){
return aseq.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3(aseq,idx,val);
} else {
return com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$dyn_24989.call(null,aseq,idx,val);
}
});



com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not.call(null,com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,getter.call(null,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.PosNavigator_transform_STAR_ = (function com$rpl$specter$navs$PosNavigator_transform_STAR_(getter,updater,structure,next_fn){
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return updater.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.PosNavigator = com.rpl.specter.impl.direct_nav_obj.call(null,(function (getter,updater){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs24990 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs24990 = (function (getter,updater,meta24991){
this.getter = getter;
this.updater = updater;
this.meta24991 = meta24991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs24990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24992,meta24991__$1){
var self__ = this;
var _24992__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs24990(self__.getter,self__.updater,meta24991__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs24990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24992){
var self__ = this;
var _24992__$1 = this;
return self__.meta24991;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs24990.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs24990.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
if(cljs.core.not.call(null,com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,self__.getter.call(null,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs24990.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__23234__auto__,vals__23235__auto__,structure,next_fn__23236__auto__){
var self__ = this;
var this__23234__auto____$1 = this;
var next_fn = (function (s__23237__auto__){
return next_fn__23236__auto__.call(null,vals__23235__auto__,s__23237__auto__);
});
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return self__.updater.call(null,structure,next_fn);
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs24990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta24991","meta24991",950193537,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs24990.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs24990.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs24990");

(com.rpl.specter.navs.t_com$rpl$specter$navs24990.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs24990");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs24990.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs24990 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs24990(getter__$1,updater__$1,meta24991){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs24990(getter__$1,updater__$1,meta24991));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs24990(getter,updater,null));
}));
com.rpl.specter.navs.vec_count = (function com$rpl$specter$navs$vec_count(v){
return cljs.core.count.call(null,v);
});
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = afn.call(null,cljs.core.first.call(null,l));
var restl = cljs.core.rest.call(null,l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons.call(null,newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = afn.call(null,cljs.core.last.call(null,l));
var bl = cljs.core.butlast.call(null,l);
if((com.rpl.specter.impl.NONE === lastl)){
if((bl == null)){
return cljs.core.List.EMPTY;
} else {
return bl;
}
} else {
return cljs.core.concat.call(null,bl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lastl], null));
}
});
com.rpl.specter.navs.update_first_vector = (function com$rpl$specter$navs$update_first_vector(v,afn){
var val = cljs.core.nth.call(null,v,(0));
var newv = afn.call(null,val);
if((com.rpl.specter.impl.NONE === newv)){
return cljs.core.subvec.call(null,v,(1));
} else {
return cljs.core.assoc.call(null,v,(0),newv);
}
});
com.rpl.specter.navs.update_last_vector = (function com$rpl$specter$navs$update_last_vector(v,afn){
var c = (com.rpl.specter.navs.vec_count.call(null,v) | (0));
var G__24993 = c;
switch (G__24993) {
case (1):
var vec__24994 = v;
var e = cljs.core.nth.call(null,vec__24994,(0),null);
var newe = afn.call(null,e);
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__24997 = v;
var e1 = cljs.core.nth.call(null,vec__24997,(0),null);
var e2 = cljs.core.nth.call(null,vec__24997,(1),null);
var newe = afn.call(null,e2);
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = afn.call(null,cljs.core.nth.call(null,v,i));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop.call(null,v);
} else {
return cljs.core.assoc.call(null,v,i,newe);
}

}
});
com.rpl.specter.navs.transient_vec_count = (function com$rpl$specter$navs$transient_vec_count(v){
return cljs.core.count.call(null,v);
});
(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
return com.rpl.specter.navs.update_first_vector.call(null,v__$1,afn);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
return com.rpl.specter.navs.update_last_vector.call(null,v__$1,afn);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
return com.rpl.specter.navs.update_first_vector.call(null,v__$1,afn);
}));

(cljs.core.Subvec.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
return com.rpl.specter.navs.update_last_vector.call(null,v__$1,afn);
}));

(com.rpl.specter.navs.UpdateExtremes["string"] = true);

(com.rpl.specter.navs.update_first["string"] = (function (s,afn){
var rests = cljs.core.subs.call(null,s,(1),cljs.core.count.call(null,s));
var newb = afn.call(null,cljs.core.nth.call(null,s,(0)));
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),rests].join('');
}
}));

(com.rpl.specter.navs.update_last["string"] = (function (s,afn){
var last_idx = (cljs.core.count.call(null,s) - (1));
var newl = afn.call(null,cljs.core.nth.call(null,s,last_idx));
var begins = cljs.core.subs.call(null,s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [begins,cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry.call(null,afn.call(null,cljs.core.key.call(null,e__$1)),cljs.core.val.call(null,e__$1),null);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry.call(null,cljs.core.key.call(null,e__$1),afn.call(null,cljs.core.val.call(null,e__$1)),null);
}));

(com.rpl.specter.navs.UpdateExtremes["_"] = true);

(com.rpl.specter.navs.update_first["_"] = (function (l,val){
return com.rpl.specter.navs.update_first_list.call(null,l,val);
}));

(com.rpl.specter.navs.update_last["_"] = (function (l,val){
return com.rpl.specter.navs.update_last_list.call(null,l,val);
}));
(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.call(null,v__$1,(0));
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek.call(null,v__$1);
}));

(com.rpl.specter.navs.GetExtremes["_"] = true);

(com.rpl.specter.navs.get_first["_"] = (function (s){
return cljs.core.first.call(null,s);
}));

(com.rpl.specter.navs.get_last["_"] = (function (s){
return cljs.core.last.call(null,s);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.key.call(null,e__$1);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.val.call(null,e__$1);
}));

(com.rpl.specter.navs.GetExtremes["string"] = true);

(com.rpl.specter.navs.get_first["string"] = (function (s){
return cljs.core.nth.call(null,s,(0));
}));

(com.rpl.specter.navs.get_last["string"] = (function (s){
return cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)));
}));
(com.rpl.specter.navs.FastEmpty["null"] = true);

(com.rpl.specter.navs.fast_empty_QMARK_["null"] = (function (_){
return true;
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.navs.vec_count.call(null,v__$1));
}));

(cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.navs.transient_vec_count.call(null,v__$1));
}));

(com.rpl.specter.navs.FastEmpty["_"] = true);

(com.rpl.specter.navs.fast_empty_QMARK_["_"] = (function (s){
return cljs.core.empty_QMARK_.call(null,s);
}));
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = next_fn.call(null,vals,cljs.core.get.call(null,structure,key));
if((newv === com.rpl.specter.impl.NONE)){
if(cljs.core.sequential_QMARK_.call(null,structure)){
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,key,(key + (1)),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return cljs.core.dissoc.call(null,structure,key);
}
} else {
return cljs.core.assoc.call(null,structure,key,newv);
}
});
/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 *        Setting the value to NONE will remove it from the collection.
 */
com.rpl.specter.navs.keypath_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs25001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs25001 = (function (key,meta25002){
this.key = key;
this.meta25002 = meta25002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs25001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25003,meta25002__$1){
var self__ = this;
var _25003__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs25001(self__.key,meta25002__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25003){
var self__ = this;
var _25003__$1 = this;
return self__.meta25002;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25001.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs25001.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.key));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25001.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform.call(null,vals,structure,self__.key,next_fn);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta25002","meta25002",-1238445674,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25001.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs25001.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs25001");

(com.rpl.specter.navs.t_com$rpl$specter$navs25001.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs25001");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs25001.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs25001 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs25001(key__$1,meta25002){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs25001(key__$1,meta25002));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs25001(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs25004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs25004 = (function (k,meta25005){
this.k = k;
this.meta25005 = meta25005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs25004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25006,meta25005__$1){
var self__ = this;
var _25006__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs25004(self__.k,meta25005__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25006){
var self__ = this;
var _25006__$1 = this;
return self__.meta25005;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25004.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs25004.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.k)){
return next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.k));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25004.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform.call(null,vals,structure,self__.k,next_fn);
} else {
return structure;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta25005","meta25005",-433601728,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25004.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs25004.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs25004");

(com.rpl.specter.navs.t_com$rpl$specter$navs25004.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs25004");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs25004.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs25004 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs25004(k__$1,meta25005){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs25004(k__$1,meta25005));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs25004(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs25007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs25007 = (function (i,meta25008){
this.i = i;
this.meta25008 = meta25008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs25007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25009,meta25008__$1){
var self__ = this;
var _25009__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs25007(self__.i,meta25008__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25009){
var self__ = this;
var _25009__$1 = this;
return self__.meta25008;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25007.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs25007.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,cljs.core.nth.call(null,structure,self__.i));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25007.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,structure)){
var newv = next_fn.call(null,vals,cljs.core.nth.call(null,structure,self__.i));
if((newv === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,self__.i,(self__.i + (1)),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return cljs.core.assoc.call(null,structure,self__.i,newv);
}
} else {
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,self__.i,(self__.i + (1)),(function (p__25010){
var vec__25011 = p__25010;
var e = cljs.core.nth.call(null,vec__25011,(0),null);
var v = next_fn.call(null,vals,e);
if((v === com.rpl.specter.impl.NONE)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}));
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta25008","meta25008",808194449,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs25007.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs25007.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs25007");

(com.rpl.specter.navs.t_com$rpl$specter$navs25007.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs25007");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs25007.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs25007 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs25007(i__$1,meta25008){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs25007(i__$1,meta25008));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs25007(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.navs.SrangeEndFunction = (function (end_fn,__meta,__extmap,__hash){
this.end_fn = end_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k25015,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__25019 = k25015;
var G__25019__$1 = (((G__25019 instanceof cljs.core.Keyword))?G__25019.fqn:null);
switch (G__25019__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25015,else__4505__auto__);

}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4525__auto__,p__25020){
var vec__25021 = p__25020;
var k__4526__auto__ = cljs.core.nth.call(null,vec__25021,(0),null);
var v__4527__auto__ = cljs.core.nth.call(null,vec__25021,(1),null);
return f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__);
}),init__4524__auto__,this__4522__auto____$1);
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,pr_pair__4520__auto__,"#com.rpl.specter.navs.SrangeEndFunction{",", ","}",opts__4519__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25014){
var self__ = this;
var G__25014__$1 = this;
return (new cljs.core.RecordIter((0),G__25014__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll.call(null,coll__4499__auto__));
}).call(null,this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25016,other25017){
var self__ = this;
var this25016__$1 = this;
return (((!((other25017 == null)))) && ((((this25016__$1.constructor === other25017.constructor)) && (((cljs.core._EQ_.call(null,this25016__$1.end_fn,other25017.end_fn)) && (cljs.core._EQ_.call(null,this25016__$1.__extmap,other25017.__extmap)))))));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4513__auto__)),null));
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k25015){
var self__ = this;
var this__4509__auto____$1 = this;
var G__25024 = k25015;
var G__25024__$1 = (((G__25024 instanceof cljs.core.Keyword))?G__25024.fqn:null);
switch (G__25024__$1) {
case "end-fn":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k25015);

}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__25014){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__25025 = cljs.core.keyword_identical_QMARK_;
var expr__25026 = k__4511__auto__;
if(cljs.core.truth_(pred__25025.call(null,new cljs.core.Keyword(null,"end-fn","end-fn",54055684),expr__25026))){
return (new com.rpl.specter.navs.SrangeEndFunction(G__25014,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4511__auto__,G__25014),null));
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__25014){
var self__ = this;
var this__4501__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__25014,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4508__auto__,(0)),cljs.core._nth.call(null,entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(com.rpl.specter.navs.SrangeEndFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null)], null);
}));

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$type = true);

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"com.rpl.specter.navs/SrangeEndFunction",null,(1),null));
}));

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write.call(null,writer__4547__auto__,"com.rpl.specter.navs/SrangeEndFunction");
}));

/**
 * Positional factory function for com.rpl.specter.navs/SrangeEndFunction.
 */
com.rpl.specter.navs.__GT_SrangeEndFunction = (function com$rpl$specter$navs$__GT_SrangeEndFunction(end_fn){
return (new com.rpl.specter.navs.SrangeEndFunction(end_fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.navs/SrangeEndFunction, taking a map of keywords to field values.
 */
com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__25018){
var extmap__4542__auto__ = (function (){var G__25028 = cljs.core.dissoc.call(null,G__25018,new cljs.core.Keyword(null,"end-fn","end-fn",54055684));
if(cljs.core.record_QMARK_.call(null,G__25018)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__25028);
} else {
return G__25028;
}
})();
return (new com.rpl.specter.navs.SrangeEndFunction(new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(G__25018),null,cljs.core.not_empty.call(null,extmap__4542__auto__),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
return end_fn.end_fn.call(null,structure,start);
} else {
return end_fn.call(null,structure);
}
});
com.rpl.specter.navs.insert_before_index_list = (function com$rpl$specter$navs$insert_before_index_list(lst,idx,val){
var vec__25031 = cljs.core.split_at.call(null,idx,lst);
var front = cljs.core.nth.call(null,vec__25031,(0),null);
var back = cljs.core.nth.call(null,vec__25031,(1),null);
return cljs.core.concat.call(null,front,cljs.core.cons.call(null,val,back));
});
(com.rpl.specter.navs.InsertBeforeIndex["null"] = true);

(com.rpl.specter.navs.insert_before_idx["null"] = (function (_,idx,val){
if(cljs.core._EQ_.call(null,(0),idx)){
return (new cljs.core.List(null,val,null,(1),null));
} else {
throw cljs.core.ex_info.call(null,"For a nil structure, can only insert before index 0",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insertion-index","insertion-index",837916882),idx], null));
}
}));

(com.rpl.specter.navs.InsertBeforeIndex["string"] = true);

(com.rpl.specter.navs.insert_before_idx["string"] = (function (aseq,idx,val){
return cljs.core.apply.call(null,cljs.core.str,com.rpl.specter.navs.insert_before_index_list.call(null,aseq,idx,val));
}));

(cljs.core.LazySeq.prototype.com$rpl$specter$navs$InsertBeforeIndex$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3 = (function (aseq,idx,val){
var aseq__$1 = this;
return com.rpl.specter.navs.insert_before_index_list.call(null,aseq__$1,idx,val);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$InsertBeforeIndex$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3 = (function (aseq,idx,val){
var aseq__$1 = this;
var front = cljs.core.subvec.call(null,aseq__$1,(0),idx);
var back = cljs.core.subvec.call(null,aseq__$1,idx);
return cljs.core.into.call(null,cljs.core.conj.call(null,front,val),back);
}));

(cljs.core.List.prototype.com$rpl$specter$navs$InsertBeforeIndex$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.com$rpl$specter$navs$InsertBeforeIndex$insert_before_idx$arity$3 = (function (aseq,idx,val){
var aseq__$1 = this;
if(cljs.core._EQ_.call(null,idx,(0))){
return cljs.core.cons.call(null,val,aseq__$1);
} else {
return com.rpl.specter.navs.insert_before_index_list.call(null,aseq__$1,idx,val);

}
}));

//# sourceMappingURL=navs.js.map
