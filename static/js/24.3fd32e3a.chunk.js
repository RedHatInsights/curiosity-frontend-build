(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[24,33],{590:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R})),n.d(t,"Select",(function(){return R})),n.d(t,"SelectDirection",(function(){return x})),n.d(t,"SelectPosition",(function(){return I}));var i=n(8),a=n(1),o=n(15),l=n(16),r=n(19),c=n(18),s=n(0),u=n.n(s),d=n(21),p=n(703),f=n(924),v=n(803),b=n(642),g=n.n(b),O=n(54),h=n.n(O),S=n(654),j=n.n(S),y=n(126),T=n.n(y),E=n(23),m=n(4),x=d.c,I=d.d,R=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isExpanded:!1,options:null,selected:null},e.selectField=u.a.createRef(),e.onSelect=function(t,n){var i=e.state.options,o=e.props,l=o.id,r=o.name,c=o.onSelect,s=o.variant,u=i,d=u.findIndex((function(e){return e.title===n}));u[d].selected=s===p.e.single||!u[d].selected,s===p.e.single&&u.forEach((function(e,t){d!==t&&(u[t].selected=!1)}));var f=s===p.e.single?n:u.filter((function(e){return!0===e.selected})).map((function(e){return e.title}));e.setState({options:u,selected:f},(function(){var t=g()(u),n={id:l,name:r||l,value:t[d].value,selected:s===p.e.single&&t[d]||g()(f),selectedIndex:d,type:"select-".concat(s===p.e.single?"one":"multiple"),options:t};s===p.e.checkbox&&(n.checked=t[d].selected);var i=Object(a.a)(Object(a.a)({},n),{},{target:Object(a.a)({},n),currentTarget:Object(a.a)({},n),persist:E.b.noop});c(Object(a.a)({},i),d,t),s===p.e.single&&e.setState({isExpanded:!1})}))},e.onToggle=function(t){e.setState({isExpanded:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){null===this.state.options&&this.formatOptions()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.options,i=t.selectedOptions;h()(e.options,n)&&h()(e.selectedOptions,i)||this.formatOptions()}},{key:"formatOptions",value:function(){var e,t,n=this.selectField.current,o=void 0===n?{}:n,l=this.props,r=l.options,c=l.selectedOptions,s=l.variant,u=Object.entries(this.props).filter((function(e){var t=Object(i.a)(e,1)[0];return/^data-/i.test(t)})),d=T()(r)?Object.entries(r).map((function(e){var t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.a)(Object(a.a)({},o),{},{title:n,value:o})})):g()(r),f=c&&"string"===typeof c||"number"===typeof c?[c]:c;d.forEach((function(e,t){var n=e;if("string"===typeof n&&(n={title:e,value:e},d[t]=n),n.text=n.text||n.title,n.textContent=n.textContent||n.title,n.label=n.label||n.title,f){var i;if(T()(n.value)){if(!(i=j()(f,n.value)>-1))i=!!f.find((function(e){return Object.values(n.value).includes(e)}))}else i=f.includes(n.value);i||(i=f.includes(n.title)),d[t].selected=i}})),t=s===p.e.single?(d.find((function(e){return!0===e.selected}))||{}).title:d.filter((function(e){return!0===e.selected})).map((function(e){return e.title})),(null===o||void 0===o||null===(e=o.parentRef)||void 0===e?void 0:e.current)&&u.forEach((function(e){var t,n=Object(i.a)(e,2),a=n[0],l=n[1];return null===o||void 0===o||null===(t=o.parentRef)||void 0===t?void 0:t.current.setAttribute(a,l)})),this.setState({options:d,selected:t})}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.selected,i=e.isExpanded,o=this.props,l=o.ariaLabel,r=o.className,c=o.direction,s=o.isDisabled,u=o.isToggleText,p=o.maxHeight,b=o.placeholder,g=o.position,O=o.toggleIcon,h=o.variant,S={direction:c,maxHeight:p};return t&&t.length&&!s||(S.isDisabled=!0),Object(m.jsx)(f.a,Object(a.a)(Object(a.a)({className:"curiosity-select".concat(u?"":"__no-toggle-text"," ").concat(g===d.d.right?"curiosity-select__position-right":""," ").concat(r),variant:h,"aria-label":l,onToggle:this.onToggle,onSelect:this.onSelect,selections:n,isOpen:i,toggleIcon:O,placeholderText:b,ref:this.selectField},S),{},{children:t&&t.map((function(e){return Object(m.jsx)(v.a,{id:window.btoa("".concat(e.title,"-").concat(e.value)),value:e.title,"data-value":T()(e.value)&&JSON.stringify([e.value])||e.value,"data-title":e.title},window.btoa("".concat(e.title,"-").concat(e.value)))}))||[]}))}}]),n}(u.a.Component);R.defaultProps={ariaLabel:"Select option",className:"",direction:x.down,id:E.b.generateId(),isDisabled:!1,isToggleText:!0,maxHeight:null,name:null,onSelect:E.b.noop,options:[],placeholder:"Select option",position:I.left,selectedOptions:null,toggleIcon:null,variant:p.e.single}},608:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p})),n.d(t,"ToolbarFieldGranularity",(function(){return p})),n.d(t,"toolbarFieldOptions",(function(){return d}));var i=n(6),a=n(1),o=(n(0),n(56)),l=n(590),r=n(3),c=n(13),s=n(32),u=n(4),d=Object.values(r.b).map((function(e){return{title:Object(s.translate)("curiosity-toolbar.granularity",{context:e}),value:e,selected:!1}})),p=function e(t){var n=t.options,s=t.t,d=t.value,p=t.viewId,f=Object(o.i)((function(e){var t,n;return null===(t=e.view.graphTallyQuery)||void 0===t||null===(n=t[p])||void 0===n?void 0:n[r.g.GRANULARITY]}),d),v=n.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{selected:e.value===f})}));return Object(u.jsx)(l.Select,{"aria-label":s("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=c.a.getRangedDateTime(e.value),n=t.startDate,a=t.endDate;o.g.dispatch([{type:o.f.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:p},Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[r.g.GRANULARITY],viewId:p},r.g.GRANULARITY,e.value),Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[r.g.START_DATE],viewId:p},r.g.START_DATE,n.toISOString()),Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[r.g.END_DATE],viewId:p},r.g.END_DATE,a.toISOString())])},options:v,selectedOptions:f,placeholder:s("curiosity-toolbar.placeholder",{context:"granularity"}),"data-test":e.defaultProps.viewId})};p.defaultProps={options:d,t:s.translate,value:r.b.DAILY,viewId:"toolbarFieldGranularity"}}}]);
//# sourceMappingURL=24.3fd32e3a.chunk.js.map