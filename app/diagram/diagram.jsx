"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/diagram/default.html">Default</a></li>
           <li><a href="app/diagram/circuitdiagram.html">Circuit Diagram</a></li>
           <li><a href="app/diagram/hierarchicaltree.html">Hierarchical Tree</a></li>
           <li><a href="app/diagram/localdata.html">Localdata</a></li>
           <li><a href="app/diagram/organizationalchart.html">Organizational Chart</a></li>
           <li><a href="app/diagram/overview.html">Overview</a></li>
           <li><a href="app/diagram/pagesettings.html">Page Settings</a></li>
           <li><a href="app/diagram/radialtree.html">Radial Tree</a></li>
           <li><a href="app/diagram/swimlane.html">Swimlane</a></li>
           <li><a href="app/diagram/umldiagram.html">UML Diagram</a></li>
        </ul>
    </EJ.Tab>,
		  document.getElementById('diagram')
);



