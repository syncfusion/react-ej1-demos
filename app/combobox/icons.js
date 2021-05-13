"use strict";

ReactDOM.render(
    React.createElement(EJ.ComboBox, {placeholder: "Select a icon", width: "100%", fields: combo_icons_fields, dataSource: combo_icons}
    ),
document.getElementById('combobox-icons')
);