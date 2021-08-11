"use strict";

ReactDOM.render(   
	<div className="list">
		<EJ.ListView id="filtering" width="100%" height="100%" enableFiltering={true}>
    	<ul>   
      	<li data-ej-text="Artwork"></li>
        <li data-ej-text="Abstract"></li>
        <li data-ej-text="2 Acrylic Mediums"></li>
        <li data-ej-text="Creative Acrylic"></li>
        <li data-ej-text="Modern Painting"></li>
        <li data-ej-text="Canvas Art"></li>
        <li data-ej-text="Black white"></li>
      </ul>
    </EJ.ListView>
  </div>,
	document.getElementById('listview-filtering')
);