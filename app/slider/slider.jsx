"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/slider/default.html">Default</a></li>
			<li><a href="app/slider/verticalslider.html">Vertical Slider</a></li>
			<li><a href="app/slider/rangeslider.html">Range Slider</a></li>
            <li><a href="app/slider/buttonsupport.html">Button Support</a></li>
        </ul>
    </EJ.Tab>,
		  document.getElementById('slider')
);



