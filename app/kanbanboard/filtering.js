"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
var filter = [                             
        { text: "Janet Issues", query: new ej.Query().where("Assignee", "equal", "Janet Leverling"), description: "Displays issues which matches the assignee as 'Janet Leverling'" },
        { text: "Andrew Issues", query: new ej.Query().where("Assignee", "equal", "Andrew Fuller"), description: "Displays issues which matches the assignee as 'Andrew Fuller'" }
    ];
ReactDOM.render(
    React.createElement(EJ.Kanban, {id: "filtering", dataSource: data, keyField: "Status", allowTitle: true, isResponsive: true, "fields-content": "Summary", "fields-primaryKey": "Id", allowSearching: true, allowFiltering: true, "fields-imageUrl": "ImgUrl", allowSelection: false, filterSettings: filter}, 
            React.createElement("columns", null, 
		React.createElement("column", {headerText: "Backlog", key: "Open"}), 
		React.createElement("column", {headerText: "In Progress", key: "InProgress"}), 
                React.createElement("column", {headerText: "Done", key: "Close"})
	    )
     ),
document.getElementById('kanbanboard-filtering')
);