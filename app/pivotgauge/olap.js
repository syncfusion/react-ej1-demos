"use strict";
 var Olap_dataSource={
  data: "//bi.syncfusion.com/olap/msmdpump.dll",
  catalog: "Adventure Works DW 2008 SE",
  cube: "Adventure Works",
  rows: [
      {
          fieldName: "[Date].[Fiscal]",
          filterItems: { filterType: "include", values: ["[Date].[Fiscal].[Fiscal Year].&amp;[2004]"] }
      },
  ],
  columns: [
      {
          fieldName: "[Customer].[Customer Geography]",
		  filterItems: { filterType: "include", values: ["[Customer].[Customer Geography].[Country].&amp;[Australia]"] }
      }
  ],
  values: [
      {
          measures: [
              {
                  fieldName: "[Measures].[Internet Sales Amount]"
              },
              {
                  fieldName: "[Measures].[Internet Revenue Status]"
              },
                {
                    fieldName: "[Measures].[Internet Revenue Trend]"
                },
            {
                fieldName: "[Measures].[Internet Revenue Goal]"
            },
          ],
          axis: ej.PivotGauge.AxisName.Columns
      }
  ]
 };
 
 var pivotgauge_lablesetings = {     decimalPlaces: 2};
 var PivotGauge_customLables = [{
    position: {
        x: 180,
        y: 290
    },
    font: {
        size: "10px",
        fontFamily: "Segoe UI",
        fontStyle: "Normal"
    },
    color: "#666666"
	}, {
    position: {
        x: 180,
        y: 320
    },
    font: {
        size: "10px",
        fontFamily: "Segoe UI",
        fontStyle: "Normal"
    },
    color: "#666666"
	}, {
    position: {
        x: 180,
        y: 150
    },
    font: {
        size: "12px",
        fontFamily: "Segoe UI",
        fontStyle: "Normal"
    },
    color: "#666666"
	}];
var PivotGauge_ranges = [{
    distanceFromScale: -5,
    backgroundColor: "#fc0606",
    border: {
        color: "#fc0606"
    }
}, {
    distanceFromScale: -5
}];

var pivotgauge_labels = [{
    color: "#8c8c8c"
}]

var pivotgauge_ticks = [{
    type: "major",
    distanceFromScale: 2,
    height: 16,
    width: 1,
    color: "#8c8c8c"
}, {
    type: "minor",
    height: 6,
    width: 1,
    distanceFromScale: 2,
    color: "#8c8c8c"
}];

var pivotguage_pointers = [{
    showBackNeedle: true,
    backNeedleLength: 20,
    length: 120,
    width: 7
}, {
    type: "marker",
    markerType: ej.datavisualization.CircularGauge.MarkerType.Diamond,
    distanceFromScale: 5,
    placement: "center",
    backgroundColor: "#29A4D9",
    length: 25,
    width: 15
}];

var pivotguage_scale = [{
    showRanges: true,
    radius: 150,
    showScaleBar: true,
    size: 1,
    border: {
        width: 0.5
    },
    showIndicators: true,
    showLabels: true,
    pointers: pivotguage_pointers,
    ticks: pivotgauge_ticks,
    labels: pivotgauge_labels,
    ranges: PivotGauge_ranges,
    customLabels: PivotGauge_customLables
}];

				

				
ReactDOM.render(
    React.createElement(EJ.PivotGauge, {id: "olap", 
	     dataSource: Olap_dataSource, 
    labelFormatSettings: pivotgauge_lablesetings, 
    enableTooltip:  true, 
	isResponsive: true, 
    load: "loadGaugeTheme", 
    backgroundColor: "transparent", 
    scales: pivotguage_scale
    }
    ),
		  document.getElementById('pivotgauge-olap')
);




