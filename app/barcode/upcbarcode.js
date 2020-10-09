"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "upcbarcode", text: "01234567890", symbologyType: "upcbarcode"}
        )
     ),
document.getElementById('barcode-upcbarcode')
);
