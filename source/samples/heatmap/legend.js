

"use strict";

function getValue() {
    return Math.floor(Math.random() * 10 + 1);
}
function checkBoxChecked(args) {
    if (args && args.id) {
        if (args.id === "check2" && args.checked) {
            $("#check1")[0].checked = false;
            $("#heatmap_legend").ejHeatMapLegend({ legendMode: "list" });
        }
        if (args.id === "check1" && args.checked) {
            $("#check2")[0].checked = false;
            $("#heatmap_legend").ejHeatMapLegend({ legendMode: "gradient" });
        }
    }
}

var colorMappingCollection = [{ value: 0, color: "#fe0002", label: { text: "Poor" } }, { value: 3, color: "#ffff01", label: { text: "Average" } }, { value: 6, color: "#13ab11", label: { text: "Good" } }, { value: 10, color: "#005ba2", label: { text: "Excellent" } }];
var rows = ["Peter Scott", "Maria Anders", "John Camino", "Philips Cramer", "Robert King", "Simon Crowther"];
var itemsSource = [];
for (var i = 0; i < rows.length; i++) {
    itemsSource.push({
        EmpName: rows[i],
        Jan: getValue(), Feb: getValue(), Mar: getValue(), Apr: getValue(), May: getValue(), Jun: getValue(),
        Jul: getValue(), Aug: getValue(), Sep: getValue(), Oct: getValue(), Nov: getValue(), Dec: getValue()
    });
}
var legendCollection = ["heatmap3_legend"];
var itemsMapping = {
    headerMapping: { "propertyName": "EmpName", "displayName": "Employee Name", columnStyle: { width: 110, textAlign: "right" } },
    columnMapping: [{ "propertyName": "Jan", "displayName": "Jan" }, { "propertyName": "Feb", "displayName": "Feb" }, { "propertyName": "Mar", "displayName": "Mar" }, { "propertyName": "Apr", "displayName": "Apr" }, { "propertyName": "May", "displayName": "May" }, { "propertyName": "Jun", "displayName": "Jun" }, { "propertyName": "Jul", "displayName": "Jul" }, { "propertyName": "Aug", "displayName": "Aug" }, { "propertyName": "Sep", "displayName": "Sep" }, { "propertyName": "Oct", "displayName": "Oct" }, { "propertyName": "Nov", "displayName": "Nov" }, { "propertyName": "Dec", "displayName": "Dec" }]
};
ReactDOM.render(React.createElement(EJ.HeatMap, {
    id: "heatmap3",
    colorMappingCollection: colorMappingCollection,
    width: "810",
    isResponsive: true,
    itemsSource: itemsSource,
    itemsMapping: itemsMapping,
    legendCollection: legendCollection
}), document.getElementById('heatmap-legend'));

ReactDOM.render(React.createElement(EJ.HeatMapLegend, {
    id: "heatmap3_legend",
    colorMappingCollection: colorMappingCollection,
    height: "50px",
    width: "75%",
    isResponsive: true,
    legendMode: "list"
}), document.getElementById('heatmap-legend-legend'));
