import{u as c,o as r,e as l,b as e,g as t,w as o,F as u,H as _,t as f,f as p,a,n as b,p as g,i as h}from"./app.f422d563.js";import{J as x}from"./AuthenticationCard.f25a47e9.js";import{_ as w}from"./AuthenticationCardLogo.910e11bb.js";import{_ as k}from"./Button.ff3250b2.js";import{_ as V}from"./Input.3e93d0b7.js";import{_ as v}from"./Label.b1145258.js";import{_ as y}from"./ValidationErrors.a2729649.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F=a("h1",{class:"text-3xl font-extrabold mb-4"},"neues passwort gef\xE4llig?",-1),S=a("p",null," Gib einfach nebenan deine E-Mail-Adresse ein und wir schicken dir einen Link. ",-1),$={key:0,class:"mb-4 font-medium text-sm text-green-600"},C=["onSubmit"],N={class:"flex items-center justify-end mt-4"},A=h(" Link Senden "),z={__name:"ForgotPassword",props:{status:String},setup(i){const s=c({email:""}),m=()=>{s.post(route("password.email"))};return(B,n)=>(r(),l(u,null,[e(t(_),{title:"Forgot Password"}),e(x,null,{logo:o(()=>[e(w)]),sidebar:o(()=>[F,S]),default:o(()=>[i.status?(r(),l("div",$,f(i.status),1)):p("",!0),e(y,{class:"mb-4"}),a("form",{onSubmit:g(m,["prevent"])},[a("div",null,[e(v,{for:"email",value:"E-Mail-Adresse"}),e(V,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":n[0]||(n[0]=d=>t(s).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),a("div",N,[e(k,{class:b({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[A]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{z as default};