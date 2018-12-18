"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/grid/defaultfunctionalities.html">Default Functionalities</a></li>
            <li><a href="app/grid/columntemplate.html">Column Template</a></li>
            <li><a href="app/grid/rowtemplate.html">Row Template</a></li>
            <li><a href="app/grid/celledittype.html">Cell Edit Type</a></li>
            <li><a href="app/grid/multisorting.html">Multi Sorting</a></li>
            <li><a href="app/grid/filtering.html">Filtering</a></li>
            <li><a href="app/grid/grouping.html">Grouping</a></li>
            <li><a href="app/grid/captionsummary.html">Caption Summary</a></li>
        </ul>
    </EJ.Tab>,
    document.getElementById('grid')
);
