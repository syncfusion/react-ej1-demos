"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/treemap/default.html">Default</a></li>
            <li><a href="app/treemap/drilldown.html">Drill Down</a></li>
        </ul>
    </EJ.Tab>,
		  document.getElementById('treemap')
);



