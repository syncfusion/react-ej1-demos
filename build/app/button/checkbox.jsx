"use strict";

ReactDOM.render(
    <div id="check_control">
        <div className="chkalign">
            <br />Hobbies
            <br />
            <br />
            <table className="table table-condensed f11 table-nowrap">
                <tr>
                    <td className="chkrad">
                        <EJ.CheckBox ejHtmlAttributes={{type:"checkbox"}} className="nodetext" id="Checkbox1" checked={true}></EJ.CheckBox>
                         <label for="Checkbox1" className="clslab">Music</label>
                     </td>
                     <td className="chkrad">
                         <EJ.CheckBox ejHtmlAttributes={{type:"checkbox"}} className="nodetext" id="Checkbox2"></EJ.CheckBox>
                         <label for="Checkbox2" className="clslab">Sports</label>
                    </td>
                     <td className="chkrad">
                         <EJ.CheckBox ejHtmlAttributes={{type:"checkbox"}} className="nodetext" id="Checkbox3"></EJ.CheckBox>
                         <label for="Checkbox3" className="clslab">Reading</label>
                    </td>
                     
                </tr>   
                </table>
                <br />
                            <br />
                            Favorite Search Engines<br />
                            <br />
                            <table className="table table-condensed f11 table-nowrap">
                                <tr>
                                    <td className="chkrad">
                                        <EJ.CheckBox ejHtmlAttributes={{type:"checkbox"}} className="nodetext" size="Medium" id="Checkbox4" checked={true}></EJ.CheckBox>
										<label for="Checkbox4" className="clslab">Google</label>
                                    </td>
                                    <td className="chkrad">
                                        <EJ.CheckBox ejHtmlAttributes={{type:"checkbox"}} className="nodetext" size="Medium" id="Checkbox5" ></EJ.CheckBox>
										<label for="Checkbox5" className="clslab">Yahoo</label>
                                    </td>
                                    <td className="chkrad">
                                        <EJ.CheckBox ejHtmlAttributes={{type:"checkbox"}} className="nodetext" size="Medium" id="Checkbox6" ></EJ.CheckBox>
										<label for="Checkbox6" className="clslab">Bing</label></td>
                                </tr>
                            </table>
                            <br />
                            <br />
                            Favorite Social networks<br />
                            <br />
                            <table className="table table-condensed f11 table-nowrap">
                                <tr>
                                    <td className="chkrad">
                                        <EJ.CheckBox  ejHtmlAttributes={{type:"checkbox"}} className="nodetext" size="Medium" enableTriState={true} id="Checkbox7"></EJ.CheckBox>
										<label for="Checkbox7" className="clslab">Flickr</label>
                                    </td>
                                    <td className="chkrad">
                                        <EJ.CheckBox ejHtmlAttributes={{type:"checkbox"}} className="nodetext" size="Medium" enableTriState={true} id="Checkbox8" ></EJ.CheckBox>
										<label for="Checkbox8" className="clslab">GPlus</label>
                                    </td>
                                    <td className="chkrad">
                                        <EJ.CheckBox ejHtmlAttributes={{type:"checkbox"}} className="nodetext" size="Medium" enableTriState={true} id="Checkbox9" ></EJ.CheckBox>
										<label for="Checkbox9" className="clslab">Twitter</label></td>
                                </tr>
                            </table>
         </div>
         </div>,
		  document.getElementById('button-checkbox')
);