"use strict";

ReactDOM.render(
  <div>  
    <div className="lblTitle">Select an expert</div><br/>
		  <EJ.ListBox id="template" width="100%" dataSource={listbox_template} template='<div><img class="eimg" src="content/images/Employees/${eimg}.png" alt="employee"/><div class="ename"> ${text} </div><div class="desig"> ${desig} </div><div class="cont"> ${country} </div></div>'>
      </EJ.ListBox>
    </div>,
		document.getElementById('listbox-template')
);