"use strict";

ReactDOM.render(
    <div className="control">
        <EJ.Barcode id="codabar" text="01234567" symbologyType="codabar">
        </EJ.Barcode>
    </div>,
document.getElementById('barcode-codabar')
);
