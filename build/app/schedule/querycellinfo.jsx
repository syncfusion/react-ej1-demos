"use strict";

var dManager = ej.DataManager($.extend(true, [], window.QueryCellApps)).executeLocal(ej.Query().take(10));
var group = {
    resources: ["Rooms", "Owners"]
};
var rooms = {
    dataSource: [
    { text: "Floor 1", id: 1, groupId: 10, color: "#cb6bb2" },
    { text: "Floor 2", id: 2, groupId: 20, color: "#56ca85" }],
    text: "text", id: "id", groupId: "groupId", color: "color"
};
var owners = {
    dataSource: [
    { text: "101 Hall", id: 1, groupId: 1, color: "#ffaa00" },
    { text: "103 Hall", id: 3, groupId: 2, color: "#7499e1" },
    { text: "102 Hall", id: 2, groupId: 1, color: "#f8a398" }
    ],
    text: "text", id: "id", groupId: "groupId", color: "color"
};

var ScheduleCellFormat = React.createClass({
       check: function (args) {
            switch (args.requestType) {
                case "workcells":
                    if (args.cell.resources.text == "101 Hall") {
                        args.element.css("background-color", "#ffe9cc");
                    }
                    else if (args.cell.resources.text == "102 Hall") {
                        args.element.css("background-color", "#ebf1c4");
                    }
                    else if (args.cell.resources.text == "103 Hall") {
                        args.element.css("background-color", "#dcf1f8");
                    }
                    break;
                case "monthcells":
                    if (args.cell.resources.text == "101 Hall") {
                        args.element.css("background-color", "#ffe9cc");
                    }
                    else if (args.cell.resources.text == "102 Hall") {
                        args.element.css("background-color", "#ebf1c4");
                    }
                    else if (args.cell.resources.text == "103 Hall") {
                        args.element.css("background-color", "#dcf1f8");
                    }
                    break;
                case "alldaycells":
                    if (args.cell.resources.text == "101 Hall") {
                        args.element.css("background-color", "#ffe9cc");
                    }
                    else if (args.cell.resources.text == "102 Hall") {
                        args.element.css("background-color", "#ebf1c4");
                    }
                    else if (args.cell.resources.text == "103 Hall") {
                        args.element.css("background-color", "#dcf1f8");
                    }
                    break;
                case "headercells":
                    args.element.css("color", "#333");
                    if (!ej.isNullOrUndefined(args.resource) && args.resource.text == "101 Hall") {
                        args.element.css("background-color", "#ffe9cc");
                    }
                    else if (!ej.isNullOrUndefined(args.resource) && args.resource.text == "102 Hall") {
                        args.element.css("background-color", "#ebf1c4");
                    }
                    else if (!ej.isNullOrUndefined(args.resource) && args.resource.text == "103 Hall") {
                        args.element.css("background-color", "#dcf1f8");
                    }
                    break;
                case "appointment":
                    args.element.find('.e-apptext ').css({ "font-weight": "bold" });
                    if (args.appointment.EventType == "Holiday" || args.appointment.EventType == "Maintenance") {
                        args.element.css("background-color", "#a4a3a4");
                        args.element.css("border-color", "#a4a3a4");
                    }
                    else if (args.appointment.EventType == "Public Event" || args.appointment.EventType == "" || ej.isNullOrUndefined(args.appointment.EventType)) {
                        args.element.css("background-color", "#faa41a");
                        args.element.css("border-color", "#faa41a");
                    }
                    else if (args.appointment.EventType == "Commercial Event") {
                        args.element.css("background-color", "#1892d1");
                        args.element.css("border-color", "#1892d1");
                    }
                    else if (args.appointment.EventType == "Family Event") {
                        args.element.css("background-color", "#0b8140");
                        args.element.css("border-color", "#0b8140");
                    }
                    if ((!args.appointment.AllDay) && (((args.appointment.EndTime - args.appointment.StartTime) / 3600000) < 24)) {
                        if (args.model.currentView == "day") {
                            var eventName = (args.appointment.EventType == "" || ej.isNullOrUndefined(args.appointment.EventType)) ? "Public Event" : args.appointment.EventType;
                            var diffMs = Math.abs(args.appointment.EndTime - args.appointment.StartTime);
                            var diffMins = Math.round(diffMs / 60000);
                            if (diffMins > 30) {
                                if (diffMins > 60)
                                    args.element.find('.e-appointinnertext').prepend("<div style='color:black;margin-top:10px;height:20px;width:150px;background-color:white'><span style='margin:10px 0px 0px 10px'>" + eventName + "</span></div>");
                                args.element.find('.e-apptime ').html(args.appointment.Description);
                            }
                            args.element.find('.e-apptext ').css({ "font-size": "14px" });
                            var imgHeight = ((args.element.height() - 20) > 150) ? 150 : (args.element.height() <= 20) ? 20 : args.element.height() - 20;
                            var imgName = (!ej.isNullOrUndefined(args.appointment.EventType)) ? args.appointment.EventType : eventName;
                            var marginTopVal = (imgHeight == 20) ? "0px" : "10px";
                            if (imgName == "Holiday") {
                                args.element.css({
                                    'background-image': 'url(content/images/schedule/Holidays.png)',
                                    'background-repeat': 'repeat',
                                    'background-size': '80px auto'
                                });
                                if (imgHeight == 20)
                                    args.element.css('background-image', 'url(content/images/schedule/Holidays.png)');
                                args.element.find('.e-apptext ').html('');
                            }
                            else
                                args.element.prepend("<img type='image/svg+xml' style='opacity:0.3;margin-top:" + marginTopVal + ";margin-right:10px;float:right;height:" + imgHeight + "px;width:" + imgHeight + "px;' id='E' src='content/images/schedule/" + imgName + ".png' />");
                        }
                        else if (args.model.currentView == "week" || args.model.currentView == "workweek") {
                            args.element.find('.e-apptime ').html(args.appointment.Description);
                            var imgName = (!ej.isNullOrUndefined(args.appointment.EventType)) ? args.appointment.EventType : "Public Event";
                            if (args.appointment.Subject != "Holiday") {
                                var imgHeight = ((args.element.width() * $("#Schedule1").find('.e-workcells').width()) / 100) - 10;
                                args.element.append("<img type='image/svg+xml' style='position:absolute;opacity:0.3;left:50%;bottom:0;margin-bottom:5px;margin-left:-" + Math.round(imgHeight / 2) + "px;height:" + imgHeight + "px;width:" + imgHeight + "px;' id='E' src='content/images/schedule/" + imgName + ".png' />");
                            } else {
                                args.element.css({
                                    'background-image': 'url(content/images/schedule/Holidays.png)',
                                    'background-repeat': 'repeat-y',
                                    'background-size': '80px auto'
                                });
                                args.element.find('.e-appointinnertext').prepend("<div style='color:black;margin-top:10px;height:20px;width:45px;background-color:white'><span style='margin:2px 0px 0px 2px'>Holiday</span></div>");
                                args.element.find('.e-apptext ').html('');
                            }
                        }
                    }
                    break;
                case "resourceheadercells":
                    if (!ej.isNullOrUndefined(args.resource) && args.resource.text == "101 Hall") {
                        args.element.css("background-color", "#ffe9cc");
                        args.element.css("color", "#333");
                    }
                    else if (!ej.isNullOrUndefined(args.resource) && args.resource.text == "102 Hall") {
                        args.element.css("background-color", "#ebf1c4");
                        args.element.css("color", "#333");
                    }
                    else if (!ej.isNullOrUndefined(args.resource) && args.resource.text == "103 Hall") {
                        args.element.css("background-color", "#dcf1f8");
                        args.element.css("color", "#333");
                    }
                    break;
            }
        },

    render: function () {
        return (
      <EJ.Schedule id="cellformattingSchedule" width="100%" height="525px" currentView="day" views={['day', 'week', 'workweek', 'month']} currentDate={new Date(2017, 5, 5)} showNextPrevMonth={false} timeZone="UTC +00:00" workHours-start={12} appointmentSettings-dataSource={dManager} appointmentSettings-id="Id" appointmentSettings-subject="Subject" appointmentSettings-startTime="StartTime" appointmentSettings-endTime="EndTime" appointmentSettings-description="Description" appointmentSettings-allDay="AllDay" appointmentSettings-recurrence="Recurrence" appointmentSettings-recurrenceRule="RecurrenceRule" appointmentSettings-resourceFields="roomId,ownerId" group={group} appointmentWindowOpen="oncellFormatAppointmentWindowOpen" queryCellInfo={this.check}>
                   <resources>
                        <resource allowMultiple={false} field="roomId" title="Room" name="Rooms" resourceSettings={rooms}></resource>
                        <resource allowMultiple={true} field="ownerId" title="Owner" name="Owners" resourceSettings={owners}></resource>
                   </resources>
      </EJ.Schedule>
       );
    }
});

ReactDOM.render(<ScheduleCellFormat />, document.getElementById('schedule-cellformatting'));
