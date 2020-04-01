"use strict";

ReactDOM.render(
    <EJ.TagCloud width="100%" titleText= "مواقع التكنولوجيا" dataSource={websites}  enableRTL={true} cssClass="alignc">
    </EJ.TagCloud>,
document.getElementById('tagcloud-rtl')
);