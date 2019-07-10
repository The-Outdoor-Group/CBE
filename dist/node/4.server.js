exports.ids=[4,48],exports.modules={59:function(e,t,l){"use strict";l.d(t,"a",function(){return i});l(0);var n=function(e){return"dark"===e?"#000":"#FFF"},r=function(e,t){return e===t?["1px solid","0.25rem"]:[]},i=function(e){return e.mobileLayout?e.mainUrl&&null!==e.mainUrl&&e.link===e.mainUrl?{background:"#ccc",padding:"1rem",color:"000"}:{color:"#000"}:e.mainUrl&&null!==e.mainUrl&&e.link===e.mainUrl?{color:n(e.colorTheme),borderBottom:r(e.link,e.mainUrl)[0],paddingBottom:r(e.link,e.mainUrl)[1]}:{color:n(e.colorTheme)}}},60:function(e,t,l){"use strict";l.r(t);var n=l(0),r=l.n(n),i=l(5);t.default=function(e){console.log("SharedMainList props: ",e);var t=e.colorTheme,l=e.mainUrl,n=e.mobileLayout,a=function(){return!!e.getStyle},o=function(){return!!e.opacityStyle};return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(i.Link,{to:"/arrow-rest",onClick:function(){return e.setMainUrl("/arrow-rest")},style:e.getStyle({colorTheme:t,link:"/arrow-rest",mainUrl:l,mobileLayout:n})},"Arrow Rest")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(i.Link,{to:"/stabilizers",onClick:function(){return e.setMainUrl("/stabilizers")},style:a()?e.getStyle({colorTheme:t,link:"/stabilizers",mainUrl:l,mobileLayout:n}):null},"Stabilizers")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(i.Link,{to:"/quivers",onClick:function(){return e.setMainUrl("/quivers")},style:a()?e.getStyle({colorTheme:t,link:"/quivers",mainUrl:l,mobileLayout:n}):null},"Quivers")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(i.Link,{to:"/sights",onClick:function(){return e.setMainUrl("/sights")},style:a()?e.getStyle({colorTheme:t,link:"/sights",mainUrl:l,mobileLayout:n}):null},"Sights")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(i.Link,{to:"/product",onClick:function(){return e.setMainUrl("/product")},style:a()?e.getStyle({colorTheme:t,link:"/product",mainUrl:l,mobileLayout:n}):null},"Accessories")),r.a.createElement("li",{className:o()?e.opacityStyle:null},r.a.createElement(i.Link,{to:"/wishlist",onClick:function(){return e.setMainUrl("/wishlist")},style:a()?e.getStyle({colorTheme:t,link:"/wishlist",mainUrl:l,mobileLayout:n}):null},"Wishlist")))}},64:function(e,t,l){"use strict";l.r(t);var n=l(38),r=l.n(n),i=l(0),a=l.n(i),o=l(60),c=l(9),s=l(5),u=l(59),m=l(3),y=l(49);t.default=Object(c.connect)(function(e){var t=e.sharedUiState;return{secondaryMenuVisible:t.secondaryMenuVisible,mainUrl:t.mainUrl}},{setMainUrl:m.u})(function(e){var t=e.colorTheme,l=e.showAllLinks,n=e.mainUrl,c=e.secondaryMenuVisible,m=Object(i.useState)("dark"),U=r()(m,2),k=U[0],f=U[1];return Object(i.useEffect)(function(){f(c?"dark":t)}),Object(i.useEffect)(function(){if(process.env.IS_BROWSER){var t=Object(y.createBrowserHistory)();e.setMainUrl(t.location.pathname)}},[e.mainUrl]),a.a.createElement(a.a.Fragment,null,l?a.a.createElement(o.default,{opacityStyle:function(){return c?"fade":null},setMainUrl:e.setMainUrl,getStyle:u.a,colorTheme:e.colorTheme,mainUrl:e.mainUrl,mobileLayout:!l}):null,a.a.createElement("li",null,a.a.createElement(s.Link,{to:"/shop",onClick:function(){return e.setMainUrl("/shop")},style:Object(u.a)({colorTheme:t,link:"/shop",mainUrl:n})},"Shop")),a.a.createElement("li",null,a.a.createElement(s.Link,{id:"cart",to:"/cart",onClick:function(){return e.setMainUrl("/cart")},style:Object(u.a)({colorTheme:k,link:"/cart",mainUrl:n})},"Cart")))})}};