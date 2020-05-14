"use strict";
var dManager = ej.DataManager($.extend(true, [], window.ResourcesData)).executeLocal(ej.Query().take(10));
var group = {
    resources: ["Owners"]
};
var resourcedata = {
    dataSource: [
       { text: "Nancy", id: 1, groupId: 1, color: "#f8a398" },
       { text: "Steven", id: 3, groupId: 2, color: "#56ca85" },
       { text: "Michael", id: 5, groupId: 1, color: "#51a0ed" }
    ],
    text: "text", id: "id", groupId: "groupId", color: "color"
};


ReactDOM.render(
      <EJ.Schedule id="multipleresourceSchedule" appointmentSettings-dataSource={dManager} appointmentSettings-id="Id" appointmentSettings-subject="Subject" appointmentSettings-startTime="StartTime" appointmentSettings-endTime="EndTime" appointmentSettings-description="Description" appointmentSettings-allDay="AllDay" appointmentSettings-recurrence="Recurrence" appointmentSettings-recurrenceRule="RecurrenceRule" appointmentSettings-resourceFields="ownerId"
                   width="100%" height="525px" currentView="workweek" currentDate={new Date(2017, 5, 5)} group={group}>
                     <resources>
                        <resource allowMultiple={true} field="ownerId" title="Owner" name="Owners" resourceSettings={resourcedata}></resource>
                     </resources>
      </EJ.Schedule>,
		  document.getElementById('schedule-multipleresource')
);