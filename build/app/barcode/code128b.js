"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
         React.createElement(EJ.Barcode, {id: "code128b", text: "SYNCFUSION", symbologyType: "code128b"}
         )
     ),
document.getElementById('barcode-code128b')
);
