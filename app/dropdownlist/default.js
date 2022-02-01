"use strict";

ReactDOM.render(
    React.createElement(EJ.DropDownList, {targetID: "carsList", watermarkText: "Select a car", width: "100%"}, 
        React.createElement("div", {id: "carsList"}, 
            React.createElement("ul", null, 
                React.createElement("li", null, "Audi A4"), 
                React.createElement("li", null, "Audi A5"), 
                React.createElement("li", null, "Audi A6"), 
                React.createElement("li", null, "Audi A7"), 
                React.createElement("li", null, "Audi A8")
            )

        )
    ),
		  document.getElementById('dropdownlist-default')
);