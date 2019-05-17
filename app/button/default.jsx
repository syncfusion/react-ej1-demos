"use strict";

ReactDOM.render(
    <div id="default_control">
    <table className=" table-condensed f11 table-nowrap ">
            <tr>
                <td>Normal
                </td>
                <td className="btnsht">
                    <EJ.Button id="btn1" size={ej.ButtonSize.Normal} showRoundedCorner={true} contentType={ej.ContentType.ImageOnly} prefixIcon="e-icon e-uiLight e-handup" text="login"></EJ.Button>
                </td>
            </tr>
            <tr>
                <td>Mini
                </td>
                <td className="btnsht">
                    <EJ.Button id="btn2" size={ej.ButtonSize.Mini} showRoundedCorner={true}  text="login"></EJ.Button>
                </td>
            </tr>
             <tr>
                <td>Small
                </td>
                <td className="btnsht">
                    <EJ.Button id="btn3" size={ej.ButtonSize.Small} showRoundedCorner={true}  text="login"></EJ.Button>
                </td>
            </tr>
            <tr>
                <td>Medium
                </td>
                <td className="btnsht"> 
                    <EJ.Button id="btn3" size={ej.ButtonSize.Medium} showRoundedCorner={true}  text="login"></EJ.Button>
                </td>
            </tr>
            <tr>
                <td>Large
                </td>
                <td className="btnsht">
                    <EJ.Button id="btn3" size={ej.ButtonSize.Large} showRoundedCorner={true} contentType={ej.ContentType.TextAndImage} prefixIcon="e-icon e-uiLight e-handup" text="login"></EJ.Button>
                </td>
            </tr>
    </table>
     </div>,   
		  document.getElementById('button-default')
);