goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___21174 = arguments.length;
var i__5898__auto___21175 = (0);
while(true){
if((i__5898__auto___21175 < len__5897__auto___21174)){
args__5903__auto__.push((arguments[i__5898__auto___21175]));

var G__21176 = (i__5898__auto___21175 + (1));
i__5898__auto___21175 = G__21176;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20695){
var G__20696 = cljs.core.first(seq20695);
var seq20695__$1 = cljs.core.next(seq20695);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20696,seq20695__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20698 = cljs.core.seq(sources);
var chunk__20699 = null;
var count__20700 = (0);
var i__20701 = (0);
while(true){
if((i__20701 < count__20700)){
var map__20708 = chunk__20699.cljs$core$IIndexed$_nth$arity$2(null,i__20701);
var map__20708__$1 = cljs.core.__destructure_map(map__20708);
var src = map__20708__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20708__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20708__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20708__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20708__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e20709){var e_21324 = e20709;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21324);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21324.message))));
}

var G__21325 = seq__20698;
var G__21326 = chunk__20699;
var G__21327 = count__20700;
var G__21328 = (i__20701 + (1));
seq__20698 = G__21325;
chunk__20699 = G__21326;
count__20700 = G__21327;
i__20701 = G__21328;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20698);
if(temp__5823__auto__){
var seq__20698__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20698__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20698__$1);
var G__21332 = cljs.core.chunk_rest(seq__20698__$1);
var G__21333 = c__5694__auto__;
var G__21334 = cljs.core.count(c__5694__auto__);
var G__21335 = (0);
seq__20698 = G__21332;
chunk__20699 = G__21333;
count__20700 = G__21334;
i__20701 = G__21335;
continue;
} else {
var map__20727 = cljs.core.first(seq__20698__$1);
var map__20727__$1 = cljs.core.__destructure_map(map__20727);
var src = map__20727__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20727__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e20734){var e_21342 = e20734;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21342);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21342.message))));
}

var G__21346 = cljs.core.next(seq__20698__$1);
var G__21348 = null;
var G__21349 = (0);
var G__21350 = (0);
seq__20698 = G__21346;
chunk__20699 = G__21348;
count__20700 = G__21349;
i__20701 = G__21350;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20747 = cljs.core.seq(js_requires);
var chunk__20748 = null;
var count__20749 = (0);
var i__20750 = (0);
while(true){
if((i__20750 < count__20749)){
var js_ns = chunk__20748.cljs$core$IIndexed$_nth$arity$2(null,i__20750);
var require_str_21353 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21353);


var G__21354 = seq__20747;
var G__21355 = chunk__20748;
var G__21356 = count__20749;
var G__21357 = (i__20750 + (1));
seq__20747 = G__21354;
chunk__20748 = G__21355;
count__20749 = G__21356;
i__20750 = G__21357;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20747);
if(temp__5823__auto__){
var seq__20747__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20747__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20747__$1);
var G__21362 = cljs.core.chunk_rest(seq__20747__$1);
var G__21363 = c__5694__auto__;
var G__21364 = cljs.core.count(c__5694__auto__);
var G__21365 = (0);
seq__20747 = G__21362;
chunk__20748 = G__21363;
count__20749 = G__21364;
i__20750 = G__21365;
continue;
} else {
var js_ns = cljs.core.first(seq__20747__$1);
var require_str_21366 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21366);


