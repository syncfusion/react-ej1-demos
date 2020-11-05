"use strict";

ReactDOM.render(   
	<EJ.RadialSlider id="defaultRadialSlider" inline={true} value="42" radius={150} ticks={slider} 
	innerCircleImageUrl="content/images/radialslider/chevron-right.png">
  </EJ.RadialSlider>,
	document.getElementById('radialslider-default')
);