"use strict";

ReactDOM.render(
  <div>  
    <div className="lblTitle">Select a bike</div><br/>
    <EJ.ListBox id="checkbox" width="100%" dataSource={BikeList} showCheckbox={true}>
    </EJ.ListBox>
  </div>,
	document.getElementById('listbox-checkbox')
);