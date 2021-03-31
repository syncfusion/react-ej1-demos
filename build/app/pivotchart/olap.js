"use strict";
 var Olap_dataSource={
     data: "//bi.syncfusion.com/olap/msmdpump.dll", 
     reportName: "default report",
     enableAdvancedFilter: false,
     catalog: "Adventure Works DW 2008 SE", //"Adventure Works DW 2008 SEtandard Edition
     cube: "Adventure Works", rows: [{ fieldName: "[Date].[Fiscal]" }], columns: [{ fieldName: "[Customer].[Customer Geography]" }],
     values: [{ measures: [{ fieldName: "[Measures].[Internet Sales Amount]" }], axis: "columns" }]
       
 };
 var chart_size={ height: "460px", width: "100%" };
 var def_commonSeriesOption={ enableAnimation: true, type: ej.PivotChart.ChartTypes.Column, tooltip: { visible: true }};
 var zoom = { enableScrollbar : true};
ReactDOM.render(
     React.createElement(EJ.PivotChart, {id: "olap", 	 
     dataSource: Olap_dataSource, 
	 commonSeriesOptions: def_commonSeriesOption, 
	 isResponsive: true, 	 
	 size: chart_size, 
	 zooming: zoom
     }
     ),
     document.getElementById('pivotchart-olap')
);


