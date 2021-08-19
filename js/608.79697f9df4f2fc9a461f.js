"use strict";(self.webpackChunkcuriosity_frontend=self.webpackChunkcuriosity_frontend||[]).push([[608],{10608:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T,ConnectedGraphCard:()=>T,GraphCard:()=>G});var a=r(56949),n=r(90237),i=r(65337),l=r(39576),u=r(80239),c=r(92950),o=r.n(c),s=r(68269),d=r(11416),p=r(18446),h=r.n(p),y=r(25097),m=r(76006),g=r(30446),f=r(78139),v=r(44024),k=r(64418),C=r(60930),D=r(1797),E=r(91339),b=r(83109),G=function(e){(0,l.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).onUpdateGraphData=function(){var t=e.props,r=t.getGraphReportsCapacity,a=t.isDisabled,n=t.productId,i=t.query,l=e.getQueryGranularity(),u=i[g.VN.START_DATE],c=i[g.VN.END_DATE];!a&&l&&u&&c&&n&&r(n,i)},e}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){this.onUpdateGraphData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.productId,a=t.query;r===e.productId&&h()(a,e.query)||this.onUpdateGraphData()}},{key:"getQueryGranularity",value:function(){var e=this.props.query;return null==e?void 0:e[g.VN.GRANULARITY]}},{key:"renderChart",value:function(){var e,t,r=this.props,a=r.filterGraphData,n=r.graphData,i=r.productLabel,l=r.query,u=r.viewId,c=this.getQueryGranularity(),s={xAxisLabelIncrement:f.graphCardHelpers.getChartXAxisLabelIncrement(c),xAxisTickFormat:function(e){var t=e.item,r=e.previousItem,a=e.tick;return f.graphCardHelpers.xAxisTickFormat({tick:a,date:t.date,previousDate:r.date,granularity:c})},yAxisTickFormat:f.graphCardHelpers.yAxisTickFormat};return o().createElement(C.Chart,Object.assign({key:"chart_".concat(JSON.stringify(l))},s,{dataSets:(e=n,t=function(t){var r={data:e[t],id:t,strokeWidth:2,isStacked:!/^threshold/.test(t),isThreshold:/^threshold/.test(t)};return/^threshold/.test(t)&&(r.stroke=d.chart_color_green_300.value,r.strokeDasharray="4,3",r.strokeWidth=3),r},a.length?a.map((function(e){return Object.assign(t(e.id),e)})):Object.keys(e).map((function(e){return t(e)}))),chartLegend:function(e){var t=e.chart,r=e.datum;return o().createElement(k.default,{chart:t,datum:r,productLabel:i,viewId:u})},chartTooltip:function(e){var t=e.datum;return o().createElement(v.default,{datum:t,granularity:c,productLabel:i})}}))}},{key:"render",value:function(){var e=this.props,t=e.cardTitle,r=e.children,n=e.error,i=e.graphData,l=e.meta,u=e.isDisabled,c=e.pending,d=e.settings;if(u)return null;var p=null;return"function"==typeof(null==d?void 0:d.actionDisplay)&&(p=d.actionDisplay({data:(0,a.Z)({},i),meta:(0,a.Z)({},l)})),o().createElement(s.Card,{className:"curiosity-usage-graph"},o().createElement(E.MinHeight,{key:"headerMinHeight"},o().createElement(s.CardHeader,null,o().createElement(s.CardTitle,null,o().createElement(s.Title,{headingLevel:"h2",size:"lg"},t)),o().createElement(s.CardActions,{className:n?"blur":""},o().createElement(o().Fragment,{key:"actionDisplay"},p),r))),o().createElement(E.MinHeight,{key:"bodyMinHeight"},o().createElement(s.CardBody,null,o().createElement("div",{className:(n?"blur":c&&"fadein")||""},c&&o().createElement(D.Loader,{variant:"graph"}),!c&&this.renderChart()))))}}]),r}(o().Component);G.defaultProps={cardTitle:null,children:null,error:!1,filterGraphData:[],getGraphReportsCapacity:m.BM.noop,graphData:{},meta:{},isDisabled:m.BM.UI_DISABLED_GRAPH,pending:!1,productLabel:"",settings:{},t:b.translate,viewId:"graphCard"};var A=y.R1.graphCard.makeGraphCard(),T=(0,y.$j)(A,(function(e){return{getGraphReportsCapacity:function(t,r){return e(y.Ak.rhsm.getGraphReportsCapacity(t,r))}}}))(G)}}]);
//# sourceMappingURL=../sourcemaps/608.019edb8bc7b06dfb927d.js.map