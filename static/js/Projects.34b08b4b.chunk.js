"use strict";(self.webpackChunkestimate_app_frontend=self.webpackChunkestimate_app_frontend||[]).push([[877],{7978:(t,e,s)=>{s.r(e),s.d(e,{default:()=>H});var a=s(2791),n=s(1087),i=s(828),c=s(3602),r=s(9728),o=s(7113),l=s(9085);s(5462);const d="AddProject_container__aitOZ",j="AddProject_closeButton__kHXh-",u="AddProject_label__+XmHS",h="AddProject_input__sSFNV",_="AddProject_button__jHsN2";var x=s(3329);const p=function(t){let{isShowModal:e}=t;const[s,n]=(0,a.useState)(""),[c,r]=(0,a.useState)(""),{data:p}=(0,i.S4)(),[m]=(0,i.Oe)(),v=t=>{const{name:e,value:s}=t.currentTarget;switch(e){case"title":n(s);break;case"description":r(s);break;default:return}};return(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)(l.Ix,{draggable:!0}),(0,x.jsx)("button",{className:j,type:"button",onClick:e,children:(0,x.jsx)(o.Z,{width:"24",height:"24"})}),(0,x.jsxs)("form",{action:"",onSubmit:async t=>{if(t.preventDefault(),""!==s&&""!==c){if(p.find((t=>t.title===s)))return(0,l.Am)("\u0422\u0430\u043a\u0435 \u043d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"),n(""),void r("");try{m({title:s,description:c})}catch(a){alert("User with the title: ".concat(s," does not exist!"),a)}n(""),r(""),e()}else(0,l.Am)("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0443\u0441\u0456 \u043f\u043e\u043b\u044f")},children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:u,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,x.jsx)("input",{type:"text",name:"title",className:h,onChange:v,value:s})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:u,children:"\u0410\u0434\u0440\u0435\u0441\u0430 \u043e\u0431'\u0454\u043a\u0442\u0443"}),(0,x.jsx)("input",{type:"text",name:"description",className:h,onChange:v,value:c})]}),(0,x.jsx)("button",{className:_,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u0448\u0442\u043e\u0440\u0438\u0441"})]})]})},m="UpdateProject_container__UfNXt",v="UpdateProject_closeButton__vuxTh",N="UpdateProject_label__1pmpV",b="UpdateProject_input__Qxt6m",w="UpdateProject_button__M9H3i";const f=function(t){let{isShowModal:e,getDataProject:s}=t;const[n,c]=(0,a.useState)(s.nawTitle),[r,d]=(0,a.useState)(s.nawDescription),[j]=(0,i.GW)(),u=t=>{const{name:e,value:s}=t.currentTarget;switch(e){case"title":c(s);break;case"description":d(s);break;default:return}};return(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(l.Ix,{draggable:!0}),(0,x.jsx)("button",{className:v,type:"button",onClick:e,children:(0,x.jsx)(o.Z,{width:"24",height:"24"})}),(0,x.jsxs)("form",{action:"",onSubmit:async t=>{if(t.preventDefault(),""!==n&&""!==r){try{const t={title:n,description:r};await j({id:s.nawId,newData:t})}catch(a){alert("User with the title: ".concat(n," does not exist!"),a)}c(""),d(""),e()}else(0,l.Am)("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0443\u0441\u0456 \u043f\u043e\u043b\u044f")},children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:N,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,x.jsx)("input",{type:"text",name:"title",className:b,onChange:u,value:n})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:N,children:"\u0410\u0434\u0440\u0435\u0441\u0430 \u043e\u0431'\u0454\u043a\u0442\u0443"}),(0,x.jsx)("input",{type:"text",name:"description",className:b,onChange:u,value:r})]}),(0,x.jsx)("button",{className:w,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0438 \u043a\u043e\u0448\u0442\u043e\u0440\u0438\u0441"})]})]})};var P=s(4132);const g="ProjectsList_projectContainer__kPumC",S="ProjectsList_projectItem__HgjHs",k="ProjectsList_projectTitle__VjbEi",C="ProjectsList_titleContainer__3iTJ0",L="ProjectsList_projectDescription__9Qxys",y="ProjectsList_projectPrice__TzLIj",A="ProjectsList_projectLink__FT2f0",D="ProjectsList_buttonContainer__VeVks",T="ProjectsList_addButton__ci2Au",U="ProjectsList_buttonDelete__OWmCv";var I=s(5413);const Z=function(){const[t,e]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!1),[d,j]=(0,a.useState)(null),{data:u}=(0,i.S4)(),[h]=(0,i.ec)(),[_,m]=(0,a.useState)(!1);let v="",N="",b="";const{data:w}=(0,c.sA)();(0,a.useEffect)((()=>{if(w){var t;const e=null===w||void 0===w||null===(t=w.user)||void 0===t?void 0:t.role;m("customer"!==e)}}),[w,_]);const Z=()=>{e((t=>!t))},H=()=>{o((t=>!t))};return(0,x.jsxs)("div",{children:[(0,x.jsx)(l.Ix,{draggable:!0}),(0,x.jsxs)("div",{className:C,children:[(0,x.jsx)("h1",{children:"\u041a\u043e\u0448\u0442\u043e\u0440\u0438\u0441\u0438 \u043e\u0431'\u0454\u043a\u0442\u0456\u0432"}),_&&(0,x.jsx)("button",{onClick:Z,className:T,children:(0,x.jsx)(r.Z,{width:"24",height:"24"})})]}),(0,x.jsx)("ul",{className:g,children:u&&u.map((t=>{let{_id:e,title:s,description:a,total:i}=t;return(0,x.jsxs)("li",{className:S,id:e,children:[_&&(0,x.jsx)("button",{className:U,onClick:()=>(async(t,e,s)=>{v=await t,N=await e,b=await s,await j({nawId:v,nawTitle:N,nawDescription:b}),H()})(e,s,a),children:(0,x.jsx)(I.Z,{width:"20",height:"20"})}),(0,x.jsx)("h2",{className:k,children:s}),(0,x.jsx)("p",{className:L,children:a}),(0,x.jsxs)("p",{className:y,children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430 \u043a\u043e\u0448\u0442\u043e\u0440\u0438\u0441\u0443: ",i," \u0433\u0440\u043d."]}),(0,x.jsxs)("div",{className:D,children:[(0,x.jsx)(n.OL,{className:A,to:"/projects/".concat(e),children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),_&&(0,x.jsx)("button",{className:A,onClick:()=>(h(e),void(0,l.Am)("\u041a\u043e\u0448\u0442\u043e\u0440\u0438\u0441 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e")),children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})]},e)}))}),t&&(0,x.jsx)(P.Z,{children:(0,x.jsx)(p,{isShowModal:Z})}),s&&(0,x.jsx)(P.Z,{children:(0,x.jsx)(f,{isShowModal:H,getDataProject:d})})]})};const H=function(){return(0,x.jsx)("div",{children:(0,x.jsx)(Z,{})})}}}]);
//# sourceMappingURL=Projects.34b08b4b.chunk.js.map