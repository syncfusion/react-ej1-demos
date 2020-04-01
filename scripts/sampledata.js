// Autocomplete Start

var auto_complete_carList = [
     "Audi S6", "Austin-Healey", "Alfa Romeo", "Aston Martin",
     "BMW 7", "Bentley Mulsanne", "Bugatti Veyron",
     "Chevrolet Camaro", "Cadillac",
     "Duesenberg J", "Dodge Sprinter",
     "Elantra", "Excavator",
     "Ford Boss 302", "Ferrari 360", "Ford Thunderbird",
     "GAZ Siber",
     "Honda S2000", "Hyundai Santro",
     "Isuzu Swift", "Infiniti Skyline",
     "Jaguar XJS",
     "Kia Sedona EX", "Koenigsegg Agera",
     "Lotus Esprit", "Lamborghini Diablo",
     "Mercedes-Benz", "Mercury Coupe", "Maruti Alto 800",
     "Nissan Qashqai",
     "Oldsmobile S98", "Opel Superboss",
     "Porsche 356", "Pontiac Sunbird",
     "Scion SRS/SC/SD", "Saab Sportcombi", "Subaru Sambar", "Suzuki Swift",
     "Triumph Spitfire", "Toyota 2000GT",
     "Volvo P1800", "Volkswagen Shirako"
];
                        
var autocomplete_languages = [
     "ActionScript", "AppleScript", "ASP", "BASIC", "BeanShell",
     "C", "C++", "C#", "Clojure", "COBOL", "ColdFusion", "DataFlex", "DCL",
     "Erlang", "E#", "Fortran", "F#", "Flex", "Google Apps Script", "Groovy", "Haskell", "Hope", "IBM HAScript",
     "Java", "JavaScript", "J#", "Lisp", "MATLAB", "Oak", "Perl", "PHP",
     "Python", "Ruby", "Scala", "Scheme", "T-SQL", "WebQL", "ZOPL"
];
	 
var autocomplete_grouping = [
	{ text: "Austria", category: "A" },
    { text: "Australia", category: "A" }, { text: "Antarctica", category: "A" },
    { text: "Bangladesh", category: "B" }, { text: "Belgium", category: "B" },
    { text: "Brazil", category: "B" },
    { text: "Canada", category: "C" }, { text: "China", category: "C" },
    { text: "Cuba", category: "C" },
    { text: "Denmark", category: "D" }, { text: "Dominica", category: "D" },
    { text: "Europe", category: "E" }, { text: "Egypt", category: "E" },
    { text: "England", category: "E" },
    { text: "India", category: "I" }, { text: "Indonesia", category: "I" },
    { text: "Ireland", category: "I" }, { text: "Italy", category: "I" },
    { text: "France", category: "F" }, { text: "Finland", category: "F" },
    { text: "Germany", category: "G" }, { text: "Greece", category: "G" },
    { text: "Greenland", category: "G" }, { text: "Georgia", category: "G" },
    { text: "Haiti", category: "H" }, { text: "Hong Kong", category: "H" },
    { text: "Japan", category: "J" }, { text: "Jordan", category: "J" },
    { text: "Jamaica", category: "J" }, { text: "Kenya", category: "K" },
    { text: "Kuwait", category: "K" }, { text: "Korea", category: "K" },
    { text: "Latvia", category: "L" }, { text: "Lebanon", category: "L" },
    { text: "Leichenstein", category: "L" }, { text: "Malaysia", category: "M" },
    { text: "Mexico", category: "M" }, { text: "Mozambique", category: "M" },
    { text: "Madagascar", category: "M" }, { text: "Midway Islands", category: "M" },
    { text: "Nepal", category: "N" }, { text: "Netherlands", category: "N" },
    { text: "New Zealand", category: "N" }, { text: "Nigeria", category: "N" },
    { text: "Oman", category: "O" }, { text: "Philippines", category: "P" },
    { text: "Poland", category: "P" }, { text: "Portugal", category: "P" },
    { text: "Qatar", category: "Q" }, { text: "Romania", category: "R" },
    { text: "Russia", category: "R" }, { text: "Singapore", category: "S" },
    { text: "Switzerland", category: "S" }, { text: "Sweden", category: "S" },
    { text: "Scotland", category: "S" }, { text: "Tibet", category: "T" },
    { text: "Turkey", category: "T" }, { text: "Ukraine", category: "U" },
    { text: "United States", category: "U" }, { text: "Uruguay", category: "U" },
    { text: "Vatican City", category: "V" }, { text: "Vietnam", category: "V" },
    { text: "Western Sahara", category: "W" }, { text: "Wales", category: "W" },
    { text: "Yemen", category: "Y" }, { text: "Yugoslavia", category: "Y" },
    { text: "Zambia", category: "Z" }, { text: "Zimbabwe", category: "Z" }
];
	
var auto_group_fields={ groupBy: "category" };
			
