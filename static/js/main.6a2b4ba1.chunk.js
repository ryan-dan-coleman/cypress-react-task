(this["webpackJsonpcypress-react-task"]=this["webpackJsonpcypress-react-task"]||[]).push([[0],{24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(16),i=a.n(s),l=(a(24),a(6)),d=a(9),o=a(7),r=a(8),u=a(2);var j=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(u.jsxs)(r.a,{onSubmit:function(t){t.preventDefault(),""!==c?(e.addTask(c),s("")):alert("Please enter a task!")},children:[Object(u.jsx)("div",{className:"header-text",children:Object(u.jsx)("h2",{className:"label-wrapper",children:Object(u.jsx)("label",{htmlFor:"new-todo-input",className:"label__lg",children:"My Task Manager"})})}),Object(u.jsx)(r.a.Control,{type:"text",id:"new-todo-input","data-cy":"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",autoFocus:!0,value:c,onChange:function(e){s(e.target.value)}}),Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{type:"submit",className:"btn btn__primary btn-block",id:"add_task",children:"Add Task"})})]})};function b(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(e.name),d=Object(l.a)(i,2),j=d[0],b=d[1];var m=Object(u.jsxs)(r.a,{className:"stack-small",onSubmit:function(t){t.preventDefault(),""!==j?(e.editTask(e.id,j),s(!1)):alert("Please enter a task!")},children:[Object(u.jsxs)("div",{className:"c-cb",children:[Object(u.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(u.jsx)("input",{id:"text-input"+e.id,className:"todo-text","data-cy":"todo-text",type:"text",value:j,onChange:function(e){b(e.target.value)},autoFocus:!0})]}),Object(u.jsxs)("div",{className:"btn-group",children:[Object(u.jsxs)(o.a,{variant:"secondary",type:"button",className:"todo-btn todo-cancel",onClick:function(){return s(!1)},children:["Cancel",Object(u.jsxs)("span",{className:"visually-hidden",children:["renaming ",e.name]})]}),Object(u.jsxs)(o.a,{variant:"primary",size:"sm",type:"submit",className:"todo-btn btn__primary todo-edit",children:["Save",Object(u.jsxs)("span",{className:"visually-hidden",children:["new name for ",e.name]})]}),Object(u.jsxs)(o.a,{variant:"danger",type:"button",className:"todo-btn btn__danger",onClick:function(){return e.deleteTask(e.id)},children:["Delete ",Object(u.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]}),p=Object(u.jsx)("div",{className:"stack-small",children:Object(u.jsxs)("div",{className:"c-cb",children:[Object(u.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(u.jsx)("label",{className:"todo-label","data-cy":"todo-label",htmlFor:e.id,onClick:function(){s(!0)},children:e.name})]})});return Object(u.jsx)("li",{className:"todo",children:c?m:p})}var m=a(19),p=a(18),h=a(14),O=a(17),x=a(10);var f=function(e){function t(e){var t=o.filter((function(t){return e!==t.id}));r(t)}function a(e,t){var a=o.map((function(a){return e===a.id?Object(d.a)(Object(d.a)({},a),{},{name:t}):a}));r(a)}function c(e){var t=o.map((function(t){return e===t.id?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t})),a=t.slice();t.forEach((function(e){!0===e.completed&&a.push(a.splice(a.indexOf(e),1)[0])})),r(t=a)}var s=Object(n.useState)(e.tasks),i=Object(l.a)(s,2),o=i[0],r=i[1],f=o.map((function(e){return Object(u.jsx)(b,{id:e.id,name:e.name,completed:e.completed,toggleTaskCompleted:c,deleteTask:t,editTask:a},e.id)})),k=function(e){for(var t=0,a=o.slice(),n=a.length,c=0;c<n;c++)!1===a[c].completed&&t++;return t}(),v=1!==k?"tasks":"task",g="".concat(k," ").concat(v," remaining");return Object(u.jsx)(h.a,{className:"p-5",children:Object(u.jsx)(O.a,{className:"justify-content-md-center",children:Object(u.jsx)(x.a,{xs:6,children:Object(u.jsx)("div",{className:"todoapp stack-large",children:Object(u.jsx)(p.a,{children:Object(u.jsxs)(h.a,{fluid:!0,className:"p-4",children:[Object(u.jsx)(j,{addTask:function(e){var t={id:"todo-"+Object(m.a)(),name:e,completed:!1},a=o.slice();a.unshift(t),r(a)}}),Object(u.jsx)("h2",{id:"list-heading",children:g}),Object(u.jsx)("ul",{className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:f})]})})})})})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(29);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{tasks:[{id:"todo-0",name:"Learn cypress",completed:!1},{id:"todo-1",name:"Drink coffee",completed:!1},{id:"todo-2",name:"Push code",completed:!1}]})}),document.getElementById("root")),k()}},[[30,1,2]]]);
//# sourceMappingURL=main.6a2b4ba1.chunk.js.map