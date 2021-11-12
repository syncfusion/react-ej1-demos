"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/grid/defaultfunctionalities.html"}, "Default Functionalities")), 
            React.createElement("li", null, React.createElement("a", {href: "app/grid/columntemplate.html"}, "Column Template")), 
            React.createElement("li", null, React.createElement("a", {href: "app/grid/rowtemplate.html"}, "Row Template")), 
            React.createElement("li", null, React.createElement("a", {href: "app/grid/celledittype.html"}, "Cell Edit Type")), 
            React.createElement("li", null, React.createElement("a", {href: "app/grid/multisorting.html"}, "Multi Sorting")), 
            React.createElement("li", null, React.createElement("a", {href: "app/grid/filtering.html"}, "Filtering")), 
            React.createElement("li", null, React.createElement("a", {href: "app/grid/grouping.html"}, "Grouping")), 
            React.createElement("li", null, React.createElement("a", {href: "app/grid/captionsummary.html"}, "Caption Summary"))
        )
    ),
    document.getElementById('grid')
);
