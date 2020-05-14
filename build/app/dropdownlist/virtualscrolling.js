"use strict";

ReactDOM.render(
    React.createElement(EJ.DropDownList, {dataSource: dm, "fields-text": "CompanyName", "fields-value": "ContactName", itemsCount: 10, allowVirtualScrolling: true, watermarkText: "Select a company name", width: "100%"}
    ),
document.getElementById('dropdownlist-virtualscrolling')
);