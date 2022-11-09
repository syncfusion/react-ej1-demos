var FileRestrictionUploadbox = React.createClass({
    errorfunc: function (args)
    {
        alert(args.error);
    },
    render: function () {
        return (
            <div id="tooltip_filerestriction">
                <div class="posupload">Select a file to upload <br/> Only Word document and PDF files are allowed </div>
                  <EJ.Uploadbox id="UploadFile" multipleFilesSelection= {true} saveUrl= {savefiles} removeUrl= {removefiles} error="errorfunc" extensionsAllow=".docx,.pdf" extensionsDeny=".zip,.rar"></EJ.Uploadbox>
            </div>
        );
                }
                });

        ReactDOM.render(<FileRestrictionUploadbox />, document.getElementById('uploadbox-filerestriction'));