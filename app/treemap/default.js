"use strict";
var leafItemSettings={ showLabels:true,labelPath:"Country"};
var legendSettings={
			    iconWidth:17,
				iconHeight:17, 
				dockPosition:"top", 
				height:40,
				width:700
			   };
var rangeColorMapping= [{ color: "#77D8D8",legendLabel:"1% Growth", from: "0", to: "1" },
                       { color: "#AED960", from: "0", legendLabel: "2% Growth", to: "2" },
                       { color: "#FFAF51", from: "0", legendLabel: "3% Growth", to: "3" },
                       { color: "#F3D240", from: "0", legendLabel: "4% Growth", to: "4" }
                       ];
var levels= [
  { groupPath: "Continent", groupGap: 5, headerHeight: 25, showHeader:true, headerTemplate: 'headertemplate' }                 
];
ReactDOM.render(
    React.createElement(EJ.TreeMap, {id: "treemapdefault", 
    dataSource: population_data, 
    colorValuePath: "Growth", 
     weightValuePath: "Population", 
     borderThickness: 0, 
     showLegend: true, 
     leafItemSettings: leafItemSettings, 
     legendSettings: legendSettings, 
     rangeColorMapping: rangeColorMapping, 
     levels: levels
    }
        
    ),
		  document.getElementById('treemap-default')
);