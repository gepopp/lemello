import{d as k,u as V,k as C,o as m,c as f,w as r,a as s,t as i,e as y,b as n,i as p,g as e,f as u,x as h,J as x,T as g,L as $,n as q,p as E,l as T}from"./app.902c1631.js";import{_ as B}from"./AppLayout.1e89a0c4.js";import{_ as c}from"./FromField.6655b8a4.js";import{_ as P}from"./InlineAddressFields.309bf487.js";import{S as w}from"./Seperator.c7348baa.js";import{_ as j}from"./ContactSelect.6afe4676.js";import{_ as z}from"./Button.03a0c649.js";import{_ as N}from"./Label.e87d20e0.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Input.0ba70f7a.js";const D={class:"font-semibold text-xl text-gray-800 leading-tight"},M=["onSubmit"],R={class:"grid grid-cols-1 md:grid-cols-2 md:gap-x-10"},U={key:0},F={key:0,class:"mt-2 mb-4"},G={class:"relative"},I={class:"flex flex-col space-y-1 mb-2"},L={class:"flex items-center space-x-3"},O={class:"text-sm"},J={class:"flex items-center space-x-3"},H={class:"text-sm"},K={class:"flex items-center space-x-3"},Q={class:"text-sm"},W=["textContent"],X={class:"mt-5 flex w-full justify-end items-center"},Y={__name:"ContactEdit",props:{contact:Object},setup(b){const o=b,_=k(o.contact.is_company);k(null);const t=V({is_company:_,gender:o.contact.gender,academic_degree:o.contact.academic_degree,name:o.contact.name,academic_degree_after:o.contact.academic_degree_after,position:o.contact.position,fnb:o.contact.fnb,vat_id:o.contact.vat_id,email:o.contact.email,phone:o.contact.phone,line_1:o.contact.address.line_1,line_2:o.contact.address.line_2,zip:o.contact.address.zip.toString(),city:o.contact.address.city,country_id:o.contact.address.country_id,contact_id:o.contact.contact_id}),S=()=>{t.put(route("contact.update",o.contact),{onSuccess:()=>t.reset()})},v=C(()=>T().props.value.errors);return C(()=>Object.keys(v.value).length>0),(a,l)=>(m(),f(B,{title:a.__("New Contact")},{header:r(()=>[s("h2",D,i(a.__("New Contact")),1)]),default:r(()=>[s("form",{onSubmit:E(S,["prevent"])},[s("div",R,[s("div",null,[_.value?u("",!0):(m(),y("div",U,[n(N,null,{default:r(()=>[p(i(a.__("Attach to Company")),1)]),_:1}),n(j,{contact:b.contact,onRemove:l[0]||(l[0]=d=>e(t).contact_id=0),onSet:l[1]||(l[1]=d=>e(t).contact_id=d.id)},null,8,["contact"]),n(w)])),n(g,null,{default:r(()=>[_.value?u("",!0):(m(),y("div",F,[n(N,{for:e(t).gender},{default:r(()=>[p(i(a.__("Gender")),1)]),_:1},8,["for"]),s("div",G,[s("div",I,[s("label",L,[h(s("input",{name:"gender",type:"radio","onUpdate:modelValue":l[2]||(l[2]=d=>e(t).gender=d),value:"divers",class:"text-orange-300 border-gray-400 focus:ring-orange-200",required:""},null,512),[[x,e(t).gender]]),s("p",O,i(a.__("Divers")),1)]),s("label",J,[h(s("input",{name:"gender",type:"radio","onUpdate:modelValue":l[3]||(l[3]=d=>e(t).gender=d),value:"female",class:"text-orange-300 border-gray-400 focus:ring-orange-200",required:""},null,512),[[x,e(t).gender]]),s("p",H,i(a.__("Female")),1)]),s("label",K,[h(s("input",{name:"gender",type:"radio","onUpdate:modelValue":l[4]||(l[4]=d=>e(t).gender=d),value:"male",class:"text-orange-300 border-gray-400 focus:ring-orange-200",required:""},null,512),[[x,e(t).gender]]),s("p",Q,i(a.__("Male")),1)])]),e(v).gender?(m(),y("p",{key:0,class:"text-red-600 text-xxs ml-3",textContent:i(e(v).gender)},null,8,W)):u("",!0)])]))]),_:1}),n(g,null,{default:r(()=>[_.value?u("",!0):(m(),f(c,{key:0,form:e(t),id:"academic_degree",label:a.__("Academic Title")},null,8,["form","label"]))]),_:1}),n(c,{form:e(t),id:"name",label:a.__("Name"),required:!0},null,8,["form","label"]),n(g,null,{default:r(()=>[_.value?u("",!0):(m(),f(c,{key:0,form:e(t),id:"academic_degree_after",label:a.__("Post Graduate Title")},null,8,["form","label"]))]),_:1}),n(g,null,{default:r(()=>[_.value?u("",!0):(m(),f(c,{key:0,form:e(t),id:"position",label:a.__("Position")},null,8,["form","label"]))]),_:1}),n(c,{form:e(t),id:"email",label:a.__("Email Address"),type:"email",required:!0},null,8,["form","label"]),n(c,{form:e(t),id:"phone",label:a.__("Phone"),type:"tel"},null,8,["form","label"])]),s("div",null,[n(c,{form:e(t),id:"fnb",label:a.__("Company Register Number")},null,8,["form","label"]),n(c,{form:e(t),id:"vat_id",label:a.__("Vat Id")},null,8,["form","label"]),n(w),n(P,{form:e(t)},null,8,["form"])])]),s("div",X,[n(e($),{href:a.route("contact.show",b.contact),class:"mr-3 text-gray-600"},{default:r(()=>[p(i(a.__("cancel")),1)]),_:1},8,["href"]),n(z,{class:q({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:r(()=>[p(i(a.__("save")),1)]),_:1},8,["class","disabled"])])],40,M)]),_:1},8,["title"]))}},de=A(Y,[["__scopeId","data-v-5e66fbef"]]);export{de as default};
