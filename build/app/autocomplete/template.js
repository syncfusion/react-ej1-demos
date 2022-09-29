"use strict";

ReactDOM.render(   
    React.createElement(EJ.Autocomplete, {id: "template", width: "100%", dataSource: auto_template, watermarkText: "Select a country", template: "<div class=\"flag ${sprite}\"> </div><div class=\"txt\"> ${text} </div>"}
	),
    document.getElementById('autocomplete-template')
);