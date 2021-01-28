"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/treeview/default.html"}, "Default")), 
			 React.createElement("li", null, React.createElement("a", {href: "app/treeview/checkbox.html"}, "Checkbox")), 
             React.createElement("li", null, React.createElement("a", {href: "app/treeview/dragdrop.html"}, "Drag Drop")), 
			  React.createElement("li", null, React.createElement("a", {href: "app/treeview/loadondemand.html"}, "Load On Demand")), 
            React.createElement("li", null, React.createElement("a", {href: "app/treeview/template.html"}, "Template"))
        )
    ),
		  document.getElementById('treeview')
);



