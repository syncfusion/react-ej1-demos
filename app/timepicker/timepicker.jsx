"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/timepicker/default.html">Default</a></li>       
        </ul>
    </EJ.Tab>,
		  document.getElementById('timepicker')
);
