var LocalizationRTE = React.createClass({
        
    render: function () {
            return (   
                <div  id="rte_localization" >
                    <EJ.RTE width="100%" minWidth="150px" isResponsive={true} locale="de-DE" >
                        &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
                        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
                        client side. Customer easy to edit the contents and get the HTML content for
                        the displayed content. A rich text editor control provides users with a toolbar
                        that helps them to apply rich text formats to the text entered in the text
                        area. &lt;/p&gt;
                        &lt;p&gt;&lt;b&gt;Functional
                        Specifications/Requirements:&lt;/b&gt;&lt;/p&gt;
                        &lt;ol&gt;&lt;li&gt;&lt;p&gt;Provide
                        the tool bar support, it’s also customizable.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Options
                        to get the HTML elements with styles.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Support
                        to insert image from a defined path.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Footer
                        elements and styles(tag / Element information , Action button (Upload, Cancel))&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Re-size
                        the editor support. &lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Provide
                        efficient public methods and client side events.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;Keyboard
                        navigation support.&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;
                    </EJ.RTE>  
                </div>
            );
        }
    });  
setTimeout(function() {
ReactDOM.render(<LocalizationRTE />, document.getElementById('rte-localization'));
}, 10);