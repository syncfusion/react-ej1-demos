"use strict";

ReactDOM.render(
    <div className="control">
        <EJ.Barcode id="default" text="http://www.syncfusion.com" symbologyType="qrbarcode" xDimension="5" >
        </EJ.Barcode>
    </div>,  
document.getElementById('barcode-default')
);