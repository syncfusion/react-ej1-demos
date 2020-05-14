"use strict";

ReactDOM.render(
  <div>  
    <div className="lblTitle">Select a country</div><br/>
		<EJ.ListBox id="rtl" width="100%" dataSource={listbox_rtl} fields={listbox_rtl_fields} enableRTL={true}>
    </EJ.ListBox>
  </div>,
	document.getElementById('listbox-rtl')
);