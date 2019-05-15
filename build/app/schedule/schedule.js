"use strict";
var ScheduleTab = React.createClass({displayName: "ScheduleTab",
    onScheduleTabActive: function (args) {
        var schEle = $("#scrollTab").find(".e-active-content").find(".e-schedule");
        if (schEle.length > 0 && !ej.isNullOrUndefined(schEle.data("ejSchedule"))) {
            schEle.ejSchedule('refreshScroller');
        }
    },
    render: function () {
        return (
        React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", itemActive: this.onScheduleTabActive, height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/default.html"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/horizontal.html"}, "Timeline View")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/multipleresource.html"}, "Multiple Resources")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/horizontalresourcegrouping.html"}, "Resource Grouping")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/customresourcedays.html"}, "Custom Work Hours")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/blockintervals.html"}, "Block Intervals")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/timescale.html"}, "Time Scale")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/querycellinfo.html"}, "Cell Formatting")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/categorize.html"}, "Categorize")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/customview.html"}, "Custom View")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/firstdayofweek.html"}, "First Day Of Week")), 
            React.createElement("li", null, React.createElement("a", {href: "app/schedule/rtl.html"}, "RTL"))
        )
        )
      );
    }
});

ReactDOM.render(React.createElement(ScheduleTab, null), document.getElementById('schedule'));
