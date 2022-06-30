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
                { href: "app/diagram/default.html" },
                "Default"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/circuitdiagram.html" },
                "Circuit Diagram"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/hierarchicaltree.html" },
                "Hierarchical Tree"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/localdata.html" },
                "Localdata"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/organizationalchart.html" },
                "Organizational Chart"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/overview.html" },
                "Overview"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/pagesettings.html" },
                "Page Settings"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/radialtree.html" },
                "Radial Tree"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/swimlane.html" },
                "Swimlane"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "app/diagram/umldiagram.html" },
                "UML Diagram"
            )
        )
    )
), document.getElementById('diagram'));
