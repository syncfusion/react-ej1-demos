var FormsTooltip = React.createClass({displayName: "FormsTooltip",
    onOpen: function (args) {
        var target = $("#details").data("ejTooltip");
		
		        if(args.model.content == "Enter a valid email address")
                target.setModel({cssClass : "info"});
			
                else
			    target.setModel({cssClass : "warning"}); 
			
    },
    render: function () {
        return (
            React.createElement("div", {id: "tooltip_forms"}, 
              React.createElement("div", {className: "cols-sample-area"}, 
                React.createElement("div", {id: "form", className: "frame"}, 
                    React.createElement(EJ.Tooltip, {id: "details", trigger: "focus", width: "175px", height: "30px", target: ".form-control", "position-stem-horizontal": "left", "position-stem-vertical": "center", "position-target-horizontal": "right", "position-target-vertical": "center", beforeOpen: "onOpen", hover: "onOpen"}, 
                    React.createElement("form", {id: "details", role: "form"}, 
                        React.createElement("fieldset", null, 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "name"}, "User Name:"), 
                                React.createElement("input", {className: "form-control", type: "text", id: "name", name: "firstname", title: "Please enter your name"})
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "email"}, "Email Address:"), 
                                React.createElement("input", {className: "form-control", id: "email", type: "text", name: "email", title: "Enter a valid email address"})
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "pwd"}, "Password:"), 
                                React.createElement("input", {className: "form-control", id: "pwd", type: "password", name: "pwd", title: "Be at least 8 characters length"})
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "Cpwd"}, "Confirm Password:"), 
                                React.createElement("input", {className: "form-control", type: "password", id: "Cpwd", name: "Cpwd", title: "Re-enter your password"})
                            ), 

                            React.createElement(EJ.Button, {id: "sample", type: "submit", text: "Submit", showRoundedCorner: true, size: "medium"}), 
                            React.createElement(EJ.Button, {id: "clear", type: "reset", text: "Reset", showRoundedCorner: true, size: "medium"})
                        )
                    )
                    )
                )
              )
                    

                 
            )
        );
    }
});

ReactDOM.render(React.createElement(FormsTooltip, null), document.getElementById('tooltip-forms'));