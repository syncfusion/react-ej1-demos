"use strict";

ReactDOM.render(   
    <EJ.ComboBox id="filtering" width="100%" dataSource = {combo_filtering} fields={combo_filtering_fields} filtering={combo_filtering_event} placeholder="Select a car" allowFiltering={true}>
	</EJ.ComboBox>,
	document.getElementById('combobox-filtering')
);