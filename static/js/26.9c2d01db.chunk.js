(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[26,33],{590:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I})),n.d(t,"Select",(function(){return I})),n.d(t,"SelectDirection",(function(){return T})),n.d(t,"SelectPosition",(function(){return w}));var i=n(8),o=n(1),l=n(15),a=n(16),c=n(19),r=n(18),s=n(0),u=n.n(s),d=n(21),p=n(703),f=n(924),v=n(803),b=n(642),O=n.n(b),g=n(54),h=n.n(g),j=n(654),m=n.n(j),x=n(126),S=n.n(x),y=n(23),E=n(4),T=d.c,w=d.d,I=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isExpanded:!1,options:null,selected:null},e.selectField=u.a.createRef(),e.onSelect=function(t,n){var i=e.state.options,l=e.props,a=l.id,c=l.name,r=l.onSelect,s=l.variant,u=i,d=u.findIndex((function(e){return e.title===n}));u[d].selected=s===p.e.single||!u[d].selected,s===p.e.single&&u.forEach((function(e,t){d!==t&&(u[t].selected=!1)}));var f=s===p.e.single?n:u.filter((function(e){return!0===e.selected})).map((function(e){return e.title}));e.setState({options:u,selected:f},(function(){var t=O()(u),n={id:a,name:c||a,value:t[d].value,selected:s===p.e.single&&t[d]||O()(f),selectedIndex:d,type:"select-".concat(s===p.e.single?"one":"multiple"),options:t};s===p.e.checkbox&&(n.checked=t[d].selected);var i=Object(o.a)(Object(o.a)({},n),{},{target:Object(o.a)({},n),currentTarget:Object(o.a)({},n),persist:y.b.noop});r(Object(o.a)({},i),d,t),s===p.e.single&&e.setState({isExpanded:!1})}))},e.onToggle=function(t){e.setState({isExpanded:t})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){null===this.state.options&&this.formatOptions()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.options,i=t.selectedOptions;h()(e.options,n)&&h()(e.selectedOptions,i)||this.formatOptions()}},{key:"formatOptions",value:function(){var e,t,n=this.selectField.current,l=void 0===n?{}:n,a=this.props,c=a.options,r=a.selectedOptions,s=a.variant,u=Object.entries(this.props).filter((function(e){var t=Object(i.a)(e,1)[0];return/^data-/i.test(t)})),d=S()(c)?Object.entries(c).map((function(e){var t=Object(i.a)(e,2),n=t[0],l=t[1];return Object(o.a)(Object(o.a)({},l),{},{title:n,value:l})})):O()(c),f=r&&"string"===typeof r||"number"===typeof r?[r]:r;d.forEach((function(e,t){var n=e;if("string"===typeof n&&(n={title:e,value:e},d[t]=n),n.text=n.text||n.title,n.textContent=n.textContent||n.title,n.label=n.label||n.title,f){var i;if(S()(n.value)){if(!(i=m()(f,n.value)>-1))i=!!f.find((function(e){return Object.values(n.value).includes(e)}))}else i=f.includes(n.value);i||(i=f.includes(n.title)),d[t].selected=i}})),t=s===p.e.single?(d.find((function(e){return!0===e.selected}))||{}).title:d.filter((function(e){return!0===e.selected})).map((function(e){return e.title})),(null===l||void 0===l||null===(e=l.parentRef)||void 0===e?void 0:e.current)&&u.forEach((function(e){var t,n=Object(i.a)(e,2),o=n[0],a=n[1];return null===l||void 0===l||null===(t=l.parentRef)||void 0===t?void 0:t.current.setAttribute(o,a)})),this.setState({options:d,selected:t})}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.selected,i=e.isExpanded,l=this.props,a=l.ariaLabel,c=l.className,r=l.direction,s=l.isDisabled,u=l.isToggleText,p=l.maxHeight,b=l.placeholder,O=l.position,g=l.toggleIcon,h=l.variant,j={direction:r,maxHeight:p};return t&&t.length&&!s||(j.isDisabled=!0),Object(E.jsx)(f.a,Object(o.a)(Object(o.a)({className:"curiosity-select".concat(u?"":"__no-toggle-text"," ").concat(O===d.d.right?"curiosity-select__position-right":""," ").concat(c),variant:h,"aria-label":a,onToggle:this.onToggle,onSelect:this.onSelect,selections:n,isOpen:i,toggleIcon:g,placeholderText:b,ref:this.selectField},j),{},{children:t&&t.map((function(e){return Object(E.jsx)(v.a,{id:window.btoa("".concat(e.title,"-").concat(e.value)),value:e.title,"data-value":S()(e.value)&&JSON.stringify([e.value])||e.value,"data-title":e.title},window.btoa("".concat(e.title,"-").concat(e.value)))}))||[]}))}}]),n}(u.a.Component);I.defaultProps={ariaLabel:"Select option",className:"",direction:T.down,id:y.b.generateId(),isDisabled:!1,isToggleText:!0,maxHeight:null,name:null,onSelect:y.b.noop,options:[],placeholder:"Select option",position:w.left,selectedOptions:null,toggleIcon:null,variant:p.e.single}},613:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d})),n.d(t,"ToolbarFieldUom",(function(){return d})),n.d(t,"toolbarFieldOptions",(function(){return u}));var i=n(6),o=n(1),l=(n(0),n(56)),a=n(590),c=n(3),r=n(32),s=n(4),u=Object.values(c.h).map((function(e){return{title:Object(r.translate)("curiosity-toolbar.uom",{context:e}),value:e,selected:!1}})),d=function e(t){var n=t.options,r=t.t,u=t.value,d=t.viewId,p=Object(l.i)((function(e){var t,n;return null===(t=e.view.query)||void 0===t||null===(n=t[d])||void 0===n?void 0:n[c.g.UOM]}),u),f=n.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:e.value===p})}));return Object(s.jsx)(a.Select,{"aria-label":r("curiosity-toolbar.placeholder",{context:"uom"}),onSelect:function(e){return l.g.dispatch([{type:l.f.query.SET_QUERY_RESET_INVENTORY_LIST,viewId:d},Object(i.a)({type:l.f.query.SET_QUERY_RHSM_TYPES[c.g.UOM],viewId:d},c.g.UOM,e.value)])},options:f,selectedOptions:p,placeholder:r("curiosity-toolbar.placeholder",{context:"uom"}),"data-test":e.defaultProps.viewId})};d.defaultProps={options:u,t:r.translate,value:c.h.CORES,viewId:"toolbarFieldUom"}}}]);
//# sourceMappingURL=26.9c2d01db.chunk.js.map