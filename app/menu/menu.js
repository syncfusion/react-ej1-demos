"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/menu/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/menu/verticalmenu.html"}, "Vertical Menu")), 
            React.createElement("li", null, React.createElement("a", {href: "app/menu/contextmenu.html"}, "Context Menu")), 
            React.createElement("li", null, React.createElement("a", {href: "app/menu/template.html"}, "Template")), 
            React.createElement("li", null, React.createElement("a", {href: "app/menu/centermenu.html"}, "Center Menu")), 
            React.createElement("li", null, React.createElement("a", {href: "app/menu/rtl.html"}, "RTL"))
        )
    ),
document.getElementById('menu')
);