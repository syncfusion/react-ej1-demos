"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
var colormap = {
         "#cb2027": "Bug,Story",
         "#67ab47": "Improvement",
         "#fbae19": "Epic",
         "#6a5da8": "Others"
};
ReactDOM.render(
    React.createElement(EJ.Kanban, {id: "cardTemplate", dataSource: data, keyField: "Status", allowTitle: true, isResponsive: true, "fields-primaryKey": "Id", "fields-color": "Type", "cardSettings-template": "#cardtemplate", "cardSettings-colorMapping": colormap, allowSelection: false}, 
      React.createElement("columns", null, 
	React.createElement("column", {headerText: "Backlog", key: "Open"}), 
        React.createElement("column", {headerText: "In Progress", key: "InProgress"}), 
        React.createElement("column", {headerText: "Done", key: "Close"})
     )
 ),
 document.getElementById('kanbanboard-cardtemplate')
);