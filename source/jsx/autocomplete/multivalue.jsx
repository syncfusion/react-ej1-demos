"use strict";

ReactDOM.render(  
    <EJ.Autocomplete id="multivalue" width="100%" dataSource = {autocomplete_languages} watermarkText="Select skills" showPopupButton={true} 
    multiSelectMode={ej.MultiSelectMode.Delimiter}>
	</EJ.Autocomplete>,
	document.getElementById('autocomplete-multivalue')
);