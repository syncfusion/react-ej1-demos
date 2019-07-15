"use strict";

ReactDOM.render(
    React.createElement("div", {className: "imgframe"}, 
    React.createElement(EJ.Menu, {width: "100%"}, 
            React.createElement("li", {id: "Products"}, 
                React.createElement("a", {href: "#"}, "Products"), 
                React.createElement("ul", null, 
                    React.createElement("li", null, React.createElement("a", null, "ASP.NET")), 
                    React.createElement("li", null, React.createElement("a", null, "ASP.NET MVC")), 
                    React.createElement("li", null, React.createElement("a", null, "Mobile MVC")), 
                    React.createElement("li", null, React.createElement("a", null, "Silverlight")), 
                    React.createElement("li", null, React.createElement("a", null, "Windows Forms")), 
                    React.createElement("li", null, React.createElement("a", null, "Windows Phone")), 
                    React.createElement("li", null, React.createElement("a", null, "WinRT (XMAL)")), 
                    React.createElement("li", null, React.createElement("a", null, "WPF")), 
                    React.createElement("li", null, React.createElement("a", null, "Orubase Studio")), 
                    React.createElement("li", null, React.createElement("a", null, "Metro Studio")), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "What's New"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "WinRT (XMAL)")), 
                            React.createElement("li", null, React.createElement("a", null, "WPF")), 
                            React.createElement("li", null, React.createElement("a", null, "Silverlight")), 
                            React.createElement("li", null, React.createElement("a", null, "Windows Forms")), 
                            React.createElement("li", null, React.createElement("a", null, "Windows Phone")), 
                            React.createElement("li", null, React.createElement("a", null, "ASP.NET MVC")), 
                            React.createElement("li", null, React.createElement("a", null, "ASP.NET"))
                        )
                    )
                )
            ), 

            React.createElement("li", {id: "Support"}, 
                React.createElement("a", null, "Support"), 
                React.createElement("ul", null, 
                    React.createElement("li", null, React.createElement("a", null, "Direct-Trac Support")), 
                    React.createElement("li", null, React.createElement("a", null, "Community Forums")), 
                    React.createElement("li", null, React.createElement("a", null, "Knowledge Base")), 
                    React.createElement("li", null, React.createElement("a", null, "Online Documentation")), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "Services"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "Consulting")), 
                            React.createElement("li", null, React.createElement("a", null, "Training"))
                        )
                    )
                )
            ), 

            React.createElement("li", {id: "Purchase"}, React.createElement("a", null, "Purchase")), 

            React.createElement("li", {id: "Downloads"}, 
                React.createElement("a", null, "Downloads"), 
                React.createElement("ul", null, 
                    React.createElement("li", null, React.createElement("a", null, "Evaluation")), 
                    React.createElement("li", null, React.createElement("a", null, "Free E-Books")), 
                    React.createElement("li", null, React.createElement("a", null, "Metro Studio")), 
                    React.createElement("li", null, React.createElement("a", null, "Latest Version")), 
                    React.createElement("li", null, React.createElement("a", null, "Version History"))
                )
            ), 

            React.createElement("li", {id: "Resources"}, 
                React.createElement("a", null, "Resources"), 
                React.createElement("ul", null, 
                    React.createElement("li", null, 
                        React.createElement("a", null, "Technology Resource Portal "), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "E-books")), 
                            React.createElement("li", null, React.createElement("a", null, "White Papers"))
                        )
                    ), 
                    React.createElement("li", null, React.createElement("a", null, "Case Studies")), 
                    React.createElement("li", null, React.createElement("a", null, "Bouchers & Datasheets")), 
                    React.createElement("li", null, React.createElement("a", null, "FAQ"))
                )
            ), 

            React.createElement("li", {id: "Company"}, 
                React.createElement("a", null, "Company"), 
                React.createElement("ul", null, 
                    React.createElement("li", null, 
                        React.createElement("a", null, "About Us"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "More About Us")), 
                            React.createElement("li", null, React.createElement("a", null, "Management")), 
                            React.createElement("li", null, React.createElement("a", null, "News & Events")), 
                            React.createElement("li", null, React.createElement("a", null, "Customer Quotes")), 
                            React.createElement("li", null, React.createElement("a", null, "Customer Lists")), 
                            React.createElement("li", null, React.createElement("a", null, "Case Studies")), 
                            React.createElement("li", null, React.createElement("a", null, "Awards")), 
                            React.createElement("li", null, React.createElement("a", null, "Media Kit"))
                        )
                    ), 
                    React.createElement("li", null, React.createElement("a", null, "Company Blog")), 
                    React.createElement("li", null, React.createElement("a", null, "Technical Blog")), 
                    React.createElement("li", null, React.createElement("a", null, "Newsletter")), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "Partners"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "Technology Partners")), 
                            React.createElement("li", null, React.createElement("a", null, "Training Partners")), 
                            React.createElement("li", null, React.createElement("a", null, "Consulting Partners"))
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", null, "Locations"), 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", null, "RDU")), 
                            React.createElement("li", null, React.createElement("a", null, "Chennai"))
                        )
                    ), 
                    React.createElement("li", null, React.createElement("a", null, "Contact Us")), 
                    React.createElement("li", null, React.createElement("a", null, "Careers"))
                )
            )
    )
    ),
document.getElementById('menu-default')
);