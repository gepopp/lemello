import{u as p,k as l,o as f,e as u,b as o,g as r,w as s,F as d,H as c,a as m,t as i,n as b,i as y,p as h,l as C}from"./app.5e91cadb.js";import{_ as g}from"./AppLayout.108b072d.js";import{_ as t}from"./FromField.4aafab2f.js";import{_ as v}from"./InlineAddressFields.33dcd11f.js";import{_ as N}from"./Button.7a1934ed.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Label.d55e2f0f.js";import"./Input.6c12898b.js";const k={class:"font-semibold text-xl text-gray-800 leading-tight"},S=["onSubmit"],j={__name:"CreateCompany",setup(V){const e=p({name:"",fnb:"",vat_id:"",email:"",phone:"",line_1:"",line_2:"",zip:"",city:"",country:""}),n=()=>{e.post(route("company.store"),{onSuccess:()=>e.reset()})},_=l(()=>C().props.value.errors);return l(()=>Object.keys(_.value).length>0),(a,$)=>(f(),u(d,null,[o(r(c),{title:a.__("Create Company")},null,8,["title"]),o(g,{title:a.__("Create Company")},{header:s(()=>[m("h2",k,i(a.__("Create Company")),1)]),default:s(()=>[m("form",{onSubmit:h(n,["prevent"])},[o(t,{form:r(e),id:"name",label:a.__("Company Name"),required:!0},null,8,["form","label"]),o(t,{form:r(e),id:"fnb",label:a.__("Company Register Number")},null,8,["form","label"]),o(t,{form:r(e),id:"vat_id",label:a.__("Vat Id")},null,8,["form","label"]),o(t,{form:r(e),id:"email",label:a.__("Email Address"),type:"email",required:!0},null,8,["form","label"]),o(t,{form:r(e),id:"phone",label:a.__("Phone"),type:"tel"},null,8,["form","label"]),o(v,{form:r(e)},null,8,["form"]),o(N,{class:b({"opacity-25":r(e).processing}),disabled:r(e).processing},{default:s(()=>[y(i(a.__("save")),1)]),_:1},8,["class","disabled"])],40,S)]),_:1},8,["title"])],64))}};export{j as default};
