"use strict";

var FileExplorer = React.createClass({
    activeItem: function () {
        var fileExplorerObj = $('.e-active-content .e-fileexplorer').data("ejFileExplorer");
        if (fileExplorerObj)
            fileExplorerObj.adjustSize();
    },

render: function () {
        return (
    <EJ.Tab id="scrollTab" dataType="dataType" contentType="contentType" async="async" height="100%" enableTabScroll={true} itemActive={this.activeItem}>
        <ul>
            <li><a href="app/fileexplorer/default.html">Default</a></li>
            <li><a href="app/fileexplorer/customtool.html">Customtool</a></li>
            <li><a href="app/fileexplorer/localization.html">Localization</a></li>
        </ul>
    </EJ.Tab>
    );
  }
});

ReactDOM.render(<FileExplorer />, document.getElementById('fileexplorer'));



