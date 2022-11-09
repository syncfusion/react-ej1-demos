"use strict";

ReactDOM.render(   
    <EJ.Autocomplete id="grouping" width="100%" dataSource = {autocomplete_grouping} watermarkText="Select a country" filterType= { ej.filterType.Contains} 
    itemsCount={7} highlightSearch={true} fields={auto_group_fields}>
	</EJ.Autocomplete>,
	document.getElementById('autocomplete-grouping')
);