var Listbox = React.createClass({
    activeItem: function() {
        var listDefault = $("#default").data("ejListBox");
        var listCheckbox = $("#checkbox").data("ejListBox");
        var listRTL = $("#rtl").data("ejListBox");
        var listTemplate = $("#template").data("ejListBox");
        var listGroup = $("#grouping").data("ejListBox");
        if(listDefault) listDefault.refresh();
        if(listCheckbox) listCheckbox.refresh();
        if(listRTL) listRTL.refresh();
        if(listTemplate) listTemplate.refresh();
        if(listGroup) {listGroup.refresh(); listGroup.unselectAll()};
    },
    componentDidMount: function () {
        var proxy = this;
        $(window).resize(function(){
            setTimeout(function() {
                proxy.activeItem();
            }, 400);
        });
    },
    render: function () {
        return (  
            <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true} itemActive={this.activeItem}>
                <ul>
                    <li><a href="app/listbox/default.html">Default</a></li>
                    <li><a href="app/listbox/checkbox.html">CheckBox</a></li>
                    <li><a href="app/listbox/grouping.html">Grouping</a></li>
                    <li><a href="app/listbox/rtl.html">RTL</a></li>
                    <li><a href="app/listbox/template.html">Template</a></li>
                </ul>
            </EJ.Tab>	
        );
    }
});
ReactDOM.render(<Listbox />, document.getElementById('listbox'));