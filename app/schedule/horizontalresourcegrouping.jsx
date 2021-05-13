"use strict";

var dManager = ej.DataManager($.extend(true, [], window.HorizontalResourcesData)).executeLocal(ej.Query().take(10));
var group = {
    resources: ["Rooms", "Owners"]
};
var rooms = {
    dataSource: [
    { text: "ROOM 1", id: 1, groupId: 1, color: "#cb6bb2" },
    { text: "ROOM 2", id: 2, groupId: 1, color: "#56ca85" },
    { text: "ROOM 3", id: 3, groupId: 1, color: "#f8a398" }
    ],
    text: "text", id: "id", groupId: "groupId", color: "color"
};
var owners = {
    dataSource: [
        { text: "Nancy", id: 1, groupId: 1, color: "#ffaa00" },
        { text: "Steven", id: 3, groupId: 2, color: "#f8a398" },
        { text: "Michael", id: 5, groupId: 1, color: "#51a0ed" },
        { text: "Laura", id: 7, groupId: 2, color: "#ffaa00" },
        { text: "Robert", id: 8, groupId: 1, color: "#f8a398" },
        { text: "Janet", id: 4, groupId: 2, color: "#51a0ed" },
        { text: "Milan", id: 13, groupId: 3, color: "#99ff99" },
        { text: "Paul", id: 15, groupId: 3, color: "#cc99ff" }
    ],
    text: "text", id: "id", groupId: "groupId", color: "color"
};
ReactDOM.render(
      <EJ.Schedule id="horiGroupSchedule" width="100%" height="525px" cellWidth="40px" currentView={ej.Schedule.CurrentView.Workweek} orientation="horizontal" currentDate={new Date(2017,5,5)} showCurrentTimeIndicator={false} resourceHeaderTemplateId="#resTemplate" appointmentSettings-dataSource={dManager} appointmentSettings-id="Id" appointmentSettings-subject="Subject" appointmentSettings-startTime="StartTime" appointmentSettings-endTime="EndTime" appointmentSettings-description="Description" appointmentSettings-allDay="AllDay" appointmentSettings-recurrence="Recurrence" appointmentSettings-recurrenceRule="RecurrenceRule" appointmentSettings-resourceFields="roomId,ownerId" group={group}>
	               <resources>
                        <resource allowMultiple={false} field="roomId" title="Room" name="Rooms" resourceSettings={rooms}></resource>
                        <resource allowMultiple={true} field="ownerId" title="Owner" name="Owners" resourceSettings={owners}></resource>
	               </resources>
      </EJ.Schedule>,
		  document.getElementById('schedule-horizontalgrouping')
);
