import{d as n,q as r,o as l,e as c}from"./app.d4613558.js";const f=["value"],i={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup(u,{expose:t}){const e=n(null);return r(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(s,o)=>(l(),c("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-orange-300 focus:border-2 focus:ring-0 focus:outline-none focus:shadow-none shadow-sm",value:u.modelValue,onInput:o[0]||(o[0]=a=>s.$emit("update:modelValue",a.target.value))},null,40,f))}};export{i as _};
