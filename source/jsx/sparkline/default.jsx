"use strict";
var dataSource1= [12, 14, 11, 12, 11, 15, 12, 10, 11, 12, 15, 13, 12, 11, 10, 13, 15, 12, 14, 16, 14, 12, 11];
var dataSource2= [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10 ];
var dataSource3= [12, -10, 11, 8, 17, 6, 2, -17, 13, -6, 8, 10 ];
var tooltip= {
   visible: true,
   font: {
       size: "12px",
   }
};
var size= { height: 40, width: 170};

ReactDOM.render(
    <EJ.Sparkline id="sparkline1"
    dataSource = {dataSource1}
    tooltip = {tooltip}
    type = "line"
    size = {size}
    >
    </EJ.Sparkline>,
    document.getElementById('sparkline-line')
);
size= { height: 100, width: 150};
ReactDOM.render(
    <EJ.Sparkline id="sparkline2"
    dataSource = {dataSource2}
    negativePointColor = "red"
    highPointColor = "blue"

    tooltip = {tooltip}
    type = "column"
    size = {size}
    >
    </EJ.Sparkline>,
    document.getElementById('sparkline-column')
);
var markerSettings= {visible:true};
ReactDOM.render(
    <EJ.Sparkline id="sparkline3"
    dataSource = {dataSource3}
    markerSettings={markerSettings}
    opacity = {0.5}
    highPointColor = "blue"
    lowPointColor = "orange"
    type = "area"
    size = {size}
    tooltip = {tooltip}
    >
    </EJ.Sparkline>,
    document.getElementById('sparkline-area')
);
var dataSource4 = [12, 15, -11, 13, 17, 0, -12, 17, 13, -15, 8, 10 ];
ReactDOM.render(
    <EJ.Sparkline id="sparkline4"
    dataSource = {dataSource4}
    type = "winloss"
    size = {size}
    >
    </EJ.Sparkline>,
    document.getElementById('sparkline-winloss')
);

var dataSource5 = [4, 6, 7 ];
size = {height:40 , width:40};
ReactDOM.render(
    <EJ.Sparkline id="sparkline5"
    dataSource = {dataSource5}
    type = "pie"
    size = {size}
    tooltip = {tooltip}
    >
    </EJ.Sparkline>,
    document.getElementById('sparkline-pie1')
);
var dataSource6 = [8, 9, 1 ];
ReactDOM.render(
    <EJ.Sparkline id="sparkline6"
    dataSource = {dataSource6}
    type = "pie"
    size = {size}
    tooltip = {tooltip}
    >
    </EJ.Sparkline>,
    document.getElementById('sparkline-pie2')
);
var dataSource7= [2, 3, 5];
ReactDOM.render(
    <EJ.Sparkline id="sparkline7"
    dataSource = {dataSource7}
    type = "pie"
    size = {size}
    tooltip = {tooltip}
    >
    </EJ.Sparkline>,
    document.getElementById('sparkline-pie3')
);
var dataSource8= [10, 12, 11];
ReactDOM.render(
    <EJ.Sparkline id="sparkline8"
    dataSource = {dataSource8}
    type = "pie"
    size = {size}
    tooltip = {tooltip}
    >
    </EJ.Sparkline>,
    document.getElementById('sparkline-pie4')
);
