"use strict";

ReactDOM.render(   
	<EJ.NumericTextbox value={20} width="150">
  </EJ.NumericTextbox>,
	document.getElementById('numeric-default')
);
ReactDOM.render(   
	<EJ.PercentageTextbox value={20} width="150">
  </EJ.PercentageTextbox>,
	document.getElementById('percent-default')
);
ReactDOM.render(   
	<EJ.CurrencyTextbox value={20} width="150">
  </EJ.CurrencyTextbox>,
	document.getElementById('currency-default')
);
ReactDOM.render(   
		<EJ.MaskEdit value="4242422424" maskFormat="99 999-99999" width="150">
	</EJ.MaskEdit>,
document.getElementById('mask-default')
);