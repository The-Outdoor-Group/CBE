!function(e){var n={},t={3:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(n){if(0!==t[n]){var r=require("./"+n+".server.js"),o=r.modules,u=r.ids;for(var c in o)e[c]=o[c];for(var i=0;i<u.length;i++)t[u[i]]=0}return Promise.all([])},r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/assets/node/",r.oe=function(e){process.nextTick(function(){throw e})},r(r.s=14)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("redux")},function(e,n){e.exports=require("express")},function(e,n,t){"use strict";t.d(n,"c",function(){return u}),t.d(n,"b",function(){return c}),t.d(n,"a",function(){return i});var r=t(6),o=t.n(r),u=o()({chunkName:function(){return"containers-App-old"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(2).then(t.bind(null,11))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 11}}),c=o()({chunkName:function(){return"components-Foo"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,12))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 12}}),i=o()({chunkName:function(){return"components-Bar"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(0).then(t.bind(null,13))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 13}})},function(e,n){e.exports=require("@loadable/component")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("@loadable/server")},function(e,n){e.exports=require("redux-thunk")},,,,function(e,n,t){t(15),t(17)},function(e,n){e.exports=require("@babel/register")},function(e,n){e.exports=require("babel-polyfill")},function(e,n,t){"use strict";t.r(n);var r=t(4),o=t.n(r),u=t(2),c=t.n(u),i=t(0),a=t.n(i),l=t(7),s=t(1),f=t(8),d=t(9),p=t(3),m=t(10),v=t.n(m),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_COUNTER":return n.payload;case"INCREMENT_COUNTER":return e+1;case"DECREMENT_COUNTER":return e-1;default:return e}},h=Object(p.combineReducers)({counter:b}),E=function(e){return Object(p.createStore)(h,e,Object(p.applyMiddleware)(v.a))},y=function(){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement(s.Link,{to:"/"},a.a.createElement("li",null,"Home")),a.a.createElement(s.Link,{to:"/foo"},a.a.createElement("li",null,"Foo")),a.a.createElement(s.Link,{to:"/bar"},a.a.createElement("li",null,"Bar"))))},x=t(5),g=a.a.Fragment,q=function(){return a.a.createElement(g,null,a.a.createElement(y,null),a.a.createElement("main",{id:"main-content"},a.a.createElement(s.Switch,null,a.a.createElement(s.Route,{exact:!0,path:"/",component:function(){return a.a.createElement(x.c,null)}}),a.a.createElement(s.Route,{path:"/foo",component:function(){return a.a.createElement(x.b,null)}}),a.a.createElement(s.Route,{path:"/bar",component:function(){return a.a.createElement(x.a,null)}}))))};function O(e,n,t,r,o,u,c){try{var i=e[u](c),a=i.value}catch(e){return void t(e)}i.done?n(a):Promise.resolve(a).then(r,o)}t(16);var _=new o.a;_.use("/assets/node",o.a.static("dist/node")),_.use("/assets/web",o.a.static("dist/web"));var R={counter:0},S=E(R),w=(c.a.resolve(__dirname,"../node/loadable-stats.json"),c.a.resolve(__dirname,"../web/loadable-stats.json")),T=new d.ChunkExtractor({statsFile:w});_.get("*",function(){var e,n=(e=regeneratorRuntime.mark(function e(n,t){var r,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.url,r={},o=T.collectChunks(a.a.createElement(f.Provider,{store:S},a.a.createElement(s.StaticRouter,{location:n.url,context:r},a.a.createElement(q,null)))),u=Object(l.renderToString)(o),t.set("content-type","text/html"),t.send('\n    <!DOCTYPE html>\n      <html>\n        <head>\n          <title>Universal Example</title>\n        </head>\n        <body>\n          <div id="app">'.concat(u,"</div>\n        </body>\n        <script>window.__PRELOADED_STATE__ = ").concat(JSON.stringify(R).replace(/</g,"\\x3c"),"<\/script>\n        ").concat(T.getScriptTags(),"\n      </html>\n    "));case 6:case"end":return e.stop()}},e)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var u=e.apply(n,t);function c(e){O(u,r,o,c,i,"next",e)}function i(e){O(u,r,o,c,i,"throw",e)}c(void 0)})});return function(e,t){return n.apply(this,arguments)}}()),_.listen(3e3,function(e){e?console.error("error occurred: ",e):console.info("LISTENING ON PORT: ".concat(3e3,"."))})}]);