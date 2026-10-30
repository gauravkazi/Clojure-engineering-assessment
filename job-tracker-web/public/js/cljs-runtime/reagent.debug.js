goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11887__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11888__i = 0, G__11888__a = new Array(arguments.length -  0);
while (G__11888__i < G__11888__a.length) {G__11888__a[G__11888__i] = arguments[G__11888__i + 0]; ++G__11888__i;}
  args = new cljs.core.IndexedSeq(G__11888__a,0,null);
} 
return G__11887__delegate.call(this,args);};
G__11887.cljs$lang$maxFixedArity = 0;
G__11887.cljs$lang$applyTo = (function (arglist__11889){
var args = cljs.core.seq(arglist__11889);
return G__11887__delegate(args);
});
G__11887.cljs$core$IFn$_invoke$arity$variadic = G__11887__delegate;
return G__11887;
})()
);

(o.error = (function() { 
var G__11890__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11891__i = 0, G__11891__a = new Array(arguments.length -  0);
while (G__11891__i < G__11891__a.length) {G__11891__a[G__11891__i] = arguments[G__11891__i + 0]; ++G__11891__i;}
  args = new cljs.core.IndexedSeq(G__11891__a,0,null);
} 
return G__11890__delegate.call(this,args);};
G__11890.cljs$lang$maxFixedArity = 0;
G__11890.cljs$lang$applyTo = (function (arglist__11892){
var args = cljs.core.seq(arglist__11892);
return G__11890__delegate(args);
});
G__11890.cljs$core$IFn$_invoke$arity$variadic = G__11890__delegate;
return G__11890;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
