"use strict"; 
var fontfamily = ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"];

var  fontsize = ["1pt", "2pt", "3pt", "4pt", "5pt"];
var backstage = {
        type: ej.Ribbon.ApplicationTabType.Backstage,
        backstageSettings: {
            text: "FILE", height: 350, width: 1000, headerWidth: 120, pages: [
                {id:"info",text:"Info",contentID:"infoCon",itemType:ej.Ribbon.ItemType.Tab},
				{id:"close",text:"Close",enableSeparator:true,itemType:ej.Ribbon.ItemType.Button},
				{id:"account",text:"Office Account",contentID:"accountCon"}
            ]
        }
    };
	function createControl(args) {
	var languages = [
                    "ActionScript", "AppleScript", "ASP", "BASIC",
                    "C", "C++", "Clojure", "COBOL", "ColdFusion",
                    "Erlang", "Fortran", "Groovy", "Haskell",
                    "Java", "JavaScript", "Lisp", "Perl", "PHP",
                    "Python", "Ruby", "Scala", "Scheme"
            ];
	    $('#background').ejDropDownList({
                targetID: "backgroundList",
                width: "200px",
	        text:"No Background"
            });
	     $('#theme').ejDropDownList({
                targetID: "themeList",
                width: "200px",
	       text:"White"
            });
		 $("#background_popup,#theme_popup").addClass("e-backstagechild");
};
ReactDOM.render(
<div>
<ul id="pasteSplit">
   <li><a>Paste</a></li>
</ul>
<ul id="extramenu">
	<li><a>New Quick Step</a>
                    <ul>
                    <li><a>Move to new folder</a></li>
                    <li><a>Categorize & Move</a></li>
                    <li><a>Flag & Move</a></li>
			    	</ul>
			    </li>
                </ul>
   <EJ.Ribbon width="100%" id="defaultRibbon" isResponsive={true} applicationTab={backstage} create={createControl}>
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
                    <content defaults-type="splitbutton" defaults-width={50} defaults-height={70}>
                       <groups>
                           <group id="paste" text="Paste" customTooltip-prefixIcon="e-pastetip" splitButtonSettings-contentType="imageonly" splitButtonSettings-prefixIcon="e-icon e-ribbon e-ribbonpaste" splitButtonSettings-targetID="pasteSplit" splitButtonSettings-buttonMode="dropdown" splitButtonSettings-arrowPosition="bottom" splitButtonSettings-click="executeAction">
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
                                <group id="bold" text="bold" type="togglebutton" toggleButtonSettings-contentType="imageonly" toggleButtonSettings-defaultText="Bold" toggleButtonsettings-activeText="Bold" toggleButtonSettings-defaultPrefixIcon="e-icon e-ribbon e-resbold" toggleButtonSettings-activePrefixIcon="e-icon e-ribbon e-resbold" toggleButtonSettings-click="executeAction"></group>
                                <group id="italic" type="togglebutton" toggleButtonSettings-contentType="imageonly" toggleButtonSettings-defaultText="Italic" toggleButtonSettings-activeText="Italic" toggleButtonSettings-defaultPrefixIcon="e-icon e-ribbon e-resitalic" toggleButtonsettings-activePrefixIcon="e-icon e-ribbon e-resitalic" toggleButtonSettings-click="executeAction"></group>
                                <group id="underline" text="underline" type="togglebutton" toggleButtonSettings-contentType="imageonly" toggleButtonSettings-defaultText="Underline" toggleButtonSettings-activeText="Underline" toggleButtonSettings-defaultPrefixIcon="e-icon e-ribbon e-resunderline" toggleButtonSettings-activePrefixIcon="e-icon e-ribbon e-resunderline" toggleButtonSettings-click="executeAction"></group>
                                <group id="strikethrough" text="Strikethrough" type="togglebutton" toggleButtonSettings-contentType="imageonly" toggleButtonSettings-defaultText="Strikethrough" toggleButtonSettings-activeText="Strikethrough" toggleButtonSettings-defaultPrefixIcon="e-icon e-ribbon strikethrough" toggleButtonSettings-activePrefixIcon="e-icon e-ribbon strikethrough" toggleButtonSettings-click="executeAction"></group>
                                <group id="superscript" text="Superscript"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-ribbon e-superscripticon" buttonSettings-click="executeAction"></group>
                             </groups>
                          </content>
					    </content>
                     </group>
					 <group text="Gallery" alignType="rows">
                           <content>
                                                    <content>
                                                        <groups>
                                                            <group id="Gallery" columns={3} itemHeight={54} itemWidth={68} expandedColumns="4" type="gallery">
                                                                <galleryItems>
                                                                    <galleryItem text="GalleryContent1" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent1 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                    <galleryItem text="GalleryContent2"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent2 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                    <galleryItem text="GalleryContent3"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent3 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                    <galleryItem text="GalleryContent4"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent4 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                    <galleryItem text="GalleryContent5"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent5 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                    <galleryItem text="GalleryContent6"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent6 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                    <galleryItem text="GalleryContent7"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent7 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                    <galleryItem text="GalleryContent8"  buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent8 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                    <galleryItem text="GalleryContent9" buttonSettings-contentType="imageonly" buttonSettings-prefixIcon="e-icon e-gallerycontent9 e-gbtnimg" buttonSettings-cssClass="e-gbtnposition"></galleryItem>
                                                                </galleryItems>
																  <customGalleryItems>
                                                                    <customGalleryItem text="Save Selection as new quick style" toolTip="Save Selection as new quick style" customItemType="button" buttonSettings-cssClass="e-extrabtnstyle"></customGalleryItem>
                                                                    <customGalleryItem customItemType="menu" menuId="extramenu" menuSettings-openOnClick={false}></customGalleryItem>
                                                                    <customGalleryItem text="Clear Formatting" toolTip="Clear Formatting" customItemType="button" buttonSettings-cssClass="e-extrabtnstyle"></customGalleryItem>
                                                                    <customGalleryItem text="Apply Styles" toolTip="Apply Styles" customItemType="button" buttonSettings-cssClass="e-extrabtnstyle"></customGalleryItem>
                                                                </customGalleryItems>
                                                            </group>
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
  document.getElementById('ribbon-default')
);