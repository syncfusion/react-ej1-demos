"use strict";
var primaryXAxis= {
majorGridLines: { visible: false },
valueType:'datetime',
labelFormat:"MMM dd",
};
var primaryYAxis = {
labelFormat: '${value}',
range:{min:60, max:160, interval:20}
};
var crosshair= {
visible: true,
type:'trackball',
 marker:
{
    shape: 'circle',

    size:
    {
        height: 9, width: 9
    },
    visible: true,
   border: {width: 1 }
},
 line: {
     color: 'transparent'
 }
};
var series= [{
type: 'line',
name:'Product X',
enableAnimation: true,tooltipFormat:"#point.x#  : #point.y#",
style: { borderWidth: 2 },
tooltip :
{					             	 
format:"#point.x#  : ej.format(#point.y#,n2)"
},
},
{
type: 'line',
name:'Product Y',
enableAnimation: true,tooltipFormat:"#point.x#  : #point.y#",
style: { borderWidth: 2 },
tooltip :
{					             	 
format:"#point.x#  : ej.format(#point.y#,n2)"
},
}
];
var legend = {visible:true};
ReactDOM.render(
    <EJ.Chart id="default_chart_sample_0"
    primaryXAxis= {primaryXAxis}
    primaryYAxis= {primaryYAxis}
    crosshair={crosshair}
    series = {series}
        isResponsive = {true}
        legend = {legend}
        load = {onchartload}
    >
                  
    </EJ.Chart>,
		  document.getElementById('rangenavigator-chart-default')
);
var data;
		function onchartload(sender) {
			loadTheme(sender);
            data = GetData();
            sender.model.series[0].dataSource = data.Open;
			sender.model.series[0].xName= "XValue";
			sender.model.series[0].yName= "YValue";
            sender.model.series[1].dataSource = data.Close;
			sender.model.series[1].xName= "XValue";
			sender.model.series[1].yName= "YValue";
        };
function onchartloaded(sender) {
		var chartobj = $("#default_chart_sample_0").data("ejChart");
            if (chartobj != null) {
                chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
                chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
            }
            $("#default_chart_sample_0").ejChart("redraw");
        };
function GetData() {
            var series1 = [];
            var series2 = [];
            var value = 100;
            var value1 = 120;
            for (var i = 1; i < 730; i++) {

                if (Math.random() > .5) {
                    value += Math.random();
                    value1 += Math.random();
                } else {
                    value -= Math.random();
                    value1 -= Math.random();
                }
                var point1 = { XValue: new Date(2010, 0, i), YValue: value };
                var point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
                series1.push(point1);
                series2.push(point2);
            }

            data = { Open: series1, Close: series2 };
            return data;
        };
var selectedRangeSettings = {
               start:"2010/5/1", end:"2011/10/1"
           };
var tooltipSettings= {
                visible: true, labelFormat: "MM/dd/yyyy", backgroundColor: "gray", tooltipDisplayMode: "ondemand",
                
                    font: {
                        color: 'white',
                        family: 'Segoe UI',
                        style: 'Normal',
                        size: '12px',
                        opacity: 1,
                        weight: 'regular'
                    },
                
            };
var series1= [
                            {                      

                                name: 'Product A', 
                                enableAnimation: false,
                                type:'line',
                                dataSource: data.Open, xName: "XValue", yName: "YValue",
                                border: {color: 'transparent', width:2 },
								opacity: 0.5, fill: '#69D2E7', 

                            }

            ];
var seriesSettings= {
                type: 'column', enableAnimation: true,
            };
ReactDOM.render(
    <EJ.RangeNavigator id="default_rn_sample_0"
    enableDeferredUpdate = {true}
    padding = "15"
    allowSnapping = {true}
    selectedRangeSettings = {selectedRangeSettings}
    isResponsive = {true}
    tooltipSettings = {tooltipSettings}
    series = {series1}
    seriesSettings = {seriesSettings}
    rangeChanged= {onchartloaded}
    >
                  
    </EJ.RangeNavigator>,
		  document.getElementById('rangenavigator-default')
);