var autocomplete_griddata = [
	{ "EmployeeID": 1, "FirstName": "Nancy", "City": "Seattle" },
    { "EmployeeID": 2, "FirstName": "Andrew", "City": "Tacoma" },
    { "EmployeeID": 3, "FirstName": "Janet", "City": "Kirkland" },
    { "EmployeeID": 4, "FirstName": "Margaret", "City": "Redmond" },
    { "EmployeeID": 5, "FirstName": "Steven", "City": "London" },
    { "EmployeeID": 6, "FirstName": "Michael", "City": "London" },
    { "EmployeeID": 7, "FirstName": "Robert", "City": "London" },
    { "EmployeeID": 8, "FirstName": "Laura", "City": "Seattle" },
    { "EmployeeID": 9, "FirstName": "Anne", "City": "London" },
    { "EmployeeID": 10, "FirstName": "Laura", "City": "Seattle" },
    { "EmployeeID": 11, "FirstName": "Janet", "City": "Kirkland" },
    { "EmployeeID": 12, "FirstName": "Michael", "City": "London" },
    { "EmployeeID": 13, "FirstName": "Steven", "City": "London" },
    { "EmployeeID": 14, "FirstName": "Andrew", "City": "Tacoma" },
    { "EmployeeID": 15, "FirstName": "Robert", "City": "London" },
    { "EmployeeID": 16, "FirstName": "Margaret", "City": "Redmond" },
    { "EmployeeID": 17, "FirstName": "Steven", "City": "London" },
    { "EmployeeID": 18, "FirstName": "Michael", "City": "London" },
    { "EmployeeID": 19, "FirstName": "Robert", "City": "London" },
    { "EmployeeID": 20, "FirstName": "Laura", "City": "Seattle" },
    { "EmployeeID": 21, "FirstName": "Anne", "City": "London" },
    { "EmployeeID": 22, "FirstName": "Margaret", "City": "London" },
    { "EmployeeID": 23, "FirstName": "Andrew", "City": "Tacoma" },
    { "EmployeeID": 24, "FirstName": "Janet", "City": "Kirkland" },
    { "EmployeeID": 25, "FirstName": "Margaret", "City": "Redmond" },
    { "EmployeeID": 26, "FirstName": "Steven", "City": "London" },
    { "EmployeeID": 27, "FirstName": "Michael", "City": "London" },
    { "EmployeeID": 28, "FirstName": "Robert", "City": "London" },
    { "EmployeeID": 29, "FirstName": "Laura", "City": "Seattle" },
    { "EmployeeID": 30, "FirstName": "Anne", "City": "London" },
    { "EmployeeID": 31, "FirstName": "Margaret", "City": "Redmond" },
    { "EmployeeID": 32, "FirstName": "Steven", "City": "London" }
];
		
var autocomplete_columns=[
	{
		field: "FirstName",
		headerText: "FirstName"
    },
    {
		field: "EmployeeID",
        headerText: "EmployeeID"
    },
    {
		field: "City",
        headerText: "City"
    }
];		
		
var auto_template = [
	{ text: "Algeria", sprite: "flag-dz" }, { text: "Argentina", sprite: "flag-ar" },
    { text: "Armenia", sprite: "flag-am" }, { text: "Brazil", sprite: "flag-br" },
    { text: "Bangladesh", sprite: "flag-bd" }, { text: "Canada", sprite: "flag-ca" },
    { text: "Cuba", sprite: "flag-cu" }, { text: "China", sprite: "flag-cn" },
    { text: "Denmark", sprite: "flag-dk" }, { text: "Estonia", sprite: "flag-ee" },
    { text: "Egypt", sprite: "flag-eg" }, { text: "France", sprite: "flag-fr" },
    { text: "Finland", sprite: "flag-fi" }, { text: "Greenland", sprite: "flag-gl" },
    { text: "India", sprite: "flag-in" }, { text: "Indonesia", sprite: "flag-id" },
    { text: "Malaysia", sprite: "flag-my" }, { text: "Mexico", sprite: "flag-mx" },
    { text: "New Zealand", sprite: "flag-nz" }, { text: "Netherlands", sprite: "flag-nl" },
    { text: "Norway", sprite: "flag-no" }, { text: "Portugal", sprite: "flag-pt" },
    { text: "Poland", sprite: "flag-pl" }, { text: "Qatar", sprite: "flag-qa" },
    { text: "Romania", sprite: "flag-ro" }, { text: "Spain", sprite: "flag-es" },
    { text: "Singapore", sprite: "flag-sg" }, { text: "Saudi Arabia", sprite: "flag-sa" },
    { text: "Thailand", sprite: "flag-th" }, { text: "Turkey", sprite: "flag-tr" },
    { text: "Ukraine", sprite: "flag-ua" }, { text: "United States", sprite: "flag-us" },
    { text: "Uruguay", sprite: "flag-uy" }, { text: "Viet Nam", sprite: "flag-vn" },
    { text: "Yemen", sprite: "flag-ye" }
];	

// Autocomplete End

// Dialog Start

var actionbuttons=["close", "collapsible", "maximize", "minimize", "pin"];

var dialog_tooltip={ close: "بند کریں" };

// Dialog End	

// Button Start

var groupButton_content= [
                   { text: "Day", contentType: "textonly" },
                   { text: "Week", contentType: "textonly" },
                   { text: "Month", contentType: "textonly", selected: "selected" },
                   { text: "Year", contentType: "textonly" }];


