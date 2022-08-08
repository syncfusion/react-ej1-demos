"use strict";

ReactDOM.render(
    <EJ.DropDownList dataSource={SkillList} fields-text="skill" enableRTL={true} watermarkText="Select a language"  width="100%" >
    </EJ.DropDownList>,
document.getElementById('dropdownlist-rtl')
);