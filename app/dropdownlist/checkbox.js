"use strict";

ReactDOM.render(
    React.createElement(EJ.DropDownList, {dataSource: SkillList, "fields-text": "skill", watermarkText: "Select your skill", showCheckbox: true, width: "100%"}
    ),
document.getElementById('dropdownlist-checkbox')
);