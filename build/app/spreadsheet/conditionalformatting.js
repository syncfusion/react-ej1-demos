"use strict";

var sheets = [
{ 
    mergeCells:["A1:A5","D1:D5","G1:G5","G7:G11","A7:A11","D7:D11"],
    cFormatRule:[{action:"greaterthan",inputs:["5000"],color:"redft",range:"E7:E11"},
                 {action:"lessthan",inputs:["30"],color:"yellowft",range:"H1:H5"},
                 {action:"between",inputs:["400", "500"],color:"greenft",range:"B7:B11"},
                 {action:"equalto",inputs:["20"],color:"redf",range:"H7:H11"},
                 {action:"textcontains",inputs:["loafers"],color:"redt",range:"B1:B5"},
                 {action:"dateoccur",inputs:["02/04/2014"],color:"redft",range:"E1:E5"},
    ],
    rangeSettings: [{ dataSource: window.conditionalFormat, showHeader: false }] 
}
];

function loadComplete(args) {
            var xlFormat = this.XLFormat;
            this.sheetRename("Conditional Formatting");
            this.setWidthToColumns([ 165, 130, 37, 165, 130, 37, 129, 132 ]);
            xlFormat.format({ "style": { "font-weight": "bold", "font-size": "10pt", "vertical-align": "middle", "text-align": "center" } }, "A1:A13");
            xlFormat.format({ "style": { "font-weight": "bold", "font-size": "10pt", "vertical-align": "middle", "text-align": "center" } }, "D1:D13");
            xlFormat.format({ "style": { "font-weight": "bold", "font-size": "10pt", "vertical-align": "middle", "text-align": "center" } }, "G1:G7");
        }

ReactDOM.render(
    React.createElement(EJ.Spreadsheet, {allowFormulaBar: false, enableContextMenu: false, "scrollSettings-width": "100%", "scrollSettings-height": "100%", "scrollSettings-isResponsive": true, showRibbon: false, sheets: sheets, loadComplete: "loadComplete"}),
    document.getElementById('spreadsheet-conditionalformatting')
);