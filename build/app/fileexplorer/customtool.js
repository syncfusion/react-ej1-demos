"use strict";
var toolsList = ["layout", "creation", "navigation", "addressBar", "editing", "copyPaste", "getProperties", "customTool", "searchBar"];
var tools = ej.FileExplorer.prototype.defaults.tools;
tools.customTool = [{
            name: "Help",
            tooltip: "Help ",
            css: "e-fileExplorer-toolbar-icon Help",
            action: function () {
                var dlgObj = $("#helpDialog1").data("ejDialog")
                dlgObj.open();
            }
        }];
var localServ, ajaxDataType;
localServ = window.baseurl + "api/FileExplorer/FileOperations";
var browname = /MSIE 8.0/i.test(window.navigator.userAgent) || /MSIE 9.0/i.test(window.navigator.userAgent) ? true : false;
if (browname)
{
    localServ = window.baseurl + "api/FileExplorer/FileOperationsCors";
    ajaxDataType =  "jsonp" ;
}
var path = window.baseurl + "Content/FileBrowser/";
ReactDOM.render(
		React.createElement(EJ.FileExplorer, {id: "customtool", ajaxDataType: ajaxDataType, ajaxAction: localServ, isResponsive: true, width: "100%", minWidth: "150px", layout: "largeicons", toolsList: toolsList, fileTypes: "*.png, *.gif, *.jpg, *.jpeg, *.docx", path: path}
	),
	document.getElementById('fileexplorer-customtool')
);
ReactDOM.render(
		React.createElement(EJ.Dialog, {id: "helpDialog1", enableResize: false, title: "Use of FileExplorer", enableModal: true, showOnInit: false, width: 350, maxWidth: "100%", cssClass: "e-fe-dialog"}, 
            React.createElement("div", {class: "text-content"}, 
            React.createElement("div", {class: "header-content"}, "Need assistance?"), 
            React.createElement("div", {class: "header-content"}, "Our help document assists you to know more about FileExplorer control."), 
            React.createElement("div", {class: "header-content"}, "Please refer",  
                React.createElement("a", {href: "//help.syncfusion.com/js/fileexplorer/overview", target: "_blank"}, "  Help Document")
           )
        )
		),
document.getElementById('helpDialog')
);
