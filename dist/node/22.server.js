exports.ids=[22],exports.modules={25:function(e,n,t){"use strict";t.r(n);var r=t(38),o=t.n(r),i=t(0),u=t.n(i),c=t(5),l=t.n(c),a=t(4),f=t.n(a),s=t(9),m=t.n(s),d=t(61),h=t(3),v=t(45),T=t.n(v),y=t(58),F=t(97),M=t.n(F),b=f()({chunkName:function(){return"assets-images-logo"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(9).then(t.bind(null,67))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 67}}),g=f()({chunkName:function(){return"assets-images-secondary-menu-icon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(10).then(t.bind(null,68))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 68}}),w=f()({chunkName:function(){return"MainList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(4).then(t.bind(null,69))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 69}}),S=f()({chunkName:function(){return"InfoPanelOpenList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(3).then(t.bind(null,70))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 70}}),p=function(e){var n,r=Object(i.useState)("dark"),l=o()(r,2),a=l[0],f=(l[1],Object(i.useState)(null)),s=o()(f,2),m=s[0],h=s[1],T=Object(i.useState)(null),F=o()(T,2),M=F[0],p=F[1],E=Object(i.createRef)(),k=Object(i.createRef)();process.env.IS_BROWSER&&(n=Object(d.a)(window)),Object(i.useEffect)(function(){null!==n&&p(!n)}),Object(i.useEffect)(function(){t(46);!0===e.openMoreInfoPanel&&null!==e.elMatchForScrolling?function(n){h(n);var t=document.getElementById(n);if(null!==t){var r=new v.TimelineMax;r.to(window,1,{scrollTo:{y:t.children[1]}}).to(k.current,1,{y:"-100"}).add(function(){return e.setMoreInfoPanelVisibility(!0)}).to(k.current,1,{y:"0"}).to(E.current,1,{backgroundColor:"#fff"}).add(function(){return r=void 0})}}(e.elMatchForScrolling):!0===e.openMoreInfoPanel&&null===e.elMatchForScrolling?e.setMoreInfoPanelVisibility(!1):function(){console.log("oldElMatchForScrolling: ",m);var e=document.getElementById(m);if(null!==e){var n=new v.TimelineMax;n.to(window,1,{scrollTo:{y:e}}).to(k.current,1,{y:"-100"}).to(k.current,1,{y:"0"}).to(E.current,1,{backgroundColor:"none"}).add(function(){return n=void 0})}}()},[e.elMatchForScrolling,e.openMoreInfoPanel,e.setIdMatchForParentContainer]),Object(i.useEffect)(function(){var n,t=[];n=e.mainNavThemeColor,M&&Array.from(E.current.children).forEach(function(e){return t.push(e.children[0])}),t.length>0&&Object(y.h)(n,t)},[e.mainNavThemeColor]);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{ref:E,id:"main-nav-container"},u.a.createElement(c.Link,{id:"home-link",to:"/",onClick:function(){return e.setMainUrl("/")}},u.a.createElement(b,{colorTheme:e.mainNavThemeColor})),u.a.createElement("nav",null,u.a.createElement("ul",{ref:k},e.openMoreInfoPanel&&null!==e.elMatchForScrolling?u.a.createElement(S,{colorTheme:a}):u.a.createElement(w,{colorTheme:e.mainNavThemeColor,showAllLinks:M}))),u.a.createElement("div",{id:"secondary-menu-icon-wrapper"},u.a.createElement(g,{colorTheme:e.mainNavThemeColor}))))},E=function(e){var n=e.sharedUiState;return{mainNavThemeColor:n.mainNavThemeColor,openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(s.connect)(E,{setIdMatchForParentContainer:h.s,setMoreInfoPanelVisibility:h.v,setMainUrl:h.u})(p)},58:function(e,n,t){"use strict";t.d(n,"e",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"b",function(){return u}),t.d(n,"f",function(){return c}),t.d(n,"c",function(){return l}),t.d(n,"h",function(){return a}),t.d(n,"i",function(){return f}),t.d(n,"g",function(){return s}),t.d(n,"d",function(){return m});var r=t(45);if(process.env.IS_BROWSER){t(47),t(48);t(46)}var o=function(e){return console.log("el in scrollToTopOfSection: ",e),(new r.TimelineMax).to(window,.5,{scrollTo:{y:e}})},i=function(e,n,t){return new r.TimelineMax({paused:!0}).to(e,.5,{x:0,y:7}).to(t,.5,{x:0,y:-7},"-=0.5").to(e,.5,{rotation:45}).to(t,.5,{rotation:-45},"-=0.5").to(n,.5,{autoAlpha:0},"-=1")},u=function(e,n,t){return new r.TimelineMax({paused:!0}).to(e,.5,{rotation:0}).to(t,.5,{rotation:0},"-=0.5").to(e,.5,{x:0,y:0}).to(t,.5,{x:0,y:0},"-=0.5").to(n,.5,{autoAlpha:1},"-=1")},c=function(e){return new r.TimelineMax({paused:!0}).fromTo(e,1,{right:"-100%"},{right:"0%"})},l=function(e){TweenMax.fromTo(e,1,{bottom:"1%",repeat:-1,yoyo:!0},{bottom:"0%",repeat:-1,yoyo:!0})},a=function(e,n){"light"===e?TweenLite.fromTo(n,1,{color:"#000"},{color:"#FFF"}):TweenLite.fromTo(n,1,{color:"#FFF"},{color:"#000"})},f=function(e,n){"light"===e?TweenLite.fromTo(n,1,{stroke:"#000"},{stroke:"#fff"}):TweenLite.fromTo(n,1,{stroke:"#FFF"},{stroke:"#000"})},s=function(e,n){"light"===e?TweenLite.fromTo(n,1,{fill:"#000"},{fill:"#fff"}):TweenLite.fromTo(n,1,{fill:"#FFF"},{fill:"#000"})},m=function(e,n,t){var o=new r.TimelineMax({paused:!0});return"light"===e?o.fromTo(n,.25,{fill:"none"},{fill:"#000"}).fromTo(t,.25,{stroke:"#000"},{stroke:"#FFF"},"-=0.25"):o.fromTo(n,.25,{fill:"none"},{fill:"#FFF"}).fromTo(t,.25,{stroke:"#FFF"},{stroke:"#000"},"-=0.25"),o}},61:function(e,n,t){"use strict";var r=t(38),o=t.n(r),i=t(44),u=t.n(i),c=function(){return window.innerWidth<=768},l=t(0);t.d(n,"a",function(){return a});var a=function(e){var n=Object(l.useState)(e),t=o()(n,2),r=t[0],i=(t[1],Object(l.useState)(r.innerWidth)),a=o()(i,2),f=a[0],s=a[1],m=Object(l.useState)(null),d=o()(m,2),h=d[0],v=d[1];return r.innerWidth!==f&&s(r.innerWidth),Object(l.useEffect)(function(){var e=function(){return v(!!c())},n=u()(e,500);return r.addEventListener("resize",n),e(),function(){return r.removeEventListener("resize",n)}}),h}},97:function(e,n,t){}};