// Button End	
	
// DropDownList Start

var SkillList = [
                { skill: "ASP.NET" }, { skill: "ActionScript" }, { skill: "Basic" },
                { skill: "C++" }, { skill: "C#" }, { skill: "dBase" }, { skill: "Delphi" },
                { skill: "ESPOL" }, { skill: "F#" }, { skill: "FoxPro" }, { skill: "Java" },
                { skill: "J#" }, { skill: "Lisp" }, { skill: "Logo" }, { skill: "PHP" }
];

var groups = [
          { parentId: 'a', text: "Group A" },
          { parentId: 'b', text: "Group B" },
          { parentId: 'c', text: "Group C" },
          { parentId: 'd', text: "Group D" },
          { parentId: 'e', text: "Group E" }
];

var countries = [
    { value: 11, parentId: 'a', text: "Algeria", sprite: "flag-dz" },
    { value: 12, parentId: 'a', text: "Armenia", sprite: "flag-am" },
    { value: 13, parentId: 'a', text: "Bangladesh", sprite: "flag-bd" },
    { value: 14, parentId: 'a', text: "Cuba", sprite: "flag-cu" },
    { value: 15, parentId: 'b', text: "Denmark", sprite: "flag-dk" },
    { value: 16, parentId: 'b', text: "Egypt", sprite: "flag-eg" },
    { value: 17, parentId: 'c', text: "Finland", sprite: "flag-fi" },
    { value: 18, parentId: 'c', text: "India", sprite: "flag-in" },
    { value: 19, parentId: 'c', text: "Malaysia", sprite: "flag-my" },
    { value: 20, parentId: 'd', text: "New Zealand", sprite: "flag-nz" },
    { value: 21, parentId: 'd', text: "Norway", sprite: "flag-no" },
    { value: 22, parentId: 'd', text: "Poland", sprite: "flag-pl" },
    { value: 23, parentId: 'e', text: "Romania", sprite: "flag-ro" },
    { value: 24, parentId: 'e', text: "Singapore", sprite: "flag-sg" },
    { value: 25, parentId: 'e', text: "Thailand", sprite: "flag-th" },
    { value: 26, parentId: 'e', text: "Ukraine", sprite: "flag-ua" }
];

var vegetables = [
            { skill: "Cabbage", category: "Leafy and Salad" }, { skill: "Pea", category: "Leafy and Salad" }, { skill: "Spinach", category: "Leafy and Salad" },
            { skill: "Wheatgrass", category: "Leafy and Salad" }, { skill: "Yarrow", category: "Leafy and Salad" }, { skill: "Chickpea", category: "Beans" }, { skill: "Green bean", category: "Beans" },
            { skill: "Horse gram", category: "Beans" }, { skill: "Peanut", category: "Beans" }, { skill: "Pigeon pea", category: "Beans" }, { skill: "Garlic", category: "Bulb and Stem" },
            { skill: "Garlic Chives", category: "Bulb and Stem" }, { skill: "Lotus root", category: "Bulb and Stem" }, { skill: "Nopal", category: "Bulb and Stem" }, { skill: "Onion", category: "Bulb and Stem" },
            { skill: "Shallot", category: "Bulb and Stem" }, { skill: "Beetroot", category: "Root and Tuberous" }, { skill: "Carrot", category: "Root and Tuberous" }, { skill: "Ginger", category: "Root and Tuberous" },
            { skill: "Potato", category: "Root and Tuberous" }, { skill: "Radish", category: "Root and Tuberous" }, { skill: "Turmeric", category: "Root and Tuberous" }
];

var empList = [
               { text: "Erik Linden", eimg: "3", desig: "Representative", country: "England" }, { text: "John Linden", eimg: "6", desig: "Representative", country: "Norway" },
               { text: "Louis", eimg: "7", desig: "Representative", country: "Australia" }, { text: "Lawrence", eimg: "5", desig: "Representative", country: "India" }
];

var dm = ej.DataManager({url:window.baseurl + "Wcf/Northwind.svc/Customers", crossDomain: true});
// DropDownList End

// ListBox Start

var BikeList = [
	{ empid: "bk1", text: "Aache RTR" }, { empid: "bk2", text: "CBR 150-R" }, { empid: "bk3", text: "CBZ Xtreme" },
    { empid: "bk4", text: "Discover" }, { empid: "bk5", text: "Dazzler" }, { empid: "bk6", text: "Flame" },
    { empid: "bk7", text: "Fazzer" }, { empid: "bk8", text: "FZ-S" }, { empid: "bk9", text: "Pulsar" },
    { empid: "bk10", text: "Shine" }, { empid: "bk11", text: "R15" }, { empid: "bk12", text: "Unicorn" }
];

window.listBoxFields = { id: "empid", value: "text" };

