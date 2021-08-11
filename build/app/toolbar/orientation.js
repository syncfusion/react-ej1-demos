"use strict";

ReactDOM.render(
    React.createElement(EJ.Toolbar, {width: "30px", dataSource: items, "fields-id": "edid", "fields-spriteCssClass": "spriteCss", "fields-tooltipText": "title", orientation: "vertical", enableRTL: true, cssClass: "alignc"}
    ),
document.getElementById('toolbar-orientation')
);