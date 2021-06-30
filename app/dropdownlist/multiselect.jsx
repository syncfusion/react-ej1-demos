"use strict";

ReactDOM.render(
    <EJ.DropDownList dataSource={SkillList} fields-text="skill" watermarkText="Select your skill" showCheckbox={true} width="100%" multiSelectMode="visualmode">
    </EJ.DropDownList>,
document.getElementById('dropdownlist-multiselect')
);