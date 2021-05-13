"use strict";

var SpellCheckTab = React.createClass({
    render: function () {
        return (
        <EJ.Tab id="scrollTab" dataType="dataType" contentType="contentType" async="async" height="100%" enableTabScroll={false} enableTabScroll={true}>
        <ul>
            <li><a href="app/spellcheck/default.html">Default</a></li>
            <li><a href="app/spellcheck/contextmenu.html">Context Menu</a></li>
            <li><a href="app/spellcheck/multipletargets.html">Multiple Targets</a></li>
        </ul>
        </EJ.Tab>
      );
    }
});

ReactDOM.render(<SpellCheckTab />, document.getElementById('spellcheck'));
