(window["webpackJsonpcuriosity-frontend"]=window["webpackJsonpcuriosity-frontend"]||[]).push([[0],{339:function(e,t,r){e.exports=r(592)},591:function(e,t,r){},592:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"GET_GRAPH_REPORT",function(){return T}),r.d(n,"SET_GRAPH_RHEL_GRANULARITY",function(){return j});var a={};r.r(a),r.d(a,"USER_AUTH",function(){return L}),r.d(a,"USER_LOCALE",function(){return I}),r.d(a,"USER_LOGOUT",function(){return w});var o={};r.r(o),r.d(o,"default",function(){return Ae}),r.d(o,"getGraphReports",function(){return Ae});var i={};r.r(i),r.d(i,"authorizeUser",function(){return Ie}),r.d(i,"getLocale",function(){return we});var c=r(2),s=r.n(c),l=r(43),u=r(113),p=r(153),f=r(17);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var O={generateId:function(e){return"".concat(e||"generatedid","-").concat(Math.ceil(1e5*Math.random())||"")},noop:Function.prototype,noopPromise:Promise.resolve({}),noopTranslate:function(e,t){return t||"t('".concat(e,"')")},DEV_MODE:!1,PROD_MODE:!0,REVIEW_MODE:!1,TEST_MODE:!1,UI_DEPLOY_PATH_PREFIX:"",UI_DISABLED:!1,UI_DISPLAY_NAME:"Subscription Reporting",UI_LOGGER_ID:"curiosity",UI_NAME:"subscriptions",UI_PATH:"/apps/subscriptions",UI_VERSION:"0.1.1.62e65af"};window.curiosity=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},O);var E=r(7),h=r(8),y=r(10),b=r(9),g=r(11),_=r(47),m=r(248),v=r(110),P=r(185),A=r(70),R=r(114),S=(r(253),r(222)),D=[r(223).a,S.a];var T="GET_GRAPH_REPORT",j="SET_GRAPH_RHEL_GRANULARITY",L="USER_AUTH",I="USER_LOCALE",w="USER_LOGOUT",U={rhel:n,user:a},k={RHSM_API_RESPONSE_PRODUCTS_DATA:"data",RHSM_API_RESPONSE_PRODUCTS_DATA_CORES:"cores",RHSM_API_RESPONSE_PRODUCTS_DATA_DATE:"date",RHSM_API_RESPONSE_PRODUCTS_DATA_INSTANCES:"instance_count",RHSM_API_RESPONSE_PRODUCTS_DATA_SOCKETS:"sockets",RHSM_API_RESPONSE_PRODUCTS_META:"meta",RHSM_API_RESPONSE_PRODUCTS_META_COUNT:"count",RHSM_API_QUERY_GRANULARITY:"granularity",RHSM_API_QUERY_GRANULARITY_TYPES:{DAILY:"daily",WEEKLY:"weekly",MONTHLY:"monthly",QUARTERLY:"quarterly"},RHSM_API_QUERY_LIMIT:"limit",RHSM_API_QUERY_OFFSET:"offset",RHSM_API_QUERY_START_DATE:"beginning",RHSM_API_QUERY_END_DATE:"ending"},x=r(122),M=r.n(x),C=r(319),N=r.n(C),Y=r(320),H=r.n(Y);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(e,"_FULFILLED")},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(e,"_PENDING")},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(e,"_REJECTED")},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=M()(e,"response.status",e.status),n=M()(e,"response.statusText",e.statusText),a=M()(e,"response.data",e.message),o=M()(e,"response.data",e.detail),i="";if(!a&&!o){if(r<400)return n;if(r>=500||void 0===r)return"".concat(r||""," Server is currently unable to handle this request.")}if((r>=500||void 0===r)&&(i=r?"".concat(r," "):""),"string"===typeof a)return"".concat(i).concat(a);if("string"===typeof o)return"".concat(i).concat(o);var c=function e(t,r){var n=r?t[r]:t;return H()(n,function(t){return Array.isArray(t)?e(t):t},null)};return"".concat(i).concat(N()(c(a||o,t),"\n"))},K=function(e){var t=M()(e,"response.status",e.status);return void 0===t&&(t=0),t},X=function(e,t,r){var n=r.state,a=void 0===n?{}:n,o=r.initialState,i=void 0===o?{}:o,c=r.reset,s=void 0===c||c,l=F({},a);return s&&e?l[e]=F({},a[e],{},i[e],{},t):s&&!e?l=F({},a,{},i,{},t):e?l[e]=F({},a[e],{},t):l=F({},a,{},t),l},B=r(123),q=r.n(B);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var $=function(){return(O.TEST_MODE?"20190720":O.DEV_MODE&&Object({NODE_ENV:"production",PUBLIC_URL:"/apps/subscriptions",REACT_APP_ENV:"production",REACT_APP_UI_VERSION:"0.1.1.62e65af",REACT_APP_UI_NAME:"subscriptions",REACT_APP_UI_DISPLAY_NAME:"Subscription Reporting",REACT_APP_UI_DEPLOY_PATH_PREFIX:"",REACT_APP_UI_DISABLED:"false",REACT_APP_UI_LOGGER_ID:"curiosity",REACT_APP_AJAX_TIMEOUT:"60000",REACT_APP_CONFIG_SERVICE_LOCALES_COOKIE:"rh_locale",REACT_APP_CONFIG_SERVICE_LOCALES_DEFAULT_LNG:"en-US",REACT_APP_CONFIG_SERVICE_LOCALES_DEFAULT_LNG_DESC:"English",REACT_APP_CONFIG_SERVICE_LOCALES:"/apps/subscriptions/locales/locales.json",REACT_APP_CONFIG_SERVICE_LOCALES_PATH:"/apps/subscriptions/locales/{{lng}}.json",REACT_APP_CONFIG_SERVICE_LOCALES_EXPIRE:"604800000",REACT_APP_INCLUDE_CONTENT_HEADER:'<esi:include src="/apps/chrome/snippets/head.html" />',REACT_APP_INCLUDE_CONTENT_BODY:'<esi:include src="/apps/chrome/snippets/body.html" />',REACT_APP_SERVICES_RHSM_REPORT_RHEL:"/api/rhsm-subscriptions/v1/tally/products/RHEL"}).REACT_APP_DEBUG_DEFAULT_DATETIME)||new Date},ee=function(e){var t=e.date,r=e.subtract,n=e.measurement;return{startDate:q.a.utc(t).startOf(n).subtract(r,n).toDate(),endDate:q.a.utc(t).startOf(n).toDate()}},te=ee({date:$(),subtract:30,measurement:"days"}),re=ee({date:$(),subtract:12,measurement:"weeks"}),ne=ee({date:$(),subtract:12,measurement:"months"}),ae=ee({date:$(),subtract:36,measurement:"months"}),oe=k.RHSM_API_QUERY_GRANULARITY_TYPES,ie={getCurrentDate:$,getRangedDateTime:function(e){switch(e){case oe.WEEKLY:return Z({},re);case oe.MONTHLY:return Z({},ne);case oe.QUARTERLY:return Z({},ae);case oe.DAILY:default:return Z({},te)}},setRangedDateTime:ee,defaultDateTime:te,monthlyDateTime:ne,quarterlyDateTime:ae,weeklyDateTime:re};function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var le={graphData:{usage:[]},error:!1,errorStatus:null,errorMessage:null,pending:!1,fulfilled:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q(n.GET_GRAPH_REPORT):return X(null,{error:t.error,errorMessage:W(t.payload),errorStatus:K(t.payload)},{state:e,initialState:le});case V(n.GET_GRAPH_REPORT):return X(null,{pending:!0},{state:e,initialState:le});case z(n.GET_GRAPH_REPORT):return X(null,{graphData:{usage:t.payload.data[k.RHSM_API_RESPONSE_PRODUCTS_DATA]||[]},fulfilled:!0},{state:e,initialState:le});case U.rhel.SET_GRAPH_RHEL_GRANULARITY:return X(null,se({graphGranularity:t.graphGranularity},ie.getRangedDateTime(t.graphGranularity)),{state:e,initialState:le});default:return e}};ue.initialState=le;var pe={view:{data:[],error:!1,errorStatus:null,errorMessage:null,pending:!1,fulfilled:!1}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return e};fe.initialState=pe;var de={session:{error:!1,errorMessage:null,errorStatus:null,pending:!1,fulfilled:!1,authorized:!1,locale:null}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q(a.USER_AUTH):return X("session",{error:t.error,errorMessage:W(t.payload),errorStatus:K(t.payload),locale:e.session.locale},{state:e,initialState:de});case V(a.USER_AUTH):return X("session",{locale:e.session.locale,pending:!0},{state:e,initialState:de});case z(a.USER_AUTH):return X("session",{authorized:!0,fulfilled:!0,locale:e.session.locale,username:t.username},{state:e,initialState:de});case z(a.USER_LOCALE):return X("session",{locale:t.payload.data},{state:e,reset:!1});default:return e}};Oe.initialState=de;var Ee={rhelGraph:ue,rhelView:fe,user:Oe},he=Object(R.c)(Ee),ye=Object(R.d)(he,R.a.apply(void 0,Object(A.a)(D))),be=r(321),ge=r.n(be);function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return me({headers:{},timeout:"60000"},e)},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ge()(ve({url:"/api/rhsm-subscriptions/v1/tally/products/RHEL",params:e}))},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return t({type:n.GET_GRAPH_REPORT,payload:Pe(e)})}},Re=r(322),Se=r.n(Re),De=r(333),Te=function(){var e=(Se.a.get("rh_locale")||"").replace("_","-"),t=e&&De.a.getLanguageName(e)||null;return t&&{value:e,key:t}||null},je=function(){var e=O.noopPromise;try{e=window.insights.chrome.auth.getUser}catch(t){O.TEST_MODE||console.warn("{ getUser } = insights.chrome.auth: ".concat(t.message))}return e},Le=function(){var e={value:"en-US",key:"English"};return new Promise(function(t){return t({data:Te()||e})})},Ie=function(){return function(e){return e({type:a.USER_AUTH,payload:je()})}},we=function(){return{type:a.USER_LOCALE,payload:Le()}};function Ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var ke=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ue(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ue(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},{rhel:o,user:i}),xe=function(e,t){return function(r){return Object(u.connect)(e,t)(!O.TEST_MODE&&Object(P.b)()(r)||r)}},Me=function(e,t){return function(r){return Object(v.k)(Object(u.connect)(e,t)(r))}},Ce=r(323),Ne=r.n(Ce),Ye=r(241),He=r(244),Ge=r(242),Fe=r(243),ze=r(15),Ve=r(311),Qe=r(173),We=r(142),Ke=r.n(We),Xe=r(179),Be=r.n(Xe),qe=r(41),Je=r.n(qe);function Ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ze(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ze(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var et=function(e){function t(){var e,r;Object(E.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(y.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={isExpanded:!1,options:null,selected:null},r.onSelect=function(e,t){var n=r.state.options,a=r.props,o=a.id,i=a.name,c=a.onSelect,s=a.variant,l=n,u=l.findIndex(function(e){return e.title===t});l[u].selected=s===ze.e.single||!l[u].selected,ze.e.single&&l.forEach(function(e,t){u!==t&&(l[t].selected=!1)});var p=s===ze.e.single?t:l.filter(function(e){return!0===e.selected}).map(function(e){return e.title});r.setState({options:l,selected:p},function(){var e=Ke()(l),t={id:o,name:i||o,value:e[u].value,selectedIndex:u,type:"select-".concat(s===ze.e.single?"one":"multiple"),options:e},n=$e({},t,{target:$e({},t),currentTarget:$e({},t),persist:O.noop});c($e({},n),u,e),s===ze.e.single&&r.setState({isExpanded:!1})})},r.onToggle=function(e){r.setState({isExpanded:e})},r}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){null===this.state.options&&this.formatOptions()}},{key:"componentDidUpdate",value:function(e){var t=this.props.options;Be()(e.options,t)||this.formatOptions()}},{key:"formatOptions",value:function(){var e,t=this.props,r=t.options,n=t.selectedOptions,a=t.variant,o=Je()(r)?Object.keys(r).map(function(e){return $e({},r[e],{title:e,value:r[e]})}):Ke()(r),i=n&&"string"===typeof n||"number"===typeof n?[n]:n;o.forEach(function(e,t){var r=e;"string"===typeof r&&(r={title:e,value:e},o[t]=r),r.text=r.text||r.title,r.textContent=r.textContent||r.title,r.label=r.label||r.title,i&&(o[t].selected=i.includes(r.value))}),e=a===ze.e.single?(o.find(function(e){return!0===e.selected})||{}).title:o.filter(function(e){return!0===e.selected}).map(function(e){return e.title}),this.setState({options:o,selected:e})}},{key:"render",value:function(){var e=this.state,t=e.options,r=e.selected,n=e.isExpanded,a=this.props,o=a.ariaLabel,i=a.className,c=a.isDisabled,l=a.placeholder,u=a.variant,p={};return t&&t.length&&!c||(p.isDisabled=!0),s.a.createElement(Ve.a,Object.assign({className:"curiosity-select ".concat(i),variant:u,"aria-label":o,onToggle:this.onToggle,onSelect:this.onSelect,selections:r,isExpanded:n,placeholderText:l},p),t&&t.map(function(e){return s.a.createElement(Qe.a,{key:window.btoa(e.title),value:e.title,"data-value":e.value,"data-title":e.title})})||null)}}]),t}(s.a.Component);et.defaultProps={ariaLabel:"Select option",className:"",id:O.generateId(),isDisabled:!1,name:null,onSelect:O.noop,options:[],selectedOptions:null,placeholder:"Select option",variant:ze.e.single};var tt=r(236),rt=r(324),nt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return!O.TEST_MODE&&tt.a.t(e,t)||O.noopTranslate(e,t)},at=function(e){function t(){return Object(E.a)(this,t),Object(y.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.i18nInit()}},{key:"componentDidUpdate",value:function(e){this.props.locale!==e.locale&&this.i18nInit()}},{key:"i18nInit",value:function(){var e=this.props,t=e.fallbackLng,r=e.loadPath,n=e.locale;tt.a.use(rt.a).use(P.a).init({backend:{loadPath:r},fallbackLng:t,lng:n,debug:!O.PROD_MODE,ns:["default"],defaultNS:"default",react:{useSuspense:!1}})}},{key:"render",value:function(){var e=this.props.children;return s.a.createElement(s.a.Fragment,null,e)}}]),t}(s.a.Component);at.defaultProps={fallbackLng:"en-US",loadPath:"/apps/subscriptions/locales/{{lng}}.json",locale:null};var ot=k.RHSM_API_QUERY_GRANULARITY_TYPES,it=function(e){switch(e){case ot.DAILY:return 5;case ot.WEEKLY:case ot.MONTHLY:return 2;case ot.QUARTERLY:default:return 1}},ct=function(e){var t={label:nt("curiosity-graph.tooltipLabel")};switch(e){case ot.WEEKLY:t.previousLabel=nt("curiosity-graph.tooltipPreviousLabelWeekly");break;case ot.MONTHLY:t.previousLabel=nt("curiosity-graph.tooltipPreviousLabelMonthly");break;case ot.QUARTERLY:t.previousLabel=nt("curiosity-graph.tooltipPreviousLabelQuarterly");break;case ot.DAILY:default:t.previousLabel=nt("curiosity-graph.tooltipPreviousLabelDaily")}return t},st=function(e){switch(e){case ot.WEEKLY:return"weeks";case ot.MONTHLY:return"months";case ot.QUARTERLY:return"quarters";case ot.DAILY:default:return"days"}},lt=function(e){var t=e.data,r=e.previousData,n=e.formattedDate,a=e.granularity,o=ct(a),i=o.label,c=o.previousLabel,s=t-r,l="".concat(t," ").concat(i," ").concat(n);return null===r||0===s?l:"".concat(l,"\n ").concat(s>-1?"+":"").concat(s," ").concat(c)},ut=function(e){for(var t=e.data,r=e.endDate,n=e.granularity,a=e.startDate,o=st(n),i=it(n),c=q()(r).diff(a,o),s=[],l=null,u=null,p=0;p<=c;p++){var f=q.a.utc(a).add(p,o).startOf(o),d=f.toISOString(),O=parseInt(f.year(),10),E=p%i===0,h=0!==p&&E&&O!==u,y=void 0;y="quarters"===o?h?f.format("MMM YYYY"):f.format("MMM"):"months"===o?h?f.format("MMM YYYY"):f.format("MMM"):h?f.format("MMM D YYYY"):f.format("MMM D");var b=t[d]||0,g={data:b,previousData:l,formattedDate:y,granularity:n};s.push({x:s.length,y:b,tooltip:lt(g),xAxisLabel:"months"===o||"quarters"===o?y.replace(/\s/,"\n"):y}),l=b,E&&O!==u&&(u=O)}return s},pt=function(e){var t=e.data,r=e.dataFacet,n=e.startDate,a=e.endDate,o=e.granularity,i={};return(t||[]).forEach(function(e){if(e){var t=q.a.utc(e[k.RHSM_API_RESPONSE_PRODUCTS_DATA_DATE]).startOf("day").toISOString();i[t]=Number.parseInt(e[r],10)}}),{chartData:ut({data:i,endDate:a,granularity:o,startDate:n}),chartXAxisLabelIncrement:it(o)}},ft=k.RHSM_API_QUERY_GRANULARITY_TYPES,dt=function(){return[{title:nt("curiosity-graph.dropdownDaily","Daily"),value:ft.DAILY},{title:nt("curiosity-graph.dropdownWeekly","Weekly"),value:ft.WEEKLY},{title:nt("curiosity-graph.dropdownMonthly","Monthly"),value:ft.MONTHLY},{title:nt("curiosity-graph.dropdownQuarterly","Quarterly"),value:ft.QUARTERLY}]},Ot=r(611),Et=r(609),ht=r(607),yt=r(612),bt=r(608);function gt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var _t=function(e){function t(){var e,r;Object(E.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(y.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={chartWidth:0},r.containerRef=s.a.createRef(),r.onResizeContainer=function(){var e=r.containerRef.current;e&&e.clientWidth&&r.setState({chartWidth:e.clientWidth})},r}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.onResizeContainer(),window.addEventListener("resize",this.onResizeContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResizeContainer)}},{key:"getChartTicks",value:function(){var e=this.props,t=e.xAxisLabelIncrement,r=e.yAxisLabelIncrement,n=e.xAxisLabelUseDataSet,a=e.yAxisLabelUseDataSet,o=e.xAxisTickFormat,i=e.yAxisTickFormat,c=e.dataSetOne,s={},l={},u=[],p=[];switch(n){case"one":default:u=c}switch(a){case"one":default:p=c}return u.find(function(e){return e.xAxisLabel&&e.xAxisLabel})&&(s.xAxisTickValues=u.reduce(function(e,r,n){return n%t===0?e.concat(r.x):e},[]),s.xAxisTickFormat=function(e){return u[e]&&u[e].xAxisLabel||e}),"function"===typeof o&&(s.xAxisTickFormat=function(e){return o({dataSet:Ke()(u),tick:e})}),p.find(function(e){return e.yAxisLabel&&e.yAxisLabel})&&(l.yAxisTickValues=p.reduce(function(e,t,n){return n%r===0?e.concat(t.y):e},[]),l.yAxisTickFormat=function(e){return p[e]&&p[e].yAxisLabel||e}),"function"===typeof i&&(l.yAxisTickFormat=function(e){return i({dataSet:Ke()(p),tick:e})}),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?gt(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gt(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},s,{},l)}},{key:"getChartDomain",value:function(e){var t=e.isXAxisTicks,r=e.isYAxisTicks,n=this.props,a=n.domain,o=n.dataSetOne;if(Object.keys(a).length)return a;var i={},c=0;if(o.forEach(function(e){c=e.y>c?e.y:c}),t||(i.x=[0,o.length||10]),!r){var s=Math.pow(10,Math.floor(Math.log10(c||10)));i.y=[0,Math.ceil((c+1)/s)*s]}return{maxY:c,domain:i}}},{key:"render",value:function(){var e=this.state.chartWidth,t=this.props,r=t.dataSetOne,n=t.xAxisFixLabelOverlap,a=t.yAxisFixLabelOverlap,o=this.getChartTicks(),i=o.xAxisTickValues,c=o.xAxisTickFormat,l=o.yAxisTickValues,u=o.yAxisTickFormat,p={fixLabelOverlap:n},f={dependentAxis:!0,showGrid:!0,fixLabelOverlap:a};i&&(p.tickValues=i),c&&(p.tickFormat=c),l&&(f.tickValues=l),u&&(f.tickFormat=u);var d=this.getChartDomain({isXAxisTicks:!!i,isYAxisTicks:!!l}),O=d.domain,E={};return d.maxY>0&&(E.containerComponent=s.a.createElement(Ot.a,{labels:function(e){return e.tooltip}})),Object.keys(O).length&&(E.domain=O),s.a.createElement("div",{ref:this.containerRef},s.a.createElement(Et.a,Object.assign({width:e},E),s.a.createElement(ht.a,p),s.a.createElement(ht.a,f),s.a.createElement(yt.a,null,r&&r.length&&s.a.createElement(bt.a,{data:r})||null)))}}]),t}(s.a.Component);function mt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}_t.defaultProps={domain:{},dataSetOne:[],height:275,padding:{bottom:50,left:50,right:50,top:50},xAxisFixLabelOverlap:!1,xAxisLabelIncrement:1,xAxisLabelUseDataSet:"one",xAxisTickFormat:null,yAxisFixLabelOverlap:!1,yAxisLabelIncrement:1,yAxisLabelUseDataSet:"one",yAxisTickFormat:null};var vt=k.RHSM_API_QUERY_GRANULARITY_TYPES,Pt=function(e){function t(){var e,r;Object(E.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(y.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).onUpdateGraphData=function(){var e,t=r.props,n=t.getGraphReports,a=t.graphGranularity,o=t.startDate,i=t.endDate;n((e={},Object(f.a)(e,k.RHSM_API_QUERY_GRANULARITY,a),Object(f.a)(e,k.RHSM_API_QUERY_START_DATE,o.toISOString()),Object(f.a)(e,k.RHSM_API_QUERY_END_DATE,i.toISOString()),e))},r.onSelect=function(e){var t=r.props.graphGranularity,n=e.value;t!==n&&ye.dispatch({type:U.rhel.SET_GRAPH_RHEL_GRANULARITY,graphGranularity:n})},r}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.onUpdateGraphData()}},{key:"componentDidUpdate",value:function(e){this.props.graphGranularity!==e.graphGranularity&&this.onUpdateGraphData()}},{key:"renderChart",value:function(){var e=this.props,t=e.graphData,r=e.graphGranularity,n=e.startDate,a=e.endDate,o=pt({data:t.usage,dataFacet:k.RHSM_API_RESPONSE_PRODUCTS_DATA_SOCKETS,startDate:n,endDate:a,granularity:r}),i=o.chartXAxisLabelIncrement,c=o.chartData;return s.a.createElement(_t,{xAxisFixLabelOverlap:!0,xAxisLabelIncrement:i,yAxisTickFormat:function(e){var t=e.tick;return Ne()(t).format("0a")},dataSetOne:c})}},{key:"render",value:function(){var e=this.props,t=e.error,r=e.fulfilled,n=e.graphGranularity,a=e.pending,o=e.t,i=dt();return s.a.createElement(Ye.a,{className:"curiosity-usage-graph fadein"},s.a.createElement(He.a,null,s.a.createElement("h2",null,o("curiosity-graph.heading","CPU socket usage")),s.a.createElement(Ge.a,null,s.a.createElement(et,{"aria-label":o("curiosity-graph.dropdownPlaceholder","Select date range"),onSelect:this.onSelect,options:i,selectedOptions:n,placeholder:o("curiosity-graph.dropdownPlaceholder","Select date range")}))),s.a.createElement(Fe.a,null,s.a.createElement("div",{className:"curiosity-skeleton-container"},a&&s.a.createElement(s.a.Fragment,null,s.a.createElement(_.Skeleton,{size:_.SkeletonSize.xs}),s.a.createElement(_.Skeleton,{size:_.SkeletonSize.sm}),s.a.createElement(_.Skeleton,{size:_.SkeletonSize.md}),s.a.createElement(_.Skeleton,{size:_.SkeletonSize.lg})),!a&&(r||t)&&this.renderChart())))}}]),t}(s.a.Component);Pt.defaultProps={error:!1,fulfilled:!1,getGraphReports:O.noop,graphData:{usage:[]},graphGranularity:vt.DAILY,pending:!1,t:O.noopTranslate,startDate:ie.defaultDateTime.startDate,endDate:ie.defaultDateTime.endDate};var At=xe(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?mt(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mt(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.rhelGraph)},function(e){return{getGraphReports:function(t){return e(ke.rhel.getGraphReports(t))}}})(Pt),Rt=function(e){function t(){return Object(E.a)(this,t),Object(y.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(_.PageHeader,null,s.a.createElement(_.PageHeaderTitle,{title:"Red Hat Enterprise Linux"})),s.a.createElement(m.a,null,s.a.createElement(At,null)))}}]),t}(s.a.Component);Rt.defaultProps={};var St=Me(function(){return{}},function(){return{}})(Rt),Dt=(O.TEST_MODE?"/":O.DEV_MODE&&"/")||function(e){var t=e.pathName,r=e.pathPrefix,n=t.split("/");n.shift();var a=r&&new RegExp(n[0]).test(r)?3:2;return"/".concat(n.slice(0,a).join("/"))}({pathName:window.location.pathname,pathPrefix:O.UI_DEPLOY_PATH_PREFIX}),Tt=[{title:"Red Hat Enterprise Linux",id:"rhel",to:"/rhel",redirect:!0,component:St,exact:!0,disabled:O.UI_DISABLED}],jt=function(e){function t(){return Object(E.a)(this,t),Object(y.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"renderRoutes",value:function(){var e=this.props.routesType,t=null;return{renderRoutes:e.map(function(e){return e.disabled?null:(!0===e.redirect&&(t=s.a.createElement(v.c,{to:e.to})),s.a.createElement(v.d,{exact:e.hasParameters||e.exact,key:e.to,path:e.to,component:e.component}))}),redirectRoot:t}}},{key:"render",value:function(){var e=this.renderRoutes(),t=e.renderRoutes,r=e.redirectRoot;return s.a.createElement("div",{className:"curiosity-content"},s.a.createElement(v.g,null,t,r))}}]),t}(s.a.Component);jt.defaultProps={routesType:Tt};var Lt=r(245),It=r(247),wt=r(246),Ut=r(252),kt=r(251),xt=r(132),Mt=function(e){var t=e.children;return s.a.createElement(xt.a,{className:"layout-pf curiosity"},s.a.createElement(m.a,{noPadding:!0},t))};function Ct(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Mt.defaultProps={};var Nt=function(e){function t(){var e,r;Object(E.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(y.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).appNav=O.noop,r.buildNav=O.noop,r.buildNavigation=function(){var e=r.props.routes,t=window.location.pathname.split("/").slice(-1)[0];return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ct(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ct(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{active:e.id===t})})},r}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.appName,n=t.authorizeUser,a=t.history,o=t.insights,i=t.routes,c=t.session;try{(O.PROD_MODE||O.REVIEW_MODE)&&o.chrome.init(),O.PROD_MODE&&(o.chrome.identifyApp(r),o.chrome.navigation(i),this.appNav=o.chrome.on("APP_NAVIGATION",function(e){return a.push("/".concat(e.navId))}),this.buildNav=a.listen(function(){return o.chrome.navigation(e.buildNavigation())})),c.authorized||n()}catch(s){O.TEST_MODE||console.warn("{ init, identifyApp, navigation } = insights.chrome: ".concat(s.message))}}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.session;return r.authorized?s.a.createElement(s.a.Fragment,null,t):r.pending?s.a.createElement(Mt,null,s.a.createElement(_.PageHeader,null,s.a.createElement(_.PageHeaderTitle,{title:"\xa0"})),s.a.createElement(Lt.a,{variant:Lt.b.full,className:"fadein"},s.a.createElement(It.a,{icon:Ut.a}),s.a.createElement(wt.a,null,"Authenticating..."))):s.a.createElement(Mt,null,s.a.createElement(_.PageHeader,null,s.a.createElement(_.PageHeaderTitle,{title:"Unauthorized"})),s.a.createElement(Lt.a,{variant:Lt.b.full,className:"fadein"},s.a.createElement(It.a,{icon:kt.a}),s.a.createElement(wt.a,null,"You do not have permission to access reporting. Contact your administrator.")))}}]),t}(c.Component);Nt.defaultProps={appName:O.UI_NAME,authorizeUser:O.noop,insights:window.insights,routes:Tt,session:{authorized:!1,error:!1,errorMessage:"",pending:!1}};var Yt=Me(function(e){return{session:e.user.session}},function(e){return{authorizeUser:function(){return e(ke.user.authorizeUser())}}})(Nt),Ht=function(e){function t(){return Object(E.a)(this,t),Object(y.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getLocale)()}},{key:"render",value:function(){var e=this.props.locale;return s.a.createElement(at,{locale:e&&e.value||null},s.a.createElement(Yt,null,s.a.createElement(Mt,null,s.a.createElement(jt,null))))}}]),t}(s.a.Component);Ht.defaultProps={getLocale:O.noop,locale:{}};var Gt=Me(function(e){return{locale:e.user.session.locale}},function(e){return{getLocale:function(){return e(ke.user.getLocale())}}})(Ht);r(591);Object(l.render)(s.a.createElement(u.Provider,{store:ye},s.a.createElement(p.BrowserRouter,{basename:Dt},s.a.createElement(Gt,null))),document.getElementById("root"))}},[[339,1,2]]]);
//# sourceMappingURL=main.70a5c10e.chunk.js.map