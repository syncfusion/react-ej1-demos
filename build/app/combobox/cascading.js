"use strict";

ReactDOM.render(   
    React.createElement("div", {id: "combobox_cascading"}, 
				React.createElement("span", null, "Select Group"), React.createElement("br", null), 
                React.createElement(EJ.ComboBox, {dataSource: groups, "fields-value": "parentId", "fields-text": "text", change: combo_cascade_event, width: "100%"}
                ), React.createElement("br", null), 
				React.createElement("span", null, "Select Country"), React.createElement("br", null), 
                React.createElement(EJ.ComboBox, {id: "countryList", dataSource: countries, "fields-text": "text", enabled: false, width: "100%"}
                )
            ),
	document.getElementById('combobox-cascading')
);