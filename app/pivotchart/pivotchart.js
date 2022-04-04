"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
			React.createElement("li", null, React.createElement("a", {href: "app/pivotchart/relational.html"}, "Relational")), 
			React.createElement("li", null, React.createElement("a", {href: "app/pivotchart/olap.html"}, "OLAP"))
			
        )
    ),
    document.getElementById('pivotchart')
);
