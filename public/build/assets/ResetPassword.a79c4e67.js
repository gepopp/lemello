import{u as p,o as c,e as _,b as e,g as o,a,w as r,D as f,F as w,H as b,t as g,p as k,n as V,i as h}from"./app.01480f20.js";import{_ as y}from"./AuthenticationCard.624a240c.js";import{_ as S}from"./AuthenticationCardLogo.b45c6849.js";import{_ as v}from"./Button.3e46cf9c.js";import{_ as m}from"./Input.c09af321.js";import{_ as $}from"./Label.1db0721f.js";import{_ as x}from"./ValidationErrors.0ba28f55.js";const P={class:"text-3xl font-extrabold mb-4"},F=["onSubmit"],N={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},R=h(" Passwort speichern "),E={__name:"ResetPassword",props:{email:String,token:String,background:String},setup(n){const d=n,s=p({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(l,t)=>(c(),_(w,null,[e(o(b),{title:l.__("Reset Password")},null,8,["title"]),a("div",{style:f({backgroundImage:"url("+n.background+")"})},[e(y,null,{logo:r(()=>[e(S)]),sidebar:r(()=>[a("h1",P,g(l.__("Reset Password")),1)]),default:r(()=>[e(x,{class:"mb-4"}),a("form",{onSubmit:k(u,["prevent"])},[e(m,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":t[0]||(t[0]=i=>o(s).email=i),type:"hidden",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a("div",N,[e($,{for:"password",value:l.__("New Password")},null,8,["value"]),e(m,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":t[1]||(t[1]=i=>o(s).password=i),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),a("div",B,[e(v,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:r(()=>[R]),_:1},8,["class","disabled"])])],40,F)]),_:1})],4)],64))}};export{E as default};