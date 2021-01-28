"use strict";

ReactDOM.render(  
    React.createElement(EJ.Autocomplete, {id: "multivalue", width: "100%", dataSource: autocomplete_languages, watermarkText: "Select skills", showPopupButton: true, 
    multiSelectMode: ej.MultiSelectMode.Delimiter}
	),
	document.getElementById('autocomplete-multivalue')
);