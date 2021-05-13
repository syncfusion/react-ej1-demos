var Splitter = React.createClass({
    componentDidMount: function () {
        var self=this;
		$(window).resize(function(){
			setTimeout(function () {
                self.refreshContent();
			}, 1000);
		});
	},
    refreshContent: function(){
		var defaultSplitter = $("#default_outerSplitter").data("ejSplitter");
		var integration = $("#integration_outterSplitter").data("ejSplitter");
		var nestedOuter = $("#nested_outerSplitter").data("ejSplitter");
		var nestedInner = $("#nested_innerSplitter").data("ejSplitter");
		if (defaultSplitter  && defaultSplitter.element.closest(".e-content-item").css("display") != "none")
			defaultSplitter.refresh();
		if (integration && integration.element.closest(".e-content-item").css("display") != "none")
			integration.setModel({properties : [{ paneSize: "50%" }, {}]});
		if (nestedOuter && nestedOuter.element.closest(".e-content-item").css("display") != "none"){
			nestedOuter.setModel({properties : [{ paneSize: 60, minSize: 30 }, { minSize: 30 }]});
			nestedInner.setModel({properties : [{ paneSize: "33%", minSize: 30 }, { paneSize: "33%", minSize: 30 }, {minSize: 30 }]});
		}
    },
    activeItem: function() {
        this.refreshContent();
    },

render: function () {
        return (   
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true} itemActive={this.activeItem}>
        <ul>
            <li><a href="app/splitter/default.html">Default</a></li>
            <li><a href="app/splitter/nestedsplitter.html">Nested Splitter</a></li>
            <li><a href="app/splitter/integration.html">Integration</a></li>
        </ul>
    </EJ.Tab>
    );
  }
});

ReactDOM.render(<Splitter />, document.getElementById('splitter'));