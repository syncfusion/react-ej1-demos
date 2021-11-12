"use strict";

ReactDOM.render(
    React.createElement("div", {className: "control"}, 
                        React.createElement(EJ.TimePicker, {type: "text", id: "time", width: "100%"})
                    ),
		  document.getElementById('timepicker-default')
);