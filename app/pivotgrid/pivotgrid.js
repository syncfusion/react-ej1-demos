"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
		   
			React.createElement("li", null, React.createElement("a", {href: "app/pivotgrid/relational.html"}, "Relational")), 
			React.createElement("li", null, React.createElement("a", {href: "app/pivotgrid/olap.html"}, "OLAP"))
        )
    ),
    document.getElementById('pivotgrid')
);
