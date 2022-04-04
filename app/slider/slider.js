"use strict";

ReactDOM.render(
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/slider/default.html"}, "Default")), 
			React.createElement("li", null, React.createElement("a", {href: "app/slider/verticalslider.html"}, "Vertical Slider")), 
			React.createElement("li", null, React.createElement("a", {href: "app/slider/rangeslider.html"}, "Range Slider")), 
            React.createElement("li", null, React.createElement("a", {href: "app/slider/buttonsupport.html"}, "Button Support"))
        )
    ),
		  document.getElementById('slider')
);



