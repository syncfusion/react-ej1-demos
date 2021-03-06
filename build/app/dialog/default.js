var DefaultDialog = React.createClass({displayName: "DefaultDialog",
    componentDidMount: function () {
        $("#btnOpen").hide();
		$(window).resize(function(){
			var obj=$('#basicDialog').ejDialog('instance');
			obj.refresh();
		});
    },
    onOpen: function (e) {
        $("#btnOpen").hide();
        $("#basicDialog").ejDialog("open");
    },
    onDialogClose: function (e) {
        $("#btnOpen").show();
    },
    render: function () {
        return (   
        React.createElement("div", {id: "dialog_default"}, 
            React.createElement(EJ.Button, {id: "btnOpen", size: "medium", type: "button", height: 30, width: 150, text: "Open Dialog", click: this.onOpen}
            ), 
		    React.createElement(EJ.Dialog, {id: "basicDialog", isResponsive: true, containment: "#dialog_default", width: 300, height: 300, title: "Audi Q3 Drive", allowDraggable: true, enableResize: true, close: this.onDialogClose}, 
                React.createElement("h1", null, "Audi Q3"), 
                React.createElement("div", {className: "cnt"}, 
                    "It is a concept vehicle with Liquid Silver body colour, 20-inch wheels, fabric folding roof, electrically-controlled hood, 4-cylinder 2.0 TDI engine rated 204 PS (150 kW; 201 hp)" + ' ' +
                    "and 400 N·m (295.02 lbf·ft), diesel particulate filter and Bluetec emission control system, quattro permanent four-wheel drive system with Haldex clutch," + ' ' +
                    "Audi S tronic dual-clutch gearbox, McPherson-strut front axle and a four-link rear axle, Audi drive select system with 3 modes (dynamic, sport, efficiency)," + ' ' +
                    "MMI control panel with touch pad and dual-view technology, sound system with the prominent extending tweeters."
                )
            )
        )
        );
    }
});  

ReactDOM.render(React.createElement(DefaultDialog, null), document.getElementById('dialog-default'));