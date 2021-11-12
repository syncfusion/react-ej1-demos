var Ajaxcontent = React.createClass({

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
            <div id="tooltip_template">
                <div className="cols-sample-area">
                    <EJ.Tooltip id="frame" target= ".e-info" beforeOpen= "onOpen" width="350px" height="128px" position-stem-horizontal="left" position-stem-vertical="top" position-target-horizontal="right" position-target-vertical="bottom" >
                    <div className="frame table-responsive">
                        <table id="details table">
                            <tr>
                                <th>EmployeeID</th>
                                <th>Name</th>
                                <th>Designation</th>
                            </tr>
                            <tr>
                                <td>SF6089</td>
                                <td><a href="#" className="e-info" title="Davolio">Davolio</a></td>
                                <td>Software Engineer</td>
                            </tr>
                            <tr>
                                <td>SF6073</td>
                                <td> <a href="#" className="e-info" title="Leverling">Leverling </a> </td>
                                <td>Tester</td>
                            </tr>
                            <tr>
                                <td>SF6073</td>
                                <td> <a href="#" className="e-info" title="Suyama"> Suyama </a> </td>
                                <td>Content Writer</td>
                            </tr>
                            <tr>
                                <td>SF7896</td>
                                <td> <a href="#" className="e-info" title="Buchanan"> Buchanan </a> </td>
                                <td>Graphics Designer</td>
                            </tr>
                        </table>
                    </div>
                    </EJ.Tooltip>
</div>
            </div>
        );
    }
});

ReactDOM.render(<AjaxcontentTooltip />, document.getElementById('ajaxcontent-tooltip'));