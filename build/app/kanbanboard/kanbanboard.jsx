"use strict";
ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/kanbanboard/default.html">Default</a></li>
            <li><a href="app/kanbanboard/swimlane.html">Swimlane</a></li>
			<li><a href="app/kanbanboard/customization.html">Customization</a></li>
			<li><a href="app/kanbanboard/cardtemplate.html">Card Template</a></li>
			<li><a href="app/kanbanboard/constraints.html">Constraints</a></li>
			<li><a href="app/kanbanboard/contextmenu.html">Context Menu</a></li>
			<li><a href="app/kanbanboard/dialogediting.html">Dialog Editing</a></li>
			<li><a href="app/kanbanboard/filtering.html">Filtering</a></li>
        </ul>
    </EJ.Tab>,
	document.getElementById('kanbanboard')
);