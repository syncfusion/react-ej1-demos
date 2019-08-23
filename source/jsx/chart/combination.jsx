"use strict";
			
var axes=
			[
                {
                    majorGridLines:
                    {
						visible: false
                    },
                    orientation: 'Vertical',
                    opposedPosition: true,
                    axisLine: { visible: false },
                    rangePadding: 'normal',
                    name: 'yAxis',
                    labelFormat: '${value}',
                    title: { text: "Total Transactions" },
                    visible : false
                }
            ];
			
var commonSeriesOptions=
			{
                tooltip: { visible: true }
        	};
			
var series=
			[
				{
                    points: [{ x: "Jan", y: 45 }, { x: "Feb", y: 100 }, { x: "March", y: 25 },
							 { x: "April", y: 100 }, { x: "May", y: 85 }, { x: "June", y: 140 }],
                    fill:"#69D2E7",
                    name: 'Unit Sold', 
					type: 'column', 
					enableAnimation: true,
                    tooltip: 
					{
						format: "#point.x# <br/> Unit Sold : #point.y# <br/>"
					}
                },				
				{
                    points: [{ x: "Jan", y: 1000 }, { x: "Feb", y: 3000 }, { x: "March", y: 1000 },
							 { x: "April", y: 7000 }, { x: "May", y: 5000 }, { x: "June", y: 7000 }],
					name: 'Total Transaction', 
					type: 'line', 
					enableAnimation: true, 
					yAxisName: 'yAxis',                    
					tooltip:
					{
						format: "#point.x# <br/> Profit : #point.y# <br/>" 
					},
                    marker:
                    {
                        shape: 'circle',
                        size:
                        {
                            height: 8, width: 8
                        },
                        visible: true
                    },
                    border:{width: 2 }
				}
            ];
var title= { text: 'Sales Report ' };
var legend ={
				visible: true,
				font: { size: '15px' }, 
				shape: 'seriesType',
				position: 'Bottom',
				itemStyle: { width: 15, height: 15 } 
			};
ReactDOM.render(
    <EJ.Chart id="default_chart_sample_8"
        series= {series}
        commonSeriesOptions={commonSeriesOptions}
        axes = {axes}
        load= "loadTheme"
        isResponsive= {true}
        title={title}
        legend={legend}
    >
                  
    </EJ.Chart>,
		  document.getElementById('chart-combination')
);



