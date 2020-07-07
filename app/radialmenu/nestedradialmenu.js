var NestedRadial = React.createClass({displayName: "NestedRadial",
  componentDidMount: function () {
    $('#radialtwo').addClass('e-overwrite');
  },
  render: function () {
    return (   
    React.createElement("div", {className: "controlNested", id: "nestedRadial"}, 
        React.createElement(EJ.RadialMenu, {id: "radialtwo", radius: 125, position: position, autoOpen: true}, 
            React.createElement("ul", null, 
                React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/copy.png", "data-ej-text": "Copy", "data-ej-click": "copy"}), 
                React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/font.png", "data-ej-text": "Bold", "data-ej-click": "bold"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/f1.png", "data-ej-text": "Italic", "data-ej-click": "italic"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/font.png", "data-ej-text": "Bold", "data-ej-click": "bold"})
                    )
                ), 
                React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/list.png", "data-ej-text": "List", "data-ej-click": "unorderedList"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/list.png", "data-ej-text": "Bullets", "data-ej-click": "unorderedList"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/l5.png", "data-ej-text": "Numbering", "data-ej-click": "orderedList"})
                    )
                ), 
                React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/paste.png", "data-ej-text": "Paste", "data-ej-click": "paste"}), 
                React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/undo.png", "data-ej-text": "Undo", "data-ej-click": "undo", "data-ej-enabled": "false"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/undo.png", "data-ej-text": "Undo", "data-ej-click": "undo", "data-ej-enabled": "false"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/redo.png", "data-ej-text": "Redo", "data-ej-click": "redo", "data-ej-enabled": "false"})
                    )
                ), 
                React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/align.png", "data-ej-text": "Alignment", "data-ej-click": "center"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/a1.png", "data-ej-text": "Left", "data-ej-click": "left"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/RadialMenu/a2.png", "data-ej-text": "Right", "data-ej-click": "right"})
                    )
                )
            )
        )
    )
    );
  }
});

ReactDOM.render(React.createElement(NestedRadial, null), document.getElementById('radialmenu-nestedradialmenu'));