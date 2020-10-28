(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[2],{2954:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g})),t.d(a,"ConnectedRhelView",(function(){return g})),t.d(a,"RhelView",(function(){return w}));var r,l=t(10),i=t(12),n=t(13),o=t(14),u=t(15),c=t(0),v=t.n(c),d=t(2939),s=t(2940),p={name:"--pf-chart-color-cyan-100",value:"#a2d9d9",var:"var(--pf-chart-color-cyan-100)"},y={name:"--pf-chart-color-cyan-300",value:"#009596",var:"var(--pf-chart-color-cyan-300)"},m={name:"--pf-chart-color-purple-100",value:"#b2b0ea",var:"var(--pf-chart-color-purple-100)"},b={name:"--pf-chart-color-purple-300",value:"#5752d1",var:"var(--pf-chart-color-purple-300)"},f=t(807),h=t(2941),E=t(1597),I=t(105),O=t(3),k=t(62),S=t(1599),P=t(1600),D=t(1602),F=t(1601),T=t(17),j=t(45),w=function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,a=this.props,t=a.initialGraphFilters,r=a.initialGuestsFilters,l=a.initialInventoryFilters,i=a.initialToolbarFilters,n=a.location,o=a.productLabel,u=a.query,c=a.routeDetail,d=a.t,s=a.viewId,p=""===(null===n||void 0===n||null===(e=n.parsedSearch)||void 0===e?void 0:e.c3),y=k.a.parseRhsmQuery(u),m=y.graphQuery,b=y.inventoryQuery,f=y.toolbarQuery;return v.a.createElement(I.b,null,v.a.createElement(I.a,{productLabel:o},d("curiosity-view.title",{appName:T.b.UI_DISPLAY_NAME,context:o})),v.a.createElement(I.d,null,v.a.createElement(D.a,{filterOptions:i,productId:c.pathParameter,query:f,viewId:s})),v.a.createElement(I.c,null,p&&v.a.createElement(P.a,{key:c.pathParameter,filterGraphData:t,query:m,productId:c.pathParameter,viewId:s,cardTitle:d("curiosity-graph.socketsHeading"),productShortLabel:o})||v.a.createElement(S.a,{key:c.pathParameter,filterGraphData:t,query:m,productId:c.pathParameter,viewId:s,cardTitle:d("curiosity-graph.socketsHeading"),productLabel:o})),v.a.createElement(I.c,null,v.a.createElement(F.a,{key:c.pathParameter,filterGuestsData:r,filterInventoryData:l,query:b,productId:c.pathParameter,viewId:s,cardTitle:d("curiosity-inventory.cardHeading")})))}}]),t}(v.a.Component);w.defaultProps={query:(r={},Object(l.a)(r,O.f.DIRECTION,O.d.DESCENDING),Object(l.a)(r,O.f.GRANULARITY,O.b.DAILY),Object(l.a)(r,O.f.LIMIT,10),Object(l.a)(r,O.f.OFFSET,0),Object(l.a)(r,O.f.SORT,O.e.DATE),r),initialGraphFilters:[{id:"physicalSockets",fill:d.a.value,stroke:s.a.value,color:s.a.value},{id:"hypervisorSockets",fill:p.value,stroke:y.value,color:y.value},{id:"cloudSockets",fill:m.value,stroke:b.value,color:b.value},{id:"thresholdSockets"}],initialGuestsFilters:[{id:"displayName",header:Object(j.b)("curiosity-inventory.header",{context:"guestsDisplayName"}),cell:function(e,a){var t=e.displayName,r=e.inventoryId,l=((null===a||void 0===a?void 0:a.authorized)||{}).inventory;return(null===r||void 0===r?void 0:r.value)?l?v.a.createElement(f.a,{isInline:!0,component:"a",variant:"link",target:"_blank",href:"".concat(T.b.UI_DEPLOY_PATH_PREFIX,"/insights/inventory/").concat(r.value,"/")},t.value||r.value):(null===t||void 0===t?void 0:t.value)||(null===r||void 0===r?void 0:r.value):null===t||void 0===t?void 0:t.value}},{id:"inventoryId"},{id:"lastSeen",cell:function(e){var a,t;return(null===e||void 0===e||null===(a=e.lastSeen)||void 0===a?void 0:a.value)&&v.a.createElement(E.DateFormat,{date:null===e||void 0===e||null===(t=e.lastSeen)||void 0===t?void 0:t.value})||""}}],initialInventoryFilters:[{id:"displayName",cell:function(e,a){var t=e.displayName,r=void 0===t?{}:t,l=e.inventoryId,i=void 0===l?{}:l,n=e.numberOfGuests,o=void 0===n?{}:n,u=((null===a||void 0===a?void 0:a.authorized)||{}).inventory;return i.value?u?v.a.createElement(f.a,{isInline:!0,component:"a",variant:"link",target:"_blank",href:"".concat(T.b.UI_DEPLOY_PATH_PREFIX,"/insights/inventory/").concat(i.value,"/")},r.value||i.value," ",o.value&&Object(j.b)("curiosity-inventory.label",{context:"numberOfGuests",count:o.value},[v.a.createElement(h.a,{color:"blue"})])||""):v.a.createElement(v.a.Fragment,null,r.value||i.value," ",o.value&&Object(j.b)("curiosity-inventory.label",{context:"numberOfGuests",count:o.value},[v.a.createElement(h.a,{color:"blue"})])||""):r.value},isSortable:!0},{id:"measurementType",cell:function(e){var a=e.cloudProvider,t=void 0===a?{}:a,r=e.measurementType,l=void 0===r?{}:r;return v.a.createElement(v.a.Fragment,null,Object(j.b)("curiosity-inventory.measurementType",{context:l.value})," ",t.value&&v.a.createElement(h.a,{color:"purple"},Object(j.b)("curiosity-inventory.cloudProvider",{context:t.value}))||"")},isSortable:!1},{id:"sockets",isSortable:!0},{id:"lastSeen",cell:function(e){var a,t;return(null===e||void 0===e||null===(a=e.lastSeen)||void 0===a?void 0:a.value)&&v.a.createElement(E.DateFormat,{date:null===e||void 0===e||null===(t=e.lastSeen)||void 0===t?void 0:t.value})||""},isSortable:!0}],initialToolbarFilters:[{id:O.f.SLA},{id:O.f.USAGE,selected:!0}],productLabel:"RHEL",t:j.b,viewId:"viewRHEL"};var L=k.e.view.makeView(w.defaultProps),g=Object(k.b)(L)(w)}}]);
//# sourceMappingURL=2.7536a58f.chunk.js.map