"use strict";

ReactDOM.render(   
    React.createElement("div", {id: "samplecontrol", className: "defaultContainer"}, 
	    React.createElement(EJ.Splitter, {id: "default_outerSplitter", width: "100%", height: "100%", isResponsive: true, orientation: ej.Orientation.Vertical}, 
            React.createElement("div", null, 
                React.createElement("div", {className: "cont"}, "Pane 1 ")
            ), 
            React.createElement("div", null, 
                React.createElement("div", {className: "cont"}, "Pane 2 ")
            )
        )
    ),
	document.getElementById('splitter-default')
);  