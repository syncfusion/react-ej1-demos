"use strict";

ReactDOM.render( 
    <div>  
	    <EJ.Rotator id="sliderContent" thumbnailSourceID="thumbElement" slideWidth="100%" frameSpace={0} 
        displayItemsCount={1} slideHeight={330} navigateSteps={1} pagerPosition={ej.Rotator.PagerPosition.Outside} 
        showThumbnail={true} orientation={ej.Orientation.Horizontal} showPager={true} enabled={true} 
        allowKeyboardNavigation={true} isResponsive={true} showPlayButton={true} animationType="slide">
            <li><img className="image" src="content/images/rotator/green.jpg" title="Green" /></li>
            <li><img className="image" src="content/images/rotator/snow.jpg" title="Snow" /></li>
            <li><img className="image" src="content/images/rotator/wheat.jpg" title="Wheat" /></li>
            <li><img className="image" src="content/images/rotator/tablet.jpg" title="Tablet" /></li>
            <li><img className="image" src="content/images/rotator/sea.jpg" title="Sea" /></li>
            <li><img className="image" src="content/images/rotator/bread.jpg" title="Bread" /></li>
            <li><img className="image" src="content/images/rotator/snowfall.jpg" title="Snowfall" /></li>
        </EJ.Rotator>
        <ul id="thumbElement">
            <li><img src="content/images/rotator/green.jpg" title="Green" /></li>
            <li><img src="content/images/rotator/snow.jpg" title="Snow" /></li>
            <li><img src="content/images/rotator/wheat.jpg" title="Wheat" /></li>
            <li><img src="content/images/rotator/tablet.jpg" title="Tablet" /></li>
            <li><img src="content/images/rotator/sea.jpg" title="Sea" /></li>
            <li><img src="content/images/rotator/bread.jpg" title="Bread" /></li>
            <li><img src="content/images/rotator/snowfall.jpg" title="Snowfall" /></li>
        </ul>
    </div>,
	document.getElementById('rotator-thumbnail')  
);