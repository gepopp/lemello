import{d as b,u as g,k as p,o as v,e as y,i,t as a,g as s,b as o,w as r,F as h,a as d,n as P,p as $,l as E}from"./app.66348164.js";import{_ as C}from"./AppLayout.1245df41.js";import{_ as S}from"./FromField.5134e0fd.js";import{_ as u}from"./Label.e6f9ab74.js";import{_ as k}from"./ContactSelect.1a42e862.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as x}from"./TipTap.7552a100.js";import{_ as N}from"./Button.e2e93ccc.js";import"./Input.87ee8fd0.js";const B={class:"font-semibold text-xl text-gray-800 leading-tight"},F=["onSubmit"],V={class:"my-2"},D={class:"mt-5 flex w-full justify-end"},O={__name:"ProjectEdit",props:{project:Object,companies:Array},setup(l){const n=l;b(!1);const t=g({name:n.project.name,description:n.project.description,contact_id:n.project.contact.id}),f=()=>{t.put(route("project.update",n.project),{onSuccess:()=>t.reset()})},j=e=>{t.description=e},_=p(()=>E().props.value.errors);return p(()=>Object.keys(_.value).length>0),(e,c)=>(v(),y(h,null,[i(a(s(_))+" ",1),o(C,{title:e.__("Edit Project")},{header:r(()=>[d("h2",B,a(e.__("Edit Project")),1)]),default:r(()=>[d("form",{onSubmit:$(f,["prevent"])},[o(u,null,{default:r(()=>[i(a(e.__("Choose Customer")),1)]),_:1}),o(k,{onSet:c[0]||(c[0]=m=>s(t).contact_id=m.id),onRemove:c[1]||(c[1]=m=>s(t).contact_id=null),contact:l.project.contact},null,8,["contact"]),o(S,{form:s(t),id:"name",label:e.__("Project Name"),required:!0},null,8,["form","label"]),d("div",V,[o(u,null,{default:r(()=>[i(a(e.__("Description")),1)]),_:1}),o(x,{onUpdate:j,content:l.project.description},null,8,["content"])]),d("div",D,[o(N,{class:P({"opacity-25":s(t).processing}),disabled:s(t).processing},{default:r(()=>[i(a(e.__("save")),1)]),_:1},8,["class","disabled"])])],40,F)]),_:1},8,["title"])],64))}},H=w(O,[["__scopeId","data-v-9cb5dd7c"]]);export{H as default};
