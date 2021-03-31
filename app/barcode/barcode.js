"use strict";

ReactDOM.render(
React.createElement(EJ.Tab, {id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%", enableTabScroll: true}, 
        React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "app/barcode/default.html"}, "Default")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/codabar.html"}, "CodaBar")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code11.html"}, "Code11")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code32.html"}, "Code32")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code39.html"}, "Code39")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code39extended.html"}, "Code39Extended")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code128a.html"}, "Code128A")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code128b.html"}, "Code128B")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code128c.html"}, "Code128C")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code93.html"}, "Code93")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/code93extended.html"}, "Code93Extended")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/upcbarcode.html"}, "UpcBarcode")), 
             React.createElement("li", null, React.createElement("a", {href: "app/barcode/datamatrix.html"}, "DataMatrix"))
        )
    ),
document.getElementById('barcode')
);