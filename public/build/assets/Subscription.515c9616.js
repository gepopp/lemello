import{_ as u}from"./AppLayout.75dd9be8.js";import{d as n,l as s,q as p,o as d,c as m,w as i,a as e}from"./app.a45c45d7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const _=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),v={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},f={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-5"},x=e("h3",null,"Manage Your Subscription",-1),b=e("label",null,"Card",-1),g=e("div",{id:"element"},null,-1),C={__name:"Subscription",setup(w){const a=n(),o=n(),l=n();s().props.value.intent,s().props.value.customer,p(()=>{a.value=Stripe(s().props.value.key),o.value=a.value.elements({clientSecret:s().props.value.client_secret,appearance:{variables:{borderRadius:"0px"}}}),l.value=o.value.create("payment"),l.value.mount("#element")});async function c(r){var t=o.value;await a.value.confirmPayment({elements:t,confirmParams:{return_url:"http://projects.test/subscription"}})}return(r,t)=>(d(),m(u,{title:"Dashboard"},{header:i(()=>[_]),default:i(()=>[e("div",v,[e("div",h,[e("div",f,[x,b,g,e("p",{onClick:t[0]||(t[0]=y=>c(r.e))},"send")])])])]),_:1}))}};export{C as default};
