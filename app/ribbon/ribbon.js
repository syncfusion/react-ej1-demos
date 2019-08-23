"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%"}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/ribbon/default.html"}, "Default")), 
             React.createElement("li", null, React.createElement("a", {href: "app/ribbon/resize.html"}, "Resize")), 			 
			 React.createElement("li", null, React.createElement("a", {href: "app/ribbon/quickaccesstoolbar.html"}, "Quick Access Toolbar"))
        )
    ),
		  document.getElementById('ribbon')
);



