"use strict";

ReactDOM.render(   
    <EJ.Autocomplete id="autofill" width="100%" dataSource = {auto_complete_carList} watermarkText="Select a car" enableAutoFill={true}>
	</EJ.Autocomplete>,
	document.getElementById('autocomplete-autofill')
);