"use strict";
var pie_points= [{ x: 'Walmart', y: 13, text: '13%' }, { x: 'Apple', y: 25, text: '25%' }, { x: 'Best Buy', y: 12, text: '12%' }, { x: 'Target', y: 7, text: '7%' }, { x: 'Amazon', y: 10, text: '10%' }, { x: 'Wenger', y: 13, text: '13%' }, { x: 'Others', y: 20, text: '20%' }];

var pie_series= 
			[
				{
                    points: pie_points,                         
                    marker: 
					{
                        dataLabel: 
						{
							visible:true,
                            shape: 'none', 
                            font: {size:'20px',color:"white"}
						}
                    },
                    border :{width:2, color:'white'}, 
                    name: 'Expenses', 
					type: 'pie', 
					enableAnimation : true, 
					labelPosition:'inside', 
					enableSmartLabels:true, startAngle:145
                }
            ];
var legend = {visible:false}
var title ={text:"Expenditure"}
ReactDOM.render(
    React.createElement(EJ.Chart, {id: "default_chart_sample_2", 
     load: "loadTheme", 
	 isResponsive: true, 
    series: pie_series, 
    legend: legend, 
    title: title
    }
                  
    ),
		  document.getElementById('chart-pie')
);