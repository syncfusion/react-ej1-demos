"use strict";

ReactDOM.render(   
    <div  id="combobox_cascading">
				<span>Select Group</span><br />  
                <EJ.ComboBox dataSource={groups} fields-value="parentId" fields-text="text" change={combo_cascade_event} width="100%">
                </EJ.ComboBox><br />
				<span>Select Country</span><br />
                <EJ.ComboBox id="countryList" dataSource={countries} fields-text="text" enabled={false} width="100%">
                </EJ.ComboBox>
            </div>,
	document.getElementById('combobox-cascading')
);