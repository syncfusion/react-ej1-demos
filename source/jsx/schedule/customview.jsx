"use strict";

var dManager = ej.DataManager($.extend(true, [], window.Default)).executeLocal(ej.Query().take(10));
var renderdate = { start: new Date(2017, 5, 7), end: new Date(2017, 5, 10) };
var view = ["customview"];


ReactDOM.render(
      <EJ.Schedule id="customviewSchedule" width="100%" height="525px" views={view} currentView="customview" renderDates={renderdate} currentDate={new Date(2017,5,8)} appointmentSettings-dataSource={dManager} appointmentSettings-id="Id" appointmentSettings-subject="Subject" appointmentSettings-startTime="StartTime" appointmentSettings-endTime="EndTime" appointmentSettings-description="Description" appointmentSettings-allDay="AllDay" appointmentSettings-recurrence="Recurrence" appointmentSettings-recurrenceRule="RecurrenceRule">
      </EJ.Schedule>,
		  document.getElementById('schedule-customview')
);