"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%"}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/daterangepicker/default.html"}, "Default"))
        )
    ),
		  document.getElementById('daterangepicker')
);