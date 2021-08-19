(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__tX2CS"}},17:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=(n(17),n(12)),s=n(4),u=n(5),l=n(7),d=n(6),b=n(10),h=n(2),j=n.n(h),m=(n(26),n(0)),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t.handleSubmit=function(e){var n=t.state,a=n.name,r=n.number;e.preventDefault(),t.props.onSubmit(a,r),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(m.jsx)("input",{id:this.nameInputId,onChange:this.handleInputChange,type:"text",value:e,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(m.jsx)("input",{id:this.numberInputId,onChange:this.handleInputChange,type:"tel",value:n,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=(n(28),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"Contacts"}),Object(m.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(m.jsxs)("li",{children:[a,": ",r,Object(m.jsx)("button",{onClick:function(){return n(e)},type:"button",children:"Delete"})]},e)}))})]})}),O=(n(29),function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"Find contacts by name"}),Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text",value:e,onChange:n})})]})}),v=n(11),x=n.n(v);function g(t){var e=t.children;return Object(m.jsx)("div",{className:x.a.container,children:e})}var C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e,n){var a=t.state.contacts,r={name:e,number:n,id:j.a.generate()};a.map((function(t){return t.name})).includes(e)?alert("".concat(e," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{children:Object(m.jsx)(p,{onSubmit:this.addContact})}),Object(m.jsx)(g,{children:Object(m.jsx)(f,{onDeleteContact:this.deleteContact,contacts:e})}),Object(m.jsx)(g,{children:Object(m.jsx)(O,{onChange:this.changeFilter,value:t})})]})}}]),n}(a.Component);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a175ffc1.chunk.js.map