"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[4024],{44024:(t,e,l)=>{l.r(e),l.d(e,{default:()=>c,GraphCardChartTooltip:()=>c});var a=l(92950),r=l.n(a),o=l(78139),n=l(83109),i=l(1138),c=function(t){var e=t.datum,l=t.granularity,a=t.productLabel,n=t.t,c=null,u=[],d=(e||{}).itemsByKey,h=void 0===d?{}:d;return Object.keys(h).reverse().forEach((function(t,e){var d,s,p,y;0===e&&(c=(0,o.getTooltipDate)({date:null===(y=h[t])||void 0===y?void 0:y.data.date,granularity:l}));var v={color:null===(d=h[t])||void 0===d?void 0:d.color};if("threshold"===(null===(s=h[t])||void 0===s?void 0:s.chartType)){var m,f,b,g=null!==(m=null===(f=h[t])||void 0===f?void 0:f.data.y)&&void 0!==m?m:n("curiosity-graph.label_noData");(null===(b=h[t])||void 0===b?void 0:b.data.hasInfinite)&&(g=v.color?r().createElement(i.ChartIcon,{symbol:"infinity",fill:"#ffffff",title:n("curiosity-graph.label_threshold",{context:"infinite"})}):n("curiosity-graph.label_threshold",{context:"infinite"})),v.label=n("curiosity-graph.label_threshold"),v.value=g}else{var E,_,C=!1===(null===(E=h[t])||void 0===E?void 0:E.data.hasData)&&n("curiosity-graph.label_noData")||(null===(_=h[t])||void 0===_?void 0:_.data.y)||0;v.label=n("curiosity-graph.label",{context:t,product:a}),v.value=C}v.chartType=null===(p=h[t])||void 0===p?void 0:p.chartType,u.push(v)})),r().createElement("div",{className:"curiosity-usage-graph__tooltip"},r().createElement("table",{summary:n("curiosity-graph.tooltipSummary")},u.length&&c&&r().createElement("thead",null,r().createElement("tr",null,r().createElement("th",{colSpan:2},c)))||null,u.length&&r().createElement("tbody",null,u.map((function(t){return r().createElement("tr",{key:"tooltip-".concat(t.label)},r().createElement("th",null,"threshold"===t.chartType&&r().createElement(i.ChartIcon,{size:"sm",symbol:"dash",fill:t.color||"transparent"}),"threshold"!==t.chartType&&r().createElement(i.ChartIcon,{size:"sm",fill:t.color||"transparent"})," ",t.label),r().createElement("td",null,t.value))})))||null),!u.length&&n("curiosity-graph.label_noData",{context:"error"})||null)};c.defaultProps={datum:{},productLabel:"",t:n.translate}}}]);
//# sourceMappingURL=../sourcemaps/4024.b736ea4421342e6abf3d.js.map