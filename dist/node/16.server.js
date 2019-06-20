exports.ids=[16],exports.modules={25:function(e,n,t){"use strict";t.r(n);var r=t(36),o=t.n(r),i=t(0),l=t.n(i),u=t(5),c=t.n(u),a=t(4),f=t.n(a),s=t(8),m=t.n(s),d=t(44),h=t.n(d),v=t(59),T=t(3),y=t(42),F=t.n(y),g=t(54),M=t(80),w=t.n(M),b=f()({chunkName:function(){return"assets-images-logo"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(8).then(t.bind(null,62))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 62}}),p=f()({chunkName:function(){return"assets-images-secondary-menu-icon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(9).then(t.bind(null,63))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 63}}),E=f()({chunkName:function(){return"MainList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,60))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 60}}),k=f()({chunkName:function(){return"InfoPanelOpenList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(4).then(t.bind(null,64))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 64}}),S=function(e){var n=Object(i.useState)("dark"),r=o()(n,2),c=r[0],a=(r[1],Object(i.useState)(null)),f=o()(a,2),s=f[0],m=f[1],d=Object(i.useState)(!1),T=o()(d,2),F=T[0],M=T[1],w=Object(i.createRef)(),S=Object(i.createRef)();Object(i.useEffect)(function(){t(43);!0===e.openMoreInfoPanel&&null!==e.elMatchForScrolling?function(n){m(n);var t=document.getElementById(n);if(null!==t){var r=new y.TimelineMax;r.to(window,1,{scrollTo:{y:t.children[1]}}).to(S.current,1,{y:"-100"}).add(function(){return e.setMoreInfoPanelVisibility(!0)}).to(S.current,1,{y:"0"}).to(w.current,1,{backgroundColor:"#fff"}).add(function(){return r=void 0})}}(e.elMatchForScrolling):!0===e.openMoreInfoPanel&&null===e.elMatchForScrolling?e.setMoreInfoPanelVisibility(!1):function(){console.log("oldElMatchForScrolling: ",s);var e=document.getElementById(s);if(null!==e){var n=new y.TimelineMax;n.to(window,1,{scrollTo:{y:e}}).to(S.current,1,{y:"-100"}).to(S.current,1,{y:"0"}).to(w.current,1,{backgroundColor:"none"}).add(function(){return n=void 0})}}()},[e.elMatchForScrolling,e.openMoreInfoPanel,e.setIdMatchForParentContainer]),Object(i.useEffect)(function(){var e=w.current.getBoundingClientRect();console.log("main nav height: ",e.bottom-e.top);var n=function(){return Object(v.a)()?M(!1):M(!0)},t=h()(n,500);return n(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),Object(i.useEffect)(function(){var n,t=[];n=e.mainNavThemeColor,F&&Array.from(w.current.children).forEach(function(e){return t.push(e.children[0])}),t.length>0&&Object(g.h)(n,t)},[e.mainNavThemeColor]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{ref:w,id:"main-nav-container"},l.a.createElement(u.Link,{id:"home-link",to:"/",onClick:function(){return e.setMainUrl("/")}},l.a.createElement(b,{colorTheme:e.mainNavThemeColor})),l.a.createElement("nav",null,l.a.createElement("ul",{ref:S},e.openMoreInfoPanel&&null!==e.elMatchForScrolling?l.a.createElement(k,{colorTheme:c}):l.a.createElement(E,{colorTheme:e.mainNavThemeColor,showAllLinks:F}))),l.a.createElement("div",{id:"secondary-menu-icon-wrapper"},l.a.createElement(p,{colorTheme:e.mainNavThemeColor}))))},I=function(e){var n=e.sharedUiState;return{mainNavThemeColor:n.mainNavThemeColor,openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(s.connect)(I,{setIdMatchForParentContainer:T.s,setMoreInfoPanelVisibility:T.v,setMainUrl:T.u})(S)},54:function(e,n,t){"use strict";t.d(n,"e",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"b",function(){return l}),t.d(n,"f",function(){return u}),t.d(n,"c",function(){return c}),t.d(n,"h",function(){return a}),t.d(n,"i",function(){return f}),t.d(n,"g",function(){return s}),t.d(n,"d",function(){return m});var r=t(42);if(process.env.IS_BROWSER){t(45),t(46);t(43)}var o=function(e){return console.log("el in scrollToTopOfSection: ",e),(new r.TimelineMax).to(window,.5,{scrollTo:{y:e}})},i=function(e,n,t){return new r.TimelineMax({paused:!0}).to(e,.5,{x:0,y:7}).to(t,.5,{x:0,y:-7},"-=0.5").to(e,.5,{rotation:45}).to(t,.5,{rotation:-45},"-=0.5").to(n,.5,{autoAlpha:0},"-=1")},l=function(e,n,t){return new r.TimelineMax({paused:!0}).to(e,.5,{rotation:0}).to(t,.5,{rotation:0},"-=0.5").to(e,.5,{x:0,y:0}).to(t,.5,{x:0,y:0},"-=0.5").to(n,.5,{autoAlpha:1},"-=1")},u=function(e){return new r.TimelineMax({paused:!0}).fromTo(e,1,{right:"-100%"},{right:"0%"})},c=function(e){TweenMax.fromTo(e,1,{bottom:"1%",repeat:-1,yoyo:!0},{bottom:"0%",repeat:-1,yoyo:!0})},a=function(e,n){"light"===e?TweenLite.fromTo(n,1,{color:"#000"},{color:"#FFF"}):TweenLite.fromTo(n,1,{color:"#FFF"},{color:"#000"})},f=function(e,n){"light"===e?TweenLite.fromTo(n,1,{stroke:"#000"},{stroke:"#fff"}):TweenLite.fromTo(n,1,{stroke:"#FFF"},{stroke:"#000"})},s=function(e,n){"light"===e?TweenLite.fromTo(n,1,{fill:"#000"},{fill:"#fff"}):TweenLite.fromTo(n,1,{fill:"#FFF"},{fill:"#000"})},m=function(e,n,t){var o=new r.TimelineMax({paused:!0});return"light"===e?o.fromTo(n,.25,{fill:"none"},{fill:"#000"}).fromTo(t,.25,{stroke:"#000"},{stroke:"#FFF"},"-=0.25"):o.fromTo(n,.25,{fill:"none"},{fill:"#FFF"}).fromTo(t,.25,{stroke:"#FFF"},{stroke:"#000"},"-=0.25"),o}},59:function(e,n,t){"use strict";n.a=function(){return window.innerWidth<=768}},80:function(e,n,t){}};