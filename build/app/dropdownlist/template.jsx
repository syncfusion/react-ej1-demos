"use strict";

ReactDOM.render(
    <EJ.DropDownList dataSource={empList}  watermarkText= "Select an employee" template= '<div><img class="eimg" src="../content/images/Employees/${eimg}.png" alt="employee"/> <div class="ename"> ${text} </div><div class="desig"> ${desig} </div><div class="cont"> ${country} </div></div>'   width="100%" >
    </EJ.DropDownList>,
document.getElementById('dropdownlist-template')
);