import{d as k,q as w,o as i,c as u,w as d,a as t,t as s,b as l,g as f,L as b,e as y,f as _,l as v}from"./app.245c0250.js";import{_ as x}from"./AppLayout.4aeb610f.js";import{S as r}from"./Seperator.2273670c.js";import{_ as j,a as M}from"./Projectbox.a8b3dafe.js";import{_ as H}from"./DeleteModel.616d83e8.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./GenderIcon.4d5c1db3.js";import"./ConfirmsPassword.7ea7d135.js";import"./Button.3acf0117.js";import"./DialogModal.e6d4ac94.js";import"./Input.0ef568d3.js";import"./InputError.0ed15531.js";import"./SecondaryButton.261cc939.js";const Y={class:"font-semibold text-xl text-gray-800 leading-tight"},T={class:"relative"},B={class:"absolute top-0 right-0 -mt-16 flex space-x-3"},D={class:"w-14 h-14 rounded-full bg-orange-200 shadow-3xl"},V=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1),A={class:"grid grid-cols-1 md:grid-cols-2 md:gap-x-10"},L={class:"mb-5"},C={class:"whitespace-pre"},N={class:"flex justify-between font-semibold"},R={class:"flex justify-between"},S=t("span",null,"Von:",-1),$={class:"flex justify-between"},z={class:"flex justify-between"},P={class:"flex justify-between"},q={class:"flex justify-between"},E=t("strong",null,"95.43 \u20AC",-1),O={class:"flex justify-between"},F={class:"flex justify-between"},G={class:"flex justify-between"},I={key:0,class:"border text-gray-800 p-2 flex space-x-3 animate-pulse"},J=t("div",{class:"w-8 h-8 bg-gray-200 animate-pulse flex-shrink-0"},null,-1),K=t("div",{class:"animate-pulse"},[t("p",{class:"bg-gray-200 w-48 max-w-full animate-pulse animate-pulse"},"\xA0"),t("p",{class:"text-xs font-semibold bg-gray-200 animate-pulse w-36 max-w-full mt-1"},"\xA0"),t("p",{class:"text-xs font-thin bg-gray-200 w-96 max-w-full animate-pulse mt-1"},"\xA0")],-1),Q=[J,K],ct={__name:"TimeRecordShow",props:{timetrack:Object},setup(a){const g=a,n=k(null),h=k(!0),c=window.moment;w(()=>{axios.get(route("timetrackable",{timetrack:g.timetrack})).then(e=>n.value=e.data).finally(e=>h.value=!1)});const m=(e,p="DD.MM.YYYY HH:mm")=>e?c(e).locale(v().props.value.locale).format(p):"",o=e=>Math.round(e*100)/100;return(e,p)=>(i(),u(x,{title:e.__("Time Record")},{header:d(()=>[t("h2",Y,s(e.__("Time Record")),1)]),default:d(()=>[t("div",T,[t("div",B,[t("div",D,[l(f(b),{href:e.route("timetrack.edit",a.timetrack),class:"flex justify-center items-center h-full w-full"},{default:d(()=>[V]),_:1},8,["href"])]),l(H,{"delete-route":e.route("timetrack.destroy",a.timetrack),"always-confirm":!0},null,8,["delete-route"])]),t("div",A,[t("div",L,[t("p",C,s(a.timetrack.note),1)]),l(r),t("div",null,[t("p",N,[t("span",null,s(e.__("Tracked at:")),1),t("span",null,s(m(a.timetrack.started_at,"DD.MM.YYYY")),1)]),t("p",R,[S,t("strong",null,s(m(a.timetrack.started_at,"HH:mm")),1)]),t("p",$,[t("span",null,s(e.__("To:")),1),t("strong",null,s(m(a.timetrack.ended_at,"HH:mm")),1)]),l(r),t("p",z,[t("span",null,s(e.__("Time:")),1),t("strong",null,s(f(c).duration({minutes:a.timetrack.minutes}).hours())+":"+s(f(c).duration({minutes:a.timetrack.minutes}).minutes()),1)]),t("p",P,[t("span",null,s(e.__("Time dezimal:")),1),t("strong",null,s(o(a.timetrack.minutes/60)),1)]),t("p",q,[t("span",null,s(e.__("Rate:")),1),E]),l(r),t("p",O,[t("span",null,s(e.__("Netto:")),1),t("strong",null,s(o(a.timetrack.minutes/60*95.43))+" \u20AC",1)]),t("p",F,[t("span",null,s(e.__("Vat:")),1),t("strong",null,s(o(a.timetrack.minutes/60*95.43*.2))+" \u20AC",1)]),l(r),t("p",G,[t("span",null,s(e.__("Brutto:")),1),t("strong",null,s(o(a.timetrack.minutes/60*95.43*1.2))+" \u20AC",1)])]),t("div",null,[h.value?(i(),y("div",I,Q)):_("",!0),n.value&&a.timetrack.timetrackable_type=="App\\Models\\Contact"?(i(),u(j,{key:1,contact:n.value},null,8,["contact"])):_("",!0),n.value&&a.timetrack.timetrackable_type=="App\\Models\\Project"?(i(),u(M,{key:2,project:n.value},null,8,["project"])):_("",!0)])])])]),_:1},8,["title"]))}};export{ct as default};
