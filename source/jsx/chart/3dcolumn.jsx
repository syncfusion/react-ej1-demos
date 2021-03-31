"use strict";
var primaryXAxis=
            {                                
				valueType: 'category',
                labelFormat:"MMM",
                majorGridLines: { visible: true, color: "#a9a9a9", opacity: 0.12 }
            };
			
var primaryYAxis=
            {                              
				majorGridLines: { visible: true, color: "#a9a9a9", opacity: 0.12 }
            };
            
var	commonSeriesOptions=
			{
				tooltip: { visible: true},                
                type: "column"                                                               
            };
            
var	series=
			[                                                                                   
                {
                    points: [{ x: "Calcium", y: 11 }, { x: "Iron", y: 20 }, { x: "Sodium", y: 8}], 
							 
					name: 'Apple'
                },
                
				{
                     points: [{ x: "Calcium", y: 6 }, { x: "Iron", y: 26 }, { x: "Sodium", y: 7 }], 
					
					name: 'Banana'
                }                             
            ];
var legend= { visible: true,position:"top"  };
var title = {text:"Fruits Nutrients"};
ReactDOM.render(
    <EJ.Chart id="default_chart_sample_5"
        title = {title}
        series={series}
        commonSeriesOptions={commonSeriesOptions}
        primaryYAxis={primaryYAxis}
        primaryXAxis={primaryXAxis}
        enable3D= {true}
	    enableRotation= {true}
        depth= {100}
        wallSize= {2}
        tilt= {0}
        rotation= {34}
        perspectiveAngle= {90}
        sideBySideSeriesPlacement= {true}
	    load= "loadTheme"
        isResponsive= {true}
		legend = {legend}
    >
                  
    </EJ.Chart>,
		  document.getElementById('chart-3dcolumn')
);

