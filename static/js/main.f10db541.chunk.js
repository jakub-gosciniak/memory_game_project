(this.webpackJsonpmemory_game_project=this.webpackJsonpmemory_game_project||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),r=n.n(i),s=(n(12),n(3)),u=n(5),o=(n(13),n(0)),j=function(e){var t=e.value,n=e.id,c=e.flipped,a=e.selected,i=e.handleClick;return Object(o.jsx)(o.Fragment,{children:c?Object(o.jsx)("div",{className:"square-flipped squares",children:Object(o.jsx)("h3",{children:t})}):Object(o.jsx)("div",{"data-testid":"btn",onClick:function(){i([t,n])},className:"square squares ".concat(a?"square-selected":""),children:a?Object(o.jsx)("h3",{children:t}):Object(o.jsx)("h2",{children:"?"})})})},l=(n(15),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),r=Object(u.a)(i,2),l=r[0],d=r[1],b=Object(c.useState)([]),h=Object(u.a)(b,2),f=h[0],O=h[1],m=function(){for(var e=[],t=0;t<10;t++)e.push({value:t});return e=[].concat(Object(s.a)(e),Object(s.a)(e)).sort((function(){return Math.random()-.5})),O(e),e};Object(c.useEffect)((function(){m()}),[]),Object(c.useEffect)((function(){2===n.length&&(n[0][0]===n[1][0]&&n[0][1]!==n[1][1]?(d([].concat(Object(s.a)(l),[n[0][1],n[1][1]])),a([])):setTimeout((function(){a([])}),1e3))}),[n,l]);var v=function(e){!n.some((function(t){return t[1]===e[1]}))&&n.length<2?a([].concat(Object(s.a)(n),[e])):a(n)};return Object(o.jsx)("div",{className:"main-container",children:Object(o.jsx)("div",{className:"card-container",children:l.length===f.length&&0!==f.length?Object(o.jsxs)("div",{className:"end-screen",children:[Object(o.jsx)("h1",{children:"Go again?"}),Object(o.jsx)("button",{onClick:function(){m(),d([]),a([])},children:"Start"})]}):f.map((function(e,t){return Object(o.jsx)(j,{value:e.value,id:t,"data-testid":"0",handleClick:v,selected:n.some((function(e){return e[1]===t})),flipped:l.includes(t)},t)}))})})});var d=function(){return Object(o.jsx)(l,{})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.f10db541.chunk.js.map