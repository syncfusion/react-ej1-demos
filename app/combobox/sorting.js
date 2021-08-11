"use strict";

ReactDOM.render(   
    React.createElement(EJ.ComboBox, {id: "sorting", width: "100%", dataSource: auto_complete_carList, placeholder: "Select a car", autofill: true, sortOrder: "descending"}
	),
	document.getElementById('combobox-sorting')
);