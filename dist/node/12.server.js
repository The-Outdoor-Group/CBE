exports.ids=[12],exports.modules={100:function(e,n,r){},67:function(e,n,r){"use strict";r.r(n);var t=r(35),o=r.n(t),a=r(0),c=r.n(a),u=r(89),i=r(4),l=r.n(i),s=r(8),f=r.n(s),h=r(3),m=r(100),v=r.n(m),d=l()({chunkName:function(){return"MoreInfoComponent"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(5).then(r.bind(null,70))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 70}}),p=function(e){console.log("props Hero: ",e);var n=Object(a.useState)(!1),r=o()(n,2),t=r[0],i=r[1],l=Object(a.useState)(null),s=o()(l,2),f=(s[0],s[1]),h=Object(a.useState)(null),m=o()(h,2),v=m[0],p=m[1];Object(a.useEffect)(function(){!function(){var n=e.data.moreInfoHandle,r=e.openMoreInfoPanel,t=e.elMatchForScrolling;r?(i(!0),n!==t&&p("hidden")):(p(null),f(null),i(!1))}()},[e.openMoreInfoPanel,e.elMatchForScrolling]);var y=e.data,q=y.cssClass,E=y.moreInfoHandle;return c.a.createElement("section",{id:E||null,className:"hero-region ".concat(q," ").concat(null!==v?v:"")},Object(u.a)({props:e.data,showInfo:function(){return function(n,r){e.setMoreInfoPanelVisibility(n),e.setIdMatchForParentContainer(r),i(n),f(r)}()}}),c.a.createElement(d,{showInfo:t,handle:E}))},y=function(e){var n=e.sharedUiState;return{openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(s.connect)(y,{setMoreInfoPanelVisibility:h.v,setIdMatchForParentContainer:h.s})(p)},89:function(e,n,r){"use strict";r(0);var t=r(90),o=r(92),a=r(94),c=r(96),u=r(98);n.a=function(e){var n=e.props,r=e.showInfo;switch(n.type){case"heroHorizontalWhole":return Object(t.a)(n);case"heroVerticalQuarterArticleThreeQuarterMedia":return Object(o.a)(n,r);case"heroHorizontalThreeQuarterMediaQuarterArticle":return Object(a.a)(n,r);case"heroVerticalThreeQuarterMediaQuarterArticle":return Object(c.a)(n,r);case"heroVerticalHalfMediaHalfArticle":return Object(u.a)(n);default:return null}}},90:function(e,n,r){"use strict";var t=r(0),o=r.n(t),a=r(4),c=r.n(a),u=r(91),i=r.n(u),l=c()({chunkName:function(){return"hero-components-TitleHeader"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(24).then(r.bind(null,72))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 72}}),s=c()({chunkName:function(){return"hero-components-Stats"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(2).then(r.bind(null,59))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 59}}),f=function(e){var n=e.stats,r=e.title;return o.a.createElement("article",{className:"hero-horizontal-whole-component"},o.a.createElement(l,{title:r}),o.a.createElement(s,{stats:n}))};n.a=f},91:function(e,n,r){},92:function(e,n,r){"use strict";var t=r(0),o=r.n(t),a=r(4),c=r.n(a),u=r(93),i=r.n(u),l=c()({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(23).then(r.bind(null,60))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 60}}),s=c()({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(0).then(r.bind(null,54))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 54}}),f=function(e,n){var r=e.cssClass,t=e.textArticle,a=e.moreInfoHandle;return o.a.createElement("article",{className:"hero-vertical-quarter-article-three-quarter-media"},o.a.createElement(l,{showMoreInfo:n,copy:t,colorTheme:r,moreInfoHandle:a}),o.a.createElement("div",{className:"media-wrapper"},o.a.createElement(s,{data:{src:"https://via.placeholder.com/975x800",alt:"placeholder",cssClass:"vertical"}})))};n.a=f},93:function(e,n,r){},94:function(e,n,r){"use strict";var t=r(0),o=r.n(t),a=r(4),c=r.n(a),u=r(95),i=r.n(u),l=c()({chunkName:function(){return"hero-components-Stats"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(2).then(r.bind(null,59))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 59}}),s=c()({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(23).then(r.bind(null,60))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 60}}),f=c()({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(0).then(r.bind(null,54))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 54}}),h=function(e,n){var r=e.cssClass,t=e.stats,a=e.textArticle,c=e.moreInfoHandle;return o.a.createElement("article",{className:"hero-horizontal-three-quarter-media-quarter-article"},o.a.createElement("div",{className:"full-image-height"},o.a.createElement(f,{data:{src:"https://via.placeholder.com/1380x600",alt:"placeholder",cssClass:"horizontal"}}),o.a.createElement(l,{stats:t})),o.a.createElement(s,{showMoreInfo:n,copy:a,colorTheme:r,moreInfoHandle:c}))};n.a=h},95:function(e,n,r){},96:function(e,n,r){"use strict";var t=r(0),o=r.n(t),a=r(4),c=r.n(a),u=r(97),i=r.n(u),l=function e(n,t){var a=n.cssClass,u=n.textArticle,i=n.video,l=n.stats,s=n.moreInfoHandle,f=c()({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(23).then(r.bind(null,60))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 60}}),h=c()({chunkName:function(){return"hero-components-VideoComponent"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(25).then(r.bind(null,73))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 73}});return o.a.createElement("article",{className:"hero-vertical-three-quarter-media-quarter-article"},o.a.createElement(h,{video:i,stats:l}),o.a.createElement(f,{showMoreInfo:t,copy:u,colorTheme:a,moreInfoHandle:s}))};n.a=l},97:function(e,n,r){},98:function(e,n,r){"use strict";var t=r(0),o=r.n(t),a=r(4),c=r.n(a),u=r(99),i=r.n(u),l=c()({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(0).then(r.bind(null,54))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 54}}),s=c()({chunkName:function(){return"hero-components-ListButton"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(22).then(r.bind(null,74))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 74}}),f=c()({chunkName:function(){return"hero-components-List"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(21).then(r.bind(null,75))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 75}}),h=function(e){e.image;var n=e.content,r=n.lists,t=n.navLinks,a=n.title;return o.a.createElement("article",{className:"hero-vertical-half-media-half-article"},o.a.createElement(l,{data:{src:"https://via.placeholder.com/325x300",alt:"placeholder",cssClass:"vertical"}}),o.a.createElement("div",{className:"list-wrapper"},o.a.createElement("header",null,o.a.createElement("h1",null,a)),o.a.createElement("ul",null,t.map(function(e,n){return o.a.createElement("li",null,o.a.createElement(s,{key:n,name:e.name}))})),o.a.createElement("div",{className:"list-node-wrapper"},r.map(function(e,n){return o.a.createElement(f,{key:n,list:e})}))))};n.a=h},99:function(e,n,r){}};