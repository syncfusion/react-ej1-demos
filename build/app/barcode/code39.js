"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "code39", text: "SYNCFUSION", symbologyType: "code39"}
        )
     ),
document.getElementById('barcode-code39')
);
