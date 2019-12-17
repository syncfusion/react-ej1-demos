"use strict";

ReactDOM.render(
    <div id="split_control">
        <table className=" table-condensed f11 table-nowrap"> 
							<tr>
                                <td> Normal</td>
                                <td className="btnsht">
                                    <div className="spltspan">
                                        <EJ.SplitButton id="spltbutton11" size={ej.ButtonSize.Normal} showRoundedCorner={true} contentType={ej.ContentType.ImageOnly} prefixIcon=" e-icon e-login" targetID="Ul11"> login</EJ.SplitButton>
                                        <ul id="Ul11">
                                            <li><span>User</span></li>
                                            <li><span>Guest</span></li>
                                            <li><span>Admin</span></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Mini</td>
                                <td>
                                    <EJ.SplitButton id="spltbutton21" size={ej.ButtonSize.Mini} showRoundedCorner={true} targetID="Ul21" >login</EJ.SplitButton>
                                    <ul id="Ul21">
                                        <li><span>User</span></li>
                                        <li><span>Guest</span></li>
                                        <li><span>Admin</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td> Small</td>
                                <td className="btnsht">
                                    <EJ.SplitButton id="spltbutton31" size={ej.ButtonSize.Small} showRoundedCorner={true} targetID="Ul31">login</EJ.SplitButton>
                                    <ul id="Ul31">
                                        <li><span>User</span></li>
                                        <li><span>Guest</span></li>
                                        <li><span>Admin</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td> Medium</td>
                                <td className="btnsht">
                                    <EJ.SplitButton id="spltbutton41" size={ej.ButtonSize.Medium} showRoundedCorner={true} targetID="Ul41">login</EJ.SplitButton>
                                    <ul id="Ul41">
                                        <li><span>User</span></li>
                                        <li><span>Guest</span></li>
                                        <li><span>Admin</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td> Large</td>
                                <td className="btnsht">
                                    <EJ.SplitButton id="spltbutton51" size={ej.ButtonSize.Large} showRoundedCorner={true} contentType={ej.ContentType.TextAndImage} prefixIcon=" e-icon e-login e-uiLight" targetID="Ul51">login</EJ.SplitButton>
                                    <ul id="Ul51">
                                        <li><span>User</span></li>
                                        <li><span>Guest</span></li>
                                        <li><span>Admin</span></li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
     </div>,   
		  document.getElementById('button-splitbutton')
);