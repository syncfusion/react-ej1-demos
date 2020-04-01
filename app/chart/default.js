"use strict";

var def_primaryXAxis = { 
    range: { min: 2005, max: 2011, interval: 1 }, 
    valueType:'category'
};

var def_primaryYAxis={
    labelFormat: "{value}%",
    range: { min: 25, max: 50, interval: 5 }
};
var def_commonSeriesOptions= 
{
  type: 'line', enableAnimation: true, 
	tooltip:{ visible :true, template:'Tooltip'},
    marker:
    {
        shape: 'circle',
        size:
        {
            height: 7, width: 7
        },
        visible: true
    },
     border : {width: 2}                             
};
var def_series=[
    {
             points: [{ x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 }, { x: 2008, y: 27 }, 
			 { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }],						 
             name: 'India'
             },						
             {
             points: [{ x: 2005, y: 31 }, { x: 2006, y: 28 },{ x: 2007, y: 30 }, { x: 2008, y: 36 }, 
			 { x: 2009, y: 36 }, { x: 2010, y: 39 }, { x: 2011, y: 37 }],						 
             name: 'Germany'
             },
	{
             points: [{ x: 2005, y: 36 }, { x: 2006, y: 32 },{ x: 2007, y: 34 }, { x: 2008, y: 41 }, 
			 { x: 2009, y: 42 }, { x: 2010, y: 42 }, { x: 2011, y: 43 }],						 
             name: 'England'
             },					
             {
             points: [{ x: 2005, y: 39 }, { x: 2006, y: 36 },{ x: 2007, y: 40 }, { x: 2008, y: 44 }, 
			 { x: 2009, y: 45 }, { x: 2010, y: 48 }, { x: 2011, y: 46 }],						 
             name: 'France'
	}
];
var def_title ={text: 'Efficiency of oil-fired power production'};
ReactDOM.render(
    React.createElement(EJ.Chart, {id: "default_chart_sample_0", 
    width: "100%", 
   primaryXAxis: def_primaryXAxis, 
   primaryYAxis: def_primaryYAxis, 
   commonSeriesOptions: def_commonSeriesOptions, 
   series: def_series, 
   isResponsive: true, 
   title: def_title, 
   load: "loadTheme"
    }
        
            
    ),
		  document.getElementById('chart-default')
);