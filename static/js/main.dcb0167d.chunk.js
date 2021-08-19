(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"Filter_title__2LnFm",input:"Filter_input__w8k7t"}},14:function(t,e,n){t.exports={container:"Container_container__tX2CS"}},2:function(t,e,n){t.exports={contacts:"ContactsList_contacts__3spl8",contactsList:"ContactsList_contactsList__c0fHR",title:"ContactsList_title__3TU4i",contactName:"ContactsList_contactName__WvVhB",listItem:"ContactsList_listItem__2Sun2",button:"ContactsList_button__3fS8k"}},20:function(t,e,n){},3:function(t,e,n){t.exports={label:"Form_label__8hZwO",input:"Form_input__D2FqN",form:"Form_form__3NExA",button:"Form_button__28l57"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(12),r=n.n(s),i=(n(20),n(15)),o=n(6),l=n(7),u=n(9),b=n(8),m=n(13),d=n(4),h=n.n(d),j=n(3),p=n.n(j),f=n(0),O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit(a,c),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:p.a.label,htmlFor:this.nameInputId,children:["Name",Object(f.jsx)("input",{className:p.a.input,id:this.nameInputId,onChange:this.handleInputChange,type:"text",value:e,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:p.a.label,htmlFor:this.numberInputId,children:["Number",Object(f.jsx)("input",{className:p.a.input,id:this.numberInputId,onChange:this.handleInputChange,type:"tel",value:n,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(2),x=n.n(_),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsxs)("div",{className:x.a.contacts,children:[Object(f.jsx)("h2",{className:x.a.title,children:"Contacts"}),Object(f.jsx)("ul",{className:x.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:x.a.listItem,children:[Object(f.jsxs)("div",{className:x.a.contactInfo,children:[Object(f.jsxs)("p",{className:x.a.contactName,children:[a,":"]})," ",Object(f.jsx)("p",{className:x.a.contactNumber,children:c})]}),Object(f.jsx)("button",{className:x.a.button,onClick:function(){return n(e)},type:"button",children:"Delete"})]},e)}))})]})},C=n(10),N=n.n(C),g=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("div",{className:N.a.filterContainer,children:[Object(f.jsx)("p",{className:N.a.title,children:"Find contacts by name"}),Object(f.jsx)("label",{children:Object(f.jsx)("input",{className:N.a.input,type:"text",value:e,onChange:n})})]})},I=n(14),F=n.n(I);function y(t){var e=t.children;return Object(f.jsx)("div",{className:F.a.container,children:e})}var S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a=t.state.contacts,c={name:e,number:n,id:h.a.generate()};a.map((function(t){return t.name})).includes(e)?alert("".concat(e," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{children:Object(f.jsx)("h1",{className:"title",children:"Phonebook"})}),Object(f.jsxs)(y,{children:[Object(f.jsx)(y,{children:Object(f.jsx)(O,{onSubmit:this.addContact})}),Object(f.jsx)(y,{children:Object(f.jsx)(v,{onDeleteContact:this.deleteContact,contacts:e})}),Object(f.jsx)(y,{children:Object(f.jsx)(g,{onChange:this.changeFilter,value:t})})]})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.dcb0167d.chunk.js.map