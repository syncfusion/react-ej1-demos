"use strict";

ReactDOM.render(  
        <div id="radio_control">
                             <br />
                            Category<br />
                            <br />
                            <table className=" table-condensed f11 table-nowrap">
                                <tr>
                                    <td className="chkrad">
                                        <EJ.RadioButton ejHtmlAttributes={{type:"radio"}} name="small" id="Radio1" checked={true} ></EJ.RadioButton>
										<label for="Radio1" className="clslab" checked={true}>Fresher</label></td>
                                    <td className="chkrad" colspan="2">
                                        <EJ.RadioButton ejHtmlAttributes={{type:"radio"}} name="small" id="Radio3" ></EJ.RadioButton>
										<label for="Radio3" className="clslab">Experienced</label></td>
                                </tr>
                            </table>
                            <br />
                            <br />
                            Experienced<br />
                            <br />
                            <table className=" table-condensed f11 table-nowrap">
                                <tr>
                                    <td className="chkrad">
                                        <EJ.RadioButton ejHtmlAttributes={{type:"radio"}} name="medium" id="Radio2" checked={true} ></EJ.RadioButton>
										<label for="Radio2" className="clslab"  checked={true}>1+ years</label></td>
                                    <td className="chkrad">
                                        <EJ.RadioButton ejHtmlAttributes={{type:"radio"}} name="medium" id="Radio4" ></EJ.RadioButton>
										<label for="Radio4" className="clslab">2.5+years</label></td>
                                    <td className="chkrad">
                                        <EJ.RadioButton ejHtmlAttributes={{type:"radio"}} name="medium" id="Radio5" ></EJ.RadioButton>
										 <label for="Radio5" className="clslab">5+years</label></td>
                                </tr>
                            </table>
                            <br />
     </div>,   
		  document.getElementById('button-radiobutton')
);