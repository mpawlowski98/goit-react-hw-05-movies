"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[551],{9551:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var a=r(9439),n=r(2791),s=r(5861),c=r(7757),i=r.n(c),o=r(1243),u=r(830),l=u[0].q1,p=u[0].FH;var h=r(1087),f={container:"Movies_container__nrZs1"},d=r(4691),m=r(184);function v(){var e=(0,n.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],u=function(e){var t=(0,n.useState)([]),r=(0,a.Z)(t,2),c=r[0],u=r[1],h=(0,n.useState)(!1),f=(0,a.Z)(h,2),d=f[0],m=f[1],v=(0,n.useState)(null),x=(0,a.Z)(v,2),b=x[0],g=x[1];return(0,n.useEffect)((function(){var t=function(){var t=(0,s.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return u([]),t.abrupt("return");case 3:return m(!0),t.prev=4,t.next=7,o.Z.get("".concat(p,"search/movie?api_key=").concat(l,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 7:200===(r=t.sent).status?u(r.data.results):g("Error searching for movies."),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),g(t.t0.message);case 14:m(!1);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(){return t.apply(this,arguments)}}(),r=setTimeout((function(){t()}),500);return function(){return clearTimeout(r)}}),[e]),{movies:c,isLoading:d,error:b}}(r),v=u.movies,x=u.isLoading,b=u.error;return x?(0,m.jsx)("div",{className:f.container,children:(0,m.jsx)(d.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})}):b?(0,m.jsxs)("div",{children:["Error: ",b]}):(0,m.jsxs)("div",{className:f.container,children:[(0,m.jsx)("h1",{className:f.header,children:"Search Movies"}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,m.jsx)("input",{className:f.input,type:"text",value:r,onChange:function(e){c(e.target.value)},placeholder:"Search for movies..."}),(0,m.jsx)("button",{type:"submit",className:f.button,children:"Search"})]}),(0,m.jsx)("ul",{className:f.list,children:v.map((function(e){return(0,m.jsx)("li",{className:f.listItem,children:(0,m.jsx)(h.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},830:function(e){e.exports=JSON.parse('[{"q1":"16e82383e4f787530f2ad927c3b0ecfc","FH":"https://api.themoviedb.org/3/","Z3":"https://image.tmdb.org/t/p/w500"}]')}}]);
//# sourceMappingURL=551.b3cadeac.chunk.js.map