"use strict";

ReactDOM.render(
    React.createElement(EJ.TagCloud, {width: "100%", titleText: "مواقع التكنولوجيا", dataSource: websites, enableRTL: true, cssClass: "alignc"}
    ),
document.getElementById('tagcloud-rtl')
);