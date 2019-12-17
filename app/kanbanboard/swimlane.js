"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
ReactDOM.render(
    React.createElement(EJ.Kanban, {id: "swimlane", dataSource: data, keyField: "Status", allowTitle: true, isResponsive: true, "fields-content": "Summary", "fields-primaryKey": "Id", "fields-swimlaneKey": "Assignee", "fields-imageUrl": "ImgUrl", allowSelection: false}, 
             React.createElement("columns", null, 
		  React.createElement("column", {headerText: "Backlog", key: "Open"}), 
	          React.createElement("column", {headerText: "In Progress", key: "InProgress"}), 
                  React.createElement("column", {headerText: "Done", key: "Close"})
	 )
     ),
document.getElementById('kanbanboard-swimlane')
);