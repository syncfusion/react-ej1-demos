"use strict";
 
var pageSettings = { pageSize:3 };
var columns = [
    { headerText: "Photo", width: 30 },
    { headerText: 'Employee Details', width: 70 }
];

ReactDOM.render (
    React.createElement(EJ.Grid, {dataSource: window.employeeData, allowPaging: true, pageSettings: pageSettings, rowTemplate: "#grid-rowtemplate-templateData", columns: columns}
    ),	
    document.getElementById('grid-rowtemplate')
);