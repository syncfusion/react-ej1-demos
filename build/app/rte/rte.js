"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/rte/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/rte/fileandimagebrowser.html"}, "File & Image browser")), 
            React.createElement("li", null, React.createElement("a", {href: "app/rte/localization.html"}, "Localization")), 
            React.createElement("li", null, React.createElement("a", {href: "app/rte/rtl.html"}, "RTL"))
        )
    ),
document.getElementById('rte')
);
