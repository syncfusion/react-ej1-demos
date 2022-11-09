"use strict";

ReactDOM.render(  
        React.createElement("div", {id: "radio_control"}, 
                             React.createElement("br", null), 
                            "Category", React.createElement("br", null), 
                            React.createElement("br", null), 
                            React.createElement("table", {className: " table-condensed f11 table-nowrap"}, 
                                React.createElement("tr", null, 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.RadioButton, {ejHtmlAttributes: {type:"radio"}, name: "small", id: "Radio1", checked: true}), 
										React.createElement("label", {for: "Radio1", className: "clslab", checked: true}, "Fresher")), 
                                    React.createElement("td", {className: "chkrad", colspan: "2"}, 
                                        React.createElement(EJ.RadioButton, {ejHtmlAttributes: {type:"radio"}, name: "small", id: "Radio3"}), 
										React.createElement("label", {for: "Radio3", className: "clslab"}, "Experienced"))
                                )
                            ), 
                            React.createElement("br", null), 
                            React.createElement("br", null), 
                            "Experienced", React.createElement("br", null), 
                            React.createElement("br", null), 
                            React.createElement("table", {className: " table-condensed f11 table-nowrap"}, 
                                React.createElement("tr", null, 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.RadioButton, {ejHtmlAttributes: {type:"radio"}, name: "medium", id: "Radio2", checked: true}), 
										React.createElement("label", {for: "Radio2", className: "clslab", checked: true}, "1+ years")), 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.RadioButton, {ejHtmlAttributes: {type:"radio"}, name: "medium", id: "Radio4"}), 
										React.createElement("label", {for: "Radio4", className: "clslab"}, "2.5+years")), 
                                    React.createElement("td", {className: "chkrad"}, 
                                        React.createElement(EJ.RadioButton, {ejHtmlAttributes: {type:"radio"}, name: "medium", id: "Radio5"}), 
										 React.createElement("label", {for: "Radio5", className: "clslab"}, "5+years"))
                                )
                            ), 
                            React.createElement("br", null)
     ),   
		  document.getElementById('button-radiobutton')
);