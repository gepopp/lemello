import{_ as c}from"./AppLayout.7e3835d0.js";import p from"./DeleteUserForm.6952587e.js";import{J as s}from"./SectionBorder.ff20ca75.js";import l from"./LogoutOtherBrowserSessionsForm.1651eb44.js";import f from"./TwoFactorAuthenticationForm.a78ef135.js";import u from"./UpdatePasswordForm.5048b319.js";import _ from"./UpdateProfileInformationForm.359fed71.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.f9f0b70f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.154120ad.js";import"./InputError.12cc74ae.js";import"./DangerButton.c9717422.js";import"./Input.453e4a67.js";import"./SecondaryButton.bbcdcefe.js";import"./ActionMessage.23637446.js";import"./Button.6bbafed0.js";import"./Label.3dea91ba.js";import"./FormSection.b0b13b17.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},M={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{M as default};
