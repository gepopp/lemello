import{d as i,K as $,o as r,e as c,a as e,b as j,g as M,M as v,x as B,F as D,h as F,n as K,t as u,f as N}from"./app.9eed93a5.js";import{_ as V}from"./Input.d6bf1a0f.js";const z={key:0},I={class:"relative"},L={key:0,class:"absolute bg-white shadow-2xl border border-gray-100 w-full p-2 z-50"},O=["onClick","onMouseover"],S=["textContent"],E=["textContent"],H={key:1},P={class:"border border-gray-400 p-2 bg-white flex justify-between"},q={class:"leading-tight"},A=["textContent"],G=["textContent"],J=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Q=[J],U={__name:"ProjectSelect",props:{project:Object,filter:{type:Object,default:{}}},emits:["remove","set"],setup(b,{expose:f,emit:h}){const p=b,m=i(""),n=i(p.project),s=i([]),t=i(0),w=_.debounce(l=>{axios.get(route("project.search",{search:l.target.value,...p.filter})).then(o=>{console.log(o.data),s.value=o.data})},500),k=()=>{d(),h("remove")},x=l=>{n.value=l,m.value="",s.value=[],h("set",l)},d=()=>{n.value=null,m.value="",s.value=[]};return f({attached:n,reset:d}),(l,o)=>{const C=$("click-outside");return n.value?(r(),c("div",H,[e("div",P,[e("div",q,[e("p",{class:"text-sm",textContent:u(n.value.name)},null,8,A),e("p",{class:"text-xs",textContent:u(n.value.contact.name)},null,8,G)]),e("div",{class:"text-red-500 cursor-pointer flex items-center",onClick:k},Q)])])):(r(),c("div",z,[e("div",I,[j(V,{id:"search",onInput:M(w),class:"mt-1 block w-full",type:"text",onKeydown:[o[0]||(o[0]=v(a=>t.value<s.value.length-1?t.value++:t.value=0,["down"])),o[1]||(o[1]=v(a=>t.value>0?t.value--:t.value=s.value.length-1,["up"])),o[2]||(o[2]=v(a=>x(s.value[t.value]),["enter"]))]},null,8,["onInput"]),s.value.length?B((r(),c("div",L,[(r(!0),c(D,null,F(s.value,(a,g)=>(r(),c("div",{onClick:y=>x(a),onMouseover:y=>t.value=g,class:K(["border border-gray-400 p-2 cursor-pointer mb-2",t.value==g?"bg-gray-200 border-2 border-orange-600":""])},[e("p",{textContent:u(a.name)},null,8,S),e("p",{class:"text-xs font-thin",textContent:u(a.contact.name)},null,8,E)],42,O))),256))])),[[C,d]]):N("",!0)])]))}}};export{U as _};
