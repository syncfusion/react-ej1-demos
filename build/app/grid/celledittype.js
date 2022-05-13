"use strict";

var editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Add, ej.Grid.ToolBarItems.Edit, ej.Grid.ToolBarItems.Delete, ej.Grid.ToolBarItems.Update, ej.Grid.ToolBarItems.Cancel] };
var columns = [
    { field: "OrderID", isPrimaryKey:true, headerText: "Order ID", width: 75, validationRules: { required: true, number: true }, textAlign: ej.TextAlign.Right },
    { field: "CustomerID", headerText: "Customer ID", width: 80 },
    { field: "EmployeeID", headerText: "Employee ID", width: 75, textAlign: ej.TextAlign.Right },
    { field: "Freight", width: 75, format: "{0:C}", textAlign: ej.TextAlign.Right },
    { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right },
];
ReactDOM.render(
    React.createElement(EJ.Grid, {dataSource: window.gridData, allowPaging: true, editSettings: editSettings, toolbarSettings: toolbarSettings, columns: columns}
    ),
    document.getElementById('grid-celledittype')
);

