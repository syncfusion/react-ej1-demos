var DefaultRating = React.createClass({
    render: function () {
        return (
            <div id="rating_default">
                <EJ.Tab width="100%">
                <ul>
						<li><a href="#steelman">Man of Steel</a></li>
						<li><a href="#woldwar">World War Z</a></li>
						<li><a href="#unive">Monsters University</a></li>
                </ul>
					<div id="steelman">
							<table>
								<tr>
									<td className="movies-img" valign="top">
										<img src="content/images/rating/mos.png" alt="mos" />
									</td>
									<td valign="top">
										<div>
											<span className="movie-header">Man of Steel</span><br />
										    Rating :
													<br />
                                            <EJ.Rating value={3}></EJ.Rating><br />
											<span>Movie Info:</span>
											<p>
											    A young boy learns that he has extraordinary powers and is not of this Earth.
											</p>
</div>
									</td>
								</tr>
							</table>
					</div>
					<div id="woldwar">
						<table>
							<tr>
								<td className="movies-img" valign="top">
									<img src="content/images/rating/wwz.png" alt="mos" />
								</td>
								<td valign="top">
									<div>
										<span className="movie-header">World War Z</span><br />
									    Rating :
												<br />
                                        <EJ.Rating value={4}></EJ.Rating><br />
										<span>Movie Info:</span>
										<p>
										    The story revolves around United Nations employee Gerry Lane (Pitt).
										</p>
									</div>
								</td>
							</tr>
						</table>
					</div>
					<div id="unive">
						<table>
							<tr>
								<td className="movies-img" valign="top">
									<img src="content/images/rating/mu.png" alt="mos" />
								</td>
								<td valign="top">
									<div>
										<span className="movie-header">Monsters University</span><br />
									    Rating :
												<br />
                                        <EJ.Rating value={4}></EJ.Rating><br />
										<span>Movie Info:</span>
										<p>
										    Mike Wazowski and James P. Sullivan are an inseparable pair, but that wasn't always the case.
										</p>
									</div>
								</td>
							</tr>
						</table>
					</div>
                </EJ.Tab>
</div>
        );
    }
});

ReactDOM.render(<DefaultRating />, document.getElementById('rating-default'));