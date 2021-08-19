"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[9175,7585,9051,2738],{87585:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f,ConnectedBannerMessages:()=>f,BannerMessages:()=>b});var r=n(48418),a=n(15274),i=n(56949),o=n(90237),l=n(65337),s=n(39576),u=n(80239),c=n(92950),d=n.n(c),p=n(68269),y=n(14708),v=n(18446),T=n.n(v),I=n(25097),E=n(83109),g=n(76006),m=n(30446),b=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e.onUpdateData=function(){var t=e.props,n=t.getMessageReports,r=t.productId,o=t.query,l=I.IT.parseRhsmQuery(o).graphTallyQuery;if(r){var s,u=g.i3.getRangedDateTime("CURRENT"),c=u.startDate,d=u.endDate;n(r,(0,i.Z)((0,i.Z)({},l),{},(s={},(0,a.Z)(s,m.VN.GRANULARITY,m.U9.DAILY),(0,a.Z)(s,m.VN.START_DATE,c.toISOString()),(0,a.Z)(s,m.VN.END_DATE,d.toISOString()),s)))}},e}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){this.onUpdateData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.query;t.productId===e.productId&&T()(n,e.query)||this.onUpdateData()}},{key:"renderAlerts",value:function(){var e=this,t=this.state,n=this.props,o=n.appMessages,l=n.messages,s=[];return l.length&&Object.entries(o).forEach((function(e){var n=(0,r.Z)(e,2),a=n[0],o=n[1];if(!0!==t[a]&&!0===o){var u=l.find((function(e){return e.id===a}));u&&s.push((0,i.Z)({key:a},u))}})),s.map((function(t){var n=t.key,r=t.message,i=t.title,o=t.variant,l=void 0===o?p.AlertVariant.info:o,s=d().createElement(p.AlertActionCloseButton,{onClose:function(){return e.setState((0,a.Z)({},n,!0))}});return d().createElement(p.Alert,{actionClose:s,key:n,title:i,variant:l},r)}))}},{key:"render",value:function(){var e=this.renderAlerts();return e.length?d().createElement("div",{className:"curiosity-banner-messages"},e):null}}]),n}(d().Component);b.defaultProps={getMessageReports:g.BM.noop,query:{},messages:[{id:"cloudigradeMismatch",title:(0,E.translate)("curiosity-banner.dataMismatchTitle"),message:(0,E.translate)("curiosity-banner.dataMismatchMessage",{context:""!==g.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS&&"cloudigradeMismatch",appName:g.BM.UI_DISPLAY_NAME},[d().createElement(p.Button,{isInline:!0,component:"a",variant:"link",icon:d().createElement(y.ExternalLinkAltIcon,null),iconPosition:"right",target:"_blank",href:g.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS})])}]};var h=I.R1.appMessages.makeAppMessages(),f=(0,I.$j)(h,(function(e){return{getMessageReports:function(t,n){return e(I.Ak.rhsm.getMessageReports(t,n))}}}))(b)},69051:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E,ConnectedInventoryTabs:()=>E,InventoryTabs:()=>I,InventoryTab:()=>T.InventoryTab});var r=n(15274),a=n(90237),i=n(65337),o=n(39576),l=n(80239),s=n(92950),u=n.n(s),c=n(68269),d=n(25097),p=n(70031),y=n(76006),v=n(83109),T=n(80931),I=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onTab=function(t){var n=t.index,a=e.props.productId;d.h.dispatch({type:d.JD.inventory.SET_INVENTORY_TAB,tabs:(0,r.Z)({},a,n)})},e}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.activeTab,n=e.children,r=e.defaultActiveTab,a=e.isDisabled,i=e.t;if(a)return null;var o=u().Children.toArray(n).map((function(e,t){var n=e.props,r=void 0===n?{}:n;return{active:r.active||!1,content:r.children||e,title:r.title||i("curiosity-inventory.tabSubHeading",{count:t})}}));return u().createElement(u().Fragment,null,u().createElement(c.Title,{headingLevel:"h2",className:"sr-only"},i("curiosity-inventory.tabHeading",{count:o.length})),u().createElement(p.Tabs,{activeTab:t,defaultActiveTab:r,onTab:this.onTab,tabs:o}))}}]),n}(u().Component);I.defaultProps={activeTab:0,defaultActiveTab:0,isDisabled:y.BM.UI_DISABLED_TABLE,t:v.translate};var E=(0,d.$j)((function(e,t){var n,r=e.inventory,a=t.productId;return{activeTab:null===(n=r.tabs)||void 0===n?void 0:n[a]}}))(I)},29175:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m,ProductView:()=>m});var r=n(92950),a=n.n(r),i=n(68269),o=n(31369),l=n(52422),s=n(25097),u=n(10608),c=n(92227),d=n(86876),p=n(76006),y=n(87585),v=n(2738),T=n(69051),I=n(47493),E=n(30446),g=(n(63056),n(83109)),m=function(e){var t=e.routeDetail,n=e.t,r=e.toolbarGraph,g=e.toolbarGraphDescription,m=e.toolbarProduct,b=t.pathParameter,h=t.productConfig,f=t.productParameter,A=t.viewParameter,_=(null==h?void 0:h[0])||{},D=_.graphTallyQuery,S=_.inventoryHostsQuery,R=_.inventorySubscriptionsQuery,N=_.query,M=_.initialToolbarFilters,P=_.initialGraphFilters,C=_.initialGraphSettings,U=_.initialGuestsFilters,k=_.initialInventoryFilters,L=_.initialInventorySettings,Z=_.initialSubscriptionsInventoryFilters,w=s.IT.parseRhsmQuery(N,{graphTallyQuery:D,inventoryHostsQuery:S,inventorySubscriptionsQuery:R}),Y=w.query,G=w.graphTallyQuery,O=w.inventoryHostsQuery,Q=w.inventorySubscriptionsQuery,B=w.toolbarQuery;if(!b||!A)return null;var V=null;g&&(V=a().createElement(i.Tooltip,{content:a().createElement("p",null,n("curiosity-graph.cardHeadingDescription",{context:b})),position:i.TooltipPosition.top,enableFlip:!1,distance:5,entryDelay:100,exitDelay:0},a().createElement("sup",{className:"curiosity-icon__info"},a().createElement(o.ZP,null))));var q=a().createElement(a().Fragment,null,n("curiosity-graph.cardHeading",{context:b}),V);return a().createElement(l.PageLayout,null,a().createElement(l.PageHeader,{productLabel:f,includeTour:!0},n("curiosity-view.title",{appName:p.BM.UI_DISPLAY_NAME,context:f})),a().createElement(l.PageMessages,null,a().createElement(y.default,{productId:b,viewId:A,query:Y})),a().createElement(l.PageToolbar,null,a().isValidElement(m)&&m||!1!==m&&a().createElement(c.ConnectedToolbar,{filterOptions:M,productId:b,query:B,viewId:A})),a().createElement(l.PageSection,null,a().createElement(u.ConnectedGraphCard,{key:"graph_".concat(b),filterGraphData:P,settings:C,query:G,productId:b,viewId:A,cardTitle:q,productLabel:f},a().isValidElement(r)&&r||!1!==r&&a().createElement(v.ToolbarFieldGranularity,{viewId:A,value:G[E.VN.GRANULARITY]}))),a().createElement(l.PageSection,null,a().createElement(T.default,{key:"inventory_".concat(b),productId:b},a().createElement(T.InventoryTab,{key:"inventory_hosts_".concat(b),title:n("curiosity-inventory.tabHosts",{context:["noInstances",b]})},a().createElement(d.ConnectedInventoryList,{key:"inv_".concat(b),filterGuestsData:U,filterInventoryData:k,productId:b,settings:L,query:O,viewId:A})),!p.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS&&a().createElement(T.InventoryTab,{key:"inventory_subs_".concat(b),title:n("curiosity-inventory.tabSubscriptions",{context:b})},a().createElement(I.ConnectedInventorySubscriptions,{key:"subs_".concat(b),filterInventoryData:Z,productId:b,query:Q,viewId:A})))))};m.defaultProps={t:g.translate,toolbarGraph:null,toolbarGraphDescription:!1,toolbarProduct:null}},2738:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y,ToolbarFieldGranularity:()=>y,toolbarFieldOptions:()=>p});var r=n(15274),a=n(56949),i=n(92950),o=n.n(i),l=n(25097),s=n(49844),u=n(30446),c=n(76006),d=n(83109),p=Object.values(u.U9).map((function(e){return{title:(0,d.translate)("curiosity-toolbar.granularity",{context:e}),value:e,selected:!1}})),y=function e(t){var n=t.options,i=t.t,d=t.value,p=t.viewId,y=(0,l.v9)((function(e){var t,n;return null===(t=e.view.graphTallyQuery)||void 0===t||null===(n=t[p])||void 0===n?void 0:n[u.VN.GRANULARITY]}),d),v=n.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{selected:e.value===y})}));return o().createElement(s.Select,{"aria-label":i("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=c.i3.getRangedDateTime(e.value),n=t.startDate,a=t.endDate;l.h.dispatch([{type:l.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:p},(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[u.VN.GRANULARITY],viewId:p},u.VN.GRANULARITY,e.value),(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[u.VN.START_DATE],viewId:p},u.VN.START_DATE,n.toISOString()),(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_TYPES[u.VN.END_DATE],viewId:p},u.VN.END_DATE,a.toISOString())])},options:v,selectedOptions:y,placeholder:i("curiosity-toolbar.placeholder",{context:"granularity"}),"data-test":e.defaultProps.viewId})};y.defaultProps={options:p,t:d.translate,value:u.U9.DAILY,viewId:"toolbarFieldGranularity"}}}]);
//# sourceMappingURL=../sourcemaps/9175.019edb8bc7b06dfb927d.js.map