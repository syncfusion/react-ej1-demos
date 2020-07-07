"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
var colormap = {
         "#cb2027": "Bug,Story",
         "#67ab47": "Improvement",
         "#fbae19": "Epic",
         "#6a5da8": "Others"
};
ReactDOM.render(
    <EJ.Kanban id="cardTemplate" dataSource = {data} keyField = "Status" allowTitle={true} isResponsive={true} fields-primaryKey = "Id" fields-color = "Type" cardSettings-template="#cardtemplate" cardSettings-colorMapping={colormap} allowSelection={false}>
      <columns>
	<column headerText="Backlog" key = "Open" />
        <column headerText="In Progress" key = "InProgress"/>
        <column headerText="Done" key="Close"/>
     </columns>
 </EJ.Kanban>,
 document.getElementById('kanbanboard-cardtemplate')
);