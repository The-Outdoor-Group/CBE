(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[20],{409:function(e,t,n){"use strict";n.r(t);var r=n(338),i=n.n(r),a=n(339),l=n.n(a),c=n(340),s=n.n(c),u=n(341),o=n.n(u),h=n(164),d=n.n(h),v=n(342),m=n.n(v),f=n(2),A=n.n(f),p=n(21),k=n(380),x=n.n(k),C=Object(p.a)({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,387))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 387}}),y=Object(p.a)({chunkName:function(){return"text-Header"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,390))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 390}}),E=Object(p.a)({chunkName:function(){return"assets-images-NavigationArrow"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,411))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 411}}),_=function(e){function t(){var e;return i()(this,t),(e=s()(this,o()(t).call(this))).handlePreviousClick=e.handlePreviousClick.bind(d()(e)),e.handleNextClick=e.handleNextClick.bind(d()(e)),e.state={currentArticleIndex:0},e}return m()(t,e),l()(t,[{key:"handlePreviousClick",value:function(){var e=this.state.currentArticleIndex;e<=0?this.setState({currentArticleIndex:this.props.articles.length-1}):this.setState({currentArticleIndex:e-1})}},{key:"handleNextClick",value:function(){var e=this.state.currentArticleIndex;e>=this.props.articles.length-1?this.setState({currentArticleIndex:0}):this.setState({currentArticleIndex:e+1})}},{key:"render",value:function(){var e=this.state.currentArticleIndex,t=[{h3:this.props.articles[e].h3,p:this.props.articles[e].p}];return A.a.createElement("article",{className:"horizontal-image-slider"},A.a.createElement("div",null,A.a.createElement("span",{onClick:this.handlePreviousClick},A.a.createElement(E,null)),A.a.createElement(C,{data:this.props.articles[e].image}),A.a.createElement("span",{onClick:this.handleNextClick},A.a.createElement(E,null))),A.a.createElement(y,{articles:t}))}}]),t}(f.Component);t.default=_}}]);