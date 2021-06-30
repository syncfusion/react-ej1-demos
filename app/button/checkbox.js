"use strict";

ReactDOM.render(
    React.createElement("div", {id: "check_control"}, 
        React.createElement("div", {className: "chkalign"}, 
            React.createElement("br", null), "Hobbies", 
            React.createElement("br", null), 
            React.createElement("br", null), 
            React.createElement("table", {className: "table table-condensed f11 table-nowrap"}, 
                React.createElement("tr", null, 
                    React.createElement("td", {className: "chkrad"}, 
                        React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", id: "Checkbox1", checked: true}), 
                         React.createElement("label", {for: "Checkbox1", className: "clslab"}, "Music")
                     ), 
                     React.createElement("td", {className: "chkrad"}, 
                         React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", id: "Checkbox2"}), 
                         React.createElement("label", {for: "Checkbox2", className: "clslab"}, "Sports")
                    ), 
                     React.createElement("td", {className: "chkrad"}, 
                         React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", id: "Checkbox3"}), 
                         React.createElement("label", {for: "Checkbox3", className: "clslab"}, "Reading")
                    )
                     
                )
                ), 
                React.createElement("br", null), 
                            React.createElement("br", null), 
                            "Favorite Search Engines", React.createElement("br", null), 
                            React.createElement("br", null), 
                            React.createElement("table", {className: "table table-condensed f11 table-nowrap"}, 
                                React.createElement("tr", null, 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", size: "Medium", id: "Checkbox4", checked: true}), 
										React.createElement("label", {for: "Checkbox4", className: "clslab"}, "Google")
                                    ), 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", size: "Medium", id: "Checkbox5"}), 
										React.createElement("label", {for: "Checkbox5", className: "clslab"}, "Yahoo")
                                    ), 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", size: "Medium", id: "Checkbox6"}), 
										React.createElement("label", {for: "Checkbox6", className: "clslab"}, "Bing"))
                                )
                            ), 
                            React.createElement("br", null), 
                            React.createElement("br", null), 
                            "Favorite Social networks", React.createElement("br", null), 
                            React.createElement("br", null), 
                            React.createElement("table", {className: "table table-condensed f11 table-nowrap"}, 
                                React.createElement("tr", null, 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", size: "Medium", enableTriState: true, id: "Checkbox7"}), 
										React.createElement("label", {for: "Checkbox7", className: "clslab"}, "Flickr")
                                    ), 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", size: "Medium", enableTriState: true, id: "Checkbox8"}), 
										React.createElement("label", {for: "Checkbox8", className: "clslab"}, "GPlus")
                                    ), 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.CheckBox, {ejHtmlAttributes: {type:"checkbox"}, className: "nodetext", size: "Medium", enableTriState: true, id: "Checkbox9"}), 
										React.createElement("label", {for: "Checkbox9", className: "clslab"}, "Twitter"))
                                )
                            )
         )
         ),
		  document.getElementById('button-checkbox')
);