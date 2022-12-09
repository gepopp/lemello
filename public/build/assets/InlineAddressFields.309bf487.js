import{k as m,d as y,l as f,q as C,o as a,e as n,b as r,g as e,a as s,w as p,i as x,t as i,x as w,I as V,F as h,h as k,f as q,T as N}from"./app.902c1631.js";import{_ as d}from"./FromField.6655b8a4.js";import{_ as A}from"./Label.e87d20e0.js";const B={class:"grid grid-cols-6 gap-4"},F={class:"col-span-2"},P={class:"col-span-4"},T={class:"my-2 w-full"},D=s("span",{class:"text-red-500"},"*",-1),I={class:"relative"},L={value:"null"},M=["value","textContent"],S=["textContent"],E={__name:"InlineAddressFields",props:{form:Object},setup(v){const b=v,t=m(()=>b.form),u=y([]),g=f().props.value.locale,c=m(()=>f().props.value.errors);return C(()=>{axios.get(route("countries")).then(o=>u.value=o.data)}),(o,_)=>(a(),n(h,null,[r(d,{form:e(t),id:"line_1",label:o.__("Address"),required:!0},null,8,["form","label"]),r(d,{form:e(t),id:"line_2",label:o.__("Address Line 2")},null,8,["form","label"]),s("div",B,[s("div",F,[r(d,{form:e(t),id:"zip",label:o.__("Zip / Postal Code"),required:!0},null,8,["form","label"])]),s("div",P,[r(d,{form:e(t),id:"city",label:o.__("City"),required:!0},null,8,["form","label"])])]),s("div",T,[r(A,{for:"country"},{default:p(()=>[x(i(o.__("Country")),1),D]),_:1}),s("div",I,[w(s("select",{"onUpdate:modelValue":_[0]||(_[0]=l=>e(t).country_id=l),class:"border-gray-300 focus:border-orange-300 focus:border-2 focus:ring-0 focus:outline-none focus:shadow-none shadow-sm w-full"},[s("option",L,i(o.__("Please Choose")),1),(a(!0),n(h,null,k(u.value,l=>(a(),n("option",{value:l.id,textContent:i(l[e(g)])},null,8,M))),256))],512),[[V,e(t).country_id]]),r(N,{name:"error"},{default:p(()=>[e(c).country_id?(a(),n("p",{key:0,class:"absolute left-0 bottom-0 text-red-600 text-xxs ml-3 line-clamp-1 hover:line-clamp-3",textContent:i(e(c).country_id)},null,8,S)):q("",!0)]),_:1})])])],64))}};export{E as _};
