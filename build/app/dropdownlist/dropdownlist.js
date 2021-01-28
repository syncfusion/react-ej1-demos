"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/checkbox.html"}, "Checkbox")), 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/multiselect.html"}, "Multi Select")), 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/icons.html"}, "Icons")), 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/cascading.html"}, "Cascading")), 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/grouping.html"}, "Grouping")), 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/template.html"}, "Template")), 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/virtualscrolling.html"}, "Virtual Scrolling")), 
            React.createElement("li", null, React.createElement("a", {href: "app/dropdownlist/rtl.html"}, "RTL"))
        )
    ),
document.getElementById('dropdownlist')
);



