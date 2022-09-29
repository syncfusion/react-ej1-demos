"use strict";
 
ReactDOM.render(
React.createElement(EJ.TreeGrid, {dataSource: projectData, childMapping: "subtasks", columns: columns, treeColumnIndex: 1}
   
),
   document.getElementById('treegrid-default')
);