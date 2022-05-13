"use strict";

var primaryYAxis =
{
    range: { min: 0, max: 80, interval: 20 },
};
var col_commonSeriesOptions =
{
    type: 'column', 
	enableAnimation: true,
             tooltip :
	{
		visible:true ,
		format: "#point.x# : #point.y# #series.name# Medals"
	}
};
var col_series = [
			{
                   points: [{ x: "USA", y: 50 }, { x: "China", y: 40 }, 
						 { x: "Japan", y: 70 }],
                   name: 'Gold'
            },                                
			{
                   points: [{ x: "USA", y: 70 }, { x: "China", y: 60 }, 
						 { x: "Japan", y: 60 }],
                   name: 'Silver'
            },
            {
                   points: [{ x: "USA", y: 45 }, { x: "China", y: 55 },
						 { x: "Japan", y: 50 }],
                   name: 'Bronze'
            }
];
var col_title = {text: 'Olympic Medals'};
var col_legend = { visible: true, position: 'top' };
ReactDOM.render(
     <EJ.Chart id="default_chart_sample_1"
     load = "loadTheme"
	 isResponsive = {true}
     commonSeriesOptions= {col_commonSeriesOptions}
     title={col_title}
     legend={col_legend}
     series ={col_series} 
     primaryYAxis={primaryYAxis}
     >

     </EJ.Chart>,
     document.getElementById('chart-column')
);



