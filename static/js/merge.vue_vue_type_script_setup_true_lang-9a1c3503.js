import{d as p,b as s,c as l,j as c,f as m}from"./index-a4e2f83b.js";const i=p({__name:"merge",setup(d){const r=({rowIndex:a,columnIndex:o})=>{if(a%2===0){if(o===0)return[1,2];if(o===1)return[0,0]}},u=({rowIndex:a,columnIndex:o})=>{if(o===0)return a%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},e=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}],t=[{label:"ID",prop:"id"},{label:"Name",prop:"name"},{label:"Amount 1",prop:"amount1",sortable:!0},{label:"Amount 2",prop:"amount2",sortable:!0},{label:"Amount 3",prop:"amount3",sortable:!0}];return(a,o)=>{const n=s("pure-table");return l(),c("div",null,[m(n,{data:e,columns:t,"span-method":r,border:""}),m(n,{data:e,columns:t,"span-method":u,border:""})])}}});export{i as _};
