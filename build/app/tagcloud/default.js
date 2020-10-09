"use strict";

ReactDOM.render(
    React.createElement(EJ.TagCloud, {width: "100%", cssClass: "alignc", titleText: "Tech Sites", dataSource: websiteCollection}
    ),
document.getElementById('tagcloud-default')
);