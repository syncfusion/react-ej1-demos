 var DefaultRTE = React.createClass({displayName: "DefaultRTE",
   
     render: function () {
        return (    
    React.createElement(EJ.RTE, {id: "rtebasic", width: "100%", minWidth: "150px", isResponsive: true}, 
        "<p><b>Description:</b></p>" + ' ' +
        "<p>The Rich Text Editor (RTE) control is an easy to render in" + ' ' +
        "client side. Customer easy to edit the contents and get the HTML content for" + ' ' +
        "the displayed content. A rich text editor control provides users with a toolbar" + ' ' +
        "that helps them to apply rich text formats to the text entered in the text" + ' ' +
        "area. </p>" + ' ' +
        "<p><b>Functional" + ' ' +
        "Specifications/Requirements:</b></p>" + ' ' +
        "<ol><li><p>Provide" + ' ' +
        "the tool bar support, it’s also customizable.</p></li><li><p>Options" + ' ' +
        "to get the HTML elements with styles.</p></li><li><p>Support" + ' ' +
        "to insert image from a defined path.</p></li><li><p>Footer" + ' ' +
        "elements and styles(tag / Element information , Action button (Upload, Cancel))</p></li><li><p>Re-size" + ' ' +
        "the editor support. </p></li><li><p>Provide" + ' ' +
        "efficient public methods and client side events.</p></li><li><p>Keyboard" + ' ' +
        "navigation support.</p></li></ol>"
    )
  
        );
    }
});  
setTimeout(function() {
ReactDOM.render(React.createElement(DefaultRTE, null), document.getElementById('rte-default'));
}, 10);