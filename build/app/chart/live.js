"use strict";
var chartobj, count = 0, chartData = null, value = 10, values = 20, chartData1 = null, i;
var  primaryXAxis=
            {
                majorGridLines: { visible: false },
				
			};
var series= 
			[
				{
					points: chartData,
                    type: 'line',
                    enableAnimation: false,
					fill: "#E46455", opacity:0.8
                },
				{
					points: chartData1,
                    type: 'line',
                    enableAnimation: false,
					opacity:0.8
                 }
			];

generateData();
function generateData() {
    var num = 100, data = [], data1 = [];
    for (i = 0; i < num; i++) {
        if (Math.random() > .5) {
            if (value < 45) {
                value += Math.random() * 2.0;
                values += Math.random() * 2.0;
            }
            else {
                value -= 2.0;
                values -= 2.0;
            }
        }
        else {
            if (value > 5) {
                value -= Math.random() * 2.0;
                values -= Math.random() * 2.0;
            }
            else {
                value += 2.0;
                values += 2.0;
            }
        }
        data[i] = {
            x: i.toString(), y: value
        };
        data1[i] = { x: i.toString(), y: values };
    }
    chartData = data;
    chartData1 = data1;
};
function update() {
    if (Math.random() > .5) {
        if (value < 45) {
            value += Math.random() * 2.0;
            values += Math.random() * 2.0;
        }
        else {
            value -= 2.0;
            values -= 2.0;
        }
    }
    else {
        if (value > 5) {
            value -= Math.random() * 2.0;
            values -= Math.random() * 2.0;
        }
        else {
            value += 2.0;
            values += 2.0;
        }
    }
    chartData.push({
        x: i.toString(), y: value
    }
    
                  );
    chartData1.push({ x: i.toString(), y: values });
    i++;
    chartData.shift();
    chartData1.shift();
    chartobj.model.series[0].points = chartData;
    chartobj.model.series[1].points = chartData1;
    $("#default_chart_sample_12").ejChart("redraw");
};
function onchartload(sender) 
	{
		loadTheme(sender);
		chartobj = this;
        window.setInterval(update, 100);
    };
 
 var legend = {visible:false}	
ReactDOM.render(
    React.createElement(EJ.Chart, {id: "default_chart_sample_12", 
    primaryXAxis: primaryXAxis, 
    series: series, 
    isResponsive: true, 
    background: "transparent", 
    enableCanvasRendering: true, 
    load: onchartload, 
    legend: legend
    }
                  
    ),
		  document.getElementById('chart-live')
);



