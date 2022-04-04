var Textbox = React.createClass({
    render: function () {
        return (
                    <div className="control">
                        <span className="txt">Localization for de-DE culture</span>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>Numeric Textbox</span>
                                    </td>
                                </tr>
                                    <tr>
                                    <td>
                                        <EJ.NumericTextbox id="numeric" value={20.45} decimalPlaces={2} locale="de-DE" width="150">
                                        </EJ.NumericTextbox>
                                    </td>
                                    </tr>
                                <tr>
                                    <td>
                                        <span>Percentage Textbox</span>
                                    </td>
                                </tr>
                                    <tr>
                                    <td>
                                        <EJ.PercentageTextbox id="percent" value={20.45} decimalPlaces={2} locale="de-DE" width="150">
                                        </EJ.PercentageTextbox>
                                    </td>
                                    </tr>
                                <tr>
                                    <td>
                                        <span>Currency Textbox</span>
                                    </td>
                                </tr>
                                    <tr>
                                    <td>
                                       <EJ.CurrencyTextbox id="currency" value={20.45} decimalPlaces={2} locale="de-DE" width="150">
                                       </EJ.CurrencyTextbox>
                                    </td>
                                    </tr>
									<tr>
                                    <td>
                                        <span>MaskEdit</span>
                                    </td>
                                </tr>
                                    <tr>
                                    <td>
                                       <EJ.MaskEdit id="mask" maskFormat="99,999.99$" locale="de-DE" width="150">
                                       </EJ.MaskEdit>
                                    </td>
                                    </tr>
                            </tbody>
                        </table>
        </div>
            );
    }
});
ReactDOM.render(<Textbox />, document.getElementById('textbox-localization'));