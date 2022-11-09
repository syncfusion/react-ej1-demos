var DefaultUploadbox = React.createClass({
    render: function () {
        return (
            <div id="tooltip_default">
                <div class="posupload">Select a file to upload </div>
                  <EJ.Uploadbox id="UploadDefault" saveUrl= {savefiles} removeUrl= {removefiles}></EJ.Uploadbox>
            </div>
        );
                }
                });

        ReactDOM.render(<DefaultUploadbox />, document.getElementById('uploadbox-default'));