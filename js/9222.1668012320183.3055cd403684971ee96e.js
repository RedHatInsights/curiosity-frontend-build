"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[9222,3577,7080,2085,1858],{16696:function(t,e,n){n.r(e),n.d(e,{InventoryCardSubscriptions:function(){return d},default:function(){return d}});var r=n(92950),i=n.n(r),o=n(51858),u=n(62881),s=n(82195),c=n(76006),d=function(t){var e=Object.assign({},t);return i().createElement(s.default,Object.assign({cardActions:null},e))};d.defaultProps={isDisabled:c.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS,useGetInventory:u.useGetSubscriptionsInventory,useOnPage:u.useOnPageSubscriptions,useOnColumnSort:u.useOnColumnSortSubscriptions,useProductInventoryConfig:o.useProductInventorySubscriptionsConfig,useProductInventoryQuery:o.useProductInventorySubscriptionsQuery}},62881:function(t,e,n){n.r(e),n.d(e,{context:function(){return S},default:function(){return S},useGetSubscriptionsInventory:function(){return a},useOnColumnSortSubscriptions:function(){return y},useOnPageSubscriptions:function(){return f}});var r=n(4942),i=n(15451),o=n(68929),u=n.n(o),s=n(76871),c=n(61072),d=n(51858),v=n(46262),l=n(76006),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.isDisabled,n=void 0!==e&&e,r=t.getInventory,o=void 0===r?c.Ak.rhsm.getSubscriptionsInventory:r,u=t.useDispatch,s=void 0===u?c.Cr.reactRedux.useDispatch:u,v=t.useProduct,l=void 0===v?d.useProduct:v,a=t.useProductInventoryQuery,f=void 0===a?d.useProductInventorySubscriptionsQuery:a,y=t.useSelectorsResponse,S=void 0===y?c.Cr.reactRedux.useSelectorsResponse:y,I=l(),p=I.productId,P=f(),C=s(),T=S((function(t){var e,n=t.inventory;return null==n||null===(e=n.subscriptionsInventory)||void 0===e?void 0:e[p]})),E=T.error,g=T.cancelled,_=T.fulfilled,O=T.pending,h=T.data;return(0,i.Z)((function(){n||o(p,P)(C)}),[C,n,p,P]),{error:E,fulfilled:_,pending:O||g||!1,data:1===(null==h?void 0:h.length)&&h[0]||h||{}}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useDispatch,n=void 0===e?c.Cr.reactRedux.useDispatch:e,i=t.useProduct,o=void 0===i?d.useProduct:i,u=o(),s=u.productId,l=n();return function(t){var e=t.offset,n=t.perPage;l([(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[v.O6.OFFSET],viewId:s},v.O6.OFFSET,e),(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[v.O6.LIMIT],viewId:s},v.O6.LIMIT,n)])}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.sortColumns,n=void 0===e?v.Ok:e,i=t.useDispatch,o=void 0===i?c.Cr.reactRedux.useDispatch:i,a=t.useProduct,f=void 0===a?d.useProduct:a,y=f(),S=y.productId,I=o();return function(t,e){var i,o=e.direction,d=e.id,a=Object.values(n).find((function(t){return t===d||u()(t)===d}));a?(i=o===s.SortByDirection.desc?v.PQ.DESCENDING:v.PQ.ASCENDING,I([(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[v.O6.DIRECTION],viewId:S},v.O6.DIRECTION,i),(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[v.O6.SORT],viewId:S},v.O6.SORT,a)])):(l.BM.DEV_MODE||l.BM.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(d," is allowed."))}},S={useGetSubscriptionsInventory:a,useOnPageSubscriptions:f,useOnColumnSortSubscriptions:y}},51858:function(t,e,n){n.r(e),n.d(e,{DEFAULT_CONTEXT:function(){return y},ProductViewContext:function(){return S},context:function(){return N},default:function(){return N},useProduct:function(){return O},useProductContext:function(){return _},useProductGraphConfig:function(){return h},useProductGraphTallyQuery:function(){return C},useProductInventoryGuestsConfig:function(){return R},useProductInventoryGuestsQuery:function(){return T},useProductInventoryHostsConfig:function(){return b},useProductInventoryHostsQuery:function(){return E},useProductInventorySubscriptionsConfig:function(){return Q},useProductInventorySubscriptionsQuery:function(){return g},useProductQuery:function(){return P},useProductQueryFactory:function(){return p},useProductToolbarConfig:function(){return F}});var r=n(45987),i=n(4942),o=n(1413),u=n(92950),s=n.n(u),c=n(12723),d=n(2606),v=n(30446),l=n(46262),a=n(62834),f=["initialGraphFilters","initialInventoryFilters","initialSubscriptionsInventoryFilters","productContextFilterUom"],y=[{},a.B.noop],S=s().createContext(y),I=function(){return(0,u.useContext)(S)},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.overrideId,r=e.useProductViewContext,i=void 0===r?I:r,u=i(),s=u[t],c=u.productId,v=u.viewId,l=d.Cr.reactRedux.useSelector((function(e){var r,i=e.view;return null==i||null===(r=i[t])||void 0===r?void 0:r[n]}),void 0),a=d.Cr.reactRedux.useSelector((function(e){var n,r=e.view;return null==r||null===(n=r[t])||void 0===n?void 0:n[c]}),void 0),f=d.Cr.reactRedux.useSelector((function(e){var n,r=e.view;return null==r||null===(n=r[t])||void 0===n?void 0:n[v]}),void 0);return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},s),l),a),f)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"query":e,r=t.options;return p(n,r)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"graphTallyQuery":e,r=t.schemaCheck,i=void 0===r?v.VX.RHSM_API_QUERY_SET_REPORT_CAPACITY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},P()),p(n,u)),i)},T=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultLimit,r=void 0===n?100:n,u=e.defaultOffset,s=void 0===u?0:u,d=e.queryType,a=void 0===d?"inventoryGuestsQuery":d,f=e.schemaCheck,y=void 0===f?v.VX.RHSM_API_QUERY_SET_INVENTORY_GUESTS_TYPES:f,S=e.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)((t={},(0,i.Z)(t,l.O6.LIMIT,r),(0,i.Z)(t,l.O6.OFFSET,s),t),P()),p(a,S)),y)},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventoryHostsQuery":e,r=t.schemaCheck,i=void 0===r?v.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},P()),p(n,u)),i)},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventorySubscriptionsQuery":e,r=t.schemaCheck,i=void 0===r?v.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},P()),p(n,u)),i)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductQuery,n=void 0===e?P:e,i=t.useProductViewContext,s=void 0===i?I:i,c=n(),d=c[v.VN.UOM],l=s(),a=l.initialGraphFilters,y=void 0===a?[]:a,S=l.initialInventoryFilters,p=void 0===S?[]:S,C=l.initialSubscriptionsInventoryFilters,T=void 0===C?[]:C,E=l.productContextFilterUom,g=(0,r.Z)(l,f),_=(0,u.useCallback)((function(){if(!0===E){var t=function(t){var e=t.id;return!t.isOptional||new RegExp(d,"i").test(e)};return(0,o.Z)((0,o.Z)({},g),{},{initialGraphFilters:y.filter(t),initialInventoryFilters:p.filter(t),initialSubscriptionsInventoryFilters:T.filter(t)})}return(0,o.Z)((0,o.Z)({},g),{},{initialGraphFilters:y,initialInventoryFilters:p,initialSubscriptionsInventoryFilters:T})}),[g,y,p,T,E,d]);return _()},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductViewContext,n=void 0===e?I:e,r=n(),i=r.productGroup,o=r.productId,u=r.productLabel,s=r.viewId;return{productGroup:i,productId:o,productLabel:u,viewId:s}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?_:e,r=n(),i=r.initialGraphFilters,o=r.initialGraphSettings,u=void 0===o?{}:o;return{filters:i,settings:u}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?_:e,r=n(),i=r.inventoryGuestsQuery,o=void 0===i?{}:i,u=r.initialGuestsFilters,s=r.initialGuestsSettings,c=void 0===s?{}:s;return{filters:u,initialQuery:o,settings:c}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?_:e,r=n(),i=r.initialInventoryFilters,o=r.initialInventorySettings,u=void 0===o?{}:o;return{filters:i,settings:u}},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?_:e,r=n(),i=r.initialSubscriptionsInventoryFilters,o=r.initialSubscriptionsInventorySettings,u=void 0===o?{}:o;return{filters:i,settings:u}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?_:e,r=n(),i=r.initialToolbarFilters,o=r.initialToolbarSettings,u=void 0===o?{}:o,s=r.initialSecondaryToolbarFilters;return{filters:i,secondaryFilters:s,settings:u}},N={ProductViewContext:S,DEFAULT_CONTEXT:y,useProductContext:_,useQuery:P,useQueryFactory:p,useGraphTallyQuery:C,useInventoryGuestsQuery:T,useInventoryHostsQuery:E,useInventorySubscriptionsQuery:g,useProduct:O,useGraphConfig:h,useInventoryGuestsConfig:R,useInventoryHostsConfig:b,useInventorySubscriptionsConfig:Q,useToolbarConfig:F}}}]);
//# sourceMappingURL=../sourcemaps/9222.js.map