(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13],{365:function(e,n,r){"use strict";r.r(n);var t=r(342),a=r.n(t),o=r(2),c=r.n(o),u=r(387),i=r(21),l=r(97),s=r(9),f=r(398),h=r.n(f),m=Object(i.a)({chunkName:function(){return"MoreInfoComponent"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(6).then(r.bind(null,368))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 368}}),v=function(e){var n=Object(o.useState)(!1),r=a()(n,2),t=r[0],i=r[1],l=Object(o.useState)(null),s=a()(l,2),f=(s[0],s[1]),h=Object(o.useState)(null),v=a()(h,2),d=v[0],y=v[1];Object(o.useEffect)(function(){!function(){var n=e.data.moreInfoHandle,r=e.openMoreInfoPanel,t=e.elMatchForScrolling;r?(i(!0),n!==t&&y("hidden")):(y(null),f(null),i(!1))}()},[e.openMoreInfoPanel]);var p=e.data,b=p.cssClass,q=p.moreInfoHandle;return c.a.createElement("section",{id:q||null,className:"hero-region ".concat(b," ").concat(null!==d?d:"")},Object(u.a)({props:e.data,showInfo:function(){return function(n,r){e.setMoreInfoPanelVisibility(n),e.setIdMatchForParentContainer(r),i(n),f(r)}()}}),c.a.createElement(m,{showInfo:t,handle:q}))},d=function(e){var n=e.sharedUiState;return{openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(l.b)(d,{setMoreInfoPanelVisibility:s.s,setIdMatchForParentContainer:s.q})(v)},387:function(e,n,r){"use strict";r(2);var t=r(388),a=r(390),o=r(392),c=r(394),u=r(396);n.a=function(e){var n=e.props,r=e.showInfo;switch(n.type){case"heroHorizontalWhole":return Object(t.a)(n);case"heroVerticalQuarterArticleThreeQuarterMedia":return Object(a.a)(n,r);case"heroHorizontalThreeQuarterMediaQuarterArticle":return Object(o.a)(n,r);case"heroVerticalThreeQuarterMediaQuarterArticle":return Object(c.a)(n,r);case"heroVerticalHalfMediaHalfArticle":return Object(u.a)(n);default:return null}}},388:function(e,n,r){"use strict";var t=r(2),a=r.n(t),o=r(21),c=r(389),u=r.n(c),i=Object(o.a)({chunkName:function(){return"hero-components-TitleHeader"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(25).then(r.bind(null,370))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 370}}),l=Object(o.a)({chunkName:function(){return"hero-components-Stats"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(3).then(r.bind(null,357))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 357}}),s=function(e){var n=e.stats,r=e.title;return a.a.createElement("article",{className:"hero-horizontal-whole-component"},a.a.createElement(i,{title:r}),a.a.createElement(l,{stats:n}))};n.a=s},389:function(e,n,r){},390:function(e,n,r){"use strict";var t=r(2),a=r.n(t),o=r(21),c=r(391),u=r.n(c),i=Object(o.a)({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(24).then(r.bind(null,358))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 358}}),l=Object(o.a)({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(1).then(r.bind(null,353))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 353}}),s=function(e,n){var r=e.cssClass,t=e.textArticle,o=e.moreInfoHandle;return a.a.createElement("article",{className:"hero-vertical-quarter-article-three-quarter-media"},a.a.createElement(i,{showMoreInfo:n,copy:t,colorTheme:r,moreInfoHandle:o}),a.a.createElement("div",{className:"media-wrapper"},a.a.createElement(l,{data:{src:"https://via.placeholder.com/975x800",alt:"placeholder",cssClass:"vertical"}})))};n.a=s},391:function(e,n,r){},392:function(e,n,r){"use strict";var t=r(2),a=r.n(t),o=r(21),c=r(393),u=r.n(c),i=Object(o.a)({chunkName:function(){return"hero-components-Stats"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(3).then(r.bind(null,357))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 357}}),l=Object(o.a)({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(24).then(r.bind(null,358))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 358}}),s=Object(o.a)({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(1).then(r.bind(null,353))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 353}}),f=function(e,n){var r=e.cssClass,t=e.stats,o=e.textArticle,c=e.moreInfoHandle;return a.a.createElement("article",{className:"hero-horizontal-three-quarter-media-quarter-article"},a.a.createElement("div",{className:"full-image-height"},a.a.createElement(s,{data:{src:"https://via.placeholder.com/1380x600",alt:"placeholder",cssClass:"horizontal"}}),a.a.createElement(i,{stats:t})),a.a.createElement(l,{showMoreInfo:n,copy:o,colorTheme:r,moreInfoHandle:c}))};n.a=f},393:function(e,n,r){},394:function(e,n,r){"use strict";var t=r(2),a=r.n(t),o=r(21),c=r(395),u=r.n(c),i=function e(n,t){var c=n.cssClass,u=n.textArticle,i=n.video,l=n.stats,s=n.moreInfoHandle,f=Object(o.a)({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(24).then(r.bind(null,358))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 358}}),h=Object(o.a)({chunkName:function(){return"hero-components-VideoComponent"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(26).then(r.bind(null,371))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 371}});return a.a.createElement("article",{className:"hero-vertical-three-quarter-media-quarter-article"},a.a.createElement(h,{video:i,stats:l}),a.a.createElement(f,{showMoreInfo:t,copy:u,colorTheme:c,moreInfoHandle:s}))};n.a=i},395:function(e,n,r){},396:function(e,n,r){"use strict";var t=r(2),a=r.n(t),o=r(21),c=r(397),u=r.n(c),i=Object(o.a)({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(1).then(r.bind(null,353))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 353}}),l=Object(o.a)({chunkName:function(){return"hero-components-ListButton"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(23).then(r.bind(null,372))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 372}}),s=Object(o.a)({chunkName:function(){return"hero-components-List"},isReady:function(e){return!!r.m[this.resolve(e)]},requireAsync:function(){return r.e(22).then(r.bind(null,373))},requireSync:function e(n){var t=this.resolve(n);return r(t)},resolve:function e(){return 373}}),f=function(e){e.image;var n=e.content,r=n.lists,t=n.navLinks,o=n.title;return a.a.createElement("article",{className:"hero-vertical-half-media-half-article"},a.a.createElement(i,{data:{src:"https://via.placeholder.com/325x300",alt:"placeholder",cssClass:"vertical"}}),a.a.createElement("div",{className:"list-wrapper"},a.a.createElement("header",null,a.a.createElement("h1",null,o)),a.a.createElement("ul",null,t.map(function(e,n){return a.a.createElement("li",null,a.a.createElement(l,{key:n,name:e.name}))})),a.a.createElement("div",{className:"list-node-wrapper"},r.map(function(e,n){return a.a.createElement(s,{key:n,list:e})}))))};n.a=f},397:function(e,n,r){},398:function(e,n,r){}}]);