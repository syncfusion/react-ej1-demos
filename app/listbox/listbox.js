var Listbox = React.createClass({displayName: "Listbox",
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
            React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true, itemActive: this.activeItem}, 
                React.createElement("ul", null, 
                    React.createElement("li", null, React.createElement("a", {href: "app/listbox/default.html"}, "Default")), 
                    React.createElement("li", null, React.createElement("a", {href: "app/listbox/checkbox.html"}, "CheckBox")), 
                    React.createElement("li", null, React.createElement("a", {href: "app/listbox/grouping.html"}, "Grouping")), 
                    React.createElement("li", null, React.createElement("a", {href: "app/listbox/rtl.html"}, "RTL")), 
                    React.createElement("li", null, React.createElement("a", {href: "app/listbox/template.html"}, "Template"))
                )
            )	
        );
    }
});
ReactDOM.render(React.createElement(Listbox, null), document.getElementById('listbox'));