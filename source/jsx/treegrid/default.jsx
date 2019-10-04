"use strict";
 
ReactDOM.render(
<EJ.TreeGrid dataSource={projectData} childMapping="subtasks" columns={columns} treeColumnIndex={1}>
   
</EJ.TreeGrid>,
   document.getElementById('treegrid-default')
);