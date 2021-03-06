

"use strict";
 
var data = [
{
    name: "Patient", type: "umlclassifier", "class": {
        name: "Patient", attributes: [{ name: "accepted", type: "Date" }, { name: "sickness", type: "History" }, { name: "prescription", type: "String[*]" }, { name: "allergies", type: "String[*]" }],
        methods: [{ name: "getHistory", arguments: [{ name: "Date" }], type: "History" }]
    }, fillColor: "#26A0DA", borderColor: "white", offsetX: 85, offsetY: 250,
},
{
name: "Doctor", type: "umlclassifier", "class": { name: "Doctor", attributes: [{ name: "specialist", type: "String[*]" }, { name: "locations", type: "String[*]" }] }, offsetX: 125, offsetY: 545, fillColor: "#26A0DA", borderColor: "white"
},
{
name: "Person", type: "umlclassifier", "class": { name: "Person", attributes: [{ name: "name", type: "Name" }, { name: "title", type: "String[*]" }, { name: "gender", type: "Gender" }], }, offsetX: 290, offsetY: 105, fillColor: "#26A0DA", borderColor: "white",
},
{ name: "Hospital", type: "umlclassifier", "class": { name: "Hospital", attributes: [{ name: "name", type: "Name" }, { name: "address", type: "Address" }, { name: "phone", type: "Phone" }], methods: [{ name: "getDepartment", type: "String" }] }, offsetX: 523, offsetY: 100, fillColor: "#26A0DA", borderColor: "white" },
{ name: "Department", type: "umlclassifier", "class": { name: "Department", methods: [{ name: "getStaffCount", type: "Int" }] }, offsetX: 523, offsetY: 280, fillColor: "#26A0DA", borderColor: "white" },
{
name: "Staff", type: "umlclassifier", "class": { name: "Staff", attributes: [{ name: "joined", type: "Date" }, { name: "education", type: "string[*]" }, { name: "certification", type: "String[*]" }, { name: "languages", type: "String[*]" }], methods: [{ name: "isDoctor", type: "bool" }, { name: "getHistory", type: "bool" }] }, offsetX: 520, offsetY: 455, fillColor: "#26A0DA", borderColor: "white"
},
{ name: "OperationStaff", type: "umlclassifier", "class": { name: "OperationStaff", }, offsetX: 295, offsetY: 455, fillColor: "#26A0DA", borderColor: "white" },
{ name: "Nurse", type: "umlclassifier", "class": { name: "Nurse", }, offsetX: 295, offsetY: 545, fillColor: "#26A0DA", borderColor: "white" },
{ name: "Surgeon", type: "umlclassifier", "class": { name: "Surgeon", }, offsetX: 125, offsetY: 665, fillColor: "#26A0DA", borderColor: "white" },
{ name: "AdministrativeStaff", type: "umlclassifier", "class": { name: "AdministrativeStaff", }, offsetX: 517, offsetY: 605, fillColor: "#26A0DA", borderColor: "white" },
{ name: "FrontDeskStaff", type: "umlclassifier", "class": { name: "FrontDeskStaff", }, offsetX: 515, offsetY: 695, fillColor: "#26A0DA", borderColor: "white" },
{ name: "TechnicalStaff", type: "umlclassifier", "class": { name: "TechnicalStaff", }, offsetX: 813, offsetY: 445, fillColor: "#26A0DA", borderColor: "white" },
{ name: "Technician", type: "umlclassifier", "class": { name: "Technician", }, offsetX: 700, offsetY: 535, fillColor: "#26A0DA", borderColor: "white" },
{ name: "Technologist", type: "umlclassifier", "class": { name: "Technologist", }, offsetX: 900, offsetY: 535, fillColor: "#26A0DA", borderColor: "white" },
{ name: "SurgicalTechnologist", type: "umlclassifier", "class": { name: "SurgicalTechnologist", }, offsetX: 900, offsetY: 630, fillColor: "#26A0DA", borderColor: "white" },

];
var connectors = [
    {
        name: "connect1", sourceNode: "Patient", targetNode: "Person", segments: [{ type: "straight" }], shape: {
            type: "umlclassifier",
            relationship: ej.datavisualization.Diagram.ClassifierShapes.Association,
            association: ej.datavisualization.Diagram.AssociationFlows.Default,
        }
    },
    { name: "connect2", sourceNode: "Person", targetNode: "Hospital", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association } },
    { name: "connect3", sourceNode: "Department", targetNode: "Hospital", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Composition } },
    { name: "connect4", sourceNode: "OperationStaff", targetNode: "Patient", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association } },
    { name: "connect5", sourceNode: "Doctor", targetNode: "OperationStaff", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect6", sourceNode: "Nurse", targetNode: "OperationStaff", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect7", sourceNode: "Surgeon", targetNode: "Doctor", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect8", sourceNode: "FrontDeskStaff", targetNode: "AdministrativeStaff", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association,association:ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect9", sourceNode: "Technician", targetNode: "TechnicalStaff", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect10", sourceNode: "Technologist", targetNode: "TechnicalStaff", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect11", sourceNode: "SurgicalTechnologist", targetNode: "Technologist", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect12", sourceNode: "Staff", targetNode: "Department", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect13", sourceNode: "Staff", targetNode: "Person", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect14", sourceNode: "OperationStaff", targetNode: "Staff", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default } },
    { name: "connect15", sourceNode: "AdministrativeStaff", targetNode: "Staff", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
    { name: "connect16", sourceNode: "TechnicalStaff", targetNode: "Staff", segments: [{ type: "straight" }], shape: { type: "umlclassifier", relationship: ej.datavisualization.Diagram.ClassifierShapes.Association, association: ej.datavisualization.Diagram.AssociationFlows.Default, } },
];
for (var i = 0; i < data.length; i++) {
    nodeTemplate(data[i]);
}

function nodeTemplate(node) {
    if ((node.properties && node.properties.length > 0) || (node.methods && node.methods.length > 0)) {
        node.type = "group";
        node.children = node.children ? node.children : [];
        node.container = { type: "stack" };
        node.children.push({
            parent: node.name,
            horizontalAlign: "stretch",
            height: 30, width: node.minWidth, labels: [{ text: node.className, fontColor: "white", fontFamily: "Segoe UI" }]
        });
        createClassMembers(node, node.properties, "property");
        createClassMembers(node, node.methods, "method");
    }
    else {
        node.height = 30;
        if (!node.labels) node.labels = [];
        node.labels.push({ text: node.className, fontColor: "white", fontFamily: "Segoe UI"});
    }
}

function createClassMembers(node, membersCollection, memberType) {
    if (membersCollection && membersCollection.length > 0) {
        createLine(node);
        for (var i in membersCollection) {
            if (memberType === "property")
                createChild(node, membersCollection[i].name + ":" + membersCollection[i].type);
            else
                createChild(node, membersCollection[i].name + "(" + membersCollection[i].returnType + "):" + membersCollection[i].parameter);
        }
    }
}

function createLine(node) {
    node.children.push({ height: .5, width: node.minWidth, borderColor: "white", })
}

function createChild(node, text) {
    node.children.push({
        height: 25, width: node.minWidth, borderColor: "transparent",
        labels: [{
            fontColor: "white",
            margin: { left: -64, top: -10 }, horizontalAlignment: "left", verticalAlignment: "top",
            text: text,
            fontFamily: "Segoe UI"
            
        }],
    });
}

function diagram10Create(args)
{
 var height=$("#diagram10").height()- $(".e-box.e-addborderbottom.e-header").height()
 $("#diagram10").ejDiagram({ height : height});
 var diagram = $("#diagram10").ejDiagram("instance");
 diagram.fitToPage("width", "content"); 
 diagram.fitToPage("height", "content"); 
}

var pageSettings= { scrollLimit: "diagram" };
var  defaultSettings= {
    connector: {
        constraints: ej.datavisualization.Diagram.ConnectorConstraints.None,
        segments: [{ type: "straight" }], targetDecorator: { width: 10, height: 10, fillColor: "#666666" }
    },
    node: {
        fillColor: "#26A0DA", borderColor: "transparent", borderWidth: 2,
    },
    group: {
        fillColor: "#26A0DA", borderColor: "transparent", borderWidth: 2,
    }
};
 


var tool= ej.datavisualization.Diagram.Tool.SingleSelect | ej.datavisualization.Diagram.Tool.ZoomPan;


ReactDOM.render(
    React.createElement(EJ.Diagram, {
    id: "diagram10", 
    height: "100%", 
    width: "100%", 
    nodes: data, 
    connectors: connectors, 
    pageSettings: pageSettings, 
    defaultSettings: defaultSettings, 
    enableContextMenu: false, 
    tool: tool, 
    create: diagram10Create
    }
    ),
	document.getElementById('diagram-umldiagram')
);