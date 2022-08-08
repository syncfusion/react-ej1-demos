"use strict";

ReactDOM.render(
    React.createElement("div", {className: "control"}, 
                        React.createElement("div", {class: "element"}, 
                            React.createElement(EJ.GroupButton, {id: "groupButton", groupButtonMode: ej.GroupButtonMode.RadioButton, dataSource: groupButton_content, width: "100%"})
                        )
     ),   
		  document.getElementById('button-groupbutton')
);