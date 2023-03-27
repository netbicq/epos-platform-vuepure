import{S as ue,$ as se}from"./index-a4e2f83b.js";import{r as de}from"./vue.runtime.esm-bundler-4304282c.js";var Q={},pe={get exports(){return Q},set exports(I){Q=I}};(function(I,he){(function(Y,H){I.exports=H(de)})(se,function(Y){return function(){var H={789:function(d){d.exports=Y}},z={};function k(d){var b=z[d];if(b!==void 0)return b.exports;var f=z[d]={exports:{}};return H[d](f,f.exports,k),f.exports}k.d=function(d,b){for(var f in b)k.o(b,f)&&!k.o(d,f)&&Object.defineProperty(d,f,{enumerable:!0,get:b[f]})},k.o=function(d,b){return Object.prototype.hasOwnProperty.call(d,b)},k.r=function(d){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var M={};return function(){function d(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function b(e,t){if(e){if(typeof e=="string")return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function f(e){return function(t){if(Array.isArray(t))return d(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||b(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}k.r(M),k.d(M,{default:function(){return ce}});var a=k(789),re=(0,a.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,a.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),oe=(0,a.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return{uiType:(0,a.computed)(function(){return e.isMultiple?"checkbox":"radio"}),model:(0,a.computed)({get:function(){return e.checked},set:function(l){return n("update:modelValue",l)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return(0,a.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(l){return l.stopPropagation()}},[(0,a.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,a.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),ae=(0,a.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n=e==="objectStart"||e==="arrayStart";return n||e==="objectCollapsed"||e==="arrayCollapsed"?(0,a.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0,a.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,a.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});function K(e){return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(e)}function R(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function V(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"root",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,l=arguments.length>3?arguments[3]:void 0,p=l||{},v=p.key,s=p.index,j=p.type,g=j===void 0?"content":j,C=p.showComma,S=C!==void 0&&C,O=p.length,x=O===void 0?1:O,T=R(e);if(T==="array"){var D=_(e.map(function(m,r,o){return V(m,"".concat(t,"[").concat(r,"]"),n+1,{index:r,showComma:r!==o.length-1,length:x,type:g})}));return[V("[",t,n,{showComma:!1,key:v,length:e.length,type:"arrayStart"})[0]].concat(D,V("]",t,n,{showComma:S,length:e.length,type:"arrayEnd"})[0])}if(T==="object"){var P=Object.keys(e),A=_(P.map(function(m,r,o){return V(e[m],/^[a-zA-Z_]\w*$/.test(m)?"".concat(t,".").concat(m):"".concat(t,'["').concat(m,'"]'),n+1,{key:m,showComma:r!==o.length-1,length:x,type:g})}));return[V("{",t,n,{showComma:!1,key:v,index:s,length:P.length,type:"objectStart"})[0]].concat(A,V("}",t,n,{showComma:S,length:P.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:v,index:s,path:t,showComma:S,length:x,type:g}]}function _(e){if(typeof Array.prototype.flat=="function")return e.flat();for(var t=f(e),n=[];t.length;){var l=t.shift();Array.isArray(l)?t.unshift.apply(t,f(l)):n.push(l)}return n}function $(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new WeakMap;if(e==null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(K(e)!=="object")return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map(function(v){return $(v,t)});return t.set(e,n),n}var l={};for(var p in e)l[p]=$(e[p],t);return t.set(e,l),l}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),n.push.apply(n,l)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W(Object(n),!0).forEach(function(l){L(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var U={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}},le=(0,a.defineComponent)({name:"TreeNode",props:G(G({},U),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,l=(0,a.computed)(function(){return R(e.node.content)}),p=(0,a.computed)(function(){return"vjs-value vjs-value-".concat(l.value)}),v=(0,a.computed)(function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key}),s=(0,a.computed)(function(){return e.selectableType==="multiple"}),j=(0,a.computed)(function(){return e.selectableType==="single"}),g=(0,a.computed)(function(){return e.nodeSelectable(e.node)&&(s.value||j.value)}),C=(0,a.reactive)({editing:!1}),S=function(r){var o,c,i=(c=(o=r.target)===null||o===void 0?void 0:o.value)==="null"?null:c==="undefined"?void 0:c==="true"||c!=="false"&&(c[0]+c[c.length-1]==='""'||c[0]+c[c.length-1]==="''"?c.slice(1,-1):typeof Number(c)=="number"&&!isNaN(Number(c))||c==="NaN"?Number(c):c);n("valueChange",i,e.node.path)},O=(0,a.computed)(function(){var r,o=(r=e.node)===null||r===void 0?void 0:r.content;return o===null?o="null":o===void 0&&(o="undefined"),l.value==="string"?'"'.concat(o,'"'):o+""}),x=function(){var r=e.renderNodeValue;return r?r({node:e.node,defaultValue:O.value}):O.value},T=function(){n("bracketsClick",!e.collapsed,e.node.path)},D=function(){n("iconClick",!e.collapsed,e.node.path)},P=function(){n("selectedChange",e.node)},A=function(){n("nodeClick",e.node),g.value&&e.selectOnClickNode&&n("selectedChange",e.node)},m=function(r){if(e.editable&&!C.editing){C.editing=!0;var o=function c(i){var u;i.target!==r.target&&((u=i.target)===null||u===void 0?void 0:u.parentElement)!==r.target&&(C.editing=!1,document.removeEventListener("click",c))};document.removeEventListener("click",o),document.addEventListener("click",o)}};return function(){var r,o=e.node;return(0,a.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked},onClick:A,style:e.style},[e.showLineNumber&&(0,a.createVNode)("span",{class:"vjs-node-index"},[o.id+1]),e.showSelectController&&g.value&&o.type!=="objectEnd"&&o.type!=="arrayEnd"&&(0,a.createVNode)(oe,{isMultiple:s.value,checked:e.checked,onChange:P},null),(0,a.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(o.level)).map(function(c,i){return(0,a.createVNode)("div",{key:i,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)}),e.showIcon&&(0,a.createVNode)(ae,{nodeType:o.type,onClick:D},null)]),o.key&&(0,a.createVNode)("span",{class:"vjs-key"},[(r=e.renderNodeKey,r?r({node:e.node,defaultKey:v.value||""}):v.value),(0,a.createVNode)("span",null,[(0,a.createTextVNode)(":")])]),(0,a.createVNode)("span",null,[o.type!=="content"&&o.content?(0,a.createVNode)(re,{data:o.content.toString(),onClick:T},null):(0,a.createVNode)("span",{class:p.value,onClick:!e.editable||e.editableTrigger&&e.editableTrigger!=="click"?void 0:m,onDblclick:e.editable&&e.editableTrigger==="dblclick"?m:void 0},[e.editable&&C.editing?(0,a.createVNode)("input",{value:O.value,onChange:S,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):x()]),o.showComma&&(0,a.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,a.createVNode)("span",{class:"vjs-comment"},[(0,a.createTextVNode)(" // "),o.length,(0,a.createTextVNode)(" items ")])])])}}});function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),n.push.apply(n,l)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(l){L(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var ce=(0,a.defineComponent)({name:"Tree",props:y(y({},U),{},{data:{type:Object,default:null},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var n=t.emit,l=t.slots,p=(0,a.ref)(),v=(0,a.computed)(function(){return V(e.data,e.rootPath)}),s=(0,a.reactive)({translateY:0,visibleData:null,hiddenPaths:v.value.reduce(function(r,o){var c,i=o.level>=e.deep,u=(c=e.pathCollapsible)===null||c===void 0?void 0:c.call(e,o);return o.type!=="objectStart"&&o.type!=="arrayStart"||!i&&!u?r:y(y({},r),{},L({},o.path,1))},{})}),j=(0,a.computed)(function(){for(var r=null,o=[],c=v.value.length,i=0;i<c;i++){var u=y(y({},v.value[i]),{},{id:i}),h=s.hiddenPaths[u.path];if(r&&r.path===u.path){var w=r.type==="objectStart",F=y(y(y({},u),r),{},{showComma:u.showComma,content:w?"{...}":"[...]",type:w?"objectCollapsed":"arrayCollapsed"});r=null,o.push(F)}else{if(h&&!r){r=u;continue}if(r)continue;o.push(u)}}return o}),g=(0,a.computed)(function(){var r=e.selectedValue;return r&&e.selectableType==="multiple"&&Array.isArray(r)?r:[r]}),C=(0,a.computed)(function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}),S=function(){var r=j.value;if(e.virtual){var o,c=e.height/e.itemHeight,i=((o=p.value)===null||o===void 0?void 0:o.scrollTop)||0,u=Math.floor(i/e.itemHeight),h=u<0?0:u+c>r.length?r.length-c:u;h<0&&(h=0);var w=h+c;s.translateY=h*e.itemHeight,s.visibleData=r.filter(function(F,B){return B>=h&&B<w})}else s.visibleData=r},O=function(){S()},x=function(r){var o,c,i=r.path,u=e.selectableType;if(u==="multiple"){var h=g.value.findIndex(function(N){return N===i}),w=f(g.value);h!==-1?w.splice(h,1):w.push(i),n("update:selectedValue",w),n("selectedChange",w,f(g.value))}else if(u==="single"&&g.value[0]!==i){var F=(o=g.value,c=1,function(N){if(Array.isArray(N))return N}(o)||function(N,X){var E=N==null?null:typeof Symbol<"u"&&N[Symbol.iterator]||N["@@iterator"];if(E!=null){var ee,te,q=[],J=!0,ne=!1;try{for(E=E.call(N);!(J=(ee=E.next()).done)&&(q.push(ee.value),!X||q.length!==X);J=!0);}catch(ie){ne=!0,te=ie}finally{try{J||E.return==null||E.return()}finally{if(ne)throw te}}return q}}(o,c)||b(o,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())[0],B=i;n("update:selectedValue",B),n("selectedChange",B,F)}},T=function(r){n("nodeClick",r)},D=function(r,o){if(r)s.hiddenPaths=y(y({},s.hiddenPaths),{},L({},o,1));else{var c=y({},s.hiddenPaths);delete c[o],s.hiddenPaths=c}},P=function(r,o){e.collapsedOnClickBrackets&&D(r,o),n("bracketsClick",r)},A=function(r,o){D(r,o),n("iconClick",r)},m=function(r,o){var c=$(e.data),i=e.rootPath;new Function("data","val","data".concat(o.slice(i.length),"=val"))(c,r),n("update:data",c)};return(0,a.watchEffect)(function(){C.value&&function(r){throw new Error("[VueJSONPretty] ".concat(r))}(C.value)}),(0,a.watchEffect)(function(){j.value&&S()}),function(){var r,o,c=(r=e.renderNodeKey)!==null&&r!==void 0?r:l.renderNodeKey,i=(o=e.renderNodeValue)!==null&&o!==void 0?o:l.renderNodeValue,u=s.visibleData&&s.visibleData.map(function(h){return(0,a.createVNode)(le,{key:h.id,node:h,collapsed:!!s.hiddenPaths[h.path],showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:g.value.includes(h.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,renderNodeKey:c,renderNodeValue:i,onNodeClick:T,onBracketsClick:P,onIconClick:A,onSelectedChange:x,onValueChange:m,style:e.itemHeight&&e.itemHeight!==20?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)});return(0,a.createVNode)("div",{ref:p,class:{"vjs-tree":!0,"is-virtual":e.virtual},onScroll:e.virtual?O:void 0,style:e.showLineNumber?y({paddingLeft:"".concat(12*Number(v.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,a.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,a.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(j.value.length*e.itemHeight,"px")}},[(0,a.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(s.translateY,"px)")}},[u])])]):u])}}})}(),M}()})})(pe);const ve=ue(Q);export{ve as V};
