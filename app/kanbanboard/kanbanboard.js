"use strict";
ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/kanbanboard/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/kanbanboard/swimlane.html"}, "Swimlane")), 
			React.createElement("li", null, React.createElement("a", {href: "app/kanbanboard/customization.html"}, "Customization")), 
			React.createElement("li", null, React.createElement("a", {href: "app/kanbanboard/cardtemplate.html"}, "Card Template")), 
			React.createElement("li", null, React.createElement("a", {href: "app/kanbanboard/constraints.html"}, "Constraints")), 
			React.createElement("li", null, React.createElement("a", {href: "app/kanbanboard/contextmenu.html"}, "Context Menu")), 
			React.createElement("li", null, React.createElement("a", {href: "app/kanbanboard/dialogediting.html"}, "Dialog Editing")), 
			React.createElement("li", null, React.createElement("a", {href: "app/kanbanboard/filtering.html"}, "Filtering"))
        )
    ),
	document.getElementById('kanbanboard')
);