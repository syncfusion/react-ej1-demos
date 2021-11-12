var ActionButtonsDialog = React.createClass({
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
            <div  id="dialog_actionbuttons">  
                <EJ.Button id="btnDialogOpen" size="medium" type="button" height={30} width={150} text="Open Dialog" click={this.open}>
                </EJ.Button>
		        <EJ.Dialog id="dialogIcon" isResponsive={true} containment="#dialog_actionbuttons" close={this.dialogClose} width={300} height={300} title="Audi-R8" allowDraggable={true} enableResize={true} actionButtons={actionbuttons}>
                    <div className="cnt">
                        The Audi R8 was initially equipped with a 4.2 litre V8 engine. Specifically, it is an all-aluminum alloy 32-valve (four valves
                        per cylinder) petrol engine, utilising Fuel Stratified Injection (FSI), and has a displacement of 4,163 cubic
                        centimetres (254.0 cu in).
                     </div>
                </EJ.Dialog>
            </div>
        );
    }
});  

ReactDOM.render(<ActionButtonsDialog />, document.getElementById('dialog-actionbuttons'));