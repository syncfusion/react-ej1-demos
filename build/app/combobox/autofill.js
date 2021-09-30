"use strict";

ReactDOM.render(   
    React.createElement(EJ.ComboBox, {id: "autofill", width: "100%", dataSource: auto_complete_carList, placeholder: "Select a car", autofill: true}
	),
	document.getElementById('combobox-autofill')
);