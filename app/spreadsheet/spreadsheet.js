"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/spreadsheet/default.html"}, "Default Functionalities")), 
            React.createElement("li", null, React.createElement("a", {href: "app/spreadsheet/conditionalformatting.html"}, "Conditional Formatting")), 
            React.createElement("li", null, React.createElement("a", {href: "app/spreadsheet/celldatabinding.html"}, "Cell Data Binding"))
        )
    ),
document.getElementById('spreadsheet')
);