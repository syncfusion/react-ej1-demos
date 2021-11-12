"use strict";

ReactDOM.render(   
    <EJ.ComboBox id="grouping" width="100%" dataSource = {autocomplete_grouping} placeholder="Select a country" 
    fields={combo_group_fields}>
	</EJ.ComboBox>,
	document.getElementById('combobox-grouping')
);