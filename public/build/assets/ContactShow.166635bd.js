import{l as M,d as g,q as L,k as x,o as a,c as S,w as f,a as t,t as n,b as r,g as u,L as T,e as c,f as i,i as d,F as w,h as y}from"./app.7970fea8.js";import{_ as z}from"./AppLayout.31ad2b53.js";import{S as _}from"./Seperator.672c82d7.js";import{_ as V}from"./GenderIcon.d5050c71.js";import{_ as D}from"./DialogModal.a33fa7b4.js";import{_ as N}from"./TimeTrackForm.79545bd9.js";import{_ as A}from"./DeleteModel.58a1467c.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Label.2722d38c.js";import"./ContactSelect.1cfd3d98.js";import"./Input.f161b780.js";import"./Button.eb5c7a63.js";import"./ConfirmsPassword.0a5f971e.js";import"./InputError.a9e742e6.js";import"./SecondaryButton.e4a7f38e.js";const H={class:"font-semibold text-xl text-gray-800 leading-tight"},F={class:"relative"},Y={class:"absolute top-0 right-0 -mt-16 flex space-x-3"},q=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),E=[q],O={class:"w-14 h-14 rounded-full bg-orange-200 shadow-3xl"},P=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 text-white"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1),G={class:"grid grid-cols-1 md:grid-cols-2 md:gap-x-10"},I=["textContent"],J={class:"text-xs font-thin"},K=["textContent"],Q=d(", "),R=["textContent"],U=d(),W=["textContent"],X={class:"text-2xl"},Z=["textContent"],tt=["textContent"],et=d("\xA0 "),nt=["textContent"],ot=["textContent"],st=["href","textContent"],at={key:3},lt=["href","textContent"],ct={key:4},it=t("br",null,null,-1),dt={key:0},rt=t("br",null,null,-1),ut={key:0},ht=t("div",{class:"w-8 h-8 bg-gray-200 animate-pulse flex-shrink-0"},null,-1),mt=t("div",{class:"animate-pulse"},[t("p",{class:"bg-gray-200 w-48 max-w-full animate-pulse animate-pulse"},"\xA0"),t("p",{class:"text-xs font-semibold bg-gray-200 animate-pulse w-36 max-w-full mt-1"},"\xA0"),t("p",{class:"text-xs font-thin bg-gray-200 w-96 max-w-full animate-pulse mt-1"},"\xA0")],-1),xt=[ht,mt],ft=["onClick"],_t=["textContent"],vt=["textContent"],Ct={class:"text-xs font-thin mt-1"},gt=["textContent"],wt=d(", "),yt=["textContent"],pt=d(),bt=["textContent"],kt={key:0},$t={class:"text-xl font-semibold"},Mt={class:"w-full"},St=["textContent"],jt=["textContent"],Bt=["textContent"],Lt=d(":"),Tt=["textContent"],zt=["textContent"],Vt={class:"whitespace-pre"},Dt={class:"align-top"},Nt={colspan:"2"},At={class:"flex justify-end"},Ht=["textContent"],Ft=["textContent"],Yt={class:"p-5"},ee={__name:"ContactShow",props:{contact:Object},setup(e){const m=e,j=M().props.value.locale,p=g([]),v=g(!1),h=g(!1);L(()=>{m.contact.is_company==1&&(v.value=!0,setTimeout(()=>{axios.get(route("employees",m.contact)).then(o=>{p.value=o.data,v.value=!1})},1e3))});const b=(o,l)=>moment(o).locale(M().props.value.locale).format(l);x(()=>{var o=0;return m.contact.timetracks.map(l=>o+=l.minutes),o});const k=x(()=>{var o=0;return m.contact.timetracks.map(l=>{o+=Math.round(l.minutes/60*100)/100}),o}),C=x(()=>Math.round(k.value*95.43*100)/100),$=x(()=>Math.round(C.value*1.2*100)/100);return(o,l)=>(a(),S(z,{title:o.__("Contact")+": "+e.contact.name},{header:f(()=>[t("h2",H,n(o.__("Contact")+": "+e.contact.name),1)]),default:f(()=>[t("div",F,[t("div",Y,[t("div",{class:"flex items-center justify-center w-14 h-14 rounded-full bg-orange-200 shadow-3xl cursor-pointer",onClick:l[0]||(l[0]=s=>h.value=!h.value)},E),t("div",O,[r(u(T),{href:o.route("contact.edit",e.contact),class:"flex justify-center items-center h-full w-full"},{default:f(()=>[P]),_:1},8,["href"])]),r(A,{"delete-route":o.route("contact.destroy",e.contact)},null,8,["delete-route"])]),t("div",G,[t("div",null,[t("div",null,[e.contact.company?(a(),c("div",{key:0,class:"border border-gray-400 p-2 hover:bg-gray-200 flex justify-between cursor-pointer",onClick:l[1]||(l[1]=s=>o.$inertia.visit(o.route("contact.show",e.contact.company)))},[t("div",null,[t("p",{textContent:n(e.contact.company.name)},null,8,I),t("p",J,[t("span",{textContent:n(e.contact.company.address.line_1)},null,8,K),Q,t("span",{textContent:n(e.contact.company.address.zip)},null,8,R),U,t("span",{textContent:n(e.contact.company.address.city)},null,8,W)])])])):i("",!0),e.contact.company?(a(),S(_,{key:1})):i("",!0),t("p",X,[e.contact.academic_degree&&e.contact.is_company==0?(a(),c("span",{key:0,class:"text-xl font-thin mr-2",textContent:n(e.contact.academic_degree)},null,8,Z)):i("",!0),t("span",{class:"font-bold",textContent:n(e.contact.name)},null,8,tt),et,e.contact.is_company==0?(a(),c("span",{key:1,class:"text-xl font-thin",textContent:n(e.contact.academic_degree_after)},null,8,nt)):i("",!0)]),e.contact.is_company==0?(a(),c("p",{key:2,class:"text-sm",textContent:n(e.contact.position)},null,8,ot)):i("",!0),r(_),t("p",null,[t("a",{href:"mailto:"+e.contact.email,textContent:n(e.contact.email),class:"underline"},null,8,st)]),e.contact.phone?(a(),c("p",at,[t("a",{href:"tel:"+e.contact.phone,textContent:n(e.contact.phone),class:"underline"},null,8,lt)])):i("",!0),r(_),e.contact.address?(a(),c("address",ct,[d(n(e.contact.address.line_1),1),it,d(" "+n(e.contact.address.line_2),1),e.contact.address.line_2?(a(),c("br",dt)):i("",!0),d(" "+n(e.contact.address.zip)+"\xA0"+n(e.contact.address.city),1),rt,d(" "+n(e.contact.address.country[u(j)]),1)])):i("",!0)]),r(_),v.value?(a(),c("div",ut,[(a(!0),c(w,null,y(e.contact.contacts_count,s=>(a(),c("div",{class:"flex space-x-3 border border-gray-400 p-2 mb-3 overflow-hidden",onClick:l[2]||(l[2]=B=>o.$inertia.visit(o.route("contact.show",o.employee)))},xt))),256))])):i("",!0),(a(!0),c(w,null,y(p.value,s=>(a(),c("div",{class:"border border-gray-400 p-2 hover:bg-gray-200 flex space-x-3 cursor-pointer mb-3",onClick:B=>o.$inertia.visit(o.route("contact.show",s))},[t("div",null,[r(V,{contact:s},null,8,["contact"])]),t("div",null,[t("p",{textContent:n(s.name)},null,8,_t),t("p",{class:"text-xs font-semibold",textContent:n(s.position)},null,8,vt),t("p",Ct,[t("span",{textContent:n(s.address.line_1)},null,8,gt),wt,t("span",{textContent:n(s.address.zip)},null,8,yt),pt,t("span",{textContent:n(s.address.city)},null,8,bt)])])],8,ft))),256))]),t("div",null,[e.contact.timetracks.length?(a(),c("div",kt,[t("h3",$t,n(o.__("Timetracks")),1),t("table",Mt,[(a(!0),c(w,null,y(e.contact.timetracks,s=>(a(),c("tr",null,[t("td",null,[t("p",{textContent:n(b(s.created_at,"DD.MM.YY"))},null,8,St),t("p",{textContent:n(b(s.created_at,"hh:mm")),class:"text-sm font-thin"},null,8,jt)]),t("td",null,[t("p",null,[t("span",{textContent:n(String(Math.round(s.minutes/60)).padStart(2,"0"))},null,8,Bt),Lt,t("span",{textContent:n(String(s.minutes%60).padStart(2,"0"))},null,8,Tt)]),t("p",{textContent:n(Math.round(s.minutes/60*100)/100),class:"text-sm font-thin"},null,8,zt)]),t("td",Vt,n(s.note),1)]))),256)),t("tfoot",null,[t("tr",null,[t("td",Dt,n(o.__("Total:")),1),t("td",Nt,[t("p",At,n(Math.round(u(k)*100)/100)+" Stunden \xE0 95,43 = "+n(u(C)),1),t("p",{class:"text-sm font-thin flex justify-end",textContent:n(Math.round((u($)-u(C))*100)/100)},null,8,Ht),t("p",{class:"font-bold flex justify-end",textContent:n(u($))},null,8,Ft)])])])])])):i("",!0)])])]),r(D,{show:h.value,onClose:l[4]||(l[4]=s=>h.value=!1)},{default:f(()=>[t("div",Yt,[r(N,{class:"flex-col space-x-0",contact_id:e.contact.id,onSaved:l[3]||(l[3]=s=>h.value=!1)},null,8,["contact_id"])])]),_:1},8,["show"])]),_:1},8,["title"]))}};export{ee as default};
