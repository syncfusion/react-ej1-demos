"use strict";

var SpellMenu = React.createClass({    
    checkInTarget: function (e) {
        var obj = $("#SpellCheck2").data("ejSpellCheck");
        obj.validate();
    },
    render: function () {
        return (
        <div id="spell_menu">
            <EJ.SpellCheck id="SpellCheck2" dictionarySettings-dictionaryUrl="//js.syncfusion.com/demos/ejservices/api/SpellCheck/CheckWords" dictionarySettings-customDictionaryUrl="//js.syncfusion.com/demos/ejservices/api/SpellCheck/AddToDictionary">
                It is a concept vehicle with Liuid Silver body colour, 20-inch wheels, fabric foding roof, electrically-controlled hood, 4-cylinder 2.0 TDI engine rated 204 PS (150 kW; 201 hp)
                and 400  (295.02 lbf ft), diesel particulate filter and Bluetec emission control system, quattro permanent four-wheel drve system,
                Audi S tronic dual-clutch gearbox, McPherson-strut front axle and a four-link rear axle, Audi drive select system with 3 modes (dynamic, sport, efficiency),
                MMI control panel with touch pad and dual-view technology, sound system with the proinent extending tweeters.
            </EJ.SpellCheck>
            <EJ.Button id="btnCheck" type="button" height={30} text="Spell Check" click={this.checkInTarget}>
            </EJ.Button>
        </div>
        );
    }
});

ReactDOM.render(<SpellMenu />, document.getElementById('contextmenu'));