"use strict";

ReactDOM.render(   
    <EJ.ComboBox id="template" width="100%" dataSource = {combo_template} fields={combo_template_fields} placeholder="Select a employee" headerTemplate= '<div class="combotemplate head">  Photo  <span style="padding-left:42px"> Contact Info </span></div>' itemTemplate= '<div><img class="combotemplate eimg" src="content/images/combobox/${eimg}.png" alt="employee"/><div class="combotemplate ename"> ${text} </div><div class="combotemplate temp"> ${country} </div></div>' footerTemplate= '<div class="combotemplate Foot"> Total Items Count: 4 </div>' >
	</EJ.ComboBox>,
    document.getElementById('combobox-template')
);