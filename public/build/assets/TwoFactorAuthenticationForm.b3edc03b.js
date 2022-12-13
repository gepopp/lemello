import{d as f,u as M,k as q,m as E,o as e,c as h,w as t,g as u,e as o,a as r,f as s,b as n,M as H,F as N,h as P,n as x,i as c,l as Q,z as S,t as Y}from"./app.5e91cadb.js";import{_ as z}from"./ActionSection.caeb6167.js";import{_ as A}from"./Button.7a1934ed.js";import{_ as v}from"./ConfirmsPassword.7141e139.js";import{_ as D}from"./DangerButton.4c807348.js";import{_ as I}from"./Input.6c12898b.js";import{_ as G}from"./InputError.b59ae6b7.js";import{_ as O}from"./Label.d55e2f0f.js";import{_ as k}from"./SecondaryButton.3acf27d8.js";import"./SectionTitle.d90788c0.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.86047474.js";const U=c(" Two Factor Authentication "),W=c(" Add additional security to your account using two factor authentication. "),j={key:0,class:"text-lg font-medium text-gray-900"},J={key:1,class:"text-lg font-medium text-gray-900"},X={key:2,class:"text-lg font-medium text-gray-900"},Z=r("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[r("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),ee={key:3},te={key:0},oe={class:"mt-4 max-w-xl text-sm text-gray-600"},ae={key:0,class:"font-semibold"},se={key:1},ne=["innerHTML"],re={key:0,class:"mt-4 max-w-xl text-sm text-gray-600"},ie={class:"font-semibold"},ce=c(" Setup Key: "),le=["innerHTML"],ue={key:1,class:"mt-4"},de={key:1},me=r("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[r("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},fe={class:"mt-5"},he={key:0},ve=c(" Enable "),pe={key:1},ye=c(" Confirm "),ge=c(" Regenerate Recovery Codes "),we=c(" Show Recovery Codes "),xe=c(" Cancel "),be=c(" Disable "),Me={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup($){const K=$,l=f(!1),a=f(!1),d=f(!1),y=f(null),g=f(null),p=f([]),m=M({code:""}),_=q(()=>{var i;return!l.value&&((i=Q().props.value.user)==null?void 0:i.two_factor_enabled)});E(_,()=>{_.value||(m.reset(),m.clearErrors())});const R=()=>{l.value=!0,S.Inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([V(),B(),b()]),onFinish:()=>{l.value=!1,a.value=K.requiresConfirmation}})},V=()=>axios.get("/user/two-factor-qr-code").then(i=>{y.value=i.data.svg}),B=()=>axios.get("/user/two-factor-secret-key").then(i=>{g.value=i.data.secretKey}),b=()=>axios.get("/user/two-factor-recovery-codes").then(i=>{p.value=i.data}),C=()=>{m.post("/user/confirmed-two-factor-authentication",{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{a.value=!1,y.value=null,g.value=null}})},L=()=>{axios.post("/user/two-factor-recovery-codes").then(()=>b())},T=()=>{d.value=!0,S.Inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>{d.value=!1,a.value=!1}})};return(i,F)=>(e(),h(z,null,{title:t(()=>[U]),description:t(()=>[W]),content:t(()=>[u(_)&&!a.value?(e(),o("h3",j," You have enabled two factor authentication. ")):u(_)&&a.value?(e(),o("h3",J," Finish enabling two factor authentication. ")):(e(),o("h3",X," You have not enabled two factor authentication. ")),Z,u(_)?(e(),o("div",ee,[y.value?(e(),o("div",te,[r("div",oe,[a.value?(e(),o("p",ae," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(e(),o("p",se," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),r("div",{class:"mt-4",innerHTML:y.value},null,8,ne),g.value?(e(),o("div",re,[r("p",ie,[ce,r("span",{innerHTML:g.value},null,8,le)])])):s("",!0),a.value?(e(),o("div",ue,[n(O,{for:"code",value:"Code"}),n(I,{id:"code",modelValue:u(m).code,"onUpdate:modelValue":F[0]||(F[0]=w=>u(m).code=w),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:H(C,["enter"])},null,8,["modelValue","onKeyup"]),n(G,{message:u(m).errors.code,class:"mt-2"},null,8,["message"])])):s("",!0)])):s("",!0),p.value.length>0&&!a.value?(e(),o("div",de,[me,r("div",_e,[(e(!0),o(N,null,P(p.value,w=>(e(),o("div",{key:w},Y(w),1))),128))])])):s("",!0)])):s("",!0),r("div",fe,[u(_)?(e(),o("div",pe,[n(v,{onConfirmed:C},{default:t(()=>[a.value?(e(),h(A,{key:0,type:"button",class:x(["mr-3",{"opacity-25":l.value}]),disabled:l.value},{default:t(()=>[ye]),_:1},8,["class","disabled"])):s("",!0)]),_:1}),n(v,{onConfirmed:L},{default:t(()=>[p.value.length>0&&!a.value?(e(),h(k,{key:0,class:"mr-3"},{default:t(()=>[ge]),_:1})):s("",!0)]),_:1}),n(v,{onConfirmed:b},{default:t(()=>[p.value.length===0&&!a.value?(e(),h(k,{key:0,class:"mr-3"},{default:t(()=>[we]),_:1})):s("",!0)]),_:1}),n(v,{onConfirmed:T},{default:t(()=>[a.value?(e(),h(k,{key:0,class:x({"opacity-25":d.value}),disabled:d.value},{default:t(()=>[xe]),_:1},8,["class","disabled"])):s("",!0)]),_:1}),n(v,{onConfirmed:T},{default:t(()=>[a.value?s("",!0):(e(),h(D,{key:0,class:x({"opacity-25":d.value}),disabled:d.value},{default:t(()=>[be]),_:1},8,["class","disabled"]))]),_:1})])):(e(),o("div",he,[n(v,{onConfirmed:R},{default:t(()=>[n(A,{type:"button",class:x({"opacity-25":l.value}),disabled:l.value},{default:t(()=>[ve]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Me as default};
