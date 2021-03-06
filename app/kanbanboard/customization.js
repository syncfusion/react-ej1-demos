"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
var colormap = {
        "#cb2027": "Bug,Story",
        "#67ab47": "Improvement",
        "#fbae19": "Epic",
	"#6a5da8": "Others"
   };
function queryCellInfo(args) {
	$($(args.card).find(".e-primarykey")).html("<a href='#'>Card "+args.data.Id+"</a>");
 }
ReactDOM.render(
    React.createElement(EJ.Kanban, {id: "customization", dataSource: data, keyField: "Status", isResponsive: true, allowTitle: true, "fields-content": "Summary", "fields-primaryKey": "Id", "fields-tag": "Tags", "fields-color": "Type", "fields-imageUrl": "ImgUrl", "fields-priority": "RankId", "cardSettings-colorMapping": colormap, allowSelection: false, queryCellInfo: queryCellInfo}, 
         React.createElement("columns", null, 
	      React.createElement("column", {headerText: "Backlog", key: "Open"}), 
	      React.createElement("column", {headerText: "In Progress", key: "InProgress"}), 
              React.createElement("column", {headerText: "Done", key: "Close"})
	)
 ),
document.getElementById('kanbanboard-customization')
);