"use strict"; 
var fontfamily = ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"];

var  fontsize = ["1pt", "2pt", "3pt", "4pt", "5pt"];
var backstage2 = {
        type: ej.Ribbon.ApplicationTabType.Backstage,
        backstageSettings: {
            text: "FILE", height: 350, width: 1000, headerWidth: 120, pages: [
                {id:"info",text:"Info",contentID:"infoCon2",itemType:ej.Ribbon.ItemType.Tab},
				{id:"close",text:"Close",enableSeparator:true,itemType:ej.Ribbon.ItemType.Button},
				{id:"account",text:"Office Account",contentID:"accountCon2"}
            ]
        }
    };
function createControl2(args) {
        var languages = [
                "ActionScript", "AppleScript", "ASP", "BASIC",
                "C", "C++", "Clojure", "COBOL", "ColdFusion",
                "Erlang", "Fortran", "Groovy", "Haskell",
                "Java", "JavaScript", "Lisp", "Perl", "PHP",
                "Python", "Ruby", "Scala", "Scheme"
        ];
        $('#background2').ejDropDownList({
            targetID: "backgroundList2",
            width: "200px",
            text:"No Background"
        });
        $('#theme2').ejDropDownList({
            targetID: "themeList2",
            width: "200px",
            text:"White"
        });
		$("#background2_popup,#theme2_popup").addClass("e-backstagechild");
    };
