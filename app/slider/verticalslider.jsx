"use strict";

ReactDOM.render(   
	<EJ.Slider value={30} orientation="vertical" width="12" height={300}>
	</EJ.Slider>,
	document.getElementById('slider-normalSlider')
);

ReactDOM.render(  
	<EJ.Slider value={70} orientation="vertical" sliderType="minrange" width="12" height={300}>
	</EJ.Slider>,
	document.getElementById('slider-minSlider')
);
ReactDOM.render( 
	<EJ.Slider values={[30, 70]} orientation="vertical" sliderType="range" width="12" height={300}>
	</EJ.Slider>,
	document.getElementById('slider-rangeSlider')
);
