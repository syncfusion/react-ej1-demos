"use strict";

var scrollSettings = { height: 400, width: 1050 };
var groupSettings = { groupedColumns:["CustomerID"] };
var columns = [
    { field: "OrderID", headerText: "Order ID", width: 75, textAlign: ej.TextAlign.Right },
    { field: "CustomerID", headerText: "Customer ID", width: 80 },
    { field: "EmployeeID", headerText: "Employee ID", width: 75, textAlign: ej.TextAlign.Right },
    { field: "Freight", width: 75, format: "{0:C}", textAlign: ej.TextAlign.Right },
    { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right },
];
ReactDOM.render(
    <EJ.Grid dataSource={window.gridData} allowPaging={true} allowScrolling={true} scrollSettings={scrollSettings} allowGrouping={true} groupSettings={groupSettings} columns={columns} >
    </EJ.Grid>,
    document.getElementById('grid-grouping')
);

