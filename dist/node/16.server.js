exports.ids=[16],exports.modules={30:function(e,n,t){"use strict";t.r(n);var o=t(13),r=t.n(o),i=t(14),a=t.n(i),l=t(15),u=t.n(l),s=t(16),c=t.n(s),h=t(41),f=t.n(h),m=t(17),d=t.n(m),v=t(0),T=t.n(v),p=t(6),y=t.n(p),M=t(5),g=t.n(M),w=t(18),k=t.n(w),F=t(44),E=t.n(F),b=t(59),N=t(42),C=t.n(N),R=t(55),L=t(80),S=t.n(L),I=g()({chunkName:function(){return"assets-images-logo"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(8).then(t.bind(null,62))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function(){return 62}}),x=g()({chunkName:function(){return"assets-images-secondary-menu-icon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(9).then(t.bind(null,63))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function(){return 63}}),z=g()({chunkName:function(){return"MainList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,60))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function(){return 60}}),A=g()({chunkName:function(){return"InfoPanelOpenList"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(4).then(t.bind(null,64))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function(){return 64}}),P=function(e){function n(){var e;return r()(this,n),(e=u()(this,c()(n).call(this))).elArray,e.nav,e.ul,e.shopLink,e.containerEl,e.debouncedResize,e.tl=new N.TimelineMax,e.changeNavColor=e.changeNavColor.bind(f()(e)),e.changeMenuContents=e.changeMenuContents.bind(f()(e)),e.handleResize=e.handleResize.bind(f()(e)),e.state={colorTheme:"dark",openMoreInfoPanel:!1,showMainNav:!1},e}return d()(n,e),a()(n,[{key:"componentDidMount",value:function(){var e=this.nav.getBoundingClientRect();console.log("main nav height: ",e.bottom-e.top),t(43),this.debouncedResize=E()(this.handleResize,500),this.handleResize(),window.addEventListener("resize",this.debouncedResize)}},{key:"componentDidUpdate",value:function(e,n){var t=e.mainNavThemeColor,o=this.props.mainNavThemeColor,r=this.state.showMainNav,i=e.openMoreInfoPanel,a=this.props.openMoreInfoPanel;t!==o&&this.changeNavColor(o),i!==a&&r&&this.changeMenuContents(a)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedResize)}},{key:"handleResize",value:function(){Object(b.a)()?this.setState({showMainNav:!1}):this.setState({showMainNav:!0})}},{key:"changeMenuContents",value:function(e){var n=this;this.containerEl=document.getElementById(this.props.elMatchForScrolling),e?this.tl.to(window,1,{scrollTo:{y:this.containerEl.children[1]}}).to(this.ul,1,{y:"-100"}).add(function(){return n.setState({openMoreInfoPanel:!n.state.openMoreInfoPanel})}).to(this.ul,1,{y:"0"}).to(this.nav,1,{backgroundColor:"#fff"}):this.tl.to(window,1,{scrollTo:{y:this.containerEl}}).to(this.ul,1,{y:"-100"}).add(function(){return n.setState({openMoreInfoPanel:!n.state.openMoreInfoPanel})}).to(this.ul,1,{y:"0"}).to(this.nav,1,{backgroundColor:"none"})}},{key:"changeNavColor",value:function(e){var n=this,t=this.state.showMainNav;this.elArray=[this.shopLink],t&&Array.from(this.ul.children).forEach(function(e){return n.elArray.push(e.children[0])}),Object(R.f)(e,this.elArray),this.setState({colorTheme:e})}},{key:"render",value:function(){var e=this,n=this.state,t=n.openMoreInfoPanel,o=n.showMainNav,r=n.colorTheme;console.log("showMainNav: ",o);var i=function(){return T.a.createElement("nav",null,T.a.createElement("ul",{ref:function(n){return e.ul=n}},t&&o?T.a.createElement(A,{colorTheme:r}):T.a.createElement(z,{colorTheme:r})))};return T.a.createElement(v.Fragment,null,T.a.createElement("div",{ref:function(n){return e.nav=n},id:"main-nav-container"},T.a.createElement(p.Link,{id:"home-link",to:"/"},T.a.createElement(I,{colorTheme:this.state.colorTheme})),o?i():null,T.a.createElement(p.Link,{id:"shop",to:"/cart"},T.a.createElement("span",{ref:function(n){return e.shopLink=n}},"Cart"))),T.a.createElement("div",{id:"secondary-menu-icon-wrapper"},T.a.createElement(x,{colorTheme:this.state.colorTheme})))}}]),n}(v.Component),q=function(e){var n=e.sharedUiState;return{mainNavThemeColor:n.mainNavThemeColor,openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(w.connect)(q)(P)},55:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"d",function(){return i}),t.d(n,"b",function(){return a}),t.d(n,"f",function(){return l}),t.d(n,"g",function(){return u}),t.d(n,"e",function(){return s}),t.d(n,"c",function(){return c});var o=t(42);if(process.env.IS_BROWSER){t(45),t(46);t(43)}var r=function(e,n,t){return new o.TimelineMax({paused:!0}).fromTo(e,.5,{x:0,y:0},{x:0,y:7}).fromTo(t,.5,{x:0,y:0},{x:0,y:-7},"-=0.5").fromTo(e,.5,{rotation:0},{rotation:45}).fromTo(t,.5,{rotation:0},{rotation:-45},"-=0.5").fromTo(n,.5,{autoAlpha:1},{autoAlpha:0},"-=1")},i=function(e){return new o.TimelineMax({paused:!0}).fromTo(e,1,{right:"-100%"},{right:"0%"})},a=function(e){TweenMax.fromTo(e,1,{bottom:"1%",repeat:-1,yoyo:!0},{bottom:"0%",repeat:-1,yoyo:!0})},l=function(e,n){"light"===e?TweenLite.fromTo(n,1,{color:"#000"},{color:"#fff"}):TweenLite.fromTo(n,1,{color:"#FFF"},{color:"#000"})},u=function(e,n){"light"===e?TweenLite.fromTo(n,1,{stroke:"#000"},{stroke:"#fff"}):TweenLite.fromTo(n,1,{stroke:"#FFF"},{stroke:"#000"})},s=function(e,n){"light"===e?TweenLite.fromTo(n,1,{fill:"#000"},{fill:"#fff"}):TweenLite.fromTo(n,1,{fill:"#FFF"},{fill:"#000"})},c=function(e,n,t){var r=new o.TimelineMax({paused:!0});return"light"===e?r.fromTo(n,.25,{fill:"none"},{fill:"#000"}).fromTo(t,.25,{stroke:"#000"},{stroke:"#FFF"},"-=0.25"):r.fromTo(n,.25,{fill:"none"},{fill:"#FFF"}).fromTo(t,.25,{stroke:"#FFF"},{stroke:"#000"},"-=0.25"),r}},59:function(e,n,t){"use strict";n.a=function(){return window.innerWidth<=768}},80:function(e,n,t){}};