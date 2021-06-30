"use strict";

ReactDOM.render(
  React.createElement("div", null, 
    React.createElement("div", {className: "lblTitle"}, "Select a country"), React.createElement("br", null), 
  	React.createElement(EJ.ListBox, {id: "grouping", width: "100%", dataSource: skillset, fields: window.skillFields}
    )
  ),
  document.getElementById('listbox-grouping')
);