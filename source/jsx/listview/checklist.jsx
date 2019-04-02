"use strict";

ReactDOM.render(
    <div className="list">
		<EJ.ListView id="checklist" width="100%" enableCheckMark={true} persistSelection={true}>
            <ul>
                <li data-ej-text="Artwork"></li>
                <li data-ej-text="Abstract"></li>
                <li data-ej-text="2 Acrylic Mediums"></li>
                <li data-ej-text="Creative Acrylic"></li>
                <li data-ej-text="Modern Painting"></li>
                <li data-ej-text="Canvas Art"></li>
                <li data-ej-text="Black white"></li>
                <li data-ej-text="Children"></li>
            </ul>
        </EJ.ListView>
    </div>,
	document.getElementById('listview-checklist')
);