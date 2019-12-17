"use strict";

ReactDOM.render(
  <div>  
    <div className="lblTitle">Select a country</div><br/>
  	<EJ.ListBox id="grouping" width="100%" dataSource={skillset} fields={window.skillFields}>
    </EJ.ListBox>
  </div>,
  document.getElementById('listbox-grouping')
);