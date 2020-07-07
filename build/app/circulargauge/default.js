"use strict";
var border={width:0.5};
var pointers= [{
    value: 60,
    showBackNeedle: true,
    backNeedleLength: 20,
    length: 95,
    width: 7,
    pointerCap: { radius: 12 }
}]

var labels=[{
    color: "#8c8c8c"
}];
var ranges=[
        {
         distanceFromScale: -30,
         startValue: 0,
         endValue: 70
        }, 
        {
         distanceFromScale: -30,
         startValue: 70,
         endValue: 110,
         backgroundColor: "#fc0606",
         border: { color: "#fc0606" }
        },
        {
         distanceFromScale: -30,
         startValue: 110,
         endValue: 120,
         backgroundColor: "#f5b43f",
         border: { color: "#f5b43f" }
        }
];

var scale= [{
                    showRanges: true,
                    startAngle: 122, sweepAngle: 296, radius: 130, showScaleBar: true, size: 1, maximum: 120, majorIntervalValue: 20, minorIntervalValue: 10,
                    border:border,
                    pointers:pointers,
                    ticks: [{
                        type: "major",
                        distanceFromScale: 2,
                        height: 16,
                        width: 1, color: "#8c8c8c"
                    }, { type: "minor", height: 8, width: 1, distanceFromScale: 2, color: "#8c8c8c" }],
                    labels: labels,
                    ranges: ranges
                }]
ReactDOM.render(
    React.createElement(EJ.CircularGauge, {id: "default", 
    backgroundColor: "transparent", 
    load: "loadGaugeTheme", 
    scales: scale
    }
        
            
    ),
		  document.getElementById('circulargauge-default')
);