var G__21367 = cljs.core.next(seq__20747__$1);
var G__21368 = null;
var G__21369 = (0);
var G__21370 = (0);
seq__20747 = G__21367;
chunk__20748 = G__21368;
count__20749 = G__21369;
i__20750 = G__21370;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20761){
var map__20762 = p__20761;
var map__20762__$1 = cljs.core.__destructure_map(map__20762);
var msg = map__20762__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20777(s__20778){
return (new cljs.core.LazySeq(null,(function (){
var s__20778__$1 = s__20778;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20778__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__20783 = cljs.core.first(xs__6383__auto__);
var map__20783__$1 = cljs.core.__destructure_map(map__20783);
var src = map__20783__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20783__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20783__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__20778__$1,map__20783,map__20783__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20762,map__20762__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20777_$_iter__20779(s__20780){
return (new cljs.core.LazySeq(null,((function (s__20778__$1,map__20783,map__20783__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20762,map__20762__$1,msg,info,reload_info){
return (function (){
var s__20780__$1 = s__20780;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__20780__$1);
if(temp__5823__auto____$1){
var s__20780__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20780__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__20780__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__20782 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__20781 = (0);
while(true){
if((i__20781 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__20781);
cljs.core.chunk_append(b__20782,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21382 = (i__20781 + (1));
i__20781 = G__21382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20782),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20777_$_iter__20779(cljs.core.chunk_rest(s__20780__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20782),null);
}
} else {
var warning = cljs.core.first(s__20780__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20777_$_iter__20779(cljs.core.rest(s__20780__$2)));
}
} else {
return null;
}
break;
}
});})(s__20778__$1,map__20783,map__20783__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20762,map__20762__$1,msg,info,reload_info))
,null,null));
});})(s__20778__$1,map__20783,map__20783__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20762,map__20762__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20777(cljs.core.rest(s__20778__$1)));
} else {
var G__21383 = cljs.core.rest(s__20778__$1);
s__20778__$1 = G__21383;
continue;
}
} else {
var G__21384 = cljs.core.rest(s__20778__$1);
s__20778__$1 = G__21384;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20788_21386 = cljs.core.seq(warnings);
var chunk__20789_21387 = null;
var count__20790_21388 = (0);
var i__20791_21389 = (0);
while(true){
if((i__20791_21389 < count__20790_21388)){
var map__20797_21392 = chunk__20789_21387.cljs$core$IIndexed$_nth$arity$2(null,i__20791_21389);
var map__20797_21393__$1 = cljs.core.__destructure_map(map__20797_21392);
var w_21394 = map__20797_21393__$1;
var msg_21395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797_21393__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797_21393__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797_21393__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797_21393__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21398)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21396)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21397)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21395__$1)));


var G__21403 = seq__20788_21386;
var G__21404 = chunk__20789_21387;
var G__21405 = count__20790_21388;
var G__21406 = (i__20791_21389 + (1));
seq__20788_21386 = G__21403;
chunk__20789_21387 = G__21404;
count__20790_21388 = G__21405;
i__20791_21389 = G__21406;
continue;
} else {
var temp__5823__auto___21409 = cljs.core.seq(seq__20788_21386);
if(temp__5823__auto___21409){
var seq__20788_21410__$1 = temp__5823__auto___21409;
if(cljs.core.chunked_seq_QMARK_(seq__20788_21410__$1)){
var c__5694__auto___21411 = cljs.core.chunk_first(seq__20788_21410__$1);
var G__21412 = cljs.core.chunk_rest(seq__20788_21410__$1);
var G__21413 = c__5694__auto___21411;
var G__21414 = cljs.core.count(c__5694__auto___21411);
var G__21415 = (0);
seq__20788_21386 = G__21412;
chunk__20789_21387 = G__21413;
count__20790_21388 = G__21414;
i__20791_21389 = G__21415;
continue;
} else {
var map__20800_21416 = cljs.core.first(seq__20788_21410__$1);
var map__20800_21418__$1 = cljs.core.__destructure_map(map__20800_21416);
var w_21420 = map__20800_21418__$1;
var msg_21421__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800_21418__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800_21418__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800_21418__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800_21418__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21424)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21422)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21423)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21421__$1)));


var G__21425 = cljs.core.next(seq__20788_21410__$1);
var G__21426 = null;
var G__21427 = (0);
var G__21428 = (0);
seq__20788_21386 = G__21425;
chunk__20789_21387 = G__21426;
count__20790_21388 = G__21427;
i__20791_21389 = G__21428;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20760_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20760_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20804 = node_uri;
G__20804.setQuery(null);

G__20804.setPath(new$);

