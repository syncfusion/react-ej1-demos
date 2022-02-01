

"use strict";
 
function getValue() {
    return Math.floor((Math.random() * 100) + 1);
}

var colorMappingCollection = [
    { value: 0, color: "#8ec8f8", label: { text: "0" } },
    { value: 100, color: "#0d47a1", label: { text: "100" } }
];

var itemsSource = [];
var rows = ["Vegie-spread", "Tofuaa", "Alice Mutton", "Konbu", "Fløtemysost", "Perth Pasties", "Boston Crab Meat", "Raclette Courdavault"];
for (var i = 0; i < 8; i++) {
    itemsSource.push({
        ProductName: rows[i], Y2010: getValue(), Y2011: getValue(), Y2012: getValue(), Y2013: getValue(),
        Y2014: getValue(), Y2015: getValue(), Y2016: getValue(), Y2017: getValue(), Y2018: getValue()
    });
}

 
 
var itemsSource= itemsSource;
var width= 900;
var itemsMapping= {
    headerMapping: { "propertyName": "ProductName", "displayName": "Product Name", columnStyle: { width: 140, textAlign: "right" } },
    columnMapping: [
        { "propertyName": "Y2010", "displayName": "Y2010" },
        { "propertyName": "Y2011", "displayName": "Y2011" },
        { "propertyName": "Y2012", "displayName": "Y2012" },
        { "propertyName": "Y2013", "displayName": "Y2013" },
        { "propertyName": "Y2014", "displayName": "Y2014" },
        { "propertyName": "Y2015", "displayName": "Y2015" },
        { "propertyName": "Y2016", "displayName": "Y2016" },
        { "propertyName": "Y2017", "displayName": "Y2017" },
        { "propertyName": "Y2018", "displayName": "Y2018" }
    ],
};
var legendCollection= ["heatmap2_legend"];


ReactDOM.render(
    <EJ.HeatMap 
    id="heatmap2"
    colorMappingCollection ={colorMappingCollection}
    width = "810"
    isResponsive = {true}
    itemsSource= {itemsSource}
    itemsMapping={itemsMapping} 
    > 
    </EJ.HeatMap>,

	document.getElementById('heatmap-tablebinding')
);

ReactDOM.render(
    <EJ.HeatMapLegend 
    id="heatmap2_legend"
    colorMappingCollection ={colorMappingCollection}
    height= "50px"
    width= "75%"
    isResponsive = {true}
    > 
    </EJ.HeatMapLegend>,

	document.getElementById('heatmap-tablebinding-legend')
);