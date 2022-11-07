"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[5394,1858],{25394:function(t,e,n){n.r(e),n.d(e,{DEFAULT_CONTEXT:function(){return d},GraphCardContext:function(){return c},context:function(){return f},default:function(){return f},useGetGraphTally:function(){return a},useGraphCardContext:function(){return l},useMetricsSelector:function(){return v}});var r=n(1413),i=n(92950),o=n.n(i),u=n(61072),s=n(51858),d=[{settings:{isStandalone:!1,metrics:[],metric:void 0}},n(62834).B.noop],c=o().createContext(d),l=function(){return(0,i.useContext)(c)},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useDispatch,n=void 0===e?u.Cr.reactRedux.useDispatch:e,r=t.useProductGraphTallyQuery,i=void 0===r?s.useProductGraphTallyQuery:r,o=i(),d=n();return function(t){return u.Ak.rhsm.getGraphTally(t,o)(d)}},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useGraphCardContext,n=void 0===e?l:e,i=t.useSelectors,o=void 0===i?u.Cr.reactRedux.useSelectors:i,d=t.useProduct,c=void 0===d?s.useProduct:d,a=c(),v=a.productId,f=n(),y=f.settings,p=void 0===y?{}:y,C=p.metrics,h=void 0===C?[]:C,T={},g=o(h.map((function(t){var e=t.id;return function(t){var n;return null===(n=t.graph.tally)||void 0===n?void 0:n["".concat(v,"_").concat(e)]}})),[]),S=!1,I=!1,P=0,G=g.map((function(t,e){var n,i,o=t||{},u=o.pending,s=o.fulfilled,d=o.error,c=o.cancelled;!(!u&&!c)&&(S=!0),s&&(I=!0),d&&(P+=1);var l=(0,r.Z)((0,r.Z)({},h[e]),{},{data:(null==t||null===(n=t.data)||void 0===n?void 0:n.data)||[],meta:(null==t||null===(i=t.data)||void 0===i?void 0:i.meta)||{}});return T[h[e].id]=l,l})),x={data:T,dataSets:G,error:!1,fulfilled:!1,pending:!1};return P===G.length?x.error=!0:S?x.pending=!0:I&&(x.fulfilled=!0),x},f={GraphCardContext:c,DEFAULT_CONTEXT:d,useGetGraphTally:a,useGraphCardContext:l,useMetricsSelector:v}},51858:function(t,e,n){n.r(e),n.d(e,{DEFAULT_CONTEXT:function(){return y},ProductViewContext:function(){return p},context:function(){return Z},default:function(){return Z},useProduct:function(){return x},useProductContext:function(){return G},useProductGraphConfig:function(){return F},useProductGraphTallyQuery:function(){return g},useProductInventoryGuestsConfig:function(){return Q},useProductInventoryGuestsQuery:function(){return S},useProductInventoryHostsConfig:function(){return _},useProductInventoryHostsQuery:function(){return I},useProductInventorySubscriptionsConfig:function(){return E},useProductInventorySubscriptionsQuery:function(){return P},useProductQuery:function(){return T},useProductQueryFactory:function(){return h},useProductToolbarConfig:function(){return b}});var r=n(45987),i=n(4942),o=n(1413),u=n(92950),s=n.n(u),d=n(12723),c=n(2606),l=n(30446),a=n(46262),v=n(62834),f=["initialGraphFilters","initialInventoryFilters","initialSubscriptionsInventoryFilters","productContextFilterUom"],y=[{},v.B.noop],p=s().createContext(y),C=function(){return(0,u.useContext)(p)},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.overrideId,r=e.useProductViewContext,i=void 0===r?C:r,u=i(),s=u[t],d=u.productId,l=u.viewId,a=c.Cr.reactRedux.useSelector((function(e){var r,i=e.view;return null==i||null===(r=i[t])||void 0===r?void 0:r[n]}),void 0),v=c.Cr.reactRedux.useSelector((function(e){var n,r=e.view;return null==r||null===(n=r[t])||void 0===n?void 0:n[d]}),void 0),f=c.Cr.reactRedux.useSelector((function(e){var n,r=e.view;return null==r||null===(n=r[t])||void 0===n?void 0:n[l]}),void 0);return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},s),a),v),f)},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"query":e,r=t.options;return h(n,r)},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"graphTallyQuery":e,r=t.schemaCheck,i=void 0===r?l.VX.RHSM_API_QUERY_SET_REPORT_CAPACITY_TYPES:r,u=t.options;return d.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),h(n,u)),i)},S=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultLimit,r=void 0===n?100:n,u=e.defaultOffset,s=void 0===u?0:u,c=e.queryType,v=void 0===c?"inventoryGuestsQuery":c,f=e.schemaCheck,y=void 0===f?l.VX.RHSM_API_QUERY_SET_INVENTORY_GUESTS_TYPES:f,p=e.options;return d.VS.setApiQuery((0,o.Z)((0,o.Z)((t={},(0,i.Z)(t,a.O6.LIMIT,r),(0,i.Z)(t,a.O6.OFFSET,s),t),T()),h(v,p)),y)},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventoryHostsQuery":e,r=t.schemaCheck,i=void 0===r?l.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=t.options;return d.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),h(n,u)),i)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventorySubscriptionsQuery":e,r=t.schemaCheck,i=void 0===r?l.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=t.options;return d.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),h(n,u)),i)},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductQuery,n=void 0===e?T:e,i=t.useProductViewContext,s=void 0===i?C:i,d=n(),c=d[l.VN.UOM],a=s(),v=a.initialGraphFilters,y=void 0===v?[]:v,p=a.initialInventoryFilters,h=void 0===p?[]:p,g=a.initialSubscriptionsInventoryFilters,S=void 0===g?[]:g,I=a.productContextFilterUom,P=(0,r.Z)(a,f),G=(0,u.useCallback)((function(){if(!0===I){var t=function(t){var e=t.id;return!t.isOptional||new RegExp(c,"i").test(e)};return(0,o.Z)((0,o.Z)({},P),{},{initialGraphFilters:y.filter(t),initialInventoryFilters:h.filter(t),initialSubscriptionsInventoryFilters:S.filter(t)})}return(0,o.Z)((0,o.Z)({},P),{},{initialGraphFilters:y,initialInventoryFilters:h,initialSubscriptionsInventoryFilters:S})}),[P,y,h,S,I,c]);return G()},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductViewContext,n=void 0===e?C:e,r=n(),i=r.productGroup,o=r.productId,u=r.productLabel,s=r.viewId;return{productGroup:i,productId:o,productLabel:u,viewId:s}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?G:e,r=n(),i=r.initialGraphFilters,o=r.initialGraphSettings,u=void 0===o?{}:o;return{filters:i,settings:u}},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?G:e,r=n(),i=r.inventoryGuestsQuery,o=void 0===i?{}:i,u=r.initialGuestsFilters,s=r.initialGuestsSettings,d=void 0===s?{}:s;return{filters:u,initialQuery:o,settings:d}},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?G:e,r=n(),i=r.initialInventoryFilters,o=r.initialInventorySettings,u=void 0===o?{}:o;return{filters:i,settings:u}},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?G:e,r=n(),i=r.initialSubscriptionsInventoryFilters,o=r.initialSubscriptionsInventorySettings,u=void 0===o?{}:o;return{filters:i,settings:u}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?G:e,r=n(),i=r.initialToolbarFilters,o=r.initialToolbarSettings,u=void 0===o?{}:o,s=r.initialSecondaryToolbarFilters;return{filters:i,secondaryFilters:s,settings:u}},Z={ProductViewContext:p,DEFAULT_CONTEXT:y,useProductContext:G,useQuery:T,useQueryFactory:h,useGraphTallyQuery:g,useInventoryGuestsQuery:S,useInventoryHostsQuery:I,useInventorySubscriptionsQuery:P,useProduct:x,useGraphConfig:F,useInventoryGuestsConfig:Q,useInventoryHostsConfig:_,useInventorySubscriptionsConfig:E,useToolbarConfig:b}}}]);
//# sourceMappingURL=../sourcemaps/5394.js.map