"use strict";

ReactDOM.render(
    React.createElement("div", {id: "split_control"}, 
        React.createElement("table", {className: " table-condensed f11 table-nowrap"}, 
							React.createElement("tr", null, 
                                React.createElement("td", null, " Normal"), 
                                React.createElement("td", {className: "btnsht"}, 
                                    React.createElement("div", {className: "spltspan"}, 
                                        React.createElement(EJ.SplitButton, {id: "spltbutton11", size: ej.ButtonSize.Normal, showRoundedCorner: true, contentType: ej.ContentType.ImageOnly, prefixIcon: " e-icon e-login", targetID: "Ul11"}, " login"), 
                                        React.createElement("ul", {id: "Ul11"}, 
                                            React.createElement("li", null, React.createElement("span", null, "User")), 
                                            React.createElement("li", null, React.createElement("span", null, "Guest")), 
                                            React.createElement("li", null, React.createElement("span", null, "Admin"))
                                        )
                                    )
                                )
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, " Mini"), 
                                React.createElement("td", null, 
                                    React.createElement(EJ.SplitButton, {id: "spltbutton21", size: ej.ButtonSize.Mini, showRoundedCorner: true, targetID: "Ul21"}, "login"), 
                                    React.createElement("ul", {id: "Ul21"}, 
                                        React.createElement("li", null, React.createElement("span", null, "User")), 
                                        React.createElement("li", null, React.createElement("span", null, "Guest")), 
                                        React.createElement("li", null, React.createElement("span", null, "Admin"))
                                    )
                                )
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, " Small"), 
                                React.createElement("td", {className: "btnsht"}, 
                                    React.createElement(EJ.SplitButton, {id: "spltbutton31", size: ej.ButtonSize.Small, showRoundedCorner: true, targetID: "Ul31"}, "login"), 
                                    React.createElement("ul", {id: "Ul31"}, 
                                        React.createElement("li", null, React.createElement("span", null, "User")), 
                                        React.createElement("li", null, React.createElement("span", null, "Guest")), 
                                        React.createElement("li", null, React.createElement("span", null, "Admin"))
                                    )
                                )
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, " Medium"), 
                                React.createElement("td", {className: "btnsht"}, 
                                    React.createElement(EJ.SplitButton, {id: "spltbutton41", size: ej.ButtonSize.Medium, showRoundedCorner: true, targetID: "Ul41"}, "login"), 
                                    React.createElement("ul", {id: "Ul41"}, 
                                        React.createElement("li", null, React.createElement("span", null, "User")), 
                                        React.createElement("li", null, React.createElement("span", null, "Guest")), 
                                        React.createElement("li", null, React.createElement("span", null, "Admin"))
                                    )
                                )
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, " Large"), 
                                React.createElement("td", {className: "btnsht"}, 
                                    React.createElement(EJ.SplitButton, {id: "spltbutton51", size: ej.ButtonSize.Large, showRoundedCorner: true, contentType: ej.ContentType.TextAndImage, prefixIcon: " e-icon e-login e-uiLight", targetID: "Ul51"}, "login"), 
                                    React.createElement("ul", {id: "Ul51"}, 
                                        React.createElement("li", null, React.createElement("span", null, "User")), 
                                        React.createElement("li", null, React.createElement("span", null, "Guest")), 
                                        React.createElement("li", null, React.createElement("span", null, "Admin"))
                                    )
                                )
                            )
                        )
     ),   
		  document.getElementById('button-splitbutton')
);