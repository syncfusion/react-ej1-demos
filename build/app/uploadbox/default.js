var DefaultUploadbox = React.createClass({displayName: "DefaultUploadbox",
    render: function () {
        return (
            React.createElement("div", {id: "tooltip_default"}, 
                React.createElement("div", {class: "posupload"}, "Select a file to upload "), 
                  React.createElement(EJ.Uploadbox, {id: "UploadDefault", saveUrl: savefiles, removeUrl: removefiles})
            )
        );
                }
                });

        ReactDOM.render(React.createElement(DefaultUploadbox, null), document.getElementById('uploadbox-default'));