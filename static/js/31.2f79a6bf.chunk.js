(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[31,40],{586:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _})),n.d(t,"Select",(function(){return _})),n.d(t,"SelectDirection",(function(){return x})),n.d(t,"SelectPosition",(function(){return R}));var i=n(8),a=n(1),o=n(15),l=n(16),c=n(19),r=n(18),s=n(0),u=n.n(s),d=n(21),p=n(735),f=n(921),v=n(810),g=n(642),b=n.n(g),O=n(54),h=n.n(O),S=n(665),j=n.n(S),T=n(125),y=n.n(T),m=n(23),E=n(4),x=d.c,R=d.d,_=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={isExpanded:!1,options:null,selected:null},e.selectField=u.a.createRef(),e.onSelect=function(t,n){var i=e.state.options,o=e.props,l=o.id,c=o.name,r=o.onSelect,s=o.variant,u=i,d=u.findIndex((function(e){return e.title===n}));u[d].selected=s===p.e.single||!u[d].selected,s===p.e.single&&u.forEach((function(e,t){d!==t&&(u[t].selected=!1)}));var f=s===p.e.single?n:u.filter((function(e){return!0===e.selected})).map((function(e){return e.title}));e.setState({options:u,selected:f},(function(){var t=b()(u),n={id:l,name:c||l,value:t[d].value,selected:s===p.e.single&&t[d]||b()(f),selectedIndex:d,type:"select-".concat(s===p.e.single?"one":"multiple"),options:t};s===p.e.checkbox&&(n.checked=t[d].selected);var i=Object(a.a)(Object(a.a)({},n),{},{target:Object(a.a)({},n),currentTarget:Object(a.a)({},n),persist:m.b.noop});r(Object(a.a)({},i),d,t),s===p.e.single&&e.setState({isExpanded:!1})}))},e.onToggle=function(t){e.setState({isExpanded:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){null===this.state.options&&this.formatOptions()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.options,i=t.selectedOptions;h()(e.options,n)&&h()(e.selectedOptions,i)||this.formatOptions()}},{key:"formatOptions",value:function(){var e,t,n=this.selectField.current,o=void 0===n?{}:n,l=this.props,c=l.options,r=l.selectedOptions,s=l.variant,u=Object.entries(this.props).filter((function(e){var t=Object(i.a)(e,1)[0];return/^data-/i.test(t)})),d=y()(c)?Object.entries(c).map((function(e){var t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.a)(Object(a.a)({},o),{},{title:n,value:o})})):b()(c),f=r&&"string"===typeof r||"number"===typeof r?[r]:r;d.forEach((function(e,t){var n=e;if("string"===typeof n&&(n={title:e,value:e},d[t]=n),n.text=n.text||n.title,n.textContent=n.textContent||n.title,n.label=n.label||n.title,f){var i;if(y()(n.value)){if(!(i=j()(f,n.value)>-1))i=!!f.find((function(e){return Object.values(n.value).includes(e)}))}else i=f.includes(n.value);i||(i=f.includes(n.title)),d[t].selected=i}})),t=s===p.e.single?(d.find((function(e){return!0===e.selected}))||{}).title:d.filter((function(e){return!0===e.selected})).map((function(e){return e.title})),(null===o||void 0===o||null===(e=o.parentRef)||void 0===e?void 0:e.current)&&u.forEach((function(e){var t,n=Object(i.a)(e,2),a=n[0],l=n[1];return null===o||void 0===o||null===(t=o.parentRef)||void 0===t?void 0:t.current.setAttribute(a,l)})),this.setState({options:d,selected:t})}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.selected,i=e.isExpanded,o=this.props,l=o.ariaLabel,c=o.className,r=o.direction,s=o.isDisabled,u=o.isToggleText,p=o.maxHeight,g=o.placeholder,b=o.position,O=o.toggleIcon,h=o.variant,S={direction:r,maxHeight:p};return t&&t.length&&!s||(S.isDisabled=!0),Object(E.jsx)("div",{className:"curiosity-select",children:Object(E.jsx)(f.a,Object(a.a)(Object(a.a)({menuAppendTo:"parent",className:"curiosity-select-pf".concat(u?"":"__no-toggle-text"," ").concat(b===d.d.right?"curiosity-select-pf__position-right":""," ").concat(c),variant:h,"aria-label":l,onToggle:this.onToggle,onSelect:this.onSelect,selections:n,isOpen:i,toggleIcon:O,placeholderText:g,ref:this.selectField},S),{},{children:t&&t.map((function(e){return Object(E.jsx)(v.a,{id:window.btoa("".concat(e.title,"-").concat(e.value)),value:e.title,"data-value":y()(e.value)&&JSON.stringify([e.value])||e.value,"data-title":e.title},window.btoa("".concat(e.title,"-").concat(e.value)))}))||[]}))})}}]),n}(u.a.Component);_.defaultProps={ariaLabel:"Select option",className:"",direction:x.down,id:m.b.generateId(),isDisabled:!1,isToggleText:!0,maxHeight:null,name:null,onSelect:m.b.noop,options:[],placeholder:"Select option",position:R.left,selectedOptions:null,toggleIcon:null,variant:p.e.single}},613:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p})),n.d(t,"ToolbarFieldRangedMonthly",(function(){return p})),n.d(t,"toolbarFieldOptions",(function(){return d}));var i=n(6),a=n(1),o=(n(0),n(56)),l=n(586),c=n(3),r=n(13),s=n(34),u=n(4),d=r.a.getRangedMonthDateTime().listDateTimeRanges.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{selected:!1})})),p=function e(t){var n=t.options,r=t.t,s=t.value,d=t.viewId,p=Object(o.i)((function(e){var t,n;return null===(t=e.view.query)||void 0===t||null===(n=t[d])||void 0===n?void 0:n[c.g.START_DATE]}),s),f=n.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{selected:e.title===p||e.value.startDate.toISOString()===p})}));return Object(u.jsx)(l.Select,{"aria-label":r("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=e.value,n=t.startDate,a=t.endDate;o.g.dispatch([{type:o.f.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:d},Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[c.g.GRANULARITY],viewId:d},c.g.GRANULARITY,c.b.DAILY),Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[c.g.START_DATE],viewId:d},c.g.START_DATE,n.toISOString()),Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[c.g.END_DATE],viewId:d},c.g.END_DATE,a.toISOString())])},options:f,placeholder:r("curiosity-toolbar.placeholder",{context:"granularity"}),position:l.SelectPosition.right,maxHeight:250,"data-test":e.defaultProps.viewId})};p.defaultProps={options:d,t:s.translate,value:Object(s.translate)("curiosity-toolbar.granularityRange",{context:"current"}),viewId:"toolbarFieldRangeGranularity"}}}]);
//# sourceMappingURL=31.2f79a6bf.chunk.js.map