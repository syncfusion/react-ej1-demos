"use strict";

ReactDOM.render(
	React.createElement("div", {className: "list"}, 
		React.createElement("h5", null, "Sign here:"), 
		React.createElement(EJ.Signature, {id: "mySignature", isResponsive: "true", height: 400}
  	)
	),
	document.getElementById('signature-default')
);