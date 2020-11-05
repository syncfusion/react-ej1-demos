"use strict";

ReactDOM.render(
<EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true}>
        <ul>
            <li><a href="app/barcode/default.html">Default</a></li>
             <li><a href="app/barcode/codabar.html">CodaBar</a></li>  
             <li><a href="app/barcode/code11.html">Code11</a></li>  
             <li><a href="app/barcode/code32.html">Code32</a></li>  
             <li><a href="app/barcode/code39.html">Code39</a></li>  
             <li><a href="app/barcode/code39extended.html">Code39Extended</a></li> 
             <li><a href="app/barcode/code128a.html">Code128A</a></li>  
             <li><a href="app/barcode/code128b.html">Code128B</a></li>  
             <li><a href="app/barcode/code128c.html">Code128C</a></li>
             <li><a href="app/barcode/code93.html">Code93</a></li> 
             <li><a href="app/barcode/code93extended.html">Code93Extended</a></li> 
             <li><a href="app/barcode/upcbarcode.html">UpcBarcode</a></li>            
             <li><a href="app/barcode/datamatrix.html">DataMatrix</a></li>                
        </ul>
    </EJ.Tab>,
document.getElementById('barcode')
);