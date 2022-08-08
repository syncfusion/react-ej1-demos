var SplitterIntegration = React.createClass({displayName: "SplitterIntegration",
    treeClicked: function(e){
        if (e.currentElement.hasClass('_child')) {
            var content = $('.' + e.currentElement[0].id).html();
            $('._content').html(content);
        }
    },
    render: function () {
        return (
            React.createElement("div", {id: "samplecontrol", className: "integrationContainer"}, 
                React.createElement(EJ.Splitter, {id: "integration_outterSplitter", width: "100%", height: "100%", isResponsive: true}, 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "cont"}, 
                            React.createElement("h3", {className: "h3"}, "FRENCH CITIES"), 
                            React.createElement(EJ.TreeView, {id: "treeView", className: "visibleHide", nodeSelect: this.treeClicked}, 
                                React.createElement("li", null, "PARIS", 
                                    React.createElement("ul", null, 
                                        React.createElement("li", {id: "paris", className: "_child"}, "Speciality")
                                    )
                                ), 
                                React.createElement("li", null, "CAMEMBERT", 
                                    React.createElement("ul", null, 
                                        React.createElement("li", {id: "camembert", className: "_child"}, "Speciality ")
                                    )
                                ), 
                                React.createElement("li", null, "GRENOBLE", 
                                    React.createElement("ul", null, 
                                        React.createElement("li", {id: "grenoble", className: "_child"}, "Speciality")
                                    )
                                )
                            )
                        )
                    ), 
                    React.createElement("div", null, 
                        React.createElement("div", {className: "cont"}, 
                            React.createElement("div", {className: "_content"}, "Select any city from the tree to show the description."), 
                            React.createElement("div", {className: "paris spe"}, 
                                React.createElement("h3", null, "PARIS"), 
                                "Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism..."
                            ), 
                            React.createElement("div", {className: "camembert spe"}, 
                                React.createElement("h3", null, "CAMEMBERT"), 
                                "The village in the Orne département of Normandy where the famous French cheese is originated from."
                            ), 
                            React.createElement("div", {className: "grenoble spe"}, 
                                React.createElement("h3", null, "GRENOBLE"), 
                                "The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968."
                            )
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(SplitterIntegration, null), document.getElementById('splitter-integration'));