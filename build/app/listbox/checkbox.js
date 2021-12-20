"use strict";

ReactDOM.render(
  React.createElement("div", null, 
    React.createElement("div", {className: "lblTitle"}, "Select a bike"), React.createElement("br", null), 
    React.createElement(EJ.ListBox, {id: "checkbox", width: "100%", dataSource: BikeList, showCheckbox: true}
    )
  ),
	document.getElementById('listbox-checkbox')
);