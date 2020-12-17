"use strict";
 
var data = ej.DataManager(window.employeeView).executeLocal(ej.Query().take(8));
var pageSettings = { pageSize: 4 };
var columns = [
    { headerText: "Employee Image", template:"#columnTemplate", textAlign: "center", width: 110 },
    { field: "EmployeeID", headerText: "Employee ID", textAlign: ej.TextAlign.Right, width: 90 },
    { field: "FirstName", headerText: "First Name", width: 90 },
    { field: "LastName", headerText: "Last Name", width: 90 },
];
ReactDOM.render (
    <EJ.Grid dataSource={data} allowSorting={true} allowPaging={true} pageSettings={pageSettings} columns={columns}>
    </EJ.Grid>,	
    document.getElementById('grid-columntemplate')
);