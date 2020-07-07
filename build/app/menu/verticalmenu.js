"use strict";

ReactDOM.render(
    React.createElement(EJ.Menu, {orientation: "vertical"}, 
        React.createElement("li", null, 
            React.createElement("a", null, "Books"), 
            React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("a", null, "New Releases")), 
                React.createElement("li", null, React.createElement("a", null, "New Releases audio books")), 
                React.createElement("li", null, React.createElement("a", null, "Bestsellers")), 
                React.createElement("li", null, React.createElement("a", null, "Upcoming")), 
                React.createElement("li", null, React.createElement("a", null, "Box Sets"))
            )
        ), 
        React.createElement("li", null, 
            React.createElement("a", null, "Gaming"), 
            React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("a", null, "Upcoming")), 
                React.createElement("li", null, React.createElement("a", null, "PC")), 
                React.createElement("li", null, React.createElement("a", null, "PS Vista")), 
                React.createElement("li", null, React.createElement("a", null, "PS3")), 
                React.createElement("li", null, React.createElement("a", null, "XBox")), 
                React.createElement("li", null, React.createElement("a", null, "Consoles"))
            )
        ), 
        React.createElement("li", null, 
            React.createElement("a", null, "Mobiles"), 
            React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("a", null, "New Arrivals")), 
                React.createElement("li", null, React.createElement("a", null, "Bestsellers")), 
                React.createElement("li", null, React.createElement("a", null, "Low Price")), 
                React.createElement("li", null, React.createElement("a", null, "Tablets"))
            )
        ), 
        React.createElement("li", null, 
            React.createElement("a", null, "Cameras"), 
            React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("a", null, "Point & Shoots")), 
                React.createElement("li", null, React.createElement("a", null, "Digital SLR")), 
                React.createElement("li", null, React.createElement("a", null, "Camcorders")), 
                React.createElement("li", null, React.createElement("a", null, "Bestsellers"))
            )
        ), 
        React.createElement("li", null, 
            React.createElement("a", null, "Musics"), 
            React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("a", null, "New Releases")), 
                React.createElement("li", null, React.createElement("a", null, "Bestsellers")), 
                React.createElement("li", null, React.createElement("a", null, "Rock Music")), 
                React.createElement("li", null, React.createElement("a", null, "Devotional & Spiritual")), 
                React.createElement("li", null, React.createElement("a", null, "Sufi & Ghazal"))
            )
        )
    ),
document.getElementById('menu-verticalmenu')
);