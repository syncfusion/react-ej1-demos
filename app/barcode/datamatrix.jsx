"use strict";

ReactDOM.render(
     <div className="control">
         <EJ.Barcode id="datamatrix" text="SYNCFUSION" symbologyType="datamatrix" xDimension="7">
         </EJ.Barcode>
    </div>,
document.getElementById('barcode-datamatrix')
);
