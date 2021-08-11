"use strict";

ReactDOM.render(   
	<EJ.ComboBox id="default" width="100%" dataSource = {auto_complete_carList} placeholder="Select a car">
	</EJ.ComboBox>,
	document.getElementById('combobox-default')
);