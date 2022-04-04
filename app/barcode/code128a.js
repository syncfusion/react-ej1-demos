"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "code128a", text: "SYNCFUSION", symbologyType: "code128a"}
        )
     ),
document.getElementById('barcode-code128a')
);
