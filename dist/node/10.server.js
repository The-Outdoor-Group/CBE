exports.ids=[10],exports.modules={70:function(e,n,t){"use strict";t.r(n);var r=t(37),a=t.n(r),i=t(38),l=t.n(i),s=t(39),o=t.n(s),c=t(40),u=t.n(c),h=t(47),p=t.n(h),d=t(41),m=t.n(d),f=t(0),v=t.n(f),k=t(4),C=t.n(k),E=C()({chunkName:function(){return"hero-components-Image"},isReady:function(e){return!!t.m[this.resolve(e)]},requireAsync:function(){return t.e(0).then(t.bind(null,55))},requireSync:function e(n){var r=this.resolve(n);return t(r)},resolve:function e(){return 55}}),g=function(e){function n(){var e;return a()(this,n),(e=o()(this,u()(n).call(this))).handleClick=e.handleClick.bind(p()(e)),e}return m()(n,e),l()(n,[{key:"handleClick",value:function(){console.log("pass the src to parent, and the parent should load a modal with the same img but higher res"),this.props.showHiRes({src:this.props.src})}},{key:"render",value:function(){var e=this;return v.a.createElement("li",{onClick:this.handleClick},v.a.createElement("div",null,v.a.createElement("h4",null,"The CBE ",this.props.title),v.a.createElement("ul",{className:"product-image-details"},e.props.productDetail.map(function(e,n){return v.a.createElement("li",null,e.name," - ",e.value)}))),v.a.createElement(E,{data:{src:this.props.src,alt:"The CBE ".concat(this.props.title)}}))}}]),n}(f.Component);n.default=g}};