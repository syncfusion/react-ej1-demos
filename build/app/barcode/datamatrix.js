"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
         React.createElement(EJ.Barcode, {id: "datamatrix", text: "SYNCFUSION", symbologyType: "datamatrix", xDimension: "7"}
         )
    ),
document.getElementById('barcode-datamatrix')
);
