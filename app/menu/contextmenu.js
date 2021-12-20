var ContextMenuMenu = React.createClass({displayName: "ContextMenuMenu",
    render: function () {
        return (   
            React.createElement("div", {id: "menu_contextmenu"}, 
                React.createElement("div", {id: "target", className: "textarea"}, 
                    "HTML is written in the form of HTML elements consisting of tags enclosed in angle" + ' ' +
                    "brackets (like" + ' ' +
                    "<html>" + ' ' +
                    "),within the web page content. HTML tags most commonly come in pairs like and ,although" + ' ' +
                    "some tags, known as empty elements, are unpaired, for example" + ' ' +
                    "<img>. The purpose of a web browser is to read HTML documents and compose them into" + ' ' +
                    "visible or audible web pages. The browser does not display the HTML tags, but uses" + ' ' +
                    "the tags to interpret the content of the page."
                ), 
                React.createElement(EJ.Menu, {id: "context", menuType: "contextmenu", openOnClick: false, contextMenuTarget: "#target"}, 
                    React.createElement("li", null, React.createElement("a", null, "Cut")), 
                    React.createElement("li", null, React.createElement("a", null, "Copy")), 
                    React.createElement("li", {className: "e-separator"}, React.createElement("a", null, "Paste")), 
                    React.createElement("li", null, React.createElement("a", null, "Comments")), 
                    React.createElement("li", null, React.createElement("a", null, "Links")), 
                    React.createElement("li", null, React.createElement("a", null, "Clear Formatting"))
                )
            )
        );
    }
});  

ReactDOM.render(React.createElement(ContextMenuMenu, null), document.getElementById('menu-contextmenu'));