return G__20804;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20805){
var map__20806 = p__20805;
var map__20806__$1 = cljs.core.__destructure_map(map__20806);
var msg = map__20806__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20806__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20806__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20807 = cljs.core.seq(updates);
var chunk__20809 = null;
var count__20810 = (0);
var i__20811 = (0);
while(true){
if((i__20811 < count__20810)){
var path = chunk__20809.cljs$core$IIndexed$_nth$arity$2(null,i__20811);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20991_21430 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20995_21431 = null;
var count__20996_21432 = (0);
var i__20997_21433 = (0);
while(true){
if((i__20997_21433 < count__20996_21432)){
var node_21434 = chunk__20995_21431.cljs$core$IIndexed$_nth$arity$2(null,i__20997_21433);
if(cljs.core.not(node_21434.shadow$old)){
var path_match_21435 = shadow.cljs.devtools.client.browser.match_paths(node_21434.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21435)){
var new_link_21436 = (function (){var G__21037 = node_21434.cloneNode(true);
G__21037.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21435)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21037;
})();
(node_21434.shadow$old = true);

(new_link_21436.onload = ((function (seq__20991_21430,chunk__20995_21431,count__20996_21432,i__20997_21433,seq__20807,chunk__20809,count__20810,i__20811,new_link_21436,path_match_21435,node_21434,path,map__20806,map__20806__$1,msg,updates,reload_info){
return (function (e){
var seq__21038_21437 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21040_21438 = null;
var count__21041_21439 = (0);
var i__21042_21440 = (0);
while(true){
if((i__21042_21440 < count__21041_21439)){
var map__21046_21441 = chunk__21040_21438.cljs$core$IIndexed$_nth$arity$2(null,i__21042_21440);
var map__21046_21442__$1 = cljs.core.__destructure_map(map__21046_21441);
var task_21443 = map__21046_21442__$1;
var fn_str_21444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046_21442__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046_21442__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21446 = goog.getObjectByName(fn_str_21444,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21445)));

(fn_obj_21446.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21446.cljs$core$IFn$_invoke$arity$2(path,new_link_21436) : fn_obj_21446.call(null,path,new_link_21436));


var G__21447 = seq__21038_21437;
var G__21448 = chunk__21040_21438;
var G__21449 = count__21041_21439;
var G__21450 = (i__21042_21440 + (1));
seq__21038_21437 = G__21447;
chunk__21040_21438 = G__21448;
count__21041_21439 = G__21449;
i__21042_21440 = G__21450;
continue;
} else {
var temp__5823__auto___21451 = cljs.core.seq(seq__21038_21437);
if(temp__5823__auto___21451){
var seq__21038_21452__$1 = temp__5823__auto___21451;
if(cljs.core.chunked_seq_QMARK_(seq__21038_21452__$1)){
var c__5694__auto___21453 = cljs.core.chunk_first(seq__21038_21452__$1);
var G__21454 = cljs.core.chunk_rest(seq__21038_21452__$1);
var G__21455 = c__5694__auto___21453;
var G__21456 = cljs.core.count(c__5694__auto___21453);
var G__21457 = (0);
seq__21038_21437 = G__21454;
chunk__21040_21438 = G__21455;
count__21041_21439 = G__21456;
i__21042_21440 = G__21457;
continue;
} else {
var map__21050_21458 = cljs.core.first(seq__21038_21452__$1);
var map__21050_21459__$1 = cljs.core.__destructure_map(map__21050_21458);
var task_21460 = map__21050_21459__$1;
var fn_str_21461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21050_21459__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21050_21459__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21463 = goog.getObjectByName(fn_str_21461,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21462)));

(fn_obj_21463.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21463.cljs$core$IFn$_invoke$arity$2(path,new_link_21436) : fn_obj_21463.call(null,path,new_link_21436));


var G__21464 = cljs.core.next(seq__21038_21452__$1);
var G__21465 = null;
var G__21466 = (0);
var G__21467 = (0);
seq__21038_21437 = G__21464;
chunk__21040_21438 = G__21465;
count__21041_21439 = G__21466;
i__21042_21440 = G__21467;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21434);
});})(seq__20991_21430,chunk__20995_21431,count__20996_21432,i__20997_21433,seq__20807,chunk__20809,count__20810,i__20811,new_link_21436,path_match_21435,node_21434,path,map__20806,map__20806__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21435], 0));

goog.dom.insertSiblingAfter(new_link_21436,node_21434);


var G__21468 = seq__20991_21430;
var G__21469 = chunk__20995_21431;
var G__21470 = count__20996_21432;
var G__21471 = (i__20997_21433 + (1));
seq__20991_21430 = G__21468;
chunk__20995_21431 = G__21469;
count__20996_21432 = G__21470;
i__20997_21433 = G__21471;
continue;
} else {
var G__21472 = seq__20991_21430;
var G__21473 = chunk__20995_21431;
var G__21474 = count__20996_21432;
var G__21475 = (i__20997_21433 + (1));
seq__20991_21430 = G__21472;
chunk__20995_21431 = G__21473;
count__20996_21432 = G__21474;
i__20997_21433 = G__21475;
continue;
}
} else {
var G__21476 = seq__20991_21430;
var G__21477 = chunk__20995_21431;
var G__21478 = count__20996_21432;
var G__21479 = (i__20997_21433 + (1));
seq__20991_21430 = G__21476;
chunk__20995_21431 = G__21477;
count__20996_21432 = G__21478;
i__20997_21433 = G__21479;
continue;
}
} else {
var temp__5823__auto___21481 = cljs.core.seq(seq__20991_21430);
if(temp__5823__auto___21481){
var seq__20991_21482__$1 = temp__5823__auto___21481;
if(cljs.core.chunked_seq_QMARK_(seq__20991_21482__$1)){
var c__5694__auto___21483 = cljs.core.chunk_first(seq__20991_21482__$1);
var G__21484 = cljs.core.chunk_rest(seq__20991_21482__$1);
var G__21485 = c__5694__auto___21483;
var G__21486 = cljs.core.count(c__5694__auto___21483);
var G__21487 = (0);
seq__20991_21430 = G__21484;
chunk__20995_21431 = G__21485;
count__20996_21432 = G__21486;
i__20997_21433 = G__21487;
continue;
} else {
var node_21488 = cljs.core.first(seq__20991_21482__$1);
if(cljs.core.not(node_21488.shadow$old)){
var path_match_21489 = shadow.cljs.devtools.client.browser.match_paths(node_21488.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21489)){
var new_link_21490 = (function (){var G__21054 = node_21488.cloneNode(true);
G__21054.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21489)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21054;
})();
(node_21488.shadow$old = true);

(new_link_21490.onload = ((function (seq__20991_21430,chunk__20995_21431,count__20996_21432,i__20997_21433,seq__20807,chunk__20809,count__20810,i__20811,new_link_21490,path_match_21489,node_21488,seq__20991_21482__$1,temp__5823__auto___21481,path,map__20806,map__20806__$1,msg,updates,reload_info){
return (function (e){
var seq__21056_21491 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21058_21492 = null;
var count__21059_21493 = (0);
var i__21060_21494 = (0);
while(true){
if((i__21060_21494 < count__21059_21493)){
var map__21064_21495 = chunk__21058_21492.cljs$core$IIndexed$_nth$arity$2(null,i__21060_21494);
var map__21064_21496__$1 = cljs.core.__destructure_map(map__21064_21495);
var task_21497 = map__21064_21496__$1;
var fn_str_21498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064_21496__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064_21496__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21500 = goog.getObjectByName(fn_str_21498,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21499)));

(fn_obj_21500.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21500.cljs$core$IFn$_invoke$arity$2(path,new_link_21490) : fn_obj_21500.call(null,path,new_link_21490));


var G__21502 = seq__21056_21491;
var G__21503 = chunk__21058_21492;
var G__21504 = count__21059_21493;
var G__21505 = (i__21060_21494 + (1));
seq__21056_21491 = G__21502;
chunk__21058_21492 = G__21503;
count__21059_21493 = G__21504;
i__21060_21494 = G__21505;
continue;
} else {
var temp__5823__auto___21506__$1 = cljs.core.seq(seq__21056_21491);
if(temp__5823__auto___21506__$1){
var seq__21056_21507__$1 = temp__5823__auto___21506__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21056_21507__$1)){
var c__5694__auto___21508 = cljs.core.chunk_first(seq__21056_21507__$1);
var G__21509 = cljs.core.chunk_rest(seq__21056_21507__$1);
var G__21510 = c__5694__auto___21508;
var G__21511 = cljs.core.count(c__5694__auto___21508);
var G__21512 = (0);
seq__21056_21491 = G__21509;
chunk__21058_21492 = G__21510;
count__21059_21493 = G__21511;
i__21060_21494 = G__21512;
continue;
} else {
var map__21065_21513 = cljs.core.first(seq__21056_21507__$1);
var map__21065_21514__$1 = cljs.core.__destructure_map(map__21065_21513);
var task_21515 = map__21065_21514__$1;
var fn_str_21516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21065_21514__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21065_21514__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21518 = goog.getObjectByName(fn_str_21516,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21517)));

(fn_obj_21518.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21518.cljs$core$IFn$_invoke$arity$2(path,new_link_21490) : fn_obj_21518.call(null,path,new_link_21490));


var G__21519 = cljs.core.next(seq__21056_21507__$1);
var G__21520 = null;
var G__21521 = (0);
var G__21522 = (0);
seq__21056_21491 = G__21519;
chunk__21058_21492 = G__21520;
count__21059_21493 = G__21521;
i__21060_21494 = G__21522;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21488);
});})(seq__20991_21430,chunk__20995_21431,count__20996_21432,i__20997_21433,seq__20807,chunk__20809,count__20810,i__20811,new_link_21490,path_match_21489,node_21488,seq__20991_21482__$1,temp__5823__auto___21481,path,map__20806,map__20806__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21489], 0));

goog.dom.insertSiblingAfter(new_link_21490,node_21488);


var G__21527 = cljs.core.next(seq__20991_21482__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__20991_21430 = G__21527;
chunk__20995_21431 = G__21528;
count__20996_21432 = G__21529;
i__20997_21433 = G__21530;
continue;
} else {
var G__21531 = cljs.core.next(seq__20991_21482__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__20991_21430 = G__21531;
chunk__20995_21431 = G__21532;
count__20996_21432 = G__21533;
i__20997_21433 = G__21534;
continue;
}
} else {
var G__21539 = cljs.core.next(seq__20991_21482__$1);
var G__21540 = null;
var G__21541 = (0);
var G__21542 = (0);
seq__20991_21430 = G__21539;
chunk__20995_21431 = G__21540;
count__20996_21432 = G__21541;
i__20997_21433 = G__21542;
continue;
}
}
} else {
}
}
break;
}


