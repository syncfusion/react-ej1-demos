"use strict";
ReactDOM.render(  
    <EJ.ReportViewer
		id = "groupingReportViewer"
		reportServiceUrl = {window.baseurl + 'api/ReportViewer'}
		processingMode = {"remote"}
		reportPath = {'GroupingAgg.rdl'}>
	</EJ.ReportViewer>,
	document.getElementById('groupingaggregate')
);