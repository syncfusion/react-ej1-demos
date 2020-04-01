"use strict";

ReactDOM.render(
    React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "default", text: "http://www.syncfusion.com", symbologyType: "qrbarcode", xDimension: "5"}
        )
    ),  
document.getElementById('barcode-default')
);