(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[21,32],{594:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return l})),n.d(a,"formHelpers",(function(){return l})),n.d(a,"createMockEvent",(function(){return i})),n.d(a,"doesNotHaveMinimumCharacters",(function(){return r}));var t=n(1),c=n(23),i=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(t.a)({},e),i=n.checked,r=n.currentTarget,l=void 0===r?{}:r,d=n.keyCode,s=n.persist,o=void 0===s?c.b.noop:s,u=n.target,h=void 0===u?{}:u;return a&&o(),{checked:i,currentTarget:l,keyCode:d,id:l.id||l.name,name:l.name,persist:o,value:l.value,target:h}},r=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"string"===typeof e&&e.length<a||"string"!==typeof e},l={createMockEvent:i,doesNotHaveMinimumCharacters:r}},616:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return h})),n.d(a,"Checkbox",(function(){return h}));var t=n(1),c=n(8),i=n(24),r=n(0),l=n.n(r),d=n(882),s=n(594),o=n(13),u=n(4),h=function(e){var a,n=e.ariaLabel,r=e.children,h=e.id,b=e.isChecked,f=e.isDisabled,k=e.isReadOnly,v=e.label,m=e.name,p=e.onChange,C=e.value,g=Object(i.a)(e,["ariaLabel","children","id","isChecked","isDisabled","isReadOnly","label","name","onChange","value"]),y=l.a.useState(),O=Object(c.a)(y,2),j=O[0],_=O[1],N=null!==(a=null!==j&&void 0!==j?j:b)&&void 0!==a&&a,x=m||o.b.generateId(),D=h||x;return Object(u.jsx)(d.Checkbox,Object(t.a)({"aria-label":n||r||v,checked:N,id:D,isChecked:N,isDisabled:f||!1,label:r||v,name:x,onChange:function(e,a){var n=Object(t.a)(Object(t.a)({},Object(s.createMockEvent)(a)),{},{id:D,name:x,value:C,checked:e});_(e),p(n)},value:C,readOnly:k||!1},g))};h.defaultProps={ariaLabel:null,children:null,id:null,isChecked:!1,isDisabled:!1,isReadOnly:!1,label:"",name:null,onChange:o.b.noop,value:void 0}},882:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),n(5).__exportStar(n(883),a)},883:function(e,a,n){"use strict";var t=n(256),c=n(257),i=n(369),r=n(370);Object.defineProperty(a,"__esModule",{value:!0}),a.Checkbox=void 0;var l=n(5),d=l.__importStar(n(0)),s=l.__importDefault(n(80)),o=n(2),u=function(){},h=function(e){i(n,e);var a=r(n);function n(e){var c;return t(this,n),(c=a.call(this,e)).handleChange=function(e){c.props.onChange(e.currentTarget.checked,e)},c}return c(n,[{key:"render",value:function(){var e=this.props,a=e["aria-label"],n=e.className,t=e.onChange,c=e.isValid,i=e.isDisabled,r=e.isChecked,h=e.label,b=e.checked,f=e.defaultChecked,k=e.description,v=e.body,m=l.__rest(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description","body"]);m.id||console.error("Checkbox:","id is required to make input accessible");var p={};return([!0,!1].includes(b)||!0===r)&&(p.checked=b||r),t!==u&&(p.checked=r),[!1,!0].includes(f)&&(p.defaultChecked=f),p.checked=null!==p.checked&&p.checked,d.createElement("div",{className:o.css(s.default.check,!h&&s.default.modifiers.standalone,n)},d.createElement("input",Object.assign({},m,{className:o.css(s.default.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!c,"aria-label":a,disabled:i,ref:function(e){return e&&(e.indeterminate=null===r)}},p)),h&&d.createElement("label",{className:o.css(s.default.checkLabel,i&&s.default.modifiers.disabled),htmlFor:m.id},h),k&&d.createElement("span",{className:o.css(s.default.checkDescription)},k),v&&d.createElement("span",{className:o.css(s.default.checkBody)},v))}}]),n}(d.Component);a.Checkbox=h,h.displayName="Checkbox",h.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:u}}}]);
//# sourceMappingURL=21.f21b5ce3.chunk.js.map