"use strict";
 
var pageSettings = { pageSize:3 };
var columns = [
    { headerText: "Photo", width: 30 },
    { headerText: 'Employee Details', width: 70 }
];

ReactDOM.render (
    <EJ.Grid dataSource={window.employeeData} allowPaging={true} pageSettings={pageSettings} rowTemplate="#grid-rowtemplate-templateData" columns={columns}>
    </EJ.Grid>,	
    document.getElementById('grid-rowtemplate')
);