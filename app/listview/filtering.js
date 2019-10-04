"use strict";

ReactDOM.render(   
	React.createElement("div", {className: "list"}, 
		React.createElement(EJ.ListView, {id: "filtering", width: "100%", height: "100%", enableFiltering: true}, 
    	React.createElement("ul", null, 
      	React.createElement("li", {"data-ej-text": "Artwork"}), 
        React.createElement("li", {"data-ej-text": "Abstract"}), 
        React.createElement("li", {"data-ej-text": "2 Acrylic Mediums"}), 
        React.createElement("li", {"data-ej-text": "Creative Acrylic"}), 
        React.createElement("li", {"data-ej-text": "Modern Painting"}), 
        React.createElement("li", {"data-ej-text": "Canvas Art"}), 
        React.createElement("li", {"data-ej-text": "Black white"})
      )
    )
  ),
	document.getElementById('listview-filtering')
);