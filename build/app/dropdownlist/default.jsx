"use strict";

ReactDOM.render(
    <EJ.DropDownList targetID="carsList" watermarkText="Select a car"  width="100%" >
        <div id="carsList">
            <ul>
                <li>Audi A4</li>
                <li>Audi A5</li>
                <li>Audi A6</li>
                <li>Audi A7</li>
                <li>Audi A8</li>
            </ul>

        </div>
    </EJ.DropDownList>,
		  document.getElementById('dropdownlist-default')
);