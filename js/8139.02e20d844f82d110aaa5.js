"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[8139],{78139:(t,a,r)=>{r.r(a),r.d(a,{default:()=>h,graphCardHelpers:()=>h,getChartXAxisLabelIncrement:()=>c,getTooltipDate:()=>m,xAxisTickFormat:()=>n,yAxisTickFormat:()=>p,yAxisTickFormatFallback:()=>u});var e=r(30381),o=r.n(e),s=r(30446),i=r(76006),c=function(t){switch(t){case s.U9.DAILY:return 5;case s.U9.WEEKLY:case s.U9.MONTHLY:return 2;case s.U9.QUARTERLY:default:return 1}},m=function(t){var a=t.date,r=t.granularity,e=o().utc(a);switch(r){case s.U9.QUARTERLY:return"".concat(e.format(i.i3.timestampQuarterFormats.yearShort)," - ").concat(e.add(1,"quarter").format(i.i3.timestampQuarterFormats.yearShort));case s.U9.MONTHLY:return e.format(i.i3.timestampMonthFormats.yearLong);case s.U9.WEEKLY:return"".concat(e.format(i.i3.timestampDayFormats.short)," - ").concat(e.add(1,"week").format(i.i3.timestampDayFormats.yearShort));case s.U9.DAILY:default:return e.format(i.i3.timestampDayFormats.long)}},n=function(t){var a=t.date,r=t.granularity,e=t.tick,c=t.previousDate;if(a&&r){var m,n=o().utc(a),u=0!==e&&Number.parseInt(n.year(),10)!==Number.parseInt(o().utc(c).year(),10);switch(r){case s.U9.QUARTERLY:m=(m=u?n.format(i.i3.timestampQuarterFormats.yearShort):n.format(i.i3.timestampQuarterFormats.short)).replace(/\s/,"\n");break;case s.U9.MONTHLY:m=(m=u?n.format(i.i3.timestampMonthFormats.yearShort):n.format(i.i3.timestampMonthFormats.short)).replace(/\s/,"\n");break;case s.U9.WEEKLY:case s.U9.DAILY:default:m=(m=u?n.format(i.i3.timestampDayFormats.yearShort):n.format(i.i3.timestampDayFormats.short)).replace(/\s(\d{4})$/,"\n$1")}return m}},u=function(t){var a=t.tick,r=Math.abs(a),e=a,o="";return r>=Math.pow(10,12)?(o="T",e=a/Math.pow(10,12)):r<Math.pow(10,12)&&r>=Math.pow(10,9)?(o="B",e=a/Math.pow(10,9)):r<Math.pow(10,9)&&r>=Math.pow(10,6)?(o="M",e=a/Math.pow(10,6)):r<Math.pow(10,6)&&r>=Math.pow(10,3)&&(o="K",e=a/Math.pow(10,3)),"".concat(e).concat(o)},p=function(t){var a=t.tick,r=t.locale,e=void 0===r?i.BM.UI_LOCALE_DEFAULT:r,o="".concat(new Intl.NumberFormat(e,{maximumFractionDigits:1,notation:"compact",compactDisplay:"short"}).format(a));return o.length>3&&o.length>="".concat(a).length&&(o=u({tick:a})),o},h={getChartXAxisLabelIncrement:c,getTooltipDate:m,xAxisTickFormat:n,yAxisTickFormat:p,yAxisTickFormatFallback:u}}}]);
//# sourceMappingURL=../sourcemaps/8139.2dad97bf449d139264ef.js.map