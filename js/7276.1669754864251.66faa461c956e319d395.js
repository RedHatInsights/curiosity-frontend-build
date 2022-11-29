"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[7276,4044,8710,1339,8900,5020],{62472:function(e,t,n){n.d(t,{S$:function(){return s},Z1:function(){return c},dp:function(){return u},ql:function(){return l}});var r=n(92950);let o=0;const a="OUIA-Generated-",i={};function u(e,t,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const s=(e,t,n=!0,r)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":c(e,t,r)}),c=(e,t,n)=>{const o=(0,r.useMemo)((()=>l(e,n)),[e,n]);return null!=t?t:o};function l(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,i[n]||(i[n]=0),`${a}${e}-${t?`${t}-`:""}${++i[n]}`}catch(n){return`${a}${e}-${t?`${t}-`:""}${++o}`}}},44044:function(e,t,n){n.r(t),n.d(t,{createMockEvent:function(){return a},default:function(){return u},doesNotHaveMinimumCharacters:function(){return i},formHelpers:function(){return u}});var r=n(1413),o=n(62834),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,r.Z)({},e),a=n.checked,i=n.currentTarget,u=void 0===i?{}:i,s=n.keyCode,c=n.persist,l=void 0===c?o.B.noop:c,d=n.target,p=void 0===d?{}:d;return t&&l(),{checked:a,currentTarget:u,keyCode:s,id:u.id||u.name,name:u.name,persist:l,value:u.value,target:p}},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"string"==typeof e&&e.length<t||"string"!=typeof e},u={createMockEvent:a,doesNotHaveMinimumCharacters:i}},18710:function(e,t,n){n.r(t),n.d(t,{TextInput:function(){return y},default:function(){return y}});var r=n(45987),o=n(1413),a=n(15671),i=n(43144),u=n(60136),s=n(54062),c=n(92950),l=n.n(c),d=n(21242),p=n(44044),f=n(76006),v=["className","id","isDisabled","name","onChange","onClear","onKeyUp","onMouseUp","isReadOnly","type","value"],y=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(e=t.call.apply(t,[this].concat(i))).state={updatedValue:null},e.onKeyUp=function(t){var n=e.props,r=n.onClear,a=n.onKeyUp,i=n.type,u=t.currentTarget,s=t.keyCode,c=(0,o.Z)({},t);a((0,p.createMockEvent)(t,!0)),27===s&&("search"===i&&""===u.value?r((0,p.createMockEvent)(c)):e.setState({updatedValue:""},(function(){r((0,p.createMockEvent)((0,o.Z)((0,o.Z)({},c),{currentTarget:(0,o.Z)((0,o.Z)({},c.currentTarget),{},{value:""})})))})))},e.onMouseUp=function(t){var n=e.props,r=n.onClear,a=n.onMouseUp,i=n.type,u=t.currentTarget,s=(0,o.Z)({},t);a((0,p.createMockEvent)(t,!0)),"search"===i&&""!==u.value&&setTimeout((function(){""===u.value&&r((0,p.createMockEvent)(s))}))},e.onChange=function(t,n){var r=e.props.onChange,a=(0,o.Z)({},n);e.setState({updatedValue:t},(function(){r((0,p.createMockEvent)(a))}))},e}return(0,i.Z)(n,[{key:"render",value:function(){var e,t=this.state.updatedValue,n=this.props,o=n.className,a=n.id,i=n.isDisabled,u=n.name,s=(n.onChange,n.onClear,n.onKeyUp,n.onMouseUp,n.isReadOnly),c=n.type,p=n.value,y=(0,r.Z)(n,v),m=u||f.BM.generateId(),h=a||m;return l().createElement(d.TextInput,Object.assign({id:h,name:m,className:"curiosity-text-input ".concat(o),isDisabled:i||!1,onChange:this.onChange,onKeyUp:this.onKeyUp,onMouseUp:this.onMouseUp,isReadOnly:s||!1,type:c,value:null!==(e=null!=t?t:p)&&void 0!==e?e:""},y))}}]),n}(l().Component);y.defaultProps={className:"",id:null,isDisabled:!1,isReadOnly:!1,name:null,onChange:f.BM.noop,onClear:f.BM.noop,onKeyUp:f.BM.noop,onMouseUp:f.BM.noop,type:"text",value:""}},57276:function(e,t,n){n.r(t),n.d(t,{InventoryCard:function(){return N},default:function(){return N}});var r=n(1413),o=n(29439),a=n(92950),i=n.n(a),u=n(62179),s=n(76871),c=n(21242),l=n(48521),d=n(62472),p=n(94184),f=n.n(p),v=function(){return v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},v.apply(this,arguments)};function y(e){return"".concat(e,e>1||e<1?" Results":" Result")}var m=function(e){var t,n=e.isFooter,r=void 0!==n&&n,o=e.results,i=e.className,u=e.selected,s=e.children,p=e.ouiaId,m=e.ouiaSafe,h=void 0===m||m,g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["isFooter","results","className","selected","children","ouiaId","ouiaSafe"]),E=f()("ins-c-table__toolbar",((t={})["ins-m-footer"]=r,t),i),I="RHI/TableToolbar",O=(0,d.Z1)(I,p,h);return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(c.Toolbar,v({className:E,"data-ouia-component-type":I,"data-ouia-component-id":O,"data-ouia-safe":h},g,{children:s})),(o&&o>=0||u&&u>=0)&&(0,l.jsxs)("div",v({className:"ins-c-table__toolbar-results"},{children:[o&&o>=0&&(0,l.jsxs)("span",v({className:"ins-c-table__toolbar-results-count"},{children:[" ",y(o)," "]})),u&&u>=0&&(0,l.jsxs)("span",v({className:"ins-c-table__toolbar-results-selected"},{children:[" ",u," Selected "]}))]}))]})},h=n(98944),g=n(51858),E=n(76006),I=n(78697),O=n(1797),P=n(91339),S=n(15242),C=n(12243),R=n(68900),b=n(89517),_=n(65020),D=n(46262),T=n(83109),M=n(42896),N=function(e){var t=e.cardActions,n=e.isDisabled,l=e.perPageDefault,d=e.t,p=e.useGetInventory,f=e.useOnPage,v=e.useOnColumnSort,y=e.useProduct,h=e.useProductInventoryConfig,g=e.useProductInventoryQuery,E=e.useSession,b=(0,a.useState)({columnHeaders:[],rows:[]}),T=(0,o.Z)(b,2),M=T[0],N=T[1],H=E(),w=g(),Z=f(),k=v(),Y=y().productId,U=h(),x=U.filters,A=U.settings,Q=p({isDisabled:n}),F=Q.error,B=Q.fulfilled,L=Q.pending,V=Q.data,$=void 0===V?{}:V,j=$.data,z=void 0===j?[]:j,G=$.meta,q=void 0===G?{}:G;if((0,u.Z)((function(){var e=[],t=[];B&&z.length&&(t=z.map((function(t){var n=Object.assign({},t),o=C.inventoryCardHelpers.parseRowCellsListData({filters:C.inventoryCardHelpers.parseInventoryFilters({filters:x,onSort:k,query:w}),cellData:n,meta:q,session:H,productId:Y}),a=o.columnHeaders,u=o.cells;e=a;var s=null==n?void 0:n.subscriptionManagerId,c=null==n?void 0:n.numberOfGuests;return{cells:u,expandedContent:("function"==typeof(null==A?void 0:A.hasSubTable)?A.hasSubTable((0,r.Z)({},n),(0,r.Z)({},H)):c>0&&s)&&i().createElement(S.InventoryGuests,{key:"guests-".concat(s),numberOfGuests:c,id:s})||void 0}}))),N((function(){return{columnHeaders:e,rows:t}}))}),[x,B,z]),n)return i().createElement(c.Card,{className:"curiosity-inventory-card__disabled"},i().createElement(c.CardBody,null,i().createElement(c.Bullseye,null,d("curiosity-inventory.tab",{context:"disabled"}))));var J=null==q?void 0:q.count,W=w[D.O6.LIMIT]||l,K=w[D.O6.OFFSET],X=_.paginationHelpers.isLastPage(K,W,J),ee=!0===B&&J<W&&"bodyMinHeight-".concat(W,"-resize")||!0===B&&X&&"bodyMinHeight-".concat(W,"-resize")||!0===F&&"bodyMinHeight-".concat(W,"-resize")||"bodyMinHeight-".concat(W);return i().createElement(c.Card,{className:"curiosity-inventory-card"},i().createElement(P.MinHeight,{key:"headerMinHeight",updateOnContent:!0},i().createElement(c.CardHeader,{className:F?"hidden":"","aria-hidden":F||!1},t,i().createElement(c.CardActions,{className:J?"":"transparent","aria-hidden":!J||!1},i().createElement(R.default,{isCompact:!0,isDisabled:L||F,itemCount:J,offset:K,onPage:Z,onPerPage:Z,perPage:W})))),i().createElement(P.MinHeight,{key:ee,updateOnContent:!0},i().createElement(c.CardBody,null,i().createElement("div",{className:(F?"blur":L&&"fadein")||""},L&&i().createElement(O.Loader,{variant:"table",tableProps:{className:"curiosity-inventory-list",colCount:(null==x?void 0:x.length)||(null==z?void 0:z[0])&&Object.keys(z[0]).length||1,colWidth:(null==x?void 0:x.length)&&x.map((function(e){return e.cellWidth}))||[],rowCount:(null==z?void 0:z.length)||W,variant:s.TableVariant.compact}}),!L&&i().createElement(I.default,{borders:!0,variant:s.TableVariant.compact,className:"curiosity-inventory-list",columnHeaders:M.columnHeaders,rows:M.rows})))),i().createElement(P.MinHeight,{key:"footerMinHeight",updateOnContent:!0},i().createElement(c.CardFooter,{className:(F?"hidden":!J&&"transparent")||"","aria-hidden":F||!J||!1},i().createElement(m,{isFooter:!0},i().createElement(R.default,{dropDirection:"up",isDisabled:L||F,itemCount:J,offset:K,onPage:Z,onPerPage:Z,perPage:W})))))};N.defaultProps={cardActions:i().createElement(c.CardHeaderMain,null,i().createElement(b.ToolbarFieldDisplayName,null)),isDisabled:E.BM.UI_DISABLED_TABLE_INSTANCES,perPageDefault:10,t:T.translate,useGetInventory:M.useGetInstancesInventory,useOnPage:M.useOnPageInstances,useOnColumnSort:M.useOnColumnSortInstances,useProduct:g.useProduct,useProductInventoryConfig:g.useProductInventoryHostsConfig,useProductInventoryQuery:g.useProductInventoryHostsQuery,useSession:h.useSession}},42896:function(e,t,n){n.r(t),n.d(t,{context:function(){return O},default:function(){return O},useGetHostsInventory:function(){return m},useGetInstancesInventory:function(){return h},useOnColumnSortHosts:function(){return E},useOnColumnSortInstances:function(){return I},useOnPageInstances:function(){return g}});var r=n(4942),o=n(1413),a=n(45987),i=n(17297),u=n(68929),s=n.n(u),c=n(76871),l=n(87284),d=n(51858),p=n(46262),f=n(76006),v=["cancelled","pending","data"],y=["cancelled","pending","data"],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDisabled,n=void 0!==t&&t,r=e.getInventory,u=void 0===r?l.Ak.rhsm.getHostsInventory:r,s=e.useDispatch,c=void 0===s?l.Cr.reactRedux.useDispatch:s,p=e.useProduct,f=void 0===p?d.useProduct:p,y=e.useProductInventoryQuery,m=void 0===y?d.useProductInventoryHostsQuery:y,h=e.useSelectorsResponse,g=void 0===h?l.Cr.reactRedux.useSelectorsResponse:h,E=f(),I=E.productId,O=m(),P=c(),S=g((function(e){var t,n=e.inventory;return null==n||null===(t=n.hostsInventory)||void 0===t?void 0:t[I]})),C=S.cancelled,R=S.pending,b=S.data,_=(0,a.Z)(S,v);return(0,i.Z)((function(){n||u(I,O)(P)}),[P,n,I,O]),(0,o.Z)((0,o.Z)({},_),{},{pending:R||C||!1,data:1===(null==b?void 0:b.length)&&b[0]||b||{}})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDisabled,n=void 0!==t&&t,r=e.getInventory,u=void 0===r?l.Ak.rhsm.getInstancesInventory:r,s=e.useDispatch,c=void 0===s?l.Cr.reactRedux.useDispatch:s,p=e.useProduct,f=void 0===p?d.useProduct:p,v=e.useProductInventoryQuery,m=void 0===v?d.useProductInventoryHostsQuery:v,h=e.useSelectorsResponse,g=void 0===h?l.Cr.reactRedux.useSelectorsResponse:h,E=f(),I=E.productId,O=m(),P=c(),S=g((function(e){var t,n=e.inventory;return null==n||null===(t=n.instancesInventory)||void 0===t?void 0:t[I]})),C=S.cancelled,R=S.pending,b=S.data,_=(0,a.Z)(S,y);return(0,i.Z)((function(){n||u(I,O)(P)}),[P,n,I,O]),(0,o.Z)((0,o.Z)({},_),{},{pending:R||C||!1,data:1===(null==b?void 0:b.length)&&b[0]||b||{}})},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useDispatch,n=void 0===t?l.Cr.reactRedux.useDispatch:t,o=e.useProduct,a=void 0===o?d.useProduct:o,i=a(),u=i.productId,s=n();return function(e){var t=e.offset,n=e.perPage;s([(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[p.O6.OFFSET],viewId:u},p.O6.OFFSET,t),(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[p.O6.LIMIT],viewId:u},p.O6.LIMIT,n)])}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sortColumns,n=void 0===t?p.$k:t,o=e.useDispatch,a=void 0===o?l.Cr.reactRedux.useDispatch:o,i=e.useProduct,u=void 0===i?d.useProduct:i,v=u(),y=v.productId,m=a();return function(e,t){var o,a=t.direction,i=t.id,u=Object.values(n).find((function(e){return e===i||s()(e)===i}));u?(o=a===c.SortByDirection.desc?p.PQ.DESCENDING:p.PQ.ASCENDING,m([(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[p.O6.DIRECTION],viewId:y},p.O6.DIRECTION,o),(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[p.O6.SORT],viewId:y},p.O6.SORT,u)])):(f.BM.DEV_MODE||f.BM.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(i," is allowed."))}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sortColumns,n=void 0===t?p.xB:t,o=e.useDispatch,a=void 0===o?l.Cr.reactRedux.useDispatch:o,i=e.useProduct,u=void 0===i?d.useProduct:i,v=u(),y=v.productId,m=a();return function(e,t){var o,a=t.direction,i=t.id,u=Object.values(n).find((function(e){return e===i||s()(e)===i}));u?(o=a===c.SortByDirection.desc?p.PQ.DESCENDING:p.PQ.ASCENDING,m([(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[p.O6.DIRECTION],viewId:y},p.O6.DIRECTION,o),(0,r.Z)({type:l.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[p.O6.SORT],viewId:y},p.O6.SORT,u)])):(f.BM.DEV_MODE||f.BM.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(i," is allowed."))}},O={useGetHostsInventory:m,useGetInstancesInventory:h,useOnPageInstances:g,useOnColumnSortHosts:E,useOnColumnSortInstances:I}},91339:function(e,t,n){n.r(t),n.d(t,{MinHeight:function(){return d},default:function(){return d}});var r=n(15671),o=n(43144),a=n(97326),i=n(60136),u=n(54062),s=n(92950),c=n.n(s),l=n(76006),d=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(e=t.call.apply(t,[this].concat(i))).containerRef=c().createRef(),e.innerContainerRef=c().createRef(),e.updatedContainerWidth=0,e.resizeObserver=l.BM.noop,e.onResizeContainer=function(){var t,n,r=(0,a.Z)(e).updatedContainerWidth,o=e.props.updateOnResize,i=(null===(t=e.containerRef)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.clientWidth)||0;o&&i!==r&&(e.updatedContainerWidth=i,e.setMinHeight(!0))},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateOnResize;window.setTimeout((function(){e.setMinHeight()})),t&&this.setResizeObserver()}},{key:"componentDidUpdate",value:function(){var e=this;this.props.updateOnContent&&window.setTimeout((function(){e.setMinHeight()}))}},{key:"componentWillUnmount",value:function(){this.resizeObserver()}},{key:"setMinHeight",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.props.minHeight,r=this.containerRef.current,o=void 0===r?{}:r,a=this.innerContainerRef.current,i=void 0===a?{}:a;null!=o&&o.style&&(n>(e=t?(null==i?void 0:i.clientHeight)||0:(null==o?void 0:o.clientHeight)||0)&&(e=n),o.style.minHeight="".concat(e,"px"))}},{key:"setResizeObserver",value:function(){var e=this;window.addEventListener("resize",this.onResizeContainer),this.resizeObserver=function(){return window.removeEventListener("resize",e.onResizeContainer)}}},{key:"render",value:function(){var e=this.props.children;return c().createElement("div",{className:"curiosity-minheight",ref:this.containerRef},c().createElement("div",{ref:this.innerContainerRef},e))}}]),n}(c().Component);d.defaultProps={updateOnContent:!1,updateOnResize:!0,minHeight:0}},68900:function(e,t,n){n.r(t),n.d(t,{Pagination:function(){return s},default:function(){return s}});var r=n(92950),o=n.n(r),a=n(21242),i=n(76006),u=n(65020),s=function e(t){var n=t.dropDirection,r=t.isDisabled,i=t.isCompact,s=t.itemCount,c=t.offset,l=t.onPage,d=t.onPerPage,p=t.perPage,f=t.variant;return o().createElement(a.Pagination,{dropDirection:n,isCompact:i,isDisabled:r||!s,itemCount:s,onSetPage:function(e,t,n){return l({event:e,perPage:n,offset:u.paginationHelpers.calculateOffsetFromPage(t,n)})},onPerPageSelect:function(t,n){return d({event:t,perPage:n,offset:e.defaultProps.offset})},page:u.paginationHelpers.calculatePageFromOffset(c||e.defaultProps.offset,p),perPage:p,variant:f})};s.defaultProps={dropDirection:"down",isCompact:!1,isDisabled:!1,itemCount:0,offset:0,onPage:i.BM.noop,onPerPage:i.BM.noop,perPage:10,variant:null}},65020:function(e,t,n){n.r(t),n.d(t,{calculateOffsetFromPage:function(){return r},calculatePageFromOffset:function(){return o},default:function(){return i},isLastPage:function(){return a},paginationHelpers:function(){return i}});var r=function(e,t){return t*(e-1)||0},o=function(e,t){return e/t+1||1},a=function(e,t,n){return o(e,t)===Math.ceil(n/t)},i={calculateOffsetFromPage:r,calculatePageFromOffset:o,isLastPage:a}},89517:function(e,t,n){n.r(t),n.d(t,{ToolbarFieldDisplayName:function(){return v},default:function(){return v}});var r=n(4942),o=n(92950),a=n.n(o),i=n(21242),u=n(23279),s=n.n(u),c=n(87284),l=n(51858),d=n(18710),p=n(46262),f=n(83109),v=function(e){var t=e.t,n=e.useDispatch,o=e.useProduct,u=e.useProductInventoryHostsQuery,l=o().viewId,f=u()[p.O6.DISPLAY_NAME],v=n(),y=function(e){return v([{type:c.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:l},(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[p.O6.DISPLAY_NAME],viewId:l},p.O6.DISPLAY_NAME,(null==e?void 0:e.trim())||null)])},m=s()(y,700);return a().createElement(i.InputGroup,null,a().createElement(d.TextInput,{"aria-label":t("curiosity-toolbar.placeholder_filter",{context:"displayName"}),className:"curiosity-input__display-name",iconVariant:"search",maxLength:255,onClear:function(){""!==f&&f&&v([{type:c.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:l},(0,r.Z)({type:c.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[p.O6.DISPLAY_NAME],viewId:l},p.O6.DISPLAY_NAME,null)])},onKeyUp:function(e){switch(e.keyCode){case 13:y(e.value);break;case 27:break;default:m(e.value)}},value:f,placeholder:t("curiosity-toolbar.placeholder_filter",{context:"displayName"}),"data-test":"toolbarFieldDisplayName"}))};v.defaultProps={t:f.translate,useDispatch:c.Cr.reactRedux.useDispatch,useProduct:l.useProduct,useProductInventoryHostsQuery:l.useProductInventoryHostsQuery}}}]);
//# sourceMappingURL=../sourcemaps/7276.js.map