"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/treeview/default.html">Default</a></li>
			 <li><a href="app/treeview/checkbox.html">Checkbox</a></li>
             <li><a href="app/treeview/dragdrop.html">Drag Drop</a></li>
			  <li><a href="app/treeview/loadondemand.html">Load On Demand</a></li>
            <li><a href="app/treeview/template.html">Template</a></li>
        </ul>
    </EJ.Tab>,
		  document.getElementById('treeview')
);



