var TemplateWaitingPopup = React.createClass({
    render: function () {
        return (   
            <div  id="waitingpopup_template">  
                <EJ.WaitingPopup id="template" showOnInit={true} width="100%" template={$("#content")} appendTo="#template">
                </EJ.WaitingPopup>
            </div>
        );
    }
});  


ReactDOM.render(<TemplateWaitingPopup />, document.getElementById('waitingpopup-template'));