var TemplateTooltip = React.createClass({displayName: "TemplateTooltip",
    render: function () {
        return (
            React.createElement("div", {id: "tooltip_template"}, 
                React.createElement("div", {className: "frame"}, 
                    React.createElement("div", {className: "ctrl col-md-4"}, 
                        React.createElement(EJ.Tooltip, {id: "leftImg", width: "440px", height: "200px", "position-stem-horizontal": "center", "position-stem-vertical": "bottom", "position-target-horizontal": "center", "position-target-vertical": "center", content: "<div className=\"main\"> <div className=\"poster\"> <img src=\"../../../content/images/tooltip/template-05.png\" className=\"logo\"> </div> <div className=\"def\"> <h4> Delphi Succinctly </h4><div className=\"link\"><div className=\"author\"> <b> Author: </b></div> <div className=\"category\"> Marco Breveglieri </div></div><div className=\"description\"> Learn the fundamentals of Delphi to build a variety of solutions for many devices and platforms. <a href=\"#\">More...</a></div><div className=\"rate\"> <div className=\"rateDef\"> Rate this: </div><input className=\"rating\"></input></div><div className=\"btnGroup\"><button className=\"button1\"> Download Now</button> <button className=\"button2\"> Review Comments</button></div><div></div>"}, 
                        React.createElement("img", {className: "ctrImg", src: "../../../content/images/tooltip/template-05.png"}), 
                        React.createElement("div", {className: "new"}, "Delphi Succinctly")
                        )
                    ), 
                    React.createElement("div", {className: "ctrl col-md-4"}, 
                        React.createElement(EJ.Tooltip, {id: "centerImg", width: "440px", height: "200px", "position-stem-horizontal": "center", "position-stem-vertical": "bottom", "position-target-horizontal": "center", "position-target-vertical": "center", content: "<div className=\"main\"> <div className=\"poster\"> <img src=\"../../../content/images/tooltip/template-04.png\" className=\"logo\"> </div> <div className=\"def\"> <h4> Roslyn Succinctly </h4><div className=\"link\"> <div className=\"author\"><b> Author:</b> </div> <div className=\"category\"> Alessandro Del Sole </div></div><div className=\"description\">Microsoft has only recently embraced the world of open source software, offering <a href=\"#\">More...</a> </div><div className=\"rate\"><div className=\"rateDef\"> Rate this: </div><input className=\"rating\"></input></div><div className=\"btnGroup\"><button className=\"button1\">Download Now</button> <button className=\"button2\"> Review Comments </button></div><div></div>"}, 
                        React.createElement("img", {className: "ctrImg", src: "../../../content/images/tooltip/template-04.png"}), 
                        React.createElement("div", {className: "new"}, "Roslyn Succinctly")
                        )
                    ), 
                    React.createElement("div", {className: "ctrl col-md-4"}, 
                         React.createElement(EJ.Tooltip, {id: "RightImg", width: "440px", height: "200px", "position-stem-horizontal": "center", "position-stem-vertical": "bottom", "position-target-horizontal": "center", "position-target-vertical": "center", content: "<div className=\"main\"> <div className=\"poster\"> <img src=\"../../../content/images/tooltip/template-06.png\" className=\"logo\"> </div> <div className=\"def\"> <h4> Python Succinctly </h4><div className=\"link\"> <div className=\"author\"><b> Author:</b> </div> <div className=\"category\"> Jason Cannon </div></div><div className=\"description\">Learn to use the Python language to create programs of all kindsto creating practical applications. <a href=\"#\">More...</a> </div><div className=\"rate\"><div className=\"rateDef\"> Rate this: </div><input className=\"rating\"></input></div><div className=\"btnGroup\"><button className=\"button1\">Download Now</button> <button className=\"button2\"> Review Comments </button></div><div></div>"}, 
                        React.createElement("img", {className: "ctrImg", src: "../../../content/images/tooltip/template-06.png"}), 
                        React.createElement("div", {className: "new"}, "Python Succinctly")
                         )
                    )
                )
            )
        );
                }
                });

        ReactDOM.render(React.createElement(TemplateTooltip, null), document.getElementById('template-tooltip'));