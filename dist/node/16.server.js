exports.ids=[16],exports.modules={25:function(e,n,t){"use strict";t.r(n);var r=t(41),o=t.n(r),i=t(48),u=t.n(i),c=t(0),a=t.n(c),l=t(6),f=t.n(l),s=t(5),m=t.n(s),d=t(13),h=t.n(d),v=t(44),T=t.n(v),y=t(60),F=t(3),g=t(42),b=t.n(g),p=t(56),w=t(81),E=t.n(w),M=m()({chunkName:function(){return"assets-images-logo"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(8).then(t.bind(null,63))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 63}}),k=m()({chunkName:function(){return"assets-images-secondary-menu-icon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(9).then(t.bind(null,64))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 64}}),S=m()({chunkName:function(){return"MainList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,61))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 61}}),O=m()({chunkName:function(){return"InfoPanelOpenList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(4).then(t.bind(null,65))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 65}}),j=function(e){var n=Object(c.useState)("dark"),r=o()(n,2),i=r[0],u=(r[1],Object(c.useState)(!1)),f=o()(u,2),s=f[0],m=f[1],d=Object(c.useState)(!1),h=o()(d,2),v=h[0],F=h[1],b=(Object(c.createRef)(),Object(c.createRef)()),p=Object(c.createRef)(),w=Object(c.createRef)();Object(c.useEffect)(function(){t(43);e.openMoreInfoPanel?function(){var n=document.getElementById(e.elMatchForScrolling);if(n&&null!==n){var t=new g.TimelineMax;t.to(window,1,{scrollTo:{y:n.children[1]}}).to(p.current,1,{y:"-100"}).add(function(){return m(!s)}).to(p.current,1,{y:"0"}).to(b.current,1,{backgroundColor:"#fff"}).add(function(){return t=void 0})}}(e.openMoreInfoPanel):function(){var n=document.getElementById(e.elMatchForScrolling);if(n&&null!==n){var t=new g.TimelineMax;t.to(window,1,{scrollTo:{y:n}}).to(p.current,1,{y:"-100"}).add(function(){return m(!s)}).to(p.current,1,{y:"0"}).to(b.current,1,{backgroundColor:"none"}).add(function(){return e.setIdMatchForParentContainer(null)}).add(function(){return t=void 0})}}()},[e.elMatchForScrolling,e.openMoreInfoPanel]),Object(c.useEffect)(function(){var e=b.current.getBoundingClientRect();console.log("main nav height: ",e.bottom-e.top);var n=function(){return Object(y.a)()?F(!1):F(!0)},t=T()(n,500);n(),window.addEventListener("resize",t)}),Object(c.useEffect)(function(){},[e.mainNavThemeColor]);var E=function(){return a.a.createElement("nav",null,a.a.createElement("ul",{ref:p},s&&v?a.a.createElement(O,{colorTheme:i}):a.a.createElement(S,{colorTheme:i})))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{ref:b,id:"main-nav-container"},a.a.createElement(l.Link,{id:"home-link",to:"/"},a.a.createElement(M,{colorTheme:i})),v?E():null,a.a.createElement(l.Link,{id:"shop",to:"/cart"},a.a.createElement("span",{ref:w},"Cart"))),a.a.createElement("div",{id:"secondary-menu-icon-wrapper"},a.a.createElement(k,{colorTheme:i})))},x=function(e){var n=e.sharedUiState;return{mainNavThemeColor:n.mainNavThemeColor,openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(d.connect)(x,{setIdMatchForParentContainer:F.q})(j)},56:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"d",function(){return i}),t.d(n,"b",function(){return u}),t.d(n,"f",function(){return c}),t.d(n,"g",function(){return a}),t.d(n,"e",function(){return l}),t.d(n,"c",function(){return f});var r=t(42);if(process.env.IS_BROWSER){t(45),t(46);t(43)}var o=function(e,n,t){return new r.TimelineMax({paused:!0}).fromTo(e,.5,{x:0,y:0},{x:0,y:7}).fromTo(t,.5,{x:0,y:0},{x:0,y:-7},"-=0.5").fromTo(e,.5,{rotation:0},{rotation:45}).fromTo(t,.5,{rotation:0},{rotation:-45},"-=0.5").fromTo(n,.5,{autoAlpha:1},{autoAlpha:0},"-=1")},i=function(e){return new r.TimelineMax({paused:!0}).fromTo(e,1,{right:"-100%"},{right:"0%"})},u=function(e){TweenMax.fromTo(e,1,{bottom:"1%",repeat:-1,yoyo:!0},{bottom:"0%",repeat:-1,yoyo:!0})},c=function(e,n){"light"===e?TweenLite.fromTo(n,1,{color:"#000"},{color:"#fff"}):TweenLite.fromTo(n,1,{color:"#FFF"},{color:"#000"})},a=function(e,n){"light"===e?TweenLite.fromTo(n,1,{stroke:"#000"},{stroke:"#fff"}):TweenLite.fromTo(n,1,{stroke:"#FFF"},{stroke:"#000"})},l=function(e,n){"light"===e?TweenLite.fromTo(n,1,{fill:"#000"},{fill:"#fff"}):TweenLite.fromTo(n,1,{fill:"#FFF"},{fill:"#000"})},f=function(e,n,t){var o=new r.TimelineMax({paused:!0});return"light"===e?o.fromTo(n,.25,{fill:"none"},{fill:"#000"}).fromTo(t,.25,{stroke:"#000"},{stroke:"#FFF"},"-=0.25"):o.fromTo(n,.25,{fill:"none"},{fill:"#FFF"}).fromTo(t,.25,{stroke:"#FFF"},{stroke:"#000"},"-=0.25"),o}},60:function(e,n,t){"use strict";n.a=function(){return window.innerWidth<=768}},81:function(e,n,t){}};