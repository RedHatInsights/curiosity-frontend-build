"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[9051],{69051:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f,ConnectedInventoryTabs:()=>f,InventoryTabs:()=>y,InventoryTab:()=>p.InventoryTab});var a=n(15274),r=n(90237),i=n(65337),o=n(39576),c=n(80239),l=n(92950),u=n.n(l),s=n(58788),v=n(25097),d=n(70031),b=n(76006),T=n(83109),p=n(80931),y=function(t){(0,o.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).onTab=function(e){var n=e.index,r=t.props.productId;v.h.dispatch({type:v.JD.inventory.SET_INVENTORY_TAB,tabs:(0,a.Z)({},r,n)})},t}return(0,i.Z)(n,[{key:"render",value:function(){var t=this.props,e=t.activeTab,n=t.children,a=t.defaultActiveTab,r=t.isDisabled,i=t.t;if(r)return null;var o=u().Children.toArray(n).map((function(t,e){var n=t.props,a=void 0===n?{}:n;return{active:a.active||!1,content:a.children||t,title:a.title||i("curiosity-inventory.tabSubHeading",{count:e})}}));return u().createElement(u().Fragment,null,u().createElement(s.Title,{headingLevel:"h2",className:"sr-only"},i("curiosity-inventory.tabHeading",{count:o.length})),u().createElement(d.Tabs,{activeTab:e,defaultActiveTab:a,onTab:this.onTab,tabs:o}))}}]),n}(u().Component);y.defaultProps={activeTab:0,defaultActiveTab:0,isDisabled:b.BM.UI_DISABLED_TABLE,t:T.translate};var f=(0,v.$j)((function(t,e){var n,a=t.inventory,r=e.productId;return{activeTab:null===(n=a.tabs)||void 0===n?void 0:n[r]}}))(y)}}]);
//# sourceMappingURL=../sourcemaps/9051.b6a335461e210e0ef6c5.js.map