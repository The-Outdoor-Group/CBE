!function(u){function e(e){for(var t,n,r=e[0],a=e[1],o=e[2],c=0,i=[];c<r.length;c++)n=r[c],f[n]&&i.push(f[n][0]),f[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(d&&d(e);i.length;)i.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==f[o]&&(r=!1)}r&&(l.splice(t--,1),e=m(m.s=n[0]))}return e}var n={},p={27:0},f={27:0},l=[];function m(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.e=function(l){var e=[];p[l]?e.push(p[l]):0!==p[l]&&{1:1,3:1,4:1,6:1,7:1,8:1,9:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,23:1,24:1,25:1,26:1,28:1,29:1}[l]&&e.push(p[l]=new Promise(function(e,r){for(var t=({1:"Image",2:"MainList",3:"Stats",4:"CallToAction",5:"InfoPanelOpenList",6:"MoreInfoComponent",7:"assets-images-PlusIcon",8:"assets-images-logo",9:"assets-images-secondary-menu-icon",10:"child-components-ProductImage",11:"child-components-VariantSelector",12:"components-content-Hero",13:"components-content-assets-images-MoreContentArrow",14:"components-content-store-components-ShopHero",15:"components-content-store-components-product-display-for-purchase-ProductDisplay",16:"components-main-nav-MainNav",17:"components-main-secondary-nav-MainSecondaryNav",18:"container-HorizontalImageSlider",19:"containers-Home",20:"containers-Shop",21:"hero-components-List",22:"hero-components-ListButton",23:"hero-components-TextArticle",24:"hero-components-TitleHeader",25:"hero-components-VideoComponent",26:"image-tiles-ImageTile",28:"more-info-components-container-MoreInfoArticle",29:"text-Header"}[l]||l)+".css",a=m.p+t,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=(u=n[o]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===t||c===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var u;if((c=(u=i[o]).getAttribute("data-href"))===t||c===a)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var t=e&&e.target&&e.target.src||a,n=new Error("Loading CSS chunk "+l+" failed.\n("+t+")");n.request=t,delete p[l],s.parentNode.removeChild(s),r(n)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){p[l]=0}));var n=f[l];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=f[l]=[e,t]});e.push(n[2]=t);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,m.nc&&o.setAttribute("nonce",m.nc),o.src=m.p+""+l+".e6bfeae5d722a65a348b.js",r=function(e){o.onerror=o.onload=null,clearTimeout(c);var t=f[l];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+l+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,t[1](a)}f[l]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},m.m=u,m.c=n,m.d=function(e,t,n){m.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(t,e){if(1&e&&(t=m(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(m.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)m.d(n,r,function(e){return t[e]}.bind(null,r));return n},m.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(t,"a",t),t},m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},m.p="/assets/web/",m.oe=function(e){throw console.error(e),e};var t=window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var d=r;l.push([341,0]),s()}({158:function(e,t,n){"use strict";(function(o){var c=n(23),i=n(96),u=n(159),s=n(169);t.a=function(e){var t=o.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,n=Object(i.b)({sagaMonitor:u.a}),r=[n],a=Object(c.e)(s.a,e,t(c.a.apply(void 0,r)));return a.runSaga=n.run,a.close=function(){return a.dispatch(i.a)},a}}).call(this,n(28))},161:function(e,P,R){"use strict";(function(e){var t=R(98),n=R.n(t),r=R(99),a=R.n(r),o=R(100),c=R.n(o),i=R(101),u=R.n(i),s=R(102),l=R.n(s),p=R(2),f=R.n(p),m=R(162),d=R.n(m),h=R(342),E=R(97),v=R(21),y=R(71),_=R(163),g=R.n(_),b=R(164),O=R.n(b),S=R(165),w=R.n(S),A=R(166),T=R.n(A),x=R(167),j=R.n(x),D=R(331),C=R.n(D),N=function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("assets/web/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})},k=Object(v.a)({chunkName:function(){return"components-main-nav-MainNav"},isReady:function(e){return!!R.m[this.resolve(e)]},requireAsync:function(){return Promise.all([R.e(0),R.e(16)]).then(R.bind(null,172))},requireSync:function e(t){var n=this.resolve(t);return R(n)},resolve:function(){return 172}}),I=Object(v.a)({chunkName:function(){return"components-main-secondary-nav-MainSecondaryNav"},isReady:function(e){return!!R.m[this.resolve(e)]},requireAsync:function(){return Promise.all([R.e(0),R.e(17)]).then(R.bind(null,173))},requireSync:function e(t){var n=this.resolve(t);return R(n)},resolve:function(){return 173}}),L=Object(v.a)({chunkName:function(){return"components-content-assets-images-MoreContentArrow"},isReady:function(e){return!!R.m[this.resolve(e)]},requireAsync:function(){return Promise.all([R.e(0),R.e(13)]).then(R.bind(null,174))},requireSync:function e(t){var n=this.resolve(t);return R(n)},resolve:function(){return 174}}),M=function(e){function t(){return n()(this,t),c()(this,u()(t).apply(this,arguments))}return l()(t,e),a()(t,[{key:"componentDidMount",value:function(){N()}},{key:"render",value:function(){return f.a.createElement(p.Fragment,null,f.a.createElement(m.Helmet,null,f.a.createElement("title",null,"Custom Bow Equipment"),f.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"assets/web/main.css"}),f.a.createElement("link",{rel:"shortcut icon",href:g.a}),f.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:T.a}),f.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:w.a}),f.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:O.a}),f.a.createElement("link",{rel:"mask-icon",href:j.a,color:"#5bbad5"}),f.a.createElement("link",{rel:"canonical",href:"https://custombowequipment.com/"}),f.a.createElement("meta",{name:"description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),f.a.createElement("meta",{property:"fb:app_id",content:"711769165659880"}),f.a.createElement("meta",{property:"og:type",content:"website"}),f.a.createElement("meta",{property:"og:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),f.a.createElement("meta",{property:"og:image",content:""}),f.a.createElement("meta",{property:"og:image:secure_url",content:""}),f.a.createElement("meta",{property:"og:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),f.a.createElement("meta",{property:"og:url",content:"https://custombowequipment.com/"}),f.a.createElement("meta",{property:"og:site_name",content:"Custom Bow Equipment"}),f.a.createElement("meta",{name:"twitter:card",content:"summary"}),f.a.createElement("meta",{name:"twitter:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),f.a.createElement("meta",{name:"twitter:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),f.a.createElement("meta",{name:"twitter:image",content:""}),f.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),f.a.createElement(k,null),f.a.createElement("main",{id:"main-content"},f.a.createElement(h.a,null,f.a.createElement(E.a,{exact:!0,path:"/",component:function(){return f.a.createElement(y.a,null)}}),f.a.createElement(E.a,{path:"/shop",component:function(){return f.a.createElement(y.c,null)}}),f.a.createElement(E.a,{path:"/product",component:function(){return f.a.createElement(y.b,null)}}))),f.a.createElement(I,null),f.a.createElement(L,null))}}]),t}(p.Component);P.a=M}).call(this,"/")},163:function(e,t,n){e.exports=n.p+"ac133a441768e68a50c0560cf6c15b5e.ico"},164:function(e,t,n){e.exports=n.p+"29ff4983730cde61545de2e5260f5d2e.png"},165:function(e,t,n){e.exports=n.p+"4d2c24cff09792200910d7228266ad3c.png"},166:function(e,t,n){e.exports=n.p+"2a9397b3be4862c3d7d1ffb0547b5856.png"},167:function(e,t,n){e.exports=n.p+"71f0872ccf4b3446812f20d8c9640891.svg"},169:function(e,t,n){"use strict";var r=n(23),a=n(40),o=n(9),c={secondaryMenuVisible:!1,mainNavThemeColor:"dark",endOfPageScroll:!1,openMoreInfoPanel:!1,elMatchForScrolling:null},i=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case o.o:return Object(a.merge)({},e,{secondaryMenuVisible:r});case o.i:return Object(a.merge)({},e,{mainNavThemeColor:r});case o.c:return Object(a.merge)({},e,{endOfPageScroll:r});case o.l:return Object(a.merge)({},e,{openMoreInfoPanel:r});case o.f:return Object(a.merge)({},e,{elMatchForScrolling:r});default:return e}};t.a=Object(r.c)({sharedUiState:i})},331:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(156),c=n(351),i=n(103),u=n(21),s=n(158),l=n(7),p=n.n(l),f=n(5),m=n(160),d=n.n(m),h="FETCH_USERS_REQUESTED",E="FETCH_USERS_SUCCEEDED",v="FETCH_USERS_FAILED",y=p.a.mark(b),_=p.a.mark(O),g=function(){return d()("https://api.github.com/gists").then(function(e){return e.ok?e.json():function(){throw"error"}})};function b(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.b)(g);case 3:return t=e.sent,e.next=6,Object(f.e)({type:E,payload:t});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(f.e)({type:v,payload:e.t0});case 12:case"end":return e.stop()}},y,null,[[0,8]])}function O(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(h,b);case 2:case"end":return e.stop()}},_)}var S=n(9),w=p.a.mark(T),A=p.a.mark(x);function T(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(f.e)({type:S.o,payload:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(f.e)({type:S.m,payload:e.t0});case 10:case"end":return e.stop()}},w,null,[[1,6]])}function x(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(S.n,T);case 2:case"end":return e.stop()}},A)}var j=p.a.mark(C),D=p.a.mark(N);function C(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(f.e)({type:S.i,payload:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(f.e)({type:S.g,payload:e.t0});case 10:case"end":return e.stop()}},j,null,[[1,6]])}function N(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(S.h,C);case 2:case"end":return e.stop()}},D)}var k=p.a.mark(L),I=p.a.mark(M);function L(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(f.e)({type:S.c,payload:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(f.e)({type:S.a,payload:e.t0});case 10:case"end":return e.stop()}},k,null,[[1,6]])}function M(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(S.b,L);case 2:case"end":return e.stop()}},I)}var P=p.a.mark(q),R=p.a.mark(F);function q(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(f.e)({type:S.l,payload:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(f.e)({type:S.j,payload:e.t0});case 10:case"end":return e.stop()}},P,null,[[1,6]])}function F(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(S.k,q);case 2:case"end":return e.stop()}},R)}var H=p.a.mark(B),U=p.a.mark(V);function B(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.prev=1,e.next=4,Object(f.e)({type:S.f,payload:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(f.e)({type:S.d,payload:e.t0});case 10:case"end":return e.stop()}},H,null,[[1,6]])}function V(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)(S.e,B);case 2:case"end":return e.stop()}},U)}var z=p.a.mark(Q);function Q(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.d)(O),Object(f.d)(x),Object(f.d)(N),Object(f.d)(M),Object(f.d)(F),Object(f.d)(V)]);case 2:case"end":return e.stop()}},z)}var Y=n(161),W=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var G=Object(s.a)(W);G.runSaga(Q),Object(u.b)(function(){Object(o.hydrate)(a.a.createElement(i.a,{store:G},a.a.createElement(c.a,null,a.a.createElement(Y.a,null))),document.getElementById("app"))})},71:function(e,o,c){"use strict";(function(e){c.d(o,"a",function(){return n}),c.d(o,"c",function(){return r}),c.d(o,"b",function(){return a});var t=c(21),n=Object(t.a)({chunkName:function(){return"containers-Home"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return Promise.all([c.e(0),c.e(19)]).then(c.bind(null,175))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 175}}),r=Object(t.a)({chunkName:function(){return"containers-Shop"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return c.e(20).then(c.bind(null,176))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 176}}),a=Object(t.a)({chunkName:function(){return"components-content-store-components-product-display-for-purchase-ProductDisplay"},isReady:function(e){return!!c.m[this.resolve(e)]},requireAsync:function(){return Promise.all([c.e(0),c.e(15)]).then(c.bind(null,177))},requireSync:function e(t){var n=this.resolve(t);return c(n)},resolve:function(){return 177}})}).call(this,"/")},9:function(e,t,n){"use strict";n.d(t,"n",function(){return r}),n.d(t,"o",function(){return a}),n.d(t,"m",function(){return o}),n.d(t,"h",function(){return c}),n.d(t,"i",function(){return i}),n.d(t,"g",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"k",function(){return f}),n.d(t,"l",function(){return m}),n.d(t,"j",function(){return d}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return E}),n.d(t,"d",function(){return v}),n.d(t,"t",function(){return y}),n.d(t,"r",function(){return _}),n.d(t,"p",function(){return g}),n.d(t,"s",function(){return b}),n.d(t,"q",function(){return O});var r="SET_SECONDARY_NAV_STATE_REQUESTED",a="SET_SECONDARY_NAV_STATE_SUCCEEDED",o="SET_SECONDARY_NAV_STATE_FAILED",c="SET_MAIN_NAV_COLOR_THEME_REQUESTED",i="SET_MAIN_NAV_COLOR_THEME_SUCCEEDED",u="SET_MAIN_NAV_COLOR_THEME_FAILED",s="SET_END_OF_PAGE_SCROLL_REQUESTED",l="SET_END_OF_PAGE_SCROLL_SUCCEEDED",p="SET_END_OF_PAGE_SCROLL_FAILED",f="SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED",m="SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED",d="SET_MORE_INFO_PANEL_VISIBILITY_FAILED",h="SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED",E="SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED",v="SET_INFO_PANEL_ID_DOM_MATCH_FAILED",y=function(e){return{type:r,payload:e}},_=function(e){return{type:c,payload:e}},g=function(e){return{type:s,payload:e}},b=function(e){return{type:f,payload:e}},O=function(e){return{type:h,payload:e}}}});