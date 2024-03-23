"use strict";(self.webpackChunkestimate_app_frontend=self.webpackChunkestimate_app_frontend||[]).push([[327],{3425:(e,t,s)=>{s.r(t),s.d(t,{default:()=>K});var i=s(2791),n=s(2457),c=s(3449),l=s(9728),a=s(4132),r=s(9085),d=(s(5462),s(7113));const o=s.p+"static/media/Recording.5f30dd9082f8eb815421.png",h="AddPrice_container__254IS",u="AddPrice_closeButton__X4mEx",_="AddPrice_label__PqkC6",x="AddPrice_input__jwPqV",j="AddPrice_buttonsContainer__Kp3g-",m="AddPrice_recordingButton__mmyFo";var p=s(3329);const b=function(e){let{isShowModal:t}=e;const[s,c]=(0,i.useState)(null);(0,i.useEffect)((()=>{if("SpeechRecognition"in window||"webkitSpeechRecognition"in window){const e=new(window.SpeechRecognition||window.webkitSpeechRecognition);c(e)}else console.log("\u0420\u043e\u0437\u043f\u0456\u0437\u043d\u0430\u0432\u0430\u043d\u043d\u044f \u043c\u043e\u0432\u0438 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f \u0432 \u0446\u044c\u043e\u043c\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456.")}),[]);const[l,a]=(0,i.useState)(""),[b,N]=(0,i.useState)(""),{data:v}=(0,n.xo)(),[g]=(0,n.$C)(),w=e=>{const{name:t,value:s}=e.currentTarget;switch(t){case"title":a(s);break;case"price":N(s);break;default:return}};s&&(s.lang="uk-UA",s.interimResults=!0),s&&(s.onresult=e=>{const t=Array.from(e.results).map((e=>e[0].transcript)).join(""),s=t.split("");for(let i=0;i<s.length;i++)0===i&&(s[i]=t.charAt(0).toUpperCase());a(s.join(""))});const f=""===l&&""===b;return(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)(r.Ix,{draggable:!0}),(0,p.jsx)("button",{className:u,type:"button",onClick:t,children:(0,p.jsx)(d.Z,{width:"24",height:"24"})}),(0,p.jsxs)("form",{action:"",onSubmit:async e=>{if(e.preventDefault(),""!==l&&""!==b){if(v.find((e=>e.title===l)))return r.Am.error("\u0422\u0430\u043a\u0435 \u043d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"),a(""),void N("");try{const e={title:l,price:Number(b)};g(e)}catch(s){alert("User with the title: ".concat(l," does not exist!"),s)}a(""),N(""),t()}else r.Am.error("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0443\u0441\u0456 \u043f\u043e\u043b\u044f")},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:_,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("input",{type:"text",name:"title",className:x,onChange:w,value:l}),(0,p.jsx)("div",{className:m,onClick:()=>{s&&s.start()},children:(0,p.jsx)("img",{src:o,width:"40",height:"40",alt:"recording button"})})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:_,children:"\u0426\u0456\u043d\u0430"}),(0,p.jsx)("input",{type:"number",name:"price",className:x,onChange:w,value:b})]}),(0,p.jsx)("button",{id:"submit",disabled:f,className:f?"button-disabled":"button",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043f\u0440\u0430\u0439\u0441"})]})]})};var N=s(663);const v="PriceList_title__iYhtM",g="PriceList_buttonAdd__LKfMB",w="PriceList_buttonDelete__ELosM",f="PriceList_iksweb__ocNx1",P="PriceList_tableMin__UL+E6",C="PriceList_rowOne__NU3gr",L="PriceList_twoRow__M19Hs",S="PriceList_input__UIXOm",k="PriceList_inputTitle__NR5gF",A="PriceList_inputPrice__A-UZ6",y="PriceList_buttonUpdate__pSBqW",U="PriceList_unitButtons__UOY0e",Z="PriceList_deleteUnit__AfImf",M="PriceList_deleteModalContainer__EPZMZ",R="PriceList_buttonContainer__X0Anv",D="PriceList_onDelete__jj4sP",E="PriceList_noDelete__6livc";var B=s(5413),I=s(1988);const T="AddUnit_container__y0H4v",q="AddUnit_closeButton__p0H++",H="AddUnit_label__n7xue",O="AddUnit_input__LWrfU";const X=function(e){let{isShowModal:t}=e;const[s,n]=(0,i.useState)(""),[l]=(0,c.CZ)(),a=""===s;return(0,p.jsxs)("div",{className:T,children:[(0,p.jsx)(r.Ix,{draggable:!0}),(0,p.jsx)("button",{className:q,type:"button",onClick:t,children:(0,p.jsx)(d.Z,{width:"24",height:"24"})}),(0,p.jsxs)("form",{action:"",onSubmit:async e=>{if(e.preventDefault(),!s)return void r.Am.error("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0443\u0441\u0456 \u043f\u043e\u043b\u044f");const i={title:s||""};try{await l(i)}catch(c){console.error("Error adding unit:",c)}n(""),t()},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:H,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,p.jsx)("input",{type:"text",name:"title",className:O,onChange:e=>{const{name:t,value:s}=e.currentTarget;"title"===t&&n(s)},value:s})]}),(0,p.jsx)("button",{disabled:a,className:a?"button-disabled":"button",children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})};const F=function(){var e;const[t,s]=(0,i.useState)(""),[r,d]=(0,i.useState)(!1),[o,h]=(0,i.useState)(!1),{data:u}=(0,n.xo)(),[_,x]=(0,i.useState)(u),[j]=(0,n.Ls)(),[m]=(0,n.S2)(),{data:T}=(0,c.GR)(),[q]=(0,c.jb)();(0,i.useEffect)((()=>{x(u)}),[u]);const H=()=>{d((e=>!e))},O=()=>{h((e=>!e))},F=t.toLowerCase(),K=null!==(e=null===_||void 0===_?void 0:_.filter((e=>e.title.toLowerCase().includes(F))))&&void 0!==e?e:[],W=(e,t,s)=>{x((i=>{const n=i.map((i=>{if(i._id===e){if("update"===s)return{...i,isShow:t};if("delete"===s)return{...i,isDelete:t}}return i}));return n}))},Y=e=>{const{name:t,value:s,id:i}=e.currentTarget;x((e=>{const n=e.map((e=>e._id===i&&t===t?{...e,[t]:s}:e));return n}))};return(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{onChange:e=>s(e.target.value),value:t,type:"text",className:S,placeholder:"\u0417\u043d\u0430\u0439\u0442\u0438"}),(0,p.jsx)("h1",{className:v,children:"\u041f\u0440\u0430\u0439\u0441 \u0440\u043e\u0431\u0456\u0442"}),(0,p.jsx)("table",{className:f,children:(0,p.jsxs)("tbody",{children:[(0,p.jsxs)("tr",{className:P,children:[(0,p.jsxs)("td",{className:C,children:["\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0431\u0456\u0442",(0,p.jsx)("button",{onClick:H,className:g,children:(0,p.jsx)(l.Z,{width:"24",height:"24"})})]}),(0,p.jsx)("td",{className:L,children:"\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e \u0432 \u0433\u0440\u043d."})]}),_&&(null===K||void 0===K?void 0:K.map((e=>{let{_id:t,title:s,price:i,isShow:n=!1,isDelete:c=!1}=e;return(0,p.jsxs)("tr",{children:[(0,p.jsxs)("td",{className:C,children:[(0,p.jsx)("button",{className:y,onClick:()=>{n=!n,W(t,n,"update"),n||m({id:t,newData:{title:s,price:i}})},children:n?(0,p.jsx)(I.Z,{width:"22",height:"22"}):(0,p.jsx)(B.Z,{width:"22",height:"22"})}),n?(0,p.jsx)("input",{id:t,name:"title",className:k,value:s,disabled:!n,onChange:Y}):(0,p.jsx)("p",{className:k,children:s})]}),(0,p.jsxs)("td",{className:L,children:[n?(0,p.jsx)("input",{id:t,name:"price",className:A,value:i,disabled:!n,onChange:Y}):(0,p.jsx)("p",{className:A,children:i}),(0,p.jsx)("button",{className:w,onClick:()=>{c=!c,W(t,c,"delete")},children:(0,p.jsx)(N.Z,{width:"24",height:"24"})}),c&&(0,p.jsxs)("div",{className:M,children:[(0,p.jsx)("h4",{children:"\u0412\u0438 \u0441\u043f\u0440\u0430\u0432\u0434\u0456 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438: ".concat(s)}),(0,p.jsxs)("ul",{className:R,children:[(0,p.jsx)("li",{children:(0,p.jsx)("button",{className:D,onClick:()=>{c=!c,W(t,c,"delete"),j(t)},children:"\u0422\u0430\u043a"})}),(0,p.jsx)("li",{children:(0,p.jsx)("button",{className:E,onClick:()=>{c=!c,W(t,c,"delete")},children:"\u041d\u0456"})})]})]})]})]},t)})))]})}),r&&(0,p.jsx)(a.Z,{children:(0,p.jsx)(b,{isShowModal:H})}),(0,p.jsx)("div",{children:(0,p.jsx)("table",{className:f,children:(0,p.jsxs)("tbody",{children:[(0,p.jsx)("tr",{className:P,children:(0,p.jsxs)("td",{className:C,children:["\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u0434\u0438\u043d\u0438\u0446\u0456",(0,p.jsx)("button",{onClick:O,className:g,children:(0,p.jsx)(l.Z,{width:"24",height:"24"})})]})}),T&&T.map((e=>{let{_id:t,title:s}=e;return(0,p.jsx)("tr",{children:(0,p.jsx)("td",{className:C,children:(0,p.jsxs)("div",{className:U,children:[(0,p.jsx)("p",{children:s}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{className:Z,onClick:()=>q(t),children:(0,p.jsx)(N.Z,{width:"24",height:"24"})})})]})})},t)}))]})})}),o&&(0,p.jsx)(a.Z,{children:(0,p.jsx)(X,{isShowModal:O})})]})};const K=function(){return(0,p.jsx)("div",{children:(0,p.jsx)(F,{})})}}}]);
//# sourceMappingURL=Price.f3c7b1d9.chunk.js.map