var DefaultRadial = React.createClass({
  componentDidMount: function () {
    $('#radialone').addClass('e-overwrite');
  },
  render: function () {
    return (  
  <div className="controlDefault" id="radialDefault">
    <EJ.RadialMenu id="radialone" radius={125} position={position} autoOpen={true}>
      <ul>
        <li data-ej-imageurl="content/images/radialmenu/font.png" data-ej-text="Bold" data-ej-click="bold"></li>
        <li data-ej-imageurl="content/images/radialmenu/f1.png" data-ej-text="Italic" data-ej-click="italic"></li>
        <li data-ej-imageurl="content/images/radialmenu/redo.png" data-ej-text="Redo" data-ej-click="redo" data-ej-enabled="false"></li>
        <li data-ej-imageurl="content/images/radialmenu/undo.png" data-ej-text="Undo" data-ej-click="undo" data-ej-enabled="false"></li>
      </ul>
    </EJ.RadialMenu>
  </div>
    );
  }
});

ReactDOM.render(<DefaultRadial />, document.getElementById('radialmenu-default'));