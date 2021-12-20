"use strict";

ReactDOM.render( 
    <div id="samplecontrol" className="nestedContainer">
	    <EJ.Splitter id="nested_outerSplitter" width= "100%" isResponsive={true}
        orientation={ej.Orientation.Vertical} properties={property1}>
            <div>
                <div className="content">
                    <h3 className="h3">FRENCH CITIES </h3>
                </div>
            </div>
            <EJ.Splitter id="nested_innerSplitter" orientation={ej.Orientation.Horizontal} width= "100%" isResponsive={true} properties={property2}>
                <div>
                    <div className="content">
                        <h3 className="h3">PARIS </h3> 
                        Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the 
                        romanticism...
                    </div>
                </div>
                <div>
                    <div className="content">
                        <h3 className="h3">CAMEMBERT </h3> 
                        The village in the Orne département of Normandy where the famous French cheese is originated from.
                    </div>
                </div>
                <div>
                    <div className="content">
                        <h3 className="h3">GRENOBLE </h3> 
                        The capital city of the French Alps and a major scientific center surrounded by many ski resorts, 
                        host of the Winter Olympics in 1968.
                    </div>
                </div>
            </EJ.Splitter>
        </EJ.Splitter>
    </div>,
	document.getElementById('splitter-nestedsplitter')
);