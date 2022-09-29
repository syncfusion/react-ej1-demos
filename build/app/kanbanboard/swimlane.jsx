"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
ReactDOM.render(
    <EJ.Kanban id="swimlane" dataSource = {data} keyField = "Status" allowTitle={true} isResponsive={true} fields-content= "Summary" fields-primaryKey = "Id" fields-swimlaneKey="Assignee" fields-imageUrl="ImgUrl" allowSelection={false}>
             <columns>
		  <column headerText="Backlog" key="Open" />
	          <column headerText="In Progress" key="InProgress" />
                  <column headerText="Done" key="Close"/>
	 </columns>
     </EJ.Kanban>,
document.getElementById('kanbanboard-swimlane')
);