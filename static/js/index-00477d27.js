import{d as p,y as C,r as w,bf as u,b as a,c as d,e as V,w as t,f as l,C as i,u as _,g as B,h as m,E as S,j as x,F as P,k as z,bb as H,H as N,bp as U}from"./index-a4e2f83b.js";const j={class:"card-header"},E=p({name:"PermissionPage"}),D=p({...E,setup(F){var n;const o=C(()=>({width:"85vw",justifyContent:"start"})),s=w((n=u())==null?void 0:n.username),f=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function v(){u().loginByUsername({username:s.value,password:"admin123"}).then(r=>{r.success&&(H().removeItem("async-routes"),N().clearAllCachePage(),U())})}return(r,c)=>{const y=a("el-tag"),g=a("el-option"),b=a("el-select"),h=a("el-card"),k=a("el-space");return d(),V(k,{direction:"vertical",size:"large"},{default:t(()=>[l(y,{style:i(_(o)),size:"large",effect:"dark"},{default:t(()=>[B(" 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ")]),_:1},8,["style"]),l(h,{shadow:"never",style:i(_(o))},{header:t(()=>[m("div",j,[m("span",null,"当前角色："+S(s.value),1)])]),default:t(()=>[l(b,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=e=>s.value=e),onChange:v},{default:t(()=>[(d(),x(P,null,z(f,e=>l(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{D as default};
