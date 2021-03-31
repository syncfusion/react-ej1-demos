"use strict";
var default_DataSource = [

		{ Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup:"Executive",                         EmployeesCount : 50 },
{ Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
{ Category : "Employees", Country : "USA", JobDescription : "Marketing",                                                   EmployeesCount : 40 },
{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 55 },
{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 175},
{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 70 },
{ Category : "Employees", Country : "USA", JobDescription : "Management",                                                  EmployeesCount : 40 },
{ Category : "Employees", Country : "USA", JobDescription : "Accounts",                                                    EmployeesCount : 60 },

{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 43 },
{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 125},
{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 60 },
{ Category : "Employees", Country : "India",   JobDescription : "HR Executives",                                               EmployeesCount : 70 },
{ Category : "Employees", Country : "India",   JobDescription : "Accounts",                                                    EmployeesCount : 45 },

{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Executive",                       EmployeesCount : 30 },
{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
{ Category : "Employees", Country : "Germany", JobDescription : "Marketing",                                                   EmployeesCount : 50 },
{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
{ Category : "Employees", Country : "Germany", JobDescription : "Management",                                                  EmployeesCount : 33 },
{ Category : "Employees", Country : "Germany", JobDescription : "Accounts",                                                    EmployeesCount : 55 },

{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 45 },
{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 96 },
{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 55 },
{ Category : "Employees", Country : "UK",      JobDescription : "HR Executives",                                               EmployeesCount : 60 },
{ Category : "Employees", Country : "UK",      JobDescription: "Accounts",                                                     EmployeesCount: 30  },

{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
{ Category : "Employees", Country : "France", JobDescription: "Marketing",                                                     EmployeesCount: 50  }


];
var dataLabel= { visible:true };
var size = { height:600 };
var tooltip = { visible:true };
var legend = { visible:true,position:'top'};
var title = { text:'Employees Count'};
var zooming = { enable:false };
var levels=[
		{groupMemberPath: "Country" },
		{groupMemberPath: "JobDescription"},
		{groupMemberPath: "JobGroup"},
		{groupMemberPath: "JobRole" }
	];

ReactDOM.render(
    <EJ.SunburstChart id = "default"
    valueMemberPath = "EmployeesCount"
	dataSource = {default_DataSource}
	innerRadius = {0.2}
	dataLabelSettings = {dataLabel}
	tooltip = {tooltip}
	size = {size}
	levels = {levels}
	zoomSettings = {zooming}
	legend = {legend}
	title = {title}
	enableAnimation = {false}	
    >                  
    </EJ.SunburstChart>,
		  document.getElementById('sunburst-default')
);

