import{l as j,d as m,q as w,k as l,o as d,c as h,w as i,a as t,t as n,b as a,g,L as k,e as _,f,i as p}from"./app.9eed93a5.js";import{_ as C}from"./AppLayout.343e5fd7.js";import{S as b}from"./Seperator.95e445c6.js";import{_ as y}from"./DialogModal.959548cc.js";import{_ as $}from"./TimeTrackForm.b286cca8.js";import{_ as M}from"./TimeTrackList.8fec6361.js";import{_ as L}from"./DeleteModel.5be9ec69.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Label.3ba238b5.js";import"./ContactSelect.6fdedf85.js";import"./Input.d6bf1a0f.js";import"./ProjectSelect.e38f36a4.js";import"./Button.693dd352.js";import"./ConfirmsPassword.44e07a92.js";import"./InputError.63a239fa.js";import"./SecondaryButton.185ef049.js";const B={class:"font-semibold text-xl text-gray-800 leading-tight"},H={class:"relative"},S={class:"absolute top-0 right-0 -mt-16 flex space-x-3"},V=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),N=[V],P={class:"w-14 h-14 rounded-full bg-orange-200 shadow-3xl"},T=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1),z={class:"grid grid-cols-1 md:grid-cols-2 md:gap-x-10"},A=["textContent"],q={class:"text-xs font-thin"},D=["textContent"],E=p(", "),O=["textContent"],F=p(),G=["textContent"],I=["textContent"],J=["innerHTML"],K={class:"p-5"},ct={__name:"ProjectShow",props:{project:Object},setup(e){const u=e;j().props.value.locale,m(!1);const r=m(!1);w(()=>{}),l(()=>{var o=0;return u.project.timetracks.map(s=>o+=s.minutes),o});const v=l(()=>{var o=0;return u.project.timetracks.map(s=>{o+=Math.round(s.minutes/60*100)/100}),o}),x=l(()=>Math.round(v.value*95.43*100)/100);return l(()=>Math.round(x.value*1.2*100)/100),(o,s)=>(d(),h(C,{title:o.__("Project")+": "+e.project.name},{header:i(()=>[t("h2",B,n(o.__("Project")+": "+e.project.name),1)]),default:i(()=>[t("div",H,[t("div",S,[t("div",{class:"flex items-center justify-center w-14 h-14 rounded-full bg-orange-200 shadow-3xl cursor-pointer",onClick:s[0]||(s[0]=c=>r.value=!r.value)},N),t("div",P,[a(g(k),{href:o.route("project.edit",e.project),class:"flex justify-center items-center h-full w-full"},{default:i(()=>[T]),_:1},8,["href"])]),a(L,{"delete-route":o.route("project.destroy",e.project)},null,8,["delete-route"])]),t("div",z,[t("div",null,[t("div",null,[e.project.contact?(d(),_("div",{key:0,class:"border border-gray-400 p-2 hover:bg-gray-200 flex justify-between cursor-pointer",onClick:s[1]||(s[1]=c=>o.$inertia.visit(o.route("contact.show",e.project.contact)))},[t("div",null,[t("p",{textContent:n(e.project.contact.name)},null,8,A),t("p",q,[t("span",{textContent:n(e.project.contact.address.line_1)},null,8,D),E,t("span",{textContent:n(e.project.contact.address.zip)},null,8,O),F,t("span",{textContent:n(e.project.contact.address.city)},null,8,G)])])])):f("",!0),e.project.contact?(d(),h(b,{key:1})):f("",!0),t("h2",{textContent:n(e.project.name),class:"text-2xl font-bold"},null,8,I),t("div",{innerHTML:e.project.description,class:"mt-5"},null,8,J)])]),a(M,{tracks:e.project.timetracks},null,8,["tracks"])])]),a(y,{show:r.value,onClose:s[3]||(s[3]=c=>r.value=!1)},{default:i(()=>[t("div",K,[a($,{class:"flex-col space-x-0",attach:e.project,onSaved:s[2]||(s[2]=c=>r.value=!1)},null,8,["attach"])])]),_:1},8,["show"])]),_:1},8,["title"]))}};export{ct as default};
