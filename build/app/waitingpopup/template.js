var TemplateWaitingPopup = React.createClass({displayName: "TemplateWaitingPopup",
    render: function () {
        return (   
            React.createElement("div", {id: "waitingpopup_template"}, 
                React.createElement(EJ.WaitingPopup, {id: "template", showOnInit: true, width: "100%", template: $("#content"), appendTo: "#template"}
                )
            )
        );
    }
});  


ReactDOM.render(React.createElement(TemplateWaitingPopup, null), document.getElementById('waitingpopup-template'));