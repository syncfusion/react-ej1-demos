"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/progressbar/default.html">Default</a></li>
            <li><a href="app/progressbar/rtl.html">RTL</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('progressbar')
);