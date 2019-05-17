var ActionButtonsDialog = React.createClass({displayName: "ActionButtonsDialog",
    componentDidMount: function () {
        $("#btnDialogOpen").hide();
		$(window).resize(function(){
			var obj=$('#dialogIcon').ejDialog('instance');
			obj.refresh();
		});
    },
    open: function (e) {
        $("#btnDialogOpen").hide();
        $("#dialogIcon").ejDialog("open");
    },
    dialogClose: function (e) {
        $("#btnDialogOpen").show();
    },
    render: function () {
        return (   
            React.createElement("div", {id: "dialog_actionbuttons"}, 
                React.createElement(EJ.Button, {id: "btnDialogOpen", size: "medium", type: "button", height: 30, width: 150, text: "Open Dialog", click: this.open}
                ), 
		        React.createElement(EJ.Dialog, {id: "dialogIcon", isResponsive: true, containment: "#dialog_actionbuttons", close: this.dialogClose, width: 300, height: 300, title: "Audi-R8", allowDraggable: true, enableResize: true, actionButtons: actionbuttons}, 
                    React.createElement("div", {className: "cnt"}, 
                        "The Audi R8 was initially equipped with a 4.2 litre V8 engine. Specifically, it is an all-aluminum alloy 32-valve (four valves" + ' ' +
                        "per cylinder) petrol engine, utilising Fuel Stratified Injection (FSI), and has a displacement of 4,163 cubic" + ' ' +
                        "centimetres (254.0 cu in)."
                     )
                )
            )
        );
    }
});  

ReactDOM.render(React.createElement(ActionButtonsDialog, null), document.getElementById('dialog-actionbuttons'));