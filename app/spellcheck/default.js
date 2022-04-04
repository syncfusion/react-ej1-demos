"use strict";
var DefaultDialog = React.createClass({displayName: "DefaultDialog",
    checkInDialog: function (e) {
        var obj = $("#SpellCheck1").data("ejSpellCheck");
        obj.showInDialog();
    },
    render: function () {
        return (
        React.createElement("div", {id: "dialog_default"}, 
            React.createElement(EJ.SpellCheck, {id: "SpellCheck1", "dictionarySettings-dictionaryUrl": "//js.syncfusion.com/demos/ejservices/api/SpellCheck/CheckWords", "dictionarySettings-customDictionaryUrl": "//js.syncfusion.com/demos/ejservices/api/SpellCheck/AddToDictionary", "contextMenuSettings-enable": false}, 
                "Facebook is a social networking service headquartered in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo, Andrew McCollum, Dustin and Chris Hughes." + ' ' +
                "The fouders had initially limited the websites membrship to Harvard students, but later expanded it to collges in the Boston area, the Ivy League, and Stanford Univrsity. It graually added support for students at various other universities and later to high-school students."
            ), 
            React.createElement(EJ.Button, {id: "btnCheck", type: "button", height: 30, text: "Spell Check", click: this.checkInDialog}
            )
        )
        );
    }
});

ReactDOM.render(React.createElement(DefaultDialog, null), document.getElementById('spellcheck-default'));