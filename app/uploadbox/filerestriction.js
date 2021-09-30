var FileRestrictionUploadbox = React.createClass({displayName: "FileRestrictionUploadbox",
    errorfunc: function (args)
    {
        alert(args.error);
    },
    render: function () {
        return (
            React.createElement("div", {id: "tooltip_filerestriction"}, 
                React.createElement("div", {class: "posupload"}, "Select a file to upload ", React.createElement("br", null), " Only Word document and PDF files are allowed "), 
                  React.createElement(EJ.Uploadbox, {id: "UploadFile", multipleFilesSelection: true, saveUrl: savefiles, removeUrl: removefiles, error: "errorfunc", extensionsAllow: ".docx,.pdf", extensionsDeny: ".zip,.rar"})
            )
        );
                }
                });

        ReactDOM.render(React.createElement(FileRestrictionUploadbox, null), document.getElementById('uploadbox-filerestriction'));