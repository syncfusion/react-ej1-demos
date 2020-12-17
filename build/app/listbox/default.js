"use strict";

ReactDOM.render(
  React.createElement("div", null, 
    React.createElement("div", {className: "lblTitle"}, "Select a bike"), React.createElement("br", null), 
		React.createElement(EJ.ListBox, {id: "default", width: "100%", dataSource: BikeList, fields: window.listBoxFields}
    )
  ),
	document.getElementById('listbox-default')
);