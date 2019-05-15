"use strict";

ReactDOM.render(
  React.createElement("div", null, 
    React.createElement("div", {className: "lblTitle"}, "Select a country"), React.createElement("br", null), 
		React.createElement(EJ.ListBox, {id: "rtl", width: "100%", dataSource: listbox_rtl, fields: listbox_rtl_fields, enableRTL: true}
    )
  ),
	document.getElementById('listbox-rtl')
);