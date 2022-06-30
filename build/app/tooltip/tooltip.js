"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/tooltip/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tooltip/position.html"}, "Position")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tooltip/forms.html"}, "Forms")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tooltip/template.html"}, "Template")), 
            React.createElement("li", null, React.createElement("a", {href: "app/tooltip/ajaxcontent.html"}, "Ajax Content"))
        )
    ),
document.getElementById('tooltip')
);