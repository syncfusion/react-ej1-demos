"use strict";

ReactDOM.render(
    <EJ.Toolbar width="30px" dataSource={items} fields-id="edid" fields-spriteCssClass="spriteCss" fields-tooltipText="title" orientation="vertical" enableRTL={true} cssClass="alignc">
    </EJ.Toolbar>,
document.getElementById('toolbar-orientation')
);