"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[9517,4044,8710,1858],{44044:function(e,t,n){n.r(t),n.d(t,{createMockEvent:function(){return i},default:function(){return s},doesNotHaveMinimumCharacters:function(){return u},formHelpers:function(){return s}});var r=n(1413),o=n(62834),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,r.Z)({},e),i=n.checked,u=n.currentTarget,s=void 0===u?{}:u,a=n.keyCode,c=n.persist,l=void 0===c?o.B.noop:c,d=n.target,v=void 0===d?{}:d;return t&&l(),{checked:i,currentTarget:s,keyCode:a,id:s.id||s.name,name:s.name,persist:l,value:s.value,target:v}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"string"==typeof e&&e.length<t||"string"!=typeof e},s={createMockEvent:i,doesNotHaveMinimumCharacters:u}},18710:function(e,t,n){n.r(t),n.d(t,{TextInput:function(){return f},default:function(){return f}});var r=n(45987),o=n(1413),i=n(15671),u=n(43144),s=n(60136),a=n(54062),c=n(92950),l=n.n(c),d=n(21242),v=n(44044),p=n(76006),y=["className","id","isDisabled","name","onChange","onClear","onKeyUp","onMouseUp","isReadOnly","type","value"],f=function(e){(0,s.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return(e=t.call.apply(t,[this].concat(u))).state={updatedValue:null},e.onKeyUp=function(t){var n=e.props,r=n.onClear,i=n.onKeyUp,u=n.type,s=t.currentTarget,a=t.keyCode,c=(0,o.Z)({},t);i((0,v.createMockEvent)(t,!0)),27===a&&("search"===u&&""===s.value?r((0,v.createMockEvent)(c)):e.setState({updatedValue:""},(function(){r((0,v.createMockEvent)((0,o.Z)((0,o.Z)({},c),{currentTarget:(0,o.Z)((0,o.Z)({},c.currentTarget),{},{value:""})})))})))},e.onMouseUp=function(t){var n=e.props,r=n.onClear,i=n.onMouseUp,u=n.type,s=t.currentTarget,a=(0,o.Z)({},t);i((0,v.createMockEvent)(t,!0)),"search"===u&&""!==s.value&&setTimeout((function(){""===s.value&&r((0,v.createMockEvent)(a))}))},e.onChange=function(t,n){var r=e.props.onChange,i=(0,o.Z)({},n);e.setState({updatedValue:t},(function(){r((0,v.createMockEvent)(i))}))},e}return(0,u.Z)(n,[{key:"render",value:function(){var e,t=this.state.updatedValue,n=this.props,o=n.className,i=n.id,u=n.isDisabled,s=n.name,a=(n.onChange,n.onClear,n.onKeyUp,n.onMouseUp,n.isReadOnly),c=n.type,v=n.value,f=(0,r.Z)(n,y),h=s||p.BM.generateId(),I=i||h;return l().createElement(d.TextInput,Object.assign({id:I,name:h,className:"curiosity-text-input ".concat(o),isDisabled:u||!1,onChange:this.onChange,onKeyUp:this.onKeyUp,onMouseUp:this.onMouseUp,isReadOnly:a||!1,type:c,value:null!==(e=null!=t?t:v)&&void 0!==e?e:""},f))}}]),n}(l().Component);f.defaultProps={className:"",id:null,isDisabled:!1,isReadOnly:!1,name:null,onChange:p.BM.noop,onClear:p.BM.noop,onKeyUp:p.BM.noop,onMouseUp:p.BM.noop,type:"text",value:""}},51858:function(e,t,n){n.r(t),n.d(t,{DEFAULT_CONTEXT:function(){return y},ProductViewContext:function(){return f},context:function(){return Z},default:function(){return Z},useProduct:function(){return P},useProductContext:function(){return _},useProductGraphConfig:function(){return N},useProductGraphTallyQuery:function(){return S},useProductInventoryGuestsConfig:function(){return m},useProductInventoryGuestsQuery:function(){return T},useProductInventoryHostsConfig:function(){return M},useProductInventoryHostsQuery:function(){return g},useProductInventorySubscriptionsConfig:function(){return Q},useProductInventorySubscriptionsQuery:function(){return E},useProductQuery:function(){return C},useProductQueryFactory:function(){return I},useProductToolbarConfig:function(){return R}});var r=n(45987),o=n(4942),i=n(1413),u=n(92950),s=n.n(u),a=n(12723),c=n(2606),l=n(30446),d=n(46262),v=n(62834),p=["initialGraphFilters","initialInventoryFilters","initialSubscriptionsInventoryFilters","productContextFilterUom"],y=[{},v.B.noop],f=s().createContext(y),h=function(){return(0,u.useContext)(f)},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.overrideId,r=t.useProductViewContext,o=void 0===r?h:r,u=o(),s=u[e],a=u.productId,l=u.viewId,d=c.Cr.reactRedux.useSelector((function(t){var r,o=t.view;return null==o||null===(r=o[e])||void 0===r?void 0:r[n]}),void 0),v=c.Cr.reactRedux.useSelector((function(t){var n,r=t.view;return null==r||null===(n=r[e])||void 0===n?void 0:n[a]}),void 0),p=c.Cr.reactRedux.useSelector((function(t){var n,r=t.view;return null==r||null===(n=r[e])||void 0===n?void 0:n[l]}),void 0);return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},s),d),v),p)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.queryType,n=void 0===t?"query":t,r=e.options;return I(n,r)},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.queryType,n=void 0===t?"graphTallyQuery":t,r=e.schemaCheck,o=void 0===r?l.VX.RHSM_API_QUERY_SET_REPORT_CAPACITY_TYPES:r,u=e.options;return a.VS.setApiQuery((0,i.Z)((0,i.Z)({},C()),I(n,u)),o)},T=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.defaultLimit,r=void 0===n?100:n,u=t.defaultOffset,s=void 0===u?0:u,c=t.queryType,v=void 0===c?"inventoryGuestsQuery":c,p=t.schemaCheck,y=void 0===p?l.VX.RHSM_API_QUERY_SET_INVENTORY_GUESTS_TYPES:p,f=t.options;return a.VS.setApiQuery((0,i.Z)((0,i.Z)((e={},(0,o.Z)(e,d.O6.LIMIT,r),(0,o.Z)(e,d.O6.OFFSET,s),e),C()),I(v,f)),y)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.queryType,n=void 0===t?"inventoryHostsQuery":t,r=e.schemaCheck,o=void 0===r?l.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=e.options;return a.VS.setApiQuery((0,i.Z)((0,i.Z)({},C()),I(n,u)),o)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.queryType,n=void 0===t?"inventorySubscriptionsQuery":t,r=e.schemaCheck,o=void 0===r?l.VX.RHSM_API_QUERY_SET_INVENTORY_TYPES:r,u=e.options;return a.VS.setApiQuery((0,i.Z)((0,i.Z)({},C()),I(n,u)),o)},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useProductQuery,n=void 0===t?C:t,o=e.useProductViewContext,s=void 0===o?h:o,a=n(),c=a[l.VN.UOM],d=s(),v=d.initialGraphFilters,y=void 0===v?[]:v,f=d.initialInventoryFilters,I=void 0===f?[]:f,S=d.initialSubscriptionsInventoryFilters,T=void 0===S?[]:S,g=d.productContextFilterUom,E=(0,r.Z)(d,p),_=(0,u.useCallback)((function(){if(!0===g){var e=function(e){var t=e.id;return!e.isOptional||new RegExp(c,"i").test(t)};return(0,i.Z)((0,i.Z)({},E),{},{initialGraphFilters:y.filter(e),initialInventoryFilters:I.filter(e),initialSubscriptionsInventoryFilters:T.filter(e)})}return(0,i.Z)((0,i.Z)({},E),{},{initialGraphFilters:y,initialInventoryFilters:I,initialSubscriptionsInventoryFilters:T})}),[E,y,I,T,g,c]);return _()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useProductViewContext,n=void 0===t?h:t,r=n(),o=r.productGroup,i=r.productId,u=r.productLabel,s=r.viewId;return{productGroup:o,productId:i,productLabel:u,viewId:s}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useProductContext,n=void 0===t?_:t,r=n(),o=r.initialGraphFilters,i=r.initialGraphSettings,u=void 0===i?{}:i;return{filters:o,settings:u}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useProductContext,n=void 0===t?_:t,r=n(),o=r.inventoryGuestsQuery,i=void 0===o?{}:o,u=r.initialGuestsFilters,s=r.initialGuestsSettings,a=void 0===s?{}:s;return{filters:u,initialQuery:i,settings:a}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useProductContext,n=void 0===t?_:t,r=n(),o=r.initialInventoryFilters,i=r.initialInventorySettings,u=void 0===i?{}:i;return{filters:o,settings:u}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useProductContext,n=void 0===t?_:t,r=n(),o=r.initialSubscriptionsInventoryFilters,i=r.initialSubscriptionsInventorySettings,u=void 0===i?{}:i;return{filters:o,settings:u}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useProductContext,n=void 0===t?_:t,r=n(),o=r.initialToolbarFilters,i=r.initialToolbarSettings,u=void 0===i?{}:i,s=r.initialSecondaryToolbarFilters;return{filters:o,secondaryFilters:s,settings:u}},Z={ProductViewContext:f,DEFAULT_CONTEXT:y,useProductContext:_,useQuery:C,useQueryFactory:I,useGraphTallyQuery:S,useInventoryGuestsQuery:T,useInventoryHostsQuery:g,useInventorySubscriptionsQuery:E,useProduct:P,useGraphConfig:N,useInventoryGuestsConfig:m,useInventoryHostsConfig:M,useInventorySubscriptionsConfig:Q,useToolbarConfig:R}},89517:function(e,t,n){n.r(t),n.d(t,{ToolbarFieldDisplayName:function(){return y},default:function(){return y}});var r=n(4942),o=n(92950),i=n.n(o),u=n(21242),s=n(23279),a=n.n(s),c=n(61072),l=n(51858),d=n(18710),v=n(30446),p=n(83109),y=function(e){var t=e.t,n=e.useDispatch,o=e.useProduct,s=e.useProductInventoryHostsQuery,l=o().viewId,p=s()[v.VN.DISPLAY_NAME],y=n(),f=function(e){return y([{type:c.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:l},(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[v.VN.DISPLAY_NAME],viewId:l},v.VN.DISPLAY_NAME,(null==e?void 0:e.trim())||null)])},h=a()(f,700);return i().createElement(u.InputGroup,null,i().createElement(d.TextInput,{"aria-label":t("curiosity-toolbar.placeholder_filter",{context:"displayName"}),className:"curiosity-input__display-name",iconVariant:"search",maxLength:255,onClear:function(){""!==p&&p&&y([{type:c.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:l},(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[v.VN.DISPLAY_NAME],viewId:l},v.VN.DISPLAY_NAME,null)])},onKeyUp:function(e){switch(e.keyCode){case 13:f(e.value);break;case 27:break;default:h(e.value)}},value:p,placeholder:t("curiosity-toolbar.placeholder_filter",{context:"displayName"}),"data-test":"toolbarFieldDisplayName"}))};y.defaultProps={t:p.translate,useDispatch:c.Cr.reactRedux.useDispatch,useProduct:l.useProduct,useProductInventoryHostsQuery:l.useProductInventoryHostsQuery}}}]);
//# sourceMappingURL=../sourcemaps/9517.js.map