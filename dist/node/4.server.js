exports.ids=[4,28],exports.modules={62:function(e,t,l){"use strict";l.d(t,"a",function(){return a});l(0);var n=function(e){return"dark"===e?"#000":"#FFF"},r=function(e,t){return e===t?["1px solid","0.25rem"]:[]},a=function(e){return e.mobileLayout?e.mainUrl&&null!==e.mainUrl&&e.link===e.mainUrl?{background:"#ccc",padding:"1rem",color:"000"}:{color:"#000"}:e.mainUrl&&null!==e.mainUrl&&e.link===e.mainUrl?{color:n(e.colorTheme),borderBottom:r(e.link,e.mainUrl)[0],paddingBottom:r(e.link,e.mainUrl)[1]}:{color:n(e.colorTheme)}}},63:function(e,t,l){"use strict";l.r(t);var n=l(0),r=l.n(n),a=l(5);t.default=function(e){console.log("SharedMainList props: ",e);var t=e.colorTheme,l=e.mainUrl,n=e.mobileLayout,i=function(){return!!e.getStyle},o=function(){return!!e.opacityStyle};return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(a.Link,{to:"/arrow-rest",onClick:function(){return e.setMainUrl("/arrow-rest")},style:e.getStyle({colorTheme:t,link:"/arrow-rest",mainUrl:l,mobileLayout:n})},"Arrow Rest")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(a.Link,{to:"/stabilizers",onClick:function(){return e.setMainUrl("/stabilizers")},style:i()?e.getStyle({colorTheme:t,link:"/stabilizers",mainUrl:l,mobileLayout:n}):null},"Stabilizers")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(a.Link,{to:"/quivers",onClick:function(){return e.setMainUrl("/quivers")},style:i()?e.getStyle({colorTheme:t,link:"/quivers",mainUrl:l,mobileLayout:n}):null},"Quivers")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(a.Link,{to:"/sights",onClick:function(){return e.setMainUrl("/sights")},style:i()?e.getStyle({colorTheme:t,link:"/sights",mainUrl:l,mobileLayout:n}):null},"Sights")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(a.Link,{to:"/product",onClick:function(){return e.setMainUrl("/product")},style:i()?e.getStyle({colorTheme:t,link:"/product",mainUrl:l,mobileLayout:n}):null},"Accessories")))}},66:function(e,t,l){"use strict";l.r(t);var n=l(36),r=l.n(n),a=l(0),i=l.n(a),o=l(63),c=l(8),s=l(5),u=l(62),m=l(3),y=l(53);t.default=Object(c.connect)(function(e){var t=e.sharedUiState;return{secondaryMenuVisible:t.secondaryMenuVisible,mainUrl:t.mainUrl}},{setMainUrl:m.u})(function(e){var t=e.colorTheme,l=e.showAllLinks,n=e.mainUrl,c=e.secondaryMenuVisible,m=Object(a.useState)("dark"),U=r()(m,2),f=U[0],k=U[1];return Object(a.useEffect)(function(){k(c?"dark":t)}),Object(a.useEffect)(function(){if(process.env.IS_BROWSER){var t=Object(y.createBrowserHistory)();e.setMainUrl(t.location.pathname)}},[e.mainUrl]),i.a.createElement(i.a.Fragment,null,l?i.a.createElement(o.default,{opacityStyle:function(){return c?"fade":null},setMainUrl:e.setMainUrl,getStyle:u.a,colorTheme:e.colorTheme,mainUrl:e.mainUrl,mobileLayout:!l}):null,i.a.createElement("li",null,i.a.createElement(s.Link,{to:"/shop",onClick:function(){return e.setMainUrl("/shop")},style:Object(u.a)({colorTheme:t,link:"/shop",mainUrl:n})},"Shop")),i.a.createElement("li",null,i.a.createElement(s.Link,{id:"cart",to:"/cart",onClick:function(){return e.setMainUrl("/cart")},style:Object(u.a)({colorTheme:f,link:"/cart",mainUrl:n})},"Cart")))})}};