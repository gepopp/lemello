import{d as u,u as b,o as t,e as s,b as o,g as c,w as m,F as r,H as k,a as l,p as y,n as x,i as n,G as C}from"./app.72a850b4.js";import{_ as w}from"./AuthenticationCard.a8fe192f.js";import{_ as V}from"./AuthenticationCardLogo.d2413dc0.js";import{_ as $}from"./Button.4625ba4c.js";import{_ as p}from"./Input.e888fe3b.js";import{_ as v}from"./Label.b06d94f5.js";import{_ as F}from"./ValidationErrors.654e6dd3.js";const I={class:"mb-4 text-sm text-gray-600"},T=n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. "),U=n(" Please confirm access to your account by entering one of your emergency recovery codes. "),B=["onSubmit"],N={key:0},H={key:1},P={class:"flex items-center justify-end mt-4"},R=["onClick"],S=n(" Use a recovery code "),j=n(" Use an authentication code "),z=n(" Log in "),O={__name:"TwoFactorChallenge",setup(E){const a=u(!1),e=b({code:"",recovery_code:""}),_=u(null),f=u(null),g=async()=>{a.value^=!0,await C(),a.value?(_.value.focus(),e.code=""):(f.value.focus(),e.recovery_code="")},h=()=>{e.post(route("two-factor.login"))};return(G,i)=>(t(),s(r,null,[o(c(k),{title:"Two-factor Confirmation"}),o(w,null,{logo:m(()=>[o(V)]),default:m(()=>[l("div",I,[a.value?(t(),s(r,{key:1},[U],64)):(t(),s(r,{key:0},[T],64))]),o(F,{class:"mb-4"}),l("form",{onSubmit:y(h,["prevent"])},[a.value?(t(),s("div",H,[o(v,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:_,modelValue:c(e).recovery_code,"onUpdate:modelValue":i[1]||(i[1]=d=>c(e).recovery_code=d),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"])])):(t(),s("div",N,[o(v,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:f,modelValue:c(e).code,"onUpdate:modelValue":i[0]||(i[0]=d=>c(e).code=d),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])])),l("div",P,[l("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(g,["prevent"])},[a.value?(t(),s(r,{key:1},[j],64)):(t(),s(r,{key:0},[S],64))],8,R),o($,{class:x(["ml-4",{"opacity-25":c(e).processing}]),disabled:c(e).processing},{default:m(()=>[z]),_:1},8,["class","disabled"])])],40,B)]),_:1})],64))}};export{O as default};
