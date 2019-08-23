"use strict";
var value = [30, 60];
ReactDOM.render( 
	React.createElement(EJ.Slider, {values: value, sliderType: "range", showButtons: true}
	),
	document.getElementById('slider-rangeSliderBTN')
);
ReactDOM.render(  
	React.createElement(EJ.Slider, {value: 40, sliderType: "minrange", showButtons: true, showScale: true, incrementStep: 5, largeStep: 20, smallStep: 5}
	),
document.getElementById('slider-minrangeSliderBTN')
);
