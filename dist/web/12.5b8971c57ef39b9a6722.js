(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[12],{351:function(e,S,k){"use strict";k.r(S),function(e){var n=k(96),t=k.n(n),r=k(97),i=k.n(r),a=k(98),o=k.n(a),c=k(99),u=k.n(c),l=k(168),s=k.n(l),h=k(100),f=k.n(h),d=k(2),m=k.n(d),v=k(368),y=k(20),p=k(101),b=k(9),I=k(379),q=k.n(I),E=Object(y.a)({chunkName:function(){return"MoreInfoComponent"},isReady:function(e){return!!k.m[this.resolve(e)]},requireAsync:function(){return k.e(6).then(k.bind(null,352))},requireSync:function e(n){var t=this.resolve(n);return k(t)},resolve:function(){return 352}}),A=function(e){function n(){var e;return t()(this,n),(e=o()(this,u()(n).call(this))).handleShowInfo=e.handleShowInfo.bind(s()(e)),e.handlePanelVisibility=e.handlePanelVisibility.bind(s()(e)),e.state={showInfo:!1,clickedMoreInfoHandle:null,hidden:null},e}return f()(n,e),i()(n,[{key:"componentDidUpdate",value:function(e,n){e.openMoreInfoPanel!==this.props.openMoreInfoPanel&&this.handlePanelVisibility()}},{key:"handlePanelVisibility",value:function(){var e=this.state,n=e.clickedMoreInfoHandle,t=(e.showInfo,e.hidden,this.props.data.moreInfoHandle);this.props.openMoreInfoPanel?n!==t&&this.setState({hidden:"hidden"}):this.setState({hidden:null,clickedMoreInfoHandle:null,showInfo:!1})}},{key:"handleShowInfo",value:function(e,n){this.props.setMoreInfoPanelVisibility(e),this.props.setIdMatchForParentContainer(n),this.setState({showInfo:e,clickedMoreInfoHandle:n})}},{key:"render",value:function(){var e=this.props.data,n=this.props.data,t=n.cssClass,r=n.moreInfoHandle;return m.a.createElement("section",{id:r||null,className:"hero-region ".concat(t," ").concat(null!==this.state.hidden?this.state.hidden:"")},Object(v.a)({props:e,showInfo:this.handleShowInfo}),m.a.createElement(E,{showInfo:this.state.showInfo,handle:r}))}}]),n}(d.Component),w=function(e){return{openMoreInfoPanel:e.sharedUiState.openMoreInfoPanel}};S.default=Object(p.b)(w,{setMoreInfoPanelVisibility:b.s,setIdMatchForParentContainer:b.q})(A)}.call(this,"/")},368:function(e,n,t){"use strict";t(2);var r=t(369),i=t(371),a=t(373),o=t(375),c=t(377);n.a=function(e){var n=e.props,t=e.showInfo;switch(n.type){case"heroHorizontalWhole":return Object(r.a)(n);case"heroVerticalQuarterArticleThreeQuarterMedia":return Object(i.a)(n,t);case"heroHorizontalThreeQuarterMediaQuarterArticle":return Object(a.a)(n,t);case"heroVerticalThreeQuarterMediaQuarterArticle":return Object(o.a)(n,t);case"heroVerticalHalfMediaHalfArticle":return Object(c.a)(n);default:return null}}},369:function(e,l,s){"use strict";(function(e){var n=s(2),r=s.n(n),t=s(20),i=s(370),a=s.n(i),o=Object(t.a)({chunkName:function(){return"hero-TitleHeader"},isReady:function(e){return!!s.m[this.resolve(e)]},requireAsync:function(){return s.e(21).then(s.bind(null,354))},requireSync:function e(n){var t=this.resolve(n);return s(t)},resolve:function(){return 354}}),c=Object(t.a)({chunkName:function(){return"hero-Stats"},isReady:function(e){return!!s.m[this.resolve(e)]},requireAsync:function(){return s.e(2).then(s.bind(null,343))},requireSync:function e(n){var t=this.resolve(n);return s(t)},resolve:function(){return 343}}),u=function(e){console.log("this.props test: ",e);var n=e.stats,t=e.title;return r.a.createElement("article",{className:"hero-horizontal-whole-component"},r.a.createElement(o,{title:t}),r.a.createElement(c,{stats:n}))};l.a=u}).call(this,"/")},370:function(e,n,t){},371:function(e,l,s){"use strict";(function(e){var n=s(2),a=s.n(n),t=s(20),r=s(372),i=s.n(r),o=Object(t.a)({chunkName:function(){return"hero-TextArticle"},isReady:function(e){return!!s.m[this.resolve(e)]},requireAsync:function(){return s.e(20).then(s.bind(null,344))},requireSync:function e(n){var t=this.resolve(n);return s(t)},resolve:function(){return 344}}),c=Object(t.a)({chunkName:function(){return"hero-Image"},isReady:function(e){return!!s.m[this.resolve(e)]},requireAsync:function(){return s.e(1).then(s.bind(null,345))},requireSync:function e(n){var t=this.resolve(n);return s(t)},resolve:function(){return 345}}),u=function(e,n){var t=e.cssClass,r=e.textArticle,i=e.moreInfoHandle;return a.a.createElement("article",{className:"hero-vertical-quarter-article-three-quarter-media"},a.a.createElement(o,{showMoreInfo:n,copy:r,colorTheme:t,moreInfoHandle:i}),a.a.createElement("div",null,a.a.createElement(c,{data:{src:"https://via.placeholder.com/975x800",alt:"placeholder",cssClass:"vertical"}})))};l.a=u}).call(this,"/")},372:function(e,n,t){},373:function(e,a,h){"use strict";(function(e){var n=h(2),l=h.n(n),s=h(20),t=h(374),r=h.n(t),i=function e(n,t){var r=n.cssClass,i=n.stats,a=n.textArticle,o=n.moreInfoHandle,c=Object(s.a)({chunkName:function(){return"hero-Stats"},isReady:function(e){return!!h.m[this.resolve(e)]},requireAsync:function(){return h.e(2).then(h.bind(null,343))},requireSync:function e(n){var t=this.resolve(n);return h(t)},resolve:function(){return 343}}),u=Object(s.a)({chunkName:function(){return"hero-TextArticle"},isReady:function(e){return!!h.m[this.resolve(e)]},requireAsync:function(){return h.e(20).then(h.bind(null,344))},requireSync:function e(n){var t=this.resolve(n);return h(t)},resolve:function(){return 344}});return l.a.createElement("article",{className:"hero-horizontal-three-quarter-media-quarter-article"},l.a.createElement("div",{className:"image-full-width"},l.a.createElement("img",{src:"https://via.placeholder.com/1380x600"}),l.a.createElement(c,{stats:i})),l.a.createElement(u,{showMoreInfo:t,copy:a,colorTheme:r,moreInfoHandle:o}))};a.a=i}).call(this,"/")},374:function(e,n,t){},375:function(e,a,f){"use strict";(function(e){var n=f(2),s=f.n(n),h=f(20),t=f(376),r=f.n(t),i=function e(n,t){var r=n.cssClass,i=n.textArticle,a=n.video,o=n.stats,c=n.moreInfoHandle,u=Object(h.a)({chunkName:function(){return"hero-TextArticle"},isReady:function(e){return!!f.m[this.resolve(e)]},requireAsync:function(){return f.e(20).then(f.bind(null,344))},requireSync:function e(n){var t=this.resolve(n);return f(t)},resolve:function(){return 344}}),l=Object(h.a)({chunkName:function(){return"hero-VideoComponent"},isReady:function(e){return!!f.m[this.resolve(e)]},requireAsync:function(){return f.e(22).then(f.bind(null,355))},requireSync:function e(n){var t=this.resolve(n);return f(t)},resolve:function(){return 355}});return s.a.createElement("article",{className:"hero-vertical-three-quarter-media-quarter-article"},s.a.createElement(l,{video:a,stats:o}),s.a.createElement(u,{showMoreInfo:t,copy:i,colorTheme:r,moreInfoHandle:c}))};a.a=i}).call(this,"/")},376:function(e,n,t){},377:function(e,s,h){"use strict";(function(e){var n=h(2),a=h.n(n),t=h(20),r=h(378),i=h.n(r),o=Object(t.a)({chunkName:function(){return"hero-Image"},isReady:function(e){return!!h.m[this.resolve(e)]},requireAsync:function(){return h.e(1).then(h.bind(null,345))},requireSync:function e(n){var t=this.resolve(n);return h(t)},resolve:function(){return 345}}),c=Object(t.a)({chunkName:function(){return"hero-ListButton"},isReady:function(e){return!!h.m[this.resolve(e)]},requireAsync:function(){return h.e(19).then(h.bind(null,356))},requireSync:function e(n){var t=this.resolve(n);return h(t)},resolve:function(){return 356}}),u=Object(t.a)({chunkName:function(){return"hero-List"},isReady:function(e){return!!h.m[this.resolve(e)]},requireAsync:function(){return h.e(18).then(h.bind(null,357))},requireSync:function e(n){var t=this.resolve(n);return h(t)},resolve:function(){return 357}}),l=function(e){e.image;var n=e.content,t=n.lists,r=n.navLinks,i=n.title;return a.a.createElement("article",{className:"hero-vertical-half-media-half-article"},a.a.createElement(o,{data:{src:"https://via.placeholder.com/325x300",alt:"placeholder",cssClass:"vertical"}}),a.a.createElement("div",{className:"list-wrapper"},a.a.createElement("header",null,a.a.createElement("h1",null,i)),a.a.createElement("ul",null,r.map(function(e,n){return a.a.createElement("li",null,a.a.createElement(c,{key:n,name:e.name}))})),a.a.createElement("div",{className:"list-node-wrapper"},t.map(function(e,n){return a.a.createElement(u,{key:n,list:e})}))))};s.a=l}).call(this,"/")},378:function(e,n,t){},379:function(e,n,t){}}]);