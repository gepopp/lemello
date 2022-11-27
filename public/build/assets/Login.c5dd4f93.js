import{u as w,E as h,o as u,e as c,b as s,a,w as l,D as v,F as y,t as m,f as k,p as V,g as o,L as _,i as d,n as x}from"./app.542b9e37.js";import{_ as $}from"./AuthenticationCard.0625ea17.js";import{_ as L}from"./AuthenticationCardLogo.a1b096f6.js";import{_ as S}from"./Button.60c133c7.js";import{_ as f}from"./Input.9968d265.js";import{_ as F}from"./Checkbox.ab060477.js";import{_ as p}from"./Label.0f926337.js";import{_ as N}from"./ValidationErrors.f65a4876.js";const B={class:"text-5xl font-extrabold mb-10"},C=a("p",null,null,-1),q={key:0,class:"mb-4 font-medium text-sm text-green-600"},E=["onSubmit"],P={class:"mt-4"},U={class:"block mt-4"},z={class:"flex items-center"},D={class:"ml-2 text-sm text-gray-600"},H={class:"flex items-center justify-between mt-4"},K={__name:"Login",props:{canResetPassword:Boolean,status:String,background:String},setup(i){const t=w({email:"",password:"",remember:!1}),b=()=>{t.transform(e=>({...e,remember:t.remember?"on":""})).post(route("login"),{onFinish:()=>t.reset("password")})};return(e,r)=>{const g=h("Head");return u(),c(y,null,[s(g,{title:e.__("Login")},null,8,["title"]),a("div",{style:v({backgroundImage:"url("+i.background+")"})},[s($,null,{logo:l(()=>[s(L)]),sidebar:l(()=>[a("h1",B,m(e.__("Login")),1),C]),default:l(()=>[s(N,{class:"mb-4"}),i.status?(u(),c("div",q,m(i.status),1)):k("",!0),a("form",{onSubmit:V(b,["prevent"])},[a("div",null,[s(p,{for:"email",value:e.__("Email Address")},null,8,["value"]),s(f,{id:"email",modelValue:o(t).email,"onUpdate:modelValue":r[0]||(r[0]=n=>o(t).email=n),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),a("div",P,[s(p,{for:"password",value:e.__("Password")},null,8,["value"]),s(f,{id:"password",modelValue:o(t).password,"onUpdate:modelValue":r[1]||(r[1]=n=>o(t).password=n),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",U,[a("label",z,[s(F,{checked:o(t).remember,"onUpdate:checked":r[2]||(r[2]=n=>o(t).remember=n),name:"remember"},null,8,["checked"]),a("span",D,m(e.__("Remember me")),1)])]),a("div",H,[s(o(_),{href:e.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[d(m(e.__("Forgot Password"))+"? ",1)]),_:1},8,["href"]),s(S,{class:x(["ml-4",{"opacity-25":o(t).processing}]),disabled:o(t).processing},{default:l(()=>[d(m(e.__("Login")),1)]),_:1},8,["class","disabled"])])],40,E),s(o(_),{href:e.route("register"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[d(m(e.__("No account yet"))+"? ",1)]),_:1},8,["href"])]),_:1})],4)],64)}}};export{K as default};
