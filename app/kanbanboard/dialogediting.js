"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
var editItems = [
          { field: "Id", editType: ej.Kanban.EditingType.String,validationRules: { required: true, number: true }},
          { field: "Status", editType: ej.Kanban.EditingType.Dropdown },
          { field: "Assignee", editType: ej.Kanban.EditingType.Dropdown },
          { field: "Estimate", editType: ej.Kanban.EditingType.Numeric, editParams: { decimalPlaces: 2 },validationRules: {range: [0, 1000]}},
          { field: "Summary", editType: ej.Kanban.EditingType.TextArea,validationRules: { required: true}}
];
                        
ReactDOM.render(
    React.createElement(EJ.Kanban, {id: "dialogediting", dataSource: data, keyField: "Status", allowTitle: true, isResponsive: true, "fields-content": "Summary", "fields-primaryKey": "Id", "fields-imageUrl": "ImgUrl", "editSettings-editItems": editItems, "editSettings-allowEditing": true, "editSettings-allowAdding": true}, 
            React.createElement("columns", null, 
	          React.createElement("column", {headerText: "Backlog", key: "Open", showAddButton: true}), 
		  React.createElement("column", {headerText: "In Progress", key: "InProgress", showAddButton: true}), 
                  React.createElement("column", {headerText: "Done", key: "Close", showAddButton: true})
	    )
   ),
document.getElementById('kanbanboard-dialogediting')
);