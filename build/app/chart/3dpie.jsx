"use strict";
var commonSeriesOptions=
			{                                       
                tooltip: { visible: true, format: "#point.x# : #point.y#%" }                
            };
            
var series=
			[
                {
                    points: [{ x: "Housing", text: "Housing", y: 31 }, 
							 { x: "Food", text: "Food", y: 16 }, 
							 { x: "Transportation", text: "Transportation", y: 14 }, 
							 { x: "Clothing", text: "Clothing", y: 6 }, 
							 { x: "Health care", text: "Health care", y: 8 }, 
							 { x: "Education", text: "Education", y: 17 }, 
							 { x: "Miscellaneous", text: "Miscellaneous", y: 8 }], 
					
					explodeIndex: 0,                              
                    border: { width: 2, color: 'white' },
                    type: 'pie', 					
					startAngle: 145
                }
            ];

var legend= { visible: false };
var title = {text:"Expenditure shares on child"}
ReactDOM.render(
    <EJ.Chart id="default_chart_sample_6"
        title={title}
        legend={legend}
        series={series}
        commonSeriesOptions={commonSeriesOptions}
        enable3D={true}
        enableRotation={true}
        isResponsive= {true}
        depth= {30}
        tilt= {-30}
        rotation= {-30}
        perspectiveAngle= {90}
		load= "loadTheme"
    >
                  
    </EJ.Chart>,
		  document.getElementById('chart-3dpie')
);



