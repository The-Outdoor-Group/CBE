exports.ids=[4],exports.modules={57:function(e,n,t){"use strict";t.r(n);var r=t(13),i=t.n(r),o=t(14),a=t.n(o),s=t(15),c=t.n(s),u=t(16),l=t.n(u),m=t(17),d=t.n(m),p=t(0),f=t.n(p),h=t(18),y=t.n(h),g=t(5),v=t.n(g),I=t(3),x=t(58),b=t(82),A=t.n(b),E=v()({chunkName:function(){return"more-info-components-container-MoreInfoArticle"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(20).then(t.bind(null,61))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 61}}),j=[{type:"moreInfoHorizontalTopArticleThirdsBottomImage",content:{headerArticles:[{h3:"Header Article 1",p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{h3:"Header Article 1",p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{h3:"Header Article 1",p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}],image:{src:"https://placeholder.com/150",alt:"This is a placeholder"}}}],k=function(e){function n(){return i()(this,n),c()(this,l()(n).apply(this,arguments))}return d()(n,e),a()(n,[{key:"render",value:function(){var e=this,n=this.props,t=(n.handle,n.showInfo);return f.a.createElement("section",{className:"more-info-panel ".concat(function(e){return e?"":"hidden"}(t))},j.map(function(e,n){return f.a.createElement(E,{key:n,data:e})}),f.a.createElement("span",{className:"more-info-close",onClick:function(){return e.props.setMoreInfoPanelVisibility(!1)}},"x close"))}}]),n}(p.Component),H=function(e){return{sharedUiState:e.sharedUiState}};n.default=Object(h.connect)(H,{setMoreInfoPanelVisibility:I.s})(k)},58:function(e,n,t){"use strict";t(0);var r=t(81);n.a=function(e){var n=e.props,t=n.type,i=n.content;switch(console.log("content: ",i),t){case"moreInfoHorizontalTopArticleThirdsBottomImage":return Object(r.a)(i);default:return null}}},81:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(5),a=t.n(o),s=a()({chunkName:function(){return"media-assets-Image"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(19).then(t.bind(null,62))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function(){return 62}}),c=function(e){var n=e.image;return console.log("image: ",n),i.a.createElement("article",null,i.a.createElement("h1",null,"yo man"),i.a.createElement("div",null," /* loop thru array of text entry objects */ "),i.a.createElement(s,{data:n})," // shouldn't be an image. Should go to index.js. indexjs will call proper video, image or 3d based on asset file name ext")};n.a=c},82:function(e,n,t){}};