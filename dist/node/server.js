!function(e){var t={},n={27:0},r={27:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var a=[];if(n[t]?a.push(n[t]):0!==n[t]&&{0:1,2:1,3:1,5:1,6:1,7:1,8:1,9:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,23:1,24:1,25:1,26:1,28:1,29:1}[t]&&a.push(n[t]=new Promise(function(e,r){for(var a=({0:"Image",1:"MainList",2:"Stats",3:"CallToAction",4:"InfoPanelOpenList",5:"MoreInfoComponent",6:"assets-images-NavigationArrow",7:"assets-images-PlusIcon",8:"assets-images-logo",9:"assets-images-secondary-menu-icon",10:"child-components-ProductImage",11:"child-components-VariantSelector",12:"components-content-Hero",13:"components-content-assets-images-MoreContentArrow",14:"components-content-store-components-ShopHero",15:"components-content-store-components-product-display-for-purchase-ProductDisplay",16:"components-main-nav-MainNav",17:"components-main-secondary-nav-MainSecondaryNav",18:"container-HorizontalImageSlider",19:"containers-Home",20:"containers-Shop",21:"hero-components-List",22:"hero-components-ListButton",23:"hero-components-TextArticle",24:"hero-components-TitleHeader",25:"hero-components-VideoComponent",26:"image-tiles-ImageTile",28:"more-info-components-container-MoreInfoArticle",29:"text-Header"}[t]||t)+".css",c=o.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=(p=i[u]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===a||s===c))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var p;if((s=(p=l[u]).getAttribute("data-href"))===a||s===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.request=o,delete n[t],f.parentNode.removeChild(f),r(a)},f.href=c,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){n[t]=0})),0!==r[t]){var c=require("./"+t+".server.js"),i=c.modules,u=c.ids;for(var s in i)e[s]=i[s];for(var l=0;l<u.length;l++)r[u[l]]=0}return Promise.all(a)},o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/node/",o.oe=function(e){process.nextTick(function(){throw e})},o(o.s=31)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t,n){"use strict";n.d(t,"n",function(){return r}),n.d(t,"o",function(){return o}),n.d(t,"m",function(){return a}),n.d(t,"h",function(){return c}),n.d(t,"i",function(){return i}),n.d(t,"g",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"k",function(){return f}),n.d(t,"l",function(){return d}),n.d(t,"j",function(){return m}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return E}),n.d(t,"d",function(){return v}),n.d(t,"t",function(){return g}),n.d(t,"r",function(){return y}),n.d(t,"p",function(){return b}),n.d(t,"s",function(){return x}),n.d(t,"q",function(){return _});var r="SET_SECONDARY_NAV_STATE_REQUESTED",o="SET_SECONDARY_NAV_STATE_SUCCEEDED",a="SET_SECONDARY_NAV_STATE_FAILED",c="SET_MAIN_NAV_COLOR_THEME_REQUESTED",i="SET_MAIN_NAV_COLOR_THEME_SUCCEEDED",u="SET_MAIN_NAV_COLOR_THEME_FAILED",s="SET_END_OF_PAGE_SCROLL_REQUESTED",l="SET_END_OF_PAGE_SCROLL_SUCCEEDED",p="SET_END_OF_PAGE_SCROLL_FAILED",f="SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED",d="SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED",m="SET_MORE_INFO_PANEL_VISIBILITY_FAILED",h="SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED",E="SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED",v="SET_INFO_PANEL_ID_DOM_MATCH_FAILED",g=function(e){return{type:r,payload:e}},y=function(e){return{type:c,payload:e}},b=function(e){return{type:s,payload:e}},x=function(e){return console.log("setMoreInfoPanelVisibility payload in action: ",e),{type:f,payload:e}},_=function(e){return console.log("payload setIdMatchForParentContainer in action: ",e),{type:h,payload:e}}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("@loadable/component")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("lodash/object")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return i});var r=n(5),o=n.n(r),a=o()({chunkName:function(){return"containers-Home"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(19).then(n.bind(null,28))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 28}}),c=o()({chunkName:function(){return"containers-Shop"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(20).then(n.bind(null,29))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 29}}),i=o()({chunkName:function(){return"components-content-store-components-product-display-for-purchase-ProductDisplay"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(15).then(n.bind(null,30))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 30}})},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("@loadable/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("@redux-saga/simple-saga-monitor")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(9),c=n.n(a),i=n(6),u=n.n(i),s=n(5),l=n.n(s),p=n(11),f=n(20),d=n.n(f),m=n(21),h=n.n(m),E=n(22),v=n.n(E),g=n(23),y=n.n(g),b=n(24),x=n.n(b),_=n(34),S=n.n(_),O=l()({chunkName:function(){return"components-main-nav-MainNav"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(16).then(n.bind(null,25))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 25}}),w=l()({chunkName:function(){return"components-main-secondary-nav-MainSecondaryNav"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(17).then(n.bind(null,26))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 26}}),T=l()({chunkName:function(){return"components-content-assets-images-MoreContentArrow"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(13).then(n.bind(null,27))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 27}}),k=function(){return Object(r.useEffect)(function(){if(process.env.IS_BROWSER){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("assets/web/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})}}),o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Helmet,null,o.a.createElement("title",null,"Custom Bow Equipment"),o.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"assets/web/main.css"}),o.a.createElement("link",{rel:"shortcut icon",href:d.a}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:y.a}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:v.a}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:h.a}),o.a.createElement("link",{rel:"mask-icon",href:x.a,color:"#5bbad5"}),o.a.createElement("link",{rel:"canonical",href:"https://custombowequipment.com/"}),o.a.createElement("meta",{name:"description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),o.a.createElement("meta",{property:"fb:app_id",content:"711769165659880"}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),o.a.createElement("meta",{property:"og:image",content:""}),o.a.createElement("meta",{property:"og:image:secure_url",content:""}),o.a.createElement("meta",{property:"og:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),o.a.createElement("meta",{property:"og:url",content:"https://custombowequipment.com/"}),o.a.createElement("meta",{property:"og:site_name",content:"Custom Bow Equipment"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),o.a.createElement("meta",{name:"twitter:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),o.a.createElement("meta",{name:"twitter:image",content:""}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),o.a.createElement(O,null),o.a.createElement("main",{id:"main-content"},o.a.createElement(i.Switch,null,o.a.createElement(i.Route,{exact:!0,path:"/",component:function(){return o.a.createElement(p.a,null)}}),o.a.createElement(i.Route,{path:"/shop",component:function(){return o.a.createElement(p.c,null)}}),o.a.createElement(i.Route,{path:"/product",component:function(){return o.a.createElement(p.b,null)}}))),o.a.createElement(w,null),o.a.createElement(T,null))};t.a=k},function(e,t,n){e.exports=n.p+"ac133a441768e68a50c0560cf6c15b5e.ico"},function(e,t,n){e.exports=n.p+"29ff4983730cde61545de2e5260f5d2e.png"},function(e,t,n){e.exports=n.p+"4d2c24cff09792200910d7228266ad3c.png"},function(e,t,n){e.exports=n.p+"2a9397b3be4862c3d7d1ffb0547b5856.png"},function(e,t,n){e.exports=n.p+"71f0872ccf4b3446812f20d8c9640891.svg"},,,,,,,function(e,t,n){n(32),n(35)},function(e,t){e.exports=require("@babel/register")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(33);var r=n(10),o=n.n(r),a=n(4),c=n.n(a),i=n(0),u=n.n(i),s=n(14),l=n(6),p=n(13),f=n(9),d=n(15),m=n(16),h=n.n(m),E=n(7),v=n(12),g=n.n(v),y=n(17),b=n.n(y),x=n(8),_=n(3),S={secondaryMenuVisible:!1,mainNavThemeColor:"dark",endOfPageScroll:!1,openMoreInfoPanel:!1,elMatchForScrolling:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case _.o:return Object(x.merge)({},e,{secondaryMenuVisible:r});case _.i:return Object(x.merge)({},e,{mainNavThemeColor:r});case _.c:return Object(x.merge)({},e,{endOfPageScroll:r});case _.l:return Object(x.merge)({},e,{openMoreInfoPanel:r});case _.f:return Object(x.merge)({},e,{elMatchForScrolling:r});default:return e}},w=Object(E.combineReducers)({sharedUiState:O}),T=function(e){var t=global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.compose,n=g()({sagaMonitor:b.a}),r=[n],o=Object(E.createStore)(w,e,t(E.applyMiddleware.apply(void 0,r)));return o.runSaga=n.run,o.close=function(){return o.dispatch(v.END)},o},k=n(1),q=n.n(k),A=n(2),C=n(18),j=n.n(C),N="FETCH_USERS_REQUESTED",D="FETCH_USERS_SUCCEEDED",I="FETCH_USERS_FAILED",R=q.a.mark(P),M=q.a.mark(F),L=function(){return j()("https://api.github.com/gists").then(function(e){return e.ok?e.json():function(){throw"error"}})};function P(){var e;return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(A.call)(L);case 3:return e=t.sent,t.next=6,Object(A.put)({type:D,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(A.put)({type:I,payload:t.t0});case 12:case"end":return t.stop()}},R,null,[[0,8]])}function F(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(N,P);case 2:case"end":return e.stop()}},M)}var H=q.a.mark(V),U=q.a.mark(B);function V(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:_.o,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:_.m,payload:n.t0});case 10:case"end":return n.stop()}},H,null,[[1,6]])}function B(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(_.n,V);case 2:case"end":return e.stop()}},U)}var z=q.a.mark(Q),Y=q.a.mark(W);function Q(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:_.i,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:_.g,payload:n.t0});case 10:case"end":return n.stop()}},z,null,[[1,6]])}function W(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(_.h,Q);case 2:case"end":return e.stop()}},Y)}var G=q.a.mark(J),X=q.a.mark(K);function J(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:_.c,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:_.a,payload:n.t0});case 10:case"end":return n.stop()}},G,null,[[1,6]])}function K(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(_.b,J);case 2:case"end":return e.stop()}},X)}var Z=q.a.mark(ee),$=q.a.mark(te);function ee(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:_.l,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:_.j,payload:n.t0});case 10:case"end":return n.stop()}},Z,null,[[1,6]])}function te(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(_.k,ee);case 2:case"end":return e.stop()}},$)}var ne=q.a.mark(oe),re=q.a.mark(ae);function oe(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:_.f,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:_.d,payload:n.t0});case 10:case"end":return n.stop()}},ne,null,[[1,6]])}function ae(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(_.e,oe);case 2:case"end":return e.stop()}},re)}var ce=q.a.mark(ie);function ie(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.all)([Object(A.fork)(F),Object(A.fork)(B),Object(A.fork)(W),Object(A.fork)(K),Object(A.fork)(te),Object(A.fork)(ae)]);case 2:case"end":return e.stop()}},ce)}var ue=n(19),se=new o.a,le=process.env.PORT;se.use("/assets/node",o.a.static("dist/node")),se.use("/assets/web",o.a.static("dist/web"));var pe=T({}),fe=function(){var e=c.a.resolve(__dirname,"../web/loadable-stats.json");return new d.ChunkExtractor({statsFile:e})},de=function(e){return t=me(e),n=JSON.stringify(pe.getState()),r=fe(),o=f.Helmet.renderStatic(),"\n    <!DOCTYPE html>\n      <html>\n        <head>\n          ".concat(o.title.toString(),"\n          ").concat(o.link.toString(),"\n          ").concat(o.meta.toString(),'\n        </head>\n        <body>\n          <div id="app">').concat(t,"</div>\n        </body>\n        <script>window.__PRELOADED_STATE__ = ").concat(h()(n).replace(/</g,"\\x3c"),"<\/script>\n        ").concat(r.getScriptTags(),"\n      </html>\n  ");var t,n,r,o},me=function(e){var t={},n=fe().collectChunks(u.a.createElement(p.Provider,{store:pe},u.a.createElement(l.StaticRouter,{location:e.url,context:t},u.a.createElement(ue.a,null))));if(!t.url)return Object(s.renderToString)(n);res.redirect(t.url)};se.get("*",function(e,t){pe.runSaga(ie).toPromise().then(function(){return t.status(200).send(de(e))}).catch(function(e){return t.status(500).send(e.message)}),pe.close()}),se.listen(le,function(e){e?console.error("error occurred: ",e):console.info("SERVER HAS STARTED on ".concat(le,"."))})},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,t){e.exports=require("gsap")},function(e,t){e.exports=require("gsap/ScrollToPlugin")},function(e,t){e.exports=require("lodash/debounce")},function(e,t){e.exports=require("gsap/TweenLite")},function(e,t){e.exports=require("gsap/TweenMax")},function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t){e.exports=require("lodash/filter")},function(e,t){e.exports=require("lodash/find")},function(e,t){e.exports=require("lodash/isEqual")},function(e,t){e.exports=require("lodash/findIndex")},function(e,t){e.exports=require("lodash/cloneDeep")}]);