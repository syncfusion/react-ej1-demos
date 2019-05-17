var ModalDialog = React.createClass({displayName: "ModalDialog",
    componentDidMount: function () {
        $("#Openbtn").hide();
		$(window).resize(function(){
			var obj=$('#modalDialog').ejDialog('instance');
			obj.refresh();
		});
    },
    open: function (e) {
        $("#Openbtn").hide();
        $("#modalDialog").ejDialog("open");
    },
    dialogClose: function (e) {
        $("#Openbtn").show();
    },
    validating: function(e){
        $('.error').text('');
        var user=$('#txtName').val();
        var pass=$('#txtPassword').val();
        if((user=='' && pass=='') || user=='' || pass==''){
            $('.error').text('Please fill all details');
        }
        else
            $('.error').text('Login Sucess');
    },
    render: function () {
        return (   
            React.createElement("div", {id: "modalDialogContent"}, 
                React.createElement(EJ.Button, {className: "e-btn", id: "Openbtn", size: "medium", click: this.open, height: 30, width: 150}, 
                    "Click to open dialog"
                ), 
                React.createElement(EJ.Dialog, {id: "modalDialog", title: "LoginForm", enableModal: true, containment: "#modalDialogContent", isResponsive: true, width: 300, height: 350, close: this.dialogClose}, 
                    React.createElement("table", {className: "tableClass"}, 
                        React.createElement("tr", null, 
                            React.createElement("td", null, 
                                React.createElement("p", null, "Username"), 
                                React.createElement("input", {type: "text", id: "txtName", name: "txtName", className: "ejinputtext"}), React.createElement("br", null)
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, 
                                React.createElement("p", null, "Password"), 
                                React.createElement("input", {type: "password", id: "txtPassword", name: "txtPassword", className: "ejinputtext"})
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", null, 
                                React.createElement(EJ.CheckBox, {type: "checkbox", id: "txtRember", className: "ejinputtext top", text: "Remember me"})
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {align: "center"}, 
                                React.createElement("br", null), 
                                React.createElement(EJ.Button, {className: "e-btn", id: "downloadBtn", size: "medium", click: this.validating, height: "30", width: "100%"}, 
                                "LOGIN"
                                ), 
                                React.createElement("br", null), 
							    React.createElement("label", {className: "error"}, " ")
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {align: "center", className: "acc"}, 
                                "Don't have an account ? ", React.createElement("a", {href: "#"}, "Signup")
                            )
                        )
                    )
                )
            )
        );
    }
});  

ReactDOM.render(React.createElement(ModalDialog, null), document.getElementById('dialog-modeldialog'));