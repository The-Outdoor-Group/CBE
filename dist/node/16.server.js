exports.ids=[16],exports.modules={25:function(e,n,t){"use strict";t.r(n);var r=t(41),o=t.n(r),i=t(48),c=t.n(i),u=t(0),a=t.n(u),l=t(6),f=t.n(l),s=t(5),m=t.n(s),h=t(13),d=t.n(h),v=t(44),T=t.n(v),F=t(60),p=t(3),y=t(42),g=t.n(y),b=t(56),E=t(81),M=t.n(E),k=m()({chunkName:function(){return"assets-images-logo"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(8).then(t.bind(null,63))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 63}}),w=m()({chunkName:function(){return"assets-images-secondary-menu-icon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(9).then(t.bind(null,64))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 64}}),O=m()({chunkName:function(){return"MainList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,61))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 61}}),S=m()({chunkName:function(){return"InfoPanelOpenList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(4).then(t.bind(null,65))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 65}}),j=function(e){var n=Object(u.useState)("dark"),r=o()(n,2),i=r[0],c=(r[1],Object(u.useState)(!1)),f=o()(c,2),s=f[0],m=(f[1],Object(u.useState)(!1)),h=o()(m,2),d=h[0],v=h[1],p=(Object(u.createRef)(),Object(u.createRef)()),y=Object(u.createRef)(),g=Object(u.createRef)();Object(u.useEffect)(function(){t(43),console.log("effect launched");e.openMoreInfoPanel?(e.openMoreInfoPanel,console.log("openMoreInfo")):(console.log("closeMoreInfo"),e.setIdMatchForParentContainer(null))},[e.elMatchForScrolling,e.openMoreInfoPanel]),Object(u.useEffect)(function(){var e=p.current.getBoundingClientRect();console.log("main nav height: ",e.bottom-e.top);var n=function(){return Object(F.a)()?v(!1):v(!0)},t=T()(n,500);n(),window.addEventListener("resize",t)}),Object(u.useEffect)(function(){},[e.mainNavThemeColor]);var b=function(){return a.a.createElement("nav",null,a.a.createElement("ul",{ref:y},s&&d?a.a.createElement(S,{colorTheme:i}):a.a.createElement(O,{colorTheme:i})))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{ref:p,id:"main-nav-container"},a.a.createElement(l.Link,{id:"home-link",to:"/"},a.a.createElement(k,{colorTheme:i})),d?b():null,a.a.createElement(l.Link,{id:"shop",to:"/cart"},a.a.createElement("span",{ref:g},"Cart"))),a.a.createElement("div",{id:"secondary-menu-icon-wrapper"},a.a.createElement(w,{colorTheme:i})))},I=function(e){var n=e.sharedUiState;return{mainNavThemeColor:n.mainNavThemeColor,openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(h.connect)(I,{setIdMatchForParentContainer:p.q})(j)},56:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"d",function(){return i}),t.d(n,"b",function(){return c}),t.d(n,"f",function(){return u}),t.d(n,"g",function(){return a}),t.d(n,"e",function(){return l}),t.d(n,"c",function(){return f});var r=t(42);if(process.env.IS_BROWSER){t(45),t(46);t(43)}var o=function(e,n,t){return new r.TimelineMax({paused:!0}).fromTo(e,.5,{x:0,y:0},{x:0,y:7}).fromTo(t,.5,{x:0,y:0},{x:0,y:-7},"-=0.5").fromTo(e,.5,{rotation:0},{rotation:45}).fromTo(t,.5,{rotation:0},{rotation:-45},"-=0.5").fromTo(n,.5,{autoAlpha:1},{autoAlpha:0},"-=1")},i=function(e){return new r.TimelineMax({paused:!0}).fromTo(e,1,{right:"-100%"},{right:"0%"})},c=function(e){TweenMax.fromTo(e,1,{bottom:"1%",repeat:-1,yoyo:!0},{bottom:"0%",repeat:-1,yoyo:!0})},u=function(e,n){"light"===e?TweenLite.fromTo(n,1,{color:"#000"},{color:"#fff"}):TweenLite.fromTo(n,1,{color:"#FFF"},{color:"#000"})},a=function(e,n){"light"===e?TweenLite.fromTo(n,1,{stroke:"#000"},{stroke:"#fff"}):TweenLite.fromTo(n,1,{stroke:"#FFF"},{stroke:"#000"})},l=function(e,n){"light"===e?TweenLite.fromTo(n,1,{fill:"#000"},{fill:"#fff"}):TweenLite.fromTo(n,1,{fill:"#FFF"},{fill:"#000"})},f=function(e,n,t){var o=new r.TimelineMax({paused:!0});return"light"===e?o.fromTo(n,.25,{fill:"none"},{fill:"#000"}).fromTo(t,.25,{stroke:"#000"},{stroke:"#FFF"},"-=0.25"):o.fromTo(n,.25,{fill:"none"},{fill:"#FFF"}).fromTo(t,.25,{stroke:"#FFF"},{stroke:"#000"},"-=0.25"),o}},60:function(e,n,t){"use strict";n.a=function(){return window.innerWidth<=768}},81:function(e,n,t){}};