"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "code39extended", text: "SYNCFUSION", symbologyType: "code39extended"}
        )
     ),
document.getElementById('barcode-code39extended')
);
