exports.ids=[16],exports.modules={33:function(e,t,n){"use strict";n.r(t);var o=n(13),r=n.n(o),i=n(14),s=n.n(i),a=n(15),c=n.n(a),l=n(16),u=n.n(l),d=n(41),h=n.n(d),p=n(17),m=n.n(p),f=n(0),g=n.n(f),y=n(5),b=n.n(y),v=n(46),C=n.n(v),S=n(18),k=n.n(S),H=n(3),L=n(71),x=b()({chunkName:function(){return"components-content-Hero"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(11).then(n.bind(null,57))},requireSync:function e(t){var o=this.resolve(t);return n(o)},resolve:function(){return 57}}),A=[{type:"heroHorizontalWhole",cssClass:"light",title:"Engage Hybrid",stats:{cssClass:"horizontal",copy:["QuadTrack Design","2nd & 3rd axis adjustment","Rapid Drive"],orderButton:!0}},{type:"heroVerticalQuarterArticleThreeQuarterMedia",cssClass:"dark",textArticle:{cssClassName:"vertical",h2:"Accuracy",h1:"The Most Accurate",p:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},moreInfoHandle:"engage-hybrid-handling"},{type:"heroHorizontalThreeQuarterMediaQuarterArticle",cssClass:"light",stats:{cssClass:"vertical",copy:["QuadTrack Design","2nd & 3rd axis adjustment","Rapid Drive"],orderButton:!1},textArticle:{cssClassName:"horizontal",h2:"Benefits",h1:"Benefits Component",p:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},moreInfoHandle:"engage-hybrid-benefits"},{type:"heroVerticalThreeQuarterMediaQuarterArticle",cssClass:"dark",title:"Engage Hybrid",textArticle:{cssClassName:"vertical",h2:"Usecase",h1:"Usecase Component",p:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},video:{src:"https://s3.amazonaws.com/elite-website/2019/echelon/echelon-39/videos/christenberry-spotlight.mp4",type:"video/mp4",controls:!0},stats:{cssClass:"horizontal",copy:["QuadTrack Design","2nd & 3rd axis adjustment","Rapid Drive"],orderButton:!1},moreInfoHandle:"engage-hybrid-design"},{type:"heroVerticalHalfMediaHalfArticle",cssClass:"light",image:{src:"https://via.placeholder.com/150",alt:"This is a placeholder"},content:{title:"Engage Hybrid Specs",navLinks:[{name:"Link_1"},{name:"Link_2"}],lists:[{name:"Link_1",content:[{title:"1 Spec_1",text:"About this spec"},{title:"1 Spec_2",text:"About this spec"},{title:"1 Spec_3",text:"About this spec"},{title:"1 Spec_4",text:"About this spec"},{title:"1 Spec_5",text:"About this spec"}]},{name:"Link_2",content:[{title:"2 Spec_1",text:"About this spec"},{title:"2 Spec_2",text:"About this spec"},{title:"2 Spec_3",text:"About this spec"},{title:"2 Spec_4",text:"About this spec"},{title:"2 Spec_5",text:"About this spec"}]}]}},{type:"heroHorizontalWhole",cssClass:"light",title:"Order Engage Hybrid",stats:{cssClass:"horizontal",copy:["QuadTrack Design","2nd & 3rd axis adjustment","Rapid Drive"],orderButton:!1}}],w=function(e){function t(){var e;return r()(this,t),(e=c()(this,u()(t).call(this))).debouncedScroll,e.mainNavHeight,e.handleScroll=e.handleScroll.bind(h()(e)),e}return m()(t,e),s()(t,[{key:"componentWillnmount",value:function(){this.props.setEndOfPageScroll(!1)}},{key:"componentDidMount",value:function(){this.debouncedScroll=C()(this.handleScroll,750),window.addEventListener("scroll",this.debouncedScroll),this.mainNavHeight=80}},{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.debouncedScroll)}},{key:"handleScroll",value:function(){var e=Object(L.b)(".hero-region")(this.mainNavHeight),t=!!Object(L.a)();this.props.setEndOfPageScroll(t),e&&(e.classList.contains("light")?this.props.setMainNavThemeColor("dark"):this.props.setMainNavThemeColor("light"))}},{key:"render",value:function(){this.props.sharedUiState.mainNavThemeColor;return g.a.createElement(f.Fragment,null,A.map(function(e,t){return g.a.createElement(x,{key:t,data:e})}))}}]),t}(f.Component),_=function(e){return{sharedUiState:e.sharedUiState}};t.default=Object(S.connect)(_,{setMainNavThemeColor:H.r,setEndOfPageScroll:H.p})(w)},71:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var o=function(e){return function(t){return Array.from(document.querySelectorAll(e)).filter(function(e){return r(e)(t)})[0]}},r=function(e){return function(t){var n=e.getBoundingClientRect();return n.bottom<=(window.innerHeight+t/2||document.documentElement.clientHeight+t/2)&&n.bottom>=t}},i=function(){return window.innerHeight+Math.ceil(window.pageYOffset)>=document.body.offsetHeight}}};