"use strict";

ReactDOM.render(   
    <EJ.Autocomplete id="template" width="100%" dataSource = {auto_template} watermarkText="Select a country" template='<div class="flag ${sprite}"> </div><div class="txt"> ${text} </div>'>
	</EJ.Autocomplete>,
    document.getElementById('autocomplete-template')
);