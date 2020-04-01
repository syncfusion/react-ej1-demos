"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/dropdownlist/default.html">Default</a></li>
            <li><a href="app/dropdownlist/checkbox.html">Checkbox</a></li>
            <li><a href="app/dropdownlist/multiselect.html">Multi Select</a></li>
            <li><a href="app/dropdownlist/icons.html">Icons</a></li>
            <li><a href="app/dropdownlist/cascading.html">Cascading</a></li>
            <li><a href="app/dropdownlist/grouping.html">Grouping</a></li>
            <li><a href="app/dropdownlist/template.html">Template</a></li>
            <li><a href="app/dropdownlist/virtualscrolling.html">Virtual Scrolling</a></li>
            <li><a href="app/dropdownlist/rtl.html">RTL</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('dropdownlist')
);



