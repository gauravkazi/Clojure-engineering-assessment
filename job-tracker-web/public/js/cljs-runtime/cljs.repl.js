goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19056){
var map__19058 = p__19056;
var map__19058__$1 = cljs.core.__destructure_map(map__19058);
var m = map__19058__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19086_19493 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19087_19494 = null;
var count__19088_19495 = (0);
var i__19089_19496 = (0);
while(true){
if((i__19089_19496 < count__19088_19495)){
var f_19501 = chunk__19087_19494.cljs$core$IIndexed$_nth$arity$2(null,i__19089_19496);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19501], 0));


var G__19502 = seq__19086_19493;
var G__19503 = chunk__19087_19494;
var G__19504 = count__19088_19495;
var G__19505 = (i__19089_19496 + (1));
seq__19086_19493 = G__19502;
chunk__19087_19494 = G__19503;
count__19088_19495 = G__19504;
i__19089_19496 = G__19505;
continue;
} else {
var temp__5823__auto___19506 = cljs.core.seq(seq__19086_19493);
if(temp__5823__auto___19506){
var seq__19086_19508__$1 = temp__5823__auto___19506;
if(cljs.core.chunked_seq_QMARK_(seq__19086_19508__$1)){
var c__5694__auto___19510 = cljs.core.chunk_first(seq__19086_19508__$1);
var G__19511 = cljs.core.chunk_rest(seq__19086_19508__$1);
var G__19512 = c__5694__auto___19510;
var G__19513 = cljs.core.count(c__5694__auto___19510);
var G__19514 = (0);
seq__19086_19493 = G__19511;
chunk__19087_19494 = G__19512;
count__19088_19495 = G__19513;
i__19089_19496 = G__19514;
continue;
} else {
var f_19516 = cljs.core.first(seq__19086_19508__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19516], 0));


var G__19517 = cljs.core.next(seq__19086_19508__$1);
var G__19518 = null;
var G__19519 = (0);
var G__19520 = (0);
seq__19086_19493 = G__19517;
chunk__19087_19494 = G__19518;
count__19088_19495 = G__19519;
i__19089_19496 = G__19520;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19521 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19521], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19521)))?cljs.core.second(arglists_19521):arglists_19521)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19133_19530 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19134_19531 = null;
var count__19135_19532 = (0);
var i__19136_19533 = (0);
while(true){
if((i__19136_19533 < count__19135_19532)){
var vec__19146_19534 = chunk__19134_19531.cljs$core$IIndexed$_nth$arity$2(null,i__19136_19533);
var name_19535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19146_19534,(0),null);
var map__19149_19536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19146_19534,(1),null);
var map__19149_19537__$1 = cljs.core.__destructure_map(map__19149_19536);
var doc_19538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19149_19537__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19149_19537__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19535], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19539], 0));

if(cljs.core.truth_(doc_19538)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19538], 0));
} else {
}


var G__19544 = seq__19133_19530;
var G__19545 = chunk__19134_19531;
var G__19546 = count__19135_19532;
var G__19547 = (i__19136_19533 + (1));
seq__19133_19530 = G__19544;
chunk__19134_19531 = G__19545;
count__19135_19532 = G__19546;
i__19136_19533 = G__19547;
continue;
} else {
var temp__5823__auto___19549 = cljs.core.seq(seq__19133_19530);
if(temp__5823__auto___19549){
var seq__19133_19550__$1 = temp__5823__auto___19549;
if(cljs.core.chunked_seq_QMARK_(seq__19133_19550__$1)){
var c__5694__auto___19551 = cljs.core.chunk_first(seq__19133_19550__$1);
var G__19554 = cljs.core.chunk_rest(seq__19133_19550__$1);
var G__19555 = c__5694__auto___19551;
var G__19556 = cljs.core.count(c__5694__auto___19551);
var G__19557 = (0);
seq__19133_19530 = G__19554;
chunk__19134_19531 = G__19555;
count__19135_19532 = G__19556;
i__19136_19533 = G__19557;
continue;
} else {
var vec__19150_19560 = cljs.core.first(seq__19133_19550__$1);
var name_19561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19150_19560,(0),null);
var map__19153_19562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19150_19560,(1),null);
var map__19153_19563__$1 = cljs.core.__destructure_map(map__19153_19562);
var doc_19564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19153_19563__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19153_19563__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19561], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19565], 0));

if(cljs.core.truth_(doc_19564)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19564], 0));
} else {
}


var G__19571 = cljs.core.next(seq__19133_19550__$1);
var G__19572 = null;
var G__19573 = (0);
var G__19574 = (0);
seq__19133_19530 = G__19571;
chunk__19134_19531 = G__19572;
count__19135_19532 = G__19573;
i__19136_19533 = G__19574;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19157 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19158 = null;
var count__19159 = (0);
var i__19160 = (0);
while(true){
if((i__19160 < count__19159)){
var role = chunk__19158.cljs$core$IIndexed$_nth$arity$2(null,i__19160);
var temp__5823__auto___19585__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19585__$1)){
var spec_19586 = temp__5823__auto___19585__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19586)], 0));
} else {
}


