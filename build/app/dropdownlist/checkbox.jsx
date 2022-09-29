"use strict";

ReactDOM.render(
    <EJ.DropDownList dataSource={SkillList} fields-text="skill" watermarkText="Select your skill" showCheckbox={true} width="100%">
    </EJ.DropDownList>,
document.getElementById('dropdownlist-checkbox')
);