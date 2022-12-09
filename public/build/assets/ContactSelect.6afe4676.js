import{d as u,K as j,o as r,e as d,a as e,b as z,g as N,M as p,x as V,F as D,h as F,n as f,t as l,f as y,i as c}from"./app.902c1631.js";import{_ as K}from"./Input.0ba70f7a.js";const I={key:0},L={class:"relative"},O={key:0,class:"absolute bg-white shadow-2xl border border-gray-100 w-full p-2 z-50"},S=["onClick","onMouseover"],E=["textContent"],H={class:"text-xs font-thin"},T=["textContent"],q=c(", "),A=["textContent"],G=c(),J=["textContent"],P={key:1},Q={class:"border border-gray-400 p-2 hover:bg-gray-200 flex justify-between"},R=["textContent"],U={key:0,class:"text-xs font-thin"},W=["textContent"],X=c(", "),Y=["textContent"],Z=c(),ee=["textContent"],te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),se=[te],ae={__name:"ContactSelect",props:{contact:Object,address:{type:Boolean,default:!0},filter:{type:Object,default:{}}},emits:["remove","set"],setup(v,{expose:k,emit:x}){const m=v,C=u(""),s=u(m.contact),o=u([]),t=u(0),w=_.debounce(i=>{axios.get(route("customer.search",{search:i.target.value,...m.filter})).then(n=>{o.value=n.data})},500),$=()=>{h(),x("remove")},b=i=>{s.value=i,C.value="",o.value=[],x("set",i)},h=()=>{s.value=null,C.value="",o.value=[]};return k({attached:s,reset:h}),(i,n)=>{const B=j("click-outside");return s.value?(r(),d("div",P,[e("div",Q,[e("div",null,[e("p",{textContent:l(s.value.name)},null,8,R),v.address?(r(),d("p",U,[e("span",{textContent:l(s.value.address.line_1)},null,8,W),X,e("span",{textContent:l(s.value.address.zip)},null,8,Y),Z,e("span",{textContent:l(s.value.address.city)},null,8,ee)])):y("",!0)]),e("div",{class:"text-red-500 cursor-pointer",onClick:$},[(r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:f(["mr-5 h-full w-auto",v.address?"p-2":""])},se,2))])])])):(r(),d("div",I,[e("div",L,[z(K,{id:"search",onInput:N(w),class:"mt-1 block w-full",type:"text",onKeydown:[n[0]||(n[0]=p(a=>t.value<o.value.length-1?t.value++:t.value=0,["down"])),n[1]||(n[1]=p(a=>t.value>0?t.value--:t.value=o.value.length-1,["up"])),n[2]||(n[2]=p(a=>b(o.value[t.value]),["enter"]))]},null,8,["onInput"]),o.value.length?V((r(),d("div",O,[(r(!0),d(D,null,F(o.value,(a,g)=>(r(),d("div",{onClick:M=>b(a),onMouseover:M=>t.value=g,class:f(["border border-gray-400 p-2 cursor-pointer mb-2",t.value==g?"bg-gray-200 border-2 border-orange-600":""])},[e("p",{textContent:l(a.name)},null,8,E),e("p",H,[e("span",{textContent:l(a.address.line_1)},null,8,T),q,e("span",{textContent:l(a.address.zip)},null,8,A),G,e("span",{textContent:l(a.address.city)},null,8,J)])],42,S))),256))])),[[B,h]]):y("",!0)])]))}}};export{ae as _};
