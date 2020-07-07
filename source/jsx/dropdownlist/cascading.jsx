var CascadingDropDownList = React.createClass({
    onChange: function () {
        var ctry = $('#countryList').data("ejDropDownList");
        ctry.element.val("");
    },
    render: function () {
        return (   
            <div  id="dropdownlist_cascading">
				<span>Select Group</span><br />  
                <EJ.DropDownList dataSource={groups} fields-value="parentId" fields-text="text" cascadeTo="countryList" change="onChange" width="100%">
                </EJ.DropDownList><br />
				<span>Select Country</span><br />
                <EJ.DropDownList id="countryList" dataSource={countries} enabled={false} width="100%">
                </EJ.DropDownList>
            </div>
        );
    }
});  

ReactDOM.render(<CascadingDropDownList />, document.getElementById('dropdownlist-cascading'));