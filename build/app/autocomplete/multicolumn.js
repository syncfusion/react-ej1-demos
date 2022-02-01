"use strict";

ReactDOM.render(  
	React.createElement(EJ.Autocomplete, {id: "multicolumn", width: "99%", dataSource: autocomplete_griddata, watermarkText: "Select a order", 
  	highlightSearch: true, showPopupButton: true, "multiColumnSettings-stringFormat": "{0}  ({2}) ({1})", 
    "multiColumnSettings-enable": true, "multiColumnSettings-showHeader": true, "multiColumnSettings-columns": autocomplete_columns}
	),
  document.getElementById('autocomplete-multicoloumn')
);