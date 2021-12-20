"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/tab/default.html">Default</a></li>
            <li><a href="app/tab/images.html">Images</a></li>
            <li><a href="app/tab/headerorientation.html">Header Orientation</a></li>
            <li><a href="app/tab/closebutton.html">Close Button</a></li>
            <li><a href="app/tab/scrolltab.html">Scroll Tab</a></li>
            <li><a href="app/tab/rtl.html">RTL</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('tab')
);
