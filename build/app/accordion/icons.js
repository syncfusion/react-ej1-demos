"use strict";

ReactDOM.render(
    React.createElement(EJ.Accordion, {"customIcon-header": "header-close", "customIcon-selectedHeader": "header-expand"}, 
        React.createElement("h3", null, 
            React.createElement("div", {className: "logos volkswagan"}), 
            React.createElement("a", {href: "#"}, "Volkswagen")
        ), 
        React.createElement("div", null, 
            "Volkswagen is a German automobile manufacturer headquartered in Wolfsburg, Lower Saxony, Germany." + ' ' +
            "Volkswagen is the original and top-selling marquee of the Volkswagen Group, the biggest German automaker and the third largest automaker in the world."
        ), 
        React.createElement("h3", null, 
            React.createElement("div", {className: "logos mitsubishi"}), 
            React.createElement("a", {href: "#"}, "Mitsubishi")
        ), 
        React.createElement("div", null, 
            "The Mitsubishi Group is a group of autonomous Japanese multinational companies covering a range of businesses which share the Mitsubishi brand," + ' ' +
            "trademark, and legacy.The Mitsubishi group of companies form a loose entity, the Mitsubishi Keiretsu, which is often referenced in Japanese and US media and official reports."
        ), 
        React.createElement("h3", null, 
            React.createElement("div", {className: "logos benz"}), 
            React.createElement("a", {href: "#"}, "Mercedes-Benz")
        ), 
        React.createElement("div", null, 
            "Mercedes-Benz is a multinational division of the German manufacturer Daimler AG, and the brand is used for luxury automobiles, buses, coaches, and trucks." + ' ' +
            "Mercedes-Benz is headquartered in Stuttgart, Baden-Württemberg, Germany.The name first appeared in 1926 under Daimler-Benz but traces its origins" + ' ' +
            "to Daimler-Motormen-Gesell shaft's 1901 Mercedes and to Karl Benz's 1886 Benz Patent Motorwagen, which is widely regarded as the first automobile."
        )
    ),
        document.getElementById('accordion-icons')
);