(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[2293,1858,5451],{32293:function(t,e,n){"use strict";n.r(e),n.d(e,{context:function(){return f},default:function(){return f},useGetGuestsInventory:function(){return l},useOnScroll:function(){return a},useSelectorsGuestsInventory:function(){return d}});var r=n(4942),i=n(1413),o=n(15451),u=n(77823),s=n(61072),c=n(51858),v=n(46262),d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.useSelectorsResponse,r=void 0===n?s.Cr.reactRedux.useSelectorsResponse:n,i=r((function(e){var n,r=e.inventory;return null==r||null===(n=r.hostsGuests)||void 0===n?void 0:n[t]})),o=i.error,u=i.cancelled,c=i.fulfilled,v=i.pending,d=i.data;return{error:o,fulfilled:c,pending:v||u||!1,data:1===(null==d?void 0:d.length)&&d[0]||d||{}}},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getInventory,r=void 0===n?s.Ak.rhsm.getHostsInventoryGuests:n,u=e.useDispatch,v=void 0===u?s.Cr.reactRedux.useDispatch:u,l=e.useProductInventoryQuery,a=void 0===l?c.useProductInventoryGuestsQuery:l,f=e.useSelectorsInventory,y=void 0===f?d:f,p=a({options:{overrideId:t}}),I=v(),S=y(t);return(0,o.Z)((function(){r(t,p)(I)}),[I,t,p]),(0,i.Z)({},S)},a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.useDispatch,o=void 0===i?s.Cr.reactRedux.useDispatch:i,l=n.useSelectorsInventory,a=void 0===l?d:l,f=n.useProductInventoryQuery,y=void 0===f?c.useProductInventoryGuestsQuery:f,p=o(),I=a(t),S=I.pending,T=I.data,g=void 0===T?{}:T,h=(null==g?void 0:g.meta)||{},C=h.count,E=y({options:{overrideId:t}}),P=E[v.O6.LIMIT],_=E[v.O6.OFFSET];return(0,u.Z)((function(){p([{type:s.JD.query.SET_QUERY_CLEAR_INVENTORY_GUESTS_LIST,viewId:t}])})),function(n){var i=n.target,o=i.scrollHeight-i.scrollTop===i.clientHeight;C>(_+1)*P&&o&&!S&&("function"==typeof e&&e(n),p([(0,r.Z)({type:s.JD.query.SET_QUERY_RHSM_GUESTS_INVENTORY_TYPES[v.O6.OFFSET],viewId:t},v.O6.OFFSET,_+1),(0,r.Z)({type:s.JD.query.SET_QUERY_RHSM_GUESTS_INVENTORY_TYPES[v.O6.LIMIT],viewId:t},v.O6.LIMIT,P)]))}},f={useGetGuestsInventory:l,useOnScroll:a,useSelectorsGuestsInventory:d}},51858:function(t,e,n){"use strict";n.r(e),n.d(e,{DEFAULT_CONTEXT:function(){return y},ProductViewContext:function(){return p},context:function(){return x},default:function(){return x},useProduct:function(){return _},useProductContext:function(){return P},useProductGraphConfig:function(){return G},useProductGraphTallyQuery:function(){return g},useProductInventoryGuestsConfig:function(){return Q},useProductInventoryGuestsQuery:function(){return h},useProductInventoryHostsConfig:function(){return F},useProductInventoryHostsQuery:function(){return C},useProductInventorySubscriptionsConfig:function(){return R},useProductInventorySubscriptionsQuery:function(){return E},useProductQuery:function(){return T},useProductQueryFactory:function(){return S},useProductToolbarConfig:function(){return O}});var r=n(45987),i=n(4942),o=n(1413),u=n(92950),s=n.n(u),c=n(12723),v=n(2606),d=n(30446),l=n(46262),a=n(62834),f=["initialGraphFilters","initialInventoryFilters","initialSubscriptionsInventoryFilters","productContextFilterUom"],y=[{},a.B.noop],p=s().createContext(y),I=function(){return(0,u.useContext)(p)},S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.overrideId,r=e.useProductViewContext,i=void 0===r?I:r,u=i(),s=u[t],c=u.productId,d=u.viewId,l=v.Cr.reactRedux.useSelector((function(e){var r,i=e.view;return null==i||null===(r=i[t])||void 0===r?void 0:r[n]}),void 0),a=v.Cr.reactRedux.useSelector((function(e){var n,r=e.view;return null==r||null===(n=r[t])||void 0===n?void 0:n[c]}),void 0),f=v.Cr.reactRedux.useSelector((function(e){var n,r=e.view;return null==r||null===(n=r[t])||void 0===n?void 0:n[d]}),void 0);return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},s),l),a),f)},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"query":e,r=t.options;return S(n,r)},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"graphTallyQuery":e,r=t.schemaCheck,i=void 0===r?d.VX.RHSM_API_QUERY_SET_REPORT_CAPACITY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),S(n,u)),i)},h=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultLimit,r=void 0===n?100:n,u=e.defaultOffset,s=void 0===u?0:u,v=e.queryType,a=void 0===v?"inventoryGuestsQuery":v,f=e.schemaCheck,y=void 0===f?d.VX.RHSM_API_QUERY_SET_INVENTORY_GUESTS_TYPES:f,p=e.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)((t={},(0,i.Z)(t,l.O6.LIMIT,r),(0,i.Z)(t,l.O6.OFFSET,s),t),T()),S(a,p)),y)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventoryHostsQuery":e,r=t.schemaCheck,i=void 0===r?d.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),S(n,u)),i)},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventorySubscriptionsQuery":e,r=t.schemaCheck,i=void 0===r?d.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},T()),S(n,u)),i)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductQuery,n=void 0===e?T:e,i=t.useProductViewContext,s=void 0===i?I:i,c=n(),v=c[d.VN.UOM],l=s(),a=l.initialGraphFilters,y=void 0===a?[]:a,p=l.initialInventoryFilters,S=void 0===p?[]:p,g=l.initialSubscriptionsInventoryFilters,h=void 0===g?[]:g,C=l.productContextFilterUom,E=(0,r.Z)(l,f),P=(0,u.useCallback)((function(){if(!0===C){var t=function(t){var e=t.id;return!t.isOptional||new RegExp(v,"i").test(e)};return(0,o.Z)((0,o.Z)({},E),{},{initialGraphFilters:y.filter(t),initialInventoryFilters:S.filter(t),initialSubscriptionsInventoryFilters:h.filter(t)})}return(0,o.Z)((0,o.Z)({},E),{},{initialGraphFilters:y,initialInventoryFilters:S,initialSubscriptionsInventoryFilters:h})}),[E,y,S,h,C,v]);return P()},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductViewContext,n=void 0===e?I:e,r=n(),i=r.productGroup,o=r.productId,u=r.productLabel,s=r.viewId;return{productGroup:i,productId:o,productLabel:u,viewId:s}},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?P:e,r=n(),i=r.initialGraphFilters,o=r.initialGraphSettings,u=void 0===o?{}:o;return{filters:i,settings:u}},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?P:e,r=n(),i=r.inventoryGuestsQuery,o=void 0===i?{}:i,u=r.initialGuestsFilters,s=r.initialGuestsSettings,c=void 0===s?{}:s;return{filters:u,initialQuery:o,settings:c}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?P:e,r=n(),i=r.initialInventoryFilters,o=r.initialInventorySettings,u=void 0===o?{}:o;return{filters:i,settings:u}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?P:e,r=n(),i=r.initialSubscriptionsInventoryFilters,o=r.initialSubscriptionsInventorySettings,u=void 0===o?{}:o;return{filters:i,settings:u}},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?P:e,r=n(),i=r.initialToolbarFilters,o=r.initialToolbarSettings,u=void 0===o?{}:o,s=r.initialSecondaryToolbarFilters;return{filters:i,secondaryFilters:s,settings:u}},x={ProductViewContext:p,DEFAULT_CONTEXT:y,useProductContext:P,useQuery:T,useQueryFactory:S,useGraphTallyQuery:g,useInventoryGuestsQuery:h,useInventoryHostsQuery:C,useInventorySubscriptionsQuery:E,useProduct:_,useGraphConfig:G,useInventoryGuestsConfig:Q,useInventoryHostsConfig:F,useInventorySubscriptionsConfig:R,useToolbarConfig:O}},99376:function(t,e){var n=Object.keys;e.D=function(t,e){if(t===e)return!0;if(!(t instanceof Object&&e instanceof Object))return!1;for(var r=n(t),i=r.length,o=0;o<i;o++)if(!(r[o]in e))return!1;for(o=0;o<i;o++)if(t[r[o]]!==e[r[o]])return!1;return i===n(e).length}},15451:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(99376),i=n(92950),o=function(t,e){return t.every((function(t,n){return(0,r.D)(t,e[n])}))},u=function(t,e){!function(t,e,n){var r=(0,i.useRef)(void 0);r.current&&n(e,r.current)||(r.current=e),(0,i.useEffect)(t,r.current)}(t,e,o)}}}]);
//# sourceMappingURL=../sourcemaps/2293.js.map