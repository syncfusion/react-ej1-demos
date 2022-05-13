"use strict";

ReactDOM.render(
     React.createElement("div", {className: "list"}, 
          React.createElement(EJ.ListView, {id: "default", width: "100%", height: "100%", persistSelection: true}, 
               React.createElement("ul", null, 
                    React.createElement("li", {"data-ej-text": "Artwork"}), 
                    React.createElement("li", {"data-ej-text": "Abstract"}), 
                    React.createElement("li", {"data-ej-text": "2 Acrylic Mediums"}), 
                    React.createElement("li", {"data-ej-text": "Creative Acrylic"}), 
                    React.createElement("li", {"data-ej-text": "Modern Painting"}), 
                    React.createElement("li", {"data-ej-text": "Canvas Art"}), 
                    React.createElement("li", {"data-ej-text": "Black white"}), 
                    React.createElement("li", {"data-ej-text": "Children"}), 
                    React.createElement("li", {"data-ej-text": "Preschool Crafts"}), 
                    React.createElement("li", {"data-ej-text": "School-age Crafts"}), 
                    React.createElement("li", {"data-ej-text": "Fabulous Toddler"}), 
                    React.createElement("li", {"data-ej-text": "Comic / Cartoon"}), 
                    React.createElement("li", {"data-ej-text": "Batman"}), 
                    React.createElement("li", {"data-ej-text": "Adventures of Superman"}), 
                    React.createElement("li", {"data-ej-text": "Super Boy"}), 
                    React.createElement("li", {"data-ej-text": "Books"}), 
                    React.createElement("li", {"data-ej-text": "Comics"}), 
                    React.createElement("li", {"data-ej-text": "The Flash"}), 
                    React.createElement("li", {"data-ej-text": "Human Target"}), 
                    React.createElement("li", {"data-ej-text": "Birds of Prey"}), 
                    React.createElement("li", {"data-ej-text": "Entertaining"}), 
                    React.createElement("li", {"data-ej-text": "Design"}), 
                    React.createElement("li", {"data-ej-text": "Music"}), 
                    React.createElement("li", {"data-ej-text": "Classical"}), 
                    React.createElement("li", {"data-ej-text": "Avant-Garde"}), 
                    React.createElement("li", {"data-ej-text": "Medieval"}), 
                    React.createElement("li", {"data-ej-text": "Orchestral"}), 
                    React.createElement("li", {"data-ej-text": "Mass"}), 
                    React.createElement("li", {"data-ej-text": "Folk"})
                )
          )
     ),
     document.getElementById('listview-default')
);