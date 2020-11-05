"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "code32", text: "01234567", symbologyType: "code32"}
        )
     ),
document.getElementById('barcode-code32')
);
