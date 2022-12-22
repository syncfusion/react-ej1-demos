"use strict";

ReactDOM.render(
     React.createElement("div", {className: "control"}, 
        React.createElement(EJ.Barcode, {id: "code11", text: "01234567", symbologyType: "code11"}
        )
     ),
document.getElementById('barcode-code11')
);
