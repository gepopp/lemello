import{k as n,x as u,B as l,g as d,o as p,e as i,v as f}from"./app.72a850b4.js";const k=["value"],h={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(o,{emit:r}){const s=o,e=n({get(){return s.checked},set(t){r("update:checked",t)}});return(t,a)=>u((p(),i("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>f(e)?e.value=c:null),type:"checkbox",value:o.value,class:"rounded border-gray-300 text-orange-600 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"},null,8,k)),[[l,d(e)]])}};export{h as _};
