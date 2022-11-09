(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[9110,2252,5451],{92227:function(e,r,t){"use strict";t.r(r),t.d(r,{Toolbar:function(){return d},default:function(){return d}});var o=t(92950),n=t.n(o),l=t(21242),u=t(43551),i=t(83280),a=t(70136),s=t(76006),c=t(83109),d=function(e){var r=e.hardFilterReset,t=e.isDisabled,o=e.t,i=e.useSelectCategoryOptions,s=e.useToolbarFieldClear,c=e.useToolbarFieldClearAll,d=e.useToolbarFieldQueries,f=e.useToolbarSecondaryFields,b=i(),v=b.currentCategory,O=b.options,g=d(),T=s(),p=c(),S=f();return!t&&(null!=O&&O.length||null!=S&&S.length)?n().createElement(l.Toolbar,{id:"curiosity-toolbar",className:"curiosity-toolbar pf-m-toggle-group-container ins-c-primary-toolbar",collapseListedFiltersBreakpoint:"sm",clearAllFilters:function(){return p(r)},clearFiltersButtonText:o("curiosity-toolbar.clearFilters")},n().createElement(l.ToolbarContent,null,n().createElement(l.ToolbarToggleGroup,{toggleIcon:n().createElement(u.FilterIcon,null),breakpoint:"md"},n().createElement(l.ToolbarGroup,{variant:"filter-group"},O.length>1&&n().createElement(l.ToolbarItem,null,n().createElement(a.ToolbarFieldSelectCategory,null)),O.map((function(e){var r=e.title,t=e.value,o=e.component,u=e.isClearable,i=e.options,a={categoryName:r};return!1!==u&&(a.chips=function(e){var r=e.value,t=e.options.find((function(e){return e.value===(null==g?void 0:g[r])}));return(null==t?void 0:t.title)&&[null==t?void 0:t.title]||[]}({options:i,value:t}),a.deleteChip=function(){return e={options:i,value:t},T(e.value);var e}),n().createElement(l.ToolbarFilter,Object.assign({key:t,showToolbarItem:v===t||1===O.length},a),n().createElement(o,{isFilter:!0}))})))),n().createElement(l.ToolbarItem,{alignment:{default:"alignRight"}},S))):null};d.defaultProps={hardFilterReset:!1,isDisabled:s.BM.UI_DISABLED_TOOLBAR,t:c.translate,useSelectCategoryOptions:a.useSelectCategoryOptions,useToolbarFieldClear:i.useToolbarFieldClear,useToolbarFieldClearAll:i.useToolbarFieldClearAll,useToolbarFieldQueries:i.useToolbarFieldQueries,useToolbarSecondaryFields:i.useToolbarSecondaryFields}},83280:function(e,r,t){"use strict";t.r(r),t.d(r,{context:function(){return T},default:function(){return T},useToolbarFieldClear:function(){return v},useToolbarFieldClearAll:function(){return O},useToolbarFieldQueries:function(){return b},useToolbarSecondaryFields:function(){return g}});var o=t(4942),n=t(92950),l=t.n(n),u=t(51858),i=t(46262),a=t(70136),s=t(31663),c=t(33267),d=t(49928),f=t(49844),b=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.useProductQuery,n=void 0===t?u.useProductQuery:t,l=r.useProductGraphTallyQuery,a=void 0===l?u.useProductGraphTallyQuery:l,s=n(),c=s[i.O6.BILLING_PROVIDER],d=s[i.O6.SLA],f=s[i.O6.UOM],b=s[i.O6.USAGE],v=a(),O=v[i.O6.GRANULARITY];return e={},(0,o.Z)(e,i.O6.BILLING_PROVIDER,c),(0,o.Z)(e,i.O6.GRANULARITY,O),(0,o.Z)(e,i.O6.SLA,d),(0,o.Z)(e,i.O6.UOM,f),(0,o.Z)(e,i.O6.USAGE,b),e},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.useBillingProviderOnSelect,t=void 0===r?s.useOnSelect:r,o=e.useSlaOnSelect,n=void 0===o?c.useOnSelect:o,l=e.useUsageOnSelect,u=void 0===l?d.useOnSelect:l,a=t(),f=n(),b=u();return function(e){switch(e){case i.O6.BILLING_PROVIDER:a();break;case i.O6.SLA:f();break;case i.O6.USAGE:b()}}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.useProductQuery,t=void 0===r?u.useProductQuery:r,o=e.useSelectCategoryOnSelect,n=void 0===o?a.useOnSelect:o,l=e.useBillingProviderOnSelect,f=void 0===l?s.useOnSelect:l,b=e.useSlaOnSelect,v=void 0===b?c.useOnSelect:b,O=e.useUsageOnSelect,g=void 0===O?d.useOnSelect:O,T=t(),p=T[i.O6.BILLING_PROVIDER],S=T[i.O6.SLA],y=T[i.O6.USAGE],F=f(),m=v(),h=g(),C=n();return function(e){"string"==typeof p&&F(),"string"==typeof S&&m(),"string"==typeof y&&h(),e&&C()}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.categoryOptions,t=void 0===r?a.toolbarFieldOptions:r,o=e.useProductToolbarConfig,n=void 0===o?u.useProductToolbarConfig:o,i=n(),s=i.secondaryFilters,c=void 0===s?[]:s;return c.map((function(e){var r=e.id,o=t.find((function(e){var t=e.value;return r===t})).component;return l().createElement(o,{key:"option-".concat(r),isFilter:!1,position:f.SelectPosition.right})}))},T={useToolbarFieldClear:v,useToolbarFieldClearAll:O,useToolbarFieldQueries:b,useToolbarSecondaryFields:g}},99376:function(e,r){var t=Object.keys;r.D=function(e,r){if(e===r)return!0;if(!(e instanceof Object&&r instanceof Object))return!1;for(var o=t(e),n=o.length,l=0;l<n;l++)if(!(o[l]in r))return!1;for(l=0;l<n;l++)if(e[o[l]]!==r[o[l]])return!1;return n===t(r).length}},15451:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var o=t(99376),n=t(92950),l=function(e,r){return e.every((function(e,t){return(0,o.D)(e,r[t])}))},u=function(e,r){!function(e,r,t){var o=(0,n.useRef)(void 0);o.current&&t(r,o.current)||(o.current=r),(0,n.useEffect)(e,o.current)}(e,r,l)}}}]);
//# sourceMappingURL=../sourcemaps/9110.js.map