var skillset = [
    { skill: "Bahrain", category: "B" }, { skill: "Brazil", category: "B" }, { skill: "Argentina", category: "A" },
    { skill: "Bangladesh", category: "B" }, { skill: "Burma", category: "B" }, { skill: "Afghanistan", category: "A" }, 
	{ skill: "Antigua and Barbuda", category: "A" }, { skill: "Barbados", category: "B" }, { skill: "Botswana", category: "B" }, 
	{ skill: "Albania", category: "A" }, { skill: "Andorra", category: "A" }, { skill: "Belarus", category: "B" }, 
	{ skill: "Bolivia", category: "B" }, { skill: "Algeria", category: "A" }, { skill: "Angola", category: "A" }
];
	
window.skillFields = { text: "skill", groupBy: "category" };

var listbox_rtl = [
	{ country: "الجیریا" }, { country: "ارمینیا" }, { country: "بنگلا دیش" },
    { country: "کیوبا" }, { country: "ڈنمارک" },
    { country: "مصر" }, { country: "فن لینڈ" }, { country: "بھارت" },
    { country: "ملائیشیا" }, { country: "نیوزی لینڈ" }, { country: "ناروے" }
];

var listbox_rtl_fields = { text: "country" };

var listbox_template = [
	{ text: "Erik Linden", eimg: "3", desig: "Representative", country: "England" }, 
	{ text: "John Linden", eimg: "6", desig: "Representative", country: "Norway" },
    { text: "Louis", eimg: "7", desig: "Representative", country: "Australia" }, 
	{ text: "Lawrence", eimg: "5", desig: "Representative", country: "India" }
];
	
//ListBox End	

// Listview Start

window.dbitem =
    [{ "Texts": "Discover Music" },
     { "Texts": "Sales and Events" },
     { "Texts": "Categories" },
     { "Texts": "MP3 Albums" },
     { "Texts": "More in Music" }];
window.musicFields = {
    "text": "Texts"
};

// ListView End

// RadialMenu Start

var position={x:"50%",y:"50%"};

// RadialMenu End

// RadialSlider Start

var slider=[0, 10, 20, 30, 40, 50];

// RadialSlider End

// Rotator Start

var defaultRotator = [
	{ text: "Snowfall", url: "content/images/rotator/snowfall.jpg" },
    { text: "Tablet", url: "content/images/rotator/tablet.jpg" },
    { text: "Nature", url: "content/images/rotator/nature.jpg" },
    { text: "Card", url: "content/images/rotator/card.jpg" },
    { text: "Bird", url: "content/images/rotator/bird.jpg" },
    { text: "Wheat", url: "content/images/rotator/wheat.jpg" },
    { text: "Night", url: "content/images/rotator/night.jpg" }
];

// Rotator End

// Splitter Start

var splitter_integration=[{ paneSize: "50%" }, {}];

var property1=[{ paneSize: 60, minSize: 30 }, { minSize: 30 }];

var property2=[{ paneSize: "33%", minSize: 30 }, { paneSize: "33%", minSize: 30 }, {minSize: 30 }];

// Splitter End

//Spreadsheet Start

 window.defaultData = [
			{ "Item Name": "Casual Shoes", Date: "02/14/2014", Time: "11:34:32 AM", Quantity: 10, Price: 20, Amount: 200, Discount: 1, Profit: 10 },
			{ "Item Name": "Sports Shoes", Date: "06/11/2014", Time: "05:56:32 AM", Quantity: 20, Price: 30, Amount: 600, Discount: 5, Profit: 50 },
			{ "Item Name": "Formal Shoes", Date: "07/27/2014", Time: "03:32:44 AM", Quantity: 20, Price: 15, Amount: 300, Discount: 7, Profit: 27 },
			{ "Item Name": "Sandals & Floaters", Date: "11/21/2014", Time: "06:23:54 AM", Quantity: 15, Price: 20, Amount: 300, Discount: 11, Profit: 67 },
			{ "Item Name": "Flip- Flops & Slippers", Date: "06/23/2014", Time: "12:43:59 AM", Quantity: 30, Price: 10, Amount: 300, Discount: 10, Profit: 70 },
			{ "Item Name": "Sneakers", Date: "07/22/2014", Time: "10:55:53 AM", Quantity: 40, Price: 20, Amount: 800, Discount: 13, Profit: 66 },
			{ "Item Name": "Running Shoes", Date: "02/04/2014", Time: "03:44:34 AM", Quantity: 20, Price: 10, Amount: 200, Discount: 3, Profit: 14 },
			{ "Item Name": "Loafers", Date: "11/30/2014", Time: "03:12:52 AM", Quantity: 31, Price: 10, Amount: 310, Discount: 6, Profit: 29 },
			{ "Item Name": "Cricket Shoes", Date: "07/09/2014", Time: "11:32:14 AM", Quantity: 41, Price: 30, Amount: 1210, Discount: 12, Profit: 166 },
			{ "Item Name": "T-Shirts", Date: "10/31/2014", Time: "12:01:44 AM", Quantity: 50, Price: 10, Amount: 500, Discount: 9, Profit: 55 },
            ];

