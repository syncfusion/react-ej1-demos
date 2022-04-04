"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/tileview/default.html">Default</a></li>
            <li><a href="app/tileview/livetile.html">LiveTile</a></li>
        </ul>
    </EJ.Tab>,
	document.getElementById('tileview')
);