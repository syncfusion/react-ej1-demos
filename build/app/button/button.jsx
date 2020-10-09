"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/button/default.html">Default</a></li>
            <li><a href="app/button/checkbox.html">CheckBox</a></li>
             <li><a href="app/button/radiobutton.html">RadioButton</a></li>
             <li><a href="app/button/togglebutton.html">ToggleButton</a></li>
              <li><a href="app/button/splitbutton.html">SplitButton</a></li>
              <li><a href="app/button/groupbutton.html">GroupButton</a></li>
        </ul>
    </EJ.Tab>,
		  document.getElementById('button')
);
