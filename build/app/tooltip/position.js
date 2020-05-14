var PositionTooltip = React.createClass({displayName: "PositionTooltip",
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
            React.createElement("div", {id: "tooltip_position"}, 
                React.createElement(EJ.Tooltip, {id: "treeView", width: "230px", height: "65px", target: ".CanSelect", containment: "#tooltip_position", beforeOpen: "onOpen", "position-stem-horizontal": "left", "position-stem-vertical": "center", "position-target-horizontal": "right", "position-target-vertical": "center"}, 
                 React.createElement(EJ.TreeView, null, 
                     React.createElement("li", {className: "expanded"}, 
                         "Fiction Book Lists", 
							React.createElement("ul", null, 
                                React.createElement("li", null, "To Kill a Mockingbird"), 
                                React.createElement("li", null, "Pride and Prejudice"), 
                                React.createElement("li", null, " Harry Potter"), 
                                React.createElement("li", null, " The Hobbit")
							)
                     ), 
						React.createElement("li", {className: "expanded"}, 
						    "Mystery Book Lists", 
                            React.createElement("ul", null, 
                                React.createElement("li", null, "And Then There Where None"), 
                                React.createElement("li", null, "Angles & Demons"), 
                                React.createElement("li", null, "In Cold Blood"), 
                                React.createElement("li", null, "The Name of the Rose")
                            )
						)
                 )
                )
                 
            )
        );
                }
                });

        ReactDOM.render(React.createElement(PositionTooltip, null), document.getElementById('tooltip-position'));