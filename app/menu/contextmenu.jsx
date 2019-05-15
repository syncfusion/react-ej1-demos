var ContextMenuMenu = React.createClass({
    render: function () {
        return (   
            <div  id="menu_contextmenu">  
                <div id="target" className="textarea">
                    HTML is written in the form of HTML elements consisting of tags enclosed in angle
                    brackets (like
                    &lt;html&gt;
                    ),within the web page content. HTML tags most commonly come in pairs like and ,although
                    some tags, known as empty elements, are unpaired, for example
                    &lt;img&gt;. The purpose of a web browser is to read HTML documents and compose them into
                    visible or audible web pages. The browser does not display the HTML tags, but uses
                    the tags to interpret the content of the page.
                </div>
                <EJ.Menu id="context" menuType="contextmenu" openOnClick={false} contextMenuTarget="#target">
                    <li><a>Cut</a></li>
                    <li><a>Copy</a></li>
                    <li className="e-separator"><a>Paste</a></li>
                    <li><a>Comments</a></li>
                    <li><a>Links</a></li>
                    <li><a>Clear Formatting</a></li>
                </EJ.Menu>
            </div>
        );
    }
});  

ReactDOM.render(<ContextMenuMenu />, document.getElementById('menu-contextmenu'));