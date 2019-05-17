"use strict";

var dManager = ej.DataManager($.extend(true, [], window.Default)).executeLocal(ej.Query().take(10));
var categorizedata = [
                     { texts: "Blue Category", id: 1, color: "#43b496", fontColor: "#ffffff" },
                     { texts: "Green Category", id: 2, color: "#7f993e", fontColor: "#ffffff" },
                     { texts: "Orange Category", id: 3, color: "#cc8638", fontColor: "#ffffff" },
                     { texts: "Purple Category", id: 4, color: "#ab54a0", fontColor: "#ffffff" },
                     { texts: "Red Category", id: 5, color: "#dd654e", fontColor: "#ffffff" },
                     { texts: "Yellow Category", id: 6, color: "#d0af2b", fontColor: "#ffffff" }
];

ReactDOM.render(
      React.createElement(EJ.Schedule, {id: "categorizeScheudle", "appointmentSettings-dataSource": dManager, "appointmentSettings-id": "Id", "appointmentSettings-subject": "Subject", "appointmentSettings-startTime": "StartTime", "appointmentSettings-endTime": "EndTime", "appointmentSettings-description": "Description", "appointmentSettings-allDay": "AllDay", "appointmentSettings-recurrence": "Recurrence", "appointmentSettings-recurrenceRule": "RecurrenceRule", "appointmentSettings-categorize": "Categorize", 
                   width: "100%", height: "525px", currentDate: new Date(2017, 5, 5), currentView: "week", "contextMenuSettings-enable": true, "categorizeSettings-enable": true, "categorizeSettings-allowMultiple": true, "categorizeSettings-dataSource": categorizedata, "categorizeSettings-text": "texts", "categorizeSettings-id": "id", "categorizeSettings-color": "color", "categorizeSettings-fontcolor": "fontColor"}
      ),
		  document.getElementById('schedule-categorize')
);