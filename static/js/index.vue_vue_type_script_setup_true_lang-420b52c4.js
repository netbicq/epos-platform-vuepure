import{useColumns as d}from"./columns-04a8e21c.js";import{d as _,r as f,b as n,c as w,e as g,w as k,h as y,f as C,u as e,A as b}from"./index-a4e2f83b.js";const h={class:"w-[600px] m-4"},B=_({__name:"index",setup(R){const t=f(),{columns:s,pagination:o,selectValue:a,tableDataEdit:c,rowStyle:r,onRowClick:i}=d(t);return(V,l)=>{const p=n("pure-table"),u=n("el-select");return w(),g(u,{ref_key:"selectRef",ref:t,modelValue:e(a),"onUpdate:modelValue":l[0]||(l[0]=m=>b(a)?a.value=m:null),placeholder:"请选择",clearable:""},{empty:k(()=>[y("div",h,[C(p,{height:"355","row-key":"id","header-cell-style":{background:"#f5f7fa",color:"#303133"},"row-style":e(r),data:e(c).slice((e(o).currentPage-1)*e(o).pageSize,e(o).currentPage*e(o).pageSize),columns:e(s),pagination:e(o),onRowClick:e(i)},null,8,["row-style","data","columns","pagination","onRowClick"])])]),_:1},8,["modelValue"])}}});export{B as _};
