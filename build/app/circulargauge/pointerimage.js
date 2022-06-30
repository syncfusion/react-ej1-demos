"use strict";
function drawLabels(args) {
            if (args.pointerValue != 100 && args.pointerValue != 0)
                args.style.textValue = "";
};
function drawpointers(args) {
    var i = args.pointer.index;
            args.model.scales[0].indicators[i].stateRanges[0].text = args.pointer.pointerValue.toString();
            args.model.scales[0].indicators[i].position.x = args.position.startX + 8;
            args.model.scales[0].indicators[i].position.y = args.position.startY + 25;
};
var scales =[{
        showRanges: true, showTicks: false, showIndicators: true, startAngle: 120, sweepAngle: 300, radius: 80, size: 1,
        showScaleBar: false, minimum: 0, maximum: 100, majorIntervalValue: 10, minorIntervalValue: 10,
        border: {
            width: 0.5,
        },
        customLabels: [{
            value: "SPORTS", position: { x: 175, y: 160 }, color: "#333333", font: { fontFamily: "Segoe UI", fontStyle: "Bold", size: "16px" }
        }, {
            value: "Fan Ratio", position: { x: 175, y: 175 }, color: "#333333", font: { fontFamily: "Segoe UI", size: "14px" }
        }, {
            value: "(in million)", position: { x: 175, y: 190 }, color: "#333333", font: { fontFamily: "Segoe UI", size: "10px" }
        }],
        labels: [{
            color: "transparent"
        }],
        ranges: [{
            distanceFromScale: -36, size: 15, startValue: 0, endValue: 80, backgroundColor: "#bc4b4b", border: { color: "#bc4b4b", width: 2 }
        }, {
            distanceFromScale: -66, size: 15, startValue: 0, endValue: 70, backgroundColor: "#21a56f", border: { color: "#21a56f", width: 2 }
        }, {
            distanceFromScale: -95, size: 15, startValue: 0, endValue: 90, backgroundColor: "#2bafbc", border: { color: "#2bafbc", width: 2 }
        }],
        pointers: [{
            type: "marker", markerType: "image", value: 80, distanceFromScale: 4, placement: "far", length: 18, width: 18, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "content/images/gauges/golfball.png",

        }, {
            type: "marker", markerType: "image", value: 70, distanceFromScale: 34, placement: "far", length: 18, width: 18, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "content/images/gauges/basketball.png",

        }, {
            type: "marker", markerType: "image", value: 90, distanceFromScale: 59, placement: "far", length: 18, width: 18, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "content/images/gauges/football.png",

        }],
        indicators: [
        {
            height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
        }, {
            height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
        }, {
            height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
        }]
    }];
ReactDOM.render(
    React.createElement(EJ.CircularGauge, {id: "pointerimage", 
        enableAnimation: false, 
        backgroundColor: "#e0e0e0", 
         width: 350, 
         height: 350, 
         radius: 40, 
         scales: scales, 
         drawLabels: drawLabels, 
         drawPointers: drawpointers
    }
        
            
    ),
		  document.getElementById('circulargauge-pointerimage')
);



