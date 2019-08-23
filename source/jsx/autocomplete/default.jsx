"use strict";

ReactDOM.render(   
	<EJ.Autocomplete id="default" width="100%" dataSource = {auto_complete_carList} watermarkText="Select a car">
	</EJ.Autocomplete>,
	document.getElementById('autocomplete-default')
);