exports.ids=[3],exports.modules={105:function(e,n,t){},52:function(e,n,t){"use strict";n.a=function(){return window.innerWidth<=768}},67:function(e,n,t){"use strict";t.r(n);var o=t(13),s=t.n(o),r=t(14),i=t.n(r),a=t(15),u=t.n(a),l=t(16),h=t.n(l),c=t(41),d=t.n(c),v=t(17),f=t.n(v),m=t(0),M=t.n(m),w=t(5),p=t.n(w),k=t(44),E=t.n(k),L=t(52),b=t(105),z=t.n(b),y=p()({chunkName:function(){return"assets-images-PlusIcon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(6).then(t.bind(null,68))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function(){return 68}}),R=function(e){function n(){var e;return s()(this,n),(e=u()(this,h()(n).call(this))).debouncedResize,e.handleMouseEnter=e.handleMouseEnter.bind(d()(e)),e.handleMouseLeave=e.handleMouseLeave.bind(d()(e)),e.handleClick=e.handleClick.bind(d()(e)),e.handleResize=e.handleResize.bind(d()(e)),e.state={hovering:!1,showMoreInfo:!1,showLearnMore:!1},e}return f()(n,e),i()(n,[{key:"componentDidMount",value:function(){this.debouncedResize=E()(this.handleResize,500),this.handleResize(),window.addEventListener("resize",this.debouncedResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedResize)}},{key:"handleResize",value:function(){Object(L.a)()?this.setState({showLearnMore:!1}):this.setState({showLearnMore:!0})}},{key:"handleMouseEnter",value:function(){this.setState({hovering:!0})}},{key:"handleMouseLeave",value:function(){this.setState({hovering:!1})}},{key:"handleClick",value:function(){var e=this;this.setState({showMoreInfo:!this.state.showMoreInfo},function(){var n=e.props.moreInfoHandle,t=e.state.showMoreInfo;e.props.showMoreInfo(t,n)})}},{key:"render",value:function(){var e=this.props.colorTheme,n=this.state.showLearnMore,t=M.a.createElement("li",{onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"learn-more-wrapper"},M.a.createElement(y,{colorTheme:e,changeDueToHover:this.state.hovering}),M.a.createElement("span",null,"Learn More"));return M.a.createElement("ul",{className:"call-to-action"},n?t:null,M.a.createElement("li",null,M.a.createElement("button",null,"Order Now")))}}]),n}(m.Component);n.default=R}};