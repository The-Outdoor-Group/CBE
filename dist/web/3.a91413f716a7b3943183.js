(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[3],{392:function(e,t,n){"use strict";n.r(t);var r=n(338),l=n.n(r),a=n(2),i=n.n(a),c=n(55),o=n(74),s=n(393),u=n(9),m=n(19);t.default=Object(c.b)(function(e){var t=e.sharedUiState;return{secondaryMenuVisible:t.secondaryMenuVisible,mainUrl:t.mainUrl}},{setMainUrl:u.u})(function(e){var t=e.colorTheme,n=e.showAllLinks,r=e.mainUrl,c=e.secondaryMenuVisible,u=function(){return c?"fade":null},b=Object(a.useState)("dark"),U=l()(b,2),f=U[0],h=U[1];return Object(a.useEffect)(function(){h(c?"dark":t)}),Object(a.useEffect)(function(){var t=Object(m.a)();e.setMainUrl(t.location.pathname)},[e.mainUrl]),i.a.createElement(i.a.Fragment,null,n?i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:u()},i.a.createElement(o.b,{to:"/arrow-rest",onClick:function(){return e.setMainUrl("/arrow-rest")},style:Object(s.a)({colorTheme:t,link:"/arrow-rest",mainUrl:r})},"Arrow Rest")),i.a.createElement("li",{className:u()},i.a.createElement(o.b,{to:"/stabilizers",onClick:function(){return e.setMainUrl("/stabilizers")},style:Object(s.a)({colorTheme:t,link:"/stabilizers",mainUrl:r})},"Stabilizers")),i.a.createElement("li",{className:u()},i.a.createElement(o.b,{to:"/quivers",onClick:function(){return e.setMainUrl("/quivers")},style:Object(s.a)({colorTheme:t,link:"/quivers",mainUrl:r})},"Quivers")),i.a.createElement("li",{className:u()},i.a.createElement(o.b,{to:"/sights",onClick:function(){return e.setMainUrl("/sights")},style:Object(s.a)({colorTheme:t,link:"/sights",mainUrl:r})},"Sights")),i.a.createElement("li",{className:u()},i.a.createElement(o.b,{to:"/product",onClick:function(){return e.setMainUrl("/product")},style:Object(s.a)({colorTheme:t,link:"/product",mainUrl:r})},"Accessories")),i.a.createElement("li",{className:u()},i.a.createElement(o.b,{to:"/shop",onClick:function(){return e.setMainUrl("/shop")},style:Object(s.a)({colorTheme:t,link:"/shop",mainUrl:r})},"Shop"))):null,i.a.createElement("li",null,i.a.createElement(o.b,{id:"shop",to:"/cart",onClick:function(){return e.setMainUrl("/cart")},style:Object(s.a)({colorTheme:f,link:"/cart",mainUrl:r})},"Cart")))})},393:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(2);var r=function(e){return"dark"===e?"#000":"#FFF"},l=function(e,t){return e===t?["1px solid","0.25rem"]:[]},a=function(e){return e.mainUrl&&null!==e.mainUrl&&e.link?{color:r(e.colorTheme),borderBottom:l(e.link,e.mainUrl)[0],paddingBottom:l(e.link,e.mainUrl)[1]}:{color:r(e.colorTheme)}}}}]);