window.conditionalFormat = [
               { "Item Name": "Text contains with Loafers", Date: "Loafers", Quantity: "", Price: "Date occur with 02/04/2014", Amount: "05/03/2013", Discount: "", Netamount: "Less than 30", Value: 5},
               {  Date: "Casual Shoes", Amount: "06/23/2014", Value: 56 },
               {  Date: "Loafers", Amount: "07/22/2014", Value: 24 },
               {  Date: "Formal Shoes", Amount: "02/04/2014", Value: 12},
               {  Date: "Sandals & Floaters", Amount: "11/30/2014", Value: 36 },
               {},
               { "Item Name": "Between 400 to 500", Date: 273, Price: "Greater than 5000", Amount: 5003, Netamount: "Equal to 20", Value: 21},
               {  Date: 345, Amount: 3434, Value: 34},
               {  Date: 494, Amount: 7553, Value: 20},
               {  Date: 506, Amount: 2364, Value: 20},
               {  Date: 453, Amount: 6788, Value: 23},
               ];			
			
//Spreadsheet End

// TileView Start

var liveImage1 = ['content/images/tile/windows/alerts.png', 'content/images/tile/windows/bing.png', 'content/images/tile/windows/camera.png'];
var liveImage2 = ['content/images/tile/windows/alerts.png', 'content/images/tile/windows/bing.png', 'content/images/tile/windows/camera.png'];
var liveImage3 = ['content/images/tile/windows/people_1.png', 'content/images/tile/windows/people_2.png', 'content/images/tile/windows/people_3.png'];
var liveImage4 = ['content/images/tile/windows/pictures.png', 'content/images/tile/windows/photo_1.png', 'content/images/tile/windows/photo_2.png', 'content/images/tile/windows/pictures.png', 'content/images/tile/windows/photo_1.png'];
var liveImage5 = ['content/images/tile/windows/weather.png', 'content/images/tile/windows/weather_1.png', 'content/images/tile/windows/weather_2.png'];

// TileView End

//ReportViewer Start

var ssrsServerUrl = 'http://mvc.syncfusion.com/reportserver';
var ssrsServiceUrl = window.baseurl + 'api/SSRSReport';
var rdlServiceUrl = window.baseurl + 'api/RDLReport';
var rdlcServiceUrl = window.baseurl + 'api/RDLCReport';
var remoteMode = ej.ReportViewer.ProcessingMode.Remote;
var localMode = ej.ReportViewer.ProcessingMode.Local;
var ssrsReportPath = '/SSRSSamples2/Territory Sales new';
var rdlReportPath = 'GroupingAgg.rdl';
var rdlcReportPath = 'AreaCharts.rdlc';
var dataSource = [{
      value: [
        { SalesPersonID: 281, FullName: 'Ito', Title: 'Sales Representative', SalesTerritory: 'South West', Y2002: 0, Y2003: 28000, Y2004: 3018725 },
        { SalesPersonID: 282, FullName: 'Saraiva', Title: 'Sales Representative', SalesTerritory: 'Canada', Y2002: 25000, Y2003: 14000, Y2004: 3189356 },
        { SalesPersonID: 283, FullName: 'Cambell', Title: 'Sales Representative', SalesTerritory: 'North West', Y2002: 12000, Y2003: 13000, Y2004: 1930885 },
        { SalesPersonID: 275, FullName: 'Blythe', Title: 'Sales Representative', SalesTerritory: 'North East', Y2002: 19000, Y2003: 47000, Y2004: 4557045 },
        { SalesPersonID: 276, FullName: 'Mitchell', Title: 'Sales Representative', SalesTerritory: 'South West', Y2002: 28000, Y2003: 46000, Y2004: 5240075 },
        { SalesPersonID: 277, FullName: 'Carson', Title: 'Sales Representative', SalesTerritory: 'Central', Y2002: 33000, Y2003: 49000, Y2004: 3857163 },
        { SalesPersonID: 278, FullName: 'Vargas', Title: 'Sales Representative', SalesTerritory: 'Canada', Y2002: 11000, Y2003: 14000, Y2004: 1764938 },
        { SalesPersonID: 279, FullName: 'Reiter', Title: 'Sales Representative', SalesTerritory: 'South East', Y2002: 32000, Y2003: 26000, Y2004: 2811012 }
      ],
      name: 'AdventureWorksXMLDataSet'
    }];

// ReportViewer End

