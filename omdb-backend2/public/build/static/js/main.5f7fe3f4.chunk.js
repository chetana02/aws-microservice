(this.webpackJsonpday4=this.webpackJsonpday4||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),l=(a(32),a(8)),i=a(1),m=(a(33),a(13)),s=a(25),u=a.n(s),d=r.a.memo((function(e){var t=e.movie,a=Object(i.f)();return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card",style:{width:"18rem",margin:"auto"}},r.a.createElement("div",{className:"bd-placeholder-img card-img-top",style:{width:"18rem",height:"18rem",overflow:"hidden"}},r.a.createElement("img",{src:t.Poster,style:{width:"18rem"},alt:"Poster"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.Title),r.a.createElement("p",{className:"card-text"}," Year : ",t.Year," , Type: ",t.Type," "),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){a.push("/details/".concat(t.imdbID))}},"View"))),r.a.createElement("br",null))}));function h(e){var t=e.elements||[],a=e.component;return r.a.createElement("div",{className:"row"},t.map((function(e){return t=e,r.a.createElement(a,{movie:t,key:t.imdbID});var t})))}a(56);function p(e){var t=e.value;return r.a.createElement("div",{className:"background"},r.a.createElement("input",{className:"search clear-margin-top",type:"text",value:t,onChange:function(t){return e.onChange(t.target.value)}}),r.a.createElement("button",{className:"btn btn-success clear-margin-top",onClick:function(){return e.onSubmit(t)}},"Search"))}var v={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}};function E(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(m.a)(o,2),i=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{value:a,onChange:c,onSubmit:function(e){var t="".concat("http://localhost:3001/","?title=").concat(e);u.a.get(t,v).then((function(e){return function(e){e&&e.data&&e.data.Search instanceof Array&&s(e.data.Search)}(e)})).catch((function(e){return console.error(e)}))}}),r.a.createElement("br",null),r.a.createElement(h,{elements:i,component:d}))}function b(){var e=Object(i.g)();return r.a.createElement("p",null," Details page : Imdb ID ",e.imdbID)}var f=function(){return r.a.createElement("div",{className:"container-fluid remove-padding"},r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:E}),r.a.createElement(i.a,{path:"/details/:imdbID",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.5f7fe3f4.chunk.js.map