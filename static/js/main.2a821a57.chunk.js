(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1yaZ7",container:"ContactForm_container__2ugrj",AddBtn:"ContactForm_AddBtn__29VCN",inputFrom:"ContactForm_inputFrom__3WSxr",inputName:"ContactForm_inputName__W_x47"}},,,,,,,function(t,e,n){t.exports={title:"Panel_title__2iudt"}},,function(t,e,n){t.exports={itemOflistOfContacts:"ContactList_itemOflistOfContacts__A9PW6"}},function(t,e,n){t.exports={inputFilter:"Filter_inputFilter__E-6Im"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=n(13),s=n(3),l=n(4),u=n(6),d=n(5),m=n(9),b=n.n(m),j=n(0),h=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:b.a.title,children:e}),n]})};h.defaultProps={title:"",children:[]};var f=h,p=n(10),O=n(2),x=n.n(O),C=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.inputGetValue=function(e){var n=e.currentTarget.name;t.setState(Object(p.a)({},n,e.currentTarget.value))},t.formHandleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;t.props.onSubmit(a,r),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.formHandleSubmit,className:x.a.form,children:[Object(j.jsxs)("label",{className:x.a.label,children:["Name",Object(j.jsx)("input",{className:x.a.inputName,onChange:this.inputGetValue,type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Ivan Ivanov"})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{className:x.a.inputFrom,onChange:this.inputGetValue,type:"tel",value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"098-111-22-33"}),Object(j.jsx)("button",{type:"submit",className:x.a.AddBtn,children:"Add contact"})]})]})}}]),n}(r.a.Component),v=n(22),_=n(11),g=n.n(_);var F=function(t){var e=t.contacts,n=t.deleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsxs)("li",{className:g.a.itemOflistOfContacts,children:[Object(j.jsx)("p",{children:a}),Object(j.jsx)("p",{children:r}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(12),N=n.n(y),S=function(t){var e=t.onFilterChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",onChange:e,className:N.a.inputFilter,placeholder:"Who are you looking for ?"})]})]})},A=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addNewContact=function(e,n){var a=t.state.contacts,r={id:Object(v.a)(),name:e,number:n};a.some((function(t){return t.name===r.name}))?alert("".concat(r.name," is already in contacts!")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.getResultOfContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return""===a?n:n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:x.a.container,children:[Object(j.jsx)(f,{title:"Phonebook",children:Object(j.jsx)(C,{onSubmit:this.addNewContact})}),Object(j.jsx)(S,{onFilterChange:this.onFilterChange}),0===this.state.contacts.length?Object(j.jsx)("p",{children:"There are not any contacts..."}):Object(j.jsx)(F,{contacts:this.getResultOfContacts(),deleteContact:this.deleteContact})]})}}]),n}(r.a.Component);n(19);o.a.render(Object(j.jsx)(a.StrictMode,{children:Object(j.jsx)(A,{})}),document.querySelector("#root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.2a821a57.chunk.js.map