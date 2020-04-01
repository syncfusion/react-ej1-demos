"use strict";

ReactDOM.render(
    <div className="control">
                        <EJ.DateTimePicker type="text" id="dateTime" width="100%" timeDrillDown-enabled={true} timeDrillDown-interval={5}timeDrillDown-showMeridian={true} ></EJ.DateTimePicker>
                    </div>,
		  document.getElementById('datetimepicker-default')
);