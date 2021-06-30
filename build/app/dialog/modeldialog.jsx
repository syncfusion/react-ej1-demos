var ModalDialog = React.createClass({
    componentDidMount: function () {
        $("#Openbtn").hide();
		$(window).resize(function(){
			var obj=$('#modalDialog').ejDialog('instance');
			obj.refresh();
		});
    },
    open: function (e) {
        $("#Openbtn").hide();
        $("#modalDialog").ejDialog("open");
    },
    dialogClose: function (e) {
        $("#Openbtn").show();
    },
    validating: function(e){
        $('.error').text('');
        var user=$('#txtName').val();
        var pass=$('#txtPassword').val();
        if((user=='' && pass=='') || user=='' || pass==''){
            $('.error').text('Please fill all details');
        }
        else
            $('.error').text('Login Sucess');
    },
    render: function () {
        return (   
            <div id="modalDialogContent">
                <EJ.Button className="e-btn" id="Openbtn" size="medium" click={this.open} height={30} width={150}>
                    Click to open dialog
                </EJ.Button>
                <EJ.Dialog id="modalDialog" title="LoginForm" enableModal={true} containment="#modalDialogContent" isResponsive={true} width={300} height={350} close={this.dialogClose}>
                    <table className="tableClass">
                        <tr>
                            <td>
                                <p>Username</p>
                                <input type="text" id="txtName" name="txtName" className="ejinputtext"/><br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Password</p>
                                <input type="password" id="txtPassword" name="txtPassword" className="ejinputtext"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <EJ.CheckBox type="checkbox" id="txtRember" className="ejinputtext top" text="Remember me"></EJ.CheckBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <br />
                                <EJ.Button className="e-btn" id="downloadBtn" size="medium" click={this.validating} height="30" width="100%">
                                LOGIN
                                </EJ.Button>
                                <br/>
							    <label className="error"> </label>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" className="acc">
                                Don't have an account ? <a href="#">Signup</a>
                            </td>
                        </tr>
                    </table>
                </EJ.Dialog>
            </div>
        );
    }
});  

ReactDOM.render(<ModalDialog />, document.getElementById('dialog-modeldialog'));