(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{332:function(e,n,t){"use strict";t.r(n);var i=t(87),a=t.n(i),o=t(88),c=t.n(o),r=t(89),s=t.n(r),l=t(90),d=t.n(l),u=t(160),h=t.n(u),m=t(91),y=t.n(m),f=t(2),L=t.n(f),b=t(92),p=t(17),v=t(329),w=(t(337),function(e){function n(){var e;return a()(this,n),(e=s()(this,d()(n).call(this))).topLine,e.middleLine,e.bottomLine,e.timeline,e.handleClick=e.handleClick.bind(h()(e)),e.state={showSecondaryMenu:!1},e}return y()(n,e),c()(n,[{key:"componentDidMount",value:function(){this.timeline=Object(v.a)(this.topLine,this.middleLine,this.bottomLine)}},{key:"componentDidUpdate",value:function(e,n){var t=e.colorTheme,i=this.props.colorTheme;t!==i&&Object(v.d)(i,[this.topLine,this.middleLine,this.bottomLine])}},{key:"handleClick",value:function(){var e=this;this.setState({showSecondaryMenu:!this.state.showSecondaryMenu},function(){e.props.setSecondaryNavState(e.state.showSecondaryMenu),e.state.showSecondaryMenu?e.timeline.play():e.timeline.reverse()})}},{key:"render",value:function(){var n=this;return L.a.createElement("svg",{onClick:this.handleClick,id:"secondary-menu-icon","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"57",height:"38",viewBox:"0 0 57 38"},L.a.createElement("title",null,"secondary-menu-icon"),L.a.createElement("line",{ref:function(e){return n.topLine=e},className:"f9e01109-13bb-4aba-8a9d-a559ca668c4d",y1:"5",x2:"57",y2:"5"}),L.a.createElement("line",{ref:function(e){return n.middleLine=e},className:"f9e01109-13bb-4aba-8a9d-a559ca668c4d",y1:"19",x2:"57",y2:"19"}),L.a.createElement("line",{ref:function(e){return n.bottomLine=e},className:"f9e01109-13bb-4aba-8a9d-a559ca668c4d",y1:"33",x2:"57",y2:"33"}))}}]),n}(f.Component));n.default=Object(b.b)(function(e){return{sharedUiState:e.sharedUiState}},{setSecondaryNavState:p.h})(w)},337:function(e,n,t){}}]);