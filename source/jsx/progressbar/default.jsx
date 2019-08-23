var DefaultProgressbar = React.createClass({
    render: function () {
        return (
            <div id="progressbar_default">
                <div className="imgframe">
                    <span className="txt">Water Purification</span>
                    <EJ.ProgressBar value={45} height="20" text="45 %">
                    </EJ.ProgressBar>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<DefaultProgressbar />, document.getElementById('progressbar-default'));