import{u as t,w as m}from"./xlsx-e927f539.js";import{a as u}from"./data-3471a80d.js";import{r as i,G as f}from"./index-a4e2f83b.js";import{m as b}from"./message-19e896a6.js";function _(){const r=i(f(u,!0)),o=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}];return{columns:o,dataList:r,exportExcel:()=>{const s=r.value.map(e=>{const n=[];return o.forEach(c=>{n.push(e[c.prop])}),n}),a=[];o.forEach(e=>{a.push(e.label)}),s.unshift(a);const l=t.aoa_to_sheet(s),p=t.book_new();t.book_append_sheet(p,l,"数据报表"),m(p,"pure-admin-table.xlsx"),b("导出成功",{type:"success"})}}}export{_ as useColumns};
