var FormsTooltip = React.createClass({
    onOpen: function (args) {
        var target = $("#details").data("ejTooltip");
		
		        if(args.model.content == "Enter a valid email address")
                target.setModel({cssClass : "info"});
			
                else
			    target.setModel({cssClass : "warning"}); 
			
    },
    render: function () {
        return (
            <div id="tooltip_forms">
              <div className="cols-sample-area">
                <div id="form" className="frame">
                    <EJ.Tooltip id="details" trigger="focus" width="175px" height="30px" target=".form-control" position-stem-horizontal="left" position-stem-vertical="center" position-target-horizontal="right" position-target-vertical="center" beforeOpen="onOpen" hover="onOpen">
                    <form id="details" role="form">
                        <fieldset>
                            <div className="form-group">
                                <label for="name">User Name:</label>
                                <input className="form-control" type="text" id="name" name="firstname" title="Please enter your name" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email Address:</label>
                                <input className="form-control" id="email" type="text" name="email" title="Enter a valid email address" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input className="form-control" id="pwd" type="password" name="pwd" title="Be at least 8 characters length" />
                            </div>
                            <div className="form-group">
                                <label for="Cpwd">Confirm Password:</label>
                                <input className="form-control" type="password" id="Cpwd" name="Cpwd" title="Re-enter your password" />
                            </div>

                            <EJ.Button id="sample" type="submit" text="Submit" showRoundedCorner={true} size="medium"></EJ.Button>
                            <EJ.Button id="clear" type="reset" text="Reset" showRoundedCorner={true} size="medium"></EJ.Button>
                        </fieldset>
                    </form>
                    </EJ.Tooltip>
                </div>
              </div>
                    

                 
            </div>
        );
    }
});

ReactDOM.render(<FormsTooltip />, document.getElementById('tooltip-forms'));