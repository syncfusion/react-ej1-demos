"use strict";

ReactDOM.render(
    React.createElement("div", {id: "default_control"}, 
    React.createElement("table", {className: " table-condensed f11 table-nowrap "}, 
            React.createElement("tr", null, 
                React.createElement("td", null, "Normal"
                ), 
                React.createElement("td", {className: "btnsht"}, 
                    React.createElement(EJ.Button, {id: "btn1", size: ej.ButtonSize.Normal, showRoundedCorner: true, contentType: ej.ContentType.ImageOnly, prefixIcon: "e-icon e-uiLight e-handup", text: "login"})
                )
            ), 
            React.createElement("tr", null, 
                React.createElement("td", null, "Mini"
                ), 
                React.createElement("td", {className: "btnsht"}, 
                    React.createElement(EJ.Button, {id: "btn2", size: ej.ButtonSize.Mini, showRoundedCorner: true, text: "login"})
                )
            ), 
             React.createElement("tr", null, 
                React.createElement("td", null, "Small"
                ), 
                React.createElement("td", {className: "btnsht"}, 
                    React.createElement(EJ.Button, {id: "btn3", size: ej.ButtonSize.Small, showRoundedCorner: true, text: "login"})
                )
            ), 
            React.createElement("tr", null, 
                React.createElement("td", null, "Medium"
                ), 
                React.createElement("td", {className: "btnsht"}, 
                    React.createElement(EJ.Button, {id: "btn3", size: ej.ButtonSize.Medium, showRoundedCorner: true, text: "login"})
                )
            ), 
            React.createElement("tr", null, 
                React.createElement("td", null, "Large"
                ), 
                React.createElement("td", {className: "btnsht"}, 
                    React.createElement(EJ.Button, {id: "btn3", size: ej.ButtonSize.Large, showRoundedCorner: true, contentType: ej.ContentType.TextAndImage, prefixIcon: "e-icon e-uiLight e-handup", text: "login"})
                )
            )
    )
     ),   
		  document.getElementById('button-default')
);