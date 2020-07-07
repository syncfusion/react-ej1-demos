"use strict";

ReactDOM.render(
    <div className="color_control">
                    	<label>Choose Color</label>
                    	<div className="element"><EJ.ColorPicker  id="colorPick1" value="#278787" ></EJ.ColorPicker></div>
                	</div>,
		  document.getElementById('colorpicker-default')
);