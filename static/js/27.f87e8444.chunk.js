(this["webpackJsonpcuriosity-frontend"]=this["webpackJsonpcuriosity-frontend"]||[]).push([[27,35],{592:function(t,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return d})),r.d(a,"graphCardHelpers",(function(){return d})),r.d(a,"getChartXAxisLabelIncrement",(function(){return c})),r.d(a,"getTooltipDate",(function(){return s})),r.d(a,"xAxisTickFormat",(function(){return l})),r.d(a,"yAxisTickFormat",(function(){return m})),r.d(a,"yAxisTickFormatFallback",(function(){return u}));var e=r(71),o=r.n(e),n=r(3),i=r(13),c=function(t){switch(t){case n.b.DAILY:return 5;case n.b.WEEKLY:case n.b.MONTHLY:return 2;case n.b.QUARTERLY:default:return 1}},s=function(t){var a=t.date,r=t.granularity,e=o.a.utc(a);switch(r){case n.b.QUARTERLY:return"".concat(e.format(i.a.timestampQuarterFormats.yearShort)," - ").concat(e.add(1,"quarter").format(i.a.timestampQuarterFormats.yearShort));case n.b.MONTHLY:return e.format(i.a.timestampMonthFormats.yearLong);case n.b.WEEKLY:return"".concat(e.format(i.a.timestampDayFormats.short)," - ").concat(e.add(1,"week").format(i.a.timestampDayFormats.yearShort));case n.b.DAILY:default:return e.format(i.a.timestampDayFormats.long)}},l=function(t){var a=t.date,r=t.granularity,e=t.tick,c=t.previousDate;if(a&&r){var s,l=o.a.utc(a),u=0!==e&&Number.parseInt(l.year(),10)!==Number.parseInt(o.a.utc(c).year(),10);switch(r){case n.b.QUARTERLY:s=(s=u?l.format(i.a.timestampQuarterFormats.yearShort):l.format(i.a.timestampQuarterFormats.short)).replace(/\s/,"\n");break;case n.b.MONTHLY:s=(s=u?l.format(i.a.timestampMonthFormats.yearShort):l.format(i.a.timestampMonthFormats.short)).replace(/\s/,"\n");break;case n.b.WEEKLY:case n.b.DAILY:default:s=(s=u?l.format(i.a.timestampDayFormats.yearShort):l.format(i.a.timestampDayFormats.short)).replace(/\s(\d{4})$/,"\n$1")}return s}},u=function(t){var a=t.tick,r=Math.abs(a),e=a,o="";return r>=Math.pow(10,12)?(o="T",e=a/Math.pow(10,12)):r<Math.pow(10,12)&&r>=Math.pow(10,9)?(o="B",e=a/Math.pow(10,9)):r<Math.pow(10,9)&&r>=Math.pow(10,6)?(o="M",e=a/Math.pow(10,6)):r<Math.pow(10,6)&&r>=Math.pow(10,3)&&(o="K",e=a/Math.pow(10,3)),"".concat(e).concat(o)},m=function(t){var a=t.tick,r=t.locale,e=void 0===r?i.b.UI_LOCALE_DEFAULT:r,o="".concat(new Intl.NumberFormat(e,{maximumFractionDigits:1,notation:"compact",compactDisplay:"short"}).format(a));return o.length>3&&o.length>="".concat(a).length&&(o=u({tick:a})),o},d={getChartXAxisLabelIncrement:c,getTooltipDate:s,xAxisTickFormat:l,yAxisTickFormat:m,yAxisTickFormatFallback:u}},599:function(t,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return i})),r.d(a,"GraphCardChartTooltip",(function(){return i}));r(0);var e=r(592),o=r(32),n=r(4),i=function(t){var a=t.datum,r=t.granularity,o=t.productLabel,i=t.t,c=null,s=[],l=(a||{}).itemsByKey,u=void 0===l?{}:l;return Object.keys(u).forEach((function(t,a){var n,l;0===a&&(c=Object(e.getTooltipDate)({date:null===(l=u[t])||void 0===l?void 0:l.data.date,granularity:r}));var m={color:null===(n=u[t])||void 0===n?void 0:n.color};if(/^threshold/.test(t)){var d,h,p,b=(null===(d=u[t])||void 0===d?void 0:d.data.hasInfinite)&&i("curiosity-graph.infiniteThresholdLabel")||(null!==(h=null===(p=u[t])||void 0===p?void 0:p.data.y)&&void 0!==h?h:i("curiosity-graph.noDataLabel"));m.label=i("curiosity-graph.thresholdLabel"),m.value=b}else{var f,y,v=!1===(null===(f=u[t])||void 0===f?void 0:f.data.hasData)&&i("curiosity-graph.noDataLabel")||(null===(y=u[t])||void 0===y?void 0:y.data.y)||0;m.label=i("curiosity-graph.".concat(t,"Label"),{product:o}),m.value=v}s.push(m)})),Object(n.jsxs)("div",{className:"victory-tooltip",children:[Object(n.jsxs)("table",{summary:i("curiosity-graph.tooltipSummary"),children:[s.length&&c&&Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("th",{colSpan:2,children:c})})})||null,s.length&&Object(n.jsx)("tbody",{children:s.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("th",{children:[Object(n.jsx)("div",{"aria-hidden":!0,className:"legend-icon victory-legend-icon",style:{backgroundColor:t.color||"transparent"}}),t.label]}),Object(n.jsx)("td",{children:t.value})]},"tooltip-".concat(t.label))}))})||null]}),!s.length&&i("curiosity-graph.noDataErrorLabel")||null]})};i.defaultProps={datum:{},productLabel:"",t:o.translate}}}]);
//# sourceMappingURL=27.f87e8444.chunk.js.map