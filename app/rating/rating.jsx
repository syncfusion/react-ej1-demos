"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/rating/default.html">Default</a></li>
            <li><a href="app/rating/precision.html">Precision</a></li>
            <li><a href="app/rating/orientation.html">Orientation</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('rating')
);