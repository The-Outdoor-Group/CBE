(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[18],{165:function(e,n,t){"use strict";t.r(n);var o=t(337),r=t.n(o),i=t(2),c=t.n(i),l=t(385),u=t(21),a=t(53),f=t(345),s=t.n(f),m=t(393),d=t(9),h=t(343),v=t(388),y=t(346),T=t.n(y),F=Object(u.a)({chunkName:function(){return"assets-images-logo"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,396))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function e(){return 396}}),g=Object(u.a)({chunkName:function(){return"assets-images-secondary-menu-icon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,397))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function e(){return 397}}),w=Object(u.a)({chunkName:function(){return"MainList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(3).then(t.bind(null,394))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function e(){return 394}}),b=Object(u.a)({chunkName:function(){return"InfoPanelOpenList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(6).then(t.bind(null,398))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function e(){return 398}}),E=function(e){var n=Object(i.useState)("dark"),o=r()(n,2),u=o[0],a=(o[1],Object(i.useState)(null)),f=r()(a,2),d=f[0],y=f[1],T=Object(i.useState)(!1),E=r()(T,2),M=E[0],p=E[1],O=Object(i.createRef)(),S=Object(i.createRef)();Object(i.useEffect)(function(){t(344);!0===e.openMoreInfoPanel&&null!==e.elMatchForScrolling?function(n){y(n),console.log("openMoreInfo elMatchForScrolling after state: ",n);var t=document.getElementById(n);if(null!==t){var o=new h.a;o.to(window,1,{scrollTo:{y:t.children[1]}}).to(S.current,1,{y:"-100"}).add(function(){return e.setMoreInfoPanelVisibility(!0)}).to(S.current,1,{y:"0"}).to(O.current,1,{backgroundColor:"#fff"}).add(function(){return o=void 0})}}(e.elMatchForScrolling):!0===e.openMoreInfoPanel&&null===e.elMatchForScrolling?e.setMoreInfoPanelVisibility(!1):function(){console.log("oldElMatchForScrolling: ",d);var e=document.getElementById(d);if(null!==e){var n=new h.a;n.to(window,1,{scrollTo:{y:e}}).to(S.current,1,{y:"-100"}).to(S.current,1,{y:"0"}).to(O.current,1,{backgroundColor:"none"}).add(function(){return n=void 0})}}()},[e.elMatchForScrolling,e.openMoreInfoPanel,e.setIdMatchForParentContainer]),Object(i.useEffect)(function(){var e=O.current.getBoundingClientRect();console.log("main nav height: ",e.bottom-e.top);var n=function(){return Object(m.a)()?p(!1):p(!0)},t=s()(n,500);return n(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),Object(i.useEffect)(function(){var n,t=[];n=e.mainNavThemeColor,M&&Array.from(O.current.children).forEach(function(e){return t.push(e.children[0])}),t.length>0&&Object(v.h)(n,t)},[e.mainNavThemeColor]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{ref:O,id:"main-nav-container"},c.a.createElement(l.a,{id:"home-link",to:"/"},c.a.createElement(F,{colorTheme:e.mainNavThemeColor})),c.a.createElement("nav",null,c.a.createElement("ul",{ref:S},e.openMoreInfoPanel&&null!==e.elMatchForScrolling?c.a.createElement(b,{colorTheme:u}):c.a.createElement(w,{colorTheme:e.mainNavThemeColor,showAllLinks:M}))),c.a.createElement("div",{id:"secondary-menu-icon-wrapper"},c.a.createElement(g,{colorTheme:e.mainNavThemeColor}))))},M=function(e){var n=e.sharedUiState;return{mainNavThemeColor:n.mainNavThemeColor,openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(a.b)(M,{setIdMatchForParentContainer:d.q,setMoreInfoPanelVisibility:d.s})(E)},388:function(e,n,t){"use strict";t.d(n,"e",function(){return r}),t.d(n,"a",function(){return i}),t.d(n,"b",function(){return c}),t.d(n,"f",function(){return l}),t.d(n,"c",function(){return u}),t.d(n,"h",function(){return a}),t.d(n,"i",function(){return f}),t.d(n,"g",function(){return s}),t.d(n,"d",function(){return m});var o=t(343);t(0),t(72);t(344);var r=function(e){return console.log("el in scrollToTopOfSection: ",e),(new o.a).to(window,.5,{scrollTo:{y:e}})},i=function(e,n,t){return new o.a({paused:!0}).to(e,.5,{x:0,y:7}).to(t,.5,{x:0,y:-7},"-=0.5").to(e,.5,{rotation:45}).to(t,.5,{rotation:-45},"-=0.5").to(n,.5,{autoAlpha:0},"-=1")},c=function(e,n,t){return new o.a({paused:!0}).to(e,.5,{rotation:0}).to(t,.5,{rotation:0},"-=0.5").to(e,.5,{x:0,y:0}).to(t,.5,{x:0,y:0},"-=0.5").to(n,.5,{autoAlpha:1},"-=1")},l=function(e){return new o.a({paused:!0}).fromTo(e,1,{right:"-100%"},{right:"0%"})},u=function(e){TweenMax.fromTo(e,1,{bottom:"1%",repeat:-1,yoyo:!0},{bottom:"0%",repeat:-1,yoyo:!0})},a=function(e,n){"light"===e?TweenLite.fromTo(n,1,{color:"#000"},{color:"#FFF"}):TweenLite.fromTo(n,1,{color:"#FFF"},{color:"#000"})},f=function(e,n){"light"===e?TweenLite.fromTo(n,1,{stroke:"#000"},{stroke:"#fff"}):TweenLite.fromTo(n,1,{stroke:"#FFF"},{stroke:"#000"})},s=function(e,n){"light"===e?TweenLite.fromTo(n,1,{fill:"#000"},{fill:"#fff"}):TweenLite.fromTo(n,1,{fill:"#FFF"},{fill:"#000"})},m=function(e,n,t){var r=new o.a({paused:!0});return"light"===e?r.fromTo(n,.25,{fill:"none"},{fill:"#000"}).fromTo(t,.25,{stroke:"#000"},{stroke:"#FFF"},"-=0.25"):r.fromTo(n,.25,{fill:"none"},{fill:"#FFF"}).fromTo(t,.25,{stroke:"#FFF"},{stroke:"#000"},"-=0.25"),r}},393:function(e,n,t){"use strict";n.a=function(){return window.innerWidth<=768}}}]);