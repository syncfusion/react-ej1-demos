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
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", itemActive: activeItem, contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/default.html"}, "Line")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/column.html"}, "Column")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/pie.html"}, "Pie")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/bar.html"}, "Bar")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/polar.html"}, "Polar")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/3dcolumn.html"}, "3D Column")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/3dpie.html"}, "3D Pie")), 
			React.createElement("li", null, React.createElement("a", {href: "app/chart/pyramid.html"}, "Pyramid")), 
			React.createElement("li", null, React.createElement("a", {href: "app/chart/combination.html"}, "Combination")), 
			React.createElement("li", null, React.createElement("a", {href: "app/chart/zooming.html"}, "Zooming")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/bubble.html"}, "Bubble")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/candle.html"}, "Candle")), 
            React.createElement("li", null, React.createElement("a", {href: "app/chart/live.html"}, "Live"))
        )
    ),
		  document.getElementById('chart')
);



