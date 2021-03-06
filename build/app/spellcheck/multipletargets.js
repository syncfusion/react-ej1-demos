"use strict";

var MultipleTargets = React.createClass({displayName: "MultipleTargets",
    correctErrors: function (e) {
        var obj = $("#SpellCheck3").data("ejSpellCheck");
        obj.showInDialog();
    },
    onTargetUpdating: function (e) {
        this.onUpdate(e.previousElement);
        $(e.currentElement)[0].style.border = "thin solid blue";
    },
    onDialogClose: function (e) {
        this.onUpdate(e.targetElement);
    },
    onUpdate(e) {
        if (!ej.isNullOrUndefined(e)) {
            $(e)[0].style.border = "none";
        }
    },
    render: function () {
        return (
        React.createElement("div", {id: "spell_multiple"}, 
            React.createElement("div", {id: "control1"}, 
                "London, one of the most popular touist destinations in the world for a reason. A cultural and hisorical hub, London has an excellent public transportation system that allows visitors to see all the fantatic sights without spending a ton of money on a rental car." + ' ' +
                "London contains four World Heritage Sites."
            ), React.createElement("br", null), 
            React.createElement("span", {id: "control2"}, 
                "Rome, one of the world's most facinating cities. The old adage that Rome was not built in a day - and that you won't see it in one or even in three - is true. For the intrepid traveler who can keep pace, here is a list of must-sees." + ' ' +
                "But reember what the Romans say: Even a lifetime isn't enough to see Rome."
            ), React.createElement("br", null), 
            React.createElement(EJ.SpellCheck, {id: "SpellCheck3", "dictionarySettings-dictionaryUrl": "//js.syncfusion.com/demos/ejservices/api/SpellCheck/CheckWords", "dictionarySettings-customDictionaryUrl": "//js.syncfusion.com/demos/ejservices/api/SpellCheck/AddToDictionary", controlsToValidate: "#control1,#control2", targetUpdating: this.onTargetUpdating, dialogClose: this.onDialogClose}
            ), React.createElement("br", null), 
            React.createElement(EJ.Button, {id: "btnCheck", type: "button", height: 30, text: "Spell Check", click: this.correctErrors}
            )
        )
        );
    }
});

ReactDOM.render(React.createElement(MultipleTargets, null), document.getElementById('multipletargets'));