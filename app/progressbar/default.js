var DefaultProgressbar = React.createClass({displayName: "DefaultProgressbar",
    render: function () {
        return (
            React.createElement("div", {id: "progressbar_default"}, 
                React.createElement("div", {className: "imgframe"}, 
                    React.createElement("span", {className: "txt"}, "Water Purification"), 
                    React.createElement(EJ.ProgressBar, {value: 45, height: "20", text: "45 %"}
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(DefaultProgressbar, null), document.getElementById('progressbar-default'));