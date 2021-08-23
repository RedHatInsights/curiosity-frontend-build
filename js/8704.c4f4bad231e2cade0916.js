"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[8704,7585,9051,9175,2738],{87585:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h,ConnectedBannerMessages:()=>h,BannerMessages:()=>b});var n=r(48418),a=r(15274),i=r(56949),o=r(90237),l=r(65337),s=r(39576),u=r(80239),c=r(92950),d=r.n(c),p=r(68269),v=r(14708),y=r(18446),T=r.n(y),I=r(25097),E=r(83109),g=r(76006),m=r(30446),b=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e.onUpdateData=function(){var t=e.props,r=t.getMessageReports,n=t.productId,o=t.query,l=I.IT.parseRhsmQuery(o).graphTallyQuery;if(n){var s,u=g.i3.getRangedDateTime("CURRENT"),c=u.startDate,d=u.endDate;r(n,(0,i.Z)((0,i.Z)({},l),{},(s={},(0,a.Z)(s,m.VN.GRANULARITY,m.U9.DAILY),(0,a.Z)(s,m.VN.START_DATE,c.toISOString()),(0,a.Z)(s,m.VN.END_DATE,d.toISOString()),s)))}},e}return(0,l.Z)(r,[{key:"componentDidMount",value:function(){this.onUpdateData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.query;t.productId===e.productId&&T()(r,e.query)||this.onUpdateData()}},{key:"renderAlerts",value:function(){var e=this,t=this.state,r=this.props,o=r.appMessages,l=r.messages,s=[];return l.length&&Object.entries(o).forEach((function(e){var r=(0,n.Z)(e,2),a=r[0],o=r[1];if(!0!==t[a]&&!0===o){var u=l.find((function(e){return e.id===a}));u&&s.push((0,i.Z)({key:a},u))}})),s.map((function(t){var r=t.key,n=t.message,i=t.title,o=t.variant,l=void 0===o?p.AlertVariant.info:o,s=d().createElement(p.AlertActionCloseButton,{onClose:function(){return e.setState((0,a.Z)({},r,!0))}});return d().createElement(p.Alert,{actionClose:s,key:r,title:i,variant:l},n)}))}},{key:"render",value:function(){var e=this.renderAlerts();return e.length?d().createElement("div",{className:"curiosity-banner-messages"},e):null}}]),r}(d().Component);b.defaultProps={getMessageReports:g.BM.noop,query:{},messages:[{id:"cloudigradeMismatch",title:(0,E.translate)("curiosity-banner.dataMismatchTitle"),message:(0,E.translate)("curiosity-banner.dataMismatchMessage",{context:""!==g.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS&&"cloudigradeMismatch",appName:g.BM.UI_DISPLAY_NAME},[d().createElement(p.Button,{isInline:!0,component:"a",variant:"link",icon:d().createElement(v.ExternalLinkAltIcon,null),iconPosition:"right",target:"_blank",href:g.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS})])}]};var f=I.R1.appMessages.makeAppMessages(),h=(0,I.$j)(f,(function(e){return{getMessageReports:function(t,r){return e(I.Ak.rhsm.getMessageReports(t,r))}}}))(b)},69051:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E,ConnectedInventoryTabs:()=>E,InventoryTabs:()=>I,InventoryTab:()=>T.InventoryTab});var n=r(15274),a=r(90237),i=r(65337),o=r(39576),l=r(80239),s=r(92950),u=r.n(s),c=r(68269),d=r(25097),p=r(70031),v=r(76006),y=r(83109),T=r(80931),I=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onTab=function(t){var r=t.index,a=e.props.productId;d.h.dispatch({type:d.JD.inventory.SET_INVENTORY_TAB,tabs:(0,n.Z)({},a,r)})},e}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.activeTab,r=e.children,n=e.defaultActiveTab,a=e.isDisabled,i=e.t;if(a)return null;var o=u().Children.toArray(r).map((function(e,t){var r=e.props,n=void 0===r?{}:r;return{active:n.active||!1,content:n.children||e,title:n.title||i("curiosity-inventory.tabSubHeading",{count:t})}}));return u().createElement(u().Fragment,null,u().createElement(c.Title,{headingLevel:"h2",className:"sr-only"},i("curiosity-inventory.tabHeading",{count:o.length})),u().createElement(p.Tabs,{activeTab:t,defaultActiveTab:n,onTab:this.onTab,tabs:o}))}}]),r}(u().Component);I.defaultProps={activeTab:0,defaultActiveTab:0,isDisabled:v.BM.UI_DISABLED_TABLE,t:y.translate};var E=(0,d.$j)((function(e,t){var r,n=e.inventory,a=t.productId;return{activeTab:null===(r=n.tabs)||void 0===r?void 0:r[a]}}))(I)},29175:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m,ProductView:()=>m});var n=r(92950),a=r.n(n),i=r(68269),o=r(31369),l=r(52422),s=r(25097),u=r(10608),c=r(92227),d=r(86876),p=r(76006),v=r(87585),y=r(2738),T=r(69051),I=r(47493),E=r(30446),g=(r(63056),r(83109)),m=function(e){var t=e.routeDetail,r=e.t,n=e.toolbarGraph,g=e.toolbarGraphDescription,m=e.toolbarProduct,b=t.pathParameter,f=t.productConfig,h=t.productParameter,A=t.viewParameter,_=(null==f?void 0:f[0])||{},D=_.graphTallyQuery,S=_.inventoryHostsQuery,R=_.inventorySubscriptionsQuery,N=_.query,M=_.initialToolbarFilters,P=_.initialGraphFilters,C=_.initialGraphSettings,U=_.initialGuestsFilters,k=_.initialInventoryFilters,w=_.initialInventorySettings,L=_.initialSubscriptionsInventoryFilters,Z=s.IT.parseRhsmQuery(N,{graphTallyQuery:D,inventoryHostsQuery:S,inventorySubscriptionsQuery:R}),Y=Z.query,V=Z.graphTallyQuery,G=Z.inventoryHostsQuery,O=Z.inventorySubscriptionsQuery,Q=Z.toolbarQuery;if(!b||!A)return null;var B=null;g&&(B=a().createElement(i.Tooltip,{content:a().createElement("p",null,r("curiosity-graph.cardHeadingDescription",{context:b})),position:i.TooltipPosition.top,enableFlip:!1,distance:5,entryDelay:100,exitDelay:0},a().createElement("sup",{className:"curiosity-icon__info"},a().createElement(o.ZP,null))));var q=a().createElement(a().Fragment,null,r("curiosity-graph.cardHeading",{context:b}),B);return a().createElement(l.PageLayout,null,a().createElement(l.PageHeader,{productLabel:h,includeTour:!0},r("curiosity-view.title",{appName:p.BM.UI_DISPLAY_NAME,context:h})),a().createElement(l.PageMessages,null,a().createElement(v.default,{productId:b,viewId:A,query:Y})),a().createElement(l.PageToolbar,null,a().isValidElement(m)&&m||!1!==m&&a().createElement(c.ConnectedToolbar,{filterOptions:M,productId:b,query:Q,viewId:A})),a().createElement(l.PageSection,null,a().createElement(u.ConnectedGraphCard,{key:"graph_".concat(b),filterGraphData:P,settings:C,query:V,productId:b,viewId:A,cardTitle:q,productLabel:h},a().isValidElement(n)&&n||!1!==n&&a().createElement(y.ToolbarFieldGranularity,{viewId:A,value:V[E.VN.GRANULARITY]}))),a().createElement(l.PageSection,null,a().createElement(T.default,{key:"inventory_".concat(b),productId:b},a().createElement(T.InventoryTab,{key:"inventory_hosts_".concat(b),title:r("curiosity-inventory.tabHosts",{context:["noInstances",b]})},a().createElement(d.ConnectedInventoryList,{key:"inv_".concat(b),filterGuestsData:U,filterInventoryData:k,productId:b,settings:w,query:G,viewId:A})),!p.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS&&a().createElement(T.InventoryTab,{key:"inventory_subs_".concat(b),title:r("curiosity-inventory.tabSubscriptions",{context:b})},a().createElement(I.ConnectedInventorySubscriptions,{key:"subs_".concat(b),filterInventoryData:L,productId:b,query:O,viewId:A})))))};m.defaultProps={t:g.translate,toolbarGraph:null,toolbarGraphDescription:!1,toolbarProduct:null}},88704:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o,ProductViewDefault:()=>o});var n=r(92950),a=r.n(n),i=r(29175),o=function(e){var t=e.routeDetail;return a().createElement(i.ProductView,{routeDetail:t})};o.defaultProps={}},2738:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v,ToolbarFieldGranularity:()=>v,toolbarFieldOptions:()=>p});var n=r(15274),a=r(56949),i=r(92950),o=r.n(i),l=r(25097),s=r(49844),u=r(30446),c=r(76006),d=r(83109),p=Object.values(u.U9).map((function(e){return{title:(0,d.translate)("curiosity-toolbar.granularity",{context:e}),value:e,selected:!1}})),v=function e(t){var r=t.options,i=t.t,d=t.value,p=t.viewId,v=(0,l.v9)((function(e){var t,r;return null===(t=e.view.graphTallyQuery)||void 0===t||null===(r=t[p])||void 0===r?void 0:r[u.VN.GRANULARITY]}),d),y=r.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{selected:e.value===v})}));return o().createElement(s.Select,{"aria-label":i("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=c.i3.getRangedDateTime(e.value),r=t.startDate,a=t.endDate;l.h.dispatch([{type:l.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:p},(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[u.VN.GRANULARITY],viewId:p},u.VN.GRANULARITY,e.value),(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[u.VN.START_DATE],viewId:p},u.VN.START_DATE,r.toISOString()),(0,n.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[u.VN.END_DATE],viewId:p},u.VN.END_DATE,a.toISOString())])},options:y,selectedOptions:v,placeholder:i("curiosity-toolbar.placeholder",{context:"granularity"}),"data-test":e.defaultProps.viewId})};v.defaultProps={options:p,t:d.translate,value:u.U9.DAILY,viewId:"toolbarFieldGranularity"}}}]);
//# sourceMappingURL=../sourcemaps/8704.91ba7f2534fb7b5801a4.js.map