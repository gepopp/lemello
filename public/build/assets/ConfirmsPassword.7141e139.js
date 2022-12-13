import{d as p,P as g,o as C,e as h,a as u,r as v,b as o,w as a,i as l,t as c,M as k,n as P,G as b}from"./app.5e91cadb.js";import{_ as x}from"./Button.7a1934ed.js";import{a as V}from"./DialogModal.86047474.js";import{_ as $}from"./Input.6c12898b.js";import{_ as S}from"./InputError.b59ae6b7.js";import{_ as B}from"./SecondaryButton.3acf27d8.js";const T={class:"mt-4"},K=l(" Cancel "),F={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"},alwaysConfirm:{type:Boolean,default:!1}},emits:["confirmed"],setup(r,{emit:f}){const w=r,t=p(!1),s=g({password:"",error:"",processing:!1}),n=p(null),_=()=>{w.alwaysConfirm==!1?axios.get(route("password.confirmation")).then(e=>{e.data.confirmed?f("confirmed"):(t.value=!0,setTimeout(()=>n.value.focus(),250))}):(t.value=!0,setTimeout(()=>n.value.focus(),250))},d=()=>{s.processing=!0,axios.post(route("password.confirm"),{password:s.password}).then(()=>{s.processing=!1,i(),b().then(()=>f("confirmed"))}).catch(e=>{s.processing=!1,s.error=e.response.data.errors.password[0],n.value.focus()})},i=()=>{t.value=!1,s.password="",s.error=""};return(e,m)=>(C(),h("span",null,[u("span",{onClick:_},[v(e.$slots,"default")]),o(V,{show:t.value,onClose:i},{title:a(()=>[l(c(r.title),1)]),content:a(()=>[l(c(r.content)+" ",1),u("div",T,[o($,{ref_key:"passwordInput",ref:n,modelValue:s.password,"onUpdate:modelValue":m[0]||(m[0]=y=>s.password=y),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:k(d,["enter"])},null,8,["modelValue","onKeyup"]),o(S,{message:s.error,class:"mt-2"},null,8,["message"])])]),footer:a(()=>[o(B,{onClick:i},{default:a(()=>[K]),_:1}),o(x,{class:P(["ml-3",{"opacity-25":s.processing}]),disabled:s.processing,onClick:d},{default:a(()=>[l(c(r.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as _};
