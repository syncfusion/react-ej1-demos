"use strict";

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={false}>
        <ul>                        
			<li><a href="app/pivotgauge/relational.html">Relational</a></li>
			<li><a href="app/pivotgauge/olap.html">OLAP</a></li>
        </ul>
    </EJ.Tab>,
    document.getElementById('pivotgauge')
);
