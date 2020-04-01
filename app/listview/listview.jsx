"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab" dataType="dataType" contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/listview/default.html">Default</a></li>
            <li><a href="app/listview/checklist.html">Checklist</a></li>
            <li><a href="app/listview/Filtering.html">Filtering</a></li>
        </ul>
    </EJ.Tab>,
	document.getElementById('listview')
);