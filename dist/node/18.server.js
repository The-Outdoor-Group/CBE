exports.ids=[18],exports.modules={126:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(36),i=n.n(r),s=n(37),c=n.n(s),l=n(38),a=n.n(l),u=n(39),o=n.n(u),h=n(47),d=n.n(h),v=n(40),f=n.n(v),m=n(0),p=n.n(m),k=n(5),x=n.n(k),y=n(126),A=n.n(y),C=x()({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(0).then(n.bind(null,53))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 53}}),I=x()({chunkName:function(){return"text-Header"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(29).then(n.bind(null,56))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 56}}),N=x()({chunkName:function(){return"assets-images-NavigationArrow"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(6).then(n.bind(null,77))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 77}}),E=function(e){function t(){var e;return i()(this,t),(e=a()(this,o()(t).call(this))).handlePreviousClick=e.handlePreviousClick.bind(d()(e)),e.handleNextClick=e.handleNextClick.bind(d()(e)),e.state={currentArticleIndex:0},e}return f()(t,e),c()(t,[{key:"handlePreviousClick",value:function(){var e=this.state.currentArticleIndex;e<=0?this.setState({currentArticleIndex:this.props.articles.length-1}):this.setState({currentArticleIndex:e-1})}},{key:"handleNextClick",value:function(){var e=this.state.currentArticleIndex;e>=this.props.articles.length-1?this.setState({currentArticleIndex:0}):this.setState({currentArticleIndex:e+1})}},{key:"render",value:function(){var e=this.state.currentArticleIndex,t=[{h3:this.props.articles[e].h3,p:this.props.articles[e].p}];return p.a.createElement("article",{className:"horizontal-image-slider"},p.a.createElement("div",null,p.a.createElement("span",{onClick:this.handlePreviousClick},p.a.createElement(N,null)),p.a.createElement(C,{data:this.props.articles[e].image}),p.a.createElement("span",{onClick:this.handleNextClick},p.a.createElement(N,null))),p.a.createElement(I,{articles:t}))}}]),t}(m.Component);t.default=E}};