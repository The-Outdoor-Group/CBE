exports.ids=[15],exports.modules={104:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(13),i=n.n(r),s=n(14),c=n.n(s),l=n(15),a=n.n(l),u=n(16),o=n.n(u),h=n(41),d=n.n(h),v=n(17),p=n.n(v),f=n(0),m=n.n(f),x=n(5),k=n.n(x),C=n(104),A=n.n(C),y=k()({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(0).then(n.bind(null,47))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 47}}),I=k()({chunkName:function(){return"text-Header"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(25).then(n.bind(null,49))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 49}}),N=function(e){function t(){var e;return i()(this,t),(e=a()(this,o()(t).call(this))).handlePreviousClick=e.handlePreviousClick.bind(d()(e)),e.handleNextClick=e.handleNextClick.bind(d()(e)),e.state={currentArticleIndex:0},e}return p()(t,e),c()(t,[{key:"handlePreviousClick",value:function(){var e=this.state.currentArticleIndex;e<=0?this.setState({currentArticleIndex:this.props.articles.length-1}):this.setState({currentArticleIndex:e-1})}},{key:"handleNextClick",value:function(){var e=this.state.currentArticleIndex;e>=this.props.articles.length-1?this.setState({currentArticleIndex:0}):this.setState({currentArticleIndex:e+1})}},{key:"render",value:function(){var e=this.state.currentArticleIndex,t=[{h3:this.props.articles[e].h3,p:this.props.articles[e].p}];return m.a.createElement("article",{className:"horizontal-image-slider"},m.a.createElement("div",null,m.a.createElement("span",{onClick:this.handlePreviousClick}," previous "),m.a.createElement(y,{data:this.props.articles[e].image}),m.a.createElement("span",{onClick:this.handleNextClick}," next ")),m.a.createElement(I,{articles:t}))}}]),t}(f.Component);t.default=N}};