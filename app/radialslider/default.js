"use strict";

ReactDOM.render(   
	React.createElement(EJ.RadialSlider, {id: "defaultRadialSlider", inline: true, value: "42", radius: 150, ticks: slider, 
	innerCircleImageUrl: "content/images/radialslider/chevron-right.png"}
  ),
	document.getElementById('radialslider-default')
);