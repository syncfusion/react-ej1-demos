"use strict";

function activeItem(args){
	  var chart = $("#default_chart_sample_" + args.activeIndex).ejChart("instance");
        chart.alreadySelected = args.activeIndex == 0 ? args.activeIndex == 0 : chart.alreadySelected;
        if (chart.alreadySelected) {
            chart.redraw();
            $("#default_rn_sample_" + args.activeIndex).ejRangeNavigator("instance").redraw();
        }
        else
            chart.alreadySelected = true;        
}

ReactDOM.render(
    <EJ.Tab id="scrollTab"  dataType="dataType"  itemActive={activeItem}  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/rangenavigator/default.html">Default</a></li>
            <li><a href="app/rangenavigator/numeric.html">Numeric</a></li>
        </ul>
    </EJ.Tab>,
		  document.getElementById('rangenavigator')
);



