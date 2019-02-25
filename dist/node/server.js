!function(e){var n={},t={1:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(n){if(0!==t[n]){var r=require("./"+n+".server.js"),o=r.modules,u=r.ids;for(var c in o)e[c]=o[c];for(var i=0;i<u.length;i++)t[u[i]]=0}return Promise.all([])},r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/assets/node",r.oe=function(e){process.nextTick(function(){throw e})},r(r.s=11)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("redux")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("redux-thunk")},function(e,n){e.exports=require("@loadable/server")},function(e,n,t){"use strict";var r=t(0),o=t.n(r),u=t(9),c=t.n(u),i=c()({chunkName:function(){return"OtherComponent"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(0).then(t.bind(null,10))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 10}}),a=function(e){var n=e.increment,t=e.decrement,r=e.counter;return o.a.createElement("div",null,o.a.createElement(i,null),o.a.createElement("div",null,"Clicked: ",r," times",o.a.createElement("button",{onClick:n},"+"),o.a.createElement("button",{onClick:t},"-")))};n.a=a},function(e,n){e.exports=require("@loadable/component")},,function(e,n,t){t(12),t(14)},function(e,n){e.exports=require("@babel/register")},function(e,n){e.exports=require("babel-polyfill")},function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"SET_COUNTER",function(){return v}),t.d(r,"INCREMENT_COUNTER",function(){return m}),t.d(r,"DECREMENT_COUNTER",function(){return E}),t.d(r,"set",function(){return y}),t.d(r,"increment",function(){return x}),t.d(r,"decrement",function(){return O});var o=t(4),u=t.n(o),c=t(2),i=t.n(c),a=t(0),s=t.n(a),l=t(5),f=t(3),d=t(1),p=t(6),b=t.n(p),v="SET_COUNTER",m="INCREMENT_COUNTER",E="DECREMENT_COUNTER",y=function(e){return{type:v,payload:e}},x=function(){return{type:m}},O=function(){return{type:E}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v:return n.payload;case m:return e+1;case E:return e-1;default:return e}},h=Object(d.combineReducers)({counter:T}),_=function(e){return Object(d.createStore)(h,e,Object(d.applyMiddleware)(b.a))},C=t(7),N=t(8),g=Object(f.connect)(function(e){return{counter:e.counter}},function(e){return Object(d.bindActionCreators)(r,e)})(N.a);t(13);var j=new u.a;j.use("/assets/node",u.a.static("dist/node")),j.use("/assets/web",u.a.static("dist/web"));var q={counter:0},R=_(q),S=(i.a.resolve(__dirname,"../node/loadable-stats.json"),i.a.resolve(__dirname,"../web/loadable-stats.json")),w=new C.ChunkExtractor({statsFile:S});j.get("*",function(e,n){var t=w.collectChunks(s.a.createElement(f.Provider,{store:R},s.a.createElement(g,null))),r=Object(l.renderToString)(t);n.set("content-type","text/html"),n.send('\n    <!DOCTYPE html>\n      <html>\n        <head>\n          <title>Universal Example</title>\n        </head>\n        <body>\n          <div id="app">'.concat(r,"</div>\n        </body>\n        <script>window.__PRELOADED_STATE__ = ").concat(JSON.stringify(q).replace(/</g,"\\x3c"),"<\/script>\n        ").concat(w.getScriptTags(),"\n      </html>\n    "))}),j.listen(3e3,function(e){e?console.error("error occurred: ",e):console.info("LISTENING ON PORT: ".concat(3e3,"."))})}]);