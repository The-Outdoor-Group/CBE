exports.ids=[11],exports.modules={58:function(e,n,t){"use strict";t.r(n);var r=t(13),i=t.n(r),o=t(14),a=t.n(o),u=t(15),c=t.n(u),l=t(16),s=t.n(l),h=t(41),f=t.n(h),d=t(17),m=t.n(d),v=t(0),y=t.n(v),p=t(75),I=t(5),q=t.n(I),b=t(18),E=t.n(b),k=t(3),A=t(86),S=t.n(A),N=q()({chunkName:function(){return"MoreInfoComponent"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(5).then(t.bind(null,59))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 59}}),M=function(e){function n(){var e;return i()(this,n),(e=c()(this,s()(n).call(this))).handleShowInfo=e.handleShowInfo.bind(f()(e)),e.handlePanelVisibility=e.handlePanelVisibility.bind(f()(e)),e.state={showInfo:!1,clickedMoreInfoHandle:null,hidden:null},e}return m()(n,e),a()(n,[{key:"componentDidUpdate",value:function(e,n){e.openMoreInfoPanel!==this.props.openMoreInfoPanel&&this.handlePanelVisibility()}},{key:"handlePanelVisibility",value:function(){var e=this.state,n=e.clickedMoreInfoHandle,t=(e.showInfo,e.hidden,this.props.data.moreInfoHandle);this.props.openMoreInfoPanel?n!==t&&this.setState({hidden:"hidden"}):this.setState({hidden:null,clickedMoreInfoHandle:null,showInfo:!1})}},{key:"handleShowInfo",value:function(e,n){this.props.setMoreInfoPanelVisibility(e),this.props.setIdMatchForParentContainer(n),this.setState({showInfo:e,clickedMoreInfoHandle:n})}},{key:"render",value:function(){var e=this.props.data,n=this.props.data,t=n.cssClass,r=n.moreInfoHandle;return y.a.createElement("section",{id:r||null,className:"hero-region ".concat(t," ").concat(null!==this.state.hidden?this.state.hidden:"")},Object(p.a)({props:e,showInfo:this.handleShowInfo}),y.a.createElement(N,{showInfo:this.state.showInfo,handle:r}))}}]),n}(v.Component),w=function(e){return{openMoreInfoPanel:e.sharedUiState.openMoreInfoPanel}};n.default=Object(b.connect)(w,{setMoreInfoPanelVisibility:k.s,setIdMatchForParentContainer:k.q})(M)},75:function(e,n,t){"use strict";t(0);var r=t(76),i=t(78),o=t(80),a=t(82),u=t(84);n.a=function(e){var n=e.props,t=e.showInfo;switch(n.type){case"heroHorizontalWhole":return Object(r.a)(n);case"heroVerticalQuarterArticleThreeQuarterMedia":return Object(i.a)(n,t);case"heroHorizontalThreeQuarterMediaQuarterArticle":return Object(o.a)(n,t);case"heroVerticalThreeQuarterMediaQuarterArticle":return Object(a.a)(n,t);case"heroVerticalHalfMediaHalfArticle":return Object(u.a)(n);default:return null}}},76:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(5),a=t.n(o),u=t(77),c=t.n(u),l=a()({chunkName:function(){return"hero-TitleHeader"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(20).then(t.bind(null,61))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 61}}),s=a()({chunkName:function(){return"hero-Stats"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,51))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 51}}),h=function(e){console.log("this.props test: ",e);var n=e.stats,t=e.title;return i.a.createElement("article",{className:"hero-horizontal-whole-component"},i.a.createElement(l,{title:t}),i.a.createElement(s,{stats:n}))};n.a=h},77:function(e,n,t){},78:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(5),a=t.n(o),u=t(79),c=t.n(u),l=a()({chunkName:function(){return"hero-TextArticle"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(19).then(t.bind(null,52))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 52}}),s=a()({chunkName:function(){return"hero-Image"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(0).then(t.bind(null,47))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 47}}),h=function(e,n){var t=e.cssClass,r=e.textArticle,o=e.moreInfoHandle;return i.a.createElement("article",{className:"hero-vertical-quarter-article-three-quarter-media"},i.a.createElement(l,{showMoreInfo:n,copy:r,colorTheme:t,moreInfoHandle:o}),i.a.createElement("div",null,i.a.createElement(s,{data:{src:"https://via.placeholder.com/975x800",alt:"placeholder",cssClass:"vertical"}})))};n.a=h},79:function(e,n,t){},80:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(5),a=t.n(o),u=t(81),c=t.n(u),l=a()({chunkName:function(){return"hero-Stats"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,51))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 51}}),s=a()({chunkName:function(){return"hero-TextArticle"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(19).then(t.bind(null,52))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 52}}),h=a()({chunkName:function(){return"hero-Image"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(0).then(t.bind(null,47))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 47}}),f=function(e,n){var t=e.cssClass,r=e.stats,o=e.textArticle,a=e.moreInfoHandle;return i.a.createElement("article",{className:"hero-horizontal-three-quarter-media-quarter-article"},i.a.createElement("div",{className:"full-image-height"},i.a.createElement(h,{data:{src:"https://via.placeholder.com/1380x600",alt:"placeholder",cssClass:"horizontal"}}),i.a.createElement(l,{stats:r})),i.a.createElement(s,{showMoreInfo:n,copy:o,colorTheme:t,moreInfoHandle:a}))};n.a=f},81:function(e,n,t){},82:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(5),a=t.n(o),u=t(83),c=t.n(u),l=function e(n,r){var o=n.cssClass,u=n.textArticle,c=n.video,l=n.stats,s=n.moreInfoHandle,h=a()({chunkName:function(){return"hero-TextArticle"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(19).then(t.bind(null,52))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 52}}),f=a()({chunkName:function(){return"hero-VideoComponent"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(21).then(t.bind(null,62))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 62}});return i.a.createElement("article",{className:"hero-vertical-three-quarter-media-quarter-article"},i.a.createElement(f,{video:c,stats:l}),i.a.createElement(h,{showMoreInfo:r,copy:u,colorTheme:o,moreInfoHandle:s}))};n.a=l},83:function(e,n,t){},84:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(5),a=t.n(o),u=t(85),c=t.n(u),l=a()({chunkName:function(){return"hero-Image"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(0).then(t.bind(null,47))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 47}}),s=a()({chunkName:function(){return"hero-ListButton"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(18).then(t.bind(null,63))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 63}}),h=a()({chunkName:function(){return"hero-List"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(17).then(t.bind(null,64))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 64}}),f=function(e){e.image;var n=e.content,t=n.lists,r=n.navLinks,o=n.title;return i.a.createElement("article",{className:"hero-vertical-half-media-half-article"},i.a.createElement(l,{data:{src:"https://via.placeholder.com/325x300",alt:"placeholder",cssClass:"vertical"}}),i.a.createElement("div",{className:"list-wrapper"},i.a.createElement("header",null,i.a.createElement("h1",null,o)),i.a.createElement("ul",null,r.map(function(e,n){return i.a.createElement("li",null,i.a.createElement(s,{key:n,name:e.name}))})),i.a.createElement("div",{className:"list-node-wrapper"},t.map(function(e,n){return i.a.createElement(h,{key:n,list:e})}))))};n.a=f},85:function(e,n,t){},86:function(e,n,t){}};