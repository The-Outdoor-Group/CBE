exports.ids=[17],exports.modules={26:function(e,n,t){"use strict";t.r(n);var r=t(36),o=t.n(r),i=t(0),a=t.n(i),l=t(13),u=t.n(l),c=t(6),f=t.n(c),s=t(5),m=t.n(s),d=t(59),T=t(44),E=t.n(T),h=t(55),F=t(81),v=t.n(F),w=m()({chunkName:function(){return"main-nav-MainList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,60))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 60}}),y=function(e){var n=Object(i.useState)(!1),t=o()(n,2),r=t[0],l=t[1],u=Object(i.createRef)();Object(i.useEffect)(function(){var n=Object(h.e)(u.current);e.sharedUiState.secondaryMenuVisible?n.play():n.reverse()},[e.sharedUiState.secondaryMenuVisible]),Object(i.useEffect)(function(){var e=E()(function(){return Object(d.a)()?l(!0):l(!1)},500);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}});e.sharedUiState.secondaryMenuVisible;return a.a.createElement("div",{ref:u,id:"main-secondary-menu"},a.a.createElement("nav",null,a.a.createElement("ul",null,r?a.a.createElement(w,{colorTheme:"dark"}):null,a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/contact-cbe"},"Contact CBE")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/shop/apparel"},"Apparel")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/dealers"},"Locate Dealers")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/contingency"},"Contingency")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/videos"},"Videos")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/news"},"News")))))},p=function(e){return{sharedUiState:e.sharedUiState}};n.default=Object(l.connect)(p,null)(y)},55:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i}),t.d(n,"e",function(){return a}),t.d(n,"c",function(){return l}),t.d(n,"g",function(){return u}),t.d(n,"h",function(){return c}),t.d(n,"f",function(){return f}),t.d(n,"d",function(){return s});var r=t(42);if(process.env.IS_BROWSER){t(45),t(46);t(43)}var o=function(e,n,t){return new r.TimelineMax({paused:!0}).to(e,.5,{x:0,y:7}).to(t,.5,{x:0,y:-7},"-=0.5").to(e,.5,{rotation:45}).to(t,.5,{rotation:-45},"-=0.5").to(n,.5,{autoAlpha:0},"-=1")},i=function(e,n,t){return new r.TimelineMax({paused:!0}).to(e,.5,{rotation:0}).to(t,.5,{rotation:0},"-=0.5").to(e,.5,{x:0,y:0}).to(t,.5,{x:0,y:0},"-=0.5").to(n,.5,{autoAlpha:1},"-=1")},a=function(e){return new r.TimelineMax({paused:!0}).fromTo(e,1,{right:"-100%"},{right:"0%"})},l=function(e){TweenMax.fromTo(e,1,{bottom:"1%",repeat:-1,yoyo:!0},{bottom:"0%",repeat:-1,yoyo:!0})},u=function(e,n){"light"===e?TweenLite.fromTo(n,1,{color:"#000"},{color:"#FFF"}):TweenLite.fromTo(n,1,{color:"#FFF"},{color:"#000"})},c=function(e,n){"light"===e?TweenLite.fromTo(n,1,{stroke:"#000"},{stroke:"#fff"}):TweenLite.fromTo(n,1,{stroke:"#FFF"},{stroke:"#000"})},f=function(e,n){"light"===e?TweenLite.fromTo(n,1,{fill:"#000"},{fill:"#fff"}):TweenLite.fromTo(n,1,{fill:"#FFF"},{fill:"#000"})},s=function(e,n,t){var o=new r.TimelineMax({paused:!0});return"light"===e?o.fromTo(n,.25,{fill:"none"},{fill:"#000"}).fromTo(t,.25,{stroke:"#000"},{stroke:"#FFF"},"-=0.25"):o.fromTo(n,.25,{fill:"none"},{fill:"#FFF"}).fromTo(t,.25,{stroke:"#FFF"},{stroke:"#000"},"-=0.25"),o}},59:function(e,n,t){"use strict";n.a=function(){return window.innerWidth<=768}},81:function(e,n,t){}};