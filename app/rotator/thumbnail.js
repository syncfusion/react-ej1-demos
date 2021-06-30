"use strict";

ReactDOM.render( 
    React.createElement("div", null, 
	    React.createElement(EJ.Rotator, {id: "sliderContent", thumbnailSourceID: "thumbElement", slideWidth: "100%", frameSpace: 0, 
        displayItemsCount: 1, slideHeight: 330, navigateSteps: 1, pagerPosition: ej.Rotator.PagerPosition.Outside, 
        showThumbnail: true, orientation: ej.Orientation.Horizontal, showPager: true, enabled: true, 
        allowKeyboardNavigation: true, isResponsive: true, showPlayButton: true, animationType: "slide"}, 
            React.createElement("li", null, React.createElement("img", {className: "image", src: "content/images/rotator/green.jpg", title: "Green"})), 
            React.createElement("li", null, React.createElement("img", {className: "image", src: "content/images/rotator/snow.jpg", title: "Snow"})), 
            React.createElement("li", null, React.createElement("img", {className: "image", src: "content/images/rotator/wheat.jpg", title: "Wheat"})), 
            React.createElement("li", null, React.createElement("img", {className: "image", src: "content/images/rotator/tablet.jpg", title: "Tablet"})), 
            React.createElement("li", null, React.createElement("img", {className: "image", src: "content/images/rotator/sea.jpg", title: "Sea"})), 
            React.createElement("li", null, React.createElement("img", {className: "image", src: "content/images/rotator/bread.jpg", title: "Bread"})), 
            React.createElement("li", null, React.createElement("img", {className: "image", src: "content/images/rotator/snowfall.jpg", title: "Snowfall"}))
        ), 
        React.createElement("ul", {id: "thumbElement"}, 
            React.createElement("li", null, React.createElement("img", {src: "content/images/rotator/green.jpg", title: "Green"})), 
            React.createElement("li", null, React.createElement("img", {src: "content/images/rotator/snow.jpg", title: "Snow"})), 
            React.createElement("li", null, React.createElement("img", {src: "content/images/rotator/wheat.jpg", title: "Wheat"})), 
            React.createElement("li", null, React.createElement("img", {src: "content/images/rotator/tablet.jpg", title: "Tablet"})), 
            React.createElement("li", null, React.createElement("img", {src: "content/images/rotator/sea.jpg", title: "Sea"})), 
            React.createElement("li", null, React.createElement("img", {src: "content/images/rotator/bread.jpg", title: "Bread"})), 
            React.createElement("li", null, React.createElement("img", {src: "content/images/rotator/snowfall.jpg", title: "Snowfall"}))
        )
    ),
	document.getElementById('rotator-thumbnail')  
);