"use strict";(self.webpackChunkestimate_app_frontend=self.webpackChunkestimate_app_frontend||[]).push([[327],{2014:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Q});var i=s(2791),n=s(2457),a=s(9728),c=s(4132),l=s(9085),r=(s(5462),s(7113));const o=s.p+"static/media/Recording.5f30dd9082f8eb815421.png",d="AddPrice_container__254IS",h="AddPrice_closeButton__X4mEx",u="AddPrice_label__PqkC6",A="AddPrice_input__jwPqV",x="AddPrice_buttonsContainer__Kp3g-",_="AddPrice_button__uxTxQ",m="AddPrice_recordingButton__mmyFo";var p=s(3329);const j=function(e){let{isShowModal:t}=e;const[s,a]=(0,i.useState)(null);(0,i.useEffect)((()=>{if("SpeechRecognition"in window||"webkitSpeechRecognition"in window){const e=new(window.SpeechRecognition||window.webkitSpeechRecognition);a(e)}else console.log("\u0420\u043e\u0437\u043f\u0456\u0437\u043d\u0430\u0432\u0430\u043d\u043d\u044f \u043c\u043e\u0432\u0438 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f \u0432 \u0446\u044c\u043e\u043c\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456.")}),[]);const[c,j]=(0,i.useState)(""),[g,w]=(0,i.useState)(""),{data:b}=(0,n.xo)(),[N]=(0,n.$C)(),v=e=>{const{name:t,value:s}=e.currentTarget;switch(t){case"title":j(s);break;case"price":w(s);break;default:return}};return s&&(s.lang="uk-UA",s.interimResults=!0),s&&(s.onresult=e=>{const t=Array.from(e.results).map((e=>e[0].transcript)).join(""),s=t.split("");for(let i=0;i<s.length;i++)0===i&&(s[i]=t.charAt(0).toUpperCase());j(s.join(""))}),(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)(l.Ix,{draggable:!0}),(0,p.jsx)("button",{className:h,type:"button",onClick:t,children:(0,p.jsx)(r.Z,{width:"24",height:"24"})}),(0,p.jsxs)("form",{action:"",onSubmit:async e=>{if(e.preventDefault(),""!==c&&""!==g){if(b.find((e=>e.title===c)))return(0,l.Am)("\u0422\u0430\u043a\u0435 \u043d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"),j(""),void w("");try{const e={title:c,price:Number(g)};N(e)}catch(s){alert("User with the title: ".concat(c," does not exist!"),s)}j(""),w(""),t()}else(0,l.Am)("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0443\u0441\u0456 \u043f\u043e\u043b\u044f")},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:u,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)("input",{type:"text",name:"title",className:A,onChange:v,value:c}),(0,p.jsx)("div",{className:m,onClick:()=>{s&&s.start()},children:(0,p.jsx)("img",{src:o,width:"40",height:"40",alt:"recording button"})})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:u,children:"\u0426\u0456\u043d\u0430"}),(0,p.jsx)("input",{type:"number",name:"price",className:A,onChange:v,value:g})]}),(0,p.jsx)("button",{id:"submit",className:_,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043f\u0440\u0430\u0439\u0441"})]})]})},g="UpdatePrice_container__Nom8p",w="UpdatePrice_closeButton__+HsdF",b="UpdatePrice_label__++vKu",N="UpdatePrice_input__bxSm0",v="UpdatePrice_button__bxM3Y";const P=function(e){let{isShowModal:t,getDataPrice:s}=e;const[a,c]=(0,i.useState)(s.nawTitle),[o,d]=(0,i.useState)(s.nawPrice),[h]=(0,n.S2)(),u=e=>{const{name:t,value:s}=e.currentTarget;switch(t){case"title":c(s);break;case"price":d(s);break;default:return}};return(0,p.jsxs)("div",{className:g,children:[(0,p.jsx)(l.Ix,{draggable:!0}),(0,p.jsx)("button",{className:w,type:"button",onClick:t,children:(0,p.jsx)(r.Z,{width:"24",height:"24"})}),(0,p.jsxs)("form",{action:"",onSubmit:async e=>{if(e.preventDefault(),""!==a&&""!==o){try{const e={title:a,price:Number(o)};console.log(e),h({id:s.nawId,newData:e})}catch(i){alert("User with the title: ".concat(a," does not exist!"),i)}c(""),d(""),t()}else(0,l.Am)("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0443\u0441\u0456 \u043f\u043e\u043b\u044f")},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:b,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,p.jsx)("input",{type:"text",name:"title",className:N,onChange:u,value:a})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:b,children:"\u0426\u0456\u043d\u0430"}),(0,p.jsx)("input",{type:"number",name:"price",className:N,onChange:u,value:o})]}),(0,p.jsx)("button",{className:v,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0438"})]})]})};var S=s(663);const f="PriceList_title__iYhtM",C="PriceList_buttonAdd__LKfMB",k="PriceList_buttonDelete__ELosM",U="PriceList_iksweb__ocNx1",I="PriceList_tableMin__UL+E6",L="PriceList_rowOne__NU3gr",y="PriceList_twoRow__M19Hs",E="PriceList_buttonsContainer__oI2N5",M="PriceList_input__UIXOm";var D=s(5542);const R=function(){var e;const[t,s]=(0,i.useState)(""),[l,r]=(0,i.useState)(!1),[o,d]=(0,i.useState)(!1),[h,u]=(0,i.useState)(!1),[A,x]=(0,i.useState)(null),{data:_}=(0,n.xo)(),[m]=(0,n.Ls)();let g="",w="",b="";const N=()=>{r((e=>!e))},v=()=>{d((e=>!e))},R=()=>{u((e=>!e))},Q=t.toLowerCase(),Y=null!==(e=null===_||void 0===_?void 0:_.filter((e=>e.title.toLowerCase().includes(Q))))&&void 0!==e?e:[];return(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{onChange:e=>s(e.target.value),value:t,type:"text",className:M,placeholder:"\u0417\u043d\u0430\u0439\u0442\u0438"}),(0,p.jsx)("h1",{className:f,children:"\u041f\u0440\u0430\u0439\u0441 \u0440\u043e\u0431\u0456\u0442"}),(0,p.jsx)("table",{className:U,children:(0,p.jsxs)("tbody",{children:[(0,p.jsxs)("tr",{className:I,children:[(0,p.jsxs)("td",{className:L,children:["\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0431\u0456\u0442",(0,p.jsx)("button",{onClick:N,className:C,children:(0,p.jsx)(a.Z,{width:"24",height:"24"})})]}),(0,p.jsx)("td",{className:y,children:"\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e \u0432 \u0433\u0440\u043d."})]}),_&&(null===Y||void 0===Y?void 0:Y.map((e=>{let{_id:t,title:s,price:i}=e;return(0,p.jsxs)("tr",{children:[(0,p.jsxs)("td",{className:L,children:[(0,p.jsx)("button",{onClick:R,className:k,children:(0,p.jsx)(a.Z,{width:"24",height:"24"})}),h&&(0,p.jsxs)("div",{className:E,children:[(0,p.jsx)("button",{className:k,onClick:()=>(async(e,t,s)=>{g=await e,w=await t,b=await s,await x({nawId:g,nawTitle:w,nawPrice:b}),v()})(t,s,i),children:(0,p.jsx)("img",{src:D,width:"20",height:"20",alt:"update"})}),(0,p.jsx)("button",{className:k,onClick:()=>m(t),children:(0,p.jsx)(S.Z,{width:"24",height:"24"})})]}),s]}),(0,p.jsx)("td",{className:y,children:i})]},t)})))]})}),l&&(0,p.jsx)(c.Z,{children:(0,p.jsx)(j,{isShowModal:N})}),o&&(0,p.jsx)(c.Z,{children:(0,p.jsx)(P,{isShowModal:v,getDataPrice:A})})]})};const Q=function(){return(0,p.jsx)("div",{children:(0,p.jsx)(R,{})})}},5542:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAHlJREFUOI1jYBjsQA6KiQY6UPoREP9Hw4+IMWAeVPFfIJZCEgex/0Dl8IIJSDY6YpH/Q8glTkDsjEdemhhXEAIgA2SxScgRaTpOA2CS0ng0E/QCKID+4pEHyT3EZwDMFSCFMkhiMlAxogPwIQNmQiJoMzYgg+aSQQgAOwgkqnFJV4oAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=Price.34f44d64.chunk.js.map