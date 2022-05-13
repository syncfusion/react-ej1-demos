

"use strict";
var data = [
    { "Name": "Diagram", "fillColor": "#916DAF" },
    { "Name": "Layout", "Category": "Diagram" },
    { "Name": "Tree Layout", "Category": "Layout" },
    { "Name": "Organizational Chart", "Category": "Layout" },
    { "Name": "Hierarchical Tree", "Category": "Tree Layout" },
    { "Name": "Radial Tree", "Category": "Tree Layout" },
    { "Name": "Mind Map", "Category": "Hierarchical Tree" },
    { "Name": "Family Tree", "Category": "Hierarchical Tree" },
    { "Name": "Management", "Category": "Organizational Chart" },
    { "Name": "Human Resource", "Category": "Management" },
    { "Name": "University", "Category": "Management" },
    { "Name": "Business", "Category": "Management" },
    ];
 
function nodeTemplate(diagram, node) {
    node.labels[0].text = node.Name;
}

 
var tool= ej.datavisualization.Diagram.Tool.SingleSelect;
var layout= { type: "hierarchicaltree", horizontalSpacing: 25, verticalSpacing: 35, marginX: 3, marginY: 3 };
var defaultSettings= {
    node: {
        constraints: ej.datavisualization.Diagram.NodeConstraints.Select | ej.datavisualization.Diagram.NodeConstraints.PointerEvents, fillColor: "#88C65C", width: 100,
        height: 40, borderColor: "black", borderWidth: 1, labels: [{ name: "label1", fontColor: "white", fontSize: 12, margin: { left: 10, right: 10 } }]
    },
    connector: {
        lineColor: "#000000", constraints: ej.datavisualization.Diagram.ConnectorConstraints.None,
        segments: [{ type: "orthogonal" }]
    }
};
var selectedItems= { constraints: ~ej.datavisualization.Diagram.SelectorConstraints.Rotator };
 
 
var dataSourceSettings= { id: "Name", parent: "Category", dataSource: data };
var pageSettings= { scrollLimit: "diagram" };
var snapSettings= { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None }

function diagram3Create(args)
{
 var height=$("#diagram3").height()- $(".e-box.e-addborderbottom.e-header").height()
 $("#diagram3").ejDiagram({ height : height}); 
}

ReactDOM.render(
    <EJ.Diagram 
    id="diagram3"
    height="100%"
    width="100%" 
    selectedItems={selectedItems}
    tool={tool}
    layout={layout}
    dataSourceSettings={dataSourceSettings}
    pageSettings={pageSettings}
    snapSettings={snapSettings}
    defaultSettings={defaultSettings}
    nodeTemplate={nodeTemplate}
    create={diagram3Create}
    > 
    </EJ.Diagram>,

	document.getElementById('diagram-hierarchicaltree')
);