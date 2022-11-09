"use strict";

ReactDOM.render( 
    <div align="center" className="tileCenter">
        <div className="e-tile-group" id="groupTile">
            <div className="e-tile-column">
                <EJ.Tile id="tile1" imagePosition="fill" caption-text="People" tileSize="medium" 
                imageUrl='content/images/tile/windows/people_1.png' text="People">
                </EJ.Tile>
                <div className="e-tile-small-col-2">
                    <EJ.Tile id="tile2" imagePosition="center" tileSize="small" imageUrl='content/images/tile/windows/alerts.png'>
                    </EJ.Tile>
                    <EJ.Tile id="tile3" imagePosition="center" tileSize="small" imageUrl='content/images/tile/windows/bing.png'>
                    </EJ.Tile>
                    <EJ.Tile id="tile4"   tileSize="small" imageUrl='content/images/tile/windows/camera.png'>
                    </EJ.Tile>
                    <EJ.Tile id="tile5"  tileSize="small" imagePosition="center" imageUrl='content/images/tile/windows/messages.png'>
                    </EJ.Tile>
                </div>
                <EJ.Tile id="tile6"  tileSize="medium" imagePosition="center" imageUrl='content/images/tile/windows/games.png' text="Play">
                </EJ.Tile>
                <EJ.Tile id="tile7"  tileSize="medium" imageUrl='content/images/tile/windows/map.png' text="Maps">
                </EJ.Tile>
                <EJ.Tile id="tile8"   tileSize="wide" imageUrl='content/images/tile/windows/sports.png' text="Sports" imagePosition="fill">
                </EJ.Tile>
            </div>
            <div className="e-tile-column">
                <EJ.Tile id="tile9" tileSize="medium" imagePosition="fill" imageUrl='content/images/tile/windows/people_2.png' text="People">
                </EJ.Tile>
                <EJ.Tile id="tile10"   tileSize="medium" imagePosition="center" imageUrl='content/images/tile/windows/pictures.png' text="Photo">
                </EJ.Tile>
                <EJ.Tile id="tile11"   tileSize="wide" imagePosition="center" imageUrl='content/images/tile/windows/weather.png' text="Weather">
                </EJ.Tile>
                <EJ.Tile id="tile12"  tileSize="medium" imagePosition="center" imageUrl='content/images/tile/windows/music.png' text="Music">
                </EJ.Tile>
                <EJ.Tile id="tile13"  tileSize="medium" imagePosition="center" imageUrl='content/images/tile/windows/favs.png' text="Favorites">
                </EJ.Tile>
            </div>
        </div>
    </div>,
	document.getElementById('tileview-default')
);