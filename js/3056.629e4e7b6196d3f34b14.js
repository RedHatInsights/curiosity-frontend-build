"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[3056],{63056:(t,e,r)=>{r.r(e),r.d(e,{default:()=>G,ConnectedGuestsList:()=>G,GuestsList:()=>b});var a=r(1252),s=r(15274),n=r(56949),l=r(90237),o=r(65337),i=r(39576),u=r(80239),c=r(92950),d=r.n(c),p=r(78247),v=r(76006),f=r(25097),h=r(1797),g=r(44822),m=r(30446),y=r(78697),b=function(t){(0,i.Z)(r,t);var e=(0,u.Z)(r);function r(){var t;(0,l.Z)(this,r);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(t=e.call.apply(e,[this].concat(i))).state={currentPage:0,limit:100,previousData:[]},t.onUpdateGuestsData=function(){var e=t.state,r=e.currentPage,a=e.limit,l=t.props,o=l.getHostsInventoryGuests,i=l.query,u=l.id;if(u){var c,d=(0,n.Z)((0,n.Z)({},i),{},(c={},(0,s.Z)(c,m.VN.LIMIT,a),(0,s.Z)(c,m.VN.OFFSET,r*a||0),c));o(u,f.IT.parseRhsmQuery(d).inventoryGuestsQuery)}},t.onScroll=function(e){var r=e.target,s=t.state,n=s.currentPage,l=s.limit,o=s.previousData,i=t.props,u=i.numberOfGuests,c=i.pending,d=i.listData,p=r.scrollHeight-r.scrollTop===r.clientHeight;if(u>(n+1)*l&&p&&!c){var v=n+1,f=[].concat((0,a.Z)(o),(0,a.Z)(d||[]));t.setState({previousData:f,currentPage:v})}},t}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.onUpdateGuestsData()}},{key:"componentDidUpdate",value:function(t,e){this.state.currentPage!==e.currentPage&&this.onUpdateGuestsData()}},{key:"renderLoader",value:function(){var t=this.state.currentPage,e=this.props,r=e.filterGuestsData,a=e.listData,s=e.pending;if(t>0&&s){var n=d().createElement(h.Loader,{variant:"table",tableProps:{borders:!1,colCount:(null==r?void 0:r.length)||(null==a?void 0:a[0])&&Object.keys(a[0]).length||1,colWidth:(null==r?void 0:r.length)&&r.map((function(t){return t.cellWidth}))||[],rowCount:0,variant:p.TableVariant.compact}});return d().createElement("div",{className:"curiosity-table-scroll-loader__custom"},n)}return null}},{key:"renderTable",value:function(){var t=this.state.previousData,e=this.props,r=e.filterGuestsData,s=e.listData,n=e.numberOfGuests,l=e.session,o=[],i=[].concat((0,a.Z)(t),(0,a.Z)(s||[])).map((function(t){var e=Object.assign({},t),a=g.inventoryListHelpers.parseRowCellsListData({filters:r,cellData:e,session:l}),s=a.columnHeaders,n=a.cells;return o=s,{cells:n}})),u=42*(n+1);return u=u<275&&u||275,d().createElement("div",{className:"curiosity-table-scroll",style:{height:"".concat(u,"px")}},d().createElement("div",{className:"curiosity-table-scroll-list".concat(u<275?"__no-scroll":""),onScroll:this.onScroll},this.renderLoader(),i.length&&d().createElement(y.Table,{borders:!1,variant:p.TableVariant.compact,className:"curiosity-guests-list",columnHeaders:o,rows:i})||null))}},{key:"render",value:function(){var t=this.state.currentPage,e=this.props,r=e.error,a=e.filterGuestsData,s=e.listData,n=e.numberOfGuests,l=e.pending,o=e.perPageDefault;return d().createElement("div",{className:"fadein ".concat(r?"blur":"")},l&&0===t&&d().createElement(h.Loader,{variant:"table",tableProps:{borders:!1,className:"curiosity-guests-list",colCount:(null==a?void 0:a.length)||(null==s?void 0:s[0])&&Object.keys(s[0]).length||1,colWidth:(null==a?void 0:a.length)&&a.map((function(t){return t.cellWidth}))||[],rowCount:n<o?n:o,variant:p.TableVariant.compact}}),(!l&&0===t||t>0)&&this.renderTable())}}]),r}(d().Component);b.defaultProps={error:!1,filterGuestsData:[],getHostsInventoryGuests:v.BM.noop,listData:[],pending:!1,perPageDefault:5,query:{},session:{}};var D=f.R1.guestsList.makeGuestsList(),G=(0,f.$j)(D,(function(t){return{getHostsInventoryGuests:function(e,r){return t(f.Ak.rhsm.getHostsInventoryGuests(e,r))}}}))(b)}}]);
//# sourceMappingURL=../sourcemaps/3056.180401531f08365cf944.js.map