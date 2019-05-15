"use strict";

ReactDOM.render(   
	React.createElement(EJ.Slider, {value: 30, orientation: "vertical", width: "12", height: 300}
	),
	document.getElementById('slider-normalSlider')
);

ReactDOM.render(  
	React.createElement(EJ.Slider, {value: 70, orientation: "vertical", sliderType: "minrange", width: "12", height: 300}
	),
	document.getElementById('slider-minSlider')
);
ReactDOM.render( 
	React.createElement(EJ.Slider, {values: [30, 70], orientation: "vertical", sliderType: "range", width: "12", height: 300}
	),
	document.getElementById('slider-rangeSlider')
);
