exports.ids=[2],exports.modules={22:function(e,n,t){"use strict";t.r(n);var r=t(13),s=t.n(r),u=t(14),l=t.n(u),o=t(15),i=t.n(o),c=t(16),a=t.n(c),p=t(17),f=t.n(p),h=t(0),m=t.n(h),d=t(7),v=t(12),E=t(4),y=function(e){function n(){return s()(this,n),i()(this,a()(n).apply(this,arguments))}return f()(n,e),l()(n,[{key:"componentWillMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){var e=this.props.users;return m.a.createElement("div",null,m.a.createElement(d.Helmet,null,m.a.createElement("title",null,"Users")),this.props.users.length>0?e.map(function(e){return m.a.createElement("p",{key:e.id},e.owner.login)}):m.a.createElement("h1",null,"No users"))}}]),n}(h.Component);n.default=Object(v.connect)(function(e){return{users:e.users}},{fetchUsers:E.d})(y)}};