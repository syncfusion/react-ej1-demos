"use strict";

ReactDOM.render(
     <div className="control">
        <EJ.Barcode id="code128c" text="01234567" symbologyType="code128c" >
        </EJ.Barcode>
     </div>,
document.getElementById('barcode-code128c')
);
