"use strict";

var FileExplorer = React.createClass({displayName: "FileExplorer",
    activeItem: function () {
        var fileExplorerObj = $('.e-active-content .e-fileexplorer').data("ejFileExplorer");
        if (fileExplorerObj)
            fileExplorerObj.adjustSize();
    },

render: function () {
        return (
    React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true, itemActive: this.activeItem}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/fileexplorer/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/fileexplorer/customtool.html"}, "Customtool")), 
            React.createElement("li", null, React.createElement("a", {href: "app/fileexplorer/localization.html"}, "Localization"))
        )
    )
    );
  }
});

ReactDOM.render(React.createElement(FileExplorer, null), document.getElementById('fileexplorer'));



