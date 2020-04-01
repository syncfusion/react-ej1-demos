"use strict";
ReactDOM.render(  
    React.createElement(EJ.ReportViewer, {
		id: "groupingReportViewer", 
		reportServiceUrl: window.baseurl + 'api/ReportViewer', 
		processingMode: "remote", 
		reportPath: 'GroupingAgg.rdl'}
	),
	document.getElementById('groupingaggregate')
);