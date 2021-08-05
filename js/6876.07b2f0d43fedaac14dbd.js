"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[6876],{86876:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R,ConnectedInventoryList:()=>R,InventoryList:()=>M});var r=n(56949),a=n(15274),i=n(90237),o=n(65337),s=n(39576),l=n(80239),d=n(92950),u=n.n(d),c=n(18446),p=n.n(c),y=n(94550),v=n(58788),f=n(32875),m=n(68929),E=n.n(m),h=n(76006),I=n(25097),g=n(78697),D=n(1797),S=n(91339),b=n(63056),N=n(44822),T=n(68900),C=n(89517),H=n(65020),_=n(30446),O=n(83109),M=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onColumnSort=function(t,n){var r,i=n.direction,o=n.id,s=e.props.productId,l=Object.values(_.Nf).find((function(e){return E()(e)===o}));if(l){switch(i){case y.SortByDirection.desc:r=_.hb.DESCENDING;break;default:r=_.hb.ASCENDING}I.h.dispatch([(0,a.Z)({type:I.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[_.VN.DIRECTION],viewId:s},_.VN.DIRECTION,r),(0,a.Z)({type:I.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[_.VN.SORT],viewId:s},_.VN.SORT,l)])}else(h.BM.DEV_MODE||h.BM.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(o," is allowed."))},e.onPage=function(t){var n=t.offset,r=t.perPage,i=e.props.productId;I.h.dispatch([(0,a.Z)({type:I.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[_.VN.OFFSET],viewId:i},_.VN.OFFSET,n),(0,a.Z)({type:I.JD.query.SET_QUERY_RHSM_HOSTS_INVENTORY_TYPES[_.VN.LIMIT],viewId:i},_.VN.LIMIT,r)])},e.onUpdateInventoryData=function(){var t=e.props,n=t.getHostsInventory,r=t.isDisabled,a=t.productId,i=t.query;!r&&a&&n(a,i)},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.onUpdateInventoryData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.productId,r=t.query;n===e.productId&&p()(r,e.query)||this.onUpdateInventoryData()}},{key:"renderTable",value:function(){var e=this,t=this.props,n=t.filterGuestsData,a=t.filterInventoryData,i=t.listData,o=t.query,s=t.session,l=t.settings,d=[],c=i.map((function(t){var i=Object.assign({},t),c=N.inventoryListHelpers.parseRowCellsListData({filters:N.inventoryListHelpers.parseInventoryFilters({filters:a,onSort:e.onColumnSort,query:o}),cellData:i,session:s}),p=c.columnHeaders,y=c.cells;d=p;var v=null==i?void 0:i.subscriptionManagerId,f=(null==i?void 0:i.numberOfGuests)>0&&v;return"function"==typeof(null==l?void 0:l.hasGuests)&&(f=l.hasGuests((0,r.Z)({},i),(0,r.Z)({},s))),{cells:y,expandedContent:f&&u().createElement(b.default,{key:v,filterGuestsData:n,numberOfGuests:null==i?void 0:i.numberOfGuests,id:v,query:o})||void 0}}));return u().createElement(g.default,{borders:!0,variant:y.TableVariant.compact,className:"curiosity-inventory-list",columnHeaders:d,rows:c})}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.filterInventoryData,r=e.fulfilled,a=e.isDisabled,i=e.itemCount,o=e.listData,s=e.pending,l=e.perPageDefault,d=e.query,c=e.t,p=e.viewId;if(a)return u().createElement(v.Card,{className:"curiosity-inventory-card__disabled"},u().createElement(v.CardBody,null,u().createElement(v.Bullseye,null,c("curiosity-inventory.tab",{context:"disabled"}))));var m=d[_.VN.LIMIT]||l,E=d[_.VN.OFFSET],h=H.paginationHelpers.isLastPage(E,m,i),I=!0===r&&i<m&&"bodyMinHeight-".concat(m,"-resize")||!0===r&&h&&"bodyMinHeight-".concat(m,"-resize")||!0===t&&"bodyMinHeight-".concat(m,"-resize")||"bodyMinHeight-".concat(m);return u().createElement(v.Card,{className:"curiosity-inventory-card"},u().createElement(S.MinHeight,{key:"headerMinHeight",updateOnContent:!0},u().createElement(v.CardHeader,{className:t?"hidden":"","aria-hidden":t||!1},u().createElement(v.CardHeaderMain,null,u().createElement(C.ToolbarFieldDisplayName,{viewId:p})),u().createElement(v.CardActions,{className:i?"":"transparent","aria-hidden":!i||!1},u().createElement(T.default,{isCompact:!0,isDisabled:s||t,itemCount:i,offset:E,onPage:this.onPage,onPerPage:this.onPage,perPage:m})))),u().createElement(S.MinHeight,{key:I,updateOnContent:!0},u().createElement(v.CardBody,null,u().createElement("div",{className:(t?"blur":s&&"fadein")||""},s&&u().createElement(D.Loader,{variant:"table",tableProps:{className:"curiosity-inventory-list",colCount:(null==n?void 0:n.length)||(null==o?void 0:o[0])&&Object.keys(o[0]).length||1,colWidth:(null==n?void 0:n.length)&&n.map((function(e){return e.cellWidth}))||[],rowCount:(null==o?void 0:o.length)||m,variant:y.TableVariant.compact}}),!s&&this.renderTable()))),u().createElement(S.MinHeight,{key:"footerMinHeight",updateOnContent:!0},u().createElement(v.CardFooter,{className:(t?"hidden":!i&&"transparent")||"","aria-hidden":t||!i||!1},u().createElement(f.Z,{isFooter:!0},u().createElement(T.default,{dropDirection:"up",isDisabled:s||t,itemCount:i,offset:E,onPage:this.onPage,onPerPage:this.onPage,perPage:m})))))}}]),n}(u().Component);M.defaultProps={error:!1,fulfilled:!1,filterGuestsData:[],filterInventoryData:[],getHostsInventory:h.BM.noop,isDisabled:h.BM.UI_DISABLED_TABLE_HOSTS,itemCount:0,listData:[],pending:!1,perPageDefault:10,session:{},settings:{},t:O.translate,viewId:"inventoryList"};var P=I.R1.inventoryList.makeInventoryList(),R=(0,I.$j)(P,(function(e){return{getHostsInventory:function(t,n){return e(I.Ak.rhsm.getHostsInventory(t,n))}}}))(M)}}]);
//# sourceMappingURL=../sourcemaps/6876.08f40093ca46c68b1ddb.js.map