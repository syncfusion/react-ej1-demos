"use strict";

function activeItem(args){
	  var chart = $("#default_chart_sample_" + args.activeIndex).ejChart("instance");
	  chart.alreadySelected = args.activeIndex == 0 ? args.activeIndex == 0 : chart.alreadySelected;
	  
        if (chart.alreadySelected)
            chart.redraw();
        else
            chart.alreadySelected = true;        
}
ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType" itemActive={activeItem}  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/chart/default.html">Line</a></li>
            <li><a href="app/chart/column.html">Column</a></li>
            <li><a href="app/chart/pie.html">Pie</a></li>
            <li><a href="app/chart/bar.html">Bar</a></li>
            <li><a href="app/chart/polar.html">Polar</a></li>
            <li><a href="app/chart/3dcolumn.html">3D Column</a></li>
            <li><a href="app/chart/3dpie.html">3D Pie</a></li>
			<li><a href="app/chart/pyramid.html">Pyramid</a></li>
			<li><a href="app/chart/combination.html">Combination</a></li>
			<li><a href="app/chart/zooming.html">Zooming</a></li>
            <li><a href="app/chart/bubble.html">Bubble</a></li>
            <li><a href="app/chart/candle.html">Candle</a></li>            
            <li><a href="app/chart/live.html">Live</a></li>            
        </ul>
    </EJ.Tab>,
		  document.getElementById('chart')
);



