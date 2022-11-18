(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[4021,1339,1858,7297],{91339:function(t,e,n){"use strict";n.r(e),n.d(e,{MinHeight:function(){return a},default:function(){return a}});var i=n(15671),r=n(43144),o=n(97326),u=n(60136),s=n(54062),c=n(92950),d=n.n(c),v=n(76006),a=function(t){(0,u.Z)(n,t);var e=(0,s.Z)(n);function n(){var t;(0,i.Z)(this,n);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return(t=e.call.apply(e,[this].concat(u))).containerRef=d().createRef(),t.innerContainerRef=d().createRef(),t.updatedContainerWidth=0,t.resizeObserver=v.BM.noop,t.onResizeContainer=function(){var e,n,i=(0,o.Z)(t).updatedContainerWidth,r=t.props.updateOnResize,u=(null===(e=t.containerRef)||void 0===e||null===(n=e.current)||void 0===n?void 0:n.clientWidth)||0;r&&u!==i&&(t.updatedContainerWidth=u,t.setMinHeight(!0))},t}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.updateOnResize;window.setTimeout((function(){t.setMinHeight()})),e&&this.setResizeObserver()}},{key:"componentDidUpdate",value:function(){var t=this;this.props.updateOnContent&&window.setTimeout((function(){t.setMinHeight()}))}},{key:"componentWillUnmount",value:function(){this.resizeObserver()}},{key:"setMinHeight",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.props.minHeight,i=this.containerRef.current,r=void 0===i?{}:i,o=this.innerContainerRef.current,u=void 0===o?{}:o;null!=r&&r.style&&(n>(t=e?(null==u?void 0:u.clientHeight)||0:(null==r?void 0:r.clientHeight)||0)&&(t=n),r.style.minHeight="".concat(t,"px"))}},{key:"setResizeObserver",value:function(){var t=this;window.addEventListener("resize",this.onResizeContainer),this.resizeObserver=function(){return window.removeEventListener("resize",t.onResizeContainer)}}},{key:"render",value:function(){var t=this.props.children;return d().createElement("div",{className:"curiosity-minheight",ref:this.containerRef},d().createElement("div",{ref:this.innerContainerRef},t))}}]),n}(d().Component);a.defaultProps={updateOnContent:!1,updateOnResize:!0,minHeight:0}},51858:function(t,e,n){"use strict";n.r(e),n.d(e,{DEFAULT_CONTEXT:function(){return f},ProductViewContext:function(){return p},context:function(){return O},default:function(){return O},useProduct:function(){return R},useProductContext:function(){return T},useProductGraphConfig:function(){return b},useProductGraphTallyQuery:function(){return g},useProductInventoryGuestsConfig:function(){return E},useProductInventoryGuestsQuery:function(){return I},useProductInventoryHostsConfig:function(){return F},useProductInventoryHostsQuery:function(){return S},useProductInventorySubscriptionsConfig:function(){return Q},useProductInventorySubscriptionsQuery:function(){return P},useProductQuery:function(){return C},useProductQueryFactory:function(){return h},useProductToolbarConfig:function(){return Z}});var i=n(45987),r=n(4942),o=n(1413),u=n(92950),s=n.n(u),c=n(12723),d=n(2606),v=n(46262),a=n(62834),l=["initialGraphFilters","initialInventoryFilters","initialSubscriptionsInventoryFilters","productContextFilterUom"],f=[{},a.B.noop],p=s().createContext(f),y=function(){return(0,u.useContext)(p)},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.overrideId,i=e.useProductViewContext,r=void 0===i?y:i,u=r(),s=u[t],c=u.productId,v=u.viewId,a=d.Cr.reactRedux.useSelector((function(e){var i,r=e.view;return null==r||null===(i=r[t])||void 0===i?void 0:i[n]}),void 0),l=d.Cr.reactRedux.useSelector((function(e){var n,i=e.view;return null==i||null===(n=i[t])||void 0===n?void 0:n[c]}),void 0),f=d.Cr.reactRedux.useSelector((function(e){var n,i=e.view;return null==i||null===(n=i[t])||void 0===n?void 0:n[v]}),void 0);return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},s),a),l),f)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"query":e,i=t.options;return h(n,i)},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"graphTallyQuery":e,i=t.schemaCheck,r=void 0===i?v.pM.RHSM_API_QUERY_SET_TALLY_CAPACITY_TYPES:i,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},C()),h(n,u)),r)},I=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultLimit,i=void 0===n?100:n,u=e.defaultOffset,s=void 0===u?0:u,d=e.queryType,a=void 0===d?"inventoryGuestsQuery":d,l=e.schemaCheck,f=void 0===l?v.pM.RHSM_API_QUERY_SET_INVENTORY_TYPES:l,p=e.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)((t={},(0,r.Z)(t,v.O6.LIMIT,i),(0,r.Z)(t,v.O6.OFFSET,s),t),C()),h(a,p)),f)},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventoryHostsQuery":e,i=t.schemaCheck,r=void 0===i?v.pM.RHSM_API_QUERY_SET_INVENTORY_TYPES:i,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},C()),h(n,u)),r)},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.queryType,n=void 0===e?"inventorySubscriptionsQuery":e,i=t.schemaCheck,r=void 0===i?v.pM.RHSM_API_QUERY_SET_INVENTORY_TYPES:i,u=t.options;return c.VS.setApiQuery((0,o.Z)((0,o.Z)({},C()),h(n,u)),r)},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductQuery,n=void 0===e?C:e,r=t.useProductViewContext,s=void 0===r?y:r,c=n(),d=c[v.O6.UOM],a=s(),f=a.initialGraphFilters,p=void 0===f?[]:f,h=a.initialInventoryFilters,g=void 0===h?[]:h,I=a.initialSubscriptionsInventoryFilters,S=void 0===I?[]:I,P=a.productContextFilterUom,T=(0,i.Z)(a,l),R=(0,u.useCallback)((function(){if(!0===P){var t=function(t){var e=t.id,n=t.metric;return!t.isOptional||new RegExp(d,"i").test(n)||new RegExp(d,"i").test(e)};return(0,o.Z)((0,o.Z)({},T),{},{initialGraphFilters:p.filter(t),initialInventoryFilters:g.filter(t),initialSubscriptionsInventoryFilters:S.filter(t)})}return(0,o.Z)((0,o.Z)({},T),{},{initialGraphFilters:p,initialInventoryFilters:g,initialSubscriptionsInventoryFilters:S})}),[T,p,g,S,P,d]);return R()},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductViewContext,n=void 0===e?y:e,i=n(),r=i.productGroup,o=i.productId,u=i.productLabel,s=i.viewId;return{productGroup:r,productId:o,productLabel:u,viewId:s}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?T:e,i=n(),r=i.initialGraphFilters,o=i.initialGraphSettings,u=void 0===o?{}:o;return{filters:r,settings:u}},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?T:e,i=n(),r=i.inventoryGuestsQuery,o=void 0===r?{}:r,u=i.initialGuestsFilters,s=i.initialGuestsSettings,c=void 0===s?{}:s;return{filters:u,initialQuery:o,settings:c}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?T:e,i=n(),r=i.initialInventoryFilters,o=i.initialInventorySettings,u=void 0===o?{}:o;return{filters:r,settings:u}},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?T:e,i=n(),r=i.initialSubscriptionsInventoryFilters,o=i.initialSubscriptionsInventorySettings,u=void 0===o?{}:o;return{filters:r,settings:u}},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.useProductContext,n=void 0===e?T:e,i=n(),r=i.initialToolbarFilters,o=i.initialToolbarSettings,u=void 0===o?{}:o,s=i.initialSecondaryToolbarFilters;return{filters:r,secondaryFilters:s,settings:u}},O={ProductViewContext:p,DEFAULT_CONTEXT:f,useProductContext:T,useQuery:C,useQueryFactory:h,useGraphTallyQuery:g,useInventoryGuestsQuery:I,useInventoryHostsQuery:S,useInventorySubscriptionsQuery:P,useProduct:R,useGraphConfig:b,useInventoryGuestsConfig:E,useInventoryHostsConfig:F,useInventorySubscriptionsConfig:Q,useToolbarConfig:Z}},99376:function(t,e){var n=Object.keys;e.D=function(t,e){if(t===e)return!0;if(!(t instanceof Object&&e instanceof Object))return!1;for(var i=n(t),r=i.length,o=0;o<r;o++)if(!(i[o]in e))return!1;for(o=0;o<r;o++)if(t[i[o]]!==e[i[o]])return!1;return r===n(e).length}},37124:function(t,e,n){"use strict";var i=n(92950);e.Z=function(t,e,n){var r=(0,i.useRef)(void 0);r.current&&n(e,r.current)||(r.current=e),(0,i.useEffect)(t,r.current)}},17297:function(t,e,n){"use strict";var i=n(99376),r=n(37124),o=function(t,e){return t.every((function(t,n){return(0,i.D)(t,e[n])}))};e.Z=function(t,e){(0,r.Z)(t,e,o)}}}]);
//# sourceMappingURL=../sourcemaps/4021.js.map