// RTE Start
ej.RTE.Locale["de-DE"] = {
    bold: "fett",
    italic: "kursiv",
    underline: "unterstreichen",
    strikethrough: "Durchgestrichen",
    superscript: "Überschrift",
    subscript: "Index",
    justifyCenter: "Text-Zentrum",
    justifyLeft: "Ausrichten von Text links",
    justifyRight: "Ausrichten von Text rechts",
    justifyFull: "rechtfertigen",
    fileBrowser: "Datei-Browser",
    unorderedList: "Legen Sie ungeordnete Liste",
    orderedList: "Geordnete Liste einfügen",
    indent: "Einzug",
    outdent: "Einzug verkleinern",
    cut: "schneiden",
    copy: "Kopieren",
    paste: "Paste",
    undo: "lösen",
    redo: "Wiederherstellen",
    upperCase: "Großbuchstaben",
    lowerCase: "Kleinbuchstaben",
    clearAll: "Alles",
    clearFormat: "Klar Format",
    createLink: "Einfügen / Hyperlink Bearbeiten",
    removeLink: "fjern Hyperlink",
    tableProperties: "Tabelleneigenschaften",
    insertTable: "Einfügen",
    deleteTables: "Löschen",
    imageProperties: "Bildeigenschaften",
    openLink: "Verbindung öffnen",
    image: "Bild einfügen",
    video: "Legen Video",
    embedVideo: "Fügen Sie den Embed-Code unten",
    viewHtml: "Blick HTML",
    fontName: "Wählen Sie Schriftfamilie",
    fontSize: "Wählen Sie Schriftgröße",
    fontColor: "Wählen Sie die Farbe",
    format: "Format",
    backgroundColor: "Hintergrundfarbe",
    style: "Styles",
    deleteAlert: "Sind Sie sicher, dass Sie alle Inhalte löschen?",
    copyAlert: "Ihr Browser unterstützt leider keinen direkten Zugriff auf die Zwischenablage. Bitte verwenden Sie die Ctrl + C -Tastatur statt Kopiervorgang Verknüpfung .",
    pasteAlert: "Ihr Browser unterstützt leider keinen direkten Zugriff auf die Zwischenablage. Bitte verwenden Sie die Ctrl + V Tastenkombination statt Einfügen.",
    cutAlert: "Ihr Browser unterstützt leider keinen direkten Zugriff auf die Zwischenablage. Bitte verwenden Sie die Ctrl + X Tastenkombination statt Schneidevorgang.",
    videoError: "Der Textbereich darf nicht leer sein",
    imageWebUrl: "Webadresse",
    imageAltText: "Bildbeschreibung",
    dimensions: "Größe",
    constrainProportions: "Proportionen",
    linkWebUrl: "Webadresse",
    linkText: "Text",
    linkToolTip: "Tooltip",
    html5Support: "Dieses Werkzeug-Symbol nur in HTML5 aktiviert unterstützten Browser",
    linkOpenInNewWindow: "Link in einem neuen Fenster",
    tableColumns: "Spalten",
    tableRows: "Zeilen",
    solid: "solide",
    dashed: "gestippelde",
    dotted: "stippel",
    doubled: "dubbele",
    buttonApply: "toepassen",
    buttonCancel: "annuleren",
    closeIcon: "dicht",
    tableWidth: "Tischbreite",
    tableHeight: "Tischhöhe",
    tableCellSpacing: "Zellenabstand",
    tableCellPadding: "Zellauffüllung",
    tableBorder: "Grenze",
    tableCaption: "Beschriftung",
    tableAlignment: "Ausrichtung",
    dialogUpdate: "Aktualisierung",
    dialogInsert: "einfügen",
    dialogCancel: "stornieren",
    dialogOk: "Ok",
    createTable: "Tabelle erstellen",
    addColumnLeft: "Spalte links hinzufügen",
    addColumnRight: "In Spalte auf der rechten",
    addRowAbove: "Zeile hinzufügen oben",
    addRowBelow: "Zeile hinzufügen unten",
    deleteRow: "Löschen Sie die Zeile",
    deleteColumn: "Löschen Sie die Spalte",
    deleteTable: "Löschen Sie die Tabelle",
    customTable: "von benutzerdefinierten Tabelle",
    characters: "Charaktere",
    dialogApply: "anwenden",
    textAlign: "Text ausrichten",
    imageLink: "Bild als Link zu",
    imageBorder: "Bild Rand",
    imageStyle: "Stil",
    editTable: "Tabelle Eigenschaften bearbeiten",
    words: "Wörter",
    general: "allgemein",
    advanced: "fortgeschritten",
    table: "Tisch",
    row: "Reihe",
    column: "Spalte",
    cell: "Zelle",
    maximize: "Maximieren",
    resize: "Minimieren",
    swatches: "Farbfelder",
    paragraph: "Absatz",
    quotation: "Zitat",
    heading1: "Kopf 1",
    heading2: "Kopf 2",
    heading3: "Kopf 3",
    heading4: "Kopf 4",
    heading5: "Kopf 5",
    heading6: "Kopf 6",
    disc: "Scheibe",
    circle: "Kreis",
    square: "Platz",
    number: "Anzahl",
    loweralpha: "Lower Alpha",
    upperalpha: "Ober Alpha",
    lowerroman: "Lower Roman",
    upperroman: "Ober Roman",
    none: "Keine",
    linktooltip: "ctrl + Klick Link zu folgen",
    charSpace: "Zeichen (mit Leerzeichen )",
    charNoSpace: "Zeichen (ohne Leerzeichen)",
    wordCount: "Wortzahl",
    right: "Recht",
    left: "links",
    center: "Center",
    FindAndReplace: "Suchen und Ersetzen",
    Find: "Finden",
    MatchCase: "Kleinschreibung",
    WholeWord: "Ganze Welt",
    ReplaceWith: "Ersetzen mit",
    Replace: "Ersetzen",
    ReplaceAll: "Alles ersetzen",
    FindErrorMsg: "Konnte den angegebenen Wort gefunden ."

};

var fileService = window.baseurl + "api/FileExplorer/FileOperations";

