(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{161:function(e,n,t){"use strict";t.r(n);var r=t(23),s=t.n(r),u=t(24),l=t.n(u),i=t(25),o=t.n(i),a=t(26),c=t.n(a),p=t(27),_=t.n(p),h=t(1),f=t.n(h),m=t(94),E=t(39),d=t(41),A=function(e){function n(){return s()(this,n),o()(this,c()(n).apply(this,arguments))}return _()(n,e),l()(n,[{key:"componentWillMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){var e=this.props.users;return f.a.createElement("div",null,f.a.createElement(m.Helmet,null,f.a.createElement("title",null,"Users")),0<this.props.users.length?e.map(function(e){return f.a.createElement("p",{key:e.id},e.owner.login)}):f.a.createElement("h1",null,"No Users"))}}]),n}(h.Component);n.default=Object(E.b)(function(e){return{users:e.users}},{fetchUsers:d.d})(A)}}]);