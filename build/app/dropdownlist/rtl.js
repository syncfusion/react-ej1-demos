"use strict";

ReactDOM.render(
    React.createElement(EJ.DropDownList, {dataSource: SkillList, "fields-text": "skill", enableRTL: true, watermarkText: "Select a language", width: "100%"}
    ),
document.getElementById('dropdownlist-rtl')
);