var G__21543 = seq__20807;
var G__21544 = chunk__20809;
var G__21545 = count__20810;
var G__21546 = (i__20811 + (1));
seq__20807 = G__21543;
chunk__20809 = G__21544;
count__20810 = G__21545;
i__20811 = G__21546;
continue;
} else {
var G__21550 = seq__20807;
var G__21552 = chunk__20809;
var G__21553 = count__20810;
var G__21554 = (i__20811 + (1));
seq__20807 = G__21550;
chunk__20809 = G__21552;
count__20810 = G__21553;
i__20811 = G__21554;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20807);
if(temp__5823__auto__){
var seq__20807__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20807__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20807__$1);
var G__21555 = cljs.core.chunk_rest(seq__20807__$1);
var G__21556 = c__5694__auto__;
var G__21557 = cljs.core.count(c__5694__auto__);
var G__21558 = (0);
seq__20807 = G__21555;
chunk__20809 = G__21556;
count__20810 = G__21557;
i__20811 = G__21558;
continue;
} else {
var path = cljs.core.first(seq__20807__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21070_21559 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21074_21560 = null;
var count__21075_21561 = (0);
var i__21076_21562 = (0);
while(true){
if((i__21076_21562 < count__21075_21561)){
var node_21563 = chunk__21074_21560.cljs$core$IIndexed$_nth$arity$2(null,i__21076_21562);
if(cljs.core.not(node_21563.shadow$old)){
var path_match_21564 = shadow.cljs.devtools.client.browser.match_paths(node_21563.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21564)){
var new_link_21565 = (function (){var G__21124 = node_21563.cloneNode(true);
G__21124.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21564)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21124;
})();
(node_21563.shadow$old = true);

(new_link_21565.onload = ((function (seq__21070_21559,chunk__21074_21560,count__21075_21561,i__21076_21562,seq__20807,chunk__20809,count__20810,i__20811,new_link_21565,path_match_21564,node_21563,path,seq__20807__$1,temp__5823__auto__,map__20806,map__20806__$1,msg,updates,reload_info){
return (function (e){
var seq__21125_21566 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21127_21567 = null;
var count__21128_21568 = (0);
var i__21129_21569 = (0);
while(true){
if((i__21129_21569 < count__21128_21568)){
var map__21133_21570 = chunk__21127_21567.cljs$core$IIndexed$_nth$arity$2(null,i__21129_21569);
var map__21133_21571__$1 = cljs.core.__destructure_map(map__21133_21570);
var task_21572 = map__21133_21571__$1;
var fn_str_21573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133_21571__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133_21571__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21575 = goog.getObjectByName(fn_str_21573,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21574)));

(fn_obj_21575.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21575.cljs$core$IFn$_invoke$arity$2(path,new_link_21565) : fn_obj_21575.call(null,path,new_link_21565));


var G__21576 = seq__21125_21566;
var G__21577 = chunk__21127_21567;
var G__21578 = count__21128_21568;
var G__21579 = (i__21129_21569 + (1));
seq__21125_21566 = G__21576;
chunk__21127_21567 = G__21577;
count__21128_21568 = G__21578;
i__21129_21569 = G__21579;
continue;
} else {
var temp__5823__auto___21580__$1 = cljs.core.seq(seq__21125_21566);
if(temp__5823__auto___21580__$1){
var seq__21125_21581__$1 = temp__5823__auto___21580__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21125_21581__$1)){
var c__5694__auto___21582 = cljs.core.chunk_first(seq__21125_21581__$1);
var G__21583 = cljs.core.chunk_rest(seq__21125_21581__$1);
var G__21584 = c__5694__auto___21582;
var G__21585 = cljs.core.count(c__5694__auto___21582);
var G__21586 = (0);
seq__21125_21566 = G__21583;
chunk__21127_21567 = G__21584;
count__21128_21568 = G__21585;
i__21129_21569 = G__21586;
continue;
} else {
var map__21134_21587 = cljs.core.first(seq__21125_21581__$1);
var map__21134_21588__$1 = cljs.core.__destructure_map(map__21134_21587);
var task_21589 = map__21134_21588__$1;
var fn_str_21590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21134_21588__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21134_21588__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21592 = goog.getObjectByName(fn_str_21590,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21591)));

(fn_obj_21592.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21592.cljs$core$IFn$_invoke$arity$2(path,new_link_21565) : fn_obj_21592.call(null,path,new_link_21565));


var G__21593 = cljs.core.next(seq__21125_21581__$1);
var G__21594 = null;
var G__21595 = (0);
var G__21596 = (0);
seq__21125_21566 = G__21593;
chunk__21127_21567 = G__21594;
count__21128_21568 = G__21595;
i__21129_21569 = G__21596;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21563);
});})(seq__21070_21559,chunk__21074_21560,count__21075_21561,i__21076_21562,seq__20807,chunk__20809,count__20810,i__20811,new_link_21565,path_match_21564,node_21563,path,seq__20807__$1,temp__5823__auto__,map__20806,map__20806__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21564], 0));

goog.dom.insertSiblingAfter(new_link_21565,node_21563);


var G__21597 = seq__21070_21559;
var G__21598 = chunk__21074_21560;
var G__21599 = count__21075_21561;
var G__21600 = (i__21076_21562 + (1));
seq__21070_21559 = G__21597;
chunk__21074_21560 = G__21598;
count__21075_21561 = G__21599;
i__21076_21562 = G__21600;
continue;
} else {
var G__21601 = seq__21070_21559;
var G__21602 = chunk__21074_21560;
var G__21603 = count__21075_21561;
var G__21604 = (i__21076_21562 + (1));
seq__21070_21559 = G__21601;
chunk__21074_21560 = G__21602;
count__21075_21561 = G__21603;
i__21076_21562 = G__21604;
continue;
}
} else {
var G__21605 = seq__21070_21559;
var G__21606 = chunk__21074_21560;
var G__21607 = count__21075_21561;
var G__21608 = (i__21076_21562 + (1));
seq__21070_21559 = G__21605;
chunk__21074_21560 = G__21606;
count__21075_21561 = G__21607;
i__21076_21562 = G__21608;
continue;
}
} else {
var temp__5823__auto___21609__$1 = cljs.core.seq(seq__21070_21559);
if(temp__5823__auto___21609__$1){
var seq__21070_21610__$1 = temp__5823__auto___21609__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21070_21610__$1)){
var c__5694__auto___21611 = cljs.core.chunk_first(seq__21070_21610__$1);
var G__21612 = cljs.core.chunk_rest(seq__21070_21610__$1);
var G__21613 = c__5694__auto___21611;
var G__21614 = cljs.core.count(c__5694__auto___21611);
var G__21615 = (0);
seq__21070_21559 = G__21612;
chunk__21074_21560 = G__21613;
count__21075_21561 = G__21614;
i__21076_21562 = G__21615;
continue;
} else {
var node_21616 = cljs.core.first(seq__21070_21610__$1);
if(cljs.core.not(node_21616.shadow$old)){
var path_match_21617 = shadow.cljs.devtools.client.browser.match_paths(node_21616.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21617)){
var new_link_21618 = (function (){var G__21135 = node_21616.cloneNode(true);
G__21135.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21617)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21135;
})();
(node_21616.shadow$old = true);

(new_link_21618.onload = ((function (seq__21070_21559,chunk__21074_21560,count__21075_21561,i__21076_21562,seq__20807,chunk__20809,count__20810,i__20811,new_link_21618,path_match_21617,node_21616,seq__21070_21610__$1,temp__5823__auto___21609__$1,path,seq__20807__$1,temp__5823__auto__,map__20806,map__20806__$1,msg,updates,reload_info){
return (function (e){
var seq__21136_21619 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21138_21620 = null;
var count__21139_21621 = (0);
var i__21140_21622 = (0);
while(true){
if((i__21140_21622 < count__21139_21621)){
var map__21144_21623 = chunk__21138_21620.cljs$core$IIndexed$_nth$arity$2(null,i__21140_21622);
var map__21144_21624__$1 = cljs.core.__destructure_map(map__21144_21623);
var task_21625 = map__21144_21624__$1;
var fn_str_21626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144_21624__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144_21624__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21628 = goog.getObjectByName(fn_str_21626,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21627)));

(fn_obj_21628.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21628.cljs$core$IFn$_invoke$arity$2(path,new_link_21618) : fn_obj_21628.call(null,path,new_link_21618));


var G__21629 = seq__21136_21619;
var G__21630 = chunk__21138_21620;
var G__21631 = count__21139_21621;
var G__21632 = (i__21140_21622 + (1));
seq__21136_21619 = G__21629;
chunk__21138_21620 = G__21630;
count__21139_21621 = G__21631;
i__21140_21622 = G__21632;
continue;
} else {
var temp__5823__auto___21633__$2 = cljs.core.seq(seq__21136_21619);
if(temp__5823__auto___21633__$2){
var seq__21136_21634__$1 = temp__5823__auto___21633__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21136_21634__$1)){
var c__5694__auto___21635 = cljs.core.chunk_first(seq__21136_21634__$1);
var G__21636 = cljs.core.chunk_rest(seq__21136_21634__$1);
var G__21637 = c__5694__auto___21635;
var G__21638 = cljs.core.count(c__5694__auto___21635);
var G__21639 = (0);
seq__21136_21619 = G__21636;
chunk__21138_21620 = G__21637;
count__21139_21621 = G__21638;
i__21140_21622 = G__21639;
continue;
} else {
var map__21145_21640 = cljs.core.first(seq__21136_21634__$1);
var map__21145_21641__$1 = cljs.core.__destructure_map(map__21145_21640);
var task_21642 = map__21145_21641__$1;
var fn_str_21643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145_21641__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145_21641__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21645 = goog.getObjectByName(fn_str_21643,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21644)));

(fn_obj_21645.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21645.cljs$core$IFn$_invoke$arity$2(path,new_link_21618) : fn_obj_21645.call(null,path,new_link_21618));


var G__21646 = cljs.core.next(seq__21136_21634__$1);
var G__21647 = null;
var G__21648 = (0);
var G__21649 = (0);
seq__21136_21619 = G__21646;
chunk__21138_21620 = G__21647;
count__21139_21621 = G__21648;
i__21140_21622 = G__21649;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21616);
});})(seq__21070_21559,chunk__21074_21560,count__21075_21561,i__21076_21562,seq__20807,chunk__20809,count__20810,i__20811,new_link_21618,path_match_21617,node_21616,seq__21070_21610__$1,temp__5823__auto___21609__$1,path,seq__20807__$1,temp__5823__auto__,map__20806,map__20806__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21617], 0));

