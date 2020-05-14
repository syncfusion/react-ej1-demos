"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "code128c", text: "01234567", symbologyType: "code128c"}
        )
     ),
document.getElementById('barcode-code128c')
);
