"use strict";

ReactDOM.render(   
    <div id="liveTileCenter">
        <div className="e-tile-group" id="groupLiveTile">
            <div className="e-tile-column">
                <EJ.Tile id="tile6" tileSize="medium" imagePosition="center" imageUrl='content/images/tile/windows/games.png' text="Play">
                </EJ.Tile>
                <div className="e-tile-small-col-2">
                    <EJ.Tile id="tile2" imagePosition="center" tileSize="small" imageUrl='content/images/tile/windows/alerts.png'>
                    </EJ.Tile>
                    <EJ.Tile id="tile3" imagePosition="center" liveTile-updateInterval={3000} tileSize="small" 
                    liveTile-enabled={true} liveTile-type="flip" liveTile-imageUrl={liveImage1}>
                    </EJ.Tile>
                    <EJ.Tile id="tile4" liveTile-updateInterval={3500} liveTile-enabled={true} liveTile-type="flip" 
                    liveTile-imageUrl={liveImage2} tileSize="small">
                    </EJ.Tile>
                    <EJ.Tile id="tile5" tileSize="small" badge-enabled={true} badge-value="10" imagePosition="center" 
                    imageUrl='content/images/tile/windows/messages.png'>
                    </EJ.Tile>
                </div>
                <EJ.Tile id="tile6" tileSize="medium" imagePosition="fill" liveTile-updateInterval={5000} 
                liveTile-enabled={true} liveTile-type="slide" liveTile-imageUrl={liveImage3} text="People">
                </EJ.Tile>
                <EJ.Tile id="tile7" tileSize="medium" imagePosition="center" liveTile-updateInterval={4000} 
                liveTile-enabled={true} liveTile-type="slide" liveTile-imageUrl={liveImage4} text="Photo">
                </EJ.Tile>
                <EJ.Tile id="tile8" tileSize="wide" imagePosition="center" liveTile-enabled={true} 
                liveTile-type="carousel" liveTile-imageUrl={liveImage5} text="Weather">
                </EJ.Tile>
            </div>
        </div>
    </div>,
	document.getElementById('tileview-livetile')
);