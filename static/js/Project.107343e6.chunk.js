"use strict";(self.webpackChunkestimate_app_frontend=self.webpackChunkestimate_app_frontend||[]).push([[962],{1754:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Ce});var i=s(2791),a=s(9085),n=(s(5462),s(7689)),l=s(1087),d=s(4420),c=s(6435),o=s.n(c),r=s(5834),u=s(828),m=s(5147),h=s(1018),x=s(3602),j=s(9728),p=s(663),v=s(7113),_=s(2457),N=s(3449);const b="Select_label__QMERC",g="Select_input__P2+h8";var f=s(3329);const S=function(e){var t;let{isShowModal:s,add:n}=e;const[l,d]=(0,i.useState)(""),{data:c}=(0,_.xo)(),{data:o}=(0,N.GR)(),[r,u]=(0,i.useState)(""),[m,h]=(0,i.useState)(""),[x,j]=(0,i.useState)(""),p=l.toLowerCase(),v=null!==(t=null===c||void 0===c?void 0:c.filter((e=>e.title.toLowerCase().includes(p))))&&void 0!==t?t:[],S=e=>{const{name:t,value:s}=e.currentTarget;switch(t){case"title":u(s);break;case"unit":h(s);break;case"number":j(s);break;default:return}},w=""===m&&""===x&&""===r;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("input",{onChange:e=>d(e.target.value),value:l,type:"text",className:g,placeholder:"\u041f\u043e\u0448\u0443\u043a \u0437 \u043f\u0440\u0430\u0439\u0441\u0443"}),(0,f.jsxs)("form",{action:"",onSubmit:async e=>{if(e.preventDefault(),""===r||""===m||""===x||""===r)return void a.Am.error("\u0423\u0441\u0456 \u043f\u043e\u043b\u044f \u043c\u0430\u044e\u0442\u044c \u0431\u0443\u0442\u0438 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u0456");const t=(await(null===c||void 0===c?void 0:c.filter((e=>e.title===r))))[0].price;await n({title:r,unit:m,number:Number(x),price:t}),u(""),j(""),h(""),s(),(0,a.Am)("\u041f\u043e\u0437\u0438\u0446\u0456\u044e ".concat(r," \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u043e"))},children:[(0,f.jsxs)("select",{className:g,name:"title",id:"title",onChange:S,children:[v&&(null===v||void 0===v?void 0:v.map((e=>{let{title:t,price:s}=e;return(0,f.jsx)("option",{value:t,children:t})}))),(0,f.jsx)("option",{value:"",selected:!0,children:"\u0412\u0438\u0431\u0435\u0440\u0438 \u0432\u0438\u0434 \u0440\u043e\u0431\u043e\u0442\u0438"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{for:"unit",className:b,children:"\u041e\u0434\u0438\u043d\u0438\u0446\u044f"}),(0,f.jsxs)("select",{className:g,name:"unit",id:"unit",onChange:S,children:[o&&(null===o||void 0===o?void 0:o.map((e=>{let{title:t}=e;return(0,f.jsx)("option",{value:t,children:t})}))),(0,f.jsx)("option",{value:"",selected:!0,children:"\u0412\u0438\u0431\u0435\u0440\u0438 \u043e\u0434\u0438\u043d\u0438\u0446\u044e \u0432\u0438\u043c\u0456\u0440\u0443"})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{for:"number",className:b,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),(0,f.jsx)("input",{className:g,type:"number",value:x,name:"number",id:"number",onChange:S})]}),(0,f.jsx)("button",{disabled:w,className:w?"button-disabled":"button",children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})},w="Input_label__JCAog",P="Input_input__o1gwc";const C=function(e){let{isShowModal:t,add:s}=e;const[n,l]=(0,i.useState)(""),[d,c]=(0,i.useState)(""),[o,r]=(0,i.useState)(""),[u,m]=(0,i.useState)(""),h=e=>{const{name:t,value:s}=e.currentTarget;switch(t){case"title":l(s);break;case"unit":c(s);break;case"number":r(s);break;case"price":m(s);break;default:return}},x=""===d&&""===o&&""===n&&""===u;return(0,f.jsxs)("form",{action:"",onSubmit:async e=>{e.preventDefault(),""!==d&&""!==o&&""!==n&&""!==u?(await s({title:n,unit:d,number:Number(o),price:Number(u)}),l(""),r(""),c(""),t(),(0,a.Am)("\u041f\u043e\u0437\u0438\u0446\u0456\u044e ".concat(n," \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u043e"))):a.Am.error("\u0423\u0441\u0456 \u043f\u043e\u043b\u044f \u043c\u0430\u044e\u0442\u044c \u0431\u0443\u0442\u0438 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u0456")},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:w,children:"\u041d\u0430\u0437\u0432\u0430 \u0440\u043e\u0431\u043e\u0442\u0438"}),(0,f.jsx)("input",{className:P,name:"title",value:n,id:"title",onChange:h})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:w,children:"\u041e\u0434\u0438\u043d\u0438\u0446\u044f"}),(0,f.jsx)("input",{className:P,type:"text",value:d,name:"unit",onChange:h})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:w,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),(0,f.jsx)("input",{className:P,type:"number",value:o,name:"number",onChange:h})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:w,children:"\u0426\u0456\u043d\u0430"}),(0,f.jsx)("input",{className:P,type:"number",value:u,name:"price",onChange:h})]}),(0,f.jsx)("button",{disabled:x,className:x?"button-disabled":"button",children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})},I="AddPosition_container__pO8O7",y="AddPosition_closeButton__q9-9I",T="AddPosition_positionContainer__QeSCp";const k=function(e){let{isShowModal:t,add:s}=e;const[a,n]=(0,i.useState)(!1),l=()=>{n((e=>!e))};return(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)("button",{className:y,type:"button",onClick:t,children:(0,f.jsx)(v.Z,{width:"24",height:"24"})}),a?(0,f.jsx)(C,{isShowModal:t,add:s}):(0,f.jsx)(S,{isShowModal:t,add:s}),a?(0,f.jsxs)("div",{className:T,children:[(0,f.jsx)("p",{children:"\u0423 \u0432\u0430\u0441 \u0454 \u0446\u044f \u043f\u043e\u0437\u0438\u0446\u0456\u044f \u0432 \u043f\u0440\u0430\u0439\u0441\u0456?"}),(0,f.jsx)("button",{type:"button",onClick:l,children:"\u041f\u0440\u0435\u0439\u0442\u0438 \u0449\u043e\u0431 \u0434\u043e\u0434\u0430\u0442\u0438"})]}):(0,f.jsxs)("div",{className:T,children:[(0,f.jsx)("p",{children:"\u0412\u0438 \u0445\u043e\u0447\u0438\u0442\u0435 \u0434\u043e\u0434\u0430\u0442\u0438 \u043f\u043e\u0437\u0438\u0446\u0456\u044e \u044f\u043a\u043e\u0457 \u043d\u0435 \u043c\u0430\u0454 \u0432 \u043f\u0440\u0430\u0439\u0441\u0456 ?"}),(0,f.jsx)("button",{type:"button",onClick:l,children:"\u041f\u0440\u0435\u0439\u0442\u0438 \u0449\u043e\u0431 \u0434\u043e\u0434\u0430\u0442\u0438"})]})]})},E="AddEstimate_container__BE+Nb",A="AddEstimate_closeButton__KVf5C",z="AddEstimate_label__gg7QK",D="AddEstimate_input__0Jq4c";const L=function(e){let{isShowModal:t,idData:s}=e;const[n,l]=(0,i.useState)(""),[c]=(0,m.Dz)(),o=(0,d.I0)(),r=""===n;return(0,f.jsxs)("div",{className:E,children:[(0,f.jsx)("button",{className:A,type:"button",onClick:t,children:(0,f.jsx)(v.Z,{width:"24",height:"24"})}),(0,f.jsxs)("form",{action:"",onSubmit:async e=>{e.preventDefault();const i={id:s,estimates:{title:n||""}};try{await c(i),o(u.qx.util.resetApiState()),(0,a.Am)("\u0422\u0430\u0431\u043b\u0438\u0446\u044e ".concat(n," \u0434\u043e\u0434\u0430\u043d\u043e"))}catch(d){a.Am.error("Error adding estimate:",d)}l(""),t()},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:z,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,f.jsx)("input",{type:"text",name:"title",className:D,onChange:e=>{const{name:t,value:s}=e.currentTarget;"title"===t&&l(s)},value:n})]}),(0,f.jsx)("button",{disabled:r,className:r?"button-disabled":"button",children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})},B="UpdateEstimate_container__Bo31F",F="UpdateEstimate_closeButton__6xCB3",M="UpdateEstimate_label__Svwy1",U="UpdateEstimate_input__V-sTR",Z="UpdateEstimate_button__abV5r";const R=function(e){let{isShowModal:t,idData:s}=e;const[n,l]=(0,i.useState)(s.currentName),[c]=(0,m.HP)(),o=(0,d.I0)();return(0,f.jsxs)("div",{className:B,children:[(0,f.jsx)(a.Ix,{draggable:!0}),(0,f.jsx)("button",{className:F,type:"button",onClick:t,children:(0,f.jsx)(v.Z,{width:"24",height:"24"})}),(0,f.jsxs)("form",{action:"",onSubmit:async e=>{if(e.preventDefault(),n){try{await c([s.projId,s.estId,{title:n}]),o(u.qx.util.resetApiState())}catch(i){console.error("Error adding estimate:",i)}l(""),t()}else(0,a.Am)("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0443\u0441\u0456 \u043f\u043e\u043b\u044f")},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:M,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,f.jsx)("input",{type:"text",name:"title",className:U,onChange:e=>{const{name:t,value:s}=e.currentTarget;"title"===t&&l(s)},value:n})]}),(0,f.jsx)("button",{className:Z,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0438"})]})]})},O={titleContainer:"ForbiddenPage_titleContainer__gq+LK",picture:"ForbiddenPage_picture__gpbQn"};const q=function(){return(0,f.jsxs)("div",{className:O.container,children:[(0,f.jsxs)("div",{className:O.titleContainer,children:[(0,f.jsx)("h1",{children:"\u0426\u0435\u0439 \u043a\u043e\u0448\u0442\u043e\u0440\u0438\u0441 \u0412\u0430\u043c \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439"}),(0,f.jsx)("p",{children:"\u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0437\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u0434\u043e \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u0430 \u043a\u043e\u0448\u0442\u043e\u0440\u0438\u0441\u0443!!!"})]}),(0,f.jsx)("div",{className:O.picture})]})},H="ProjectItem_title__h9Y0J",Q="ProjectItem_address__6rgST",V="ProjectItem_titleTable__mdu0h",G="ProjectItem_iksweb__D1h0m",J="ProjectItem_titleRow__Syb5w",K="ProjectItem_dataRow__BQcGC",Y="ProjectItem_oneRow__1YePW",W="ProjectItem_twoRow__sILs0",X="ProjectItem_threeRow__3IrUH",$="ProjectItem_threeRowTitleText__E2EOv",ee="ProjectItem_threeSix__axFxv",te="ProjectItem_total__brM1k",se="ProjectItem_buttonAddContainer__CCrUD",ie="ProjectItem_buttonAdd__XtEBi",ae="ProjectItem_buttonAddTitle__hYwer",ne="ProjectItem_buttonDeletePosition__FrfNT",le="ProjectItem_createPdfFileButton__ph2ll",de="ProjectItem_input__S5G+F",ce="ProjectItem_inputTitle__Bvx4x",oe="ProjectItem_buttonUpdate__6M7pB",re="ProjectItem_buttonUpdateEstimate__+LxHb",ue="ProjectItem_linksList__PUkxn",me="ProjectItem_buttonNav__TeRV-",he="ProjectItem_buttonNavLink__94kd7",xe="ProjectItem_buttonNavCurrent__8nrhU",je="ProjectItem_deleteModalContainer__ELPlF",pe="ProjectItem_buttonContainer__yrlc8",ve="ProjectItem_onDelete__xGueb",_e="ProjectItem_noDelete__UTek2";var Ne=s(4132),be=s(5413),ge=s(1988);const fe=function(){const{id:e}=(0,n.UO)(),{data:t,error:s}=(0,u.ai)(e),{data:c}=(0,x.sA)(),[v]=(0,h.LO)(),[_,N]=(0,i.useState)(t),[b,g]=(0,i.useState)(!1);(0,i.useEffect)((()=>{if(N(t),c){var e;const t=null===c||void 0===c||null===(e=c.user)||void 0===e?void 0:e.role;g("customer"!==t)}}),[t,c,b]);const[S,w]=(0,i.useState)(!1),[P,C]=(0,i.useState)(!1),[I,y]=(0,i.useState)(!1),[T,E]=(0,i.useState)({}),[A,z]=(0,i.useState)({}),D=(0,d.I0)(),[B]=(0,m.BP)(),[F]=(0,h.d1)(),[M]=(0,h.Vv)();let U="",Z="",O="",fe="",Se="";const we=async(e,t)=>{S||(U=await e,Z=await t,await E({idEst:U,idPos:Z})),w((e=>!e))},Pe=()=>{C((e=>!e))},Ce=()=>{y((e=>!e))};o().vfs=r.I.vfs;const Ie=(e,t,s)=>{N((i=>{const a={...i},n=a.estimates.map((i=>{const a=i.positions.map((i=>{if(i._id===e){if("update"===s)return{...i,isShow:t};if("delete"===s)return{...i,isDelete:t}}return i}));return{...i,positions:a}}));return a.estimates=n,a}))},ye=e=>{const{name:t,value:s,id:i}=e.currentTarget;N((e=>{const a={...e},n=a.estimates.map((e=>{const a=e.positions.map((e=>e._id===i&&t===t?{...e,[t]:s}:e));return{...e,positions:a}}));return a.estimates=n,a}))};return(0,f.jsx)(f.Fragment,{children:s?(0,f.jsx)(q,{}):(0,f.jsxs)("div",{children:[(0,f.jsxs)("ul",{className:ue,children:[(0,f.jsx)("li",{className:xe,children:"\u041a\u043e\u0448\u0442\u043e\u0440\u0438\u0441"}),(0,f.jsx)("li",{className:me,children:(0,f.jsx)(l.OL,{className:he,to:"/materials/".concat(null===_||void 0===_?void 0:_._id),children:"\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438"})}),(0,f.jsx)("li",{className:me,children:(0,f.jsx)(l.OL,{className:he,to:"/advances/".concat(null===_||void 0===_?void 0:_._id),children:"\u0410\u0432\u0430\u043d\u0441"})})]}),(0,f.jsx)("button",{className:le,onClick:()=>{if(_){const e=[{text:"\u041d\u0430\u0437\u0432\u0430 \u043e\u0431'\u0454\u043a\u0442\u0443:          ".concat(null===_||void 0===_?void 0:_.title),fontSize:25},{text:"\u0410\u0434\u0440\u0435\u0441\u0430:                                                 ".concat(null===_||void 0===_?void 0:_.description),fontSize:14,marginTop:10}];_.estimates.forEach((t=>{var s;e.push({text:null===t||void 0===t?void 0:t.title,fontSize:16,bold:!0,marginTop:30,marginBottom:10,marginLeft:200},{table:{headerRows:1,widths:["auto","auto","auto","auto","auto","auto"],body:[["\u2116 \u0437/\u043f.","\u041d\u0430\u0437\u0432\u0430","\u041e\u0434\u0438\u043d\u0438\u0446\u044f","\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c","\u0426\u0456\u043d\u0430 \u0432 \u0433\u0440\u043d.","\u0421\u0443\u043c\u0430 \u0432 \u0433\u0440\u043d."],...(null===t||void 0===t||null===(s=t.positions)||void 0===s?void 0:s.map(((e,t)=>{let{title:s,unit:i,price:a,number:n,result:l}=e;return[t+1,s||"",i||"",n||"",a||"",l||""]})))||[],[{},{},{},{},"\u0412\u0441\u044c\u043e\u0433\u043e:",null===t||void 0===t?void 0:t.total]]},layout:"lightHorizontalLines",style:"tableExample"})})),e.push({text:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430:                            ".concat(null===_||void 0===_?void 0:_.total),fontSize:30,marginTop:30}),e.push({text:"\u0412\u0438\u0442\u0440\u0430\u0447\u0435\u043d\u043e \u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438:          ".concat(null===_||void 0===_?void 0:_.materialsTotal),fontSize:30,marginTop:30}),e.push({text:"\u0410\u0432\u0430\u043d\u0441:                                             ".concat(null===_||void 0===_?void 0:_.advancesTotal),fontSize:30,marginTop:30}),e.push({text:"\u0414\u043e \u043e\u043f\u043b\u0430\u0442\u0438:                                    ".concat(null===_||void 0===_?void 0:_.general),fontSize:30,marginTop:30});const t={content:e,styles:{tableExample:{margin:[0,5,0,15],fontSize:12,color:"#333"}}};o().createPdf(t).download("".concat(null===_||void 0===_?void 0:_.title,".pdf"))}},children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 PDF \u0444\u0430\u0439\u043b"}),_&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:se,children:[(0,f.jsxs)("p",{className:H,children:["\u041d\u0430\u0437\u0432\u0430 \u043e\u0431'\u0454\u043a\u0442\u0443: ",_.title]}),b&&(0,f.jsx)("button",{type:"button",className:ae,onClick:Pe,children:(0,f.jsx)(j.Z,{width:"24",height:"24"})})]}),_.description&&(0,f.jsxs)("p",{className:Q,children:["\u0410\u0434\u0440\u0435\u0441\u0430: ",_.description]}),_.estimates&&_.estimates.map((e=>(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:se,children:[(0,f.jsx)("p",{className:V,children:e.title}),b&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("button",{type:"button",className:ae,onClick:()=>(async(e,t)=>{await B({idPro:e,idEst:t}),D(u.qx.util.resetApiState()),(0,a.Am)("\u0422\u0430\u0431\u043b\u0438\u0446\u044e \u043a\u043e\u0448\u0442\u043e\u0440\u0438\u0441\u0443 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e")})(null===_||void 0===_?void 0:_._id,null===e||void 0===e?void 0:e._id),children:(0,f.jsx)(p.Z,{width:"24",height:"24"})}),(0,f.jsx)("button",{className:re,onClick:()=>(async(e,t,s)=>{await z({projId:e,estId:t,currentName:s}),Ce()})(null===_||void 0===_?void 0:_._id,null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.title),children:(0,f.jsx)(be.Z,{width:"28",height:"28"})})]})]}),(0,f.jsx)("table",{className:G,children:(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{className:J,children:[(0,f.jsx)("td",{className:Y,children:"\u2116 \u0437/\u043f."}),(0,f.jsxs)("td",{className:W,children:["\u041d\u0430\u0437\u0432\u0430",b&&(0,f.jsx)("button",{type:"button",onClick:()=>_&&e._id&&we(e._id,_._id),className:ie,children:(0,f.jsx)(j.Z,{width:"24",height:"24"})})]}),(0,f.jsx)("td",{className:X,children:(0,f.jsx)("p",{className:$,children:"\u041e\u0434\u0438\u043d\u0438\u0446\u044f"})}),(0,f.jsx)("td",{className:X,children:(0,f.jsx)("p",{className:$,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"})}),(0,f.jsx)("td",{className:X,children:(0,f.jsx)("p",{className:$,children:"\u0426\u0456\u043d\u0430 \u0432 \u0433\u0440\u043d."})}),(0,f.jsx)("td",{className:ee,children:"\u0421\u0443\u043c\u0430 \u0432 \u0433\u0440\u043d."})]}),e.positions&&e.positions.map(((t,s)=>{let{_id:i,id:n,title:l,unit:d,price:c,number:o,result:r,isShow:m=!1,isDelete:h=!1}=t;return(0,f.jsxs)("tr",{className:K,children:[(0,f.jsxs)("td",{className:Y,children:[s+1,b&&(0,f.jsx)("button",{className:oe,onClick:()=>{m=!m,Ie(i,m,"update"),m||(async(e,t,s,i)=>{O=await e,fe=await t,Se=await s,await v([O,fe,Se,i]),D(u.qx.util.resetApiState())})(_._id,e._id,n,{title:l,unit:d,number:o,price:c})},children:m?(0,f.jsx)(ge.Z,{width:"22",height:"22"}):(0,f.jsx)(be.Z,{width:"22",height:"22"})})]}),(0,f.jsx)("td",{children:m?(0,f.jsx)("input",{id:i,name:"title",className:ce,value:l,disabled:!m,onChange:ye}):(0,f.jsx)("p",{children:l})}),(0,f.jsx)("td",{className:X,children:m?(0,f.jsx)("input",{id:i,name:"unit",className:de,value:d,disabled:!m,onChange:ye}):(0,f.jsx)("p",{children:d})}),(0,f.jsx)("td",{className:X,children:m?(0,f.jsx)("input",{id:i,name:"number",className:de,value:o,disabled:!m,onChange:ye}):(0,f.jsx)("p",{children:o})}),(0,f.jsx)("td",{className:X,children:m?(0,f.jsx)("input",{id:i,name:"price",className:de,value:c,disabled:!m,onChange:ye}):(0,f.jsx)("p",{children:c})}),(0,f.jsxs)("td",{className:ee,children:[r,b&&(0,f.jsx)("button",{className:ne,onClick:()=>{h=!h,Ie(i,h,"delete")},children:(0,f.jsx)(p.Z,{width:"20",height:"20"})}),h&&(0,f.jsxs)("div",{className:je,children:[(0,f.jsx)("h4",{children:"\u0412\u0438 \u0441\u043f\u0440\u0430\u0432\u0434\u0456 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438: ".concat(l)}),(0,f.jsxs)("ul",{className:pe,children:[(0,f.jsx)("li",{children:(0,f.jsx)("button",{className:ve,onClick:()=>{h=!h,Ie(i,h,"delete"),(async(e,t,s)=>{await F({idPro:t,idEst:e,idPos:s}),D(u.qx.util.resetApiState()),(0,a.Am)("\u041f\u043e\u0437\u0438\u0446\u0456\u044e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e")})(e._id,_._id,n)},children:"\u0422\u0430\u043a"})}),(0,f.jsx)("li",{children:(0,f.jsx)("button",{className:_e,onClick:()=>{h=!h,Ie(i,h,"delete")},children:"\u041d\u0456"})})]})]})]})]},i)})),(0,f.jsxs)("tr",{className:"title-row",children:[(0,f.jsx)("td",{colSpan:"5",children:"\u0412\u0441\u044c\u043e\u0433\u043e:"}),(0,f.jsx)("td",{className:ee,children:e.total})]})]})})]},e._id)))]}),(0,f.jsxs)("div",{className:te,children:[(0,f.jsx)("p",{children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430: "}),_&&(0,f.jsx)("p",{children:_.total})]}),(0,f.jsxs)("div",{className:te,children:[(0,f.jsx)("p",{children:"\u0412\u0438\u0442\u0440\u0430\u0447\u0435\u043d\u043e \u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438:"}),(null===_||void 0===_?void 0:_.materialsTotal)&&(0,f.jsx)("p",{children:null===_||void 0===_?void 0:_.materialsTotal})]}),(0,f.jsxs)("div",{className:te,children:[(0,f.jsx)("p",{children:"\u0410\u0432\u0430\u043d\u0441:            "}),(null===_||void 0===_?void 0:_.advancesTotal)&&(0,f.jsx)("p",{children:null===_||void 0===_?void 0:_.advancesTotal})]}),(0,f.jsxs)("div",{div:!0,className:te,children:[(0,f.jsx)("p",{children:"\u0414\u043e \u043e\u043f\u043b\u0430\u0442\u0438:"}),(null===_||void 0===_?void 0:_.general)&&(0,f.jsx)("p",{children:null===_||void 0===_?void 0:_.general})]}),S&&(0,f.jsx)(Ne.Z,{children:(0,f.jsx)(k,{isShowModal:we,add:async e=>{const t={idEst:T.idEst,idPos:T.idPos,position:e};await M(t),D(u.qx.util.resetApiState())}})}),I&&(0,f.jsx)(Ne.Z,{children:(0,f.jsx)(R,{isShowModal:Ce,idData:A})}),P&&(0,f.jsx)(Ne.Z,{children:(0,f.jsx)(L,{idData:e,isShowModal:Pe})})]})})};const Se=function(){const{id:e}=(0,n.UO)(),{data:t,error:s}=(0,u.ai)(e),[a,d]=(0,i.useState)(t);return(0,i.useEffect)((()=>{d(t)}),[t]),o().vfs=r.I.vfs,(0,f.jsx)(f.Fragment,{children:s?(0,f.jsx)(q,{}):(0,f.jsxs)("div",{children:[(0,f.jsxs)("ul",{className:ue,children:[(0,f.jsx)("li",{className:xe,children:"\u041a\u043e\u0448\u0442\u043e\u0440\u0438\u0441"}),(0,f.jsx)("li",{className:me,children:(0,f.jsx)(l.OL,{className:he,to:"/materials/".concat(null===a||void 0===a?void 0:a._id),children:"\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438"})}),(0,f.jsx)("li",{className:me,children:(0,f.jsx)(l.OL,{className:he,to:"/advances/".concat(null===a||void 0===a?void 0:a._id),children:"\u0410\u0432\u0430\u043d\u0441"})})]}),(0,f.jsx)("button",{className:le,onClick:()=>{if(a){const e=[{text:"\u041d\u0430\u0437\u0432\u0430 \u043e\u0431'\u0454\u043a\u0442\u0443:          ".concat(null===a||void 0===a?void 0:a.title),fontSize:25},{text:"\u0410\u0434\u0440\u0435\u0441\u0430:                                                 ".concat(null===a||void 0===a?void 0:a.description),fontSize:14,marginTop:10}];a.estimates.forEach((t=>{var s;e.push({text:null===t||void 0===t?void 0:t.title,fontSize:16,bold:!0,marginTop:30,marginBottom:10,marginLeft:200},{table:{headerRows:1,widths:["auto","auto","auto","auto","auto","auto"],body:[["\u2116 \u0437/\u043f.","\u041d\u0430\u0437\u0432\u0430","\u041e\u0434\u0438\u043d\u0438\u0446\u044f","\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c","\u0426\u0456\u043d\u0430 \u0432 \u0433\u0440\u043d.","\u0421\u0443\u043c\u0430 \u0432 \u0433\u0440\u043d."],...(null===t||void 0===t||null===(s=t.positions)||void 0===s?void 0:s.map(((e,t)=>{let{title:s,unit:i,price:a,number:n,result:l}=e;return[t+1,s||"",i||"",n||"",a||"",l||""]})))||[],[{},{},{},{},"\u0412\u0441\u044c\u043e\u0433\u043e:",null===t||void 0===t?void 0:t.total]]},layout:"lightHorizontalLines",style:"tableExample"})})),e.push({text:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430:                            ".concat(null===a||void 0===a?void 0:a.total),fontSize:30,marginTop:30}),e.push({text:"\u0412\u0438\u0442\u0440\u0430\u0447\u0435\u043d\u043e \u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438:          ".concat(null===a||void 0===a?void 0:a.materialsTotal),fontSize:30,marginTop:30}),e.push({text:"\u0410\u0432\u0430\u043d\u0441:                                             ".concat(null===a||void 0===a?void 0:a.advancesTotal),fontSize:30,marginTop:30}),e.push({text:"\u0414\u043e \u043e\u043f\u043b\u0430\u0442\u0438:                                    ".concat(null===a||void 0===a?void 0:a.general),fontSize:30,marginTop:30});const t={content:e,styles:{tableExample:{margin:[0,5,0,15],fontSize:12,color:"#333"}}};o().createPdf(t).download("".concat(null===a||void 0===a?void 0:a.title,".pdf"))}},children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 PDF \u0444\u0430\u0439\u043b"}),a&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:se,children:(0,f.jsxs)("p",{className:H,children:["\u041d\u0430\u0437\u0432\u0430 \u043e\u0431'\u0454\u043a\u0442\u0443: ",a.title]})}),a.description&&(0,f.jsxs)("p",{className:Q,children:["\u0410\u0434\u0440\u0435\u0441\u0430: ",a.description]}),a.estimates&&a.estimates.map((e=>(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:se,children:(0,f.jsx)("p",{className:V,children:e.title})}),(0,f.jsx)("table",{className:G,children:(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{className:J,children:[(0,f.jsx)("td",{className:Y,children:"\u2116 \u0437/\u043f."}),(0,f.jsx)("td",{className:W,children:"\u041d\u0430\u0437\u0432\u0430"}),(0,f.jsx)("td",{className:X,children:"\u041e\u0434\u0438\u043d\u0438\u0446\u044f"}),(0,f.jsx)("td",{className:X,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),(0,f.jsx)("td",{className:X,children:"\u0426\u0456\u043d\u0430 \u0432 \u0433\u0440\u043d."}),(0,f.jsx)("td",{className:ee,children:"\u0421\u0443\u043c\u0430 \u0432 \u0433\u0440\u043d."})]}),e.positions&&e.positions.map(((e,t)=>{let{_id:s,id:i,title:a,unit:n,price:l,number:d,result:c}=e;return(0,f.jsxs)("tr",{className:K,children:[(0,f.jsx)("td",{className:Y,children:t+1}),(0,f.jsx)("td",{children:(0,f.jsx)("p",{children:a})}),(0,f.jsx)("td",{className:X,children:(0,f.jsx)("p",{children:n})}),(0,f.jsx)("td",{className:X,children:(0,f.jsx)("p",{children:d})}),(0,f.jsx)("td",{className:X,children:(0,f.jsx)("p",{children:l})}),(0,f.jsx)("td",{className:ee,children:(0,f.jsx)("p",{children:c})})]},s)})),(0,f.jsxs)("tr",{className:"title-row",children:[(0,f.jsx)("td",{colSpan:"5",children:"\u0412\u0441\u044c\u043e\u0433\u043e:"}),(0,f.jsx)("td",{className:ee,children:e.total})]})]})})]},e._id)))]}),(0,f.jsxs)("div",{className:te,children:[(0,f.jsx)("p",{children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430: "}),a&&(0,f.jsx)("p",{children:a.total})]}),(0,f.jsxs)("div",{className:te,children:[(0,f.jsx)("p",{children:"\u0412\u0438\u0442\u0440\u0430\u0447\u0435\u043d\u043e \u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438:"}),(null===a||void 0===a?void 0:a.materialsTotal)&&(0,f.jsx)("p",{children:null===a||void 0===a?void 0:a.materialsTotal})]}),(0,f.jsxs)("div",{className:te,children:[(0,f.jsx)("p",{children:"\u0410\u0432\u0430\u043d\u0441:"}),(null===a||void 0===a?void 0:a.advancesTotal)&&(0,f.jsx)("p",{children:null===a||void 0===a?void 0:a.advancesTotal})]}),(0,f.jsxs)("div",{div:!0,className:te,children:[(0,f.jsx)("p",{children:"\u0414\u043e \u043e\u043f\u043b\u0430\u0442\u0438:"}),(null===a||void 0===a?void 0:a.general)&&(0,f.jsx)("p",{children:null===a||void 0===a?void 0:a.general})]})]})})},we="Project_projectContainer__1NP4c",Pe="Project_titleEst__bB-cB";const Ce=function(){const{data:e}=(0,x.sA)(),[t,s]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{if(e){var t;const i=null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.role;s("customer"!==i)}}),[e,t]),(0,f.jsxs)("div",{className:we,children:[(0,f.jsx)(a.Ix,{draggable:!0}),(0,f.jsx)("h1",{className:Pe,children:"\u041a\u041e\u0428\u0422\u041e\u0420\u0418\u0421"}),t?(0,f.jsx)(fe,{}):(0,f.jsx)(Se,{})]})}}}]);
//# sourceMappingURL=Project.107343e6.chunk.js.map