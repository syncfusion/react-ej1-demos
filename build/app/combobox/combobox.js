"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/combobox/default.html"}, "Default")), 
			React.createElement("li", null, React.createElement("a", {href: "app/combobox/autofill.html"}, "Auto Fill")), 
            React.createElement("li", null, React.createElement("a", {href: "app/combobox/icons.html"}, "Icons")), 
            React.createElement("li", null, React.createElement("a", {href: "app/combobox/cascading.html"}, "Cascading")), 
            React.createElement("li", null, React.createElement("a", {href: "app/combobox/grouping.html"}, "Grouping")), 
            React.createElement("li", null, React.createElement("a", {href: "app/combobox/template.html"}, "Template")), 
            React.createElement("li", null, React.createElement("a", {href: "app/combobox/rtl.html"}, "RTL")), 
			React.createElement("li", null, React.createElement("a", {href: "app/combobox/filtering.html"}, "Filtering")), 
			React.createElement("li", null, React.createElement("a", {href: "app/combobox/sorting.html"}, "Sorting"))
        )
    ),
document.getElementById('combobox')
);



