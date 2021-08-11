"use strict"; 
var fontfamily = ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"];

var  fontsize = ["1pt", "2pt", "3pt", "4pt", "5pt"];
var backstage1 = {
        type: ej.Ribbon.ApplicationTabType.Backstage,
        backstageSettings: {
            text: "FILE", height: 350, width: 1000, headerWidth: 120, pages: [
                {id:"info",text:"Info",contentID:"infoCon1",itemType:ej.Ribbon.ItemType.Tab},
				{id:"close",text:"Close",enableSeparator:true,itemType:ej.Ribbon.ItemType.Button},
				{id:"account",text:"Office Account",contentID:"accountCon1"}
            ]
        }
    };
    function createControl1(args) {
        var languages = [
                "ActionScript", "AppleScript", "ASP", "BASIC",
                "C", "C++", "Clojure", "COBOL", "ColdFusion",
                "Erlang", "Fortran", "Groovy", "Haskell",
                "Java", "JavaScript", "Lisp", "Perl", "PHP",
                "Python", "Ruby", "Scala", "Scheme"
        ];
        $('#background1').ejDropDownList({
            targetID: "backgroundList1",
            width: "200px",
            text: "No Background"
        });
        $('#theme1').ejDropDownList({
            targetID: "themeList1",
            width: "200px",
            text: "White"
        });
		$("#background1_popup,#theme1_popup").addClass("e-backstagechild");
    };
