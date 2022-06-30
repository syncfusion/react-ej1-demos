"use strict";

ReactDOM.render(
    <EJ.DropDownList targetID="mailtoolslist" watermarkText="Select a icon" width="100%">
        <div id="mailtoolslist">
            <ul>
                <li><div className="mailtools categorize"></div>Categorize and Move</li>
                <li><div className="mailtools done"></div>Done</li>
                <li><div className="mailtools flag"></div>Flag & Move</li>
                <li><div className="mailtools forward"></div>Forward</li>
                <li><div className="mailtools movetofolder"></div>Move to Folder</li>
                <li><div className="mailtools newmail"></div>New E-mail</li>
                <li><div className="mailtools meeting"></div>New Meeting</li>
                <li><div className="mailtools reply"></div>Reply & Delete</li>
            </ul>
        </div>
    </EJ.DropDownList>,
document.getElementById('dropdownlist-icons')
);