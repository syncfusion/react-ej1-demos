"use strict";

var dManager = ej.DataManager($.extend(true, [], window.Default)).executeLocal(ej.Query().take(10));

ReactDOM.render(
      <EJ.Schedule id="horizontalSchedule" width="100%" height="525px" currentDate={new Date(2017, 5, 5)} orientation='horizontal' appointmentSettings-dataSource={dManager} appointmentSettings-id="Id" appointmentSettings-subject="Subject" appointmentSettings-startTime="StartTime" appointmentSettings-endTime="EndTime" appointmentSettings-description="Description" appointmentSettings-allDay="AllDay" appointmentSettings-recurrence="Recurrence" appointmentSettings-recurrenceRule="RecurrenceRule">
      </EJ.Schedule>,
		  document.getElementById('schedule-horizontal')
);