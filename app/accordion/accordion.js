"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/accordion/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/accordion/multipleopen.html"}, "Multiple open")), 
            React.createElement("li", null, React.createElement("a", {href: "app/accordion/icons.html"}, "Icons")), 
            React.createElement("li", null, React.createElement("a", {href: "app/accordion/rtl.html"}, "RTL"))
        )
    ),
		  document.getElementById('accordion')
);



