"use strict";

ReactDOM.render(
    <div id="toggle_control">
        <table className=" table-condensed f11 table-nowrap">
							
                            <tr>
                                <td> Normal</td>
                                <td className="btnsht">
                                    <EJ.ToggleButton id="check11" ejHtmlAttributes={{type:"checkbox"}} size={ej.ButtonSize.Normal} showRoundedCorner={true} contentType={ej.ContentType.ImageOnly} defaultPrefixIcon="e-icon e-mediaplay" activePrefixIcon="e-icon e-mediapause"></EJ.ToggleButton>
                                </td>
                            </tr>
                            <tr>
                                <td> Mini</td>
                                <td class="btnsht">
                                    <EJ.ToggleButton id="check21" ejHtmlAttributes={{type:"checkbox"}} size={ej.ButtonSize.Mini} showRoundedCorner={true} defaultText="Play" activeText="Pause" ></EJ.ToggleButton>
                                </td>
                            </tr>

                            <tr>
                                <td> Small</td>
                                <td class="btnsht">
                                     <EJ.ToggleButton id="check31" ejHtmlAttributes={{type:"checkbox"}} size={ej.ButtonSize.Small} showRoundedCorner={true} defaultText="Play" activeText="Pause" ></EJ.ToggleButton>    
                                </td>
                            </tr>
                            <tr>
                                <td> Medium</td>
                                <td class="btnsht">
                                    <EJ.ToggleButton id="check41" ejHtmlAttributes={{type:"checkbox"}} size={ej.ButtonSize.Medium} showRoundedCorner={true} defaultText="Play" activeText="Pause" ></EJ.ToggleButton>
                                </td>
                            </tr>

                            <tr>
                                <td> Large</td>
                                <td class="btnsht">
                                <EJ.ToggleButton id="check51" ejHtmlAttributes={{type:"checkbox"}} size={ej.ButtonSize.Large} showRoundedCorner={true} contentType={ej.ContentType.TextAndImage} defaultPrefixIcon="e-icon e-mediaplay" activePrefixIcon="e-icon e-mediapause" defaultText="Play" activeText="Pause"></EJ.ToggleButton>
                                </td>
                            </tr>            
                           
                        </table>
     </div>,   
		  document.getElementById('button-togglebutton')
);