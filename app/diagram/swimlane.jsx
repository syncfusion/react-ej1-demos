

"use strict";
var pathData = "M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135" +
" 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C" +
"0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z";

var darkColor = "#C7D4DF";
var lightColor = "#f5f5f5";

            var nodes = [
              {
                  type: "swimlane", name: "swimlane",
                  header: {
                      text: "ONLINE PURCHASE STATUS", height: 50,
                      fillColor: darkColor, fontSize: 11
                  },
                  fillColor: lightColor, orientation: "horizontal",
                  offsetX: 350, offsetY: 290,
                  height: 100, width: 650,
                  lanes: [
                        {
                            name: "stackCanvas1",
                            header: {
                                text: "CUSTOMER", width: 50,
                                fillColor: darkColor, fontSize: 11
                            },
                            fillColor: lightColor, height: 120,
                            children: [
                                {
                                    shape: "path", pathData: pathData, name: "Order",
                                    labels: [{ text: "ORDER", fontSize: 11 }],
                                    marginLeft: 60, marginTop: 20,
                                }, ],
                        },
                        {
                            name: "stackCanvas2", header: {
                                text: "ONLINE", width: 50,
                                fillColor: darkColor, fontSize: 11
                            },
                            fillColor: lightColor, height: 120,
                            children: [
                                {
                                    name: "selectItemaddcart",
                                    labels: [{ text: "Select item\nAdd cart" }],
                                    marginLeft: 190, marginTop: 20,
                                },
                                {
                                    name: "paymentondebitcreditcard",
                                    labels: [{ text: "Payment on\nDebit/Credit Card" }],
                                    marginLeft: 350, marginTop: 20,
                                }],
                        },
                        {
                            name: "stackCanvas3", header: {
                                text: "SHOP", width: 50,
                                fillColor: darkColor, fontSize: 11
                            },
                            fillColor: lightColor, height: 120,
                            children: [
                                {
                                    name: "getmaildetailaboutorder",
                                    labels: [{ text: "Get mail detail\nabout order" }, ],
                                    marginLeft: 190, marginTop: 20,
                                },
							    {
							        name: "pakingitem", labels: [{ text: "Paking item" }, ],
							        marginLeft: 350, marginTop: 20,
							    }],
                        },
                        {
                            name: "stackCanvas4",
                            header: {
                                text: "DELIVERY", width: 50,
                                fillColor: darkColor, fontSize: 11
                            },
                            fillColor: lightColor, height: 120,
                            children: [
                                {
                                    name: "sendcourieraboutaddress",
                                    labels: [{ text: "Send Courier\n about Address" }],
                                    marginLeft: 190, marginTop: 20,
                                },
                                {
                                    name: "deliveryonthataddress",
                                    labels: [{ text: "Delivery on that\n Address" }],
                                    marginLeft: 350, marginTop: 20,
                                },
                                {
                                    name: "getitItem", shape: "path", pathData: pathData,
                                    labels: [{ text: "GET IT ITEM", fontSize: 11 }],
                                    marginLeft: 500, marginTop: 20,
                                }],
                        },
                  ],
                  phases: [
                          {
                              name: "phase1", offset: 200,
                              lineWidth: 1, lineDashArray: "3,3", lineColor: "#606060",
                              label: { text: "Phase" }
                          },
                          {
                              name: "phase2", offset: 500,
                              lineWidth: 1, lineDashArray: "3,3", lineColor: "#606060",
                              label: { text: "Phase" }
                          },
                  ],
                  phaseSize: 20,
              },
            ];
            var connectors = [
                {
                    name: "connector1", sourceNode: "Order",
                    targetNode: "selectItemaddcart"
                },
                {
                    name: "connector2", sourceNode: "selectItemaddcart",
                    targetNode: "paymentondebitcreditcard"
                },
                {
                    name: "connector3", sourceNode: "paymentondebitcreditcard",
                    targetNode: "getmaildetailaboutorder"
                },
                {
                    name: "connector4", sourceNode: "getmaildetailaboutorder",
                    targetNode: "pakingitem"
                },
                {
                    name: "connector5", sourceNode: "pakingitem",
                    targetNode: "sendcourieraboutaddress"
                },
                {
                    name: "connector6", sourceNode: "sendcourieraboutaddress",
                    targetNode: "deliveryonthataddress"
                },
                {
                    name: "connector7", sourceNode: "deliveryonthataddress",
                    targetNode: "getitItem"
                },
            ];
var selectorConstraints= ej.datavisualization.Diagram.SelectorConstraints.All
                      ^ ej.datavisualization.Diagram.SelectorConstraints.Rotator;
var  pageSettings= { pageHeight: 1020, pageWidth: 1020, scrollLimit: "diagram" };

var defaultSettings= {
         
        node: {
            width: 100, height: 40, fillColor: "white",
            labels: [{ fontSize: 11 }]
        },
        
        connector: {
            targetDecorator: {
                shape: "arrow",
                borderColor: "#606060", width: "10", height: "10"
            },
            lineColor: "#606060",
            segments: [{ type: "orthogonal", length: null }]
        }
    };

function diagram9Create(args)
{
 var height=$("#diagram9").height()- $(".e-box.e-addborderbottom.e-header").height()
 $("#diagram9").ejDiagram({ height : height});
 var diagram = $("#diagram9").ejDiagram("instance");
 diagram.fitToPage("width", "content"); 
 diagram.fitToPage("height", "content"); 
}

ReactDOM.render(
    <EJ.Diagram 
    id="diagram9"
    height="100%"
    width="100%" 
    nodes={nodes} 
    connectors={connectors}
    pageSettings={pageSettings}
    selectorConstraints={selectorConstraints}
    defaultSettings={defaultSettings}
    enableAutoScroll={false}
    create={diagram9Create}
    > 
    </EJ.Diagram>,

	document.getElementById('diagram-swimlane')
);