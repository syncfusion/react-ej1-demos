"use strict";
var primaryXAxis=
            {
				range: { min: 2005, max: 2012, interval: 1 }
			};
var primaryYAxis=
            {
                range: { min: 3, max: 12, interval: 1 },
				labelFormat:"{value}%",
			};
var commonSeriesOptions=
			{
                type: 'bar', 
				enableAnimation: true,
                tooltip:{visible:true, format: "#series.name# <br/> #point.x# : #point.y#"},
				
            };
var series=
			[
			    {
                    points: [{ x: 2006, y: 7.8 }, { x: 2007, y: 7.2}, { x: 2008, y: 6.8 }, { x: 2009, y: 10.7 },
                             { x: 2010, y: 10.8}, { x: 2011, y: 9.8 }],
					name: 'India'
                },                
				{
                    points: [{ x: 2006, y: 4.8 }, { x: 2007, y: 4.6 }, { x: 2008, y: 7.2 }, { x: 2009, y: 9.3 },
                             { x: 2010, y: 9.7}, { x: 2011, y: 9 }],
					name: 'US'
                }   
            ];
var title={text: 'Unemployment rate (%)'};
var legend= { visible: false};

ReactDOM.render(
    React.createElement(EJ.Chart, {id: "default_chart_sample_3", 
    primaryXAxis: primaryXAxis, 
    primaryYAxis: primaryYAxis, 
    load: "loadTheme", 
    isResponsive: true, 
    commonSeriesOptions: commonSeriesOptions, 
    title: title, 
    legend: legend, 
    series: series
    }
                  
    ),
		  document.getElementById('chart-bar')
);



