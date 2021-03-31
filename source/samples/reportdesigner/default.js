"use strict";
ReactDOM.render(
	React.createElement(EJ.ReportDesigner, {
		id: 'designerId',
		serviceUrl: window.baseurl + 'api/ReportDesigner', 
		create: $.proxy(controlInitialized, this)
	}),
	document.getElementById('container')
);

function controlInitialized(args) {
	var designer = $('#designerId').data('ejReportDesigner');
	designer.openReport('/Catagory2/Invoice');
}