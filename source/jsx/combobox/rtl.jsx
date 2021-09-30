"use strict";

ReactDOM.render(   
    <EJ.ComboBox id="rtl" width="100%" dataSource = {auto_complete_carList} placeholder="Select a car" enableRtl={true}>
    </EJ.ComboBox>,
    document.getElementById('combobox-rtl')
);