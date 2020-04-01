"use strict";

var dManager = ej.DataManager($.extend(true, [], window.BlockDayApps)).executeLocal(ej.Query().take(10));
var group = {
    resources: ["Owners"]
};
var resourcedata = {
    dataSource: [
      { text: "Airline 1", id: 1, groupId: 1, color: "#f8a398" },
      { text: "Airline 2", id: 3, groupId: 2, color: "#56ca85" },
      { text: "Airline 3", id: 5, groupId: 1, color: "#51a0ed" }
    ],
    text: "text", id: "id", groupId: "groupId", color: "color"
};

ReactDOM.render(
      <EJ.Schedule id="blockintervalsSchedule" appointmentSettings-dataSource={dManager} appointmentSettings-id="Id" appointmentSettings-subject="Subject" appointmentSettings-startTime="StartTime" appointmentSettings-endTime="EndTime" appointmentSettings-description="Description" appointmentSettings-allDay="AllDay" appointmentSettings-recurrence="Recurrence" appointmentSettings-recurrenceRule="RecurrenceRule" appointmentSettings-resourceFields="ownerId"
                   blockoutSettings-enable={true} blockoutSettings-templateId="#blocktemplate" blockoutSettings-dataSource={window.blockTime} blockoutSettings-id="Id" blockoutSettings-subject="Subject" blockoutSettings-startTime="StartTime" blockoutSettings-endTime="EndTime" blockoutSettings-isBlockAppointment="BlockAppointment" blockoutSettings-resourceId="resId" blockoutSettings-isAllDay="FullDay"
                   width="100%" height="525px" currentDate={new Date(2017, 5, 5)} currentView="day" timeZone="UTC +00:00" group={group}>
                     <resources>
                        <resource allowMultiple={false} field="ownerId" title="Owner" name="Owners" resourceSettings={resourcedata}></resource>
                     </resources>
      </EJ.Schedule>,
		  document.getElementById('schedule-blockintervals')
);