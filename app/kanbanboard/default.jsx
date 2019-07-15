"use strict";

var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
ReactDOM.render(
<EJ.Kanban id="default" dataSource={data} keyField="Status" isResponsive={true} allowTitle={true} fields-content="Summary" fields-primaryKey="Id" fields-imageUrl="ImgUrl" allowSelection={false}>
  <columns>
	<column headerText="Backlog" key="Open"></column>
        <column headerText="In Progress" key="InProgress"></column>
        <column headerText="Done" key="Close"></column>
 </columns>
 </EJ.Kanban>,
   document.getElementById('kanbanboard-default')
);