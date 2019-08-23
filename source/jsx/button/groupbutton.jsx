"use strict";

ReactDOM.render(
    <div className="control">
                        <div class="element">
                            <EJ.GroupButton id="groupButton"  groupButtonMode={ej.GroupButtonMode.RadioButton} dataSource={groupButton_content} width="100%"></EJ.GroupButton>
                        </div>
     </div>,   
		  document.getElementById('button-groupbutton')
);