"use strict";

var scrollSettings = { height: 400, width: 1050 };
var groupSettings = { groupedColumns:["CustomerID"] };
var summaryRows = [{ showCaptionSummary:true, summaryColumns:[ { summaryType: ej.Grid.SummaryType.Average, displayColumn: "Freight", dataMember: "Freight", format: "{0:c2}", prefix: "Average = " } ], showTotalSummary: false }];
var columns = [
    { field: "OrderID", headerText: "Order ID", width: 75, textAlign: ej.TextAlign.Right },
    { field: "CustomerID", headerText: "Customer ID", width: 80 },
    { field: "EmployeeID", headerText: "Employee ID", width: 75, textAlign: ej.TextAlign.Right },
    { field: "Freight", width: 75, format: "{0:C}", textAlign: ej.TextAlign.Right },
    { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right },
];
ReactDOM.render(
    React.createElement(EJ.Grid, {dataSource: window.gridData, allowPaging: true, allowScrolling: true, scrollSettings: scrollSettings, showSummary: true, summaryRows: summaryRows, allowSorting: true, allowGrouping: true, groupSettings: groupSettings, columns: columns}
    ),
    document.getElementById('grid-captionsummary')
);

