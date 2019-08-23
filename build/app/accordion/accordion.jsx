"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/accordion/default.html">Default</a></li>
            <li><a href="app/accordion/multipleopen.html">Multiple open</a></li>
            <li><a href="app/accordion/icons.html">Icons</a></li>
            <li><a href="app/accordion/rtl.html">RTL</a></li>
        </ul>
    </EJ.Tab>,
		  document.getElementById('accordion')
);



