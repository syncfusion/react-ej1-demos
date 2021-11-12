var DefaultRadial = React.createClass({displayName: "DefaultRadial",
  componentDidMount: function () {
    $('#radialone').addClass('e-overwrite');
  },
  render: function () {
    return (  
  React.createElement("div", {className: "controlDefault", id: "radialDefault"}, 
    React.createElement(EJ.RadialMenu, {id: "radialone", radius: 125, position: position, autoOpen: true}, 
      React.createElement("ul", null, 
        React.createElement("li", {"data-ej-imageurl": "content/images/radialmenu/font.png", "data-ej-text": "Bold", "data-ej-click": "bold"}), 
        React.createElement("li", {"data-ej-imageurl": "content/images/radialmenu/f1.png", "data-ej-text": "Italic", "data-ej-click": "italic"}), 
        React.createElement("li", {"data-ej-imageurl": "content/images/radialmenu/redo.png", "data-ej-text": "Redo", "data-ej-click": "redo", "data-ej-enabled": "false"}), 
        React.createElement("li", {"data-ej-imageurl": "content/images/radialmenu/undo.png", "data-ej-text": "Undo", "data-ej-click": "undo", "data-ej-enabled": "false"})
      )
    )
  )
    );
  }
});

ReactDOM.render(React.createElement(DefaultRadial, null), document.getElementById('radialmenu-default'));