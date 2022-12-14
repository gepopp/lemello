import{u as w,k as f,o as i,e as d,b as t,g as e,a as o,w as u,D as x,F as k,H as h,t as m,p as b,f as c,L as V,i as y,n as C,l as $}from"./app.84683a91.js";import{_ as F}from"./AuthenticationCard.477def61.js";import{_ as S}from"./AuthenticationCardLogo.aadcfa97.js";import{_ as U}from"./Button.29795432.js";import{_ as p}from"./Input.237cf301.js";import{_ as j}from"./Checkbox.91ffea2f.js";import{_}from"./Label.3aec5106.js";const q={class:"text-5xl font-extrabold mb-4"},N={class:"mb-5"},P=["onSubmit"],A=["textContent"],B={class:"mt-4"},z=["textContent"],D={class:"mt-4"},E=["textContent"],H={class:"mt-4"},I=["textContent"],L={key:0,class:"mt-4"},R={class:"flex items-center"},T={class:"ml-2"},M={class:"flex items-center justify-end mt-4"},X={__name:"Register",props:{background:String},setup(g){const s=w({name:"",email:"",password:"",password_confirmation:"",account_name:"",terms:!1}),v=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})},n=f(()=>$().props.value.errors);return f(()=>Object.keys(n.value).length>0),(a,l)=>(i(),d(k,null,[t(e(h),{title:a.__("Register")},null,8,["title"]),o("div",{style:x({backgroundImage:"url("+g.background+")"})},[t(F,null,{logo:u(()=>[t(S)]),sidebar:u(()=>[o("h1",q,m(a.__("let's go")),1),o("p",N,m(a.__("You are only one step away from administering your projects easy and straightforward.")),1)]),default:u(()=>[o("form",{onSubmit:b(v,["prevent"])},[o("div",null,[t(_,{for:"account_name",value:a.__("Company name")},null,8,["value"]),t(p,{id:"_account_name",modelValue:e(s).account_name,"onUpdate:modelValue":l[0]||(l[0]=r=>e(s).account_name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),e(n).account_name?(i(),d("p",{key:0,class:"text-red-600 text-xs",textContent:m(e(n).account_name)},null,8,A)):c("",!0)]),o("div",B,[t(_,{for:"name",value:a.__("First and lastname")},null,8,["value"]),t(p,{id:"name",modelValue:e(s).name,"onUpdate:modelValue":l[1]||(l[1]=r=>e(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),e(n).name?(i(),d("p",{key:0,class:"text-red-600 text-xs",textContent:m(e(n).name)},null,8,z)):c("",!0)]),o("div",D,[t(_,{for:"email",value:a.__("Email Address")},null,8,["value"]),t(p,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":l[2]||(l[2]=r=>e(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(n).email?(i(),d("p",{key:0,class:"text-red-600 text-xs",textContent:m(e(n).email)},null,8,E)):c("",!0)]),o("div",H,[t(_,{for:"password",value:a.__("Password")},null,8,["value"]),t(p,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":l[3]||(l[3]=r=>e(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(n).password?(i(),d("p",{key:0,class:"text-red-600 text-xs",textContent:m(e(n).password)},null,8,I)):c("",!0)]),a.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(i(),d("div",L,[t(_,{for:"terms"},{default:u(()=>[o("div",R,[t(j,{id:"terms",checked:e(s).terms,"onUpdate:checked":l[4]||(l[4]=r=>e(s).terms=r),name:"terms"},null,8,["checked"]),o("div",T,m(a.__("I agree to the terms of service and privacy policy")),1)])]),_:1})])):c("",!0),o("div",M,[t(e(V),{href:a.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:u(()=>[y(m(a.__("Already registered?")),1)]),_:1},8,["href"]),t(U,{class:C(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:u(()=>[y(m(a.__("register")),1)]),_:1},8,["class","disabled"])])],40,P)]),_:1})],4)],64))}};export{X as default};