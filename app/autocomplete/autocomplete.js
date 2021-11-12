"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/autocomplete/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/autocomplete/multivalue.html"}, "Multi Value")), 
            React.createElement("li", null, React.createElement("a", {href: "app/autocomplete/grouping.html"}, "Grouping")), 
            React.createElement("li", null, React.createElement("a", {href: "app/autocomplete/template.html"}, "Template")), 
            React.createElement("li", null, React.createElement("a", {href: "app/autocomplete/autofill.html"}, "Auto fill")), 
            React.createElement("li", null, React.createElement("a", {href: "app/autocomplete/rtl.html"}, "RTL")), 
            React.createElement("li", null, React.createElement("a", {href: "app/autocomplete/multicolumn.html"}, "Multi Column"))
        )
    ),
	document.getElementById('autocomplete')
);