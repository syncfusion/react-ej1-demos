"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/combobox/default.html">Default</a></li>
			<li><a href="app/combobox/autofill.html">Auto Fill</a></li>
            <li><a href="app/combobox/icons.html">Icons</a></li>
            <li><a href="app/combobox/cascading.html">Cascading</a></li>
            <li><a href="app/combobox/grouping.html">Grouping</a></li>
            <li><a href="app/combobox/template.html">Template</a></li>
            <li><a href="app/combobox/rtl.html">RTL</a></li>
			<li><a href="app/combobox/filtering.html">Filtering</a></li>
			<li><a href="app/combobox/sorting.html">Sorting</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('combobox')
);



