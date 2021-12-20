var Navigation = React.createClass({displayName: "Navigation",
    headChange: function (e) {
        $("#drawer").parent().children("h2").text(e.text);
    },
    render: function () {
        return (   
            React.createElement("div", {id: "targetPane"}, 
                React.createElement("div", {className: "e-lv"}, 
                    React.createElement("div", {className: "e-header"}, 
                        React.createElement("div", {id: "drawer", className: "drawericon e-icon alignText"}), 
                        React.createElement("h2", {className: "alignText"}, "Home")
                    )
                ), 

                React.createElement("div", {id: "home", className: "subpage"}, 
                    React.createElement("p", null, 
                        "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) and Britain, is a sovereign state located off the north-western coast of continental Europe. The country includes the island of Great Britain, the north-eastern part of the    island of Ireland and many smaller islands. Northern Ireland is the only part of the UK that shares a land border with another state—the Republic of Ireland. Apart from this land border, the UK is surrounded by the Atlantic Ocean in the west and north, the North Sea in the east, the English Channel in the south and the Irish Sea in the west."
                    )
                ), 

                React.createElement("div", {id: "people", className: "subpage"}, 
                    React.createElement("table", {cellpadding: "5px"}, 
                        React.createElement("tbody", null, 
                            React.createElement("tr", null, 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "peopleimage Agatha_ie8 agatha"}), 
                                    React.createElement("span", null, "Agatha Jessie")
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "peopleimage Andrew_ie8 andrew"}), 
                                    React.createElement("span", null, "Andrew Philip")
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "peopleimage Lilly_ie8 lilly"}), 
                                    React.createElement("span", null, "Lilly Thomas")
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "peopleimage Jaden_ie8 jaden"}), 
                                    React.createElement("span", null, "Jaden Strom")
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "peopleimage Angel_ie8 angel"}), 
                                    React.createElement("span", null, "Angel Christie")
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "peopleimage Joe_ie8 joe"}), 
                                    React.createElement("span", null, "Joe Michael")
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "peopleimage Marie_ie8 marie"}), 
                                    React.createElement("span", null, "Magen Mia")
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "peopleimage Magen_ie8 magen"}), 
                                    React.createElement("span", null, "Marie Luke")
                                )
                            )
                        )
                    )
                ), 

                React.createElement("div", {id: "profile", className: "subpage"}, 
                    React.createElement("table", null, 
                        React.createElement("tbody", null, 
                            React.createElement("tr", null, 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "profileimage andrew"})
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("h2", null, "Andrew Philip")
                                )
                            )
                        )
                    ), 
                    React.createElement("br", null), 
                    React.createElement("span", null, "Profile"), React.createElement("br", null), 
                    React.createElement("p", null, 
                        "Born on December 25, 1954, in Spokane, Washington. Philip graduated from Texas University in 1978. He started his career as a teacher." + ' ' +
                        "Later he started business with his friend Paul. They both spent more time together working on business. They earned enough money and spent that for poor and social welfares. Later they together started an organization for children welfare."
                    )
                ), 

                React.createElement("div", {id: "photos", className: "subpage"}, 
                    React.createElement("table", null, 
                        React.createElement("tbody", null, 
                            React.createElement("tr", null, 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "photoimage photoimage1_ie8"})
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "photoimage photoimage2_ie8"})
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "photoimage photoimage3_ie8"})
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "photoimage photoimage4_ie8"})
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "photoimage photoimage5_ie8"})
                                ), 
                                React.createElement("td", null, 
                                    React.createElement("div", {className: "photoimage photoimage6_ie8"})
                                )
                            )
                        )
                    )
                ), 

                React.createElement("div", {id: "communities", className: "subpage"}, 
                    React.createElement("h2", null, "Product Breadth"), 
                    React.createElement("p", null, " UI, reporting and business intelligence on any .NET platform, all from one vendor."), 
                    React.createElement("h2", null, "No-Hassle Licensing"), 
                    React.createElement("p", null, " No royalties, run-time, or server-deployment fees means no surprises. "), 
                    React.createElement("h2", null, "Uncompromising Quality"), 
                    React.createElement("p", null, " An almost brutal QA process makes our products truly enterprise-quality. ")
                ), 

                React.createElement("div", {id: "location", className: "subpage"}, 
                    React.createElement("div", {className: "locationimage"})
                ), 

                React.createElement("div", {id: "navdrawer_container"}), 

                React.createElement(EJ.NavigationDrawer, {id: "navpanedefault", targetId: "drawer", contentId: "navdrawer_container", type: "overlay", 
                directtion: "left", enableListView: true, "listViewSettings-width": 220, "listViewSettings-height": "100%", 
                "listViewSettings-selectedItemIndex": "0", "listViewSettings-mouseUp": this.headChange, position: "normal"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", {"data-ej-imageurl": "content/images/navigationdrawer/home.png", "data-ej-text": "Home", "data-ej-href": "#home", id: "navhome"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/navigationdrawer/profile.png", "data-ej-text": "Profile", "data-ej-href": "#profile", id: "navprofile"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/navigationdrawer/people.png", "data-ej-text": "People", "data-ej-href": "#people", id: "navpeople"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/navigationdrawer/photo.png", "data-ej-text": "Photos", "data-ej-href": "#photos", id: "navphotos"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/navigationdrawer/communities.png", "data-ej-text": "Communities", "data-ej-href": "#communities", id: "navcommunities"}), 
                        React.createElement("li", {"data-ej-imageurl": "content/images/navigationdrawer/locations.png", "data-ej-text": "Location", "data-ej-href": "#location", id: "navlocation"})
                    )
                )
            )
        );
    }
});  

ReactDOM.render(React.createElement(Navigation, null), document.getElementById('navigationdrawer-default'));
