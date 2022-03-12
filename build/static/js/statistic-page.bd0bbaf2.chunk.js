"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[541],{4358:function(e,r,t){t.r(r),t.d(r,{default:function(){return z}});var n=t(2982),o=t(1413),a=t(5861),i=t(7757),l=t.n(i),s=(t(6546),t(1292)),c=t(2791),u="ChartBalance_balance__c0v0x",d=t(2978),h=t(184);function x(e){var r=e.periodTotal,t=(0,d.v9)((function(e){return e.global})).isLoading;return r||0===r?(0,h.jsxs)("p",{className:u,children:["\u20b4\xa0",new Intl.NumberFormat("ru-RU").format(r).replace(",",".")]}):!t}var p={doughnut:"Chart_doughnut__OwluU",containerChart:"Chart_containerChart__vn-Vj"};function m(e){var r=e.statistics,t=null===r||void 0===r?void 0:r.periodTotal,n=null===r||void 0===r?void 0:r.categoriesSummary.filter((function(e){return e.total<=0})),o=null===n||void 0===n?void 0:n.map((function(e){return Math.abs(e.total)})),a=null===n||void 0===n?void 0:n.map((function(e){return e.color}));return(0,h.jsx)("div",{className:p.chart,children:(0,h.jsxs)("div",{className:p.containerChart,children:[(0,h.jsx)(x,{periodTotal:t}),(0,h.jsx)("div",{className:p.doughnut,children:(0,h.jsx)(s.$I,{className:"s.douhnut",data:{labels:0===(null===o||void 0===o?void 0:o.length)?["No expends"]:null,datasets:[{data:(null===o||void 0===o?void 0:o.length)>0?o:[1],backgroundColor:(null===a||void 0===a?void 0:a.length)>0?a:["#C5BAFF"],borderColor:(null===a||void 0===a?void 0:a.length)>0?a:["#C5BAFF"],borderWidth:1,cutout:90}]},options:{cutout:120,maintainAspectRatio:!0,responsive:!0}})})]})})}for(var b=t(8561),f={tableHead:"Table_tableHead__C7iOE",selectContainer:"Table_selectContainer__-S3nT",cellName:"Table_cellName__rJeCz",expensesColor:"Table_expensesColor__UcV0d"},v=t(9836),g=t(3382),Z=t(3994),j=t(9281),C=t(6890),S=t(5855),w=t(5530),y=t(6397),_={placeholder:function(e){return(0,o.Z)((0,o.Z)({},e),{},{fontWeight:400,fontSize:"16px",lineHeight:"1.5",color:"#000000"})},container:function(e){return(0,o.Z)((0,o.Z)({},e),{},{width:"100%"})},menu:function(e){return(0,o.Z)((0,o.Z)({},e),{},{background:"rgba(255, 255, 255, 0.2)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",borderRadius:"20px",backdropFilter:"blur(30px)",overflow:"hidden"})},menuList:function(e){return(0,o.Z)((0,o.Z)({},e),{},{"::-webkit-scrollbar":{width:"4px",height:"10px"},"::-webkit-scrollbar-thumb":{background:"#c2c2c2",borderRadius:"10px"},"::-webkit-scrollbar-track":{marginTop:"20px",marginBottom:"20px"}})},indicatorSeparator:function(e){return(0,o.Z)((0,o.Z)({},e),{},{display:"none"})},control:function(e){return(0,o.Z)((0,o.Z)({},e),{},{borderRadius:"30px",border:"1px solid #000000",padding:"0 15px",minHeight:"50px",fontStyle:"normal",fontWeight:"400",fontSize:"18px",lineHeight:" 1.5",color:"#000000",width:"100%",backgroundColor:"transparent",":hover":{cursor:"pointer",borderColor:"#4A56E2"},boxShadow:0,"@media screen and (min-width: 768px)":{minWidth:"166px"}})},option:function(e){return(0,o.Z)((0,o.Z)({},e),{},{backgroundColor:"transparent",color:"#000000",":hover":{cursor:"pointer",backgroundColor:"#fff",color:"#FF6596"},fontStyle:"normal",fontWeight:"400",fontSize:"17px",lineHeight:" 1.5",transition:"background-color 0.2s ease, color 0.2s ease"})},dropdownIndicator:function(e,r){return(0,o.Z)((0,o.Z)({},e),{},{svg:{color:"#000"},transition:"all .2s ease",transform:r.isFocused?"rotate(180deg)":null})}},k=[{value:"",label:"All period"}],N=["January","February","March","April","May","June","July","August","September","October","November","December"],T=1;T<=12;T+=1)k.push({value:T,label:N[T-1]});var R=[{value:"",label:"All years"},{value:2019,label:"2019"},{value:2020,label:"2020"},{value:2021,label:"2021"},{value:2022,label:"2022"}];var F=function(e){var r,t=e.statistics,n=(null===t||void 0===t?void 0:t.categoriesSummary)&&(null===t||void 0===t?void 0:t.categoriesSummary.filter((function(e){return e.total<=0})))||[],o=null===t||void 0===t?void 0:t.incomeSummary,i=(null===t||void 0===t?void 0:t.expenseSummary)&&Math.abs(null===t||void 0===t?void 0:t.expenseSummary),s=(0,d.I0)(),c=function(){var e=(0,a.Z)(l().mark((function e(r){var n,o,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.value,o=t.month,a=t.year,s((0,y.q0)(n)),a||o){e.next=5;break}return e.abrupt("return");case 5:return s((0,w.wt)(!0)),e.next=8,s((0,y.eS)({month:+n,year:a}));case 8:s((0,w.wt)(!1));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(l().mark((function e(r){var n,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.value,o=t.month,s((0,y.Mq)(n)),s((0,w.wt)(!0)),e.next=6,s((0,y.eS)({month:o,year:+n}));case 6:s((0,w.wt)(!1));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:f.tableContainer,children:[(0,h.jsxs)("div",{className:f.selectContainer,children:[(0,h.jsx)(b.ZP,{name:"month",styles:_,options:k,placeholder:(null===(r=k[null===t||void 0===t?void 0:t.month])||void 0===r?void 0:r.label)||"All period",onChange:c,isSearchable:!1}),(0,h.jsx)(b.ZP,{name:"year",styles:_,options:R,placeholder:(null===t||void 0===t?void 0:t.year)||"All years",onChange:u,isSearchable:!1})]}),(0,h.jsx)(j.Z,{children:(0,h.jsxs)(v.Z,{sx:{minWidth:280},children:[(0,h.jsx)(C.Z,{children:(0,h.jsxs)(S.Z,{className:f.TableHead,sx:{borderRadius:"0px",backgroundColor:"#fff","& .MuiTableCell-root":{borderRadius:"0px",borderBottom:"none",fontSize:"18px"},"& .MuiTableCell-root:first-of-type":{borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px"},"& .MuiTableCell-root:last-of-type":{borderTopRightRadius:"30px",borderBottomRightRadius:"30px"}},children:[(0,h.jsx)(Z.Z,{children:"Category"}),(0,h.jsx)(Z.Z,{align:"right",children:"Amount"})]})}),(0,h.jsxs)(g.Z,{children:[n.map((function(e){return(0,h.jsxs)(S.Z,{sx:{borderBottom:"1px solid rgba(224, 224, 224, 1)"},children:[(0,h.jsxs)(Z.Z,{className:f.cellName,component:"th",scope:"row",sx:{display:"flex",fontSize:"16px",borderBottom:"none"},children:[(0,h.jsx)("div",{style:{backgroundColor:e.color,width:"24px",height:"24px",marginRight:"16px",borderRadius:"2px"}}),e.name]}),(0,h.jsx)(Z.Z,{align:"right",sx:{borderBottom:"none",fontSize:"16px"},children:Math.abs(e.total).toFixed(2)})]},e.name)})),(0,h.jsxs)(S.Z,{className:"hiddenBorder",children:[(0,h.jsx)(Z.Z,{align:"left",sx:{fontSize:"16px"},children:"Expenses:"}),(0,h.jsx)(Z.Z,{align:"right",sx:{color:"#ff6596",fontSize:"16px"},children:Number(i).toFixed(2)})]}),(0,h.jsxs)(S.Z,{className:"hiddenBorder",children:[(0,h.jsx)(Z.Z,{align:"left",sx:{fontSize:"16px"},children:"Incomes:"}),(0,h.jsx)(Z.Z,{align:"right",sx:{color:"#24CCA7",fontSize:"16px"},children:Number(o).toFixed(2)})]})]})]})})]})},A={statisticsTitle:"DiagramTab_statisticsTitle__m8YvH",containerStats:"DiagramTab_containerStats__nOOU7"};function B(){var e=(0,d.v9)((function(e){return e.statistics.statistics})),r=(0,d.v9)((function(e){return e.global})).isLoading,t=(0,d.I0)();(0,c.useEffect)((function(){(0,a.Z)(l().mark((function r(){return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=5;break}return t((0,w.wt)(!0)),r.next=4,t((0,y.eS)());case 4:t((0,w.wt)(!1));case 5:case"end":return r.stop()}}),r)})))()}),[t]);var i=e&&(0,o.Z)((0,o.Z)({},e),{},{categoriesSummary:(0,n.Z)(null===e||void 0===e?void 0:e.categoriesSummary).sort((function(e,r){return e.name.localeCompare(r.name)}))});return(0,h.jsx)(h.Fragment,{children:!r&&(0,h.jsxs)("section",{className:A.sectionStats,children:[(0,h.jsx)("h1",{className:A.statisticsTitle,children:"Statistics"}),(0,h.jsxs)("div",{className:A.containerStats,children:[(0,h.jsx)(m,{statistics:i}),(0,h.jsx)(F,{statistics:i})]})]})})}function z(){return(0,h.jsx)(B,{})}}}]);
//# sourceMappingURL=statistic-page.bd0bbaf2.chunk.js.map