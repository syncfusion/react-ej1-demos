"use strict";

ReactDOM.render(
    React.createElement("div", {id: "toggle_control"}, 
        React.createElement("table", {className: " table-condensed f11 table-nowrap"}, 
							
                            React.createElement("tr", null, 
                                React.createElement("td", null, " Normal"), 
                                React.createElement("td", {className: "btnsht"}, 
                                    React.createElement(EJ.ToggleButton, {id: "check11", ejHtmlAttributes: {type:"checkbox"}, size: ej.ButtonSize.Normal, showRoundedCorner: true, contentType: ej.ContentType.ImageOnly, defaultPrefixIcon: "e-icon e-mediaplay", activePrefixIcon: "e-icon e-mediapause"})
                                )
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, " Mini"), 
                                React.createElement("td", {class: "btnsht"}, 
                                    React.createElement(EJ.ToggleButton, {id: "check21", ejHtmlAttributes: {type:"checkbox"}, size: ej.ButtonSize.Mini, showRoundedCorner: true, defaultText: "Play", activeText: "Pause"})
                                )
                            ), 

                            React.createElement("tr", null, 
                                React.createElement("td", null, " Small"), 
                                React.createElement("td", {class: "btnsht"}, 
                                     React.createElement(EJ.ToggleButton, {id: "check31", ejHtmlAttributes: {type:"checkbox"}, size: ej.ButtonSize.Small, showRoundedCorner: true, defaultText: "Play", activeText: "Pause"})
                                )
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, " Medium"), 
                                React.createElement("td", {class: "btnsht"}, 
                                    React.createElement(EJ.ToggleButton, {id: "check41", ejHtmlAttributes: {type:"checkbox"}, size: ej.ButtonSize.Medium, showRoundedCorner: true, defaultText: "Play", activeText: "Pause"})
                                )
                            ), 

                            React.createElement("tr", null, 
                                React.createElement("td", null, " Large"), 
                                React.createElement("td", {class: "btnsht"}, 
                                React.createElement(EJ.ToggleButton, {id: "check51", ejHtmlAttributes: {type:"checkbox"}, size: ej.ButtonSize.Large, showRoundedCorner: true, contentType: ej.ContentType.TextAndImage, defaultPrefixIcon: "e-icon e-mediaplay", activePrefixIcon: "e-icon e-mediapause", defaultText: "Play", activeText: "Pause"})
                                )
                            )
                           
                        )
     ),   
		  document.getElementById('button-togglebutton')
);