var localServ, ajaxDataType;
localServ = window.baseurl + "api/FileExplorer/FileOperations";
var browname = /MSIE 8.0/i.test(window.navigator.userAgent) || /MSIE 9.0/i.test(window.navigator.userAgent) ? true : false;
if (browname) {
    localServ = window.baseurl + "api/FileExplorer/FileOperationsCors";
    ajaxDataType = "jsonp";
}
var path = window.baseurl + "Content/FileBrowser/";
var gridSettings = { columns: [{ field: "name", headerText: "Name", width: "30%" }, { field: "dateModified", headerText: "Änderungsdatum", width: "30%" }, { field: "type", headerText: "Art", width: "20%" }, { field: "size", headerText: "Größe", width: "20%" }] };
ej.FileExplorer.Locale["de-DE"] = {
    EmptyResult: "Keine Artikel entsprechen Ihrer Suche nach",
    EmptyFolder: "Dieser Ordner ist leer",
    ProtectedFolder: "Sie ist nicht die Berechtigung diesen Ordner zugreifen",
    Back: "rückwärts",
    Forward: "Nach Vorne",
    Upward: "nach oben",
    Refresh: "erfrischen",
    Addressbar: "Adressleiste",
    Upload: "hochladen",
    Rename: "umbenennen",
    Delete: "löschen",
    Download: "herunterladen",
    Error: "Fehler",
    Cut: "Schnitt",
    Copy: "Kopie",
    Paste: "kleben",
    Details: "Einzelheiten",
    Searchbar: "Suchleiste",
    Open: "geöffnet",
    Search: "Suche",
    NewFolder: "neuer Ordner",
    SelectedFileUrl: "Web-Adresse",
    SelectedFileName: "Titel",
    ImageWidth: "Breite",
    ImageHeight: "Höhe",
    Insert: "Insert",
    Cancel: "Rückgängig Machen",
    RenameAlert: "Bitte geben Sie neuen Namen",
    NewFolderAlert: "Geben Sie den neuen Ordnernamen ein",
    ContextMenuOpen: "geöffnet",
    ContextMenuNewFolder: "Neuer Ordner",
    ContextMenuDelete: "löschen",
    ContextMenuRename: "umbenennen",
    ContextMenuUpload: "hochladen",
    ContextMenuDownload: "Herunterladen",
    ContextMenuCut: "Schnitt",
    ContextMenuCopy: "Kopie",
    ContextMenuPaste: "kleben",
    ContextMenuGetinfo: "Ausführliche Infos",
    ContextMenuRefresh: "erfrischen",
    ContextMenuOpenFolderLocation: "Öffnen Sie Ordner",
    ContextMenuSortBy: "Sortiere nach",
    SortBy: "Sortiere nach",
    Item: " Artikel",
    Items: " Angebote",
    Selected: "ausgewählt",
    Permission: "Erlaubnis",
    OkButton: "Ok",
    CancelButton: "Rückgängig machen",
    YesToAllButton: "Ja zu allem",
    NoToAllButton: "Nein, alle",
    YesButton: "Ja",
    NoButton: "Unterlassen Sie",
    Size: "Größe",
    Grid: "Gitter Ansicht",
    Tile: "Kachelansicht",
    LargeIcons: "Große Icons",
    Layout: "Gestaltung",
    SkipButton: "Überspringen",
    ErrorOnFolderCreation: "Dieses Ziel ist bereits ein Ordner mit dem Namen '{0}'. Möchten Sie diesen Ordner Inhalte mit bereits vorhandenen Ordner '{0}' zusammenführen möchten?",
    InvalidFileName: "Ein Dateiname darf keines der folgenden Zeichen enthalten: \\/:*?\"<>|",
    GeneralError: "Bitte beachten Sie Browser Konsolenfenster für weitere Informationen",
    ErrorPath: "Fileexplorer kann nicht finden '{0}'. Überprüfen Sie die Schreibweise und versuchen Sie es erneut.",
    ReplaceAlert: "Datei mit dem Namen '{0}' ist bereits vorhanden. Ersetzen Sie alte Datei durch eine neue?",
    DuplicateAlert: "Es gibt bereits eine Datei mit dem gleichen Namen '{0}'. Möchten Sie diese Datei mit doppelten Namen erstellen möchten",
    DuplicateFileCreation: "Es gibt bereits eine Datei mit dem gleichen Namen in diesem Ort. Möchten Sie umbenennen '{0}' bis '{1}' suchen?",
    DeleteFolder: " Sind Sie sicher, dass Sie löschen möchten ",
    DeleteMultipleFolder: "Sind Sie sicher, dass Sie diese {0} Einträge löschen?",
    CancelPasteAction: "Der Zielordner ist ein Unterordner des Quellordners.",
    Name: "Namen",
    Location: "Ort",
    Type: "Gegenstandsart",
    Created: "Erstellt",
    Modified: "geändert",
    DialogCloseToolTip: "schließen",
    UploadSettings: {
        buttonText: {
            upload: "hochladen",
            browse: "blättern",
            cancel: "Rückgängig Machen",
            close: "schließen"
        },
        dialogText: {
            title: "hochladen Box",
            name: "Name",
            size: "Größe",
            status: "Status"
        },
        cancelToolTip: "stornieren",
        removeToolTip: "entfernen",
        retryToolTip: "wiederholen",
        completedToolTip: "fertiggestellt",
        failedToolTip: "fehlgeschlagen",
        closeToolTip: "schließen"
    }
};
var FileExplorer = React.createClass({
    
    render: function () {
        return (
            <div className="content-container-fluid">
                <span className="text">Localization for de-DE Culture</span><br /><br />
                    <div className="control">
                <EJ.FileExplorer id="localization" ajaxDataType={ajaxDataType} ajaxAction={localServ} isResponsive={true} width="100%" minWidth="150px" fileTypes="*.png, *.gif, *.jpg, *.jpeg, *.docx" path={path} locale="de-DE" gridSettings={gridSettings} >
                </EJ.FileExplorer>,
            </div>
           
             </div>
            );
    }
});
ReactDOM.render(<FileExplorer />, document.getElementById('fileexplorer-localization'));