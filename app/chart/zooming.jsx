"use strict";
function onchartload(sender) 
	{
		loadTheme(sender);
        var data = GetData();
        sender.model.series[0].dataSource = data.Open;
	    sender.model.series[0].xName= "XValue"; 
		sender.model.series[0].yName= "YValue";
    };
function GetData()
	{
        var data =[];
        var series1 = [];
        var value = 100;
        for (var i = 1; i < 250; i++) {
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            var point = { XValue: new Date(1996, i + 2, i), YValue: value };
            series1.push(point);
        }
        var data = { Open: series1 };
        return data;
	};
var primaryXAxis=
            {                 
				valueType:'datetime',
                labelFormat: 'yyyy'
			};

var series=
			[
                {                         
       				enableAnimation: true,
                    name: 'Server',
                    type: 'line',
                }
            ];
var zooming=
			{	 
				enable: true, 
				type: 'x,y', 
				enableMouseWheel: true,
				enableScrollbar:true
			};
var title={text: 'Server CPU Load'};
var legend= { visible: false};


ReactDOM.render(
    <EJ.Chart id="default_chart_sample_9"
        load= 'onchartload'
        title = {title}
        isResponsive = {true}
        legend = {legend}
        zooming = {zooming}
        primaryXAxis = {primaryXAxis}
        series = {series}

    >
                  
    </EJ.Chart>,
		  document.getElementById('chart-zooming')
);



