import{_ as u}from"./AppLayout.7277478f.js";import{d as l,l as s,q as p,o as d,c as m,w as i,a as e}from"./app.a84620fb.js";import"./_plugin-vue_export-helper.cdc0426e.js";const _=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),v={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},f={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-5"},x=e("h3",null,"Manage Your Subscription",-1),b=e("label",null,"Card",-1),g=e("div",{id:"element"},null,-1),C={__name:"Subscription",setup(w){const a=l(),o=l(),r=l();s().props.value.intent,s().props.value.customer,p(()=>{a.value=Stripe(s().props.value.key),o.value=a.value.elements({clientSecret:s().props.value.client_secret,appearance:{variables:{borderRadius:"0px"}}}),r.value=o.value.create("payment"),r.value.mount("#element")});async function c(n){n.preventDefault();var t=o.value;await a.value.confirmPayment({elements:t,confirmParams:{return_url:"http://projects.test/subscription"}})}return(n,t)=>(d(),m(u,{title:"Dashboard"},{header:i(()=>[_]),default:i(()=>[e("div",v,[e("div",h,[e("div",f,[x,b,g,e("p",{onClick:t[0]||(t[0]=y=>c(n.e))},"send")])])])]),_:1}))}};export{C as default};
