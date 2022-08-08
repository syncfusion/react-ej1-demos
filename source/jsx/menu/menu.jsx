"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/menu/default.html">Default</a></li>
            <li><a href="app/menu/verticalmenu.html">Vertical Menu</a></li>
            <li><a href="app/menu/contextmenu.html">Context Menu</a></li>
            <li><a href="app/menu/template.html">Template</a></li>
            <li><a href="app/menu/centermenu.html">Center Menu</a></li>
            <li><a href="app/menu/rtl.html">RTL</a></li>
        </ul>
    </EJ.Tab>,
document.getElementById('menu')
);