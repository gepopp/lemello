import{d as u,u as b,k as l,o as v,c as g,w as o,a as i,t as n,b as s,i as _,g as a,n as j,p as y,l as h}from"./app.5e91cadb.js";import{_ as C}from"./AppLayout.108b072d.js";import{_ as P}from"./FromField.4aafab2f.js";import{_ as m}from"./Label.d55e2f0f.js";import{_ as $}from"./ContactSelect.56b6b5df.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as N}from"./TipTap.1814bfe2.js";import{_ as S}from"./Button.7a1934ed.js";import"./Input.6c12898b.js";const k={class:"font-semibold text-xl text-gray-800 leading-tight"},x=["onSubmit"],B={class:"my-2"},V={class:"mt-5 flex w-full justify-end"},D={__name:"ProjectCreate",props:{companies:Array},setup(q){u(!1);const e=b({name:"",description:"",contact_id:null}),d=()=>{e.post(route("project.store"),{onSuccess:()=>e.reset()})},p=t=>{e.description=t},f=l(()=>h().props.value.errors);return l(()=>Object.keys(f.value).length>0),(t,r)=>(v(),g(C,{title:t.__("New Project")},{header:o(()=>[i("h2",k,n(t.__("New Project")),1)]),default:o(()=>[i("form",{onSubmit:y(d,["prevent"])},[s(m,null,{default:o(()=>[_(n(t.__("Choose Customer")),1)]),_:1}),s($,{onSet:r[0]||(r[0]=c=>a(e).contact_id=c.id),onRemove:r[1]||(r[1]=c=>a(e).contact_id=null)}),s(P,{form:a(e),id:"name",label:t.__("Project Name"),required:!0},null,8,["form","label"]),i("div",B,[s(m,null,{default:o(()=>[_(n(t.__("Description")),1)]),_:1}),s(N,{onUpdate:p})]),i("div",V,[s(S,{class:j({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:o(()=>[_(n(t.__("save")),1)]),_:1},8,["class","disabled"])])],40,x)]),_:1},8,["title"]))}},E=w(D,[["__scopeId","data-v-7dba4a4f"]]);export{E as default};
