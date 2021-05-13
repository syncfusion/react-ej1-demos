"use strict";

var SpellCheckTab = React.createClass({displayName: "SpellCheckTab",
    render: function () {
        return (
        React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: false, enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/spellcheck/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/spellcheck/contextmenu.html"}, "Context Menu")), 
            React.createElement("li", null, React.createElement("a", {href: "app/spellcheck/multipletargets.html"}, "Multiple Targets"))
        )
        )
      );
    }
});

ReactDOM.render(React.createElement(SpellCheckTab, null), document.getElementById('spellcheck'));
