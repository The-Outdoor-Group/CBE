(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{413:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(421),l=n(422),u=n(423),c=n(424),o=n(425),s=function(e){var t=e.type,n=e.content;switch(t){case"heroHorizontalFullImageSlider":return Object(i.a)(n);case"heroImageTileSlider":return Object(l.a)(n);case"heroHorizontalTwoTiles":return Object(u.a)(n);case"heroHorizontalImageAndHeaderSpreadTile":return Object(c.a)(n);case"heroVerticalTilesOneLeftTwoRight":return Object(o.a)(n);default:return null}};n(367),t.default=function(e){var t=e.data;return a.a.createElement("section",{className:"shop-hero-region"},s(t))}},421:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(21),l=n(362),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,389))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 389}}),o=function(e){var t=e.tiles[0],n=t.image,r=t.title;return a.a.createElement("article",{className:"hero-horizontal-full-image-slider"},a.a.createElement(c,{data:{title:r,image:n}}))};t.a=o},422:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(21),l=n(363),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,389))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 389}}),o=function(e){var t=e.tiles,n=e.title;return a.a.createElement("article",{className:"hero-image-tile-slider"},a.a.createElement("header",null,a.a.createElement("h1",null,n)),a.a.createElement("button",null,"previous"),a.a.createElement("ul",null,t.map(function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(c,{data:e}))}))," ",a.a.createElement("button",null,"next"))};t.a=o},423:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(21),l=n(364),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,389))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 389}}),o=function(e){var t=e.title,n=e.tiles;return a.a.createElement("article",{className:"hero-horizontal-two-tiles"},a.a.createElement("header",null,a.a.createElement("h1",null,t)),a.a.createElement("ul",null,n.map(function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(c,{data:{title:e.title,image:e.image}}))})))};t.a=o},424:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(21),l=n(365),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,389))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 389}}),o=function(e){var t=e.title,n=e.tiles;return a.a.createElement("article",{className:"hero-horizontal-image-header-spread-tile"},a.a.createElement("header",null,a.a.createElement("h1",null,t)),n.map(function(e,t){return a.a.createElement(c,{key:t,data:{title:e.title,image:e.image}})}))};t.a=o},425:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(21),l=n(366),u=n.n(l),c=Object(i.a)({chunkName:function(){return"image-tiles-ImageTile"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,389))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 389}}),o=function(e){console.log("props: ",e);var t=e.title,n=e.tiles;return a.a.createElement("article",{className:"hero-vertical-tiles-one-left-two-right"},a.a.createElement("header",null,a.a.createElement("h1",null,t)),a.a.createElement("div",{className:"image-tile-nodes-wrapper"},n.map(function(e,t){return a.a.createElement(c,{key:t,data:{title:e.title,image:e.image}})})))};t.a=o}}]);