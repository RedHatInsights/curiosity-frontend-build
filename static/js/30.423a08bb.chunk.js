(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[30,40],{586:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R})),n.d(t,"Select",(function(){return R})),n.d(t,"SelectDirection",(function(){return x})),n.d(t,"SelectPosition",(function(){return I}));var i=n(8),a=n(1),o=n(15),l=n(16),c=n(19),r=n(18),s=n(0),u=n.n(s),d=n(21),p=n(735),f=n(921),v=n(810),b=n(642),g=n.n(b),O=n(54),h=n.n(O),j=n(665),y=n.n(j),S=n(125),T=n.n(S),m=n(23),E=n(4),x=d.c,I=d.d,R=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={isExpanded:!1,options:null,selected:null},e.selectField=u.a.createRef(),e.onSelect=function(t,n){var i=e.state.options,o=e.props,l=o.id,c=o.name,r=o.onSelect,s=o.variant,u=i,d=u.findIndex((function(e){return e.title===n}));u[d].selected=s===p.e.single||!u[d].selected,s===p.e.single&&u.forEach((function(e,t){d!==t&&(u[t].selected=!1)}));var f=s===p.e.single?n:u.filter((function(e){return!0===e.selected})).map((function(e){return e.title}));e.setState({options:u,selected:f},(function(){var t=g()(u),n={id:l,name:c||l,value:t[d].value,selected:s===p.e.single&&t[d]||g()(f),selectedIndex:d,type:"select-".concat(s===p.e.single?"one":"multiple"),options:t};s===p.e.checkbox&&(n.checked=t[d].selected);var i=Object(a.a)(Object(a.a)({},n),{},{target:Object(a.a)({},n),currentTarget:Object(a.a)({},n),persist:m.b.noop});r(Object(a.a)({},i),d,t),s===p.e.single&&e.setState({isExpanded:!1})}))},e.onToggle=function(t){e.setState({isExpanded:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){null===this.state.options&&this.formatOptions()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.options,i=t.selectedOptions;h()(e.options,n)&&h()(e.selectedOptions,i)||this.formatOptions()}},{key:"formatOptions",value:function(){var e,t,n=this.selectField.current,o=void 0===n?{}:n,l=this.props,c=l.options,r=l.selectedOptions,s=l.variant,u=Object.entries(this.props).filter((function(e){var t=Object(i.a)(e,1)[0];return/^data-/i.test(t)})),d=T()(c)?Object.entries(c).map((function(e){var t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.a)(Object(a.a)({},o),{},{title:n,value:o})})):g()(c),f=r&&"string"===typeof r||"number"===typeof r?[r]:r;d.forEach((function(e,t){var n=e;if("string"===typeof n&&(n={title:e,value:e},d[t]=n),n.text=n.text||n.title,n.textContent=n.textContent||n.title,n.label=n.label||n.title,f){var i;if(T()(n.value)){if(!(i=y()(f,n.value)>-1))i=!!f.find((function(e){return Object.values(n.value).includes(e)}))}else i=f.includes(n.value);i||(i=f.includes(n.title)),d[t].selected=i}})),t=s===p.e.single?(d.find((function(e){return!0===e.selected}))||{}).title:d.filter((function(e){return!0===e.selected})).map((function(e){return e.title})),(null===o||void 0===o||null===(e=o.parentRef)||void 0===e?void 0:e.current)&&u.forEach((function(e){var t,n=Object(i.a)(e,2),a=n[0],l=n[1];return null===o||void 0===o||null===(t=o.parentRef)||void 0===t?void 0:t.current.setAttribute(a,l)})),this.setState({options:d,selected:t})}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.selected,i=e.isExpanded,o=this.props,l=o.ariaLabel,c=o.className,r=o.direction,s=o.isDisabled,u=o.isToggleText,p=o.maxHeight,b=o.placeholder,g=o.position,O=o.toggleIcon,h=o.variant,j={direction:r,maxHeight:p};return t&&t.length&&!s||(j.isDisabled=!0),Object(E.jsx)("div",{className:"curiosity-select",children:Object(E.jsx)(f.a,Object(a.a)(Object(a.a)({menuAppendTo:"parent",className:"curiosity-select-pf".concat(u?"":"__no-toggle-text"," ").concat(g===d.d.right?"curiosity-select-pf__position-right":""," ").concat(c),variant:h,"aria-label":l,onToggle:this.onToggle,onSelect:this.onSelect,selections:n,isOpen:i,toggleIcon:O,placeholderText:b,ref:this.selectField},j),{},{children:t&&t.map((function(e){return Object(E.jsx)(v.a,{id:window.btoa("".concat(e.title,"-").concat(e.value)),value:e.title,"data-value":T()(e.value)&&JSON.stringify([e.value])||e.value,"data-title":e.title},window.btoa("".concat(e.title,"-").concat(e.value)))}))||[]}))})}}]),n}(u.a.Component);R.defaultProps={ariaLabel:"Select option",className:"",direction:x.down,id:m.b.generateId(),isDisabled:!1,isToggleText:!0,maxHeight:null,name:null,onSelect:m.b.noop,options:[],placeholder:"Select option",position:I.left,selectedOptions:null,toggleIcon:null,variant:p.e.single}},609:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p})),n.d(t,"ToolbarFieldGranularity",(function(){return p})),n.d(t,"toolbarFieldOptions",(function(){return d}));var i=n(6),a=n(1),o=(n(0),n(56)),l=n(586),c=n(3),r=n(13),s=n(34),u=n(4),d=Object.values(c.b).map((function(e){return{title:Object(s.translate)("curiosity-toolbar.granularity",{context:e}),value:e,selected:!1}})),p=function e(t){var n=t.options,s=t.t,d=t.value,p=t.viewId,f=Object(o.i)((function(e){var t,n;return null===(t=e.view.graphTallyQuery)||void 0===t||null===(n=t[p])||void 0===n?void 0:n[c.g.GRANULARITY]}),d),v=n.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{selected:e.value===f})}));return Object(u.jsx)(l.Select,{"aria-label":s("curiosity-toolbar.placeholder",{context:"granularity"}),onSelect:function(e){var t=r.a.getRangedDateTime(e.value),n=t.startDate,a=t.endDate;o.g.dispatch([{type:o.f.query.SET_QUERY_CLEAR_INVENTORY_LIST,viewId:p},Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[c.g.GRANULARITY],viewId:p},c.g.GRANULARITY,e.value),Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[c.g.START_DATE],viewId:p},c.g.START_DATE,n.toISOString()),Object(i.a)({type:o.f.query.SET_QUERY_RHSM_TYPES[c.g.END_DATE],viewId:p},c.g.END_DATE,a.toISOString())])},options:v,selectedOptions:f,placeholder:s("curiosity-toolbar.placeholder",{context:"granularity"}),"data-test":e.defaultProps.viewId})};p.defaultProps={options:d,t:s.translate,value:c.b.DAILY,viewId:"toolbarFieldGranularity"}}}]);
//# sourceMappingURL=30.423a08bb.chunk.js.map