"use strict";
var path =  window.baseurl + "api/PdfViewer";
var local = 1;
ReactDOM.render(
React.createElement(EJ.PdfViewer, {serviceUrl: path, id: "pdfviewerControl", isResponsive: true, 
pdfService: local}
),
document.getElementById('pdfviewercntl')
);