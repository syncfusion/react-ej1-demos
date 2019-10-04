var Dialog = React.createClass({
    activeItem: function() {
        var dialogDefault = $("#basicDialog").data("ejDialog");
        var dialogIcon = $("#dialogIcon").data("ejDialog");
        var dialogModal = $("#modalDialog").data("ejDialog");
        var dialogRTL = $("#rtlDialog").data("ejDialog");
        if (dialogDefault && dialogDefault.element.closest(".e-content-item").css("display") != "none") {
            dialogDefault._centerPosition();
            dialogDefault._changeSize();
            $("#basicDialog").ejDialog("open");
        }
        if (dialogIcon && dialogIcon.element.closest(".e-content-item").css("display") != "none")  {
            dialogIcon._centerPosition();
            dialogIcon._changeSize();

            $("#dialogIcon").ejDialog("open");
        }
        if (dialogModal && dialogModal.element.closest(".e-content-item").css("display") != "none") {
            dialogModal._centerPosition();
            dialogModal._changeSize();
            $("#modalDialog").ejDialog("open");
        }
        if (dialogRTL && dialogRTL.element.closest(".e-content-item").css("display") != "none")  {
            dialogRTL._centerPosition();
            dialogRTL._changeSize();
            $("#rtlDialog").ejDialog("open");
        }
    },

render: function () {
        return (   
    <EJ.Tab id="scrollTab"  dataType="dataType"  contentType="contentType" async="async" height="100%" enableTabScroll={true} itemActive={this.activeItem}>
        <ul>
            <li><a href="app/dialog/default.html">Default</a></li>
            <li><a href="app/dialog/actionbuttons.html">Action Buttons</a></li>
            <li><a href="app/dialog/modeldialog.html">Modal Dialog</a></li>
            <li><a href="app/dialog/rtl.html">RTL</a></li>
        </ul>
    </EJ.Tab>
    );
  }
});

ReactDOM.render(<Dialog />, document.getElementById('dialog'));