if (isRestrictCrossOrigin()) {
    //IE8, IE9 browser restrict CORS, so we set ajax request as JSONP to enable CORS
    var ajaxSettings = {
        read: {
            dataType: "jsonp"
        },
        createFolder: {
            dataType: "jsonp"
        },
        remove: {
            dataType: "jsonp"
        }
    };
    var ajaxSettings1 = {
        read: {
            dataType: "jsonp",
            jsonpCallback: "MyCallbackFunction1"
        },
        createFolder: {
            dataType: "jsonp"
        },
        remove: {
            dataType: "jsonp"
        }
    };
   // we have called "PerformJSONPAction" method to handle JSONP AJAX requests
    fileService = window.baseurl + "api/FileExplorer/FileOperations";
}

function isRestrictCrossOrigin() {
    browserInfo = ej.browserInfo();
    return (browserInfo.name == 'msie' && browserInfo.version <= 9) ? true : false;
}

var filePath= window.baseurl + "Content/FileBrowser/";

// RTE End

//TagCloud start

var websiteCollection = [
                    { text: "Google", url: "http://www.google.com", frequency: 12 },
                    { text: "All Things Digital", url: "http://allthingsd.com/", frequency: 3 },
                    { text: "Arts Technica", url: "http://arstechnica.com/", frequency: 8 },
                    { text: "Business Week", url: "http://www.businessweek.com/", frequency: 2 },
                    { text: "Yahoo", url: "http://in.yahoo.com/", frequency: 12 },
                    { text: "Center Networks", url: "http://www.centernetworks.com/", frequency: 5 },
                    { text: "Crave", url: "http://news.cnet.com/crave/", frequency: 8 },
                    { text: "Crunch Gear", url: "http://techcrunch.com/gadgets/", frequency: 20 },
                    { text: "Daily Tech", url: "http://www.dailytech.com/", frequency: 1 },
                    { text: "Electronista", url: "http://www.electronista.com/", frequency: 3 },
                    { text: "Engadget", url: "http://www.engadget.com/", frequency: 5 },
                    { text: "Gearlog", url: "http://www.gearlog.com/", frequency: 9 },
                    { text: "Information Week", url: "http://www.informationweek.com/", frequency: 0 },
                    { text: "PCWorld", url: "http://www.pcworld.com/", frequency: 11 },
                    { text: "Tech Republic", url: "http://techrepublic.com/", frequency: 3 },
                    { text: "Valleywag", url: "http://valleywag.gawker.com/", frequency: 6 },
                    { text: "Rediff", url: "http://in.rediff.com/", frequency: 9 },
                    { text: "WebProNews", url: "http://www.webpronews.com/", frequency: 2 }
];

var websites = [
                    { text: "جوجل", url: "http://www.google.com", frequency: 12 },
                    { text: "كل الأشياء الرقمية", url: "http://allthingsd.com/", frequency: 3 },
                    { text: "الفنون تكنيكا", url: "http://arstechnica.com/", frequency: 8 },
                    { text: "بيزنس ويك", url: "http://www.businessweek.com/", frequency: 2 },
                    { text: "ياهو", url: "http://in.yahoo.com/", frequency: 12 },
                    { text: "مركز الشبكات", url: "http://www.centernetworks.com/", frequency: 5 },
                    { text: "حن", url: "http://news.cnet.com/crave/", frequency: 8 },
                    { text: "جير أزمة", url: "http://techcrunch.com/gadgets/", frequency: 20 },
                    { text: "يوميا تك", url: "http://www.dailytech.com/", frequency: 1 },
                    { text: "التقنية بلا حدود", url: "http://www.engadget.com/", frequency: 5 },
                    { text: "الأسبوع المعلومات", url: "http://www.informationweek.com/", frequency: 0 },
                    { text: "إستخدام آمن", url: "http://www.pcworld.com/", frequency: 11 },
                    { text: "جمهورية التكنولوجيا", url: "http://techrepublic.com/", frequency: 3 },
                    { text: "الثعبان", url: "http://valleywag.gawker.com/", frequency: 6 },
                    { text: "ريديف", url: "http://in.rediff.com/", frequency: 9 }
];


//Tagcloud End

//Toolbar Start

var editItems = [{
    edid: "1",
    spriteCss: "editTools cursor",
    title: "Cursor",
}, {
    edid: "2",
    spriteCss: "editTools select",
    title: "Select",
}, {
    edid: "3",
    spriteCss: "editTools move",
    title: "Move",
}, {
    edid: "4",
    spriteCss: "editTools rectselect",
    title: "Rectselect",
}, {
    edid: "5",
    spriteCss: "editTools roundselect",
    title: "Roundselect",
}, {
    edid: "6",
    spriteCss: "editTools brush",
    title: "Brush",
}, {
    edid: "7",
    spriteCss: "editTools pen",
    title: "Pen",
}, {
    edid: "8",
    spriteCss: "editTools gradient",
    title: "Gradient",
}, {
    edid: "9",
    spriteCss: "editTools crop",
    title: "Crop",
}, {
    edid: "10",
    spriteCss: "editTools symbols",
    title: "Symbols",
}
];

