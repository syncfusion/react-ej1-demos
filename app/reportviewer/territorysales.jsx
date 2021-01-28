"use strict";
ReactDOM.render(  
    <EJ.ReportViewer
		id = "territoryReportViewer"
		reportServiceUrl = {window.baseurl + 'api/ReportViewer'}
		reportServerUrl = {'//104.207.134.201/reportserver'}
		processingMode = {"remote"}
		reportPath = {"/SSRSSamples2/Territory Sales new"}>
	</EJ.ReportViewer>,
	document.getElementById('territorysales')
);