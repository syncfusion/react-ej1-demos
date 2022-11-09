"use strict";
var zoomSettings= {
enableZoom: true,
factor:1,
level:1
};
var navigationControl= {
enableNavigation: true,
orientation: 'vertical',
absolutePosition: { x: 5, y: 15 },
dockPosition: 'none'
};
var layers = [
  {
    layerType: "geometry",
    enableSelection: false,
	enableMouseHover:false,
    
    showMapItems: false,
                            
    shapeSettings: {
        fill: "#626171",
        strokeThickness: "1",
        stroke: "#6F6F79",
        highlightStroke:"#6F6F79",
        valuePath: "name",
        highlightColor: "gray"

    },                               
    shapeData: world_map
  }
 ]

ReactDOM.render(
    React.createElement(EJ.Map, {id: "defaultmaps", 
    background: "white", 
    enableAnimation: true, 
    enablePan: true, 
    zoomSettings: zoomSettings, 
    navigationControl: navigationControl, 
    layers: layers

    }
        
            
    ),
		  document.getElementById('maps-default')
);