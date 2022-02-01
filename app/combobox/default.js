"use strict";

ReactDOM.render(   
	React.createElement(EJ.ComboBox, {id: "default", width: "100%", dataSource: auto_complete_carList, placeholder: "Select a car"}
	),
	document.getElementById('combobox-default')
);