"use strict";
var value = [30, 60];
ReactDOM.render(  
	React.createElement(EJ.Slider, {value: 60, sliderType: "minrange"}
	),
	document.getElementById('slider-minrangeSlider')
);
ReactDOM.render( 
	React.createElement(EJ.Slider, {values: value, sliderType: "range"}
	),
	document.getElementById('slider-rangeSlider1')
);