ReactDOM.render(
React.createElement("div", null, 
React.createElement("ul", {id: "pasteSplit1"}, 
   React.createElement("li", null, React.createElement("a", null, "Paste"))
), 

  React.createElement(EJ.Ribbon, {id: "resizeRibbon", width: "100%", isResponsive: true, applicationTab: backstage1, create: createControl1}, 
      React.createElement("tabs", null, 
        React.createElement("tab", {id: "home", text: "HOME"}, 
           React.createElement("groups", null, 
		      React.createElement("group", {text: "New", alignType: "rows"}, 
			    React.createElement("content", null, 
				   React.createElement("content", {"defaults-type": "button", "defaults-width": 60, "defaults-height": 60, "defaults-isBig": false}, 
				      React.createElement("groups", null, 
					     React.createElement("group", {id: "new", text: "New", toolTip: "New", "buttonSettings-contentType": "imageonly", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-new", "buttonSettings-click": "executeAction"}
						 )
					   )
					)
				)
			  ), 
			  React.createElement("group", {text: "Clipboard", alignType: "columns"}, 
                React.createElement("content", null, 
                    React.createElement("content", {"defaults-type": "splitbutton", "defaults-width": 60, "defaults-height": 70}, 
                       React.createElement("groups", null, 
                           React.createElement("group", {id: "paste", text: "Paste", "customTooltip-prefixIcon": "e-pastetip", "splitButtonSettings-contentType": "imageonly", "splitButtonSettings-prefixIcon": "e-icon e-ribbon e-ribbonpaste", "splitButtonSettings-targetID": "pasteSplit1", "splitButtonSettings-buttonMode": "dropdown", "splitButtonSettings-arrowPosition": "bottom", "splitButtonSettings-click": "executeAction"}
                           )
                        )
                      ), 
                      React.createElement("content", {"defaults-type": "button", "defaults-width": 60, "defaults-isBig": false}, 
                         React.createElement("groups", null, 
                              React.createElement("group", {id: "cut", text: "Cut", "buttonSettings-contentType": "textandimage", "buttonSettings-prefixIcon": "e-icon e-ribbon e-ribboncut", "buttonSettings-click": "executeAction"}
                              ), 
                              React.createElement("group", {id: "copy", text: "Copy", "buttonSettings-contentType": "textandimage", "buttonSettings-prefixIcon": "e-icon e-ribbon e-ribboncopy", "buttonSettings-click": "executeAction"}
                              ), 
                              React.createElement("group", {id: "clear", text: "Clear", "buttonSettings-contentType": "textandimage", "buttonSettings-prefixIcon": "e-icon e-ribbon clearAll", "buttonSettings-click": "executeAction"}
                               )
                           )
                         )
                        )
                     ), 
                     React.createElement("group", {text: "Font", alignType: "rows"}, 
                        React.createElement("content", null, 
						React.createElement("content", {"defaults-type": "dropdownlist", "defaults-height": 28}, 
                              React.createElement("groups", null, 
                                 React.createElement("group", {id: "fontfamily", "dropdownSettings-dataSource": fontfamily, "dropdownSettings-text": "Segoe UI", "dropdownSettings-select": "executeAction", "dropdownSettings-width": 150}
                                ), 
                                React.createElement("group", {id: "fontsize", "dropdownSettings-dataSource": fontsize, "dropdownSettings-text": "1pt", "dropdownSettings-select": "executeAction", "dropdownSettings-width": 65}
                                )
                              )
                            ), 
                          React.createElement("content", {"defaults-isBig": false}, 
                             React.createElement("groups", null, 
                                React.createElement("group", {id: "bold", text: "bold", type: "togglebutton", "toggleButtonSettings-contentType": "imageonly", "toggleButtonSettings-defaultText": "Bold", "toggleButtonsettings-activeText": "Bold", "toggleButtonSettings-defaultPrefixIcon": "e-icon e-ribbon e-resbold", "toggleButtonSettings-activePrefixIcon": "e-icon e-ribbon e-resbold", "toggleButtonSettings-click": "executeAction"}), 
                                React.createElement("group", {id: "italic", type: "togglebutton", "toggleButtonSettings-contentType": "imageonly", "toggleButtonSettings-defaultText": "Italic", "toggleButtonSettings-activeText": "Italic", "toggleButtonSettings-defaultPrefixIcon": "e-icon e-ribbon e-resitalic", "toggleButtonsettings-activePrefixIcon": "e-icon e-ribbon e-resitalic", "toggleButtonSettings-click": "executeAction"}), 
                                React.createElement("group", {id: "underline", text: "underline", type: "togglebutton", "toggleButtonSettings-contentType": "imageonly", "toggleButtonSettings-defaultText": "Underline", "toggleButtonSettings-activeText": "Underline", "toggleButtonSettings-defaultPrefixIcon": "e-icon e-ribbon e-resunderline", "toggleButtonSettings-activePrefixIcon": "e-icon e-ribbon e-resunderline", "toggleButtonSettings-click": "executeAction"}), 
                                React.createElement("group", {id: "strikethrough", text: "Strikethrough", type: "togglebutton", "toggleButtonSettings-contentType": "imageonly", "toggleButtonSettings-defaultText": "Strikethrough", "toggleButtonSettings-activeText": "Strikethrough", "toggleButtonSettings-defaultPrefixIcon": "e-icon e-ribbon strikethrough", "toggleButtonSettings-activePrefixIcon": "e-icon e-ribbon strikethrough", "toggleButtonSettings-click": "executeAction"}), 
                                React.createElement("group", {id: "superscript", text: "Superscript", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-superscripticon", "buttonSettings-click": "executeAction"})
                             )
                          )
					    )
                     ), 
					 React.createElement("group", {text: "Alignment", alignType: "rows"}, 
                        React.createElement("content", null, 
                           React.createElement("content", {"defaults-type": "button", "defaults-isBig": false}, 
                             React.createElement("groups", null, 
                                React.createElement("group", {id: "bullet", text: "Bullet Format", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-bullet", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "number", text: "Number Format", enableSeparator: true, "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-numbericon", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "textindent", text: "Indent", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-indent", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "textoudent", text: "Outdent", enableSeparator: true, "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-outdent", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "sortascending", text: "Sort", enableSeparator: true, "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-sort", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "border", text: "Border", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-border", "buttonSettings-click": "executeAction"})
                                                )
                                            ), 
                                            React.createElement("content", {"defaults-type": "button", "defaults-isBig": false}, 
                                                React.createElement("groups", null, 
                                                    React.createElement("group", {id: "alignleft", text: "JustifyLeft", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon alignleft", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "aligncenter", text: "JustifyCenter", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon aligncenter", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "alignright", text: "JustifyRight", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon alignright", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "justify", text: "JustifyFull", enableSeparator: true, "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon justify", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "uppercase", text: "Upper Case", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-uppercase", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "lowercase", text: "Lower Case", "buttonSettings-contentType": "imageonly", "buttonSettings-prefixIcon": "e-icon e-ribbon e-lowercase", "buttonSettings-click": "executeAction"})
                                                )
                                            )
                                        )
                                    ), 
									React.createElement("group", {text: "Actions", alignType: "rows"}, 
                                        React.createElement("content", null, 
                                            React.createElement("content", {"defaults-type": "button", "defaults-width": 40, "defaults-height": 72}, 
                                                React.createElement("groups", null, 
                                                    React.createElement("group", {id: "undo", text: "Undo", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", 
													"buttonSettings-prefixIcon": "e-icon e-ribbon e-undo", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "redo", text: "Redo", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-redo", "buttonSettings-click": "executeAction"})
                                                )
                                            )
                                        )
                                    )
				)
        ), 
		     React.createElement("tab", {id: "insert", text: "INSERT"}, 
                                React.createElement("groups", null, 
                                    React.createElement("group", {text: "Tables", alignType: "columns"}, 
                                        React.createElement("content", null, 
                                            React.createElement("content", {"defaults-type": "button", "defaults-width": 50, "defaults-height": 70}, 
                                                React.createElement("groups", null, 
                                                    React.createElement("group", {id: "tables", text: "Tables", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-table", "buttonSettings-click": "executeAction"})
                                                )
                                            )
                                        )
                                    ), 
                                    React.createElement("group", {text: "Illustrations", alignType: "rows"}, 
                                        React.createElement("content", null, 
                                            React.createElement("content", {"defaults-type": "button", "defaults-width": 56, "defaults-height": 70}, 
                                                React.createElement("groups", null, 
                                                    React.createElement("group", {id: "pictures", text: "Pictures", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-picture", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "videos", text: "Videos", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-video", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "shapes", text: "Shapes", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-shape", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "charts", text: "Charts", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-chart", "buttonSettings-click": "executeAction"})
                                                )
                                            )
                                        )
                                    ), 
                                    React.createElement("group", {text: "Comments", alignType: "rows"}, 
                                        React.createElement("content", null, 
                                            React.createElement("content", {"defaults-type": "button", "defaults-width": 70, "defaults-height": 70}, 
                                                React.createElement("groups", null, 
                                                    React.createElement("group", {id: "comments", text: "Comments", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-comment", "buttonSettings-click": "executeAction"})
                                                )
                                            )
                                        )
                                    ), 
                                    React.createElement("group", {text: "Text", alignType: "rows"}, 
                                        React.createElement("content", null, 
                                            React.createElement("content", {"defaults-type": "button", "defaults-width": 70, "defaults-height": 70}, 
                                                React.createElement("groups", null, 
                                                    React.createElement("group", {id: "text", text: "Text", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-text", "buttonSettings-width": "50", "buttonSettings-click": "executeAction"}), 
                                                    React.createElement("group", {id: "datetime", text: "Date Time", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-datetimenew", "buttonSettings-click": "executeAction"})
                                                )
                                            )
                                        )
                                    ), 
                                    React.createElement("group", {text: "Hyperlink", alignType: "rows"}, 
                                        React.createElement("content", null, 
                                            React.createElement("content", {"defaults-type": "button", "defaults-width": 70, "defaults-height": 70}, 
                                                React.createElement("groups", null, 
                                                    React.createElement("group", {id: "hyperlink", text: "Hyperlink", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-hyperlink", "buttonSettings-click": "executeAction"})
                                                )
                                            )
                                        )
                                    ), 
                                    React.createElement("group", {text: "Equation", alignType: "rows"}, 
                                        React.createElement("content", null, 
                                            React.createElement("content", {"defaults-type": "button", "defaults-width": 60, "defaults-height": 70}, 
                                                React.createElement("groups", null, 
                                                    React.createElement("group", {id: "equation", text: "Equation", "buttonSettings-contentType": "textandimage", "buttonSettings-imagePosition": "imagetop", "buttonSettings-prefixIcon": "e-icon e-ribbon e-equation", "buttonSettings-click": "executeAction"})
                                                )
                                            )
                                        )
                                    )
                                    
                                )
                            )
      )
   )
   ),
  document.getElementById('ribbon-resize')
);