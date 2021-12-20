var SynchronousUploadbox = React.createClass({
    ComponentDidMount: function(){
        $("#successmsg").appendTo(".control");
    },
    render: function () {
        return (
            <div id="tooltip_synchronousupload">
                <form action="saveFiles.ashx" method="post">
                <div class="posupload">Select a file to upload </div>
                  <EJ.Uploadbox id="UploadSync" asyncUpload={false}></EJ.Uploadbox>
                 <EJ.Button id="post" type="submit" text="Submit" showRoundedCorner={true} size="normal"></EJ.Button>
                    </form>
</div>
        );
                }
                });

ReactDOM.render(<SynchronousUploadbox />, document.getElementById('uploadbox-synchronousupload'));