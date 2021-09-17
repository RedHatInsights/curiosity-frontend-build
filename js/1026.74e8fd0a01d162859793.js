"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[1026],{61026:(t,a,e)=>{e.r(a),e.d(a,{default:()=>p,chartHelpers:()=>p,generateAxisProps:()=>f,generateDomains:()=>c,generateElementsProps:()=>x,generateMaxXY:()=>u,generateTooltipData:()=>v,generateXAxisProps:()=>m,generateYAxisProps:()=>h});var i=e(56949),r=e(1252),n=e(92950),o=e.n(n),s=e(50361),l=e.n(s),d=e(76006),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.dataSets,e=void 0===a?[]:a,i={},n=0,o=0;return e.filter((function(t){return!0===t.isStacked})).forEach((function(t){var a=t.data;Array.isArray(a)&&(o+=Math.max.apply(Math,(0,r.Z)(a.map((function(t){var a;return null!==(a=null==t?void 0:t.y)&&void 0!==a?a:0})))))})),e.forEach((function(t){var a=t.id,e=t.data,s=0;Array.isArray(e)&&(n=e.length>n?e.length:n,s=Math.max.apply(Math,(0,r.Z)(e.map((function(t){var a;return null!==(a=null==t?void 0:t.y)&&void 0!==a?a:0})))),o=s>o?s:o),a&&(i[a]=s)})),{maxX:n,maxY:o,individualMaxY:i}},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.maxY,e={},r={};if(Object.values(a).length)r.y=[0,1.25];else{var n=Math.pow(10,Math.floor(Math.log10(a||10)));r.y=[0,Math.ceil((a+1)/n)*n]}return Object.keys(r).length&&(e.domain=r),(0,i.Z)({},e)},x=function(t){var a=t.dataSets,e=void 0===a?[]:a,r=t.maxX,n=t.maxY,o=t.xValueFormat,s=t.yValueFormat,l=[],d=[],u={},c={};return e.forEach((function(t){var a=t.animate,e=t.chartType,x=t.data,v=t.fill,m=t.id,h=t.isStacked,f=t.interpolation,p=t.stroke,y=t.strokeDasharray,k=t.strokeWidth;if(null==x?void 0:x.length){var g={data:{}};v&&"line"!==e&&"threshold"!==e&&(g.data.fill=v),p&&(g.data.stroke=p),y&&(g.data.strokeDasharray=y),k&&(g.data.strokeWidth=k);var A={};a&&(A.animate=a),f&&(A.interpolation=f);var Z=(0,i.Z)((0,i.Z)({},A),{},{key:"chart-".concat(t.id,"-").concat(e||""),name:"chart-".concat(t.id,"-").concat(e||""),data:t.data,style:(0,i.Z)((0,i.Z)({},t.style||{}),g),themeColor:t.themeColor,themeVariant:t.themeVariant,x:o&&function(t){var a=o({datum:t,maxX:r});return void 0===a||Number.isNaN(a)?0:a}||void 0,y:function(a){var e;return void 0===(e=s?s({datum:a,isMultiAxis:"number"!=typeof n,maxY:"number"==typeof n?n:null==n?void 0:n[t.id]}):"number"==typeof n?a.y:a.y/(null==n?void 0:n[t.id]))||Number.isNaN(e)?0:e}}),b={chartType:e,props:(0,i.Z)({},Z)};h?(c[m]=b,d.push(b)):(u[m]=b,l.push(b))}})),{elements:l,elementsById:u,stackedElements:d,stackedElementsById:c}},v=function(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a.content,r=void 0===e?d.BM.noop:e,n=a.dataSets,s=void 0===n?[]:n,u={};return r&&(null==s||null===(t=s[0])||void 0===t?void 0:t.data)&&s[0].data.forEach((function(t,a){var e={};s.forEach((function(t){(null==t?void 0:t.data[a])&&(e[t.id]={color:t.stroke||t.fill||t.color||"",chartType:t.chartType,data:l()(t.data[a])})}));var n={datum:{x:t.x,y:t.y,index:a,itemsByKey:e}};u[t.x]={x:t.x,y:null,itemsByKey:e,tooltip:o().isValidElement(r)&&o().cloneElement(r,(0,i.Z)({},n))||r((0,i.Z)({},n))}})),u},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.dataSet,e=void 0===a?{}:a,r=t.maxX,n=t.xAxisLabelIncrement,o=t.xAxisPropDefaults,s=void 0===o?{}:o,l=t.xAxisTickFormat,d=e.data,u=void 0===d?[]:d,c=(0,i.Z)((0,i.Z)({},s),{},{tickValues:u.reduce((function(t,a,e){return e%n==0?t.concat(a.x):t}),[]),tickFormat:function(t){var a;return(null===(a=u[t])||void 0===a?void 0:a.xAxisLabel)||t}});return"function"==typeof l&&(c.tickFormat=function(t){var a=c.tickValues.indexOf(t),e=(0,i.Z)({},u[c.tickValues[a-1]]),n=(0,i.Z)({},u[c.tickValues[a+1]]),o=(0,i.Z)({},u[t]);return l({tick:t,previousItem:e,item:o,nextItem:n,maxX:r})}),c},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.dataSets,e=void 0===a?[]:a,r=t.maxY,n=t.yAxisPropDefaults,o=void 0===n?{}:n,s=t.yAxisTickFormat,l=[],d=e.length>1;return e.forEach((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.id,e=t.stroke,n=t.strokeWidth,u=arguments.length>1?arguments[1]:void 0,c={style:{axis:{},tickLabels:{}},tickFormat:function(t){return t}};if(d&&e&&(c.style.axis.stroke=e),d&&n&&(c.style.axis.strokeWidth=n),"function"==typeof s){var x="number"==typeof r&&r||(null==r?void 0:r[a]);c.tickFormat=function(t){return s({tick:d&&t*x||t,isMultiAxis:d,maxY:x})}}l.push((0,i.Z)((0,i.Z)((0,i.Z)({},o),c),{},{orientation:0===u?"left":"right"}))})),l},f=function(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a.dataSets,i=void 0===e?[]:e,r=a.individualMaxY,n=void 0===r?{}:r,o=a.maxX,s=a.maxY,l=a.xAxisFixLabelOverlap,d=void 0===l||l,u=a.xAxisLabelIncrement,c=void 0===u?1:u,x=a.xAxisTickFormat,v=a.yAxisTickFormat,f={fixLabelOverlap:d},p={dependentAxis:!0,showGrid:!0},y=[];i.forEach((function(a){a.yAxisUseDataSet&&y.push(a),a.xAxisUseDataSet&&(t=a)})),y.length?y=y.slice(0,2):y.push(null==i?void 0:i[0]),t||(t=(null==i?void 0:i[0])||[]);var k=y.length>1&&n||s;return{xAxisProps:m({dataSet:t,maxX:o,xAxisLabelIncrement:c,xAxisPropDefaults:f,xAxisTickFormat:x}),yAxisProps:h({dataSets:y,maxY:k,yAxisPropDefaults:p,yAxisTickFormat:v})}},p={generateAxisProps:f,generateDomains:c,generateElementsProps:x,generateMaxXY:u,generateTooltipData:v,generateXAxisProps:m,generateYAxisProps:h}}}]);
//# sourceMappingURL=../sourcemaps/1026.43c84c8eab17c1902c28.js.map