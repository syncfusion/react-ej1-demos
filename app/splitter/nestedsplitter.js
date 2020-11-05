"use strict";

ReactDOM.render( 
    React.createElement("div", {id: "samplecontrol", className: "nestedContainer"}, 
	    React.createElement(EJ.Splitter, {id: "nested_outerSplitter", width: "100%", isResponsive: true, 
        orientation: ej.Orientation.Vertical, properties: property1}, 
            React.createElement("div", null, 
                React.createElement("div", {className: "content"}, 
                    React.createElement("h3", {className: "h3"}, "FRENCH CITIES ")
                )
            ), 
            React.createElement(EJ.Splitter, {id: "nested_innerSplitter", orientation: ej.Orientation.Horizontal, width: "100%", isResponsive: true, properties: property2}, 
                React.createElement("div", null, 
                    React.createElement("div", {className: "content"}, 
                        React.createElement("h3", {className: "h3"}, "PARIS "), 
                        "Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the" + ' ' + 
                        "romanticism..."
                    )
                ), 
                React.createElement("div", null, 
                    React.createElement("div", {className: "content"}, 
                        React.createElement("h3", {className: "h3"}, "CAMEMBERT "), 
                        "The village in the Orne département of Normandy where the famous French cheese is originated from."
                    )
                ), 
                React.createElement("div", null, 
                    React.createElement("div", {className: "content"}, 
                        React.createElement("h3", {className: "h3"}, "GRENOBLE "), 
                        "The capital city of the French Alps and a major scientific center surrounded by many ski resorts," + ' ' + 
                        "host of the Winter Olympics in 1968."
                    )
                )
            )
        )
    ),
	document.getElementById('splitter-nestedsplitter')
);