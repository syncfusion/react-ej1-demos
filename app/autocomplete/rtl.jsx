"use strict";

ReactDOM.render(   
    <EJ.Autocomplete id="rtl" width="100%" dataSource = {auto_complete_carList} watermarkText="Select a car" enableRTL={true}>
    </EJ.Autocomplete>,
    document.getElementById('autocomplete-rtl')
);