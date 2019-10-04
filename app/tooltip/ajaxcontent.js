var Ajaxcontent = React.createClass({displayName: "Ajaxcontent",

onOpen: function(args) {
    var content;
    var target = $("#frame").data("ejTooltip");
    proxy = args;
    $.ajax({
        dataType: "json",
        url: "../../../scripts/tooltipData.js",
        success: function (result) {
            var emp = [
                { photo: "../../../content/images/employees/2.png" },
                { photo: "../../../content/images/employees/4.png" },
                { photo: "../../../content/images/employees/8.png" },
                { photo: "../../../content/images/employees/3.png" },
                {photo: "../../../content/images/employees/1.png" },
                { photo: "../../../content/images/employees/6.png" },
            ];
            for (i = 0; i < result.length ; i++) {
                if (result[i].LastName == $(proxy.event.target).attr("data-content"))
                    content = '<div className="main"> <img src=' + emp[i].photo + ' className="logo"/><div className="des"><table> <tr> <th> ' + result[i].TitleOfCourtesy+' '+result[i].LastName + '</th> </tr> <tr> <td> Title </td> <td>&nbsp;&nbsp;: ' + result[i].Title + '</td> </tr> <tr><td> Address</td><td>&nbsp;&nbsp;: ' + result[i].Address + '</td> </tr><tr> <td> City </td> <td>&nbsp;&nbsp;: ' + result[i].City + '</td> </tr> <tr> <td> PostalCode </td> <td>&nbsp;&nbsp;: ' + result[i].PostalCode + '</td> </tr> </table></div></div>';
            }
            target.setModel({ content: content });

        }
    });
    target.show(args.event.target);
    args.cancel = true;
},
    render: function () {
        return (
            React.createElement("div", {id: "tooltip_template"}, 
                React.createElement("div", {className: "cols-sample-area"}, 
                    React.createElement(EJ.Tooltip, {id: "frame", target: ".e-info", beforeOpen: "onOpen", width: "350px", height: "128px", "position-stem-horizontal": "left", "position-stem-vertical": "top", "position-target-horizontal": "right", "position-target-vertical": "bottom"}, 
                    React.createElement("div", {className: "frame table-responsive"}, 
                        React.createElement("table", {id: "details table"}, 
                            React.createElement("tr", null, 
                                React.createElement("th", null, "EmployeeID"), 
                                React.createElement("th", null, "Name"), 
                                React.createElement("th", null, "Designation")
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, "SF6089"), 
                                React.createElement("td", null, React.createElement("a", {href: "#", className: "e-info", title: "Davolio"}, "Davolio")), 
                                React.createElement("td", null, "Software Engineer")
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, "SF6073"), 
                                React.createElement("td", null, " ", React.createElement("a", {href: "#", className: "e-info", title: "Leverling"}, "Leverling "), " "), 
                                React.createElement("td", null, "Tester")
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, "SF6073"), 
                                React.createElement("td", null, " ", React.createElement("a", {href: "#", className: "e-info", title: "Suyama"}, " Suyama "), " "), 
                                React.createElement("td", null, "Content Writer")
                            ), 
                            React.createElement("tr", null, 
                                React.createElement("td", null, "SF7896"), 
                                React.createElement("td", null, " ", React.createElement("a", {href: "#", className: "e-info", title: "Buchanan"}, " Buchanan "), " "), 
                                React.createElement("td", null, "Graphics Designer")
                            )
                        )
                    )
                    )
)
            )
        );
    }
});

ReactDOM.render(React.createElement(AjaxcontentTooltip, null), document.getElementById('ajaxcontent-tooltip'));