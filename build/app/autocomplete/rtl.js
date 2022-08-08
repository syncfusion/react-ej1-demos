"use strict";

ReactDOM.render(   
    React.createElement(EJ.Autocomplete, {id: "rtl", width: "100%", dataSource: auto_complete_carList, watermarkText: "Select a car", enableRTL: true}
    ),
    document.getElementById('autocomplete-rtl')
);