"use strict";

ReactDOM.render(
    <EJ.TagCloud width="100%" cssClass="alignc" titleText= "Tech Sites" dataSource={websiteCollection}>
    </EJ.TagCloud>,
document.getElementById('tagcloud-default')
);