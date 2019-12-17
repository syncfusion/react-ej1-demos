"use strict";

ReactDOM.render( 
    React.createElement("div", {align: "center", className: "tileCenter"}, 
        React.createElement("div", {className: "e-tile-group", id: "groupTile"}, 
            React.createElement("div", {className: "e-tile-column"}, 
                React.createElement(EJ.Tile, {id: "tile1", imagePosition: "fill", "caption-text": "People", tileSize: "medium", 
                imageUrl: "content/images/tile/windows/people_1.png", text: "People"}
                ), 
                React.createElement("div", {className: "e-tile-small-col-2"}, 
                    React.createElement(EJ.Tile, {id: "tile2", imagePosition: "center", tileSize: "small", imageUrl: "content/images/tile/windows/alerts.png"}
                    ), 
                    React.createElement(EJ.Tile, {id: "tile3", imagePosition: "center", tileSize: "small", imageUrl: "content/images/tile/windows/bing.png"}
                    ), 
                    React.createElement(EJ.Tile, {id: "tile4", tileSize: "small", imageUrl: "content/images/tile/windows/camera.png"}
                    ), 
                    React.createElement(EJ.Tile, {id: "tile5", tileSize: "small", imagePosition: "center", imageUrl: "content/images/tile/windows/messages.png"}
                    )
                ), 
                React.createElement(EJ.Tile, {id: "tile6", tileSize: "medium", imagePosition: "center", imageUrl: "content/images/tile/windows/games.png", text: "Play"}
                ), 
                React.createElement(EJ.Tile, {id: "tile7", tileSize: "medium", imageUrl: "content/images/tile/windows/map.png", text: "Maps"}
                ), 
                React.createElement(EJ.Tile, {id: "tile8", tileSize: "wide", imageUrl: "content/images/tile/windows/sports.png", text: "Sports", imagePosition: "fill"}
                )
            ), 
            React.createElement("div", {className: "e-tile-column"}, 
                React.createElement(EJ.Tile, {id: "tile9", tileSize: "medium", imagePosition: "fill", imageUrl: "content/images/tile/windows/people_2.png", text: "People"}
                ), 
                React.createElement(EJ.Tile, {id: "tile10", tileSize: "medium", imagePosition: "center", imageUrl: "content/images/tile/windows/pictures.png", text: "Photo"}
                ), 
                React.createElement(EJ.Tile, {id: "tile11", tileSize: "wide", imagePosition: "center", imageUrl: "content/images/tile/windows/weather.png", text: "Weather"}
                ), 
                React.createElement(EJ.Tile, {id: "tile12", tileSize: "medium", imagePosition: "center", imageUrl: "content/images/tile/windows/music.png", text: "Music"}
                ), 
                React.createElement(EJ.Tile, {id: "tile13", tileSize: "medium", imagePosition: "center", imageUrl: "content/images/tile/windows/favs.png", text: "Favorites"}
                )
            )
        )
    ),
	document.getElementById('tileview-default')
);