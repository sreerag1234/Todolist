(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(4),s=a.n(c),r=(a(11),a(1)),l=(a(13),a(5)),d=function(e){var t=e.inputText,a=e.setTodos,n=e.setInputText,c=e.todos,s=e.setStatus;return o.a.createElement("form",{id:"form"},o.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)},type:"text",className:"todo_input"}),o.a.createElement("button",{onClick:function(e){e.preventDefault(),a([].concat(Object(l.a)(c),[{text:t,completed:!1,starred:!1,id:1e3*Math.random()}])),n("")},type:"submit",className:"todo_button"},o.a.createElement("i",{className:"fas fa-plus center"})),o.a.createElement("div",{className:"select"},o.a.createElement("select",{onChange:function(e){switch(e.target.value){case"Completed":s("Completed");break;case"Not completed":s("Not completed");break;default:s("All")}},name:"todos",className:"filter_todos"},o.a.createElement("option",{value:"All"},"All"),o.a.createElement("option",{value:"Completed"},"Completed"),o.a.createElement("option",{value:"Not completed"},"Not completed"))))},u=a(2),i=function(e){var t=e.text,a=e.todo,n=e.todos,c=e.setTodos;return o.a.createElement("div",{className:"todo"},o.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),o.a.createElement("button",{onClick:function(){c(n.map(function(e){return e.id===a.id?Object(u.a)({},e,{completed:!e.completed}):e}))},className:"fas fa-check"}),o.a.createElement("button",{onClick:function(e){c(n.filter(function(e){return e.id!==a.id}))},className:"fas fa-trash"}),o.a.createElement("button",{onClick:function(){c(n.map(function(e){return e.id===a.id?Object(u.a)({},e,{starred:!e.starred}):e}))},className:"fas fa-star"}))},m=function(e){var t=e.todos,a=e.setTodos,n=e.selectedTodos,c=e.setStar,s=e.setStarStatus;return o.a.createElement("div",{className:"todo-container"},o.a.createElement("ul",{className:"todo-list"},n.map(function(e){return o.a.createElement(i,{todo:e,todos:t,selectedTodos:n,setTodos:a,text:e.text,starred:e.starred,id:e.id,setStar:c,setStarStatus:s})})))},f=function(e){var t=e.stardo,a=e.star,n=e.text,c=(e.id,e.todos,e.setTodos,e.setStar);return o.a.createElement("div",{className:"todo"},o.a.createElement("li",null,n),o.a.createElement("button",{onClick:function(){c(a.filter(function(e){return e.id!==t.id}))},className:"fas fa-star"}))},p=function(e){var t=e.star,a=e.todos,n=e.setTodos,c=e.setStar;return o.a.createElement("div",{className:"todo-container"},o.a.createElement("ul",{className:"todo-list"},o.a.createElement("h4",null,"*Starred"),t.map(function(e){return o.a.createElement(f,{stardo:e,star:t,todos:a,setTodos:n,text:e.text,id:e.id,setStar:c})})))};var E=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),l=Object(r.a)(s,2),u=l[0],i=l[1],f=Object(n.useState)("all"),E=Object(r.a)(f,2),b=E[0],S=E[1],v=Object(n.useState)([]),N=Object(r.a)(v,2),T=N[0],O=N[1],j=Object(n.useState)(""),C=Object(r.a)(j,2),h=(C[0],C[1]),x=Object(n.useState)([]),k=Object(r.a)(x,2),g=k[0],w=k[1];Object(n.useEffect)(function(){I()},[u,b]),Object(n.useEffect)(function(){A()},[u,b]);var I=function(){switch(b){case"Completed":O(u.filter(function(e){return!0===e.completed}));break;case"Not completed":O(u.filter(function(e){return!1===e.completed}));break;default:O(u)}},A=function(){w(u.filter(function(e){return!0===e.starred}))};return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",{id:"main"},"TO-DO LIST")),o.a.createElement(d,{inputText:a,setInputText:c,todos:u,setTodos:i,setStatus:S}),o.a.createElement(p,{star:g,todos:u,setTodos:i,setStar:w}),o.a.createElement(m,{todos:u,setTodos:i,selectedTodos:T,setStarStatus:h,setStar:w}))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),c(e),s(e)})};s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),b()},6:function(e,t,a){e.exports=a(15)}},[[6,3,2]]]);
//# sourceMappingURL=main.2a0db8f4.chunk.js.map