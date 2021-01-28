"use strict";

var dManager = ej.DataManager($.extend(true, [], window.ResourcesData)).executeLocal(ej.Query().take(10));
var group = {
    resources: ["Rooms", "Owners"]
};
var rooms = {
    dataSource: [
        { text: "ROOM 1", id: 1, groupId: 1, color: "#cb6bb2" },
        { text: "ROOM 2", id: 2, groupId: 1, color: "#56ca85" }
    ],
    text: "text", id: "id", groupId: "groupId", color: "color"
};
var owners = {
    dataSource: [
        { text: "Nancy", id: 1, groupId: 1, color: "#ffaa00", on: 10, off: 18, customDays: ["monday", "wednesday", "friday"] },
        { text: "Steven", id: 3, groupId: 2, color: "#f8a398", on: 6, off: 10, customDays: ["tuesday", "thursday"] },
        { text: "Michael", id: 5, groupId: 1, color: "#7499e1", on: 11, off: 15, customDays: ["sunday", "tuesday", "thursday", "saturday"] },
    ],
    text: "text", id: "id", groupId: "groupId", color: "color", start: "on", end: "off", workWeek: "customDays"
};
ReactDOM.render(
      React.createElement(EJ.Schedule, {id: "customdaysSchedule", width: "100%", height: "525px", currentView: ej.Schedule.CurrentView.Workweek, currentDate: new Date(2017,5,5), showCurrentTimeIndicator: false, "appointmentSettings-dataSource": dManager, "appointmentSettings-id": "Id", "appointmentSettings-subject": "Subject", "appointmentSettings-startTime": "StartTime", "appointmentSettings-endTime": "EndTime", "appointmentSettings-description": "Description", "appointmentSettings-allDay": "AllDay", "appointmentSettings-recurrence": "Recurrence", "appointmentSettings-recurrenceRule": "RecurrenceRule", "appointmentSettings-resourceFields": "roomId,ownerId", group: group}, 
	               React.createElement("resources", null, 
                        React.createElement("resource", {allowMultiple: false, field: "roomId", title: "Room", name: "Rooms", resourceSettings: rooms}), 
                        React.createElement("resource", {allowMultiple: true, field: "ownerId", title: "Owner", name: "Owners", resourceSettings: owners})
	               )
      ),
		  document.getElementById('schedule-customresourcedays')
);
