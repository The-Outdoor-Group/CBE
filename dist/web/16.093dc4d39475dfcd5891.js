(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{399:function(e,t,n){"use strict";var r=n(347),a=n.n(r),i=n(353),l=n.n(i),u=function(){return window.innerWidth<=768},c=n(2);n.d(t,"a",function(){return o});var o=function(e){var t=Object(c.useState)(e),n=a()(t,2),r=n[0],i=(n[1],Object(c.useState)(r.innerWidth)),o=a()(i,2),s=o[0],m=o[1],f=Object(c.useState)(null),h=a()(f,2),d=h[0],v=h[1];return r.innerWidth!==s&&m(r.innerWidth),Object(c.useEffect)(function(){var e=function(){return v(!!u())},t=l()(e,500);return r.addEventListener("resize",t),e(),function(){return r.removeEventListener("resize",t)}}),d}},422:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(430),l=n(431),u=n(432),c=n(433),o=n(434),s=function(e){var t=e.type,n=e.content;switch(t){case"heroHorizontalFullImageSlider":return Object(i.a)(n);case"heroImageTileSlider":return Object(l.a)(n);case"heroHorizontalTwoTiles":return Object(u.a)(n);case"heroHorizontalImageAndHeaderSpreadTile":return Object(c.a)(n);case"heroVerticalTilesOneLeftTwoRight":return Object(o.a)(n);default:return null}};n(378),t.default=function(e){var t=e.data;return a.a.createElement("section",{className:"shop-hero-region"},s(t))}},430:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(23),l=n(372),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,397))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 397}}),o=function(e){var t=e.tiles[0],n=t.image,r=t.title;return a.a.createElement("article",{className:"hero-horizontal-full-image-slider"},a.a.createElement(c,{data:{title:r,image:n}}))};t.a=o},431:function(e,t,n){"use strict";var r=n(347),a=n.n(r),i=n(2),l=n.n(i),u=n(23),c=n(373),o=n.n(c),s=n(399),m=n(374),f=n.n(m),h=Object(u.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,397))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 397}}),d=function(e){var t,n=Object(i.useState)(null),r=a()(n,2),u=r[0],o=r[1];t=Object(s.a)(window),Object(i.useEffect)(function(){o(!t)});var m=e.tiles,f=e.title,d=function(){return m.map(function(e,t){return l.a.createElement("div",{className:"container",key:t},l.a.createElement(h,{data:e}))})};return l.a.createElement("article",{className:"hero-image-tile-slider"},l.a.createElement("header",null,l.a.createElement("h1",null,f)),l.a.createElement("div",{className:"tile-wrapper"},u&&null!==u?d():l.a.createElement(c.Carousel,{autoPlay:!0,showArrows:!0,showThumbs:!1,showStatus:!1,showIndicators:!1,infiniteLoop:!0,stopOnHover:!0,swipeable:!0,centerMode:!0,interval:4e3,transitionTime:750},d())))};t.a=d},432:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(23),l=n(375),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,397))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 397}}),o=function(e){var t=e.title,n=e.tiles;return a.a.createElement("article",{className:"hero-horizontal-two-tiles"},a.a.createElement("header",null,a.a.createElement("h1",null,t)),a.a.createElement("ul",null,n.map(function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(c,{data:{title:e.title,image:e.image}}))})))};t.a=o},433:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(23),l=n(376),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,397))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 397}}),o=function(e){var t=e.title,n=e.tiles;return a.a.createElement("article",{className:"hero-horizontal-image-header-spread-tile"},a.a.createElement("header",null,a.a.createElement("h1",null,t)),n.map(function(e,t){return a.a.createElement(c,{key:t,data:{title:e.title,image:e.image}})}))};t.a=o},434:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(23),l=n(377),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,397))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 397}}),o=function(e){console.log("props: ",e);var t=e.title,n=e.tiles;return a.a.createElement("article",{className:"hero-vertical-tiles-one-left-two-right"},a.a.createElement("header",null,a.a.createElement("h1",null,t)),a.a.createElement("div",{className:"image-tile-nodes-wrapper"},n.map(function(e,t){return a.a.createElement(c,{key:t,data:{title:e.title,image:e.image}})})))};t.a=o}}]);