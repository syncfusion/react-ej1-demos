"use strict";
var zoomSettings={
level: 1,
maxValue: 30,
factor: 1,
enableZoom:false
};
var layers= [
                         {
                             layerType: "geometry",
                             enableSelection: true,			
                             shapeDataPath: "name",
                             enableMouseHover:true,
                             shapePropertyPath: "name",
                             showMapItems: false,                                
                             dataSource: cont_countriesdata,
                             shapeSettings: {
                                 fill: "#C3E6ED",
                                 strokeThickness: "0.5",
                                 stroke: "white",
                                 highlightColor: "#63B7B7",
                                 highlightStroke:"white",
                                 valuePath: "name"
                                     
                             },
                             shapeData: world_map,
                             subLayers: [
                              {
                                  shapeDataPath: "country",
                                  shapePropertyPath: "name",
                                  mapItemsTemplate: 'labeltemplate',
                                  showMapItems: true,
                                  enableMouseHover: true,
                                  dataSource: randomcountriesData,
                                  shapeSettings: {
                                      fill: "#9FD0D3",
                                      strokeThickness: "0.2",
                                      stroke: "white",
                                      highlightColor: "#63B7B7",
                                  },
                                  bubbleSettings: {
									  showBubble:true,
                                      valuePath: "Sales",
                                      minValue: 20,
                                      maxValue: 30,
                                      color: "#379F64",
                                  },
                                  shapeData: mapSalesData2
                              }

                             ]
                         },
                   { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Africa },
                   { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Asia },
                   { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Europe },
                   { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: NorthAmerica },
                   { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Oceania },
                   { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: SouthAmerica }


                   ];
function OnDrilled(event) {
               if (event.model.baseMapIndex == 0) {			   
                   var mapObj = $("#drilldown").data("ejMap");
				   mapObj.model.enableAnimation=true;
				   mapObj.model.layers[0].selectedItems=[];				   
                   mapObj.model.layers[0].subLayers[0].selectedItems=[];	
                   if (event.originalEvent[0].data.continent == "Africa") {
                       mapObj.option("baseMapIndex", 1);
                   }
                   else if (event.originalEvent[0].data.continent == "Asia") {
                       mapObj.option("baseMapIndex", 2);
                   }
                   else if (event.originalEvent[0].data.continent == "Europe") {
                       mapObj.option("baseMapIndex", 3);
                   }
                   else if (event.originalEvent[0].data.continent == "North America") {
                       mapObj.option("baseMapIndex", 4);
                   }
                   else if (event.originalEvent[0].data.continent == "Oceania") {
                       mapObj.option("baseMapIndex", 5);
                   }
                   else if (event.originalEvent[0].data.continent == "South America") {
                       mapObj.option("baseMapIndex", 6);
                   }                   
                   var button=document.getElementById("button");
                   $(button).css('background-color', '#0F77B7');
                   var title = document.getElementById("title");
                   $(title).css("display", "none");
				  // $(button).css("display", "block");
				   $(button).fadeIn(500);		
               }
           };
ReactDOM.render(
    React.createElement(EJ.Map, {id: "drilldown", 
    shapeSelected: OnDrilled, 
    enableAnimation: true, 
    background: "white", 
    layers: layers

    }
        
            
    ),
		  document.getElementById('maps-drilldown')
);
document.getElementById("button").style.display = "none";



