"use strict";
ReactDOM.render(  
    React.createElement(EJ.ReportViewer, {
		id: "territoryReportViewer", 
		reportServiceUrl: window.baseurl + 'api/ReportViewer', 
		reportServerUrl: '//104.207.134.201/reportserver', 
		processingMode: "remote", 
		reportPath: "/SSRSSamples2/Territory Sales new"}
	),
	document.getElementById('territorysales')
);