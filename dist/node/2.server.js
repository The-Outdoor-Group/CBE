exports.ids=[2],exports.modules={167:function(e,n,t){},56:function(e,n,t){"use strict";var r=t(38),o=t.n(r),u=t(39),i=t.n(u),a=function(){return window.innerWidth<=768},c=t(0);t.d(n,"a",function(){return s});var s=function(e){var n=Object(c.useState)(e),t=o()(n,2),r=t[0],u=(t[1],Object(c.useState)(r.innerWidth)),s=o()(u,2),l=s[0],f=s[1],d=Object(c.useState)(null),v=o()(d,2),m=v[0],h=v[1];return r.innerWidth!==l&&f(r.innerWidth),Object(c.useEffect)(function(){var e=function(){return h(!!a())},n=i()(e,500);return r.addEventListener("resize",n),e(),function(){return r.removeEventListener("resize",n)}}),m}},98:function(e,n,t){"use strict";t.r(n);var r=t(38),o=t.n(r),u=t(0),i=t.n(u),a=t(9),c=t.n(a),s=t(4),l=t.n(s),f=t(56),d=t(3),v=t(167),m=t.n(v),h=l()({chunkName:function(){return"assets-images-PlusIcon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(8).then(t.bind(null,100))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 100}}),b=function(e){var n,t=Object(u.useState)(!1),r=o()(t,2),a=r[0],c=r[1],s=Object(u.useState)(!1),l=o()(s,2),d=l[0],v=l[1];process.env.IS_BROWSER&&(n=Object(f.a)(window)),Object(u.useEffect)(function(){null!==n&&v(!n)});var m=e.colorTheme,b=i.a.createElement("li",{onClick:function(){return n=e.moreInfoHandle,e.setMoreInfoPanelVisibility(!0),void e.setIdMatchForParentContainer(n);var n},onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},className:"learn-more-wrapper"},i.a.createElement(h,{colorTheme:m,changeDueToHover:a}),i.a.createElement("span",null,"Learn More"));return i.a.createElement("ul",{className:"call-to-action"},d?b:null,i.a.createElement("li",null,i.a.createElement("button",null,"Order Now")))},E=function(e){return{openMoreInfoPanel:e.sharedUiState.openMoreInfoPanel}};n.default=Object(a.connect)(E,{setMoreInfoPanelVisibility:d.v,setIdMatchForParentContainer:d.s})(b)}};