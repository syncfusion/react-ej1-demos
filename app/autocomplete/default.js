"use strict";

ReactDOM.render(   
	React.createElement(EJ.Autocomplete, {id: "default", width: "100%", dataSource: auto_complete_carList, watermarkText: "Select a car"}
	),
	document.getElementById('autocomplete-default')
);