"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/progressbar/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/progressbar/rtl.html"}, "RTL"))
        )
    ),
document.getElementById('progressbar')
);