var G__19591 = seq__19157;
var G__19592 = chunk__19158;
var G__19593 = count__19159;
var G__19594 = (i__19160 + (1));
seq__19157 = G__19591;
chunk__19158 = G__19592;
count__19159 = G__19593;
i__19160 = G__19594;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__19157);
if(temp__5823__auto____$1){
var seq__19157__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19157__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__19157__$1);
var G__19598 = cljs.core.chunk_rest(seq__19157__$1);
var G__19600 = c__5694__auto__;
var G__19602 = cljs.core.count(c__5694__auto__);
var G__19604 = (0);
seq__19157 = G__19598;
chunk__19158 = G__19600;
count__19159 = G__19602;
i__19160 = G__19604;
continue;
} else {
var role = cljs.core.first(seq__19157__$1);
var temp__5823__auto___19610__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19610__$2)){
var spec_19611 = temp__5823__auto___19610__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19611)], 0));
} else {
}


var G__19613 = cljs.core.next(seq__19157__$1);
var G__19614 = null;
var G__19615 = (0);
var G__19616 = (0);
seq__19157 = G__19613;
chunk__19158 = G__19614;
count__19159 = G__19615;
i__19160 = G__19616;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19188 = datafied_throwable;
var map__19188__$1 = cljs.core.__destructure_map(map__19188);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19188__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19188__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19188__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19189 = cljs.core.last(via);
var map__19189__$1 = cljs.core.__destructure_map(map__19189);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19189__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19189__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19189__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19190 = data;
var map__19190__$1 = cljs.core.__destructure_map(map__19190);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19191 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19191__$1 = cljs.core.__destructure_map(map__19191);
var top_data = map__19191__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19191__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19195 = phase;
var G__19195__$1 = (((G__19195 instanceof cljs.core.Keyword))?G__19195.fqn:null);
switch (G__19195__$1) {
case "read-source":
var map__19198 = data;
var map__19198__$1 = cljs.core.__destructure_map(map__19198);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19198__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19198__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19199 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19199__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19199,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19199);
var G__19199__$2 = (cljs.core.truth_((function (){var fexpr__19202 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19202.cljs$core$IFn$_invoke$arity$1 ? fexpr__19202.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19202.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19199__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19199__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19199__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19199__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19203 = top_data;
var G__19203__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19203,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19203);
var G__19203__$2 = (cljs.core.truth_((function (){var fexpr__19206 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19206.cljs$core$IFn$_invoke$arity$1 ? fexpr__19206.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19206.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19203__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19203__$1);
var G__19203__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19203__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19203__$2);
var G__19203__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19203__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19203__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19203__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19203__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19211 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19211,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19211,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19211,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19211,(3),null);
var G__19215 = top_data;
var G__19215__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19215,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19215);
var G__19215__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19215__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19215__$1);
var G__19215__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19215__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19215__$2);
var G__19215__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19215__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19215__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19215__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19215__$4;
}

break;
case "execution":
var vec__19218 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19218,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19218,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19218,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19218,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19177_SHARP_){
var or__5162__auto__ = (p1__19177_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__19227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19227.cljs$core$IFn$_invoke$arity$1 ? fexpr__19227.cljs$core$IFn$_invoke$arity$1(p1__19177_SHARP_) : fexpr__19227.call(null,p1__19177_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__19228 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19228__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19228,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19228);
var G__19228__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19228__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19228__$1);
var G__19228__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19228__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19228__$2);
var G__19228__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19228__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19228__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19228__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19228__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19195__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19260){
var map__19261 = p__19260;
var map__19261__$1 = cljs.core.__destructure_map(map__19261);
var triage_data = map__19261__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__19321 = phase;
var G__19321__$1 = (((G__19321 instanceof cljs.core.Keyword))?G__19321.fqn:null);
switch (G__19321__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19343 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19344 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19345 = loc;
var G__19346 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19361_19726 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19362_19728 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19363_19734 = true;
var _STAR_print_fn_STAR__temp_val__19364_19736 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19363_19734);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19364_19736);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19236_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19236_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19362_19728);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19361_19726);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19343,G__19344,G__19345,G__19346) : format.call(null,G__19343,G__19344,G__19345,G__19346));

break;
case "macroexpansion":
var G__19400 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19401 = cause_type;
var G__19402 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19403 = loc;
var G__19404 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19400,G__19401,G__19402,G__19403,G__19404) : format.call(null,G__19400,G__19401,G__19402,G__19403,G__19404));

break;
case "compile-syntax-check":
var G__19412 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19413 = cause_type;
var G__19414 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19415 = loc;
var G__19416 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19412,G__19413,G__19414,G__19415,G__19416) : format.call(null,G__19412,G__19413,G__19414,G__19415,G__19416));

break;
case "compilation":
var G__19422 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19424 = cause_type;
var G__19427 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19428 = loc;
var G__19429 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19422,G__19424,G__19427,G__19428,G__19429) : format.call(null,G__19422,G__19424,G__19427,G__19428,G__19429));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19433 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19434 = symbol;
var G__19435 = loc;
var G__19436 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19446_19798 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19447_19799 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19448_19800 = true;
var _STAR_print_fn_STAR__temp_val__19449_19801 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19448_19800);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19449_19801);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19242_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19242_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19447_19799);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19446_19798);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19433,G__19434,G__19435,G__19436) : format.call(null,G__19433,G__19434,G__19435,G__19436));
} else {
var G__19474 = "Execution error%s at %s(%s).\n%s\n";
var G__19475 = cause_type;
var G__19476 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19477 = loc;
var G__19478 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19474,G__19475,G__19476,G__19477,G__19478) : format.call(null,G__19474,G__19475,G__19476,G__19477,G__19478));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19321__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
