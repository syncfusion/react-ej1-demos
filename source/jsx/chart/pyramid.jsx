"use strict";

var series=
			[
				{
                    points: [{ x: 'Renewed', y: 18.2 }, { x: 'Subscribe', y: 27.3 },
							 { x: 'Downloaded', y: 76.8 }, { x: 'Visited', y: 100 },
							],
                    marker: 
					{ 
                        dataLabel:
						{
							visible:true,
							
						}
					},
                    name: 'Newyork', 
					type: 'pyramid',
                    tooltip:{visible:true},
					labelPosition:'inside'                      
                }
            ];
 var title={text: 'Web Site Visitor'};
 var legend= { visible: true, position:'bottom'};
ReactDOM.render(
    <EJ.Chart id="default_chart_sample_7"
        load="loadTheme"
	    isResponsive= {true}
        series={series}
        title={title}
        legend={legend}
    >
                  
    </EJ.Chart>,
		  document.getElementById('chart-pyramid')
);



