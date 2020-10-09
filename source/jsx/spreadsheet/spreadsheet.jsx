"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/spreadsheet/default.html">Default Functionalities</a></li>
            <li><a href="app/spreadsheet/conditionalformatting.html">Conditional Formatting</a></li>
            <li><a href="app/spreadsheet/celldatabinding.html">Cell Data Binding</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('spreadsheet')
);