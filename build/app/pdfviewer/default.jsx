"use strict";
var path =  window.baseurl + "api/PdfViewer";
var local = 1;
ReactDOM.render(
<EJ.PdfViewer serviceUrl={path} id="pdfviewerControl" isResponsive={true}
pdfService={local}>
</EJ.PdfViewer>,
document.getElementById('pdfviewercntl')
);