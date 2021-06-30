"use strict";

ReactDOM.render(   
	<EJ.Rotator id="sliderContent" slideWidth="100%" frameSpace={0} displayItemsCount={1} slideHeight={330} 
	isResponsive={true} dataSource={defaultRotator} navigateSteps={1} orientation={ej.Orientation.Horizontal} 
	showPager={true} enabled={true} showPlayButton={true} animationType="slide">
  </EJ.Rotator>,
	document.getElementById('rotator-default')  
);