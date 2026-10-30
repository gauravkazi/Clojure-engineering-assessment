goog.provide('app.core');
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
app.core.api_url = " https://clojure-engineering-assessment.onrender.com";
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.applications !== 'undefined')){
} else {
app.core.applications = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.selected_status !== 'undefined')){
} else {
app.core.selected_status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all","all",892129742));
}
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.company_input !== 'undefined')){
} else {
app.core.company_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.role_input !== 'undefined')){
} else {
app.core.role_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
app.core.fetch_applications = (function app$core$fetch_applications(){
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.core.api_url)+"/applications")).then((function (response){
return response.json();
})).then((function (data){
return cljs.core.reset_BANG_(app.core.applications,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__12073_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__12073_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
})).catch((function (error){
return console.error(error);
}));
});
app.core.update_application_status = (function app$core$update_application_status(app__$1,new_status){
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.core.api_url)+"/applications"),({"method": "PATCH", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.name(new_status)], null)))})).then((function (response){
if(cljs.core.truth_(response.ok)){
return app.core.fetch_applications();
} else {
return console.error("Failed to update status");
}
})).catch((function (error){
return console.error(error);
}));
});
app.core.add_application = (function app$core$add_application(company,role){
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.core.api_url)+"/applications"),({"method": "POST", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company","company",-340475075),company,new cljs.core.Keyword(null,"role","role",-736691072),role], null)))})).then((function (response){
if(cljs.core.truth_(response.ok)){
return app.core.fetch_applications();
} else {
return console.error("Failed to add application");
}
})).catch((function (error){
return console.error(error);
}));
});
app.core.status_label = (function app$core$status_label(status){
var G__12074 = status;
var G__12074__$1 = (((G__12074 instanceof cljs.core.Keyword))?G__12074.fqn:null);
switch (G__12074__$1) {
case "applied":
return "Applied";

break;
case "interview":
return "Interview";

break;
case "offer":
return "Offer";

break;
case "rejected":
return "Rejected";

break;
default:
return "Unknown";

}
});
app.core.stat_card = (function app$core$stat_card(title,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-card","div.stat-card",-1315972816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),value], null)], null);
});
app.core.summary_cards = (function app$core$summary_cards(){
var apps = cljs.core.deref(app.core.applications);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.summary-grid","section.summary-grid",1505810053),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.stat_card,"Total Applications",cljs.core.count(apps)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.stat_card,"Applied",cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12075_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"applied","applied",-1208896155),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__12075_SHARP_));
}),apps))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.stat_card,"Interviews",cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12076_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"interview","interview",-615046892),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__12076_SHARP_));
}),apps))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.stat_card,"Offers",cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12077_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offer","offer",-124575128),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__12077_SHARP_));
}),apps))], null)], null);
});
app.core.filter_button = (function app$core$filter_button(status,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.core.selected_status),status))?"filter-btn active":"filter-btn"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(app.core.selected_status,status);
})], null),label], null);
});
app.core.application_table = (function app$core$application_table(){
var apps = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.core.selected_status),new cljs.core.Keyword(null,"all","all",892129742)))?cljs.core.deref(app.core.applications):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12078_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.core.selected_status),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__12078_SHARP_));
}),cljs.core.deref(app.core.applications)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Company"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Job Role"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Update Status"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),((cljs.core.seq(apps))?(function (){var iter__5649__auto__ = (function app$core$application_table_$_iter__12079(s__12080){
return (new cljs.core.LazySeq(null,(function (){
var s__12080__$1 = s__12080;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12080__$1);
if(temp__5823__auto__){
var s__12080__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12080__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__12080__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__12082 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__12081 = (0);
while(true){
if((i__12081 < size__5648__auto__)){
var app__$1 = cljs.core._nth(c__5647__auto__,i__12081);
cljs.core.chunk_append(b__12082,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(app__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(app__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.status-badge","span.status-badge",-1815605140),app.core.status_label(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(app__$1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(app__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__12081,app__$1,c__5647__auto__,size__5648__auto__,b__12082,s__12080__$2,temp__5823__auto__,apps){
return (function (event){
var new_status = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.target.value);
return app.core.update_application_status(app__$1,new_status);
});})(i__12081,app__$1,c__5647__auto__,size__5648__auto__,b__12082,s__12080__$2,temp__5823__auto__,apps))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"applied"], null),"Applied"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"interview"], null),"Interview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"offer"], null),"Offer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"rejected"], null),"Rejected"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app__$1)], null)));

var G__12086 = (i__12081 + (1));
i__12081 = G__12086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12082),app$core$application_table_$_iter__12079(cljs.core.chunk_rest(s__12080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12082),null);
}
} else {
var app__$1 = cljs.core.first(s__12080__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(app__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(app__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.status-badge","span.status-badge",-1815605140),app.core.status_label(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(app__$1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(app__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (app__$1,s__12080__$2,temp__5823__auto__,apps){
return (function (event){
var new_status = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.target.value);
return app.core.update_application_status(app__$1,new_status);
});})(app__$1,s__12080__$2,temp__5823__auto__,apps))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"applied"], null),"Applied"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"interview"], null),"Interview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"offer"], null),"Offer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"rejected"], null),"Rejected"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app__$1)], null)),app$core$application_table_$_iter__12079(cljs.core.rest(s__12080__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(apps);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(4)], null),"No applications found."], null)], null))], null)], null);
});
app.core.add_application_form = (function app$core$add_application_form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.add-application-form","form.add-application-form",1859816716),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (event){
event.preventDefault();

if(((cljs.core.seq(cljs.core.deref(app.core.company_input))) && (cljs.core.seq(cljs.core.deref(app.core.role_input))))){
app.core.add_application(cljs.core.deref(app.core.company_input),cljs.core.deref(app.core.role_input));

cljs.core.reset_BANG_(app.core.company_input,"");

return cljs.core.reset_BANG_(app.core.role_input,"");
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Company name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(app.core.company_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12083_SHARP_){
return cljs.core.reset_BANG_(app.core.company_input,p1__12083_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Job role",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(app.core.role_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12084_SHARP_){
return cljs.core.reset_BANG_(app.core.role_input,p1__12084_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Add Application"], null)], null);
});
app.core.dashboard = (function app$core$dashboard(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.dashboard","main.dashboard",189206105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"CAREER MANAGEMENT"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Job Tracker"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Keep track of your job applications in one place."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.summary_cards], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your Applications"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.add_application_form], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filters","div.filters",797693886),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.filter_button,new cljs.core.Keyword(null,"all","all",892129742),"All"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.filter_button,new cljs.core.Keyword(null,"applied","applied",-1208896155),"Applied"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.filter_button,new cljs.core.Keyword(null,"interview","interview",-615046892),"Interview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.filter_button,new cljs.core.Keyword(null,"offer","offer",-124575128),"Offer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.filter_button,new cljs.core.Keyword(null,"rejected","rejected",231052999),"Rejected"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.application_table], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),"Job Tracker | Built with ClojureScript and Reagent"], null)], null);
});
app.core.init = (function app$core$init(){
reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(app.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.dashboard], null));

return app.core.fetch_applications();
});

//# sourceMappingURL=app.core.js.map
