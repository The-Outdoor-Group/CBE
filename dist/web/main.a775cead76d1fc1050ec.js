!function(u){function e(e){for(var t,n,r=e[0],a=e[1],o=e[2],c=0,i=[];c<r.length;c++)n=r[c],p[n]&&i.push(p[n][0]),p[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(d&&d(e);i.length;)i.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==p[o]&&(r=!1)}r&&(l.splice(t--,1),e=m(m.s=n[0]))}return e}var n={},f={8:0},p={8:0},l=[];function m(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.e=function(l){var e=[];f[l]?e.push(f[l]):0!==f[l]&&{1:1,2:1,3:1,4:1,5:1,6:1}[l]&&e.push(f[l]=new Promise(function(e,r){for(var t=({1:"assets-images-logo",2:"assets-images-secondary-menu-icon",3:"components-Bar",4:"components-Foo",5:"components-main-nav-MainNav",6:"components-main-secondary-nav-MainSecondaryNav",7:"containers-App-old"}[l]||l)+".css",a=m.p+t,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=(u=n[o]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===t||c===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var u;if((c=(u=i[o]).getAttribute("data-href"))===t||c===a)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var t=e&&e.target&&e.target.src||a,n=new Error("Loading CSS chunk "+l+" failed.\n("+t+")");n.request=t,delete f[l],s.parentNode.removeChild(s),r(n)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){f[l]=0}));var n=p[l];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=p[l]=[e,t]});e.push(n[2]=t);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,m.nc&&o.setAttribute("nonce",m.nc),o.src=m.p+""+l+".a775cead76d1fc1050ec.js",r=function(e){o.onerror=o.onload=null,clearTimeout(c);var t=p[l];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+l+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,t[1](a)}p[l]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},m.m=u,m.c=n,m.d=function(e,t,n){m.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(t,e){if(1&e&&(t=m(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(m.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)m.d(n,r,function(e){return t[e]}.bind(null,r));return n},m.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(t,"a",t),t},m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},m.p="/assets/web/",m.oe=function(e){throw console.error(e),e};var t=window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var d=r;l.push([322,0]),s()}({148:function(e,t,n){"use strict";(function(o){var c=n(18),i=n(85),u=n(149),s=n(159);t.a=function(e){var t=o.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,n=Object(i.b)({sagaMonitor:u.a}),r=[n],a=Object(c.e)(s.a,e,t(c.a.apply(void 0,r)));return a.runSaga=n.run,a.close=function(){return a.dispatch(i.a)},a}}).call(this,n(25))},152:function(e,B,L){"use strict";(function(e){var t=L(87),n=L.n(t),r=L(88),a=L.n(r),o=L(89),c=L.n(o),i=L(90),u=L.n(i),s=L(91),l=L.n(s),f=L(2),p=L.n(f),m=L(92),d=L.n(m),h=L(323),v=L(86),g=L(20),y=L(62),E=L(153),b=L.n(E),_=L(154),w=L.n(_),S=L(155),O=L.n(S),A=L(156),j=L.n(A),x=L(157),k=L.n(x),T=L(320),D=L.n(T),C=function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("assets/web/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})},N=Object(g.a)({chunkName:function(){return"components-main-nav-MainNav"},isReady:function(e){return!!L.m[this.resolve(e)]},requireAsync:function(){return Promise.all([L.e(0),L.e(5)]).then(L.bind(null,162))},requireSync:function e(t){var n=this.resolve(t);return L(n)},resolve:function(){return 162}}),q=Object(g.a)({chunkName:function(){return"components-main-secondary-nav-MainSecondaryNav"},isReady:function(e){return!!L.m[this.resolve(e)]},requireAsync:function(){return Promise.all([L.e(0),L.e(6)]).then(L.bind(null,163))},requireSync:function e(t){var n=this.resolve(t);return L(n)},resolve:function(){return 163}}),R=function(e){function t(){return n()(this,t),c()(this,u()(t).apply(this,arguments))}return l()(t,e),a()(t,[{key:"componentDidMount",value:function(){C()}},{key:"render",value:function(){return p.a.createElement(f.Fragment,null,p.a.createElement(m.Helmet,null,p.a.createElement("title",null,"Custom Bow Equipment"),p.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"assets/web/main.css"}),p.a.createElement("link",{rel:"shortcut icon",href:b.a}),p.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:j.a}),p.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:O.a}),p.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:w.a}),p.a.createElement("link",{rel:"mask-icon",href:k.a,color:"#5bbad5"}),p.a.createElement("link",{rel:"canonical",href:"https://custombowequipment.com/"}),p.a.createElement("meta",{name:"description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),p.a.createElement("meta",{property:"fb:app_id",content:"711769165659880"}),p.a.createElement("meta",{property:"og:type",content:"website"}),p.a.createElement("meta",{property:"og:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),p.a.createElement("meta",{property:"og:image",content:""}),p.a.createElement("meta",{property:"og:image:secure_url",content:""}),p.a.createElement("meta",{property:"og:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),p.a.createElement("meta",{property:"og:url",content:"https://custombowequipment.com/"}),p.a.createElement("meta",{property:"og:site_name",content:"Custom Bow Equipment"}),p.a.createElement("meta",{name:"twitter:card",content:"summary"}),p.a.createElement("meta",{name:"twitter:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),p.a.createElement("meta",{name:"twitter:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),p.a.createElement("meta",{name:"twitter:image",content:""}),p.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),p.a.createElement(N,null),p.a.createElement("main",{id:"main-content"},p.a.createElement(h.a,null,p.a.createElement(v.a,{exact:!0,path:"/",component:function(){return p.a.createElement(y.c,null)}}),p.a.createElement(v.a,{path:"/foo",component:function(){return p.a.createElement(y.b,null)}}),p.a.createElement(v.a,{path:"/bar",component:function(){return p.a.createElement(y.a,null)}}))),p.a.createElement(q,null))}}]),t}(f.Component);B.a=R}).call(this,"/")},153:function(e,t,n){e.exports=n.p+"ac133a441768e68a50c0560cf6c15b5e.ico"},154:function(e,t,n){e.exports=n.p+"29ff4983730cde61545de2e5260f5d2e.png"},155:function(e,t,n){e.exports=n.p+"4d2c24cff09792200910d7228266ad3c.png"},156:function(e,t,n){e.exports=n.p+"2a9397b3be4862c3d7d1ffb0547b5856.png"},157:function(e,t,n){e.exports=n.p+"71f0872ccf4b3446812f20d8c9640891.svg"},159:function(e,t,n){"use strict";var r=n(18),a=n(35),o=[{owner:{login:"jcardella"}}],c=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case a.c:return r;default:return e}},i=n(150),u=n(36),s={secondaryMenuVisible:!1},l=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case u.c:return Object(i.merge)({},e,{secondaryMenuVisible:r});default:return e}};t.a=Object(r.c)({users:c,sharedUiState:l})},320:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(146),c=n(326),i=n(93),u=n(20),s=n(148),l=n(12),f=n.n(l),p=n(6),m=n(151),d=n.n(m),h=n(35),v=f.a.mark(E),g=f.a.mark(b),y=function(){return d()("https://api.github.com/gists").then(function(e){return e.ok?e.json():function(){throw"error"}})};function E(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.b)(y);case 3:return t=e.sent,e.next=6,Object(p.e)({type:h.c,payload:t});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(p.e)({type:h.a,payload:e.t0});case 12:case"end":return e.stop()}},v,null,[[0,8]])}function b(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)(h.b,E);case 2:case"end":return e.stop()}},g)}var _=n(36),w=f.a.mark(O),S=f.a.mark(A);function O(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(p.e)({type:_.c,payload:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(p.e)({type:_.a,payload:e.t0});case 10:case"end":return e.stop()}},w,null,[[1,6]])}function A(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)(_.b,O);case 2:case"end":return e.stop()}},S)}var j=f.a.mark(x);function x(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.d)(b),Object(p.d)(A)]);case 2:case"end":return e.stop()}},j)}var k=n(152),T=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var D=Object(s.a)(T);D.runSaga(x),Object(u.b)(function(){Object(o.hydrate)(a.a.createElement(i.a,{store:D},a.a.createElement(c.a,null,a.a.createElement(k.a,null))),document.getElementById("app"))})},35:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return c});var r="FETCH_USERS_REQUESTED",a="FETCH_USERS_SUCCEEDED",o="FETCH_USERS_FAILED",c=function(){return{type:r}}},36:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return c});var r="SET_SECONDARY_NAV_STATE_REQUESTED",a="SET_SECONDARY_NAV_STATE_SUCCEEDED",o="SET_SECONDARY_NAV_STATE_FAILED",c=function(e){return{type:r,payload:e}}},62:function(e,o,c){"use strict";(function(e){c.d(o,"c",function(){return n}),c.d(o,"b",function(){return r}),c.d(o,"a",function(){return a});var t=c(20),n=Object(t.a)({chunkName:function(){return"containers-App-old"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return c.e(7).then(c.bind(null,164))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 164}}),r=Object(t.a)({chunkName:function(){return"components-Foo"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return c.e(4).then(c.bind(null,165))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 165}}),a=Object(t.a)({chunkName:function(){return"components-Bar"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return c.e(3).then(c.bind(null,166))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 166}})}).call(this,"/")}});