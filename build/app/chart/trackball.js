"use strict";
var primaryXAxis=
            {
				title: { text: "Year" },
               
                axisLine: { visible: false },
                majorGridLines: { visible: false }
            };
			
var primaryYAxis=
            {
				title: { text: "Revenue" },
                labelFormat: '{value}K',
                majorTickLines:
                {
                    visible: false
                },
                range: { min: 20, max: 120, interval: 20 },
                axisLine: { visible: false },edgeLabelPlacement: "shift", labelPosition: "inside",tickLinesPosition:"inside"
            };
var commonSeriesOptions=
			{
                type: 'line' ,
				enableAnimation : true,
				marker:
                {
                    shape: 'circle',
                    size:
                    {
                        height: 6, width: 6
                    },
					visible: true,
                    border :{color: 'white', width: 3} 
				},
				border :{width: 3} 
			};
var series = [	
				{
                    points: [{ x: 10, y: 30}, { x: 20, y: 35 },
                             { x: 30, y: 40 }, { x: 40, y: 36 },
                             { x: 50, y: 28 }, { x: 60, y: 33 },
							 { x: 70, y: 39 }, { x: 80, y: 38 },
                             { x: 90, y: 34 }, { x: 100, y: 46 },
                             { x: 110, y: 54 }, { x: 120, y: 65 },
							 { x: 130, y: 39 },],
                            name: 'John',
					tooltip :
					{	
						visible:true , 
						format:"#point.x# : #point.y#"
					}
				},                
				{
                    points: [{ x: 10, y: 54 }, { x: 20, y: 45 },
                             { x: 30, y: 43 }, { x: 40, y: 50 },
                             { x: 50, y: 54 }, { x: 60, y: 56 },
                             { x: 70, y: 60 }, { x: 80, y: 63 },
                             { x: 90, y: 69 }, { x: 100, y: 70 },
                             { x: 110, y: 72 }, { x: 120, y: 75 },
							 { x: 130, y: 75 },],
                            name: 'Andrew',
					tooltip :
					{
						visible:true , 
						format:"#point.x# : #point.y#"
					}
				},
                {
                    points: [{ x: 10, y: 76}, { x: 20, y: 70 },
                             { x: 30, y: 63 }, { x: 40, y: 72 },
                             { x: 50, y: 77 }, { x: 60, y: 79 },
                             { x: 70, y: 72 }, { x: 80, y: 68 },
                             { x: 90, y: 78 }, { x: 100, y: 65 },
                             { x: 110, y: 81 }, { x: 120, y: 80 },
							 { x: 130, y: 94 },],
                            name: 'Thomas',
					tooltip :
					{	
						visible:true , 
						format:"#point.x# : #point.y#"
					}
                },
                {
                    points: [{ x: 10, y: 98 }, { x: 20, y: 90 },
                             { x: 30, y: 83 }, { x: 40, y: 90 },
                             { x: 50, y: 86 }, { x: 60, y: 84 },
                             { x: 70, y: 106 }, { x: 80, y: 99 },
                             { x: 90, y: 110 }, { x: 100, y: 102 },
                             { x: 110, y: 90 }, { x: 120, y: 85 },
							 { x: 130, y: 110 },],
                           name: 'Hendry',
					tooltip :
					{
						visible:true , 
						format:"#point.x# : #point.y#"
					}
				},
                {
                    points: [{ x: 10, y: 116 }, { x: 20, y: 110 },
                             { x: 30, y: 100 }, { x: 40, y: 102 },
                             { x: 50, y: 97 }, { x: 60, y: 89 },
                             { x: 70, y: 88 }, { x: 80, y: 90 },
                             { x: 90, y: 88 }, { x: 100, y: 75 },
                             { x: 110, y: 63 }, { x: 120, y: 70 },
							 { x: 130, y: 55 },],
                           name: 'William',
                    tooltip:
					{
					    visible: true,
					    format: "#point.x# : #point.y#"
					}
                }];
var crosshair= 
				{
                    visible: true,
					type:'trackball',
			    };
var  title ={text: 'Average sales per person'};
var legend=
			{ 
				visible: true,
				shape: 'circle',
				position: 'Top', 
				itemStyle: { width: 10, height: 10 } 
			};
ReactDOM.render(
    React.createElement(EJ.Chart, {id: "trackball", 
        primaryXAxis: primaryXAxis, 
        primaryYAxis: primaryYAxis, 
        commonSeriesOptions: commonSeriesOptions, 
        series: series, 
        load: "loadTheme", 
        isResponsive: true, 
        crosshair: crosshair, 
        title: title, 
        legend: legend
    }
                  
    ),
		  document.getElementById('chart-trackball')
);



