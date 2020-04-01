"use strict";
var data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));
var editItems = [
          { field: "Id", editType: ej.Kanban.EditingType.String,validationRules: { required: true, number: true }},
          { field: "Status", editType: ej.Kanban.EditingType.Dropdown },
          { field: "Assignee", editType: ej.Kanban.EditingType.Dropdown },
          { field: "Estimate", editType: ej.Kanban.EditingType.Numeric, editParams: { decimalPlaces: 2 },validationRules: {range: [0, 1000]}},
          { field: "Summary", editType: ej.Kanban.EditingType.TextArea,validationRules: { required: true}}
];
                        
ReactDOM.render(
    <EJ.Kanban id="dialogediting" dataSource = {data} keyField = "Status" allowTitle={true} isResponsive={true} fields-content= "Summary" fields-primaryKey = "Id" fields-imageUrl="ImgUrl" editSettings-editItems={editItems} editSettings-allowEditing={true} editSettings-allowAdding={true}>
            <columns>
	          <column headerText="Backlog" key = "Open" showAddButton={true} />
		  <column headerText="In Progress" key = "InProgress" showAddButton={true} />
                  <column headerText="Done" key="Close" showAddButton={true}/>
	    </columns>
   </EJ.Kanban>,
document.getElementById('kanbanboard-dialogediting')
);