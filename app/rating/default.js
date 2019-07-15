var DefaultRating = React.createClass({displayName: "DefaultRating",
    render: function () {
        return (
            React.createElement("div", {id: "rating_default"}, 
                React.createElement(EJ.Tab, {width: "100%"}, 
                React.createElement("ul", null, 
						React.createElement("li", null, React.createElement("a", {href: "#steelman"}, "Man of Steel")), 
						React.createElement("li", null, React.createElement("a", {href: "#woldwar"}, "World War Z")), 
						React.createElement("li", null, React.createElement("a", {href: "#unive"}, "Monsters University"))
                ), 
					React.createElement("div", {id: "steelman"}, 
							React.createElement("table", null, 
								React.createElement("tr", null, 
									React.createElement("td", {className: "movies-img", valign: "top"}, 
										React.createElement("img", {src: "content/images/rating/mos.png", alt: "mos"})
									), 
									React.createElement("td", {valign: "top"}, 
										React.createElement("div", null, 
											React.createElement("span", {className: "movie-header"}, "Man of Steel"), React.createElement("br", null), 
										    "Rating :", 
													React.createElement("br", null), 
                                            React.createElement(EJ.Rating, {value: 3}), React.createElement("br", null), 
											React.createElement("span", null, "Movie Info:"), 
											React.createElement("p", null, 
											    "A young boy learns that he has extraordinary powers and is not of this Earth."
											)
)
									)
								)
							)
					), 
					React.createElement("div", {id: "woldwar"}, 
						React.createElement("table", null, 
							React.createElement("tr", null, 
								React.createElement("td", {className: "movies-img", valign: "top"}, 
									React.createElement("img", {src: "content/images/rating/wwz.png", alt: "mos"})
								), 
								React.createElement("td", {valign: "top"}, 
									React.createElement("div", null, 
										React.createElement("span", {className: "movie-header"}, "World War Z"), React.createElement("br", null), 
									    "Rating :", 
												React.createElement("br", null), 
                                        React.createElement(EJ.Rating, {value: 4}), React.createElement("br", null), 
										React.createElement("span", null, "Movie Info:"), 
										React.createElement("p", null, 
										    "The story revolves around United Nations employee Gerry Lane (Pitt)."
										)
									)
								)
							)
						)
					), 
					React.createElement("div", {id: "unive"}, 
						React.createElement("table", null, 
							React.createElement("tr", null, 
								React.createElement("td", {className: "movies-img", valign: "top"}, 
									React.createElement("img", {src: "content/images/rating/mu.png", alt: "mos"})
								), 
								React.createElement("td", {valign: "top"}, 
									React.createElement("div", null, 
										React.createElement("span", {className: "movie-header"}, "Monsters University"), React.createElement("br", null), 
									    "Rating :", 
												React.createElement("br", null), 
                                        React.createElement(EJ.Rating, {value: 4}), React.createElement("br", null), 
										React.createElement("span", null, "Movie Info:"), 
										React.createElement("p", null, 
										    "Mike Wazowski and James P. Sullivan are an inseparable pair, but that wasn't always the case."
										)
									)
								)
							)
						)
					)
                )
)
        );
    }
});

ReactDOM.render(React.createElement(DefaultRating, null), document.getElementById('rating-default'));