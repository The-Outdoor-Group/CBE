(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[4],{416:function(e,n,t){"use strict";var r=t(354),o=t.n(r),u=t(360),a=t.n(u),i=function(){return window.innerWidth<=768},c=t(2);t.d(n,"a",function(){return l});var l=function(e){var n=Object(c.useState)(e),t=o()(n,2),r=t[0],u=(t[1],Object(c.useState)(r.innerWidth)),l=o()(u,2),s=l[0],f=l[1],d=Object(c.useState)(null),v=o()(d,2),m=v[0],b=v[1];return r.innerWidth!==s&&f(r.innerWidth),Object(c.useEffect)(function(){var e=function(){return b(!!i())},n=a()(e,500);return r.addEventListener("resize",n),e(),function(){return r.removeEventListener("resize",n)}}),m}},447:function(e,n,t){"use strict";t.r(n);var r=t(354),o=t.n(r),u=t(2),a=t.n(u),i=t(56),c=t(20),l=t(416),s=t(9),f=t(409),d=t.n(f),v=Object(c.a)({chunkName:function(){return"assets-images-PlusIcon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,449))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 449}}),m=function(e){var n,t=Object(u.useState)(!1),r=o()(t,2),i=r[0],c=r[1],s=Object(u.useState)(!1),f=o()(s,2),d=f[0],m=f[1];n=Object(l.a)(window),Object(u.useEffect)(function(){null!==n&&m(!n)});var b=e.colorTheme,h=a.a.createElement("li",{onClick:function(){return n=e.moreInfoHandle,e.setMoreInfoPanelVisibility(!0),void e.setIdMatchForParentContainer(n);var n},onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},className:"learn-more-wrapper"},a.a.createElement(v,{colorTheme:b,changeDueToHover:i}),a.a.createElement("span",null,"Learn More"));return a.a.createElement("ul",{className:"call-to-action"},d?h:null,a.a.createElement("li",null,a.a.createElement("button",null,"Order Now")))},b=function(e){return{openMoreInfoPanel:e.sharedUiState.openMoreInfoPanel}};n.default=Object(i.b)(b,{setMoreInfoPanelVisibility:s.v,setIdMatchForParentContainer:s.s})(m)}}]);