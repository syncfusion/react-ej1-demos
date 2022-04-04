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
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", itemActive: activeItem, contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/rangenavigator/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/rangenavigator/numeric.html"}, "Numeric"))
        )
    ),
		  document.getElementById('rangenavigator')
);



