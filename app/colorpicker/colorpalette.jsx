"use strict";

ReactDOM.render(
    <div className="color_control">
                    	<label>Choose Color</label>
                    	<div className="element"><EJ.ColorPicker  id="colorPick" value="#278787" modelType={ej.ColorPicker.ModelType.Palette} ></EJ.ColorPicker></div>
                	</div>,
		  document.getElementById('colorpicker-palette')
);