var SplitterIntegration = React.createClass({
    treeClicked: function(e){
        if (e.currentElement.hasClass('_child')) {
            var content = $('.' + e.currentElement[0].id).html();
            $('._content').html(content);
        }
    },
    render: function () {
        return (
            <div id="samplecontrol" className="integrationContainer">
                <EJ.Splitter id="integration_outterSplitter" width= "100%" height="100%" isResponsive={true}>
                    <div>
                        <div className="cont">
                            <h3 className="h3">FRENCH CITIES</h3>
                            <EJ.TreeView id="treeView" className="visibleHide" nodeSelect={this.treeClicked}>
                                <li>PARIS
                                    <ul>
                                        <li id="paris" className="_child">Speciality</li>
                                    </ul>
                                </li>
                                <li>CAMEMBERT
                                    <ul>
                                        <li id="camembert" className="_child">Speciality </li>
                                    </ul>
                                </li>
                                <li>GRENOBLE
                                    <ul>
                                        <li id="grenoble" className="_child">Speciality</li>
                                    </ul>
                                </li>
                            </EJ.TreeView>
                        </div>
                    </div>
                    <div>
                        <div className="cont">
                            <div className="_content">Select any city from the tree to show the description.</div>
                            <div className="paris spe">
                                <h3>PARIS</h3>
                                Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...
                            </div>
                            <div className="camembert spe">
                                <h3>CAMEMBERT</h3>
                                The village in the Orne département of Normandy where the famous French cheese is originated from.
                            </div>
                            <div className="grenoble spe">
                                <h3>GRENOBLE</h3>
                                The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.
                            </div>
                        </div>
                    </div>
                </EJ.Splitter>
            </div>
        );
    }
});

ReactDOM.render(<SplitterIntegration />, document.getElementById('splitter-integration'));