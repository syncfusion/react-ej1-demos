"use strict";

ReactDOM.render(
    React.createElement("div", {className: "color_control"}, 
                    	React.createElement("label", null, "Choose Color"), 
                    	React.createElement("div", {className: "element"}, React.createElement(EJ.ColorPicker, {id: "colorPick", value: "#278787", modelType: ej.ColorPicker.ModelType.Palette}))
                	),
		  document.getElementById('colorpicker-palette')
);