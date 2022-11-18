"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[3557,931,9051,31],{31369:function(e,t,r){t.nQ={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},t.uM=r(35183).createIcon(t.nQ),t.ZP=t.uM},87585:function(e,t,r){r.r(t),r.d(t,{BannerMessages:function(){return f},default:function(){return f}});var n=r(4942),a=r(1413),o=r(29439),i=r(92950),l=r.n(i),u=r(21242),s=r(43551),c=r(17297),d=r(31824),p=r(76006),v=r(83109),f=function(e){var t=e.messages,r=e.useGetAppMessages,s=(0,i.useState)({}),d=(0,o.Z)(s,2),p=d[0],v=d[1],f=(0,i.useState)([]),y=(0,o.Z)(f,2),m=y[0],h=y[1],g=r().data;return(0,c.Z)((function(){var e=[];t.length&&Object.entries(g).forEach((function(r){var n=(0,o.Z)(r,2),i=n[0],l=n[1];if(!0!==p[i]&&!0===l){var u=t.find((function(e){return e.id===i}));u&&e.push((0,a.Z)({key:i},u))}})),h(e.map((function(e){var t=e.key,r=e.message,o=e.title,i=e.variant,s=void 0===i?u.AlertVariant.info:i,c=l().createElement(u.AlertActionCloseButton,{onClose:function(){return v((0,a.Z)((0,a.Z)({},p),{},(0,n.Z)({},t,!0)))}});return l().createElement(u.Alert,{actionClose:c,key:t,title:o,variant:s},r)})))}),[g,p,t]),null!=m&&m.length?l().createElement("div",{className:"curiosity-banner-messages"},m):null};f.defaultProps={messages:[{id:"cloudigradeMismatch",title:(0,v.translate)("curiosity-banner.dataMismatchTitle"),message:(0,v.translate)("curiosity-banner.dataMismatchMessage",{context:""!==p.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS&&"cloudigradeMismatch",appName:p.BM.UI_DISPLAY_NAME},[l().createElement(u.Button,{isInline:!0,component:"a",variant:"link",icon:l().createElement(s.ExternalLinkAltIcon,null),iconPosition:"right",target:"_blank",href:p.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS})])}],useGetAppMessages:d.useGetAppMessages}},31824:function(e,t,r){r.r(t),r.d(t,{context:function(){return d},default:function(){return d},useGetAppMessages:function(){return c}});var n=r(4942),a=r(1413),o=r(17297),i=r(61072),l=r(51858),u=r(76006),s=r(46262),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getMessageReports,r=void 0===t?i.Ak.rhsm.getMessageReports:t,c=e.useDispatch,d=void 0===c?i.Cr.reactRedux.useDispatch:c,p=e.useProduct,v=void 0===p?l.useProduct:p,f=e.useProductQuery,y=void 0===f?l.useProductQuery:f,m=e.useSelectorsResponse,h=void 0===m?i.Cr.reactRedux.useSelectorsResponse:m,g=v(),T=g.productId,E=y(),b=d(),S=h({id:"messages",selector:function(e){var t,r=e.messages;return null==r||null===(t=r.report)||void 0===t?void 0:t[T]}}),I=S.error,C=S.fulfilled,O=S.pending,_=S.data;(0,o.Z)((function(){if(T){var e,t=u.i3.getRangedDateTime("CURRENT"),o=t.startDate,i=t.endDate,l=(0,a.Z)((0,a.Z)({},E),{},(e={},(0,n.Z)(e,s.O6.GRANULARITY,s.U9.DAILY),(0,n.Z)(e,s.O6.START_DATE,o.toISOString()),(0,n.Z)(e,s.O6.END_DATE,i.toISOString()),e));r(T,l)(b)}}),[T,E]);var P={cloudigradeMismatch:!1};if(C){var A,D,R=_||{},M=R.messages,G=void 0===M?{}:M;P.cloudigradeMismatch=void 0!==(null==G||null===(A=G.data)||void 0===A||null===(D=A.reverse())||void 0===D?void 0:D.find((function(e){return!0===e[s.pM.RHSM_API_RESPONSE_TALLY_META_TYPES.HAS_CLOUDIGRADE_MISMATCH]})))}return{error:I,fulfilled:C,pending:O,data:(0,a.Z)({},P)}},d={useGetAppMessages:c}},28341:function(e,t,r){r.r(t),r.d(t,{ConnectedGraphCard:function(){return h},GraphCard:function(){return y},default:function(){return h}});var n=r(1413),a=r(92950),o=r.n(a),i=r(21242),l=r(17297),u=r(61072),s=r(51858),c=r(76006),d=r(30446),p=r(1797),v=r(91339),f=r(89270),y=function(e){var t=e.cardTitle,r=e.children,a=e.error,u=e.getGraphReportsCapacity,s=e.graphData,c=e.meta,y=e.isDisabled,m=e.pending,h=e.useProduct,g=e.useProductGraphConfig,T=e.useProductGraphTallyQuery,E=h().productId,b=g().settings,S=T();if((0,l.Z)((function(){var e=S[d.VN.START_DATE],t=S[d.VN.END_DATE],r=S[d.VN.GRANULARITY];!y&&r&&e&&t&&E&&u(E,S)}),[u,y,E,S]),y)return null;var I=null;return"function"==typeof(null==b?void 0:b.actionDisplay)&&(I=b.actionDisplay({data:(0,n.Z)({},s),meta:(0,n.Z)({},c)})),o().createElement(i.Card,{className:"curiosity-usage-graph"},o().createElement(v.MinHeight,{key:"headerMinHeight"},o().createElement(i.CardHeader,null,o().createElement(i.CardTitle,null,o().createElement(i.Title,{headingLevel:"h2",size:"lg"},t)),o().createElement(i.CardActions,{className:a?"blur":""},o().createElement(o().Fragment,{key:"actionDisplay"},I),r))),o().createElement(v.MinHeight,{key:"bodyMinHeight"},o().createElement(i.CardBody,null,o().createElement("div",{className:(a?"blur":m&&"fadein")||""},m&&o().createElement(p.Loader,{variant:"graph"}),!m&&o().createElement(f.GraphCardChart,{graphData:s})))))};y.defaultProps={cardTitle:null,children:null,error:!1,getGraphReportsCapacity:c.BM.noop,graphData:{},isDisabled:c.BM.UI_DISABLED_GRAPH,meta:{},pending:!1,useProduct:s.useProduct,useProductGraphConfig:s.useProductGraphConfig,useProductGraphTallyQuery:s.useProductGraphTallyQuery};var m=u.R1.graphCard.makeGraphCard(),h=(0,u.$j)(m,(function(e){return{getGraphReportsCapacity:function(t,r){return e(u.Ak.rhsm.getGraphReportsCapacity(t,r))}}}))(y)},10608:function(e,t,r){r.r(t),r.d(t,{GraphCard:function(){return d},default:function(){return d}});var n=r(92950),a=r.n(n),o=r(51858),i=r(76006),l=r(29407),u=r(91799),s=r(25394),c=r(78139),d=function(e){var t=e.isDisabled,r=e.useProduct,n=e.useProductGraphConfig,o=r().productId,i=n(),d=i.filters,p=i.settings,v=c.graphCardHelpers.generateChartSettings({filters:d,settings:p,productId:o}),f=v.groupedFiltersSettings,y=v.standaloneFiltersSettings;return t?null:a().createElement(a().Fragment,null,f&&a().createElement(s.GraphCardContext.Provider,{value:f},a().createElement(u.GraphCardChart,null))||null,null==y?void 0:y.map((function(e){var t,r;return a().createElement(s.GraphCardContext.Provider,{key:"graphCard_".concat(null==e||null===(t=e.settings)||void 0===t||null===(r=t.metric)||void 0===r?void 0:r.id),value:e},a().createElement(l.GraphCardMetricTotals,null,a().createElement(u.GraphCardChart,null)))})))};d.defaultProps={isDisabled:i.BM.UI_DISABLED_GRAPH,useProduct:o.useProduct,useProductGraphConfig:o.useProductGraphConfig}},89270:function(e,t,r){r.r(t),r.d(t,{GraphCardChart:function(){return p},default:function(){return p}});var n=r(92950),a=r.n(n),o=r(18604),i=r(51858),l=r(78139),u=r(60930),s=r(64418),c=r(44024),d=r(30446),p=function(e){var t,r,n=e.graphData,i=e.useProductGraphConfig,p=e.useProductGraphTallyQuery,v=i().filters,f=p(),y=f[d.VN.GRANULARITY],m={xAxisLabelIncrement:l.graphCardHelpers.getChartXAxisLabelIncrement(y),xAxisTickFormat:function(e){var t=e.item,r=e.previousItem,n=e.tick;return l.graphCardHelpers.xAxisTickFormat({tick:n,date:t.date,previousDate:r.date,granularity:y})},yAxisTickFormat:l.graphCardHelpers.yAxisTickFormat};return a().createElement(u.Chart,Object.assign({key:"chart_".concat(JSON.stringify(f))},m,{dataSets:(t=n,r=function(e){var r={data:t[e],id:e,strokeWidth:2,isStacked:!/^threshold/.test(e),isThreshold:/^threshold/.test(e)};return/^threshold/.test(e)&&(r.stroke=o.chart_color_green_300.value,r.strokeDasharray="4,3",r.strokeWidth=3),r},null!=v&&v.length?v.map((function(e){return Object.assign(r(e.id),e)})):Object.keys(t).map((function(e){return r(e)}))),chartLegend:function(e){var t=e.chart,r=e.datum;return a().createElement(s.default,{chart:t,datum:r})},chartTooltip:function(e){var t=e.datum;return a().createElement(c.default,{datum:t})}}))};p.defaultProps={graphData:{},useProductGraphConfig:i.useProductGraphConfig,useProductGraphTallyQuery:i.useProductGraphTallyQuery}},29407:function(e,t,r){r.r(t),r.d(t,{GraphCardMetricTotals:function(){return g},default:function(){return g}});var n=r(92950),a=r.n(n),o=r(21242),i=r(30381),l=r.n(i),u=r(68929),s=r.n(u),c=r(51858),d=r(25394),p=r(91339),v=r(1797),f=r(76006),y=r(65876),m=r(46262),h=r(83109),g=function(e){var t,r,n,i,u=e.children,c=e.t,d=e.useMetricsSelector,h=(0,e.useProductGraphTallyQuery)()[m.O6.START_DATE],g=d(),T=g.pending,E=g.error,b=g.fulfilled,S=g.dataSets,I=(void 0===S?[]:S)[0]||{},C=I.data,O=void 0===C?[]:C,_=I.id,P=I.metric,A=I.meta,D=void 0===A?{}:A,R=O[O.length-1]||{},M=R.date,G=R.hasData,N=R.y,L=O.find((function(e){return!0===e.isCurrentDate}))||{},B=L.date,F=L.hasData,k=L.y,x=D.totalMonthlyDate,U=D.totalMonthlyHasData,H=D.totalMonthlyValue,Q=y.toolbarFieldOptions.find((function(e){return e.title===h||e.value.startDate.toISOString()===h}))||{},Z=Q.title,Y=Q.isCurrent,w=Y?B:M,V=Y?F:G,j=Y?k:N;return a().createElement(o.Flex,{"data-test":"graphMetricTotals-".concat(s()(P)),className:"curiosity-usage-graph__totals"},a().createElement(o.Flex,{flex:{default:"flex_1"},direction:{default:"column"},alignSelf:{default:"alignSelfStretch"}},a().createElement(o.FlexItem,{className:"curiosity-usage-graph__totals-column"},a().createElement(o.Card,{"data-test":"graphDailyTotalCard",className:"curiosity-usage-graph__totals-column-card ".concat(E?"blur":"")},a().createElement(o.CardTitle,null,c("curiosity-graph.cardHeadingMetric",{context:["dailyTotal",_],month:Z})),a().createElement(p.MinHeight,{key:"currentBody"},a().createElement(o.CardBody,null,a().createElement("div",null,T&&a().createElement(v.Loader,{variant:"skeleton",skeletonProps:{size:v.SkeletonSize.lg}}),b&&c("curiosity-graph.cardBodyMetric",{context:["total",V&&_],total:null===(t=f.BM.numberDisplay(j))||void 0===t||null===(r=t.format({average:!0,mantissa:5,trimMantissa:!0,lowPrecision:!1}))||void 0===r?void 0:r.toUpperCase()},[a().createElement("strong",{title:j,"aria-label":j})])))),a().createElement(p.MinHeight,{key:"currentFooter"},a().createElement(o.CardFooter,null,a().createElement("div",{className:V?"":"hidden"},b&&w&&c("curiosity-graph.cardFooterMetric",{date:l().utc(w).format(f.i3.timestampUTCTimeFormats.yearTimeShort)}))))),a().createElement(o.Card,{"data-test":"graphMonthlyTotalCard",className:"curiosity-usage-graph__totals-column-card ".concat(E?"blur":"")},a().createElement(o.CardTitle,null,c("curiosity-graph.cardHeadingMetric",{context:["monthlyTotal",_],month:Z})),a().createElement(p.MinHeight,{key:"totalMonthlyBody"},a().createElement(o.CardBody,null,a().createElement("div",null,T&&a().createElement(v.Loader,{variant:"skeleton",skeletonProps:{size:v.SkeletonSize.lg}}),b&&c("curiosity-graph.cardBodyMetric",{context:["total",U&&_],total:null===(n=f.BM.numberDisplay(H))||void 0===n||null===(i=n.format({average:!0,mantissa:5,trimMantissa:!0,lowPrecision:!1}))||void 0===i?void 0:i.toUpperCase()},[a().createElement("strong",{title:H,"aria-label":H})])))),a().createElement(p.MinHeight,{key:"totalMonthlyFooter"},a().createElement(o.CardFooter,null,a().createElement("div",{className:U?"":"hidden"},b&&x&&c("curiosity-graph.cardFooterMetric",{date:l().utc(x).format(f.i3.timestampUTCTimeFormats.yearTimeShort)}))))))),a().createElement(o.Flex,{flex:{default:"flex_3"},direction:{default:"column"},alignSelf:{default:"alignSelfStretch"}},a().createElement(o.FlexItem,{className:"curiosity-usage-graph__totals-graph-column"},u)))};g.defaultProps={children:null,t:h.translate,useMetricsSelector:d.useMetricsSelector,useProductGraphTallyQuery:c.useProductGraphTallyQuery}},83341:function(e,t,r){r.r(t),r.d(t,{InventoryCardHosts:function(){return u},default:function(){return u}});var n=r(92950),a=r.n(n),o=r(42896),i=r(82195),l=r(76006),u=function(e){var t=Object.assign({},e);return a().createElement(i.default,t)};u.defaultProps={isDisabled:l.BM.UI_DISABLED_TABLE_HOSTS,useGetInventory:o.useGetHostsInventory,useOnColumnSort:o.useOnColumnSortHosts}},16696:function(e,t,r){r.r(t),r.d(t,{InventoryCardSubscriptions:function(){return s},default:function(){return s}});var n=r(92950),a=r.n(n),o=r(51858),i=r(62881),l=r(82195),u=r(76006),s=function(e){var t=Object.assign({},e);return a().createElement(l.default,Object.assign({cardActions:null},t))};s.defaultProps={isDisabled:u.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS,useGetInventory:i.useGetSubscriptionsInventory,useOnPage:i.useOnPageSubscriptions,useOnColumnSort:i.useOnColumnSortSubscriptions,useProductInventoryConfig:o.useProductInventorySubscriptionsConfig,useProductInventoryQuery:o.useProductInventorySubscriptionsQuery}},62881:function(e,t,r){r.r(t),r.d(t,{context:function(){return y},default:function(){return y},useGetSubscriptionsInventory:function(){return p},useOnColumnSortSubscriptions:function(){return f},useOnPageSubscriptions:function(){return v}});var n=r(4942),a=r(17297),o=r(68929),i=r.n(o),l=r(76871),u=r(61072),s=r(51858),c=r(46262),d=r(76006),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDisabled,r=void 0!==t&&t,n=e.getInventory,o=void 0===n?u.Ak.rhsm.getSubscriptionsInventory:n,i=e.useDispatch,l=void 0===i?u.Cr.reactRedux.useDispatch:i,c=e.useProduct,d=void 0===c?s.useProduct:c,p=e.useProductInventoryQuery,v=void 0===p?s.useProductInventorySubscriptionsQuery:p,f=e.useSelectorsResponse,y=void 0===f?u.Cr.reactRedux.useSelectorsResponse:f,m=d(),h=m.productId,g=v(),T=l(),E=y((function(e){var t,r=e.inventory;return null==r||null===(t=r.subscriptionsInventory)||void 0===t?void 0:t[h]})),b=E.error,S=E.cancelled,I=E.fulfilled,C=E.pending,O=E.data;return(0,a.Z)((function(){r||o(h,g)(T)}),[T,r,h,g]),{error:b,fulfilled:I,pending:C||S||!1,data:1===(null==O?void 0:O.length)&&O[0]||O||{}}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useDispatch,r=void 0===t?u.Cr.reactRedux.useDispatch:t,a=e.useProduct,o=void 0===a?s.useProduct:a,i=o(),l=i.productId,d=r();return function(e){var t=e.offset,r=e.perPage;d([(0,n.Z)({type:u.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[c.O6.OFFSET],viewId:l},c.O6.OFFSET,t),(0,n.Z)({type:u.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[c.O6.LIMIT],viewId:l},c.O6.LIMIT,r)])}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sortColumns,r=void 0===t?c.Ok:t,a=e.useDispatch,o=void 0===a?u.Cr.reactRedux.useDispatch:a,p=e.useProduct,v=void 0===p?s.useProduct:p,f=v(),y=f.productId,m=o();return function(e,t){var a,o=t.direction,s=t.id,p=Object.values(r).find((function(e){return e===s||i()(e)===s}));p?(a=o===l.SortByDirection.desc?c.PQ.DESCENDING:c.PQ.ASCENDING,m([(0,n.Z)({type:u.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[c.O6.DIRECTION],viewId:y},c.O6.DIRECTION,a),(0,n.Z)({type:u.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[c.O6.SORT],viewId:y},c.O6.SORT,p)])):(d.BM.DEV_MODE||d.BM.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(s," is allowed."))}},y={useGetSubscriptionsInventory:p,useOnPageSubscriptions:v,useOnColumnSortSubscriptions:f}},80931:function(e,t,r){r.r(t),r.d(t,{InventoryTab:function(){return o},default:function(){return o}}),r(92950);var n=r(45697),a=r.n(n),o=function(e){e.active;var t=e.children;return e.title,t};o.propTypes={children:a().node.isRequired,active:a().bool,title:a().node.isRequired},o.defaultProps={active:!1}},69051:function(e,t,r){r.r(t),r.d(t,{ConnectedInventoryTabs:function(){return h},InventoryTab:function(){return y.InventoryTab},InventoryTabs:function(){return m},default:function(){return h}});var n=r(4942),a=r(15671),o=r(43144),i=r(60136),l=r(54062),u=r(92950),s=r.n(u),c=r(21242),d=r(61072),p=r(70031),v=r(76006),f=r(83109),y=r(80931),m=function(e){(0,i.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).onTab=function(t){var r=t.index,a=e.props.productId;d.h.dispatch({type:d.JD.inventory.SET_INVENTORY_TAB,tabs:(0,n.Z)({},a,r)})},e}return(0,o.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.activeTab,r=e.children,n=e.defaultActiveTab,a=e.isDisabled,o=e.t;if(a)return null;var i=s().Children.toArray(r).map((function(e,t){var r=e.props,n=void 0===r?{}:r;return{active:n.active||!1,content:n.children||e,title:n.title||o("curiosity-inventory.tabSubHeading",{count:t})}}));return s().createElement(s().Fragment,null,s().createElement(c.Title,{headingLevel:"h2",className:"sr-only"},o("curiosity-inventory.tabHeading",{count:i.length})),s().createElement(p.Tabs,{activeTab:t,defaultActiveTab:n,onTab:this.onTab,tabs:i}))}}]),r}(s().Component);m.defaultProps={activeTab:0,defaultActiveTab:0,isDisabled:v.BM.UI_DISABLED_TABLE,t:f.translate};var h=(0,d.$j)((function(e,t){var r,n=e.inventory,a=t.productId;return{activeTab:null===(r=n.tabs)||void 0===r?void 0:r[a]}}))(m)},29175:function(e,t,r){r.r(t),r.d(t,{ProductView:function(){return O},default:function(){return O}});var n=r(92950),a=r.n(n),o=r(21242),i=r(31369),l=r(3281),u=r(51858),s=r(52422),c=r(61072),d=r(28341),p=r(10608),v=r(92227),f=r(88191),y=r(82195),m=r(83341),h=r(76006),g=r(87585),T=r(49844),E=r(2738),b=r(69051),S=r(16696),I=r(46262),C=r(83109),O=function(e){var t=e.t,r=e.toolbarGraph,n=e.toolbarGraphDescription,l=(0,e.useRouteDetail)(),C=l.productParameter,O=l.productConfig;return a().createElement(s.PageLayout,null,a().createElement(s.PageHeader,{productLabel:C},t("curiosity-view.title",{appName:h.BM.UI_DISPLAY_NAME,context:C})),a().createElement(s.PageColumns,null,O.map((function(e){return function(e){var l=e.graphTallyQuery,C=e.inventoryHostsQuery,O=e.inventorySubscriptionsQuery,_=e.query,P=e.initialGuestsFilters,A=e.initialInventoryFilters,D=e.initialInventorySettings,R=e.initialSubscriptionsInventoryFilters,M=e.productDisplay,G=e.productId,N=e.viewId;if(!G||!N)return null;var L=c.IT.parseRhsmQuery(_,{graphTallyQuery:l,inventoryHostsQuery:C,inventorySubscriptionsQuery:O}),B=L.graphTallyQuery,F=L.inventoryHostsQuery,k=null;n&&(k=a().createElement(o.Tooltip,{content:a().createElement("p",null,t("curiosity-graph.cardHeadingDescription",{context:G})),position:o.TooltipPosition.top,enableFlip:!1,distance:5,entryDelay:100,exitDelay:0},a().createElement("sup",{className:"curiosity-icon__info"},a().createElement(i.ZP,null))));var x=a().createElement(a().Fragment,null,t("curiosity-graph.cardHeading",{context:G}),k);return a().createElement(u.ProductViewContext.Provider,{value:e,key:"product_".concat(G)},a().createElement(s.PageMessages,null,M!==I.ax.HOURLY&&a().createElement(g.default,null)),a().createElement(s.PageToolbar,null,a().createElement(v.Toolbar,null)),a().createElement(s.PageSection,null,M===I.ax.LEGACY&&a().createElement(d.ConnectedGraphCard,{key:"graph_".concat(G),query:B,productId:G,viewId:N,cardTitle:x},a().isValidElement(r)&&r||!1!==r&&a().createElement(E.ToolbarFieldGranularity,{position:T.SelectPosition.right})),M!==I.ax.LEGACY&&a().createElement(p.GraphCard,null)),a().createElement(s.PageSection,{className:M===I.ax.HOURLY?"curiosity-page-section__tabs":""},a().createElement(b.default,{key:"inventory_".concat(G),productId:G,isDisabled:!A&&!R||h.BM.UI_DISABLED_TABLE},!h.BM.UI_DISABLED_TABLE_HOSTS&&M===I.ax.LEGACY&&A&&a().createElement(b.InventoryTab,{key:"inventory_deprecated-hosts_".concat(G),title:t("curiosity-inventory.tabHosts",{context:[G]})},a().createElement(f.ConnectedInventoryList,{key:"inv_".concat(G),filterGuestsData:P,filterInventoryData:A,productId:G,settings:D,query:F,viewId:N})),!h.BM.UI_DISABLED_TABLE_HOSTS&&M!==I.ax.LEGACY&&M!==I.ax.HOURLY&&A&&a().createElement(b.InventoryTab,{key:"inventory_hosts_".concat(G),title:t("curiosity-inventory.tabHosts",{context:[G]})},a().createElement(m.InventoryCardHosts,null)),!h.BM.UI_DISABLED_TABLE_INSTANCES&&M===I.ax.HOURLY&&A&&a().createElement(b.InventoryTab,{key:"inventory_instances_".concat(G),title:t("curiosity-inventory.tabInstances",{context:[G]})},a().createElement(y.InventoryCard,null)),!h.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS&&R&&a().createElement(b.InventoryTab,{key:"inventory_subs_".concat(G),title:t("curiosity-inventory.tabSubscriptions",{context:[G]})},a().createElement(S.InventoryCardSubscriptions,null)))))}(e)}))))};O.defaultProps={t:C.translate,toolbarGraph:null,toolbarGraphDescription:!1,useRouteDetail:l.Tu}},70031:function(e,t,r){r.r(t),r.d(t,{Tabs:function(){return v},default:function(){return v}});var n=r(15671),a=r(43144),o=r(60136),i=r(54062),l=r(92950),u=r.n(l),s=r(21242),c=r(28368),d=r.n(c),p=r(76006),v=function(e){(0,o.Z)(r,e);var t=(0,i.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={updatedActiveTab:null,updatedTabs:null},e.onTab=function(t){var r=t.index,n=e.props.onTab;e.setState({updatedActiveTab:r},(function(){return n({index:r})}))},e}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){null===this.state.updatedTabs&&this.setTabData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.tabs;d()(e.tabs,t,(function(e,t){if("function"==typeof e&&"function"==typeof t)return e.toString()===t.toString()}))||this.setTabData()}},{key:"setTabData",value:function(){var e=this.props,t=e.activeTab,r=e.defaultActiveTab,n=e.tabs,a=r,o=n.map((function(e,t){var r=e.active,n=e.content,o=e.title;return a=r?t:a,u().createElement(s.Tab,{key:o,eventKey:t,title:u().createElement(s.TabTitleText,null,o)},n)}));"number"==typeof t&&(a=t),this.setState({updatedActiveTab:a,updatedTabs:o})}},{key:"renderTabs",value:function(){var e=this,t=this.state,r=t.updatedActiveTab,n=t.updatedTabs,a=this.props,o=a.className,i=a.hasOverflowScroll;return u().createElement(s.Tabs,{className:"curiosity-tabs".concat(i?"":"__no-scroll"," ").concat(o||""),activeKey:r,onSelect:function(t,r){return e.onTab({event:t,index:r})},mountOnEnter:!0,unmountOnExit:!0,inset:{default:"insetNone",md:"insetLg"}},n)}},{key:"render",value:function(){return u().createElement(s.Grid,{className:"curiosity-tabs-container"},u().createElement(s.GridItem,{span:12},this.renderTabs()))}}]),r}(u().Component);v.defaultProps={activeTab:null,className:"",defaultActiveTab:0,hasOverflowScroll:!1,onTab:p.BM.noop,tabs:[]}},92227:function(e,t,r){r.r(t),r.d(t,{Toolbar:function(){return d},default:function(){return d}});var n=r(92950),a=r.n(n),o=r(21242),i=r(43551),l=r(83280),u=r(70136),s=r(76006),c=r(83109),d=function(e){var t=e.hardFilterReset,r=e.isDisabled,n=e.t,l=e.useSelectCategoryOptions,s=e.useToolbarFieldClear,c=e.useToolbarFieldClearAll,d=e.useToolbarFieldQueries,p=e.useToolbarSecondaryFields,v=l(),f=v.currentCategory,y=v.options,m=d(),h=s(),g=c(),T=p();return!r&&(null!=y&&y.length||null!=T&&T.length)?a().createElement(o.Toolbar,{id:"curiosity-toolbar",className:"curiosity-toolbar pf-m-toggle-group-container ins-c-primary-toolbar",collapseListedFiltersBreakpoint:"sm",clearAllFilters:function(){return g(t)},clearFiltersButtonText:n("curiosity-toolbar.clearFilters")},a().createElement(o.ToolbarContent,null,a().createElement(o.ToolbarToggleGroup,{toggleIcon:a().createElement(i.FilterIcon,null),breakpoint:"md"},a().createElement(o.ToolbarGroup,{variant:"filter-group"},y.length>1&&a().createElement(o.ToolbarItem,null,a().createElement(u.ToolbarFieldSelectCategory,null)),y.map((function(e){var t=e.title,r=e.value,n=e.component,i=e.isClearable,l=e.options,u={categoryName:t};return!1!==i&&(u.chips=function(e){var t=e.value,r=e.options.find((function(e){return e.value===(null==m?void 0:m[t])}));return(null==r?void 0:r.title)&&[null==r?void 0:r.title]||[]}({options:l,value:r}),u.deleteChip=function(){return e={options:l,value:r},h(e.value);var e}),a().createElement(o.ToolbarFilter,Object.assign({key:r,showToolbarItem:f===r||1===y.length},u),a().createElement(n,{isFilter:!0}))})))),a().createElement(o.ToolbarGroup,{alignment:{default:"alignRight"}},T))):null};d.defaultProps={hardFilterReset:!1,isDisabled:s.BM.UI_DISABLED_TOOLBAR,t:c.translate,useSelectCategoryOptions:u.useSelectCategoryOptions,useToolbarFieldClear:l.useToolbarFieldClear,useToolbarFieldClearAll:l.useToolbarFieldClearAll,useToolbarFieldQueries:l.useToolbarFieldQueries,useToolbarSecondaryFields:l.useToolbarSecondaryFields}},83280:function(e,t,r){r.r(t),r.d(t,{context:function(){return T},default:function(){return T},useToolbarFieldClear:function(){return m},useToolbarFieldClearAll:function(){return h},useToolbarFieldQueries:function(){return y},useToolbarSecondaryFields:function(){return g}});var n=r(4942),a=r(92950),o=r.n(a),i=r(21242),l=r(51858),u=r(46262),s=r(70136),c=r(31663),d=r(33267),p=r(49928),v=r(49844),f=r(62834),y=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.useProductQuery,a=void 0===r?l.useProductQuery:r,o=t.useProductGraphTallyQuery,i=void 0===o?l.useProductGraphTallyQuery:o,s=a(),c=s[u.O6.BILLING_PROVIDER],d=s[u.O6.SLA],p=s[u.O6.UOM],v=s[u.O6.USAGE],f=i(),y=f[u.O6.GRANULARITY];return e={},(0,n.Z)(e,u.O6.BILLING_PROVIDER,c),(0,n.Z)(e,u.O6.GRANULARITY,y),(0,n.Z)(e,u.O6.SLA,d),(0,n.Z)(e,u.O6.UOM,p),(0,n.Z)(e,u.O6.USAGE,v),e},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useBillingProviderOnSelect,r=void 0===t?c.useOnSelect:t,n=e.useSlaOnSelect,a=void 0===n?d.useOnSelect:n,o=e.useUsageOnSelect,i=void 0===o?p.useOnSelect:o,l=r(),s=a(),v=i();return function(e){switch(e){case u.O6.BILLING_PROVIDER:l();break;case u.O6.SLA:s();break;case u.O6.USAGE:v()}}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useProductQuery,r=void 0===t?l.useProductQuery:t,n=e.useSelectCategoryOnSelect,a=void 0===n?s.useOnSelect:n,o=e.useBillingProviderOnSelect,i=void 0===o?c.useOnSelect:o,v=e.useSlaOnSelect,f=void 0===v?d.useOnSelect:v,y=e.useUsageOnSelect,m=void 0===y?p.useOnSelect:y,h=r(),g=h[u.O6.BILLING_PROVIDER],T=h[u.O6.SLA],E=h[u.O6.USAGE],b=i(),S=f(),I=m(),C=a();return function(e){"string"==typeof g&&b(),"string"==typeof T&&S(),"string"==typeof E&&I(),e&&C()}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.categoryOptions,r=void 0===t?s.toolbarFieldOptions:t,n=e.useProductToolbarConfig,a=void 0===n?l.useProductToolbarConfig:n,u=a(),c=u.secondaryFilters,d=void 0===c?[]:c;return d.map((function(e){var t=e.id,n=e.content,a=(r.find((function(e){var r=e.value;return t===r}))||{}).component;return a&&o().createElement(i.ToolbarItem,{key:"option-".concat(t)},o().createElement(a,{isFilter:!1,position:v.SelectPosition.right}))||o().createElement(i.ToolbarItem,{key:f.B.generateId()},n)||null}))},T={useToolbarFieldClear:m,useToolbarFieldClearAll:h,useToolbarFieldQueries:y,useToolbarSecondaryFields:g}}}]);
//# sourceMappingURL=../sourcemaps/3557.js.map