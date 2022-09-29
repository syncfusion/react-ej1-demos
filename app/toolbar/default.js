"use strict";

ReactDOM.render(
    React.createElement(EJ.Toolbar, {width: "100%"}, 
        React.createElement("ul", null, 
            React.createElement("li", {id: "Left", title: "Left"}, 
                React.createElement("div", {className: "ToolbarItems LeftAlign_tool"})
            ), 
            React.createElement("li", {id: "Center", title: "Center"}, 
                React.createElement("div", {className: "ToolbarItems CenterAlign_tool"})
            ), 
            React.createElement("li", {id: "Right", title: "Right"}, 
                React.createElement("div", {className: "ToolbarItems RightAlign_tool"})
            ), 
            React.createElement("li", {id: "Justify", title: "Justify"}, 
                React.createElement("div", {className: "ToolbarItems Justify_tool"})
            )
        ), 
            React.createElement("ul", null, 
                React.createElement("li", {id: "Bold", title: "Bold"}, 
                    React.createElement("div", {className: "ToolbarItems Bold_tool"})
                ), 
                React.createElement("li", {id: "Italic", title: "Italic"}, 
                    React.createElement("div", {className: "ToolbarItems Italic_tool"})
                ), 
                React.createElement("li", {id: "StrikeThrough", title: "Strike Through"}, 
                    React.createElement("div", {className: "ToolbarItems StrikeThrough_tool"})
                ), 
                React.createElement("li", {id: "UndeLine", title: "UnderLine"}, 
                    React.createElement("div", {className: "ToolbarItems Underline_tool"})
                )
            )
    ),
document.getElementById('toolbar-default')
);