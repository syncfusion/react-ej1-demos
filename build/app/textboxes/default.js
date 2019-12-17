"use strict";

ReactDOM.render(   
	React.createElement(EJ.NumericTextbox, {value: 20, width: "150"}
  ),
	document.getElementById('numeric-default')
);
ReactDOM.render(   
	React.createElement(EJ.PercentageTextbox, {value: 20, width: "150"}
  ),
	document.getElementById('percent-default')
);
ReactDOM.render(   
	React.createElement(EJ.CurrencyTextbox, {value: 20, width: "150"}
  ),
	document.getElementById('currency-default')
);
ReactDOM.render(   
		React.createElement(EJ.MaskEdit, {value: "4242422424", maskFormat: "99 999-99999", width: "150"}
	),
document.getElementById('mask-default')
);