ReactDOM.render(
<div>

<ul id="pasteSplit2">
   <li><a>Paste</a></li>
</ul>
   <EJ.Ribbon id="quickAccessToolbar" width="100%" isResponsive={true} applicationTab={backstage2} create={createControl2} showQAT={true}>
      <tabs>
        <tab id="home" text="HOME">
           <groups>
		      <group text="New" alignType="rows">
			    <content>
				   <content defaults-type="button" defaults-width={60} defaults-height={60} defaults-isBig={false}>
				      <groups>
					     <group id="new" text="New" toolTip="New" buttonSettings-contentType="imageonly" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-new" buttonSettings-click="executeAction">
						 </group>
					   </groups>
					</content>
				</content>
			  </group>
			  <group text="Clipboard" alignType="columns">
                <content>
                    <content defaults-type="splitbutton" defaults-width={60} defaults-height={70}>
                       <groups>
                           <group id="paste" text="Paste" quickAccessMode="toolbar" customTooltip-prefixIcon="e-pastetip" splitButtonSettings-contentType="imageonly" splitButtonSettings-prefixIcon="e-icon e-ribbon e-ribbonpaste" splitButtonSettings-targetID="pasteSplit2" splitButtonSettings-buttonMode="dropdown" splitButtonSettings-arrowPosition="bottom" splitButtonSettings-click="executeAction">
                           </group>
                        </groups>
                      </content>
                      <content defaults-type="button" defaults-width={60} defaults-isBig={false}>
                         <groups>
                              <group id="cut" text="Cut" buttonSettings-contentType="textandimage" buttonSettings-prefixIcon="e-icon e-ribbon e-ribboncut" buttonSettings-click="executeAction">
                              </group>
                              <group id="copy" text="Copy" buttonSettings-contentType="textandimage" buttonSettings-prefixIcon="e-icon e-ribbon e-ribboncopy" buttonSettings-click="executeAction">
                              </group>
                              <group id="clear" text="Clear" buttonSettings-contentType="textandimage" buttonSettings-prefixIcon="e-icon e-ribbon clearAll" buttonSettings-click="executeAction">
                               </group>
                           </groups>
                         </content>
                        </content>
                     </group>
                     <group text="Font" alignType="rows">
                        <content>
						<content defaults-type="dropdownlist" defaults-height={28}>
                              <groups>
                                 <group id="fontfamily" dropdownSettings-dataSource={fontfamily} dropdownSettings-text="Segoe UI" dropdownSettings-select="executeAction" dropdownSettings-width={150}>
                                </group>
                                <group id="fontsize" dropdownSettings-dataSource={fontsize} dropdownSettings-text="1pt" dropdownSettings-select="executeAction" dropdownSettings-width={65}>
                                </group>
                              </groups>
                            </content>
                          <content defaults-isBig={false}>
                             <groups>
                                <group id="bold" text="bold" type="togglebutton" quickAccessMode="toolbar" toggleButtonSettings-contentType="imageonly" toggleButtonSettings-defaultText="Bold" toggleButtonsettings-activeText="Bold" toggleButtonSettings-defaultPrefixIcon="e-icon e-ribbon e-resbold" toggleButtonSettings-activePrefixIcon="e-icon e-ribbon e-resbold" toggleButtonSettings-click="executeAction"></group>
                                <group id="italic" type="togglebutton" quickAccessMode="toolbar" toggleButtonSettings-contentType="imageonly" toggleButtonSettings-defaultText="Italic" toggleButtonSettings-activeText="Italic" toggleButtonSettings-defaultPrefixIcon="e-icon e-ribbon e-resitalic" toggleButtonsettings-activePrefixIcon="e-icon e-ribbon e-resitalic" toggleButtonSettings-click="executeAction"></group>
                                <group id="underline" text="underline" type="togglebutton" quickAccessMode="toolbar" toggleButtonSettings-contentType="imageonly" toggleButtonSettings-defaultText="Underline" toggleButtonSettings-activeText="Underline" toggleButtonSettings-defaultPrefixIcon="e-icon e-ribbon e-resunderline" toggleButtonSettings-activePrefixIcon="e-icon e-ribbon e-resunderline" toggleButtonSettings-click="executeAction"></group>
                                <group id="strikethrough" text="Strikethrough" type="togglebutton" toggleButtonSettings-contentType="imageonly" toggleButtonSettings-defaultText="Strikethrough" toggleButtonSettings-activeText="Strikethrough" toggleButtonSettings-defaultPrefixIcon="e-icon e-ribbon strikethrough" toggleButtonSettings-activePrefixIcon="e-icon e-ribbon strikethrough" toggleButtonSettings-click="executeAction"></group>
                                <group id="superscript" text="Superscript"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-superscripticon" buttonSettings-click="executeAction"></group>
                             </groups>
                          </content>
					    </content>
                     </group>
					 <group text="Alignment" alignType="rows">
                        <content>
                           <content defaults-type="button" defaults-isBig={false}>
                             <groups>
                                <group id="bullet" text="Bullet Format" quickAccessMode="toolbar" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-bullet" buttonSettings-click="executeAction"></group>
                                                    <group id="number" text="Number Format" quickAccessMode="toolbar" enableSeparator={true} buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-numbericon" buttonSettings-click="executeAction"></group>
                                                    <group id="textindent" text="Indent" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-indent" buttonSettings-click="executeAction"></group>
                                                    <group id="textoudent" text="Outdent" enableSeparator={true} buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-outdent" buttonSettings-click="executeAction"></group>
                                                    <group id="sortascending" quickAccessMode="toolbar" text="Sort" enableSeparator={true} buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-sort" buttonSettings-click="executeAction"></group>
                                                    <group id="border" text="Border" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-border" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                            <content defaults-type="button" defaults-isBig={false}>
                                                <groups>
                                                    <group id="alignleft" text="JustifyLeft" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon alignleft" buttonSettings-click="executeAction"></group>
                                                    <group id="aligncenter" text="JustifyCenter" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon aligncenter" buttonSettings-click="executeAction"></group>
                                                    <group id="alignright" text="JustifyRight" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon alignright" buttonSettings-click="executeAction"></group>
                                                    <group id="justify" text="JustifyFull" enableSeparator={true} buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon justify" buttonSettings-click="executeAction"></group>
                                                    <group id="uppercase" text="Upper Case" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-uppercase" buttonSettings-click="executeAction"></group>
                                                    <group id="lowercase" text="Lower Case" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-lowercase" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
									<group text="Actions" alignType="rows">
                                        <content>
                                            <content defaults-type="button" defaults-width={40} defaults-height={72}>
                                                <groups>
                                                    <group id="undo" text="Undo" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop"
													buttonSettings-prefixIcon="e-icon e-ribbon e-undo" buttonSettings-click="executeAction"></group>
                                                    <group id="redo" text="Redo" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-redo" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
				</groups>  
        </tab>
		     <tab id="insert" text="INSERT">
                                <groups>
                                    <group text="Tables" alignType="columns">
                                        <content>
                                            <content defaults-type="button" defaults-width={50} defaults-height={70}>
                                                <groups>
                                                    <group id="tables" text="Tables" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-table" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
                                    <group text="Illustrations" alignType="rows">
                                        <content>
                                            <content defaults-type="button" defaults-width={56} defaults-height={70}>
                                                <groups>
                                                    <group id="pictures" text="Pictures" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-picture" buttonSettings-click="executeAction"></group>
                                                    <group id="videos" text="Videos" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-video" buttonSettings-click="executeAction"></group>
                                                    <group id="shapes" text="Shapes" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-shape" buttonSettings-click="executeAction"></group>
                                                    <group id="charts" text="Charts" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-chart" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
                                    <group text="Comments" alignType="rows">
                                        <content>
                                            <content defaults-type="button" defaults-width={70} defaults-height={70}>
                                                <groups>
                                                    <group id="comments" text="Comments" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-comment" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
                                    <group text="Text" alignType="rows">
                                        <content>
                                            <content defaults-type="button" defaults-width={70} defaults-height={70}>
                                                <groups>
                                                    <group id="text" text="Text" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-text" buttonSettings-width="50" buttonSettings-click="executeAction"></group>
                                                    <group id="datetime" text="Date Time" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-datetimenew" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
                                    <group text="Hyperlink" alignType="rows">
                                        <content>
                                            <content defaults-type="button" defaults-width={70} defaults-height={70}>
                                                <groups>
                                                    <group id="hyperlink" text="Hyperlink" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-hyperlink" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
                                    <group text="Equation" alignType="rows">
                                        <content>
                                            <content defaults-type="button" defaults-width={60} defaults-height={70}>
                                                <groups>
                                                    <group id="equation" text="Equation" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-equation" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
                                    <group text="Print Layout" aligntype="rows">
                                        <content>
                                            <content defaults-type="button" defaults-width={80} defaults-height={70}>
                                                <groups>
                                                    <group id="printlayout" text="Print Layout" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-printlayout" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                   </group>
                                    <group text="Save" alignType="rows">
                                        <content>
                                            <content defaults-type="button" defaults-width={50} defaults-height={70}>
                                                <groups>
                                                    <group id="print" text="Print" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-print" buttonSettings-click="executeAction"></group>
                                                    <group id="save" text="Save" buttonSettings-contentType="textandimage" buttonSettings-imagePosition="imagetop" buttonSettings-prefixIcon="e-icon e-ribbon e-save" buttonSettings-click="executeAction"></group>
                                                </groups>
                                            </content>
                                        </content>
                                    </group>
                                </groups>
                            </tab>
      </tabs>
   </EJ.Ribbon>
   </div>,
  document.getElementById('ribbon-quickaccesstoolbar')
);