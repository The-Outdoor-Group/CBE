!function(e){var t={},n={3:0},r={3:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var a=[];if(n[t]?a.push(n[t]):0!==n[t]&&{0:1,1:1}[t]&&a.push(n[t]=new Promise(function(e,r){for(var a=({0:"components-Bar",1:"components-Foo",2:"containers-App-old"}[t]||t)+".css",c=o.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=(p=i[u]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===a||s===c))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var p;if((s=(p=l[u]).getAttribute("data-href"))===a||s===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.request=o,delete n[t],f.parentNode.removeChild(f),r(a)},f.href=c,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){n[t]=0})),0!==r[t]){var c=require("./"+t+".server.js"),i=c.modules,u=c.ids;for(var s in i)e[s]=i[s];for(var l=0;l<u.length;l++)r[u[l]]=0}return Promise.all(a)},o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/node/",o.oe=function(e){process.nextTick(function(){throw e})},o(o.s=31)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return c});var r="FETCH_USERS_REQUESTED",o="FETCH_USERS_SUCCEEDED",a="FETCH_USERS_FAILED",c=function(){return{type:r}}},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var r=n(10),o=n.n(r),a=o()({chunkName:function(){return"containers-App-old"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(2).then(n.bind(null,28))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 28}}),c=o()({chunkName:function(){return"components-Foo"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(1).then(n.bind(null,29))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 29}}),i=o()({chunkName:function(){return"components-Bar"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(0).then(n.bind(null,30))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 30}})},function(e,t){e.exports=require("@loadable/component")},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("@loadable/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("@redux-saga/simple-saga-monitor")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,n){e.exports=n.p+"ac133a441768e68a50c0560cf6c15b5e.ico"},function(e,t,n){e.exports=n.p+"29ff4983730cde61545de2e5260f5d2e.png"},function(e,t,n){e.exports=n.p+"4d2c24cff09792200910d7228266ad3c.png"},function(e,t,n){e.exports=n.p+"2a9397b3be4862c3d7d1ffb0547b5856.png"},function(e,t,n){e.exports=n.p+"71f0872ccf4b3446812f20d8c9640891.svg"},,,,function(e,t,n){n(32),n(36)},function(e,t){e.exports=require("@babel/register")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t){e.exports=require("lodash/object")},function(e,t){e.exports=require("lodash/array")},function(e,t,n){"use strict";n.r(t);n(33);var r=n(8),o=n.n(r),a=n(6),c=n.n(a),i=n(0),u=n.n(i),s=n(18),l=n(1),p=n(12),f=n(7),m=n(19),d=n(20),h=n.n(d),g=n(5),v=n(11),E=n.n(v),b=n(21),y=n.n(b),x=(n(34),n(35),n(4)),S=[{owner:{login:"jcardella"}}],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case x.c:return r;default:return e}},q=Object(g.combineReducers)({users:w}),k=function(e){var t=global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.compose,n=E()({sagaMonitor:y.a}),r=[n],o=Object(g.createStore)(q,e,t(g.applyMiddleware.apply(void 0,r)));return o.runSaga=n.run,o.close=function(){return o.dispatch(v.END)},o},_=n(2),O=n.n(_),j=n(3),C=n(22),T=n.n(C),R=O.a.mark(P),A=O.a.mark(D),B=function(){return T()("https://api.github.com/gists").then(function(e){return e.ok?e.json():function(){throw"error"}})};function P(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(j.call)(B);case 3:return e=t.sent,t.next=6,Object(j.put)({type:x.c,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(j.put)({type:x.a,payload:t.t0});case 12:case"end":return t.stop()}},R,null,[[0,8]])}function D(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.takeEvery)(x.b,P);case 2:case"end":return e.stop()}},A)}var N=O.a.mark(F);function F(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.all)([Object(j.fork)(D)]);case 2:case"end":return e.stop()}},N)}var H=n(13),L=n.n(H),M=n(14),z=n.n(M),U=n(15),W=n.n(U),I=n(16),V=n.n(I),X=n(17),J=n.n(X),Q=function(){return u.a.createElement("nav",null,u.a.createElement("ul",null,u.a.createElement(l.Link,{to:"/"},u.a.createElement("li",null,"Home")),u.a.createElement(l.Link,{to:"/foo"},u.a.createElement("li",null,"Foo")),u.a.createElement(l.Link,{to:"/bar"},u.a.createElement("li",null,"Bar"))))},Y=n(9),G=n(23),K=n.n(G),Z=n(24),$=n.n(Z),ee=n(25),te=n.n(ee),ne=n(26),re=n.n(ne),oe=n(27),ae=n.n(oe),ce=u.a.Fragment,ie=function(e){function t(){return L()(this,t),W()(this,V()(t).apply(this,arguments))}return J()(t,e),z()(t,[{key:"componentDidMount",value:function(){process.env.IS_BROWSER&&"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("assets/web/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})}},{key:"render",value:function(){return u.a.createElement(ce,null,u.a.createElement(f.Helmet,null,u.a.createElement("title",null,"Custom Bow Equipment"),u.a.createElement("link",{rel:"shortcut icon",href:K.a}),u.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:re.a}),u.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:te.a}),u.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:$.a}),u.a.createElement("link",{rel:"mask-icon",href:ae.a,color:"#5bbad5"}),u.a.createElement("link",{rel:"canonical",href:"https://custombowequipment.com/"}),u.a.createElement("meta",{name:"description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),u.a.createElement("meta",{property:"fb:app_id",content:"711769165659880"}),u.a.createElement("meta",{property:"og:type",content:"website"}),u.a.createElement("meta",{property:"og:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),u.a.createElement("meta",{property:"og:image",content:""}),u.a.createElement("meta",{property:"og:image:secure_url",content:""}),u.a.createElement("meta",{property:"og:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),u.a.createElement("meta",{property:"og:url",content:"https://custombowequipment.com/"}),u.a.createElement("meta",{property:"og:site_name",content:"Custom Bow Equipment"}),u.a.createElement("meta",{name:"twitter:card",content:"summary"}),u.a.createElement("meta",{name:"twitter:title",content:"Archery Bow Hunting Sights, Target Sights, Stabilizers, & Accessories"}),u.a.createElement("meta",{name:"twitter:description",content:"Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand."}),u.a.createElement("meta",{name:"twitter:image",content:""}),u.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})),u.a.createElement(Q,null),u.a.createElement("main",{id:"main-content"},u.a.createElement(l.Switch,null,u.a.createElement(l.Route,{exact:!0,path:"/",component:function(){return u.a.createElement(Y.c,null)}}),u.a.createElement(l.Route,{path:"/foo",component:function(){return u.a.createElement(Y.b,null)}}),u.a.createElement(l.Route,{path:"/bar",component:function(){return u.a.createElement(Y.a,null)}}))))}}]),t}(i.Component),ue=new o.a;ue.use("/assets/node",o.a.static("dist/node")),ue.use("/assets/web",o.a.static("dist/web"));var se=k({}),le=function(){var e=c.a.resolve(__dirname,"../web/loadable-stats.json");return new m.ChunkExtractor({statsFile:e})},pe=function(e){return t=fe(e),n=JSON.stringify(se.getState()),r=le(),o=f.Helmet.renderStatic(),"\n    <!DOCTYPE html>\n      <html>\n        <head>\n          ".concat(o.title.toString(),"\n          ").concat(o.link.toString(),"\n          ").concat(o.meta.toString(),'\n        </head>\n        <body>\n          <div id="app">').concat(t,"</div>\n        </body>\n        <script>window.__PRELOADED_STATE__ = ").concat(h()(n).replace(/</g,"\\x3c"),"<\/script>\n        ").concat(r.getScriptTags(),"\n      </html>\n  ");var t,n,r,o},fe=function(e){var t={},n=le().collectChunks(u.a.createElement(p.Provider,{store:se},u.a.createElement(l.StaticRouter,{location:e.url,context:t},u.a.createElement(ie,null))));if(!t.url)return Object(s.renderToString)(n);res.redirect(t.url)};ue.get("*",function(e,t){se.runSaga(F).toPromise().then(function(){return t.status(200).send(pe(e))}).catch(function(e){return t.status(500).send(e.message)}),pe(e),se.close()}),ue.listen(process.env.PORT||3e3,function(e){e?console.error("error occurred: ",e):console.info("SERVER HAS STARTED.")})}]);