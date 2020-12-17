"use strict";

ReactDOM.render(
    React.createElement(EJ.Menu, null, 
        React.createElement("li", null, 
            React.createElement("a", null, "Books"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, 
                                React.createElement("div", {className: "temp temp1"}, 
                                    React.createElement("span", null, "BOOKS"), 
                                    React.createElement("ul", null, 
                                        React.createElement("li", null, React.createElement("a", null, "New Releases")), 
                                        React.createElement("li", null, React.createElement("a", null, "Bestsellers")), 
                                        React.createElement("li", null, React.createElement("a", null, "Upcoming")), 
                                        React.createElement("li", null, React.createElement("a", null, "Box Sets"))
                                    ), 
                                    React.createElement("ul", null, 
                                        React.createElement("li", null, React.createElement("a", null, "HTML Basics")), 
                                        React.createElement("li", null, React.createElement("a", null, "JavaScript")), 
                                        React.createElement("li", null, React.createElement("a", null, "JQuery")), 
                                        React.createElement("li", null, React.createElement("a", null, "PHP Basics"))
                                    )
                                )
                            )
                        )
        ), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "Cameras"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, 
                                React.createElement("div", {className: "temp temp2"}, 
                                    React.createElement("div", null, 
                                        React.createElement("span", null, "CAMERAS"), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement("a", null, "Point & Shoots")), 
                                            React.createElement("li", null, React.createElement("a", null, "Digital SLR")), 
                                            React.createElement("li", null, React.createElement("a", null, "Camcorders")), 
                                            React.createElement("li", null, React.createElement("a", null, "Bestsellers"))
                                        ), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement("a", null, "Still Camera")), 
                                            React.createElement("li", null, React.createElement("a", null, "Digital Camera")), 
                                            React.createElement("li", null, React.createElement("a", null, "Video Camera")), 
                                            React.createElement("li", null, React.createElement("a", null, "Virtual Camera"))
                                        )
                                    )
                                )
                            )
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "Movies"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, 
                                React.createElement("div", {className: "temp temp3"}, 
                                    React.createElement("div", null, 
                                        React.createElement("span", null, "MOVIES"), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement("a", null, "Genobili Actions")), 
                                            React.createElement("li", null, React.createElement("a", null, "Jackie Rocks")), 
                                            React.createElement("li", null, React.createElement("a", null, "Men In Blue")), 
                                            React.createElement("li", null, React.createElement("a", null, "Human vs Alien"))
                                        ), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement("a", null, "Million Dreams")), 
                                            React.createElement("li", null, React.createElement("a", null, "Kung-fu"))
                                        )
                                    )
                                )
                            )
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "Musics"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, 
                                React.createElement("div", {className: "temp temp4"}, 
                                    React.createElement("div", null, 
                                        React.createElement("span", null, "MUSICS"), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement("a", null, "New Releases")), 
                                            React.createElement("li", null, React.createElement("a", null, "Bestsellers")), 
                                            React.createElement("li", null, React.createElement("a", null, "Devotional")), 
                                            React.createElement("li", null, React.createElement("a", null, "Sufi & Ghazal"))
                                        ), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement("a", null, "Pop songs")), 
                                            React.createElement("li", null, React.createElement("a", null, "Rock Music"))
                                        )
                                    )
                                )
                            )
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "Gaming"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, 
                                React.createElement("div", {className: "temp temp5"}, 
                                    React.createElement("div", null, 
                                        React.createElement("span", null, "GAMING"), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement("a", null, "Upcoming")), 
                                            React.createElement("li", null, React.createElement("a", null, "PC")), 
                                            React.createElement("li", null, React.createElement("a", null, "PS Vista")), 
                                            React.createElement("li", null, React.createElement("a", null, "PS3")), 
                                            React.createElement("li", null, React.createElement("a", null, "XBox")), 
                                            React.createElement("li", null, React.createElement("a", null, "Consoles"))
                                        ), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement("a", null, "FIFA 2999")), 
                                            React.createElement("li", null, React.createElement("a", null, "NBA Actions")), 
                                            React.createElement("li", null, React.createElement("a", null, "Crick Champions")), 
                                            React.createElement("li", null, React.createElement("a", null, "Carom legend"))
                                        )
                                    )
                                )
                            )
                        )
                    )
    ),
document.getElementById('menu-template')
);