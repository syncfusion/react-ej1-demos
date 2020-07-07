

"use strict";
var def_nodes = [
            { name: "NewIdea", width: 150, height: 60, offsetX: 300, offsetY: 60, labels: [{ "text": "New idea identified" }], type: "flow", shape: "terminator" },
            { name: "Meeting", width: 150, height: 60, offsetX: 300, offsetY: 155, labels: [{ "text": "Meeting with board" }], type: "flow", shape: "process" },
            { name: "BoardDecision", width: 150, height: 110, offsetX: 300, offsetY: 280, labels: [{ text: "Board decides \nwhether \nto proceed", wrapText: "true", "margin": { "left": 20, "top": 0, "right": 20, "bottom": 0 } }], type: "flow", shape: "decision" },
            { name: "Project", width: 150, height: 100, offsetX: 300, offsetY: 430, labels: [{ "text": "Find Project \nmanager" }], type: "flow", shape: "decision" },
            { name: "End", width: 150, height: 60, offsetX: 300, offsetY: 555, labels: [{ "text": "Implement and Deliver" }], type: "flow", shape: "process" },
            { name: "Decision", width: 250, height: 60, offsetX: 550, offsetY: 60, labels: [{ "text": "Decision Process for new software ideas" }], type: "flow", shape: "card", fillColor: "#858585", borderColor: "#858585" },
            { name: "Reject", width: 150, height: 60, offsetX: 550, offsetY: 285, labels: [{ "text": "Reject and write report" }], type: "flow", shape: "process" },
            { name: "Resources", width: 150, height: 60, offsetX: 550, offsetY: 430, labels: [{ "text": "Hire new resources" }], type: "flow", shape: "process" }
        ];
var def_connectors = [
            { name: "connector1", sourceNode: "NewIdea", targetNode: "Meeting" },
            { name: "connector2", sourceNode: "Meeting", targetNode: "BoardDecision" },
            { name: "connector3", sourceNode: "BoardDecision", targetNode: "Project", labels: [{ "text": "Yes" }] },
            { name: "connector4", sourceNode: "Project", targetNode: "End", labels: [{ "text": "Yes" }] },
            { name: "connector5", sourceNode: "BoardDecision", targetNode: "Reject", labels: [{ "text": "No" }] },
            { name: "connector6", sourceNode: "Project", targetNode: "Resources", labels: [{ "text": "No" }] }
        ];
var def_pageSettings = { scrollLimit: "diagram" };

var def_snapSettings = { snapConstraints: "none" };

var def_defaultSettings = {
            node: { borderColor: "#1BA0E2", fillColor: "#1BA0E2", labels: [{ "fontColor": "white" }] },
            connector: { targetDecorator: { shape: "arrow", borderColor: "#606060", width: "10", height: "10" }, lineColor: "#606060", labels: [{ "fillColor": "white" }] }
};

function diagram1Create(args)
{
 var height=$("#diagram1").height()- $(".e-box.e-addborderbottom.e-header").height()
 $("#diagram1").ejDiagram({ height : height});
 var diagram = $("#diagram1").ejDiagram("instance");
 diagram.fitToPage("height", "content");
}

ReactDOM.render(
    <EJ.Diagram 
    id="diagram1"
    height="100%"
    width="100%" 
    nodes={def_nodes} 
    connectors={def_connectors}
    pageSettings={def_pageSettings}
    snapSettings={def_snapSettings}
    defaultSettings={def_defaultSettings}
    create={diagram1Create}
    > 
    </EJ.Diagram>,

	document.getElementById('diagram-default')
);