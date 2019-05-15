var Textbox = React.createClass({displayName: "Textbox",
    render: function () {
        return (
                    React.createElement("div", {className: "control"}, 
                        React.createElement("span", {className: "txt"}, "Localization for de-DE culture"), 
                        React.createElement("table", null, 
                            React.createElement("tbody", null, 
                                React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                        React.createElement("span", null, "Numeric Textbox")
                                    )
                                ), 
                                    React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                        React.createElement(EJ.NumericTextbox, {id: "numeric", value: 20.45, decimalPlaces: 2, locale: "de-DE", width: "150"}
                                        )
                                    )
                                    ), 
                                React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                        React.createElement("span", null, "Percentage Textbox")
                                    )
                                ), 
                                    React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                        React.createElement(EJ.PercentageTextbox, {id: "percent", value: 20.45, decimalPlaces: 2, locale: "de-DE", width: "150"}
                                        )
                                    )
                                    ), 
                                React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                        React.createElement("span", null, "Currency Textbox")
                                    )
                                ), 
                                    React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                       React.createElement(EJ.CurrencyTextbox, {id: "currency", value: 20.45, decimalPlaces: 2, locale: "de-DE", width: "150"}
                                       )
                                    )
                                    ), 
									React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                        React.createElement("span", null, "MaskEdit")
                                    )
                                ), 
                                    React.createElement("tr", null, 
                                    React.createElement("td", null, 
                                       React.createElement(EJ.MaskEdit, {id: "mask", maskFormat: "99,999.99$", locale: "de-DE", width: "150"}
                                       )
                                    )
                                    )
                            )
                        )
        )
            );
    }
});
ReactDOM.render(React.createElement(Textbox, null), document.getElementById('textbox-localization'));