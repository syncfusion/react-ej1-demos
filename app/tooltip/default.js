var DefaultTooltip = React.createClass({displayName: "DefaultTooltip",
    render: function () {
        return (
            React.createElement("div", {id: "tooltip_default"}, 
                React.createElement("div", {class: "frame"}, 
                    React.createElement("div", {class: "control"}, 
                        "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ", React.createElement(EJ.Tooltip, {id: "link1", content: "ECMAScript (or ES) is a trademarked scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262."}, React.createElement("u", null, " ECMAScript "), " "), "language specification. Alongside HTML and CSS, it is one of the three essential technologies of ", React.createElement(EJ.Tooltip, {id: "link2", content: "The World Wide Web (WWW) is an information space where documents and other web resources are identified by URLs, interlinked by hypertext links, and can be accessed via the Internet.", "position-stem-horizontal": "left", "position-stem-vertical": "center", "position-target-horizontal": "right", "position-target-vertical": "center"}, React.createElement("u", null, " World Wide Web "), " "), "content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting ", React.createElement(EJ.Tooltip, {id: "link3", content: "Object-oriented programming (OOP) is a programming language model organized around objects rather than \"actions\" and data rather than logic.", "position-stem-horizontal": "right", "position-stem-vertical": "center", "position-target-horizontal": "left", "position-target-vertical": "center"}, " ", React.createElement("u", null, "object - oriented "), " "), ", imperative, and functional programming styles."
                    )
                )
            )
           );
        }
    });

ReactDOM.render(React.createElement(DefaultTooltip, null), document.getElementById('tooltip-default'));