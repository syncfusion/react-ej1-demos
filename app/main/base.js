window.baseurl = "//js.syncfusion.com/demos/ejServices/";
window.htmlEditor = []; window.JSEditor = [];
window.menuData = [{ id: 1, text: "", parentId: null, spriteCssClass: "e-icon" },
                    { id: "flatazure", text: "Flat-Azure", parentId: 1, spriteCssClass: "SB-theme SB-flat-azure" },
                    { id: "flatazuredark", text: "Flat-Azure-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-azure-dark" },
                    { id: "flatlime", text: "Flat-Lime", parentId: 1, spriteCssClass: "SB-theme SB-flat-lime" },
                    { id: "flatlimedark", text: "Flat-Lime-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-lime-dark" },
                    { id: "flatsaffron", text: "Flat-Saffron", parentId: 1, spriteCssClass: "SB-theme SB-flat-saffron" },
                    { id: "flatsaffrondark", text: "Flat-Saffron-Dark", parentId: 1, spriteCssClass: "SB-theme SB-flat-saffron-dark" },
                    { id: "gradientazure", text: "Gradient-Azure", parentId: 1, spriteCssClass: "SB-theme SB-gradient-azure" },
                    { id: "gradientazuredark", text: "Gradient-Azure-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-azure-dark" },
                    { id: "gradientlime", text: "Gradient-Lime", parentId: 1, spriteCssClass: "SB-theme SB-gradient-lime" },
                    { id: "gradientlimedark", text: "Gradient-Lime-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-lime-dark" },
                    { id: "gradientsaffron", text: "Gradient-Saffron", parentId: 1, spriteCssClass: "SB-theme SB-gradient-saffron" },
                    { id: "gradientsaffrondark", text: "Gradient-Saffron-Dark", parentId: 1, spriteCssClass: "SB-theme SB-gradient-saffron-dark" },
                    { id: "flatbootstrap", text: "Bootstrap", parentId: 1, spriteCssClass: "SB-theme SB-bootstrap" },
					{ id: "highcontrast01", text: "High-Contrast-01", parentId: 1, spriteCssClass: "SB-theme SB-high-contrast-01" },
					{ id: "highcontrast02", text: "High-Contrast-02", parentId: 1, spriteCssClass: "SB-theme SB-high-contrast-02" },
					{ id: "material", text: "Material", parentId: 1, spriteCssClass: "SB-theme SB-material" },
					{ id: "office365", text: "Office-365", parentId: 1, spriteCssClass: "SB-theme SB-office365" }

];
window.isOnline = (window.location.host == "reactjq.syncfusion.com") ? true : false;
window.themeMenu={dataSource:window.menuData};
var themes = {
    "flat": "content/ej/themes/default-theme/ej.web.all.min.css",
    "flatdark": "content/ej/themes/flat-azure-dark/ej.web.all.min.css",
    "azure": "content/ej/themes/default-theme/ej.web.all.min.css",
    "azuredark": "content/ej/themes/flat-azure-dark/ej.web.all.min.css",
    "lime": "content/ej/themes/flat-lime/ej.web.all.min.css",
    "limedark": "content/ej/themes/flat-lime-dark/ej.web.all.min.css",
    "saffron": "content/ej/themes/flat-saffron/ej.web.all.min.css",
    "saffrondark": "content/ej/themes/flat-saffron-dark/ej.web.all.min.css",
    "gradient": "content/ej/themes/gradient-azure/ej.web.all.min.css",
    "gradientdark": "content/ej/themes/gradient-azure-dark/ej.web.all.min.css",
    "gradientazure": "content/ej/themes/gradient-azure/ej.web.all.min.css",
    "gradientazuredark": "content/ej/themes/gradient-azure-dark/ej.web.all.min.css",
    "gradientlime": "content/ej/themes/gradient-lime/ej.web.all.min.css",
    "gradientlimedark": "content/ej/themes/gradient-lime-dark/ej.web.all.min.css",
    "gradientsaffron": "content/ej/themes/gradient-saffron/ej.web.all.min.css",
    "gradientsaffrondark": "content/ej/themes/gradient-saffron-dark/ej.web.all.min.css",
    "bootstrap": "content/ej/themes/bootstrap-theme/ej.web.all.min.css",
    "high-contrast-01": "content/ej/themes/high-contrast-01/ej.web.all.min.css",
    "high-contrast-02": "content/ej/themes/high-contrast-02/ej.web.all.min.css",
    "material": "content/ej/themes/material/ej.web.all.min.css",
    "office-365": "content/ej/themes/office-365/ej.web.all.min.css"
};
var Main = createReactClass({
  componentWillMount: function () {
    if (window.location.hash == "") {
      history.replaceState(null, null, "#app/accordion/default");
    }
    else {
      var string = window.location.href.split("#app/");
      history.replaceState(null, null, "#app/" + string[1]);
    }
    if (document.referrer && document.referrer.split('/')[2] != window.location.host) {
            var existingCookieValue = this.getCookieValue("SampleSiteReferrer");
            var currentUrl = "";
            if (existingCookieValue.indexOf(window.location.host) === -1) {
                currentUrl = "," + window.location.href;
            }
            if (existingCookieValue != "undefined" && existingCookieValue != undefined && existingCookieValue != "") {
                existingCookieValue = existingCookieValue + currentUrl;
                document.cookie = "SampleSiteReferrer" + "=" + existingCookieValue + ";path=/;domain=syncfusion.com";
            }
            else {
                document.cookie = "SampleSiteReferrer" + "=" + document.referrer + currentUrl + ";path=/;domain=syncfusion.com";
            }
        }

  },
  componentDidMount: function () {
    $(document).on("click", "#scrollTab ul>li", function (args) {
      if ($(args.target).parent().parent().parent().is("#scrollTab")) {
        var control = window.location.hash.split("#app/")[1].split("/")[0];
        history.replaceState(null, null, "#app/" + control + "/" + args.target.text.toLowerCase().replace(/\s/g, ""));
      }
      else return false
    })
    var isMac = function () {
      return (/(ipad|iphone|ipod touch)/i).test(navigator.userAgent.toLowerCase()) && !(/trident|windows phone/i.test(navigator.userAgent.toLowerCase()));
    }
    if (isMac())
      window.baseurl = "//js.syncfusion.com/demos/ejServices/";
    else
      window.baseurl = window.baseurl;
    var string;
    var data = $("#navpane").ejNavigationDrawer("instance");
    if ($(window).innerWidth() < 720) {
      data.option('isPaneOpen', false);
    }
    else if ($(window).innerWidth() > 720) {
      data.option('isPaneOpen', true);
    }
    var control = window.location.hash.split("#app/");
    if (control[1] == "accrodion") {
      $('#controlHeader').text('Accordion');
      data.loadContent("#content_container", "app/accordion/accordion.html");
    }
    else {
      $('#controlHeader').text(control[1][0].toUpperCase() + control[1].split("/")[0].slice(1));
      data.loadContent("#content_container", "app/" + control[1].split("/")[0].toLowerCase() + "/" + control[1].split("/")[0].toLowerCase() + ".html");
    }
    if ($('#controlHeader').text() == "Accordion") {
      $("#controllist").ejListView("selectItem", 0);
    }
    else {
      for (var i = 0; i < window.samples.length; i++) {
        if ($('#controlHeader').text().toLowerCase() == window.samples[i].name.toLowerCase()) {
          $("#controllist").ejListView("selectItem", i);
          $('#ejAccordion').scrollTop($(".ion-sync-" + control[1].split("/")[0].toLowerCase()).position().top - 10);
          break;
        }
      }
    }

    $(window).resize(function () {

      var nav = $('#navpane').ejNavigationDrawer('instance');
      //nav.close();
      if ($(window).innerWidth() < 720) {
        nav.option('isPaneOpen', false);
      }
      else if ($(window).innerWidth() > 720) {
        nav.option('isPaneOpen', true);
      }
      setTimeout(function () {
        var tabObj = $("#scrollTab").data("ejTab");
        tabObj._resize();
        $('#scrollTab > .e-content').css("padding-top", "16px");
      }, 40);
	  if(window.isOnline){
	    $("#ej2button").css("margin-right","55px");
	  }
    });
    if(!window.isOnline){
      $(".e-custom-theme.e-menu-wrap").css("display","none");
      $(".source-code-icon").css("right","30px");
    }
	if(window.isOnline){
	  $("#ej2button").css("margin-right","55px");
	}
  },
  onAjaxSuccess: function () {
    var liElement = $("#content_container").find(".e-tab").eq(0).find("ul").eq(0).find("li");
	var previousControl = window.location.hash.split("#app/")[1].split("/")[0];
    var firstSample = window.location.hash.split("#app/")[1].split("/")[1];
	if(this.controlName == previousControl){
	  for (var i = 0; i < liElement.length; i++) {
	    var href = liElement.eq(i).find("a").eq(0).text().toLowerCase().replace(/\s/g, "");
		if (firstSample != "" && href == firstSample) {
  		  $("#scrollTab").ejTab({ selectedItemIndex: i });
	  	}
  	  }
	}
	else
	  $("#scrollTab").ejTab({ selectedItemIndex: 0 });
     var obj=$("#scrollTab").ejTab("instance");
    if(obj.model.selectedItemIndex==0 && this.controlName){
      var fiestItem=$("#scrollTab").find("li").eq(0).text().toLowerCase().replace(/\s/g, "");
        history.replaceState(null, null, "#app/" + this.controlName+"/"+fiestItem);
    }
  },
  handlerSelection: function (e) {
    var data = $("#sourcecodeDialog").ejDialog("instance");
    data.close();
    $("#searchBox_suggestion").nextAll().remove();
    $('#controlHeader').text(e.text);
    var data = $("#navpane").ejNavigationDrawer("instance");
    var string = window.location.hash.split("#");
    this.controlName=e.text.replace(" ", "").toLowerCase();
    data.loadContent("#content_container", "app/" + e.text.replace(" ", "").toLowerCase() + "/" + e.text.replace(" ", "").toLowerCase() + ".html");
    if (e.text == 'WaitingPopUp') {
      $('#target_WaitingPopup').css({ "display": "block" });
    }
    else {
      $('#target_WaitingPopup').css({ "display": "none" });
    }
  },
  searchSelection: function (e) {
    var data = $("#sourcecodeDialog").ejDialog("instance");
    data.close();
    $("#searchBox_suggestion").nextAll().remove();
    $('#controlHeader').text(e.text);
    var data = $("#navpane").ejNavigationDrawer("instance");
    var string = window.location.hash.split("#");
    for (var i = 0; i < window.samples.length; i++) {
      if ($('#controlHeader').text().toLowerCase() == window.samples[i].name.toLowerCase()) {
        $("#controllist").ejListView("selectItem", i);
        $('#ejAccordion').scrollTop($(".ion-sync-" + window.samples[i].name.toLowerCase().replace(/\s/g, "")).position().top-12);
        break;
      }
    }
    data.loadContent("#content_container", "app/" + e.text.replace(" ", "").toLowerCase() + "/" + e.text.replace(" ", "").toLowerCase() + ".html");
  },
  autoFocusOut: function (e) {
    setTimeout(function () {
      $('#searchBox_suggestion').css('display', 'none')
    }, 400);
  },
  handleClick: function () {
      $("#popupclose").hide();
	  $("#ej2popup").hide();
	  $('#reactRoot').removeClass('e-remove');
  },
  clearInput: function () {
    $("#searchBox").ejAutocomplete("clearText");
  },

  onTargetDialog: function () {
    var data = $("#sourcecodeDialog").ejDialog("instance");
    data.open();
    var data = $("#scrollTab").ejTab("instance")
    var htmlUrl = $(data.element.find("ul").children(":not('.e-chevron-circle-left')")[data.selectedItemIndex()]).find("a").attr("href");
    var jsxUrl = htmlUrl.split("app/")[1].replace("html", "jsx");
    jsxUrl = "app/" + jsxUrl;
    this.htmlContent(htmlUrl);
    this.jsxContent(jsxUrl);
	$("#sourcecodeDialog_wrapper").css('z-index',this.maxZindex()+1);
    $("#sourcecodeDialog_overLay").css('z-index',this.maxZindex() -1);  
  },
   maxZindex:function(){
     var maxZ = 1;
            maxZ = Math.max.apply(null, $.map($('body *'), function (e, n) {
                if ($(e).css('position') == 'absolute' || $(e).css('position') == 'fixed'|| $(e).css('position') != 'static')
                    return parseInt($(e).css('z-index')) || 1;
            })
            );
            if (maxZ == undefined || maxZ == null)
                maxZ = 1;
            return maxZ;
  },
  contentLoaded: function (content) {
    var htmlContent = content;
    $("#tab #htmlsource").css("display", "block");
    $("#tab #jssource").css("display", "none");
    if ($("#htmlsource").find(".CodeMirror")) $("#htmlsource").find(".CodeMirror").remove();
    window.htmlEditor.push(CodeMirror.fromTextArea($("#htmlsource .tab_content").val(htmlContent)[0], {
      lineNumbers: false,
      readOnly: true,
      mode: "text/html"
    }));
    $("#htmlsource").find($(".CodeMirror")).appendTo("#htmlsource");
    $("#tab").ejTab("model.selectedItemIndex", 0);
    this.codeDialogRefresh()
  },
  codeDialogRefresh: function () {
    var data = $("#sourcecodeDialog").ejDialog("instance");
    data.refresh()
  },
  htmlContent: function (htmlUrl) {
    var proxy = this;
    $.get(htmlUrl, function (data) {
      proxy.contentLoaded(data);
    });
  },
  scriptLoaded: function (content) {
    var jsContent = content;
    $("#tab #htmlsource").css("display", "none");
    $("#tab #jssource").css("display", "block");
    if ($("#jssource").find(".CodeMirror")) $("#jssource").find(".CodeMirror").remove();
    window.JSEditor.push(CodeMirror.fromTextArea($("#jssource .tab_content").val(jsContent)[0], {
      lineNumbers: false,
      readOnly: true,
      mode: "text/jsx"
    }));
    $("#jssource").find($(".CodeMirror")).appendTo("#jssource");
    $("#tab #jssource").css("display", "none");
    $("#tab #htmlsource").css("display", "block");
    $("#tab").ejTab("model.selectedItemIndex", 0);
    this.codeDialogRefresh()
  },
  jsxContent: function (jsxUrl) {
    var proxy = this;
    $.get(jsxUrl, function (data) {
      proxy.scriptLoaded(data);
    });
  },
  onitemActive: function () {
    this.codeDialogRefresh()
  },
  themeSwitch:function(args){
     if(window.isOnline){
       var menuObj=$("#themeswitcher").ejMenu("instance");
    if (args.event) args.event.stopPropagation();
    var color;
    var resheader, menu = window.innerWidth < 981 ? $("#res_themeswitcher ul") : $("#themeswitcher ul");
        menu.css("overflow-y", "scroll");
        var height_1 = window.innerHeight - $(".header").outerHeight();
        height_1 > 520 ? menu.height(height_1 - 10) : menu.height(height_1 - $(".res_header").outerHeight() - 10);
    if (args.ID == 1) {
        var $btnelement = $(window).width() <= 979 ? $("#res_themebutton") : $("#themebutton");
        var pos = $btnelement.offset();
        var left = $btnelement.width() - $(".e-custom-theme .e-horizontal .e-list>ul").width();
        $(".e-custom-theme .e-horizontal .e-list>ul").css('left', left);
    } else {
        menuObj.element.find('li.e-active').removeClass('e-active');
        var _themename = (args.text).toLowerCase();
        if (_themename.indexOf("gradient") !== -1) window.themestyle = "gradient";
        else window.themestyle = "flat";
        if (_themename.indexOf("dark") !== -1) window.themevarient = "dark";
        else window.themevarient = "light";
        if (_themename.indexOf("azure") !== -1) window.themecolor = window.theme = "azure";
        else if (_themename.indexOf("lime") !== -1) window.themecolor = window.theme = "lime";
        else if (_themename.indexOf("saffron") !== -1) window.themecolor = window.theme = "saffron";
        else if (_themename.indexOf("office-365") !== -1) window.themecolor = window.theme = "office-365";
        else if (_themename.indexOf("material") !== -1) window.themecolor = window.theme = "material";
        else if (_themename.indexOf("high-contrast-02") !== -1) window.themecolor = window.theme = "high-contrast-02";
        else if (_themename.indexOf("high-contrast-01") !== -1) window.themecolor = window.theme = "high-contrast-01";
        else if (_themename.indexOf("bootstrap") !== -1) window.themecolor = window.theme = "bootstrap";
        color = window.themecolor;
        $(".background").addClass('show');
        this.updateTheme(color);
		setTimeout(function(){
		    $(".background").removeClass('show');
		}, 8000);
        $(args.element).addClass("e-active");
        }
     }
  },
  getCookieValue: function(cookieName){	  
	 var name = cookieName + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var cookieValues = decodedCookie.split(';');
		for (var i = 0; i < cookieValues.length; i++) {
			var cookie = cookieValues[i];
			while (cookie.charAt(0) == ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(name) == 0) {
				return cookie.substring(name.length, cookie.length);
			}
		}
		return "";
  },
  prepareTheme: function(){
     var themename = "";
    if (window.location.hash.indexOf('dark') != -1 && window.themevarient != 'light')
        window.themevarient = "dark";
    if (window.location.hash.indexOf('gradient') != -1 && window.themestyle != 'flat')
        window.themestyle = "gradient";
    if (window.themevarient == "dark") {
        if (window.themestyle == "gradient")
            themename = window.themestyle + window.themecolor + window.themevarient;
        else
            themename = (window.themecolor != "") ? window.themecolor + window.themevarient : window.themestyle + window.themevarient;

    }
    else {
        if (window.themestyle == "gradient")
            themename = window.themestyle + window.themecolor;
        else
            themename = (window.themecolor != "") ? window.themecolor : window.themestyle;
    }
    if (window.theme.indexOf("bootstrap") != -1) {
        themename = window.theme;
        window.themestyle = "flat";
        window.themevarient = "light";
    }
    if (window.theme.indexOf("high-contrast-01") != -1) {
        themename = window.theme;
        window.themestyle = "flat";
        window.themevarient = "dark";
    }
    if (window.theme.indexOf("high-contrast-02") != -1) {
        themename = window.theme;
        window.themestyle = "flat";
        window.themevarient = "dark";
    }
    if (window.theme.indexOf("material") != -1) {
        themename = window.theme;
        window.themestyle = "flat";
        window.themevarient = "light";
    }
    if (window.theme.indexOf("office-365") != -1) {
        themename = window.theme;
        window.themestyle = "flat";
        window.themevarient = "light";
    }
    window.theme = themename;
  },
  updateTheme: function(selColor){
    if(window.isOnline){
      this.prepareTheme();
      this.replacebg(window.themevarient == "dark");
      this.replaceTheme();
      $("#controllist").ejListView({height:"auto"});
      $(".e-tab .e-active-content").css("height","auto")
    }
  },
  updateLinkTag: function(){
  var links = $(document.head || document.getElementsByTagName('head')[0]).find("link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("ej.web.all.min.css") != -1)
            links[i].href = themes[theme];
    }
    theme == "material" || theme == "office-365" ? document.styleSheets[1].disabled = true : document.styleSheets[1].disabled = false;

  },
  replaceTheme: function(){
    if ((window.theme.indexOf("lime") != -1) && window.themecolor != 'azure' && window.themecolor != "saffron")
        window.themecolor = 'lime';
    else if ((window.theme.indexOf('saffron') != -1) && window.themecolor != 'azure' && window.themecolor != 'lime')
        window.themecolor = 'saffron';
    else if ((window.theme.indexOf('high-contrast-01') != -1))
        window.themecolor = 'high-contrast-01';
    else if ((window.theme.indexOf('high-contrast-02') != -1))
        window.themecolor = 'high-contrast-02';
    else if ((window.theme.indexOf('material') != -1))
        window.themecolor = 'material';
    else if ((window.theme.indexOf('office-365') != -1))
        window.themecolor = 'office-365';
    else if (window.theme.indexOf('azure') != -1)
        window.themecolor = "azure";
    else if (window.theme.indexOf('bootstrap') != -1)
        window.themecolor = "bootstrap";
    var selcolor = (window.themecolor == "") ? "bootstrap" : window.themecolor;
    $("body").removeClass("lime azure saffron bootstrap material high-contrast-01 high-contrast-02 office-365").addClass(selcolor);
    this.updateLinkTag();
    if (window.currentSamplepage) {
        var querystring = "";
        if (window.theme != "flat") {
            querystring = "?theme=" + window.theme;
        }
        $("#iframecontent").attr('src', currentSamplepage + querystring);


        $("#newsamplewindow").attr('href', currentSamplepage);
    }
  },
  replacebg: function(enable){
   if (enable)
        $("body").addClass("darktheme");
    else
        $("body").removeClass("darktheme");
  },
  render: function () {
    return (

      React.createElement("div", {id: "reactRoot", className: "holder e-remove"}, 
	      React.createElement("div", {id: "ej2popup", className: "e-ej2popup"}, 
			React.createElement("div", {className: "e-popup-close"}, 
				React.createElement("button", {id: "popupclose", className: "float-right ejbutton", onClick: this.handleClick, type: "button"}, 
				React.createElement("span", {className: "e-btn-span"}, 
                    React.createElement("span", {className: "e-icon ej2popupclose"}, " ")			
				)
				)
			), 
			React.createElement("table", {className: "e-popup-table"}, 
				React.createElement("tr", null, 
					React.createElement("td", {className: "e-popup-td"}, 
						React.createElement("div", {className: "e-popup-content"}, 
							React.createElement("table", {className: "e-content-table"}, 
								React.createElement("tr", null, 
									React.createElement("td", {className: "e-content-td1"}, 
										React.createElement("div", {className: "e-popup-first"}, "Take a look at our next generation")
									), 
									React.createElement("td", {className: "e-content-td2"}, 
										React.createElement("div", {className: "e-popup-second"}, "JavaScript Library")
									)
								)
							)
						)
					), 
					React.createElement("td", {className: "e-popup-td"}, 
						React.createElement("div", {className: "e-popup-more"}, 
							React.createElement("a", {href: "//ej2.syncfusion.com/home/react.html?utm_source=ej1&utm_medium=banner&utm_campaign=migrate", className: "anchorclass", target: "_blank"}, 
								React.createElement("button", {id: "learnmore", className: "float-right ejbutton e-button e-js e-ntouch e-btn-normal learnmore e-btn e-select e-widget e-txt e-corner", title: "Essential JS 2", type: "button", onClick: this.handleClick}, "LEARN MORE")
							)
						)
					)
				)
			)
		  ), 
          React.createElement("div", {className: "e-header header"}, 
              React.createElement("span", {className: "e-iconlogo-synclogo", id: "butdrawer"}, " "), 
            React.createElement("div", {id: "controlMenuDrawer", className: "menuIcon drawericon e-icon"}), 

            React.createElement("div", {className: "control_title title", id: "controlHeader"}), 
            React.createElement("span", {onClick: this.onTargetDialog, title: "Code Preview", className: "source-code-icon"}), 
                React.createElement(EJ.Menu, {id: "themeswitcher", fields: window.themeMenu, isResponsive: false, openOnClick: true, cssClass: "e-custom-theme", click: this.themeSwitch}
                  ), 
				  React.createElement("div", {className: "ej2option"}, 
                    React.createElement("a", {href: "//ej2.syncfusion.com/home/react.html?utm_source=ej1&utm_medium=referral&utm_campaign=migrate", className: "anchorclass", target: "_blank"}, 
                       React.createElement("button", {id: "ej2button", className: "float-right ejbutton e-button e-js e-ntouch e-btn-normal ej2button e-btn e-select e-widget e-corner", title: "Essential JS 2", type: "button"}, 
					     React.createElement("span", {className: "e-btn-span"}, 
						 React.createElement("span", {className: "e-icon ej2button-logo"}), 
						 React.createElement("span", {className: "e-btntxt"}, "ESSENTIAL JS 2")
						 )
					   )
                    )
                  )
          ), 
        React.createElement("div", {className: "drawerWrapper"}, 
         
          React.createElement(EJ.Dialog, {id: "sourcecodeDialog", isResponsive: true, enableModal: true, containment: "#targetdialog", width: 600, height: 500, title: "Code Preview", allowDraggable: false, enableResize: false, showOnInit: false}, 
            React.createElement(EJ.Tab, {id: "tab", width: "100%", height: "100%", itemActive: this.onitemActive}, 
              React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("a", {href: "#htmlsource"}, "HTML")), 
                React.createElement("li", null, React.createElement("a", {href: "#jssource"}, "JSX"))
              ), 
              React.createElement("div", {id: "htmlsource"}, 
                React.createElement("div", {className: "tab_content"})
              ), 
              React.createElement("div", {id: "jssource"}, 
                React.createElement("div", {className: "tab_content"})
              )
            )
          ), 
          React.createElement("div", {id: "content_container"}), 
          React.createElement(EJ.NavigationDrawer, {id: "navpane", targetId: "controlMenuDrawer", contentId: "content_container", type: "overlay", 
            enableListView: true, position: "normal", isPaneOpen: true, ajaxSuccess: this.onAjaxSuccess}, 
            React.createElement("div", {id: "navContainer"}, 
             
              React.createElement("div", {id: "searchContainer"}, 
                React.createElement(EJ.Autocomplete, {id: "searchBox", dataSource: window.samples, fields: searchFields, 
                  width: "100%", height: 35, filterType: "contains", select: this.searchSelection, 
                  watermarkText: "Search a control", showPopupButton: true, focusOut: this.autoFocusOut, close: this.clearInput})
              ), 
              React.createElement("div", {id: "ejAccordion"}, 
                React.createElement(EJ.ListView, {id: "controllist", dataSource: window.samples, mouseUp: this.handlerSelection, 
                  fieldSettings: window.controlFields, persistSelection: true, selectedItemIndex: 0}
                )
              )
            )
          )

        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));