!function(u){function e(e){for(var t,n,r=e[0],a=e[1],o=e[2],c=0,i=[];c<r.length;c++)n=r[c],p[n]&&i.push(p[n][0]),p[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(d&&d(e);i.length;)i.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==p[o]&&(r=!1)}r&&(l.splice(t--,1),e=m(m.s=n[0]))}return e}var n={},f={9:0},p={9:0},l=[];function m(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.e=function(l){var e=[];f[l]?e.push(f[l]):0!==f[l]&&{1:1,2:1,3:1,4:1,5:1,6:1,7:1}[l]&&e.push(f[l]=new Promise(function(e,r){for(var t=({1:"assets-images-logo",2:"assets-images-secondary-menu-icon",3:"components-Bar",4:"components-Foo",5:"components-content-Hero",6:"components-main-nav-MainNav",7:"components-main-secondary-nav-MainSecondaryNav",8:"containers-Home"}[l]||l)+".css",a=m.p+t,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=(u=n[o]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===t||c===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var u;if((c=(u=i[o]).getAttribute("data-href"))===t||c===a)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var t=e&&e.target&&e.target.src||a,n=new Error("Loading CSS chunk "+l+" failed.\n("+t+")");n.request=t,delete f[l],s.parentNode.removeChild(s),r(n)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){f[l]=0}));var n=p[l];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=p[l]=[e,t]});e.push(n[2]=t);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,m.nc&&o.setAttribute("nonce",m.nc),o.src=m.p+""+l+".0658dc50b9bdf959ca35.js",r=function(e){o.onerror=o.onload=null,clearTimeout(c);var t=p[l];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+l+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,t[1](a)}p[l]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},m.m=u,m.c=n,m.d=function(e,t,n){m.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(t,e){if(1&e&&(t=m(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(m.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)m.d(n,r,function(e){return t[e]}.bind(null,r));return n},m.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(t,"a",t),t},m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},m.p="/assets/web/",m.oe=function(e){throw console.error(e),e};var t=window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var d=r;l.push([332,0]),s()}({157:function(e,t,n){"use strict";(function(o){var c=n(21),i=n(94),u=n(158),s=n(167);t.a=function(e){var t=o.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,n=Object(i.b)({sagaMonitor:u.a}),r=[n],a=Object(c.e)(s.a,e,t(c.a.apply(void 0,r)));return a.runSaga=n.run,a.close=function(){return a.dispatch(i.a)},a}}).call(this,n(28))},160:function(e,M,L){"use strict";(function(e){var t=L(96),n=L.n(t),r=L(97),a=L.n(r),o=L(98),c=L.n(o),i=L(99),u=L.n(i),s=L(100),l=L.n(s),f=L(2),p=L.n(f),m=L(102),d=L.n(m),h=L(333),v=L(95),E=L(23),y=L(70),g=L(161),b=L.n(g),_=L(162),w=L.n(_),O=L(163),S=L.n(O),A=L(164),j=L.n(A),T=L(165),x=L.n(T),k=L(328),N=L.n(k),C=function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("assets/web/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})},D=Object(E.a)({chunkName:function(){return"components-main-nav-MainNav"},isReady:function(e){return!!L.m[this.resolve(e)]},requireAsync:function(){return Promise.all([L.e(0),L.e(6)]).then(L.bind(null,170))},requireSync:function e(t){var n=this.resolve(t);return L(n)},resolve:function(){return 170}}),R=Object(E.a)({chunkName:function(){return"components-main-secondary-nav-MainSecondaryNav"},isReady:function(e){return!!L.m[this.resolve(e)]},requireAsync:function(){return Promise.all([L.e(0),L.e(7)]).then(L.bind(null,171))},requireSync:function e(t){var n=this.resolve(t);return L(n)},resolve:function(){return 171}}),q=function(e){function t(){return n()(this,t),c()(this,u()(t).apply(this,arguments))}return l()(t,e),a()(t,[{key:"componentDidMount",value:function(){C()}},{key:"render",value:function(){return p.a.createElement(f.Fragment,null,p.a.createElement(m.Helmet,null,p.a.createElement("title",null,"Custom Bow Equipment"),p.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"assets/web/main.css"}),p.a.createElement("link",{rel:"shortcut icon",href:b.a}),p.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:j.a}),p.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:S.a}),p.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:w.a}),p.a.createElement("link",{rel:"mask-icon",href:x.a,color:"#5bbad5"}),p.a.createElement("link",{rel:"canonical",href:"https://custombowequipment.com/"}),p.a.createElement("meta",{name:"description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),p.a.createElement("meta",{property:"fb:app_id",content:"711769165659880"}),p.a.createElement("meta",{property:"og:type",content:"website"}),p.a.createElement("meta",{property:"og:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),p.a.createElement("meta",{property:"og:image",content:""}),p.a.createElement("meta",{property:"og:image:secure_url",content:""}),p.a.createElement("meta",{property:"og:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),p.a.createElement("meta",{property:"og:url",content:"https://custombowequipment.com/"}),p.a.createElement("meta",{property:"og:site_name",content:"Custom Bow Equipment"}),p.a.createElement("meta",{name:"twitter:card",content:"summary"}),p.a.createElement("meta",{name:"twitter:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),p.a.createElement("meta",{name:"twitter:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),p.a.createElement("meta",{name:"twitter:image",content:""}),p.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),p.a.createElement(D,null),p.a.createElement("main",{id:"main-content"},p.a.createElement(h.a,null,p.a.createElement(v.a,{exact:!0,path:"/",component:function(){return p.a.createElement(y.c,null)}}),p.a.createElement(v.a,{path:"/foo",component:function(){return p.a.createElement(y.b,null)}}),p.a.createElement(v.a,{path:"/bar",component:function(){return p.a.createElement(y.a,null)}}))),p.a.createElement(R,null))}}]),t}(f.Component);M.a=q}).call(this,"/")},161:function(e,t,n){e.exports=n.p+"ac133a441768e68a50c0560cf6c15b5e.ico"},162:function(e,t,n){e.exports=n.p+"29ff4983730cde61545de2e5260f5d2e.png"},163:function(e,t,n){e.exports=n.p+"4d2c24cff09792200910d7228266ad3c.png"},164:function(e,t,n){e.exports=n.p+"2a9397b3be4862c3d7d1ffb0547b5856.png"},165:function(e,t,n){e.exports=n.p+"71f0872ccf4b3446812f20d8c9640891.svg"},167:function(e,t,n){"use strict";var r=n(21),a=n(93),o=n(19),c={secondaryMenuVisible:!1,mainNavThemeColor:"dark"},i=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case o.f:return Object(a.merge)({},e,{secondaryMenuVisible:r});case o.c:return Object(a.merge)({},e,{mainNavThemeColor:r});default:return e}};t.a=Object(r.c)({sharedUiState:i})},19:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"f",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return u}),n.d(t,"h",function(){return s}),n.d(t,"g",function(){return l});var r="SET_SECONDARY_NAV_STATE_REQUESTED",a="SET_SECONDARY_NAV_STATE_SUCCEEDED",o="SET_SECONDARY_NAV_STATE_FAILED",c="SET_MAIN_NAV_COLOR_THEME_REQUESTED",i="SET_MAIN_NAV_COLOR_THEME_SUCCEEDED",u="SET_MAIN_NAV_COLOR_THEME_FAILED",s=function(e){return{type:r,payload:e}},l=function(e){return{type:c,payload:e}}},328:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(155),c=n(337),i=n(101),u=n(23),s=n(157),l=n(9),f=n.n(l),p=n(6),m=n(159),d=n.n(m),h="FETCH_USERS_REQUESTED",v="FETCH_USERS_SUCCEEDED",E="FETCH_USERS_FAILED",y=f.a.mark(_),g=f.a.mark(w),b=function(){return d()("https://api.github.com/gists").then(function(e){return e.ok?e.json():function(){throw"error"}})};function _(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.b)(b);case 3:return t=e.sent,e.next=6,Object(p.e)({type:v,payload:t});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(p.e)({type:E,payload:e.t0});case 12:case"end":return e.stop()}},y,null,[[0,8]])}function w(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)(h,_);case 2:case"end":return e.stop()}},g)}var O=n(19),S=f.a.mark(j),A=f.a.mark(T);function j(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(p.e)({type:O.f,payload:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(p.e)({type:O.d,payload:e.t0});case 10:case"end":return e.stop()}},S,null,[[1,6]])}function T(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)(O.e,j);case 2:case"end":return e.stop()}},A)}var x=f.a.mark(N),k=f.a.mark(C);function N(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(p.e)({type:O.c,payload:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(p.e)({type:O.a,payload:e.t0});case 10:case"end":return e.stop()}},x,null,[[1,6]])}function C(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)(O.b,N);case 2:case"end":return e.stop()}},k)}var D=f.a.mark(R);function R(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.d)(w),Object(p.d)(T),Object(p.d)(C)]);case 2:case"end":return e.stop()}},D)}var q=n(160),M=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var L=Object(s.a)(M);L.runSaga(R),Object(u.b)(function(){Object(o.hydrate)(a.a.createElement(i.a,{store:L},a.a.createElement(c.a,null,a.a.createElement(q.a,null))),document.getElementById("app"))})},70:function(e,o,c){"use strict";(function(e){c.d(o,"c",function(){return n}),c.d(o,"b",function(){return r}),c.d(o,"a",function(){return a});var t=c(23),n=Object(t.a)({chunkName:function(){return"containers-Home"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return Promise.all([c.e(0),c.e(8)]).then(c.bind(null,172))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 172}}),r=Object(t.a)({chunkName:function(){return"components-Foo"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return c.e(4).then(c.bind(null,173))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 173}}),a=Object(t.a)({chunkName:function(){return"components-Bar"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return c.e(3).then(c.bind(null,174))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 174}})}).call(this,"/")}});