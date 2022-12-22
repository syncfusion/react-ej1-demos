"use strict";
var items= [{
                    segmentSettings: {
                        width: 1,
                        spacing: 0,
                        color: "#8c8c8c"
                    },
                    characterSettings: {
                        opacity: 0.8,
                    },
                    value: "Syncfusion",
                    position: { x: 42, y: 52 }
                }]
ReactDOM.render(
    React.createElement(EJ.DigitalGauge, {id: "digitalgauge", 
    height: 205, 
    items: items
    }
                    
    ),
		  document.getElementById('digitalgauge-default')
);