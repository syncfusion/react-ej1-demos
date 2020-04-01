var FileAndImageBrowserRTE = React.createClass({
    render: function () {
        return (   
            <div  id="rte_fileandimagebrowser" >
                <EJ.RTE toolsList={["images"]} tools-images={["image"]} imageBrowser-filePath={filePath}  fileBrowser-filePath={filePath}  fileBrowser-ajaxAction= {fileService} imageBrowser-ajaxAction= {fileService} fileBrowser-extensionAllow= "*.png, *.gif, *.jpg, *.jpeg, *.docx" imageBrowser-extensionAllow= "*.txt, *.png, *.pdf,*.jpeg" fileBrowser-ajaxSettings= {ajaxSettings} imageBrowser-ajaxSettings= {ajaxSettings1} width= "100%" minWidth= "150px" isResponsive={true}>
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
ReactDOM.render(<FileAndImageBrowserRTE />, document.getElementById('rte-fileandimagebrowser'));
}, 10);