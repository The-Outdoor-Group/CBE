!function(e){var t={},n={38:0},r={38:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var a=[];if(n[t]?a.push(n[t]):0!==n[t]&&{0:1,1:1,2:1,5:1,6:1,7:1,8:1,9:1,10:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,27:1,28:1,34:1,35:1,36:1,37:1,40:1,41:1,42:1,43:1}[t]&&a.push(n[t]=new Promise(function(e,r){for(var a=({0:"Image",1:"Stats",2:"CallToAction",3:"InfoPanelOpenList",4:"MainList",5:"MoreInfoComponent",6:"WishlistLineItem",7:"assets-images-NavigationArrow",8:"assets-images-PlusIcon",9:"assets-images-logo",10:"assets-images-secondary-menu-icon",11:"child-components-ProductImage",12:"child-components-VariantSelector",13:"components-cart-EmptyCartMessage",14:"components-cart-FilledCart",15:"components-cart-FinancingAd",16:"components-cart-RecommendedItems",17:"components-cart-SideBar",18:"components-content-Hero",19:"components-content-assets-images-MoreContentArrow",20:"components-content-store-components-ShopHero",21:"components-content-store-components-product-display-for-purchase-ProductDisplay",22:"components-main-nav-MainNav",23:"components-main-secondary-nav-MainSecondaryNav",24:"components-wishlist-FilledWishlist",25:"components-wishlist-Messaging",26:"components-wishlist-WishlistRecommendedItems",27:"container-HorizontalImageSlider",28:"containers-Cart",29:"containers-Home",30:"containers-Shop",31:"containers-Wishlist",32:"hero-components-List",33:"hero-components-ListButton",34:"hero-components-TextArticle",35:"hero-components-TitleHeader",36:"hero-components-VideoComponent",37:"image-tiles-ImageTile",39:"main-nav-SharedMainList",40:"more-info-components-container-MoreInfoArticle",41:"order-parts-LineItem",42:"order-parts-OrderSummary",43:"text-Header"}[t]||t)+".css",c=o.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=(p=i[u]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===a||s===c))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var p;if((s=(p=l[u]).getAttribute("data-href"))===a||s===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.request=o,delete n[t],f.parentNode.removeChild(f),r(a)},f.href=c,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){n[t]=0})),0!==r[t]){var c=require("./"+t+".server.js"),i=c.modules,u=c.ids;for(var s in i)e[s]=i[s];for(var l=0;l<u.length;l++)r[u[l]]=0}return Promise.all(a)},o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/node/",o.oe=function(e){process.nextTick(function(){throw e})},o(o.s=33)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t,n){"use strict";n.d(t,"p",function(){return r}),n.d(t,"q",function(){return o}),n.d(t,"o",function(){return a}),n.d(t,"h",function(){return c}),n.d(t,"i",function(){return i}),n.d(t,"g",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"m",function(){return f}),n.d(t,"n",function(){return m}),n.d(t,"l",function(){return d}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return E}),n.d(t,"d",function(){return v}),n.d(t,"j",function(){return y}),n.d(t,"k",function(){return b}),n.d(t,"w",function(){return g}),n.d(t,"t",function(){return _}),n.d(t,"r",function(){return S}),n.d(t,"v",function(){return x}),n.d(t,"s",function(){return O}),n.d(t,"u",function(){return w});var r="SET_SECONDARY_NAV_STATE_REQUESTED",o="SET_SECONDARY_NAV_STATE_SUCCEEDED",a="SET_SECONDARY_NAV_STATE_FAILED",c="SET_MAIN_NAV_COLOR_THEME_REQUESTED",i="SET_MAIN_NAV_COLOR_THEME_SUCCEEDED",u="SET_MAIN_NAV_COLOR_THEME_FAILED",s="SET_END_OF_PAGE_SCROLL_REQUESTED",l="SET_END_OF_PAGE_SCROLL_SUCCEEDED",p="SET_END_OF_PAGE_SCROLL_FAILED",f="SET_MORE_INFO_PANEL_VISIBILITY_REQUESTED",m="SET_MORE_INFO_PANEL_VISIBILITY_SUCCEEDED",d="SET_MORE_INFO_PANEL_VISIBILITY_FAILED",h="SET_INFO_PANEL_ID_DOM_MATCH_REQUESTED",E="SET_INFO_PANEL_ID_DOM_MATCH_SUCCEEDED",v="SET_INFO_PANEL_ID_DOM_MATCH_FAILED",y="SET_MAIN_NAV_URL_REQUESTED",b="SET_MAIN_NAV_URL_SUCCEEDED",g=function(e){return{type:r,payload:e}},_=function(e){return{type:c,payload:e}},S=function(e){return{type:s,payload:e}},x=function(e){return{type:f,payload:e}},O=function(e){return{type:h,payload:e}},w=function(e){return{type:y,payload:e}}},function(e,t){e.exports=require("@loadable/component")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("lodash/object")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return u}),n.d(t,"e",function(){return s});var r=n(4),o=n.n(r),a=o()({chunkName:function(){return"containers-Home"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(29).then(n.bind(null,28))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 28}}),c=o()({chunkName:function(){return"containers-Shop"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(30).then(n.bind(null,29))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 29}}),i=o()({chunkName:function(){return"components-content-store-components-product-display-for-purchase-ProductDisplay"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(21).then(n.bind(null,30))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 30}}),u=o()({chunkName:function(){return"containers-Cart"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(28).then(n.bind(null,31))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 31}}),s=o()({chunkName:function(){return"containers-Wishlist"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(31).then(n.bind(null,32))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 32}})},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("@loadable/server")},function(e,t){e.exports=require("jsesc")},function(e,t){e.exports=require("@redux-saga/simple-saga-monitor")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(9),c=n.n(a),i=n(10),u=n.n(i),s=n(5),l=n.n(s),p=n(4),f=n.n(p),m=n(8),d=n(20),h=n.n(d),E=n(21),v=n.n(E),y=n(22),b=n.n(y),g=n(23),_=n.n(g),S=n(24),x=n.n(S),O=n(36),w=n.n(O),T=f()({chunkName:function(){return"components-main-nav-MainNav"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(22).then(n.bind(null,25))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 25}}),k=f()({chunkName:function(){return"components-main-secondary-nav-MainSecondaryNav"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(23).then(n.bind(null,26))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 26}}),q=f()({chunkName:function(){return"components-content-assets-images-MoreContentArrow"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(19).then(n.bind(null,27))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 27}}),A=function(e){return Object(r.useEffect)(function(){if(process.env.IS_BROWSER){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("assets/web/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})}}),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.Helmet,null,o.a.createElement("title",null,"Custom Bow Equipment"),o.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"assets/web/styles.css"}),o.a.createElement("link",{rel:"shortcut icon",href:h.a}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:_.a}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:b.a}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:v.a}),o.a.createElement("link",{rel:"mask-icon",href:x.a,color:"#5bbad5"}),o.a.createElement("link",{rel:"canonical",href:"https://custombowequipment.com/"}),o.a.createElement("meta",{name:"description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),o.a.createElement("meta",{property:"fb:app_id",content:"711769165659880"}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),o.a.createElement("meta",{property:"og:image",content:""}),o.a.createElement("meta",{property:"og:image:secure_url",content:""}),o.a.createElement("meta",{property:"og:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),o.a.createElement("meta",{property:"og:url",content:"https://custombowequipment.com/"}),o.a.createElement("meta",{property:"og:site_name",content:"Custom Bow Equipment"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),o.a.createElement("meta",{name:"twitter:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),o.a.createElement("meta",{name:"twitter:image",content:""}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),o.a.createElement(T,null),o.a.createElement("main",{id:"main-content",className:e.secondaryMenuVisible?"fade":null},o.a.createElement(s.Switch,null,o.a.createElement(s.Route,{exact:!0,path:"/",component:function(){return o.a.createElement(m.b,null)}}),o.a.createElement(s.Route,{path:"/shop",component:function(){return o.a.createElement(m.d,null)}}),o.a.createElement(s.Route,{path:"/product",component:function(){return o.a.createElement(m.c,null)}}),o.a.createElement(s.Route,{path:"/cart",component:function(){return o.a.createElement(m.a,null)}}),o.a.createElement(s.Route,{path:"/wishlist",component:function(){return o.a.createElement(m.e,null)}}))),o.a.createElement(k,null),o.a.createElement(q,null))},j=function(e){return{secondaryMenuVisible:e.sharedUiState.secondaryMenuVisible}};t.a=Object(a.connect)(j)(A)},function(e,t,n){e.exports=n.p+"ac133a441768e68a50c0560cf6c15b5e.ico"},function(e,t,n){e.exports=n.p+"29ff4983730cde61545de2e5260f5d2e.png"},function(e,t,n){e.exports=n.p+"4d2c24cff09792200910d7228266ad3c.png"},function(e,t,n){e.exports=n.p+"2a9397b3be4862c3d7d1ffb0547b5856.png"},function(e,t,n){e.exports=n.p+"71f0872ccf4b3446812f20d8c9640891.svg"},,,,,,,,,function(e,t,n){n(34),n(37)},function(e,t){e.exports=require("@babel/register")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(11),o=n.n(r),a=n(13),c=n.n(a),i=n(0),u=n.n(i),s=n(14),l=n(5),p=n(9),f=n(10),m=n(15),d=(n(35),n(16)),h=n.n(d),E=n(7),v=n(12),y=n.n(v),b=n(17),g=n.n(b),_=n(6),S=n(3),x={secondaryMenuVisible:!1,mainNavThemeColor:"dark",endOfPageScroll:!1,openMoreInfoPanel:!1,elMatchForScrolling:null,mainUrl:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case S.q:return Object(_.merge)({},e,{secondaryMenuVisible:r});case S.i:return Object(_.merge)({},e,{mainNavThemeColor:r});case S.c:return Object(_.merge)({},e,{endOfPageScroll:r});case S.n:return Object(_.merge)({},e,{openMoreInfoPanel:r});case S.f:return Object(_.merge)({},e,{elMatchForScrolling:r});case S.k:return Object(_.merge)({},e,{mainUrl:r});default:return e}},w=Object(E.combineReducers)({sharedUiState:O}),T=function(e){var t=global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.compose,n=y()({sagaMonitor:g.a}),r=[n],o=Object(E.createStore)(w,e,t(E.applyMiddleware.apply(void 0,r)));return o.runSaga=n.run,o.close=function(){return o.dispatch(v.END)},o},k=n(1),q=n.n(k),A=n(2),j=n(18),C=n.n(j),N="FETCH_USERS_REQUESTED",I="FETCH_USERS_SUCCEEDED",R="FETCH_USERS_FAILED",D=q.a.mark(P),L=q.a.mark(F),M=function(){return C()("https://api.github.com/gists").then(function(e){return e.ok?e.json():function(){throw"error"}})};function P(){var e;return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(A.call)(M);case 3:return e=t.sent,t.next=6,Object(A.put)({type:I,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(A.put)({type:R,payload:t.t0});case 12:case"end":return t.stop()}},D,null,[[0,8]])}function F(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(N,P);case 2:case"end":return e.stop()}},L)}var U=q.a.mark(V),H=q.a.mark(B);function V(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:S.q,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:S.o,payload:n.t0});case 10:case"end":return n.stop()}},U,null,[[1,6]])}function B(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(S.p,V);case 2:case"end":return e.stop()}},H)}var W=q.a.mark(Q),z=q.a.mark(Y);function Q(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:S.i,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:S.g,payload:n.t0});case 10:case"end":return n.stop()}},W,null,[[1,6]])}function Y(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(S.h,Q);case 2:case"end":return e.stop()}},z)}var G=q.a.mark(J),X=q.a.mark(K);function J(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:S.c,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:S.a,payload:n.t0});case 10:case"end":return n.stop()}},G,null,[[1,6]])}function K(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(S.b,J);case 2:case"end":return e.stop()}},X)}var Z=q.a.mark(ee),$=q.a.mark(te);function ee(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:S.n,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:S.l,payload:n.t0});case 10:case"end":return n.stop()}},Z,null,[[1,6]])}function te(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(S.m,ee);case 2:case"end":return e.stop()}},$)}var ne=q.a.mark(oe),re=q.a.mark(ae);function oe(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:S.f,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:S.d,payload:n.t0});case 10:case"end":return n.stop()}},ne,null,[[1,6]])}function ae(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(S.e,oe);case 2:case"end":return e.stop()}},re)}var ce=q.a.mark(ue),ie=q.a.mark(se);function ue(e){var t;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(A.put)({type:S.k,payload:t});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n.catch(1),n.next=10,Object(A.put)({type:SET_MAIN_URL_FAILED,payload:n.t0});case 10:case"end":return n.stop()}},ce,null,[[1,6]])}function se(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.takeLatest)(S.j,ue);case 2:case"end":return e.stop()}},ie)}var le=q.a.mark(pe);function pe(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.all)([Object(A.fork)(F),Object(A.fork)(B),Object(A.fork)(Y),Object(A.fork)(K),Object(A.fork)(te),Object(A.fork)(ae),Object(A.fork)(se)]);case 2:case"end":return e.stop()}},le)}var fe=n(19),me=new o.a,de=process.env.PORT||3e3;me.use("/assets/node",o.a.static("dist/node")),me.use("/assets/web",o.a.static("dist/web"));var he=T({}),Ee=function(){var e=c.a.resolve(__dirname,"../web/loadable-stats.json");return new m.ChunkExtractor({statsFile:e})},ve=function(e){return t=ye(e),n=JSON.stringify(he.getState()),r=Ee(),o=f.Helmet.renderStatic(),"\n    <!DOCTYPE html>\n      <html>\n        <head>\n          ".concat(o.title.toString(),"\n          ").concat(o.link.toString(),"\n          ").concat(o.meta.toString(),'\n        </head>\n        <body>\n          <div id="app">').concat(t,"</div>\n        </body>\n        <script>window.__PRELOADED_STATE__ = ").concat(h()(n),"<\/script>\n        ").concat(r.getScriptTags(),"\n      </html>\n  ");var t,n,r,o},ye=function(e){var t={},n=Ee().collectChunks(u.a.createElement(p.Provider,{store:he},u.a.createElement(l.StaticRouter,{location:e.url,context:t},u.a.createElement(fe.a,null))));if(!t.url)return Object(s.renderToString)(n);res.redirect(t.url)};me.get("*",function(e,t){he.runSaga(pe).toPromise().then(function(){return t.status(200).send(ve(e))}).catch(function(e){return t.status(500).send(e.message)}),ve(e),he.close()}),me.listen(de,function(e){e?console.error("error occurred: ",e):console.info("SERVER HAS STARTED on ".concat(de,"."))})},function(e,t){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("lodash/debounce")},function(e,t){e.exports=require("gsap")},function(e,t){e.exports=require("gsap/ScrollToPlugin")},function(e,t){e.exports=require("gsap/TweenLite")},function(e,t){e.exports=require("gsap/TweenMax")},function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t){e.exports=require("lodash/filter")},function(e,t){e.exports=require("lodash/find")},function(e,t){e.exports=require("lodash/isEqual")},function(e,t){e.exports=require("lodash/findIndex")},function(e,t){e.exports=require("lodash/cloneDeep")},function(e,t){e.exports=require("history")},function(e,t){e.exports=require("react-responsive-carousel")}]);