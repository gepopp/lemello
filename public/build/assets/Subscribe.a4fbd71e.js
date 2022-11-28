import{d as h,l as d,u as w,k as V,q as S,o as i,c as z,w as x,a as t,g as e,p as B,b as n,e as r,t as c,f as u,n as U,i as y}from"./app.72a850b4.js";import{_ as A}from"./AppLayout.f304fde9.js";import{_ as N}from"./Button.4625ba4c.js";import{_ as p}from"./Input.e888fe3b.js";import{_ as P}from"./Checkbox.cc44c404.js";import{_ as m}from"./Label.b06d94f5.js";import"./_plugin-vue_export-helper.cdc0426e.js";const $=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dein Abo ",-1),D={class:"py-12"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},L={class:"bg-white overflow-hidden shadow-xl rounded-3xl p-10"},j={class:"flex items-center space-x-3 mb-3"},q=["src"],E=t("h1",{class:"text-5xl font-extrabold"},"Go juicy!",-1),M=t("p",{class:"mb-10"},"Nur noch ein Schritt bis du die volle Power von lemollo nutzen kannst.",-1),G=["onSubmit"],I={class:"grid grid-cols-1 md:grid-cols-2 gap-5"},R=["textContent"],T={class:"mt-2"},O=["textContent"],Z={class:"mt-2"},H=["textContent"],J={class:"grid grid-cols-6 gap-4 mt-2"},K={class:"mt-2 col-span-2"},Q=["textContent"],W={class:"mt-2 col-span-4"},X=["textContent"],Y={class:"mt-2"},ee=["textContent"],te=t("div",null,[t("div",{id:"payment-element"}),t("div",{id:"payment-message",class:"hidden"})],-1),se={class:"mt-4"},oe={class:"flex items-center"},le={class:"ml-2"},ne=y(" Ich bin mit den "),ae=["href"],de=y(" einverstanden. "),ie=["textContent"],re={class:"flex items-center justify-start mt-4"},ce=y(" Abo kostenpflichtig abschliessen "),ye={__name:"Subscribe",setup(ue){const f=h(),v=h(),b=h();d().props.value.intent,d().props.value.customer;const o=w({intent:null,...d().props.value.billingdata}),l=V(()=>d().props.value.errors);V(()=>Object.keys(l.value).length>0),S(()=>{f.value=Stripe(d().props.value.key),g()});function g(){v.value=f.value.elements({clientSecret:d().props.value.client_secret,appearance:{theme:"stripe",variables:{colorPrimary:"#F9BF06",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",borderRadius:"0",borderColor:"#d1d5db"}}}),b.value=v.value.create("payment"),b.value.mount("#payment-element")}async function C(){const{setupIntent:_,error:s}=await f.value.confirmSetup({elements:v.value,confirmParams:{return_url:d().props.value.redirect},redirect:"if_required"});s?s.type==="card_error"||s.type==="validation_error"?k(s.message):k("Ein unerwarteter Fehler ist aufgetreten, bitte lade die Seite neu."):(o.intent=_,o.post(route("subscribe.store"),{onError:a=>g()}))}function k(_){const s=document.querySelector("#payment-message");s.classList.remove("hidden"),s.textContent=_,setTimeout(function(){s.classList.add("hidden"),_.textContent=""},4e3)}return(_,s)=>(i(),z(A,{title:"Dashboard"},{header:x(()=>[$]),default:x(()=>[t("div",D,[t("div",F,[t("div",L,[t("div",j,[t("img",{src:e(d)().props.value.icon,class:"w-12"},null,8,q),E]),M,t("form",{id:"payment-form",onSubmit:B(C,["prevent"])},[t("div",I,[t("div",null,[t("div",null,[n(m,{for:"bill_to",value:"Rechnung an:"}),n(p,{id:"_account_name",modelValue:e(o).bill_to,"onUpdate:modelValue":s[0]||(s[0]=a=>e(o).bill_to=a),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),e(l).bill_to?(i(),r("p",{key:0,class:"text-red-600 text-xs",textContent:c(e(l).bill_to)},null,8,R)):u("",!0)]),t("div",T,[n(m,{for:"address",value:"Adresse"}),n(p,{id:"_address",modelValue:e(o).address,"onUpdate:modelValue":s[1]||(s[1]=a=>e(o).address=a),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),e(l).address?(i(),r("p",{key:0,class:"text-red-600 text-xs",textContent:c(e(l).address)},null,8,O)):u("",!0)]),t("div",Z,[n(m,{for:"address_addition",value:"Adresszusatz"}),n(p,{id:"_address_addition",modelValue:e(o).address_addition,"onUpdate:modelValue":s[2]||(s[2]=a=>e(o).address_addition=a),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),e(l).address_addition?(i(),r("p",{key:0,class:"text-red-600 text-xs",textContent:c(e(l).address_addition)},null,8,H)):u("",!0)]),t("div",J,[t("div",K,[n(m,{for:"zip",value:"PLZ"}),n(p,{id:"_zip",modelValue:e(o).zip,"onUpdate:modelValue":s[3]||(s[3]=a=>e(o).zip=a),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),e(l).zip?(i(),r("p",{key:0,class:"text-red-600 text-xs",textContent:c(e(l).zip)},null,8,Q)):u("",!0)]),t("div",W,[n(m,{for:"city",value:"Stadt"}),n(p,{id:"city",modelValue:e(o).city,"onUpdate:modelValue":s[4]||(s[4]=a=>e(o).city=a),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),e(l).city?(i(),r("p",{key:0,class:"text-red-600 text-xs",textContent:c(e(l).city)},null,8,X)):u("",!0)])]),t("div",Y,[n(m,{for:"country",value:"Land"}),n(p,{id:"country",modelValue:e(o).country,"onUpdate:modelValue":s[5]||(s[5]=a=>e(o).country=a),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),e(l).country?(i(),r("p",{key:0,class:"text-red-600 text-xs",textContent:c(e(l).country)},null,8,ee)):u("",!0)])]),te]),t("div",se,[n(m,{for:"terms"},{default:x(()=>[t("div",oe,[n(P,{id:"terms",checked:e(o).terms,"onUpdate:checked":s[6]||(s[6]=a=>e(o).terms=a),name:"terms"},null,8,["checked"]),t("div",le,[ne,t("a",{target:"_blank",href:_.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"}," AGB",8,ae),de])]),e(l).terms?(i(),r("p",{key:0,class:"text-red-600 text-xs",textContent:c(e(l).terms)},null,8,ie)):u("",!0)]),_:1})]),t("div",re,[n(N,{class:U({"opacity-25":e(o).processing}),disabled:e(o).processing},{default:x(()=>[ce]),_:1},8,["class","disabled"])])],40,G)])])])]),_:1}))}};export{ye as default};