var items = [{
    edid: "1",
    spriteCss: "editTools cursor",
    title: "Cursor",

}, {
    edid: "2",
    spriteCss: "editTools select",
    title: "Select",

}, {
    edid: "3",
    spriteCss: "editTools move",
    title: "Move",

}, {
    edid: "4",
    spriteCss: "editTools rectselect",
    title: "Rectselect",

}, {
    edid: "5",
    spriteCss: "editTools roundselect",
    title: "Roundselect",

}, {
    edid: "6",
    spriteCss: "editTools brush",
    title: "Brush",

}, {
    edid: "7",
    spriteCss: "editTools pen",
    title: "Pen",

}, {
    edid: "8",
    spriteCss: "editTools gradient",
    title: "Gradient",

}, {
    edid: "9",
    spriteCss: "editTools crop",
    title: "Crop",

}, {
    edid: "10",
    spriteCss: "editTools symbols",
    title: "Symbols",

}
];

//Toolbar End

//Uploadbox Start

var savefiles = window.baseurl + "api/uploadbox/Save";

var removefiles = window.baseurl + "api/uploadbox/Remove";

//Uploadbox End

// ComboBox Start

var combo_group_fields ={ groupBy: "category" , text: "text"};

var combo_icons = [
        { class: 'mailtools categorize', name: 'Categorize and Move' }, { class: 'mailtools done', name: 'Done' },
        { class: 'mailtools flag', name: 'Flag & Move' }, { class: 'mailtools forward', name: 'Forward' },
        { class: 'mailtools movetofolder', name: 'Move to Folder' }, { class: 'mailtools newmail', name: 'New E-mail' },
        { class: 'mailtools meeting', name: 'New Meeting' }, { class: 'mailtools reply', name: 'Reply & Delete' }
    ];
	
var combo_icons_fields = { iconCss: "class" , text: "name"};

var combo_template_fields ={ text: "text"};

var combo_template = [
        { text: 'John Linden', eimg: '7', status: 'Available', country: 'USA' },
        { text: 'Erik Linden', eimg: '3', status: 'Available', country: 'England' },
        { text: 'Leverling', eimg: '6', status: 'Available', country: 'England' },
        { text: "Suyama", eimg: "5", status: "Available", country: 'USA' }
    ];
	
var combo_filtering = [{ index: "s11", countryName: "Hawaii" },
						{ index: "s12", countryName: "Idaho" }, { index: "s13", countryName: "Illinois" },
						{ index: "s14", countryName: "Indiana" }, { index: "s15", countryName: "Iowa" },
						{ index: "s16", countryName: "Kansas" }, { index: "s17", countryName: "Kentucky" },
						{ index: "s18", countryName: "Louisiana" }, { index: "s19", countryName: "Maine" },
						{ index: "s20", countryName: "Maryland" }, { index: "s21", countryName: "Massachusetts" },
						{ index: "s22", countryName: "Michigan" }, { index: "s23", countryName: "Montana" },
						{ index: "s24", countryName: "New Mexico" }, { index: "25", countryName: "New York" },
						{ index: "26", countryName: "North Carolina" }, { index: "s27", countryName: "Nevada" },
						{ index: "s28", countryName: "New Jersey" }, { index: "s29", countryName: "Pennsylvania" },
						{ index: "s30", countryName: "Ohio" }, { index: "s31", countryName: "Oklahoma" },
						{ index: "s32", countryName: "Oregon" },
						{ index: "s33", countryName: "Rhode Island" },
						{ index: "s34", countryName: "South Carolina" }, { index: "s35", countryName: "South Dakota" },
						{ index: "s36", countryName: "Tennessee" }, { index: "s37", countryName: "Texas" },
						{ index: "s38", countryName: "Utah" },
						{ index: "s39", countryName: "Vermont" }, { index: "s40", countryName: "Virginia" },
						{ index: "s41", countryName: "Washington" }, { index: "s42", countryName: "West Virginia" },
						{ index: "s43", countryName: "Wisconsin" }, { index: "s44", countryName: "Wyoming" },
						{ index: "s1", countryName: "Alabama" }, { index: "s2", countryName: "Alaska" },
						{ index: "s3", countryName: "Arizona" }, { index: "s4", countryName: "Arkansas" },
						{ index: "s5", countryName: "California" }, { index: "s6", countryName: "Colorado" },
						{ index: "s7", countryName: "Connecticut" }, { index: "s8", countryName: "Delaware" },
						{ index: "s9", countryName: "Florida" }, { index: "s10", countryName: "Georgia" }
								];
var combo_filtering_fields = { text: "countryName", value: "index" };

var combo_filtering_event = function(e){
            var query = new ej.Query().select(['countryName', 'index']);
			query = (e.text !== '') ? query.where('countryName', 'startswith', e.text, true) : query;
			e.updateData(e.model.dataSource, query);
        };
var combo_cascade_event = function (e) {
        var ctry = $('#countryList').data("ejComboBox");
        ctry.option({ enabled: true, query: new ej.Query().where('parentId', 'equal', e.model.value) ,value:null});
    }

// ComboBox End