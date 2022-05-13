"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/autocomplete/default.html">Default</a></li>
            <li><a href="app/autocomplete/multivalue.html">Multi Value</a></li>
            <li><a href="app/autocomplete/grouping.html">Grouping</a></li>
            <li><a href="app/autocomplete/template.html">Template</a></li>
            <li><a href="app/autocomplete/autofill.html">Auto fill</a></li>
            <li><a href="app/autocomplete/rtl.html">RTL</a></li>
            <li><a href="app/autocomplete/multicolumn.html">Multi Column</a></li>
        </ul>
    </EJ.Tab>,
	document.getElementById('autocomplete')
);