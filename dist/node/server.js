!function(e){var t={},n={22:0},r={22:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var a=[];if(n[t]?a.push(n[t]):0!==n[t]&&{0:1,2:1,5:1,6:1,7:1,8:1,11:1,12:1,13:1,14:1,19:1,20:1,21:1,23:1,24:1}[t]&&a.push(n[t]=new Promise(function(e,r){for(var a=({0:"Stats",1:"media-assets-Image",2:"CallToAction",3:"InfoPanelOpenList",4:"MainList",5:"MoreInfoComponent",6:"assets-images-PlusIcon",7:"assets-images-logo",8:"assets-images-secondary-menu-icon",9:"components-Bar",10:"components-Foo",11:"components-content-Hero",12:"components-content-assets-images-MoreContentArrow",13:"components-main-nav-MainNav",14:"components-main-secondary-nav-MainSecondaryNav",15:"container-HorizontalImageSlider",16:"containers-Home",17:"hero-List",18:"hero-ListButton",19:"hero-TextArticle",20:"hero-TitleHeader",21:"hero-VideoComponent",23:"more-info-components-container-MoreInfoArticle",24:"text-Header"}[t]||t)+".css",c=o.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=(p=i[u]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===a||s===c))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var p;if((s=(p=l[u]).getAttribute("data-href"))===a||s===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.request=o,delete n[t],f.parentNode.removeChild(f),r(a)},f.href=c,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){n[t]=0})),0!==r[t]){var c=require("./"+t+".server.js"),i=c.modules,u=c.ids;for(var s in i)e[s]=i[s];for(var l=0;l<u.length;l++)r[u[l]]=0}return Promise.all(a)},o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/node/",o.oe=function(e){process.nextTick(function(){throw e})},o(o.s=36)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t,n){"use strict";n.d(t,"n",function(){return r}),n.d(t,"o",function(){return o}),n.d(t,"m",function(){return a}),n.d(t,"h",function(){return c}),n.d(t,"i",function(){return i}),n.d(t,"g",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"k",function(){return f}),n.d(t,"l",function(){return m}),n.d(t,"j",function(){return d}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return E}),n.d(t,"d",function(){return v}),n.d(t,"t",function(){return g}),n.d(t,"r",function(){return b}),n.d(t,"p",function(){return y}),n.d(t,"s",function(){return _}),n.d(t,"q",function(){return x});var r="SET_SECONDARY_NAV_STATE_REQUESTED",o="SET_SECONDARY_NAV_STATE_SUCCEEDED",a="SET_SECONDARY_NAV_STATE_FAILED",c="SET_MAIN_NAV_COLOR_THEME_REQUESTED",i="SET_MAIN_NAV_COLOR_THEME_SUCCEEDED",u="SET_MAIN_NAV_COLOR_THEME_FAILED",s="SET_END_OF_PAGE_SCROLL_REQUESTED",l="SET_END_OF_PAGE_SCROLL_SUCCEEDED",p="SET_END_OF_PAGE_SCROLL_FAILED",f="SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED",m="SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED",d="SET_MORE_INFO_PANEL_VISIBILITY_FAILED",h="SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED",E="SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED",v="SET_INFO_PANEL_ID_DOM_MATCH_FAILED",g=function(e){return{type:r,payload:e}},b=function(e){return{type:c,payload:e}},y=function(e){return{type:s,payload:e}},_=function(e){return{type:f,payload:e}},x=function(e){return{type:h,payload:e}}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("@loadable/component")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("lodash/object")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var r=n(5),o=n.n(r),a=o()({chunkName:function(){return"containers-Home"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(16).then(n.bind(null,33))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 33}}),c=o()({chunkName:function(){return"components-Foo"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(10).then(n.bind(null,34))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 34}}),i=o()({chunkName:function(){return"components-Bar"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(9).then(n.bind(null,35))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 35}})},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("@loadable/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("@redux-saga/simple-saga-monitor")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,n){"use strict";var r=n(13),o=n.n(r),a=n(14),c=n.n(a),i=n(15),u=n.n(i),s=n(16),l=n.n(s),p=n(17),f=n.n(p),m=n(0),d=n.n(m),h=n(9),E=n.n(h),v=n(6),g=n.n(v),b=n(5),y=n.n(b),_=n(11),x=n(25),S=n.n(x),O=n(26),w=n.n(O),T=n(27),k=n.n(T),A=n(28),q=n.n(A),C=n(29),j=n.n(C),N=n(39),D=n.n(N),I=function(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("assets/web/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})},R=y()({chunkName:function(){return"components-main-nav-MainNav"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(13).then(n.bind(null,30))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 30}}),L=y()({chunkName:function(){return"components-main-secondary-nav-MainSecondaryNav"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(14).then(n.bind(null,31))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 31}}),M=y()({chunkName:function(){return"components-content-assets-images-MoreContentArrow"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(12).then(n.bind(null,32))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 32}}),P=function(e){function t(){return o()(this,t),u()(this,l()(t).apply(this,arguments))}return f()(t,e),c()(t,[{key:"componentDidMount",value:function(){process.env.IS_BROWSER&&I()}},{key:"render",value:function(){return d.a.createElement(m.Fragment,null,d.a.createElement(h.Helmet,null,d.a.createElement("title",null,"Custom Bow Equipment"),d.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"assets/web/main.css"}),d.a.createElement("link",{rel:"shortcut icon",href:S.a}),d.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:q.a}),d.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:k.a}),d.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:w.a}),d.a.createElement("link",{rel:"mask-icon",href:j.a,color:"#5bbad5"}),d.a.createElement("link",{rel:"canonical",href:"https://custombowequipment.com/"}),d.a.createElement("meta",{name:"description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),d.a.createElement("meta",{property:"fb:app_id",content:"711769165659880"}),d.a.createElement("meta",{property:"og:type",content:"website"}),d.a.createElement("meta",{property:"og:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),d.a.createElement("meta",{property:"og:image",content:""}),d.a.createElement("meta",{property:"og:image:secure_url",content:""}),d.a.createElement("meta",{property:"og:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),d.a.createElement("meta",{property:"og:url",content:"https://custombowequipment.com/"}),d.a.createElement("meta",{property:"og:site_name",content:"Custom Bow Equipment"}),d.a.createElement("meta",{name:"twitter:card",content:"summary"}),d.a.createElement("meta",{name:"twitter:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),d.a.createElement("meta",{name:"twitter:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),d.a.createElement("meta",{name:"twitter:image",content:""}),d.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),d.a.createElement(R,null),d.a.createElement("main",{id:"main-content"},d.a.createElement(v.Switch,null,d.a.createElement(v.Route,{exact:!0,path:"/",component:function(){return d.a.createElement(_.c,null)}}),d.a.createElement(v.Route,{path:"/foo",component:function(){return d.a.createElement(_.b,null)}}),d.a.createElement(v.Route,{path:"/bar",component:function(){return d.a.createElement(_.a,null)}}))),d.a.createElement(L,null),d.a.createElement(M,null))}}]),t}(m.Component);t.a=P},function(e,t,n){e.exports=n.p+"ac133a441768e68a50c0560cf6c15b5e.ico"},function(e,t,n){e.exports=n.p+"29ff4983730cde61545de2e5260f5d2e.png"},function(e,t,n){e.exports=n.p+"4d2c24cff09792200910d7228266ad3c.png"},function(e,t,n){e.exports=n.p+"2a9397b3be4862c3d7d1ffb0547b5856.png"},function(e,t,n){e.exports=n.p+"71f0872ccf4b3446812f20d8c9640891.svg"},,,,,,,function(e,t,n){n(37),n(40)},function(e,t){e.exports=require("@babel/register")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(38);var r=n(10),o=n.n(r),a=n(4),c=n.n(a),i=n(0),u=n.n(i),s=n(19),l=n(6),p=n(18),f=n(9),m=n(20),d=n(21),h=n.n(d),E=n(7),v=n(12),g=n.n(v),b=n(22),y=n.n(b),_=n(8),x=n(3),S={secondaryMenuVisible:!1,mainNavThemeColor:"dark",endOfPageScroll:!1,openMoreInfoPanel:!1,elMatchForScrolling:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case x.o:return Object(_.merge)({},e,{secondaryMenuVisible:r});case x.i:return Object(_.merge)({},e,{mainNavThemeColor:r});case x.c:return Object(_.merge)({},e,{endOfPageScroll:r});case x.l:return Object(_.merge)({},e,{openMoreInfoPanel:r});case x.f:return Object(_.merge)({},e,{elMatchForScrolling:r});default:return e}},w=Object(E.combineReducers)({sharedUiState:O}),T=function(e){var t=global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.compose,n=g()({sagaMonitor:y.a}),r=[n],o=Object(E.createStore)(w,e,t(E.applyMiddleware.apply(void 0,r)));return o.runSaga=n.run,o.close=function(){return o.dispatch(v.END)},o},k=n(1),A=n.n(k),q=n(2),C=n(23),j=n.n(C),N="FETCH_USERS_REQUESTED",D="FETCH_USERS_SUCCEEDED",I="FETCH_USERS_FAILED",R=A.a.mark(P),L=A.a.mark(F),M=function(){return j()("https://api.github.com/gists").then(function(e){return e.ok?e.json():function(){throw"error"}})};function P(){var e;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.call)(M);case 3:return e=t.sent,t.next=6,Object(q.put)({type:D,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(q.put)({type:I,payload:t.t0});case 12:case"end":return t.stop()}},R,null,[[0,8]])}function F(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.takeLatest)(N,P);case 2:case"end":return e.stop()}},L)}var H=A.a.mark(U),B=A.a.mark(V);function U(e){var t;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(q.put)({type:x.o,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(q.put)({type:x.m,payload:n.t0});case 10:case"end":return n.stop()}},H,null,[[1,6]])}function V(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.takeLatest)(x.n,U);case 2:case"end":return e.stop()}},B)}var z=A.a.mark(Q),Y=A.a.mark(W);function Q(e){var t;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(q.put)({type:x.i,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(q.put)({type:x.g,payload:n.t0});case 10:case"end":return n.stop()}},z,null,[[1,6]])}function W(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.takeLatest)(x.h,Q);case 2:case"end":return e.stop()}},Y)}var G=A.a.mark(J),X=A.a.mark(K);function J(e){var t;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(q.put)({type:x.c,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(q.put)({type:x.a,payload:n.t0});case 10:case"end":return n.stop()}},G,null,[[1,6]])}function K(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.takeLatest)(x.b,J);case 2:case"end":return e.stop()}},X)}var Z=A.a.mark(ee),$=A.a.mark(te);function ee(e){var t;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(q.put)({type:x.l,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(q.put)({type:x.j,payload:n.t0});case 10:case"end":return n.stop()}},Z,null,[[1,6]])}function te(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.takeLatest)(x.k,ee);case 2:case"end":return e.stop()}},$)}var ne=A.a.mark(oe),re=A.a.mark(ae);function oe(e){var t;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(q.put)({type:x.f,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(q.put)({type:x.d,payload:n.t0});case 10:case"end":return n.stop()}},ne,null,[[1,6]])}function ae(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.takeLatest)(x.e,oe);case 2:case"end":return e.stop()}},re)}var ce=A.a.mark(ie);function ie(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.all)([Object(q.fork)(F),Object(q.fork)(V),Object(q.fork)(W),Object(q.fork)(K),Object(q.fork)(te),Object(q.fork)(ae)]);case 2:case"end":return e.stop()}},ce)}var ue=n(24),se=new o.a;se.use("/assets/node",o.a.static("dist/node")),se.use("/assets/web",o.a.static("dist/web"));var le=T({}),pe=function(){var e=c.a.resolve(__dirname,"../web/loadable-stats.json");return new m.ChunkExtractor({statsFile:e})},fe=function(e){return t=me(e),n=JSON.stringify(le.getState()),r=pe(),o=f.Helmet.renderStatic(),"\n    <!DOCTYPE html>\n      <html>\n        <head>\n          ".concat(o.title.toString(),"\n          ").concat(o.link.toString(),"\n          ").concat(o.meta.toString(),'\n        </head>\n        <body>\n          <div id="app">').concat(t,"</div>\n        </body>\n        <script>window.__PRELOADED_STATE__ = ").concat(h()(n).replace(/</g,"\\x3c"),"<\/script>\n        ").concat(r.getScriptTags(),"\n      </html>\n  ");var t,n,r,o},me=function(e){var t={},n=pe().collectChunks(u.a.createElement(p.Provider,{store:le},u.a.createElement(l.StaticRouter,{location:e.url,context:t},u.a.createElement(ue.a,null))));if(!t.url)return Object(s.renderToString)(n);res.redirect(t.url)};se.get("*",function(e,t){le.runSaga(ie).toPromise().then(function(){return t.status(200).send(fe(e))}).catch(function(e){return t.status(500).send(e.message)}),fe(e),le.close()}),se.listen(process.env.PORT||3e3,function(e){e?console.error("error occurred: ",e):console.info("SERVER HAS STARTED.")})},function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t){e.exports=require("gsap")},function(e,t){e.exports=require("gsap/ScrollToPlugin")},function(e,t){e.exports=require("gsap/TweenLite")},function(e,t){e.exports=require("gsap/TweenMax")},function(e,t){e.exports=require("lodash/debounce")}]);