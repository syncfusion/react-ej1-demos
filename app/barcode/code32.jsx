"use strict";

ReactDOM.render(
     <div className="control">
        <EJ.Barcode id="code32" text="01234567" symbologyType="code32">
        </EJ.Barcode>
     </div>,
document.getElementById('barcode-code32')
);
