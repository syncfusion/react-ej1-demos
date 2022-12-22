"use strict";

ReactDOM.render(   
    React.createElement(EJ.ComboBox, {id: "filtering", width: "100%", dataSource: combo_filtering, fields: combo_filtering_fields, filtering: combo_filtering_event, placeholder: "Select a car", allowFiltering: true}
	),
	document.getElementById('combobox-filtering')
);