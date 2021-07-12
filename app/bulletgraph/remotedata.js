"use strict";

var localData = [
                {
                    value: 9.5, comparativeMeasureValue: 7.5,
                    category: 2001
                },
                {
                    value: 9.5, comparativeMeasureValue: 5,
                    category: 2002
                },
                {
                    value: 9.5, comparativeMeasureValue: 6,
                    category: 2003
                },
                {
                    value: 9.5, comparativeMeasureValue: 8,
                    category: 2004
                },
                {
                    value: 9.5, comparativeMeasureValue: 5,
                    category: 2005
                },
                {
                    value: 9.5, comparativeMeasureValue: 6,
                    category: 2006
                }];
var tooltipSettings= {template: "Tooltip2", visible: true};
var quantitativeScaleSettings = {
                location: { x: 110, y: 25 },
                minimum: 0,
                maximum: 10,
                interval: 1,
                minorTicksPerInterval: 4,
                majorTickSettings:{width:1, size: 13, stroke: 'gray'},
                minorTickSettings: { width: 1, size: 5, stroke: 'gray' },
                labelSettings: { offset: 14, size: 10 }
            };
var fields= {
                dataSource: localData, category: "category",
                featureMeasures: "value",
                comparativeMeasure: "comparativeMeasureValue"
            };
var qualitativeRanges= [{
                rangeEnd: 4.3
            }, {
                rangeEnd: 7.3
            }, {
                rangeEnd: 10
            }];
var captionSettings = {
                textAngle: -90,
                location: { x: 40, y: 210 }, text: "Revenue YTD", font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '12px', fontWeight: 'regular', opacity: 1 }, //'#707070'
                subTitle: {
                    textAngle: -90,
                    text: "$ in Thousands", location: { x: 55, y: 210 }, font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal ', size: '12px', fontWeight: 'regular', opacity: 1 } //'#707070'
                }
            };
ReactDOM.render(
    React.createElement(EJ.BulletGraph, {id: "bulletCore4", 
    height: 400, 
    enableAnimation: true, 
    qualitativeRangeSize: 320, 
    load: "loadBulletTheme", 
    quantitativeScaleLength: 475, 
    tooltipSettings: tooltipSettings, 
    quantitativeScaleSettings: quantitativeScaleSettings, 
    fields: fields, 
    qualitativeRanges: qualitativeRanges, 
    captionSettings: captionSettings
    
    }
        
            
    ),
		  document.getElementById('bulletgraph-remotedata')
);



