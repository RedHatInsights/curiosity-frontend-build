(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[15,29,36,38,39],{581:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"paginationHelpers",(function(){return o})),n.d(t,"calculateOffsetFromPage",(function(){return r})),n.d(t,"calculatePageFromOffset",(function(){return i})),n.d(t,"isLastPage",(function(){return a}));var r=function(e,t){return t*(e-1)||0},i=function(e,t){return e/t+1||1},a=function(e,t,n){return i(e,t)===Math.ceil(n/t)},o={calculateOffsetFromPage:r,calculatePageFromOffset:i,isLastPage:a}},582:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j})),n.d(t,"inventoryListHelpers",(function(){return j})),n.d(t,"applySortFilters",(function(){return g})),n.d(t,"applyWrappableFilters",(function(){return m})),n.d(t,"parseInventoryFilters",(function(){return O})),n.d(t,"parseRowCellsListData",(function(){return y}));var r=n(8),i=n(9),a=n(1),o=n(0),s=n.n(o),c=n(105),l=n(11),u=n.n(l),d=function(){return{className:u.a.modifiers.wrap}},f=n(145),p=n(152),v=n.n(p),b=n(33),h=n(3),g=function(e){var t=e.filter,n=void 0===t?{}:t,r=e.onSort,i=e.query,o=void 0===i?{}:i,s=n.id,l=Object(a.a)({},n),u=l.onSort||r;if(!l.onSort&&r&&(l.onSort=r),u&&"boolean"!==typeof l.sortActive&&(null===o||void 0===o?void 0:o[h.g.SORT])&&v()(null===o||void 0===o?void 0:o[h.g.SORT])===s&&(l.sortActive=!0),u&&!l.sortDirection&&(null===o||void 0===o?void 0:o[h.g.DIRECTION]))switch(null===o||void 0===o?void 0:o[h.g.DIRECTION]){case h.d.DESCENDING:l.sortDirection=c.a.desc;break;default:l.sortDirection=c.a.asc}return!u||l.sortActive||(null===o||void 0===o?void 0:o[h.g.SORT])||!0!==l.isSortDefault||(l.sortActive=!0,l.sortDefaultInitialDirection&&(l.sortDirection=l.sortDefaultInitialDirection)),l},m=function(e){var t=e.filter,n=void 0===t?{}:t,r=Object(a.a)({},n);return Array.isArray(r.transforms)?r.transforms.push(d):r.transforms=[d],r},O=function(e){var t=e.filters,n=void 0===t?[]:t,r=e.onSort,o=e.query,s=void 0===o?{}:o;return Object(i.a)(n).map((function(e){var t=Object(a.a)({},e);return t.isSortable&&Object.assign(t,g({filter:t,onSort:r,query:s})),t.isWrappable&&Object.assign(t,m({filter:t})),t}))},y=function(e){var t=e.filters,n=void 0===t?[]:t,o=e.cellData,c=void 0===o?{}:o,l=e.session,u=void 0===l?{}:l,d=[],p=[],v={};return Object.entries(c).forEach((function(e){var t=Object(r.a)(e,2),n=t[0],i=t[1];v[n]={title:Object(b.translate)("curiosity-inventory.header",{context:n}),value:i},d.push(v[n].title),p.push(i)})),(null===n||void 0===n?void 0:n.length)&&(d.length=0,p.length=0,n.forEach((function(e){var t,n,r,o,c,l,h=e.id,g=e.cell,m=e.cellWidth,O=e.header,y=e.onSort,j=e.sortActive,S=e.sortDirection,I=e.transforms;v[h]?(t=null!==(r=null===(o=v[h])||void 0===o?void 0:o.title)&&void 0!==r?r:h,n=null!==(c=null===(l=v[h])||void 0===l?void 0:l.value)&&void 0!==c?c:""):h&&(t=Object(b.translate)("curiosity-inventory.header",{context:h}),n="");O&&(t="function"===typeof O&&O(Object(a.a)({},v))||O),("string"===typeof t||"number"===typeof t||s.a.isValidElement(t))&&(t={title:t}),t&&(t.transforms=[],Array.isArray(I)&&(t.transforms=t.transforms.concat(Object(i.a)(I))),"number"===typeof m&&t.transforms.push(Object(f.a)(m))),"function"===typeof y&&(t=Object(a.a)(Object(a.a)({},t),{},{onSort:function(e){return y(Object(a.a)({},v),Object(a.a)(Object(a.a)({},e),{},{id:h}))},sortActive:j,sortDirection:S})),g&&(n="function"===typeof g&&g(Object(a.a)({},v),Object(a.a)({},u))||g),("string"===typeof n||"number"===typeof n||s.a.isValidElement(n))&&(n={title:n}),d.push(t),p.push(n)}))),{columnHeaders:d,cells:p,data:Object(a.a)({},v)}},j={applySortFilters:g,applyWrappableFilters:m,parseInventoryFilters:O,parseRowCellsListData:y}},584:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f})),n.d(t,"MinHeight",(function(){return f}));var r=n(15),i=n(16),a=n(242),o=n(18),s=n(17),c=n(0),l=n.n(c),u=n(13),d=n(4),f=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).containerRef=l.a.createRef(),e.innerContainerRef=l.a.createRef(),e.updatedContainerWidth=0,e.resizeObserver=u.b.noop,e.onResizeContainer=function(){var t,n,r=Object(a.a)(e).updatedContainerWidth,i=e.props.updateOnResize,o=(null===(t=e.containerRef)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.clientWidth)||0;i&&o!==r&&(e.updatedContainerWidth=o,e.setMinHeight(!0))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateOnResize;window.setTimeout((function(){e.setMinHeight()})),t&&this.setResizeObserver()}},{key:"componentDidUpdate",value:function(){var e=this;this.props.updateOnContent&&window.setTimeout((function(){e.setMinHeight()}))}},{key:"componentWillUnmount",value:function(){this.resizeObserver()}},{key:"setMinHeight",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.props.minHeight,r=this.containerRef.current,i=void 0===r?{}:r,a=this.innerContainerRef.current,o=void 0===a?{}:a;(null===i||void 0===i?void 0:i.style)&&(n>(e=t?(null===o||void 0===o?void 0:o.clientHeight)||0:(null===i||void 0===i?void 0:i.clientHeight)||0)&&(e=n),i.style.minHeight="".concat(e,"px"))}},{key:"setResizeObserver",value:function(){var e=this;window.addEventListener("resize",this.onResizeContainer),this.resizeObserver=function(){return window.removeEventListener("resize",e.onResizeContainer)}}},{key:"render",value:function(){var e=this.props.children;return Object(d.jsx)("div",{className:"curiosity-minheight",ref:this.containerRef,children:Object(d.jsx)("div",{ref:this.innerContainerRef,children:e})})}}]),n}(l.a.Component);f.defaultProps={updateOnContent:!1,updateOnResize:!0,minHeight:0}},586:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"Pagination",(function(){return s}));n(0);var r=n(180),i=n(13),a=n(581),o=n(4),s=function e(t){var n=t.dropDirection,i=t.isDisabled,s=t.isCompact,c=t.itemCount,l=t.offset,u=t.onPage,d=t.onPerPage,f=t.perPage,p=t.variant;return Object(o.jsx)(r.a,{dropDirection:n,isCompact:s,isDisabled:i||!c,itemCount:c,onSetPage:function(e,t,n){return u({event:e,perPage:n,offset:a.paginationHelpers.calculateOffsetFromPage(t,n)})},onPerPageSelect:function(t,n){return d({event:t,perPage:n,offset:e.defaultProps.offset})},page:a.paginationHelpers.calculatePageFromOffset(l||e.defaultProps.offset,f),perPage:f,variant:p})};s.defaultProps={dropDirection:"down",isCompact:!1,isDisabled:!1,itemCount:0,offset:0,onPage:i.b.noop,onPerPage:i.b.noop,perPage:10,variant:null}},599:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M})),n.d(t,"ConnectedInventorySubscriptions",(function(){return M})),n.d(t,"InventorySubscriptions",(function(){return w}));var r=n(6),i=n(15),a=n(16),o=n(18),s=n(17),c=n(0),l=n.n(c),u=n(54),d=n.n(u),f=n(105),p=n(175),v=n(243),b=n(314),h=n(683),g=n(658),m=n(666),O=n(659),y=n(685),j=n(152),S=n.n(j),I=n(13),N=n(56),P=n(190),D=n(188),E=n(584),C=n(582),R=n(586),_=n(581),T=n(3),H=n(33),x=n(4),w=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onColumnSort=function(t,n){var i,a=n.direction,o=n.id,s=e.props.productId,c=Object.values(T.f).find((function(e){return S()(e)===o}));if(c){switch(a){case f.a.desc:i=T.d.DESCENDING;break;default:i=T.d.ASCENDING}N.g.dispatch([Object(r.a)({type:N.f.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[T.g.DIRECTION],viewId:s},T.g.DIRECTION,i),Object(r.a)({type:N.f.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[T.g.SORT],viewId:s},T.g.SORT,c)])}else(I.b.DEV_MODE||I.b.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(o," is allowed."))},e.onPage=function(t){var n=t.offset,i=t.perPage,a=e.props.productId;N.g.dispatch([Object(r.a)({type:N.f.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[T.g.OFFSET],viewId:a},T.g.OFFSET,n),Object(r.a)({type:N.f.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[T.g.LIMIT],viewId:a},T.g.LIMIT,i)])},e.onUpdateInventoryData=function(){var t=e.props,n=t.getSubscriptionsInventory,r=t.isDisabled,i=t.productId,a=t.query;!r&&i&&n(i,a)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.onUpdateInventoryData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.productId,r=t.query;n===e.productId&&d()(r,e.query)||this.onUpdateInventoryData()}},{key:"renderTable",value:function(){var e=this,t=this.props,n=t.filterInventoryData,r=t.listData,i=t.query,a=t.session,o=[],s=r.map((function(t){var r=Object.assign({},t),s=C.inventoryListHelpers.parseRowCellsListData({filters:C.inventoryListHelpers.parseInventoryFilters({filters:n,onSort:e.onColumnSort,query:i}),cellData:r,session:a}),c=s.columnHeaders,l=s.cells;return o=c,{cells:l}}));return Object(x.jsx)(P.default,{borders:!0,variant:p.b.compact,className:"curiosity-inventory-list",columnHeaders:o,rows:s})}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.filterInventoryData,r=e.fulfilled,i=e.isDisabled,a=e.itemCount,o=e.listData,s=e.pending,c=e.perPageDefault,l=e.query,u=e.t;if(i)return Object(x.jsx)(v.a,{className:"curiosity-inventory-card__disabled",children:Object(x.jsx)(b.a,{children:Object(x.jsx)(h.a,{children:u("curiosity-inventory.tab",{context:"disabled"})})})});var d=l[T.g.LIMIT]||c,f=l[T.g.OFFSET],j=_.paginationHelpers.isLastPage(f,d,a),S=!0===r&&a<d&&"bodyMinHeight-".concat(d,"-resize")||!0===r&&j&&"bodyMinHeight-".concat(d,"-resize")||!0===t&&"bodyMinHeight-".concat(d,"-resize")||"bodyMinHeight-".concat(d);return Object(x.jsxs)(v.a,{className:"curiosity-inventory-card",children:[Object(x.jsx)(E.MinHeight,{updateOnContent:!0,children:Object(x.jsx)(g.a,{className:t?"hidden":"","aria-hidden":t||!1,children:Object(x.jsx)(m.a,{className:a?"":"transparent","aria-hidden":!a||!1,children:Object(x.jsx)(R.default,{isCompact:!0,isDisabled:s||t,itemCount:a,offset:f,onPage:this.onPage,onPerPage:this.onPage,perPage:d})})})},"headerMinHeight"),Object(x.jsx)(E.MinHeight,{updateOnContent:!0,children:Object(x.jsx)(b.a,{children:Object(x.jsxs)("div",{className:(t?"blur":s&&"fadein")||"",children:[s&&Object(x.jsx)(D.Loader,{variant:"table",tableProps:{className:"curiosity-inventory-list",colCount:(null===n||void 0===n?void 0:n.length)||(null===o||void 0===o?void 0:o[0])&&Object.keys(o[0]).length||1,colWidth:(null===n||void 0===n?void 0:n.length)&&n.map((function(e){return e.cellWidth}))||[],rowCount:(null===o||void 0===o?void 0:o.length)||d,variant:p.b.compact}}),!s&&this.renderTable()]})})},S),Object(x.jsx)(E.MinHeight,{updateOnContent:!0,children:Object(x.jsx)(O.a,{className:(t?"hidden":!a&&"transparent")||"","aria-hidden":t||!a||!1,children:Object(x.jsx)(y.a,{isFooter:!0,children:Object(x.jsx)(R.default,{dropDirection:"up",isDisabled:s||t,itemCount:a,offset:f,onPage:this.onPage,onPerPage:this.onPage,perPage:d})})})},"footerMinHeight")]})}}]),n}(l.a.Component);w.defaultProps={error:!1,fulfilled:!1,filterInventoryData:[],getSubscriptionsInventory:I.b.noop,isDisabled:I.b.UI_DISABLED_TABLE_SUBSCRIPTIONS,itemCount:0,listData:[],pending:!1,perPageDefault:10,session:{},t:H.translate};var F=N.e.subscriptionsList.makeSubscriptionsList(),M=Object(N.b)(F,(function(e){return{getSubscriptionsInventory:function(t,n){return e(N.d.rhsm.getSubscriptionsInventory(t,n))}}}))(w)},641:function(e,t,n){"use strict";t.__esModule=!0,n(642),t.default={bullseye:"pf-l-bullseye"}},642:function(e,t,n){},643:function(e,t,n){},658:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(5),i=n(0),a=n(2),o=n(47),s=n.n(o),c=n(243),l=n(40),u=n(241),d=function(e){var t=e.children,n=void 0===t?null:t,o=e.className,d=void 0===o?"":o,f=e.id,p=e.onExpand,v=e.toggleButtonProps,b=e.isToggleRightAligned,h=Object(r.__rest)(e,["children","className","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return i.createElement(c.b.Consumer,null,(function(e){var t=e.cardId,r=i.createElement("div",{className:Object(a.css)(s.a.cardHeaderToggle)},i.createElement(l.a,Object.assign({variant:"plain",type:"button",onClick:function(e){p(e,t)}},v),i.createElement("span",{className:Object(a.css)(s.a.cardHeaderToggleIcon)},i.createElement(u.a,{"aria-hidden":"true"}))));return i.createElement("div",Object.assign({className:Object(a.css)(s.a.cardHeader,b&&s.a.modifiers.toggleRight,d),id:f},h),p&&!b&&r,n,p&&b&&r)}))};d.displayName="CardHeader"},659:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),i=n(0),a=n(47),o=n.n(a),s=n(2),c=function(e){var t=e.children,n=void 0===t?null:t,a=e.className,c=void 0===a?"":a,l=e.component,u=void 0===l?"div":l,d=Object(r.__rest)(e,["children","className","component"]),f=u;return i.createElement(f,Object.assign({className:Object(s.css)(o.a.cardFooter,c)},d),n)};c.displayName="CardFooter"},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),i=n(0),a=n(2),o=n(47),s=n.n(o),c=function(e){var t=e.children,n=void 0===t?null:t,o=e.className,c=void 0===o?"":o,l=Object(r.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:Object(a.css)(s.a.cardActions,c)},l),n)};c.displayName="CardActions"},683:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),i=n(0),a=n(2),o=n(641),s=n.n(o),c=function(e){var t=e.children,n=void 0===t?null:t,o=e.className,c=void 0===o?"":o,l=e.component,u=void 0===l?"div":l,d=Object(r.__rest)(e,["children","className","component"]),f=u;return i.createElement(f,Object.assign({className:Object(a.css)(s.a.bullseye,c)},d),n)};c.displayName="Bullseye"},685:function(e,t,n){"use strict";var r=n(41),i=n.n(r),a=n(29),o=n.n(a),s=n(34),c=n.n(s),l=n(0),u=n.n(l),d=n(10),f=n.n(d),p=n(669),v=n(48),b=n.n(v);n(643);var h=function(e){var t=e.isFooter,n=e.results,r=e.className,a=e.selected,s=e.children,d=c()(e,["isFooter","results","className","selected","children"]),f=b()("ins-c-table__toolbar",o()({},"ins-m-footer",t),r);return u.a.createElement(l.Fragment,null,u.a.createElement(p.a,i()({className:f},d)," ",s),(n>=0||a>=0)&&u.a.createElement("div",{className:"ins-c-table__toolbar-results"},n>=0&&u.a.createElement("span",{className:"ins-c-table__toolbar-results-count"}," ",function(e){return"".concat(e,e>1||e<1?" Results":" Result")}(n)," "),a>=0&&u.a.createElement("span",{className:"ins-c-table__toolbar-results-selected"}," ",a," Selected ")))};t.a=h,h.propTypes={isFooter:f.a.bool,results:f.a.number,children:f.a.any,className:f.a.string,selected:f.a.number},h.defaultProps={isFooter:!1}},698:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(15),i=n(16),a=n(18),o=n(17),s=n(0),c=0,l=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).id="".concat(e.props.prefix).concat(c++),e}return Object(i.a)(n,[{key:"render",value:function(){return this.props.children(this.id)}}]),n}(s.Component);l.displayName="GenerateId",l.defaultProps={prefix:"pf-random-id-"}}}]);
//# sourceMappingURL=15.7aaa1265.chunk.js.map