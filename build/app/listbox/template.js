"use strict";

ReactDOM.render(
  React.createElement("div", null, 
    React.createElement("div", {className: "lblTitle"}, "Select an expert"), React.createElement("br", null), 
		  React.createElement(EJ.ListBox, {id: "template", width: "100%", dataSource: listbox_template, template: "<div><img class=\"eimg\" src=\"content/images/Employees/${eimg}.png\" alt=\"employee\"/><div class=\"ename\"> ${text} </div><div class=\"desig\"> ${desig} </div><div class=\"cont\"> ${country} </div></div>"}
      )
    ),
		document.getElementById('listbox-template')
);