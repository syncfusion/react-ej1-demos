"use strict";

ReactDOM.render(   
    React.createElement(EJ.Autocomplete, {id: "autofill", width: "100%", dataSource: auto_complete_carList, watermarkText: "Select a car", enableAutoFill: true}
	),
	document.getElementById('autocomplete-autofill')
);