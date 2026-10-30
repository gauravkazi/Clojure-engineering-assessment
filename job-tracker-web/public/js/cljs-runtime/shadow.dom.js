goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12408 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12408(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12415 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12415(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11803 = coll;
var G__11804 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11803,G__11804) : shadow.dom.lazy_native_coll_seq.call(null,G__11803,G__11804));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11820 = arguments.length;
switch (G__11820) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11822 = arguments.length;
switch (G__11822) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11825 = arguments.length;
switch (G__11825) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11828 = arguments.length;
switch (G__11828) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11841 = arguments.length;
switch (G__11841) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11844 = arguments.length;
switch (G__11844) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11846){if((e11846 instanceof Object)){
var e = e11846;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11846;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11852 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11853 = null;
var count__11854 = (0);
var i__11855 = (0);
while(true){
if((i__11855 < count__11854)){
var el = chunk__11853.cljs$core$IIndexed$_nth$arity$2(null,i__11855);
var handler_12495__$1 = ((function (seq__11852,chunk__11853,count__11854,i__11855,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11852,chunk__11853,count__11854,i__11855,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12495__$1);


var G__12497 = seq__11852;
var G__12498 = chunk__11853;
var G__12499 = count__11854;
var G__12500 = (i__11855 + (1));
seq__11852 = G__12497;
chunk__11853 = G__12498;
count__11854 = G__12499;
i__11855 = G__12500;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11852);
if(temp__5823__auto__){
var seq__11852__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11852__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__11852__$1);
var G__12504 = cljs.core.chunk_rest(seq__11852__$1);
var G__12505 = c__5694__auto__;
var G__12506 = cljs.core.count(c__5694__auto__);
var G__12507 = (0);
seq__11852 = G__12504;
chunk__11853 = G__12505;
count__11854 = G__12506;
i__11855 = G__12507;
continue;
} else {
var el = cljs.core.first(seq__11852__$1);
var handler_12510__$1 = ((function (seq__11852,chunk__11853,count__11854,i__11855,el,seq__11852__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11852,chunk__11853,count__11854,i__11855,el,seq__11852__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12510__$1);


var G__12512 = cljs.core.next(seq__11852__$1);
var G__12513 = null;
var G__12514 = (0);
var G__12515 = (0);
seq__11852 = G__12512;
chunk__11853 = G__12513;
count__11854 = G__12514;
i__11855 = G__12515;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11933 = arguments.length;
switch (G__11933) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11935 = cljs.core.seq(events);
var chunk__11936 = null;
var count__11937 = (0);
var i__11938 = (0);
while(true){
if((i__11938 < count__11937)){
var vec__11963 = chunk__11936.cljs$core$IIndexed$_nth$arity$2(null,i__11938);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11963,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12530 = seq__11935;
var G__12531 = chunk__11936;
var G__12532 = count__11937;
var G__12533 = (i__11938 + (1));
seq__11935 = G__12530;
chunk__11936 = G__12531;
count__11937 = G__12532;
i__11938 = G__12533;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11935);
if(temp__5823__auto__){
var seq__11935__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11935__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__11935__$1);
var G__12536 = cljs.core.chunk_rest(seq__11935__$1);
var G__12537 = c__5694__auto__;
var G__12538 = cljs.core.count(c__5694__auto__);
var G__12539 = (0);
seq__11935 = G__12536;
chunk__11936 = G__12537;
count__11937 = G__12538;
i__11938 = G__12539;
continue;
} else {
var vec__11966 = cljs.core.first(seq__11935__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11966,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12543 = cljs.core.next(seq__11935__$1);
var G__12544 = null;
var G__12545 = (0);
var G__12546 = (0);
seq__11935 = G__12543;
chunk__11936 = G__12544;
count__11937 = G__12545;
i__11938 = G__12546;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11973 = cljs.core.seq(styles);
var chunk__11974 = null;
var count__11975 = (0);
var i__11976 = (0);
while(true){
if((i__11976 < count__11975)){
var vec__11985 = chunk__11974.cljs$core$IIndexed$_nth$arity$2(null,i__11976);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11985,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12554 = seq__11973;
var G__12555 = chunk__11974;
var G__12556 = count__11975;
var G__12557 = (i__11976 + (1));
seq__11973 = G__12554;
chunk__11974 = G__12555;
count__11975 = G__12556;
i__11976 = G__12557;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11973);
if(temp__5823__auto__){
var seq__11973__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11973__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__11973__$1);
var G__12563 = cljs.core.chunk_rest(seq__11973__$1);
var G__12564 = c__5694__auto__;
var G__12565 = cljs.core.count(c__5694__auto__);
var G__12566 = (0);
seq__11973 = G__12563;
chunk__11974 = G__12564;
count__11975 = G__12565;
i__11976 = G__12566;
continue;
} else {
var vec__11998 = cljs.core.first(seq__11973__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11998,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11998,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12580 = cljs.core.next(seq__11973__$1);
var G__12581 = null;
var G__12582 = (0);
var G__12583 = (0);
seq__11973 = G__12580;
chunk__11974 = G__12581;
count__11975 = G__12582;
i__11976 = G__12583;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12008_12591 = key;
var G__12008_12592__$1 = (((G__12008_12591 instanceof cljs.core.Keyword))?G__12008_12591.fqn:null);
switch (G__12008_12592__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12613 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_12613,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_12613,"aria-");
}
})())){
el.setAttribute(ks_12613,value);
} else {
(el[ks_12613] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12028){
var map__12029 = p__12028;
var map__12029__$1 = cljs.core.__destructure_map(map__12029);
var props = map__12029__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12029__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12030 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12030,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12030,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12030,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12037 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12037,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12037;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12039 = arguments.length;
switch (G__12039) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12040){
var vec__12041 = p__12040;
var seq__12042 = cljs.core.seq(vec__12041);
var first__12043 = cljs.core.first(seq__12042);
var seq__12042__$1 = cljs.core.next(seq__12042);
var nn = first__12043;
var first__12043__$1 = cljs.core.first(seq__12042__$1);
var seq__12042__$2 = cljs.core.next(seq__12042__$1);
var np = first__12043__$1;
var nc = seq__12042__$2;
var node = vec__12041;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12044 = nn;
var G__12045 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12044,G__12045) : create_fn.call(null,G__12044,G__12045));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12046 = nn;
var G__12047 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12046,G__12047) : create_fn.call(null,G__12046,G__12047));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12048 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12048,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12048,(1),null);
var seq__12054_12646 = cljs.core.seq(node_children);
var chunk__12055_12647 = null;
var count__12056_12648 = (0);
var i__12057_12649 = (0);
while(true){
if((i__12057_12649 < count__12056_12648)){
var child_struct_12650 = chunk__12055_12647.cljs$core$IIndexed$_nth$arity$2(null,i__12057_12649);
var children_12651 = shadow.dom.dom_node(child_struct_12650);
if(cljs.core.seq_QMARK_(children_12651)){
var seq__12086_12652 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12651));
var chunk__12088_12653 = null;
var count__12089_12654 = (0);
var i__12090_12655 = (0);
while(true){
if((i__12090_12655 < count__12089_12654)){
var child_12656 = chunk__12088_12653.cljs$core$IIndexed$_nth$arity$2(null,i__12090_12655);
if(cljs.core.truth_(child_12656)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12656);


var G__12658 = seq__12086_12652;
var G__12659 = chunk__12088_12653;
var G__12660 = count__12089_12654;
var G__12661 = (i__12090_12655 + (1));
seq__12086_12652 = G__12658;
chunk__12088_12653 = G__12659;
count__12089_12654 = G__12660;
i__12090_12655 = G__12661;
continue;
} else {
var G__12662 = seq__12086_12652;
var G__12663 = chunk__12088_12653;
var G__12664 = count__12089_12654;
var G__12665 = (i__12090_12655 + (1));
seq__12086_12652 = G__12662;
chunk__12088_12653 = G__12663;
count__12089_12654 = G__12664;
i__12090_12655 = G__12665;
continue;
}
} else {
var temp__5823__auto___12666 = cljs.core.seq(seq__12086_12652);
if(temp__5823__auto___12666){
var seq__12086_12667__$1 = temp__5823__auto___12666;
if(cljs.core.chunked_seq_QMARK_(seq__12086_12667__$1)){
var c__5694__auto___12668 = cljs.core.chunk_first(seq__12086_12667__$1);
var G__12669 = cljs.core.chunk_rest(seq__12086_12667__$1);
var G__12670 = c__5694__auto___12668;
var G__12671 = cljs.core.count(c__5694__auto___12668);
var G__12672 = (0);
seq__12086_12652 = G__12669;
chunk__12088_12653 = G__12670;
count__12089_12654 = G__12671;
i__12090_12655 = G__12672;
continue;
} else {
var child_12673 = cljs.core.first(seq__12086_12667__$1);
if(cljs.core.truth_(child_12673)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12673);


var G__12674 = cljs.core.next(seq__12086_12667__$1);
var G__12675 = null;
var G__12676 = (0);
var G__12677 = (0);
seq__12086_12652 = G__12674;
chunk__12088_12653 = G__12675;
count__12089_12654 = G__12676;
i__12090_12655 = G__12677;
continue;
} else {
var G__12678 = cljs.core.next(seq__12086_12667__$1);
var G__12679 = null;
var G__12680 = (0);
var G__12681 = (0);
seq__12086_12652 = G__12678;
chunk__12088_12653 = G__12679;
count__12089_12654 = G__12680;
i__12090_12655 = G__12681;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12651);
}


var G__12682 = seq__12054_12646;
var G__12683 = chunk__12055_12647;
var G__12684 = count__12056_12648;
var G__12685 = (i__12057_12649 + (1));
seq__12054_12646 = G__12682;
chunk__12055_12647 = G__12683;
count__12056_12648 = G__12684;
i__12057_12649 = G__12685;
continue;
} else {
var temp__5823__auto___12686 = cljs.core.seq(seq__12054_12646);
if(temp__5823__auto___12686){
var seq__12054_12687__$1 = temp__5823__auto___12686;
if(cljs.core.chunked_seq_QMARK_(seq__12054_12687__$1)){
var c__5694__auto___12688 = cljs.core.chunk_first(seq__12054_12687__$1);
var G__12689 = cljs.core.chunk_rest(seq__12054_12687__$1);
var G__12691 = c__5694__auto___12688;
var G__12692 = cljs.core.count(c__5694__auto___12688);
var G__12693 = (0);
seq__12054_12646 = G__12689;
chunk__12055_12647 = G__12691;
count__12056_12648 = G__12692;
i__12057_12649 = G__12693;
continue;
} else {
var child_struct_12694 = cljs.core.first(seq__12054_12687__$1);
var children_12695 = shadow.dom.dom_node(child_struct_12694);
if(cljs.core.seq_QMARK_(children_12695)){
var seq__12092_12696 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12695));
var chunk__12094_12697 = null;
var count__12095_12698 = (0);
var i__12096_12699 = (0);
while(true){
if((i__12096_12699 < count__12095_12698)){
var child_12700 = chunk__12094_12697.cljs$core$IIndexed$_nth$arity$2(null,i__12096_12699);
if(cljs.core.truth_(child_12700)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12700);


var G__12701 = seq__12092_12696;
var G__12702 = chunk__12094_12697;
var G__12703 = count__12095_12698;
var G__12704 = (i__12096_12699 + (1));
seq__12092_12696 = G__12701;
chunk__12094_12697 = G__12702;
count__12095_12698 = G__12703;
i__12096_12699 = G__12704;
continue;
} else {
var G__12705 = seq__12092_12696;
var G__12706 = chunk__12094_12697;
var G__12707 = count__12095_12698;
var G__12708 = (i__12096_12699 + (1));
seq__12092_12696 = G__12705;
chunk__12094_12697 = G__12706;
count__12095_12698 = G__12707;
i__12096_12699 = G__12708;
continue;
}
} else {
var temp__5823__auto___12709__$1 = cljs.core.seq(seq__12092_12696);
if(temp__5823__auto___12709__$1){
var seq__12092_12710__$1 = temp__5823__auto___12709__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12092_12710__$1)){
var c__5694__auto___12711 = cljs.core.chunk_first(seq__12092_12710__$1);
var G__12712 = cljs.core.chunk_rest(seq__12092_12710__$1);
var G__12713 = c__5694__auto___12711;
var G__12714 = cljs.core.count(c__5694__auto___12711);
var G__12715 = (0);
seq__12092_12696 = G__12712;
chunk__12094_12697 = G__12713;
count__12095_12698 = G__12714;
i__12096_12699 = G__12715;
continue;
} else {
var child_12716 = cljs.core.first(seq__12092_12710__$1);
if(cljs.core.truth_(child_12716)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12716);


var G__12719 = cljs.core.next(seq__12092_12710__$1);
var G__12720 = null;
var G__12721 = (0);
var G__12722 = (0);
seq__12092_12696 = G__12719;
chunk__12094_12697 = G__12720;
count__12095_12698 = G__12721;
i__12096_12699 = G__12722;
continue;
} else {
var G__12723 = cljs.core.next(seq__12092_12710__$1);
var G__12724 = null;
var G__12725 = (0);
var G__12726 = (0);
seq__12092_12696 = G__12723;
chunk__12094_12697 = G__12724;
count__12095_12698 = G__12725;
i__12096_12699 = G__12726;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12695);
}


var G__12727 = cljs.core.next(seq__12054_12687__$1);
var G__12728 = null;
var G__12729 = (0);
var G__12730 = (0);
seq__12054_12646 = G__12727;
chunk__12055_12647 = G__12728;
count__12056_12648 = G__12729;
i__12057_12649 = G__12730;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12099 = cljs.core.seq(node);
var chunk__12100 = null;
var count__12101 = (0);
var i__12102 = (0);
while(true){
if((i__12102 < count__12101)){
var n = chunk__12100.cljs$core$IIndexed$_nth$arity$2(null,i__12102);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12734 = seq__12099;
var G__12735 = chunk__12100;
var G__12736 = count__12101;
var G__12737 = (i__12102 + (1));
seq__12099 = G__12734;
chunk__12100 = G__12735;
count__12101 = G__12736;
i__12102 = G__12737;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12099);
if(temp__5823__auto__){
var seq__12099__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12099__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12099__$1);
var G__12738 = cljs.core.chunk_rest(seq__12099__$1);
var G__12739 = c__5694__auto__;
var G__12740 = cljs.core.count(c__5694__auto__);
var G__12741 = (0);
seq__12099 = G__12738;
chunk__12100 = G__12739;
count__12101 = G__12740;
i__12102 = G__12741;
continue;
} else {
var n = cljs.core.first(seq__12099__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12743 = cljs.core.next(seq__12099__$1);
var G__12744 = null;
var G__12745 = (0);
var G__12746 = (0);
seq__12099 = G__12743;
chunk__12100 = G__12744;
count__12101 = G__12745;
i__12102 = G__12746;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12104 = arguments.length;
switch (G__12104) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12108 = arguments.length;
switch (G__12108) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12110 = arguments.length;
switch (G__12110) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___12765 = arguments.length;
var i__5898__auto___12766 = (0);
while(true){
if((i__5898__auto___12766 < len__5897__auto___12765)){
args__5903__auto__.push((arguments[i__5898__auto___12766]));

var G__12767 = (i__5898__auto___12766 + (1));
i__5898__auto___12766 = G__12767;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12114_12771 = cljs.core.seq(nodes);
var chunk__12115_12772 = null;
var count__12116_12773 = (0);
var i__12117_12774 = (0);
while(true){
if((i__12117_12774 < count__12116_12773)){
var node_12776 = chunk__12115_12772.cljs$core$IIndexed$_nth$arity$2(null,i__12117_12774);
fragment.appendChild(shadow.dom._to_dom(node_12776));


var G__12777 = seq__12114_12771;
var G__12778 = chunk__12115_12772;
var G__12779 = count__12116_12773;
var G__12780 = (i__12117_12774 + (1));
seq__12114_12771 = G__12777;
chunk__12115_12772 = G__12778;
count__12116_12773 = G__12779;
i__12117_12774 = G__12780;
continue;
} else {
var temp__5823__auto___12782 = cljs.core.seq(seq__12114_12771);
if(temp__5823__auto___12782){
var seq__12114_12783__$1 = temp__5823__auto___12782;
if(cljs.core.chunked_seq_QMARK_(seq__12114_12783__$1)){
var c__5694__auto___12785 = cljs.core.chunk_first(seq__12114_12783__$1);
var G__12786 = cljs.core.chunk_rest(seq__12114_12783__$1);
var G__12787 = c__5694__auto___12785;
var G__12788 = cljs.core.count(c__5694__auto___12785);
var G__12789 = (0);
seq__12114_12771 = G__12786;
chunk__12115_12772 = G__12787;
count__12116_12773 = G__12788;
i__12117_12774 = G__12789;
continue;
} else {
var node_12791 = cljs.core.first(seq__12114_12783__$1);
fragment.appendChild(shadow.dom._to_dom(node_12791));


var G__12792 = cljs.core.next(seq__12114_12783__$1);
var G__12793 = null;
var G__12794 = (0);
var G__12795 = (0);
seq__12114_12771 = G__12792;
chunk__12115_12772 = G__12793;
count__12116_12773 = G__12794;
i__12117_12774 = G__12795;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12113){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12113));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12119_12797 = cljs.core.seq(scripts);
var chunk__12120_12798 = null;
var count__12121_12799 = (0);
var i__12122_12800 = (0);
while(true){
if((i__12122_12800 < count__12121_12799)){
var vec__12129_12802 = chunk__12120_12798.cljs$core$IIndexed$_nth$arity$2(null,i__12122_12800);
var script_tag_12803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129_12802,(0),null);
var script_body_12804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129_12802,(1),null);
eval(script_body_12804);


var G__12806 = seq__12119_12797;
var G__12807 = chunk__12120_12798;
var G__12808 = count__12121_12799;
var G__12809 = (i__12122_12800 + (1));
seq__12119_12797 = G__12806;
chunk__12120_12798 = G__12807;
count__12121_12799 = G__12808;
i__12122_12800 = G__12809;
continue;
} else {
var temp__5823__auto___12810 = cljs.core.seq(seq__12119_12797);
if(temp__5823__auto___12810){
var seq__12119_12811__$1 = temp__5823__auto___12810;
if(cljs.core.chunked_seq_QMARK_(seq__12119_12811__$1)){
var c__5694__auto___12812 = cljs.core.chunk_first(seq__12119_12811__$1);
var G__12813 = cljs.core.chunk_rest(seq__12119_12811__$1);
var G__12814 = c__5694__auto___12812;
var G__12815 = cljs.core.count(c__5694__auto___12812);
var G__12816 = (0);
seq__12119_12797 = G__12813;
chunk__12120_12798 = G__12814;
count__12121_12799 = G__12815;
i__12122_12800 = G__12816;
continue;
} else {
var vec__12132_12817 = cljs.core.first(seq__12119_12811__$1);
var script_tag_12818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12132_12817,(0),null);
var script_body_12819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12132_12817,(1),null);
eval(script_body_12819);


var G__12820 = cljs.core.next(seq__12119_12811__$1);
var G__12821 = null;
var G__12822 = (0);
var G__12823 = (0);
seq__12119_12797 = G__12820;
chunk__12120_12798 = G__12821;
count__12121_12799 = G__12822;
i__12122_12800 = G__12823;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12135){
var vec__12136 = p__12135;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12136,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12136,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12142 = arguments.length;
switch (G__12142) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12143 = cljs.core.seq(style_keys);
var chunk__12144 = null;
var count__12145 = (0);
var i__12146 = (0);
while(true){
if((i__12146 < count__12145)){
var it = chunk__12144.cljs$core$IIndexed$_nth$arity$2(null,i__12146);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12851 = seq__12143;
var G__12852 = chunk__12144;
var G__12853 = count__12145;
var G__12854 = (i__12146 + (1));
seq__12143 = G__12851;
chunk__12144 = G__12852;
count__12145 = G__12853;
i__12146 = G__12854;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12143);
if(temp__5823__auto__){
var seq__12143__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12143__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12143__$1);
var G__12855 = cljs.core.chunk_rest(seq__12143__$1);
var G__12856 = c__5694__auto__;
var G__12857 = cljs.core.count(c__5694__auto__);
var G__12858 = (0);
seq__12143 = G__12855;
chunk__12144 = G__12856;
count__12145 = G__12857;
i__12146 = G__12858;
continue;
} else {
var it = cljs.core.first(seq__12143__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12859 = cljs.core.next(seq__12143__$1);
var G__12860 = null;
var G__12861 = (0);
var G__12862 = (0);
seq__12143 = G__12859;
chunk__12144 = G__12860;
count__12145 = G__12861;
i__12146 = G__12862;
continue;
}
} else {
return null;
}
}
break;
}
});

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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k12148,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__12152 = k12148;
var G__12152__$1 = (((G__12152 instanceof cljs.core.Keyword))?G__12152.fqn:null);
switch (G__12152__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12148,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__12153){
var vec__12154 = p__12153;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12154,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12154,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12147){
var self__ = this;
var G__12147__$1 = this;
return (new cljs.core.RecordIter((0),G__12147__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12149,other12150){
var self__ = this;
var this12149__$1 = this;
return (((!((other12150 == null)))) && ((((this12149__$1.constructor === other12150.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12149__$1.x,other12150.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12149__$1.y,other12150.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12149__$1.__extmap,other12150.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k12148){
var self__ = this;
var this__5476__auto____$1 = this;
var G__12157 = k12148;
var G__12157__$1 = (((G__12157 instanceof cljs.core.Keyword))?G__12157.fqn:null);
switch (G__12157__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12148);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12147){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12158 = cljs.core.keyword_identical_QMARK_;
var expr__12159 = k__5478__auto__;
if(cljs.core.truth_((pred__12158.cljs$core$IFn$_invoke$arity$2 ? pred__12158.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12159) : pred__12158.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12159)))){
return (new shadow.dom.Coordinate(G__12147,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12158.cljs$core$IFn$_invoke$arity$2 ? pred__12158.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12159) : pred__12158.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12159)))){
return (new shadow.dom.Coordinate(self__.x,G__12147,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__12147),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__12147){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12147,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12151){
var extmap__5511__auto__ = (function (){var G__12168 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12151,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12151)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12168);
} else {
return G__12168;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12151),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12151),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k12170,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__12174 = k12170;
var G__12174__$1 = (((G__12174 instanceof cljs.core.Keyword))?G__12174.fqn:null);
switch (G__12174__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12170,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__12175){
var vec__12176 = p__12175;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12176,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12176,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12169){
var self__ = this;
var G__12169__$1 = this;
return (new cljs.core.RecordIter((0),G__12169__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12171,other12172){
var self__ = this;
var this12171__$1 = this;
return (((!((other12172 == null)))) && ((((this12171__$1.constructor === other12172.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12171__$1.w,other12172.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12171__$1.h,other12172.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12171__$1.__extmap,other12172.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k12170){
var self__ = this;
var this__5476__auto____$1 = this;
var G__12179 = k12170;
var G__12179__$1 = (((G__12179 instanceof cljs.core.Keyword))?G__12179.fqn:null);
switch (G__12179__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12170);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12169){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12180 = cljs.core.keyword_identical_QMARK_;
var expr__12181 = k__5478__auto__;
if(cljs.core.truth_((pred__12180.cljs$core$IFn$_invoke$arity$2 ? pred__12180.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12181) : pred__12180.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12181)))){
return (new shadow.dom.Size(G__12169,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12180.cljs$core$IFn$_invoke$arity$2 ? pred__12180.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12181) : pred__12180.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12181)))){
return (new shadow.dom.Size(self__.w,G__12169,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__12169),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__12169){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12169,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12173){
var extmap__5511__auto__ = (function (){var G__12195 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12173,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12173)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12195);
} else {
return G__12195;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12173),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12173),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__12949 = (i + (1));
var G__12950 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12949;
ret = G__12950;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12202){
var vec__12203 = p__12202;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12203,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12210 = arguments.length;
switch (G__12210) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12966 = ps;
var G__12967 = (i + (1));
el__$1 = G__12966;
i = G__12967;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12223 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12223,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12223,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12223,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12226_12976 = cljs.core.seq(props);
var chunk__12227_12977 = null;
var count__12228_12978 = (0);
var i__12229_12979 = (0);
while(true){
if((i__12229_12979 < count__12228_12978)){
var vec__12237_12985 = chunk__12227_12977.cljs$core$IIndexed$_nth$arity$2(null,i__12229_12979);
var k_12986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12237_12985,(0),null);
var v_12987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12237_12985,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_12986);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12986),v_12987);


var G__12989 = seq__12226_12976;
var G__12990 = chunk__12227_12977;
var G__12991 = count__12228_12978;
var G__12992 = (i__12229_12979 + (1));
seq__12226_12976 = G__12989;
chunk__12227_12977 = G__12990;
count__12228_12978 = G__12991;
i__12229_12979 = G__12992;
continue;
} else {
var temp__5823__auto___12993 = cljs.core.seq(seq__12226_12976);
if(temp__5823__auto___12993){
var seq__12226_12994__$1 = temp__5823__auto___12993;
if(cljs.core.chunked_seq_QMARK_(seq__12226_12994__$1)){
var c__5694__auto___12996 = cljs.core.chunk_first(seq__12226_12994__$1);
var G__12997 = cljs.core.chunk_rest(seq__12226_12994__$1);
var G__12998 = c__5694__auto___12996;
var G__12999 = cljs.core.count(c__5694__auto___12996);
var G__13000 = (0);
seq__12226_12976 = G__12997;
chunk__12227_12977 = G__12998;
count__12228_12978 = G__12999;
i__12229_12979 = G__13000;
continue;
} else {
var vec__12241_13001 = cljs.core.first(seq__12226_12994__$1);
var k_13002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12241_13001,(0),null);
var v_13003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12241_13001,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_13002);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13002),v_13003);


var G__13004 = cljs.core.next(seq__12226_12994__$1);
var G__13005 = null;
var G__13006 = (0);
var G__13007 = (0);
seq__12226_12976 = G__13004;
chunk__12227_12977 = G__13005;
count__12228_12978 = G__13006;
i__12229_12979 = G__13007;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12252 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12252,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12252,(1),null);
var seq__12255_13010 = cljs.core.seq(node_children);
var chunk__12257_13011 = null;
var count__12258_13012 = (0);
var i__12259_13013 = (0);
while(true){
if((i__12259_13013 < count__12258_13012)){
var child_struct_13016 = chunk__12257_13011.cljs$core$IIndexed$_nth$arity$2(null,i__12259_13013);
if((!((child_struct_13016 == null)))){
if(typeof child_struct_13016 === 'string'){
var text_13018 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13018)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13016)));
} else {
var children_13019 = shadow.dom.svg_node(child_struct_13016);
if(cljs.core.seq_QMARK_(children_13019)){
var seq__12315_13021 = cljs.core.seq(children_13019);
var chunk__12317_13022 = null;
var count__12318_13023 = (0);
var i__12319_13024 = (0);
while(true){
if((i__12319_13024 < count__12318_13023)){
var child_13026 = chunk__12317_13022.cljs$core$IIndexed$_nth$arity$2(null,i__12319_13024);
if(cljs.core.truth_(child_13026)){
node.appendChild(child_13026);


var G__13027 = seq__12315_13021;
var G__13028 = chunk__12317_13022;
var G__13029 = count__12318_13023;
var G__13030 = (i__12319_13024 + (1));
seq__12315_13021 = G__13027;
chunk__12317_13022 = G__13028;
count__12318_13023 = G__13029;
i__12319_13024 = G__13030;
continue;
} else {
var G__13032 = seq__12315_13021;
var G__13033 = chunk__12317_13022;
var G__13034 = count__12318_13023;
var G__13035 = (i__12319_13024 + (1));
seq__12315_13021 = G__13032;
chunk__12317_13022 = G__13033;
count__12318_13023 = G__13034;
i__12319_13024 = G__13035;
continue;
}
} else {
var temp__5823__auto___13036 = cljs.core.seq(seq__12315_13021);
if(temp__5823__auto___13036){
var seq__12315_13037__$1 = temp__5823__auto___13036;
if(cljs.core.chunked_seq_QMARK_(seq__12315_13037__$1)){
var c__5694__auto___13039 = cljs.core.chunk_first(seq__12315_13037__$1);
var G__13040 = cljs.core.chunk_rest(seq__12315_13037__$1);
var G__13041 = c__5694__auto___13039;
var G__13042 = cljs.core.count(c__5694__auto___13039);
var G__13043 = (0);
seq__12315_13021 = G__13040;
chunk__12317_13022 = G__13041;
count__12318_13023 = G__13042;
i__12319_13024 = G__13043;
continue;
} else {
var child_13045 = cljs.core.first(seq__12315_13037__$1);
if(cljs.core.truth_(child_13045)){
node.appendChild(child_13045);


var G__13046 = cljs.core.next(seq__12315_13037__$1);
var G__13047 = null;
var G__13048 = (0);
var G__13049 = (0);
seq__12315_13021 = G__13046;
chunk__12317_13022 = G__13047;
count__12318_13023 = G__13048;
i__12319_13024 = G__13049;
continue;
} else {
var G__13050 = cljs.core.next(seq__12315_13037__$1);
var G__13051 = null;
var G__13052 = (0);
var G__13053 = (0);
seq__12315_13021 = G__13050;
chunk__12317_13022 = G__13051;
count__12318_13023 = G__13052;
i__12319_13024 = G__13053;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13019);
}
}


var G__13055 = seq__12255_13010;
var G__13056 = chunk__12257_13011;
var G__13057 = count__12258_13012;
var G__13058 = (i__12259_13013 + (1));
seq__12255_13010 = G__13055;
chunk__12257_13011 = G__13056;
count__12258_13012 = G__13057;
i__12259_13013 = G__13058;
continue;
} else {
var G__13059 = seq__12255_13010;
var G__13060 = chunk__12257_13011;
var G__13061 = count__12258_13012;
var G__13062 = (i__12259_13013 + (1));
seq__12255_13010 = G__13059;
chunk__12257_13011 = G__13060;
count__12258_13012 = G__13061;
i__12259_13013 = G__13062;
continue;
}
} else {
var temp__5823__auto___13063 = cljs.core.seq(seq__12255_13010);
if(temp__5823__auto___13063){
var seq__12255_13064__$1 = temp__5823__auto___13063;
if(cljs.core.chunked_seq_QMARK_(seq__12255_13064__$1)){
var c__5694__auto___13065 = cljs.core.chunk_first(seq__12255_13064__$1);
var G__13066 = cljs.core.chunk_rest(seq__12255_13064__$1);
var G__13067 = c__5694__auto___13065;
var G__13068 = cljs.core.count(c__5694__auto___13065);
var G__13069 = (0);
seq__12255_13010 = G__13066;
chunk__12257_13011 = G__13067;
count__12258_13012 = G__13068;
i__12259_13013 = G__13069;
continue;
} else {
var child_struct_13070 = cljs.core.first(seq__12255_13064__$1);
if((!((child_struct_13070 == null)))){
if(typeof child_struct_13070 === 'string'){
var text_13072 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13072)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13070)));
} else {
var children_13075 = shadow.dom.svg_node(child_struct_13070);
if(cljs.core.seq_QMARK_(children_13075)){
var seq__12325_13076 = cljs.core.seq(children_13075);
var chunk__12327_13077 = null;
var count__12328_13078 = (0);
var i__12329_13079 = (0);
while(true){
if((i__12329_13079 < count__12328_13078)){
var child_13080 = chunk__12327_13077.cljs$core$IIndexed$_nth$arity$2(null,i__12329_13079);
if(cljs.core.truth_(child_13080)){
node.appendChild(child_13080);


var G__13081 = seq__12325_13076;
var G__13082 = chunk__12327_13077;
var G__13083 = count__12328_13078;
var G__13084 = (i__12329_13079 + (1));
seq__12325_13076 = G__13081;
chunk__12327_13077 = G__13082;
count__12328_13078 = G__13083;
i__12329_13079 = G__13084;
continue;
} else {
var G__13085 = seq__12325_13076;
var G__13086 = chunk__12327_13077;
var G__13087 = count__12328_13078;
var G__13088 = (i__12329_13079 + (1));
seq__12325_13076 = G__13085;
chunk__12327_13077 = G__13086;
count__12328_13078 = G__13087;
i__12329_13079 = G__13088;
continue;
}
} else {
var temp__5823__auto___13089__$1 = cljs.core.seq(seq__12325_13076);
if(temp__5823__auto___13089__$1){
var seq__12325_13091__$1 = temp__5823__auto___13089__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12325_13091__$1)){
var c__5694__auto___13092 = cljs.core.chunk_first(seq__12325_13091__$1);
var G__13094 = cljs.core.chunk_rest(seq__12325_13091__$1);
var G__13095 = c__5694__auto___13092;
var G__13096 = cljs.core.count(c__5694__auto___13092);
var G__13097 = (0);
seq__12325_13076 = G__13094;
chunk__12327_13077 = G__13095;
count__12328_13078 = G__13096;
i__12329_13079 = G__13097;
continue;
} else {
var child_13098 = cljs.core.first(seq__12325_13091__$1);
if(cljs.core.truth_(child_13098)){
node.appendChild(child_13098);


var G__13100 = cljs.core.next(seq__12325_13091__$1);
var G__13101 = null;
var G__13102 = (0);
var G__13103 = (0);
seq__12325_13076 = G__13100;
chunk__12327_13077 = G__13101;
count__12328_13078 = G__13102;
i__12329_13079 = G__13103;
continue;
} else {
var G__13105 = cljs.core.next(seq__12325_13091__$1);
var G__13106 = null;
var G__13107 = (0);
var G__13108 = (0);
seq__12325_13076 = G__13105;
chunk__12327_13077 = G__13106;
count__12328_13078 = G__13107;
i__12329_13079 = G__13108;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13075);
}
}


var G__13110 = cljs.core.next(seq__12255_13064__$1);
var G__13111 = null;
var G__13112 = (0);
var G__13113 = (0);
seq__12255_13010 = G__13110;
chunk__12257_13011 = G__13111;
count__12258_13012 = G__13112;
i__12259_13013 = G__13113;
continue;
} else {
var G__13115 = cljs.core.next(seq__12255_13064__$1);
var G__13116 = null;
var G__13117 = (0);
var G__13118 = (0);
seq__12255_13010 = G__13115;
chunk__12257_13011 = G__13116;
count__12258_13012 = G__13117;
i__12259_13013 = G__13118;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___13125 = arguments.length;
var i__5898__auto___13130 = (0);
while(true){
if((i__5898__auto___13130 < len__5897__auto___13125)){
args__5903__auto__.push((arguments[i__5898__auto___13130]));

var G__13131 = (i__5898__auto___13130 + (1));
i__5898__auto___13130 = G__13131;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12369){
var G__12371 = cljs.core.first(seq12369);
var seq12369__$1 = cljs.core.next(seq12369);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12371,seq12369__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
