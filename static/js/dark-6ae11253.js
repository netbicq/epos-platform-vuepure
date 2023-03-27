import{b7 as H,y as d,bd as X,b6 as Y,Z as O,aR as ee,be as te,H as ne,av as y,bf as z,K as E,bg as oe,b0 as I,bh as ae,aP as ue,z as le,c as L,j as A,h as b,r as N}from"./index-a4e2f83b.js";import{u as re}from"./app-735c92e1.js";import{u as T}from"./epTheme-fcec9164.js";function se(){const{$storage:t,$config:e}=H(),o=()=>{X().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=Y),t.locale||(t.locale={locale:(e==null?void 0:e.Locale)??"zh"},O().locale.value=(e==null?void 0:e.Locale)??"zh"),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=d(()=>t==null?void 0:t.layout.layout),u=d(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:o}}const P="当前路由配置不正确，请检查配置";function fe(){var S;const t=re(),e=ee().options.routes,{wholeMenus:o}=te(ne()),n=((S=y())==null?void 0:S.TooltipEffect)??"light",u=d(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),s=d(()=>{var a;return(a=z())==null?void 0:a.username}),c=d(()=>(a,f)=>({background:a===f?T().epThemeColor:"",color:a===f?"#f4f4f5":"#000"})),h=d(()=>(a,f)=>a===f?"":"dark:hover:!text-primary"),i=d(()=>s.value?{marginRight:"10px"}:""),C=d(()=>!t.getSidebarStatus),$=d(()=>t.getDevice),{$storage:l,$config:r}=H(),m=d(()=>{var a;return(a=l==null?void 0:l.layout)==null?void 0:a.layout}),M=d(()=>r.Title);function B(a){const f=y().Title;f?document.title=`${E(a.title)} | ${f}`:document.title=E(a.title)}function G(){z().logOut()}function Q(){oe.push("/welcome")}function W(){I.emit("openPanel")}function K(){t.toggleSideBar()}function U(a){a==null||a.handleResize()}function Z(a){var v;if(!a.children)return console.error(P);const f=/^http(s?):\/\//,g=(v=a.children[0])==null?void 0:v.path;return f.test(g)?a.path+"/"+g:g}function q(a,f){if(o.value.length===0||J(a))return;let g="";const v=a.lastIndexOf("/");v>0&&(g=a.slice(0,v));function k(w,_){return _?_.map(p=>{p.path===w?p.redirect?k(p.redirect,p.children):I.emit("changLayoutRoute",{indexPath:w,parentPath:g}):p.children&&k(w,p.children)}):console.error(P)}k(a,f)}function J(a){return ae.includes(a)}return{title:M,device:$,layout:m,logout:G,routers:e,$storage:l,backHome:Q,onPanel:W,getDivStyle:u,changeTitle:B,toggleSideBar:K,menuSelect:q,handleResize:U,resolvePath:Z,isCollapse:C,pureApp:t,username:s,avatarsStyle:i,tooltipEffect:n,getDropdownItemStyle:c,getDropdownItemClass:h}}function _e(t){const{$storage:e,changeTitle:o,handleResize:n}=fe(),{locale:u,t:s}=O(),c=ue();function h(){e.locale={locale:"zh"},u.value="zh",t&&n(t.value)}function i(){e.locale={locale:"en"},u.value="en",t&&n(t.value)}return le(()=>u.value,()=>{o(c.meta)}),{t:s,route:c,locale:u,translationCh:h,translationEn:i}}const de={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},ce=b("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),ie=[ce];function me(t,e){return L(),A("svg",de,ie)}const ze={render:me},x={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/epos-platform-vuepure/epos-platform-vuepure/node_modules/.pnpm/@pureadmin+theme@3.0.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},he="/vue-pure-admin/",ge="assets";function V(t){let e=t.replace("#","").match(/../g);for(let o=0;o<3;o++)e[o]=parseInt(e[o],16);return e}function F(t,e,o){let n=[t.toString(16),e.toString(16),o.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function pe(t,e){let o=V(t);for(let n=0;n<3;n++)o[n]=Math.floor(o[n]*(1-e));return F(o[0],o[1],o[2])}function ve(t,e){let o=V(t);for(let n=0;n<3;n++)o[n]=Math.floor((255-o[n])*e+o[n]);return F(o[0],o[1],o[2])}function R(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function D({scopeName:t,multipleScopeVars:e}){const o=Array.isArray(e)&&e.length?e:x.multipleScopeVars;let n=document.documentElement.className;new RegExp(R(t)).test(n)||(o.forEach(u=>{n=n.replace(new RegExp(R(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function j({id:t,href:e}){const o=document.createElement("link");return o.rel="stylesheet",o.href=e,o.id=t,o}function be(t){const e={scopeName:"theme-default",customLinkHref:s=>s,...t},o=e.themeLinkTagId||x.themeLinkTagId;let n=document.getElementById(o);const u=e.customLinkHref(`${he.replace(/\/$/,"")}${`/${ge}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${o}_old`;const s=j({id:o,href:u});n.nextSibling?n.parentNode.insertBefore(s,n.nextSibling):n.parentNode.appendChild(s),s.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),D(e)};return}n=j({id:o,href:u}),D(e),document[(e.themeLinkTagInjectTo||x.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Ee(){var $;const{layoutTheme:t,layout:e}=se(),o=N([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=H(),u=N(($=n==null?void 0:n.layout)==null?void 0:$.darkMode),s=document.documentElement;function c(l=y().Theme??"default"){var r,m;if(t.value.theme=l,be({scopeName:`layout-theme-${l}`}),n.layout={layout:e.value,theme:l,darkMode:u.value,sidebarStatus:(r=n.layout)==null?void 0:r.sidebarStatus,epThemeColor:(m=n.layout)==null?void 0:m.epThemeColor},l==="default"||l==="light")i(y().EpThemeColor);else{const M=o.value.find(B=>B.themeColor===l);i(M.color)}}function h(l,r,m){document.documentElement.style.setProperty(`--el-color-primary-${l}-${r}`,u.value?pe(m,r/10):ve(m,r/10))}const i=l=>{T().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let r=1;r<=2;r++)h("dark",r,l);for(let r=1;r<=9;r++)h("light",r,l)};function C(){T().epTheme==="light"&&u.value?c("default"):c(T().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:s,dataTheme:u,layoutTheme:t,themeColors:o,dataThemeChange:C,setEpThemeColor:i,setLayoutThemeColor:c}}const $e={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Te=b("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),ye=b("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),Ce=[Te,ye];function Me(t,e){return L(),A("svg",$e,Ce)}const Ie={render:Me},Be={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},ke=b("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),we=b("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),xe=[ke,we];function He(t,e){return L(),A("svg",Be,xe)}const Ne={render:He};export{_e as a,Ee as b,Ne as c,Ie as d,se as e,ze as g,be as t,fe as u};
