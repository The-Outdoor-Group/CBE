(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{172:function(e,R,I){"use strict";I.r(R),function(e){var n=I(98),t=I.n(n),o=I(99),r=I.n(o),i=I(100),a=I.n(i),u=I(101),l=I.n(u),c=I(170),s=I.n(c),h=I(102),f=I.n(h),m=I(2),d=I.n(m),v=I(350),y=I(21),p=I(103),T=I(345),w=I.n(T),g=I(358),M=I(343),k=I(354),b=I(378),E=I.n(b),F=Object(y.a)({chunkName:function(){return"assets-images-logo"},isReady:function(e){return!!I.m[this.resolve(e)]},requireAsync:function(){return I.e(8).then(I.bind(null,361))},requireSync:function e(n){var t=this.resolve(n);return I(t)},resolve:function(){return 361}}),N=Object(y.a)({chunkName:function(){return"assets-images-secondary-menu-icon"},isReady:function(e){return!!I.m[this.resolve(e)]},requireAsync:function(){return I.e(9).then(I.bind(null,362))},requireSync:function e(n){var t=this.resolve(n);return I(t)},resolve:function(){return 362}}),C=Object(y.a)({chunkName:function(){return"MainList"},isReady:function(e){return!!I.m[this.resolve(e)]},requireAsync:function(){return I.e(2).then(I.bind(null,359))},requireSync:function e(n){var t=this.resolve(n);return I(t)},resolve:function(){return 359}}),L=Object(y.a)({chunkName:function(){return"InfoPanelOpenList"},isReady:function(e){return!!I.m[this.resolve(e)]},requireAsync:function(){return I.e(5).then(I.bind(null,363))},requireSync:function e(n){var t=this.resolve(n);return I(t)},resolve:function(){return 363}}),A=function(e){function n(){var e;return t()(this,n),(e=a()(this,l()(n).call(this))).elArray,e.nav,e.ul,e.shopLink,e.containerEl,e.debouncedResize,e.tl=new M.a,e.changeNavColor=e.changeNavColor.bind(s()(e)),e.changeMenuContents=e.changeMenuContents.bind(s()(e)),e.handleResize=e.handleResize.bind(s()(e)),e.state={colorTheme:"dark",openMoreInfoPanel:!1,showMainNav:!1},e}return f()(n,e),r()(n,[{key:"componentDidMount",value:function(){var e=this.nav.getBoundingClientRect();console.log("main nav height: ",e.bottom-e.top),I(344),this.debouncedResize=w()(this.handleResize,500),this.handleResize(),window.addEventListener("resize",this.debouncedResize)}},{key:"componentDidUpdate",value:function(e,n){var t=e.mainNavThemeColor,o=this.props.mainNavThemeColor,r=this.state.showMainNav,i=e.openMoreInfoPanel,a=this.props.openMoreInfoPanel;t!==o&&this.changeNavColor(o),i!==a&&r&&this.changeMenuContents(a)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedResize)}},{key:"handleResize",value:function(){Object(g.a)()?this.setState({showMainNav:!1}):this.setState({showMainNav:!0})}},{key:"changeMenuContents",value:function(e){var n=this;this.containerEl=document.getElementById(this.props.elMatchForScrolling),e?this.tl.to(window,1,{scrollTo:{y:this.containerEl.children[1]}}).to(this.ul,1,{y:"-100"}).add(function(){return n.setState({openMoreInfoPanel:!n.state.openMoreInfoPanel})}).to(this.ul,1,{y:"0"}).to(this.nav,1,{backgroundColor:"#fff"}):this.tl.to(window,1,{scrollTo:{y:this.containerEl}}).to(this.ul,1,{y:"-100"}).add(function(){return n.setState({openMoreInfoPanel:!n.state.openMoreInfoPanel})}).to(this.ul,1,{y:"0"}).to(this.nav,1,{backgroundColor:"none"})}},{key:"changeNavColor",value:function(e){var n=this,t=this.state.showMainNav;this.elArray=[this.shopLink],t&&Array.from(this.ul.children).forEach(function(e){return n.elArray.push(e.children[0])}),Object(k.f)(e,this.elArray),this.setState({colorTheme:e})}},{key:"render",value:function(){var n=this,e=this.state,t=e.openMoreInfoPanel,o=e.showMainNav,r=e.colorTheme;console.log("showMainNav: ",o);var i=function(){return d.a.createElement("nav",null,d.a.createElement("ul",{ref:function(e){return n.ul=e}},t&&o?d.a.createElement(L,{colorTheme:r}):d.a.createElement(C,{colorTheme:r})))};return d.a.createElement(m.Fragment,null,d.a.createElement("div",{ref:function(e){return n.nav=e},id:"main-nav-container"},d.a.createElement(v.a,{id:"home-link",to:"/"},d.a.createElement(F,{colorTheme:this.state.colorTheme})),o?i():null,d.a.createElement(v.a,{id:"shop",to:"/cart"},d.a.createElement("span",{ref:function(e){return n.shopLink=e}},"Cart"))),d.a.createElement("div",{id:"secondary-menu-icon-wrapper"},d.a.createElement(N,{colorTheme:this.state.colorTheme})))}}]),n}(m.Component),S=function(e){var n=e.sharedUiState;return{mainNavThemeColor:n.mainNavThemeColor,openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};R.default=Object(p.b)(S)(A)}.call(this,"/")},354:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"d",function(){return i}),t.d(n,"b",function(){return a}),t.d(n,"f",function(){return u}),t.d(n,"g",function(){return l}),t.d(n,"e",function(){return c}),t.d(n,"c",function(){return s});var r=t(343);t(0),t(72);t(344);var o=function(e,n,t){return new r.a({paused:!0}).fromTo(e,.5,{x:0,y:0},{x:0,y:7}).fromTo(t,.5,{x:0,y:0},{x:0,y:-7},"-=0.5").fromTo(e,.5,{rotation:0},{rotation:45}).fromTo(t,.5,{rotation:0},{rotation:-45},"-=0.5").fromTo(n,.5,{autoAlpha:1},{autoAlpha:0},"-=1")},i=function(e){return new r.a({paused:!0}).fromTo(e,1,{right:"-100%"},{right:"0%"})},a=function(e){TweenMax.fromTo(e,1,{bottom:"1%",repeat:-1,yoyo:!0},{bottom:"0%",repeat:-1,yoyo:!0})},u=function(e,n){"light"===e?TweenLite.fromTo(n,1,{color:"#000"},{color:"#fff"}):TweenLite.fromTo(n,1,{color:"#FFF"},{color:"#000"})},l=function(e,n){"light"===e?TweenLite.fromTo(n,1,{stroke:"#000"},{stroke:"#fff"}):TweenLite.fromTo(n,1,{stroke:"#FFF"},{stroke:"#000"})},c=function(e,n){"light"===e?TweenLite.fromTo(n,1,{fill:"#000"},{fill:"#fff"}):TweenLite.fromTo(n,1,{fill:"#FFF"},{fill:"#000"})},s=function(e,n,t){var o=new r.a({paused:!0});return"light"===e?o.fromTo(n,.25,{fill:"none"},{fill:"#000"}).fromTo(t,.25,{stroke:"#000"},{stroke:"#FFF"},"-=0.25"):o.fromTo(n,.25,{fill:"none"},{fill:"#FFF"}).fromTo(t,.25,{stroke:"#FFF"},{stroke:"#000"},"-=0.25"),o}},358:function(e,n,t){"use strict";n.a=function(){return window.innerWidth<=768}},378:function(e,n,t){}}]);