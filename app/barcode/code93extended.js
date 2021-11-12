"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "code93extended", text: "SYNCFUSION", symbologyType: "code93extended"}
        )
     ),
document.getElementById('barcode-code93extended')
);
