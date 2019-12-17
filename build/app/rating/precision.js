var PrecisionRating = React.createClass({displayName: "PrecisionRating",
    render: function () {
        return (
            React.createElement("div", {id: "rating_precision"}, 
                
                React.createElement("div", {class: "frame"}, 
                    React.createElement("table", {id: "table"}, 
                        React.createElement("tr", null, 
                            React.createElement("td", {valign: "top"}, 
                                "Full Precision :"
                            ), 
                            React.createElement("td", null, 
                                React.createElement(EJ.Rating, {value: 4})
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {valign: "top"}, 
                                "Half Precision :"
                            ), 
                            React.createElement("td", null, 
                                React.createElement(EJ.Rating, {value: 3.5, precision: "half"})
                            )
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {valign: "top"}, 
                                "Exact Precision :"
                            ), 
                            React.createElement("td", null, 
                                React.createElement(EJ.Rating, {value: 3.7, precision: "exact"})
                            )
                        )
                    )
                )
)
        );
    }
});

ReactDOM.render(React.createElement(PrecisionRating, null), document.getElementById('rating-precision'));