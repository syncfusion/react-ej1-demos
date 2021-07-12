"use strict";

ReactDOM.render(React.createElement(
    EJ.Tab,
    { id: "scrollTab", dataType: "dataType", contentType: "contentType", async: "async", height: "100%" },
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/heatmap/default.html" },
                "Default"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/heatmap/tablebinding.html" },
                "Table Binding"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/heatmap/legend.html" },
                "Legend"
            )
        )
    )
), document.getElementById('heatmap'));
