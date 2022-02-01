"use strict";

ReactDOM.render(   
    React.createElement(EJ.ComboBox, {id: "rtl", width: "100%", dataSource: auto_complete_carList, placeholder: "Select a car", enableRtl: true}
    ),
    document.getElementById('combobox-rtl')
);