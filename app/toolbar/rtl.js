"use strict";

ReactDOM.render(
    React.createElement(EJ.Toolbar, {width: "100%", dataSource: editItems, "fields-id": "edid", "fields-spriteCssClass": "spriteCss", "fields-tooltipText": "title", enableRTL: true}
    ),
document.getElementById('toolbar-rtl')
);