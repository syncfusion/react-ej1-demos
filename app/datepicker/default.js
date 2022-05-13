"use strict";

ReactDOM.render(
   React.createElement("div", {className: "control"}, 
                        React.createElement(EJ.DatePicker, {id: "datepick", width: "100%"})
                    ),
		  document.getElementById('datepicker-default')
);
