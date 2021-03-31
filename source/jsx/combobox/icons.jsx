"use strict";

ReactDOM.render(
    <EJ.ComboBox placeholder="Select a icon" width="100%" fields={combo_icons_fields} dataSource = {combo_icons}>
    </EJ.ComboBox>,
document.getElementById('combobox-icons')
);