"use strict";
var primaryYAxis=
            {
                range: { min: 15, max: 90, interval: 15 }
            };
			
var commonSeriesOptions=
			{
                type: 'polar', 
				enableAnimation: true,  
				tooltip :{ visible:true }
            };
			
var series=
			[	{
                    points: [{ x: "N", y: 42 }, { x: "NE", y: 28 },
							 { x: "E", y: 40 }, { x: "SE", y: 45 },
                             { x: "S", y: 20 }, { x: "SW", y: 40},
							 { x: "W", y: 25 }, { x: "NW", y: 40  }], 
					zOrder:2, 
					marker:{visible:true}, 
					name:'Line'
                },
                {
					points: [{ x: "N", y: 63 }, { x: "NE", y: 73 }, 
						     { x: "E", y: 58 }, { x: "SE", y: 65 },
                             { x: "S", y: 47 }, { x: "SW", y: 70},
							 { x: "W", y: 45 }, { x: "NW", y: 70}], 
					drawType:'column',
					zOrder:1,
					border:{color:'white', width:1},
					name:'Column',
					tooltip:
					{ 
						visible: true, 
						fill: 'white', 
						border: { width: 1, color: 'black' },
						font: { color: "black" } 
					}
                },
				{
                    points: [{ x: "N", y: 80 }, { x: "NE", y: 88 },
							 { x: "E", y: 79 }, { x: "SE", y: 83 },
                             { x: "S", y: 78 }, { x: "SW", y: 90}, 
							 { x: "W", y: 78 }, { x: "NW", y: 85 }],
					zOrder:0, 
					drawType:'area',
					marker:{visible:true}, 
					name:'Area'                   
                }
            ];
var legend= { visible: true};
ReactDOM.render(
    React.createElement(EJ.Chart, {id: "default_chart_sample_4", 
        legend: legend, 
        series: series, 
        commonSeriesOptions: commonSeriesOptions, 
        primaryYAxis: primaryYAxis, 
        isResponsive: true, 
        load: "loadTheme"
    }
                  
    ),
		  document.getElementById('chart-polar')
);



