"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[2738],{2738:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T,ToolbarFieldGranularity:()=>T,toolbarFieldOptions:()=>v});var r=a(15274),l=a(56949),i=a(92950),o=a.n(i),n=a(25097),u=a(49844),d=a(30446),c=a(76006),s=a(83109),v=Object.values(d.U9).map((function(e){return{title:(0,s.translate)("curiosity-toolbar.granularity",{context:e}),value:e,selected:!1}})),T=function e(t){var a=t.options,i=t.t,s=t.value,v=t.viewId,T=(0,n.v9)((function(e){var t,a;return null===(t=e.view.graphTallyQuery)||void 0===t||null===(a=t[v])||void 0===a?void 0:a[d.VN.GRANULARITY]}),s),p=a.map((function(e){return(0,l.Z)((0,l.Z)({},e),{},{selected:e.value===T})}));return o().createElement(u.Select,{"aria-label":i("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=c.i3.getRangedDateTime(e.value),a=t.startDate,l=t.endDate;n.h.dispatch([{type:n.JD.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:v},(0,r.Z)({type:n.JD.query.SET_QUERY_RHSM_TYPES[d.VN.GRANULARITY],viewId:v},d.VN.GRANULARITY,e.value),(0,r.Z)({type:n.JD.query.SET_QUERY_RHSM_TYPES[d.VN.START_DATE],viewId:v},d.VN.START_DATE,a.toISOString()),(0,r.Z)({type:n.JD.query.SET_QUERY_RHSM_TYPES[d.VN.END_DATE],viewId:v},d.VN.END_DATE,l.toISOString())])},options:p,selectedOptions:T,placeholder:i("curiosity-toolbar.placeholder",{context:"granularity"}),"data-test":e.defaultProps.viewId})};T.defaultProps={options:v,t:s.translate,value:d.U9.DAILY,viewId:"toolbarFieldGranularity"}}}]);
//# sourceMappingURL=../sourcemaps/2738.7aadc4fc808b63894474.js.map