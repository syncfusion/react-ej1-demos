"use strict";

ReactDOM.render(
    <EJ.DropDownList dataSource={dm} fields-text="CompanyName"  fields-value='ContactName' itemsCount ={10} allowVirtualScrolling={true} watermarkText="Select a company name"  width="100%" >
    </EJ.DropDownList>,
document.getElementById('dropdownlist-virtualscrolling')
);