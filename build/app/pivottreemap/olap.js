"use strict";
 var Olap_dataSource={
     data: "//bi.syncfusion.com/olap/msmdpump.dll", 
     reportName: "default report",
     enableAdvancedFilter: false,
     catalog: "Adventure Works DW 2008 SE", //"Adventure Works DW 2008 SEtandard Edition
     cube: "Adventure Works", rows: [{ fieldName: "[Date].[Fiscal]" }], columns: [{ fieldName: "[Customer].[Customer Geography]" }],
     values: [{ measures: [{ fieldName: "[Measures].[Internet Sales Amount]" }], axis: "columns" }]
       
 };
ReactDOM.render(
     React.createElement(EJ.PivotTreeMap, {id: "pivottreemap-olap", 	 
     dataSource: Olap_dataSource
     }
     ),
     document.getElementById('pivottreemap-olap')
);


