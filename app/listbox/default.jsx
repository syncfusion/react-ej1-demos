"use strict";

ReactDOM.render(
  <div>  
    <div className="lblTitle">Select a bike</div><br/>
		<EJ.ListBox id="default" width="100%" dataSource={BikeList} fields={window.listBoxFields}>
    </EJ.ListBox>
  </div>,
	document.getElementById('listbox-default')
);