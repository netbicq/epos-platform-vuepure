import{t as l}from"./data-8e1156d7.js";import{d as g,r as i,b as p,c as C,j as v,f as a,u as s,h,w as d,g as u}from"./index-3ac4b41b.js";const S={style:{"margin-top":"20px"}},w=g({__name:"multipleChoice",setup(k){const c=i(),f=i([]),r=t=>{const{toggleRowSelection:e,clearSelection:n}=c.value.getTableRef();t?t.forEach(o=>{e(o,void 0)}):n()},m=t=>{f.value=t},_=[{type:"selection",align:"left"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const n=p("pure-table"),o=p("el-button");return C(),v("div",null,[a(n,{ref_key:"tableRef",ref:c,data:s(l),columns:_,onSelectionChange:m},null,8,["data"]),h("div",S,[a(o,{onClick:e[0]||(e[0]=b=>r([s(l)[1],s(l)[2]]))},{default:d(()=>[u(" Toggle selection status of second and third rows ")]),_:1}),a(o,{onClick:e[1]||(e[1]=b=>r())},{default:d(()=>[u("Clear selection")]),_:1})])])}}});export{w as _};