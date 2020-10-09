"use strict";

var sheets = [
{ rangeSettings: [{ dataSource: window.defaultData }] }
];

var importSettings = {importMapper:window.baseurl + "api/Spreadsheet/Import"};
var exportSettings = {
                      excelUrl:window.baseurl + "api/Spreadsheet/ExcelExport",
                      csvUrl:window.baseurl + "api/Spreadsheet/CsvExport",
                      pdfUrl:window.baseurl + "api/Spreadsheet/PdfExport"
					 };

function loadComplete(args) {
            var xlFormat = this.XLFormat;
			if(!this.isImport){
				this.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);          
				xlFormat.format({ "style": { "font-weight": "bold" } }, "A1:H1");
				xlFormat.format({ "type": "currency" }, "E2:H11");
            }
        }

ReactDOM.render(
    <EJ.Spreadsheet allowFormulaBar={false} importSettings= {importSettings} exportSettings={exportSettings} scrollSettings-width="100%"  scrollSettings-height="100%" scrollSettings-isResponsive={true} showRibbon={true} sheets={sheets} loadComplete="loadComplete"></EJ.Spreadsheet>,
    document.getElementById('spreadsheet-default')
);