var Navigation = React.createClass({
    headChange: function (e) {
        $("#drawer").parent().children("h2").text(e.text);
    },
    render: function () {
        return (   
            <div id="targetPane"> 
                <div className="e-lv">
                    <div className="e-header">
                        <div id="drawer" className="drawericon e-icon alignText"></div>
                        <h2 className="alignText">Home</h2>
                    </div>
                </div>

                <div id="home" className="subpage">
                    <p> 
                        The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) and Britain, is a sovereign state located off the north-western coast of continental Europe. The country includes the island of Great Britain, the north-eastern part of the    island of Ireland and many smaller islands. Northern Ireland is the only part of the UK that shares a land border with another state—the Republic of Ireland. Apart from this land border, the UK is surrounded by the Atlantic Ocean in the west and north, the North Sea in the east, the English Channel in the south and the Irish Sea in the west.
                    </p>
                </div>

                <div id="people" className="subpage">
                    <table cellpadding="5px">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="peopleimage Agatha_ie8 agatha"></div>
                                    <span>Agatha Jessie</span>
                                </td>
                                <td>
                                    <div className="peopleimage Andrew_ie8 andrew"></div>
                                    <span>Andrew Philip</span>
                                </td>
                                <td>
                                    <div className="peopleimage Lilly_ie8 lilly"></div>
                                    <span>Lilly Thomas</span>
                                </td>
                                <td>
                                    <div className="peopleimage Jaden_ie8 jaden"></div>
                                    <span>Jaden Strom</span>
                                </td>
                                <td>
                                    <div className="peopleimage Angel_ie8 angel"></div>
                                    <span>Angel Christie</span>
                                </td>
                                <td>
                                    <div className="peopleimage Joe_ie8 joe"></div>
                                    <span>Joe Michael</span>
                                </td>
                                <td>
                                    <div className="peopleimage Marie_ie8 marie"></div>
                                    <span>Magen Mia</span>
                                </td>
                                <td>
                                    <div className="peopleimage Magen_ie8 magen"></div>
                                    <span>Marie Luke</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="profile" className="subpage">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="profileimage andrew"></div>
                                </td>
                                <td>
                                    <h2>Andrew Philip</h2>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <span>Profile</span><br />
                    <p>
                        Born on December 25, 1954, in Spokane, Washington. Philip graduated from Texas University in 1978. He started his career as a teacher.
                        Later he started business with his friend Paul. They both spent more time together working on business. They earned enough money and spent that for poor and social welfares. Later they together started an organization for children welfare.
                    </p>
                </div>

                <div id="photos" className="subpage">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="photoimage photoimage1_ie8"></div>
                                </td>
                                <td>
                                    <div className="photoimage photoimage2_ie8"></div>
                                </td>
                                <td>
                                    <div className="photoimage photoimage3_ie8"></div>
                                </td>
                                <td>
                                    <div className="photoimage photoimage4_ie8"></div>
                                </td>
                                <td>
                                    <div className="photoimage photoimage5_ie8"></div>
                                </td>
                                <td>
                                    <div className="photoimage photoimage6_ie8"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="communities" className="subpage">
                    <h2>Product Breadth</h2>
                    <p> UI, reporting and business intelligence on any .NET platform, all from one vendor.</p>
                    <h2>No-Hassle Licensing</h2>
                    <p> No royalties, run-time, or server-deployment fees means no surprises. </p>
                    <h2>Uncompromising Quality</h2>
                    <p> An almost brutal QA process makes our products truly enterprise-quality. </p>
                </div>

                <div id="location" className="subpage">
                    <div className="locationimage"></div>
                </div>

                <div id="navdrawer_container"></div>

                <EJ.NavigationDrawer id="navpanedefault" targetId="drawer" contentId="navdrawer_container" type="overlay" 
                directtion="left" enableListView={true} listViewSettings-width={220} listViewSettings-height="100%" 
                listViewSettings-selectedItemIndex="0" listViewSettings-mouseUp={this.headChange} position="normal">
                    <ul>
                        <li data-ej-imageurl="content/images/navigationdrawer/home.png" data-ej-text="Home" data-ej-href="#home" id="navhome"></li>
                        <li data-ej-imageurl="content/images/navigationdrawer/profile.png" data-ej-text="Profile" data-ej-href="#profile" id="navprofile"></li>
                        <li data-ej-imageurl="content/images/navigationdrawer/people.png" data-ej-text="People" data-ej-href="#people" id="navpeople"></li>
                        <li data-ej-imageurl="content/images/navigationdrawer/photo.png" data-ej-text="Photos" data-ej-href="#photos" id="navphotos"></li>
                        <li data-ej-imageurl="content/images/navigationdrawer/communities.png" data-ej-text="Communities" data-ej-href="#communities" id="navcommunities"></li>
                        <li data-ej-imageurl="content/images/navigationdrawer/locations.png" data-ej-text="Location" data-ej-href="#location" id="navlocation"></li>
                    </ul>
                </EJ.NavigationDrawer>
            </div>
        );
    }
});  

ReactDOM.render(<Navigation />, document.getElementById('navigationdrawer-default'));
