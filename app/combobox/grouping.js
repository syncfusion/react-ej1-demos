"use strict";

ReactDOM.render(   
    React.createElement(EJ.ComboBox, {id: "grouping", width: "100%", dataSource: autocomplete_grouping, placeholder: "Select a country", 
    fields: combo_group_fields}
	),
	document.getElementById('combobox-grouping')
);