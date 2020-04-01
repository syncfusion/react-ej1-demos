"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: false}, 
        React.createElement("ul", null, 
			React.createElement("li", null, React.createElement("a", {href: "app/pivotgauge/relational.html"}, "Relational")), 
			React.createElement("li", null, React.createElement("a", {href: "app/pivotgauge/olap.html"}, "OLAP"))
        )
    ),
    document.getElementById('pivotgauge')
);
