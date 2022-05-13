"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/button/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/button/checkbox.html"}, "CheckBox")), 
             React.createElement("li", null, React.createElement("a", {href: "app/button/radiobutton.html"}, "RadioButton")), 
             React.createElement("li", null, React.createElement("a", {href: "app/button/togglebutton.html"}, "ToggleButton")), 
              React.createElement("li", null, React.createElement("a", {href: "app/button/splitbutton.html"}, "SplitButton")), 
              React.createElement("li", null, React.createElement("a", {href: "app/button/groupbutton.html"}, "GroupButton"))
        )
    ),
		  document.getElementById('button')
);
