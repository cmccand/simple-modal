(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={container:"Modal_container__1hswi",modal:"Modal_modal__2m8aH","slide-down":"Modal_slide-down__3bB1r",content:"Modal_content__1CUWR",buttonContainer:"Modal_buttonContainer__11lsF"}},12:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},2:function(e,t,n){e.exports={button:"Button_button__3NpwY",primary:"Button_primary__2AOJc"}},22:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(5),r=n.n(i),l=(n(17),n(6)),u=n(7),c=n(10),s=n(8),d=n(11),m=n(9),p=n.n(m),b=n(2),f=n.n(b),h=function(e){var t=e.type,n=e.label,o=e.onClick,i=e.className;return a.a.createElement("button",{className:p()(f.a.button,f.a[t],i),onClick:o},n)},w=n(1),v=n.n(w),_=function(e){var t=e.title,n=e.children,o=e.buttons;return a.a.createElement("div",{className:v.a.container},a.a.createElement("div",{className:v.a.modal},!!t&&a.a.createElement("h5",{className:v.a.title},t),a.a.createElement("div",{className:v.a.content},n),!!o&&a.a.createElement("div",{className:v.a.buttonContainer},function(e){return e.map(function(e,t){return a.a.createElement(h,Object.assign({},e,{key:t}))})}(o))))};_.defaultProps={title:"",buttons:null};var M=_,y=n(3),E=n.n(y),g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={showModal:!1},n.showModal=function(){return n.setState(function(e){return{showModal:!e.showModal}})},n.renderDemoButton=function(){return!n.state.showModal&&a.a.createElement(h,{className:E.a.button,type:"primary",label:"Show Modal",onClick:n.showModal})},n.renderModal=function(){return!!n.state.showModal&&a.a.createElement(M,{title:"This Is My Modal",buttons:n.getModalButtons(),isOpen:n.state.showModal},a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},n.closeModal=function(){return n.setState({showModal:!1})},n.getModalButtons=function(){return[{type:"primary",label:"Action",onClick:function(){}},{type:"utility",label:"Close",onClick:n.closeModal}]},n.onKeyDown=function(e){27===e.keyCode&&n.setState({showModal:!1})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return a.a.createElement("div",{className:E.a.app},this.renderDemoButton(),this.renderModal())}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,n){e.exports={app:"App_app__3_5XB",button:"App_button__1Q9OM"}}},[[12,2,1]]]);
//# sourceMappingURL=main.fe48a1a2.chunk.js.map