"use strict";
var localServ, ajaxDataType;
localServ =  window.baseurl + "api/FileExplorer/FileOperations";
var browname = /MSIE 8.0/i.test(window.navigator.userAgent) || /MSIE 9.0/i.test(window.navigator.userAgent) ? true : false;
if (browname)
{
    localServ = window.baseurl + "api/FileExplorer/FileOperationsCors";
    ajaxDataType =  "jsonp" ;
}
var path =  window.baseurl + "Content/FileBrowser/";
ReactDOM.render(
		React.createElement(EJ.FileExplorer, {id: "default", ajaxDataType: ajaxDataType, ajaxAction: localServ, isResponsive: true, width: "100%", minWidth: "150px", fileTypes: "*.png, *.gif, *.jpg, *.jpeg, *.docx", layout: "tile", path: path}
	),
	document.getElementById('fileexplorer-default')
);
