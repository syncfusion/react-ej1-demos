"use strict";

ReactDOM.render(
    React.createElement(EJ.Menu, {enableCenterAlign: true, width: "100%"}, 
        React.createElement("li", null, 
            React.createElement("a", null, "File"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "New")), 
                            React.createElement("li", null, React.createElement("a", null, "Open")), 
                            React.createElement("li", null, React.createElement("a", null, "Save")), 
                            React.createElement("li", null, React.createElement("a", null, "PrintPreview")), 
                            React.createElement("li", null, React.createElement("a", null, "Print"))
                        )
        ), 

                    React.createElement("li", null, 
                        React.createElement("a", null, "Edit"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "Undo")), 
                            React.createElement("li", null, React.createElement("a", null, "Redo")), 
                            React.createElement("li", null, React.createElement("a", null, "Cut")), 
                            React.createElement("li", null, React.createElement("a", null, "Copy")), 
                            React.createElement("li", null, React.createElement("a", null, "Paste")), 
                            React.createElement("li", null, React.createElement("a", null, "Select All"))
                        )
                    ), 

                    React.createElement("li", null, 
                        React.createElement("a", null, "View"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "Print Layout")), 
                            React.createElement("li", null, React.createElement("a", null, "Show ruler")), 
                            React.createElement("li", null, React.createElement("a", null, "Show spelling suggestion")), 
                            React.createElement("li", null, React.createElement("a", null, "Compact controls")), 
                            React.createElement("li", null, React.createElement("a", null, "Full screen"))
                        )
                    ), 

                    React.createElement("li", null, 
                        React.createElement("a", null, "Insert"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "Image")), 
                            React.createElement("li", null, React.createElement("a", null, "Link")), 
                            React.createElement("li", null, React.createElement("a", null, "Comments")), 
                            React.createElement("li", null, React.createElement("a", null, "Foot note")), 
                            React.createElement("li", null, React.createElement("a", null, "Header")), 
                            React.createElement("li", null, React.createElement("a", null, "Footer"))
                        )
                    ), 

                    React.createElement("li", null, 
                        React.createElement("a", null, "Help"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "Docs Help")), 
                            React.createElement("li", null, React.createElement("a", null, "User Forums")), 
                            React.createElement("li", null, React.createElement("a", null, "Report an Issue")), 
                            React.createElement("li", null, React.createElement("a", null, "Keyboard Shortcuts"))
                        )
                    )
    ),
document.getElementById('menu-centermenu')
);