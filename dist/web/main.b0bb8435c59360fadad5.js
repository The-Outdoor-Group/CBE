!function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],p=0,f=[];p<u.length;p++)o=u[p],a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);f.length;)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={29:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(e){return o.p+""+e+".b0bb8435c59360fadad5.js"}(e);var i=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",i.name="ChunkLoadError",i.type=r,i.request=c,n[1](i)}a[e]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/web/",o.oe=function(e){throw console.error(e),e};var u=window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;c.push([351,0,1]),n()}({159:function(e,t,n){"use strict";(function(e){var r=n(25),a=n(101),c=n(160),o=n(170);t.a=function(t){var n=e.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,u=Object(a.b)({sagaMonitor:c.a}),i=[u],s=Object(r.e)(o.a,t,n(r.a.apply(void 0,i)));return s.runSaga=u.run,s.close=function(){return s.dispatch(a.a)},s}}).call(this,n(26))},162:function(e,t,n){"use strict";var r=n(2),a=n.n(r),c=n(55),o=n(163),u=n.n(o),i=n(20),s=n(23),l=n(72),p=n(164),f=n.n(p),d=n(165),m=n.n(d),E=n(166),h=n.n(E),_=n(167),v=n.n(_),y=n(168),b=n.n(y),O=n(331),g=n.n(O),S=Object(s.a)({chunkName:function(){return"components-main-nav-MainNav"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,172))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 172}}),w=Object(s.a)({chunkName:function(){return"components-main-secondary-nav-MainSecondaryNav"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,173))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 173}}),j=Object(s.a)({chunkName:function(){return"components-content-assets-images-MoreContentArrow"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,174))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 174}}),x=function(e){return Object(r.useEffect)(function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("assets/web/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})}),a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Helmet,null,a.a.createElement("title",null,"Custom Bow Equipment"),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"assets/web/styles.css"}),a.a.createElement("link",{rel:"shortcut icon",href:f.a}),a.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:v.a}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:h.a}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:m.a}),a.a.createElement("link",{rel:"mask-icon",href:b.a,color:"#5bbad5"}),a.a.createElement("link",{rel:"canonical",href:"https://custombowequipment.com/"}),a.a.createElement("meta",{name:"description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),a.a.createElement("meta",{property:"fb:app_id",content:"711769165659880"}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),a.a.createElement("meta",{property:"og:image",content:""}),a.a.createElement("meta",{property:"og:image:secure_url",content:""}),a.a.createElement("meta",{property:"og:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),a.a.createElement("meta",{property:"og:url",content:"https://custombowequipment.com/"}),a.a.createElement("meta",{property:"og:site_name",content:"Custom Bow Equipment"}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),a.a.createElement("meta",{name:"twitter:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),a.a.createElement("meta",{name:"twitter:image",content:""}),a.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),a.a.createElement(S,null),a.a.createElement("main",{id:"main-content",className:e.secondaryMenuVisible?"fade":null},a.a.createElement(i.c,null,a.a.createElement(i.a,{exact:!0,path:"/",component:function(){return a.a.createElement(l.a,null)}}),a.a.createElement(i.a,{exact:!0,path:"/shop",component:function(){return a.a.createElement(l.c,null)}}),a.a.createElement(i.a,{exact:!0,path:"/product",component:function(){return a.a.createElement(l.b,null)}}))),a.a.createElement(w,null),a.a.createElement(j,null))},A=function(e){return{secondaryMenuVisible:e.sharedUiState.secondaryMenuVisible}};t.a=Object(c.b)(A)(x)},164:function(e,t,n){e.exports=n.p+"ac133a441768e68a50c0560cf6c15b5e.ico"},165:function(e,t,n){e.exports=n.p+"29ff4983730cde61545de2e5260f5d2e.png"},166:function(e,t,n){e.exports=n.p+"4d2c24cff09792200910d7228266ad3c.png"},167:function(e,t,n){e.exports=n.p+"2a9397b3be4862c3d7d1ffb0547b5856.png"},168:function(e,t,n){e.exports=n.p+"71f0872ccf4b3446812f20d8c9640891.svg"},170:function(e,t,n){"use strict";var r=n(25),a=n(34),c=n(9),o={secondaryMenuVisible:!1,mainNavThemeColor:"dark",endOfPageScroll:!1,openMoreInfoPanel:!1,elMatchForScrolling:null,mainUrl:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case c.q:return Object(a.merge)({},e,{secondaryMenuVisible:r});case c.i:return Object(a.merge)({},e,{mainNavThemeColor:r});case c.c:return Object(a.merge)({},e,{endOfPageScroll:r});case c.n:return Object(a.merge)({},e,{openMoreInfoPanel:r});case c.f:return Object(a.merge)({},e,{elMatchForScrolling:r});case c.k:return Object(a.merge)({},e,{mainUrl:r});default:return e}};t.a=Object(r.c)({sharedUiState:u})},351:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(157),o=n.n(c),u=n(97),i=n(73),s=n(55),l=n(23),p=n(159),f=n(5),d=n.n(f),m=n(4),E=n(161),h=n.n(E),_="FETCH_USERS_REQUESTED",v="FETCH_USERS_SUCCEEDED",y="FETCH_USERS_FAILED",b=d.a.mark(S),O=d.a.mark(w),g=function(){return h()("https://api.github.com/gists").then(function(e){return e.ok?e.json():function(){throw"error"}})};function S(){var e;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(m.b)(g);case 3:return e=t.sent,t.next=6,Object(m.e)({type:v,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(m.e)({type:y,payload:t.t0});case 12:case"end":return t.stop()}},b,null,[[0,8]])}function w(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(_,S);case 2:case"end":return e.stop()}},O)}var j=n(9),x=d.a.mark(T),A=d.a.mark(D);function T(e){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(m.e)({type:j.q,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(m.e)({type:j.o,payload:n.t0});case 10:case"end":return n.stop()}},x,null,[[1,6]])}function D(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(j.p,T);case 2:case"end":return e.stop()}},A)}var N=d.a.mark(C),k=d.a.mark(L);function C(e){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(m.e)({type:j.i,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(m.e)({type:j.g,payload:n.t0});case 10:case"end":return n.stop()}},N,null,[[1,6]])}function L(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(j.h,C);case 2:case"end":return e.stop()}},k)}var I=d.a.mark(R),M=d.a.mark(P);function R(e){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(m.e)({type:j.c,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(m.e)({type:j.a,payload:n.t0});case 10:case"end":return n.stop()}},I,null,[[1,6]])}function P(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(j.b,R);case 2:case"end":return e.stop()}},M)}var U=d.a.mark(F),q=d.a.mark(V);function F(e){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(m.e)({type:j.n,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(m.e)({type:j.l,payload:n.t0});case 10:case"end":return n.stop()}},U,null,[[1,6]])}function V(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(j.m,F);case 2:case"end":return e.stop()}},q)}var H=d.a.mark(Q),B=d.a.mark(Y);function Q(e){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(m.e)({type:j.f,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(m.e)({type:j.d,payload:n.t0});case 10:case"end":return n.stop()}},H,null,[[1,6]])}function Y(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(j.e,Q);case 2:case"end":return e.stop()}},B)}var z=d.a.mark(G),W=d.a.mark(K);function G(e){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(m.e)({type:j.k,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(m.e)({type:SET_MAIN_URL_FAILED,payload:n.t0});case 10:case"end":return n.stop()}},z,null,[[1,6]])}function K(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(j.j,G);case 2:case"end":return e.stop()}},W)}var X=d.a.mark(J);function J(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([Object(m.d)(w),Object(m.d)(D),Object(m.d)(L),Object(m.d)(P),Object(m.d)(V),Object(m.d)(Y),Object(m.d)(K)]);case 2:case"end":return e.stop()}},X)}var Z=n(162),$=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var ee=Object(p.a)(o()($));ee.runSaga(J),Object(l.b)(function(){Object(u.hydrate)(a.a.createElement(s.a,{store:ee},a.a.createElement(i.a,null,a.a.createElement(Z.a,null))),document.getElementById("app"))})},72:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return o});var r=n(23),a=Object(r.a)({chunkName:function(){return"containers-Home"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(1),n.e(21)]).then(n.bind(null,175))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 175}}),c=Object(r.a)({chunkName:function(){return"containers-Shop"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(22).then(n.bind(null,176))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 176}}),o=Object(r.a)({chunkName:function(){return"components-content-store-components-product-display-for-purchase-ProductDisplay"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,177))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 177}})},9:function(e,t,n){"use strict";n.d(t,"p",function(){return r}),n.d(t,"q",function(){return a}),n.d(t,"o",function(){return c}),n.d(t,"h",function(){return o}),n.d(t,"i",function(){return u}),n.d(t,"g",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"m",function(){return f}),n.d(t,"n",function(){return d}),n.d(t,"l",function(){return m}),n.d(t,"e",function(){return E}),n.d(t,"f",function(){return h}),n.d(t,"d",function(){return _}),n.d(t,"j",function(){return v}),n.d(t,"k",function(){return y}),n.d(t,"w",function(){return b}),n.d(t,"t",function(){return O}),n.d(t,"r",function(){return g}),n.d(t,"v",function(){return S}),n.d(t,"s",function(){return w}),n.d(t,"u",function(){return j});var r="SET_SECONDARY_NAV_STATE_REQUESTED",a="SET_SECONDARY_NAV_STATE_SUCCEEDED",c="SET_SECONDARY_NAV_STATE_FAILED",o="SET_MAIN_NAV_COLOR_THEME_REQUESTED",u="SET_MAIN_NAV_COLOR_THEME_SUCCEEDED",i="SET_MAIN_NAV_COLOR_THEME_FAILED",s="SET_END_OF_PAGE_SCROLL_REQUESTED",l="SET_END_OF_PAGE_SCROLL_SUCCEEDED",p="SET_END_OF_PAGE_SCROLL_FAILED",f="SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED",d="SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED",m="SET_MORE_INFO_PANEL_VISIBILITY_FAILED",E="SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED",h="SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED",_="SET_INFO_PANEL_ID_DOM_MATCH_FAILED",v="SET_MAIN_NAV_URL_REQUESTED",y="SET_MAIN_NAV_URL_SUCCEEDED",b=function(e){return{type:r,payload:e}},O=function(e){return{type:o,payload:e}},g=function(e){return{type:s,payload:e}},S=function(e){return{type:f,payload:e}},w=function(e){return{type:E,payload:e}},j=function(e){return{type:v,payload:e}}}});