import{d as w,u as N,k as h,o as m,c,w as d,a,t as i,b as s,i as v,n as g,e as b,g as t,f as u,x as y,J as C,T as f,p as V,l as S}from"./app.d4613558.js";import{_ as P}from"./AppLayout.8edb5b85.js";import{_}from"./FromField.6c6017bb.js";import{_ as q}from"./InlineAddressFields.c3b1c50c.js";import{_ as T}from"./ContactSelect.2ac08428.js";import{S as x}from"./Seperator.7731b6eb.js";import{_ as B}from"./Button.fc447b35.js";import{_ as k}from"./Label.f667cd2a.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Input.2d09bc94.js";const D={class:"font-semibold text-xl text-gray-800 leading-tight"},M=["onSubmit"],R={class:"grid grid-cols-1 md:grid-cols-2 md:gap-x-10"},U={class:"my-2"},j={class:"mt-1 flex w-full"},z={key:0},E={key:0,class:"mt-2 mb-4"},F={class:"relative"},G={class:"flex flex-col space-y-1 mb-2"},I={class:"flex items-center space-x-3"},J={class:"text-sm"},O={class:"flex items-center space-x-3"},H={class:"text-sm"},K={class:"flex items-center space-x-3"},L={class:"text-sm"},Q=["textContent"],W={class:"mt-5 flex w-full justify-end"},X={__name:"ContactCreate",props:{companies:Array},setup(Y){const r=w(!1),e=N({is_company:r,gender:"",academic_degree:"",name:"",academic_degree_after:"",position:"",fnb:"",vat_id:"",email:"",phone:"",line_1:"",line_2:"",zip:"",city:"",country_id:null,contact_id:null}),$=()=>{e.post(route("contact.store"),{onSuccess:()=>e.reset()})},p=h(()=>S().props.value.errors);return h(()=>Object.keys(p.value).length>0),(l,o)=>(m(),c(P,{title:l.__("New Contact")},{header:d(()=>[a("h2",D,i(l.__("New Contact")),1)]),default:d(()=>[a("form",{onSubmit:V($,["prevent"])},[a("div",R,[a("div",null,[a("div",U,[s(k,{for:r.value},{default:d(()=>[v(i(l.__("Please Choose")),1)]),_:1},8,["for"]),a("div",j,[a("div",{class:g(["selectbox",r.value?"":"active"]),onClick:o[0]||(o[0]=n=>r.value=!1)},i(l.__("Person")),3),a("div",{class:g(["selectbox",r.value?"active":""]),onClick:o[1]||(o[1]=n=>r.value=!0)},i(l.__("Company")),3)])]),s(x),r.value?u("",!0):(m(),b("div",z,[s(T,{onSet:o[2]||(o[2]=n=>t(e).contact_id=n.id),onRemove:o[3]||(o[3]=n=>t(e).contact_id=null)}),s(x)])),s(f,null,{default:d(()=>[r.value?u("",!0):(m(),b("div",E,[s(k,{for:t(e).gender},{default:d(()=>[v(i(l.__("Gender")),1)]),_:1},8,["for"]),a("div",F,[a("div",G,[a("label",I,[y(a("input",{name:"gender",type:"radio","onUpdate:modelValue":o[4]||(o[4]=n=>t(e).gender=n),value:"divers",class:"text-orange-300 border-gray-400 focus:ring-orange-200",required:""},null,512),[[C,t(e).gender]]),a("p",J,i(l.__("Divers")),1)]),a("label",O,[y(a("input",{name:"gender",type:"radio","onUpdate:modelValue":o[5]||(o[5]=n=>t(e).gender=n),value:"female",class:"text-orange-300 border-gray-400 focus:ring-orange-200",required:""},null,512),[[C,t(e).gender]]),a("p",H,i(l.__("Female")),1)]),a("label",K,[y(a("input",{name:"gender",type:"radio","onUpdate:modelValue":o[6]||(o[6]=n=>t(e).gender=n),value:"male",class:"text-orange-300 border-gray-400 focus:ring-orange-200",required:""},null,512),[[C,t(e).gender]]),a("p",L,i(l.__("Male")),1)])]),t(p).gender?(m(),b("p",{key:0,class:"text-red-600 text-xxs ml-3",textContent:i(t(p).gender)},null,8,Q)):u("",!0)])]))]),_:1}),s(f,null,{default:d(()=>[r.value?u("",!0):(m(),c(_,{key:0,form:t(e),id:"academic_degree",label:l.__("Academic Title")},null,8,["form","label"]))]),_:1}),s(_,{form:t(e),id:"name",label:l.__("Name"),required:!0},null,8,["form","label"]),s(f,null,{default:d(()=>[r.value?u("",!0):(m(),c(_,{key:0,form:t(e),id:"academic_degree_after",label:l.__("Post Graduate Title")},null,8,["form","label"]))]),_:1}),s(f,null,{default:d(()=>[r.value?u("",!0):(m(),c(_,{key:0,form:t(e),id:"position",label:l.__("Position")},null,8,["form","label"]))]),_:1}),s(_,{form:t(e),id:"email",label:l.__("Email Address"),type:"email",required:!0},null,8,["form","label"]),s(_,{form:t(e),id:"phone",label:l.__("Phone"),type:"tel"},null,8,["form","label"])]),a("div",null,[s(_,{form:t(e),id:"fnb",label:l.__("Company Register Number")},null,8,["form","label"]),s(_,{form:t(e),id:"vat_id",label:l.__("Vat Id")},null,8,["form","label"]),s(x),s(q,{form:t(e)},null,8,["form"])])]),a("div",W,[s(B,{class:g({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:d(()=>[v(i(l.__("save")),1)]),_:1},8,["class","disabled"])])],40,M)]),_:1},8,["title"]))}},de=A(X,[["__scopeId","data-v-8d318d0a"]]);export{de as default};
