(this.webpackJsonpuserdirect=this.webpackJsonpuserdirect||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"results":[{"gender":"male","name":{"title":"mr","first":"brad","last":"gibson"},"location":{"street":"9278 new road","city":"kilcoole","state":"waterford","postcode":"93027","coordinates":{"latitude":"20.9267","longitude":"-7.9310"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"brad.gibson@example.com","login":{"uuid":"155e77ee-ba6d-486f-95ce-0e0c0fb4b919","username":"silverswan131","password":"firewall","salt":"TQA1Gz7x","md5":"dc523cb313b63dfe5be2140b0c05b3bc","sha1":"7a4aa07d1bedcc6bcf4b7f8856643492c191540d","sha256":"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},"dob":{"date":"1993-07-20T09:44:18.674Z","age":26},"registered":{"date":"2002-05-21T10:59:49.966Z","age":17},"phone":"011-962-7516","cell":"081-454-0666","id":{"name":"PPS","value":"0390511T"},"picture":{"large":"https://randomuser.me/api/portraits/men/75.jpg","medium":"https://randomuser.me/api/portraits/med/men/75.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/75.jpg"},"nat":"IE"}],"info":{"seed":"fea8be3e64777240","results":1,"page":1,"version":"1.3"}}')},44:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(12),r=n.n(s),c=n(13),i=n(14),l=n(15),o=n(19),d=n(18),u=n(0);var h=function(e){var t=e.results.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.picture.thumbnail,alt:"{item.name.first}{item.name.last}"})}),Object(u.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.email})]},e.phone)}));return Object(u.jsxs)("table",{className:"table table-striped table-hover table-fluid",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Photo"}),Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Phone"}),Object(u.jsx)("th",{scope:"col",children:"Email"})]})}),Object(u.jsx)("tbody",{children:t})]})};var b=function(e){return Object(u.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var m=function(e){return Object(u.jsx)("form",{className:"form-inline mx-auto",children:Object(u.jsxs)("div",{className:"form-group mb-2",children:[Object(u.jsx)("input",{onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",id:"search"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-warning",children:"Search"})]})})};var j=function(e){return Object(u.jsxs)("div",{className:"jumbotron jumbotron-fluid",children:[Object(u.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(u.jsx)("p",{children:"Search here:"}),Object(u.jsx)(m,{handleInputChange:e.handleInputChange,handleFormSubmit:e.handleFormSubmit})]})},f=n(16),p=n.n(f);var O=function(){return p.a.get("https://randomuser.me/api/?results=20")},x=n(17),g=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).loadDirectory=function(){O().then((function(e){return e.data.results?a.setState({results:e.data.results}):a.setState({results:x})}))},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(c.a)({},t,n),(function(){var e=a.state.results.filter((function(e){var t=e.name.first+e.name.last;return console.log(a.state.search),t.toLowerCase().includes(a.state.search)}));a.setState({filteredResults:e},(function(){console.log(a.state.filteredResults)}))}))},a.handleFormSubmit=function(e){e.preventDefault()},a.state={value:"",results:[],filteredResults:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadDirectory()}},{key:"render",value:function(){return Object(u.jsxs)(b,{children:[Object(u.jsx)(j,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(u.jsx)(h,{results:this.state.search?this.state.filteredResults:this.state.results})]})}}]),n}(a.Component);var v=function(){return Object(u.jsx)(g,{})};n(43);r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ba3d27cc.chunk.js.map