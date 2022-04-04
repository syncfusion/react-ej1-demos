"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/tab/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tab/images.html"}, "Images")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tab/headerorientation.html"}, "Header Orientation")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tab/closebutton.html"}, "Close Button")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tab/scrolltab.html"}, "Scroll Tab")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tab/rtl.html"}, "RTL"))
        )
    ),
document.getElementById('tab')
);
