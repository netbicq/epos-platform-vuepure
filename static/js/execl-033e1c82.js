import{u as m,w as $}from"./xlsx-e927f539.js";import{d as k,b as c,c as g,e as C,w as l,h,g as u,f as i,u as f}from"./index-a4e2f83b.js";const v={class:"font-medium"},E={class:"h-[25rem] mt-3"},B=k({name:"Excel"}),K=k({...B,setup(S){const b=(o=10,t="column-",a)=>Array.from({length:o}).map((s,e)=>({...a,key:`${t}${e}`,dataKey:`${t}${e}`,title:`Column ${e}`,width:150})),x=(o,t=200,a="row-")=>Array.from({length:t}).map((s,e)=>o.reduce((n,r,d)=>(n[r.dataKey]=`Row ${e} - Col ${d}`,n),{id:`${a}${e}`,parentId:null})),_=b(10),p=x(_,1e3),w=()=>{const o=p.map(e=>{const n=[];return _.forEach(r=>{n.push(e[r.dataKey])}),n}),t=[];_.forEach(e=>{t.push(e.title)}),o.unshift(t);const a=m.aoa_to_sheet(o),s=m.book_new();m.book_append_sheet(s,a,"数据报表"),$(s,"tableV2.xlsx")};return(o,t)=>{const a=c("el-link"),s=c("el-button"),e=c("el-table-v2"),n=c("el-auto-resizer"),r=c("el-card");return g(),C(r,{shadow:"never"},{header:l(()=>[h("div",v,[u(" 导出Execl（ "),i(a,{href:"https://github.com/SheetJS/sheetjs",target:"_blank",style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:l(()=>[u(" github地址 ")]),_:1}),u(" ） ")])]),default:l(()=>[i(s,{type:"primary",onClick:w},{default:l(()=>[u("导出Excel")]),_:1}),h("div",E,[i(n,null,{default:l(({height:d,width:y})=>[i(e,{columns:f(_),data:f(p),width:y,height:d,fixed:""},null,8,["columns","data","width","height"])]),_:1})])]),_:1})}}});export{K as default};
