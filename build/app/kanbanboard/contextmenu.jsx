"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
var colormap = {
           "#cb2027": "Bug,Story",
           "#67ab47": "Improvement",
           "#fbae19": "Epic",
	   "#6a5da8": "Others"
    };
var editItems = [
     { field: "Id", editType: ej.Kanban.EditingType.String,validationRules: { required: true, number: true }},
     { field: "Status", editType: ej.Kanban.EditingType.Dropdown },
     { field: "Assignee", editType: ej.Kanban.EditingType.Dropdown },
     { field: "Estimate", editType: ej.Kanban.EditingType.Numeric, editParams: { decimalPlaces: 2 },validationRules: {range: [0, 1000]}},
     { field: "Summary", editType: ej.Kanban.EditingType.TextArea,validationRules: { required: true}}
];
ReactDOM.render(
    <EJ.Kanban id= "contextmenu" dataSource = {data} keyField = "Status" allowTitle={true} isResponsive={true} fields-content= "Summary" fields-primaryKey = "Id" fields-priority="RankId" fields-swimlaneKey="Assignee" fields-tag="tags" fields-color="type" fields-imageUrl="ImgUrl" cardSettings-colorMapping={colormap} contextMenuSettings-enable={true} editSettings-editItems={editItems} editSettings-allowEditing={true} editSettings-allowAdding={true}>
                 <columns>
		     <column headerText="Backlog" key="Open" />
		     <column headerText="In Progress" key="InProgress" />
                     <column headerText="Done" key="Close"/>
		</columns>
     </EJ.Kanban>,
document.getElementById('kanbanboard-contextmenu')
);