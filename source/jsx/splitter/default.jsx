"use strict";

ReactDOM.render(   
    <div id="samplecontrol" className="defaultContainer">
	    <EJ.Splitter id="default_outerSplitter" width= "100%" height="100%" isResponsive={true} orientation={ej.Orientation.Vertical}>
            <div>
                <div className="cont">Pane 1 </div>
            </div>
            <div>
                <div className="cont">Pane 2 </div>
            </div>
        </EJ.Splitter>
    </div>,
	document.getElementById('splitter-default')
);  