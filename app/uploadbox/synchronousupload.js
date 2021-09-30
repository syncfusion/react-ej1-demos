var SynchronousUploadbox = React.createClass({displayName: "SynchronousUploadbox",
    ComponentDidMount: function(){
        $("#successmsg").appendTo(".control");
    },
    render: function () {
        return (
            React.createElement("div", {id: "tooltip_synchronousupload"}, 
                React.createElement("form", {action: "saveFiles.ashx", method: "post"}, 
                React.createElement("div", {class: "posupload"}, "Select a file to upload "), 
                  React.createElement(EJ.Uploadbox, {id: "UploadSync", asyncUpload: false}), 
                 React.createElement(EJ.Button, {id: "post", type: "submit", text: "Submit", showRoundedCorner: true, size: "normal"})
                    )
)
        );
                }
                });

ReactDOM.render(React.createElement(SynchronousUploadbox, null), document.getElementById('uploadbox-synchronousupload'));