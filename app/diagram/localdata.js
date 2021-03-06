

"use strict";

  var data = [
        { "Id": "parent", "Role": "Marketing Director", "Color": "#f79663" },
        { "Id": "1", "Role": "Manager", "TeamLead": "parent", "Color": "#f79663" },
        { "Id": 3, "Role": "Fundraiser", "TeamLead": "1", "Color": "#5cc3b5" },
        { "Id": 4, "Role": "Programmer", "TeamLead": "1", "Color": "#5cc3b5" },
        { "Id": 6, "Role": "Communicator", "TeamLead": 3, "Color": "#67a961" },
        { "Id": 7, "Role": "Advertisor", "TeamLead": 3, "Color": "#67a961" },
        { "Id": 8, "Role": "Funding Officer", "TeamLead": 3, "Color": "#67a961" },
        { "Id": 9, "Role": "Inter", "TeamLead": 6, "Color": "#67a961" },
        { "Id": 10, "Role": " Officer", "TeamLead": 7, "Color": "#67a961" },
        { "Id": 11, "Role": " Officer", "TeamLead": 7, "Color": "#67a961" },
        { "Id": 12, "Role": " Asst.Director", "TeamLead": 4, "Color": "#e9b833" },
        { "Id": 13, "Role": " Asst.Director", "TeamLead": 4, "Color": "#e9b833" },
        { "Id": 14, "Role": " Asst.Director", "TeamLead": 4, "Color": "#e9b833" }
        ];

       
function nodeTemplate(diagram, node) {
    node.labels[0].text = node.Role;
    node.fillColor = node.Color;
}


var layout= {
    type: "hierarchicaltree", marginY: 50, horizontalSpacing: 30, verticalSpacing: 40

};
var defaultSettings= { 
    node: {
        width: 110, height: 40, shape: "rectangle", borderColor: "transparent", fillColor: "#253737",

        labels: [{ name: "label1", fontColor: "#ffffff", margin: { left: 5, right: 5 } }]
    }, 
    connector: {
        segments: [{ "type": "orthogonal" }],
        targetDecorator: { fillColor: "#4F4F4F",borderColor:"#4F4F4F" }
    }
};
 
var pageSettings= { scrollLimit: "diagram" };
var snapSettings= { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
var tool= ej.datavisualization.Diagram.Tool.ZoomPan;

var dataSourceSettings= {
    id: "Id", parent: "TeamLead",
    //specifies the dataSource
    dataSource: data
};

function diagram4Create(args)
{
 var height=$("#diagram4").height()- $(".e-box.e-addborderbottom.e-header").height()
 $("#diagram4").ejDiagram({ height : height}); 
}

ReactDOM.render(
    React.createElement(EJ.Diagram, {
    id: "diagram4", 
    height: "100%", 
    width: "100%", 
    tool: tool, 
    layout: layout, 
    dataSourceSettings: dataSourceSettings, 
    pageSettings: pageSettings, 
    snapSettings: snapSettings, 
    defaultSettings: defaultSettings, 
    nodeTemplate: nodeTemplate, 
    enableContextMenu: false, 
    create: diagram4Create
    }
    ),

	document.getElementById('diagram-localdata')
);