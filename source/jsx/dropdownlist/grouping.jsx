"use strict";

ReactDOM.render(
    <EJ.DropDownList watermarkText="Select a vegetable" dataSource={vegetables} fields-text="skill" fields-category="category"  allowGrouping={true} enableloadOnDemand={false}  width="100%" >
    </EJ.DropDownList>,
document.getElementById('dropdownlist-grouping')
);