"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[7585],{87585:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E,ConnectedBannerMessages:()=>E,BannerMessages:()=>y});var a=n(48418),r=n(15274),s=n(56949),i=n(90237),o=n(65337),u=n(39576),c=n(80239),l=n(92950),p=n.n(l),d=n(68269),g=n(14708),f=n(18446),h=n.n(f),m=n(25097),A=n(83109),M=n(76006),v=n(30446),y=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(e=t.call.apply(t,[this].concat(o))).state={},e.onUpdateData=function(){var t=e.props,n=t.getMessageReports,a=t.productId,i=t.query,o=m.IT.parseRhsmQuery(i).graphTallyQuery;if(a){var u,c=M.i3.getRangedDateTime("CURRENT"),l=c.startDate,p=c.endDate;n(a,(0,s.Z)((0,s.Z)({},o),{},(u={},(0,r.Z)(u,v.VN.GRANULARITY,v.U9.DAILY),(0,r.Z)(u,v.VN.START_DATE,l.toISOString()),(0,r.Z)(u,v.VN.END_DATE,p.toISOString()),u)))}},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.onUpdateData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.query;t.productId===e.productId&&h()(n,e.query)||this.onUpdateData()}},{key:"renderAlerts",value:function(){var e=this,t=this.state,n=this.props,i=n.appMessages,o=n.messages,u=[];return o.length&&Object.entries(i).forEach((function(e){var n=(0,a.Z)(e,2),r=n[0],i=n[1];if(!0!==t[r]&&!0===i){var c=o.find((function(e){return e.id===r}));c&&u.push((0,s.Z)({key:r},c))}})),u.map((function(t){var n=t.key,a=t.message,s=t.title,i=t.variant,o=void 0===i?d.AlertVariant.info:i,u=p().createElement(d.AlertActionCloseButton,{onClose:function(){return e.setState((0,r.Z)({},n,!0))}});return p().createElement(d.Alert,{actionClose:u,key:n,title:s,variant:o},a)}))}},{key:"render",value:function(){var e=this.renderAlerts();return e.length?p().createElement("div",{className:"curiosity-banner-messages"},e):null}}]),n}(p().Component);y.defaultProps={getMessageReports:M.BM.noop,query:{},messages:[{id:"cloudigradeMismatch",title:(0,A.translate)("curiosity-banner.dataMismatchTitle"),message:(0,A.translate)("curiosity-banner.dataMismatchMessage",{context:""!==M.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS&&"cloudigradeMismatch",appName:M.BM.UI_DISPLAY_NAME},[p().createElement(d.Button,{isInline:!0,component:"a",variant:"link",icon:p().createElement(g.ExternalLinkAltIcon,null),iconPosition:"right",target:"_blank",href:M.BM.UI_LINK_REPORT_ACCURACY_RECOMMENDATIONS})])}]};var R=m.R1.appMessages.makeAppMessages(),E=(0,m.$j)(R,(function(e){return{getMessageReports:function(t,n){return e(m.Ak.rhsm.getMessageReports(t,n))}}}))(y)}}]);
//# sourceMappingURL=../sourcemaps/7585.748c0a5f23430cba70ef.js.map