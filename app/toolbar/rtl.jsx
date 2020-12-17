"use strict";

ReactDOM.render(
    <EJ.Toolbar width="100%" dataSource={editItems} fields-id="edid" fields-spriteCssClass="spriteCss" fields-tooltipText="title" enableRTL={true}>
    </EJ.Toolbar>,
document.getElementById('toolbar-rtl')
);