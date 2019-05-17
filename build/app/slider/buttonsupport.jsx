"use strict";
var value = [30, 60];
ReactDOM.render( 
	<EJ.Slider values={value} sliderType="range" showButtons={true}>
	</EJ.Slider>,
	document.getElementById('slider-rangeSliderBTN')
);
ReactDOM.render(  
	<EJ.Slider value={40} sliderType="minrange" showButtons={true} showScale={true} incrementStep={5} largeStep={20} smallStep={5}>
	</EJ.Slider>,
document.getElementById('slider-minrangeSliderBTN')
);
