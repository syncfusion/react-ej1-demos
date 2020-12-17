"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/rating/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/rating/precision.html"}, "Precision")), 
            React.createElement("li", null, React.createElement("a", {href: "app/rating/orientation.html"}, "Orientation"))
        )
    ),
document.getElementById('rating')
);