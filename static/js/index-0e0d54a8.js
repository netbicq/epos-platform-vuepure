import{a3 as F,d as w,r as s,o as U,b as l,i as $,c as r,j as m,h as E,f as n,w as u,g as O,u as d,m as v,aa as h,F as C,k as q,ac as R,e as G,bm as H,n as J}from"./index-0c8e9f13.js";import K from"./Card-717f5814.js";import{m as Q}from"./message-76ecb07a.js";import{_ as W}from"./DialogForm.vue_vue_type_script_setup_true_lang-370c5ca0.js";import{u as X}from"./hooks-f90d34ce.js";import{S as Y}from"./search-4b9e88d3.js";import{A as Z}from"./add-circle-line-5b89a592.js";import"./more-2-fill-0341ae67.js";const ee=g=>F.request("post","/getCardList",{data:g}),te={class:"main"},ae={class:"w-full flex justify-between mb-4"},ne=w({name:"ListCard"}),pe=w({...ne,setup(g){const y=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,b={name:"",status:"",description:"",type:"",mark:""},e=s({current:1,pageSize:12,total:0}),p=s([]),_=s(!0),x=async()=>{try{const{data:t}=await ee();p.value=t.list,e.value={...e.value,total:t.list.length}}catch{}finally{setTimeout(()=>{_.value=!1},500)}};U(()=>{x()});const c=s(!1),f=s({...b}),i=s(""),L=t=>{e.value.pageSize=t,e.value.current=1},z=t=>{e.value.current=t},S=t=>{H.confirm(t?`确认删除后${t.name}的所有产品信息将被清空, 且无法恢复`:"","提示",{type:"warning"}).then(()=>{Q("删除成功",{type:"success"})}).catch(()=>{})},k=t=>{c.value=!0,J(()=>{f.value={...t,status:t!=null&&t.isSetup?"1":"0"}})};return(t,o)=>{const I=l("el-button"),V=l("IconifyIconOffline"),D=l("el-icon"),A=l("el-input"),M=l("el-empty"),P=l("el-col"),B=l("el-row"),N=l("el-pagination"),T=$("loading");return r(),m("div",te,[E("div",ae,[n(I,{icon:d(X)(d(Z)),onClick:o[0]||(o[0]=a=>c.value=!0)},{default:u(()=>[O(" 新建产品 ")]),_:1},8,["icon"]),n(A,{style:{width:"300px"},modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value=a),placeholder:"请输入产品名称",clearable:""},{suffix:u(()=>[n(D,{class:"el-input__icon"},{default:u(()=>[v(n(V,{icon:d(Y)},null,8,["icon"]),[[h,i.value.length===0]])]),_:1})]),_:1},8,["modelValue"])]),v((r(),m("div",{"element-loading-svg":y,"element-loading-svg-view-box":"-10, -10, 50, 50"},[v(n(M,{description:"暂无数据"},null,512),[[h,p.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(a=>a.name.toLowerCase().includes(i.value.toLowerCase())).length===0]]),e.value.total>0?(r(),m(C,{key:0},[n(B,{gutter:16},{default:u(()=>[(r(!0),m(C,null,q(p.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(a=>a.name.toLowerCase().includes(i.value.toLowerCase())),(a,j)=>(r(),G(P,{key:j,xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[n(K,{product:a,onDeleteItem:S,onManageProduct:k},null,8,["product"])]),_:2},1024))),128))]),_:1}),n(N,{class:"float-right",currentPage:e.value.current,"onUpdate:currentPage":o[2]||(o[2]=a=>e.value.current=a),"page-size":e.value.pageSize,total:e.value.total,"page-sizes":[12,24,36],background:!0,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:L,onCurrentChange:z},null,8,["currentPage","page-size","total"])],64)):R("",!0)])),[[T,_.value]]),n(W,{visible:c.value,"onUpdate:visible":o[3]||(o[3]=a=>c.value=a),data:f.value},null,8,["visible","data"])])}}});export{pe as default};