exports.ids=[35],exports.modules={34:function(e,t,n){"use strict";n.r(t);var l=n(46),o=n.n(l),i=n(47),r=n.n(i),c=n(48),u=n.n(c),a=n(49),s=n.n(a),p=n(50),h=n.n(p),d=n(0),f=n.n(d),m=n(11),y=n(8),v=function(e){function t(){return o()(this,t),u()(this,s()(t).apply(this,arguments))}return h()(t,e),r()(t,[{key:"componentWillMount",value:function(){this.props.getShopifyCollection(this.props.match)}},{key:"render",value:function(){return f.a.createElement(d.Suspense,{fallback:f.a.createElement("h1",null,"Loading ...")},f.a.createElement("div",null,f.a.createElement("h1",null,"The Collections Page ",this.props.title)))}}]),t}(d.Component);t.default=Object(m.connect)(function(e){var t=e.currentShopifyCollection;return{handle:t.handle,title:t.title,products:t.products}},{getShopifyCollection:y.d})(v)}};