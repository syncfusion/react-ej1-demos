var PositionTooltip = React.createClass({
    onOpen: function (args) {
        contentFormation(args);
    },
    contentFormation: function (args) {
        var target = $("#treeView").data("ejTooltip");
        var emp = [
            { book: "To Kill a Mockingbird", category: "Fiction" },
            { book: "Pride and Prejudice", category: "Fiction" },
            { book: "Harry Potter", category: "Fiction" },
            { book: "The Hobbit", category: "Fiction" },
            { book: "And Then There Where None", category: "Mystery" },
            { book: "Angles & Demons", category: "Mystery" },
            { book: "In Cold Blood", category: "Mystery" },
            { book: "The Name of the Rose", category: "Mystery" },
        ];
        for (i = 0; i < 8; i++) {
            if ($(args.event.target).text().trim() == emp[i].book)
                var template = '<div className="main"> <img className="logo" src="../../../content/images/tooltip/book.png" /> <div className="des"> <div className="artists"> Category:' + emp[i].category + '</div><div className="song">' + emp[i].book + '</div></div> </div>';
            else if($(args.event.target).text().trim() == "Fiction Book Lists")
                var template = '<div className="main"> <img className="logo" src="../../../content/images/tooltip/book.png" /> <div className="des"> <div className="artists"> Category&nbsp;:&nbsp; Fiction </div><div className="song"> Please choose your books</div></div> </div>';
            else if($(args.event.target).text().trim() == "Mystery Book Lists")
                var template = '<div className="main"> <img className="logo" src="../../../content/images/tooltip/book.png" /> <div className="des"> <div className="artists"> Category&nbsp;:&nbsp; Mystery </div><div className="song"> Please choose your books</div></div> </div>';
        }
        target.setModel({ content: template });
    },
    render: function () {
        return (
            <div id="tooltip_position">
                <EJ.Tooltip id="treeView" width="230px" height="65px" target=".CanSelect" containment="#tooltip_position" beforeOpen="onOpen" position-stem-horizontal="left" position-stem-vertical="center" position-target-horizontal="right" position-target-vertical="center">
                 <EJ.TreeView >
                     <li className="expanded">
                         Fiction Book Lists
							<ul>
                                <li>To Kill a Mockingbird</li>
                                <li>Pride and Prejudice</li>
                                <li> Harry Potter</li>
                                <li> The Hobbit</li>
							</ul>
                     </li>
						<li className="expanded">
						    Mystery Book Lists
                            <ul>
                                <li>And Then There Where None</li>
                                <li>Angles & Demons</li>
                                <li>In Cold Blood</li>
                                <li>The Name of the Rose</li>
                            </ul>
						</li>
                 </EJ.TreeView>
                </EJ.Tooltip>
                 
            </div>
        );
                }
                });

        ReactDOM.render(<PositionTooltip />, document.getElementById('tooltip-position'));