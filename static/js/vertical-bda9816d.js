import{s as v,a as h}from"./vue-virtual-scroller.esm-b18c1ffb.js";import{d as x,r as d,y as g,b as _,c as y,j as w,h as i,g as b,f as l,w as m,u as n,E as I,_ as V}from"./index-a4e2f83b.js";const C={class:"dynamic-scroller-demo"},k={class:"flex-ac mb-4 shadow-2xl"},z={class:"flex items-center"},B=x({__name:"vertical",setup(N){const c=d([]),t=d("");for(let e=0;e<800;e++)c.value.push({id:e});const p=g(()=>{if(!t.value)return c.value;const e=t.value;return c.value.filter(a=>a.id==e)});return(e,a)=>{const u=_("el-input"),f=_("IconifyIconOnline");return y(),w("div",C,[i("div",k,[b(" 垂直模式 vertical "),l(u,{class:"!w-[350px]",clearable:"",modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),placeholder:"Filter..."},null,8,["modelValue"])]),l(n(h),{items:n(p),"min-item-size":54,class:"scroller"},{default:m(({item:s,index:o,active:r})=>[l(n(v),{item:s,active:r,"size-dependencies":[s.id],"data-index":o,"data-active":r,title:`Click to change message ${o}`,class:"message"},{default:m(()=>[i("div",z,[l(f,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),i("span",null,I(s.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title"])]),_:1},8,["items"])])}}});const O=V(B,[["__scopeId","data-v-6731c9b1"]]);export{O as default};
