"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
ReactDOM.render(
    <EJ.Kanban id="constraints" dataSource = {data} enableTotalCount={true} keyField = "Status" isResponsive={true} allowTitle={true} fields-content= "Summary" fields-primaryKey = "Id" fields-swimlaneKey = "Assignee" fields-imageUrl="ImgUrl" allowSelection={false}>
        <columns>
	    <column headerText="Backlog" key = "Open" />
	    <column headerText="In Progress" key = "InProgress" constraints-max = "2"/>
            <column headerText="Done" key="Close"/>
	</columns>
   </EJ.Kanban>,
document.getElementById('kanbanboard-constraints')
);