var CascadingDropDownList = React.createClass({displayName: "CascadingDropDownList",
    onChange: function () {
        var ctry = $('#countryList').data("ejDropDownList");
        ctry.element.val("");
    },
    render: function () {
        return (   
            React.createElement("div", {id: "dropdownlist_cascading"}, 
				React.createElement("span", null, "Select Group"), React.createElement("br", null), 
                React.createElement(EJ.DropDownList, {dataSource: groups, "fields-value": "parentId", "fields-text": "text", cascadeTo: "countryList", change: "onChange", width: "100%"}
                ), React.createElement("br", null), 
				React.createElement("span", null, "Select Country"), React.createElement("br", null), 
                React.createElement(EJ.DropDownList, {id: "countryList", dataSource: countries, enabled: false, width: "100%"}
                )
            )
        );
    }
});  

ReactDOM.render(React.createElement(CascadingDropDownList, null), document.getElementById('dropdownlist-cascading'));