var Scrollbar = React.createClass({displayName: "Scrollbar",
 componentDidMount: function () {
      $(window).resize(function(){
        setTimeout(function () {
                var scrollobj = $("#scrollcontent").data("ejScroller");
                scrollobj && scrollobj.refresh();
        }, 500);
    })
 },
render: function(){
	return (
    React.createElement("div", {className: "control"}, 
                        React.createElement(EJ.Scroller, {id: "scrollcontent", height: 300, width: "100%"}, 
						    React.createElement("div", null, 
								React.createElement("div", {className: "sampleContent"}, 
									React.createElement("h3", {style: {fontsize: 20 + "px"}}, "MVC"), 
									React.createElement("div", null, 
										React.createElement("p", null, 
											"Model–view–controller (MVC) is a software architecture pattern which separates the" + ' ' +
										"representation of information from the user's interaction with it." + ' ' +
										"The model consists of application data, business rules, logic, and functions. A view can be any" + ' ' +
										"output representation of data, such as a chart or a diagram. Multiple views of the same data" + ' ' + 
										"are possible, such as a bar chart for management and a tabular view for accountants." + ' ' + 
										"The controller mediates input, converting it to commands for the model or view.The central" + ' ' + 
										"ideas behind MVC are code reusability and n addition to dividing the application into three" + ' ' + 
										"kinds of components, the MVC design defines the interactions between them."
										), 
										React.createElement("ul", null, 
											React.createElement("li", null, 
												React.createElement("b", null, "A controller "), "can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document)." + ' ' + 
													 "It can also send commands to the model to update the model's state (e.g., editing a document)."
											), 
											React.createElement("li", null, 
												React.createElement("b", null, "A model"), " notifies its associated views and controllers when there has been a change in its state. This notification allows the views to produce updated output, and the controllers to change the available set of commands." + ' ' + 
													"A passive implementation of MVC omits these notifications, because the application does not require them or the software platform does not support them."
											), 
											React.createElement("li", null, 
												React.createElement("b", null, "A view"), " requests from the model the information that it needs to generate an output representation to the user."
											)
										)
									)
								)
                            )
                        )
                    )
        );
    }
});  

ReactDOM.render(React.createElement(Scrollbar, null), document.getElementById('scroller-default'));