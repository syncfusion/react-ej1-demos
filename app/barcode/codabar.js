"use strict";

ReactDOM.render(
    React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "codabar", text: "01234567", symbologyType: "codabar"}
        )
    ),
document.getElementById('barcode-codabar')
);
