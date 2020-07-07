"use strict";

ReactDOM.render(
    React.createElement(EJ.DropDownList, {watermarkText: "Select a vegetable", dataSource: vegetables, "fields-text": "skill", "fields-category": "category", allowGrouping: true, enableloadOnDemand: false, width: "100%"}
    ),
document.getElementById('dropdownlist-grouping')
);