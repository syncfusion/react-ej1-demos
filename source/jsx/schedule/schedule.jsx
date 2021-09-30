"use strict";
var ScheduleTab = React.createClass({
    onScheduleTabActive: function (args) {
        var schEle = $("#scrollTab").find(".e-active-content").find(".e-schedule");
        if (schEle.length > 0 && !ej.isNullOrUndefined(schEle.data("ejSchedule"))) {
            schEle.ejSchedule('refreshScroller');
        }
    },
    render: function () {
        return (
        <EJ.Tab id="scrollTab" dataType="dataType" contentType="contentType" async="async" itemActive={this.onScheduleTabActive} height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/schedule/default.html">Default</a></li>
            <li><a href="app/schedule/horizontal.html">Timeline View</a></li>
            <li><a href="app/schedule/multipleresource.html">Multiple Resources</a></li>
            <li><a href="app/schedule/horizontalresourcegrouping.html">Resource Grouping</a></li>
            <li><a href="app/schedule/customresourcedays.html">Custom Work Hours</a></li>
            <li><a href="app/schedule/blockintervals.html">Block Intervals</a></li>
            <li><a href="app/schedule/timescale.html">Time Scale</a></li>
            <li><a href="app/schedule/querycellinfo.html">Cell Formatting</a></li>
            <li><a href="app/schedule/categorize.html">Categorize</a></li>
            <li><a href="app/schedule/customview.html">Custom View</a></li>
            <li><a href="app/schedule/firstdayofweek.html">First Day Of Week</a></li>
            <li><a href="app/schedule/rtl.html">RTL</a></li>
        </ul>
        </EJ.Tab>
      );
    }
});

ReactDOM.render(<ScheduleTab />, document.getElementById('schedule'));
