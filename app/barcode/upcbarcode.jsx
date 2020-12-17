"use strict";

ReactDOM.render(
     <div className="control">
        <EJ.Barcode id="upcbarcode" text="01234567890" symbologyType="upcbarcode">
        </EJ.Barcode>
     </div>,
document.getElementById('barcode-upcbarcode')
);
