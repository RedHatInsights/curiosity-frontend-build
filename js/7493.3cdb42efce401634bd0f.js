"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[7493],{47493:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O,ConnectedInventorySubscriptions:()=>O,InventorySubscriptions:()=>_});var r=n(15274),a=n(90237),i=n(65337),o=n(39576),s=n(80239),l=n(92950),c=n.n(l),d=n(18446),u=n.n(d),p=n(78247),y=n(68269),f=n(32875),I=n(68929),v=n.n(I),E=n(76006),S=n(25097),h=n(78697),m=n(1797),g=n(91339),b=n(44822),N=n(68900),D=n(65020),C=n(30446),T=n(83109),_=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onColumnSort=function(t,n){var a,i=n.direction,o=n.id,s=e.props.productId,l=Object.values(C.Fs).find((function(e){return v()(e)===o}));if(l){switch(i){case p.SortByDirection.desc:a=C.hb.DESCENDING;break;default:a=C.hb.ASCENDING}S.h.dispatch([(0,r.Z)({type:S.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[C.VN.DIRECTION],viewId:s},C.VN.DIRECTION,a),(0,r.Z)({type:S.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[C.VN.SORT],viewId:s},C.VN.SORT,l)])}else(E.BM.DEV_MODE||E.BM.REVIEW_MODE)&&console.warn("Sorting can only be performed on select fields, confirm field ".concat(o," is allowed."))},e.onPage=function(t){var n=t.offset,a=t.perPage,i=e.props.productId;S.h.dispatch([(0,r.Z)({type:S.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[C.VN.OFFSET],viewId:i},C.VN.OFFSET,n),(0,r.Z)({type:S.JD.query.SET_QUERY_RHSM_SUBSCRIPTIONS_INVENTORY_TYPES[C.VN.LIMIT],viewId:i},C.VN.LIMIT,a)])},e.onUpdateInventoryData=function(){var t=e.props,n=t.getSubscriptionsInventory,r=t.isDisabled,a=t.productId,i=t.query;!r&&a&&n(a,i)},e}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this.onUpdateInventoryData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.productId,r=t.query;n===e.productId&&u()(r,e.query)||this.onUpdateInventoryData()}},{key:"renderTable",value:function(){var e=this,t=this.props,n=t.filterInventoryData,r=t.listData,a=t.query,i=t.session,o=[],s=r.map((function(t){var r=Object.assign({},t),s=b.inventoryListHelpers.parseRowCellsListData({filters:b.inventoryListHelpers.parseInventoryFilters({filters:n,onSort:e.onColumnSort,query:a}),cellData:r,session:i}),l=s.columnHeaders,c=s.cells;return o=l,{cells:c}}));return c().createElement(h.default,{borders:!0,variant:p.TableVariant.compact,className:"curiosity-inventory-list",columnHeaders:o,rows:s})}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.filterInventoryData,r=e.fulfilled,a=e.isDisabled,i=e.itemCount,o=e.listData,s=e.pending,l=e.perPageDefault,d=e.query,u=e.t;if(a)return c().createElement(y.Card,{className:"curiosity-inventory-card__disabled"},c().createElement(y.CardBody,null,c().createElement(y.Bullseye,null,u("curiosity-inventory.tab",{context:"disabled"}))));var I=d[C.VN.LIMIT]||l,v=d[C.VN.OFFSET],E=D.paginationHelpers.isLastPage(v,I,i),S=!0===r&&i<I&&"bodyMinHeight-".concat(I,"-resize")||!0===r&&E&&"bodyMinHeight-".concat(I,"-resize")||!0===t&&"bodyMinHeight-".concat(I,"-resize")||"bodyMinHeight-".concat(I);return c().createElement(y.Card,{className:"curiosity-inventory-card"},c().createElement(g.MinHeight,{key:"headerMinHeight",updateOnContent:!0},c().createElement(y.CardHeader,{className:t?"hidden":"","aria-hidden":t||!1},c().createElement(y.CardActions,{className:i?"":"transparent","aria-hidden":!i||!1},c().createElement(N.default,{isCompact:!0,isDisabled:s||t,itemCount:i,offset:v,onPage:this.onPage,onPerPage:this.onPage,perPage:I})))),c().createElement(g.MinHeight,{key:S,updateOnContent:!0},c().createElement(y.CardBody,null,c().createElement("div",{className:(t?"blur":s&&"fadein")||""},s&&c().createElement(m.Loader,{variant:"table",tableProps:{className:"curiosity-inventory-list",colCount:(null==n?void 0:n.length)||(null==o?void 0:o[0])&&Object.keys(o[0]).length||1,colWidth:(null==n?void 0:n.length)&&n.map((function(e){return e.cellWidth}))||[],rowCount:(null==o?void 0:o.length)||I,variant:p.TableVariant.compact}}),!s&&this.renderTable()))),c().createElement(g.MinHeight,{key:"footerMinHeight",updateOnContent:!0},c().createElement(y.CardFooter,{className:(t?"hidden":!i&&"transparent")||"","aria-hidden":t||!i||!1},c().createElement(f.Z,{isFooter:!0},c().createElement(N.default,{dropDirection:"up",isDisabled:s||t,itemCount:i,offset:v,onPage:this.onPage,onPerPage:this.onPage,perPage:I})))))}}]),n}(c().Component);_.defaultProps={error:!1,fulfilled:!1,filterInventoryData:[],getSubscriptionsInventory:E.BM.noop,isDisabled:E.BM.UI_DISABLED_TABLE_SUBSCRIPTIONS,itemCount:0,listData:[],pending:!1,perPageDefault:10,session:{},t:T.translate};var P=S.R1.subscriptionsList.makeSubscriptionsList(),O=(0,S.$j)(P,(function(e){return{getSubscriptionsInventory:function(t,n){return e(S.Ak.rhsm.getSubscriptionsInventory(t,n))}}}))(_)}}]);
//# sourceMappingURL=../sourcemaps/7493.6e80f104ed9ee2e1614d.js.map