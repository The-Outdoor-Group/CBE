exports.ids=[9],exports.modules={63:function(e,t,r){"use strict";r.r(t);var n=r(41),c=r.n(n),a=r(0),u=r.n(a),i=r(13),s=r(3),o=r(55);r(86);t.default=Object(i.connect)(function(e){return{sharedUiState:e.sharedUiState}},{setSecondaryNavState:s.t})(function(e){var t=Object(a.createRef)(),r=Object(a.createRef)(),n=Object(a.createRef)(),i=Object(a.useState)(!1),s=c()(i,2),l=s[0],f=s[1];Object(a.useEffect)(function(){Object(o.h)(e.colorTheme,[t.current,r.current,n.current])},[e.colorTheme]),Object(a.useEffect)(function(){l?Object(o.a)(t.current,r.current,n.current).play():Object(o.b)(t.current,r.current,n.current).play(),e.setSecondaryNavState(l)},[l,e.sharedUiState.secondaryMenuVisible]);return u.a.createElement("svg",{onClick:function(){return f(!l)},id:"secondary-menu-icon","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28"},u.a.createElement("line",{ref:t,className:"hamburger-line",y1:"5",x2:"28",y2:"5"}),u.a.createElement("line",{ref:r,className:"hamburger-line",y1:"12",x2:"28",y2:"12"}),u.a.createElement("line",{ref:n,className:"hamburger-line",y1:"19",x2:"28",y2:"19"}))})},86:function(e,t,r){}};