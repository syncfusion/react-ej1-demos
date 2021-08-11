"use strict";

ReactDOM.render(   
    <EJ.ComboBox id="sorting" width="100%" dataSource = {auto_complete_carList} placeholder="Select a car" autofill={true} sortOrder="descending">
	</EJ.ComboBox>,
	document.getElementById('combobox-sorting')
);