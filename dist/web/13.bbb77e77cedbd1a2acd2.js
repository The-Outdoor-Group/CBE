(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13],{369:function(e,n,t){"use strict";t.r(n),function(e){var r=t(346),a=t.n(r),c=t(2),o=t.n(c),i=t(391),u=t(21),l=t(98),s=t(9),f=t(402),h=t.n(f),m=Object(u.a)({chunkName:function(){return"MoreInfoComponent"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(6).then(t.bind(null,372))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 372}}),v=function(e){var n=Object(c.useState)(!1),t=a()(n,2),r=t[0],u=t[1],l=Object(c.useState)(null),s=a()(l,2),f=(s[0],s[1]),h=Object(c.useState)(null),v=a()(h,2),d=v[0],y=v[1];Object(c.useEffect)(function(){!function(){var n=e.data.moreInfoHandle,t=e.openMoreInfoPanel,r=e.elMatchForScrolling;t?(u(!0),n!==r&&y("hidden")):(y(null),f(null),u(!1))}()},[e.openMoreInfoPanel]);var p=e.data,b=p.cssClass,q=p.moreInfoHandle;return o.a.createElement("section",{id:q||null,className:"hero-region ".concat(b," ").concat(null!==d?d:"")},Object(i.a)({props:e.data,showInfo:function(){return function(n,t){e.setMoreInfoPanelVisibility(n),e.setIdMatchForParentContainer(t),u(n),f(t)}()}}),o.a.createElement(m,{showInfo:r,handle:q}))},d=function(e){var n=e.sharedUiState;return{openMoreInfoPanel:n.openMoreInfoPanel,elMatchForScrolling:n.elMatchForScrolling}};n.default=Object(l.b)(d,{setMoreInfoPanelVisibility:s.s,setIdMatchForParentContainer:s.q})(v)}.call(this,"/")},391:function(e,n,t){"use strict";t(2);var r=t(392),a=t(394),c=t(396),o=t(398),i=t(400);n.a=function(e){var n=e.props,t=e.showInfo;switch(n.type){case"heroHorizontalWhole":return Object(r.a)(n);case"heroVerticalQuarterArticleThreeQuarterMedia":return Object(a.a)(n,t);case"heroHorizontalThreeQuarterMediaQuarterArticle":return Object(c.a)(n,t);case"heroVerticalThreeQuarterMediaQuarterArticle":return Object(o.a)(n,t);case"heroVerticalHalfMediaHalfArticle":return Object(i.a)(n);default:return null}}},392:function(e,n,t){"use strict";(function(e){var r=t(2),a=t.n(r),c=t(21),o=t(393),i=t.n(o),u=Object(c.a)({chunkName:function(){return"hero-components-TitleHeader"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(25).then(t.bind(null,374))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 374}}),l=Object(c.a)({chunkName:function(){return"hero-components-Stats"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(3).then(t.bind(null,361))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 361}}),s=function(e){var n=e.stats,t=e.title;return a.a.createElement("article",{className:"hero-horizontal-whole-component"},a.a.createElement(u,{title:t}),a.a.createElement(l,{stats:n}))};n.a=s}).call(this,"/")},393:function(e,n,t){},394:function(e,n,t){"use strict";(function(e){var r=t(2),a=t.n(r),c=t(21),o=t(395),i=t.n(o),u=Object(c.a)({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(24).then(t.bind(null,362))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 362}}),l=Object(c.a)({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,357))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 357}}),s=function(e,n){var t=e.cssClass,r=e.textArticle,c=e.moreInfoHandle;return a.a.createElement("article",{className:"hero-vertical-quarter-article-three-quarter-media"},a.a.createElement(u,{showMoreInfo:n,copy:r,colorTheme:t,moreInfoHandle:c}),a.a.createElement("div",null,a.a.createElement(l,{data:{src:"https://via.placeholder.com/975x800",alt:"placeholder",cssClass:"vertical"}})))};n.a=s}).call(this,"/")},395:function(e,n,t){},396:function(e,n,t){"use strict";(function(e){var r=t(2),a=t.n(r),c=t(21),o=t(397),i=t.n(o),u=Object(c.a)({chunkName:function(){return"hero-components-Stats"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(3).then(t.bind(null,361))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 361}}),l=Object(c.a)({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(24).then(t.bind(null,362))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 362}}),s=Object(c.a)({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,357))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 357}}),f=function(e,n){var t=e.cssClass,r=e.stats,c=e.textArticle,o=e.moreInfoHandle;return a.a.createElement("article",{className:"hero-horizontal-three-quarter-media-quarter-article"},a.a.createElement("div",{className:"full-image-height"},a.a.createElement(s,{data:{src:"https://via.placeholder.com/1380x600",alt:"placeholder",cssClass:"horizontal"}}),a.a.createElement(u,{stats:r})),a.a.createElement(l,{showMoreInfo:n,copy:c,colorTheme:t,moreInfoHandle:o}))};n.a=f}).call(this,"/")},397:function(e,n,t){},398:function(e,n,t){"use strict";(function(e){var r=t(2),a=t.n(r),c=t(21),o=t(399),i=t.n(o),u=function e(n,r){var o=n.cssClass,i=n.textArticle,u=n.video,l=n.stats,s=n.moreInfoHandle,f=Object(c.a)({chunkName:function(){return"hero-components-TextArticle"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(24).then(t.bind(null,362))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 362}}),h=Object(c.a)({chunkName:function(){return"hero-components-VideoComponent"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(26).then(t.bind(null,375))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 375}});return a.a.createElement("article",{className:"hero-vertical-three-quarter-media-quarter-article"},a.a.createElement(h,{video:u,stats:l}),a.a.createElement(f,{showMoreInfo:r,copy:i,colorTheme:o,moreInfoHandle:s}))};n.a=u}).call(this,"/")},399:function(e,n,t){},400:function(e,n,t){"use strict";(function(e){var r=t(2),a=t.n(r),c=t(21),o=t(401),i=t.n(o),u=Object(c.a)({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(1).then(t.bind(null,357))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 357}}),l=Object(c.a)({chunkName:function(){return"hero-components-ListButton"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(23).then(t.bind(null,376))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 376}}),s=Object(c.a)({chunkName:function(){return"hero-components-List"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(22).then(t.bind(null,377))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 377}}),f=function(e){e.image;var n=e.content,t=n.lists,r=n.navLinks,c=n.title;return a.a.createElement("article",{className:"hero-vertical-half-media-half-article"},a.a.createElement(u,{data:{src:"https://via.placeholder.com/325x300",alt:"placeholder",cssClass:"vertical"}}),a.a.createElement("div",{className:"list-wrapper"},a.a.createElement("header",null,a.a.createElement("h1",null,c)),a.a.createElement("ul",null,r.map(function(e,n){return a.a.createElement("li",null,a.a.createElement(l,{key:n,name:e.name}))})),a.a.createElement("div",{className:"list-node-wrapper"},t.map(function(e,n){return a.a.createElement(s,{key:n,list:e})}))))};n.a=f}).call(this,"/")},401:function(e,n,t){},402:function(e,n,t){}}]);