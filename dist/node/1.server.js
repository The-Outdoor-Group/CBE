exports.ids=[1],exports.modules={61:function(e,n,t){"use strict";t.r(n);var o=t(13),r=t.n(o),a=t(14),s=t.n(a),l=t(15),i=t.n(l),u=t(16),h=t.n(u),c=t(41),d=t.n(c),v=t(17),f=t.n(v),m=t(0),M=t.n(m),p=t(5),E=t.n(p),k=t(83),w=t.n(k),y=E()({chunkName:function(){return"assets-images-PlusIcon"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(5).then(t.bind(null,62))},requireSync:function e(n){var o=this.resolve(n);return t(o)},resolve:function(){return 62}}),I=function(e){function n(){var e;return r()(this,n),(e=i()(this,h()(n).call(this))).handleMouseEnter=e.handleMouseEnter.bind(d()(e)),e.handleMouseLeave=e.handleMouseLeave.bind(d()(e)),e.handleClick=e.handleClick.bind(d()(e)),e.state={hovering:!1,showMoreInfo:!1},e}return f()(n,e),s()(n,[{key:"handleMouseEnter",value:function(){this.setState({hovering:!0})}},{key:"handleMouseLeave",value:function(){this.setState({hovering:!1})}},{key:"handleClick",value:function(){var e=this;this.setState({showMoreInfo:!this.state.showMoreInfo},function(){var n=e.props.moreInfoHandle,t=e.state.showMoreInfo;e.props.showMoreInfo(t,n)})}},{key:"render",value:function(){var e=this.props.colorTheme;return M.a.createElement("ul",{className:"call-to-action"},M.a.createElement("li",{onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"learn-more-wrapper"},M.a.createElement(y,{colorTheme:e,changeDueToHover:this.state.hovering}),M.a.createElement("span",null,"Learn More")),M.a.createElement("li",null,M.a.createElement("button",null,"Order Now")))}}]),n}(m.Component);n.default=I},83:function(e,n,t){}};