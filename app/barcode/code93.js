"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "code93", text: "SYNCFUSION", symbologyType: "code93"}
        )
     ),
document.getElementById('barcode-code93')
);
