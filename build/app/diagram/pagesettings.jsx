

"use strict";
var page_datalist = [
            { name: "node1", height: 60, width: 60, offsetX: 170, offsetY: 105, borderWidth: 1, borderColor: "#99SF13", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#FBB040", opacity: 1 }] } },
            { name: "node2", height: 90, width: 60, offsetX: 240, offsetY: 105, borderWidth: 1, borderColor: "#8BB23F", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#A0D05F", opacity: 1 }] } },
            { name: "node3", height: 120, width: 60, offsetX: 310, offsetY: 105, borderWidth: 1, borderColor: "#27A9CC", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#7FDEFF", opacity: 1 }] } },
            { name: "node4", height: 90, width: 60, offsetX: 160, offsetY: 255, borderWidth: 1, borderColor: "#99SF13", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#FBB040", opacity: 1 }] } },
            { name: "node5", height: 90, width: 90, offsetX: 240, offsetY: 255, borderWidth: 1, borderColor: "#8BB23F", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#A0D05F", opacity: 1 }] } },
            { name: "node6", height: 90, width: 60, offsetX: 320, offsetY: 255, borderWidth: 1, borderColor: "#27A9CC", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#7FDEFF", opacity: 1 }] } },
            { name: "node7", height: 60, width: 90, offsetX: 165, offsetY: 400, borderWidth: 1, borderColor: "#99SF13", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#FBB040", opacity: 1 }] } },
            { name: "node8", height: 60, width: 90, offsetX: 240, offsetY: 400, borderWidth: 1, borderColor: "#8BB23F", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#A0D05F", opacity: 1 }] } },
            { name: "node9", height: 60, width: 90, offsetX: 315, offsetY: 400, borderWidth: 1, borderColor: "#27A9CC", shape: "ellipse", gradient: { type: "radial", cx: 50, cy: 50, fx: 50, fy: 50, stops: [{ offset: 0, color: "white", opacity: 0 }, { offset: 100, color: "#7FDEFF", opacity: 1 }] } },


            { name: "node10", height: 40, width: 90, offsetX: 240, offsetY: 170, fillColor: "transparent", borderWidth: 1, borderColor: "transparent", labels: [{ name: "label1", text: "Same Width" }] },
            { name: "node11", height: 40, width: 90, offsetX: 240, offsetY: 320, fillColor: "transparent", borderWidth: 1, borderColor: "transparent", labels: [{ name: "label1", text: "Same Height" }] },
            { name: "node12", height: 40, width: 90, offsetX: 240, offsetY: 450, fillColor: "transparent", borderWidth: 1, borderColor: "transparent", labels: [{ name: "label1", text: "Same Size" }] },
        ];
        
        var page_pageSettings = {
            pageWidth: 500,
            pageHeight: 500,
            pageBackgroundColor: "White",
            multiplePage: true,
            pageBorderWidth: 1,
            pageBorderColor: "Black",
            pageMargin: 20,
            showPageBreak: true,
            pageOrientation: "landscape",
            scrollLimit: "diagram",
            enableSnapToObject: true,
        };
        var page_snapSettings = {
            enableSnapToObject: true,
            snapObjectDistance: 10,
            snapAngle: 1,
        };
        var page_pvalue = 400;
        var page_nodes = page_datalist;
        
function diagram7Create(args)
{
 var height=$("#diagram7").height()- $(".e-box.e-addborderbottom.e-header").height()
 $("#diagram7").ejDiagram({ height : height});
 var diagram = $("#diagram7").ejDiagram("instance");
 diagram.fitToPage("width", "content");
 diagram.fitToPage("height", "content");
}

ReactDOM.render(
    <EJ.Diagram 
    id="diagram7"
    height="100%"
    width="100%" 
    backgroundColor = "whitesmoke"
    nodes={page_nodes} 
    pageSettings={page_pageSettings}
    snapSettings={page_snapSettings}
    create={diagram7Create}
    > 
    </EJ.Diagram>,

	document.getElementById('diagram-pagesettings')
);