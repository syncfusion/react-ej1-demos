"use strict";

ReactDOM.render(
    React.createElement("div", {className: "control"}, 
                        React.createElement(EJ.DateTimePicker, {type: "text", id: "dateTime", width: "100%", "timeDrillDown-enabled": true, "timeDrillDown-interval": 5, "timeDrillDown-showMeridian": true})
                    ),
		  document.getElementById('datetimepicker-default')
);