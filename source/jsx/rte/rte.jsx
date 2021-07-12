"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/rte/default.html">Default</a></li>
            <li><a href="app/rte/fileandimagebrowser.html">File & Image browser</a></li>
            <li><a href="app/rte/localization.html">Localization</a></li>
            <li><a href="app/rte/rtl.html">RTL</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('rte')
);
