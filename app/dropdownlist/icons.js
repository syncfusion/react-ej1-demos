"use strict";

ReactDOM.render(
    React.createElement(EJ.DropDownList, {targetID: "mailtoolslist", watermarkText: "Select a icon", width: "100%"}, 
        React.createElement("div", {id: "mailtoolslist"}, 
            React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("div", {className: "mailtools categorize"}), "Categorize and Move"), 
                React.createElement("li", null, React.createElement("div", {className: "mailtools done"}), "Done"), 
                React.createElement("li", null, React.createElement("div", {className: "mailtools flag"}), "Flag & Move"), 
                React.createElement("li", null, React.createElement("div", {className: "mailtools forward"}), "Forward"), 
                React.createElement("li", null, React.createElement("div", {className: "mailtools movetofolder"}), "Move to Folder"), 
                React.createElement("li", null, React.createElement("div", {className: "mailtools newmail"}), "New E-mail"), 
                React.createElement("li", null, React.createElement("div", {className: "mailtools meeting"}), "New Meeting"), 
                React.createElement("li", null, React.createElement("div", {className: "mailtools reply"}), "Reply & Delete")
            )
        )
    ),
document.getElementById('dropdownlist-icons')
);