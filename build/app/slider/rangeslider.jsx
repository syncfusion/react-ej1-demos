"use strict";
var value = [30, 60];
ReactDOM.render(  
	<EJ.Slider value={60} sliderType="minrange">
	</EJ.Slider>,
	document.getElementById('slider-minrangeSlider')
);
ReactDOM.render( 
	<EJ.Slider values={value} sliderType="range">
	</EJ.Slider>,
	document.getElementById('slider-rangeSlider1')
);
