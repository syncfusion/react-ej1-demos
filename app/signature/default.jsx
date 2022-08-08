"use strict";

ReactDOM.render(
	<div className="list">
		<h5>Sign here:</h5> 
		<EJ.Signature id="mySignature" isResponsive="true" height={400}>
  	</EJ.Signature>
	</div>,
	document.getElementById('signature-default')
);