goog.dom.insertSiblingAfter(new_link_21618,node_21616);


var G__21650 = cljs.core.next(seq__21070_21610__$1);
var G__21651 = null;
var G__21652 = (0);
var G__21653 = (0);
seq__21070_21559 = G__21650;
chunk__21074_21560 = G__21651;
count__21075_21561 = G__21652;
i__21076_21562 = G__21653;
continue;
} else {
var G__21654 = cljs.core.next(seq__21070_21610__$1);
var G__21655 = null;
var G__21656 = (0);
var G__21657 = (0);
seq__21070_21559 = G__21654;
chunk__21074_21560 = G__21655;
count__21075_21561 = G__21656;
i__21076_21562 = G__21657;
continue;
}
} else {
var G__21658 = cljs.core.next(seq__21070_21610__$1);
var G__21659 = null;
var G__21660 = (0);
var G__21661 = (0);
seq__21070_21559 = G__21658;
chunk__21074_21560 = G__21659;
count__21075_21561 = G__21660;
i__21076_21562 = G__21661;
continue;
}
}
} else {
}
}
break;
}


var G__21662 = cljs.core.next(seq__20807__$1);
var G__21663 = null;
var G__21664 = (0);
var G__21665 = (0);
seq__20807 = G__21662;
chunk__20809 = G__21663;
count__20810 = G__21664;
i__20811 = G__21665;
continue;
} else {
var G__21666 = cljs.core.next(seq__20807__$1);
var G__21667 = null;
var G__21668 = (0);
var G__21669 = (0);
seq__20807 = G__21666;
chunk__20809 = G__21667;
count__20810 = G__21668;
i__20811 = G__21669;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),navigator.userAgent,new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21151 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21151) : success.call(null,G__21151));
}catch (e21150){var e = e21150;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21152,success,fail){
var map__21153 = p__21152;
var map__21153__$1 = cljs.core.__destructure_map(map__21153);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21153__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21155 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21155) : success.call(null,G__21155));
}catch (e21154){var e = e21154;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21156,done,error){
var map__21157 = p__21156;
var map__21157__$1 = cljs.core.__destructure_map(map__21157);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21158,done,error){
var map__21159 = p__21158;
var map__21159__$1 = cljs.core.__destructure_map(map__21159);
var msg = map__21159__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21159__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21159__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21159__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21160){
var map__21161 = p__21160;
var map__21161__$1 = cljs.core.__destructure_map(map__21161);
var src = map__21161__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21162 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21162) : done.call(null,G__21162));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21163){
var map__21164 = p__21163;
var map__21164__$1 = cljs.core.__destructure_map(map__21164);
var msg__$1 = map__21164__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21165){var ex = e21165;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21166){
var map__21167 = p__21166;
var map__21167__$1 = cljs.core.__destructure_map(map__21167);
var env = map__21167__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21168){
var map__21169 = p__21168;
var map__21169__$1 = cljs.core.__destructure_map(map__21169);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21170){
var map__21171 = p__21170;
var map__21171__$1 = cljs.core.__destructure_map(map__21171);
var svc = map__21171__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21171__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
