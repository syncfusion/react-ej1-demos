"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/tooltip/default.html">Default</a></li>
            <li><a href="app/tooltip/position.html">Position</a></li>
            <li><a href="app/tooltip/forms.html">Forms</a></li>
            <li><a href="app/tooltip/template.html">Template</a></li>
            <li><a href="app/tooltip/ajaxcontent.html">Ajax Content</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('tooltip')
);