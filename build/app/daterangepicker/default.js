"use strict";

ReactDOM.render(
    React.createElement("div", {className: "control"}, 
                        React.createElement(EJ.DateRangePicker, {type: "text", id: "daterangepicker", width: "100%"})
                    ),
		  document.getElementById('daterangepicker-default')
);