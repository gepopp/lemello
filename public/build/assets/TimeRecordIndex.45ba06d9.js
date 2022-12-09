import{d as c,q as $,m as y,o as l,c as f,w as v,a as t,t as o,b as m,i as x,e as n,h as w,F as g,f as h,p as T,n as M}from"./app.902c1631.js";import{S as N}from"./Seperator.c7348baa.js";import{_ as S}from"./Label.e87d20e0.js";import{_ as L}from"./ContactSelect.6afe4676.js";import{_ as j}from"./TimeTrackForm.1f6917da.js";import{_ as B}from"./AppLayout.1e89a0c4.js";import{_ as H,a as R}from"./Projectbox.10c719ed.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Input.0ba70f7a.js";import"./Button.03a0c649.js";import"./GenderIcon.6c536da0.js";const V={class:"font-semibold text-xl text-gray-800 leading-tight"},A={class:"p-3 bg-gray-100"},D={class:"text-xl font-bold"},F={class:"my-2"},k={class:"table-auto w-full"},z={class:"text-xs font-thin"},I={class:"text-right"},P={class:"text-right"},q=["onClick"],E={key:0,textContent:" - "},G={class:"text-xs font-thin"},J={class:"text-xs font-thin"},K={class:"text-right"},O={class:"text-xs font-thin"},Q={class:"text-xs font-thin"},U={class:"text-right"},W={class:"text-xs font-thin"},X={class:"text-xs font-thin"},Y={colspan:"5"},Z={class:"flex justify-between"},tt={key:0},et={class:"flex flex-wrap -mb-1"},st=["innerHTML"],ot=["onClick","innerHTML"],vt={__name:"TimeRecordIndex",props:{sum:String,count:Number},setup(lt){const b=c({}),i=c({}),a=c(0),r=c(!1);$(()=>d());const d=()=>{axios.get(route("timetrack.loadIndex",{page:a.value,customer_id:r.value})).then(s=>{b.value=s.data.data,i.value=s.data.links})},C=s=>{s===0&&a.value>1?a.value--:s===i.value.length-1&&a.value<i.value.length-1?a.value++:s!==0&&s!==i.value.length-1&&(a.value=s)};return y(()=>a.value,s=>d()),y(()=>r.value,s=>d()),(s,_)=>(l(),f(B,{title:s.__("Timetrack")},{header:v(()=>[t("h2",V,o(s.__("Timetrack")),1)]),default:v(()=>[t("div",A,[t("h3",D,o(s.__("New Time Record")),1),m(j,{onSaved:d})]),m(N),t("div",F,[m(S,{class:"mb-1"},{default:v(()=>[x(o(s.__("Filter")),1)]),_:1}),m(L,{contact:null,filter:{tracks:!0},onRemove:_[0]||(_[0]=e=>r.value=0),onSet:_[1]||(_[1]=e=>r.value=e.id),address:!1})]),t("table",k,[t("thead",null,[t("tr",null,[t("th",null,o(s.__("Am")),1),t("th",null,o(s.__("Customer")),1),t("th",null,[t("p",null,o(s.__("Duration")),1),t("p",z,o(s.__("in Dezimal")),1)]),t("th",I,o(s.__("Rate")),1),t("th",P,o(s.__("Netto")),1)])]),t("tbody",null,[(l(!0),n(g,null,w(b.value,e=>{var u,p;return l(),n("tr",{onClick:T(nt=>s.$inertia.visit(s.route("timetrack.show",e)),["prevent"])},[t("td",null,[t("p",null,[x(o(e.started)+" ",1),e.ended!==""?(l(),n("span",E)):h("",!0),x(o(e.ended),1)]),t("p",G,o(e.created),1)]),t("td",null,[((u=e.timetrackable)==null?void 0:u.classname)=="App\\Models\\Contact"?(l(),f(H,{key:0,contact:e.timetrackable},null,8,["contact"])):h("",!0),((p=e.timetrackable)==null?void 0:p.classname)=="App\\Models\\Project"?(l(),f(R,{key:1,project:e.timetrackable},null,8,["project"])):h("",!0)]),t("td",null,[t("p",null,o(e.duration),1),t("p",J,o(e.duration_float),1)]),t("td",K,[t("p",null,o(e.rate),1),t("p",O,o(e.rate_vat),1),t("p",Q,o(e.rate_btto),1)]),t("td",U,[t("p",null,o(e.netto),1),t("p",W,o(e.vat),1),t("p",X,o(e.brutto),1)])],8,q)}),256))]),t("tfoot",null,[t("tr",null,[t("td",Y,[t("div",Z,[i.value.length>3?(l(),n("div",tt,[t("div",et,[(l(!0),n(g,null,w(i.value,(e,u)=>(l(),n(g,null,[e.url===null?(l(),n("div",{key:0,class:"mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border",innerHTML:e.label},null,8,st)):(l(),n("div",{key:1,onClick:p=>C(u),class:M(["mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-orange-500 cursor-pointer",{"text-orange-500 font-bold":e.active}]),innerHTML:e.label},null,10,ot))],64))),256))])])):h("",!0)])])])])])]),_:1},8,["title"]))}};export{vt as default};
