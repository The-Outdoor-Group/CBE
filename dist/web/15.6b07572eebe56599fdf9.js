(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[15],{357:function(e,x,C){"use strict";C.r(x),function(e){var t=C(96),r=C.n(t),n=C(97),i=C.n(n),s=C(98),a=C.n(s),c=C(99),l=C.n(c),u=C(168),o=C.n(u),h=C(100),d=C.n(h),p=C(2),v=C.n(p),m=C(20),f=Object(m.a)({chunkName:function(){return"media-assets-Image"},isReady:function(e){return!!C.m[this.resolve(e)]},requireAsync:function(){return C.e(21).then(C.bind(null,343))},requireSync:function e(t){var n=this.resolve(t);return C(n)},resolve:function(){return 343}}),A=Object(m.a)({chunkName:function(){return"text-Header"},isReady:function(e){return!!C.m[this.resolve(e)]},requireAsync:function(){return C.e(23).then(C.bind(null,344))},requireSync:function e(t){var n=this.resolve(t);return C(n)},resolve:function(){return 344}}),k=function(e){function n(e){var t;return r()(this,n),(t=a()(this,l()(n).call(this,e))).handlePreviousClick=t.handlePreviousClick.bind(o()(t)),t.handleNextClick=t.handleNextClick.bind(o()(t)),t.state={currentArticleIndex:0},t}return d()(n,e),i()(n,[{key:"handlePreviousClick",value:function(){var e=this.state.currentArticleIndex;e<=0?this.setState({currentArticleIndex:this.props.articles.length-1}):this.setState({currentArticleIndex:e-1})}},{key:"handleNextClick",value:function(){var e=this.state.currentArticleIndex;e>=this.props.articles.length-1?this.setState({currentArticleIndex:0}):this.setState({currentArticleIndex:e+1})}},{key:"render",value:function(){console.log("HorizontalImageSlider: ",this.props);var e=this.state.currentArticleIndex;console.log("this.props.articles[currentArticleIndex].image: ",this.props.articles[e].image);var t=[{h3:this.props.articles[e].h3,p:this.props.articles[e].p}];return v.a.createElement("article",{className:"horizontal-image-slider"},v.a.createElement("div",null,v.a.createElement("span",{onClick:this.handlePreviousClick}," previous "),v.a.createElement(f,{data:this.props.articles[e].image}),v.a.createElement("span",{onClick:this.handleNextClick}," next ")),v.a.createElement(A,{articles:t}))}}]),n}(p.Component);x.default=k}.call(this,"/")}}]);