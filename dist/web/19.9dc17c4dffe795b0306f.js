(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[19],{378:function(e,t,n){"use strict";n.r(t),function(e){var r=n(98),i=n.n(r),c=n(99),a=n.n(c),l=n(100),s=n.n(l),u=n(101),o=n.n(u),h=n(170),d=n.n(h),v=n(102),f=n.n(v),m=n(2),A=n.n(m),p=n(21),k=n(430),x=n.n(k),C=Object(p.a)({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(1).then(n.bind(null,356))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 356}}),y=Object(p.a)({chunkName:function(){return"text-Header"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(30).then(n.bind(null,359))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 359}}),E=Object(p.a)({chunkName:function(){return"assets-images-NavigationArrow"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(7).then(n.bind(null,380))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function(){return 380}}),_=function(e){function t(){var e;return i()(this,t),(e=s()(this,o()(t).call(this))).handlePreviousClick=e.handlePreviousClick.bind(d()(e)),e.handleNextClick=e.handleNextClick.bind(d()(e)),e.state={currentArticleIndex:0},e}return f()(t,e),a()(t,[{key:"handlePreviousClick",value:function(){var e=this.state.currentArticleIndex;e<=0?this.setState({currentArticleIndex:this.props.articles.length-1}):this.setState({currentArticleIndex:e-1})}},{key:"handleNextClick",value:function(){var e=this.state.currentArticleIndex;e>=this.props.articles.length-1?this.setState({currentArticleIndex:0}):this.setState({currentArticleIndex:e+1})}},{key:"render",value:function(){var e=this.state.currentArticleIndex,t=[{h3:this.props.articles[e].h3,p:this.props.articles[e].p}];return A.a.createElement("article",{className:"horizontal-image-slider"},A.a.createElement("div",null,A.a.createElement("span",{onClick:this.handlePreviousClick},A.a.createElement(E,null)),A.a.createElement(C,{data:this.props.articles[e].image}),A.a.createElement("span",{onClick:this.handleNextClick},A.a.createElement(E,null))),A.a.createElement(y,{articles:t}))}}]),t}(m.Component);t.default=_}.call(this,"/")},430:function(e,t,n){}}]);