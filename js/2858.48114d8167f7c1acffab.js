"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[2858],{72858:(e,t,n)=>{n.r(t),n.d(t,{ConnectedOptinView:()=>v,OptinView:()=>f,default:()=>v});var r=n(56949),i=n(90237),a=n(65337),l=n(39576),o=n(80239),c=n(92950),u=n.n(c),s=n(68269),p=n(25097),d=n(83109),m=n(52422),E=n(76006);const y=n.p+"fonts/graph2x.png",h=n.p+"fonts/graph4x.png";var f=function(e){(0,l.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).onSubmitOptIn=function(){(0,e.props.updateAccountOptIn)()},e}return(0,a.Z)(n,[{key:"renderOptinForm",value:function(){var e=this.props,t=e.error,n=e.fulfilled,r=e.pending,i=e.session,a=e.t,l=403!==i.status;return r?u().createElement(s.Form,null,u().createElement(s.ActionGroup,null,u().createElement(s.Button,{variant:"primary",isDisabled:!0},u().createElement(s.Spinner,{size:"sm"})," ",a("curiosity-optin.buttonActivate",{appName:E.BM.UI_DISPLAY_NAME})))):t?u().createElement("p",null,a("curiosity-optin.cardIsErrorDescription",{appName:E.BM.UI_DISPLAY_NAME},[u().createElement(s.Button,{isInline:!0,component:"a",variant:"link",target:"_blank",href:E.BM.UI_LINK_CONTACT_US})])):l||n?u().createElement(s.Form,null,u().createElement(s.ActionGroup,null,u().createElement(s.Button,{variant:"primary",isDisabled:!0},a("curiosity-optin.buttonIsActive",{appName:E.BM.UI_DISPLAY_NAME}))),n&&u().createElement("p",null,a("curiosity-optin.cardIsActiveDescription"))):u().createElement(s.Form,null,u().createElement(s.ActionGroup,null,u().createElement(s.Button,{variant:"primary",onClick:this.onSubmitOptIn},a("curiosity-optin.buttonActivate",{appName:E.BM.UI_DISPLAY_NAME}))))}},{key:"renderTour",value:function(){var e=this.props.t;return u().createElement(s.Card,{className:"curiosity-optin-tour"},u().createElement(s.CardHeader,null,u().createElement(s.CardHeaderMain,null,u().createElement(s.Brand,{srcSet:"".concat(h," 1064w, ").concat(y," 600w"),src:h,alt:e("curiosity-optin.tourTitleImageAlt"),"aria-hidden":!0,className:"curiosity-optin-image"}))),u().createElement(s.CardTitle,null,u().createElement(s.Title,{headingLevel:"h3",size:"2xl"},e("curiosity-optin.tourTitle"))),u().createElement(s.CardBody,null,e("curiosity-optin.tourDescription")),u().createElement(s.CardFooter,null,u().createElement(s.Button,{variant:"secondary",className:"uxui-curiosity__button-tour"},e("curiosity-optin.buttonTour"))))}},{key:"render",value:function(){var e=this.props.t;return u().createElement(m.PageLayout,null,u().createElement(s.Card,null,u().createElement(s.Flex,null,u().createElement(s.Flex,{flex:{default:"flex_2"}},u().createElement(s.FlexItem,null,u().createElement(s.CardTitle,{key:"heading1Title"},u().createElement(s.Title,{headingLevel:"h1",size:"2xl"},e("curiosity-optin.cardTitle",{appName:E.BM.UI_DISPLAY_NAME}))),u().createElement(s.CardBody,{key:"heading1Desc"},e("curiosity-optin.cardDescription",{appName:E.BM.UI_DISPLAY_NAME})),u().createElement(s.CardTitle,{key:"heading2Title"},u().createElement(s.Title,{headingLevel:"h2",size:"xl"},e("curiosity-optin.cardSeeTitle"))),u().createElement(s.CardBody,{key:"heading2Desc"},e("curiosity-optin.cardSeeDescription")),u().createElement(s.CardTitle,{key:"heading3Title"},u().createElement(s.Title,{headingLevel:"h2",size:"xl"},e("curiosity-optin.cardReportTitle"))),u().createElement(s.CardBody,{key:"heading3Desc"},e("curiosity-optin.cardReportDescription")),u().createElement(s.CardTitle,{key:"heading4Title"},u().createElement(s.Title,{headingLevel:"h2",size:"xl"},e("curiosity-optin.cardFilterTitle"))),u().createElement(s.CardBody,{key:"heading4Desc"},e("curiosity-optin.cardFilterDescription")),u().createElement(s.CardFooter,null,this.renderOptinForm()))),u().createElement(s.Flex,{flex:{default:"flex_1"},alignSelf:{default:"alignSelfCenter"}},u().createElement(s.FlexItem,null,u().createElement(s.CardBody,null,this.renderTour()))))))}}]),n}(u().Component);f.defaultProps={error:!1,fulfilled:!1,pending:!1,session:{status:null},t:d.translate,updateAccountOptIn:E.BM.noop};var v=(0,p.$j)((function(e){var t=e.user;return(0,r.Z)((0,r.Z)({},t.optin),{},{session:t.session})}),(function(e){return{updateAccountOptIn:function(t){return e(p.Ak.user.updateAccountOptIn(t))}}}))(f)}}]);
//# sourceMappingURL=../sourcemaps/2858.be70cac8fc6b6d2d789b.js.map