"use strict";
ReactDOM.render(
	<EJ.ReportDesigner id = 'designerId' serviceUrl = {window.baseurl + 'api/ReportDesigner'} create = "controlInitialized">
	</EJ.ReportDesigner>,
	document.getElementById('container')
);

function controlInitialized(args) {
	var designer = $('#designerId').data('ejReportDesigner');
	designer.openReport('/Catagory2/Invoice');
}