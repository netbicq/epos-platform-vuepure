import{a5 as g,r as s,y as U,o as _,f as b,b as v,bj as j,bm as B}from"./index-3ac4b41b.js";import{m as D}from"./message-439ee28d.js";import{b as V}from"./system-fa2c53e8.js";import{u as c,w as Y}from"./xlsx-e927f539.js";function R(){const x=g({username:"",mobile:"",status:""});s([]);const p=s([]),l=s([]),o=s(!0),a=s({}),h=g({total:0,pageSize:10,currentPage:1,background:!0}),r=[{type:"selection",width:55,align:"left"},{label:"序号",type:"index",width:70,hide:({checkList:e})=>!e.includes("序号")},{label:"用户编号",prop:"id",minWidth:130,hide:({checkList:e})=>!e.includes("用户编号")},{label:"用户名称",prop:"username",minWidth:130,hide:({checkList:e})=>!e.includes("用户名称")},{label:"用户昵称",prop:"nickname",minWidth:130,hide:({checkList:e})=>!e.includes("用户昵称")},{label:"性别",prop:"sex",minWidth:90,cellRenderer:({row:e,props:t})=>b(v("el-tag"),{size:t.size,type:e.sex===1?"danger":"",effect:"plain"},{default:()=>[e.sex===1?"女":"男"]}),hide:({checkList:e})=>!e.includes("性别")},{label:"部门",prop:"dept",minWidth:90,formatter:({dept:e})=>e.name,hide:({checkList:e})=>!e.includes("部门")},{label:"手机号码",prop:"mobile",minWidth:90,hide:({checkList:e})=>!e.includes("手机号码")},{label:"状态",prop:"status",minWidth:90,hide:({checkList:e})=>!e.includes("状态"),cellRenderer:e=>{var t;return b(v("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(t=a.value[e.index])==null?void 0:t.loading,modelValue:e.row.status,"onUpdate:modelValue":n=>e.row.status=n,"active-value":1,"inactive-value":0,"active-text":"已开启","inactive-text":"已关闭","inline-prompt":!0,onChange:()=>y(e)},null)}},{label:"创建时间",minWidth:90,prop:"createTime",hide:({checkList:e})=>!e.includes("创建时间"),formatter:({createTime:e})=>j(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:200,slot:"operation"}],w=U(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function y({row:e,index:t}){B.confirm(`确认要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.username}</strong>用户吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!0}),setTimeout(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!1}),D("已成功修改用户状态",{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function k(e){}function C(e){}function W(e){if(l.value.length>0){const t=l.value.map(i=>{const d=[];return r.forEach(f=>{f.label&&d.push(i[f.prop])}),d.pop(),d}),n=[];r.forEach(i=>{i.label&&n.push(i.label)}),n.pop(),t.unshift(n);const T=c.aoa_to_sheet(t),m=c.book_new();c.book_append_sheet(m,T,"数据报表"),Y(m,"tableV2.xlsx")}}function S(e){}function z(e){}function L(e){l.value=e}async function u(){o.value=!0;const{data:e}=await V();p.value=e.list,h.total=e.total,setTimeout(()=>{o.value=!1},500)}const M=e=>{e&&(e.resetFields(),u())};return _(()=>{u()}),{form:x,loading:o,columns:r,dataList:p,pagination:h,buttonClass:w,onSearch:u,resetForm:M,handleUpdate:k,handleDelete:C,handleDownload:W,handleSizeChange:S,handleCurrentChange:z,handleSelectionChange:L}}export{R as useUser};
