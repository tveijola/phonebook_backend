(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(2),l=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.num),r.a.createElement("td",null,r.a.createElement("button",{onClick:e.del},"delete")))},i=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),r.a.createElement("table",null,r.a.createElement("tbody",null,e.persons.map((function(n){return r.a.createElement(l,{key:n.id,name:n.name,num:n.number,del:function(){return e.del(n.id)}})})))))},m=function(e){var n=e.newName,t=e.newNum,a=e.handleNameChange,u=e.handleNumChange,o=e.addPerson;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add a new entry"),r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"Name:   ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.filter,t=e.filterShown;return r.a.createElement("div",null,"Filter shown with:",r.a.createElement("input",{value:n,onChange:t}))},f=function(e){var n=e.notification;if(null===n.message)return null;var t=n.isError?"error":"notification";return r.a.createElement("div",{className:t},n.message)},s=t(3),h=t.n(s),E="/api/persons",b=function(){return h.a.get(E).then((function(e){return e.data}))},p=function(e){return h.a.post(E,e).then((function(e){return e.data}))},v=function(e,n){return h.a.put("".concat(E,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return h.a.delete("".concat(E,"/").concat(e)).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),s=l[0],h=l[1],E=Object(a.useState)(""),g=Object(c.a)(E,2),C=g[0],N=g[1],O=Object(a.useState)(""),j=Object(c.a)(O,2),k=j[0],S=j[1],L=Object(a.useState)({message:null,isError:!1}),y=Object(c.a)(L,2),P=y[0],D=y[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var A=function(e,n){return{message:e,isError:n}},T=function(){D({message:null,isError:!1})},F=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{notification:P}),r.a.createElement(d,{filter:k,filterShown:function(e){return S(e.target.value)}}),r.a.createElement(m,{newName:s,handleNameChange:function(e){return h(e.target.value)},newNum:C,handleNumChange:function(e){return N(e.target.value)},addPerson:function(e){e.preventDefault();var n=!1,a=t.some((function(e){return e.name.toLowerCase()===s.toLowerCase()}));if(a&&(console.log("DUPLICATE FOUND"),n=window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))),!a||n){var r,o={name:s,number:C};n?(o.id=t.find((function(e){return e.name.toLowerCase()===s.toLowerCase()})).id,r=v(o.id,o).then((function(e){null===e?(u(t.filter((function(e){return e.id!==o.id}))),D(A("Person ".concat(o.name," was not found!"),!0))):(u(t.map((function(n){return n.id!==e.id?n:e}))),D(A("Modified ".concat(e.name),!1)))}))):r=p(o).then((function(e){u(t.concat(e)),D(A("Added ".concat(e.name),!1))})),r.then((function(){setTimeout((function(){return T()}),3e3),h(""),N("")})).catch((function(e){D(A(e.response.data.error,!0)),setTimeout((function(){return T()}),5e3),b().then((function(e){u(e)}))}))}}}),r.a.createElement(i,{persons:F,del:function(e){window.confirm("Delete ".concat(t.find((function(n){return n.id===e})).name,"?"))&&w(e).then(u(t.filter((function(n){return n.id!==e}))))}}))};t(36);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.06f64d09.chunk.js.map