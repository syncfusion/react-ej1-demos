var NestedRadial = React.createClass({
  componentDidMount: function () {
    $('#radialtwo').addClass('e-overwrite');
  },
  render: function () {
    return (   
    <div className="controlNested" id="nestedRadial">
        <EJ.RadialMenu id="radialtwo" radius={125} position={position} autoOpen={true}>
            <ul>
                <li data-ej-imageurl="content/images/RadialMenu/copy.png" data-ej-text="Copy" data-ej-click="copy"></li>
                <li data-ej-imageurl="content/images/RadialMenu/font.png" data-ej-text="Bold" data-ej-click="bold">
                    <ul>
                        <li data-ej-imageurl="content/images/RadialMenu/f1.png" data-ej-text="Italic" data-ej-click="italic"></li>
                        <li data-ej-imageurl="content/images/RadialMenu/font.png" data-ej-text="Bold" data-ej-click="bold"></li>
                    </ul>
                </li>
                <li data-ej-imageurl="content/images/RadialMenu/list.png" data-ej-text="List" data-ej-click="unorderedList">
                    <ul>
                        <li data-ej-imageurl="content/images/RadialMenu/list.png" data-ej-text="Bullets" data-ej-click="unorderedList"></li>
                        <li data-ej-imageurl="content/images/RadialMenu/l5.png" data-ej-text="Numbering" data-ej-click="orderedList"></li>
                    </ul>
                </li>
                <li data-ej-imageurl="content/images/RadialMenu/paste.png" data-ej-text="Paste" data-ej-click="paste"></li>
                <li data-ej-imageurl="content/images/RadialMenu/undo.png" data-ej-text="Undo" data-ej-click="undo" data-ej-enabled="false">
                    <ul>
                        <li data-ej-imageurl="content/images/RadialMenu/undo.png" data-ej-text="Undo" data-ej-click="undo" data-ej-enabled="false"></li>
                        <li data-ej-imageurl="content/images/RadialMenu/redo.png" data-ej-text="Redo" data-ej-click="redo" data-ej-enabled="false"></li>
                    </ul>
                </li>
                <li data-ej-imageurl="content/images/RadialMenu/align.png" data-ej-text="Alignment" data-ej-click="center">
                    <ul>
                        <li data-ej-imageurl="content/images/RadialMenu/a1.png" data-ej-text="Left" data-ej-click="left"></li>
                        <li data-ej-imageurl="content/images/RadialMenu/a2.png" data-ej-text="Right" data-ej-click="right"></li>
                    </ul>
                </li>
            </ul>
        </EJ.RadialMenu>
    </div>
    );
  }
});

ReactDOM.render(<NestedRadial />, document.getElementById('radialmenu-nestedradialmenu'));